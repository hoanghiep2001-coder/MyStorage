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
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["ropeSound1"] = "ropeSound1";
    SoundTrack["ropeSound2"] = "ropeSound2";
    SoundTrack["completeSound"] = "completeSound";
    SoundTrack["breakRopeSound"] = "breakRopeSound";
    SoundTrack["completeSound2"] = "completeSound2";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isCollideKnot1 = false;
    Constants.isCollideKnot2 = false;
    Constants.knot1Status = false;
    Constants.knot2Status = true;
    Constants.knot3Status = false;
    Constants.knot4Status = false;
    Constants.knot5Status = true;
    Constants.step = 1;
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