import { _decorator, Animation, Camera, Component, EventTouch, geometry, instantiate, log, Node, PhysicsSystem, Prefab } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
import { GameController } from '../../../Controller/GameController';
import { Utils } from '../../../Others/Utils';
import { BoxBehavior } from '../Box/BoxBehavior';
import { PA_30_CameraController } from '../Controller/PA_30_CameraController';
import { HayChonGiaDung } from '../Others/HayChonGiaDung';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_30_HideMask
 * DateTime = Sat Dec 28 2024 14:36:14 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_30_HideMask.ts
 * FileBasenameNoExtension = PA_30_HideMask
 * URL = db://assets/Script/Options/PA_30/GamePlay/PA_30_HideMask.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_30_HideMask')
export class PA_30_HideMask extends Component {

    @property(GameController)
    GameController: GameController = null;
    @property(Camera)
    Cam_3D: Camera = null;

    @property(HayChonGiaDung)
    HayChonGiaDung: HayChonGiaDung = null;


    // @property(Prefab)
    // Line: Prefab = null;


    isChooseBox: boolean = false;
    isPlayingDetachCandy: boolean = false;
    boxChoosen: BoxBehavior = null;


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        // let test: Node = null;

        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private touchStart(event: EventTouch): void {
        if (!GameInfo.isCanTouch || !GameInfo.IsPlaying) return;

        // IronSource.handleIronSourcePlaySound();

        if (GameInfo.isToStore || GameInfo.IsShowPopupInstall) {
            // applovin, mtg
            // this.GameController.installHandle();
            return;
        }


        if(GameInfo.Squid_PA_30.isDetachCandy) {
            this.HayChonGiaDung.boxChoosen = this.boxChoosen;
            const detachResult = this.HayChonGiaDung.getCurrentRollResult();

            if(!detachResult) this.HayChonGiaDung.wrong();
            else this.HayChonGiaDung.nextDetach();
           
            return;
        }


        if(this.isChooseBox) {
            if(!this.isPlayingDetachCandy) {
                GameInfo.Squid_PA_30.isStartPlaying = true;
                this.isPlayingDetachCandy = true;
                this.boxChoosen.setAnimDetachCandyState("play");
                // this.
            }
            this.boxChoosen.setAnimDetachCandyState("resume");
            return;
        }

        this.getRaycastResult(event);
    }


    private getRaycastResult(touchPos: EventTouch): void {
        let ray = new geometry.Ray();
        this.Cam_3D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray);
        // The following parameters are optional
        const mask = 0xffffffff;
        const maxDistance = 10000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            const collider = raycastClosestResult.collider;

            if (collider.node.name.includes("Box")
            ) {
                this.isChooseBox = true;

                const boxWorldPos = collider.node.worldPosition;
                const boxBehavior = collider.getComponent(BoxBehavior);
                const cameraController = this.Cam_3D.getComponent(PA_30_CameraController);

                this.boxChoosen = boxBehavior;

                boxBehavior.activeUnBoxAnim();
                cameraController.target = boxBehavior.needle;
                cameraController.handleGoToBox(boxWorldPos);
                cameraController.boxToTarget = this.boxChoosen.node;
                // const boxIndex = Utils.getTrailingNumber(collider.node.name);
                // collider.getComponent(animation)
            }
        }
    }


    private touchEnd(): void {
        if(this.isChooseBox) {
            this.boxChoosen.setAnimDetachCandyState("pause");
            // this.boxChoosen.KeoSao.getComponent(Animation).pause()
            return;
        }
    }


    private createLine(): void {
        // let needleworldPos = this.boxChoosen.needle.getPosition();
        // let newLine = instantiate(this.Line);
        // newLine.setRotationFromEuler(-90,0,0);
        // newLine.setScale(0.44, 0.44, 0.7049 * 0.44 / 100);
        // newLine.setPosition(needleworldPos.x + 0.08, needleworldPos.y + 0.24, needleworldPos.z + 0.13);
        // newLine.parent = this.boxChoosen.node;
        // log(newLine.getPosition())
        // GameInfo.Squid_PA_30.lineRenderPoints.push(this.boxChoosen.needle.worldPosition);
    }


    // protected update(dt: number): void {
        // if(GameInfo.Squid_PA_30.isDetachCandy) this.createLine();
    // }
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
