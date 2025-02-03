import { Constants } from "./constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    introSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    MergingSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    mergeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    tuhuSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    FusionSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "introSound":
                    this.introSound.play();
                    break;
                case "MergingSound":
                    this.MergingSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "mergeSound":
                    this.mergeSound.play();
                    break;
                case "tuhuSound":
                    this.tuhuSound.play();
                    break;
                case "FusionSound":
                    this.FusionSound.play();
                    break;
                default:
                    break;
            }
        }
    }

    public stopSound(soundName: string): void {
        switch (soundName) {
            case "introSound":
                this.introSound.stop();
                break;
            case "MergingSound":
                this.MergingSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "mergeSound":
                this.mergeSound.stop();
                break;
            case "tuhuSound":
                this.tuhuSound.stop();
                break;
            case "FusionSound":
                this.FusionSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.introSound.stop();
        this.MergingSound.stop();
        this.clickSound.stop();
        this.mergeSound.stop();
        this.tuhuSound.stop();
        this.FusionSound.stop();
    }
}
