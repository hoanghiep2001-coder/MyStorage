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
  star: cc.Node = null;
  @property(cc.Node)
  touchArea: cc.Node = null;

  // Tools
  @property(cc.Node)
  hand: cc.Node = null;
  @property(cc.Node)
  scratchAble: cc.Node = null;


  // state
  trackEnTry: sp.spine.TrackEntry = null;

  isDoneScratchAble: boolean = false;

  activeCTA: boolean = false;
  CTA_steps: number = 0;
  CTA_thumbnail: cc.Node = null;
  CTA_isBtn: boolean = false;
  CTA_anyThumbnail: boolean = true;


  protected onLoad(): void {
  }


  protected start(): void {
    this.NodeContainer.CTA.active = false;
    
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);

    this.scaleToDollNose();
  }


  private scaleToDollNose(): void {
    const DollCurrentPos = this.NodeContainer.Doll.getPosition();

    this.scheduleOnce(() => {
      cc.tween(this.NodeContainer.Doll)
      .to(1, {y: DollCurrentPos.y - 100, scale: 1.4})
      .call(() => {
        Constants.isCanTouch = true;

        this.showTools(this.NodeContainer.Flow1_Tool, false)
      })
      .start();
    }, 1.5)
  }


  private scaleOutToDollFace(): void {
    const DollCurrentPos = this.NodeContainer.Doll.getPosition();

    cc.tween(this.NodeContainer.Doll)
    .to(1, {y: DollCurrentPos.y + 40, scale: 1.2})
    .call(() => {
      Constants.isCanTouch = true;

      this.showTools(this.NodeContainer.Flow2_spineTool, true);

      this.showTowel();
    })
    .start();
  }


    private showHint(): void {
      this.NodeContainer.Hand.active = true;
      this.NodeContainer.Hand.getComponent(cc.Animation).play();
    }  


  private debug(): void {
    // flow 2
    this.showTools(this.NodeContainer.Flow2_spineTool, true);

    this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
    Constants.isDoneStep1 = true;
    this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false)

    // hide tear
    // this.NodeContainer.Tears.forEach(node => this.hideAnim(node))

    // show tools
    // this.showTools(this.NodeContainer.Tool, true);

    // CTA anim
    // this.activeCTAAnim();
  }


  private hideTears(): void {
    // this.AudioManager.playSound(Constants.SoundTrack.crySound);
    // this.scheduleOnce(() => {this.NodeContainer.Tears.forEach(node => this.hideAnim(node));}, 1.5);
    // this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.screamHoooSound);}, 2.5);
  }


  private activeCTAAnim(): void {
    this.NodeContainer.CTA.active = true;
    this.CTA_thumbnail = this.NodeContainer.CTA_logo;
    
    cc.tween(this.NodeContainer.CTA_overlay)
      .to(0.5, { opacity: 150 })
      .call(() => {        
        this.showThumbnailTween(this.CTA_thumbnail, this.CTA_anyThumbnail, this.CTA_isBtn);
      })
      .start()
  }


  private showThumbnailTween(thumbnail: cc.Node, anyThumbnail: boolean, isBtn: boolean): void {
    switch (this.CTA_steps) {
      case 0:
        this.CTA_thumbnail = this.NodeContainer.CTA_logo;
        break;
      case 1:
        this.CTA_thumbnail = this.NodeContainer.CTA_icon;
        break;
      case 2:
        this.CTA_thumbnail = this.NodeContainer.CTA_Btn;
        this.CTA_anyThumbnail = false;
        this.CTA_isBtn = true;
        break;
      default:
        break;
    }

    this.CTA_steps += 1;

    cc.tween(thumbnail)
      .to(0.5, { opacity: 255 })
      .call(() => {
        anyThumbnail && this.showThumbnailTween(this.CTA_thumbnail, this.CTA_anyThumbnail, this.CTA_isBtn)
        isBtn && this.activeBtnTween(this.CTA_thumbnail)
      }
      ).start();
  }


  private activeBtnTween(btn: cc.Node): void {
    cc.tween(btn)
      .repeatForever(
        cc.tween(btn)
          .to(0.5, { scale: 0.45 })
          .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })
      ).start();
  }


  private hideAnim(node: cc.Node) {
    cc.tween(node)
      .to(0.5, { opacity: 0 })
      .start();
  }


  private showTools(tool: cc.Node, isActive: boolean): void {

    tool.opacity = 0;

    if (!isActive) tool.active = true;

    Constants.isCanTouch = true;

    this.AudioManager.playSound(Constants.SoundTrack.moveItemSound);

    let position = tool.getPosition();

    tool.setPosition(position.x - 30, position.y);

    cc.tween(tool)
      .to(0.5, { x: position.x, opacity: 255 })
      .call(() => {
        if(Constants.isDoneStep1) {

          this.showHint();

          return;
        } 

        else {
          this.showHint();

          this.NodeContainer.Hint_Circle.active = true;
          
          this.NodeContainer.Hint_Circle.getComponent(cc.Animation).play();
        }

        }
      )
      .start();

    // this.showHint();
  }


  public checkCollideAcne(): void {
    let toolHead = this.NodeContainer.Flow1_ToolHead.getBoundingBox();

    for (let index = 0; index < this.NodeContainer.Flow1_Areas.length; index++) {
      const area = this.NodeContainer.Flow1_Areas[index];
      const areaBdx = area.getBoundingBox();

      if ( areaBdx.intersects(toolHead) ) {

        this.playNhoMunSound();

        Constants.isCanTouch = false;

        Constants.AcneRemoved += 1; 

        if(Constants.AcneRemoved >= 4) Constants.isDoneStep1 = true;

        const removeSpine = area.getChildByName("Remove_spine").getComponent(sp.Skeleton);

        const spineCream = area.getChildByName("cream").getComponent(sp.Skeleton);

        removeSpine.node.active = true;

        this.NodeContainer.Flow1_Tool.active = false;

        this.NodeContainer.Flow1_Tool.opacity = 0;

        this.NodeContainer.Flow1_Tool.setPosition(this.NodeContainer.initPosTool_Flow1);

        this.trackEnTry = removeSpine.setAnimation(0, "action01_squeze02", false);

        this.scheduleOnce(() => {
          let number = area.name.match(/\d+/)[0]; 

          this.NodeContainer.Doll.getChildByName("Nose").getChildByName(`4acne_${number}`).active = false

          spineCream.setAnimation(0, "action02_cream_scar", false);
        }, 2);

        this.setCompleteSpine(removeSpine, index);
      }
    }
  }
  

  private setCompleteSpine(removeSpine: sp.Skeleton, index: number): void {
    removeSpine.setCompleteListener((track: sp.spine.TrackEntry) => {
      if(track.animation.name === "action01_squeze02") {

        this.NodeContainer.Flow1_Areas.splice(index, 1);

        this.doneFlowAndShowNextOption();
      }
    })
  } 


  private playNhoMunSound(): void {
    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
    }, 1)

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    }, 1.5)

    this.scheduleOnce(() => {
      this.AudioManager.playSound(Constants.SoundTrack.spiderSound);
    }, 2)
  }


  private getCurentTimeOfTrack(): void {

    // if(this.trackEnTry) {
    //   if(this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
    //     this.isActiveRemoveSound1 = true;
    //     this.NodeContainer.Fly.active = false;
    //     this.NodeContainer.Delight_EyeFly.active = false;
    //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
    //   }

    //   if(this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
    //     this.isActiveRemoveSound2 = true;
    //     this.NodeContainer.Fly.active = false;
    //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    //   }

    //   if(this.trackEnTry.trackTime >= 2 && !this.isActiveRemoveSound3) {
    //     this.isActiveRemoveSound3 = true;
    //     this.NodeContainer.Fly.active = false;
    //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
    //   }

    //   if(this.trackEnTry.trackTime >= 2.5) {
    //     this.isActiveRemoveSound4 = true;
    //     this.AudioManager.playSound(Constants.SoundTrack.gapRuoiSound);
    //   }
    // }
  }


  private doneFlowAndShowNextOption(): void {
    this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);
    this.star.getComponent(cc.Animation).play("StarAnim");
    
    if(Constants.isDoneStep1) {
      this.scheduleOnce(() => {
        this.scaleOutToDollFace();
      }, 2)
      return
    };

    this.scheduleOnce(() => {
      this.showTools(this.NodeContainer.Flow1_Tool, false);
    }, 1.5);
  }


  private showTowel(): void {
    this.touchArea.getComponent("TouchAreaController").registerNewEvent();

    this.showTools(this.NodeContainer.Flow2_spineTool, true);
    Constants.isCanTouch = true;
    this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
    
    // Constants.isDoneStep1 = true;
    this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false)
  }


  private checkDoneMask(): void {
    if(this.scratchAble.getComponent("Scratchable").isWin) {

      this.AudioManager.stopSound(Constants.SoundTrack.FaceWashSound);

      this.scratchAble.active = false;

      this.NodeContainer.Flow2_Tool.active = false;

      this.NodeContainer.Flow2_spineTool.active = false;

      this.isDoneScratchAble = true;

      this.star.getComponent(cc.Animation).play("StarAnim");

      this.AudioManager.playSound(Constants.SoundTrack.DoneStepSound);

      this.NodeContainer.Doll_Mask.active = true;

      this.showDollBeautyFace();
    }
  }


  private showDollBeautyFace(): void {
    this.scheduleOnce(() => {
      this.NodeContainer.Doll_Bandage.active = true;

      this.NodeContainer.Doll_Face.setAnimation(0, "idle03", true)
    }, 1)

    this.scheduleOnce(() => {
      cc.tween(this.NodeContainer.Doll_Mask)
      .to(1, {opacity: 0})
      .call(() => this.AudioManager.playSound(Constants.SoundTrack.hmmSound))
      .start();
    }, 3);

    this.scheduleOnce(() => {
      this.NodeContainer.CTA.active = true;
    }, 5.5)
    
  }


  protected update(dt: number): void {
    !this.isDoneScratchAble && this.checkDoneMask();
    // !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
  }

}
