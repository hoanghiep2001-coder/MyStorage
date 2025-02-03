
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