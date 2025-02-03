
import { _decorator, Component, Node, AudioClip, AudioSource, screen, Sprite, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Responsive')
export class Responsive extends Component {

    AudioId: any = true;

    @property(AudioClip)
    Bg_Audio: AudioClip = null;

    @property(Node)
    Camera_: Node = null;

    @property(Node)
    Bar_Force: Node = null;

    @property(Node)
    hand_01: Node = null;

    @property(Node)
    hand_02: Node = null;

    @property(Node)
    View_CTA: Node = null;

    onLoad() {
        this.StartAudio();
    }

    StartAudio() {
        if (this.AudioId) {
            this.AudioId = this.node.addComponent(AudioSource);
            this.AudioId.clip = this.Bg_Audio;
            this.AudioId.loop = true;
            this.AudioId.volume = 0.5;
            this.AudioId.play();
        }
    }

    PauseAudio() {
        this.AudioId.pause();
    }

    update() {
        let screenW = screen.windowSize.x;
        let screenH = screen.windowSize.y;

        if (screenW < screenH) {
            this.View_CTA._children[0].active = true;
            this.View_CTA._children[1].active = false;
            this.Camera_.setRotationFromEuler(-90, 0, 0);
            this.Bar_Force.setPosition(0, 0);
            this.Bar_Force.setScale(0.664, 0.664);
            this.hand_01.setScale(1, 1, 1);
            const ratio = screenH / screenW;
            if (ratio >= 2.1) {
                this.Camera_.setPosition(0, 7.764, 0);
            } else {
                this.Camera_.setPosition(0, 6.2, 0);
            }
        } else {
            this.View_CTA._children[0].active = false;
            this.View_CTA._children[1].active = true;
            const ratio = screenW / screenH;
            this.hand_01.setScale(1.4, 1.4, 1);
            this.Bar_Force.setScale(0.97, 0.97);
            this.Bar_Force.setPosition(0, -70);
            if (ratio <= 1.6) {
                this.Camera_.setPosition(-0.15, 4.5, 0.3);
                this.Camera_.setRotationFromEuler(-90, -90, 0);
            } else {
                this.Camera_.setPosition(-0.15, 4, 0.3);
                this.Camera_.setRotationFromEuler(-90, -90, 0);
            }

        }
    }

}


