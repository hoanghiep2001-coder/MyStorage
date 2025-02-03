
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFlSjtBQWZELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHlDQUEyQixDQUFBO0lBQzNCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0lBQ3pCLHFEQUF1QyxDQUFBO0lBQ3ZDLG1DQUFxQixDQUFBO0lBQ3JCLHlDQUEyQixDQUFBO0lBQzNCLDZDQUErQixDQUFBO0lBQy9CLDZDQUErQixDQUFBO0lBQy9CLG1DQUFxQixDQUFBO0lBQ3JCLDJDQUE2QixDQUFBO0lBQzdCLGlEQUFtQyxDQUFBO0lBQ25DLDJDQUE2QixDQUFBO0lBQzdCLDJDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFmSSxVQUFVLEtBQVYsVUFBVSxRQWVkO0FBR0Q7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLFlBQVk7SUFDTCx5QkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0Msa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsb0JBQVUsR0FBWSxJQUFJLENBQUM7SUFDM0IsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0Isc0JBQVksR0FBWSxLQUFLLENBQUM7SUFFOUIsdUJBQWEsR0FBVyxDQUFDLENBQUM7SUFFakMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBNUJELEFBNEJDLElBQUE7QUE1QlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIHNwaWRlclNvdW5kID0gXCJzcGlkZXJTb3VuZFwiLFxyXG4gICAgd2Fsa1NvdW5kID0gXCJ3YWxrU291bmRcIixcclxuICAgIHNjYXJlU291bmQgPSBcInNjYXJlU291bmRcIixcclxuICAgIEludHJvRGVsaWdodFNvdW5kID0gXCJJbnRyb0RlbGlnaHRTb3VuZFwiLFxyXG4gICAgaG1tU291bmQgPSBcImhtbVNvdW5kXCIsXHJcbiAgICB3aG9vc2VTb3VuZCA9IFwid2hvb3NlU291bmRcIixcclxuICAgIG1vdmVJdGVtU291bmQgPSBcIm1vdmVJdGVtU291bmRcIixcclxuICAgIERvbmVTdGVwU291bmQgPSBcIkRvbmVTdGVwU291bmRcIixcclxuICAgIGNyeVNvdW5kID0gXCJjcnlTb3VuZFwiLFxyXG4gICAgZ2FwUnVvaVNvdW5kID0gXCJnYXBSdW9pU291bmRcIixcclxuICAgIHNjcmVhbUhvb29Tb3VuZCA9IFwic2NyZWFtSG9vb1NvdW5kXCIsXHJcbiAgICBuaG9NdW4yU291bmQgPSBcIm5ob011bjJTb3VuZFwiLFxyXG4gICAgbmhvTXVuMVNvdW5kID0gXCJuaG9NdW4xU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzVG9TdG9yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUmVtb3ZlZEZseTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBtYWdnb3RSZW1vdmVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=