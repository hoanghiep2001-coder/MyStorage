
import { _decorator, Collider, Component, ICollisionEvent, Node } from 'cc';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;


@ccclass('OtherBall')
export class OtherBall extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    protected start(): void {
        let myCollider = this.node.getComponent(Collider);
        myCollider.on("onCollisionEnter", (target: ICollisionEvent) => {
            const isPhysic = target.otherCollider.node;
            if (isPhysic.name.indexOf('hole') != -1) {
                Constants.isWin = true;
                this.AudioManager.playSound(Constants.SoundTrack.inHoleSound)
                this.activeHole(isPhysic.name);
                Constants.scoreCount += 1;
                this.node.active = false;
            }

            if (isPhysic.name.indexOf('collider_table') != -1) {
                this.AudioManager.playSound(Constants.SoundTrack.collideWallSound)
            }

            if (isPhysic.name.indexOf('Ball') != -1) {
                this.AudioManager.playSound(Constants.SoundTrack.collideBallSound)
            }
        })
    }

    private activeHole(key) {
        this.AudioManager.playSound(Constants.SoundTrack.GoalSound)
        // this.Gr_Hole._children.forEach(element => {
            // if (element._name == key) {
            //     this.Ef_combo.active = true;
            //     this.Bling.setPosition(element.getPosition());
            //     this.Bling.active = true;
            //     this.Main.flagStatusBall_09 = true;
            //     this.Bling.getComponent(Animation).play();
            // }
        // });
    }
}

