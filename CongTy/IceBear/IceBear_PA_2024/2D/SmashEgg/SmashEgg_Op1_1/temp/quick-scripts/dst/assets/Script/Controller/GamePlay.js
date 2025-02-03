
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        _this.hasResult = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        // !Constants.isWin && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        constants_1.Constants.EggDieCount = 0;
        window.isWin = false;
        window.isLineStop = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        // Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        // this.registerEvent();
        var hand = this.NodesController.hint.getChildByName("hand");
        if (constants_1.Constants.isLoseGameFirstTime) {
            hand.getComponent(cc.Animation).play("Hint_2_Anim");
            var line = this.NodesController.hint.getChildByName("Shape 1");
            line.opacity = 255;
        }
        else {
            hand.getComponent(cc.Animation).play("Hint_1_Anim");
            var line = this.NodesController.hint.getChildByName("Line 1");
            line.opacity = 255;
        }
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        // this.handleIronSourcePlaySound();
        // this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.failGame = function () {
        if (this.hasResult)
            return;
        console.log("fail");
        constants_1.Constants.isLoseGameFirstTime = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.thaybaSound);
        this.hasResult = true;
        this.NodesController.text_tryAgain.getComponent(cc.Animation).play();
        for (var index = 0; index < this.NodesController.eggs.length; index++) {
            if (this.NodesController.eggs[index].active) {
                var node = this.NodesController.eggs[index];
                node.getChildByName("Fail_Icon").active = true;
            }
        }
        this.scheduleOnce(function () {
            cc.director.loadScene("game");
        }, 1.5);
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        if (this.hasResult)
            return;
        console.log("win");
        this.hasResult = true;
        constants_1.Constants.isWin = true;
        window.isWin = true;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            _this.NodesController.text_eggcelent.getComponent(cc.Animation).play();
        }, 1.5);
        this.scheduleOnce(function () {
            cc.director.loadScene("game_2");
        }, 3);
    };
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.EggDieCount === 3) {
            this.winGame();
        }
        if (window.isLineStop && constants_1.Constants.EggDieCount < 3) {
            this.failGame();
        }
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUtDO1FBbktHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUF5SS9CLENBQUM7SUF0SWEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsaUVBQWlFO0lBQ3JFLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtB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NUI7SUFBRCxlQUFDO0NBcktELEFBcUtDLENBcktxQyxFQUFFLENBQUMsU0FBUyxHQXFLakQ7a0JBcktvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250cm9sbGVyIGZyb20gXCIuL05vZGVzQ29udHJvbGxlclwiO1xyXG4vLyBpbXBvcnQgKiBhcyBQRiBmcm9tIFwicGF0aGZpbmRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gU2NyaXB0XHJcbiAgICBAcHJvcGVydHkoTm9kZXNDb250cm9sbGVyKVxyXG4gICAgTm9kZXNDb250cm9sbGVyOiBOb2Rlc0NvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG5cclxuXHJcbiAgICAvLyBOb2RlXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBncmFwaGljOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBwYXRoRmluZGluZ19HcmlkOiBhbnkgPSBudWxsO1xyXG4gICAgcGF0aEZpbmRpbmdfTm9kZXM6IGFueSA9IFtdO1xyXG5cclxuICAgIC8vIFN0YXRlXHJcbiAgICBjdXJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBjdXJyZW50SGludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGVuY2lsOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBjdXJlcm50UG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlzSGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0hpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhhc1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwaHlzaWNzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHBoeXNpY3MuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEEuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICFDb25zdGFudHMuaXNXaW4gJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5FZ2dEaWVDb3VudCA9IDA7XHJcbiAgICAgICAgd2luZG93LmlzV2luID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmlzTGluZVN0b3AgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBDb25zdGFudHMuQ2hhcmFjdGVyUG9zID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuU3BpbmVfQ2hhcmFjdGVyLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgIGxldCBoYW5kID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuaGludC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzTG9zZUdhbWVGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGludF8yX0FuaW1cIik7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuaGludC5nZXRDaGlsZEJ5TmFtZShcIlNoYXBlIDFcIik7XHJcbiAgICAgICAgICAgIGxpbmUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIaW50XzFfQW5pbVwiKTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5oaW50LmdldENoaWxkQnlOYW1lKFwiTGluZSAxXCIpO1xyXG4gICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVuYWN0aXZlSGludCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSGludCA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBmYWlsR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmhhc1Jlc3VsdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIik7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pc0xvc2VHYW1lRmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sudGhheWJhU291bmQpO1xyXG4gICAgICAgIHRoaXMuaGFzUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci50ZXh0X3RyeUFnYWluLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuZWdncy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5Ob2Rlc0NvbnRyb2xsZXIuZWdnc1tpbmRleF0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuZWdnc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiRmFpbF9JY29uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB3aW5HYW1lKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZih0aGlzLmhhc1Jlc3VsdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIndpblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmlzV2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLnRleHRfZWdnY2VsZW50LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9LCAxLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVfMlwiKTtcclxuICAgICAgICB9LCAzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLkVnZ0RpZUNvdW50ID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luR2FtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmlzTGluZVN0b3AgJiYgQ29uc3RhbnRzLkVnZ0RpZUNvdW50IDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWxHYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=