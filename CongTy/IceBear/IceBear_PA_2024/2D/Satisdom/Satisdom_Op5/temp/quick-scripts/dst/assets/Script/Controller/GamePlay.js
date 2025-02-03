
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
            this.showCTA(false, true);
            return;
        }
        nodeTimeChild.scaleX -= 0.0008;
    };
    GamePlay.prototype.doneFlow = function () {
        this.NodesContainer.FX_Star.resetSystem();
        this.NodesContainer.FX_Confetti.resetSystem();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
    };
    GamePlay.prototype.showCTA = function (isWin, isShow) {
        this.isShowCTA = true;
        constants_1.Constants.isCanTouch = false;
        this.NodesContainer.CTA.active = true;
        if (isShow) {
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
        }
    };
    GamePlay.prototype.showNextFlow = function (flow) {
        var _this = this;
        this.NodesContainer.FX_Star.stopSystem();
        this.NodesContainer.FX_Confetti.stopSystem();
        if (flow === 2) {
            cc.tween(this.NodesContainer.Plate)
                .to(0.5, { opacity: 0 })
                .start();
            cc.tween(this.NodesContainer.DragArea)
                .to(0.5, { opacity: 0 })
                .start();
            this.NodesContainer.Flow2.active = true;
            cc.tween(this.NodesContainer.Flow2)
                .to(1.5, { opacity: 255 })
                .start();
        }
        else {
            constants_1.Constants.isCanTouch = false;
            cc.tween(this.NodesContainer.Flow2)
                .to(0.5, { opacity: 0 })
                .start();
            this.NodesContainer.NextFlow.active = true;
            cc.tween(this.NodesContainer.NextFlow)
                .to(1.5, { opacity: 255 })
                .call(function () {
                constants_1.Constants.isToStore = true;
                _this.NodesContainer.hand.active = true;
            })
                .start();
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
        // Constants.isGameStart && this.countingTime();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMEtDO1FBdktDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGlCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBNEo3QixDQUFDO0lBekpXLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCw2QkFBNkI7UUFFN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUNyQyxhQUFhLENBQ1osRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUNyQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVB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QUVsRixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQztJQUdTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsZ0RBQWdEO0lBQ2xELENBQUM7SUFyS0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztnREFDUztJQVRYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwSzVCO0lBQUQsZUFBQztDQTFLRCxBQTBLQyxDQTFLcUMsRUFBRSxDQUFDLFNBQVMsR0EwS2pEO2tCQTFLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gXCIuLi9QbHVnaW4vUmVzcG9uc2l2ZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFJlc3BvbnNpdmUpXHJcbiAgUmVzcG9uc2l2ZTogUmVzcG9uc2l2ZSA9IG51bGw7XHJcblxyXG4gIGRvbGxQcmVjZW50OiBudW1iZXIgPSAwO1xyXG4gIG9wcG9uZW50UHJlY2VudDogbnVtYmVyID0gMDtcclxuICB0d2VlblN0YXRlczogY2MuVHdlZW5bXSA9IFtdO1xyXG4gIGlzU2hvd0NUQTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgLy8gdGhpcy5hY3RpdmVUd2VlblRleHRUYXAoKTtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idXR0b24pXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbilcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY291bnRpbmdUaW1lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93Q1RBKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG5vZGVUaW1lQ2hpbGQgPSB0aGlzLk5vZGVzQ29udGFpbmVyLnRpbWUuY2hpbGRyZW5bMF07XHJcbiAgICBpZiAobm9kZVRpbWVDaGlsZC5zY2FsZVggPD0gMCAmJiBDb25zdGFudHMuaXNDYW5Ub3VjaCkge1xyXG4gICAgICB0aGlzLnNob3dDVEEoZmFsc2UsIHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZVRpbWVDaGlsZC5zY2FsZVggLT0gMC4wMDA4O1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBkb25lRmxvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfU3Rhci5yZXNldFN5c3RlbSgpO1xyXG4gIFxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GWF9Db25mZXR0aS5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNob3dDVEEoaXNXaW46IGJvb2xlYW4sIGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc1Nob3dDVEEgPSB0cnVlO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGlmKGlzU2hvdykge1xyXG5cclxuICAgICAgaWYgKGlzV2luKSB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnV0dG9uX3RyeUFnYWluLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX1N0YXIucmVzZXRTeXN0ZW0oKTtcclxuICBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0NvbmZldHRpLnJlc2V0U3lzdGVtKCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbl9OZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gIFxyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250YWluZXIuRlhfU3Rhci5yZXNldFN5c3RlbSgpO1xyXG4gIFxyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250YWluZXIuRlhfQ29uZmV0dGkucmVzZXRTeXN0ZW0oKTtcclxuICBcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTG9zZVNvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNob3dOZXh0RmxvdyhmbG93OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfU3Rhci5zdG9wU3lzdGVtKCk7XHJcbiAgXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0NvbmZldHRpLnN0b3BTeXN0ZW0oKTtcclxuXHJcbiAgICBpZihmbG93ID09PSAyKSB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuUGxhdGUpXHJcbiAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAwfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuRHJhZ0FyZWEpXHJcbiAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAwfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRmxvdzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93MilcclxuICAgICAgLnRvKDEuNSwge29wYWNpdHk6IDI1NX0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfSBcclxuXHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkZsb3cyKVxyXG4gICAgICAudG8oMC41LCB7b3BhY2l0eTogMH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIFxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk5leHRGbG93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuTmV4dEZsb3cpXHJcbiAgICAgIC50bygxLjUsIHtvcGFjaXR5OiAyNTV9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVG9TdG9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5oYW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyBDb25zdGFudHMuaXNHYW1lU3RhcnQgJiYgdGhpcy5jb3VudGluZ1RpbWUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==