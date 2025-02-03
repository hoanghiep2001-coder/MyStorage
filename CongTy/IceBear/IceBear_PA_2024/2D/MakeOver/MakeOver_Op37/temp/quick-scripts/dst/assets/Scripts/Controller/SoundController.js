
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/SoundController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcU291bmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsbUNBQTBCO0lBSzNEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBTE0sWUFBTSxHQUFxQixFQUFFLENBQUM7UUFJakMsaUJBQWUsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDOztJQUNyQyxDQUFDO3dCQVJRLGVBQWU7SUFXZCxnQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUywrQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBR00sbUNBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUdELGdFQUFnRTtJQUNoRSw2RUFBNkU7SUFDN0UsSUFBSTtJQUdHLG1DQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHTSxzQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0lBeENRLGVBQWU7UUFEM0IsT0FBTztPQUNLLGVBQWUsQ0EyQzNCO0lBQUQsc0JBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ29DLG1CQUFTLEdBMkM3QztBQTNDWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL1BsdWdpbi9TaW5nbGV0b25cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFNvdW5kQ29udHJvbGxlciBleHRlbmRzIFNpbmdsZXRvbjxTb3VuZENvbnRyb2xsZXI+IHtcclxuXHJcblxyXG4gICAgcHVibGljIHNvdW5kczogY2MuQXVkaW9Tb3VyY2VbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgU291bmRDb250cm9sbGVyLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3VuZHMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291bmRzLmZpbmQoc291bmQgPT4gc291bmQubm9kZS5uYW1lID09PSBzb3VuZE5hbWUpO1xyXG4gICAgICAgIHJlc3VsdC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHB1YmxpYyBtdXRlU291bmQoc291bmROYW1lOiBzdHJpbmcsIGlzTXV0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VuZHMuZmluZChzb3VuZCA9PiBzb3VuZC5ub2RlLm5hbWUgPT09IHNvdW5kTmFtZSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VuZHMuZmluZChzb3VuZCA9PiBzb3VuZC5ub2RlLm5hbWUgPT09IHNvdW5kTmFtZSk7XHJcbiAgICAgICAgcmVzdWx0LnN0b3AoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvdW5kcy5mb3JFYWNoKHNvdW5kID0+IHNvdW5kLnN0b3AoKSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=