
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBQTtJQW1FQSxDQUFDO0lBakVHLFlBQVk7SUFDTCxvQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIseUJBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLHdCQUFjLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyw4QkFBb0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2pELG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRzlCLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBRS9CLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBRTNCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBRTFCLGNBQUksR0FBVyxDQUFDLENBQUM7SUFHeEIsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBbkVELEFBbUVDLElBQUE7QUFuRVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWQ6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIGRyYXdTb3VuZCA9IFwiZHJhd1NvdW5kXCIsXHJcbiAgICBzdHVuU291bmQgPSBcInN0dW5Tb3VuZFwiLFxyXG4gICAgbmFuaVNvdW5kID0gXCJuYW5pU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgcG9pbnRBX1BvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcbiAgICBzdGF0aWMgbmV3UG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIG9sZFBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLDApO1xyXG4gICAgc3RhdGljIGJlZm9yZVBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwwKTtcclxuICAgIHN0YXRpYyBjdXJyZW50TG9jYWxQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcblxyXG5cclxuICAgIHN0YXRpYyBpc0Nhbk1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuRHJhdzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNMb3NlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hGZW5jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQ2OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M1BvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDVQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50NlBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ3UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBmZW5jZVBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxQmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJCZGI6IGNjLlJlY3QgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M0JkYjogY2MuUmVjdCA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0QmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc3RlcDogbnVtYmVyID0gMTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==