import { _decorator, Animation, Component, EventTouch, Node, PhysicsSystem, SkeletalAnimation, Vec2, Vec3, ParticleSystem, log, sp, view, UITransform, Label, Sprite, VideoPlayer, director, Button, ParticleSystem2D, tween, Color } from 'cc';
const { ccclass, property } = _decorator;

import * as Interfaces from '../../Data/interfaces';

import { GameController } from '../Controller/GameController';
import { Constants } from '../../Data/constants';
import { AudioManager } from '../Controller/AudioManager';
import { BottleItem } from './BottleItem';
import { NodeController } from '../Controller/NodeController';


@ccclass('GamePlay')
export class GamePlay extends Component {

    // Component
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(NodeController)
    NodeController: NodeController = null;

    @property(Node)
    HideMask: Node = null;


    protected onLoad(): void {

    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }


    public getColorStatus(colors: Color[]): Interfaces.colorStatus {
        let firstColorOfTube: string = null;
        let indexOfFirstColor: number = null;
        let nonTransparentColorArr: string[] = [];
        let heightOfFirstColor: number = null;
        let colorHeightArr = [900, 450, 200];
        let isHasTwoSameColor: boolean = false;
        
        isHasTwoSameColor = this.hasConsecutiveDuplicateColors(colors);

        for (let i = 0; i < colors.length; i++) {
            if (colors[i].a !== 0) {
                if (!firstColorOfTube) {
                    firstColorOfTube = colors[i].toCSS();
                    heightOfFirstColor = colorHeightArr[i];
                    indexOfFirstColor = i;
                };
                nonTransparentColorArr.push(colors[i].toCSS());
            }
        }
    
        return {
            firstColorOfTube: firstColorOfTube,
            indexOfFirstColor: indexOfFirstColor,
            nonTransparentColorArr: nonTransparentColorArr,
            heightOfFirstColor: heightOfFirstColor,
            isHasTwoSameColor: isHasTwoSameColor
        }
    }


    private areColorsEqual(color1: Color, color2: Color): boolean {
        return color1.r === color2.r &&
               color1.g === color2.g &&
               color1.b === color2.b &&
               color1.a === color2.a;
    }


    private hasConsecutiveDuplicateColors(colors: Color[]): boolean {
        for (let i = 0; i < colors.length - 1; i++) {
            if (this.areColorsEqual(colors[i], colors[i + 1])) {
                return true;
            }
        }
        return false;
    }


    public handleMoveToAnotherTube(tubeA: Node, tubeB: Node): void {
        const tubeABottleItemComp = tubeA.getComponent(BottleItem);

        const tubeBBottleItemComp = tubeB.getComponent(BottleItem);

        tubeB.setSiblingIndex(this.NodeController.Tubes.length - 1);

        tubeA.setSiblingIndex(this.NodeController.Tubes.length - 2);

        let tubeState = this.calculateNewTubeState(tubeBBottleItemComp, tubeABottleItemComp)

        tubeABottleItemComp.MoveToAnotherTube(tubeState);

        console.log("correct");
    }


    private calculateNewTubeState(tubeBBottleItemComp: BottleItem, tubeABottleItemComp: BottleItem): Interfaces.tubeState {
        let newState: Interfaces.tubeState = {
            position: null,
            angle: null,
            firstColorOfTube: null,
            currentHeightOfColor: null,
            otherTube: null,
            drawWaterSide: null,
        };

        const tubeBpos: Vec3 = tubeBBottleItemComp.node.getPosition();

        const colorStatus: Interfaces.colorStatus = this.getColorStatus(tubeABottleItemComp.waterColors);

        newState.firstColorOfTube = colorStatus.firstColorOfTube;

        newState.currentHeightOfColor = colorStatus.heightOfFirstColor;

        newState.otherTube = tubeBBottleItemComp;

        switch (tubeBBottleItemComp.tubeSide) {
            case "left":
                newState.position = new Vec3(30, tubeBpos.y + 120, 0);

                if (colorStatus.nonTransparentColorArr.length === 3) newState.angle = 65

                else if (colorStatus.nonTransparentColorArr.length === 2) newState.angle = 85

                else newState.angle = 90;

                newState.drawWaterSide = "left";

                break;
            case "right":
                newState.position = new Vec3(-30, tubeBpos.y + 120, 0)

                if (colorStatus.nonTransparentColorArr.length === 3) newState.angle = -75

                else if (colorStatus.nonTransparentColorArr.length === 2) newState.angle = -85

                else newState.angle = -90;

                newState.drawWaterSide = "right";

                break;
            default:
                break;
        }

        return newState;
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }
}
