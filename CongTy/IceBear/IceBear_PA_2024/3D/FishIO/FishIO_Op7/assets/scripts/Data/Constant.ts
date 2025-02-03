import { _decorator, Component, Node } from 'cc';
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
    videoSound = "videoSound",
    eatSound = "eatSound",
    dieSound = "dieSound",
    whooseSound = "whooseSound",
    Skiing_BgSound = "Skiing_BgSound",
    Skiing_EatSound = "Skiing_EatSound",
    Skiing_JumpSound = "Skiing_JumpSound",
    Skiing_ScreamSound = "Skiing_ScreamSound",
}


export class Constants {

    // state    
    static isClickBtnLeft: boolean = false;
    static isClickBtnJump: boolean = false;
    static isOnGround = true;
    static isJumping = false;
    static isCanClick: boolean = true;
    static isCanClickBtnLeft: boolean = true;
    static isPlayGame = false;
    static isReplay = false;
    static forceReplay = false;
    static flagReplay = false;
    static isPlaySound = false;
    static isRotate = false;
    static isCompleteVideo = false;
    static toStore = false;
    static isTouching = false;
    static score = 20;

    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
