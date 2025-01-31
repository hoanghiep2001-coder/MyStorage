
import { _decorator, Component, easing, log, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MoneyBehavior
 * DateTime = Fri Nov 22 2024 15:46:51 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = MoneyBehavior.ts
 * FileBasenameNoExtension = MoneyBehavior
 * URL = db://assets/Scripts/Money/MoneyBehavior.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MoneyBehavior')
export class MoneyBehavior extends Component {


    protected start(): void {
        this.registerEvent();
        // log("ahihi", this.node.name)
    }


    private registerEvent(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    }


    private bounceAnim(): void {
        let startScaLe = new Vec3(1, 1, 1);
        let bounceScale = new Vec3(startScaLe.x - 0.05, startScaLe.y - 0.05, startScaLe.z - 0.05);

        tween(this.node.parent)
        .to(0.1, {scale: bounceScale}, {easing: easing.smooth})
        .to(0.1, {scale: startScaLe}, {easing: easing.smooth})
        .start();
    }


    private touchStart(): void {
        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.clickSound);

        // if parent's name of btn is "Nums", active input banking. else active cash payment
        if(this.node.parent.name === "Nums") this.handleBankingPayment();
        else this.handleCashPayment();
    }


    private handleBankingPayment(): void {
        // log(GameInfo.currentBankingInput.slice(0, -1))
        if(this.node.name === "del") {
            let newInput = GameInfo.currentBankingInput.slice(0, -1);
            GameInfo.currentBankingInput = newInput;
        }
        else GameInfo.currentBankingInput = GameInfo.currentBankingInput.concat(this.node.name);
    }


    private handleCashPayment(): void {
        this.bounceAnim();

        if(this.node.parent.parent.name === "dollar") {
            GameInfo.lastDollarGiveBack = GameInfo.currentDollarGiveBack
            GameInfo.currentDollarGiveBack += 1;
            GameInfo.currentDollarGive += Number(this.node.name);
        }
        else {
            GameInfo.lastCenGiveBack = GameInfo.currentCenGiveBack
            GameInfo.currentCenGiveBack += 1;
            GameInfo.currentCenGive += Number(this.node.name);
        }

        if(GameInfo.currentCenGive >= 100) {
            GameInfo.currentDollarGive += 1;
            GameInfo.currentCenGive -= 100;
        }
       
        log(GameInfo.currentDollarGive, GameInfo.currentCenGive);
    }


    private touchEnd(): void {
        // GameInfo.moneyUserTouching = Number(this.node.name);

        // log(GameInfo.moneyUserTouching);
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
