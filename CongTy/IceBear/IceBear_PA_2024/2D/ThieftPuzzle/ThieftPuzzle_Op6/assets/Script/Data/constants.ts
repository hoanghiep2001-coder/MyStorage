
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
    static pointA_Pos: cc.Vec2 = new cc.Vec2(0,0);
    static newPoint: cc.Vec2 = null;
    static oldPoint: cc.Vec2 = null;
    static currentPosition: cc.Vec2 = new cc.Vec2(0,0);
    static beforePosition: cc.Vec2 = new cc.Vec2(0,0);
    static currentLocalPosition: cc.Vec2 = new cc.Vec2(0,0);


    static isCanMove: boolean = true;
    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanDraw: boolean = true;
    static isLoseGame: boolean = false;
    static isTouchFence: boolean = false;


    static isTouchPoint1: boolean = false;
    static isTouchPoint2: boolean = false;
    static isTouchPoint3: boolean = false;
    static isTouchPoint4: boolean = false;
    static isTouchPoint5: boolean = false;
    static isTouchPoint6: boolean = false;
    static isTouchPoint7: boolean = false;

    static isDrawPoint1: boolean = false;
    static isDrawPoint2: boolean = false;
    static isDrawPoint3: boolean = false;
    static isDrawPoint4: boolean = false;
    static isDrawPoint5: boolean = false;
    static isDrawPoint6: boolean = false;
    static isDrawPoint7: boolean = false;

    static point1Pos: cc.Vec2 = null;
    static point2Pos: cc.Vec2 = null;
    static point3Pos: cc.Vec2 = null;
    static point4Pos: cc.Vec2 = null;
    static point5Pos: cc.Vec2 = null;
    static point6Pos: cc.Vec2 = null;
    static point7Pos: cc.Vec2 = null;
    static fencePoint: cc.Vec2 = null;

    static point1Bdb: cc.Rect = null;
    static point2Bdb: cc.Rect = null;
    static point3Bdb: cc.Rect = null;
    static point4Bdb: cc.Rect = null;

    static step: number = 1;


    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
