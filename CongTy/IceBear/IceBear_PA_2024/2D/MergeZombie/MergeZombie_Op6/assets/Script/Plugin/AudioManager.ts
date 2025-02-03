import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    MergeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    ClickSound: cc.AudioSource = null;


    public playSound(soundName: string): void {
        // ironsource
        this.ironSourceNetwork(soundName);
        // this.normalNetwork(soundName);
    }

    private ironSourceNetwork(soundName): void {
        if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "MergeSound":
                    this.MergeSound.play();
                    break;
                case "ClickSound":
                    this.ClickSound.play();
                    break;
                default:
                    break;
            }
        }
    }

    private normalNetwork(soundName): void {
        if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "MergeSound":
                    this.MergeSound.play();
                    break;
                case "ClickSound":
                    this.ClickSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "MergeSound":
                this.MergeSound.stop();
                break;
            case "ClickSound":
                this.ClickSound.stop();
                break;
            default:
                break;
        }
    }

    public stopAllSound(): void {
        this.bgSound.stop();
        this.MergeSound.stop();
        this.ClickSound.stop();
    }
}
