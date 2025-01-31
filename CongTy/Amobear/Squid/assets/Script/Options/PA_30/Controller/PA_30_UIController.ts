import { _decorator, Component, easing, Label, Node, tween, Vec3 } from 'cc';
import { GamePlay } from '../../../Game/GamePlay';
import { GameInfo } from '../../../CONST/GameInfo';
import { PA_30_CameraController } from './PA_30_CameraController';
const { ccclass, property } = _decorator;

@ccclass('PA_30_UIController')
export class PA_30_UIController extends Component {
    @property(PA_30_CameraController)
    camera: PA_30_CameraController = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(Node)
    Tut: Node = null;
    Tut_Btn: Node = null;
    Tut_Label: Label = null;


    @property(Node)
    HayChonGiaDung: Node = null;
    isShowHayChonGiaDung: boolean = false;

    @property(Node)
    CTA: Node = null;


    isShowPopupInstall: boolean = false;


    protected start(): void {
        this.initProperties();
        this.activeTutAnim();
        this.registerEvent();
    }


    private initProperties(): void {
        this.Tut_Btn = this.Tut.getChildByName("btn");
        this.Tut_Label = this.Tut.getComponentInChildren(Label);
    }


    private activeTutAnim(): void {
        const originalScale = this.Tut_Btn.getScale();
        tween(this.Tut_Btn)
        .repeatForever(
            tween(this.Tut_Btn)
                .to(0.5, { scale: new Vec3(originalScale.x + 0.05, originalScale.y +0.05, originalScale.z + 0.05) })
                .to(0.5, { scale: originalScale }, { easing: easing.elasticOut })
        ).start();
    }


    private registerEvent(): void {
        this.Tut_Btn.on(Node.EventType.TOUCH_START, this.onTutBtnTouchStart, this);
    }


    private onTutBtnTouchStart(): void {
        GameInfo.IsPlaying = true;
        this.Tut.active = false;
        this.camera.handleTweenToTable();
    }


    private showCTA(): void {
        this.isShowPopupInstall = true;
        this.CTA.active = true;
    }


    private showHayChonGiaDung(): void {
        this.isShowHayChonGiaDung = true;
        this.HayChonGiaDung.active = true;
    }


    protected update(dt: number): void {
        if(GameInfo.IsShowPopupInstall && !this.isShowPopupInstall) this.showCTA();
        if(GameInfo.Squid_PA_30.isDoneDrawCandy && !this.isShowHayChonGiaDung) this.showHayChonGiaDung();
    }

}

