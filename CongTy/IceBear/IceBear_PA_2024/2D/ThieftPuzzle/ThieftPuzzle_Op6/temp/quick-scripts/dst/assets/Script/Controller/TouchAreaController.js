
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
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GraphicsController_1 = require("./GraphicsController");
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.HandController = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // node
        _this.HideMask = null;
        _this.Line = null;
        _this.Tutorial = null;
        _this.fence = null;
        _this.fenceLeft = null;
        return _this;
    }
    // state
    TouchAreaController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    TouchAreaController.prototype.onLoad = function () {
        constants_1.Constants.fencePoint = this.fence.getPosition();
        this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        // ironsource
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
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
    TouchAreaController.prototype.touchStart = function (event) {
        // if (Constants.ironSource.isEndGame) {
        //   this.GameController.installHandle();
        // }
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        this.Line.active = false;
        constants_1.Constants.isTouch = true;
        this.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        constants_1.Constants.currentPosition = event.getLocation();
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (constants_1.Constants.isLoseGame || !constants_1.Constants.isCanMove) {
            return;
        }
        Ultils_1.Ultils.TouchArea.checkTouchPoint(this.fence, this.HandController.fakeHand, this.fenceLeft);
        constants_1.Constants.currentPosition = event.getLocation();
        this.HandController.move();
        Ultils_1.Ultils.TouchArea.checkTouchCondition1(this.HandController.node, this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[0], this.HandController.Apple_1_Points[1]);
        // Ultils.TouchArea.checkTouchCondition2(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[1], 
        //   this.HandController.Apple_1_Points[0] 
        // );
        // Ultils.TouchArea.checkTouchCondition3(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[2], 
        //   this.HandController.Apple_1_Points[1] 
        // );
        // Ultils.TouchArea.checkTouchCondition4(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[3], 
        //   this.HandController.Apple_1_Points[2] 
        // );
        // Ultils.TouchArea.checkTouchCondition5(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[0], 
        //   this.HandController.Apple_1_Points[3],
        //   this.GraphicsController.graphicsNodes[4]
        // );
        Ultils_1.Ultils.TouchArea.checkTouchCondition6(this.HandController.node, this.HandController.Apple_1_Points[4], this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[5]);
        Ultils_1.Ultils.TouchArea.checkTouchCondition7(this.HandController.node);
        Ultils_1.Ultils.TouchArea.checkTouchCondition8(this.HandController.node, this.GraphicsController.graphicsNodes[6]);
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.HandController.stop();
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
    TouchAreaController.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(HandController_1.default)
    ], TouchAreaController.prototype, "HandController", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], TouchAreaController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Tutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fence", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fenceLeft", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQTZKQztRQTNKQyxZQUFZO1FBRVosa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUc5QyxPQUFPO1FBRVAsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQXNJNUIsQ0FBQztJQXBJQyxRQUFRO0lBR0UsbUNBQUssR0FBZjtRQUNFLDZEQUE2RDtJQUMvRCxDQUFDO0lBR1Msb0NBQU0sR0FBaEI7UUFDRSxxQkFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QXZCZixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTZKL0I7SUFBRCwwQkFBQztDQTdKRCxBQTZKQyxDQTdKd0MsRUFBRSxDQUFDLFNBQVMsR0E2SnBEO0FBN0pZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVsdGlscyB9IGZyb20gXCIuLi9EYXRhL1VsdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHcmFwaGljc0NvbnRyb2xsZXIgZnJvbSBcIi4vR3JhcGhpY3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCBIYW5kQ29udHJvbGxlciBmcm9tIFwiLi9IYW5kQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEhhbmRDb250cm9sbGVyKVxyXG4gIEhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBub2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIExpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFR1dG9yaWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmZW5jZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZmVuY2VMZWZ0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gc3RhdGVcclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgQ29uc3RhbnRzLmZlbmNlUG9pbnQgPSB0aGlzLmZlbmNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcblxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgLy8gICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuTGluZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuVHV0b3JpYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc0xvc2VHYW1lIHx8ICFDb25zdGFudHMuaXNDYW5Nb3ZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBVbHRpbHMuVG91Y2hBcmVhLmNoZWNrVG91Y2hQb2ludCh0aGlzLmZlbmNlLCB0aGlzLkhhbmRDb250cm9sbGVyLmZha2VIYW5kLCB0aGlzLmZlbmNlTGVmdCk7XHJcbiAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubW92ZSgpO1xyXG5cclxuICAgIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjEoXHJcbiAgICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSxcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXSxcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1swXSxcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXVxyXG4gICAgKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjIoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjMoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMl0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjQoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbM10sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjUoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLFxyXG4gICAgLy8gICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzRdXHJcbiAgICAvLyApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uNihcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLFxyXG4gICAgICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzRdLFxyXG4gICAgICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLFxyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzVdXHJcbiAgICApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uNyhcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlXHJcbiAgICApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uOCh0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUsIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBcclxuICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=