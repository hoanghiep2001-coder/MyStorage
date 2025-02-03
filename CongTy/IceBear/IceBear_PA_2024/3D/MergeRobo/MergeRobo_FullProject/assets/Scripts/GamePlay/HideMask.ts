import { _decorator, Component, EventTouch, log, Node, Vec2, Vec3 } from 'cc';
import { IronSource } from '../AdHelper/IronSource';
import { GameInfo } from '../Const/GameInfo';
import { Utility } from '../Utils/Utility';
import { vFx_FireLight } from '../Others/vFx_FireLight';
import { LogicGamePlay } from '../Others/HandleLogicGamePlay';
import { UIGameController } from '../Controller/UIGameController';
import { CONST } from '../Const/CONST';
import { RoboBehavior } from '../Robo/RoboBehavior';
import { GameController } from '../Controller/GameController';
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

    @property(vFx_FireLight)
    vFx_FireLight: vFx_FireLight = null;


    private init(): void {

    }


    protected start(): void {
        this.init();
        this.registerEvent();
    }
 

    private registerEvent(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private touchStart(event: EventTouch): void {
        if(GameInfo.isToStore) {
            this.GameController.installHandle();
            return;
        }

        if (!GameInfo.isCanTouch || IronSource.isEndGame) return;

        IronSource.handleIronSourcePlaySound();

        GameInfo.isTouching = false;

        this.UIGameController.Point.active = true;

        let touchPos = Utility.convertToLocalLocation(event.getUILocation(), this.node);

        this.UIGameController.Point.setPosition(touchPos);

        GameInfo.touchPos = touchPos;

        this.UIGameController.Tutorial.active = false;
    }


    private touchMove(event: EventTouch): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        this.UIGameController.Point.setPosition(GameInfo.touchPos);

        let touchPos = Utility.convertToLocalLocation(event.getUILocation(), this.node);

        // this.vFx_FireLight.updateDirectionFireLightVfx(touchPos);

        LogicGamePlay.HandleDrawGraphics(GameInfo.touchPos, touchPos, this.UIGameController.Graphics);

        this.UIGameController.Point.setPosition(touchPos);

        LogicGamePlay.HandleIntersectsPoints(GameInfo.UI_MergePoint , this.UIGameController.Point);

        GameInfo.touchPos = touchPos;
    }


    private touchEnd(): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        GameInfo.isTouching = false;
        
        this.UIGameController.Point.active = false;
        
        LogicGamePlay.HandleClearGraphics(this.UIGameController.Graphics);

        let roboChoosenArr = GameInfo.playerStartGameRobo.filter(robo => {
            if(robo.getComponent(RoboBehavior).isPickup) return robo;
        });

        if(roboChoosenArr.length >= 2) LogicGamePlay.mergeRobo();
        else LogicGamePlay.resetRobos();

    }

}
