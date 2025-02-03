
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Const/CONST');
require('./assets/Scripts/Const/GameInfo');
require('./assets/Scripts/Controller/GameController');
require('./assets/Scripts/Controller/SoundController');
require('./assets/Scripts/Plugin/Singleton');
require('./assets/Scripts/PuzzleConstants');
require('./assets/Scripts/PuzzlePiece');
require('./assets/Scripts/PuzzleScene');
require('./assets/Scripts/PuzzlueBoard');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Const/CONST.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd276X+nNREUZW0hRWy3YyQ', 'CONST');
// Scripts/Const/CONST.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONST = void 0;
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["clickBtnSound"] = "clickBtnSound";
    SoundTrack["slideSound"] = "slideSound";
    SoundTrack["wrongSound"] = "wrongSound";
})(SoundTrack || (SoundTrack = {}));
var CONST = /** @class */ (function () {
    function CONST() {
    }
    CONST.SoundTrack = SoundTrack;
    return CONST;
}());
exports.CONST = CONST;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29uc3RcXENPTlNULnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLDZDQUErQixDQUFBO0lBQy9CLHVDQUF5QixDQUFBO0lBQ3pCLHVDQUF5QixDQUFBO0FBQzdCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBR0Q7SUFBQTtJQUVBLENBQUM7SUFEVSxnQkFBVSxHQUFzQixVQUFVLENBQUM7SUFDdEQsWUFBQztDQUZELEFBRUMsSUFBQTtBQUZZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGNsaWNrQnRuU291bmQgPSBcImNsaWNrQnRuU291bmRcIixcclxuICAgIHNsaWRlU291bmQgPSBcInNsaWRlU291bmRcIixcclxuICAgIHdyb25nU291bmQgPSBcIndyb25nU291bmRcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDT05TVCB7XHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d124xuSdhE14l12JC74F1X', 'GameController');
// Scripts/Controller/GameController.ts

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
exports.GameController = void 0;
var SoundController_1 = require("./SoundController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        SoundController_1.SoundController.Instance(SoundController_1.SoundController).stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            cc.log("Call exit api");
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            cc.log("Call dapi");
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/com.fishio.hungryfish?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
            return;
        }
        var linkStore = 'https://play.google.com/store/apps/details?id=com.fishio.hungryfish';
        // Nếu không, sử dụng cách mở URL thông thường
        if (typeof window !== 'undefined') {
            window.open(linkStore, '_blank'); // Mở link trong tab mới
            return;
        }
        // If ad network is mindword. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHFEQUFvRDtBQUU5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDs7SUFpRUEsQ0FBQztJQS9EYSw4QkFBSyxHQUFmO1FBQ0ksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdNLHNDQUFhLEdBQXBCO1FBRUksaUNBQWUsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpELE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBSW5DLHlCQUF5QjtRQUN6QixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxPQUFPO1NBQ1Y7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBRUQsK0JBQStCO1FBQy9CLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQy9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQztnQkFDbEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7WUFDbEYsT0FBTztTQUNWO1FBR0QsSUFBTSxTQUFTLEdBQUcscUVBQXFFLENBQUM7UUFFeEYsOENBQThDO1FBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1lBQzFELE9BQU87U0FDVjtRQUdELDJFQUEyRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBL0RRLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FpRTFCO0lBQUQscUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRW1DLEVBQUUsQ0FBQyxTQUFTLEdBaUUvQztBQWpFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lSW5mbyBmcm9tIFwiLi4vQ29uc3QvR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4vU291bmRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5zdG9wQWxsU291bmQoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkNhbGwgZXhpdCBhcGlcIilcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkNhbGwgZGFwaVwiKTtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YgKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5maXNoaW8uaHVuZ3J5ZmlzaFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9jb20uZmlzaGlvLmh1bmdyeWZpc2g/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZmlzaGlvLmh1bmdyeWZpc2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBsaW5rU3RvcmUgPSAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5maXNoaW8uaHVuZ3J5ZmlzaCc7XHJcblxyXG4gICAgICAgIC8vIE7hur91IGtow7RuZywgc+G7rSBk4bulbmcgY8OhY2ggbeG7nyBVUkwgdGjDtG5nIHRoxrDhu51uZ1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihsaW5rU3RvcmUsICdfYmxhbmsnKTsgLy8gTeG7nyBsaW5rIHRyb25nIHRhYiBt4bubaVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yZC4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Plugin/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02ccctU4YJL1LAPuMMZ5mb/', 'Singleton');
