
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, () => {
        this.hideMaskTouch();
    }, this);

    this.NodesContainer.btn_Play.on(cc.Node.EventType.TOUCH_START, () => {
      this.GameController.installHandle();
  }, this);
  }


  private hideMaskTouch(): void {
    // mtg & applovin
    this.GameController.installHandle();
  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      Constants.ironSource.isPlayBgSound = true;
      this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }
  }


  // protected update(dt: number): void {
  //     this.handleMuteSoundIronSource();
  // }
}
