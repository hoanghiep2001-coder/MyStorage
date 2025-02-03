import { _decorator, Component, Node, Vec2, EventTouch, Vec3, UITransform, ParticleSystem, Rect, log } from "cc";
import { Constants } from "../Data/Constant";
import { NodesController } from "./NodesController";
import { GameController } from "./GameController";
import { AudioManager } from "../Plugin/AudioManager";
import { IronSource } from "../Plugin/IronSource";
const { ccclass, property } = _decorator;

@ccclass("TouchAreaController")
export class TouchAreaController extends Component {
  @property(IronSource)
  IronSource: IronSource = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(NodesController)
  NodesController: NodesController = null;
  @property(GameController)
  GameController: GameController = null;

  // state
  pos: Vec3 = null;


  isDoneMergeStep1: boolean = false;
  isDoneMergeStep2: boolean = false;


  protected start(): void {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesController.hideMask.on(Node.EventType.TOUCH_START, this.touchStart, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.NodesController.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

    this.NodesController.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    // this.NodesController.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  private touchStart(): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    this.IronSource.handleIronSourcePlaySound();

    if (Constants.GameData.touchPointCount === 2) {
      Constants.GameData.touchPointCount += 1;

      this.NodesController.Text_Tap.active = false;

      Constants.isFightStep1 = true;
    }

    Constants.isTouching = true;

    this.NodesController.Hand.active = false;
  }


  private touchMove(event: EventTouch) {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    let touchPos = this.convertToLocalLocation(event.getUILocation());

    this.NodesController.movingPoint.setPosition(touchPos);

    this.handleCollideOtherPoint();
  }


  private touchEnd(): void {


    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    Constants.isTouching = false;
  }


  private convertToLocalLocation(value: Vec2): Vec3 {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }


  private handleCollideOtherPoint(): void {
    let pointBdx = this.NodesController.movingPoint.getComponent(UITransform).getBoundingBox();

    this.handleCollideStep1(pointBdx);
  }


  private handleCollideStep1(pointBdx: Rect): void {
    for (let index = 0; index < this.NodesController.points.length; index++) {
      const point = this.NodesController.points[index];
      let otherPointBdx = point.getComponent(UITransform).getBoundingBox();

      if (Constants.GameData.roboTouchingNumber !== index && pointBdx.intersects(otherPointBdx))
        this.activeCurrentRoboWithTouch(index);
    }
  }


  private activeCurrentRoboWithTouch(index: number): void {
    this.AudioManager.playSound(Constants.SoundTrack.chooseSound);

    Constants.GameData.roboTouchingNumber = index;
    Constants.GameData.touchPointCount += 1;

    const robo = this.NodesController.robo_Step1[index];
    const roboFXs = robo.getComponentsInChildren(ParticleSystem);
    const roboArownDown = robo.getChildByName("Arrown");

    roboFXs.forEach(fx => fx.play());
    roboArownDown.active = true;

    if (Constants.GameData.touchPointCount === 2) Constants.GameData.isDoneStep1 = true;
  }
}
