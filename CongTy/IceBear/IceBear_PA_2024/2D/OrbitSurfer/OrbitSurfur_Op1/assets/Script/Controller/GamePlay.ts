import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import Responsive from "../Plugin/Responsive";
import { GameController } from "./GameController";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(GameController)
  GameController: GameController = null;
  @property(Responsive)
  Responsive: Responsive = null;

  dollPrecent: number = 0;
  opponentPrecent: number = 0;
  tweenStates: cc.Tween[] = [];


  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.activeTweenTextTap();

    cc.view.setResizeCallback(() => {
      this.tweenStates.forEach(tween => tween.stop())
      this.Responsive.handleRotate();
      this.activeTweenTextTap();
    });
  }


  private activeRotateCircle(scalePoint: number): void {

  }


  private handleGamePlay(): void {

  }


  private activeTweenTextTap(): void {

    let currentTextScale = this.NodesContainer.text.scale;

    let newTextScale = Constants.isRotate ? 0.5 : 0.35;

    let from = Constants.isRotate ? 0.45 : 0.4;

    this.tweenStates.push(cc.tween(this.NodesContainer.text)
      .repeatForever(
        cc.tween(this.NodesContainer.text)
          .to(0.5, { scale: from })
          .to(0.5, { scale: newTextScale }, { easing: cc.easing.elasticOut })
      ).start());

  }


  public handleIronSourcePlaySound(): void {
    if (Constants.ironSource.isPlayBgSound) {
      return;
    }

    if (Constants.ironSource.SoundState) {
      Constants.ironSource.isPlayBgSound = true;
      Constants.isClickStartBtn
        ? this.AudioManager.playSound(Constants.SoundTrack.chickFunSound)
        : this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }

  }


  private handleMuteSoundIronSource(): void {
    Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (Constants.ironSource.State) {
      if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        Constants.ironSource.SoundState = true;

        Constants.isClickStartBtn
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
      }

      if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
        Constants.ironSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  }

}
