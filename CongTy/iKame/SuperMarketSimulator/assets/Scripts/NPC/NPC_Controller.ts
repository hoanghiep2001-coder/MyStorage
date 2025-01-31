
import { _decorator, Component, Node } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { NPC_Behavior } from './NPC_Behavior';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NPC_Controller
 * DateTime = Sat Nov 23 2024 12:50:30 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = NPC_Controller.ts
 * FileBasenameNoExtension = NPC_Controller
 * URL = db://assets/Scripts/NPC/NPC_Controller.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('NPC_Controller')
export class NPC_Controller extends Component {

    @property([NPC_Behavior])
    NPCs: NPC_Behavior[] = [];


    protected start(): void {

    }


    protected update(dt: number): void {
        if (GameInfo.completePayment) {
            GameInfo.completePayment = false;
            this.NPCs.forEach(npc => npc.updateStandForNPC());
        }
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
