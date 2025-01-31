import { _decorator, AudioClip, AudioSource, Component, log, Node } from 'cc';
import Singleton from '../Utils/Singleton';
const { ccclass, property } = _decorator;


@ccclass('SoundController')
export class SoundController extends Singleton<SoundController> {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    clickSound: AudioSource = null;
    @property(AudioSource)
    paySound: AudioSource = null;
    @property(AudioSource)
    placeSound: AudioSource = null;
    @property(AudioSource)
    winSound: AudioSource = null;
    @property(AudioSource)
    paidSound: AudioSource = null;
    @property(AudioSource)
    loseSound: AudioSource = null;


    constructor() {
        super();
        SoundController._instance = this;
    }


    protected onLoad(): void {

    }


    protected start(): void {
        // this.bgSound.play();
    }


    public PlaySound(stringAudioName: string) {
        // if (!IronSource.SoundState) return;

        switch (stringAudioName) {
            case "bgSound":
                this.bgSound.play();
                break;
            case "clickSound":
                this.clickSound.play();
                break;
            case "paySound":
                this.paySound.play();
                break;
            case "placeSound":
                this.placeSound.play();
                break;
            case "winSound":
                this.winSound.play();
                break;
            case "paidSound":
                this.paidSound.play();
                break;
            case "loseSound":
                this.loseSound.play();
                break;
        }
    }


    public StopAllSound() {
        this.bgSound.stop();
        this.clickSound.stop();
        this.paySound.stop();
        this.placeSound.stop();
        this.paidSound.stop();
        this.winSound.stop();
        this.loseSound.stop();
    }
}