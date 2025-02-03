import {
  _decorator,
  Component,
  Node,
  Vec2,
  EventTouch,
  Vec3,
  CCBoolean,
} from "cc";
import { Constants } from "../Data/Constant";
import AudioManager from "../Plugin/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("JoyStick")
export class JoyStick extends Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(Node)
  Game: Node = null;
  @property(Node)
  controlCubeBox: Node = null;
  @property(Node)
  stick: cc.Node = null;
  @property(Node)
  fakeBg: Node = null;
  @property
  public max_r: number = 40;
  @property(CCBoolean)
  public isTouch: boolean = false;
  @property
  public angleMove: number | null = null;

  
  controlCat: Component = null;
  setTimeOut: any;
  currentPos: Vec2 = null;


  start() {
    this.controlCat = this.controlCubeBox.getComponent("CatController");
    this.fakeBg.on(cc.Node.EventType.TOUCH_START, this.stickStart, this);
    this.fakeBg.on(cc.Node.EventType.TOUCH_MOVE, this.stickMove, this);
    this.fakeBg.on(cc.Node.EventType.TOUCH_CANCEL, this.stickEnd, this);
    this.fakeBg.on(cc.Node.EventType.TOUCH_END, this.stickEnd, this);
  }


  onLoad() {
    this.stick.setPosition(0, 0, 0);
  }


  private stickStart(event: EventTouch): void {
    // if(!Constants.isCatLive || Constants.isCatched || Constants.ironSource.isEndGame) {
    //   return;
    // }

    Constants.isWinGame && this.Game.getComponent("Game").GameController.installHandle();
    if(Constants.isWinGame)  return;

    this.Game.getComponent("Game").countDown();
    Constants.isTouch = true;
    this.isTouch = true;

    const screenPos = event.getUILocation();
    let pos = new Vec3(screenPos.x - 160, screenPos.y - 240, 0);
    this.node.setPosition(pos);
    this.node.getComponent("cc.UIOpacity").opacity = 120;
    this.stick.getComponent("cc.UIOpacity").opacity = 120;
    this.stick.setPosition(pos);
    
    // this.handleIronSourcePlaySound();
  }


  private stickMove(event: EventTouch): void {
    if(!Constants.isCatLive || Constants.isCatched || Constants.ironSource.isEndGame) {
      return;
    }

    const screenPos = event.getUILocation();
    let pos = new Vec3(screenPos.x - 160, screenPos.y - 240, 0);

    const distance = pos.clone().subtract(this.node.position);

    if (distance.length() > this.max_r) {
      // Chuyển vị trí stick về ranh giới của joystick
      distance.normalize().multiplyScalar(this.max_r);
      pos = this.node.position.clone().add(distance);
  }

    this.stick.setPosition(pos);
    Constants.localPos = pos;
    this.controlCat.isMoving = true;
    this.controlCat.handleAngleCat();
  }


  private stickEnd(event: cc.Touch): void {
    if(!Constants.isCatLive || Constants.isCatched  || Constants.ironSource.isEndGame) {
      return;
    }
    this.isTouch = false;
    this.stick.setPosition(0, 0, 0);
    this.controlCat.isMoving = false;
    this.stick.getComponent("cc.UIOpacity").opacity  = 0;
    this.node.getComponent("cc.UIOpacity").opacity  = 0;
  }


  private offEvent(): void {
    this.stick.getComponent("cc.UIOpacity").opacity  = 0;
    this.node.getComponent("cc.UIOpacity").opacity  = 0;
    this.fakeBg.active = false;
    this.controlCat.isMoving = false;
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


  protected update(dt: number): void {
    Constants.ironSource.isEndGame && this.offEvent();
  }
}
