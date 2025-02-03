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
        _this.TouchSound = null;
        _this.winSound = null;
        _this.CorrectSound = null;
        _this.LoseSound = null;
        _this.BoilSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "TouchSound":
                    this.TouchSound.play();
                    break;
                case "BoilSound":
                    this.BoilSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "CorrectSound":
                    this.CorrectSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.TouchSound.stop();
        this.winSound.stop();
        this.CorrectSound.stop();
        this.BoilSound.stop();
        this.LoseSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "TouchSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "winSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "CorrectSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "LoseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "BoilSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();