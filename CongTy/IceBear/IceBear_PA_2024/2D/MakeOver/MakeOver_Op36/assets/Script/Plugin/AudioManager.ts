import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    spiderSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    hmmSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    moveItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    DoneStepSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun1Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    nhoMun2Sound: cc.AudioSource = null;
    @property(cc.AudioSource)
    FaceWashSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                    case "FaceWashSound":
                        this.FaceWashSound.play();
                        break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
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
                case "FaceWashSound":
                    this.FaceWashSound.stop();
                    break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.nhoMun2Sound.stop();
        this.nhoMun1Sound.stop();
        this.DoneStepSound.stop();
        this.FaceWashSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.spiderSound.stop();
        this.hmmSound.stop();
    }
}
