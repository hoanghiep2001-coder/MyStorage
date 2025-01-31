
import { _decorator, Component, easing, log, Node, Tween, tween, TweenAction, Vec3 } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
import { BoxBehavior } from '../Box/BoxBehavior';
const { ccclass, property } = _decorator;


@ccclass('HayChonGiaDung')
export class HayChonGiaDung extends Component {

    @property(Node)
    Roll: Node = null;
    icon_roll: Node = null;
    meters: Node[] = [];

    boxChoosen: BoxBehavior = null;

    currentTween: Tween<Node> = null;


    public trueSteps1: number[] = [40, -40];
    public trueSteps2: number[] = [40, -55];
    public trueSteps3: number[] = [40, -14, -41, -80];
    public trueSteps4: number[] = [40, -55];


    protected start(): void {
        this.Roll.children.forEach(child => {
            if (child.name.includes("meter")) this.meters.push(child);
            else this.icon_roll = child;
        });

        this.meters.forEach(meter => meter.active = false);
        this.meters[0].active = true;

        this.activeHayChonGiaDung();
    }


    public getCurrentRollResult(): boolean {
        let result = false;

        this.currentTween.stop();

        let currentRotate: number = this.icon_roll.eulerAngles.z;

        switch (GameInfo.Squid_PA_30.detachCandySteps) {
            case 1:
                if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                    this.boxChoosen.moveDetachedCandy();
                    return true;
                }
                else return false;
                break;
            case 2:
                if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                    this.boxChoosen.moveDetachedCandy();
                    return true;
                }
                else return false;
                break;
            case 3:
                if ((currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0])
                    || (currentRotate >= this.trueSteps1[3] && currentRotate <= this.trueSteps1[2])
                ) {
                    this.boxChoosen.moveDetachedCandy();
                    return true;
                }
                else return false;
                break;
            case 4:
                if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                    this.boxChoosen.moveDetachedCandy();
                    return true;
                }
                else return false;
                break;
            default:
                break;
        }

        return result;
    }


    public wrong(): void {
        log("wrong!")
        let currentPos = this.node.getPosition();
        let currentScale = this.node.getScale();
        tween(this.node)
            .to(0.1, {
                position: new Vec3(currentPos.x + 5, currentPos.y, currentPos.z),
                scale: new Vec3(currentScale.x + 0.03, currentScale.y + 0.03)
            }, { easing: easing.smooth })
            .to(0.1, { position: currentPos, scale: currentScale }, { easing: easing.smooth })
            .call(() => this.activeHayChonGiaDung())
            .start();
    }


    public nextDetach(): void {
        log("correct!")
        GameInfo.Squid_PA_30.detachCandySteps += 1;

        if(GameInfo.Squid_PA_30.detachCandySteps >= 5) {
            this.node.active = false;
            this.destroy()
        }

        for (let index = 0; index < this.meters.length; index++) {
            const element = this.meters[index];
            element.active = false;
            if (index === GameInfo.Squid_PA_30.detachCandySteps - 1) element.active = true;
        }
        this.activeHayChonGiaDung();
    }


    public activeHayChonGiaDung(): void {
        const startRotation = new Vec3(0, 0, 80); // Bắt đầu từ 80 độ
        const endRotation = new Vec3(0, 0, -80);

        this.currentTween = tween(this.icon_roll)
            .repeatForever(
                tween(this.icon_roll)
                    .to(1, { eulerAngles: endRotation }, { easing: easing.smooth }) // Xoay từ 80 -> -80 trong 1 giây
                    .to(1, { eulerAngles: startRotation }, { easing: easing.smooth })
            )
            .start();
    }


    // protected update(dt: number): void {

    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
