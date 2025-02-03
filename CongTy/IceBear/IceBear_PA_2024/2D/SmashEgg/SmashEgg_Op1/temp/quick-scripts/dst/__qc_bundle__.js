
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
require('./assets/Script/Controller/Bee');
require('./assets/Script/Controller/Egg');
require('./assets/Script/Controller/Game2Control');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/GraphicsContro');
require('./assets/Script/Controller/NodesController');
require('./assets/Script/Controller/PointController');
require('./assets/Script/Controller/TouchController');
require('./assets/Script/Data/StateForJS');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/MyPhysicsCollider');
require('./assets/Script/Plugin/Responsive');

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
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfec3bBGHdHY4ShHxSUTm+E', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        // this.AudioManager.stopAllSound();
        constants_1.Constants.ironSource.isEndGame = true;
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id1577759626?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXlEQztRQXZERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBdUR0QyxDQUFDO0lBckRhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZCLG9DQUFvQztRQUNwQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6QixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxPQUFPO1NBQ1Y7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUVELCtCQUErQjtRQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDVjtRQUVELGtDQUFrQztRQUNsQyxJQUFJLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDOUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO2dCQUMxRixPQUFPO2FBQ1Y7WUFFRCw4RkFBOEY7WUFDOUYsdUVBQXVFO1lBQ3ZFLGNBQWM7WUFDZCxJQUFJO1lBRUosS0FBSyxDQUFDLElBQUksQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1lBQzFGLE9BQU87U0FDVjtRQUNELDJFQUEyRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7d0RBQ1c7SUFGekIsY0FBYztRQUQxQixPQUFPO09BQ0ssY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQXpERCxBQXlEQyxDQXpEbUMsRUFBRSxDQUFDLFNBQVMsR0F5RC9DO0FBekRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4gXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluc3RhbGxIYW5kbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5zYXZldGhlZWdncy5kcmF3dG9zYXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDE1Nzc3NTk2MjY/bXQ9OFwiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uc2F2ZXRoZWVnZ3MuZHJhd3Rvc2F2ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["successSound"] = "successSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["loseSound"] = "loseSound";
    SoundTrack["stingSound"] = "stingSound";
    SoundTrack["thaybaSound"] = "thaybaSound";
    SoundTrack["winSound"] = "winSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.isHit = false;
    Constants.isWin = false;
    Constants.isLoseGameFirstTime = false;
    Constants.EggDieCount = 0;
    Constants.currentPosition = null;
    Constants.CharacterPos = null;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFZSjtBQVpELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0lBQ2pDLG1DQUFxQixDQUFBO0lBQ3JCLHVDQUF5QixDQUFBO0lBQ3pCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0lBQ3pCLHlDQUEyQixDQUFBO0lBQzNCLG1DQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFaSSxVQUFVLEtBQVYsVUFBVSxRQVlkO0FBR0Q7SUFBQTtJQTZCQSxDQUFDO0lBM0JHLFlBQVk7SUFDTCwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsZUFBSyxHQUFZLEtBQUssQ0FBQztJQUN2QixlQUFLLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLDZCQUFtQixHQUFZLEtBQUssQ0FBQztJQUVyQyxxQkFBVyxHQUFXLENBQUMsQ0FBQztJQUV4Qix5QkFBZSxHQUFZLElBQUksQ0FBQztJQUNoQyxzQkFBWSxHQUFZLElBQUksQ0FBQztJQUVwQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFDdEQsZ0JBQUM7Q0E3QkQsQUE2QkMsSUFBQTtBQTdCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBkcmF3U291bmQgPSBcImRyYXdTb3VuZFwiLFxyXG4gICAgc3VjY2Vzc1NvdW5kID0gXCJzdWNjZXNzU291bmRcIixcclxuICAgIG1vdmVTb3VuZCA9IFwibW92ZVNvdW5kXCIsXHJcbiAgICBmaXJld29ya3NTb3VuZCA9IFwiZmlyZXdvcmtzU291bmRcIixcclxuICAgIGNyeVNvdW5kID0gXCJjcnlTb3VuZFwiLFxyXG4gICAgY2xpY2tTb3VuZCA9IFwiY2xpY2tTb3VuZFwiLFxyXG4gICAgbG9zZVNvdW5kID0gXCJsb3NlU291bmRcIixcclxuICAgIHN0aW5nU291bmQgPSBcInN0aW5nU291bmRcIixcclxuICAgIHRoYXliYVNvdW5kID0gXCJ0aGF5YmFTb3VuZFwiLFxyXG4gICAgd2luU291bmQgPSBcIndpblNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGlzQ2xpY2tHYW1lU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0hpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNMb3NlR2FtZUZpcnN0VGltZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBFZ2dEaWVDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGF0aWMgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBDaGFyYWN0ZXJQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/MyPhysicsCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16fa2jbwqRENLjduRsp+GPv', 'MyPhysicsCollider');
// Script/Plugin/MyPhysicsCollider.js

"use strict";

