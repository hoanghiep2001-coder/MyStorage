import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import GamePlay from "./GamePlay";
import NodesContainer from "./NodesContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Flow2Controller extends cc.Component {

    @property(NodesContainer)
    NodesContainer: NodesContainer = null;

    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(sp.Skeleton)
    spine: sp.Skeleton = null;

    @property(cc.Node)
    hand: cc.Node = null;

    minPosition = cc.v2(0, -160); // Vị trí tối thiểu (x = 0, y = -160)
    maxPosition = cc.v2(151.999, -28.076); // Vị trí ban đầu (x = 151.999, y = -28.076)
    minAngle = 0; // Góc xoay tối thiểu
    maxAngle = 45 // Góc xoay ban đầu

    tolerance = cc.v2(5, 5);

    currentPos: cc.Vec2 = new cc.Vec2();


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private touchStart(): void {
        if(Constants.isDoneFlow2) return;

        this.AudioManager.playSound(Constants.SoundTrack.TouchSound);

        this.hand.active = false;
    }


    private touchMove(event: cc.Touch): void {
        if(Constants.isDoneFlow2) return;

        let touchLocation = event.getLocation();

        // Chuyển đổi vị trí chạm từ không gian thế giới sang không gian của Node
        let localTouchLocation = this.node.parent.convertToNodeSpaceAR(touchLocation);

        // Tính toán vị trí mới
        let newX = Math.min(Math.max(localTouchLocation.x, this.minPosition.x), this.maxPosition.x);
        let newY = Math.min(Math.max(localTouchLocation.y, this.minPosition.y), this.maxPosition.y);

        // Tính toán phần trăm thay đổi vị trí
        let positionPercent = (newY - this.minPosition.y) / (this.maxPosition.y - this.minPosition.y);

        // Tính toán góc xoay mới dựa trên phần trăm thay đổi vị trí
        let newAngle = this.minAngle + (this.maxAngle - this.minAngle) * positionPercent;

        let currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        let targetPos = cc.v2(newX, newY);
        let smoothedPos = currentPos.lerp(targetPos, 0.1);

        let currentAngle = this.NodesContainer.Flow2_SpineNode.angle;
        let smoothedAngle = cc.misc.lerp(currentAngle, newAngle, 0.1);

        // Cập nhật vị trí và góc xoay của Node
        this.NodesContainer.Flow2_SpineNode.angle = smoothedAngle;
        this.NodesContainer.Flow2_SpineNode.setPosition(smoothedPos);


        this.currentPos = touchLocation;
    }


    private touchEnd(): void {

        if(Constants.isDoneFlow2) return;

        if (this.isNearMinPosition()) {

            Constants.isDoneFlow2 = true;

            this.AudioManager.playSound(Constants.SoundTrack.winSound);

            this.win();

            cc.tween(this.NodesContainer.Flow2_SpineNode)
                .to(3.2, { x: 0, y: -160, angle: 0 })
                .start();

            console.log("Okey!");
        } else {

            this.AudioManager.playSound(Constants.SoundTrack.LoseSound);

            console.log("Wrong!");
        }
    }


    private win(): void {
        this.spine.setAnimation(0, "win", false);

        this.GamePlay.doneFlow();

        this.scheduleOnce(() => {
            this.GamePlay.showNextFlow(3)
        }, 2.5)
    }


    private isNearMinPosition(): boolean {
        const currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        return (
            Math.abs(currentPos.x - this.minPosition.x) <= this.tolerance.x &&
            Math.abs(currentPos.y - this.minPosition.y) <= this.tolerance.y
        );
    }

    public someOtherFunction(): boolean {
        if (!this.isNearMinPosition()) {
            return false;
        }
        return true;
    }
}
