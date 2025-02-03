
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
var GameOption_1 = require("../Data/GameOption");
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
        _this.beeClearFixPos = null;
        _this.isCollide = false;
        _this.initPos = null;
        _this.targetPos = null;
        _this.isJumpback = false;
        _this.tweenStates = [];
        _this.jumpbackCount = 0;
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
            if (o.tag === 4 && _this.isJumpback) {
                _this.isJumpback = false;
                _this.tweenStates[_this.jumpbackCount - 1].stop();
                _this.initTargetPos();
                _this.isCollide = false;
                cc.log("stop jumpback");
            }
            if (o.tag === 4 && !constants_1.Constants.isHit) {
                _this.jumpBack();
                cc.log("collide line");
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
            }
            if (o.tag === 8) {
                cc.log("bee die!");
                _this.node.getChildByName("PSBase").getChildByName("boom").getComponent(cc.ParticleSystem).resetSystem();
                _this.node.removeComponent(sp.Skeleton);
                _this.node.removeComponent(cc.PhysicsBoxCollider);
                _this.node.removeComponent(cc.RigidBody);
                _this.scheduleOnce(function () {
                    _this.destroy();
                }, 1);
            }
            if (o.tag === 3) {
                if (_this.isCollide)
                    return;
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
        this.jumpbackCount += 1;
        // nếu là op 16 thì cho ong nhảy lại chỗ khoe hở thôi
        if (GameOption_1.GameOption.currentOption === 16 && GameOption_1.GameOption.Op16.isPointTouchClearFixArea) {
            this.tweenStates.push(cc.tween(this.node)
                .to(0.2, { x: this.beeClearFixPos.x, y: this.beeClearFixPos.y }, { easing: cc.easing.smooth })
                .call(function () {
                _this.initTargetPos();
                _this.isCollide = false;
            })
                .start());
            return;
        }
        this.tweenStates.push(cc.tween(this.node)
            .to(0.2, { x: this.initPos.x, y: this.initPos.y }, { easing: cc.easing.smooth })
            .call(function () {
            _this.initTargetPos();
            _this.isCollide = false;
        })
            .start());
    };
    Bee.prototype.setAttackAgain = function () {
        var _this = this;
        if (this.isJumpback)
            return;
        this.scheduleOnce(function () { _this.isCollide = false; }, 1);
    };
    Bee.prototype.attack = function () {
        if (window.isToStore || constants_1.Constants.isToStore)
            return;
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
    __decorate([
        property(cc.Node)
    ], Bee.prototype, "beeClearFixPos", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLGlEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLHFDQUFxQztBQUMvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXlJQztRQXRJRyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixpQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFxSDlCLENBQUM7SUFuSGEsbUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFHTywyQkFBYSxHQUFyQjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsV0FBVyxDQUFDO2dCQUN2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LENBQUMsVUFBVTtZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHTyxvQkFBTSxHQUFkO1FBQ0ksSUFBRyxNQUFNLENBQUMsU0FBUyxJQUFJLHFCQUFTLENBQUMsU0FBUztZQUFFLE9BQU87UUFFbkQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHUyxvQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBcklEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkNBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2E7SUFaZCxHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBeUl2QjtJQUFELFVBQUM7Q0F6SUQsQUF5SUMsQ0F6SWdDLEVBQUUsQ0FBQyxTQUFTLEdBeUk1QztrQkF6SW9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgR2FtZU9wdGlvbiB9IGZyb20gXCIuLi9EYXRhL0dhbWVPcHRpb25cIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUmlnaWRCb2R5KVxyXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmVlQ2xlYXJGaXhQb3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlzQ29sbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW5pdFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgaXNKdW1wYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHR3ZWVuU3RhdGVzOiBjYy5Ud2VlbltdID0gW107XHJcbiAgICBqdW1wYmFja0NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRUYXJnZXRQb3MoKTtcclxuICAgICAgICB0aGlzLmJlZ2luQ29udGFjdCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXRUYXJnZXRQb3MoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMSwgNCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYmVnaW5Db250YWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5Lm9uQmVnaW5Db250YWN0ID0gKGMsIHMsIG8pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvLnRhZyA9PT0gNCAmJiB0aGlzLmlzSnVtcGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1wYmFjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2VlblN0YXRlc1t0aGlzLmp1bXBiYWNrQ291bnQgLSAxXS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUYXJnZXRQb3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJzdG9wIGp1bXBiYWNrXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDQgJiYgIUNvbnN0YW50cy5pc0hpdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29sbGlkZSBsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN0aW5nU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImJlZSBkaWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBTQmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG8udGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3RpbmdTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaXNMb3NlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkhpdFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSnVtcGJhY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsaWRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmp1bXBiYWNrQ291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgLy8gbuG6v3UgbMOgIG9wIDE2IHRow6wgY2hvIG9uZyBuaOG6o3kgbOG6oWkgY2jhu5cga2hvZSBo4bufIHRow7RpXHJcbiAgICAgICAgaWYoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxNiAmJiBHYW1lT3B0aW9uLk9wMTYuaXNQb2ludFRvdWNoQ2xlYXJGaXhBcmVhKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5TdGF0ZXMucHVzaChjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgeDogdGhpcy5iZWVDbGVhckZpeFBvcy54LCB5OiB0aGlzLmJlZUNsZWFyRml4UG9zLnkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VGFyZ2V0UG9zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5TdGF0ZXMucHVzaChjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgeDogdGhpcy5pbml0UG9zLngsIHk6IHRoaXMuaW5pdFBvcy55IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RoIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRhcmdldFBvcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEF0dGFja0FnYWluKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSnVtcGJhY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuaXNDb2xsaWRlID0gZmFsc2UgfSwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHdpbmRvdy5pc1RvU3RvcmUgfHwgQ29uc3RhbnRzLmlzVG9TdG9yZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxlcnAodGhpcy50YXJnZXRQb3MsIDAuMDIsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaXNEcmF3ICYmICF0aGlzLmlzQ29sbGlkZSAmJiAhQ29uc3RhbnRzLmlzV2luR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=