var MyPhysicsCollider = cc.Class({
  "extends": cc.PhysicsCollider,
  editor: {
    menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Polygon',
    requireComponent: cc.RigidBody
  },
  properties: {
    lineWidth: 10,
    points: [cc.Vec2]
  },
  _createShape: function _createShape(scale) {
    var shapes = [];
    var polys = this.points;
    var offset = this.offset;
    var polyIdx = 0;

    for (var i = 0; i < polys.length - 1; i++) {
      var posBegin = polys[i];
      var posEnd = polys[i + 1];
      var linelen = posBegin.sub(posEnd).mag();
      var angle = Math.atan2(posEnd.y - posBegin.y, posEnd.x - posBegin.x) - Math.PI / 2;
      var midPos = posBegin.add(posEnd).mul(0.5);
      var shape = new b2.PolygonShape();

      if (shape) {
        shape.SetAsBox(this.lineWidth / 2 / 32, linelen / 2 / 32, new b2.Vec2(midPos.x / 32, midPos.y / 32), angle);
        shapes.push(shape);
      }
    }

    return shapes;
  }
});
module.exports = MyPhysicsCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXE15UGh5c2ljc0NvbGxpZGVyLmpzIl0sIm5hbWVzIjpbIk15UGh5c2ljc0NvbGxpZGVyIiwiY2MiLCJDbGFzcyIsIlBoeXNpY3NDb2xsaWRlciIsImVkaXRvciIsIm1lbnUiLCJDQ19FRElUT1IiLCJyZXF1aXJlQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwicHJvcGVydGllcyIsImxpbmVXaWR0aCIsInBvaW50cyIsIlZlYzIiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNoYXBlcyIsInBvbHlzIiwib2Zmc2V0IiwicG9seUlkeCIsImkiLCJsZW5ndGgiLCJwb3NCZWdpbiIsInBvc0VuZCIsImxpbmVsZW4iLCJzdWIiLCJtYWciLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsInkiLCJ4IiwiUEkiLCJtaWRQb3MiLCJhZGQiLCJtdWwiLCJzaGFwZSIsImIyIiwiUG9seWdvblNoYXBlIiwiU2V0QXNCb3giLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDN0IsYUFBU0QsRUFBRSxDQUFDRSxlQURpQjtBQUU3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsU0FBUyxJQUFJLG1EQURmO0FBRUpDLElBQUFBLGdCQUFnQixFQUFFTixFQUFFLENBQUNPO0FBRmpCLEdBRnFCO0FBTTdCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFLEVBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csSUFBSjtBQUZBLEdBTmlCO0FBVTdCQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVVDLEtBQVYsRUFBaUI7QUFDM0IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0wsTUFBakI7QUFDQSxRQUFJTSxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFFQSxRQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQW5DLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFVBQUlFLFFBQVEsR0FBR0wsS0FBSyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHTixLQUFLLENBQUNHLENBQUMsR0FBRyxDQUFMLENBQWxCO0FBQ0EsVUFBSUksT0FBTyxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYUYsTUFBYixFQUFxQkcsR0FBckIsRUFBZDtBQUVBLFVBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLE1BQU0sQ0FBQ08sQ0FBUCxHQUFXUixRQUFRLENBQUNRLENBQS9CLEVBQWtDUCxNQUFNLENBQUNRLENBQVAsR0FBV1QsUUFBUSxDQUFDUyxDQUF0RCxJQUEyREgsSUFBSSxDQUFDSSxFQUFMLEdBQVUsQ0FBakY7QUFFQSxVQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhWCxNQUFiLEVBQXFCWSxHQUFyQixDQUF5QixHQUF6QixDQUFiO0FBRUEsVUFBSUMsS0FBSyxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsWUFBUCxFQUFaOztBQUVBLFVBQUlGLEtBQUosRUFBVztBQUNQQSxRQUFBQSxLQUFLLENBQUNHLFFBQU4sQ0FBZSxLQUFLNUIsU0FBTCxHQUFpQixDQUFqQixHQUFxQixFQUFwQyxFQUF3Q2EsT0FBTyxHQUFHLENBQVYsR0FBYyxFQUF0RCxFQUEwRCxJQUFJYSxFQUFFLENBQUN4QixJQUFQLENBQVlvQixNQUFNLENBQUNGLENBQVAsR0FBVyxFQUF2QixFQUEyQkUsTUFBTSxDQUFDSCxDQUFQLEdBQVcsRUFBdEMsQ0FBMUQsRUFBcUdILEtBQXJHO0FBRUFYLFFBQUFBLE1BQU0sQ0FBQ3dCLElBQVAsQ0FBWUosS0FBWjtBQUNIO0FBQ0o7O0FBRUQsV0FBT3BCLE1BQVA7QUFDSDtBQXBDNEIsQ0FBVCxDQUF4QjtBQXVDQXlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLGlCQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBNeVBoeXNpY3NDb2xsaWRlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlBoeXNpY3NDb2xsaWRlcixcclxuICAgIGVkaXRvcjoge1xyXG4gICAgICAgIG1lbnU6IENDX0VESVRPUiAmJiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvQ29sbGlkZXIvUG9seWdvbicsXHJcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpbmVXaWR0aDogMTAsXHJcbiAgICAgICAgcG9pbnRzOiBbY2MuVmVjMl1cclxuICAgIH0sXHJcbiAgICBfY3JlYXRlU2hhcGU6IGZ1bmN0aW9uIChzY2FsZSkge1xyXG4gICAgICAgIHZhciBzaGFwZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHBvbHlzID0gdGhpcy5wb2ludHM7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xyXG5cclxuICAgICAgICB2YXIgcG9seUlkeCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvc0JlZ2luID0gcG9seXNbaV07XHJcbiAgICAgICAgICAgIHZhciBwb3NFbmQgPSBwb2x5c1tpICsgMV07XHJcbiAgICAgICAgICAgIHZhciBsaW5lbGVuID0gcG9zQmVnaW4uc3ViKHBvc0VuZCkubWFnKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHBvc0VuZC55IC0gcG9zQmVnaW4ueSwgcG9zRW5kLnggLSBwb3NCZWdpbi54KSAtIE1hdGguUEkgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pZFBvcyA9IHBvc0JlZ2luLmFkZChwb3NFbmQpLm11bCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNoYXBlID0gbmV3IGIyLlBvbHlnb25TaGFwZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFwZS5TZXRBc0JveCh0aGlzLmxpbmVXaWR0aCAvIDIgLyAzMiwgbGluZWxlbiAvIDIgLyAzMiwgbmV3IGIyLlZlYzIobWlkUG9zLnggLyAzMiwgbWlkUG9zLnkgLyAzMiksIGFuZ2xlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hhcGVzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXlQaHlzaWNzQ29sbGlkZXI7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsContro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93044ZctVJBYpcfVaP3IJVr', 'GraphicsContro');
// Script/Controller/GraphicsContro.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: null,
    line_point: [cc.Vec2],
    isCanDraw: true
  },
  onLoad: function onLoad() {
    this.node.width = 320;
    this.node.height = 480;
    this.graphics = this.getComponent(cc.Graphics);
  },
  start: function start() {
    // StateForJs.isCanDraw = true;
    window.PointPos = cc.v2(-50, 100);
    window.isLineStop = false;
    this.isActiveLineLogic = false;
    this.onTouch();
  },
  update: function update() {
    if (this.rigibodyLogic && this.isActiveLineLogic) {
      if (this.rigibodyLogic.linearVelocity.x === 0 && this.rigibodyLogic.linearVelocity.y === 0) {
        window.isLineStop = true;
      }
    }
  },
  onTouch: function onTouch() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  offTouch: function offTouch() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_MOVE);
    this.node.off(cc.Node.EventType.TOUCH_END);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL);
  },
  touch_start: function touch_start(event) {
    if (!this.isCanDraw || window.isWin) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.isStartDraw = true;
    window.PointPos = pos;
    this.graphics.moveTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
  },
  touch_move: function touch_move(event) {
    if (!this.isCanDraw || window.isWin) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.PointPos = pos;
    this.graphics.lineTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));

    if (window.isTouchWall) {
      this.graphics.strokeColor = cc.Color.RED;
    } else {
      this.graphics.strokeColor = cc.Color.BLACK;
    }

    this.graphics.stroke();
  },
  touch_end: function touch_end(event) {
    if (window.isTouchWall) {
      _StateForJS.StateForJs.isCanDraw = true;
      window.isTouchWall = false;
      this.line_point = [];
      this.graphics.clear();
      return;
    }

    if (!this.isCanDraw || window.isWin) {
      return;
    }

    this.isCanDraw = false;
    window.isDraw = true;
    window.isTouchWall = false;
    this.createRigibody();
    this.offTouch();
  },
  createRigibody: function createRigibody() {
    var _this = this;

    this.rigibodyLogic = this.addComponent(cc.RigidBody);
    this.rigibodyLogic.gravityScale = 10;
    this.physicsLine = this.addComponent("MyPhysicsCollider");
    this.physicsLine.lineWidth = 9;
    this.physicsLine.points = this.line_point;
    this.physicsLine.friction = 0;
    this.physicsLine.density = 0;
    this.physicsLine.tag = 5;
    this.physicsLine.apply();
    this.scheduleOnce(function () {
      _this.isActiveLineLogic = true;
    }, 0.3);
  },
  applyContact: function applyContact() {
    this.rigibodyLogic.onBeginContact = function (c, s, o) {};
  },
  checkIsCanDraw: function checkIsCanDraw(lastPoint, nowPoint) {
    return lastPoint.sub(nowPoint).mag() >= 20;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdyYXBoaWNzIiwibGluZV9wb2ludCIsIlZlYzIiLCJpc0NhbkRyYXciLCJvbkxvYWQiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsInN0YXJ0Iiwid2luZG93IiwiUG9pbnRQb3MiLCJ2MiIsImlzTGluZVN0b3AiLCJpc0FjdGl2ZUxpbmVMb2dpYyIsIm9uVG91Y2giLCJ1cGRhdGUiLCJyaWdpYm9keUxvZ2ljIiwibGluZWFyVmVsb2NpdHkiLCJ4IiwieSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hfc3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hfbW92ZSIsIlRPVUNIX0VORCIsInRvdWNoX2VuZCIsIlRPVUNIX0NBTkNFTCIsIm9mZlRvdWNoIiwib2ZmIiwiZXZlbnQiLCJpc1dpbiIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0TG9jYXRpb24iLCJpc1N0YXJ0RHJhdyIsIm1vdmVUbyIsInB1c2giLCJsaW5lVG8iLCJpc1RvdWNoV2FsbCIsInN0cm9rZUNvbG9yIiwiQ29sb3IiLCJSRUQiLCJCTEFDSyIsInN0cm9rZSIsIlN0YXRlRm9ySnMiLCJjbGVhciIsImlzRHJhdyIsImNyZWF0ZVJpZ2lib2R5IiwiYWRkQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwiZ3Jhdml0eVNjYWxlIiwicGh5c2ljc0xpbmUiLCJsaW5lV2lkdGgiLCJwb2ludHMiLCJmcmljdGlvbiIsImRlbnNpdHkiLCJ0YWciLCJhcHBseSIsInNjaGVkdWxlT25jZSIsImFwcGx5Q29udGFjdCIsIm9uQmVnaW5Db250YWN0IiwiYyIsInMiLCJvIiwiY2hlY2tJc0NhbkRyYXciLCJsYXN0UG9pbnQiLCJub3dQb2ludCIsInN1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QkksT0FBakIsR0FBMkIsQ0FBM0I7QUFDQSxTQUFLSixXQUFMLENBQWlCSyxHQUFqQixHQUF1QixDQUF2QjtBQUNBLFNBQUtMLFdBQUwsQ0FBaUJNLEtBQWpCO0FBRUEsU0FBS0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLE1BQUEsS0FBSSxDQUFDaEQsaUJBQUwsR0FBeUIsSUFBekI7QUFDSCxLQUZELEVBRUcsR0FGSDtBQUdILEdBL0dJO0FBa0hMaUQsRUFBQUEsWUFsSEssMEJBa0hVO0FBQ1gsU0FBSzlDLGFBQUwsQ0FBbUIrQyxjQUFuQixHQUFvQyxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBS0MsQ0FBTCxFQUFXLENBRTlDLENBRkQ7QUFHSCxHQXRISTtBQXlITEMsRUFBQUEsY0FBYyxFQUFFLHdCQUFVQyxTQUFWLEVBQXFCQyxRQUFyQixFQUErQjtBQUMzQyxXQUFPRCxTQUFTLENBQUNFLEdBQVYsQ0FBY0QsUUFBZCxFQUF3QkUsR0FBeEIsTUFBaUMsRUFBeEM7QUFDSDtBQTNISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUZvckpzIH0gZnJvbSBcIi4uL0RhdGEvU3RhdGVGb3JKU1wiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBudWxsLFxyXG4gICAgICAgIGxpbmVfcG9pbnQ6IFtjYy5WZWMyXSxcclxuICAgICAgICBpc0NhbkRyYXc6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSAzMjA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDQ4MDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIFN0YXRlRm9ySnMuaXNDYW5EcmF3ID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuUG9pbnRQb3MgPSBjYy52MigtNTAsMTAwKTtcclxuICAgICAgICB3aW5kb3cuaXNMaW5lU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVMaW5lTG9naWMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uVG91Y2goKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZih0aGlzLnJpZ2lib2R5TG9naWMgJiYgdGhpcy5pc0FjdGl2ZUxpbmVMb2dpYykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJpZ2lib2R5TG9naWMubGluZWFyVmVsb2NpdHkueCA9PT0gMCAmJiB0aGlzLnJpZ2lib2R5TG9naWMubGluZWFyVmVsb2NpdHkueSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmlzTGluZVN0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Ub3VjaCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoX21vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb2ZmVG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG4gICAgfSxcclxuICAgIHRvdWNoX3N0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDYW5EcmF3IHx8IHdpbmRvdy5pc1dpbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHdpbmRvdy5pc1N0YXJ0RHJhdyA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LlBvaW50UG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5saW5lX3BvaW50LnB1c2goY2MudjIocG9zLngsIHBvcy55KSk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hfbW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FuRHJhdyB8fCB3aW5kb3cuaXNXaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB3aW5kb3cuUG9pbnRQb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICB0aGlzLmxpbmVfcG9pbnQucHVzaChjYy52Mihwb3MueCwgcG9zLnkpKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmlzVG91Y2hXYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0tcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hfZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZih3aW5kb3cuaXNUb3VjaFdhbGwpIHtcclxuICAgICAgICAgICAgU3RhdGVGb3JKcy5pc0NhbkRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cuaXNUb3VjaFdhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saW5lX3BvaW50ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FuRHJhdyB8fCB3aW5kb3cuaXNXaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0NhbkRyYXcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuaXNUb3VjaFdhbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmlnaWJvZHkoKTtcclxuICAgICAgICB0aGlzLm9mZlRvdWNoKCk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUmlnaWJvZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJpZ2lib2R5TG9naWMgPSB0aGlzLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMucmlnaWJvZHlMb2dpYy5ncmF2aXR5U2NhbGUgPSAxMDtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZSA9IHRoaXMuYWRkQ29tcG9uZW50KFwiTXlQaHlzaWNzQ29sbGlkZXJcIik7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5saW5lV2lkdGggPSA5O1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUucG9pbnRzID0gdGhpcy5saW5lX3BvaW50O1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUuZnJpY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUuZGVuc2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS50YWcgPSA1O1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlTGluZUxvZ2ljID0gdHJ1ZTtcclxuICAgICAgICB9LCAwLjMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgYXBwbHlDb250YWN0KCkge1xyXG4gICAgICAgIHRoaXMucmlnaWJvZHlMb2dpYy5vbkJlZ2luQ29udGFjdCA9IChjLHMsbykgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjaGVja0lzQ2FuRHJhdzogZnVuY3Rpb24gKGxhc3RQb2ludCwgbm93UG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gbGFzdFBvaW50LnN1Yihub3dQb2ludCkubWFnKCkgPj0gMjA7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        _this.hasResult = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        // !Constants.isWin && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        constants_1.Constants.EggDieCount = 0;
        constants_1.Constants.ironSource.isPlayBgSound = false;
        window.isWin = false;
        window.isLineStop = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        // Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        // this.registerEvent();
        var hand = this.NodesController.hint.getChildByName("hand");
        if (constants_1.Constants.isLoseGameFirstTime) {
            hand.getComponent(cc.Animation).play("Hint_2_Anim");
            var line = this.NodesController.hint.getChildByName("Shape 1");
            line.opacity = 255;
        }
        else {
            hand.getComponent(cc.Animation).play("Hint_1_Anim");
            var line = this.NodesController.hint.getChildByName("Line 1");
            line.opacity = 255;
        }
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        this.handleIronSourcePlaySound();
        // this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
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
    GamePlay.prototype.failGame = function () {
        if (this.hasResult)
            return;
        console.log("fail");
        constants_1.Constants.isLoseGameFirstTime = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.thaybaSound);
        this.hasResult = true;
        this.NodesController.text_tryAgain.getComponent(cc.Animation).play();
        for (var index = 0; index < this.NodesController.eggs.length; index++) {
            if (this.NodesController.eggs[index].active) {
                var node = this.NodesController.eggs[index];
                node.getChildByName("Fail_Icon").active = true;
            }
        }
        this.scheduleOnce(function () {
            cc.director.loadScene("game");
        }, 1.5);
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        if (this.hasResult)
            return;
        console.log("win");
        this.hasResult = true;
        constants_1.Constants.isWin = true;
        window.isWin = true;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            _this.NodesController.text_eggcelent.getComponent(cc.Animation).play();
        }, 1.5);
        this.scheduleOnce(function () {
            cc.director.loadScene("game_2");
        }, 3);
    };
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.EggDieCount === 3) {
            this.winGame();
        }
        if (window.isLineStop && constants_1.Constants.EggDieCount < 3) {
            this.failGame();
        }
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0tDO1FBbEtHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUF3SS9CLENBQUM7SUFySWEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsaUVBQWlFO0lBQ3JFLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtB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QVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZXNDb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcblxyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGdyYXBoaWM6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX0dyaWQ6IGFueSA9IG51bGw7XHJcbiAgICBwYXRoRmluZGluZ19Ob2RlczogYW55ID0gW107XHJcblxyXG4gICAgLy8gU3RhdGVcclxuICAgIGN1cmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIGN1cnJlbnRIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1cnJlbnRQZW5jaWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIGN1cmVybnRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaXNIaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGFzUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3MgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gcGh5c2ljcy5kZWJ1Z0RyYXdGbGFncyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gIUNvbnN0YW50cy5pc1dpbiAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICBDb25zdGFudHMuRWdnRGllQ291bnQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNXaW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNMaW5lU3RvcCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUdhbWVQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENvbnN0YW50cy5DaGFyYWN0ZXJQb3MgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgLy8gdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgbGV0IGhhbmQgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5oaW50LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICBpZihDb25zdGFudHMuaXNMb3NlR2FtZUZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIaW50XzJfQW5pbVwiKTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5oaW50LmdldENoaWxkQnlOYW1lKFwiU2hhcGUgMVwiKTtcclxuICAgICAgICAgICAgbGluZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhpbnRfMV9BbmltXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuTm9kZXNDb250cm9sbGVyLmhpbnQuZ2V0Q2hpbGRCeU5hbWUoXCJMaW5lIDFcIik7XHJcbiAgICAgICAgICAgIGxpbmUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5hY3RpdmVIaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNIaW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICAvLyB0aGlzLk5vZGVzQ29udHJvbGxlci5IaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIGZhaWxHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuaGFzUmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzTG9zZUdhbWVGaXJzdFRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50aGF5YmFTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLnRleHRfdHJ5QWdhaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzW2luZGV4XS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5lZ2dzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGYWlsX0ljb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHdpbkdhbWUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaGFzUmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmhhc1Jlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndpblNvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIudGV4dF9lZ2djZWxlbnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV8yXCIpO1xyXG4gICAgICAgIH0sIDMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25zdGFudHMuRWdnRGllQ291bnQgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5HYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuaXNMaW5lU3RvcCAmJiBDb25zdGFudHMuRWdnRGllQ291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbEdhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/PointController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80da3u/zVdMR5yti8YdVBri', 'PointController');
// Script/Controller/PointController.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointCollider = /** @class */ (function (_super) {
    __extends(PointCollider, _super);
    function PointCollider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.rigidbody = null;
        return _this;
    }
    PointCollider.prototype.start = function () {
        this.beginContact();
    };
    PointCollider.prototype.beginContact = function () {
        var _this = this;
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 0) {
                _this.GameController.installHandle();
                window.isTouchWall = true;
            }
        };
    };
    PointCollider.prototype.update = function (dt) {
        this.node.setPosition(window.PointPos);
    };
    __decorate([
        property(GameController_1.GameController)
    ], PointCollider.prototype, "GameController", void 0);
    __decorate([
        property(cc.RigidBody)
    ], PointCollider.prototype, "rigidbody", void 0);
    PointCollider = __decorate([
        ccclass
    ], PointCollider);
    return PointCollider;
}(cc.Component));
exports.default = PointCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxQb2ludENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkJDO1FBeEJHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUFzQm5DLENBQUM7SUFuQmEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQ2xDLElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBR1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3lEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1E7SUFMZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkJqQztJQUFELG9CQUFDO0NBM0JELEFBMkJDLENBM0IwQyxFQUFFLENBQUMsU0FBUyxHQTJCdEQ7a0JBM0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludENvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkub25CZWdpbkNvbnRhY3QgPSAoYyxzLG8pID0+IHtcclxuICAgICAgICAgICAgaWYoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHdpbmRvdy5Qb2ludFBvcylcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'TouchController');
// Script/Controller/TouchController.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab,
    nodesController: cc.Node,
    audioManager: cc.Node,
    gameController: cc.Node,
    gamePlay: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start() {
    // toStore
    // this.gameController.getComponent("GameController").installHandle();
    if (window.isWin) {
      this.gameController.getComponent("GameController").installHandle();
    }

    this.gamePlay.getComponent("GamePlay").handleIronSourcePlaySound();
    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
    this.nodesController.getComponent("NodesController").hint.active = false;
    this.nodesController.getComponent("NodesController").text_draw.active = false;
  },
  touch_end: function touch_end(event) {
    if (!_StateForJS.StateForJs.isCanDraw || window.isWin) {
      this.offEvent();
      this.createGraphics();
    }

    this.audioManager.getComponent("AudioManager").stopSound("drawSound");
  },
  offEvent: function offEvent() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_END);
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJnYW1lQ29udHJvbGxlciIsImdhbWVQbGF5Iiwib25Mb2FkIiwid2luZG93IiwiaXNEcmF3Iiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaF9zdGFydCIsIlRPVUNIX0VORCIsInRvdWNoX2VuZCIsIlRPVUNIX0NBTkNFTCIsInN0YXJ0IiwiY3JlYXRlR3JhcGhpY3MiLCJpc1dpbiIsImdldENvbXBvbmVudCIsImluc3RhbGxIYW5kbGUiLCJoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kIiwicGxheVNvdW5kIiwiZHJhd1NvdW5kIiwibG9vcCIsImhpbnQiLCJhY3RpdmUiLCJ0ZXh0X2RyYXciLCJldmVudCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJvZmZFdmVudCIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTyxJQUhUO0FBSVJFLElBQUFBLGNBQWMsRUFBRVQsRUFBRSxDQUFDTyxJQUpYO0FBS1JHLElBQUFBLFFBQVEsRUFBRVYsRUFBRSxDQUFDTztBQUxMLEdBSlA7QUFhTEksRUFBQUEsTUFiSyxvQkFhSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWYsRUFBRSxDQUFDTyxJQUFILENBQVFTLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFmLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCRyxTQUEvQixFQUEwQyxLQUFLQyxTQUEvQyxFQUEwRCxJQUExRDtBQUNBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhZixFQUFFLENBQUNPLElBQUgsQ0FBUVMsU0FBUixDQUFrQkssWUFBL0IsRUFBNkMsS0FBS0QsU0FBbEQsRUFBNkQsSUFBN0Q7QUFDSCxHQWxCSTtBQXFCTEUsRUFBQUEsS0FyQkssbUJBcUJHO0FBQ0osU0FBS0MsY0FBTDtBQUNILEdBdkJJO0FBMEJMTCxFQUFBQSxXQTFCSyx5QkEwQlM7QUFDVjtBQUNBO0FBRUEsUUFBR04sTUFBTSxDQUFDWSxLQUFWLEVBQWlCO0FBQ2IsV0FBS2YsY0FBTCxDQUFvQmdCLFlBQXBCLENBQWlDLGdCQUFqQyxFQUFtREMsYUFBbkQ7QUFDSDs7QUFFRCxTQUFLaEIsUUFBTCxDQUFjZSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDRSx5QkFBdkM7QUFDQSxTQUFLbkIsWUFBTCxDQUFrQmlCLFlBQWxCLENBQStCLGNBQS9CLEVBQStDRyxTQUEvQyxDQUF5RCxXQUF6RDtBQUNBLFNBQUtwQixZQUFMLENBQWtCaUIsWUFBbEIsQ0FBK0IsY0FBL0IsRUFBK0NJLFNBQS9DLENBQXlEQyxJQUF6RCxHQUFnRSxJQUFoRTtBQUNBLFNBQUt4QixlQUFMLENBQXFCbUIsWUFBckIsQ0FBa0MsaUJBQWxDLEVBQXFETSxJQUFyRCxDQUEwREMsTUFBMUQsR0FBbUUsS0FBbkU7QUFDQSxTQUFLMUIsZUFBTCxDQUFxQm1CLFlBQXJCLENBQWtDLGlCQUFsQyxFQUFxRFEsU0FBckQsQ0FBK0RELE1BQS9ELEdBQXdFLEtBQXhFO0FBQ0gsR0F2Q0k7QUEwQ0xaLEVBQUFBLFNBQVMsRUFBRSxtQkFBVWMsS0FBVixFQUFpQjtBQUN4QixRQUFHLENBQUNDLHVCQUFXQyxTQUFaLElBQXlCeEIsTUFBTSxDQUFDWSxLQUFuQyxFQUEwQztBQUN0QyxXQUFLYSxRQUFMO0FBQ0EsV0FBS2QsY0FBTDtBQUNIOztBQUNELFNBQUtmLFlBQUwsQ0FBa0JpQixZQUFsQixDQUErQixjQUEvQixFQUErQ2EsU0FBL0MsQ0FBeUQsV0FBekQ7QUFDSCxHQWhESTtBQW1ETEQsRUFBQUEsUUFuREssc0JBbURNO0FBQ1AsU0FBS3ZCLElBQUwsQ0FBVXlCLEdBQVYsQ0FBY3ZDLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCQyxXQUFoQztBQUNBLFNBQUtILElBQUwsQ0FBVXlCLEdBQVYsQ0FBY3ZDLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCRyxTQUFoQztBQUNILEdBdERJO0FBeURMSSxFQUFBQSxjQXpESyw0QkF5RFk7QUFDYixRQUFJaUIsYUFBYSxHQUFHeEMsRUFBRSxDQUFDeUMsV0FBSCxDQUFlLEtBQUtyQyxRQUFwQixDQUFwQjtBQUNBb0MsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBSzVCLElBQUwsQ0FBVTZCLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUE3REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgICAgICBnYW1lQ29udHJvbGxlcjogY2MuTm9kZSxcclxuICAgICAgICBnYW1lUGxheTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdG9TdG9yZVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIikuaW5zdGFsbEhhbmRsZSgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuaXNXaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLmF1ZGlvTWFuYWdlci5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheVNvdW5kKFwiZHJhd1NvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiTm9kZXNDb250cm9sbGVyXCIpLmhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiTm9kZXNDb250cm9sbGVyXCIpLnRleHRfZHJhdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoX2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIVN0YXRlRm9ySnMuaXNDYW5EcmF3IHx8IHdpbmRvdy5pc1dpbikge1xyXG4gICAgICAgICAgICB0aGlzLm9mZkV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JhcGhpY3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnN0b3BTb3VuZChcImRyYXdTb3VuZFwiKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9mZkV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGNyZWF0ZUdyYXBoaWNzKCkge1xyXG4gICAgICAgIHZhciBncmFwaGljc19ub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmFwaGljcyk7XHJcbiAgICAgICAgZ3JhcGhpY3Nfbm9kZS54ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ3JhcGhpY3Nfbm9kZSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/StateForJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '658d5P3MUBBApXFkwazlx6Z', 'StateForJS');
// Script/Data/StateForJS.js

