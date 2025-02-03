
import { _decorator, Component, Node, Collider, ICollisionEvent, Animation, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;
import { Main } from "./Main";
@ccclass('Ball')
export class Ball extends Component {
    @property(Main)
    Main: Main;

    @property(Node)
    Bling: Node = null;

    @property(Node)
    Round_Red: Node = null;

    @property(Node)
    Gr_Hole: Node = null;

    @property(Node)
    Ef_combo: Node = null;

    // 

    @property(AudioClip)
    Collider_Table_Audio: AudioClip = null;

    @property(AudioClip)
    Collider_01_Audio: AudioClip = null;

    @property(AudioClip)
    Collider_Ball_Audio: AudioClip = null;

    audioId: any = null;
    FixedPositionX() {
        const pos = this.node.position;
        this.node.setPosition(pos.x, 0, pos.z);
    }

    StartAudioId(audioId) {
        this.audioId = this.node.addComponent(AudioSource);
        this.audioId.clip = audioId;
        this.audioId.loop = false;
        this.audioId.play();
    }

    start() {
        let myCollider = this.node.getComponent(Collider);
        myCollider.on("onCollisionEnter", (target: ICollisionEvent) => {
            const isPhysic = target.otherCollider.node;
            if (isPhysic._name.indexOf('hole') != -1) {
                if (this.node._name == 'Ball_09') {
                    this.StartAudioId(this.Win_Audio);
                    this.activeHole(isPhysic._name);
                } else {
                    this.activeRoundRedHole(isPhysic._name);
                }
                console.log(isPhysic._name);
                this.node.active = false;
            }

            if (isPhysic._name.indexOf('collider_table') != -1) {
                this.StartAudioId(this.Collider_Table_Audio);
            }

            if (isPhysic._name.indexOf('Ball_09') != -1) {
                this.StartAudioId(this.Collider_01_Audio);
            }
        })
    }

    activeHole(key) {
        this.StartAudioId(this.Main.StartAudioId(this.Main.Win_Audio));
        this.Gr_Hole._children.forEach(element => {
            if (element._name == key) {
                this.Ef_combo.active = true;
                this.Bling.setPosition(element.getPosition());
                this.Bling.active = true;
                this.Main.flagStatusBall_09 = true;
                this.Bling.getComponent(Animation).play();
            }
        });
    }
    activeRoundRedHole(key) {
        this.StartAudioId(this.Main.StartAudioId(this.Main.Lose_Audio));
        this.Gr_Hole._children.forEach(element => {
            if (element._name == key) {
                this.Round_Red.setPosition(element.getPosition());
                this.Round_Red.active = true;
                this.Main.flagStatusBall_00 = true;
                this.Bling.getComponent(Animation).play();
            }
        });
    }
    update() {
        this.FixedPositionX();
    }

}
