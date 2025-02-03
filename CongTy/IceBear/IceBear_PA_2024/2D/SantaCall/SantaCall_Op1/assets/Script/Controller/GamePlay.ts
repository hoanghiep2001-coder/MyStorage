import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

  @property(AudioManager)
  AudioManager: AudioManager = null;
  @property(GameController)
  GameController: GameController = null;

  // Container
  @property(cc.Label)
  UI_time: cc.Label = null;
  @property(cc.Label)
  UI_name: cc.Label = null;
  @property(cc.Node)
  UI_avatar: cc.Node = null;
  @property(cc.Node)
  UI_icons: cc.Node = null;

  
  protected onLoad(): void {
    // cc.director.getPhysicsManager().enabled = true;
    // let collisionManager = cc.director.getCollisionManager();
    // collisionManager.enabled = true;
    // collisionManager.enabledDrawBoundingBox = true;
    // collisionManager.enabledDebugDraw = true;

    this.initGame();
  };


  private initGame(): void {
    this.setupDate();
    this.setupName();
  };


  private setupDate(): void {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let result: string = `${hours}:${minutes}`;
    if(minutes < 10) {
      result = `${hours}:0${minutes}`;
    };
    this.UI_time.string = result;
  }


  private setupName(): void {
    this.UI_name.string = `SANTA CLAUS`;
    this.UI_name.spacingX = 10
  }


  protected start(): void {
    this.handleGamePlay();
    // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
  }


  private handleGamePlay(): void {
 
  }



  protected update(dt: number): void {

  }

}
