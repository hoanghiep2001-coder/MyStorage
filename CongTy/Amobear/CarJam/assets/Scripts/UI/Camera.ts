
import { _decorator, Component, log, Node, tween, Vec3, Camera, easing } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Camera
 * DateTime = Thu Dec 19 2024 11:05:27 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = Camera.ts
 * FileBasenameNoExtension = Camera
 * URL = db://assets/Scripts/UI/Camera.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('Camera')
export class CameraComponent extends Component {

    originalFov: number = null;

    cameraComp: Camera = null;


    protected start() {
        this.cameraComp = this.node.getComponent(Camera);
        this.originalFov = this.cameraComp.fov;
    }


    private vibration(): void {
        tween(this.cameraComp)
            .to(0.1, { fov: this.originalFov + 1 }, { easing: easing.smooth })
            .to(0.1, { fov: this.originalFov }, { easing: easing.smooth })
            .start();
    }


    protected update(dt: number): void {
        if (GameInfo.activeVibration) {
            GameInfo.activeVibration = false;
            this.vibration();
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
