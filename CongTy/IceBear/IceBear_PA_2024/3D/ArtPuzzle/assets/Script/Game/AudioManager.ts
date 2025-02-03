
import { _decorator, AudioSource, Component, Node } from 'cc';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    clickSound: AudioSource = null;
    @property(AudioSource)
    matchSound: AudioSource = null;
    @property(AudioSource)
    NextStepSound: AudioSource = null;
    @property(AudioSource)
    WrongSound: AudioSource = null;

    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;

                case "clickSound":
                    this.clickSound.play();
                    break;
                case "matchSound":
                    this.matchSound.play();
                    break;
                case "NextStepSound":
                    this.NextStepSound.play();
                    break;
                case "WrongSound":
                    this.WrongSound.play();
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
            case "clickSound":
                this.clickSound.volume = volume;
                break;
            case "matchSound":
                this.matchSound.volume = volume;
                break;
            case "NextStepSound":
                this.NextStepSound.volume = volume;
                break;
            case "WrongSound":
                this.WrongSound.volume = volume;
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
            case "clickSound":
                this.clickSound.pause();
                break;
            case "matchSound":
                this.matchSound.pause();
                break;
            case "NextStepSound":
                this.NextStepSound.pause();
                break;
            case "WrongSound":
                this.WrongSound.pause();
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
            case "clickSound":
                this.clickSound.stop();
                break;
            case "matchSound":
                this.matchSound.stop();
                break;
            case "NextStepSound":
                this.NextStepSound.stop();
                break;
            case "WrongSound":
                this.WrongSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.clickSound.stop();
        this.matchSound.stop();
        this.NextStepSound.stop();
        this.WrongSound.stop();
    }

}

