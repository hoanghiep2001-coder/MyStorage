"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.canhbaoSound = null;
        _this.gun = null;
        _this.pickdo = null;
        _this.tiem = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.normalNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "canhbaoSound":
                    this.canhbaoSound.play();
                    break;
                case "gun":
                    this.gun.play();
                    break;
                case "pickdo":
                    this.pickdo.play();
                    break;
                case "tiem":
                    this.tiem.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "canhbaoSound":
                this.canhbaoSound.stop();
                break;
            case "gun":
                this.gun.stop();
                break;
            case "pickdo":
                this.pickdo.stop();
                break;
            case "tiem":
                this.tiem.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.canhbaoSound.stop();
        this.gun.stop();
        this.pickdo.stop();
        this.tiem.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "canhbaoSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "gun", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "pickdo", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "tiem", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();