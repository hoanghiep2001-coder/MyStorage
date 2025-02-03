import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import HandController from "./HandController";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(HandController)
  HandController: HandController = null;
  @property(GameController)
  GameController: GameController = null;


  // node
  @property(cc.Node)
  HideMask: cc.Node = null;
  @property(cc.Node)
  Line: cc.Node = null;
  @property(cc.Node)
  Tutorial: cc.Node = null;
  @property(cc.Node)
  fence: cc.Node = null;
  @property(cc.Node)
  fenceLeft: cc.Node = null;

  protected start() {
   
  }


  protected onLoad() {
    // Constants.fencePoint = this.fence.getPosition();
    this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);

    // ironsource
    // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
  }


  private touchStart(event: cc.Touch) {

    // if (Constants.ironSource.isEndGame) {
    //   this.GameController.installHandle();
    // }

    if (Constants.isLoseGame) {
      return;
    }

    Constants.isTouch = true;
    Constants.currentPosition = event.getLocation();
    this.Line.active = false;
    this.Tutorial.active = false;
    this.AudioManager.playSound(Constants.SoundTrack.drawSound);

    // this.handleIronSourcePlaySound();
  }


  private touchMove(event: cc.Touch): void {
    if (Constants.isLoseGame || !Constants.isCanMove) {
      return;
    }

    Constants.currentPosition = event.getLocation();
    Constants.currentLocalPosition = this.node.convertToNodeSpaceAR(event.getLocation());
    this.HandController.move();
  }


  private touchEnd(event: cc.Touch) {
    if (Constants.isLoseGame) {
      return;
    }

    Constants.isTouch = false;
    this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    this.HandController.stop();
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
}
