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
        _this.bgSound = null;
        _this.spiderSound = null;
        _this.hmmSound = null;
        _this.walkSound = null;
        _this.scareSound = null;
        _this.IntroDelightSound = null;
        _this.whooseSound = null;
        _this.moveItemSound = null;
        _this.DoneStepSound = null;
        _this.crySound = null;
        _this.gapRuoiSound = null;
        _this.screamHoooSound = null;
        _this.nhoMun1Sound = null;
        _this.nhoMun2Sound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "screamHoooSound":
                    this.screamHoooSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "gapRuoiSound":
                    this.gapRuoiSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "whooseSound":
                    this.whooseSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "walkSound":
                    this.walkSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
                    break;
                case "scareSound":
                    this.scareSound.play();
                    break;
                case "IntroDelightSound":
                    this.IntroDelightSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "screamHoooSound":
                this.screamHoooSound.stop();
                break;
            case "gapRuoiSound":
                this.gapRuoiSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "whooseSound":
                this.whooseSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "walkSound":
                this.walkSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            case "scareSound":
                this.scareSound.stop();
                break;
            case "IntroDelightSound":
                this.IntroDelightSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.nhoMun2Sound.stop();
        this.nhoMun1Sound.stop();
        this.screamHoooSound.stop();
        this.DoneStepSound.stop();
        this.whooseSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.walkSound.stop();
        this.spiderSound.stop();
        this.scareSound.stop();
        this.IntroDelightSound.stop();
        this.hmmSound.stop();
        this.crySound.stop();
        this.gapRuoiSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "spiderSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "hmmSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "walkSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "scareSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "IntroDelightSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "whooseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "DoneStepSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "gapRuoiSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "screamHoooSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun2Sound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();