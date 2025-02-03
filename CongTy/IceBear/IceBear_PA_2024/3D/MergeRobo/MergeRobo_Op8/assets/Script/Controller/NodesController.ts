import { _decorator, Camera, Component, log, Node, ParticleSystem, SkeletalAnimation, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('NodesController')
export class NodesController extends Component {

  // Camera
  @property(Camera)
  Camera: Camera = null;

  // touch area
  @property(Node)
  hideMask: Node = null;
  @property(Node)
  canvas: Node = null;
  @property(Node)
  details: Node = null;


  robo_Step1: Node[] = [];

  points: Node[] = [];

  movingPoint: Node = null;

  optimus_Step1: Node = null;

  Hand: Node = null;

  Spine_Flash: Node = null;

  Text_Tap: Node = null;

  FX_FireBalls: Node[] = [];

  CTA: Node = null;

  CTA_overlay: Node = null;

  CTA_btn: Node = null;


  protected start(): void {
      this.canvas.getChildByName("Points").children.forEach(point => {
        if(point.name.includes("_")) this.points.push(point)
        else this.movingPoint = point;
      });

      this.robo_Step1 = this.details.getChildByName("Robo_Step1").children;

      this.optimus_Step1 = this.details.getChildByName("Optimus_Step1");

      this.Hand = this.canvas.getChildByName("Hint");

      this.Spine_Flash = this.canvas.getChildByName("spine_Flash");

      this.FX_FireBalls = this.details.getChildByName("FX").children;

      this.Text_Tap = this.canvas.getChildByName("text_Tap");

      this.CTA = this.canvas.getChildByName("CTA");

      this.CTA_btn = this.CTA.getChildByName("TryAgain");

      this.CTA_overlay = this.CTA.getChildByName("Overlay");

  }
}

