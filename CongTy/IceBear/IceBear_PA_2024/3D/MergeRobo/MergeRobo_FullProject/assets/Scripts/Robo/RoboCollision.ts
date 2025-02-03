
import { _decorator, Collider, Component, easing, ERigidBodyType, ICollisionEvent, log, Node, RigidBody, SkeletalAnimation, Tween, tween, TweenAction, TweenSystem, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { RoboAnim } from './RoboAnim';
import { RoboBehavior } from './RoboBehavior';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RoboCollision
 * DateTime = Fri Aug 30 2024 10:09:25 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = RoboCollision.ts
 * FileBasenameNoExtension = RoboCollision
 * URL = db://assets/Scripts/Robo/RoboCollision.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('RoboCollision')
export class RoboCollision extends Component {

    @property(RigidBody)
    rigidBody: RigidBody = null;

    @property(Collider)
    collider: Collider = null;

    speed: number = 5;

    isCollideBoss: boolean = false;

    currentAnim: string = null;

    isActiveTween: boolean = false;

    tweenState: Tween<null> = null;
    

    startFunction: boolean = false;

    protected start(): void {
        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
            // enemy robo
            if (this.node.name === "Boss" && !GameInfo.isWin) {
                this.changeAnim(RoboAnim.Atk);

                if(GameInfo.roboMerged_Level < GameInfo.bossLevel) this.loseBoss(); 
                else this.winBoss();

                // if(GameInfo.currentOption === 13) {
                //     this.bossLose
                // } 
            }

            // player Robo
            if (e.otherCollider.node.name === "Boss") {
                log("Collide Boss")

                GameInfo.isTouchBoss = true;

                this.isCollideBoss = true;

                this.rigidBody.type = ERigidBodyType.STATIC;
                this.changeAnim(RoboAnim.Atk);

                this.scheduleOnce(() => {
                    // lose boss
                    if(GameInfo.roboMerged_Level < GameInfo.bossLevel) this.changeAnim(RoboAnim.Die);

                    // win boss
                    else this.changeAnim(RoboAnim.Idle);
                }, 2.5)
            }
        });
    }


    private moveRigidbodyToTarget(): void {
        if (this.node.name === "Boss") return;

        this.changeAnim(RoboAnim.Walk);

        const currentWorldPosition = this.node.worldPosition;
        // Tính toán hướng từ vị trí hiện tại đến vị trí mục tiêu
        const direction = new Vec3();
        Vec3.subtract(direction, GameInfo.bossPos, currentWorldPosition);

        // Chuẩn hóa vectơ hướng
        direction.normalize();

        // Tính toán vận tốc dựa trên hướng và tốc độ mong muốn
        let velocity = new Vec3();
        Vec3.multiplyScalar(velocity, direction, this.speed);

        // Đặt vận tốc cho Rigidbody
        this.rigidBody.setLinearVelocity(velocity);
    }


    private changeAnim(animName: string): void {
        if (this.currentAnim === animName) return;

        this.currentAnim = animName;
        this.node.getChildByName("Robo_Base").getComponent(SkeletalAnimation).play(animName);
    }


    private loseBoss(): void {
        this.startFunction = true;

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[0].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[0].play();
        }, 0.5);

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[1].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[1].play();
        }, 1.5);

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[2].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[2].play();

            this.changeAnim(RoboAnim.Idle);
            
            GameInfo.isLose = true;
        }, 2.5);
    }


    private winBoss(): void {
        this.startFunction = true;

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[0].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[0].play();
        }, 0.5);

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);
            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[1].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[1].play();
        }, 1.5);

        this.scheduleOnce(() => {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bangSound);

            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboBehavior).PS_Fires[2].play()
            );
            // this.getComponent(RoboBehavior).PS_Fires[2].play();

            GameInfo.enemyStartGameRobo.forEach(robo => 
                robo.getComponent(RoboCollision).changeAnim(RoboAnim.Die)
            );

            // this.changeAnim(RoboAnim.Die);
            
            GameInfo.isWin = true;
        }, 2.5);
    }


    private updateAnimForBoss(): void {
        this.node.name === "Boss" && !GameInfo.IsShowPopupInstall && this.changeAnim(RoboAnim.Atk);

        // GameInfo.isLose && !this.startFunction && this.node.name === "Boss" && this.loseBoss();
        // GameInfo.isWin && !this.startFunction && this.node.name === "Boss" && this.winBoss();
        // if(GameInfo.isWin && this.node.name === "Boss") this.changeAnim(RoboAnim.Die);
    }


    protected update(dt: number): void {
        // dùng cho di chuyển vật lý
        GameInfo.isReadyToFight && !this.isCollideBoss && this.moveRigidbodyToTarget(); 
 
        GameInfo.currentOption === 13 && GameInfo.isTouchBoss && this.updateAnimForBoss();
    }
}

