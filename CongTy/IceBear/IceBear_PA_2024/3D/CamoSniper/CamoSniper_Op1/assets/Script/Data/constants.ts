
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
    k98Sound = "k98Sound",
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
    static isCanClick: boolean = true;
    static isFirstClick: boolean = false;
    static isSecondClick: boolean = false;
    static isThirdClick: boolean = false;
    static isToStore: boolean = true;

    static resultState: number = null;
    static bgSoundState: number = null;
    static step: number = null;
    static percentage: number = 0;


    // event
    static Event: typeof Event = Event;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;

}
