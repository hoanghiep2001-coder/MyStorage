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
  isShowCTA: boolean = false;


  protected onLoad(): void {

  }


  protected start(): void {
    this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    // this.activeTweenTextTap();

    cc.tween(this.NodesContainer.CTA_button)
      .repeatForever(
        cc.tween(this.NodesContainer.CTA_button)
          .to(0.5, { scale: 0.45 })
          .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })
      ).start();
  }


  public countingTime(): void {
    if (this.isShowCTA) return;

    let nodeTimeChild = this.NodesContainer.time.children[0];
    if (nodeTimeChild.scaleX <= 0 && Constants.isCanTouch) {
      this.showCTA(false, true);
      return;
    }

    nodeTimeChild.scaleX -= 0.0008;
  }


  public doneFlow(): void {
    this.NodesContainer.FX_Star.resetSystem();
  
    this.NodesContainer.FX_Confetti.resetSystem();

    this.AudioManager.playSound(Constants.SoundTrack.winSound);
  }


  public showCTA(isWin: boolean, isShow: boolean): void {
    this.isShowCTA = true;

    Constants.isCanTouch = false

    this.NodesContainer.CTA.active = true;

    if(isShow) {

      if (isWin) {
        this.NodesContainer.CTA_button_tryAgain.active = false;

        this.NodesContainer.FX_Star.resetSystem();
  
        this.NodesContainer.FX_Confetti.resetSystem();
    
        this.AudioManager.playSound(Constants.SoundTrack.winSound);
      }
  
      else {
        this.NodesContainer.CTA_button_Next.active = false;
  
        // this.NodesContainer.FX_Star.resetSystem();
  
        // this.NodesContainer.FX_Confetti.resetSystem();
  
        this.AudioManager.playSound(Constants.SoundTrack.LoseSound);
      }

    }




  }


  public showNextFlow(flow: number): void {
    this.NodesContainer.FX_Star.stopSystem();
  
    this.NodesContainer.FX_Confetti.stopSystem();

    if(flow === 2) {
      cc.tween(this.NodesContainer.Plate)
      .to(0.5, {opacity: 0})
      .start();
  
      cc.tween(this.NodesContainer.DragArea)
      .to(0.5, {opacity: 0})
      .start();
  
      this.NodesContainer.Flow2.active = true;
      cc.tween(this.NodesContainer.Flow2)
      .to(1.5, {opacity: 255})
      .start();
    } 

    else {

      Constants.isCanTouch = false;

      cc.tween(this.NodesContainer.Flow2)
      .to(0.5, {opacity: 0})
      .start();
  
      this.NodesContainer.NextFlow.active = true;
      cc.tween(this.NodesContainer.NextFlow)
      .to(1.5, {opacity: 255})
      .call(() => {
        Constants.isToStore = true;
        this.NodesContainer.hand.active = true;
      })
      .start();
    }


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


  protected update(dt: number): void {
    // Constants.isGameStart && this.countingTime();
  }

}
