import { _decorator, Component, Node, tween, Quat, ICollisionEvent, Vec3, Tween, TweenAction, TweenSystem, SkeletalAnimation, RigidBody, Collider } from "cc";
import { Constants } from "../Data/Constant";
import { Game } from "./Game";
import AudioManager from "../Plugin/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("BossAction")
export class BossAction extends Component {
  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(Game)
  Game: Game = null;
  @property(Node)
  fakeCat: Node = null;
  @property(Node)
  vision: Node = null;

  tweenState = null;
  isElectricFlag: boolean = false;
  isStopFlag: boolean = false;
  rigidbody: RigidBody = null;
  collide: Collider = null;

  protected start(): void {
    
    this.node.name === "Boss" && this.runTweenOfBossFirstScene();
    this.node.name === "Boss_2" && this.runTweenOfBossSecondScene();
   
    this.collide = this.getComponent(Collider);
    this.handleCollide();
  }


  private runTweenOfBossFirstScene(): void {
    this.tweenState = tween(this.node)
    .by(3, { position: new Vec3(6, 0, 0) })
    .to(0, { rotation: Quat.fromEuler(new Quat(), 0, -90, 0) })
    .by(3, { position: new Vec3(-6, 0, 0) })
    .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 90, 0) })
    .union()
    .repeatForever()
    .start();
  }

  private runTweenOfBossSecondScene(): void {
    this.tweenState = tween(this.node)
    .by(3, { position: new Vec3(0, 0, 6) })
    .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 180, 0) })
    .by(3, { position: new Vec3(0, 0, -6) })
    .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 0, 0) })
    .union()
    .repeatForever()
    .start();
  }


  private handleCollide(): void {
    if(this.collide) {
      this.collide.on("onCollisionEnter", (e: ICollisionEvent) => {
        if(e.otherCollider.node.name === "Electro_vfx_mesh" && Constants.laser && !this.isElectricFlag) {
          this.die();
        }
      })
    }
  }


  private die(): void {
    if(this.isElectricFlag) {
      return;
    }

    this.isElectricFlag = true;
    this.vision.active = false;
    this.tweenState.stop();
    this.getComponent(SkeletalAnimation).play("CE_police_electrizied");
    this.AudioManager.playSound(Constants.SoundTrack.electric2Sound);
  }


  private isCatCatched(): void {
    Constants.ironSource.isEndGame = true;
    this.isStopFlag = true;
    this.tweenState.stop();
    this.getComponent(SkeletalAnimation).play("CE_police_Catch");

    this.scheduleOnce(() => {
      this.fakeCat.active = true;
      this.AudioManager.playSound(Constants.SoundTrack.catAngrySound);
    }, 0.5);

    this.scheduleOnce(() => {
      this.Game.EndGame(false);
    }, 2.5)
  }


  protected update(dt: number): void {
    !this.isStopFlag 
    && Constants.isCatched 
    && Constants.isCatLive 
    && Constants.bossCatchedName === this.node.name 
    && this.isCatCatched();
  }
}
