"use strict";
cc._RF.push(module, '944bdLyhmRGYrH5HQ8h55ze', 'SoundController');
// Scripts/Controller/SoundController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.SoundController = void 0;
var Singleton_1 = require("../Plugin/Singleton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundController = /** @class */ (function (_super) {
    __extends(SoundController, _super);
    function SoundController() {
        var _this = _super.call(this) || this;
        _this.sounds = [];
        SoundController_1._instance = _this;
        return _this;
    }
    SoundController_1 = SoundController;
    SoundController.prototype.onLoad = function () {
    };
    SoundController.prototype.start = function () {
        this.sounds = this.node.getComponentsInChildren(cc.AudioSource);
    };
    SoundController.prototype.playSound = function (soundName) {
        var result = this.sounds.find(function (sound) { return sound.node.name === soundName; });
        result.play();
    };
    // public muteSound(soundName: string, isMuted: boolean): void {
    //     let result = this.sounds.find(sound => sound.node.name === soundName);
    // }
    SoundController.prototype.stopSound = function (soundName) {
        var result = this.sounds.find(function (sound) { return sound.node.name === soundName; });
        result.stop();
    };
    SoundController.prototype.stopAllSound = function () {
        this.sounds.forEach(function (sound) { return sound.stop(); });
    };
    var SoundController_1;
    SoundController = SoundController_1 = __decorate([
        ccclass
    ], SoundController);
    return SoundController;
}(Singleton_1.default));
exports.SoundController = SoundController;

cc._RF.pop();