import { Ultils } from "../Data/Ultils";
import { Constants } from "../Data/constants";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HandController extends cc.Component {

  // Component
  @property(cc.Node)
  GamePlay: cc.Node = null;

  @property(cc.Node)
  fakeHand: cc.Node = null;
  @property(cc.Node)
  Line: cc.Node = null;
  @property(cc.Node)
  Apple1: cc.Node = null;
  @property(cc.Node)
  Apple2: cc.Node = null;
  @property(cc.Node)
  PointA: cc.Node = null;
  @property([cc.Node])
  Apple_1_Points: cc.Node[] = [];

  rigidBody: cc.RigidBody = null;
  collide: cc.Collider = null;
  targetPosition: cc.Vec2 = null;
  speed: number = 150;
  currentPosition: cc.Vec2 = null;

  protected onLoad(): void {
    this.reset();
  }


  protected start(): void {
    this.currentPosition = this.node.getPosition();
    this.rigidBody = this.getComponent(cc.RigidBody);
    this.handleContact();
  }


  public reset(): void {
    Constants.pointA_Pos = this.PointA.getPosition();
    Constants.point1Pos = this.Apple_1_Points[0].getPosition();
    Constants.point2Pos = this.Apple_1_Points[1].getPosition();
    Constants.point3Pos = this.Apple_1_Points[2].getPosition();
    Constants.point4Pos = this.Apple_1_Points[3].getPosition();
    Constants.point5Pos = this.Apple_1_Points[4].getPosition();
    Constants.point6Pos = this.Apple_1_Points[5].getPosition();
    Constants.point7Pos = this.Apple_1_Points[5].getPosition();

    Constants.point1Bdb = this.Apple_1_Points[0].getBoundingBox();
    Constants.point2Bdb = this.Apple_1_Points[1].getBoundingBox();
    Constants.point3Bdb = this.Apple_1_Points[2].getBoundingBox();
    Constants.point4Bdb = this.Apple_1_Points[3].getBoundingBox();
  }


  private handleContact(): void {
    this.rigidBody.onBeginContact = (c: cc.PhysicsContact, s: cc.PhysicsCollider, o: cc.PhysicsCollider) => {
      if (o.tag === 1) {
        if (o.name.startsWith("apple_1")) {
          this.checkContactApple1();
        }
        if (o.name.startsWith("apple_2")) {
          this.checkContactApple2();
        }
      }

      if (o.tag === 2) {
        !Constants.isLoseGame && this.GamePlay.getComponent(GamePlay).loseGame();
      }
    }
  }


  private checkContactApple1(): void {
       // - if touch point 1 2 3 4, run condition.
    //    if (Constants.isTouchPoint1 && Constants.isTouchPoint2 && Constants.isTouchPoint3 && Constants.isTouchPoint4) {
    //     if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[0], this.Apple_1_Points[3], 5)) {
    //       return;
    //     }
    //     return;
    //   }


    // // - if touch point 1 2 3, run condition.
    // if (Constants.isTouchPoint1 && Constants.isTouchPoint2 && Constants.isTouchPoint3) {
    //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[3], this.Apple_1_Points[2], 4)) {
    //     return;
    //   }
    //   return;
    // }


    // // - if touch point 1 2, run condition.
    // if (Constants.isTouchPoint1 && Constants.isTouchPoint2) {
    //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[2], this.Apple_1_Points[1], 3)) {
    //     return;
    //   }
    //   return;
    // }


    // // - if touch point 1, run condition.
    // if (Constants.isTouchPoint1) {
    //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[1], this.Apple_1_Points[0], 2)) {
    //     return;
    //   }
    //   return;
    // }


    // if (Ultils.Hand.checkCondition1(this.node, this.Apple_1_Points[0])) {
    //   return;
    // }
  }


  private checkContactApple2(): void {
    // - if touch point 1 2 3 4, run condition.
    //  if (Constants.isTouchPoint1 ) {
    //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[4], this.Apple_1_Points[0], 6)) {
    //     return;
    //   }
    //   return;
    // }
  }


  private handleRotateHand(): number {
    if (Constants.isTouchPoint1 && Constants.isTouchPoint2) {
      return Ultils.Hand.rotateWithPoint(this.node.getPosition());
    }

    if (Constants.isTouchPoint1) {
      return Ultils.Hand.rotateWithPoint(this.node.getPosition());
    }

    return Ultils.Hand.rotateDefault(this.node.getPosition());
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
      // this.targetPosition = Constants.currentLocalPosition;
      // const direction = this.targetPosition.sub(this.node.getPosition()).normalize();
      // this.rigidBody.linearVelocity = direction.mul(this.speed);
    }
  }


  public stop(): void {
    this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
    this.node.setPosition(this.currentPosition);
  }


  protected update(dt: number): void {
    this.node.angle = this.handleRotateHand();
    (!Constants.isTouch || Constants.isLoseGame) && this.stop();

  }

}
