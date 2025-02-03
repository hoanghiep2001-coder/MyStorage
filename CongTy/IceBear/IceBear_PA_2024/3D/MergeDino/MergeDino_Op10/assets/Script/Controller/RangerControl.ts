
import { _decorator, Component, Node, ERigidBodyType, BoxCollider, RigidBody, ICollisionEvent, math, SkeletalAnimation, Vec3 } from 'cc';
import { CharacterControl } from './CharacterControl';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;

@ccclass('RangerControl')
export class RangerControl extends Component {

    isRun: boolean = false;
    isFight: boolean = false;
    rigidbody: RigidBody;
    collider: BoxCollider;


    protected start(): void {
        this.getComponent(SkeletalAnimation).play("Idle_1");

        this.rigidbody = this.node.getComponent(RigidBody);
        this.collider = this.node.getComponent(BoxCollider);

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            if (e.otherCollider.node.name === "Rex" && e.selfCollider.node.name !== "Unit_9") {
                this.rigidbody.type = ERigidBodyType.STATIC;
                this.isFight = true;
                this.die();
            }

            if (e.selfCollider.node.name === "Unit_9") {
                this.rigidbody.type = ERigidBodyType.STATIC;
                this.isFight = true;
                this.die();
            }
        });
    }


    private die(): void {
        this.node.getComponent(SkeletalAnimation).play("Die");

        this.scheduleOnce(() => {
            this.node.active = false;
            this.node.getComponent(SkeletalAnimation).stop()
        }, 1.5);
    }


    private Run(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;

        switch (this.node.parent.name) {
            case "Unit_9":
                this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -12))
                break;
            case "Unit_10":
                this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12))
                break;
            case "Unit_11":
                this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12))
                break;
            case "Unit_12":
                this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12))
                break;
            case "Unit_13":
                this.rigidbody.setLinearVelocity(new math.Vec3(-5, 0, -12))
                break;
            case "Unit_14":
                this.rigidbody.setLinearVelocity(new math.Vec3(-5, 0, -12))
                break;
            default:
                break;
        }

        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
        }
    }


    private runStep2(): void {
        this.rigidbody.type = ERigidBodyType.DYNAMIC;

        switch (this.node.parent.name) {
            case "Unit_1":
                this.rigidbody.setLinearVelocity(new math.Vec3(12, 0, -13))
                break;
            case "Unit_2":
                this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13))
                break;
            case "Unit_3":
                this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13))
                break;
            case "Unit_4":
                this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13))
                break;
            case "Unit_5":
                this.rigidbody.setLinearVelocity(new math.Vec3(5, 0, -13))
                break;
            case "Unit_6":
                this.rigidbody.setLinearVelocity(new math.Vec3(5, 0, -13))
                break;
            case "Unit_7":
                this.rigidbody.setLinearVelocity(new math.Vec3(11, 0, -13))
                break;
            case "Unit_8":
                this.rigidbody.setLinearVelocity(new math.Vec3(11, 0, -13))
                break;
        }


        if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
        }
    }


    protected update(dt: number): void {
        if (Constants.isFightStep1 && !this.isFight && !Constants.isFailStep1) {
            this.Run();
        }

        if(Constants.isFightStep2 && !this.isFight && Constants.isStartStep2) {
            this.runStep2();
        }
    }
}
