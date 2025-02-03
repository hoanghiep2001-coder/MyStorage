"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
    calculatedScale: 0,
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["TouchSound"] = "TouchSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["CorrectSound"] = "CorrectSound";
    SoundTrack["LoseSound"] = "LoseSound";
    SoundTrack["WaterDropSound"] = "WaterDropSound";
    SoundTrack["BoilSound"] = "BoilSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isToStore = false;
    Constants.isGameStart = false;
    Constants.isStartCalculate = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.isShowBtnSubmit = false;
    Constants.isClickStartBtn = false;
    Constants.isShowCTA = false;
    Constants.TubeClicked = null;
    Constants.interactingColorNumber = null;
    Constants.isDoneStep1 = false;
    Constants.isDoneStep2 = false;
    Constants.isDoneStep3 = false;
    Constants.isDoneStep4 = false;
    Constants.stepCount = 0;
    Constants.numberOfIncreaseFloor = 0;
    Constants.colorToIncrease = null;
    Constants.step3ClickedFlow = null;
    // event    
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

cc._RF.pop();