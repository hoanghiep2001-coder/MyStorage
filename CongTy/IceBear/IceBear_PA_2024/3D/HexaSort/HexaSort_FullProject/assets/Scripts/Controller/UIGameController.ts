
import { _decorator, Component, easing, Graphics, Label, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

 
@ccclass('UIGameController')
export class UIGameController extends Component {

    @property(GameController) 
    GameController: GameController = null;

    @property(Node)
    PointContainer: Node = null;

    @property(Node)
    Cursor: Node = null;

    @property(Node)
    Bricks_3D: Node = null;
    BrickNodes: Node[] = [];

    @property(Node)
    CTA: Node = null;
    


    

    protected start(): void {
        this.registerEvent();

        // this.activeTweenForBtnCTA()
    }


    public registerEvent(): void {
        let hideMask = this.CTA.getChildByName("HideMask");
        let btn = this.CTA.getChildByName("btn");

        // applovin & mtg
        hideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private activeTweenForBtnCTA(): void {
        let btn = this.CTA.getChildByName("btn");
        tween(btn)
        .repeatForever(
           tween(btn)
                .to(0.5, { scale: new Vec3(0.5, 0.5, 0.5) })
                .to(0.5, { scale:  new Vec3(0.45, 0.45, 0.45)}, { easing: easing.elasticOut})
        ).start();
    }


    public showCTATextContent(): void {
        this.CTA.active = true;

        GameInfo.IsShowPopupInstall = true;

        let label = this.CTA.getChildByName("btn").getChildByName("Label").getComponent(Label);

        if(GameInfo.isLose) {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.loseSound);
            label.string = "Try Again"
        }

        else {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.winSound);
            label.string = "Continue"
        }
    }


    protected update(dt: number): void {
        if((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) this.showCTATextContent();
    }
}

