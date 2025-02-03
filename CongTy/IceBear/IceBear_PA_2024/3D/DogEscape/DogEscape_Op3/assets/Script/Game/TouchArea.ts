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
    }


    private handleTouchStart(e: EventTouch): void {
        this.GameController.installHandle();
    }


    private handleTouchMove(e: EventTouch): void {
        if (!Constants.isCanClick) return;
  
    }


    private handleTouchEnd(e: EventTouch): void {
        if (!this.isTouch) return;

    }

}
