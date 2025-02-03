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


const GameData = {
    isDoneStep1: false,
    roboTouchingNumber: null,
    touchPointCount: 0,
}


const Responsive = {
    HORIZONTAL_IPX: "horizontal_IPX",
    HORIZONTAL_TABLET: "horizontal_Tablet",
    VERTICAL_IPX: "vertical_IPX",
    VERTICAL_MOBILE: "vertical_Mobile",
}


enum SoundTrack {
    bgSound = "bgSound",
    MergeSound= "MergeSound",
    succesSound = "succesSound",
    chooseSound = "chooseSound",
    Dino_AttkSound = "Dino_AttkSound",
    DieSound = "DieSound"
}


export class Constants {

    // state    
    static isRotate = false;
    static toStore = true;
    static isTouching = false;
    static isCanTouch: boolean = true;
    static isDoneStep1: boolean = false;
    static isFailStep1: boolean = false;
    static isFailStep2: boolean = false
    static isDoneStep2: boolean = false;
    static isCharacterCollideBoos: boolean = false;
    static isFightStep1: boolean = false;
    static isDonePA: boolean = false


    // GameData
    static GameData: typeof GameData = GameData;


    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
