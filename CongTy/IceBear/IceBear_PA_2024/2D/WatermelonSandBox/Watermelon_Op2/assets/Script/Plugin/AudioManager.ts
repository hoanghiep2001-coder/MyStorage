import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    canhbaoSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    gun: cc.AudioSource = null;
    @property(cc.AudioSource)
    pickdo: cc.AudioSource = null;
    @property(cc.AudioSource)
    tiem: cc.AudioSource = null;

    public playSound(soundName: string): void {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    }


    private normalNetwork(soundName): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "canhbaoSound":
                    this.canhbaoSound.play();
                    break;
                case "gun":
                    this.gun.play();
                    break;
                case "pickdo":
                    this.pickdo.play();
                    break;
                case "tiem":
                    this.tiem.play();
                    break;
                default:
                    break;
            }
        }
    }


    public stopSound(soundName: string): void {
        switch (soundName) {
            case "canhbaoSound":
                this.canhbaoSound.stop();
                break;
            case "gun":
                this.gun.stop();
                break;
            case "pickdo":
                this.pickdo.stop();
                break;
            case "tiem":
                this.tiem.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.canhbaoSound.stop()
        this.gun.stop()
        this.pickdo.stop()
        this.tiem.stop()
    }
}
