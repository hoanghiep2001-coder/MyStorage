import { _decorator, Component, log, Node, v3, Vec3 } from 'cc';
import { EasyController, EasyControllerEvent } from '../joystick/EasyController';
import { GameInfo } from '../CONST/GameInfo';
const { ccclass, property } = _decorator;

const v3_1 = v3();
const v3_2 = v3();

const ROTATION_STRENGTH = 20.0;


@ccclass('ThirdPersonCamera')
export class ThirdPersonCamera extends Component {
    @property(Node)
    target: Node;

    @property(Node)
    fakeTarget: Node;

    @property
    lookAtOffset: Vec3 = v3();

    @property
    zoomSensitivity: number = 1.0;

    @property
    lenMin: number = 1.0;

    @property
    lenMax: number = 10.0;

    @property
    len: number = 5;

    @property
    rotateVHSeparately: boolean = false;

    @property
    tweenTime: number = 0.2;


    private _targetLen: number = 0;
    private _targetAngles: Vec3 = v3();


    start() {
        EasyController.on(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);

        this._targetLen = this.len;
        this._targetAngles.set(this.node.eulerAngles);
    }

    onDestroy() {
        EasyController.off(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);
    }

    lateUpdate(deltaTime: number) {
        if (!this.target) {
            return;
        }
        const t = Math.min(deltaTime / this.tweenTime, 1.0);

        //rotation
        v3_1.set(this.node.eulerAngles);
        Vec3.lerp(v3_1, v3_1, this._targetAngles, t);
        this.node.setRotationFromEuler(v3_1);

        //lookat
        if(GameInfo.GTA_PA_08.isHitBrakeBtnFlag) v3_1.set(this.fakeTarget.worldPosition);
        else v3_1.set(this.target.worldPosition);
        v3_1.add(this.lookAtOffset);

        //len and position
        this.len = this.len * (1.0 - t) + this._targetLen * t;
        v3_2.set(this.node.forward);
        v3_2.multiplyScalar(this.len);

        v3_1.subtract(v3_2);
        this.node.setPosition(v3_1);

        // log(this.node.getPosition().z)
    }

    onCameraRotate(deltaX: number, deltaY: number) {
        let eulerAngles = this.node.eulerAngles;
        if (this.rotateVHSeparately) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                deltaY = 0;
            }
            else {
                deltaX = 0;
            }
        }
        this._targetAngles.set(eulerAngles.x + deltaX * ROTATION_STRENGTH, eulerAngles.y + deltaY * ROTATION_STRENGTH, eulerAngles.z);
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
