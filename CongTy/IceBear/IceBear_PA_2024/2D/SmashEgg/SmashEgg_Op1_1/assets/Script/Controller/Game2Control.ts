// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { GameController } from "./GameController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(GameController)
    GameController: GameController = null;

    protected start(): void {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }
}
