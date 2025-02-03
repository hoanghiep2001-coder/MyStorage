
import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export class TouchAreaController extends cc.Component {

  // Component
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GamePlay)
  GamePlay: GamePlay = null;

  @property(cc.Node)
  background: cc.Node = null;
  @property(cc.Node)
  HideMask: cc.Node = null;
  @property(cc.Node)
  oneTap: cc.Node = null;
  @property(cc.MouseJoint)
  mouseJoint: cc.MouseJoint = null;

  // horizontal
  @property([cc.Node])
  Knots: cc.Node[] = [];
  @property([cc.Node])
  Knots_2: cc.Node[] = [];
  // @property([cc.Node])
  // Knots_3: cc.Node[] = [];
  @property([cc.Node])
  Ropes: cc.Node[] = [];
  @property([cc.MotorJoint])
  motorJoints: cc.MotorJoint[] = [];


  // vertical
  @property([cc.Node])
  Knots_Vtc: cc.Node[] = [];
  @property([cc.Node])
  Knots_2_Vtc: cc.Node[] = [];
  // @property([cc.Node])
  // Knots_3_Vtc: cc.Node[] = [];
  @property([cc.Node])
  Ropes_Vtc: cc.Node[] = [];
  @property([cc.MotorJoint])
  motorJoints_Vtc: cc.MotorJoint[] = [];

  protected start() {
    this.registerEvent();
  }


  private registerEvent(): void {
    // onetap -----------------
    this.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    // mtg & applovin
    // this.oneTap.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    // ---------------------------

    // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.ropeTouchStart, this);
    // this.HideMask.on(cc.Node.EventType.TOUCH_END, this.ropeTouchEnd, this);
    // this.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.ropeTouchEnd, this);

    // ironsource
    // this.background.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
  }


  private ropeTouchStart(e: cc.Touch): void {
    this.GamePlay.hints.forEach(hint => hint.active = false);
    this.GamePlay.hints_Vtc.forEach(hint => hint.active = false);
    if (Constants.step === 2 || !Constants.isCollideKnot1) {
      this.GamePlay.hints[1].active = true;
      this.GamePlay.hints_Vtc[1].active = true;
      this.AudioManager.playSound(Constants.SoundTrack.ropeSound1);
    }
    this.handleIronSourcePlaySound();
  }


  private ropeTouchEnd(): void {

    // rope 1
    if (
      (
        this.Ropes[0].getBoundingBox().intersects(this.Knots[0].getBoundingBox())
        || this.Ropes_Vtc[0].getBoundingBox().intersects(this.Knots_Vtc[0].getBoundingBox())
      )
      && !Constants.isCollideKnot1) {
      Constants.isCollideKnot1 = true;
      Constants.knot1Status = false;
      Constants.knot4Status = false;
      this.motorJoints[0].linearOffset = new cc.Vec2(50, 245);
      this.motorJoints_Vtc[0].linearOffset = new cc.Vec2(43, 198);
      this.scheduleOnce(() => {
        this.motorJoints[0].destroy();
        this.motorJoints_Vtc[0].destroy();
      }, 0.5)
      this.HideMask.width = 5000;
      this.AudioManager.playSound(Constants.SoundTrack.ropeSound2);
    }
    // --------------------


    // rope 2
    if (
      (
        this.Ropes[1].getBoundingBox().intersects(this.Knots_2[0].getBoundingBox())
        || this.Ropes_Vtc[1].getBoundingBox().intersects(this.Knots_2_Vtc[0].getBoundingBox())
      )
      && !Constants.isCollideKnot2) {
      Constants.isCollideKnot2 = true;
      this.motorJoints[1].linearOffset = new cc.Vec2(115, 245);
      this.motorJoints_Vtc[1].linearOffset = new cc.Vec2(90, 198);
      this.scheduleOnce(() => {
        this.motorJoints[1].destroy();
        this.motorJoints[2].destroy();

        this.motorJoints_Vtc[1].destroy();
        this.motorJoints_Vtc[2].destroy();
        this.AudioManager.playSound(Constants.SoundTrack.ropeSound2);
      }, 0.5);
    }

    // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[1].getBoundingBox()) && !Constants.knot2Status) {
    //   this.motorJoints[1].linearOffset = new cc.Vec2(45, 198);
    // }

    // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[2].getBoundingBox())) {
    //   Constants.knot3Status = true;
    //   this.motorJoints[1].linearOffset = new cc.Vec2(0, 198);
    // }

    // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[3].getBoundingBox())) {
    //   this.motorJoints[1].linearOffset = new cc.Vec2(-45, 198);
    // }

    // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[4].getBoundingBox())) {
    //   this.motorJoints[1].linearOffset = new cc.Vec2(-92, 198);
    // }

    // --------------------


    // rope 3
    // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[0].getBoundingBox())) {
    //   this.motorJoints[2].linearOffset = new cc.Vec2(128, 185);
    // }

    // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[1].getBoundingBox())) {
    //   this.motorJoints[2].linearOffset = new cc.Vec2(85, 185);
    // }
    // --------------------
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



  protected update(dt: number): void {
    // this.handleMuteSoundIronSource();
  }
}
