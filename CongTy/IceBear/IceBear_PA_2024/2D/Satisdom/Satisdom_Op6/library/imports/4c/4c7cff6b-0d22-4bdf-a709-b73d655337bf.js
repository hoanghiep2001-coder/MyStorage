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
        _this.ropeSound1 = null;
        _this.ropeSound2 = null;
        _this.breakRopeSound = null;
        _this.completeSound = null;
        _this.completeSound2 = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "ropeSound1":
                    this.ropeSound1.play();
                    break;
                case "ropeSound2":
                    this.ropeSound2.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "completeSound2":
                    this.completeSound2.play();
                    break;
                case "breakRopeSound":
                    this.breakRopeSound.play();
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
            case "ropeSound1":
                this.ropeSound1.stop();
                break;
            case "ropeSound2":
                this.ropeSound2.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "completeSound2":
                this.completeSound2.stop();
                break;
            case "breakRopeSound":
                this.breakRopeSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.ropeSound1.stop();
        this.ropeSound2.stop();
        this.completeSound.stop();
        this.completeSound2.stop();
        this.breakRopeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ropeSound1", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ropeSound2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "breakRopeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound2", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();