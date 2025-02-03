
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
    ropeSound1 = "ropeSound1",
    ropeSound2 = "ropeSound2",
    completeSound = "completeSound",
    breakRopeSound = "breakRopeSound",
    completeSound2 = "completeSound2",
}


export class Constants {

    // state    
    static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static isCollideKnot1: boolean = false;
    static isCollideKnot2: boolean = false;

    static knot1Status: boolean = false;
    static knot2Status: boolean = true;
    static knot3Status: boolean = false;
    static knot4Status: boolean = false;
    static knot5Status: boolean = true;
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
