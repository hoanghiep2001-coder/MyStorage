const { ccclass, property } = cc._decorator;

import { Constants } from '../Data/constants';

type GamePlay = import("../Controller/GamePlay").default;

import * as Interfaces from '../Data/interfaces';

import AudioManager from '../Plugin/AudioManager';
import { WaterManager } from './WaterManager';

@ccclass
export default class BottleItem extends cc.Component {

    @property([cc.Sprite])
    spriteColors: cc.Sprite[] = [];

    @property(AudioManager)
    AudioManager: AudioManager = null;

    public waterColors: cc.Color[] = [];

    public waterHeights: number[] = [];

    tubeSide: string = "";

    newState: Interfaces.tubeState = null;

    height1: number = 210;

    height2: number = 200;

    height3: number = 250;
    
    height4: number = 350;

    GamePlay: GamePlay = null;

    isIncreasing: boolean = false;

    initPos: cc.Vec2 = null;

    @property(cc.ParticleSystem)
    PS_Star: cc.ParticleSystem = null;

    protected start(): void {
        this.applyWaterColor();

        this.initTubeSide();

        const GamePlayNode: cc.Node = this.node.parent.parent.parent.parent;

        this.GamePlay = GamePlayNode.getComponent("GamePlay") as GamePlay;

        this.initPos = this.node.getPosition();
    }


    private initTubeSide(): void {
        switch (this.node.name) {
            case "Bottle_1":
                this.tubeSide = "left";
                break;
            case "Bottle_2":
                this.tubeSide = "right";
                break;
            case "Bottle_3":
                this.tubeSide = "left";
                break;
            case "Bottle_4":
                this.tubeSide = "right";
                break;
            default:
                break;
        }
    }


    public applyWaterColor(): void {
        for (let index = 0; index < this.spriteColors.length; index++) {
            const sprite = this.spriteColors[index];
            sprite.node.color = this.waterColors[index];
            this.isTransparentColor(sprite.node.color) && this.setTransparentColor(sprite.node);
        };
    }


    public MoveToAnotherTube(newState: Interfaces.tubeState): void {
        cc.log("Di chuyển");

        Constants.isCanTouch = false;

        this.newState = newState;

        cc.tween(this.node)
            .to(0.3, { position: newState.position })
            .call(() => this.rotateTube(newState))
            .start();
    };


    public rotateTube(tubeState: Interfaces.tubeState): void {
        cc.log("angling");

        this.AudioManager.playSound(Constants.SoundTrack.WaterDropSound);

        this.scheduleOnce(() => {
            this.decreaseHeightOfWater(tubeState);
            tubeState.otherTube.increseHeightOfWater();
        }, 0.5);

        cc.tween(this.node)
            .to(0.5, { angle: tubeState.angle })
            .start();
    }


    private getColorStatus(): Interfaces.colorStatus {
        const GamePlayNode: cc.Node = this.node.parent.parent.parent.parent;
        const GamePlayComp: GamePlay = GamePlayNode.getComponent("GamePlay") as GamePlay;
        const colorStatus = GamePlayComp.getColorStatus(this.waterColors);

        return colorStatus;
    }


    private changeColorWater(colorRgba: string): cc.Color {
        // tách chuỗi string rgba thành từng phần
        let values = colorRgba.match(/\d+(\.\d+)?/g).map(Number);
        let color = new cc.Color(values[0], values[1], values[2], values[3] * 255);

        cc.log("Màu đc chuyển đổi: " + color);

        return color;
    }


    private increseHeightOfWater(): void {
        cc.log("Tăng mực nước");

        this.drawLineRender();
        // this.scheduleOnce(() => {
        // }, 0.2);

        let colorStatus = this.getColorStatus();

        WaterManager.increaseWater(
            Constants.numberOfIncreaseFloor,
            this.changeColorWater(Constants.colorToIncrease), 
            colorStatus.indexOfFirstColor,
            this
        );

        this.AudioManager.playSound(Constants.SoundTrack.BoilSound);
    }


    private activeDoneStepSound(): void {
        this.node.getChildByName("PSBase").children[0].getComponent(cc.ParticleSystem).resetSystem();
        this.AudioManager.playSound(Constants.SoundTrack.winSound)
    }


    private decreaseHeightOfWater(tubeState: Interfaces.tubeState): void {
        cc.log("giảm mực nước");

        let colorStatus = this.getColorStatus();

        Constants.numberOfIncreaseFloor = colorStatus.numberOfDecreaseFloor;
        Constants.colorToIncrease = colorStatus.firstColorOfTube;
        
        cc.log(colorStatus.isHasThreeSameOneDiffColor)

        WaterManager.decreaseWater(
            colorStatus.numberOfDecreaseFloor, 
            colorStatus.indexOfFirstColor,
            this
        );
    }


    private drawLineRender(): void {
        let lineRender = this.node.getChildByName("LineRender");
        lineRender.color = this.changeColorWater(this.getColorStatus().firstColorOfTube)

        cc.tween(lineRender)
            .to(0.35, { height: 1100 })
            .call(() => {
                cc.tween(lineRender)
                    .to(0.15, { height: 0 })
                    .start();
            })
            .start();
    }


    private isTransparentColor(color: cc.Color): boolean {
        if (color.a === 0) return true;
        return false;
    }


    private setTransparentColor(node: cc.Node): void {
        node.opacity = 0;
    }


    protected update(dt: number): void {
        this.angleColorWithBottle();
    }


    private angleColorWithBottle(): void {
        for (let index = 0; index < this.spriteColors.length; index++) {
            const sprite = this.spriteColors[index];
            sprite.node.angle = -this.node.angle / 1.5;
        }
    }

}
