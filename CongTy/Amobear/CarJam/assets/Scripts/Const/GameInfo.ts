import { Node, Vec2, Vec3 } from "cc";
import * as Interface from "./interface";

export class GameInfo {

    // Main State
    static currentOption: number = 6;

    static isToStore: boolean = true;
    static IsPlaying: boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = true;

    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;
    static isRotate: boolean = false;

    // Game Variables
    static queueLabelCalPosY: number = 0;
    static queueLabelCalPosX: number = 0;

    static currentQueue: number = null;
    static currentCustomers: Node[] = [];
    static customerQueue: Interface.CustomerQueue[] = [
        {
            id: 1,
            position: new Vec3(-10.43, 0.432, -10.182),
            isReady: false,
            rotate: 180
        },
        {
            id: 2,
            position: new Vec3(-10.43, 0.432, -11.232),
            isReady: false,
            rotate: 180
        },
        {
            id: 3,
            position: new Vec3(-10.43, 0.432, -12.248),
            isReady: false,
            rotate: 180
        },
        {
            id: 4,
            position: new Vec3(-10.711, 0.432, -13.537),
            isReady: false,
            rotate: 120
        },
        {
            id: 5,
            position: new Vec3(-9.528, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 6,
            position: new Vec3(-8.357, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 7,
            position: new Vec3(-7.281, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 8,
            position: new Vec3(-6.175, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 9,
            position: new Vec3(-5.005, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 10,
            position: new Vec3(-3.928, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 11,
            position: new Vec3(-2.878, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 12,
            position: new Vec3(-1.706, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 13,
            position: new Vec3(-0.63, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 14,
            position: new Vec3(0.476, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 15,
            position: new Vec3(1.647, 0.432, -13.68),
            isReady: false,
            rotate: 90
        },
        {
            id: 16,
            position: new Vec3(2.723, 0.432, -13.68),
            isReady: false,
            rotate: 90
        }
    ];

    static carStops: Interface.CarStopsState[] = [];


    // other variables
    static activeVibration: boolean = false;
}