
import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    
    @property(Node)
    Canvas: Node = null;

    @property(Node)
    BaseGun: Node = null;
    @property(Node)
    Gun: Node = null;

    @property(Node)
    HideMask: Node = null;
    @property(Node)
    background: Node = null;

    
    @property(Node)
    Aim: Node = null;
    @property(Node)
    Armo: Node = null;

    @property(Node)
    Text_1: Node = null;
    @property(Node)
    Text_2: Node = null;

    @property([Node])
    Bullets: Node[] = [];
}

