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
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isToStore = false;
    Constants.isDoneFlow2 = false;
    Constants.isGameStart = false;
    Constants.isStartCalculate = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.isDresUp = false;
    Constants.isShowBtnSubmit = false;
    Constants.isClickStartBtn = false;
    Constants.currentLobsterIndex = null;
    Constants.currentCorrectStatus = 0;
    Constants.lobsterStatus = [false, true, true, false, false, true, false, true, false];
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