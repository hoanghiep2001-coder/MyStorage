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
    bgSound = "bgSound",
    drawSound = "drawSound",
    winSound = "winSound",
    moveSound = "moveSound",
    fireworksSound = "fireworksSound",
    crySound = "crySound",
    clickSound = "clickSound",
    loseSound = "loseSound",
    stingSound = "stingSound",
    explosionSound = "explosionSound",
    beeSound = "beeSound",
    hatchEggSound = "hatchEggSound"
}


export class Constants {

    // state    
    static isClickGameStart: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = false;
    static isToStore: boolean = false;

    static currentPosition: cc.Vec2 = null;
    static CharacterPos: cc.Vec2 = null;
    static Char_Point1: cc.Vec2 = null;
    static Char_Point2: cc.Vec2 = null;
    static Char_Point3: cc.Vec2 = null;
    static isHit: boolean = false;
    static isWinGame: boolean = false;
    static isLoseGame: boolean = false;
    
    static currentLv: number = 1;
    static currentOption: number = 14;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;
}


