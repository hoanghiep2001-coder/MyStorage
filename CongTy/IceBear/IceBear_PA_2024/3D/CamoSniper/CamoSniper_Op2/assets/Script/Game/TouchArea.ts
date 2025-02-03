import { _decorator, Component, EventTouch, Node, tween, Vec2, Vec3 } from 'cc';
import { UIController } from './UIController';
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;

@ccclass('TouchArea')
export class TouchArea extends Component {

    @property(UIController)
    UIController: UIController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;


    // static
    isTouch: boolean = false;


    protected start(): void {
        this.UIController.HideMask.on(Node.EventType.TOUCH_START, this.handleTouchStart, this);
        this.UIController.HideMask.on(Node.EventType.TOUCH_MOVE, this.handleTouchMove, this);
        this.UIController.HideMask.on(Node.EventType.TOUCH_END, this.handleTouchEnd, this);
        this.UIController.HideMask.on(Node.EventType.TOUCH_CANCEL, this.handleTouchEnd, this);
    }


    private handleTouchStart(e: EventTouch): void {
        if (!Constants.isCanClick) return;
        Constants.isToStore && this.GameController.installHandle();
        Constants.countShoot >= 3 && this.GameController.installHandle();
        this.GamePlay.handleIronSourcePlaySound();

        this.UIController.Aim.active = true;
        this.UIController.Hint_Hand.active = false;
        this.UIController.Gun.active = false;
        this.UIController.Hint_icon.active = false;
        this.UIController.EnemyStatus.active = true;
        this.UIController.Text_1.active = false;
        this.GamePlay.handleZoomCamera(true);
        this.GamePlay.activeAimTargets();
        this.isTouch = true;
    }


    private handleTouchMove(e: EventTouch): void {
        if (!Constants.isCanClick) return;
        let pos = this.convertToNodeSpace(e.getUILocation());
        if (pos.y > 130 || pos.y < -130) {
            return;
        }

        this.UIController.background.setPosition(pos.x, pos.y, 0);
    }


    private convertToNodeSpace(screenPos: Vec2): Vec3 {
        let pos = new Vec3(-(screenPos.x - 160), -(screenPos.y - 240), 0);
        return pos;
    }


    private handleTouchEnd(e: EventTouch): void {
        if (!this.isTouch) return;
        this.isTouch = false;
        this.GamePlay.shoot();
        this.GamePlay.checkHitEnemy();
    }

}
