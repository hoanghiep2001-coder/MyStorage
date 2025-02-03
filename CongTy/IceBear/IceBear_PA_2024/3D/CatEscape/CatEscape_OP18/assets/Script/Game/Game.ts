import {
  _decorator,
  Component,
  Node,
  Vec3,
  CCFloat,
  v3,
  EventTouch,
  screen,
  Animation,
  director,
  tween,
} from "cc";
import { GameController } from "./GameController";
import { JoyStick } from "./JoyStick";
import { Constants } from "../Data/Constant";
import AudioManager from "../Plugin/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  // component
  @property(JoyStick)
  JoyStickComponent: JoyStick = null;
  @property(GameController)
  GameController: GameController = null;
  @property(AudioManager)
  AudioManager: AudioManager = null;

  //3D
  @property(Node)
  Cat: Node = null;

  // 2D
  @property(Node)
  canvas2D: Node;
  @property(Node)
  icon: Node;
  @property(Node)
  navigate: Node;
  @property(Node)
  text: Node;
  @property(Node)
  title: Node;
  @property(Node)
  joyStick: Node;
  @property(Node)
  camera: Node = null;
  @property
  step: number = 1;


  @property(Node)
  HideMask: Node = null;
  @property(Node)
  CTA: Node = null;
  @property(Node)
  CTA_tryBtn: Node;
  @property(Node)
  CTA_Download: Node;


  @property(CCFloat)
  _realHeight: number = null;
  @property(CCFloat)
  _realWidth: number = null;

  // state
  meowSoundState: number = null;

  // ironsource
  ironSourceState: number = 1;
  ironSourceSoundState: boolean = true;
  isEndGame: boolean = false;
  endGame: boolean = false;

  start() {
    this.reset();
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    // this.AudioManager.playSound(Constants.SoundTrack.catAngrySound);

    this.Cat.active = true;
    this.canvas2D.active = true;
    this.text.active = true;
    this.navigate.active = true;

    this.canvas2D.on(Node.EventType.TOUCH_START, this.managerScene, this);
  }


  private reset(): void {
    Constants.isCollideDoor = false;
    Constants.laser = false;
    Constants.wallLaser = true;
    Constants.isEatFood = false;

    // mtg & applovin
    Constants.isWinGame && this.HideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  public countDown(): void {
    if (Constants.isTouch || Constants.isCatched || !Constants.isCatLive) {
      return;
    }

    // this.scheduleOnce(() => {
    //   if (Constants.ironSource.isEndGame) {
    //     return;
    //   }
    //   this.EndGame(false);
    // }, 6);
  }


  private handleCountingTime(): void {
    if (Constants.countingTime < 0 && Constants.isRing) {
      this.timeline.setScale(0, 1, 1);
      return;
    }


    if (Constants.countingTime < 0.5 && !Constants.isRing) {
      this.AudioManager.playSound(Constants.SoundTrack.clockSound);
      Constants.isRing = true;
    }

    if (!Constants.ironSource.isEndGame) {
      Constants.countingTime -= 0.0017;

      this.timeline.setScale(Constants.countingTime, 1, 1);
    }
  }


  public EndGame(bool: boolean): void {
    if(Constants.ironSource.isEndGame) return;

    this.CTA.active = true;
    Constants.ironSource.isEndGame = true;
    this.CTA.getComponent(Animation).play("CTA_Anim");
    this.title.active = true;
    this.icon.active = true;
    this.CTA_tryBtn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    tween(this.CTA_tryBtn)
      .repeatForever(
        tween(this.CTA_tryBtn)
          .to(0.5, { scale: new Vec3(0.45, 0.45, 0.45) })
          .to(0.5, { scale: new Vec3(0.4, 0.4, 0.4) }, { easing: 'elasticOut' })
      ).start();

    // mtg & applovin
    // this.HideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    this.AudioManager.stopSound(Constants.SoundTrack.electric2Sound);
    this.AudioManager.stopSound(Constants.SoundTrack.electricSound);

    this.AudioManager.playSound(Constants.SoundTrack.loseSound);
    this.AudioManager.stopSound(Constants.SoundTrack.catAngrySound);
  }


  managerScene(e: EventTouch) {
    this.step++;
    if (this.step === 2) {
      let pos = e.getUILocation();
      let localPos = new Vec3(pos.x - 160, pos.y - 240, 0);

      this.JoyStickComponent.node.setPosition(localPos);
      this.JoyStickComponent.stick.setPosition(localPos);

      this.text.active = false;
      this.navigate.active = false;
    }
  }


  private handleMuteSoundIronSource(): void {
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


  update(deltaTime: number) {
    this.responsive();
    // this.handleMuteSoundIronSource();
  }


  private responsive(): void {
    if (screen.windowSize.width > screen.windowSize.height) {
      this.camera.setPosition(v3(-14.8, 24, 0));
      this._realHeight = 480;
      this._realWidth =
        320 * (screen.windowSize.width / screen.windowSize.height);
      // console.log(this._realWidth);
      this.icon.setPosition((this._realWidth - 320) / 2 + 160, 0, 0);
      this.title.setPosition((320 - this._realWidth) / 2 - 160, 0, 0);

      this.icon.setScale(0.9, 0.9, 0.9);
      this.title.setScale(0.35, 0.35, 0.35);
    } else {
      this.camera.setPosition(v3(-13, 24, 0));
      if (screen.windowSize.height / screen.windowSize.width < 1.4) {
        this._realWidth = 370;
      } else {
        this._realWidth = 320;
      }
      this._realHeight =
        this._realWidth *
        (screen.windowSize.height / screen.windowSize.width);

      // this.title.y = (this._realHeight - 480) / 2 + 207;
      // this.icon.y = (this._realHeight - 480) / 2 + 207;

      this.icon.setPosition(56, 207 + (this._realHeight - 480) / 2, 0);
      this.title.setPosition(-40, 207 + (this._realHeight - 480) / 2, 0);
      this.icon.setScale(0.25, 0.25, 0.25);
      this.title.setScale(0.2, 0.2, 0.2);
    }
  }
}
