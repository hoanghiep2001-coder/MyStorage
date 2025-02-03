
import { Constants } from "../Data/constants";
import GraphicsController from "./GraphicsController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HandController extends cc.Component {

  // Component
  @property(GraphicsController)
  GraphicsController: GraphicsController = null;
  @property(cc.Node)
  GamePlay: cc.Node = null;

  @property(cc.Node)
  fakeHand: cc.Node = null;
  @property(cc.Node)
  Line: cc.Node = null;
  @property([cc.Node])
  obstaclePoints: cc.Node[] = [];

  rigidBody: cc.RigidBody = null;
  collide: cc.Collider = null;
  targetPosition: cc.Vec2 = null;
  speed: number = 150;
  currentPosition: cc.Vec2 = null;


  protected onLoad(): void {

  }


  protected start(): void {
    this.handleContact();
  }


  private handleContact(): void {
    this.currentPosition = this.node.getPosition();
    this.rigidBody = this.getComponent(cc.RigidBody);
    this.rigidBody.onBeginContact = (c: cc.PhysicsContact, s: cc.PhysicsCollider, o: cc.PhysicsCollider) => {
      if (o.tag === 2) {
        // !Constants.isLoseGame && this.GamePlay.getComponent(GamePlay).loseGame();
      }
    }
  }


  private handleCheckIntersects(): void {
    let handBdx = this.fakeHand.getBoundingBox();
    for(let i = 0; i < this.obstaclePoints.length; i++) {
      let point = this.obstaclePoints[i];
      let iBdx = point.getBoundingBox();
      
      if(handBdx.intersects(iBdx) ) {
        let pointPos = point.getPosition(); 
        if(Constants.startPos.x === pointPos.x) return;
        this.GraphicsController.createGraphics();
        Constants.startPos = pointPos;
        Constants.touchPointsPos.push(pointPos);
        console.log(this.GraphicsController.graphicsArr);
        
      }
    }
  }


  private handleRotateHand(startPos: cc.Vec2): void {
    let thisPos = new cc.Vec2(startPos.x, startPos.y);
    let directionVector = thisPos.sub(this.node.getPosition());
    const rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    const rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    this.node.angle = rotationDegrees - 20;
  }


  public move(): void {
    if(!Constants.isCanMove) {
      this.stop();
      return;
    }
    
    if (!Constants.ironSource.isEndGame) {
      this.node.setPosition(Constants.currentLocalPosition)
      this.fakeHand.setPosition(Constants.currentLocalPosition)
      this.currentPosition = this.node.getPosition();
    }
  }


  public stop(): void {
    this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
    this.node.setPosition(this.currentPosition);
  }


  protected update(dt: number): void {
    (!Constants.isTouch || Constants.isLoseGame) && this.stop();
    Constants.isTouch && this.handleRotateHand(Constants.startPos);
    Constants.isTouch && this.handleCheckIntersects();
  }

}
