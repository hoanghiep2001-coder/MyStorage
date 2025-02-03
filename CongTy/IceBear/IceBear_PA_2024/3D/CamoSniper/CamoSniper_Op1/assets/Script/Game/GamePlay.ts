import { _decorator, Animation, Component, Node, Camera, tween, Vec2, Vec3, director } from 'cc';
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
    
    @property(Camera)
    Camera: Camera = null;


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.UIController.Gun.active = false;

        this.registerEvent();
    }


    private registerEvent(): void {
        this.UIController.HideMask.on(Node.EventType.TOUCH_START, this.handlePlayGame, this);
    }


    private handlePlayGame(): void {
        Constants.isToStore && this.GameController.installHandle();
        if(!Constants.isCanClick || Constants.ironSource.isEndGame) return;
        Constants.isFirstClick && this.GameController.installHandle();
        if(Constants.isFirstClick) return;

        this.handleIronSourcePlaySound();
        Constants.isCanClick = false;
        Constants.isFirstClick = true;
        this.Camera.getComponent(Animation).play("Camera_ShakeAnim");
        this.UIController.Aim.getComponent(Animation).play("Aim_MissShootAnim");
        this.AudioManager.playSound(Constants.SoundTrack.k98Sound);
        this.UIController.Aim.getComponent(Animation).play("Aim_WrongAnim");
        this.UIController.Bullets[0].active = false;
        this.UIController.Text_1.active = false;
        this.UIController.Text_2.active = true;
        this.scheduleOnce(() => {this.AudioManager.pauseSound(Constants.SoundTrack.k98Sound);}, 0.8);
        this.scheduleOnce(() => {this.reloadGun()}, 1.5);
    }


    private reloadGun(): void {
        this.UIController.Canvas.getComponent(Animation).play("Canvas_HideUI");

        tween(this.UIController.background)
        .to(0.2, {scale: new Vec3(0.7, 0.7, 0.7)})
        .call(() => {
            this.AudioManager.playSound(Constants.SoundTrack.k98Sound);
            this.UIController.BaseGun.getComponent(Animation).play("Gun_ReloadAnim");
            this.UIController.Gun.active = true;
        })
        .start();

        tween(this.UIController.node)
        .to(0.2, {scale: new Vec3(0.7, 0.7, 0.7)})
        .start();

        this.scheduleOnce(() => {
            Constants.isCanClick = true;
            director.loadScene("Scene_NextMap")
        }, 1.5);
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


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
          return;
        }
    
        if (Constants.ironSource.SoundState) {
          this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }
    
        Constants.ironSource.isPlayBgSound = true;
      }


    protected update(dt: number): void {
        // ironsource
        // this.handleMuteSoundIronSource();
    }
}
