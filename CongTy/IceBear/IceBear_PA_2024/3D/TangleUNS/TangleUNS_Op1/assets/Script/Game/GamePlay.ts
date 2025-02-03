import { _decorator, Component, EventTouch, Node, tween, Vec2, Vec3, VideoPlayer } from 'cc';
const { ccclass, property } = _decorator;
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';

@ccclass('GamePlay')
export class GamePlay extends Component {
    // Component
    @property(UIController)
    UIController: UIController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(VideoPlayer)
    video: VideoPlayer = null;
    @property(Node)
    HideMask: Node = null;

    @property(Node)
    CTA: Node = null;
    @property(Node)
    CTA_overlay: Node = null;
    @property(Node)
    CTA_icon: Node = null;
    @property(Node)
    CTA_btn: Node = null;

    @property(Node)
    layer: Node = null;
    @property(Node)
    layer_icon: Node = null;

    isDoneFirstDot: boolean = false;
    isDoneSecondDot: boolean = false;
    isCanPlayVideo: boolean = true;

    caculatedTime: number = null;
    currentPos: Vec3 = null;


    protected onLoad(): void {
        this.CTA.active = false;
    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        Constants.isCanClick = true;
        this.initVideo();
        this.registerEvent();

        for (let index = 0; index < this.UIController.Hints.length; index++) {
            const hint = this.UIController.Hints[index];
            hint.active = false;
        }
        this.UIController.Hints[0].active = true;
    }


    private registerEvent(): void {
        for (let index = 0; index < this.UIController.Btns.length; index++) {
            const btn = this.UIController.Btns[index];
            btn.on(Node.EventType.TOUCH_START, this.handleBtnTouch, this);
        }
    }


    private handleBtnTouch(e: EventTouch): void {
        if (!Constants.isCanClick) return;

        this.handleIronSourcePlaySound();

        let btnName: string = e.target.name;
        console.log(btnName);

        this.filterBtn(btnName);

        if (this.isCanPlayVideo) {
            this.AudioManager.playSound(Constants.SoundTrack.rope_1Sound)
            this.video.play();
            Constants.isCanClick = false;
        }

        if (this.caculatedTime) {
            this.scheduleOnce(() => {
                // this.AudioManager.playSound(Constants.SoundTrack.rope_2Sound)
                this.video.pause();
                Constants.isCanClick = true;
            }, this.caculatedTime);
        }
    }


    private filterBtn(btnName: string): void {
        switch (btnName) {

            case "Btn_1":
                Constants.isTouchFirstBtn = true;
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.7;
                this.UIController.Hints[0].active = false;
                this.UIController.Hints[2].active = true;
                break;


            case "Btn_3":
                if (!Constants.isTouchFirstBtn) {
                    this.isCanPlayVideo = false;
                    return;
                };

                if (Constants.isTouchForthBtn) {
                    this.isCanPlayVideo = true;
                    this.caculatedTime = 0.55;
                    this.UIController.Hints[2].active = false;
                    this.UIController.Hints[4].active = true;
                    return;
                }
                this.UIController.Hints[2].active = false;
                this.UIController.Hints[1].active = true;
                Constants.isTouchSecondBtn = true;
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.82;
                break;


            case "Btn_2":
                if (!Constants.isTouchFirstBtn || !Constants.isTouchSecondBtn) {
                    this.isCanPlayVideo = false;
                    return
                };
                this.UIController.Hints[1].active = false;
                this.UIController.Hints[3].active = true;
                Constants.isTouchThirdBtn = true;
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.4;
                break; 


            case "Btn_4":
                if (!Constants.isTouchFirstBtn || !Constants.isTouchSecondBtn || !Constants.isTouchThirdBtn) {
                    this.isCanPlayVideo = false;
                    return
                };
                this.UIController.Hints[3].active = false;
                this.UIController.Hints[2].active = true;
                Constants.isTouchForthBtn = true;
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.8;
                break;


            case "Btn_5":
                if (!Constants.isTouchFirstBtn || !Constants.isTouchSecondBtn || !Constants.isTouchThirdBtn || !Constants.isTouchForthBtn) {
                    this.isCanPlayVideo = false;
                    return
                };
                this.UIController.Hints[4].active = false;
                Constants.isTouchFifthBtn = true;
                this.isCanPlayVideo = true;
                this.caculatedTime = null;

                this.scheduleOnce(() => {
                    this.AudioManager.playSound(Constants.SoundTrack.winSound);
                }, 0.8)
                break;
            default:
                break;
        }
    }


    private convertToNodeSpace(pos: Vec2): Vec3 {
        let result = new Vec3(pos.x - 160, pos.y - 240, 0);
        return result;
    }


    private initVideo(): void {
        this.video.node.on(VideoPlayer.EventType.COMPLETED, this.endVideo, this);
    }


    private endVideo(): void {
        this.AudioManager.stopSound(Constants.SoundTrack.bgSound);
        this.CTA.active = true;

        for (let index = 0; index < this.UIController.Btns.length; index++) {
            const btn = this.UIController.Btns[index];
            btn.off(Node.EventType.TOUCH_START);
        }

        tween(this.CTA_btn)
            .repeatForever(
                tween(this.CTA_btn)
                    .to(0.5, { scale: new Vec3(0.45, 0.45, 0.45) })
                    .to(0.5, { scale: new Vec3(0.5, 0.5, 0.5) }, { easing: 'elasticOut' })
            ).start();

        this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)
    
        if (Constants.ironSource.State) {
          if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            Constants.ironSource.SoundState = true;
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
          }
    
          if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
            Constants.ironSource.SoundState = false;
            this.AudioManager.stopAllSound();
          }
        }
      }


    protected update(dt: number): void {
        // ironsource
        this.handleMuteSoundIronSource();
    }
}
