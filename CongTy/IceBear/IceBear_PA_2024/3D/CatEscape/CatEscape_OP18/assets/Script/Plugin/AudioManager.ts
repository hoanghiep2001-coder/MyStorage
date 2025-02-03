import { Constants } from "../Data/Constant";
import {
    _decorator,
    Component,
    AudioSource,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioManager")
export default class AudioManager extends Component {

    // sound 
    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    catAngrySound: AudioSource = null;
    @property(AudioSource)
    electricSound: AudioSource = null;
    @property(AudioSource)
    electric2Sound: AudioSource = null;
    @property(AudioSource)
    winSound: AudioSource = null;
    @property(AudioSource)
    loseSound: AudioSource = null;
    @property(AudioSource)
    eatSound: AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "catAngrySound":
                    this.catAngrySound.play();
                    break;
                case "electricSound":
                    this.electricSound.play();
                    break;
                case "electric2Sound":
                    this.electric2Sound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "loseSound":
                    this.loseSound.play();
                    break;
                case "eatSound":
                    this.eatSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public pauseSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.pause();
                break;
            case "catAngrySound":
                this.catAngrySound.pause();
                break;
            case "electricSound":
                this.electricSound.pause();
                break;
            case "electric2Sound":
                this.electric2Sound.pause();
                break;
            case "winSound":
                this.winSound.pause();
                break;
            case "loseSound":
                this.loseSound.pause();
                break;
            case "eatSound":
                this.eatSound.pause();
                break;
            default:
                break;
        }
    }


    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "catAngrySound":
                this.catAngrySound.stop();
                break;
            case "electricSound":
                this.electricSound.stop();
                break;
            case "electric2Sound":
                this.electric2Sound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "loseSound":
                this.loseSound.stop();
                break;
            case "eatSound":
                this.eatSound.stop();
                break;
            default:
                break;
        }
    }



    public stopAllSound(): void {
        this.bgSound.stop();
        this.catAngrySound.stop(); this.electricSound.stop(); this.electric2Sound.stop(); this.winSound.stop(); this.loseSound.stop(); this.eatSound.stop();
    }
}
