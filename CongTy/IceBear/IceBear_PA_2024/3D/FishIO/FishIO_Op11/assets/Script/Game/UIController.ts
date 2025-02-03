
import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {

    @property(Node)
    Btn_Left: Node = null;
    @property(Node)
    Btn_Right: Node = null;
    
    protected start(): void {
     
    }


}

