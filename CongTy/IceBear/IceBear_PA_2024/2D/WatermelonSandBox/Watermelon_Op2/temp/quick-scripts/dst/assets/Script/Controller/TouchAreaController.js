
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
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        // this.initVarialbes();
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Step1_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step1_btn_KimTiem.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step2_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showCTA, this);
        this.NodeContainer.CTA_btnDownload.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.registerEventStep2 = function () {
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
    };
    TouchAreaController.prototype.btnActiveTouchStart = function () {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
        !constants_1.Constants.isDoneStep1 && this.GamePlay.handleStep1();
    };
    TouchAreaController.prototype.WeaponTouchStart = function (e) {
        this.NodeContainer.Hand.active = false;
        var node = e.target;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        console.log(node.name);
        switch (node.name) {
            case "Gun1":
                cc.tween(node)
                    .to(0.5, { scale: 0.28 })
                    .start();
                break;
            case "kimtiem":
                cc.tween(node)
                    .to(0.5, { scale: 0.6 }).start();
                break;
            case "Gun2":
                cc.tween(node)
                    .to(0.5, { scale: 0.18 }).start();
                break;
            default:
                break;
        }
    };
    TouchAreaController.prototype.WeaponTouchMove = function (e) {
        var node = e.target;
        var pos = this.node.convertToNodeSpaceAR(e.touch.getLocation());
        node.setPosition(pos.x, pos.y - 40);
    };
    TouchAreaController.prototype.WeaponTouchEnd = function (e) {
        !this.AudioManager.pickdo.isPlaying && this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        var node = e.target;
        var result = this.GamePlay.setInHole(node);
        if (!result)
            this.GamePlay.setInHoleWithTouch(node);
        constants_1.Constants.isHole1Actived && constants_1.Constants.isHole2Actived && constants_1.Constants.isHole3Actived && this.GamePlay.showBtnActive();
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQTZIQztRQTVIQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUE4RzNCLENBQUM7SUEzR1csb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlHLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBR00sZ0RBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QUFDO0lBQ3BILENBQUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzsyREFDUztJQUU5QjtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzhEQUNZO0lBRXBDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBWGYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0E2SC9CO0lBQUQsMEJBQUM7Q0E3SEQsQUE2SEMsQ0E3SHdDLEVBQUUsQ0FBQyxTQUFTLEdBNkhwRDtBQTdIWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGluZUFuaW1zIH0gZnJvbSBcIi4uL0RhdGEvQW5pbXNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IElyb25Tb3VyY2UgZnJvbSBcIi4vSXJvblNvdXJjZVwiO1xyXG5pbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi9Ob2RlQ29udGFuaWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLmluaXRWYXJpYWxiZXMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9CdG5fQWN0aXZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0bkFjdGl2ZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2J0bl9LaW1UaWVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0bkFjdGl2ZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9CdG5fQWN0aXZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVQbGF5LnNob3dDVEEsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfYnRuRG93bmxvYWQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZWdpc3RlckV2ZW50U3RlcDIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5XZWFwb25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuV2VhcG9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5XZWFwb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuV2VhcG9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLldlYXBvblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5XZWFwb25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLldlYXBvblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5XZWFwb25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuV2VhcG9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLldlYXBvblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuV2VhcG9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLldlYXBvblRvdWNoRW5kLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhpZGVNYXNrVG91Y2hTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBidG5BY3RpdmVUb3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAhQ29uc3RhbnRzLmlzRG9uZVN0ZXAxICYmIHRoaXMuR2FtZVBsYXkuaGFuZGxlU3RlcDEoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIFdlYXBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tkbyk7XHJcbiAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUpO1xyXG5cclxuXHJcbiAgICBzd2l0Y2ggKG5vZGUubmFtZSkge1xyXG4gICAgICBjYXNlIFwiR3VuMVwiOlxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjI4IH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImtpbXRpZW1cIjpcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC42IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJHdW4yXCI6XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMTggfSkuc3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBXZWFwb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICBub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSAtIDQwKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIFdlYXBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgICF0aGlzLkF1ZGlvTWFuYWdlci5waWNrZG8uaXNQbGF5aW5nICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5waWNrZG8pO1xyXG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLkdhbWVQbGF5LnNldEluSG9sZShub2RlKTtcclxuICAgIGlmICghcmVzdWx0KSB0aGlzLkdhbWVQbGF5LnNldEluSG9sZVdpdGhUb3VjaChub2RlKTtcclxuICAgIENvbnN0YW50cy5pc0hvbGUxQWN0aXZlZCAmJiBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgJiYgQ29uc3RhbnRzLmlzSG9sZTNBY3RpdmVkICYmIHRoaXMuR2FtZVBsYXkuc2hvd0J0bkFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19