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


    protected start(): void {
        this.rigidbody = this.getComponent(cc.RigidBody);

        this.rigidbody.onBeginContact = (c:cc.PhysicsContact, s: cc.PhysicsCollider, o: cc.PhysicsCollider) => {
            if(o.tag === 8) {
                Constants.isLoseLv2 = true;
                this.rigidbody.destroy();
                this.getComponent(cc.Collider).destroy();
                this.node.getChildByName("Spine_Character").active = false;
                this.AudioManager.playSound(Constants.SoundTrack.explosionSound);
                this.effectDies.forEach(fx => fx.resetSystem());
                this.scheduleOnce(() => {this.GamePlay.loseLv2()}, 2.5)
            }
        }
    }


    public changeRigidbodyType(): void {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    }


    protected update(dt: number): void {
        if(window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }
    }
}
