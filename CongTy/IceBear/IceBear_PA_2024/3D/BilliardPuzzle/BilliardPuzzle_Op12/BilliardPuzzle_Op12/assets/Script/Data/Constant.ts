import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

const Event = {
    touchStart: "touchstart",
    touchMove: "touchmove",
    touchEnd: "touchend",
    touchCancel: "touchcancel",
}


const IronSource = {
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
}


const Responsive = {
    HORIZONTAL_IPX: "horizontal_IPX",
    HORIZONTAL_TABLET: "horizontal_Tablet",
    VERTICAL_IPX: "vertical_IPX",
    VERTICAL_MOBILE: "vertical_Mobile",
}


enum SoundTrack {
    bgSound = "bgSound",
    hitSound = "hitSound",
    collideWallSound = "collideWallSound",
    collideBallSound = "collideBallSound",
    GoalSound = "GoalSound",
    ComboSound = "ComboSound",
    LoseSound = "LoseSound",
    inHoleSound = "inHoleSound",
    AngleSound = "AngleSound",
    woaSound1 = "woaSound1",
    woaSound2  = "woaSound2"
}


export class Constants {

    // state    
    static isPlayGame = false;
    static isPlaySound = false;
    static isRotate = false;
    static toStore = false;
    static isTouching = false;
    static isPlaying = false;
    static isLose: boolean = false;
    static isWin: boolean = false;
    static isPlayFirstTime: boolean  = false;
    static isMainBallStoped: boolean = false;
    static shootingTurn: number = 4;
    static playedCount: number = 0;
    static scoreCount: number = 0;
    static comboCount: number = 0;

    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
