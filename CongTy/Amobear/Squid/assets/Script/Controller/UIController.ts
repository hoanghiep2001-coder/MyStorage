import { _decorator, Component, easing, Label, Node, tween, Vec3 } from 'cc';
import { GamePlay } from '../Game/GamePlay';
import { GameInfo } from '../CONST/GameInfo';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {

    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(Node)
    Tut: Node = null;
    Tut_Btn: Node = null;
    Tut_Label: Label = null;

    
    protected start(): void {
        this.initProperties();
        this.activeTutAnim();
        this.registerEvent();
    }


    private initProperties(): void {
        this.Tut_Btn = this.Tut.getChildByName("btn");
        this.Tut_Label = this.Tut.getComponentInChildren(Label);
    }


    private activeTutAnim(): void {
        const originalScale = this.Tut_Btn.getScale();
        tween(this.Tut_Btn)
        .repeatForever(
            tween(this.Tut_Btn)
                .to(0.5, { scale: new Vec3(originalScale.x + 0.05, originalScale.y +0.05, originalScale.z + 0.05) })
                .to(0.5, { scale: originalScale }, { easing: easing.elasticOut })
        ).start();
    }


    private registerEvent(): void {
        this.Tut_Btn.on(Node.EventType.TOUCH_START, this.onTutBtnTouchStart, this);
    }


    private onTutBtnTouchStart(): void {
        GameInfo.IsPlaying = true;
        this.Tut.active = false;
    }

}

