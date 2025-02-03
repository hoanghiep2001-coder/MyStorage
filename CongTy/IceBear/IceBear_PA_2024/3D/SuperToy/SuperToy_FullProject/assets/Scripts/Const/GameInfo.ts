import { Node, Vec2, Vec3 } from "cc";

export class GameInfo {

    static currentOption: number = 6;

    // Main State
    static isToStore: boolean = true;
    static IsPlaying : boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = true;
    
    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;

    static doneCount: number = 0;

}