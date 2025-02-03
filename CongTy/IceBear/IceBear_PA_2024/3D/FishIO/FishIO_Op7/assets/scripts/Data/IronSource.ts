
import { _decorator, Component, Node } from 'cc';
import { Constants } from './Constant';
import { AudioManager } from '../Controller/AudioManager';
const { ccclass, property } = _decorator;


@ccclass('IronSource')
export class IronSource extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }
        
        Constants.ironSource.isPlayBgSound = true;
        if (Constants.ironSource.SoundState && Constants.isCompleteVideo) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        } else {
            this.AudioManager.playSound(Constants.SoundTrack.Skiing_BgSound);
        }

    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                if(Constants.isCompleteVideo) {
                    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
                } else {
                    this.AudioManager.playSound(Constants.SoundTrack.Skiing_BgSound);
                }
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    protected update(dt: number): void {
        this.handleMuteSoundIronSource();
    }
}

