
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
var GamePlay_1 = require("./GamePlay");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        _this.targetPos = null;
        _this.isJumpback = false;
        return _this;
    }
    Bee.prototype.start = function () {
        this.initTargetPos();
        this.beginContact();
        this.initPos = this.node.getPosition();
    };
    Bee.prototype.initTargetPos = function () {
        var random = cc.math.randomRangeInt(1, 4);
        switch (random) {
            case 1:
                this.targetPos = constants_1.Constants.Char_Point1;
                break;
            case 2:
                this.targetPos = constants_1.Constants.Char_Point2;
                break;
            case 3:
                this.targetPos = constants_1.Constants.Char_Point3;
                break;
            default:
                break;
        }
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4 && !constants_1.Constants.isHit) {
                _this.jumpBack();
                console.log("collide line");
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                // if(window.currentLv === 2) {
                //     Constants.isLoseLv2 = true;
                //     o.getComponent(cc.RigidBody).destroy();
                //     o.getComponent(cc.Collider).destroy();
                //     this.AudioManager.playSound(Constants.SoundTrack.stingSound);
                //     this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
                //     this.scheduleOnce(() => {this.GamePlay.loseLv2()}, 2.5)
                //     return;
                // }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                window.isLoseGame = true;
                constants_1.Constants.isHit = true;
                _this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var _this = this;
        this.isJumpback = true;
        this.isCollide = true;
        cc.tween(this.node)
            .to(0.2, { x: this.initPos.x, y: this.initPos.y }, { easing: cc.easing.smooth })
            .call(function () {
            _this.initTargetPos();
            _this.isCollide = false;
        })
            .start();
    };
    Bee.prototype.setAttackAgain = function () {
        var _this = this;
        if (this.isJumpback)
            return;
        this.scheduleOnce(function () { _this.isCollide = false; }, 1);
    };
    Bee.prototype.attack = function () {
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(this.targetPos, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide && !constants_1.Constants.isWinGame) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Bee.prototype, "GamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMscUNBQXFDO0FBQy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBNEdDO1FBekdHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQThGaEMsQ0FBQztJQTNGYSxtQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdPLDJCQUFhLEdBQXJCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLFdBQVcsQ0FBQztnQkFDdkMsTUFBTTtZQUNWLEtBQUssQ0FB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QUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZDQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eUNBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQVRkLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E0R3ZCO0lBQUQsVUFBQztDQTVHRCxBQTRHQyxDQTVHZ0MsRUFBRSxDQUFDLFNBQVMsR0E0RzVDO2tCQTVHb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG4vLyBpbXBvcnQgKiBhcyBQRiBmcm9tIFwicGF0aGZpbmRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUmlnaWRCb2R5KVxyXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIGlzQ29sbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW5pdFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgaXNKdW1wYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0VGFyZ2V0UG9zKCk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGFyZ2V0UG9zKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDEsIDQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYmVnaW5Db250YWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5Lm9uQmVnaW5Db250YWN0ID0gKGMsIHMsIG8pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvLnRhZyA9PT0gNCAmJiAhQ29uc3RhbnRzLmlzSGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbGxpZGUgbGluZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG8udGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIENvbnN0YW50cy5pc0xvc2VMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG8uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG8uZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN0aW5nU291bmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJIaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuR2FtZVBsYXkubG9zZUx2MigpfSwgMi41KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3RpbmdTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaXNMb3NlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkhpdFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSnVtcGJhY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsaWRlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuMiwge3g6IHRoaXMuaW5pdFBvcy54LCB5OiB0aGlzLmluaXRQb3MueX0sIHtlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGh9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0VGFyZ2V0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBdHRhY2tBZ2FpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0p1bXBiYWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuaXNDb2xsaWRlID0gZmFsc2V9LCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2soKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRoaXMudGFyZ2V0UG9zLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93LmlzRHJhdyAmJiAhdGhpcy5pc0NvbGxpZGUgJiYgIUNvbnN0YW50cy5pc1dpbkdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==