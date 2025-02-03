import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    drawSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    crySound: cc.AudioSource = null;
    @property(cc.AudioSource)
    clickSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    loseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    winSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    stingSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    explosionSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "explosionSound":
                    this.explosionSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "loseSound":
                    this.loseSound.play();
                    break;
                case "stingSound":
                    this.stingSound.play();
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
            case "explosionSound":
                this.explosionSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "loseSound":
                this.loseSound.stop();
                break;
            case "stingSound":
                this.stingSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.explosionSound.stop();
        this.drawSound.stop();
        this.winSound.stop();
        this.crySound.stop();
        this.clickSound.stop();
        this.loseSound.stop();
        this.stingSound.stop();
    }
}
