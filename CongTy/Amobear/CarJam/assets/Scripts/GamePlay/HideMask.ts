import { _decorator, Camera, Component, EventTouch, geometry, log, Node, physics, Vec2, Vec3, PhysicsSystem } from 'cc';
// import { IronSource } from '../AdHelper/IronSource';
import { GameInfo } from '../Const/GameInfo';
import { Utility } from '../Utils/Utility';
import { LogicGamePlay } from '../Others/HandleLogicGamePlay';
import { UIGameController } from '../Controller/UIGameController';
import { CONST } from '../Const/CONST';
import { GameController } from '../Controller/GameController';
import { SoundController } from '../Controller/SoundController';
import { CarBehavior } from '../Car/CarBehavior';
import { IronSource } from '../AdHelper/IronSource';
import { CarEnabledClick } from '../Car/CarEnabledClick';
const { ccclass, property } = _decorator;



@ccclass('HideMask')
export class HideMask extends Component {
    @property(UIGameController)
    UIGameController: UIGameController = null;
    @property(GameController)
    GameController: GameController = null;


    @property(Camera)
    Cam_3D: Camera = null;


    private init(): void {

    }


    protected start(): void {
        this.init();
        this.registerEvent();
    }


    private registerEvent(): void {
        // let test: Node = null;

        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
    }


    private touchStart(event: EventTouch): void {
        if (!GameInfo.isCanTouch) return;

        // IronSource.handleIronSourcePlaySound();

        if (GameInfo.isToStore || GameInfo.IsShowPopupInstall) {
            // applovin, mtg
            this.GameController.installHandle();
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

            if (collider.node.name.includes("Car")
                || collider.node.name.includes("Van")
                || collider.node.name.includes("Bus")
            ) {

                // can't click on car has enabledClick in name
                if(collider.getComponent(CarEnabledClick)?.isCarEnabledClick) {
                    log("click blocked")
                    return
                };

                this.UIGameController.Tut_1.active = false;
                GameInfo.isTouching = true;
                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.clickSound);
                const CarBehaviorComp = collider.node.getComponent(CarBehavior);
                CarBehaviorComp.setMoveBehavior();
            }
        }
    }

}
