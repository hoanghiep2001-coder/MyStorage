
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
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        // Container
        _this.UI_time = null;
        _this.UI_name = null;
        _this.UI_avatar = null;
        _this.UI_icons = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        // cc.director.getPhysicsManager().enabled = true;
        // let collisionManager = cc.director.getCollisionManager();
        // collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
        this.initGame();
    };
    ;
    GamePlay.prototype.initGame = function () {
        this.setupDate();
        this.setupName();
    };
    ;
    GamePlay.prototype.setupDate = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var result = hours + ":" + minutes;
        if (minutes < 10) {
            result = hours + ":0" + minutes;
        }
        ;
        this.UI_time.string = result;
    };
    GamePlay.prototype.setupName = function () {
        this.UI_name.string = "SANTA CLAUS";
        this.UI_name.spacingX = 10;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
    };
    GamePlay.prototype.update = function (dt) {
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "UI_time", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "UI_name", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_avatar", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_icons", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUVDO1FBbEVDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsWUFBWTtRQUVaLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBc0QzQixDQUFDO0lBbkRXLHlCQUFNLEdBQWhCO1FBQ0Usa0RBQWtEO1FBQ2xELDREQUE0RDtRQUM1RCxtQ0FBbUM7UUFDbkMsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFHTSwyQkFBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUFBLENBQUM7SUFHTSw0QkFBUyxHQUFqQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBYyxLQUFLLFNBQUksT0FBUyxDQUFDO1FBQzNDLElBQUcsT0FBTyxHQUFHLEVBQUUsRUFBRTtZQUNmLE1BQU0sR0FBTSxLQUFLLFVBQUssT0FBUyxDQUFDO1NBQ2pDO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR08sNEJBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLDZEQUE2RDtJQUMvRCxDQUFDO0lBR08saUNBQWMsR0FBdEI7SUFFQSxDQUFDO0lBSVMseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtJQUUzQixDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQUl0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBZk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFFNUI7SUFBRCxlQUFDO0NBckVELEFBcUVDLENBckVxQyxFQUFFLENBQUMsU0FBUyxHQXFFakQ7a0JBckVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIENvbnRhaW5lclxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBVSV90aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIFVJX25hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBVSV9hdmF0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFVJX2ljb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyBsZXQgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gICAgLy8gY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldHVwRGF0ZSgpO1xyXG4gICAgdGhpcy5zZXR1cE5hbWUoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cERhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgaWYobWludXRlcyA8IDEwKSB7XHJcbiAgICAgIHJlc3VsdCA9IGAke2hvdXJzfTowJHttaW51dGVzfWA7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5VSV90aW1lLnN0cmluZyA9IHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldHVwTmFtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuVUlfbmFtZS5zdHJpbmcgPSBgU0FOVEEgQ0xBVVNgO1xyXG4gICAgdGhpcy5VSV9uYW1lLnNwYWNpbmdYID0gMTBcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuIFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=