"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["spiderSound"] = "spiderSound";
    SoundTrack["walkSound"] = "walkSound";
    SoundTrack["scareSound"] = "scareSound";
    SoundTrack["IntroDelightSound"] = "IntroDelightSound";
    SoundTrack["hmmSound"] = "hmmSound";
    SoundTrack["whooseSound"] = "whooseSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["DoneStepSound"] = "DoneStepSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["gapRuoiSound"] = "gapRuoiSound";
    SoundTrack["screamHoooSound"] = "screamHoooSound";
    SoundTrack["nhoMun2Sound"] = "nhoMun2Sound";
    SoundTrack["nhoMun1Sound"] = "nhoMun1Sound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isToStore = false;
    Constants.isRemovedFly = false;
    Constants.maggotRemoved = 0;
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