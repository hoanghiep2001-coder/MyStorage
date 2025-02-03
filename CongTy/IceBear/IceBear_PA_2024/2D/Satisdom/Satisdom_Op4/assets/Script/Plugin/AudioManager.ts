import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    TouchSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    winSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    CorrectSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    LoseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    BoilSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "TouchSound":
                    this.TouchSound.play();
                    break;
                case "BoilSound":
                    this.BoilSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "CorrectSound":
                    this.CorrectSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.TouchSound.stop();
        this.winSound.stop();
        this.CorrectSound.stop();
        this.BoilSound.stop();
        this.LoseSound.stop();
    }
}
