
import { _decorator, Component, director, EventTouch, input, Input, Node, Scene, UITransform, Touch, Vec3, BoxCollider, CapsuleCollider, ITriggerEvent, Tween, tween, log } from 'cc';
import { EasyController, EasyControllerEvent } from './EasyController';
import { CharacterController } from '../CharacterController';
import { CTA } from '../CTA';
const { ccclass, property } = _decorator;
declare var window;

@ccclass('JoystickController')
export class JoystickController extends Component {

    @property(CharacterController)
    charCtrl: CharacterController = null;

    private _ctrlRoot: UITransform = null;
    private _ctrlPointer: Node = null;
    private _checkerCamera: UITransform = null;

    private _cameraSensitivity: number = 0.1;
    private _distanceOfTwoTouchPoint: number = 0;

    private _movementTouch: Touch = null;
    private _cameraTouchA: Touch = null;
    private _cameraTouchB: Touch = null;

    private _scene: Scene = null;

    // Tutorial
    @property(Node)
    tutorialUI1: Node = null;
    @property(Node)
    tutorialUI4: Node = null;
    @property(CTA)
    cta: CTA = null;
    @property(Node)
    tutorial3D: Node = null;

    hasStarted = false;
    isScheduled = false;
    playAd = false;


    start() {
        // let checkerCamera = this.node.getChildByName('camera_checker').getComponent(UITransform);
        // checkerCamera.node.on(Input.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
        // checkerCamera.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
        // checkerCamera.node.on(Input.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
        // checkerCamera.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);

        // let checkerMovement = this.node.getChildByName('movement_checker').getComponent(UITransform);
        // checkerMovement.node.on(Input.EventType.TOUCH_START, this.onTouchStart_Movement, this);
        // checkerMovement.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
        // checkerMovement.node.on(Input.EventType.TOUCH_END, this.onTouchUp_Movement, this);
        // checkerMovement.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);


        // this._checkerCamera = checkerCamera;

        // this._ctrlRoot = this.node.getChildByName('ctrl').getComponent(UITransform);
        // this._ctrlRoot.node.active = true;
        // this._ctrlPointer = this._ctrlRoot.node.getChildByName('pointer');

        // this._scene = director.getScene();
    }

    update(dt: number) {
        // if (this.hasStarted == true && this.charCtrl.isCheckpoint == false) {
        //     this.unschedule(this.showTutSchedule);
        // } else if (this.hasStarted == false && this.charCtrl.isCheckpoint == false && this.tutorialUI1.active == false) {
        //     this.scheduleOnce(this.showTutSchedule, 3);
        // }

        // if (this.playAd == true && this.tutorial3D.active == true) {
        //     this.scheduleOnce(this.endGameSchedule, 10);
        // }
        // else if (this.playAd == true && this.tutorial3D.active == false) {
        //     this.unschedule(this.endGameSchedule);
        // }
    }

    /****
     * ----------------------------------------------
     *                                              |
     *                                              |
     *            1.Character Movement              |
     *                                              |
     *                                              |
     * ----------------------------------------------
     ****/
    onTouchStart_Movement(event: EventTouch) {
        let touches = event.getTouches();

        log("alo")

        for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let x = touch.getUILocationX();
            let y = touch.getUILocationY();
            if (!this._movementTouch) {
                //we sub halfWidth,halfHeight here.
                //because, the touch event use left bottom as zero point(0,0), ui node use the center of screen as zero point(0,0)
                //this._ctrlRoot.setPosition(x - halfWidth, y - halfHeight, 0);

                let halfWidth = this._checkerCamera.width / 2;
                let halfHeight = this._checkerCamera.height / 2;

                // this._ctrlRoot.node.active = true;
                // this._ctrlRoot.node.setPosition(x - halfWidth, y - halfHeight, 0);
                this._ctrlPointer.setPosition(0, 0, 0);
                this._movementTouch = touch;
            }
        }

