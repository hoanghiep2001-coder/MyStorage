import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import * as Interface from "../Const/interface";
import { GameInfo } from '../Const/GameInfo';
import { CarSkin } from './CarSkin';


@ccclass('CarStops')
export class CarStops extends Component {
    @property(Node)
    turnLeftPoint: Node = null;
    @property(Node)
    turnRightPoint: Node = null;
    @property(Node)
    Down_turnleftPoint: Node = null;
    @property(Node)
    donePoint: Node = null;
    @property([Node])
    CarStops: Node[] = [];


    CarStopsState: Interface.CarStopsState[] = [
        { id: 1, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 2, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 3, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 4, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 5, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 6, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 7, state: false, isReady: false, colorID: null, carSkin: null },
        { id: 8, state: false, isReady: false, colorID: null, carSkin: null },
    ];


    public updateStopStates(stopPoint: Interface.CarStopsState, carSkin: CarSkin): void {
        // set stop color ID
        this.CarStopsState[stopPoint.id - 1].colorID = carSkin.CarColorId;

        this.CarStopsState[stopPoint.id - 1].carSkin = carSkin;

        // assign to GameInfo Vars
        GameInfo.carStops = this.CarStopsState;

        // console.log(GameInfo.carStops);
    }


    protected start(): void {

    }


}


