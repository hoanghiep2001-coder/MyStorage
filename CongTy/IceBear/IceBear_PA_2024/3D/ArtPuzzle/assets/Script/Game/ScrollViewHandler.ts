
import { _decorator, Button, Component, easing, EventHandler, EventTouch, instantiate, log, Node, ScrollBar, ScrollView, Sprite, tween, UITransform, Vec2, Vec3 } from 'cc';
import { UIController } from './UIController';
import { Constants } from '../Data/constants';
import { GameCommon } from '../Data/GameCommon';
import { GamePlay } from './GamePlay';
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;


@ccclass('ScrollViewHandler')
export class ScrollViewHandler extends Component {

    @property(UIController)
    UIController: UIController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;

    // state
    prevPos: Vec3 = null;
    pickingStep: number = 0;


    protected start(): void {
        this.UIController.Items.forEach((item) => {

            item.on(Node.EventType.TOUCH_START, this.onItemTouchStart, this);

            item.on(Node.EventType.TOUCH_MOVE, this.onItemTouchMove, this);

            item.on(Node.EventType.TOUCH_END, this.onItemTouchEnd, this);

            item.on(Node.EventType.TOUCH_CANCEL, this.onItemTouchEnd, this);

        })
    }


    onItemClicked(event: Event, customEventData: any) {
        this.UIController.Tutorial.active = false;
        console.log("Item clicked: ", customEventData);
    }


    onItemTouchStart(event: EventTouch): void {
        if(Constants.dissolvedItemNumber >= 20) {
            this.GameController.installHandle();
            return;
        }
        
        if (!Constants.isCanClick) return;

        // ironsource
        this.GamePlay.handleIronSourcePlaySound();

        this.AudioManager.playSound(Constants.SoundTrack.clickSound);

        Constants.isTouching = true;

        this.node.getComponent(ScrollView).enabled = false;

        let item: Node = event.target;  
        let subItem = instantiate(item);
        let pos = this.convertToNodeSpace(event.getUILocation());
        let pickingItem = item.children[0].name;
        let match = pickingItem.match(/Step(\d+)_/);

        Constants.currentDragNode = subItem;

        this.prevPos = pos;

        this.pickingStep = Number(match[1]);

        this.GamePlay.filterSameArea(pickingItem);

        this.UIController.ImpactArea.addChild(Constants.currentDragNode);

        item.children[0].getComponent(Sprite).enabled = false;

        Constants.currentDragNode.setPosition(pos);

        this.scaleUpNode(Constants.currentDragNode);

        this.UIController.Tutorial.active = false;

        log("picking step: " + this.pickingStep + ", item: " + pickingItem);
    }


    onItemTouchMove(event: EventTouch): void {
        if (!Constants.isCanClick) return;

        let item: Node = event.target;
        let pos = this.convertToNodeSpace(event.getUILocation());

        if(Constants.currentDragNode) {
            Constants.currentDragNode.setPosition(pos);
        }

        if(this.checkImpactArea(Constants.sameArea) && (this.pickingStep === GameCommon.currentStep)) {

            this.AudioManager.playSound(Constants.SoundTrack.matchSound);

            Constants.isCanClick = false;
            Constants.isDissolveIn = true;
            Constants.targetNode.active = true;
            Constants.currentDragNode.active = false;

            this.prevPos = null;

            this.node.getComponent(ScrollView).enabled = true;

            this.UIController.ImpactArea.removeChild(Constants.currentDragNode);

            item.active = false;

            item.removeFromParent();

            log("Correct!! dissolving!!");
        }
    }


    onItemTouchEnd(event: EventTouch): void {
        if (!Constants.isCanClick || !Constants.currentDragNode) return;

        let item: Node = event.target;

        Constants.isTouching = false;
        
        if(this.pickingStep !== GameCommon.currentStep || !this.checkImpactArea(Constants.sameArea)) {
            this.turnBack(Constants.currentDragNode, item);
            this.AudioManager.playSound(Constants.SoundTrack.WrongSound);
        }
    }


    private convertToNodeSpace(screenPos: Vec2): Vec3 {
        let pos = new Vec3((screenPos.x - 160), (screenPos.y - 240), 0);
        return pos;
    }


    private scaleUpNode(Node: Node): void {
        log("saleUp ```")

        let scaleNumber: number = 2;

        if(Node.name === "item_16" || Node.name === "item_17" || Node.name === "item_8") scaleNumber = 3.5;

        tween(Node)
            .to(0.5, { scale: new Vec3(scaleNumber, scaleNumber, scaleNumber) }, { easing: easing.elasticOut })
            .start();
    }


    private turnBack(dragNode: Node, item: Node): void {
        log("TurnBack ```")

        Constants.isCanClick = false;
        this.node.getComponent(ScrollView).enabled = true;

        tween(dragNode)
            .to(0.5, { scale: new Vec3(1, 1, 1), position: this.prevPos })
            .call(() => {
                this.prevPos = null;

                item.children[0].getComponent(Sprite).enabled = true;

                dragNode.active = false;

                Constants.currentDragNode = null;

                this.node.getComponent(ScrollView).enabled = true;

                Constants.isCanClick = true;
            }).start();
    }


    private checkImpactArea(area: Node): boolean {
        if (Constants.currentDragNode) {
            let nodeBdx = Constants.currentDragNode.getComponent(UITransform).getBoundingBox();
            let impactArea = area.getComponent(UITransform).getBoundingBox();

            if (impactArea.intersects(nodeBdx)) return true;
            else return false;
        }
    }
}