// Scripts/Plugin/Singleton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Singleton = /** @class */ (function (_super) {
    __extends(Singleton, _super);
    function Singleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Singleton.Instance = function (c) {
        if (this._instance == null) {
            this._instance = new c();
        }
        return this._instance;
    };
    Singleton._instance = null;
    Singleton = __decorate([
        ccclass
    ], Singleton);
    return Singleton;
}(cc.Component));
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGx1Z2luXFxTaW5nbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsNkJBQVk7SUFBdEQ7O0lBUUEsQ0FBQztJQVBpQixrQkFBUSxHQUF0QixVQUEwQixDQUFlO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDYSxtQkFBUyxHQUFHLElBQUksQ0FBQztJQVBkLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FRN0I7SUFBRCxnQkFBQztDQVJELEFBUUMsQ0FSeUMsRUFBRSxDQUFDLFNBQVMsR0FRckQ7a0JBUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbjxUPiBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U8VD4oYzoge25ldygpOiBUOyB9KSA6IFR7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Const/GameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abf73C+BiNLdYbNmrxRlUZ2', 'GameInfo');
// Scripts/Const/GameInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameInfo = /** @class */ (function () {
    function GameInfo() {
    }
    // game variables
    GameInfo.isCanTouch = true;
    GameInfo.isShowInstallPopup = false;
    return GameInfo;
}());
exports.default = GameInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29uc3RcXEdhbWVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQUtBLENBQUM7SUFKRyxpQkFBaUI7SUFDVixtQkFBVSxHQUFZLElBQUksQ0FBQztJQUUzQiwyQkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDL0MsZUFBQztDQUxELEFBS0MsSUFBQTtrQkFMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbmZvIHtcclxuICAgIC8vIGdhbWUgdmFyaWFibGVzXHJcbiAgICBzdGF0aWMgaXNDYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgc3RhdGljIGlzU2hvd0luc3RhbGxQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzlueBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bb55t2HhJOT5e97sLmAVu/', 'PuzzlueBoard');
// Scripts/PuzzlueBoard.ts

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
exports.PuzzleBoard = void 0;
var PuzzlePiece_1 = require("./PuzzlePiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var PuzzleBoard = /** @class */ (function (_super) {
    __extends(PuzzleBoard, _super);
    // @executeInEditMode
    function PuzzleBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 5;
        _this.colSpace = 5;
        _this.colWidth = 0;
        _this.blankPiece = null;
        _this.puzzleScene = null;
        return _this;
    }
    PuzzleBoard.prototype.init = function (puzzleScene) {
        this.puzzleScene = puzzleScene;
        this.addListeners();
    };
    PuzzleBoard.prototype.reset = function (colNum) {
        this.colNum = colNum;
        this.colWidth = (this.node.width - this.colSpace * (this.colNum + 1)) / this.colNum;
        this.node.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.colNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.x = x * (this.colWidth + this.colSpace) + this.colSpace;
                pieceNode.y = y * (this.colWidth + this.colSpace) + this.colSpace;
                this.pieceMap[x][y] = pieceNode.getComponent(PuzzlePiece_1.Piece);
                this.pieceMap[x][y].init(x, y, this.colNum, this.colWidth);
                if (this.pieceMap[x][y].isBlank) {
                    this.blankPiece = this.pieceMap[x][y];
                }
            }
        }
        this.shuffle();
        // for (let x = 0; x < this.colNum; x++) {
        //     this.pieceMap[x] = [];
        //     for (let y = 0; y < this.colNum; y++) {
        //         let pieceNode = cc.instantiate(this.piecePrefab);
        //         this.node.addChild(pieceNode);
        //         pieceNode.x = x * (this.node.width / this.colNum);
        //         pieceNode.y = y * (this.node.height / this.colNum);
        //         this.pieceMap[x][y] = pieceNode.getComponent(Piece);
        //         this.pieceMap[x][y].init(x, y, this.colNum, this.colWidth);
        //         if (this.pieceMap[x][y].isBlank) {
        //             this.blankPiece = this.pieceMap[x][y];
        //         }
        //     }
        // }
        // this.shuffle();
    };
    PuzzleBoard.prototype.shuffle = function () {
        for (var i = 0; i < 1000; i++) {
            var nearPieces = this.getNearPieces(this.blankPiece);
            var n = Math.floor(Math.random() * nearPieces.length);
            this.exchangeTwoPiece(this.blankPiece, nearPieces[n]);
        }
    };
    PuzzleBoard.prototype.onBoadTouch = function (event) {
        var worldPos = event.getLocation();
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        var x = Math.floor((localPos.x - this.colSpace) / (this.colWidth + this.colSpace));
        var y = Math.floor((localPos.y - this.colSpace) / (this.colWidth + this.colSpace));
        this.puzzleScene.onBoardTouch(x, y);
    };
    PuzzleBoard.prototype.movePiece = function (x, y) {
        var piece = this.pieceMap[x][y];
        var nearPieces = this.getNearPieces(piece);
        for (var _i = 0, nearPieces_1 = nearPieces; _i < nearPieces_1.length; _i++) {
            var nearPiece = nearPieces_1[_i];
            if (nearPiece.isBlank) {
                this.exchangeTwoPiece(piece, nearPiece);
                return true;
            }
        }
        return false;
    };
    PuzzleBoard.prototype.judgeWin = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (!this.pieceMap[x][y].isRight) {
                    return false;
                }
            }
        }
        this.blankPiece.node.active = true;
        return true;
    };
    PuzzleBoard.prototype.getNearPieces = function (piece) {
        var nearPieces = [];
        if (piece.curCol > 0) { // left
            nearPieces.push(this.pieceMap[piece.curCol - 1][piece.curRow]);
        }
        if (piece.curCol < this.colNum - 1) { // right
            nearPieces.push(this.pieceMap[piece.curCol + 1][piece.curRow]);
        }
        if (piece.curRow > 0) { // bottom
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow - 1]);
        }
        if (piece.curRow < this.colNum - 1) { // top
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow + 1]);
        }
        return nearPieces;
    };
    PuzzleBoard.prototype.exchangeTwoPiece = function (piece1, piece2) {
        var _a, _b, _c;
        this.pieceMap[piece2.curCol][piece2.curRow] = piece1;
        this.pieceMap[piece1.curCol][piece1.curRow] = piece2;
        _a = [piece2.curCol, piece1.curCol], piece1.curCol = _a[0], piece2.curCol = _a[1];
        _b = [piece2.curRow, piece1.curRow], piece1.curRow = _b[0], piece2.curRow = _b[1];
        _c = [piece2.node.position, piece1.node.position], piece1.node.position = _c[0], piece2.node.position = _c[1];
    };
    PuzzleBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onBoadTouch, this);
    };
    PuzzleBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], PuzzleBoard.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colSpace", void 0);
    PuzzleBoard = __decorate([
        ccclass
        // @executeInEditMode
    ], PuzzleBoard);
    return PuzzleBoard;
}(cc.Component));
exports.PuzzleBoard = PuzzleBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emx1ZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBc0M7QUFHaEMsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBaUMsK0JBQVk7SUFEN0MscUJBQXFCO0lBQ3JCO1FBQUEscUVBdUlDO1FBcElXLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWdCLElBQUksQ0FBQzs7SUEwSDVDLENBQUM7SUF4SEcsMEJBQUksR0FBSixVQUFLLFdBQXdCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUs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LEVBQUUsQ0FBQyxTQUFTLEdBdUk1QztBQXZJWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vUHV6emxlUGllY2VcIjtcclxuaW1wb3J0IHsgUHV6emxlU2NlbmUgfSBmcm9tIFwiLi9QdXp6bGVTY2VuZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGNsYXNzIFB1enpsZUJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBwaWVjZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xOdW06IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgY29sU3BhY2U6IG51bWJlciA9IDU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xXaWR0aDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcGllY2VNYXA6IEFycmF5PEFycmF5PFBpZWNlPj47XHJcbiAgICBwcml2YXRlIGJsYW5rUGllY2U6IFBpZWNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHB1enpsZVNjZW5lOiBQdXp6bGVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgaW5pdChwdXp6bGVTY2VuZTogUHV6emxlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnB1enpsZVNjZW5lID0gcHV6emxlU2NlbmU7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoY29sTnVtPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb2xOdW0gPSBjb2xOdW07XHJcbiAgICAgICAgdGhpcy5jb2xXaWR0aCA9ICh0aGlzLm5vZGUud2lkdGggLSB0aGlzLmNvbFNwYWNlICogKHRoaXMuY29sTnVtICsgMSkpIC8gdGhpcy5jb2xOdW07XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29sTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnggPSB4ICogKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSArIHRoaXMuY29sU3BhY2U7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaW5pdCh4LCB5LCB0aGlzLmNvbE51bSwgdGhpcy5jb2xXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5pc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFua1BpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNodWZmbGUoKTtcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcGllY2VOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waWVjZVByZWZhYik7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGllY2VOb2RlKTtcclxuICAgICAgICAvLyAgICAgICAgIHBpZWNlTm9kZS54ID0geCAqICh0aGlzLm5vZGUud2lkdGggLyB0aGlzLmNvbE51bSk7XHJcbiAgICAgICAgLy8gICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5ub2RlLmhlaWdodCAvIHRoaXMuY29sTnVtKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaW5pdCh4LCB5LCB0aGlzLmNvbE51bSwgdGhpcy5jb2xXaWR0aCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5pc0JsYW5rKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ibGFua1BpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnNodWZmbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNodWZmbGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5lYXJQaWVjZXMgPSB0aGlzLmdldE5lYXJQaWVjZXModGhpcy5ibGFua1BpZWNlKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZWFyUGllY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZSh0aGlzLmJsYW5rUGllY2UsIG5lYXJQaWVjZXNbbl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQm9hZFRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcigobG9jYWxQb3MueCAtIHRoaXMuY29sU3BhY2UpIC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKChsb2NhbFBvcy55IC0gdGhpcy5jb2xTcGFjZSkgLyAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpKTtcclxuICAgICAgICB0aGlzLnB1enpsZVNjZW5lLm9uQm9hcmRUb3VjaCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVBpZWNlKHgsIHkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcGllY2UgPSB0aGlzLnBpZWNlTWFwW3hdW3ldO1xyXG4gICAgICAgIGxldCBuZWFyUGllY2VzID0gdGhpcy5nZXROZWFyUGllY2VzKHBpZWNlKTtcclxuICAgICAgICBmb3IgKGxldCBuZWFyUGllY2Ugb2YgbmVhclBpZWNlcykge1xyXG4gICAgICAgICAgICBpZiAobmVhclBpZWNlLmlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZShwaWVjZSwgbmVhclBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGllY2VNYXBbeF1beV0uaXNSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJsYW5rUGllY2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmVhclBpZWNlcyhwaWVjZTogUGllY2UpOiBBcnJheTxQaWVjZT4ge1xyXG4gICAgICAgIGxldCBuZWFyUGllY2VzID0gW107XHJcblxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPiAwKSB7IC8vIGxlZnRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sIC0gMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPCB0aGlzLmNvbE51bSAtIDEpIHsgLy8gcmlnaHRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sICsgMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJSb3cgPiAwKSB7IC8vIGJvdHRvbVxyXG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2xdW3BpZWNlLmN1clJvdyAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBpZWNlLmN1clJvdyA8IHRoaXMuY29sTnVtIC0gMSkgeyAvLyB0b3BcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sXVtwaWVjZS5jdXJSb3cgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWFyUGllY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGNoYW5nZVR3b1BpZWNlKHBpZWNlMTogUGllY2UsIHBpZWNlMjogUGllY2UpIHtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwW3BpZWNlMi5jdXJDb2xdW3BpZWNlMi5jdXJSb3ddID0gcGllY2UxO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLmN1ckNvbF1bcGllY2UxLmN1clJvd10gPSBwaWVjZTI7XHJcblxyXG4gICAgICAgIFtwaWVjZTEuY3VyQ29sLCBwaWVjZTIuY3VyQ29sXSA9IFtwaWVjZTIuY3VyQ29sLCBwaWVjZTEuY3VyQ29sXTtcclxuICAgICAgICBbcGllY2UxLmN1clJvdywgcGllY2UyLmN1clJvd10gPSBbcGllY2UyLmN1clJvdywgcGllY2UxLmN1clJvd107XHJcblxyXG4gICAgICAgIFtwaWVjZTEubm9kZS5wb3NpdGlvbiwgcGllY2UyLm5vZGUucG9zaXRpb25dID0gW3BpZWNlMi5ub2RlLnBvc2l0aW9uLCBwaWVjZTEubm9kZS5wb3NpdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJvYWRUb3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzlePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2602nrFPpMH5B2rclAcEKW', 'PuzzlePiece');
// Scripts/PuzzlePiece.ts

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
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "isRight", {
        get: function () {
            return this.curCol === this.oriCol && this.curRow === this.oriRow;
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (col, row, colNum, colWidth) {
        this.oriCol = col;
        this.oriRow = row;
        this.curCol = col;
        this.curRow = row;
        var sprite = this.node.addComponent(cc.Sprite);
        // sprite.spriteFrame = new cc.SpriteFrame(this.texture);
        // let rect = sprite.spriteFrame.getRect();
        var rect = cc.rect(0, 0, this.texture.width, this.texture.height);
        var newRectWidth = rect.width / colNum;
        var newRectHeight = rect.height / colNum;
        var newRectX = col * newRectWidth;
        var newRectY = (colNum - row - 1) * newRectHeight;
        var newRect = cc.rect(newRectX, newRectY, newRectWidth, newRectHeight);
        // sprite.spriteFrame.setRect(newRect);
        sprite.spriteFrame = new cc.SpriteFrame(this.texture, newRect);
        this.node.width = colWidth;
        this.node.height = colWidth;
        this.isBlank = this.oriCol === colNum - 1 && this.oriRow === 0;
        if (this.isBlank) {
            this.node.active = false;
        }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], Piece.prototype, "texture", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emxlUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBMkNDO1FBdENXLGFBQU8sR0FBaUIsSUFBSSxDQUFDOztJQXNDekMsQ0FBQztJQS9CRyxzQkFBVywwQkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQUVNLG9CQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUUsR0FBVyxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MseURBQXlEO1FBQ3pELDJDQUEyQztRQUMzQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RSx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFwQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQzswQ0FDbUM7SUFMNUIsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTJDakI7SUFBRCxZQUFDO0NBM0NELEFBMkNDLENBM0MwQixFQUFFLENBQUMsU0FBUyxHQTJDdEM7QUEzQ1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb3JpQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3JpUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNCbGFuazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBnZXQgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJDb2wgPT09IHRoaXMub3JpQ29sICYmIHRoaXMuY3VyUm93ID09PSB0aGlzLm9yaVJvdztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChjb2w6IG51bWJlciwgcm93OiBudW1iZXIsIGNvbE51bTogbnVtYmVyLCBjb2xXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcmlDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5vcmlSb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jdXJDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5jdXJSb3cgPSByb3c7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgLy8gbGV0IHJlY3QgPSBzcHJpdGUuc3ByaXRlRnJhbWUuZ2V0UmVjdCgpO1xyXG4gICAgICAgIGxldCByZWN0ID0gY2MucmVjdCgwLCAwLCB0aGlzLnRleHR1cmUud2lkdGgsIHRoaXMudGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBuZXdSZWN0V2lkdGggPSByZWN0LndpZHRoIC8gY29sTnVtO1xyXG4gICAgICAgIGxldCBuZXdSZWN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQgLyBjb2xOdW07XHJcbiAgICAgICAgbGV0IG5ld1JlY3RYID0gY29sICogbmV3UmVjdFdpZHRoO1xyXG4gICAgICAgIGxldCBuZXdSZWN0WSA9IChjb2xOdW0gLSByb3cgLSAxKSAqIG5ld1JlY3RIZWlnaHQ7XHJcbiAgICAgICAgbGV0IG5ld1JlY3QgPSBjYy5yZWN0KG5ld1JlY3RYLCBuZXdSZWN0WSwgbmV3UmVjdFdpZHRoLCBuZXdSZWN0SGVpZ2h0KTtcclxuICAgICAgICAvLyBzcHJpdGUuc3ByaXRlRnJhbWUuc2V0UmVjdChuZXdSZWN0KTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlLCBuZXdSZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gY29sV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IGNvbFdpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmlzQmxhbmsgPSB0aGlzLm9yaUNvbCA9PT0gY29sTnVtIC0gMSAmJiB0aGlzLm9yaVJvdyA9PT0gMDtcclxuICAgICAgICBpZiAodGhpcy5pc0JsYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzleScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c735b1laCtHdIdMu2J7NWsl', 'PuzzleScene');
// Scripts/PuzzleScene.ts

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
exports.PuzzleScene = void 0;
var CONST_1 = require("./Const/CONST");
var GameInfo_1 = require("./Const/GameInfo");
var GameController_1 = require("./Controller/GameController");
var SoundController_1 = require("./Controller/SoundController");
var PuzzleConstants_1 = require("./PuzzleConstants");
var PuzzlueBoard_1 = require("./PuzzlueBoard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PuzzleScene = /** @class */ (function (_super) {
    __extends(PuzzleScene, _super);
    function PuzzleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.btnHint = null;
        _this.board = null;
        _this.winPanel = null;
        _this.level = 3;
        _this.state = PuzzleConstants_1.STATE.NONE;
        return _this;
    }
    PuzzleScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    PuzzleScene.prototype.startGame = function () {
        // this.winPanel.active = false;
        this.state = PuzzleConstants_1.STATE.START;
        this.board.reset(this.level);
    };
    PuzzleScene.prototype.overGame = function () {
        var _this = this;
        // this.winPanel.opacity = 255;
        this.winPanel.active = true;
        this.state = PuzzleConstants_1.STATE.OVER;
        this.btnHint.children.forEach(function (child) {
            child.color = cc.color(255, 184, 0, 255);
        });
        cc.tween(this.winPanel)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () {
            var label = _this.btnHint.getComponentInChildren(cc.Label);
            label.string = 'DOWNLOAD';
            label.node.color = cc.color(255, 255, 255, 255);
            label.node.scale = 0.8;
            _this.btnHint.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        })
            .start();
        cc.tween(this.btnHint)
            .repeatForever(cc.tween(this.btnHint)
            .to(0.5, { scale: 1 }, { easing: cc.easing.smooth })
            .to(0.5, { scale: 1.06 }, { easing: cc.easing.elasticOut })).start();
    };
    PuzzleScene.prototype.onBoardTouch = function (x, y) {
        if (this.state = PuzzleConstants_1.STATE.START) {
            var isMove = this.board.movePiece(x, y);
            if (!isMove) {
                cc.log("wrong");
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.wrongSound);
            }
            else {
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.slideSound);
                if (this.board.judgeWin()) {
                    this.overGame();
                }
            }
        }
    };
    PuzzleScene.prototype.onBtnLevelEasy = function () {
        this.level = 3;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelNormal = function () {
        this.level = 5;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelHard = function () {
        this.level = 10;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    PuzzleScene.prototype.addListeners = function () {
        this.btnHint.on(cc.Node.EventType.TOUCH_START, this.activeHint, this);
    };
    PuzzleScene.prototype.activeHint = function () {
        console.log("Check");
        if (!GameInfo_1.default.isCanTouch)
            return;
        GameInfo_1.default.isCanTouch = false;
        this.winPanel.getComponent(cc.Animation).play();
        this.scheduleOnce(function () { return GameInfo_1.default.isCanTouch = true; }, 1.1);
        SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.clickBtnSound);
    };
    PuzzleScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(GameController_1.GameController)
    ], PuzzleScene.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "btnHint", void 0);
    __decorate([
        property(PuzzlueBoard_1.PuzzleBoard)
    ], PuzzleScene.prototype, "board", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "winPanel", void 0);
    PuzzleScene = __decorate([
        ccclass
    ], PuzzleScene);
    return PuzzleScene;
}(cc.Component));
exports.PuzzleScene = PuzzleScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emxlU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0Qyw2Q0FBd0M7QUFDeEMsOERBQTZEO0FBQzdELGdFQUErRDtBQUMvRCxxREFBMEM7QUFDMUMsK0NBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBZ0hDO1FBOUdHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRWhCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFLLEdBQVUsdUJBQUssQ0FBQyxJQUFJLENBQUM7O0lBb0dyQyxDQUFDO0lBbEdHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTywrQkFBUyxHQUFqQjtRQUNJLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sOEJBQVEsR0FBaEI7UUFBQSxpQkEyQkM7UUExQkcsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsSUFB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QUFJLENBQUM7aURBQ2U7SUFUeEIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQWdIdkI7SUFBRCxrQkFBQztDQWhIRCxBQWdIQyxDQWhIZ0MsRUFBRSxDQUFDLFNBQVMsR0FnSDVDO0FBaEhZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OU1QgfSBmcm9tIFwiLi9Db25zdC9DT05TVFwiO1xyXG5pbXBvcnQgR2FtZUluZm8gZnJvbSBcIi4vQ29uc3QvR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4vUHV6emxlQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFB1enpsZUJvYXJkIH0gZnJvbSBcIi4vUHV6emx1ZUJvYXJkXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFB1enpsZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5IaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShQdXp6bGVCb2FyZClcclxuICAgIHByaXZhdGUgYm9hcmQ6IFB1enpsZUJvYXJkID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB3aW5QYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzdGF0ZTogU1RBVEUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy53aW5QYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG92ZXJHYW1lKCkge1xyXG4gICAgICAgIC8vIHRoaXMud2luUGFuZWwub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLndpblBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuSGludC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuY29sb3IgPSBjYy5jb2xvcigyNTUsIDE4NCwgMCwgMjU1KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy53aW5QYW5lbClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5idG5IaW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gJ0RPV05MT0FEJztcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5zY2FsZSA9IDAuODtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkhpbnQpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5IaW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjA2IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9hcmRUb3VjaCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQpIHtcclxuICAgICAgICAgICAgbGV0IGlzTW92ZSA9IHRoaXMuYm9hcmQubW92ZVBpZWNlKHgsIHkpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwid3JvbmdcIik7XHJcbiAgICAgICAgICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5U291bmQoQ09OU1QuU291bmRUcmFjay53cm9uZ1NvdW5kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnBsYXlTb3VuZChDT05TVC5Tb3VuZFRyYWNrLnNsaWRlU291bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlV2luKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnRuTGV2ZWxFYXN5KCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnRuTGV2ZWxOb3JtYWwoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDU7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CdG5MZXZlbEhhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDEwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5SZXN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5idG5IaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmFjdGl2ZUhpbnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlSGludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNrXCIpO1xyXG5cclxuICAgICAgICBpZiAoIUdhbWVJbmZvLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuXHJcbiAgICAgICAgR2FtZUluZm8uaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLndpblBhbmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gR2FtZUluZm8uaXNDYW5Ub3VjaCA9IHRydWUsIDEuMSk7XHJcblxyXG4gICAgICAgIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnBsYXlTb3VuZChDT05TVC5Tb3VuZFRyYWNrLmNsaWNrQnRuU291bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzleConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c66eJoGyRAfb/WI4ANGYPy', 'PuzzleConstants');
// Scripts/PuzzleConstants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["READY"] = 1] = "READY";
    STATE[STATE["START"] = 2] = "START";
    STATE[STATE["OVER"] = 3] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emxlQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksS0FLWDtBQUxELFdBQVksS0FBSztJQUNiLGlDQUFRLENBQUE7SUFDUixtQ0FBUyxDQUFBO0lBQ1QsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBTFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBS2hCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU1RBVEV7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFJFQURZID0gMSxcclxuICAgIFNUQVJUID0gMixcclxuICAgIE9WRVIgPSAzXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------
