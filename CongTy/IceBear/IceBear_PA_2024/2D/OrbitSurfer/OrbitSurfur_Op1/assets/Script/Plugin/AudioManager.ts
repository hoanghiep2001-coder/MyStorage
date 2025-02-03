import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;

    public playSound(soundName: string): void {

        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public stopAllSound(): void {
        this.bgSound.stop();

    }
}
