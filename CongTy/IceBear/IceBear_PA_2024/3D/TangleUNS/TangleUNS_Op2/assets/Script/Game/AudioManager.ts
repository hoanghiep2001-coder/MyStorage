
import { _decorator, AudioSource, Component, Node } from 'cc';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    rope_1Sound: AudioSource = null;
    @property(AudioSource)
    rope_2Sound: AudioSource = null;
    @property(AudioSource)
    winSound: AudioSource = null;
    @property(AudioSource)
    breakSound: AudioSource = null;


    public playSound(soundName: string): void {
        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "rope_1Sound":
                    this.rope_1Sound.play();
                    break;
                case "rope_2Sound":
                    this.rope_2Sound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "breakSound":
                    this.breakSound.play();
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
            case "rope_1Sound":
                this.rope_1Sound.volume = volume;;
                break;
            case "rope_2Sound":
                this.rope_2Sound.volume = volume;;
                break;
            case "winSound":
                this.winSound.volume = volume;;
                break;
            case "breakSound":
                this.breakSound.volume = volume;;
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
            case "rope_1Sound":
                this.rope_1Sound.pause();
                break;
            case "rope_2Sound":
                this.rope_2Sound.pause();
                break;
            case "winSound":
                this.winSound.pause();
                break;
            case "breakSound":
                this.breakSound.pause();
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
            case "rope_1Sound":
                this.rope_1Sound.stop();
                break;
            case "rope_2Sound":
                this.rope_2Sound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "breakSound":
                this.breakSound.stop();
                break;
            default:
                break;
        }
    }

    
    public stopAllSound(): void {
        this.bgSound.stop();
        this.rope_1Sound.stop()
        this.rope_2Sound.stop()
        this.winSound.stop()
        this.breakSound.stop()
    }

}

