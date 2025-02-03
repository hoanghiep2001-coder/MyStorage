import { _decorator, Component, Node, Vec2, EventTouch, Vec3, UITransform } from "cc";
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
  }


  private touchStart(): void {
    if(Constants.toStore) {
      this.GameController.installHandle();
      return;
    }

    if (!Constants.isCanTouch) {
      return;
    }

    Constants.isTouching = true;

    if (Constants.isDoneMergeStep2 && Constants.isFailStep2) {
      this.GameController.installHandle();
    }

    this.NodesController.Text_Tap.active = false;
    this.NodesController.hint_1.active = false;
    this.NodesController.hint_2.active = false;
    this.NodesController.hint_3.active = false;

    // this.IronSource.handleIronSourcePlaySound();
  }


  private touchMove(event: EventTouch, stick: Node) {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    const screenPos = event.getUILocation();
    this.pos = this.convertToLocalLocation(screenPos);
    this.NodesController.point.setPosition(this.pos);

    !Constants.isFailStep1 && this.checkMergeFirstStep();
    Constants.isFailStep1 && this.checkMergeSecondStep();
  }


  private touchEnd(): void {
    if (!Constants.isCanTouch || Constants.ironSource.isEndGame) {
      return;
    }

    Constants.isTouching = false;

    if (!Constants.isFailStep1 && !Constants.isDoneMergeStep1) {
      if (!this.isDoneMergeStep1) {
        this.NodesController.init();
      } else {
        Constants.isDoneMergeStep1 = true;
        this.AudioManager.playSound(Constants.SoundTrack.Dino_FightSound);
      }
      return;
    }

    if (!Constants.isDoneMergeStep2 && Constants.isFailStep1) {
      if (!this.isDoneMergeStep2) {
        this.NodesController.init();
      } else {
        Constants.isDoneMergeStep2 = true;
        this.AudioManager.playSound(Constants.SoundTrack.Dino_FightSound);
        Constants.dino_lines_2.forEach(line => line.active = true);
      }
    }
  }


  private convertToLocalLocation(value: Vec2): Vec3 {
    const localX = value.x - 160 - this.node.getPosition().x;
    const localY = value.y - 240 - this.node.getPosition().y;
    const result = new Vec3(localX, localY, 0);
    return result;
  }


  private checkMergeFirstStep(): void {
    for (let i = 0; i < Constants.points_1.length; i++) {
      let currentNode = Constants.points_1[i];
      let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
      let pointBdx = Constants.point.getComponent(UITransform).getBoundingBox();
      if (nodeBdx.intersects(pointBdx)) {
        if (Constants.isMergeStep1States[i]) {
          break;
        }

        for (let j = 0; j < Constants.isMergeStep1States.length; j++) {
          if (!Constants.isMergeStep1States[j]) {
            this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound);
            Constants.isMergeStep1States[i] = true;
            Constants.dino_lines[i].active = true;

            let stateArr = Constants.isMergeStep1States.filter((state => state === true));
            const arrayOf6 = stateArr.slice(0, 6);
            
            if (arrayOf6.every(state => state === true) && arrayOf6[4]) {
              this.isDoneMergeStep1 = true;
              Constants.dino_lines.forEach(line => line.active = true);
            }
            break;
          }
        }
        break;
      }
    }
  }


  private checkMergeSecondStep(): void {
    for (let i = 0; i < Constants.points_2.length; i++) {
      let currentNode = Constants.points_2[i];
      let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
      let pointBdx = Constants.point.getComponent(UITransform).getBoundingBox();
      if (nodeBdx.intersects(pointBdx)) {

        if (Constants.isMergeStep2States[i]) {
          break;
        }


        for (let j = 0; j < Constants.isMergeStep2States.length; j++) {
          if (!Constants.isMergeStep2States[j]) {
            this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound);
            Constants.isMergeStep2States[i] = true;
            Constants.dino_lines_2[i].active = true;

            let stateArr = Constants.isMergeStep2States.filter((state => state === true));
            const arrayOf4 = stateArr.slice(0, 5);
            if (arrayOf4.every(state => state === true && arrayOf4[3])) {
              this.isDoneMergeStep2 = true;
              Constants.dino_lines_2.forEach(line => line.active = true);
            }
            break;
          }
        }
        break;
      }
    }
  }


  // protected update(dt: number): void {
  //       this.IronSource.handleMuteSoundIronSource();
  // }
}