"use strict";

exports.__esModule = true;
exports.StateForJs = void 0;
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;

var StateForJs = function StateForJs() {};

exports.StateForJs = StateForJs;
StateForJs.isCanDraw = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxTdGF0ZUZvckpTLmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7O0lBQ2FDOzs7QUFBQUEsV0FDRkMsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIFN0YXRlRm9ySnMge1xyXG4gICAgc3RhdGljIGlzQ2FuRHJhdyA9IHRydWU7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

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
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        // Component
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Node
        _this.HideMask = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        // UI
        _this.hint = null;
        _this.text_draw = null;
        _this.text_eggcelent = null;
        _this.text_tryAgain = null;
        _this.eggs = [];
        // CTA
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        // PreFab
        _this.Prefab_Graphics = null;
        return _this;
        // protected start(): void {
        //     Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
        //     Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
        //     Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
        // }
    }
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "point_checkCollide", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "hint", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "text_draw", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "text_eggcelent", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "text_tryAgain", void 0);
    __decorate([
        property([cc.Node])
    ], NodesController.prototype, "eggs", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_button", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFDSSxZQUFZO1FBRGhCLHFFQTRDQztRQXhDRyxPQUFPO1FBRVAsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQWMsRUFBRSxDQUFDO1FBRXJCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsU0FBUztRQUVULHFCQUFlLEdBQWMsSUFBSSxDQUFDOztRQUVsQyw0QkFBNEI7UUFDNUIsb0VBQW9FO1FBQ3BFLG9FQUFvRTtRQUNwRSxvRUFBb0U7UUFDcEUsSUFBSTtJQUNSLENBQUM7SUF0Q0c7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aURBQ0M7SUFJckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBckNqQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNENuQztJQUFELHNCQUFDO0NBNUNELEFBNENDLENBNUM0QyxFQUFFLENBQUMsU0FBUyxHQTRDeEQ7a0JBNUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIENvbXBvbmVudFxyXG5cclxuXHJcbiAgICAvLyBOb2RlXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRfY2hlY2tDb2xsaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRW52aXJvbm1lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0X2RyYXc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZXh0X2VnZ2NlbGVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHRfdHJ5QWdhaW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBlZ2dzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBDVEFcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFByZUZhYlxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFByZWZhYl9HcmFwaGljczogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLkNoYXJfUG9pbnQxID0gdGhpcy5GYWtlQ2hhcmFjdGVyc1swXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgLy8gICAgIENvbnN0YW50cy5DaGFyX1BvaW50MiA9IHRoaXMuRmFrZUNoYXJhY3RlcnNbMV0uZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vICAgICBDb25zdGFudHMuQ2hhcl9Qb2ludDMgPSB0aGlzLkZha2VDaGFyYWN0ZXJzWzJdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Game2Control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ceff3jwtppDXKm7O7Meas5p', 'Game2Control');
// Script/Controller/Game2Control.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hideMask = null;
        _this.GameController = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hideMask", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], NewClass.prototype, "GameController", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lMkNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsbURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBVUM7UUFQRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQW1CLElBQUksQ0FBQzs7SUFLMUMsQ0FBQztJQUhhLHdCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQU5EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQUxyQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBVTVCO0lBQUQsZUFBQztDQVZELEFBVUMsQ0FWcUMsRUFBRSxDQUFDLFNBQVMsR0FVakQ7a0JBVm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Egg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23c8etOzS5Hxolq1KinXevK', 'Egg');
// Script/Controller/Egg.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        // Component
        _this.rigidbody = null;
        _this.collide = null;
        // state
        _this.isCollideLine = false;
        // Animation
        _this.result_fail = "result_fail";
        _this.egg_break = "egg_break";
        _this.result_win = "result_win";
        _this.idle_security = "idle_security";
        return _this;
    }
    Egg.prototype.start = function () {
        var _this = this;
        this.collide = this.getComponent(cc.PhysicsCircleCollider);
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact =
            function (c, s, o) {
                if (o.tag === 5 && !_this.isCollideLine) {
                    _this.isCollideLine = true;
                    _this.rigidbody.destroy();
                    _this.collide.destroy();
                    _this.setAnimation(_this.egg_break, false);
                    constants_1.Constants.EggDieCount += 1;
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                    _this.scheduleOnce(function () {
                        _this.node.destroy();
                    }, 1);
                }
            };
    };
    Egg.prototype.setAnimation = function (anim, loop) {
        var spine = this.node.getChildByName("Spine_Egg").getComponent(sp.Skeleton);
        spine.setAnimation(0, anim, loop);
    };
    __decorate([
        property(AudioManager_1.default)
    ], Egg.prototype, "AudioManager", void 0);
    Egg = __decorate([
        ccclass
    ], Egg);
    return Egg;
}(cc.Component));
exports.default = Egg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxFZ2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQWlEQztRQS9DRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsWUFBWTtRQUNaLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRzVCLFFBQVE7UUFDUixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQixZQUFZO1FBQ1osaUJBQVcsR0FBVyxhQUFhLENBQUM7UUFDcEMsZUFBUyxHQUFXLFdBQVcsQ0FBQztRQUNoQyxnQkFBVSxHQUFXLFlBQVksQ0FBQztRQUNsQyxtQkFBYSxHQUFXLGVBQWUsQ0FBQzs7SUFnQzVDLENBQUM7SUE3QmEsbUJBQUssR0FBZjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUdqRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7WUFDekIsVUFBQyxDQUFvQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7Z0JBQy9ELElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxxQkFBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUU3RCxLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtpQkFDUjtZQUNMLENBQUMsQ0FBQTtJQUNULENBQUM7SUFHTSwwQkFBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsSUFBYTtRQUMzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkNBQ1c7SUFGakIsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQWlEdkI7SUFBRCxVQUFDO0NBakRELEFBaURDLENBakRnQyxFQUFFLENBQUMsU0FBUyxHQWlENUM7a0JBakRvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZ2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGU6IGNjLkNvbGxpZGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzQ29sbGlkZUxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgLy8gQW5pbWF0aW9uXHJcbiAgICByZXN1bHRfZmFpbDogc3RyaW5nID0gXCJyZXN1bHRfZmFpbFwiO1xyXG4gICAgZWdnX2JyZWFrOiBzdHJpbmcgPSBcImVnZ19icmVha1wiO1xyXG4gICAgcmVzdWx0X3dpbjogc3RyaW5nID0gXCJyZXN1bHRfd2luXCI7XHJcbiAgICBpZGxlX3NlY3VyaXR5OiBzdHJpbmcgPSBcImlkbGVfc2VjdXJpdHlcIjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sbGlkZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS5vbkJlZ2luQ29udGFjdCA9XHJcbiAgICAgICAgICAgIChjOiBjYy5QaHlzaWNzQ29udGFjdCwgczogY2MuUGh5c2ljc0NvbGxpZGVyLCBvOiBjYy5QaHlzaWNzQ29sbGlkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG8udGFnID09PSA1ICYmICF0aGlzLmlzQ29sbGlkZUxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGlkZUxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbWF0aW9uKHRoaXMuZWdnX2JyZWFrLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLkVnZ0RpZUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN0aW5nU291bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0QW5pbWF0aW9uKGFuaW06IHN0cmluZywgbG9vcDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBzcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lX0VnZ1wiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBhbmltLCBsb29wKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Bee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

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
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        return _this;
    }
    Bee.prototype.start = function () {
        this.beginContact();
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4) {
                console.log("collide");
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                constants_1.Constants.isHit = true;
            }
        };
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFrQ0M7UUEvQkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUE7O0lBMEI5QixDQUFDO0lBeEJhLG1CQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdPLDBCQUFZLEdBQXBCO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRXBDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsSUFBRyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNmLE9BQU87aUJBQ1Y7Z0JBRUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixxQkFBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDMUI7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkNBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQU5kLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FrQ3ZCO0lBQUQsVUFBQztDQWxDRCxBQWtDQyxDQWxDZ0MsRUFBRSxDQUFDLFNBQVMsR0FrQzVDO2tCQWxDb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgaXNDb2xsaWRlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkub25CZWdpbkNvbnRhY3QgPSAoYywgcywgbykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG8udGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzQ29sbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3RpbmdTb3VuZClcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0hpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
// Script/Plugin/Responsive.ts

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
var NodesController_1 = require("../Controller/NodesController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesController = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        // } else {    
        //     // Ipad
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesController_1.default)
    ], Responsive.prototype, "NodesController", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTREO0FBQzVELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZHQztRQTNHRyxZQUFZO1FBRVoscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBS3hDLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQTZGaEQsQ0FBQztJQTNGYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUVJLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO1lBQ3BFLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sd0NBQW1CLEdBQTNCO1FBQ0ksSUFBRyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxRCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCO1FBQ0ksSUFBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUQsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBRUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0lBRzNELENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFHdkQsMkVBQTJFO1FBQzNFLHdDQUF3QztRQUV4QyxlQUFlO1FBQ2YsY0FBYztRQUVkLElBQUk7SUFFUixDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBSnZCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RzlCO0lBQUQsaUJBQUM7Q0E3R0QsQUE2R0MsQ0E3R3VDLEVBQUUsQ0FBQyxTQUFTLEdBNkduRDtrQkE3R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuICAgICAgXHJcblxyXG4gICAgICAgIC8vIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNykge1xyXG4gICAgICAgIC8vICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXNcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9IGVsc2UgeyAgICBcclxuICAgICAgICAvLyAgICAgLy8gSXBhZFxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
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
        _this.drawSound = null;
        _this.winSound = null;
        _this.clickSound = null;
        _this.loseSound = null;
        _this.stingSound = null;
        _this.thaybaSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "thaybaSound":
                    this.thaybaSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "loseSound":
                    this.loseSound.play();
                    break;
                case "stingSound":
                    this.stingSound.play();
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
            case "thaybaSound":
                this.thaybaSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "loseSound":
                this.loseSound.stop();
                break;
            case "stingSound":
                this.stingSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.thaybaSound.stop();
        this.drawSound.stop();
        // this.crySound.stop();
        this.clickSound.stop();
        this.loseSound.stop();
        this.stingSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "winSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "loseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stingSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "thaybaSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFxRkM7UUFuRkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQXFFdkMsQ0FBQztJQW5FVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVixLQUFLLGFBQWE7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFVBQVU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDVixLQUFLLFlBQVk7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFlBQVk7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQWhCbEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFGaEM7SUFBRCxtQkFBQztDQXJGRCxBQXFGQyxDQXJGeUMsRUFBRSxDQUFDLFNBQVMsR0FxRnJEO2tCQXJGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcmF3U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHdpblNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjbGlja1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHN0aW5nU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHRoYXliYVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhheWJhU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRoYXliYVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkcmF3U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsb3NlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RpbmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RpbmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGhheWJhU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGhheWJhU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkcmF3U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb3NlU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9zZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RpbmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGluZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnRoYXliYVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jcnlTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdGluZ1NvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
