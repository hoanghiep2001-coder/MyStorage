import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import BottleItem from "../Ultils/BottleItem";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

import * as Interfaces from '../Data/interfaces';

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
    this.NodesContainer.Tubes.forEach((tube) => {
      tube.on(cc.Node.EventType.TOUCH_START, this.tubeTouchStart, this);
    });
  }


  private tubeTouchStart(e: cc.Event.EventTouch): void {
    if (Constants.isToStore) {
      this.GameController.installHandle();
      return;
    }

    if (!Constants.isCanTouch) return;

    this.handleIronSourcePlaySound();

    let clickedNode: cc.Node = e.target;

    this.NodesContainer.Tutorial.active = false;

    this.AudioManager.playSound(Constants.SoundTrack.TouchSound);

    if (Constants.TubeClicked) {
      this.isPickCorrectTube(Constants.TubeClicked, clickedNode)
        ? this.GamePlay.handleMoveToAnotherTube(Constants.TubeClicked, clickedNode)
        : cc.log("wrong");

      this.scaleDownTube(Constants.TubeClicked);

      Constants.TubeClicked = null;
    }

    else {
      Constants.TubeClicked = clickedNode;

      this.scaleUpTube(clickedNode);

      cc.log("wrong");
      cc.log("------------------------");
    }
  }


  private isPickCorrectTube(tube1: cc.Node, tube2: cc.Node): boolean {
    let reuslt: boolean = false;

    let tube1BottleItemComponent = tube1.getComponent(BottleItem);
    let tube2BottleItemComponent = tube2.getComponent(BottleItem);

    let colorA: Interfaces.colorStatus = this.GamePlay.getColorStatus(tube1BottleItemComponent.waterColors);
    let colorB: Interfaces.colorStatus = this.GamePlay.getColorStatus(tube2BottleItemComponent.waterColors);

    Constants.interactingColorNumber = colorA.indexOfFirstColor;

    cc.log(colorA.nonTransparentColorArr.length)

    if (tube1.name === tube2.name) return false;
    else {
      if(colorA.isHasThreeSameOneDiffColor && colorB.nonTransparentColorArr.length === 0) return true;
      if(colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 1) return false;
      if(colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 0) return false;
      if(colorB.nonTransparentColorArr.length === 0 && colorA.nonTransparentColorArr.length === 4) return false;
      if(colorB.nonTransparentColorArr.length === 3 && colorA.nonTransparentColorArr.length == 2) return false;
      if (colorA.firstColorOfTube === colorB.firstColorOfTube)    return true
    }

    return reuslt;
  }


  private scaleUpTube(tube: cc.Node): void {
    cc.tween(tube)
      .to(0.5, { scale: 0.17 }, { easing: cc.easing.elasticOut })
      .start();
  }


  private scaleDownTube(tube: cc.Node): void {
    cc.tween(tube)
      .to(0.5, { scale: 0.15 }, { easing: cc.easing.elasticOut })
      .start();
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
    this.GamePlay.handleMuteSoundIronSource();
  }
}
