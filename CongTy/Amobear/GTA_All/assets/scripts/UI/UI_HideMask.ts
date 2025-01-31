
import { _decorator, Component, log, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UI_HideMask
 * DateTime = Mon Dec 23 2024 17:01:29 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = UI_HideMask.ts
 * FileBasenameNoExtension = UI_HideMask
 * URL = db://assets/scripts/UI/UI_HideMask.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('UI_HideMask')
export class UI_HideMask extends Component {



    protected start(): void {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    private onTouchStart(): void {
        log("Check")
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
