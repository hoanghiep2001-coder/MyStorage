import { Constants } from "../Data/constants";

import AudioManager from "../Plugin/AudioManager";

import Responsive from "../Plugin/Responsive";

import BottleItem from "../Ultils/BottleItem";

import { GameController } from "./GameController";

import NodesContainer from "./NodesContainer";

import * as Interfaces from '../Data/interfaces';

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

  @property(cc.Graphics)
  graphics: cc.Graphics = null;


  @property(cc.Node)
  Level2: cc.Node = null;

  isDrawWaterGraphics: boolean = false;


  protected onLoad(): void {

  }


  protected start(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    // this.activeTweenTextTap();

    // cc.tween(this.NodesContainer.CTA_button)
    // .repeatForever(
    //     cc.tween(this.NodesContainer.CTA_button)
    //         .to(0.5, { scale: 0.45 })
    //         .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })
    // ).start();
  }


  public countingTime(): void {
    if (this.isShowCTA) return;

    let nodeTimeChild = this.NodesContainer.time.children[0];
    if (nodeTimeChild.scaleX <= 0 && Constants.isCanTouch) {
      this.showCTA(false);
      return;
    }

    nodeTimeChild.scaleX -= 0.0008;
  }


  public showCTA(isWin: boolean): void {
    this.isShowCTA = true;

    Constants.isCanTouch = false;
    Constants.isShowCTA = true;
    Constants.isToStore = true;

    this.Level2.active = true;

    this.scheduleOnce(() => {

      cc.tween(this.NodesContainer.Tubes[0].parent)
      .to(1, {opacity: 0})
      .start();
  
      cc.tween(this.Level2)
      .to(1, {opacity: 255})
      .start();

      this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    }, 1)
  }


  checkThreeSameOneDifferent(colors: cc.Color[]): boolean {
    if (colors.length !== 4) {
        console.error("Mảng màu phải chứa chính xác 4 phần tử.");
        return false;
    }

    // Đếm số lần xuất hiện của từng màu
    const colorCountMap: Map<string, number> = new Map();

    for (let color of colors) {
        const colorKey = color.toHEX(); // Sử dụng HEX để đại diện cho màu
        if (colorCountMap.has(colorKey)) {
            colorCountMap.set(colorKey, colorCountMap.get(colorKey)! + 1);
        } else {
            colorCountMap.set(colorKey, 1);
        }
    }

    // Chuyển đổi Map values thành mảng
    const counts = Array.from(colorCountMap.values());

    // Kiểm tra nếu có một màu xuất hiện 3 lần và một màu xuất hiện 1 lần
    let hasThreeSame = false;
    let hasOneDifferent = false;

    for (let count of counts) {
        if (count === 3) {
            hasThreeSame = true;
        } else if (count === 1) {
            hasOneDifferent = true;
        }
    }

    return hasThreeSame && hasOneDifferent;
}


  public getColorStatus(colors: cc.Color[]): Interfaces.colorStatus {
    let firstColorOfTube: string = null,
     indexOfFirstColor: number = null,
     nonTransparentColorArr: string[] = [],
     heightOfFirstColor: number = null,
     colorHeightArr = [210, 200, 250, 350],
     isHasTwoSameColor: boolean = false,
     numberOfDecreaseFloor: number = 0,
     numberOfIncreaseFloor: number = 0,
    //  numberOfDecreaseFloor: number = 0,
    isHasThreeSameOneDiffColor: boolean = false,
     drawWaterSide: string = "";

    // isHasTwoSameColor = this.hasConsecutiveDuplicateColors(colors);

    isHasThreeSameOneDiffColor = this.checkThreeSameOneDifferent(colors)

    for (let i = 0; i < colors.length; i++) {
      if (colors[i].a !== 0) {
        if (!firstColorOfTube) {
          firstColorOfTube = colors[i].toCSS();
          heightOfFirstColor = colorHeightArr[i];
          indexOfFirstColor = i;
        };
        nonTransparentColorArr.push(colors[i].toCSS());
      }

      if(firstColorOfTube) {
        let currentColor = colors[i].toCSS();
        if(currentColor === firstColorOfTube) numberOfDecreaseFloor += 1
        else break;
      }
    }


    return {
      firstColorOfTube: firstColorOfTube,
      indexOfFirstColor: indexOfFirstColor,
      nonTransparentColorArr: nonTransparentColorArr,
      heightOfFirstColor: heightOfFirstColor,
      isHasTwoSameColor: isHasTwoSameColor,
      numberOfDecreaseFloor: numberOfDecreaseFloor,
      isHasThreeSameOneDiffColor: isHasThreeSameOneDiffColor
      // numberOfIncreaseFloor: numberOfIncreaseFloor
    }
  }


  public handleMoveToAnotherTube(tubeA: cc.Node, tubeB: cc.Node): void {
    const tubeABottleItemComp = tubeA.getComponent(BottleItem);

    const tubeBBottleItemComp = tubeB.getComponent(BottleItem);

    tubeB.setSiblingIndex(this.NodesContainer.Tubes.length - 1);

    tubeA.setSiblingIndex(this.NodesContainer.Tubes.length - 2);

    let tubeState = this.calculateNewTubeState(tubeBBottleItemComp, tubeABottleItemComp)

    tubeABottleItemComp.MoveToAnotherTube(tubeState);

    console.log("correct");
  }


  private calculateNewTubeState(tubeBBottleItemComp: BottleItem, tubeABottleItemComp: BottleItem): Interfaces.tubeState {
    let newState: Interfaces.tubeState = {
      position: null,
      angle: null,
      firstColorOfTube: null,
      currentHeightOfColor: null,
      otherTube: null,
      drawWaterSide: null,
    };

    const tubeBpos: cc.Vec2 = tubeBBottleItemComp.node.getPosition();

    const colorStatus: Interfaces.colorStatus = this.getColorStatus(tubeABottleItemComp.waterColors);

    newState.firstColorOfTube = colorStatus.firstColorOfTube;

    newState.currentHeightOfColor = colorStatus.heightOfFirstColor;

    newState.otherTube = tubeBBottleItemComp;

    switch (tubeBBottleItemComp.tubeSide) {
      case "left":
        newState.position = new cc.Vec3(30, tubeBpos.y + 120, 0);
        newState.angle = 75

        newState.drawWaterSide = "left";

        break;
      case "right":
        newState.position = new cc.Vec3(-30, tubeBpos.y + 120, 0);
        newState.angle = -75;

        newState.drawWaterSide = "right";

        break;
      default:
        break;
    }

    return newState;
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


  public handleDrawWaterGraphics(moveTo: cc.Vec2, lineTo: cc.Vec2, color: cc.Color): void {
    this.graphics.clear();

    let moveToConverted = this.node.convertToNodeSpaceAR(moveTo);
    let LineToConverted = this.node.convertToNodeSpaceAR(lineTo);

    this.graphics.strokeColor = color;
    this.graphics.moveTo(moveToConverted.x, moveToConverted.y);
    this.graphics.lineTo(LineToConverted.x, LineToConverted.y);
    this.graphics.stroke();

    console.log("check");
  }


  protected update(dt: number): void {
    // this.isDrawWaterGraphics && this.handleDrawWaterGraphics();
    // Constants.isGameStart && this.countingTime();
  }

}
