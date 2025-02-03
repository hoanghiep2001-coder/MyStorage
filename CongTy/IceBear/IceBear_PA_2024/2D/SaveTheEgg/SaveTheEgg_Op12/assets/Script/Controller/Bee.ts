import { Constants } from "../Data/constants";
import { GameOption } from "../Data/GameOption";
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

    @property(cc.Node)
    beeClearFixPos: cc.Node = null;

    isCollide: boolean = false;
    initPos: cc.Vec2 = null;
    targetPos: cc.Vec2 = null;
    isJumpback: boolean = false;

    tweenStates: cc.Tween[] = [];
    jumpbackCount: number = 0;

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

            if (o.tag === 4 && this.isJumpback) {
                this.isJumpback = false;
                this.tweenStates[this.jumpbackCount - 1].stop();
                this.initTargetPos();
                this.isCollide = false;
                cc.log("stop jumpback");
            }

            if (o.tag === 4 && !Constants.isHit) {
                this.jumpBack();
                cc.log("collide line");
                this.AudioManager.playSound(Constants.SoundTrack.stingSound);
            }

            if (o.tag === 8) {
                cc.log("bee die!");

                this.node.getChildByName("PSBase").getChildByName("boom").getComponent(cc.ParticleSystem).resetSystem();
                this.node.removeComponent(sp.Skeleton);
                this.node.removeComponent(cc.PhysicsBoxCollider);
                this.node.removeComponent(cc.RigidBody);
                this.scheduleOnce(() => {
                    this.destroy();
                }, 1);
            }

            if (o.tag === 3) {
                if (this.isCollide) return;

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
        this.jumpbackCount += 1;

        // nếu là op 16 thì cho ong nhảy lại chỗ khoe hở thôi
        if(GameOption.currentOption === 16 && GameOption.Op16.isPointTouchClearFixArea) {
            this.tweenStates.push(cc.tween(this.node)
            .to(0.2, { x: this.beeClearFixPos.x, y: this.beeClearFixPos.y }, { easing: cc.easing.smooth })
            .call(() => {
                this.initTargetPos();
                this.isCollide = false;
            })
            .start());
            return;
        }

        this.tweenStates.push(cc.tween(this.node)
            .to(0.2, { x: this.initPos.x, y: this.initPos.y }, { easing: cc.easing.smooth })
            .call(() => {
                this.initTargetPos();
                this.isCollide = false;
            })
            .start());
    }


    private setAttackAgain(): void {
        if (this.isJumpback) return;
        this.scheduleOnce(() => { this.isCollide = false }, 1);
    }


    private attack(): void {
        if(window.isToStore || Constants.isToStore) return;

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
