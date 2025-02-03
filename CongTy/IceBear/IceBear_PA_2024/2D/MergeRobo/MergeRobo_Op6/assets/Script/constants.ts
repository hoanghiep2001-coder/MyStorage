
const { ccclass, property } = cc._decorator;

enum Event {
    touchStart = "touchstart",
    touchMove = "touchmove",
    touchEnd = "touchend",
    touchCancel = "touchcancel"
}

const IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
}


const Responsive = {
    calculated: 0,
    currentDevice: "",
}


enum SoundTrack {
    introSound = "introSound",
    MergingSound = "MergingSound",
    clickSound = "clickSound",
    mergeSound = "mergeSound",
    tuhuSound = "tuhuSound",
    FusionSound = "FusionSound",
}


export class Constants {

    // state    
    static isClickGameStart: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = false;

    static currentPosition: cc.Vec2 = null;
    static CharacterPos: cc.Vec2 = null;
    static Char_Point1: cc.Vec2 = null;
    static Char_Point2: cc.Vec2 = null;
    static Char_Point3: cc.Vec2 = null;
    static isHit: boolean = false;
    static currentLv: number = 1;
    static isWinGame: boolean = false;
    static isLoseLv2: boolean = false;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;
}


