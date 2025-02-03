
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
    calculatedScale: 0,
}


enum SoundTrack {
    bgSound = "bgSound",
    TouchSound = "TouchSound",
    winSound = "winSound",
    CorrectSound = "CorrectSound",
    LoseSound = "LoseSound"
}


export class Constants {

    // state    
    static isGameStart: boolean  = false
    static isStartCalculate: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = true;
    static isDresUp: boolean = false;
    static isShowBtnSubmit: boolean = false;
    static isClickStartBtn: boolean = false;

    static currentLobsterIndex: number = null;
    static currentCorrectStatus: number = 0;

    static lobsterStatus: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
