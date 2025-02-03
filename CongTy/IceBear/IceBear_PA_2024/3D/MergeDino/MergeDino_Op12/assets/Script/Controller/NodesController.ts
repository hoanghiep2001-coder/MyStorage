import { _decorator, Camera, Component, Label, Node, ParticleSystem, SkeletalAnimation, Vec3 } from 'cc';
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
  @property([Node])
  dinoPoints: Node[] = [];
  @property([Node])
  dinoPoints2: Node[] = [];
  @property(Node)
  hideMask: Node = null;


  // FX
  @property(ParticleSystem)
  FX_Merge: ParticleSystem = null;
  // @property(ParticleSystem)
  // FX_Merge_2: ParticleSystem = null;


  // array


  // UI
  @property(Node)
  Btn_Install: Node = null;
  @property(Node)
  Btn_AddDino: Node = null;
  @property(Label)
  Label_Price: Label = null;
  @property(Label)
  Label_Money: Label = null;


  // 3D
  @property([Node])
  Dinos: Node[] = [];
  @property([Node])
  DinoLines: Node[] = [];
  @property([Node])
  DinoLines2: Node[] = [];

  @property(Node)
  Rex: Node = null;
  @property(Node)
  Rex2: Node = null;

  isSaveOnceFlag: boolean = false;

}

