
import { _decorator, Camera, Component, Label, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    
    @property(Node)
    Canvas: Node = null;

    // 3D
    @property(Node)
    BaseGun: Node = null;
    @property(Node)
    Gun: Node = null;
    @property(sp.Skeleton)
    Gun_Blast: sp.Skeleton = null;
    @property(sp.Skeleton)
    Combo: sp.Skeleton = null;

    // 2D
    @property(Camera)
    Camera: Camera = null;

    @property(Node)
    HideMask: Node = null;
    @property(Node)
    point: Node = null;
    @property(Node)
    background: Node = null;

    @property(Node)
    ShootMiss: Node = null;
    @property(Node)
    Aim: Node = null;
    @property(Node)
    Hint_Hand: Node = null;
    @property(Node)
    Hint_icon: Node = null;
    @property(Node)
    Text_1: Node = null;
    @property(Node)
    Text_wrong: Node = null;

    // enemies
    @property(Node)
    EnemyStatus: Node = null;
    @property([Node])
    Enemies: Node[] = [];
    @property([Node])
    AimTargets: Node[] = [];
    @property([Node])
    EnemyCounts: Node[] = [];

}

