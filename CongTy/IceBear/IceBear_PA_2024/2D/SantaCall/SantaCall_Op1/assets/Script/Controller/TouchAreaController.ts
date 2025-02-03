import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;

  @property(cc.Node)
  btn_accept: cc.Node = null;
  @property(cc.Node)
  btn_decline: cc.Node = null;
  @property(cc.Node)
  hideMask: cc.Node = null;

  
  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.btn_accept.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    this.btn_decline.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    // this.hideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }

    Constants.ironSource.isPlayBgSound = true;
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
    // this.handleMuteSoundIronSource();
  }
}
