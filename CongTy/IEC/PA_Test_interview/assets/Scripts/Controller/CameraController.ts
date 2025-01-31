
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CameraController
 * DateTime = Wed Jan 01 2025 11:54:35 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = CameraController.ts
 * FileBasenameNoExtension = CameraController
 * URL = db://assets/Scripts/Controller/CameraController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CameraController')
export class CameraController extends Component {

    @property(Node)
    target: Node = null;


    _targetWorldPosition: Vec3 = new Vec3();
    public followDistance: number = 10;
    public followHeight: number = 16; 

    protected start(): void {
        
    }


    protected update(dt: number): void {
        if (this.target) {

            const cameraPos = new Vec3(
                this._targetWorldPosition.x - this.followDistance,
                this._targetWorldPosition.y + this.followHeight,
                this._targetWorldPosition.z 
            );

            this.target.getWorldPosition(this._targetWorldPosition);

            this.node.setWorldPosition(cameraPos)

            this.node.lookAt(this._targetWorldPosition);
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
