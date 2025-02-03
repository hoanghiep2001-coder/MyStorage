import { _decorator, Camera, Component, Label, Node, ParticleSystem, SkeletalAnimation, Skeleton, sp, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('NodesController')
export class NodesController extends Component {

  // Camera
  @property(Camera)
  Camera: Camera = null;


  // hints
  @property(Node)
  hint: Node = null;

  // touch area
  @property(Node)
  point: Node = null;
  @property(Node)
  canvas2D: Node = null;
  @property(Node)
  hideMask: Node = null;
  @property(Node)
  btnFight: Node = null;

  // UI
  @property(Node)
  Popup: Node = null;

  Popup_Btns: Node[] = [];
  @property(Node)
  Details: Node = null;
  
  Boss: Node = null;
  Boss_Die: Node = null;
  SkibidiNugget: Node = null;
  Points: Node[] = [];
  Nuggets: Node[] = [];
  NuggetLines: Node[] = [];

  // FX
  FX_Lightning: sp.Skeleton = null;
  @property([ParticleSystem])
  FX_Fires: ParticleSystem[] = [];

  // array


  // UI 
  CTA: Node = null;
  CTA_btn: Node = null;
  CTA_overlay: Node = null;

  isSaveOnceFlag: boolean = false;


  protected start(): void {
    this.FX_Lightning = this.canvas2D.getChildByName("sp_lightning").getComponent(sp.Skeleton);

    this.Boss = this.Details.getChildByName("Enemy");
    this.Boss_Die = this.Details.getChildByName("Dying");
    this.Points = this.canvas2D.getChildByName("Points").children;

    // cắt thằng đầu tiên vì thằng đầu tiên là point để bắt va chạm
    this.Points.splice(0, 1);

    this.Nuggets = this.Details.getChildByName("Ally").children;
    this.SkibidiNugget = this.Details.getChildByName("Ally").getChildByName("SkibidiNugget");

    // cắt thằng cuối vì thằng cuối để merge
    this.Nuggets.splice(this.Nuggets.length - 1, 1);

    this.Nuggets.forEach(nugget => this.NuggetLines.push(nugget.getChildByName("Line")));

    this.Popup_Btns = this.Popup.getChildByName("btns").children;

    this.CTA = this.canvas2D.getChildByName("CTA");
    this.CTA_btn = this.CTA.getChildByName("Btn");
    this.CTA_overlay = this.CTA.getChildByName("Overlay");
  }

}

