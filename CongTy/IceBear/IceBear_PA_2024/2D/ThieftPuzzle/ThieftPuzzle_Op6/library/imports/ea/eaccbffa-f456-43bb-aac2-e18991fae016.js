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
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["stunSound"] = "stunSound";
    SoundTrack["naniSound"] = "naniSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.pointA_Pos = new cc.Vec2(0, 0);
    Constants.newPoint = null;
    Constants.oldPoint = null;
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.beforePosition = new cc.Vec2(0, 0);
    Constants.currentLocalPosition = new cc.Vec2(0, 0);
    Constants.isCanMove = true;
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanDraw = true;
    Constants.isLoseGame = false;
    Constants.isTouchFence = false;
    Constants.isTouchPoint1 = false;
    Constants.isTouchPoint2 = false;
    Constants.isTouchPoint3 = false;
    Constants.isTouchPoint4 = false;
    Constants.isTouchPoint5 = false;
    Constants.isTouchPoint6 = false;
    Constants.isTouchPoint7 = false;
    Constants.isDrawPoint1 = false;
    Constants.isDrawPoint2 = false;
    Constants.isDrawPoint3 = false;
    Constants.isDrawPoint4 = false;
    Constants.isDrawPoint5 = false;
    Constants.isDrawPoint6 = false;
    Constants.isDrawPoint7 = false;
    Constants.point1Pos = null;
    Constants.point2Pos = null;
    Constants.point3Pos = null;
    Constants.point4Pos = null;
    Constants.point5Pos = null;
    Constants.point6Pos = null;
    Constants.point7Pos = null;
    Constants.fencePoint = null;
    Constants.point1Bdb = null;
    Constants.point2Bdb = null;
    Constants.point3Bdb = null;
    Constants.point4Bdb = null;
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