        this.playAd = true;
    }

    onTouchMove_Movement(event: EventTouch) {
        // tutorial
        this.tutorialUI1.active = false;
        this.tutorialUI4.active = false;
        this.hasStarted = true;

        let touches = event.getTouches();
        for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
                let halfWidth = this._checkerCamera.width / 2;
                let halfHeight = this._checkerCamera.height / 2;
                let x = touch.getUILocationX();
                let y = touch.getUILocationY();

                let pos = this._ctrlRoot.node.position;
                let ox = x - halfWidth - pos.x;
                let oy = y - halfHeight - pos.y;

                let len = Math.sqrt(ox * ox + oy * oy);
                if (len <= 0) {
                    return;
                }

                let dirX = ox / len;
                let dirY = oy / len;
                let radius = this._ctrlRoot.width / 2;
                if (len > radius) {
                    len = radius;
                    ox = dirX * radius;
                    oy = dirY * radius;
                }

                this._ctrlPointer.setPosition(ox, oy, 0);

                // degree 0 ~ 360 based on x axis.
                let degree = Math.atan(dirY / dirX) / Math.PI * 180;
                if (dirX < 0) {
                    degree += 180;
                }
                else {
                    degree += 360;
                }

                this._scene.emit(EasyControllerEvent.MOVEMENT, degree, len / radius);
            }
        }
    }

    onTouchUp_Movement(event: EventTouch) {
        // check tut callback
        this.hasStarted = false;

        log("Check")

        let touches = event.getTouches();
        for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
                this._scene.emit(EasyControllerEvent.MOVEMENT_STOP);
                this._movementTouch = null;
                // this._ctrlRoot.node.active = true;
                this._ctrlPointer.setPosition(Vec3.ZERO);
            }
        }
    }

    showTutSchedule() {
        this.tutorialUI1.active = true;
        this.tutorialUI4.active = true;
    }

    endGameSchedule() {
        // if (this.cta.node.active == false)
            // this.cta.node.active = true;

        // this.cta.onTouchStart();
        // window.gameEnd && window.gameEnd();
    }

    /****
     * ----------------------------------------------
     *                                              |
     *                                              |
     *            2.Camera Rotation Zone            |
     *                                              |
     *                                              |
     * ----------------------------------------------
     ****/
    private getDistOfTwoTouchPoints(): number {
        let touchA = this._cameraTouchA;
        let touchB = this._cameraTouchB;
        if (!touchA || !touchB) {
            return 0;
        }
        let dx = touchA.getLocationX() - touchB.getLocationX();
        let dy = touchB.getLocationY() - touchB.getLocationY();
        return Math.sqrt(dx * dx + dy * dy);
    }

    private onTouchStart_CameraCtrl(event: EventTouch) {
        let touches = event.getAllTouches();
        this._cameraTouchA = null;
        this._cameraTouchB = null;
        for (let i = touches.length - 1; i >= 0; i--) {
            let touch = touches[i];
            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
                continue;
            }
            if (this._cameraTouchA == null) {
                this._cameraTouchA = touches[i];
            }
            else if (this._cameraTouchB == null) {
                this._cameraTouchB = touches[i];
                break;
            }
        }
        this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
    }

    private onTouchMove_CameraCtrl(event: EventTouch) {
        let touches = event.getTouches();
        for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID();

            //only one touch, do camera rotate.
            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
                let dt = touch.getDelta();
                let rx = dt.y * this._cameraSensitivity;
                let ry = -dt.x * this._cameraSensitivity;
                this._scene.emit(EasyControllerEvent.CAMERA_ROTATE, rx, ry);
            }
        }
    }

    private onTouchUp_CameraCtrl(event: EventTouch) {
        let touches = event.getAllTouches();
        let hasTouchA = false;
        let hasTouchB = false;
        for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID();
            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
                hasTouchA = true;
            }
            else if (this._cameraTouchB && touchID == this._cameraTouchB.getID()) {
                hasTouchB = true;
            }
        }

        if (!hasTouchA) {
            this._cameraTouchA = null;
        }
        if (!hasTouchB) {
            this._cameraTouchB = null;
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
