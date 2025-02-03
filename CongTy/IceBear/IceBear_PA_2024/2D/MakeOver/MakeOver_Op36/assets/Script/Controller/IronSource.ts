// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class IronSource extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
          return;
        }
    
        Constants.ironSource.isPlayBgSound = true;
        if (Constants.ironSource.SoundState) {
          this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }
      }
    
    
      private handleMuteSoundIronSource(): void {
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

      protected update(dt: number): void {
          this.handleMuteSoundIronSource();
      }
}
