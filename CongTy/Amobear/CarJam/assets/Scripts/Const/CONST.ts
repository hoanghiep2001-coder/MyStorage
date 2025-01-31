import { Node } from "cc";

enum SoundTrack {
    bgSound = "bgSound",
    clickSound = "clickSound",
    carExit = "carExit",
    carMoveToPlace = "carMoveToPlace",
    Happy = "Happy",
    Impact = "Impact",
    LoadCustomer = "LoadCustomer",
    unlockHiddenCarSound = "unlockHiddenCarSound"
}


export class CONST {


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;
}