
import { _decorator, Component, Node, size, UITransform } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
const { ccclass, property } = _decorator;

 
@ccclass('PA_11_CharHealth')
export class PA_11_CharHealth extends Component {
    @property(Node)
    HealthNode: Node = null;

    currentNodeHeight: number = 100;
    
    isActiveDecreaseHealth: boolean = false;


    protected start(): void {
        this.scheduleOnce(() => {
            this.isActiveDecreaseHealth = true;
            this.node.getChildByName("Overlay").active = false;
        }, 0.8)
    }


    private handleDecreaseHealth(): void {
        if(this.currentNodeHeight <= 0) {
            GameInfo.isCanTouch = false;
            this.isActiveDecreaseHealth = false;
            GameInfo.GTA_PA_11.isCharacterDead = true;
            return;
        }
        this.currentNodeHeight -= 1;
        this.HealthNode.getComponent(UITransform).setContentSize(size(100, this.currentNodeHeight))
    }


    protected update(dt: number): void {
        if(this.isActiveDecreaseHealth) this.handleDecreaseHealth();
    }
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
