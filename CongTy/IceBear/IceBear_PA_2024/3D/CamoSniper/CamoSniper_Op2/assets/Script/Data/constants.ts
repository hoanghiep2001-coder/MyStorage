
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
    GreatSound1 = "GreatSound1",
    GreatSound2 = "GreatSound2",
    GreatSound3 = "GreatSound3",
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
    static isToStore: boolean = false;
    static countScore: number = 0;
    static countShoot: number = 0;


    // event
    static Event: typeof Event = Event;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;

}
