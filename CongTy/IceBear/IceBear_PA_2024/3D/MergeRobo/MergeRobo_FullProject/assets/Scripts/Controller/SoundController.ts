import { _decorator, AudioClip, AudioSource, Component, log, Node } from 'cc';
import Singleton from '../Utils/Singleton';
import { IronSource } from '../AdHelper/IronSource';
const { ccclass, property } = _decorator;


@ccclass('SoundController')
export class SoundController extends Singleton<SoundController> {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    bangSound: AudioSource = null;
    @property(AudioSource)
    mergeSound: AudioSource = null;
    @property(AudioSource)
    chooseSound: AudioSource = null;
    @property(AudioSource)
    winSound: AudioSource = null;
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
        if (!IronSource.SoundState) return;

        switch (stringAudioName) {
            case "bgSound":
                this.bgSound.play();
                break;
            case "bangSound":
                this.bangSound.play();
                break;
            case "mergeSound":
                this.mergeSound.play();
                break;
            case "chooseSound":
                this.chooseSound.play();
                break;
            case "winSound":
                this.winSound.play();
                break;
            case "loseSound":
                this.loseSound.play();
                break;
        }
    }


    public StopAllSound() {
        this.bgSound.stop();
        this.bangSound.stop();
        this.mergeSound.stop();
        this.chooseSound.stop();
        this.winSound.stop();
        this.loseSound.stop();
    }
}