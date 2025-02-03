import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
// import * as PF from "pathfinding";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Bee extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(cc.RigidBody)
    rigidBody: cc.RigidBody = null;

    isCollide: boolean = false

    protected start(): void {
        this.beginContact();
    }


    private beginContact(): void {
        this.rigidBody.onBeginContact = (c, s, o) => {
        
            if (o.tag === 4) {
                console.log("collide");
            }

            if (o.tag === 3) {
                if(this.isCollide) {
                    return;
                }

                this.AudioManager.playSound(Constants.SoundTrack.stingSound)
                this.isCollide = true;
                Constants.isHit = true;
            }
        }
    }

}
