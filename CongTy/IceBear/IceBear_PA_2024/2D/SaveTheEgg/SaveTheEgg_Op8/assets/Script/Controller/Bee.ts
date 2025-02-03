import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import GamePlay from "./GamePlay";
// import * as PF from "pathfinding";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Bee extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;
    
    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(cc.RigidBody)
    rigidBody: cc.RigidBody = null;

    isCollide: boolean = false;
    initPos: cc.Vec2 = null;
    targetPos: cc.Vec2 = null;
    isJumpback: boolean = false;


    protected start(): void {
        this.initTargetPos();
        this.beginContact();
        this.initPos = this.node.getPosition();
    }


    private initTargetPos(): void {
        let random = cc.math.randomRangeInt(1, 4);
        
        switch (random) {
            case 1:
                this.targetPos = Constants.Char_Point1;
                break;
            case 2:
                this.targetPos = Constants.Char_Point2;
                break;
            case 3:
                this.targetPos = Constants.Char_Point3;
                break;
            default:
                break;
        }
    }


    private beginContact(): void {
        this.rigidBody.onBeginContact = (c, s, o) => {

            if (o.tag === 4 && !Constants.isHit) {
                this.jumpBack();
                console.log("collide line");
            }

            if (o.tag === 3) {
                if (this.isCollide) {
                    return;
                }

                // if(window.currentLv === 2) {
                //     Constants.isLoseLv2 = true;
                //     o.getComponent(cc.RigidBody).destroy();
                //     o.getComponent(cc.Collider).destroy();
                //     this.AudioManager.playSound(Constants.SoundTrack.stingSound);
                //     this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
                //     this.scheduleOnce(() => {this.GamePlay.loseLv2()}, 2.5)
                //     return;
                // }

                this.AudioManager.playSound(Constants.SoundTrack.stingSound);
                this.isCollide = true;
                window.isLoseGame = true;
                Constants.isHit = true;
                this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
            }
        }
    }


    private jumpBack(): void {
        this.isJumpback = true;
        this.isCollide = true;
        cc.tween(this.node)
        .to(0.2, {x: this.initPos.x, y: this.initPos.y}, {easing: cc.easing.smooth})
        .call(() => {
            this.initTargetPos();
            this.isCollide = false;
        })
        .start();
    }


    private setAttackAgain(): void {
        if (this.isJumpback) return;
        this.scheduleOnce(() => {this.isCollide = false}, 1);
    }


    private attack(): void {
        let currentPosition = this.node.getPosition();
        currentPosition.lerp(this.targetPos, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    }


    protected update(dt: number): void {
        if (window.isDraw && !this.isCollide && !Constants.isWinGame) {
            this.attack();
        }
    }

}
