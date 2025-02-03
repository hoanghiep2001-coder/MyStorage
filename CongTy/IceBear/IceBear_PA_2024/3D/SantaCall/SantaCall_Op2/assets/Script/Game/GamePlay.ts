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


    @property(VideoPlayer)
    video: VideoPlayer = null;
    @property(Node)
    HideMask: Node = null;
    @property(Node)
    hand: Node = null;
    @property(Node)
    btn_accept: Node = null;
    @property(Node)
    btn_decline: Node = null;


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


    protected onLoad(): void {
        this.CTA.active = false;
    }
    
    
    protected start(): void {
        Constants.isCanClick = true;
        this.video.node.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.iphoneSound);
        // this.AudioManager.switchVolume(Constants.SoundTrack.iphoneSound, 0.7);
        this.registerEvent();
    }


    private registerEvent(): void {
        this.HideMask.on(Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
        this.btn_accept.on(Node.EventType.TOUCH_START, this.handleVideo, this);
        this.btn_decline.on(Node.EventType.TOUCH_START, this.handleInstall, this);
    }


    private handleVideo(): void {
        if(!Constants.isCanClick) {
            return;
        }

        Constants.isCanClick = false;  
        Constants.isFirstClick = true;
        Constants.isRotate ? this.layer.active = true : this.layer.active = false; 

        this.UIController.node.active = false;
        this.video.node.active = true;
        this.video.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.initVideo, this);
        this.video.node.on(VideoPlayer.EventType.COMPLETED, this.endVideo, this);
        this.hand.active = false;
        this.AudioManager.stopSound(Constants.SoundTrack.iphoneSound);
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
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
        this.AudioManager.stopSound(Constants.SoundTrack.iphoneSound);
        this.CTA.active = true;
        this.layer_icon.active = false;

        this.btn_accept.off(Node.EventType.TOUCH_START);
        this.btn_decline.off(Node.EventType.TOUCH_START);
        this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
        this.handleMuteSoundIronSource();
    }
}
