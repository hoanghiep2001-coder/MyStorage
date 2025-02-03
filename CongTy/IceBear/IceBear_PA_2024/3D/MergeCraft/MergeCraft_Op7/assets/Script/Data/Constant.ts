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
    Dino_AttkSound = "Dino_AttkSound",
    Dino_LoseSound = "Dino_LoseSound",
    Dino_ScreamSound = "Dino_ScreamSound",
    Dino_MergeSound = "Dino_MergeSound",
    Dino_FightSound = "Dino_FightSound",
    Dino_ChooseSound = "Dino_ChooseSound",
    NuggetSound = "NuggetSound",
    BoomSound = "BoomSound"
}


export class Constants {

    // state    
    static isPlayGame = false;
    static isPlaySound = false;
    static isRotate = false;
    static toStore = false;
    static isTouching = false;
    static isCanTouch: boolean = true;
    static isDoneAddDino: boolean = false;
    static isMerged: boolean = false;
    static isDonePA: boolean = false;
    static isDoneMerge1: boolean = false;

    static countClick: number = 0;
    static DinoPrice: number = 100;
    static Money: number = 1000;
    static dinoChoosen: number = null;

    static mergeStatus: boolean[] = [false, false, false, false, false];


    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
