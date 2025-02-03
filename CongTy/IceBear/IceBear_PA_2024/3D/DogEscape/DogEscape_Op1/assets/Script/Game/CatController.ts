import {
  _decorator,
  Component,
  Node,
  RigidBody,
  v3,
  CCString,
  SkeletalAnimation,
  Quat,
  Vec3,
  Vec2,
  BoxCollider,
  ICollisionEvent,
} from "cc";
import { JoyStick } from "./JoyStick";
import { Game } from "./Game";
import { Constants } from "../Data/Constant";
import AudioManager from "../Plugin/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("CatController")
export class CatController extends Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(Game)
  GamePlay: Game;

  @property(Node)
  Door1: Node;
  @property(JoyStick)
  joyStick: JoyStick;
  @property(RigidBody)
  _body: RigidBody = null;
  @property(CCString)
  catDirectionMove: string = "stop";
  @property(SkeletalAnimation)
  _aniSkeleton: SkeletalAnimation = null;

  // state
  speed: number = 4;
  radian: number = null;

  isMoving: boolean = false;
  flag: boolean = false;
  isRun: boolean = true;
  isElectricFlag: boolean = false;
  isExitDoorFlag: boolean = false;

  rigidbody: RigidBody = null;
  collider: BoxCollider = null;

  angle: number = null;


  start() {
    this.isMoving = false;
    this._body = this.node.getComponent(RigidBody);
    this.node.setRotationFromEuler(v3(0, 90, 0));
    this._aniSkeleton = this.node.getComponent(SkeletalAnimation);
    this._aniSkeleton.play("Cats_Runcycle");
    

    this.handleCollide();
  }


  private handleCollide(): void {
    this.rigidbody = this.getComponent(RigidBody);
    this.collider = this.getComponent(BoxCollider);

    this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {
      if(e.otherCollider.node.name === "Electro_vfx_mesh" && Constants.laser && !this.isElectricFlag) {
        this.die();
      }

      if (e.otherCollider.node.name === "Food") {
        Constants.isEatFood = true;
        e.otherCollider.node.active = false;
        e.otherCollider.destroy();
        this.AudioManager.playSound(Constants.SoundTrack.eatSound);
      }

      if(e.otherCollider.node.name === "Door1_1" || e.otherCollider.node.name === "Door1_2") {
        Constants.isCollideDoor = true;
      }

      if(e.otherCollider.node.name === "Vision" && Constants.isCollideDoor) {
        this.handleCatIsCatched();
      }

      if(e.otherCollider.node.name === "LaserBtn") {
        Constants.laser = !Constants.laser;
      }

      if(e.otherCollider.node.name === "WallLaserBtn") {
        Constants.wallLaser = !Constants.wallLaser;
      }

      if (e.otherCollider.node.name === "ExitDoor") {
        this.win();
      }
  });
  }


  private die(): void {
    if(this.isElectricFlag) {
      return;
    }

    this.collider.destroy();
    this.isElectricFlag = true;
    Constants.isCatLive = false;
    this.getComponent(SkeletalAnimation).play("Cats_Electric");
    this.AudioManager.playSound(Constants.SoundTrack.electric2Sound);
    this.AudioManager.playSound(Constants.SoundTrack.catAngrySound);
    this.GamePlay.EndGame(false);
  }


  private win(): void {
    if(this.isExitDoorFlag) {
      return;
    }
    
    this.isExitDoorFlag = true;
    this.GamePlay.EndGame(true);
  }


  private handleCatIsCatched(): void {
    Constants.isCatched = true;

    this.scheduleOnce(() => {
       this.getComponent(SkeletalAnimation).play("Cat_Dead");
    }, 0.5)
  }


  public handleAngleCat(): void {
    let directionVector: Vec2;
    let joyStickPos = this.joyStick.node.getPosition();

    let newPos: Vec2 = new Vec2(joyStickPos.x, joyStickPos.y);
    directionVector = this.joyStick.stick.getPosition().subtract(newPos);
    
    const rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    const rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    this.radian = rotationRadians;
    this.angle = rotationDegrees;
  }


  update(deltaTime: number) {
    if(this.flag && this.isMoving) {
      this.flag = false;
      this._aniSkeleton.resume();
    }
    
    if (!this.flag && !this.isMoving) {
      this.flag = true;
      this._aniSkeleton.pause();
    }

    if (this.isMoving && Constants.isCatLive && !Constants.isCatched && !Constants.ironSource.isEndGame) {
      const moveDirection = new Vec3(Math.sin(this.radian), 0, Math.cos(this.radian));
      moveDirection.normalize();
      moveDirection.multiplyScalar(this.speed * deltaTime); 

      let pos = new Vec3(moveDirection.x, 0, moveDirection.z)

      this.node.setRotationFromEuler(v3(0, this.angle, 0));
      if(this.isRun) {
        if(this.node.getPosition().y > 0.3) {
          this.node.setPosition(this.node.position.x, 0, this.node.position.z)
          return;
        }
        this.node.setPosition(this.node.position.add(pos));
      }
    }

  }
}
