
import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {

    @property(Node)
    Effect: Node = null;
    @property([Node])
    Btns: Node[] = [];
    @property([Node])
    Hints: Node[] = [];
    @property(Node)
    Point: Node = null;

    @property(Node)
    Layer_1: Node = null;
    @property(Node)
    Layer_2: Node = null;
}

