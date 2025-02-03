
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
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.activeTweenTextTap();
        cc.view.setResizeCallback(function () {
            _this.tweenStates.forEach(function (tween) { return tween.stop(); });
            _this.Responsive.handleRotate();
            _this.activeTweenTextTap();
        });
    };
    GamePlay.prototype.handleGamePlay = function () {
    };
    GamePlay.prototype.activeTweenTextTap = function () {
        var currentTextScale = this.NodesContainer.text.scale;
        var newTextScale = currentTextScale - 0.05;
        this.tweenStates.push(cc.tween(this.NodesContainer.text)
            .repeatForever(cc.tween(this.NodesContainer.text)
            .to(0.5, { scale: currentTextScale })
            .to(0.5, { scale: newTextScale }, { easing: cc.easing.elasticOut })).start());
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            constants_1.Constants.isClickStartBtn
                ? this.AudioManager.playSound(constants_1.Constants.SoundTrack.chickFunSound)
                : this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                constants_1.Constants.isClickStartBtn;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUZDO1FBaEZDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGlCQUFXLEdBQWUsRUFBRSxDQUFDOztJQXNFL0IsQ0FBQztJQW5FVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQUEsaUJBU0M7UUFSQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQTtZQUMvQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdPLGlDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUdPLHFDQUFrQixHQUExQjtRQUNFLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksWUFBWSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3ZELGFBQWEsQ0FDVixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2FBQzdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FDMUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdNLDRDQUF5QixHQUFoQztRQUNFLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3RDLE9BQU87U0FDUjtRQUVELElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUMscUJBQVMsQ0FBQyxlQUFlO2dCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNqRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0Q7SUFFSCxDQUFDO0lBR08sNENBQXlCLEdBQWpDO1FBQ0UscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFbEYsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2dCQUMzRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUV2QyxxQkFBUyxDQUFDLGVBQWUsQ0FBQTtnQkFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztvREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7Z0RBQ1M7SUFUWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUY1QjtJQUFELGVBQUM7Q0FuRkQsQUFtRkMsQ0FuRnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUZqRDtrQkFuRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tIFwiLi4vUGx1Z2luL1Jlc3BvbnNpdmVcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShSZXNwb25zaXZlKVxyXG4gIFJlc3BvbnNpdmU6IFJlc3BvbnNpdmUgPSBudWxsO1xyXG5cclxuICBkb2xsUHJlY2VudDogbnVtYmVyID0gMDtcclxuICBvcHBvbmVudFByZWNlbnQ6IG51bWJlciA9IDA7XHJcbiAgdHdlZW5TdGF0ZXM6IGNjLlR3ZWVuW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMuYWN0aXZlVHdlZW5UZXh0VGFwKCk7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMudHdlZW5TdGF0ZXMuZm9yRWFjaCh0d2VlbiA9PiB0d2Vlbi5zdG9wKCkpXHJcbiAgICAgIHRoaXMuUmVzcG9uc2l2ZS5oYW5kbGVSb3RhdGUoKTtcclxuICAgICAgdGhpcy5hY3RpdmVUd2VlblRleHRUYXAoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlVHdlZW5UZXh0VGFwKCk6IHZvaWQge1xyXG4gICAgbGV0IGN1cnJlbnRUZXh0U2NhbGUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2NhbGU7XHJcbiAgICBsZXQgbmV3VGV4dFNjYWxlID0gY3VycmVudFRleHRTY2FsZSAtIDAuMDU7XHJcbiAgICB0aGlzLnR3ZWVuU3RhdGVzLnB1c2goY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci50ZXh0KVxyXG4gICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci50ZXh0KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiBjdXJyZW50VGV4dFNjYWxlIH0pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IG5ld1RleHRTY2FsZSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICkuc3RhcnQoKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy5pc0NsaWNrU3RhcnRCdG4gXHJcbiAgICAgID8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNoaWNrRnVuU291bmQpXHJcbiAgICAgIDogdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2xpY2tTdGFydEJ0biBcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=