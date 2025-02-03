
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUUsQ0FBQztDQUNyQixDQUFBO0FBR0QsSUFBSyxVQVFKO0FBUkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsdUNBQXlCLENBQUE7SUFDekIsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7SUFDN0IscUNBQXVCLENBQUE7SUFDdkIsK0NBQWlDLENBQUE7SUFDakMscUNBQXVCLENBQUE7QUFDM0IsQ0FBQyxFQVJJLFVBQVUsS0FBVixVQUFVLFFBUWQ7QUFHRDtJQUFBO0lBMkNBLENBQUM7SUF6Q0csWUFBWTtJQUNMLG1CQUFTLEdBQVksS0FBSyxDQUFBO0lBRTFCLHFCQUFXLEdBQWEsS0FBSyxDQUFBO0lBQzdCLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixvQkFBVSxHQUFZLElBQUksQ0FBQztJQUMzQix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyxtQkFBUyxHQUFZLEtBQUssQ0FBQztJQUUzQixxQkFBVyxHQUFZLElBQUksQ0FBQztJQUU1QixnQ0FBc0IsR0FBVyxJQUFJLENBQUM7SUFFdEMscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFFN0IsbUJBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsK0JBQXFCLEdBQVcsQ0FBQyxDQUFDO0lBQ2xDLHlCQUFlLEdBQVcsSUFBSSxDQUFDO0lBRS9CLDBCQUFnQixHQUFXLElBQUksQ0FBQztJQUV2QyxZQUFZO0lBQ0wsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtBQTNDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbiAgICBjYWxjdWxhdGVkU2NhbGU6IDAsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgVG91Y2hTb3VuZCA9IFwiVG91Y2hTb3VuZFwiLFxyXG4gICAgd2luU291bmQgPSBcIndpblNvdW5kXCIsXHJcbiAgICBDb3JyZWN0U291bmQgPSBcIkNvcnJlY3RTb3VuZFwiLFxyXG4gICAgTG9zZVNvdW5kID0gXCJMb3NlU291bmRcIixcclxuICAgIFdhdGVyRHJvcFNvdW5kID0gXCJXYXRlckRyb3BTb3VuZFwiLFxyXG4gICAgQm9pbFNvdW5kID0gXCJCb2lsU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBzdGF0aWMgaXNHYW1lU3RhcnQ6IGJvb2xlYW4gID0gZmFsc2VcclxuICAgIHN0YXRpYyBpc1N0YXJ0Q2FsY3VsYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc1Nob3dCdG5TdWJtaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NsaWNrU3RhcnRCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1Nob3dDVEE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgVHViZUNsaWNrZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpbnRlcmFjdGluZ0NvbG9yTnVtYmVyOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpc0RvbmVTdGVwMTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzRG9uZVN0ZXAyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVTdGVwNDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBzdGVwQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgbnVtYmVyT2ZJbmNyZWFzZUZsb29yOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGNvbG9yVG9JbmNyZWFzZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc3RlcDNDbGlja2VkRmxvdzogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBldmVudCAgICBcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==