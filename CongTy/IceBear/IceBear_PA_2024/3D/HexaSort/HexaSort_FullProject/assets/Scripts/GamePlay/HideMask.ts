import { _decorator, Component, EventTouch, log, Node, Vec2, Vec3 } from 'cc';
import { IronSource } from '../AdHelper/IronSource';
import { GameInfo } from '../Const/GameInfo';
import { Utility } from '../Utils/Utility';
import { UIGameController } from '../Controller/UIGameController';
import { GameController } from '../Controller/GameController';
const { ccclass, property } = _decorator;


@ccclass('HideMask')
export class HideMask extends Component {
    @property(UIGameController)
    UIGameController: UIGameController = null;
    @property(GameController)
    GameController: GameController = null;



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

        // IronSource.handleIronSourcePlaySound();

        GameInfo.isTouching = true;

        let touchPos = Utility.convertToLocalLocation(event.getUILocation(), this.node);

        this.UIGameController.Cursor.setPosition(touchPos);

        GameInfo.touchPos = touchPos;

        // this.UIGameController.Tutorial.active = false;
    }


    private touchMove(event: EventTouch): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        this.UIGameController.Cursor.setPosition(GameInfo.touchPos);

        let touchPos = Utility.convertToLocalLocation(event.getUILocation(), this.node);

        this.UIGameController.Cursor.setPosition(touchPos);

        // LogicGamePlay.HandleIntersectsPoints(GameInfo.UI_MergePoint , this.UIGameController.Point);

        GameInfo.touchPos = touchPos;
    }


    private touchEnd(): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        GameInfo.isTouching = false;
        
        // this.UIGameController.Point.active = false;
        
        // LogicGamePlay.HandleClearGraphics(this.UIGameController.Graphics);

        // let roboChoosenArr = GameInfo.playerStartGameRobo.filter(robo => {
        //     if(robo.getComponent(RoboBehavior).isPickup) return robo;
        // });

        // if(roboChoosenArr.length >= 2) LogicGamePlay.mergeRobo();
        // else LogicGamePlay.resetRobos();

    }

}
