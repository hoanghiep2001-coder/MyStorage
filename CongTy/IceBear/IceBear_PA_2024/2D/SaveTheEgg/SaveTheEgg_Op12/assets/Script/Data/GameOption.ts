
import * as Interfaces from "./Interfaces";

const { ccclass, property } = cc._decorator;

const Op12: Interfaces.Op12  = {
    reviveCount: 3,
    showCTA: false,
}

const Op13: Interfaces.Op13  = {
    reviveCount: 3,
    showCTA: false,
}

const Op14: Interfaces.Op14  = {
    reviveCount: 3,
    showCTA: false,
}

const Op16: Interfaces.Op16  = {
    isPointTouchClearFixArea: false,
}


const Op17: Interfaces.Op17  = {
    reviveCount: 2,
    showCTA: false,
    isPassLevel28: false,
}

export class GameOption {

    // state    
    static currentOption: number = 15;

    static Op12: typeof Op12 = Op12;
    static Op13: typeof Op13 = Op13;
    static Op14: typeof Op14 = Op14;
    static Op16: typeof Op16 = Op16;
    static Op17: typeof Op17 = Op17;
}


