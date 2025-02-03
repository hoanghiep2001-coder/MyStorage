const { ccclass, property } = cc._decorator;


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
    spiderSound = "spiderSound",
    walkSound = "walkSound",
    scareSound = "scareSound",
    FaceWashSound = "FaceWashSound",
    IntroDelightSound = "IntroDelightSound",
    hmmSound = "hmmSound",
    whooseSound = "whooseSound",
    moveItemSound = "moveItemSound",
    DoneStepSound = "DoneStepSound",
    crySound = "crySound",
    gapRuoiSound = "gapRuoiSound",
    screamHoooSound = "screamHoooSound",
    nhoMun2Sound = "nhoMun2Sound",
    nhoMun1Sound = "nhoMun1Sound"
}


export class Constants {

    // state    
    // static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);

    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = true;
    static isToStore: boolean = false;

    static isDoneStep1: boolean = false;



    static AcneRemoved: number = 0;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
