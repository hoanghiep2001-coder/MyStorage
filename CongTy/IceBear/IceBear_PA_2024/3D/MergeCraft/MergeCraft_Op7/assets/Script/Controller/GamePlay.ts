import { _decorator, Component, Node, UITransform, ParticleSystem, tween, Vec3, log, SkeletalAnimation, Event } from 'cc';
import { GameController } from './GameController';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
import { NodesController } from './NodesController';
const { ccclass, property } = _decorator;

@ccclass('GamePlay')
export class GamePlay extends Component {

    // Script 
    @property(NodesController)
    NodesController: NodesController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    

    // state
    isMergeStep: boolean = false;
    isMergeFlag: boolean = false;
    dino1: Node = null;
    dino2: Node = null;
    inPosMergeState: number = 0;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.switchVolume(Constants.SoundTrack.bgSound, 0.65);
        // this.unActiveUI();
        // this.unActiveDinos();
    }


    private unActiveNuggets(): void {
        for (let index = 1; index < this.NodesController.Nuggets.length; index++) {
            const nugget = this.NodesController.Nuggets[index];
            nugget.active = false;
        }
    }


    public checkMergeDino(): void {
        Constants.isDoneMerge1 ? this.handleStep2() : this.handleStep1();
    }


    public checkMerge(): void {
        for (let i = 0; i < this.NodesController.Points.length; i++) {
            let currentNode = this.NodesController.Points[i];
            let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
            let pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();
            if (nodeBdx.intersects(pointBdx)) {
                if (Constants.mergeStatus[i]) {
                    break;
                }

                for (let j = 0; j < Constants.mergeStatus.length; j++) {
                    if (!Constants.mergeStatus[j]) {
                        this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound);
                        Constants.mergeStatus[i] = true;
                        this.NodesController.NuggetLines[i].active = true;

                        let stateArr = Constants.mergeStatus.filter((state => state === true));
                        const arrayOf4 = stateArr.slice(0, 5);

                        if (arrayOf4.every(state => state === true) && arrayOf4[4]) {
                            console.log("done drag to Merge!!");
                            Constants.isMerged = true;
                            this.merge();
                        }
                        break;
                    }
                }
                break;
            }
        }
    }


    private merge(): void {
        this.NodesController.NuggetLines.forEach(line => line.active = false);
        for (let index = 0; index < this.NodesController.Nuggets.length; index++) {
            const nugget5Pos = this.NodesController.Nuggets[4].getPosition();
            const nugget = this.NodesController.Nuggets[index];
            if(!nugget.name.includes("5")) {
                tween(nugget)
                .to(1, {position: new Vec3(nugget5Pos)}, {easing: 'elasticInOut'})
                .call(() => {
                    nugget.active = false;
                    this.inPosMergeState += 1;
                })
                .start();
            }
        }
    }


    private showSkibidiNugget(): void {
        console.log("Merged");
        this.isMergeFlag = true;
        let SkibidiNugget = this.NodesController.SkibidiNugget;
        
        SkibidiNugget.active = true;
        this.NodesController.Nuggets[4].active = false;
        
            this.AudioManager.playSound(Constants.SoundTrack.Dino_MergeSound);
            this.AudioManager.playSound(Constants.SoundTrack.NuggetSound)
            this.NodesController.FX_Lightning.node.active = true;

            this.scheduleOnce(() => {
                this.showPopup();
            }, 1);
    }


    private showPopup(): void {
        log("show popup");
        this.NodesController.Popup.active = true;
        // this.NodesController.btnFight.active = true;
        // tween(this.NodesController.btnFight)
        // .repeatForever(
        //     tween(this.NodesController.btnFight)
        //     .to(0.5, {scale: new Vec3(0.35, 0.35, 0.35)})
        //     .to(0.5, {scale: new Vec3(0.4, 0.4, 0.4)}, {easing: 'elasticOut'})
        // )
        // .start();
    }


    public resetNuggetMerge(active: boolean): void {
        for (let index = 0; index < this.NodesController.NuggetLines.length; index++) {
            const node = this.NodesController.NuggetLines[index];
            node.active = active;
        }

        Constants.mergeStatus[0] = false;
        Constants.mergeStatus[1] = false;
        Constants.mergeStatus[2] = false;
        Constants.mergeStatus[3] = false;
        Constants.mergeStatus[4] = false;
    }


    public nuggetShoot(): void {
        this.NodesController.Popup.active = false;
        this.NodesController.SkibidiNugget
        .getComponent(SkeletalAnimation).play("skibidi_nugget_atk");

        this.NodesController.FX_Fires[0].play();
        this.AudioManager.playSound(Constants.SoundTrack.BoomSound);
        this.scheduleOnce(() => {
            this.NodesController.FX_Fires[1].play();
            this.AudioManager.playSound(Constants.SoundTrack.BoomSound);
        }, 0.5)

        this.scheduleOnce(() => {
            this.NodesController.FX_Fires[2].play();
            this.AudioManager.playSound(Constants.SoundTrack.BoomSound);;
            this.NodesController.Boss.active = false;
            this.NodesController.Boss_Die.active = true;
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.CTA.active = true;

            this.scheduleOnce(() => {
                tween(this.NodesController.CTA_btn)
                .repeatForever(
                    tween(this.NodesController.CTA_btn)
                    .to(0.5, {scale: new Vec3(0.5, 0.5, 0.5)})
                    .to(0.5, {scale: new Vec3(0.45, 0.45, 0.45)}, {easing: 'elasticOut'})
                )
                .start();
            }, 1.5)
        }, 3)
    }


    private showCTA(): void {
        this.NodesController.CTA.active = true;

        this.scheduleOnce(() => {
            tween(this.NodesController.CTA_btn)
            .repeatForever(
                tween(this.NodesController.CTA_btn)
                .to(0.5, {scale: new Vec3(0.5, 0.5, 0.5)})
                .to(0.5, {scale: new Vec3(0.45, 0.45, 0.45)}, {easing: 'elasticOut'})
            )
            .start();
        }, 1.5)
    }


    protected update(dt: number): void {
        !this.isMergeFlag && this.inPosMergeState === 4 && this.showSkibidiNugget();
    }

}
