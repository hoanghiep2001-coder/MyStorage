
import { _decorator, AudioSource, Component } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;


@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    hitSound: AudioSource = null;
    @property(AudioSource)
    collideWallSound: AudioSource = null;
    @property(AudioSource)
    collideBallSound: AudioSource = null;
    @property(AudioSource)
    AngleSound: AudioSource = null;
    @property(AudioSource)
    GoalSound: AudioSource = null;
    @property(AudioSource)
    ComboSound: AudioSource = null;
    @property(AudioSource)
    LoseSound: AudioSource = null;
    @property(AudioSource)
    inHoleSound: AudioSource = null;
    @property(AudioSource)
    woaSound1: AudioSource = null;
    @property(AudioSource)
    woaSound2: AudioSource = null;

    public playSound(sound: string): void {
        if (Constants.ironSource.SoundState) {
            switch (sound) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "collideWallSound":
                    this.collideWallSound.play();
                    break;
                case "inHoleSound":
                    this.inHoleSound.play();
                    break;
                case "hitSound":
                    this.hitSound.play();
                    break;
                case "AngleSound":
                    this.AngleSound.play();
                    break;
                case "collideBallSound":
                    this.collideBallSound.play();
                    break;
                case "GoalSound":
                    this.GoalSound.play();
                    break;
                case "ComboSound":
                    this.ComboSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "woaSound1":
                    this.woaSound1.play();
                    break;
                case "woaSound2":
                    this.woaSound2.play();
                    break;
                default:
                    break;
            }
        }

        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (sound) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "collideWallSound":
        //             this.collideWallSound.play();
        //             break;
        //         case "inHoleSound":
        //             this.inHoleSound.play();
        //             break;
        //         case "hitSound":
        //             this.hitSound.play();
        //             break;
        //         case "AngleSound":
        //             this.AngleSound.play();
        //             break;
        //         case "collideBallSound":
        //             this.collideBallSound.play();
        //             break;
        //         case "GoalSound":
        //             this.GoalSound.play();
        //             break;
        //         case "ComboSound":
        //             this.ComboSound.play();
        //             break;
        //         case "LoseSound":
        //             this.LoseSound.play();
        //             break;
        //         case "woaSound1":
        //             this.woaSound1.play();
        //             break;
        //         case "woaSound2":
        //             this.woaSound2.play();
        //             break;
        //         default:
        //             break;
        //     }
        // }
    }


    public switchVolume(soundName: string, volume: number): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.volume = volume;
                break;
            case "collideWallSound":
                this.collideWallSound.volume = volume;
                break;
            case "inHoleSound":
                this.inHoleSound.volume = volume;
                break;
            case "hitSound":
                this.hitSound.volume = volume;
                break;
            case "AngleSound":
                this.AngleSound.volume = volume;
                break;
            case "collideBallSound":
                this.collideBallSound.volume = volume;
                break;
            case "GoalSound":
                this.GoalSound.volume = volume;
                break;
            case "ComboSound":
                this.ComboSound.volume = volume;
                break;
            case "LoseSound":
                this.LoseSound.volume = volume;
                break;
            case "woaSound1":
                this.woaSound1.volume = volume;
                break;
            case "woaSound2":
                this.woaSound2.volume = volume;
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
            case "collideWallSound":
                this.collideWallSound.pause();
                break;
            case "inHoleSound":
                this.inHoleSound.pause();
                break;
            case "hitSound":
                this.hitSound.pause();
                break;
            case "AngleSound":
                this.AngleSound.pause();
                break;
            case "collideBallSound":
                this.collideBallSound.pause();
                break;
            case "GoalSound":
                this.GoalSound.pause();
                break;
            case "ComboSound":
                this.ComboSound.pause();
                break;
            case "LoseSound":
                this.LoseSound.pause();
                break;
            case "woaSound1":
                this.woaSound1.pause();
                break;
            case "woaSound2":
                this.woaSound2.pause();
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
            case "hitSound":
                this.hitSound.stop();
                break;
            case "inHoleSound":
                this.inHoleSound.stop();
                break;
            case "collideWallSound":
                this.collideWallSound.stop();
                break;
            case "AngleSound":
                this.AngleSound.stop();
                break;
            case "collideBallSound":
                this.collideBallSound.stop();
                break;
            case "GoalSound":
                this.GoalSound.stop();
                break;
            case "ComboSound":
                this.ComboSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "woaSound1":
                this.woaSound1.stop();
                break;
            case "woaSound2":
                this.woaSound2.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.inHoleSound.stop();
        this.hitSound.pause();
        this.collideWallSound.stop();
        this.AngleSound.stop();
        this.collideBallSound.stop();
        this.GoalSound.stop();
        this.ComboSound.stop();
        this.LoseSound.stop();
        this.woaSound1.stop();
        this.woaSound2.stop();
    }
}

