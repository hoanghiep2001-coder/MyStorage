import { SpineAnims } from "../Data/Anims";
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";
import IronSource from "./IronSource";
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
    // this.initVarialbes();
    this.registerEvent();
  }


  private registerEvent(): void {
    this.NodeContainer.Step1_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
    this.NodeContainer.Step1_btn_KimTiem.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);

    this.NodeContainer.Step2_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showCTA, this);

    this.NodeContainer.CTA_btnDownload.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
  }


  public registerEventStep2(): void {
    this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
    this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
    this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
    this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);

    this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
    this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
    this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
    this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);

    this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
    this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
    this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
    this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
  }


  private hideMaskTouchStart(e: any): void {
    if (Constants.isToStore) {
      this.GameController.installHandle();
      return;
    }
  }


  private btnActiveTouchStart(): void {
    if (Constants.isToStore) {
      this.GameController.installHandle();
      return;
    }

    !Constants.isDoneStep1 && this.GamePlay.handleStep1();
  }


  private WeaponTouchStart(e: cc.Event.EventTouch): void {
    this.NodeContainer.Hand.active = false;
    let node: cc.Node = e.target;
    this.AudioManager.playSound(Constants.SoundTrack.pickdo);
    console.log(node.name);


    switch (node.name) {
      case "Gun1":
        cc.tween(node)
          .to(0.5, { scale: 0.28 })
          .start();
        break;
      case "kimtiem":
        cc.tween(node)
          .to(0.5, { scale: 0.6 }).start();
        break;
      case "Gun2":
        cc.tween(node)
          .to(0.5, { scale: 0.18 }).start();
        break;
      default:
        break;
    }

  }


  private WeaponTouchMove(e: cc.Event.EventTouch): void {
    let node: cc.Node = e.target;
    let pos = this.node.convertToNodeSpaceAR(e.touch.getLocation());

    node.setPosition(pos.x, pos.y - 40);
  }


  private WeaponTouchEnd(e: cc.Event.EventTouch): void {
    !this.AudioManager.pickdo.isPlaying && this.AudioManager.playSound(Constants.SoundTrack.pickdo);
    let node: cc.Node = e.target;
    let result = this.GamePlay.setInHole(node);
    if (!result) this.GamePlay.setInHoleWithTouch(node);
    Constants.isHole1Actived && Constants.isHole2Actived && Constants.isHole3Actived && this.GamePlay.showBtnActive();
  }




}
