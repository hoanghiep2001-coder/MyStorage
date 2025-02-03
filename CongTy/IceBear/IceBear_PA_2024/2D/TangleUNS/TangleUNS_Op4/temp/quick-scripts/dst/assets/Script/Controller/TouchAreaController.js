
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        _this.background = null;
        _this.HideMask = null;
        _this.oneTap = null;
        _this.mouseJoint = null;
        // horizontal
        _this.Knots = [];
        _this.Knots_2 = [];
        // @property([cc.Node])
        // Knots_3: cc.Node[] = [];
        _this.Ropes = [];
        _this.motorJoints = [];
        // vertical
        _this.Knots_Vtc = [];
        _this.Knots_2_Vtc = [];
        // @property([cc.Node])
        // Knots_3_Vtc: cc.Node[] = [];
        _this.Ropes_Vtc = [];
        _this.motorJoints_Vtc = [];
        return _this;
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        // onetap -----------------
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.oneTap.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // ---------------------------
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.ropeTouchStart, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_END, this.ropeTouchEnd, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.ropeTouchEnd, this);
        // ironsource
        // this.background.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.ropeTouchStart = function (e) {
        this.GamePlay.hints.forEach(function (hint) { return hint.active = false; });
        this.GamePlay.hints_Vtc.forEach(function (hint) { return hint.active = false; });
        if (constants_1.Constants.step === 2 || !constants_1.Constants.isCollideKnot1) {
            this.GamePlay.hints[1].active = true;
            this.GamePlay.hints_Vtc[1].active = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound1);
        }
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.ropeTouchEnd = function () {
        var _this = this;
        // rope 1
        if ((this.Ropes[0].getBoundingBox().intersects(this.Knots[0].getBoundingBox())
            || this.Ropes_Vtc[0].getBoundingBox().intersects(this.Knots_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot1) {
            constants_1.Constants.isCollideKnot1 = true;
            constants_1.Constants.knot1Status = false;
            constants_1.Constants.knot4Status = false;
            this.motorJoints[0].linearOffset = new cc.Vec2(50, 245);
            this.motorJoints_Vtc[0].linearOffset = new cc.Vec2(43, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[0].destroy();
                _this.motorJoints_Vtc[0].destroy();
            }, 0.5);
            this.HideMask.width = 5000;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
        }
        // --------------------
        // rope 2
        if ((this.Ropes[1].getBoundingBox().intersects(this.Knots_2[0].getBoundingBox())
            || this.Ropes_Vtc[1].getBoundingBox().intersects(this.Knots_2_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot2) {
            constants_1.Constants.isCollideKnot2 = true;
            this.motorJoints[1].linearOffset = new cc.Vec2(115, 245);
            this.motorJoints_Vtc[1].linearOffset = new cc.Vec2(90, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[1].destroy();
                _this.motorJoints[2].destroy();
                _this.motorJoints_Vtc[1].destroy();
                _this.motorJoints_Vtc[2].destroy();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
            }, 0.5);
        }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[1].getBoundingBox()) && !Constants.knot2Status) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[2].getBoundingBox())) {
        //   Constants.knot3Status = true;
        //   this.motorJoints[1].linearOffset = new cc.Vec2(0, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[3].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[4].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-92, 198);
        // }
        // --------------------
        // rope 3
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[0].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(128, 185);
        // }
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[1].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(85, 185);
        // }
        // --------------------
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "oneTap", void 0);
    __decorate([
        property(cc.MouseJoint)
    ], TouchAreaController.prototype, "mouseJoint", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes_Vtc", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints_Vtc", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUE0TEM7UUExTEMsWUFBWTtRQUVaLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLGFBQWE7UUFFYixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFDeEIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUUzQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGlCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUdsQyxXQUFXO1FBRVgsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRS9CLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIscUJBQWUsR0FBb0IsRUFBRSxDQUFDOztRQStJdEMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQWhKVyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUNFLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekYsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2Riw4QkFBOEI7UUFFOUIsOEVBQThFO1FBQzlFLDBFQUEwRTtRQUMxRSw2RUFBNkU7UUFFN0UsYUFBYTtRQUNiLDJGQUEyRjtJQUM3RixDQUFDO0lBR08sNENBQWMsR0FBdEIsVUFBdUIsQ0FBVztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDN0QsSUFBSSxxQkFBUyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBR08sMENBQVksR0FBcEI7UUFBQSxpQkF5RUM7UUF2RUMsU0FBUztRQUNULElBQ0UsQ0FDRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2VBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FDckY7ZUFDRSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFO1lBQzlCLHFCQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUNoQyxxQkFBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDOUIscUJBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtRQUNELHVCQUF1QjtRQUd2QixTQUFTO1FBQ1QsSUFDRSxDQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7ZUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUN2RjtlQUNFLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDOUIscUJBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUU5QixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUVELDhHQUE4RztRQUM5Ryw2REFBNkQ7UUFDN0QsSUFBSTtRQUVKLG9GQUFvRjtRQUNwRixrQ0FBa0M7UUFDbEMsNERBQTREO1FBQzVELElBQUk7UUFFSixvRkFBb0Y7UUFDcEYsOERBQThEO1FBQzlELElBQUk7UUFFSixvRkFBb0Y7UUFDcEYsOERBQThEO1FBQzlELElBQUk7UUFFSix1QkFBdUI7UUFHdkIsU0FBUztRQUNULG9GQUFvRjtRQUNwRiw4REFBOEQ7UUFDOUQsSUFBSTtRQUVKLG9GQUFvRjtRQUNwRiw2REFBNkQ7UUFDN0QsSUFBSTtRQUNKLHVCQUF1QjtJQUN6QixDQUFDO0lBR00sdURBQXlCLEdBQWhDO1FBQ0UsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFHTyx1REFBeUIsR0FBakM7UUFDRSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVsRixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQztJQWpMRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzJEQUNTO0lBSWpDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUNJO0lBSXhCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzREQUNRO0lBS2xDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzREQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dFQUNZO0lBMUMzQixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTRML0I7SUFBRCwwQkFBQztDQTVMRCxBQTRMQyxDQTVMd0MsRUFBRSxDQUFDLFNBQVMsR0E0THBEO0FBNUxZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBvbmVUYXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Nb3VzZUpvaW50KVxyXG4gIG1vdXNlSm9pbnQ6IGNjLk1vdXNlSm9pbnQgPSBudWxsO1xyXG5cclxuICAvLyBob3Jpem9udGFsXHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90czogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90c18yOiBjYy5Ob2RlW10gPSBbXTtcclxuICAvLyBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIC8vIEtub3RzXzM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgUm9wZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTW90b3JKb2ludF0pXHJcbiAgbW90b3JKb2ludHM6IGNjLk1vdG9ySm9pbnRbXSA9IFtdO1xyXG5cclxuXHJcbiAgLy8gdmVydGljYWxcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIEtub3RzX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90c18yX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBLbm90c18zX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBSb3Blc19WdGM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTW90b3JKb2ludF0pXHJcbiAgbW90b3JKb2ludHNfVnRjOiBjYy5Nb3RvckpvaW50W10gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgLy8gb25ldGFwIC0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICB0aGlzLm9uZVRhcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHRoaXMuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMucm9wZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgLy8gdGhpcy5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucm9wZVRvdWNoRW5kLCB0aGlzKTtcclxuICAgIC8vIHRoaXMuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnJvcGVUb3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcm9wZVRvdWNoU3RhcnQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGludHMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5HYW1lUGxheS5oaW50c19WdGMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgaWYgKENvbnN0YW50cy5zdGVwID09PSAyIHx8ICFDb25zdGFudHMuaXNDb2xsaWRlS25vdDEpIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5oaW50c1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLkdhbWVQbGF5LmhpbnRzX1Z0Y1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucm9wZVNvdW5kMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJvcGVUb3VjaEVuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyByb3BlIDFcclxuICAgIGlmIChcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMuUm9wZXNbMF0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgICB8fCB0aGlzLlJvcGVzX1Z0Y1swXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c19WdGNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgKVxyXG4gICAgICAmJiAhQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QxKSB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NvbGxpZGVLbm90MSA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy5rbm90MVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBDb25zdGFudHMua25vdDRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5tb3RvckpvaW50c1swXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig1MCwgMjQ1KTtcclxuICAgICAgdGhpcy5tb3RvckpvaW50c19WdGNbMF0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoNDMsIDE5OCk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzWzBdLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1swXS5kZXN0cm95KCk7XHJcbiAgICAgIH0sIDAuNSlcclxuICAgICAgdGhpcy5IaWRlTWFzay53aWR0aCA9IDUwMDA7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yb3BlU291bmQyKTtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgIC8vIHJvcGUgMlxyXG4gICAgaWYgKFxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5Sb3Blc1sxXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c18yWzBdLmdldEJvdW5kaW5nQm94KCkpXHJcbiAgICAgICAgfHwgdGhpcy5Sb3Blc19WdGNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMl9WdGNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgKVxyXG4gICAgICAmJiAhQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QyKSB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NvbGxpZGVLbm90MiA9IHRydWU7XHJcbiAgICAgIHRoaXMubW90b3JKb2ludHNbMV0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoMTE1LCAyNDUpO1xyXG4gICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1sxXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig5MCwgMTk4KTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubW90b3JKb2ludHNbMV0uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubW90b3JKb2ludHNbMl0uZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1sxXS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5tb3RvckpvaW50c19WdGNbMl0uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yb3BlU291bmQyKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZih0aGlzLlJvcGVzWzFdLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aGlzLktub3RzXzJbMV0uZ2V0Qm91bmRpbmdCb3goKSkgJiYgIUNvbnN0YW50cy5rbm90MlN0YXR1cykge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDQ1LCAxOTgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMlsyXS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICBDb25zdGFudHMua25vdDNTdGF0dXMgPSB0cnVlO1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDAsIDE5OCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYodGhpcy5Sb3Blc1sxXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c18yWzNdLmdldEJvdW5kaW5nQm94KCkpKSB7XHJcbiAgICAvLyAgIHRoaXMubW90b3JKb2ludHNbMV0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoLTQ1LCAxOTgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMls0XS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKC05MiwgMTk4KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAvLyByb3BlIDNcclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMl0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfM1swXS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzJdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDEyOCwgMTg1KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZih0aGlzLlJvcGVzWzJdLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aGlzLktub3RzXzNbMV0uZ2V0Qm91bmRpbmdCb3goKSkpIHtcclxuICAgIC8vICAgdGhpcy5tb3RvckpvaW50c1syXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig4NSwgMTg1KTtcclxuICAgIC8vIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAvLyB9XHJcbn1cclxuIl19