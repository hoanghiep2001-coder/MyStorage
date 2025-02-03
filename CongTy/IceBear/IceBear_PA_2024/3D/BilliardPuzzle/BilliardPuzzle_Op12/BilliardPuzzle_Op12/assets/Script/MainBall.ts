import { _decorator, Component, Node, Collider, ICollisionEvent, Animation, AudioClip, AudioSource, director, Vec3, Camera, log, Label, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;
import { Main } from "./Main";
import { AudioManager } from './Plugin/AudioManager';
import { Constants } from './Data/Constant';

@ccclass('Ball')
export class Ball extends Component {
    @property(Main)
    Main: Main;
    @property(AudioManager)
    AudioManager: AudioManager;
    @property(Camera)
    Camera: Camera = null;

    @property(Node)
    Canvas: Node = null;
    @property(Prefab)
    combo_collideTable: Prefab = null;
    @property(Node)
    cube: Node = null;

    audioId: any = null;
    comboCollide: number = 0;

    FixedPositionX() {
        const pos = this.node.position;
        this.node.setPosition(pos.x, 0, pos.z);
    }


    start() {
        let myCollider = this.node.getComponent(Collider);
        myCollider.on("onCollisionEnter", (target: ICollisionEvent) => {
            const isPhysic = target.otherCollider.node;
            if (isPhysic.name.indexOf('hole') != -1) {
                Constants.isLose = true;
                this.AudioManager.playSound(Constants.SoundTrack.LoseSound)
                this.node.active = false;
            }

            if (isPhysic.name.indexOf('Cube') != -1) {
                this.AudioManager.playSound(Constants.SoundTrack.hitSound)

                this.scheduleOnce(() => {
                    Constants.isLose = true;
                }, 2)
            }

            if (isPhysic.name.indexOf('collider_table') != -1) {
                !Constants.isLose && this.activeComboCollideTable(isPhysic)
                this.AudioManager.playSound(Constants.SoundTrack.collideWallSound)
            }
        })
    }


    private activeComboCollideTable(physicNode: Node): void {
        this.comboCollide += 1;
        const out = new Vec3();
        const wpos = physicNode.worldPosition;
        this.Camera.convertToUINode(wpos, this.Canvas, out);
        let node = instantiate(this.combo_collideTable);
        let label = node.getChildByName("Label").getComponent(Label);
        label.string = String(this.comboCollide);
        node.parent = this.Canvas;
        node.position = out;
        node.getComponent(Animation).play("CollideCombo");
    }


    update() {
        // this.label.string = String(this.comboCollide);
        let thisPos = this.node.getPosition();
        this.cube.setPosition(thisPos.x, 0.55, thisPos.z + 0.02)
        // this.FixedPositionX();
    }

}
