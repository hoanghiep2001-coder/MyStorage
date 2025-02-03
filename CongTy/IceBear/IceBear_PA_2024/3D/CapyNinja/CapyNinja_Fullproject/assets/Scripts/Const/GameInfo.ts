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


    // Merge step
    static touchPos: Vec3 = null;

    static mergeCount: number = 0;
    static roboMerged_Level: number = null;
    static bossLevel: number = null;

    static playerStartGameRobo: Node[] = [];
    static enemyStartGameRobo: Node[] = [];

    static UI_MergePoint: Node[] = [];
    static playerRoboLevelArr: Node[] = [];

    static lastPosOfTouchEnd: Vec3 = null;
    static lastPointOfTouchEndRobo: Node = null;
    

    // Fight step
    static isTouchBoss: boolean = false;
    static isReadyToFight: boolean = false;
    static bossPos: Vec3 = null;

}