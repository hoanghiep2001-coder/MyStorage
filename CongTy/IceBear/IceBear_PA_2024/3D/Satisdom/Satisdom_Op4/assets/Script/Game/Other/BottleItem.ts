import { _decorator, Component, Node, CCInteger, Graphics, Color, tween, log, Vec3, color, Vec2, UITransform, Sprite } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

import * as Interfaces from '../../Data/interfaces';
import { Constants } from '../../Data/constants';
import { AudioManager } from '../Controller/AudioManager';

type TubeController = import('../Controller/TubeController').TubeController;

type GamePlay = import("./GamePlay").GamePlay;

@ccclass('BottleItem')

export class BottleItem extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    // @property({ type: [CCInteger] })
    // public _waterHeights: number[] = [];
    // get waterHeights() {
    //     return this._waterHeights;
    // }
    // set waterHeights(heights) {
    //     this._waterHeights = heights;
    //     this.drawWater();
    // }

    @property([Sprite])
    spriteColors: Sprite[] = [];


    public _waterColors: Color[] = [];



    // @property(CCInteger)
    // bottleWidth: number = 564;


    // @property(CCInteger)
    // bottleHeight: number = 1024;


    @property(CCInteger)
    _bottleAngle: number = 0;


    // @property(CCInteger)
    // get bottleAngle() {
    //     return this._bottleAngle;
    // }
    // set bottleAngle(angle) {
    //     this._bottleAngle = angle;
    //     this.node.angle = angle;
    //     this.drawWater();
    // }


    // @property(Graphics)
    // drawGraphics: Graphics = null;


    private height1: number = 900;
    private height2: number = 450;
    private height3: number = 200;

    public tubeSide: string = "";
    public initPos: Vec3 = null;

    tubeController: TubeController = null;
    graphics: Graphics = null;
    isSorting: boolean = false;
    newState: Interfaces.tubeState = null;

    
    onLoad() {

    }


    start() {
        // step 1 = 65;
        // step 2 = 85;
        // step 3 = 90;

        this.initPos = this.node.getPosition();

        this.applyHeightToColors();

        this.initTubeSide();

        this.setWaterColors();

        this.tubeController = this.node.parent.getComponent("TubeController") as TubeController;

        this.graphics = this.tubeController.Graphics;
    }


    private setWaterColors(): void {
        for (let index = 0; index < this.spriteColors.length; index++) {
            const sprite = this.spriteColors[index];
            sprite.color = this._waterColors[index];
        }
    }


    private applyHeightToColors(): void {
        this._waterHeights = [this.height1, this.height2, this.height3];
    }


    private getColorStatus(): Interfaces.colorStatus {
        const GamePlayNode: Node = this.node.parent.parent.parent.getChildByName("GamePlay");
        const GamePlayComp: GamePlay = GamePlayNode.getComponent("GamePlay") as GamePlay;
        const colorStatus = GamePlayComp.getColorStatus(this.waterColors);

        return colorStatus;
    }


    private applyWaterColor(): void {
        const colorStatus = this.getColorStatus();

        // tách chuỗi string rgba thành từng phần
        let values = colorStatus.firstColorOfTube.match(/\d+(\.\d+)?/g).map(Number);
        let color = new Color(values[0], values[1], values[2], values[3] * 255);

        this._waterColors[colorStatus.indexOfFirstColor - 1] = color;

        log("Màu đc chuyển đổi: " + color)
    }


    public rotateTube(tubeState: Interfaces.tubeState): void {
        log("angling")

        tubeState.otherTube.setIndexHeightToZero(tubeState.currentHeightOfColor);

        tubeState.otherTube.applyWaterColor();

        tubeState.otherTube.increseHeightOfWater();

        this.AudioManager.playSound(Constants.SoundTrack.WaterDropSound);

        tween(this.node)
            .to(1.5, { angle: tubeState.angle })
            .call(() => {
                Constants.isFillUp2Color = false;

                this.isSorting = false;

                this.graphics.clear();
            })
            .start();

            this.scheduleOnce(() => {
                this.isSorting = true;
                this.decreaseHeightOfWater(tubeState)
            }, 0.4)
    }


    private increseHeightOfWater(): void {
        console.log("Tăng mực nước");

        const colorStatus = this.getColorStatus();
        let targetNumber: number = null;
        let heightObject: Interfaces.heightObject = { height: null };

        switch (colorStatus.nonTransparentColorArr.length) {
            case 3:
                targetNumber = 900;
                heightObject.height = this.height1;
                break;
            case 2:
                targetNumber = 900;
                heightObject.height = this.height2;
                Constants.isFillUp2Color = true;
                break;
            default:
                break;
        }

        tween(heightObject)
            .to(1.5, { height: targetNumber }, {
                onUpdate: (target: Interfaces.heightObject) => {

                    if (Constants.isFillUp2Color) {
                        this.height2 = target.height;
                    } else {
                        if (targetNumber === 900) this.height1 = target.height;
                        else if (targetNumber === 450) this.height2 = target.height;
                        else if (targetNumber === 200) this.height3 = target.height;
                    }

                    this.applyHeightToColors();
                },
            })
            .start();
    };


    private fakeDrawSortWater(newState: Interfaces.tubeState): void {
        let leftPoint = this.node.getChildByName("LeftPoint"),
            rightPoint = this.node.getChildByName("RightPoint"),
            otherTube: Node = newState.otherTube.node,
            otherTubeMiddlePoint = otherTube.getChildByName("MiddlePoint"),

            values = newState.firstColorOfTube.match(/\d+(\.\d+)?/g).map(Number),
            colorToDraw = new Color(values[0], values[1], values[2], values[3] * 255),
            posA: Vec3 = new Vec3(),
            posB: Vec3 = new Vec3();

        if (newState.drawWaterSide === "left") {
            posA = leftPoint.getWorldPosition();
            posB = otherTubeMiddlePoint.getWorldPosition();
        }
        else {
            posA = rightPoint.getWorldPosition();
            posB = otherTubeMiddlePoint.getWorldPosition();
        }

        // Chuyển đổi vị trí từ không gian thế giới sang không gian của GraphicsNode
        const graphicsNodeTransform = this.graphics.getComponent(UITransform);
        const nodeAPosition = graphicsNodeTransform.convertToNodeSpaceAR(posA);
        const nodeBPosition = graphicsNodeTransform.convertToNodeSpaceAR(posB);

        // Vẽ đường nối và đặt màu
        this.graphics.clear();
        this.graphics.strokeColor = colorToDraw;  // Đặt màu cho đường vẽ
        this.graphics.moveTo(nodeAPosition.x, nodeAPosition.y);
        this.graphics.lineTo(nodeBPosition.x, nodeBPosition.y);
        this.graphics.stroke();

        log("vẽ giọt nước");

    }


    private decreaseHeightOfWater(newState: Interfaces.tubeState): void {

        const colorStatus = this.getColorStatus();

        let targetNumber: number = null;
        let heightObject: Interfaces.heightObject = { height: null };

        switch (colorStatus.nonTransparentColorArr.length) {
            case 3:
                targetNumber = 900;
                heightObject.height = this.height1;
                break;
            case 2:
                targetNumber = 900;
                heightObject.height = this.height1;
                break;
            default:
                break;
        }

        tween(heightObject)
            .to(1.5, { height: 0 }, {
                onUpdate: (target: Interfaces.heightObject) => {
                    if (Constants.isFillUp2Color) {
                        this.height1 = target.height;
                        this.height2 = target.height;
                    } else {
                        if (targetNumber === 900) this.height1 = target.height;
                        else if (targetNumber === 450) this.height2 = target.height;
                        else if (targetNumber === 200) this.height3 = target.height;
                    }

                    this.applyHeightToColors();
                },
            })
            .call(() => {
                this.AudioManager.playSound(Constants.SoundTrack.CompleteSound);
                this.comeBackInitPos();
                this._waterColors[Constants.interactingColorNumber] = Constants.transparentColor;

                if (Constants.isFillUp2Color) this._waterColors[Constants.interactingColorNumber + 1] = Constants.transparentColor;

                console.log("Sort Xong")
                log("------------------")
            })
            .start();
    };


    public comeBackInitPos(): void {
        tween(this.node)
            .to(0.3, { position: this.initPos, angle: 0 })
            .call(() => Constants.isCanTouch = true)
            .start();
    };


    public MoveToAnotherTube(newState: Interfaces.tubeState): void {
        log("Di chuyển")

        Constants.isCanTouch = false;

        this.newState = newState;

        tween(this.node)
            .to(0.3, { position: newState.position })
            .call(() => this.rotateTube(newState))
            .start();
    };


    private setIndexHeightToZero(heightToCompare: number): void {
        let height: string = "";

        switch (heightToCompare) {
            case 900:
                this.height1 = 0;
                height = "height1";
                break;
            case 450:
                this.height2 = 450;
                height = "height2";

                if (this.node.name === "Base_Tube_2") this.height1 = 0;
                break;
            case 200:
                this.height3 = 200;
                height = "height3";
                break;
            default:
                break;
        };

        log(this.node.name + " - index Height to zero: " + height);

        this.applyHeightToColors();
    }


    private initTubeSide(): void {
        switch (this.node.name) {
            case "Base_Tube_0":
                this.tubeSide = "left";
                break;
            case "Base_Tube_1":
                this.tubeSide = "right";
                break;
            case "Base_Tube_2":
                this.tubeSide = "right";
                break;
            case "Base_Tube_3":
                this.tubeSide = "left";
                break;
            default:
                break;
        }
    }


    private drawWater() {
        if (!this.drawGraphics) return;

        this.drawGraphics.clear();
        for (let index = 0; index < this.waterHeights.length; index++) {
            const height = this.waterHeights[index];
            this.drawOneWater(height, this.waterColors[index]);
        }
    }


    // private drawOneWater(height: number, color: Color) {
    //     const radiansA = this.bottleAngle / 180 * Math.PI;
    //     const radiansM = Math.atan(2 * height / this.bottleWidth);
    //     const tempWTan = this.bottleWidth * Math.tan(radiansA);
    //     this.drawGraphics.fillColor = color;
    //     if (radiansA <= radiansM) {
    //         if (radiansA < -radiansM) {
    //             let hL = Math.sqrt(2 * height * -tempWTan);
    //             hL = hL > this.bottleHeight ? this.bottleHeight : hL;
    //             const bW = hL / Math.tan(-radiansA);
    //             this.drawGraphics.moveTo(this.bottleWidth, 0);
    //             this.drawGraphics.lineTo(this.bottleWidth, hL);
    //             this.drawGraphics.lineTo(this.bottleWidth - bW, 0);
    //             this.drawGraphics.lineTo(this.bottleWidth, 0);
    //         } else {
    //             this.drawGraphics.moveTo(0, 0);
    //             let hL = height + tempWTan / 2;
    //             let cutOffset = 0;
    //             if (hL > this.bottleHeight) {
    //                 cutOffset += hL - this.bottleHeight
    //             }
    //             let hR = height - tempWTan / 2;
    //             if (hR > this.bottleHeight) {
    //                 cutOffset += hR - this.bottleHeight
    //             }

    //             this.drawGraphics.lineTo(this.bottleWidth, 0);
    //             this.drawGraphics.lineTo(this.bottleWidth, hR - cutOffset);
    //             this.drawGraphics.lineTo(0, hL - cutOffset);
    //             this.drawGraphics.lineTo(0, 0);
    //         }
    //     } else {
    //         let hL = Math.sqrt(2 * height * tempWTan);
    //         hL = hL > this.bottleHeight ? this.bottleHeight : hL;
    //         const bW = hL / Math.tan(radiansA);
    //         this.drawGraphics.moveTo(0, 0);
    //         this.drawGraphics.lineTo(bW, 0);
    //         this.drawGraphics.lineTo(0, hL);
    //         this.drawGraphics.lineTo(0, 0);
    //     }

    //     this.drawGraphics.fill();
    // }


    protected update(dt: number): void {
        // this.bottleAngle = this.node.eulerAngles.z;

        this.isSorting && this.fakeDrawSortWater(this.newState)
    }
}
