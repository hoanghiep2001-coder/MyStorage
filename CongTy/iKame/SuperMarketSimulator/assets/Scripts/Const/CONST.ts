import { Node } from "cc";

enum SoundTrack {
    bgSound = "bgSound",
    clickSound = "clickSound",
    paySound = "paySound",
    placeSound = "placeSound",
    paidSound = "paidSound",
    winSound = "winSound",
    loseSound = "loseSound",
}


export class CONST {

    // state    
    static Robo_base_Level: number = 1;
    static Robo_boss_Level: number = 10;

    static RoboSpeed: number = 10;
    static RoboBaseAttack: number = 150;
    static RoboBaseHP: number = 600;


    // SoundTrack
    static SoundTrack: typeof SoundTrack = SoundTrack;
}