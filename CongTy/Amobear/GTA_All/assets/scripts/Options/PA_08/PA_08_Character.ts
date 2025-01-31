import { _decorator, Collider, Component, Node, ITriggerEvent, RigidBody, Quat,  math, Vec3, log, ICollisionEvent, tween, easing } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
import { SoundController } from '../../Controller/SoundController';
const { ccclass, property } = _decorator;


@ccclass('PA_08_Character')
export class PA_08_Character extends Component {

    @property(Node)
    checkPoint_1: Node = null;

    @property(Node)
    checkPoint_2: Node = null;

    rigidbody: RigidBody = null;

    isCanMove: boolean = false;
    speed: number = 50;
    currentPos: Vec3 = null;
    _collider: Collider = null;
    movingCount: number = 0;

    targetToTurnStep: number = 136;


    targetQuat: Quat = new Quat();
    currentQuat: Quat = new Quat();
    isGotoPoint2Flag: boolean = false;


    protected start(): void {
        this.rigidbody = this.getComponent(RigidBody);
        this.currentPos = this.node.getPosition();

        this._collider = this.getComponent(Collider);
        this._collider.on('onTriggerEnter', (target: ITriggerEvent) => {
            if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
                console.log("Check point!");
                this.checkPoint_1.active = false;
            }
        });
    }


    private move(): void {
        this.movingCount += 1;
        
        // this.rigidbody.setLinearVelocity(new Vec3(0, 0, this.speed));
        this.currentPos = this.node.getPosition();
        this.node.setPosition(this.currentPos.x, this.currentPos.y, this.currentPos.z + 0.3);

        if(this.movingCount >= this.targetToTurnStep) {
            GameInfo.GTA_PA_08.isHitBrakeBtn = false;
            this.checkPoint_1.active = false;
            GameInfo.GTA_PA_08.isTouchCheckPointFlag = true;
            // this.handleGoToCheckpoint_2();
        }

    }


    private handleGoToCheckpoint_2(): void {
        if(this.isGotoPoint2Flag) return;

        this.isGotoPoint2Flag = true;

        tween(this.node)
        .to(0.8, {eulerAngles: new Vec3(0, -90, 0), position: this.checkPoint_2.position}, {easing: easing.smooth})
        .start();
    }


    protected update(dt: number): void {
        GameInfo.GTA_PA_08.isHitBrakeBtn && this.move();
        GameInfo.GTA_PA_08.isHitDogeCopsBtn && this.handleGoToCheckpoint_2();
        // this.currentPos = this.node.getPosition();
        // this.node.setPosition(this.currentPos.x, this.currentPos.y, this.currentPos.z + 0.2);
        // this.isCanMove = true;
    }
}

