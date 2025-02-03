
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
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
}


enum SoundTrack {
    bgSound = "bgSound",
    MergeSound = "MergeSound",
    ClickSound = "ClickSound",
}


export class Constants {

    // state    
    static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static isCanTouch: boolean = false;
    static isToStore: boolean = true;

    static maggotRemoved: number = 0;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
