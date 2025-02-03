import { Ultils } from "../Data/Ultils";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GraphicsController from "./GraphicsController";
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
  @property(GraphicsController)
  GraphicsController: GraphicsController = null;


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

  // state


  protected start() {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
  }


  protected onLoad() {
    Constants.fencePoint = this.fence.getPosition();
    this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);

    // ironsource
    this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
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


  private touchStart(event: cc.Touch) {

    // if (Constants.ironSource.isEndGame) {
    //   this.GameController.installHandle();
    // }

    if (Constants.isLoseGame) {
      return;
    }

    this.Line.active = false;
    Constants.isTouch = true;
    this.Tutorial.active = false;
    this.AudioManager.playSound(Constants.SoundTrack.drawSound);
    Constants.currentPosition = event.getLocation();

    this.handleIronSourcePlaySound();
  }


  private touchMove(event: cc.Touch): void {
    if (Constants.isLoseGame || !Constants.isCanMove) {
      return;
    }

    Ultils.TouchArea.checkTouchPoint(this.fence, this.HandController.fakeHand, this.fenceLeft);
    Constants.currentPosition = event.getLocation();
    this.HandController.move();

    Ultils.TouchArea.checkTouchCondition1(
      this.HandController.node,
      this.HandController.Apple_1_Points[0],
      this.GraphicsController.graphicsNodes[0],
      this.HandController.Apple_1_Points[1]
    );
    // Ultils.TouchArea.checkTouchCondition2(
    //   this.HandController.node, 
    //   this.HandController.Apple_1_Points[1], 
    //   this.HandController.Apple_1_Points[0] 
    // );
    // Ultils.TouchArea.checkTouchCondition3(
    //   this.HandController.node, 
    //   this.HandController.Apple_1_Points[2], 
    //   this.HandController.Apple_1_Points[1] 
    // );
    // Ultils.TouchArea.checkTouchCondition4(
    //   this.HandController.node, 
    //   this.HandController.Apple_1_Points[3], 
    //   this.HandController.Apple_1_Points[2] 
    // );
    // Ultils.TouchArea.checkTouchCondition5(
    //   this.HandController.node, 
    //   this.HandController.Apple_1_Points[0], 
    //   this.HandController.Apple_1_Points[3],
    //   this.GraphicsController.graphicsNodes[4]
    // );
    Ultils.TouchArea.checkTouchCondition6(
      this.HandController.node,
      this.HandController.Apple_1_Points[4],
      this.HandController.Apple_1_Points[0],
      this.GraphicsController.graphicsNodes[5]
    );
    Ultils.TouchArea.checkTouchCondition7(
      this.HandController.node
    );
    Ultils.TouchArea.checkTouchCondition8(this.HandController.node, this.GraphicsController.graphicsNodes[6]);
  }


  private touchEnd(event: cc.Touch) {
    if (Constants.isLoseGame) {
      return;
    }

    Constants.isTouch = false;
    this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    this.HandController.stop();
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
