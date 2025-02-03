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
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    }


    protected start(): void {
        if(window.isLoseGame || Constants.isLoseLv2) {
            window.changeEggRigidbodyType = false;
            this.isHit = true;
            this.Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

            cc.tween(this.Overlay)
            .to(0.5, {opacity: 0}, {easing: cc.easing.smooth})
            .call(() => {Constants.isCanTouch = true})
            .start();
        }

        Constants.isWinGame = false;
        window.isLoseGame = false;
        this.NodesController.CTA.active = false;

        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        Constants.isCanTouch = true;
    }


    private handleGamePlay(): void {
        Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        Constants.CharacterPos.y = Constants.CharacterPos.y + 25
        this.registerEvent();
    }


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
        window.isReplayGame = true;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(Constants.SoundTrack.crySound);

        if(window.currentLv === 2) {
            this.scheduleOnce(() => {            
                cc.tween(this.Overlay)
                .to(0.5, {opacity: 255}, {easing: cc.easing.smooth})
                .call(() => {cc.director.loadScene("Lv2")})
                .start();
            }, 2);
        } else {
            this.scheduleOnce(() => {            
                cc.tween(this.Overlay)
                .to(0.5, {opacity: 255}, {easing: cc.easing.smooth})
                .call(() => {cc.director.loadScene("Lv1_PlayAgain")})
                .start();
            }, 2);
        }

    }


    public loseLv2(): void {
        cc.tween(this.Overlay)
        .to(0.5, {opacity: 255}, {easing: cc.easing.smooth})
        .call(() => {cc.director.loadScene("Lv2")})
        .start();
    }


    public winGame(): void {
        Constants.isWinGame = true;
        window.currentLv = 2
        this.NodesController.Spine_Character.setAnimation(0, "result_win", true);
        this.AudioManager.playSound(Constants.SoundTrack.winSound);

        this.scheduleOnce(() => {cc.director.loadScene("Lv2")}, 2);
    }


    private unactiveHint(): void {
        this.handleIronSourcePlaySound();
        this.isHint = true;
        this.NodesController.Hint.active = false;
    }


    protected update(dt: number): void {
        Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        window.stopDrawSound && this.AudioManager.stopSound(Constants.SoundTrack.drawSound);

        this.handleMuteSoundIronSource();
    }
}
