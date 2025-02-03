import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;


  // state
  timing: number = 0.5;


  protected onLoad(): void {

  }


  protected start(): void {
    this.handleGamePlay();
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
  }


  private handleGamePlay(): void {
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.MergeSound);
      this.AudioManager.stopSound(Constants.SoundTrack.bgSound);
    }, 1.2 + this.timing)
    this.scheduleOnce(() => { this.NodeContainer.UIContainer.getComponent(cc.Animation).play("UI_MergeAnim"); }, 1.5 + this.timing);
    this.scheduleOnce(() => { this.NodeContainer.CardWhite.active = true; }, 3.5 + this.timing);
    this.scheduleOnce(() => {
      this.NodeContainer.CardWhite.getComponent(cc.Animation).stop();
      this.NodeContainer.CardWhite.angle = 0;
      this.NodeContainer.CardWhite.getComponent(cc.Animation).play("CardWhite_BoomAnim");
      this.NodeContainer.PS_Blink.resetSystem();
    }, 6.5 + this.timing);
    this.scheduleOnce(() => { this.showText(); Constants.isCanTouch = true; }, 9 + this.timing)
    this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.bgSound); }, 12 + this.timing);
  }


  private showText(): void {
    cc.tween(this.NodeContainer.Text)
      .to(0.5, { opacity: 255 })
      .call(() => {
        cc.tween(this.NodeContainer.Text)
          .repeatForever(
            cc.tween(this.NodeContainer.Text)
              .to(0.5, { scale: 0.4 })
              .to(0.5, { scale: 0.35 }, { easing: 'elasticOut' })
          ).start();
      })
      .start();
  }


  // protected update(dt: number): void {

  // }

}
