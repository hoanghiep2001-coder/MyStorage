import { Node, Vec2, Vec3 } from "cc";

export class GameInfo {

    static currentOption: number = 12;

    // Main State
    static isToStore: boolean = false;
    static IsPlaying : boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = true;
    
    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;

    
    static touchPos: Vec3 = null;
    

}