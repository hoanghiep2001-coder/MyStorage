
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('BrickController')
export class BrickController extends Component {


    BrickColors: Node[] = [];


    protected onLoad(): void {
        
        // this.BrickColors = this.node.children;
    }


    protected start(): void {
        
    }
}


