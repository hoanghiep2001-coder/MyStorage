
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
    LoseSound = "LoseSound",
    WaterDropSound = "WaterDropSound",
    BoilSound = "BoilSound"
}


export class Constants {

    // state    
    static isToStore: boolean = false

    static isGameStart: boolean  = false
    static isStartCalculate: boolean = false;
    static isRotate: boolean = false;
    static isCanTouch: boolean = true;
    static isShowBtnSubmit: boolean = false;
    static isClickStartBtn: boolean = false;
    static isShowCTA: boolean = false;

    static TubeClicked: cc.Node = null;

    static interactingColorNumber: number = null;

    static isDoneStep1: boolean = false;
    static isDoneStep2: boolean = false;
    static isDoneStep3: boolean = false;
    static isDoneStep4: boolean = false;

    static stepCount: number = 0;
    static numberOfIncreaseFloor: number = 0;
    static colorToIncrease: string = null;

    static step3ClickedFlow: string = null;

    // event    
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
