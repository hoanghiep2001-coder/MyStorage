
import { _decorator, Component, Node } from 'cc';
import { Constants } from '../Data/Constant';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;


@ccclass('IronSource')
export class IronSource extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }
    }


    public handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }
}

