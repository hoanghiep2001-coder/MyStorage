import { _decorator, Camera, Canvas, Component, Label, log, Node, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;


@ccclass('RoboLevel')
export class RoboLevel extends Component {

    Camera: Camera = null;

    Canvas: Node = null;

    Robo_Level: Number = 0;

    Robo_Node3D: Node = null;

    variableIsSet: boolean = false;

    isUnActived: boolean = false;

    
    protected onLoad(): void {
        this.initCamera();
        this.initCanvas();
    }


    protected start(): void {
        // this.setLevelPos();
    }


    public showLevel(level: number, roboNode: Node): void {
        this.Robo_Level = level;

        this.Robo_Node3D = roboNode;

        this.variableIsSet = true;

        this.setLevelPos();
    }


    private initCamera(): void {
        let currentNode = this.node;

        while (currentNode) {
            // Kiểm tra nếu Node hiện tại có component Camera
            let cameraComponent = currentNode.name === "Global" && currentNode.getComponentInChildren(Camera);

            if (cameraComponent) {
                this.Camera = cameraComponent;
                // log("-----------------");
                // log("Found Camera Node:", cameraComponent);
                break; // Dừng vòng lặp khi tìm thấy Node chứa Camera
            }

            // Tiếp tục duyệt lên Node cha
            currentNode = currentNode.parent;
        }

        if (!currentNode) {
            log("No Camera component found in parent nodes.");
        }
    }


    private initCanvas(): void {
        let currentNode = this.node;

        while (currentNode) {
            // Kiểm tra nếu Node hiện tại có component Canvas
            let canvasComponent = currentNode.name === "Canvas" && currentNode;
            if (canvasComponent) {
                this.Canvas = canvasComponent;
                // log("Found Canvas:", canvasComponent);
                // log("-----------------");
                break; // Dừng vòng lặp khi tìm thấy Node chứa Canvas
            }

            // Tiếp tục duyệt lên Node cha
            currentNode = currentNode.parent;
        }

        if (!currentNode) {
            log("No Canvas component found in parent nodes.");
        }
    }


    public setLevelPos(): void {
        const out = new Vec3();
        const wpos = this.Robo_Node3D.worldPosition;
        this.Camera.convertToUINode(wpos, this.Canvas, out);
        let label = this.node.getComponent(Label);
        label.string = String(this.Robo_Level);
        this.node.position = new Vec3(out.x + 15, out.y + 35, out.z);
    }


    private unActiveThisNode(): void {
        if(this.isUnActived) return;

        this.isUnActived = true;
        this.node.active = false;
    }


    protected update(dt: number): void {
        this.variableIsSet && this.setLevelPos();
        GameInfo.isTouchBoss && this.unActiveThisNode();
    }
}

