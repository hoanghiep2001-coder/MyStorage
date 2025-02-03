
import { _decorator, AudioSource, Component } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    MergeSound: AudioSource = null;
    @property(AudioSource)
    succesSound: AudioSource = null;
    @property(AudioSource)
    chooseSound: AudioSource = null;
    @property(AudioSource)
    Dino_AttkSound: AudioSource = null;
    @property(AudioSource)
    DieSound: AudioSource = null;


    public playSound(sound: string): void {
        if (Constants.ironSource.SoundState) {
            switch (sound) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "Dino_AttkSound":
                    this.Dino_AttkSound.play();
                    break;
                case "DieSound":
                    this.DieSound.play();
                    break;
                case "MergeSound":
                    this.MergeSound.play();
                    break;
                case "succesSound":
                    this.succesSound.play();
                    break;
                case "chooseSound":
                    this.chooseSound.play();
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
            case "Dino_AttkSound":
                this.Dino_AttkSound.volume = volume;
                break;
            case "DieSound":
                this.DieSound.volume = volume;
                break;
            case "MergeSound":
                this.MergeSound.volume = volume;
                break;
            case "succesSound":
                this.succesSound.volume = volume;
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
            case "Dino_AttkSound":
                this.Dino_AttkSound.pause();
                break;
            case "DieSound":
                this.DieSound.pause();
                break;
            case "MergeSound":
                this.MergeSound.pause();
                break;
            case "succesSound":
                this.succesSound.pause();
                break;
            case "chooseSound":
                this.chooseSound.pause();
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
            case "DieSound":
                this.DieSound.stop();
                break;
            case "Dino_AttkSound":
                this.Dino_AttkSound.stop();
                break;
            case "MergeSound":
                this.MergeSound.stop();
                break;
            case "succesSound":
                this.succesSound.stop();
                break;
            case "chooseSound":
                this.chooseSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.Dino_AttkSound.stop();
        this.bgSound.stop();
        this.DieSound.stop();
        this.MergeSound.stop();
        this.succesSound.stop();
        this.chooseSound.stop();
    }
}

