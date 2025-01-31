import { Node, Vec2, Vec3 } from "cc";
import * as Interface from "./interface";

export class GameInfo {

    // Main State
    static isToStore: boolean = false;
    static IsPlaying : boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = false;
    
    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;

    // Game Variables
    static currentTotalCost: number = 0;
    static currentReceive: number = 0;
    static currentChange: number = 0;

    static currentCenGive: number = 0;
    static currentDollarGive: number = 0;
    static currentBankingInput: string = ``;

    static currentFailedClick: number = 0;
    static currentSuccessClick: number = 1;
    
    // NPC state
    static NPCpaidTimes: number = 0;
    static isNPCDoneMove: boolean = false;
    static NPC_DoorStand: Vec3 = new Vec3(-2.092, 0, 2.312);
    static NPC_StandPoints: Interface.NPC_StandPoints[] = [
        {
            position: new Vec3(0.606, 0, 2.945),
            rotate: -20
        },
        {
            position: new Vec3(1.239, 0, 2.982),
            rotate: -30
        },
        {
            position: new Vec3(1.825, 0, 2.982),
            rotate: -40
        },
        {
            position: new Vec3(2.377, 0, 3.269),
            rotate: -55
        },
    ];

    // Items
    static currentItems: number = 1;
    static currentDollarGiveBack: number = 0;
    static lastDollarGiveBack: number = 0;
    static currentCenGiveBack: number = 0;
    static lastCenGiveBack: number = 0;
    static completePayment: boolean = false;

}