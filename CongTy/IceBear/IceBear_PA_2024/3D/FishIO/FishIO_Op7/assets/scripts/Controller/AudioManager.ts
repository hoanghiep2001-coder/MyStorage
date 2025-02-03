
import { _decorator, AudioSource, Component } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    videoSound: AudioSource = null;
    @property(AudioSource)
    eatSound: AudioSource = null;
    @property(AudioSource)
    dieSound: AudioSource = null;
    @property(AudioSource)
    whooseSound: AudioSource = null;

    @property(AudioSource)
    Skiing_BgSound: AudioSource = null;
    @property(AudioSource)
    Skiing_EatSound: AudioSource = null;
    @property(AudioSource)
    Skiing_JumpSound: AudioSource = null;
    @property(AudioSource)
    Skiing_ScreamSound: AudioSource = null;


    public playSound(sound: string): void {

        if (Constants.ironSource.SoundState) {
            switch (sound) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "videoSound":
                    this.videoSound.play();
                    break;
                case "eatSound":
                    this.eatSound.play();
                    break;
                case "dieSound":
                    this.dieSound.play();
                    break;
                case "whooseSound":
                    this.whooseSound.play();
                    break;
                case "Skiing_BgSound":
                    this.Skiing_BgSound.play();
                    break;
                case "Skiing_EatSound":
                    this.Skiing_EatSound.play();
                    break;
                case "Skiing_JumpSound":
                    this.Skiing_JumpSound.play();
                    break;
                case "Skiing_ScreamSound":
                    this.Skiing_ScreamSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public stopSound(sound: string): void {

        if (Constants.ironSource.SoundState) {
            switch (sound) {
                case "bgSound":
                    this.bgSound.stop();
                    break;
                case "videoSound":
                    this.videoSound.stop();
                    break;
                case "eatSound":
                    this.eatSound.stop();
                    break;
                case "dieSound":
                    this.dieSound.stop();
                    break;
                case "whooseSound":
                    this.whooseSound.stop();
                    break;
                case "Skiing_BgSound":
                    this.Skiing_BgSound.stop();
                    break;
                case "Skiing_EatSound":
                    this.Skiing_EatSound.stop();
                    break;
                case "Skiing_JumpSound":
                    this.Skiing_JumpSound.stop();
                    break;
                case "Skiing_ScreamSound":
                    this.Skiing_ScreamSound.stop();
                    break;
                default:
                    break;
            }
        }
    }


    public stopAllSound(): void {
        console.log("stopAll");

        this.bgSound.stop();
        this.videoSound.stop();
        this.eatSound.stop();
        this.dieSound.stop();
        this.whooseSound.stop();
        this.Skiing_BgSound.stop()
        this.Skiing_EatSound.stop()
        this.Skiing_JumpSound.stop()
        this.Skiing_ScreamSound.stop()
    }
}

