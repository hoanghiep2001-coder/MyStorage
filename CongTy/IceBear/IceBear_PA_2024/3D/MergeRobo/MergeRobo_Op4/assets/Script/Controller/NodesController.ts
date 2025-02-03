import { _decorator, Camera, Component, Node, ParticleSystem, SkeletalAnimation, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
import { CharacterControl } from './CharacterControl';
const { ccclass, property } = _decorator;


@ccclass('NodesController')
export class NodesController extends Component {

  // Camera
  @property(Camera)
  Camera: Camera = null;


  // hints
  @property(Node)
  hint_1: Node = null;
  @property(Node)
  hint_2: Node = null;
  @property(Node)
  hint_3: Node = null;

  // touch area
  @property(Node)
  point: Node = null;
  @property(Node)
  hideMask: Node = null;


  // FX
  @property(ParticleSystem)
  FX_Merge: ParticleSystem = null;
  @property(ParticleSystem)
  FX_Merge_2: ParticleSystem = null;
  @property(ParticleSystem)
  FX_FireBall1: ParticleSystem = null;
  @property(ParticleSystem)
  FX_FireBall2: ParticleSystem = null;
  @property(ParticleSystem)
  FX_FireBall3: ParticleSystem = null;

  // array
  @property([Node])
  dinoLines: Node[] = [];
  @property([Node])
  points_1: Node[] = [];
  @property([Node])
  points_2: Node[] = [];
  @property([Node])
  unitsStep1: Node[] = [];
  @property([Node])
  unitstep2: Node[] = [];
  @property([Node])
  dinoLevels: Node[] = [];
  @property([Node])
  dinosStep1: Node[] = [];
  @property([Node])
  dinosStep2: Node[] = [];


  // Characters
  @property(Node)
  Boss: Node = null;
  @property(Node)
  MainCharacter_1: Node = null;
  @property(Node)
  targetNode: Node = null;
  @property(Node)
  MainCharacter_2: Node = null;


  // Text
  @property(Node)
  Text_Tap: Node = null;
  @property(Node)
  Fail: Node = null;

  isSaveOnceFlag: boolean = false;


  protected start(): void {
    this.init();
  }


  public init(): void {
    this.Text_Tap.active = false;
    this.Fail.active = false;
    this.hint_2.active = false;
    this.hint_3.active = false;
    this.setupForUtils();
    this.saveUnitsInitPos();
  }


  private setupForUtils(): void {

    // step 1
    Constants.isMergeStep1States = Constants.isMergeStep1States.map(() => false);
    let pointsCopy = [...this.points_1];
    Constants.points_1 = pointsCopy;
    Constants.point = this.point;

    this.dinoLines.forEach(line => line.active = false);
    let copyDinoLines = this.dinoLines.slice(0, 8)
    Constants.dino_lines = copyDinoLines;
    // --------------------------------


    // step 2
    Constants.isMergeStep2States = Constants.isMergeStep2States.map(() => false);
    let pointsCopy2 = [...this.points_2];
    Constants.points_2 = pointsCopy2;


    let copyDinoLines_2 = this.dinoLines.slice(8, 14);
    Constants.dino_lines_2 = copyDinoLines_2;
    Constants.dino_lines_2.forEach(line => line.active = false);

  }


  private saveUnitsInitPos(): void {
    if (this.isSaveOnceFlag) {
      return;
    }

    // Other Units
    this.isSaveOnceFlag = true;
    let dinosStep1Pos: Vec3[] = [];
    let dinosStep2Pos: Vec3[] = [];
    let unitsStep1Pos: Vec3[] = [];
    let unitsStep2Pos: Vec3[] = [];
    for (let i = 0; i < this.unitsStep1.length; i++) {
      let unitPos = this.unitsStep1[i].getPosition();
      let dino = this.unitsStep1[i].getChildByName(`Robo_${i + 1}`);
      let pos = dino.getPosition();
      dinosStep1Pos.push(pos);
      unitsStep1Pos.push(unitPos);
    };
    for (let i = 0; i < this.unitstep2.length; i++) {
      let unitPos = this.unitstep2[i].getPosition();
      let dino = this.unitstep2[i].getChildByName(`Robo_${i + 9}`);
      let pos = dino.getPosition();
      dinosStep2Pos.push(pos);
      unitsStep2Pos.push(unitPos);
    };
    Constants.dinosStep1InitPos = dinosStep1Pos;
    Constants.dinosStep2InitPos = dinosStep2Pos;
    Constants.unitsStep1InitPos = unitsStep1Pos;
    Constants.unitsStep2InitPos = unitsStep2Pos;
    // --------------------------------------------


  }


  public replay(): void {
    this.unitsStep1.forEach((unit, index) => {
      unit.setPosition(Constants.unitsStep1InitPos[index]);
      unit.setScale(new Vec3(8, 8, 8));
      unit.active = true;
    });
    this.dinosStep1.forEach((dino, index) => {
      dino.getComponent(SkeletalAnimation).play("idle");
      dino.setPosition(Constants.dinosStep1InitPos[index]);
      dino.setScale(new Vec3(6, 6, 6));
      dino.setRotationFromEuler(new Vec3(0, 0, 0));
      dino.active = true;
    });


    this.unitstep2.forEach((unit, index) => {
      unit.setPosition(Constants.unitsStep2InitPos[index]);
      unit.setScale(new Vec3(8, 8, 8));
      unit.active = true;
    });
    this.dinosStep2.forEach((dino, index) => {
      dino.getComponent(SkeletalAnimation).play("idle");
      dino.setPosition(Constants.dinosStep2InitPos[index]);
      dino.setScale(new Vec3(6, 6, 6));
      dino.setRotationFromEuler(new Vec3(0, 0, 0));
      dino.active = true;
    });

    this.MainCharacter_1.active = false;
    this.MainCharacter_1.getComponent(CharacterControl).level.active = false;
  }
}

