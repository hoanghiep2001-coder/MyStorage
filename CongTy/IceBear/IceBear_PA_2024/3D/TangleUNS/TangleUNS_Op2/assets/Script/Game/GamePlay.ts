import { _decorator, Component, EventTouch, Label, Node, tween, Vec2, Vec3, VideoPlayer } from 'cc';
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

    @property(Label)
    label: Label = null;

    isDoneFirstDot: boolean = false;
    isDoneSecondDot: boolean = false;
    isCanPlayVideo: boolean = false;

    caculatedTime: number = null;
    currentPos: Vec3 = null;
    nextBtn: string = "Btn_4";
    currentMoves: number = 5;
    currentHint: number = null;
    nextHint: number = null;


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
        this.UIController.Hints[3].active = true;
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

        this.filterBtn(btnName);

        if (this.isCanPlayVideo) {
            this.AudioManager.playSound(Constants.SoundTrack.rope_1Sound)
            this.video.play();
            Constants.isCanClick = false;
        }

        if (this.caculatedTime) {
            this.scheduleOnce(() => {
                this.video.pause();
                if (this.nextHint || this.nextHint === 0) this.UIController.Hints[this.nextHint].active = true;
                Constants.isCanClick = true;
            }, this.caculatedTime);
        }
    }


    private filterBtn(btnName: string): void {
        switch (btnName) {

            case "Btn_4":
                if (this.nextBtn !== "Btn_4") {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                }

                this.currentMoves -= 1;
                this.currentMoves <= 0 && this.endVideo();

                if (Constants.isTouchThirdBtn) {
                    this.nextBtn = "Btn_1";
                    this.currentHint = 3;
                    this.nextHint = 0;
                    this.isCanPlayVideo = true;
                    this.caculatedTime = 1.4;
                    if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                    break;
                }

                Constants.isTouchFirstBtn = true;
                this.nextBtn = "Btn_3";
                this.currentHint = 3;
                this.nextHint = 2;
                this.isCanPlayVideo = true;
                this.caculatedTime = 1;
                if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                break;


            case "Btn_3":
                if (this.nextBtn !== "Btn_3") {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                }

                this.currentMoves -= 1;
                this.currentMoves <= 0 && this.endVideo();

                if (Constants.isTouchSeventhBtn) {
                    Constants.isTouchEighthBtn = true;
                    this.nextBtn = "Btn_5";
                    this.isCanPlayVideo = true;
                    this.caculatedTime = 1.1;
                    this.currentHint = 2;
                    this.nextHint = 4;
                    if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                    return;
                }

                if (!Constants.isTouchFirstBtn) {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                };

                Constants.isTouchSecondBtn = true;
                this.nextBtn = "Btn_2";
                this.currentHint = 2;
                this.nextHint = 1;
                this.isCanPlayVideo = true;
                this.caculatedTime = 1.5;
                if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                break;


            case "Btn_2":
                if (this.nextBtn !== "Btn_2") {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                }

                this.currentMoves -= 1;
                this.currentMoves <= 0 && this.endVideo();

                if (!Constants.isTouchSecondBtn) {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                };

                if (Constants.isTouchForthBtn && !Constants.isTouchFifthBtn) {
                    Constants.isTouchFifthBtn = true;
                    this.nextBtn = "Btn_5";
                    this.isCanPlayVideo = true;
                    this.caculatedTime = 1;
                    this.currentHint = 1;
                    this.nextHint = 4;
                    if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                    return;
                }

                Constants.isTouchThirdBtn = true;
                this.nextBtn = "Btn_4";
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.5;
                this.currentHint = 1;
                this.nextHint = 3;
                if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                break;


            case "Btn_1":
                if (this.nextBtn !== "Btn_1") {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                }

                this.currentMoves -= 1;
                this.currentMoves <= 0 && this.endVideo();

                if (!Constants.isTouchThirdBtn) {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                };

                if (Constants.isTouchSixthBtn) {
                    Constants.isTouchSeventhBtn = true;
                    this.nextBtn = "Btn_3";
                    this.isCanPlayVideo = true;
                    this.caculatedTime = 1.75;
                    this.currentHint = 0;
                    this.nextHint = 2;
                    if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                    return;
                }

                Constants.isTouchForthBtn = true;
                this.nextBtn = "Btn_2";
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.6;
                this.currentHint = 0;
                this.nextHint = null;
                this.UIController.Hints[this.currentHint].active = false;

                break;


            case "Btn_5":
                if (this.nextBtn !== "Btn_5") {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                }

                this.currentMoves -= 1;
                this.currentMoves <= 0 && this.endVideo();

                if (Constants.isTouchEighthBtn) {
                    Constants.isTouchNinthBtn = true;
                    this.nextBtn = null;
                    this.isCanPlayVideo = true;
                    this.caculatedTime = null;
                    this.currentHint = 4;
                    this.nextHint = null;
                    if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;

                    return;
                }

                if (!Constants.isTouchFifthBtn) {
                    this.isCanPlayVideo = false;
                    this.caculatedTime = null;
                    return;
                };

                Constants.isTouchSixthBtn = true;
                this.nextBtn = "Btn_1";
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.92;
                this.currentHint = 4;
                this.nextHint = 0;
                if (this.currentHint) this.UIController.Hints[this.currentHint].active = false;
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
        // this.CTA.active = true;

        for (let index = 0; index < this.UIController.Btns.length; index++) {
            const btn = this.UIController.Btns[index];
            btn.off(Node.EventType.TOUCH_START);
            btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        // tween(this.CTA_btn)
        //     .repeatForever(
        //         tween(this.CTA_btn)
        //             .to(0.5, { scale: new Vec3(0.45, 0.45, 0.45) })
        //             .to(0.5, { scale: new Vec3(0.5, 0.5, 0.5) }, { easing: 'elasticOut' })
        //     ).start();

        // this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.GameController.installHandle();

        // mtg & applovin
        // this.HideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
        this.label.string = String(this.currentMoves);

        // if (this.currentMoves <= 0 && !this.CTA.active) this.endVideo();

        // ironsource
        this.handleMuteSoundIronSource();
    }
}
