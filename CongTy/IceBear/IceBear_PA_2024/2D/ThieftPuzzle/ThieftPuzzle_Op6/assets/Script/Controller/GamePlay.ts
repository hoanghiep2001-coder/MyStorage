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

  @property(cc.Node)
  tree: cc.Node = null;
  @property(cc.Node)
  glass: cc.Node = null;
  @property(cc.Node)
  cage: cc.Node = null;


  protected onLoad(): void {
    this.initPhysics();
  }


  protected start(): void {
    this.thieftCTA.active = false;
    this.guardCTA.active = false;
    this.guardDefault_Flag.active = false;
  }


  public loseGame(): void {
    Constants.isLoseGame = true;
    this.AudioManager.stopSound(Constants.SoundTrack.drawSound);
    this.AudioManager.playSound(Constants.SoundTrack.naniSound);
    
    // fill color for graphics to red
    this.GraphicsController.getComponent(cc.Graphics).fillColor = cc.Color.RED;
    this.GraphicsController.getComponent(cc.Graphics).strokeColor = cc.Color.RED;
    this.GraphicsController.graphicsNodes.forEach(graphic => {
      graphic.clear()
    });

    if(Constants.isTouchPoint1) {
      this.GraphicsController.graphicsNodes[1].fillColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[1].strokeColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[1].moveTo(Constants.pointA_Pos.x, Constants.pointA_Pos.y);
      this.GraphicsController.graphicsNodes[1].lineTo(Constants.point1Pos.x, Constants.point1Pos.y);
      this.GraphicsController.graphicsNodes[1].stroke();
  
      this.GraphicsController.graphicsNodes[2].fillColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[2].strokeColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[2].moveTo(Constants.point1Pos.x, Constants.point1Pos.y);
      this.GraphicsController.graphicsNodes[2].lineTo(Constants.point5Pos.x, Constants.point5Pos.y);
      this.GraphicsController.graphicsNodes[2].stroke();

      this.GraphicsController.graphicsNodes[6].fillColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[6].strokeColor = cc.Color.RED;
      this.GraphicsController.graphicsNodes[6].moveTo(Constants.point5Pos.x, Constants.point5Pos.y);
      this.GraphicsController.graphicsNodes[6].lineTo(Constants.point6Pos.x, Constants.point6Pos.y);
      this.GraphicsController.graphicsNodes[6].stroke();
    }

    // show flag
    this.guardDefault_Flag.active = true;

    this.scheduleOnce(() => {
      Constants.ironSource.isEndGame = true;
      this.AudioManager.playSound(Constants.SoundTrack.stunSound);

      // active CTA
      this.guardDefault.active = false;
      this.thieftDefault.active = false;
      this.guardCTA.active = true;
      this.thieftCTA.active = true;

      // destroy hand
      this.Hand.active = false;
      this.Hand.destroy();


      this.GraphicsController.graphicsNodes.forEach(graphic => graphic.clear());
      this.GraphicsController.getComponent(cc.Graphics).clear();
      
    }, 1.5);

    this.scheduleOnce(()  => {
      this.CTA.getComponent(cc.Animation).play("CTA_Anim");

      this.CTA_Button.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }, 2.5)
  }
  

  private initPhysics(): void {
    cc.director.getPhysicsManager().enabled = true;
    let collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    collisionManager.enabledDebugDraw = true;
    collisionManager.enabledDrawBoundingBox = true;
  }

  protected update(dt: number): void {
      // ironsource
     
  }

}
