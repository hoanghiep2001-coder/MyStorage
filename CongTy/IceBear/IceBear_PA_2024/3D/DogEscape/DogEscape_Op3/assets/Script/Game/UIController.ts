
import { _decorator, Camera, Component, Label, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    
    @property(Node)
    Canvas: Node = null;

    // 3D


    // 2D
    @property(Camera)
    Camera: Camera = null;

    @property(Node)
    HideMask: Node = null;

    @property(Node)
    textTap: Node = null;
    @property(Node)
    textChoose: Node = null;

}

