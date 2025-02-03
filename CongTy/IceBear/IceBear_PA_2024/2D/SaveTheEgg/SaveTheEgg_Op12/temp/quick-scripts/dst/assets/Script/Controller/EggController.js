
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/EggController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7838NrFfZMWpWVpJlrJ5k0', 'EggController');
// Script/Controller/EggController.ts

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
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.effectDies = [];
        _this.rigidbody = null;
        _this.collide = null;
        _this.isChangeEggRigidbodyType = false;
        _this.isActiveHelpAnim = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 8) {
                constants_1.Constants.isHit = true;
                _this.rigidbody.destroy();
                _this.getComponent(cc.Collider).destroy();
                _this.node.getChildByName("Spine_Character").active = false;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.explosionSound);
                _this.effectDies.forEach(function (fx) { return fx.resetSystem(); });
                // this.scheduleOnce(() => {this.GamePlay.lose()}, 2.5)
            }
        };
    };
    NewClass.prototype.changeRigidbodyType = function () {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    };
    NewClass.prototype.activeHelpAnim = function () {
        if (this.isActiveHelpAnim)
            return;
        this.isActiveHelpAnim = true;
        this.node.getChildByName("Spine_Character").getComponent(sp.Skeleton).setAnimation(0, "being_hit", true);
    };
    NewClass.prototype.update = function (dt) {
        if (window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType && window.isDraw) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }
        if (constants_1.Constants.isWinGame)
            this.rigidbody.type = cc.RigidBodyType.Static;
        window.isDraw && this.activeHelpAnim();
    };
    __decorate([
        property(GamePlay_1.default)
    ], NewClass.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], NewClass.prototype, "effectDies", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxFZ2dDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdURDO1FBcERHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1Qiw4QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFDMUMsc0JBQWdCLEdBQVksS0FBSyxDQUFDOztJQTJDdEMsQ0FBQztJQXhDYSx3QkFBSyxHQUFmO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQUMsQ0FBbUIsRUFBRSxDQUFxQixFQUFFLENBQXFCO1lBQzlGLElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ1oscUJBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMzRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztnQkFDaEQsdURBQXVEO2FBQzFEO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUdNLHNDQUFtQixHQUExQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNJLElBQUcsSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUdTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBRyxNQUFNLENBQUMsc0JBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBRyxxQkFBUyxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUV0RSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztnREFDTztJQVBwQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUQ1QjtJQUFELGVBQUM7Q0F2REQsQUF1REMsQ0F2RHFDLEVBQUUsQ0FBQyxTQUFTLEdBdURqRDtrQkF2RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QYXJ0aWNsZVN5c3RlbV0pXHJcbiAgICBlZmZlY3REaWVzOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcblxyXG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgY29sbGlkZTogY2MuQ29sbGlkZXIgPSBudWxsO1xyXG4gICAgaXNDaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0FjdGl2ZUhlbHBBbmltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaWRib2R5Lm9uQmVnaW5Db250YWN0ID0gKGM6Y2MuUGh5c2ljc0NvbnRhY3QsIHM6IGNjLlBoeXNpY3NDb2xsaWRlciwgbzogY2MuUGh5c2ljc0NvbGxpZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG8udGFnID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZV9DaGFyYWN0ZXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZXhwbG9zaW9uU291bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3REaWVzLmZvckVhY2goZnggPT4gZngucmVzZXRTeXN0ZW0oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5HYW1lUGxheS5sb3NlKCl9LCAyLjUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VSaWdpZGJvZHlUeXBlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlSGVscEFuaW0oKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZUhlbHBBbmltKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUhlbHBBbmltID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZV9DaGFyYWN0ZXJcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJiZWluZ19oaXRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHdpbmRvdy5jaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlICYmICF0aGlzLmlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZSAmJiB3aW5kb3cuaXNEcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VSaWdpZGJvZHlUeXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuaXNXaW5HYW1lKSB0aGlzLnJpZ2lkYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5pc0RyYXcgJiYgdGhpcy5hY3RpdmVIZWxwQW5pbSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==