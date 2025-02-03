
import { _decorator, AudioSource, Component, Node } from 'cc';
import { Constants } from '../../Data/constants';

const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    CompleteSound: AudioSource = null;
    @property(AudioSource)
    WaterDropSound: AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "CompleteSound":
                    this.CompleteSound.play();
                    break;
                    case "WaterDropSound":
                        this.WaterDropSound.play();
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
            case "CompleteSound":
                this.CompleteSound.pause();
                break;
                case "WaterDropSound":
                    this.WaterDropSound.pause();
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
            case "CompleteSound":
                this.CompleteSound.stop();
                break;
                case "WaterDropSound":
                    this.WaterDropSound.stop();
                    break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.CompleteSound.stop();
        this.WaterDropSound.stop();
    }

}

