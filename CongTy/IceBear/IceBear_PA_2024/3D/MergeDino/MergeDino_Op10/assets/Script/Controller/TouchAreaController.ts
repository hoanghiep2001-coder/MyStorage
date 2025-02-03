import { _decorator, Component, Node, Vec2, EventTouch, Vec3, UITransform, Animation } from "cc";
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

    this.NodesController.BtnClaim.on(Node.EventType.TOUCH_START, this.touchStart, this);
  }



  private touchStart(): void {
    Constants.isClickStart && this.GameController.installHandle();
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound)
    this.AudioManager.playSound(Constants.SoundTrack.Dino_MergeSound)
    // this.NodesController.hideMask.active = false;
    Constants.isTouching = true;  
    this.NodesController.Text_Tap.active = false;
    !Constants.isClickStart && this.NodesController.RewardContainer.getComponent(Animation).play("Reward_Anim");
    Constants.isClickStart = true;
    // this.IronSource.handleIronSourcePlaySound();
  }


  private touchMove(event: EventTouch, stick: Node) {
    if (!Constants.isCanTouch) {
      return;
    }

   
  }


  private touchEnd(): void {

  }


  private convertToLocalLocation(value: Vec2): Vec3 {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }



  // protected update(dt: number): void {
  //       this.IronSource.handleMuteSoundIronSource();
  // }
}
