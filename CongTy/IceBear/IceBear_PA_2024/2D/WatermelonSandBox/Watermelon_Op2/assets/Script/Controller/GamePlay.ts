import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodeContainer from "./NodeContanier";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(NodeContainer)
  NodeContainer: NodeContainer = null;


  @property(cc.Node)
  touchArea: cc.Node = null;

  // state
  anims: cc.Tween[] = [];


  protected onLoad(): void {

  }


  protected start(): void {
    // this.scheduleOnce(() => {}, 1)
    this.touchArea.getComponent("TouchAreaController").registerEventStep2();
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    this.activeBtnAnim();
  }


  private activeBtnAnim(): void {
    this.anims[0] = cc.tween(this.NodeContainer.btn_Active)
      .repeatForever(
        cc.tween(this.node)
          .to(0.5, { scale: 0.9 })
          .to(0.5, { scale: 1 }, { easing: 'elasticOut' })
      ).start();
  }


  public handleStep1(): void {
    Constants.isDoneStep1 = true;

    this.anims[0].stop();
    this.NodeContainer.btn_Active.scale = 1;

    this.runTweenAnims();
  }


  private runTweenAnims(): void {
    let kimtiem = this.NodeContainer.Step1_btn_KimTiem.getChildByName("kimtiem");
    let frame = this.NodeContainer.Step1_btn_KimTiem.getChildByName("frame");
    let Step1_BoneThan = this.NodeContainer.PlayerBase.getChildByName("Bonethan")
    let Step1_Head = this.NodeContainer.Step1_character.getChildByName("Head").getChildByName("dau")

    // tween kim tiem
    cc.tween(kimtiem)
      .to(0.5, { scale: 2 }, { easing: 'elasticOut' })
      .call(() => {

        cc.tween(this.NodeContainer.btn_Active)
          .to(2.5, { scale: 0 }, { easing: 'elasticInOut' })
          .start();

        this.AudioManager.playSound(Constants.SoundTrack.tiem);
        cc.tween(kimtiem)
          .to(0.5, { x: 70 })
          .call(() => {

            this.NodeContainer.Step1_character.getComponent(cc.Animation).stop("Character_IdleAnim");

            // scale down frame
            cc.tween(frame)
              .to(1.5, { scaleY: 0 })
              .call(() => {

                // show bone character
                cc.tween(Step1_BoneThan)
                  .to(0.5, { opacity: 255 })
                  .call(() => {
                    console.log(Step1_Head.opacity);


                    cc.tween(kimtiem)
                      .to(0.5, { opacity: 0 })
                      .start();

                    cc.tween(this.NodeContainer.overlay)
                      .to(1, { opacity: 150 })
                      .call(() => {
                        this.NodeContainer.Step1.active = false;
                        this.NodeContainer.Step2.active = true;

                        this.touchArea.getComponent("TouchAreaController").registerEventStep2();
                      })
                      .to(1, { opacity: 0 })
                      .start();
                  })
                  .start();
                // --------------

                // hide main character
                cc.tween(this.NodeContainer.Step1_character)
                  .to(0.5, { opacity: 0 })
                  .start();
                // --------------

                Step1_Head.getComponent(cc.Animation).stop();
                cc.tween(Step1_Head)
                  .to(0.5, { angle: -45, opacity: 0 })
                  .start();
              })
              .start();
          })
          .start();

      })
      .start();
  }


  public setInHole(weapon: cc.Node): boolean {
    let weaponBdx = weapon.getBoundingBox();
    for (let index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
      const hole = this.NodeContainer.Step2_Holes[index];
      const holeBdx = hole.getBoundingBox();

      if (holeBdx.intersects(weaponBdx)) {
        let holeName = hole.name;
        weapon.active = false;

        weapon.off(cc.Node.EventType.TOUCH_START);
        weapon.off(cc.Node.EventType.TOUCH_MOVE);
        weapon.off(cc.Node.EventType.TOUCH_END);
        weapon.off(cc.Node.EventType.TOUCH_CANCEL);

        hole.getChildByName("frame").opacity = 255;
        hole.getChildByName("number").opacity = 0;

        this.activeWeapon(hole, weapon)
        this.NodeContainer.Step2_Holes.splice(index, 1);

        switch (holeName) {
          case "Hole1":
            Constants.isHole1Actived = true;
            return true;
          case "Hole2":
            Constants.isHole2Actived = true;
            return true;
          case "Hole3":
            Constants.isHole3Actived = true;
            return true;
          default:
            break;
        }
      }
    }

    return false;
  }


  public setInHoleWithTouch(weapon: cc.Node): void {
    let weaponBdx = weapon.getBoundingBox();
    for (let index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
      const hole = this.NodeContainer.Step2_Holes[index];
      const holeBdx = hole.getBoundingBox();

      if (holeBdx.intersects(weaponBdx)) {
        let holeName = hole.name;
        weapon.setPosition(hole.getPosition());

        hole.getChildByName("frame").opacity = 255;
        hole.getChildByName("number").opacity = 0;

        switch (holeName) {
          case "Hole1":
            Constants.isHole1Actived = true;
            break;
          case "Hole2":
            Constants.isHole2Actived = true;
            break;
          case "Hole3":
            Constants.isHole3Actived = true;
            break;
          default:
            break;
        }
      }

      else {
        if (!Constants.isHole1Actived) {
          Constants.isHole1Actived = true;
          this.NodeContainer.Step2_TempHoles[0].getChildByName("frame").opacity = 255;
          this.NodeContainer.Step2_TempHoles[0].getChildByName("number").opacity = 0;
          weapon.active = false;

          weapon.off(cc.Node.EventType.TOUCH_START);
          weapon.off(cc.Node.EventType.TOUCH_MOVE);
          weapon.off(cc.Node.EventType.TOUCH_END);
          weapon.off(cc.Node.EventType.TOUCH_CANCEL);

          this.activeWeapon(hole, weapon)
          this.NodeContainer.Step2_Holes.splice(index, 1);

          return;
        }
        if (!Constants.isHole2Actived) {
          Constants.isHole2Actived = true;
          this.NodeContainer.Step2_TempHoles[1].getChildByName("frame").opacity = 255;
          this.NodeContainer.Step2_TempHoles[1].getChildByName("number").opacity = 0;
          weapon.active = false;

          weapon.off(cc.Node.EventType.TOUCH_START);
          weapon.off(cc.Node.EventType.TOUCH_MOVE);
          weapon.off(cc.Node.EventType.TOUCH_END);
          weapon.off(cc.Node.EventType.TOUCH_CANCEL);

          this.activeWeapon(hole, weapon)
          this.NodeContainer.Step2_Holes.splice(index, 1);

          return;
        }
        if (!Constants.isHole3Actived) {
          Constants.isHole3Actived = true;
          this.NodeContainer.Step2_TempHoles[2].getChildByName("frame").opacity = 255;
          this.NodeContainer.Step2_TempHoles[2].getChildByName("number").opacity = 0;
          weapon.active = false;

          weapon.off(cc.Node.EventType.TOUCH_START);
          weapon.off(cc.Node.EventType.TOUCH_MOVE);
          weapon.off(cc.Node.EventType.TOUCH_END);
          weapon.off(cc.Node.EventType.TOUCH_CANCEL);

          this.activeWeapon(hole, weapon)
          this.NodeContainer.Step2_Holes.splice(index, 1);

          return;
        }
      }
    }
  }


  public showBtnActive(): void {
    this.AudioManager.playSound(Constants.SoundTrack.canhbaoSound);

    let Step2_BtnActive = this.NodeContainer.Step2.getChildByName("Btn_Active");
    for (let index = 0; index < this.NodeContainer.Step2_TempHoles.length; index++) {
      const hole = this.NodeContainer.Step2_TempHoles[index];
      cc.tween(hole)
        .to(2, { scale: 0 }, { easing: 'elasticInOut' })
        .call(() => {
          cc.tween(Step2_BtnActive)
            .to(0.5, { scale: 1, opacity: 255 }, { easing: 'elasticInOut' })
            .call(() => {
              this.anims[1] = cc.tween(Step2_BtnActive)
                .repeatForever(
                  cc.tween(this.node)
                    .to(0.5, { scale: 0.9 })
                    .to(0.5, { scale: 1 }, { easing: 'elasticOut' })
                ).start();
            })
            .start();
        })
        .start();
    }

    for (let index = 0; index < this.NodeContainer.Step2_Frames.length; index++) {
      const frame = this.NodeContainer.Step2_Frames[index];
      cc.tween(frame)
        .to(2, { scale: 0 }, { easing: 'elasticInOut' })
        .start();
    }
  }


  private activeWeapon(hole: cc.Node, weapon: cc.Node): void {
    let hole1: cc.Node = this.NodeContainer.Step2_Options.getChildByName("Hole1_Weapon");
    let hole2: cc.Node = this.NodeContainer.Step2_Options.getChildByName("Hole2_Weapon");
    let hole3: cc.Node = this.NodeContainer.Step2_Options.getChildByName("Hole3_Weapon");
    let weaponName = weapon.name;

    switch (hole.name) {
      case "Hole1":
        hole1.getChildByName(weaponName).active = true;
        break;
      case "Hole2":
        hole2.getChildByName(weaponName).active = true;
        break;
      case "Hole3":
        hole3.getChildByName(weaponName).active = true;
        break;
      default:
        break;
    }
  }


  public showCTA(): void {
    // mtg & applovin
    // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

    this.AudioManager.playSound(Constants.SoundTrack.gun);
    cc.tween(this.NodeContainer.Step2)
    .to(1, {opacity: 0}, {easing: 'elasticOut'})
    .call(() => {
      this.NodeContainer.CTA.active = true;
      cc.tween(this.NodeContainer.CTA)
      .to(1, {opacity: 255}, {easing: 'elasticOut'})
      .call(() => {
        cc.tween(this.NodeContainer.CTA_btnDownload)
        .repeatForever(
          cc.tween(this.node)
            .to(0.5, { scale: 0.5 })
            .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })
        ).start();
      })
      .start();
    })
    .start();
  }
}
