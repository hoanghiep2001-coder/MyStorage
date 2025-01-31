
import { _decorator, Component, Node, UITransform } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TimeCount
 * DateTime = Mon Dec 30 2024 14:37:45 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = TimeCount.ts
 * FileBasenameNoExtension = TimeCount
 * URL = db://assets/Script/Options/PA_30/Others/TimeCount.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TimeCount')
export class TimeCount extends Component {
    
    @property(Node)
    UI_Time: Node = null;


    isTimeOver: boolean = false;


    protected start(): void {
        
    }


    private deCreaseTime(): void {
        if(this.isTimeOver) return;

        const UItransform = this.UI_Time.getComponent(UITransform);
        UItransform.width -= 0.8;
        
        if(UItransform.width <= 0) {
            this.isTimeOver = true;
            GameInfo.Squid_PA_30.isTimeOver = true;
            this.scheduleOnce(() => this.destroyThis(), 1);
        }
    }


    private destroyThis(): void {
        this.node.active = false;
        this.destroy();
    }


    protected update(dt: number): void {
        if(GameInfo.Squid_PA_30.isStartPlaying) this.deCreaseTime();
        if(GameInfo.Squid_PA_30.isDoneDrawCandy && !this.isTimeOver && this.node.active) this.destroyThis();
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
