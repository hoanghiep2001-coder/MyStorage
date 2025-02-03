import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(NodesContainer)
  NodesContainer: NodesContainer = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;


  protected onLoad() {

  }


  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodesContainer.Lobsters.forEach(lobster => {
      lobster.on(cc.Node.EventType.TOUCH_START, this.lobsterTouchStart, this);
      lobster.on(cc.Node.EventType.TOUCH_MOVE, this.lobsterTouchMove, this);
      lobster.on(cc.Node.EventType.TOUCH_END, this.lobsterTouchEnd, this);
      lobster.on(cc.Node.EventType.TOUCH_CANCEL, this.lobsterTouchEnd, this);
    });

    this.NodesContainer.CTA_button.on(cc.Node.EventType.TOUCH_START, () => {
      this.GameController.installHandle();
    }, this);

    // mtg & applovin
    this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, () => {
      this.GameController.installHandle();
    }, this);
  }


  private lobsterTouchStart(e: cc.Event.EventTouch): void {
    if(!Constants.isCanTouch) return;

    // this.handleIronSourcePlaySound();

    this.AudioManager.playSound(Constants.SoundTrack.TouchSound);

    Constants.isGameStart = true;

    let targetNode: cc.Node = e.currentTarget,
      parentNode = targetNode.parent,
      childCount = parentNode.childrenCount,
      targetNodeScale = targetNode.scale;

    this.NodesContainer.hand.active = false;

    // lấy ra số tương ứng của lobster đang click
    Constants.currentLobsterIndex = this.getNumberFromNodeName(targetNode.name);

    // scale up target node
    cc.tween(targetNode)
      .to(0.5, { scale: targetNodeScale + 0.03 }, { easing: cc.easing.elasticOut })
      .start();

    // luôn luôn cho nổi trên bề mặt canvas khi đc chọn
    targetNode.setSiblingIndex(childCount - 1);
  }


  private lobsterTouchMove(e: cc.Event.EventTouch): void {
    if(!Constants.isCanTouch) return;

    let targetNode: cc.Node = e.currentTarget,
      touchPos: cc.Vec2 = e.getLocation();

    targetNode.setPosition(this.node.convertToNodeSpaceAR(touchPos));
  }


  private lobsterTouchEnd(e: cc.Event.EventTouch): void {
    if(!Constants.isCanTouch) return;

    let targetNode: cc.Node = e.currentTarget,
      targetNodeScale = targetNode.scale,
      demoLobster = this.NodesContainer.UI
        .getChildByName("Demo")
        .getChildByName(`Lobster${Constants.currentLobsterIndex}`);

    // check collide correct area or not
    this.isCollideCorrectLobsterArea(targetNode)
      ? this.correct(targetNode, targetNodeScale, demoLobster)
      : this.wrong(targetNode, targetNodeScale);

  }


  private correct(targetNode: cc.Node, targetNodeScale: number, demoLobster: cc.Node): void {
    targetNode.setSiblingIndex(Constants.currentLobsterIndex);

    this.AudioManager.playSound(Constants.SoundTrack.CorrectSound);

    Constants.currentCorrectStatus += 1;

    if (Constants.lobsterStatus.every(status => status === true)) {
      this.GamePlay.showCTA(true);
    }

    cc.tween(targetNode)
      .to(0.5, { scale: targetNodeScale - 0.03, position: demoLobster.position }, { easing: cc.easing.elasticOut })
      .start();
  }


  private wrong(targetNode: cc.Node, targetNodeScale: number): void {
    cc.tween(targetNode)
      .to(0.5, { scale: targetNodeScale - 0.03 }, { easing: cc.easing.elasticOut })
      .start();
  }


  private hideMaskTouch(): void {
    // mtg & applovin
    this.GameController.installHandle();
  }


  private getNumberFromNodeName(nodeName: string): number {
    let match = nodeName.match(/\d+$/);
    if (match) return parseInt(match[0], 10);
    return null;
  }


  private isCollideCorrectLobsterArea(lobster: cc.Node): boolean {
    let lobsterBdx = lobster.getBoundingBox(),
      correctAreaBdx = this.NodesContainer.
        CorrectLobsterAreas[Constants.currentLobsterIndex - 1].getBoundingBox();

    if (lobsterBdx.intersects(correctAreaBdx)) {
      Constants.lobsterStatus[Constants.currentLobsterIndex - 1] = true;
      return true
    }

    else {
      Constants.lobsterStatus[Constants.currentLobsterIndex - 1] = false;
      return false;
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


  protected update(dt: number): void {
      // this.GamePlay.handleMuteSoundIronSource();
  }
}
