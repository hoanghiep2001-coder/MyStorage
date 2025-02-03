import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;

  // Container
  @property(cc.Node)
  Character: cc.Node = null;
  @property(cc.Node)
  UI_Hrz: cc.Node = null;
  @property(cc.Node)
  UI_Vtc: cc.Node = null;

  // horizontal ---------------------
  // UI
  // @property([cc.Node])
  // knots: cc.Node[] = [];
  @property([cc.Node])
  Ropes: cc.Node[] = [];
  @property([cc.Node])
  hints: cc.Node[] = [];

  // effect
  @property([cc.ParticleSystem])
  Effects: cc.ParticleSystem[] = [];
  // ---------------------------------


  // Vertical ---------------------
  // UI
  // @property([cc.Node])
  // knots_Vtc: cc.Node[] = [];
  @property([cc.Node])
  Ropes_Vtc: cc.Node[] = [];
  @property([cc.Node])
  hints_Vtc: cc.Node[] = [];

  // effect
  @property([cc.ParticleSystem])
  Effects_Vtc: cc.ParticleSystem[] = [];
  // ---------------------------------


  // Character
  @property(cc.Node)
  Ponmi_Roped: cc.Node = null;
  @property(sp.Skeleton)
  Spine_Rope: sp.Skeleton = null;
  @property(cc.Node)
  Pomi_UnRoped: cc.Node = null;

  // CTA
  @property(cc.Node)
  CTA: cc.Node = null;
  @property(cc.Node)
  CTA_overlay: cc.Node = null;
  @property(cc.Node)
  CTA_btn: cc.Node = null;


  step1Flag: boolean = false;
  step2Flag: boolean = false;

  protected onLoad(): void {
    cc.director.getPhysicsManager().enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    // collisionManager.enabledDrawBoundingBox = true;
    // collisionManager.enabledDebugDraw = true;

    this.initGame();
  };


  private initGame(): void {
    this.Pomi_UnRoped.active = false;
    this.hints.forEach(hint => hint.active = false);
    this.hints_Vtc.forEach(hint => hint.active = false);
    this.CTA.active = false;
  };


  protected start(): void {
    this.handleGamePlay();
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
  }


  private handleGamePlay(): void {
    this.hints[0].active = true;
    this.hints_Vtc[0].active = true;
  }


  private showCTA(): void {
    this.CTA.active = true;
    this.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    // mtg & applovin
    this.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
  }


  private checkStep(): void {
    switch (Constants.step) {
      case 1:
        this.step1Flag = true;
        this.hints[0].active = false;
        this.hints_Vtc[0].active = false;
        this.scheduleOnce(() => {
          this.Ropes[0].getComponent(cc.Animation).play("Rope_BackAnim");
          this.Ropes_Vtc[0].getComponent(cc.Animation).play("Rope_BackAnim");
        }, 0.5)

        this.scheduleOnce(() => {
          this.Effects[0].resetSystem();
          this.Effects_Vtc[0].resetSystem();
          this.AudioManager.playSound(Constants.SoundTrack.completeSound);
        }, 1)

        this.scheduleOnce(() => {
          this.Spine_Rope.setAnimation(0, "break", false);
          this.AudioManager.playSound(Constants.SoundTrack.breakRopeSound);
          this.hints[2].active = true;
          this.hints[1].active = false;

          this.hints_Vtc[2].active = true;
          this.hints_Vtc[1].active = false;
        }, 1.5);
        break;
      case 2:
        this.step2Flag = true;
        this.hints[2].active = false;
        this.hints[1].active = false;
        this.hints_Vtc[2].active = false;
        this.hints_Vtc[1].active = false;
        this.scheduleOnce(() => {
          this.Ropes[1].getComponent(cc.Animation).play("Rope_BackAnim");
          this.Ropes[2].getComponent(cc.Animation).play("Rope_BackAnim");
          this.Ropes_Vtc[1].getComponent(cc.Animation).play("Rope_BackAnim");
          this.Ropes_Vtc[2].getComponent(cc.Animation).play("Rope_BackAnim");
        }, 0.5)

        this.scheduleOnce(() => {
          this.Effects[0].resetSystem();
          this.Effects[1].resetSystem();
          this.Effects_Vtc[0].resetSystem();
          this.Effects_Vtc[1].resetSystem();
          this.AudioManager.playSound(Constants.SoundTrack.completeSound2);
        }, 1)

        this.scheduleOnce(() => {
          this.Ponmi_Roped.active = false;
          this.Pomi_UnRoped.active = true;
        }, 1.5);
        this.scheduleOnce(() => {
          this.showCTA();
        }, 2.5)
        break;
      case 3:
        this.GameController.installHandle();
        break;
      default:
        break;
    }

    Constants.step = Constants.step + 1;
  }


  protected update(dt: number): void {
    Constants.isCollideKnot1 && !this.step1Flag && this.checkStep();
    Constants.isCollideKnot2 && !this.step2Flag && this.checkStep();
  }

}
