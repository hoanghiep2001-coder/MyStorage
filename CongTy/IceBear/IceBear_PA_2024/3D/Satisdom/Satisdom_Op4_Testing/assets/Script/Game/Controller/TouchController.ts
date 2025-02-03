
import { _decorator, color, Color, Component, easing, EventTouch, log, Node, tween, Vec3 } from 'cc';
import { NodeController } from './NodeController';
import { Constants } from '../../Data/constants';
import { BottleItem } from '../Other/BottleItem';
import * as Interfaces from '../../Data/interfaces';
import { GamePlay } from '../Other/GamePlay';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('TouchController')
@executeInEditMode
export class TouchController extends Component {

    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(NodeController)
    NodeController: NodeController = null;


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.NodeController.Tubes.forEach((tube) => {
            tube.on(Node.EventType.TOUCH_START, this.tubeTouchStart, this);
        })
    }


    private tubeTouchStart(e: EventTouch): void {
        if(!Constants.isCanTouch) return;

        let clickedNode: Node = e.target;

        if (Constants.TubeClicked) {

            this.isPickCorrectTube(Constants.TubeClicked, clickedNode)
            ? this.GamePlay.handleMoveToAnotherTube(Constants.TubeClicked, clickedNode)
            : console.log("wrong");

            this.scaleDownTube(Constants.TubeClicked);

            Constants.TubeClicked = null;
        }

        else {
            Constants.TubeClicked = clickedNode;

            this.scaleUpTube(clickedNode);

            console.log("wrong");
            log("------------------------");
        }

    }


    private scaleUpTube(tube: Node): void {
        tween(tube)
            .to(0.5, { scale: new Vec3(0.17, 0.17, 0.17) }, { easing: easing.elasticOut })
            .start();
    }


    private scaleDownTube(tube: Node): void {
        tween(tube)
            .to(0.5, { scale: new Vec3(0.15, 0.15, 0.15) }, { easing: easing.elasticOut })
            .start();
    }


    private isPickCorrectTube(tube1: Node, tube2: Node): boolean {
        let reuslt: boolean = false;

        let tube1BottleItemComponent = tube1.getComponent(BottleItem);
        let tube2BottleItemComponent = tube2.getComponent(BottleItem);

        let colorA: Interfaces.colorStatus = this.GamePlay.getColorStatus(tube1BottleItemComponent.waterColors);
        let colorB: Interfaces.colorStatus = this.GamePlay.getColorStatus(tube2BottleItemComponent.waterColors);

        Constants.interactingColorNumber = colorA.indexOfFirstColor;

        log("Index Màu đang tương tác: " + Constants.interactingColorNumber)

        if (colorB.nonTransparentColorArr.length === 3) return false;
        else {
            if (colorA.firstColorOfTube === colorB.firstColorOfTube) return true;
        }

        return reuslt;
    }
}

