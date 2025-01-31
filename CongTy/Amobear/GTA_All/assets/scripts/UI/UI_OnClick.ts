import { _decorator, Component, game, log, Node } from 'cc';
import { GameInfo } from '../CONST/GameInfo';
const { ccclass, property } = _decorator;

 
@ccclass('UI_OnClick')
export class UI_OnClick extends Component {


    protected start(): void {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }


    private onTouchStart(e: Event): void {
        log("mouse down");

        if(this.node.name === "btn_onCar") {
            GameInfo.isOnMotobike = true;
        }

        if(this.node.name === "UI_MoveCar" && (GameInfo.currentOption === 8 || GameInfo.currentOption === 9)) {
            GameInfo.GTA_PA_08.isHitBrakeBtn = true;
            GameInfo.GTA_PA_08.isHitBrakeBtnFlag = true;
        }

        if(this.node.name === "UI_DodgeCops" && (GameInfo.currentOption === 8 || GameInfo.currentOption === 9)) {
            GameInfo.GTA_PA_08.isHitDogeCopsBtn = true;
            log("show cinematic")
        }

        if(this.node.name === "UI_GetReward" && GameInfo.currentOption === 9) {
            GameInfo.GTA_PA_09.isHitGetRewardBtn = true;
            log("get reward")
        }
    }


    private onTouchEnd(): void {
        if(this.node.name === "UI_MoveCar" && (GameInfo.currentOption === 8 || GameInfo.currentOption === 9)) {
            log("mouse up");
            GameInfo.GTA_PA_08.isHitBrakeBtn = false;
        }
    }
}

