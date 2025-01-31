
import { _decorator, Component, easing, log, Node, SkeletalAnimation, tween } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NPC_Behavior
 * DateTime = Sat Nov 23 2024 00:06:45 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = NPC_Behavior.ts
 * FileBasenameNoExtension = NPC_Behavior
 * URL = db://assets/Scripts/NPC/NPC_Behavior.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('NPC_Behavior')
export class NPC_Behavior extends Component {

    @property(Node)
    payment: Node = null;

    currentNPC_ID: number = null;
    isPaid: boolean = false;
    isWaitingToGetChange: boolean = false;


    protected start(): void {
        // setup NPC id
        this.currentNPC_ID = Number(this.node.name.split("_")[1]);
        this.nextStand(false);
    }


    public updateStandForNPC(): void {
        // this.currentNPC_ID -= 1;
        GameInfo.currentItems = GameInfo.currentSuccessClick;
        let isDonePayment: boolean = false;
        if (this.currentNPC_ID < GameInfo.currentSuccessClick) isDonePayment = true;
        this.nextStand(isDonePayment);
    }


    public nextStand(isDonePayment: boolean): void {

        // GameInfo.isNPCDoneMove = false;

        // GameInfo.isCanTouch = false;

        this.node.setRotationFromEuler(0, -90, 0);

        this.node.getComponent(SkeletalAnimation).play("Walk");

        if (isDonePayment) {
            tween(this.node)
                .to(1, { position: GameInfo.NPC_DoorStand }, { easing: easing.smooth })
                .call(() => this.node.active = false)
                .start();
        }
        else {
            log("updateId:", this.currentNPC_ID);

            tween(this.node)
                .to(1, { position: GameInfo.NPC_StandPoints[this.currentNPC_ID - GameInfo.currentSuccessClick].position }, { easing: easing.smooth })
                .call(() => {

                    this.node.setRotationFromEuler(0, GameInfo.NPC_StandPoints[this.currentNPC_ID - GameInfo.currentSuccessClick].rotate, 0);

                    GameInfo.isNPCDoneMove = true;

                    GameInfo.isCanTouch = true;

                    this.node.getComponent(SkeletalAnimation).play("Idle");
                })
                .start();
        }
    }


    protected update(dt: number): void {
        // pay money
        if (this.currentNPC_ID === GameInfo.currentSuccessClick && GameInfo.currentItems === 0 && !this.isPaid) {
            this.isPaid = true;
            this.payment.active = true;
            this.node.getComponent(SkeletalAnimation).play("Hand forward");
            this.scheduleOnce(() => this.node.getComponent(SkeletalAnimation).play("Hand forward Idle"), 0.2);
        }

        // waiting to get change
        if (this.isPaid && this.currentNPC_ID === GameInfo.NPCpaidTimes && !this.isWaitingToGetChange) {
            this.isWaitingToGetChange = true;
            this.node.getComponent(SkeletalAnimation).play("Idle");
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
