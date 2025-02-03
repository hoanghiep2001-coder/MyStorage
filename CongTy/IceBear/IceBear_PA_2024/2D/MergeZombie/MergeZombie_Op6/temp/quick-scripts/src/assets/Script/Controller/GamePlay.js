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
var GameController_1 = require("./GameController");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        // state
        _this.timing = 0.5;
        return _this;
        // protected update(dt: number): void {
        // }
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.MergeSound);
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.bgSound);
        }, 1.2 + this.timing);
        this.scheduleOnce(function () { _this.NodeContainer.UIContainer.getComponent(cc.Animation).play("UI_MergeAnim"); }, 1.5 + this.timing);
        this.scheduleOnce(function () { _this.NodeContainer.CardWhite.active = true; }, 3.5 + this.timing);
        this.scheduleOnce(function () {
            _this.NodeContainer.CardWhite.getComponent(cc.Animation).stop();
            _this.NodeContainer.CardWhite.angle = 0;
            _this.NodeContainer.CardWhite.getComponent(cc.Animation).play("CardWhite_BoomAnim");
            _this.NodeContainer.PS_Blink.resetSystem();
        }, 6.5 + this.timing);
        this.scheduleOnce(function () { _this.showText(); constants_1.Constants.isCanTouch = true; }, 9 + this.timing);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound); }, 12 + this.timing);
    };
    GamePlay.prototype.showText = function () {
        var _this = this;
        cc.tween(this.NodeContainer.Text)
            .to(0.5, { opacity: 255 })
            .call(function () {
            cc.tween(_this.NodeContainer.Text)
                .repeatForever(cc.tween(_this.NodeContainer.Text)
                .to(0.5, { scale: 0.4 })
                .to(0.5, { scale: 0.35 }, { easing: 'elasticOut' })).start();
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();