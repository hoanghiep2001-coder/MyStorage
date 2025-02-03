
import { _decorator, BoxCollider, Component, ERigidBodyType, ICollisionEvent, math, Node, RigidBody, SkeletalAnimation, Vec3 } from 'cc';
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
    level: Node = null;


    isRun: boolean = false;
    isFight: boolean = false;
    isFight_2: boolean = false;
    rigidbody: RigidBody;
    collider: BoxCollider;
    isCollide: boolean = false;


    protected onLoad(): void {
        this.level.active = false;
        this.node.active = false;
    }


    protected start(): void {
        this.getComponent(SkeletalAnimation).play("muscle");
        this.node.setScale(new Vec3(0, 0, 0));

        this.rigidbody = this.node.getComponent(RigidBody);
        this.collider = this.node.getComponent(BoxCollider)

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            if (e.otherCollider.node.name === "Robo_Boss") {
                if (this.isCollide) {
                    return;
                }

                this.isCollide = true;
                this.AudioManager.playSound(Constants.SoundTrack.Dino_AttkSound);
                this.AudioManager.Dino_AttkSound.loop = true;
                this.getComponent(SkeletalAnimation).play("atk");
                this.node.name === "Robo" ? this.isFight = true : this.isFight_2 = true;
                this.node.name === "Robo" ? Constants.isCharacterCollideBoos = true : Constants.isCharacter_2CollideBoos = true;

                this.scheduleOnce(() => this.NodesController.FX_FireBall1.play(), 0.5);
                this.scheduleOnce(() => {
                    this.NodesController.FX_FireBall2.play();
                }
                , 1);
                this.scheduleOnce(() => this.NodesController.FX_FireBall3.play(), 1.5);

                this.scheduleOnce(() => {
                    this.node.name === "Robo" ? Constants.isFailStep1 = true : Constants.isFailStep2 = true;
                    this.die();

                    this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.ExplosionSound)} ,1.2)
                }, 2)
            }
        });
    }


    private die(): void {
        this.getComponent(SkeletalAnimation).play("die");
        this.node.name === "Robo" ? Constants.isDoneStep1 = true : Constants.isDoneStep2 = true;
        this.AudioManager.stopSound(Constants.SoundTrack.Dino_AttkSound);
    }


    private Run(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(2, 0, -10))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("walk");
        }

    }


    private runStep2(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -10))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("walk");
        }
    }


    protected update(dt: number): void {
        if (Constants.isFightStep1 && !this.isFight && this.node.name === "Robo") {
            this.Run();
        }

        if (Constants.isFightStep2 && !this.isFight_2) {
            this.runStep2();
        }
    }
}

