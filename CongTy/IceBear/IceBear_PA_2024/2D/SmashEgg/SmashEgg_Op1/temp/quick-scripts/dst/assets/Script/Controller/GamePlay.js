
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
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        constants_1.Constants.EggDieCount = 0;
        constants_1.Constants.ironSource.isPlayBgSound = false;
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
        this.handleIronSourcePlaySound();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0tDO1FBbEtHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUF3SS9CLENBQUM7SUFySWEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsaUVBQWlFO0lBQ3JFLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtB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QVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZXNDb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcblxyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGdyYXBoaWM6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX0dyaWQ6IGFueSA9IG51bGw7XHJcbiAgICBwYXRoRmluZGluZ19Ob2RlczogYW55ID0gW107XHJcblxyXG4gICAgLy8gU3RhdGVcclxuICAgIGN1cmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIGN1cnJlbnRIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1cnJlbnRQZW5jaWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIGN1cmVybnRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaXNIaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGFzUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3MgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gcGh5c2ljcy5kZWJ1Z0RyYXdGbGFncyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gIUNvbnN0YW50cy5pc1dpbiAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICBDb25zdGFudHMuRWdnRGllQ291bnQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNXaW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNMaW5lU3RvcCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUdhbWVQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENvbnN0YW50cy5DaGFyYWN0ZXJQb3MgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgLy8gdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5oaW50LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNMb3NlR2FtZUZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIaW50XzJfQW5pbVwiKTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5oaW50LmdldENoaWxkQnlOYW1lKFwiU2hhcGUgMVwiKTtcclxuICAgICAgICAgICAgbGluZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhpbnRfMV9BbmltXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuTm9kZXNDb250cm9sbGVyLmhpbnQuZ2V0Q2hpbGRCeU5hbWUoXCJMaW5lIDFcIik7XHJcbiAgICAgICAgICAgIGxpbmUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5hY3RpdmVIaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNIaW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICAvLyB0aGlzLk5vZGVzQ29udHJvbGxlci5IaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIGZhaWxHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuaGFzUmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzTG9zZUdhbWVGaXJzdFRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50aGF5YmFTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLnRleHRfdHJ5QWdhaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzW2luZGV4XS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGYWlsX0ljb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHdpbkdhbWUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaGFzUmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc1Jlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndpblNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIudGV4dF9lZ2djZWxlbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV8yXCIpO1xyXG4gICAgICAgIH0sIDMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25zdGFudHMuRWdnRGllQ291bnQgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5HYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuaXNMaW5lU3RvcCAmJiBDb25zdGFudHMuRWdnRGllQ291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbEdhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==