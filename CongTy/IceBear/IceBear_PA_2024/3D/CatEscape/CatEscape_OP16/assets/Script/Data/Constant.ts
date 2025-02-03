import { _decorator, Component, Node, Tween, TweenAction, Vec3} from 'cc';
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
    catAngrySound = "catAngrySound",
    electricSound = "electricSound",
    electric2Sound = "electric2Sound",
    winSound = "winSound",
    loseSound = "loseSound",
    eatSound = "eatSound",
    clockSound = "clockSound"
}


export class Constants {

    // state    
    static localPos: Vec3 = null;
    static bossAction: any = null;
    static countingTime: number = 1

    static isCatLive: boolean = true;
    static isWinGame: boolean = false;
    static isEatFood: boolean = false;
    static isCatched: boolean = false;
    static laser: boolean = false;
    static wallLaser: boolean = true;
    static isTouch: boolean = false;
    static isRotate: boolean = false;
    static isRing: boolean = false;
    static isCollideDoor: boolean = false;

    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
