"use strict";
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