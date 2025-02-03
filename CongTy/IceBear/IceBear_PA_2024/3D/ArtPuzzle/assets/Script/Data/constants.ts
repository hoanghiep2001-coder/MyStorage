import { _decorator, log, Animation, Component, gfx, Node, Camera, tween, Vec2, Vec3, director, SkeletalAnimation, Rect, UITransform, math, Sprite, Material, macro, InstanceMaterialType, misc } from 'cc';


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


enum SoundTrack {
    bgSound = "bgSound",
    clickSound = "clickSound",
    matchSound = "matchSound",
    NextStepSound = "NextStepSound",
    WrongSound = "WrongSound",
}


enum Responsive {
    HORIZONTAL_IPX = "horizontal_IPX",
    HORIZONTAL_TABLET = "horizontal_Tablet",
    VERTICAL_IPX = "vertical_IPX",
    VERTICAL_MOBILE = "vertical_Mobile",
}


export class Constants {

    // state    
    static isRotate: boolean = false;
    static isCanClick: boolean = false;
    static isToStore: boolean = false;
    static isTouching: boolean = false;

    static currentDragNode: Node = null;
    static sameArea: Node = null;
    static blendedNode: Node = null;
    static targetNode: Node = null;

    static isDissolveFirstTime: boolean = false;
    static isDissolveOut: boolean = false;
    static isDissolveIn: boolean = false;
    static dissolvedItemNumber: number = 0;
    static currentDissolveOutPercent: number = 0;
    static currentDissolveInPercent: number = 1;

    // event
    static Event: typeof Event = Event;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;

}
