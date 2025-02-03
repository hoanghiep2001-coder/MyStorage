import { _decorator, Component, Graphics, Node } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('NodeController')
@executeInEditMode
export class NodeController extends Component {

    @property(Node)
    public canvas: Node = null;

    public Tubes: Node[] = [];

    @property(Graphics)
    graphics: Graphics = null;


    protected start(): void {
        this.Tubes = this.canvas.getChildByName("TubeController").children;
    }

}

