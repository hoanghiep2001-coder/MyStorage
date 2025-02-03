
import { _decorator, BoxCollider, Component, ERigidBodyType, ICollisionEvent, math, Node, RigidBody, SkeletalAnimation, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
import { AudioManager } from '../Plugin/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('CharacterControl')
export class CharacterControl extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;
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
        this.getComponent(SkeletalAnimation).play("Idle_2");
        this.node.setScale(new Vec3(0, 0, 0));

        this.rigidbody = this.node.getComponent(RigidBody);
        this.collider = this.node.getComponent(BoxCollider)

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            if (e.otherCollider.node.name === "Rex") {
                if (this.isCollide) {
                    return;
                }

                this.isCollide = true;
                this.AudioManager.playSound(Constants.SoundTrack.Dino_AttkSound);
                this.AudioManager.Dino_AttkSound.loop = true;
                this.getComponent(SkeletalAnimation).play("Atk_1");
                this.node.name === "Rap" ? this.isFight = true : this.isFight_2 = true;
                this.node.name === "Rap" ? Constants.isCharacterCollideBoos = true : Constants.isCharacter_2CollideBoos = true;
                this.scheduleOnce(() => {
                    this.node.name === "Rap" ? Constants.isFailStep1 = true : Constants.isFailStep2 = true;
                    this.die();
                }, 2)
            }
        });
    }


    private die(): void {
        this.getComponent(SkeletalAnimation).play("Die");
        this.node.name === "Rap" ? Constants.isDoneStep1 = true : Constants.isDoneStep2 = true;
        this.AudioManager.stopSound(Constants.SoundTrack.Dino_AttkSound);
    }


    private Run(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(2, 0, -8))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
        }

    }


    private runStep2(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;
        this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -8))
        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
        }
    }


    protected update(dt: number): void {
        if (Constants.isFightStep1 && !this.isFight && this.node.name === "Rap") {
            this.Run();
        }

        if (Constants.isFightStep2 && !this.isFight_2) {
            this.runStep2();
        }
    }
}

