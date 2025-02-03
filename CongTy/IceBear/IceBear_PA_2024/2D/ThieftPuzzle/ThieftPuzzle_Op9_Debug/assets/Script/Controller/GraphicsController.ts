import { Constants } from "../Data/constants";
import HandController from "./HandController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GraphicsController extends cc.Component {
    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Prefab)
    prefab_Graphics: cc.Prefab = null;


    // state

    graphicsArr: cc.Graphics[] = [];
    handController: HandController = null;


    protected start(): void {
        this.createGraphics();
    }


    public createGraphics(): void {
        let prefab = cc.instantiate(this.prefab_Graphics);
        let graphics = prefab.getComponent(cc.Graphics);
        prefab.x = 0;
        prefab.y = 0;
        prefab.parent = this.node;
        this.graphicsArr.push(graphics);
    }


    private handleDrawLine(start: cc.Vec2, end: cc.Vec2, graphics: cc.Graphics): void {
        graphics.clear();
        graphics.lineWidth = 7;
        graphics.moveTo(start.x, start.y);
        graphics.lineTo(end.x, end.y);
        graphics.stroke();
    }


    private handleDrawWithTouchPoint(): void {
        if(Constants.touchPointsPos.length >= 2) {
            for (let i = 1; i < Constants.touchPointsPos.length; i++) {
                let start = Constants.touchPointsPos[i - 1]; // Điểm trước
                let end = Constants.touchPointsPos[i]; // Điểm hiện tại
                // graphics.moveTo(start.x, start.y);
                // graphics.lineTo(end.x, end.y);
            }
        }
    }


    protected update(dt: number): void {
        Constants.isTouch && this.handleDrawLine(
            Constants.startPos, 
            this.hand.getPosition(), 
            this.graphicsArr[0]
        );

        // console.log(Constants.touchPointsPos);
        
    }
}
