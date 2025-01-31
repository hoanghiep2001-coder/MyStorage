import * as Interfaces from "./interfaces";


const GTA_PA_08: Interfaces.GTA_PA_08 = {
    isRidingMoto: false,
    isHitBrakeBtn: false,
    isHitBrakeBtnFlag: false,
    isTouchCheckPointFlag: false,
    isHitDogeCopsBtn: false,
}

const GTA_PA_09: Interfaces.GTA_PA_09 = {
    isHitGetRewardBtn: false,
    isCharacterArrivedReWard: false,
}

const GTA_PA_10: Interfaces.GTA_PA_10 = {
    currentEnemyKilled: 0,
    isShowInstallPopup: false,
}

const GTA_PA_11: Interfaces.GTA_PA_11 = {
    currentEnemyKilled: 0,
    isShowInstallPopup: false,
    isDoneRotateCamera: false,
    isShowHealthBar: false,
    isCharacterDead: false,
}


export class GameInfo {

    // PA option
    static currentOption: number = 11;


    // GTA PA state
    static GTA_PA_08: Interfaces.GTA_PA_08 = GTA_PA_08;
    static GTA_PA_09: Interfaces.GTA_PA_09 = GTA_PA_09;
    static GTA_PA_10: Interfaces.GTA_PA_10 = GTA_PA_10;
    static GTA_PA_11: Interfaces.GTA_PA_11 = GTA_PA_11;


    // Game variables
    static isCanTouch: boolean = true;
    static isTouching: boolean = false;

    static isOnMotobike: boolean = false;


    // plugin
    static isRotate: boolean = false;
}