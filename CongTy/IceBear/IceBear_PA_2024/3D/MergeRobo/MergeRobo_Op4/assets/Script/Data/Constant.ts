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
    ExplosionSound = "ExplosionSound",
}


export class Constants {

    // state    
    static isPlayGame = false;
    static isPlaySound = false;
    static isRotate = false;
    static toStore = true;
    static isTouching = false;
    static isDoneMergeStep1: boolean = false;
    static isDoneMergeStep2: boolean = false;
    static isDoneStep1: boolean = false;
    static isDoneStep2: boolean = false;
    static isStartStep2: boolean = false;
    static isCharacterCollideBoos: boolean = false;
    static isCharacter_2CollideBoos: boolean = false;
    static isCanTouch: boolean = true;
    static isFightStep1: boolean = false;
    static isFightStep2: boolean = false;
    static isFailStep1: boolean = false;
    static isFailStep2: boolean = false;
    static isMergeStep1States: boolean[] = [false, false, false, false, false, false, false, false];
    static isMergeStep2States: boolean[] = [false, false, false, false, false, false];

    static step: number = 1;
    static targetPos: Vec3 = null;

    static point: Node = null;
    static points_1: Node[] = null;
    static points_2: Node[] = null;
    static dino_lines: Node[] = null;
    static dino_lines_2: Node[] = null;


    static unitsStep1InitPos: Vec3[] = null;
    static unitsStep2InitPos: Vec3[] = null;
    static dinosStep1InitPos: Vec3[] = null;
    static dinosStep2InitPos: Vec3[] = null;


    // event
    static Event = Event;


    // soundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource = IronSource;


    // Responsive
    static Responsive = Responsive;
}
