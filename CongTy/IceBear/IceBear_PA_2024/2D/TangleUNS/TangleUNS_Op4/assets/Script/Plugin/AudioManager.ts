import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ropeSound1: cc.AudioSource = null;
    @property(cc.AudioSource)
    ropeSound2: cc.AudioSource = null;
    @property(cc.AudioSource)
    breakRopeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    completeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    completeSound2: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "ropeSound1":
                    this.ropeSound1.play();
                    break;
                case "ropeSound2":
                    this.ropeSound2.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "completeSound2":
                    this.completeSound2.play();
                    break;
                case "breakRopeSound":
                    this.breakRopeSound.play();
                    break;

                default:
                    break;
            }
        }
    }

    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "ropeSound1":
                this.ropeSound1.stop();
                break;
            case "ropeSound2":
                this.ropeSound2.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "completeSound2":
                this.completeSound2.stop();
                break;
            case "breakRopeSound":
                this.breakRopeSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.ropeSound1.stop();
        this.ropeSound2.stop();
        this.completeSound.stop();
        this.completeSound2.stop();
        this.breakRopeSound.stop();
    }
}
