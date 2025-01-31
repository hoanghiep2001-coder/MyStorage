
import { _decorator, Animation, Camera, Color, Component, easing, Event, EventTouch, Graphics, instantiate, Label, log, math, Node, Prefab, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameController } from './GameController';
import { LogicGamePlay } from '../Others/HandleLogicGamePlay';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIGameController
 * DateTime = Mon Aug 26 2024 14:14:13 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = UIGameController.ts
 * FileBasenameNoExtension = UIGameController
 * URL = db://assets/Scripts/Controller/UIGameController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('UIGameController')
export class UIGameController extends Component {

    @property(Camera)
    Camera3D: Camera = null;

    @property(GameController)
    GameController: GameController = null;

    @property(Node)
    Canvas: Node = null;

    @property(Node)
    TouchArea: Node = null;

    @property(Node)
    QueuePopup: Node = null;

    @property(Label)
    QueueLabel: Label = null;

    @property(Node)
    Tut_1: Node = null;

    @property(Node)
    CTA: Node = null;

    @property(Node)
    CTA_btn: Node = null;


    protected start(): void {
        this.registerEvent();

        GameInfo.currentOption !== 9 && this.scheduleOnce(() => {
            if (GameInfo.isTouching) return;
            this.Tut_1.active = true;
        }, 2);
    }


    private registerEvent(): void {
        // google, unity, tiktok
        this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private showCTATextContent(): void {
        if (this.CTA.active) return;
        this.CTA.active = true;
        GameInfo.IsShowPopupInstall = true;

        tween(this.CTA_btn)
            .repeatForever(
                tween(this.CTA_btn)
                    .to(0.5, { scale: new Vec3(0.5, 0.5, 0.5) })
                    .to(0.5, { scale: new Vec3(0.45, 0.45, 0.45) }, { easing: easing.elasticOut })
            ).start();
    }


    private updateQueueLabelPos(): void {
        const out = new Vec3();
        const wpos = this.QueuePopup.worldPosition;
        this.Camera3D.convertToUINode(wpos, this.Canvas, out);
        this.QueueLabel.string = String(GameInfo.currentQueue);
        this.QueueLabel.node.position = new Vec3(
            out.x - GameInfo.queueLabelCalPosX, out.y + GameInfo.queueLabelCalPosY, out.z
        );
    }


    protected update(dt: number): void {
        this.updateQueueLabelPos();
        if ((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) this.showCTATextContent();
    }
}
