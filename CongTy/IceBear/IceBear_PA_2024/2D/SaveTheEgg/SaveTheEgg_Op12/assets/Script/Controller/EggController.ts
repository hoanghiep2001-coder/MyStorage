import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import GamePlay from "./GamePlay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property([cc.ParticleSystem])
    effectDies: cc.ParticleSystem[] = [];

    rigidbody: cc.RigidBody = null;
    collide: cc.Collider = null;
    isChangeEggRigidbodyType: boolean = false;
    isActiveHelpAnim: boolean = false;


    protected start(): void {
        this.rigidbody = this.getComponent(cc.RigidBody);

        this.rigidbody.onBeginContact = (c:cc.PhysicsContact, s: cc.PhysicsCollider, o: cc.PhysicsCollider) => {
            if(o.tag === 8) {
                Constants.isHit = true;

                this.rigidbody.destroy();
                this.getComponent(cc.Collider).destroy();
                this.node.getChildByName("Spine_Character").active = false;
                this.AudioManager.playSound(Constants.SoundTrack.explosionSound);
                this.effectDies.forEach(fx => fx.resetSystem());
                // this.scheduleOnce(() => {this.GamePlay.lose()}, 2.5)
            }
        }
    }


    public changeRigidbodyType(): void {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    }


    private activeHelpAnim(): void {
        if(this.isActiveHelpAnim) return;
        this.isActiveHelpAnim = true;
        this.node.getChildByName("Spine_Character").getComponent(sp.Skeleton).setAnimation(0, "being_hit", true);
    }


    protected update(dt: number): void {
        if(window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType && window.isDraw) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }

        if(Constants.isWinGame) this.rigidbody.type = cc.RigidBodyType.Static;

        window.isDraw && this.activeHelpAnim();
    }
}
