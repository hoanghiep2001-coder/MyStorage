
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
        _this.Overlay = null;
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        if (window.isLoseGame || constants_1.Constants.isLoseLv2) {
            window.changeEggRigidbodyType = false;
            this.isHit = true;
            this.Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            cc.tween(this.Overlay)
                .to(0.5, { opacity: 0 }, { easing: cc.easing.smooth })
                .call(function () { constants_1.Constants.isCanTouch = true; })
                .start();
        }
        constants_1.Constants.isWinGame = false;
        window.isLoseGame = false;
        this.NodesController.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
    };
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        constants_1.Constants.CharacterPos.y = constants_1.Constants.CharacterPos.y + 25;
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
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
    GamePlay.prototype.characterHit = function () {
        var _this = this;
        window.isReplayGame = true;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        if (window.currentLv === 2) {
            this.scheduleOnce(function () {
                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(function () { cc.director.loadScene("Lv2"); })
                    .start();
            }, 2);
        }
        else {
            this.scheduleOnce(function () {
                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(function () { cc.director.loadScene("Lv1_PlayAgain"); })
                    .start();
            }, 2);
        }
    };
    GamePlay.prototype.loseLv2 = function () {
        cc.tween(this.Overlay)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () { cc.director.loadScene("Lv2"); })
            .start();
    };
    GamePlay.prototype.winGame = function () {
        constants_1.Constants.isWinGame = true;
        window.currentLv = 2;
        this.NodesController.Spine_Character.setAnimation(0, "result_win", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
        this.scheduleOnce(function () { cc.director.loadScene("Lv2"); }, 2);
    };
    GamePlay.prototype.unactiveHint = function () {
        this.handleIronSourcePlaySound();
        this.isHint = true;
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        window.stopDrawSound && this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
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
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Overlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0tDO1FBOUpHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFHNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixRQUFRO1FBQ1Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUFtSTVCLENBQUM7SUFoSWEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsaUVBQWlFO0lBQ3JFLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0ksSUFBRyxNQUFNLENBQUMsVUFBVSxJQUFJLHFCQUFTLENBQUMsU0FBUyxF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QUFDO1FBQ3RELE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxRCxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUEzSkQ7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQztxREFDYztJQUV4QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFRdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDTTtJQUs1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBckJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnSzVCO0lBQUQsZUFBQztDQWhLRCxBQWdLQyxDQWhLcUMsRUFBRSxDQUFDLFNBQVMsR0FnS2pEO2tCQWhLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udHJvbGxlciBmcm9tIFwiLi9Ob2Rlc0NvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmlwdFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgZ3JhcGhpYzogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgcGF0aEZpbmRpbmdfR3JpZDogYW55ID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX05vZGVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE92ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFN0YXRlXHJcbiAgICBjdXJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBjdXJyZW50SGludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGVuY2lsOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBjdXJlcm50UG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNIaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwaHlzaWNzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHBoeXNpY3MuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBpZih3aW5kb3cuaXNMb3NlR2FtZSB8fCBDb25zdGFudHMuaXNMb3NlTHYyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk92ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAwfSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWV9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pc1dpbkdhbWUgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNMb3NlR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJhY3RlclBvcyA9IHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgPSBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgKyAyNVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVySGl0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5pc1JlcGxheUdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5zZXRBbmltYXRpb24oMCwgXCJiZWluZ19oaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYxX1BsYXlBZ2FpblwiKX0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxvc2VMdjIoKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5PdmVybGF5KVxyXG4gICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RofSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHdpbkdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzV2luR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmN1cnJlbnRMdiA9IDJcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicmVzdWx0X3dpblwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSwgMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5hY3RpdmVIaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuaXNIaW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNIaXQgJiYgIXRoaXMuaXNIaXQgJiYgdGhpcy5jaGFyYWN0ZXJIaXQoKTtcclxuICAgICAgICB3aW5kb3cuaXNTdGFydERyYXcgJiYgIXRoaXMuaXNIaW50ICYmIHRoaXMudW5hY3RpdmVIaW50KCk7XHJcbiAgICAgICAgd2luZG93LnN0b3BEcmF3U291bmQgJiYgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==