
import { _decorator, AudioSource, Component, Node } from 'cc';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    k98Sound: AudioSource = null;
    @property(AudioSource)
    GreatSound1: AudioSource = null;
    @property(AudioSource)
    GreatSound2: AudioSource = null;
    @property(AudioSource)
    GreatSound3: AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "k98Sound":
                    this.k98Sound.play();
                    break;
                case "GreatSound1":
                    this.GreatSound1.play();
                    break;
                case "GreatSound2":
                    this.GreatSound2.play();
                    break;
                case "GreatSound3":
                    this.GreatSound3.play();
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
            case "k98Sound":
                this.k98Sound.volume = volume;
                break;
            case "GreatSound1":
                this.GreatSound1.volume = volume;
                break;
            case "GreatSound2":
                this.GreatSound2.volume = volume;
                break;
            case "GreatSound3":
                this.GreatSound3.volume = volume;
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
            case "k98Sound":
                this.k98Sound.pause();
                break;
            case "GreatSound1":
                this.GreatSound1.pause();
                break;
            case "GreatSound2":
                this.GreatSound2.pause();
                break;
            case "GreatSound3":
                this.GreatSound3.pause();
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
            case "k98Sound":
                this.k98Sound.stop();
                break;
            case "GreatSound1":
                this.GreatSound1.stop();
                break;
            case "GreatSound2":
                this.GreatSound2.stop();
                break;
            case "GreatSound3":
                this.GreatSound3.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop(); this.GreatSound1.stop(); this.GreatSound2.stop(); this.GreatSound3.stop();
        this.k98Sound.stop();
    }

}

