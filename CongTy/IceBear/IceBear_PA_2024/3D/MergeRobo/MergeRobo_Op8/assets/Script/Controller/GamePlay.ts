import { _decorator, Animation, AudioSource, Camera, view, Vec2, Component, EventTouch, Graphics, log, math, Node, PhysicsSystem, quat, RigidBody, SkeletalAnimation, Skeleton, Vec3, UITransform, ParticleSystem, PrivateNode, tween, easing } from 'cc';
import { GameController } from './GameController';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
import { NodesController } from './NodesController';
import { BossController } from './BossController';
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
    @property(BossController)
    BossController: BossController = null;

    // state
    isMergeStep1Flag: boolean = false;
    isMergeStep2Flag: boolean = false;
    isDonePA: boolean = false;


    protected onLoad(): void {

    }


    protected start(): void {
        this.NodesController.Text_Tap.active = false;

        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }


    private startHintToMerge(robo1: Node, robo2: Node): void {
        let robo1Pos = robo1.getPosition();
        let robo2Pos = robo2.getPosition();

        tween(robo1)
            .to(0.5, 
                { position: new math.Vec3(robo1Pos.x, -12.1, robo1Pos.z) },
                { easing: easing.elasticInOut }
            )
            .start();

        tween(robo2)
            .to(0.5, 
                { position: new math.Vec3(robo2Pos.x, -12.1, robo2Pos.z) }, 
                { easing: easing.elasticInOut }
            )
            .start();
    }


    private mergeStep1(): void {
        Constants.isCanTouch = false;

        this.isMergeStep1Flag = true;

        let robo1 = this.NodesController.robo_Step1[0];
        let robo2 = this.NodesController.robo_Step1[1];
        let robo3 = this.NodesController.robo_Step1[2];
        let posRobo3 = robo3.getPosition();

        this.NodesController.robo_Step1.forEach(robo => robo.getComponent(SkeletalAnimation).play("pickup"));

        this.startHintToMerge(robo1, robo2);

        this.scheduleOnce(() => {
            tween(robo1)
                .to(0.5, { position: posRobo3 })
                .start();

            tween(robo2)
                .to(0.5, { position: posRobo3 })
                .call(() => {
                    this.NodesController.Spine_Flash.active = true;

                    this.NodesController.hideMask.getComponent(Animation).play();

                    this.AudioManager.playSound(Constants.SoundTrack.MergeSound);

                    robo1.active = false;

                    robo2.active = false;

                    this.scheduleOnce(() => {

                        this.NodesController.optimus_Step1.active = true;

                        this.BossController.playDanceAnim();
                    }, 0.5);
                })
                .start();
        }, 0.5);


        this.scheduleOnce(() => {
            this.showStep2();
        }, 4)
    }


    private showStep2(): void {
        this.NodesController.hideMask.getComponent(Animation).play();

        this.scheduleOnce(() => {
            Constants.isCanTouch = true;

            this.NodesController.Text_Tap.active = true;

            this.activeEasingTweenForNode(this.NodesController.Text_Tap, 0.35, 0.3);
            
            this.NodesController.optimus_Step1.setRotationFromEuler(0, 180, 0);

            this.NodesController.optimus_Step1.children[0].getChildByName("Level").setRotationFromEuler(0, -180, 0)

            this.NodesController.optimus_Step1.children[0].getChildByName("Level").setPosition(0.008, 0.025, -0.006)

            this.BossController.playMuscleAnim();

        }, 0.5);
    }


    private activeEasingTweenForNode(node: Node, scaleUp: number, scaleDown: number): void {
       tween(node)
        .repeatForever(
           tween(node)
                .to(0.5, { scale: new Vec3(scaleUp, scaleUp, scaleUp) })
                .to(0.5, { scale:  new Vec3(scaleDown, scaleDown, scaleDown)}, { easing: easing.elasticOut})
        ).start();
    }


    private showCTA(): void {
        this.isDonePA = true;

        this.NodesController.CTA.active = true;

        this.activeEasingTweenForNode(this.NodesController.CTA_btn, 0.5, 0.45);
    }


    protected update(dt: number): void {
        Constants.GameData.isDoneStep1 && !this.isMergeStep1Flag && this.mergeStep1();
        Constants.isDonePA && !this.isDonePA && this.showCTA();
    }
}
