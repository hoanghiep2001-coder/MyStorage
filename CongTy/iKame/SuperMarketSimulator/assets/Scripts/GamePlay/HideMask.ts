import { _decorator, Camera, Component, EventTouch, geometry, log, Node, physics, Vec2, Vec3, PhysicsSystem } from 'cc';
// import { IronSource } from '../AdHelper/IronSource';
import { GameInfo } from '../Const/GameInfo';
import { Utility } from '../Utils/Utility';
import { LogicGamePlay } from '../Others/HandleLogicGamePlay';
import { UIGameController } from '../Controller/UIGameController';
import { CONST } from '../Const/CONST';
import { GameController } from '../Controller/GameController';
import { SoundController } from '../Controller/SoundController';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = HideMask
 * DateTime = Mon Aug 26 2024 09:46:25 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = HideMask.ts
 * FileBasenameNoExtension = HideMask
 * URL = db://assets/Scripts/GamePlay/HideMask.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */


@ccclass('HideMask')
export class HideMask extends Component {
    @property(UIGameController)
    UIGameController: UIGameController = null;
    @property(GameController)
    GameController: GameController = null;


    @property(Camera)
    Cam_2D: Camera = null;


    private init(): void {

    }


    protected start(): void {
        this.init();
        this.registerEvent();
    }
 

    private registerEvent(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
    }


    private touchStart(event: EventTouch): void {
        if (!GameInfo.isCanTouch) return;
        
        if(GameInfo.isToStore || GameInfo.IsShowPopupInstall || GameInfo.currentSuccessClick >= 4) {
            this.GameController.installHandle();
            return;
        }
        
        this.getRaycastResult(event);
    }


    private getRaycastResult(touchPos: EventTouch): void {
        let ray = new geometry.Ray();
        this.Cam_2D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray);
        // The following parameters are optional
        const mask = 0xffffffff;
        const maxDistance = 10000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            // const hitPoint = raycastClosestResult.hitPoint
            // const hitNormal = raycastClosestResult.hitNormal;
            const collider = raycastClosestResult.collider;
            // const distance = raycastClosestResult;   
            
            if(collider.node.name === "Flour" 
                || collider.node.name === "Drink_Csush" 
                || collider.node.name === "Juice_Apple") 
            {
                GameInfo.currentItems -= 1;

                if(collider.node.name === "Flour") GameInfo.currentTotalCost += 15;
                if(collider.node.name === "Drink_Csush") GameInfo.currentTotalCost += 25;
                if(collider.node.name === "Juice_Apple") GameInfo.currentTotalCost += 20;

                if(GameInfo.currentItems === 0) this.UIGameController.Tut_1.active = true;

                collider.node.active = false;

                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.paySound);

                this.UIGameController.Tut_2.active = false;
            }


            if(collider.node.name === "Money" 
                || collider.node.name === "CC" ) 
            {
                GameInfo.NPCpaidTimes += 1;

                collider.node.active = false;

                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.paidSound);
                
                this.UIGameController.Tut_1.active = false;

                // payment with cash
                if(collider.node.name === "Money") {

                    GameInfo.currentReceive += 100;
        
                    this.UIGameController.TouchArea_GiveTheChange.active = true;
                }

                // payment with banking
                else {
                    this.UIGameController.TouchArea_Banking.active = true;

                    this.UIGameController.PcScreen_Change.active = false;

                    this.UIGameController.PcScreen_Give.active = false;

                    this.UIGameController.PcScreen_Receive.active = false;
                }
 
            }

            // log(raycastClosestResult)
        }
    }

}
