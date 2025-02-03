import { _decorator, Animation, Component, Node, Camera, tween, Vec2, Vec3, director, SkeletalAnimation, Rect, UITransform, math } from 'cc';
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


    isHit: boolean[] = [false, false, false, false, false];

    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.UIController.Aim.active = false;
        this.UIController.EnemyStatus.active = false;
    }


    public activeAimTargets(): void {
        for (let index = 0; index < this.UIController.AimTargets.length; index++) {
            const node = this.UIController.AimTargets[index];
            node.getComponent(Animation).play();
        }
    }


    public shoot(): void {
        Constants.isCanClick = false;
        Constants.countShoot += 1;
        this.UIController.Gun_Blast.node.active = true;
        this.UIController.Gun_Blast.setAnimation(0, "2", false);
        this.AudioManager.playSound(Constants.SoundTrack.k98Sound);
        this.UIController.BaseGun.getComponent(Animation).play("Gun_ShootAnim");
        this.scheduleOnce(() => {
            this.AudioManager.pauseSound(Constants.SoundTrack.k98Sound);
            this.UIController.Aim.active = false;
            this.UIController.Gun.active = true;
            tween(this.UIController.background)
            .to(0.2, {position: new Vec3(0,0,0)})
            .start()
        }, 0.8);
        this.scheduleOnce(() => { this.reloadGun() }, 1);
    }


    public handleZoomCamera(isZoomIn: boolean) {
        let fov: number;
        isZoomIn ? fov = 9 : fov = 30;
        tween(this.UIController.Camera)
            .to(0.2, { fov: fov })
            .start();
    }


    private reloadGun(): void {
        this.handleZoomCamera(false);
        this.AudioManager.playSound(Constants.SoundTrack.k98Sound);
        this.UIController.BaseGun.getComponent(Animation).play("Gun_ReloadAnim");
        this.UIController.Gun.getComponent(SkeletalAnimation).play("reload");
        this.scheduleOnce(() => { Constants.isCanClick = true; }, 1)
    }


    public checkHitEnemy(): void {
        let pointBdx: Rect = this.UIController.point.getComponent(UITransform).getBoundingBoxToWorld();
        for (let index = 0; index < this.UIController.Enemies.length; index++) {
            const node = this.UIController.Enemies[index];
            let enemyBdx = node.getComponent(UITransform).getBoundingBoxToWorld();
            if (pointBdx.intersects(enemyBdx)) {
                
                node.active = false;
                this.isHit[index] = true;
                
                let enemyLife = this.UIController.EnemyCounts[index];
                enemyLife.getChildByName("ic_enemy_off").active = true;
                Constants.countScore += 1;

                this.activeCombo(Constants.countScore)
                this.UIController.EnemyCounts.splice(index, 1);
                this.UIController.Enemies.splice(index, 1);
                this.UIController.AimTargets.splice(index, 1);
            }
        }

        let isHit = this.isHit.find(item => item === true);
        !isHit && this.shootMiss();
        this.resetHitStatus();
    }


    private resetHitStatus(): void {
        this.isHit[0] = false;
        this.isHit[1] = false;
        this.isHit[2] = false;
        this.isHit[3] = false;
        this.isHit[4] = false;
    }


    private shootMiss(): void {
        this.UIController.ShootMiss.getComponent(Animation).play("ShootMiss_Anim");
    }


    private activeCombo(score: number): void {
        switch (score) {
            case 1:
                this.AudioManager.playSound(Constants.SoundTrack.GreatSound1);
                this.UIController.Combo.setSkin("Combo 1");
                this.UIController.Combo.setAnimation(0, "action", false);
                break;
            case 2:
                this.AudioManager.playSound(Constants.SoundTrack.GreatSound2);
                this.UIController.Combo.setSkin("Combo 2");
                this.UIController.Combo.setAnimation(0, "action", false);
                break;
            case 3:
                this.AudioManager.playSound(Constants.SoundTrack.GreatSound3);
                this.UIController.Combo.setSkin("Combo 3");
                this.UIController.Combo.setAnimation(0, "action", false);
                break;
            default:
                break;
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
        this.handleMuteSoundIronSource();
    }
}
