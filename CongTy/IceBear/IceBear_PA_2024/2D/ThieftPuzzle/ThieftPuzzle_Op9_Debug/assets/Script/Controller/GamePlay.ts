import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import GraphicsController from "./GraphicsController";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;
  @property(GraphicsController)
  GraphicsController: GraphicsController = null;


  // Node
  @property(cc.Node)
  Hand: cc.Node = null;
  @property(cc.Node)
  CTA: cc.Node = null;
  @property(cc.Node)
  CTA_Button: cc.Node = null;


  // UI
  @property(cc.Node)
  background: cc.Node = null;
  @property(cc.Node)
  thieftDefault: cc.Node = null;
  @property(cc.Node)
  guardDefault: cc.Node = null;
  @property(cc.Node)
  guardDefault_Flag: cc.Node = null;
  @property(cc.Node)
  thieftCTA: cc.Node = null;
  @property(cc.Node)
  guardCTA: cc.Node = null;

  // GP
  @property(cc.Node)
  stickman_arm: cc.Node = null;


  protected onLoad(): void {
    this.initPhysics();
  }


  protected start(): void {
    Constants.startPos = this.stickman_arm.getPosition();
    Constants.touchPointsPos.push(this.stickman_arm.getPosition());
  }
  

  private initPhysics(): void {
    cc.director.getPhysicsManager().enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
  }

}
