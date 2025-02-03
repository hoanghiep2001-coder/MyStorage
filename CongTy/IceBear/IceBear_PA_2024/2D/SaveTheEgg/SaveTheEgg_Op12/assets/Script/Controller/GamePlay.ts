import { Constants } from "../Data/constants";
import { GameOption } from "../Data/GameOption";
import AudioManager from "../Plugin/AudioManager";
import { Ultils } from "../Plugin/Ultils";
import { GameController } from "./GameController";
import NodesController from "./NodesController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;
 

    // Component


    // Node
    @property(cc.Graphics)
    graphic: cc.Graphics = null;
    pathFinding_Grid: any = null;
    pathFinding_Nodes: any = [];

    @property(cc.Node)
    Overlay: cc.Node = null;

    // State
    curentPosition: cc.Vec2 = null;
    currentHint: cc.Node = null;
    currentPencil: cc.Graphics = null;
    curerntPoint: cc.Node = null;
    isHit: boolean = false;
    isHint: boolean = false;


    protected onLoad(): void {
        let physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
    }


    protected start(): void {

        // các op không phải là 15 thì chạy GP
        if (GameOption.currentOption !== 15) {

            this.NodesController.Hint.active = true;

            this.NodesController.CTA.active = false;

            window.isStartDraw = false;

            window.isLoseGame = false;

            window.isReplayGame = false;

            // window.isToStore = true;

            // cc.warn("window isToStore | constant isToStore đang bật.");

            Constants.isWinGame = false;

            Constants.isHit = false;

            Constants.isCanTouch = true;

            this.handleGamePlay();
        }

        // Op 15 Fake Game Play
        if (GameOption.currentOption === 15 && !Constants.isToStore) {
            this.initOp15();
        }

        this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        this.AudioManager.bgSound.volume = 0.6;

        // Op 15 thì comment dòng này và isToStore ở trên đi
        // if (Constants.isToStore || window.isToStore) {
        //     this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this)
        // }

        // ironsource
        // if(Constants.ironSource.isPlayBgSound) 
        //     this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };


    private initOp15(): void {
        const _this = this;

        const Op15 = {
            registerEvent: () => {
                // _this.NodesController.Op15_HatchButton.on(cc.Node.EventType.TOUCH_START, Op15.handleHatchEgg, this);

                _this.NodesController.Op15_HatchButton.on(cc.Node.EventType.TOUCH_START, Op15.op15_1, this);
            },

            handleHatchEgg: () => {
                // _this.handleIronSourcePlaySound();

                _this.AudioManager.playSound(Constants.SoundTrack.hatchEggSound);

                _this.NodesController.Op15_HatchButton.active = false;

                _this.NodesController.Op15_Egg.getComponent(cc.Animation).play();

                // show fireworks
                _this.scheduleOnce(() => {
                    _this.NodesController.Op15_FireWork.active = true;
                    _this.AudioManager.playSound(Constants.SoundTrack.winSound);
                }, 3.5);

                _this.scheduleOnce(() => {
                    Op15.openNewGamePlay();
                }, 5.5);
            },

            op15_1: () => {
                _this.GameController.installHandle();
            },

            openNewGamePlay: () => {
                window.isToStore = true;
                Constants.isToStore = true;

                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(() => { cc.director.loadScene(`Op13`) })
                    .start();
            },

            activeButtonHatchTween: () => {
                cc.tween(_this.NodesController.Op15_HatchButton)
                    .repeatForever(
                        cc.tween(_this.NodesController.Op15_HatchButton)
                            .to(0.5, { scale: 0.45 })
                            .to(0.5, { scale: 0.47 }, { easing: cc.easing.elasticOut })
                    ).start();
            },

            start: () => {
                Op15.registerEvent();
                Op15.activeButtonHatchTween();
            }
        }

        Op15.start();
    }


    private handleGamePlay(): void {
        Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        Constants.CharacterPos.y = Constants.CharacterPos.y + 25
        this.registerEvent();
    };


    private registerEvent(): void {

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


    private characterHit(): void {
        cc.log("hit!!")

        window.isReplayGame = true;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "result_fail", true);
        this.AudioManager.playSound(Constants.SoundTrack.crySound);

        // sau 1.5, check có đc hồi sinh không thì cho hiện CTA
        this.scheduleOnce(() => {
            if (GameOption.currentOption === 12) {
                GameOption.Op12.reviveCount = Ultils.decreaseRevive(GameOption.Op12.reviveCount);
                cc.log("revive Left: " + GameOption.Op12.reviveCount);

                GameOption.Op12.reviveCount > 0
                    ? this.lose()
                    : this.showCTA(false);
            }

            if (GameOption.currentOption === 13) {
                GameOption.Op13.reviveCount = Ultils.decreaseRevive(GameOption.Op13.reviveCount);
                cc.log("revive Left: " + GameOption.Op13.reviveCount);

                GameOption.Op13.reviveCount > 0
                    ? this.lose()
                    : this.showCTA(false);
            }

            if (GameOption.currentOption === 14) {
                GameOption.Op14.reviveCount = Ultils.decreaseRevive(GameOption.Op14.reviveCount);
                cc.log("revive Left: " + GameOption.Op14.reviveCount);

                GameOption.Op14.reviveCount > 0
                    ? this.lose()
                    : this.showCTA(false);
            }

            if (GameOption.currentOption === 16) {
                this.showCTA(false)
            }

            if (GameOption.currentOption === 17) {
                GameOption.Op17.reviveCount = Ultils.decreaseRevive(GameOption.Op17.reviveCount);
                cc.log("revive Left: " + GameOption.Op17.reviveCount);

                GameOption.Op17.reviveCount > 0
                    ? this.lose()
                    : this.showCTA(false);
            }
        }, 1.5);
    }


    public lose(): void {
        if (Constants.isWinGame) return;

        cc.log("lose!")

        Constants.isLoseGame = true;

        if(GameOption.currentOption === 17 && GameOption.Op17.isPassLevel28) {
            cc.tween(this.Overlay)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(() => { cc.director.loadScene(`Op13`) })
            .start();
            return;
        }

        cc.tween(this.Overlay)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(() => { cc.director.loadScene(`Op${GameOption.currentOption}`) })
            .start();
    }


    public winGame(): void {
        if (Constants.isWinGame) return;

        cc.log("win!")

        this.NodesController.Spine_Character.setAnimation(0, "result_win", true);

        // 
        if (GameOption.currentOption === 14 && !GameOption.Op14.showCTA) {
            this.AudioManager.playSound(Constants.SoundTrack.winSound);

            this.NodesController.PS_Confetti.resetSystem();

            GameOption.Op14.showCTA = true;

            cc.tween(this.Overlay)
                .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                .call(() => { cc.director.loadScene(`Op12`) })
                .start();

            return;
        }

        if (GameOption.currentOption === 17 && !GameOption.Op17.showCTA) {
            this.AudioManager.playSound(Constants.SoundTrack.winSound);

            this.NodesController.PS_Confetti.resetSystem();

            GameOption.Op17.isPassLevel28 = true;

            GameOption.Op17.showCTA = true;

            cc.tween(this.Overlay)
                .to(1, { opacity: 255 }, { easing: cc.easing.smooth })
                .call(() => { cc.director.loadScene(`Op13`) })
                .start();

            return;
        }


        Constants.isWinGame = true;

        this.AudioManager.playSound(Constants.SoundTrack.winSound);

        this.NodesController.PS_Confetti.resetSystem();

        this.showCTA(true);
    }


    private showCTA(isWin?: boolean): void {
        if (this.NodesController.CTA.active) return;

        this.NodesController.CTA.active = true;
        this.NodesController.CTA.getComponent(cc.Animation).play();

        isWin
            ? this.NodesController.CTA_PlayNow.active = true
            : this.NodesController.CTA_TryAgain.active = true;

        cc.tween(this.NodesController.CTA_button)
            .to(0.5, { opacity: 255 })
            .start();

        cc.tween(this.NodesController.CTA_button)
            .repeatForever(
                cc.tween(this.NodesController.CTA_button)
                    .to(0.5, { scale: 0.45 })
                    .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
            ).start();

        this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private unactiveHint(): void {
        // this.handleIronSourcePlaySound();
        this.isHint = true;
        this.NodesController.Hint.active = false;
    }


    protected update(dt: number): void {
        Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        window.stopDrawSound && this.AudioManager.stopSound(Constants.SoundTrack.drawSound);

        // this.handleMuteSoundIronSource();
    }
}
