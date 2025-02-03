
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