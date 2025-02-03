import { _decorator, Component, Node, Vec2, EventTouch, Vec3, UITransform } from "cc";
import { Constants } from "../Data/Constant";
import { NodesController } from "./NodesController";
import { GameController } from "./GameController";
import { AudioManager } from "../Plugin/AudioManager";
import { IronSource } from "../Plugin/IronSource";
import { GamePlay } from "./GamePlay";
const { ccclass, property } = _decorator;

@ccclass("TouchAreaController")
export class TouchAreaController extends Component {
  @property(IronSource)
  IronSource: IronSource = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;
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

    this.NodesController.Popup_Btns.forEach(btn => {
      btn.on(Node.EventType.TOUCH_START, this.GamePlay.nuggetShoot, this);
    })
    this.NodesController.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    // this.NodesController.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  private touchStart(): void {
    Constants.isDonePA && this.GameController.installHandle();
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) return;
    Constants.isTouching = true;    
    this.NodesController.hint.active = false;
    this.IronSource.handleIronSourcePlaySound();
  }


  private touchMove(event: EventTouch) {
    if (!Constants.isCanTouch) return;
    const screenPos = event.getUILocation();
    this.pos = this.convertToLocalLocation(screenPos);
    this.NodesController.point.setPosition(this.pos);

    !Constants.isMerged && this.GamePlay.checkMerge();
  }


  private touchEnd(): void {
    if (!Constants.isCanTouch) return;
    Constants.isTouching = false;
    !Constants.isMerged && this.GamePlay.resetNuggetMerge(false);
  }


  private convertToLocalLocation(value: Vec2): Vec3 {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }


  protected update(dt: number): void {
    this.IronSource.handleMuteSoundIronSource();
  }
}
