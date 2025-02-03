import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Egg extends cc.Component {
    @property(AudioManager)
    AudioManager: AudioManager = null;

    // Component
    rigidbody: cc.RigidBody = null;
    collide: cc.Collider = null;


    // state
    isCollideLine: boolean = false;


    // Animation
    result_fail: string = "result_fail";
    egg_break: string = "egg_break";
    result_win: string = "result_win";
    idle_security: string = "idle_security";


    protected start(): void {
        this.collide = this.getComponent(cc.PhysicsCircleCollider);
        this.rigidbody = this.getComponent(cc.RigidBody);
        

        this.rigidbody.onBeginContact =
            (c: cc.PhysicsContact, s: cc.PhysicsCollider, o: cc.PhysicsCollider) => {
                if(o.tag === 5 && !this.isCollideLine) {
                    this.isCollideLine = true;
                    this.rigidbody.destroy();
                    this.collide.destroy();
                    this.setAnimation(this.egg_break, false);
                    Constants.EggDieCount += 1;
                    this.AudioManager.playSound(Constants.SoundTrack.stingSound);

                    this.scheduleOnce(() => {
                        this.node.destroy();
                    }, 1)
                }
            }
    }


    public setAnimation(anim: string, loop: boolean): void {
        let spine = this.node.getChildByName("Spine_Egg").getComponent(sp.Skeleton);
        spine.setAnimation(0, anim, loop);
    }


}
