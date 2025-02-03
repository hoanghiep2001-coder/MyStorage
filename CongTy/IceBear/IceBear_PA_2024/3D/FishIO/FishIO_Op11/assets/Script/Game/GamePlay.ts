import { _decorator, Animation, Component, EventTouch, Node, PhysicsSystem, SkeletalAnimation, Vec2, Vec3, ParticleSystem, log, sp, view, UITransform, Label, Sprite, VideoPlayer, director, Button, ParticleSystem2D } from 'cc';
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

    @property(Node)
    background: Node = null;
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
    CTA_logo: Node = null;
    @property(Node)
    CTA_btn: Node = null;


    @property(Node)
    layer: Node = null;

    // state
    currentPos: Vec2 = new Vec2(0, 0);
    currentPos2: Vec2 = new Vec2(0, 0);
    countingTimeVideo: number = 0;
    countingTimeVideoWithRightBtn: number = 0;
    isDoneLeftBtn: boolean = false;


    protected onLoad(): void {
        this.CTA.active = false;
    }


    protected start(): void {
        Constants.isCanClick = true;
        this.handleVideo();


        // use if build ironSource
        // this.background.active = false;
        // this.video.stayOnBottom = true;
        // this.AudioManager.bgSound.volume = 0;
        // this.HideMask.on(Node.EventType.TOUCH_START, () => {
        //     this.AudioManager.bgSound.volume = 1;
        // }, this);
        // ------------------
    }


    private registerEvent(): void {
        this.UIController.Btn_Left.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.UIController.Btn_Left.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.UIController.Btn_Left.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private registerEventForBtnRight(): void {
        this.UIController.Btn_Right.on(Node.EventType.TOUCH_MOVE, this.touchMoveWithBtnRight, this);
        this.UIController.Btn_Right.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.UIController.Btn_Right.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private offEvent(): void {
        this.UIController.Btn_Left.off(Node.EventType.TOUCH_MOVE);
        this.UIController.Btn_Left.off(Node.EventType.TOUCH_END);
        this.UIController.Btn_Left.off(Node.EventType.TOUCH_CANCEL);

        this.UIController.Btn_Right.off(Node.EventType.TOUCH_MOVE);
        this.UIController.Btn_Right.off(Node.EventType.TOUCH_END);
        this.UIController.Btn_Right.off(Node.EventType.TOUCH_CANCEL);
    }


    private handleVideo(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.video.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.initVideo, this);
        this.video.node.on(VideoPlayer.EventType.COMPLETED, this.endVideo, this);

        // this.scheduleOnce(() => {
        //     this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
        //     this.video.pause();
        //     this.registerEvent();
        // }, 3.5);
    }


    private touchMove(e: EventTouch): void {
        if (!Constants.isCanClick) {
            return;
        }

        let pos = e.getLocation();
        if (pos.y > this.currentPos.y) {
            !this.AudioManager.bgSound.playing && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            this.video.play();
            this.countingTimeVideo += 0.1;
            if (this.countingTimeVideo >= 2.5) {
                console.log("off ----------------------------");
                this.swtichGameToBtnRight();
                this.offEvent();
                this.isDoneLeftBtn = true;
            }
        }

        this.currentPos = pos;
    }


    private touchMoveWithBtnRight(e: EventTouch): void {
        if (!Constants.isCanClick) {
            return;
        }

        let pos = e.getLocation();
        if (pos.y > this.currentPos2.y) {
            !this.AudioManager.bgSound.playing && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            this.video.play();
            this.countingTimeVideoWithRightBtn += 0.1;
            if (this.countingTimeVideoWithRightBtn >= 2.5) {
                console.log("off ----------------------------");
                this.offEvent();
            }
        }

        this.currentPos2 = pos;
    }


    private touchEnd(): void {
        this.video.pause();
        this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
    }


    private swtichGameToBtnRight(): void {
        this.scheduleOnce(() => {
            this.registerEventForBtnRight();
            this.video.pause();
            this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
        }, 3.5)
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    private initVideo(video: VideoPlayer) {
        video.play();
        video.volume = 0;
    }


    private endVideo(): void {
        this.CTA.active = true;
        this.background.active = false;
        this.video.stayOnBottom = true;
        this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private handleInstall(): void {
        this.btn_accept.off(Node.EventType.TOUCH_START);
        this.btn_decline.off(Node.EventType.TOUCH_START);
        this.GameController.installHandle();
    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.iphoneSound);
            this.AudioManager.switchVolume(Constants.SoundTrack.iphoneSound, 0.7);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    protected update(dt: number): void {
        // ironsource
        // this.handleMuteSoundIronSource();
    }
}
