
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
// import { SpineAnims } from "../Data/Anims";
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
        _this.Btn_1 = null;
        _this.Btn_2 = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        // this.NodeContainer.CTA.active = false;
        // this.NodeContainer.Btn_1.active = false;
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        // this.NodeContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.registerNewEvent = function () {
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        // mtg & applovin
        // Constants.isToStore && this.GameController.installHandle();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        constants_1.Constants.isToStore && this.GameController.installHandle();
        this.NodeContainer.Hand.active = false;
        this.NodeContainer.Hint_Circle.active = false;
        if (!constants_1.Constants.isCanTouch)
            return;
        var pos = e.touch.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        if (constants_1.Constants.isDoneStep1) {
            this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.FaceWashSound);
            this.isTouch = true;
        }
        this.moveTools(posConverted, pos);
        // this.NodeContainer.Hand.active = false;
        // this.GamePlay.hand.getComponent(cc.Animation).stop();
        // this.GamePlay.hand.opacity = 0;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        this.moveTools(posConverted, pos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.FaceWashSound);
        constants_1.Constants.isDoneStep1
            && this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Action", false);
    };
    TouchAreaController.prototype.moveTools = function (posConverted, pos) {
        if (!constants_1.Constants.isDoneStep1) {
            this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
            this.NodeContainer.Flow1_ToolHead.setPosition(posConverted.x + 37, posConverted.y + 70);
            this.GamePlay.checkCollideAcne();
            // this.NodeContainer.Tool.setPosition(posConverted.x - 45, posConverted.y - 40);
        }
        else {
            this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
            this.NodeContainer.Flow2_ToolHead.setPosition(posConverted.x - 37, posConverted.y - 40);
            this.NodeContainer.Flow2_spineTool.setPosition(posConverted.x - 40, posConverted.y - 30);
        }
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
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_1", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUE0SUM7UUEzSUMsWUFBWTtRQUVaLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDOztJQXlIM0IsQ0FBQztJQXRIVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FB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O3NEQUNJO0lBaEJYLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBNEkvQjtJQUFELDBCQUFDO0NBNUlELEFBNElDLENBNUl3QyxFQUFFLENBQUMsU0FBUyxHQTRJcEQ7QUE1SVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU3BpbmVBbmltcyB9IGZyb20gXCIuLi9EYXRhL0FuaW1zXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQnRuXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJ0bl8yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gc3RhdGVcclxuICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5Ob2RlQ29udGFpbmVyLkJ0bl8xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhpZGVNYXNrVG91Y2hTdGFydCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9CdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJOZXdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgPj0gMSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZW5hYmxlVG91Y2goKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc1RvU3RvcmUgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zID0gZS50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIGlmKENvbnN0YW50cy5pc0RvbmVTdGVwMSkge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcbiAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMubW92ZVRvb2xzKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuXHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuR2FtZVBsYXkuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5tb3ZlVG9vbHMocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lU3RlcDFcclxuICAgICYmIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVRvb2xzKHBvc0NvbnZlcnRlZDogY2MuVmVjMiwgcG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNEb25lU3RlcDEpIHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54LCBwb3NDb252ZXJ0ZWQueSk7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sSGVhZC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCArIDM3LCBwb3NDb252ZXJ0ZWQueSArIDcwKTtcclxuXHJcbiAgICAgIHRoaXMuR2FtZVBsYXkuY2hlY2tDb2xsaWRlQWNuZSgpO1xyXG4gICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVG9vbC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDQ1LCBwb3NDb252ZXJ0ZWQueSAtIDQwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54LCBwb3NDb252ZXJ0ZWQueSk7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sSGVhZC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDM3LCBwb3NDb252ZXJ0ZWQueSAtIDQwKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX3NwaW5lVG9vbC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDQwLCBwb3NDb252ZXJ0ZWQueSAtIDMwKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=