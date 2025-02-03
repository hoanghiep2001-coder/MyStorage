import { _decorator, Animation, Component, EventTouch, Node, PhysicsSystem, SkeletalAnimation, Vec2, Vec3, ParticleSystem, log, sp, view, UITransform, Label, Sprite, VideoPlayer, director, Button, ParticleSystem2D } from 'cc';
const { ccclass, property } = _decorator;
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
import { Constants } from '../Data/constants';

@ccclass('GamePlay')
export class GamePlay extends Component {
    // Component
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;


    @property(VideoPlayer)
    video: VideoPlayer = null;
    @property(Node)
    HideMask: Node = null;
    @property(ParticleSystem2D)
    effect_blink: ParticleSystem2D = null;


    protected onLoad(): void {

    }


    protected start(): void {
        Constants.isCanClick = true;
        this.video.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.initVideo, this);
        this.registerEvent();
    }


    private registerEvent(): void {
        this.HideMask.on(Node.EventType.TOUCH_START, this.handleVideo, this);
    }


    private handleVideo(): void {
        if(!Constants.isCanClick) {
            return;
        }

        Constants.isCanClick = false;  
        this.video.play();
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        if(Constants.isSecondClick ) {
            this.AudioManager.stopAllSound();
            this.GameController.installHandle();
            return;
        }

        this.scheduleOnce(() => {
            // this.effect_blink.resetSystem();
            this.AudioManager.playSound(Constants.SoundTrack.CompleteSound);
        }, 1.2)

        if(Constants.isFirstClick && !Constants.isSecondClick) {
            Constants.isSecondClick = true;

            this.scheduleOnce(() => {
                this.video.pause();
                Constants.isCanClick = true;
                this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
            }, 2);
        }

        if(!Constants.isFirstClick) {
            Constants.isFirstClick = true;

            this.scheduleOnce(() => {
                this.video.pause();
                Constants.isCanClick = true;
                this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
            }, 2);
        }
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
        video.pause();
        video.volume = 0;
    }


    protected update(dt: number): void {
        // ironsource
        this.handleMuteSoundIronSource();
    }
}
