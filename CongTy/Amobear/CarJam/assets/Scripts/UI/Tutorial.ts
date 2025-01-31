
import { _decorator, Component, Node, Camera, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Tutorial')
export class Tutorial extends Component {

    @property(Camera)
    Cam3D: Camera = null;

    @property(Node)
    Canvas: Node = null;

    @property(Node)
    target3D: Node = null;


    protected start(): void {

    }


    protected update(dt: number): void {
        const out = new Vec3();
        const wpos = this.target3D.worldPosition;
        this.Cam3D.convertToUINode(wpos, this.Canvas, out);
        this.node.position = new Vec3(
            out.x, out.y, out.z
        );
    }
}

