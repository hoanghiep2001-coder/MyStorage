
import { _decorator, AudioSource, Component, Node } from 'cc';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    iphoneSound: AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "iphoneSound":
                    this.iphoneSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public switchVolume(soundName: string, volume: number): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.volume = volume;
                break;
            case "iphoneSound":
                this.iphoneSound.volume = volume;
                break;
            default:
                break;
        }
    }


    public pauseSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.pause();
                break;
                case "iphoneSound":
                    this.iphoneSound.pause();
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
            case "iphoneSound":
                this.iphoneSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.iphoneSound.stop();
    }

}

