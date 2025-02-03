
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
        this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouch, this);
        this.NodesContainer.Lobsters.forEach(function (lobster) {
            lobster.on(cc.Node.EventType.TOUCH_START, _this.lobsterTouchStart, _this);
            lobster.on(cc.Node.EventType.TOUCH_MOVE, _this.lobsterTouchMove, _this);
            lobster.on(cc.Node.EventType.TOUCH_END, _this.lobsterTouchEnd, _this);
            lobster.on(cc.Node.EventType.TOUCH_CANCEL, _this.lobsterTouchEnd, _this);
        });
        this.NodesContainer.CTA_button.on(cc.Node.EventType.TOUCH_START, function () {
            _this.GameController.installHandle();
        }, this);
    };
    TouchAreaController.prototype.lobsterTouchStart = function (e) {
        if (constants_1.Constants.isToStore)
            this.GameController.installHandle();
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
        var _this = this;
        targetNode.setSiblingIndex(constants_1.Constants.currentLobsterIndex);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.CorrectSound);
        constants_1.Constants.currentCorrectStatus += 1;
        if (constants_1.Constants.lobsterStatus.every(function (status) { return status === true; })) {
            this.GamePlay.doneFlow();
            this.scheduleOnce(function () {
                _this.GamePlay.showNextFlow(2);
            }, 1.5);
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
        if (constants_1.Constants.isToStore)
            this.GameController.installHandle();
    };
    TouchAreaController.prototype.getNumberFromNodeName = function (nodeName) {
        var match = nodeName.match(/\d+$/);
        if (match)
            return parseInt(match[0], 10);
        return null;
    };
    TouchAreaController.prototype.isCollideCorrectLobsterArea = function (lobster) {
        var lobsterBdx = lobster.getBoundingBox(), correctArea = this.NodesContainer.CorrectLobsterAreas[constants_1.Constants.currentLobsterIndex - 1], correctAreaBdx = correctArea.getBoundingBox();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBMktDO1FBektDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQWlLNUIsQ0FBQztJQTlKVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDMUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtB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SSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDbkMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFHUyxvQ0FBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3pCLDZDQUE2QztJQUMvQyxDQUFDO0lBdEtEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFWZixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTJLL0I7SUFBRCwwQkFBQztDQTNLRCxBQTJLQyxDQTNLd0MsRUFBRSxDQUFDLFNBQVMsR0EyS3BEO0FBM0tZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhpZGVNYXNrVG91Y2gsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuTG9ic3RlcnMuZm9yRWFjaChsb2JzdGVyID0+IHtcclxuICAgICAgbG9ic3Rlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5sb2JzdGVyVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgIGxvYnN0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5sb2JzdGVyVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgbG9ic3Rlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMubG9ic3RlclRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgbG9ic3Rlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMubG9ic3RlclRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbG9ic3RlclRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG5cclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuXHJcbiAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVG91Y2hTb3VuZCk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzR2FtZVN0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgdGFyZ2V0Tm9kZTogY2MuTm9kZSA9IGUuY3VycmVudFRhcmdldCxcclxuICAgICAgcGFyZW50Tm9kZTogY2MuTm9kZSA9IHRhcmdldE5vZGUucGFyZW50LFxyXG4gICAgICBjaGlsZENvdW50OiBudW1iZXIgPSBwYXJlbnROb2RlLmNoaWxkcmVuQ291bnQsXHJcbiAgICAgIHRhcmdldE5vZGVTY2FsZTogbnVtYmVyID0gdGFyZ2V0Tm9kZS5zY2FsZTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhhbmQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gbOG6pXkgcmEgc+G7kSB0xrDGoW5nIOG7qW5nIGPhu6dhIGxvYnN0ZXIgxJFhbmcgY2xpY2tcclxuICAgIENvbnN0YW50cy5jdXJyZW50TG9ic3RlckluZGV4ID0gdGhpcy5nZXROdW1iZXJGcm9tTm9kZU5hbWUodGFyZ2V0Tm9kZS5uYW1lKTtcclxuXHJcbiAgICAvLyBzY2FsZSB1cCB0YXJnZXQgbm9kZVxyXG4gICAgY2MudHdlZW4odGFyZ2V0Tm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogdGFyZ2V0Tm9kZVNjYWxlICsgMC4wMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gbHXDtG4gbHXDtG4gY2hvIG7hu5VpIHRyw6puIGLhu4EgbeG6t3QgY2FudmFzIGtoaSDEkWMgY2jhu41uXHJcbiAgICB0YXJnZXROb2RlLnNldFNpYmxpbmdJbmRleChjaGlsZENvdW50IC0gMSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBsb2JzdGVyVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGFyZ2V0Tm9kZTogY2MuTm9kZSA9IGUuY3VycmVudFRhcmdldCxcclxuICAgICAgdG91Y2hQb3M6IGNjLlZlYzIgPSBlLmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgdGFyZ2V0Tm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hQb3MpKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGxvYnN0ZXJUb3VjaEVuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XHJcbiAgICBpZiAoIUNvbnN0YW50cy5pc0NhblRvdWNoKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHRhcmdldE5vZGU6IGNjLk5vZGUgPSBlLmN1cnJlbnRUYXJnZXQsXHJcbiAgICAgIHRhcmdldE5vZGVTY2FsZSA9IHRhcmdldE5vZGUuc2NhbGUsXHJcbiAgICAgIGRlbW9Mb2JzdGVyID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkRlbW9cIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoYExvYnN0ZXIke0NvbnN0YW50cy5jdXJyZW50TG9ic3RlckluZGV4fWApO1xyXG5cclxuICAgIC8vIGNoZWNrIGNvbGxpZGUgY29ycmVjdCBhcmVhIG9yIG5vdFxyXG4gICAgdGhpcy5pc0NvbGxpZGVDb3JyZWN0TG9ic3RlckFyZWEodGFyZ2V0Tm9kZSlcclxuICAgICAgPyB0aGlzLmNvcnJlY3QodGFyZ2V0Tm9kZSwgdGFyZ2V0Tm9kZVNjYWxlLCBkZW1vTG9ic3RlcilcclxuICAgICAgOiB0aGlzLndyb25nKHRhcmdldE5vZGUsIHRhcmdldE5vZGVTY2FsZSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY29ycmVjdCh0YXJnZXROb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlU2NhbGU6IG51bWJlciwgZGVtb0xvYnN0ZXI6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIHRhcmdldE5vZGUuc2V0U2libGluZ0luZGV4KENvbnN0YW50cy5jdXJyZW50TG9ic3RlckluZGV4KTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQ29ycmVjdFNvdW5kKTtcclxuXHJcbiAgICBDb25zdGFudHMuY3VycmVudENvcnJlY3RTdGF0dXMgKz0gMTtcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmxvYnN0ZXJTdGF0dXMuZXZlcnkoc3RhdHVzID0+IHN0YXR1cyA9PT0gdHJ1ZSkpIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5kb25lRmxvdygpO1xyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuc2hvd05leHRGbG93KDIpO1xyXG4gICAgICB9LCAxLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNjLnR3ZWVuKHRhcmdldE5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IHRhcmdldE5vZGVTY2FsZSAtIDAuMDMsIHBvc2l0aW9uOiBkZW1vTG9ic3Rlci5wb3NpdGlvbiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB3cm9uZyh0YXJnZXROb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlU2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY2MudHdlZW4odGFyZ2V0Tm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogdGFyZ2V0Tm9kZVNjYWxlIC0gMC4wMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoKCk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldE51bWJlckZyb21Ob2RlTmFtZShub2RlTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGxldCBtYXRjaCA9IG5vZGVOYW1lLm1hdGNoKC9cXGQrJC8pO1xyXG4gICAgaWYgKG1hdGNoKSByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMF0sIDEwKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNDb2xsaWRlQ29ycmVjdExvYnN0ZXJBcmVhKGxvYnN0ZXI6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgIGxldCBsb2JzdGVyQmR4ID0gbG9ic3Rlci5nZXRCb3VuZGluZ0JveCgpLFxyXG4gICAgICBjb3JyZWN0QXJlYSA9IHRoaXMuTm9kZXNDb250YWluZXIuQ29ycmVjdExvYnN0ZXJBcmVhc1tDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleCAtIDFdLFxyXG4gICAgICBjb3JyZWN0QXJlYUJkeCA9IGNvcnJlY3RBcmVhLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgaWYgKGxvYnN0ZXJCZHguaW50ZXJzZWN0cyhjb3JyZWN0QXJlYUJkeCkpIHtcclxuICAgICAgICBDb25zdGFudHMubG9ic3RlclN0YXR1c1tDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleCAtIDFdID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBDb25zdGFudHMubG9ic3RlclN0YXR1c1tDb25zdGFudHMuY3VycmVudExvYnN0ZXJJbmRleCAtIDFdID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==