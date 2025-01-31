import { _decorator, Component, easing, Label, Node, tween, Vec3 } from 'cc';
import { GameController } from '../../../Controller/GameController';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;


@ccclass('CTA')
export class CTA extends Component {

    @property(GameController)
    GameController: GameController = null;

    Tut_Btn: Node = null;
    Tut_Label: Label = null;
    overlay: Node = null;


    protected start(): void {
        this.overlay = this.node.getChildByName("Overlay")

        this.Tut_Btn = this.node.getChildByName("btn");
        this.Tut_Label = this.Tut_Btn.getComponentInChildren(Label);

        // mtg & applovin
        // this.overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // others
        this.Tut_Btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        this.activeTutAnim();

        this.updateLabel();
    }


    private updateLabel(): void {
        if(GameInfo.isWin) this.Tut_Label.string = "CONTINUE!"
        else this.Tut_Label.string = "TRY AGAIN!"
    }


    private activeTutAnim(): void {
        const originalScale = this.Tut_Btn.getScale();
        tween(this.Tut_Btn)
            .repeatForever(
                tween(this.Tut_Btn)
                    .to(0.5, { scale: new Vec3(originalScale.x + 0.05, originalScale.y + 0.05, originalScale.z + 0.05) })
                    .to(0.5, { scale: originalScale }, { easing: easing.elasticOut })
            ).start();
    }
}

