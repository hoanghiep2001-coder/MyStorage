
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    SoundTrack["FaceWashSound"] = "FaceWashSound";
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
    // static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isToStore = false;
    Constants.isDoneStep1 = false;
    Constants.AcneRemoved = 0;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFnQko7QUFoQkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIseUNBQTJCLENBQUE7SUFDM0IscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIsNkNBQStCLENBQUE7SUFDL0IscURBQXVDLENBQUE7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQWhCSSxVQUFVLEtBQVYsVUFBVSxRQWdCZDtBQUdEO0lBQUE7SUErQkEsQ0FBQztJQTdCRyxZQUFZO0lBQ1osdURBQXVEO0lBRWhELGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBSTdCLHFCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRS9CLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQS9CRCxBQStCQyxJQUFBO0FBL0JZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBzcGlkZXJTb3VuZCA9IFwic3BpZGVyU291bmRcIixcclxuICAgIHdhbGtTb3VuZCA9IFwid2Fsa1NvdW5kXCIsXHJcbiAgICBzY2FyZVNvdW5kID0gXCJzY2FyZVNvdW5kXCIsXHJcbiAgICBGYWNlV2FzaFNvdW5kID0gXCJGYWNlV2FzaFNvdW5kXCIsXHJcbiAgICBJbnRyb0RlbGlnaHRTb3VuZCA9IFwiSW50cm9EZWxpZ2h0U291bmRcIixcclxuICAgIGhtbVNvdW5kID0gXCJobW1Tb3VuZFwiLFxyXG4gICAgd2hvb3NlU291bmQgPSBcIndob29zZVNvdW5kXCIsXHJcbiAgICBtb3ZlSXRlbVNvdW5kID0gXCJtb3ZlSXRlbVNvdW5kXCIsXHJcbiAgICBEb25lU3RlcFNvdW5kID0gXCJEb25lU3RlcFNvdW5kXCIsXHJcbiAgICBjcnlTb3VuZCA9IFwiY3J5U291bmRcIixcclxuICAgIGdhcFJ1b2lTb3VuZCA9IFwiZ2FwUnVvaVNvdW5kXCIsXHJcbiAgICBzY3JlYW1Ib29vU291bmQgPSBcInNjcmVhbUhvb29Tb3VuZFwiLFxyXG4gICAgbmhvTXVuMlNvdW5kID0gXCJuaG9NdW4yU291bmRcIixcclxuICAgIG5ob011bjFTb3VuZCA9IFwibmhvTXVuMVNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgLy8gc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc1RvU3RvcmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBBY25lUmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19