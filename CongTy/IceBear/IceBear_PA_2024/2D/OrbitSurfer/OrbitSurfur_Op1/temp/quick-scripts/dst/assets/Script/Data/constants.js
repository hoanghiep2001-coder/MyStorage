
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
    SoundTrack["woaAnimeSound"] = "woaAnimeSound";
    SoundTrack["openBookSound"] = "openBookSound";
    SoundTrack["showItemSound"] = "showItemSound";
    SoundTrack["pickItemSound"] = "pickItemSound";
    SoundTrack["waoGameSound"] = "waoGameSound";
    SoundTrack["swtichItemSound"] = "swtichItemSound";
    SoundTrack["Fx_Bonus1"] = "Fx_Bonus1";
    SoundTrack["Fx_Bonus2"] = "Fx_Bonus2";
    SoundTrack["Fx_Bonus3"] = "Fx_Bonus3";
    SoundTrack["Fx_Bonus4"] = "Fx_Bonus4";
    SoundTrack["Fx_Lose"] = "Fx_Lose";
    SoundTrack["chickFunSound"] = "chickFunSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isStartCalculate = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.isDresUp = false;
    Constants.isShowBtnSubmit = false;
    Constants.isClickStartBtn = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUUsQ0FBQztDQUNyQixDQUFBO0FBR0QsSUFBSyxVQWNKO0FBZEQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7QUFDbkMsQ0FBQyxFQWRJLFVBQVUsS0FBVixVQUFVLFFBY2Q7QUFHRDtJQUFBO0lBeUJBLENBQUM7SUF2QkcsWUFBWTtJQUNMLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixvQkFBVSxHQUFZLElBQUksQ0FBQztJQUMzQixrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUV4QyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0F6QkQsQUF5QkMsSUFBQTtBQXpCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbiAgICBjYWxjdWxhdGVkU2NhbGU6IDAsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgb3BlbkJvb2tTb3VuZCA9IFwib3BlbkJvb2tTb3VuZFwiLFxyXG4gICAgc2hvd0l0ZW1Tb3VuZCA9IFwic2hvd0l0ZW1Tb3VuZFwiLFxyXG4gICAgcGlja0l0ZW1Tb3VuZCA9IFwicGlja0l0ZW1Tb3VuZFwiLFxyXG4gICAgd2FvR2FtZVNvdW5kID0gXCJ3YW9HYW1lU291bmRcIixcclxuICAgIHN3dGljaEl0ZW1Tb3VuZCA9IFwic3d0aWNoSXRlbVNvdW5kXCIsXHJcbiAgICBGeF9Cb251czEgPSBcIkZ4X0JvbnVzMVwiLFxyXG4gICAgRnhfQm9udXMyID0gXCJGeF9Cb251czJcIixcclxuICAgIEZ4X0JvbnVzMyA9IFwiRnhfQm9udXMzXCIsXHJcbiAgICBGeF9Cb251czQgPSBcIkZ4X0JvbnVzNFwiLFxyXG4gICAgRnhfTG9zZSA9IFwiRnhfTG9zZVwiLFxyXG4gICAgY2hpY2tGdW5Tb3VuZCA9IFwiY2hpY2tGdW5Tb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1N0YXJ0Q2FsY3VsYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc0RyZXNVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzU2hvd0J0blN1Ym1pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2xpY2tTdGFydEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=