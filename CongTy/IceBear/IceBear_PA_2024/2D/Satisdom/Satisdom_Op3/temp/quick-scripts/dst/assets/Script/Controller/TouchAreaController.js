
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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.Lobsters.forEach(function (lobster) {
            lobster.on(cc.Node.EventType.TOUCH_START, _this.lobsterTouchStart, _this);
            lobster.on(cc.Node.EventType.TOUCH_MOVE, _this.lobsterTouchMove, _this);
            lobster.on(cc.Node.EventType.TOUCH_END, _this.lobsterTouchEnd, _this);
            lobster.on(cc.Node.EventType.TOUCH_CANCEL, _this.lobsterTouchEnd, _this);
        });
        this.NodesContainer.CTA_button.on(cc.Node.EventType.TOUCH_START, function () {
            _this.GameController.installHandle();
        }, this);
        // mtg & applovin
        this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, function () {
            _this.GameController.installHandle();
        }, this);
    };
    TouchAreaController.prototype.lobsterTouchStart = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        // this.handleIronSourcePlaySound();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        constants_1.Constants.isGameStart = true;
        var targetNode = e.currentTarget, parentNode = targetNode.parent, childCount = parentNode.childrenCount, targetNodeScale = targetNode.scale;
        this.NodesContainer.hand.active = false;
        // lấy ra số tương ứng của lobster đang click
        constants_1.Constants.currentLobsterIndex = this.getNumberFromNodeName(targetNode.name);
        // scale up target node
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale + 0.03 }, { easing: cc.easing.elasticOut })
            .start();
        // luôn luôn cho nổi trên bề mặt canvas khi đc chọn
        targetNode.setSiblingIndex(childCount - 1);
    };
    TouchAreaController.prototype.lobsterTouchMove = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        var targetNode = e.currentTarget, touchPos = e.getLocation();
        targetNode.setPosition(this.node.convertToNodeSpaceAR(touchPos));
    };
    TouchAreaController.prototype.lobsterTouchEnd = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        var targetNode = e.currentTarget, targetNodeScale = targetNode.scale, demoLobster = this.NodesContainer.UI
            .getChildByName("Demo")
            .getChildByName("Lobster" + constants_1.Constants.currentLobsterIndex);
        // check collide correct area or not
        this.isCollideCorrectLobsterArea(targetNode)
            ? this.correct(targetNode, targetNodeScale, demoLobster)
            : this.wrong(targetNode, targetNodeScale);
    };
    TouchAreaController.prototype.correct = function (targetNode, targetNodeScale, demoLobster) {
        targetNode.setSiblingIndex(constants_1.Constants.currentLobsterIndex);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.CorrectSound);
        constants_1.Constants.currentCorrectStatus += 1;
        if (constants_1.Constants.lobsterStatus.every(function (status) { return status === true; })) {
            this.GamePlay.showCTA(true);
        }
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale - 0.03, position: demoLobster.position }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.wrong = function (targetNode, targetNodeScale) {
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale - 0.03 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.hideMaskTouch = function () {
        // mtg & applovin
        this.GameController.installHandle();
    };
    TouchAreaController.prototype.getNumberFromNodeName = function (nodeName) {
        var match = nodeName.match(/\d+$/);
        if (match)
            return parseInt(match[0], 10);
        return null;
    };
    TouchAreaController.prototype.isCollideCorrectLobsterArea = function (lobster) {
        var lobsterBdx = lobster.getBoundingBox(), correctAreaBdx = this.NodesContainer.
            CorrectLobsterAreas[constants_1.Constants.currentLobsterIndex - 1].getBoundingBox();
        if (lobsterBdx.intersects(correctAreaBdx)) {
            constants_1.Constants.lobsterStatus[constants_1.Constants.currentLobsterIndex - 1] = true;
            return true;
        }
        else {
            constants_1.Constants.lobsterStatus[constants_1.Constants.currentLobsterIndex - 1] = false;
            return false;
        }
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    TouchAreaController.prototype.update = function (dt) {
        // this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBdUtDO1FBcktDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTZKNUIsQ0FBQztJQTFKVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDMUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFJLENBQUMsQ0FBQztZQUN0RSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsZUFBZSxFQUFF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QkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFHUyxvQ0FBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLDZDQUE2QztJQUNqRCxDQUFDO0lBbEtEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFWZixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQXVLL0I7SUFBRCwwQkFBQztDQXZLRCxBQXVLQyxDQXZLd0MsRUFBRSxDQUFDLFNBQVMsR0F1S3BEO0FBdktZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkxvYnN0ZXJzLmZvckVhY2gobG9ic3RlciA9PiB7XHJcbiAgICAgIGxvYnN0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMubG9ic3RlclRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICBsb2JzdGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubG9ic3RlclRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgIGxvYnN0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmxvYnN0ZXJUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIGxvYnN0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmxvYnN0ZXJUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbG9ic3RlclRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0NhblRvdWNoKSByZXR1cm47XHJcblxyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLlRvdWNoU291bmQpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0dhbWVTdGFydCA9IHRydWU7XHJcblxyXG4gICAgbGV0IHRhcmdldE5vZGU6IGNjLk5vZGUgPSBlLmN1cnJlbnRUYXJnZXQsXHJcbiAgICAgIHBhcmVudE5vZGUgPSB0YXJnZXROb2RlLnBhcmVudCxcclxuICAgICAgY2hpbGRDb3VudCA9IHBhcmVudE5vZGUuY2hpbGRyZW5Db3VudCxcclxuICAgICAgdGFyZ2V0Tm9kZVNjYWxlID0gdGFyZ2V0Tm9kZS5zY2FsZTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhhbmQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gbOG6pXkgcmEgc+G7kSB0xrDGoW5nIOG7qW5nIGPhu6dhIGxvYnN0ZXIgxJFhbmcgY2xpY2tcclxuICAgIENvbnN0YW50cy5jdXJyZW50TG9ic3RlckluZGV4ID0gdGhpcy5nZXROdW1iZXJGcm9tTm9kZU5hbWUodGFyZ2V0Tm9kZS5uYW1lKTtcclxuXHJcbiAgICAvLyBzY2FsZSB1cCB0YXJnZXQgbm9kZVxyXG4gICAgY2MudHdlZW4odGFyZ2V0Tm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogdGFyZ2V0Tm9kZVNjYWxlICsgMC4wMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gbHXDtG4gbHXDtG4gY2hvIG7hu5VpIHRyw6puIGLhu4EgbeG6t3QgY2FudmFzIGtoaSDEkWMgY2jhu41uXHJcbiAgICB0YXJnZXROb2RlLnNldFNpYmxpbmdJbmRleChjaGlsZENvdW50IC0gMSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBsb2JzdGVyVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0YXJnZXROb2RlOiBjYy5Ob2RlID0gZS5jdXJyZW50VGFyZ2V0LFxyXG4gICAgICB0b3VjaFBvczogY2MuVmVjMiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICB0YXJnZXROb2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvcykpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbG9ic3RlclRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIGlmKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0YXJnZXROb2RlOiBjYy5Ob2RlID0gZS5jdXJyZW50VGFyZ2V0LFxyXG4gICAgICB0YXJnZXROb2RlU2NhbGUgPSB0YXJnZXROb2RlLnNjYWxlLFxyXG4gICAgICBkZW1vTG9ic3RlciA9IHRoaXMuTm9kZXNDb250YWluZXIuVUlcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEZW1vXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKGBMb2JzdGVyJHtDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleH1gKTtcclxuXHJcbiAgICAvLyBjaGVjayBjb2xsaWRlIGNvcnJlY3QgYXJlYSBvciBub3RcclxuICAgIHRoaXMuaXNDb2xsaWRlQ29ycmVjdExvYnN0ZXJBcmVhKHRhcmdldE5vZGUpXHJcbiAgICAgID8gdGhpcy5jb3JyZWN0KHRhcmdldE5vZGUsIHRhcmdldE5vZGVTY2FsZSwgZGVtb0xvYnN0ZXIpXHJcbiAgICAgIDogdGhpcy53cm9uZyh0YXJnZXROb2RlLCB0YXJnZXROb2RlU2NhbGUpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNvcnJlY3QodGFyZ2V0Tm9kZTogY2MuTm9kZSwgdGFyZ2V0Tm9kZVNjYWxlOiBudW1iZXIsIGRlbW9Mb2JzdGVyOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICB0YXJnZXROb2RlLnNldFNpYmxpbmdJbmRleChDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleCk7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkNvcnJlY3RTb3VuZCk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRDb3JyZWN0U3RhdHVzICs9IDE7XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5sb2JzdGVyU3RhdHVzLmV2ZXJ5KHN0YXR1cyA9PiBzdGF0dXMgPT09IHRydWUpKSB7XHJcbiAgICAgIHRoaXMuR2FtZVBsYXkuc2hvd0NUQSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYy50d2Vlbih0YXJnZXROb2RlKVxyXG4gICAgICAudG8oMC41LCB7IHNjYWxlOiB0YXJnZXROb2RlU2NhbGUgLSAwLjAzLCBwb3NpdGlvbjogZGVtb0xvYnN0ZXIucG9zaXRpb24gfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgd3JvbmcodGFyZ2V0Tm9kZTogY2MuTm9kZSwgdGFyZ2V0Tm9kZVNjYWxlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNjLnR3ZWVuKHRhcmdldE5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IHRhcmdldE5vZGVTY2FsZSAtIDAuMDMgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZU1hc2tUb3VjaCgpOiB2b2lkIHtcclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldE51bWJlckZyb21Ob2RlTmFtZShub2RlTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGxldCBtYXRjaCA9IG5vZGVOYW1lLm1hdGNoKC9cXGQrJC8pO1xyXG4gICAgaWYgKG1hdGNoKSByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMF0sIDEwKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNDb2xsaWRlQ29ycmVjdExvYnN0ZXJBcmVhKGxvYnN0ZXI6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgIGxldCBsb2JzdGVyQmR4ID0gbG9ic3Rlci5nZXRCb3VuZGluZ0JveCgpLFxyXG4gICAgICBjb3JyZWN0QXJlYUJkeCA9IHRoaXMuTm9kZXNDb250YWluZXIuXHJcbiAgICAgICAgQ29ycmVjdExvYnN0ZXJBcmVhc1tDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleCAtIDFdLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgaWYgKGxvYnN0ZXJCZHguaW50ZXJzZWN0cyhjb3JyZWN0QXJlYUJkeCkpIHtcclxuICAgICAgQ29uc3RhbnRzLmxvYnN0ZXJTdGF0dXNbQ29uc3RhbnRzLmN1cnJlbnRMb2JzdGVySW5kZXggLSAxXSA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIENvbnN0YW50cy5sb2JzdGVyU3RhdHVzW0NvbnN0YW50cy5jdXJyZW50TG9ic3RlckluZGV4IC0gMV0gPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIC8vIHRoaXMuR2FtZVBsYXkuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=