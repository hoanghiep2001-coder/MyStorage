
import { _decorator, Collider, Component, easing, ERigidBodyType, ICollisionEvent, log, Node, RigidBody, tween, Tween, Vec3 } from 'cc';
import { GameInfo } from '../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BlackHole
 * DateTime = Wed Jan 01 2025 12:13:12 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = BlackHole.ts
 * FileBasenameNoExtension = BlackHole
 * URL = db://assets/Scripts/GamePlay/BlackHole.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('BlackHole')
export class BlackHole extends Component {


    speed: number = 8;
    deltaTime: number = 0.01;
    radian: number = null;
    thisWorldPos: Vec3 = new Vec3();

    rigidbody: RigidBody = null;
    collider: Collider = null;

    isActiveBounceAnim: boolean = false;
    scheduleCallback: void = null;
    bounceTimes: number = 0;
    tweenBounceAnim: Tween<Node> = null;


    protected start(): void {
        this.initRigidbody();
        this.registerPhysics();
    }


    private initRigidbody(): void {
        this.rigidbody = this.getComponent(RigidBody);
        this.collider = this.getComponent(Collider);
    }


    private registerPhysics(): void {
        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {

            if (e.otherCollider.node.name.includes("Capsule")
                || e.otherCollider.node.name.includes("Cube")
                || e.otherCollider.node.name.includes("Cylinder")
            ) {
                log(e.otherCollider.node.name)
                e.otherCollider.getComponent(RigidBody).setGroup(0);

                // tween(e.otherCollider.node)
                // .to(0.1, {worldPosition: this.thisWorldPos}, {easing: easing.smooth})
                // .start()
                
                // e.otherCollider.getComponent(RigidBody).type = ERigidBodyType.DYNAMIC;

                // this.scheduleOnce(() => {
                //     log("destroy")
                //     this.node.active = false;
                //     this.node.destroy();
                // }, 1);
            }
        })

        // this.collider.on("onCollisionExit", (e: ICollisionEvent) => {

        //     if (e.otherCollider.node.name.includes("Capsule")
        //         || e.otherCollider.node.name.includes("Cube")
        //         || e.otherCollider.node.name.includes("Cylinder")
        //     ) {
        //         e.otherCollider.getComponent(RigidBody).group = 2;   
        //         e.otherCollider.getComponent(RigidBody).type = ERigidBodyType.STATIC;             

        //     }
        // })
    }


    public bonceAnim(): void {
        if(this.isActiveBounceAnim) return;

        this.scheduleCallback = this.schedule(() => {
            this.isActiveBounceAnim = true;

            if (this.bounceTimes >= 4) {
                this.unschedule(this.scheduleCallback);
                return
            }

            this.bounceTimes += 1;
            this.speed += 1;

            const currentScale = this.node.getScale(),
                scaleUpNumber = 0.36,
             newScale = new Vec3(currentScale.x + scaleUpNumber, currentScale.y + scaleUpNumber, currentScale.z + scaleUpNumber)

            this.tweenBounceAnim = tween(this.node)
                .to(0.2, { scale: newScale }, { easing: easing.elasticOut })
                .start();
        }, 3);
    }


    public move(radian: number): void {
        const moveDirection = new Vec3(Math.sin(radian), 0, Math.cos(radian));
        moveDirection.normalize();
        moveDirection.multiplyScalar(this.speed * this.deltaTime);

        let pos = new Vec3(moveDirection.x, 0, moveDirection.z)

        this.node.setPosition(this.node.position.add(pos));
    }


    protected update(dt: number): void {
        GameInfo.isTouching && this.move(this.radian);
        this.thisWorldPos = this.node.worldPosition;

    }
}

