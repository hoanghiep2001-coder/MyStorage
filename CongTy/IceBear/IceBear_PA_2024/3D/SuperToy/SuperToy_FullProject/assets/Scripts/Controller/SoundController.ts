import { _decorator, AudioClip, AudioSource, Component, log, Node } from 'cc';
// import { IronSource } from '../AdHelper/IronSource';
const { ccclass, property } = _decorator;


@ccclass('SoundController')
export class SoundController extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    openEggSound: AudioSource = null;
    @property(AudioSource)
    clickSound: AudioSource = null;

    @property(AudioSource)
    congratSound: AudioSource = null;
    @property(AudioSource)
    showItemSound: AudioSource = null;
    @property(AudioSource)
    winSound: AudioSource = null;


    protected onLoad(): void {

    }


    protected start(): void {
        this.bgSound.play();
    }


    public PlaySound(stringAudioName: string) {
        // if (!IronSource.SoundState) return;

        switch (stringAudioName) {
            case "bgSound":
                this.bgSound.play();
                break;
            case "openEggSound":
                this.openEggSound.play();
                break;
            case "clickSound":
                this.clickSound.play();
                break;
            case "congratSound":
                this.congratSound.play();
                break;
            case "showItemSound":
                this.showItemSound.play();
                break;
            case "winSound":
                this.winSound.play();
                break;
        }
    }


    public StopAllSound() {
        this.bgSound.stop();
        this.openEggSound.stop();
        this.clickSound.stop();
        this.congratSound.stop();
        this.showItemSound.stop();
        this.winSound.stop();
    }
}