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
   canhbaoSound = "canhbaoSound",
   gun = "gun",
   pickdo = "pickdo",
   tiem = "tiem",
}


export class Constants {

    // state    
    static isToStore: boolean = true;
    static isRotate: boolean = false;
    static isTouch: boolean = false;
    static isCanTouch: boolean = true;
    
    static isDoneStep1: boolean = false;
    static isHole1Actived: boolean = false;
    static isHole2Actived: boolean = false;
    static isHole3Actived: boolean = false;

    // event
    static Event: typeof Event = Event;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;

}
