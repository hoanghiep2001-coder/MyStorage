
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
        _this.Btn_1 = null;
        _this.Btn_2 = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.NodeContainer.CTA.active = false;
        this.NodeContainer.Btn_1.active = false;
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.Btn_1.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showIntro, this);
        this.NodeContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        // this.NodeContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
        if (!constants_1.Constants.isCanTouch)
            return;
        this.NodeContainer.Hand.active = false;
        this.NodeContainer.Delight_EyeAlert.active = false;
        // this.GamePlay.hand.getComponent(cc.Animation).stop();
        // this.GamePlay.hand.opacity = 0;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        this.moveTools(posConverted, pos);
        this.GamePlay.checkCollideFly();
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        // this.AudioManager.stopSound(Constants.SoundTrack.toothPaste2Sound);
    };
    TouchAreaController.prototype.moveTools = function (posConverted, pos) {
        this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
        this.NodeContainer.ToolHeadArea.setPosition(posConverted.x - 45, posConverted.y - 40);
        this.NodeContainer.Tool.setPosition(posConverted.x - 45, posConverted.y - 40);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQXVHQztRQXRHQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsUUFBUTtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBb0YzQixDQUFDO0lBakZXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FB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SSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQWxHRDtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzJEQUNTO0lBRTlCO1FBREMsUUFBUSxDQUFDLHVCQUFhLENBQUM7OERBQ1k7SUFFcEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNJO0lBaEJYLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBdUcvQjtJQUFELDBCQUFDO0NBdkdELEFBdUdDLENBdkd3QyxFQUFFLENBQUMsU0FBUyxHQXVHcEQ7QUF2R1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BpbmVBbmltcyB9IGZyb20gXCIuLi9EYXRhL0FuaW1zXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQnRuXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJ0bl8yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gc3RhdGVcclxuICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CdG5fMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVG9vbEFyZWEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CdG5fMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lUGxheS5zaG93SW50cm8sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuQ1RBX292ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgPj0gMSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZW5hYmxlVG91Y2goKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBpcm9uc291cmNlXHJcbiAgICAgICAgdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuRGVsaWdodF9FeWVBbGVydC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuR2FtZVBsYXkuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5tb3ZlVG9vbHMocG9zQ29udmVydGVkLCBwb3MpO1xyXG5cclxuICAgIHRoaXMuR2FtZVBsYXkuY2hlY2tDb2xsaWRlRmx5KCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgbGV0IHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50b290aFBhc3RlMlNvdW5kKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVUb29scyhwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54LCBwb3NDb252ZXJ0ZWQueSk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVG9vbEhlYWRBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54IC0gNDUsIHBvc0NvbnZlcnRlZC55IC0gNDApO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2wuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLnggLSA0NSwgcG9zQ29udmVydGVkLnkgLSA0MCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=