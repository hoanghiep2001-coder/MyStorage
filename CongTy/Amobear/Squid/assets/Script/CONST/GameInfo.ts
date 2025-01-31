import { Node, Vec2, Vec3 } from "cc";
import * as Interface from "./InterFaces";


const Squid_PA_30: Interface.Squid_PA_30 = {
    isDetachCandy: false,
    lineRenderPoints: [],
    isDoneDrawCandy: false,
    isStartPlaying: false,
    isCharacterShooted: false,
    isTimeOver: false,
    detachCandySteps: 1,
    isDoneAllStep: false,
}


export class GameInfo {

    // Main State
    static currentOption: number = 30;

    static isToStore: boolean = false;
    static IsPlaying: boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = false;

    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;
    static isRotate: boolean = false;

    // PA option variables
    static Squid_PA_30: typeof Squid_PA_30 = Squid_PA_30;

    // other variables
    static activeVibration: boolean = false;
}