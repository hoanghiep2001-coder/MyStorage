
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        // state
        _this.timing = 0.5;
        return _this;
        // protected update(dt: number): void {
        // }
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.MergeSound);
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.bgSound);
        }, 1.2 + this.timing);
        this.scheduleOnce(function () { _this.NodeContainer.UIContainer.getComponent(cc.Animation).play("UI_MergeAnim"); }, 1.5 + this.timing);
        this.scheduleOnce(function () { _this.NodeContainer.CardWhite.active = true; }, 3.5 + this.timing);
        this.scheduleOnce(function () {
            _this.NodeContainer.CardWhite.getComponent(cc.Animation).stop();
            _this.NodeContainer.CardWhite.angle = 0;
            _this.NodeContainer.CardWhite.getComponent(cc.Animation).play("CardWhite_BoomAnim");
            _this.NodeContainer.PS_Blink.resetSystem();
        }, 6.5 + this.timing);
        this.scheduleOnce(function () { _this.showText(); constants_1.Constants.isCanTouch = true; }, 9 + this.timing);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound); }, 12 + this.timing);
    };
    GamePlay.prototype.showText = function () {
        var _this = this;
        cc.tween(this.NodeContainer.Text)
            .to(0.5, { opacity: 255 })
            .call(function () {
            cc.tween(_this.NodeContainer.Text)
                .repeatForever(cc.tween(_this.NodeContainer.Text)
                .to(0.5, { scale: 0.4 })
                .to(0.5, { scale: 0.35 }, { easing: 'elasticOut' })).start();
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2REM7UUEzREMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxHQUFHLENBQUM7O1FBK0NyQix1Q0FBdUM7UUFFdkMsSUFBSTtJQUVOLENBQUM7SUFoRFcseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0Qiw2REFBNkQ7SUFDL0QsQ0FBQztJQUdPLGlDQUFjLEdBQXRCO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9ELEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNuRixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUdPLDJCQUFRLEdBQWhCO1FBQUEsaUJBWUM7UUFYQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2FBQzlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDekIsSUFBSSxDQUFDO1lBQ0osRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztpQkFDOUIsYUFBYSxDQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7aUJBQzlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FDdEQsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzttREFDWTtJQU5qQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkQ1QjtJQUFELGVBQUM7Q0E3REQsQUE2REMsQ0E3RHFDLEVBQUUsQ0FBQyxTQUFTLEdBNkRqRDtrQkE3RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIHRpbWluZzogbnVtYmVyID0gMC41O1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5NZXJnZVNvdW5kKTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfSwgMS4yICsgdGhpcy50aW1pbmcpXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5VSUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVUlfTWVyZ2VBbmltXCIpOyB9LCAxLjUgKyB0aGlzLnRpbWluZyk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5DYXJkV2hpdGUuYWN0aXZlID0gdHJ1ZTsgfSwgMy41ICsgdGhpcy50aW1pbmcpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ2FyZFdoaXRlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNhcmRXaGl0ZS5hbmdsZSA9IDA7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DYXJkV2hpdGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNhcmRXaGl0ZV9Cb29tQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBTX0JsaW5rLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB9LCA2LjUgKyB0aGlzLnRpbWluZyk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuc2hvd1RleHQoKTsgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlOyB9LCA5ICsgdGhpcy50aW1pbmcpXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTsgfSwgMTIgKyB0aGlzLnRpbWluZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VGV4dCgpOiB2b2lkIHtcclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0KVxyXG4gICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLlRleHQpXHJcbiAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLlRleHQpXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40IH0pXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zNSB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAvLyB9XHJcblxyXG59XHJcbiJdfQ==