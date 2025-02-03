import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodesController from "./NodesController";
// import * as PF from "pathfinding";

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

    // State
    curentPosition: cc.Vec2 = null;
    currentHint: cc.Node = null;
    currentPencil: cc.Graphics = null;
    curerntPoint: cc.Node = null;

    isHit: boolean = false;
    isHint: boolean = false;
    hasResult: boolean = false;


    protected onLoad(): void {
        let physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    }


    protected start(): void {
        this.NodesController.CTA.active = false;

        // !Constants.isWin && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        this.handleGamePlay();
        Constants.isCanTouch = true;
        Constants.EggDieCount = 0;
        window.isWin = false;
        window.isLineStop = false;
    }


    private handleGamePlay(): void {
        // Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        // this.registerEvent();
        let hand = this.NodesController.hint.getChildByName("hand");
        if(Constants.isLoseGameFirstTime) {
            hand.getComponent(cc.Animation).play("Hint_2_Anim");
            let line = this.NodesController.hint.getChildByName("Shape 1");
            line.opacity = 255;
        } else {
            hand.getComponent(cc.Animation).play("Hint_1_Anim");
            let line = this.NodesController.hint.getChildByName("Line 1");
            line.opacity = 255;
        }
    }


    private registerEvent(): void {

    }


    private unactiveHint(): void {
        this.isHint = true;
        // this.handleIronSourcePlaySound();
        // this.NodesController.Hint.active = false;
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
    

    private failGame(): void {
        if(this.hasResult) return;

        console.log("fail");

        Constants.isLoseGameFirstTime = true;
        this.AudioManager.playSound(Constants.SoundTrack.thaybaSound);
        this.hasResult = true;
        this.NodesController.text_tryAgain.getComponent(cc.Animation).play();
        for (let index = 0; index < this.NodesController.eggs.length; index++) {
            if(this.NodesController.eggs[index].active) {
                const node = this.NodesController.eggs[index];
                node.getChildByName("Fail_Icon").active = true;
            }
        }
        
        
        this.scheduleOnce(() => {
            cc.director.loadScene("game");
        }, 1.5)
    }


    private winGame(): void {

        if(this.hasResult) return;

        console.log("win");

        this.hasResult = true;
        Constants.isWin = true;
        window.isWin = true;
        this.scheduleOnce(() => {
            this.AudioManager.playSound(Constants.SoundTrack.winSound);
            this.NodesController.text_eggcelent.getComponent(cc.Animation).play();
        }, 1.5);

        this.scheduleOnce(() => {
            cc.director.loadScene("game_2");
        }, 3);
    }


    protected update(dt: number): void {
        if(Constants.EggDieCount === 3) {
            this.winGame();
        }

        if(window.isLineStop && Constants.EggDieCount < 3) {
            this.failGame();
        }

        
        this.handleMuteSoundIronSource();
    }
}
