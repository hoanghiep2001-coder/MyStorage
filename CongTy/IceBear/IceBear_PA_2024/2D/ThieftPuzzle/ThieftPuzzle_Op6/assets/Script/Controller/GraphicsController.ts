import { Constants } from "../Data/constants";
import HandController from "./HandController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GraphicsController extends cc.Component {

    @property(cc.Node)
    hand: cc.Node = null;
    @property([cc.Graphics])
    graphicsNodes: cc.Graphics[] = [];
    graphics: cc.Graphics = null;

    handController: HandController = null;


    protected start(): void {
        this.graphics = this.getComponent(cc.Graphics);
        this.handController = this.hand.getComponent(HandController);
    }


    private handleDrawLine(start: cc.Vec2, end: cc.Vec2): void {
        if (Constants.newPoint) {
            start = Constants.newPoint;
        }

        this.graphics.clear();
        this.graphics.lineWidth = 7;
        this.graphics.moveTo(start.x, start.y);
        this.graphics.lineTo(end.x, end.y);
        this.graphics.stroke();
    }


    public handleDrawWithTouchPoint(): void {

        if (Constants.isTouchPoint1 && !Constants.isDrawPoint1) {
            this.handleDrawOldLine(1);
            return;
        }

        if (Constants.isTouchPoint2 && !Constants.isDrawPoint2) {
            this.handleDrawOldLine(2);
            return;
        }

        if (Constants.isTouchPoint3 && !Constants.isDrawPoint3) {
            this.handleDrawOldLine(3);
            return;
        }

        if (Constants.isTouchPoint4 && !Constants.isDrawPoint4) {
            this.handleDrawOldLine(4);
            return;
        }

        if (Constants.isTouchPoint5 && !Constants.isDrawPoint5) {
            this.handleDrawOldLine(5);
            return;
        }
        if (Constants.isTouchPoint6 && !Constants.isDrawPoint6) {
            this.handleDrawOldLine(6);
            return;
        }
        if (Constants.isTouchPoint7 && !Constants.isDrawPoint7) {
            this.handleDrawOldLine(7);
            return;
        }
    }


    public handleDrawOldLine(step: number): void {
        this.graphicsNodes[step - 1].clear();
        this.graphicsNodes[step - 1].lineWidth = 6;
        if (Constants.isLoseGame) {
            this.graphicsNodes[step - 1].fillColor = cc.Color.RED;
            this.graphicsNodes[step - 1].strokeColor = cc.Color.RED;
        }
        switch (step) {
            case 1:
                if (Constants.newPoint) {
                    Constants.isDrawPoint1 = true;
                    this.graphicsNodes[step - 1].moveTo(Constants.pointA_Pos.x, Constants.pointA_Pos.y);
                    // this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                
                    let controlPointX =
                        Constants.point1Pos.x - 15;
                    let controlPointY =
                        Constants.point1Pos.y - 15;
                    this.graphicsNodes[step - 1].quadraticCurveTo(
                        controlPointX,
                        controlPointY,
                        Constants.point1Pos.x,
                        Constants.point1Pos.y
                    );
                }
                break;
            case 2:
                if (Constants.oldPoint) {
                    Constants.isDrawPoint2 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].quadraticCurveTo(
                        (this.handController.Apple_1_Points[1].x + this.handController.Apple_1_Points[0].x) / 2,
                        (this.handController.Apple_1_Points[1].y + this.handController.Apple_1_Points[0].y) / 2 + 3,
                        this.handController.Apple_1_Points[1].x,
                        this.handController.Apple_1_Points[1].y
                    );
                }
                break;
            case 3:
                if (Constants.oldPoint) {
                    Constants.isDrawPoint3 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[1].x, this.handController.Apple_1_Points[1].y);
                    let controlPointX =
                        (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[1].x) / 2;
                    let controlPointY =
                        (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[1].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(
                        controlPointX + 6,
                        controlPointY,
                        this.handController.Apple_1_Points[2].x,
                        this.handController.Apple_1_Points[2].y
                    );
                }
                break;
            case 4:
                if (Constants.oldPoint) {
                    Constants.isDrawPoint4 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[2].x, this.handController.Apple_1_Points[2].y);
                    let controlPointX =
                        (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[3].x) / 2;
                    let controlPointY =
                        (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(
                        controlPointX,
                        controlPointY - 6,
                        this.handController.Apple_1_Points[3].x,
                        this.handController.Apple_1_Points[3].y
                    );
                }
                break;
            case 5:
                if (Constants.oldPoint) {
                    Constants.isDrawPoint5 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[3].x, this.handController.Apple_1_Points[3].y);
                    let controlPointX =
                        (this.handController.Apple_1_Points[0].x + this.handController.Apple_1_Points[3].x) / 2;
                    let controlPointY =
                        (this.handController.Apple_1_Points[0].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(
                        controlPointX - 6,
                        controlPointY,
                        this.handController.Apple_1_Points[0].x,
                        this.handController.Apple_1_Points[0].y
                    );
                }
                break;
            case 6:
                if (Constants.oldPoint) {
                    Constants.isDrawPoint6 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[4].x, this.handController.Apple_1_Points[4].y);
                }
                break;
                case 7:
                    if (Constants.oldPoint) {
                        Constants.isDrawPoint7 = true;
                        this.graphicsNodes[step - 1].moveTo(Constants.point5Pos.x, Constants.point5Pos.y);
                            let controlPointX =
                            (Constants.point6Pos.x + Constants.point5Pos.x) / 2;
                        let controlPointY =
                            (Constants.point6Pos.y + Constants.point5Pos.y) / 2;
                        this.graphicsNodes[step - 1].quadraticCurveTo(
                            controlPointX,
                            controlPointY + 6,
                            Constants.point6Pos.x,
                            Constants.point6Pos.y
                        );
                    }
                    break;
            default:
                break;
        }

        this.graphicsNodes[step - 1].stroke();
    }


    protected update(dt: number): void {
        this.handleDrawWithTouchPoint();
        this.hand.active && this.handleDrawLine(Constants.pointA_Pos, this.hand.getPosition());
    }
}
