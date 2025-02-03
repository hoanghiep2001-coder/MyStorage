
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
    rope_1Sound = "rope_1Sound",
    rope_2Sound = "rope_2Sound",
    winSound = "winSound",
    breakSound = "breakSound",
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
    static isTouchFirstBtn: boolean = false;
    static isTouchSecondBtn: boolean = false;
    static isTouchThirdBtn: boolean = false;
    static isTouchForthBtn: boolean = false;
    static isTouchFifthBtn: boolean = false;

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
