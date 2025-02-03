
import { _decorator, AudioSource, Component } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    Dino_AttkSound: AudioSource = null;
    @property(AudioSource)
    Dino_LoseSound: AudioSource = null;
    @property(AudioSource)
    Dino_ScreamSound: AudioSource = null;
    @property(AudioSource)
    Dino_MergeSound: AudioSource = null;
    @property(AudioSource)
    Dino_FightSound: AudioSource = null;
    @property(AudioSource)
    Dino_ChooseSound: AudioSource = null;

    public playSound(sound: string): void {
        if (Constants.ironSource.SoundState) {
            switch (sound) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "Dino_AttkSound":
                    this.Dino_AttkSound.play();
                    break;
                case "Dino_LoseSound":
                    this.Dino_LoseSound.play();
                    break;
                case "Dino_ScreamSound":
                    this.Dino_ScreamSound.play();
                    break;
                case "Dino_MergeSound":
                    this.Dino_MergeSound.play();
                    break;
                case "Dino_FightSound":
                    this.Dino_FightSound.play();
                    break;
                case "Dino_ChooseSound":
                    this.Dino_ChooseSound.play();
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
            case "Dino_LoseSound":
                this.Dino_LoseSound.volume = volume;
                break;
            case "Dino_ScreamSound":
                this.Dino_ScreamSound.volume = volume;
                break;
            case "Dino_MergeSound":
                this.Dino_MergeSound.volume = volume;
                break;
            case "Dino_FightSound":
                this.Dino_FightSound.volume = volume;
                break;
            case "Dino_ChooseSound":
                this.Dino_ChooseSound.volume = volume;
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
            case "Dino_LoseSound":
                this.Dino_LoseSound.pause();
                break;
            case "Dino_ScreamSound":
                this.Dino_ScreamSound.pause();
                break;
            case "Dino_MergeSound":
                this.Dino_MergeSound.pause();
                break;
            case "Dino_FightSound":
                this.Dino_FightSound.pause();
                break;
            case "Dino_ChooseSound":
                this.Dino_ChooseSound.pause();
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
            case "Dino_AttkSound":
                this.Dino_AttkSound.stop();
                break;
            case "Dino_LoseSound":
                this.Dino_LoseSound.stop();
                break;
            case "Dino_ScreamSound":
                this.Dino_ScreamSound.stop();
                break;
            case "Dino_MergeSound":
                this.Dino_MergeSound.stop();
                break;
            case "Dino_FightSound":
                this.Dino_FightSound.stop();
                break;
            case "Dino_ChooseSound":
                this.Dino_ChooseSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.Dino_AttkSound.stop();
        this.Dino_LoseSound.stop();
        this.Dino_ScreamSound.stop();
        this.Dino_MergeSound.stop();
        this.Dino_ChooseSound.stop();
    }
}

