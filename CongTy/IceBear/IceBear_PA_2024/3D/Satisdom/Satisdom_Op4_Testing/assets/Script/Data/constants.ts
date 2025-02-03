
import { _decorator, Color, Component, EventTouch, log, Node } from 'cc';

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
    CompleteSound = "CompleteSound",
    WaterDropSound = "WaterDropSound"
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
    static isCanTouch: boolean = true;
    static isFillUp2Color: boolean = false;

    static TubeClicked: Node = null;
    static interactingColorNumber: number = null;

    static transparentColor: Color = new Color(255, 255, 255, 0);


    // event
    static Event: typeof Event = Event;


    // ironSource
    static ironSource: typeof IronSource = IronSource;


    // Responsive
    static Responsive: typeof Responsive = Responsive;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;

}
