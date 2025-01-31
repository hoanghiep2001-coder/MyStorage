import { _decorator, AnimationClip, Camera, CapsuleCollider, Collider, Component, find, ICollisionEvent, ITriggerEvent, log, Node, Quat, RigidBody, SkeletalAnimation, tween, Tween, v3, Vec3 } from 'cc';
import { EasyController, EasyControllerEvent } from './joystick/EasyController';
import { GameInfo } from './CONST/GameInfo';
import { SoundController } from './Controller/SoundController';
const { ccclass, property } = _decorator;

const v3_1 = v3();

enum characterAnim {
    moto_sit = "Moto_sit",
    idle = "main_idle",
}


@ccclass('CharacterController')
export class CharacterController extends Component {
    @property(Camera)
    mainCamera: Camera;

    @property
    velocity = 1.0;

    @property
    jumpVelocity = 1.0;

    @property
    maxJumpTimes: number = 0;
    private _curJumpTimes: number = 0;

    @property(AnimationClip)
    idleAnimClip: AnimationClip;

    @property(AnimationClip)
    moveAnimClip: AnimationClip;

    // Tutorial
    @property(Node)
    tutorial3D: Node = null;


    _rigidBody: RigidBody = null;
    _collider: Collider = null;
    _isMoving: boolean = false;
    _velocityScale: number = 1.0;

    _isInTheAir: boolean = false;
    _curentVerticalVelocity: number = 0.0;

    private _anim: SkeletalAnimation;
    private tweenThen!: Tween<Node>;

    isRidingMoto: boolean = false;

    public isCheckpoint = false;


    start() {
        if (!this.mainCamera) {
            this.mainCamera = find('Main Camera')?.getComponent(Camera);
        }
        this._rigidBody = this.node.getComponent(RigidBody);
        // this._anim = this.node.getComponent(SkeletalAnimation);
        // if (this._anim) {
        //     let clipArr = [
        //         this.idleAnimClip,
        //         this.moveAnimClip
        //     ];
        //     for (let i = 0; i < clipArr.length; ++i) {
        //         let clip = clipArr[i];
        //         if (clip) {
        //             if (!this._anim.getState(clip.name)) {
        //                 this._anim.addClip(clip);
        //             }
        //         }
        //     }
        //     if (this.idleAnimClip) {
        //         this._anim.play(this.idleAnimClip.name);
        //     }
        // }

        EasyController.on(EasyControllerEvent.MOVEMENT, this.onMovement, this);
        EasyController.on(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);

        this._collider = this.getComponent(Collider);
        this._collider.on('onCollisionEnter', (target: ICollisionEvent) => {
            if (target.otherCollider != target.selfCollider) {
                this.onLand();
            }
        });

        this.checkTrigger();
    }

    checkTrigger() {
        // Trigger
        this._collider = this.getComponent(Collider);
        this._collider.on('onTriggerEnter', (target: ITriggerEvent) => {
            if (target.otherCollider.node.name == 'Checkpoint Collider') {
                console.log("Check point!");
                this.isCheckpoint = true;

                // disable tutorial
                this.tutorial3D.active = false;
            }
        });
    }

    onDestroy() {
        EasyController.off(EasyControllerEvent.MOVEMENT, this.onMovement, this);
        EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);
    }

    update(deltaTime: number) {
        if (this.node.getComponent(RigidBody).enabled == true) {
            if (this._isMoving) {
                this._tmp.set(this.node.forward);
                this._tmp.multiplyScalar(-1.0);
                this._tmp.multiplyScalar(this.velocity * this._velocityScale);

                this._tmp.multiplyScalar(deltaTime);
                this._tmp.add(this.node.position);
                this.node.setPosition(this._tmp);
            }
        }

        if (this._isInTheAir) {
            // if(this.jumpBeginAnimClip && this._anim){
            //     let state = this._anim.getState(this.jumpBeginAnimClip.name);
            //     if(state.isPlaying && state.current >= state.duration){
            //         if(this.jumpLoopAnimClip){
            //             this._anim.crossFade(this.jumpLoopAnimClip.name);
            //         }
            //     }
            // }

            if (!this._rigidBody) {
                this._curentVerticalVelocity -= 9.8 * deltaTime;

                let oldPos = this.node.position;
                let nextY = oldPos.y + this._curentVerticalVelocity * deltaTime;
                if (nextY <= 0) {
                    this.onLand();
                    nextY = 0.0;
                }
                this.node.setPosition(oldPos.x, nextY, oldPos.z);
            }
        }

        if((GameInfo.currentOption === 8 || GameInfo.currentOption === 9)) {
            if(GameInfo.isOnMotobike && !this.isRidingMoto) {
                SoundController.Instance(SoundController).playSound("WhistlingSound");
                this._collider.center.x = -1.2;
                this._rigidBody.enabled = false;
                this._collider.enabled = false;
                this.isRidingMoto = true;
                this.getComponent(SkeletalAnimation).play(characterAnim.moto_sit);
                // this.motobikeCollider.active = true;
            }
        }
  
    }

    onLand() {
        this._isInTheAir = false;
        this._curentVerticalVelocity = 0.0;
        this._curJumpTimes = 0;
        if (this.moveAnimClip) {
            if (this._isMoving) {
                this._anim.crossFade(this.moveAnimClip.name, 0.5);
            }
            else {
                this._anim.crossFade(this.idleAnimClip.name, 0.5);
            }
        }
    }

    private _tmp = v3();
    onMovement(degree: number, offset: number) {

        log("alo")

        let cameraRotationY = 0;
        if (this.mainCamera) {
            cameraRotationY = this.mainCamera.node.eulerAngles.y;
        }
        this._velocityScale = offset;

        this._tmp.set(0, cameraRotationY + degree - 90 + 180, 0);
        this.node.setRotationFromEuler(this._tmp);
        if (this._anim) {
            if (!this._isMoving && !this._isInTheAir) {
                if (this.moveAnimClip) {
                    this._anim.crossFade(this.moveAnimClip.name, 0.5);
                }
            }
            if (this.moveAnimClip) {
                // this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale;
                this._anim.getState(this.moveAnimClip.name).speed = 1.2;
            }
        }
        this._isMoving = true;

    }

    onMovementRelease() {
        if (!this._isInTheAir && this.idleAnimClip) {
            this._anim?.crossFade(this.idleAnimClip.name, 0.5);
        }
        this._isMoving = false;
        if (this._rigidBody) {
            this._rigidBody.setLinearVelocity(Vec3.ZERO);
        }
    }
}

