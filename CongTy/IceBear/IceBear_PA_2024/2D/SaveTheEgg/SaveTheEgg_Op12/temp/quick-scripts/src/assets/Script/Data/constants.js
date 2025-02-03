"use strict";
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
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
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["loseSound"] = "loseSound";
    SoundTrack["stingSound"] = "stingSound";
    SoundTrack["explosionSound"] = "explosionSound";
    SoundTrack["beeSound"] = "beeSound";
    SoundTrack["hatchEggSound"] = "hatchEggSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.isToStore = false;
    Constants.currentPosition = null;
    Constants.CharacterPos = null;
    Constants.Char_Point1 = null;
    Constants.Char_Point2 = null;
    Constants.Char_Point3 = null;
    Constants.isHit = false;
    Constants.isWinGame = false;
    Constants.isLoseGame = false;
    Constants.currentLv = 1;
    Constants.currentOption = 14;
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