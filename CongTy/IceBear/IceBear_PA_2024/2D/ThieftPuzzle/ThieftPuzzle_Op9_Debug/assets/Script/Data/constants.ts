
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
    stunSound = "stunSound",
    naniSound = "naniSound"
}


export class Constants {

    // state    
    static startPos: cc.Vec2 = new cc.Vec2(0,0);
    static currentPosition: cc.Vec2 = new cc.Vec2(0,0);
    static currentLocalPosition: cc.Vec2 = new cc.Vec2(0,0);
    static touchPointsPos: cc.Vec2[] = [];


    static isCanMove: boolean = true;
    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanDraw: boolean = true;
    static isLoseGame: boolean = false;
    static isTouchFence: boolean = false;


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
