
import { _decorator, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    bgSound: AudioSource = null;
    @property(AudioSource)
    clickItemSound: AudioSource = null;
    @property(AudioSource)
    bravoSound: AudioSource = null;


    public stopAllSound(): void {
        this.bgSound.stop();
        this.clickItemSound.stop();
        this.bravoSound.stop();
    }

    start () {
        // [3]
    }

}

