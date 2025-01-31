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
    carExit: AudioSource = null;
    @property(AudioSource)
    carMoveToPlace: AudioSource = null;
    @property(AudioSource)
    Happy: AudioSource = null;
    @property(AudioSource)
    Impact: AudioSource = null;
    @property(AudioSource)
    LoadCustomer: AudioSource = null;
    @property(AudioSource)
    unlockHiddenCarSound: AudioSource = null;


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
            case "unlockHiddenCarSound":
                this.unlockHiddenCarSound.play();
                break;
            case "clickSound":
                this.clickSound.play();
                break;
            case "carExit":
                this.carExit.play();
                break;
            case "carMoveToPlace":
                this.carMoveToPlace.play();
                break;
            case "Happy":
                this.Happy.play();
                break;
            case "Impact":
                this.Impact.play();
                break;
            case "LoadCustomer":
                this.LoadCustomer.play();
                break;
        }
    }



    public StopAllSound() {
        this.bgSound.stop();
        this.unlockHiddenCarSound.stop();
        this.clickSound.stop();
        this.carMoveToPlace.stop();
        this.Happy.stop();
        this.Impact.stop();
        this.LoadCustomer.stop();
        this.carExit.stop();
    }
}