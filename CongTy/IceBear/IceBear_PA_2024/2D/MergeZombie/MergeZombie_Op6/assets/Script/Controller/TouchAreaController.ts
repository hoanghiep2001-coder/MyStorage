import { Constants } from "../Data/constants";
import IronSource from "../Other/IronSource";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {
  // Component
  @property(IronSource)
  IronSource: IronSource = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  // state
  isTouch: boolean = false;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  private hideMaskTouchStart(e: any): void {
    Constants.isCanTouch && this.GameController.installHandle();

    // ironsource
    this.IronSource.handleIronSourcePlaySound();
  }


  private enableTouch(): void {
    Constants.isCanTouch = false;
  }

}
