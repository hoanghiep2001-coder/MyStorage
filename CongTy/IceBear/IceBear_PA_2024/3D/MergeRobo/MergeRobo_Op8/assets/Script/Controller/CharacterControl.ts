import { _decorator, BoxCollider, Component, ERigidBodyType, ICollisionEvent, math, Node, ParticleSystem, RigidBody, SkeletalAnimation, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
import { AudioManager } from '../Plugin/AudioManager';
import { NodesController } from './NodesController';
const { ccclass, property } = _decorator;

@ccclass('CharacterControl')
export class CharacterControl extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(NodesController)
    NodesController: NodesController = null;

    @property(Node)
    Level: Node = null;

    isRun: boolean = false;
    isFight: boolean = false;
    isFight_2: boolean = false;
    rigidbody: RigidBody;
    collider: BoxCollider;
    isCollide: boolean = false;


    protected onLoad(): void {
        // this.level.active = false;
        // this.node.active = false;
    }


    protected start(): void {

        this.rigidbody = this.node.getComponent(RigidBody);
        this.collider = this.node.getComponent(BoxCollider)

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            if (e.otherCollider.node.name === "Robo_Boss") {
                if (this.isCollide) {
                    return;
                }

                this.isCollide = true;

                this.playFireBallFX();

                this.AudioManager.playSound(Constants.SoundTrack.Dino_AttkSound);

                this.AudioManager.Dino_AttkSound.loop = true;

                this.getComponent(SkeletalAnimation).play("atk");

                this.node.name === "Robo_2" ? this.isFight = true : this.isFight_2 = true;

                Constants.isCharacterCollideBoos = true;

                this.scheduleOnce(() => {
                    this.node.name === "Robo_2" ? Constants.isFailStep1 = true : Constants.isFailStep2 = true;
                    this.die();
                }, 2)
            }
        });
    }   


    private playFireBallFX(): void {
        // this.NodesController.FX_FireBalls[0].getComponent(ParticleSystem).play();

        this.scheduleOnce(() => {this.NodesController.FX_FireBalls[0].getComponent(ParticleSystem).play();}, 0.5)
        this.scheduleOnce(() => {this.NodesController.FX_FireBalls[1].getComponent(ParticleSystem).play();}, 1)
        this.scheduleOnce(() => {this.NodesController.FX_FireBalls[2].getComponent(ParticleSystem).play();}, 1.5)
    }


    private die(): void {
        
        this.Level.active = false

        this.getComponent(SkeletalAnimation).play("die");
        this.node.name === "Robo_2" ? Constants.isDoneStep1 = true : Constants.isDoneStep2 = true;
        this.AudioManager.stopSound(Constants.SoundTrack.Dino_AttkSound);
        this.AudioManager.playSound(Constants.SoundTrack.DieSound);

        this.scheduleOnce(() => {Constants.isDonePA = true;}, 1)
    }


    private Run(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(0, 0, -10))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("walk");
        }

    }


    private runStep2(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -8))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("walk");
        }
    }


    protected update(dt: number): void {
        if (Constants.isFightStep1 && !this.isFight) {
            this.Run();
        }
    }
}

