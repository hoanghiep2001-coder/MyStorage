
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
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
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
var Responsive_1 = require("../Plugin/Responsive");
var GameController_1 = require("./GameController");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        _this.Responsive = null;
        _this.dollPrecent = 0;
        _this.opponentPrecent = 0;
        _this.tweenStates = [];
        _this.isShowCTA = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        // this.activeTweenTextTap();
        cc.tween(this.NodesContainer.CTA_button)
            .repeatForever(cc.tween(this.NodesContainer.CTA_button)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.countingTime = function () {
        if (this.isShowCTA)
            return;
        var nodeTimeChild = this.NodesContainer.time.children[0];
        if (nodeTimeChild.scaleX <= 0 && constants_1.Constants.isCanTouch) {
            this.showCTA(false);
            return;
        }
        nodeTimeChild.scaleX -= 0.0008;
    };
    GamePlay.prototype.showCTA = function (isWin) {
        this.isShowCTA = true;
        constants_1.Constants.isCanTouch = false;
        this.NodesContainer.CTA.active = true;
        if (isWin) {
            this.NodesContainer.CTA_button_tryAgain.active = false;
            this.NodesContainer.FX_Star.resetSystem();
            this.NodesContainer.FX_Confetti.resetSystem();
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
        }
        else {
            this.NodesContainer.CTA_button_Next.active = false;
            // this.NodesContainer.FX_Star.resetSystem();
            // this.NodesContainer.FX_Confetti.resetSystem();
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
        }
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
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
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isGameStart && this.countingTime();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(Responsive_1.default)
    ], GamePlay.prototype, "Responsive", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUhDO1FBOUdDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGlCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBbUc3QixDQUFDO0lBaEdXLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCw2QkFBNkI7UUFFN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUN2QyxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUNuQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVB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QWhCLFVBQWlCLEVBQVU7UUFDekIscUJBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUE1R0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztnREFDUztJQVRYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpSDVCO0lBQUQsZUFBQztDQWpIRCxBQWlIQyxDQWpIcUMsRUFBRSxDQUFDLFNBQVMsR0FpSGpEO2tCQWpIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gXCIuLi9QbHVnaW4vUmVzcG9uc2l2ZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFJlc3BvbnNpdmUpXHJcbiAgUmVzcG9uc2l2ZTogUmVzcG9uc2l2ZSA9IG51bGw7XHJcblxyXG4gIGRvbGxQcmVjZW50OiBudW1iZXIgPSAwO1xyXG4gIG9wcG9uZW50UHJlY2VudDogbnVtYmVyID0gMDtcclxuICB0d2VlblN0YXRlczogY2MuVHdlZW5bXSA9IFtdO1xyXG4gIGlzU2hvd0NUQTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgLy8gdGhpcy5hY3RpdmVUd2VlblRleHRUYXAoKTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idXR0b24pXHJcbiAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idXR0b24pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY291bnRpbmdUaW1lKCk6IHZvaWQge1xyXG4gICAgaWYodGhpcy5pc1Nob3dDVEEpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbm9kZVRpbWVDaGlsZCA9IHRoaXMuTm9kZXNDb250YWluZXIudGltZS5jaGlsZHJlblswXTtcclxuICAgIGlmKG5vZGVUaW1lQ2hpbGQuc2NhbGVYIDw9IDAgJiYgQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHtcclxuICAgICAgdGhpcy5zaG93Q1RBKGZhbHNlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGVUaW1lQ2hpbGQuc2NhbGVYIC09IDAuMDAwODtcclxuICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93Q1RBKGlzV2luOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuaXNTaG93Q1RBID0gdHJ1ZTtcclxuXHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2VcclxuXHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICBpZihpc1dpbikge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbl90cnlBZ2Fpbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GWF9TdGFyLnJlc2V0U3lzdGVtKCk7XHJcbiAgXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GWF9Db25mZXR0aS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZCk7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idXR0b25fTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GWF9TdGFyLnJlc2V0U3lzdGVtKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GWF9Db25mZXR0aS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Mb3NlU291bmQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0dhbWVTdGFydCAmJiB0aGlzLmNvdW50aW5nVGltZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19