
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Flow2Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2f9bczR9pN37qyiFy483LF', 'Flow2Controller');
// Script/Controller/Flow2Controller.ts

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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Flow2Controller = /** @class */ (function (_super) {
    __extends(Flow2Controller, _super);
    function Flow2Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.spine = null;
        _this.hand = null;
        _this.minPosition = cc.v2(0, -160); // Vị trí tối thiểu (x = 0, y = -160)
        _this.maxPosition = cc.v2(151.999, -28.076); // Vị trí ban đầu (x = 151.999, y = -28.076)
        _this.minAngle = 0; // Góc xoay tối thiểu
        _this.maxAngle = 45; // Góc xoay ban đầu
        _this.tolerance = cc.v2(5, 5);
        _this.currentPos = new cc.Vec2();
        return _this;
    }
    Flow2Controller.prototype.start = function () {
        this.registerEvent();
    };
    Flow2Controller.prototype.registerEvent = function () {
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Flow2Controller.prototype.touchStart = function () {
        if (constants_1.Constants.isDoneFlow2)
            return;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        this.hand.active = false;
    };
    Flow2Controller.prototype.touchMove = function (event) {
        if (constants_1.Constants.isDoneFlow2)
            return;
        var touchLocation = event.getLocation();
        // Chuyển đổi vị trí chạm từ không gian thế giới sang không gian của Node
        var localTouchLocation = this.node.parent.convertToNodeSpaceAR(touchLocation);
        // Tính toán vị trí mới
        var newX = Math.min(Math.max(localTouchLocation.x, this.minPosition.x), this.maxPosition.x);
        var newY = Math.min(Math.max(localTouchLocation.y, this.minPosition.y), this.maxPosition.y);
        // Tính toán phần trăm thay đổi vị trí
        var positionPercent = (newY - this.minPosition.y) / (this.maxPosition.y - this.minPosition.y);
        // Tính toán góc xoay mới dựa trên phần trăm thay đổi vị trí
        var newAngle = this.minAngle + (this.maxAngle - this.minAngle) * positionPercent;
        var currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        var targetPos = cc.v2(newX, newY);
        var smoothedPos = currentPos.lerp(targetPos, 0.1);
        var currentAngle = this.NodesContainer.Flow2_SpineNode.angle;
        var smoothedAngle = cc.misc.lerp(currentAngle, newAngle, 0.1);
        // Cập nhật vị trí và góc xoay của Node
        this.NodesContainer.Flow2_SpineNode.angle = smoothedAngle;
        this.NodesContainer.Flow2_SpineNode.setPosition(smoothedPos);
        this.currentPos = touchLocation;
    };
    Flow2Controller.prototype.touchEnd = function () {
        if (constants_1.Constants.isDoneFlow2)
            return;
        if (this.isNearMinPosition()) {
            constants_1.Constants.isDoneFlow2 = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            this.win();
            cc.tween(this.NodesContainer.Flow2_SpineNode)
                .to(3.2, { x: 0, y: -160, angle: 0 })
                .start();
            console.log("Okey!");
        }
        else {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
            console.log("Wrong!");
        }
    };
    Flow2Controller.prototype.win = function () {
        var _this = this;
        this.spine.setAnimation(0, "win", false);
        this.GamePlay.doneFlow();
        this.scheduleOnce(function () {
            _this.GamePlay.showNextFlow(3);
        }, 2.5);
    };
    Flow2Controller.prototype.isNearMinPosition = function () {
        var currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        return (Math.abs(currentPos.x - this.minPosition.x) <= this.tolerance.x &&
            Math.abs(currentPos.y - this.minPosition.y) <= this.tolerance.y);
    };
    Flow2Controller.prototype.someOtherFunction = function () {
        if (!this.isNearMinPosition()) {
            return false;
        }
        return true;
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Flow2Controller.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], Flow2Controller.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Flow2Controller.prototype, "GamePlay", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Flow2Controller.prototype, "spine", void 0);
    __decorate([
        property(cc.Node)
    ], Flow2Controller.prototype, "hand", void 0);
    Flow2Controller = __decorate([
        ccclass
    ], Flow2Controller);
    return Flow2Controller;
}(cc.Component));
exports.default = Flow2Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxGbG93MkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0lDO1FBbklHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGlCQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztRQUNuRSxpQkFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7UUFDbkYsY0FBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNuQyxjQUFRLEdBQUcsRUFBRSxDQUFBLENBQUMsbUJBQW1CO1FBRWpDLGVBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOztJQThHeEMsQ0FBQztJQTNHYSwrQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHTyx1Q0FBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxF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bnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93MkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICAgIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBtaW5Qb3NpdGlvbiA9IGNjLnYyKDAsIC0xNjApOyAvLyBW4buLIHRyw60gdOG7kWkgdGhp4buDdSAoeCA9IDAsIHkgPSAtMTYwKVxyXG4gICAgbWF4UG9zaXRpb24gPSBjYy52MigxNTEuOTk5LCAtMjguMDc2KTsgLy8gVuG7iyB0csOtIGJhbiDEkeG6p3UgKHggPSAxNTEuOTk5LCB5ID0gLTI4LjA3NilcclxuICAgIG1pbkFuZ2xlID0gMDsgLy8gR8OzYyB4b2F5IHThu5FpIHRoaeG7g3VcclxuICAgIG1heEFuZ2xlID0gNDUgLy8gR8OzYyB4b2F5IGJhbiDEkeG6p3VcclxuXHJcbiAgICB0b2xlcmFuY2UgPSBjYy52Mig1LCA1KTtcclxuXHJcbiAgICBjdXJyZW50UG9zOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoKTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93Ml9TcGluZU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93Ml9TcGluZU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRmxvdzJfU3BpbmVOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93Ml9TcGluZU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKENvbnN0YW50cy5pc0RvbmVGbG93MikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVG91Y2hTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZXZlbnQ6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzRG9uZUZsb3cyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b3VjaExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHbhu4sgdHLDrSBjaOG6oW0gdOG7qyBraMO0bmcgZ2lhbiB0aOG6vyBnaeG7m2kgc2FuZyBraMO0bmcgZ2lhbiBj4bunYSBOb2RlXHJcbiAgICAgICAgbGV0IGxvY2FsVG91Y2hMb2NhdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2NhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFTDrW5oIHRvw6FuIHbhu4sgdHLDrSBt4bubaVxyXG4gICAgICAgIGxldCBuZXdYID0gTWF0aC5taW4oTWF0aC5tYXgobG9jYWxUb3VjaExvY2F0aW9uLngsIHRoaXMubWluUG9zaXRpb24ueCksIHRoaXMubWF4UG9zaXRpb24ueCk7XHJcbiAgICAgICAgbGV0IG5ld1kgPSBNYXRoLm1pbihNYXRoLm1heChsb2NhbFRvdWNoTG9jYXRpb24ueSwgdGhpcy5taW5Qb3NpdGlvbi55KSwgdGhpcy5tYXhQb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgLy8gVMOtbmggdG/DoW4gcGjhuqduIHRyxINtIHRoYXkgxJHhu5VpIHbhu4sgdHLDrVxyXG4gICAgICAgIGxldCBwb3NpdGlvblBlcmNlbnQgPSAobmV3WSAtIHRoaXMubWluUG9zaXRpb24ueSkgLyAodGhpcy5tYXhQb3NpdGlvbi55IC0gdGhpcy5taW5Qb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgLy8gVMOtbmggdG/DoW4gZ8OzYyB4b2F5IG3hu5tpIGThu7FhIHRyw6puIHBo4bqnbiB0csSDbSB0aGF5IMSR4buVaSB24buLIHRyw61cclxuICAgICAgICBsZXQgbmV3QW5nbGUgPSB0aGlzLm1pbkFuZ2xlICsgKHRoaXMubWF4QW5nbGUgLSB0aGlzLm1pbkFuZ2xlKSAqIHBvc2l0aW9uUGVyY2VudDtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZsb3cyX1NwaW5lTm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52MihuZXdYLCBuZXdZKTtcclxuICAgICAgICBsZXQgc21vb3RoZWRQb3MgPSBjdXJyZW50UG9zLmxlcnAodGFyZ2V0UG9zLCAwLjEpO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudEFuZ2xlID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93Ml9TcGluZU5vZGUuYW5nbGU7XHJcbiAgICAgICAgbGV0IHNtb290aGVkQW5nbGUgPSBjYy5taXNjLmxlcnAoY3VycmVudEFuZ2xlLCBuZXdBbmdsZSwgMC4xKTtcclxuXHJcbiAgICAgICAgLy8gQ+G6rXAgbmjhuq10IHbhu4sgdHLDrSB2w6AgZ8OzYyB4b2F5IGPhu6dhIE5vZGVcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZsb3cyX1NwaW5lTm9kZS5hbmdsZSA9IHNtb290aGVkQW5nbGU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GbG93Ml9TcGluZU5vZGUuc2V0UG9zaXRpb24oc21vb3RoZWRQb3MpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gdG91Y2hMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzRG9uZUZsb3cyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTmVhck1pblBvc2l0aW9uKCkpIHtcclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RvbmVGbG93MiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuRmxvdzJfU3BpbmVOb2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDMuMiwgeyB4OiAwLCB5OiAtMTYwLCBhbmdsZTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9rZXkhXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTG9zZVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV3JvbmchXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB3aW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgXCJ3aW5cIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmRvbmVGbG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5zaG93TmV4dEZsb3coMylcclxuICAgICAgICB9LCAyLjUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNOZWFyTWluUG9zaXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvcyA9IHRoaXMuTm9kZXNDb250YWluZXIuRmxvdzJfU3BpbmVOb2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgTWF0aC5hYnMoY3VycmVudFBvcy54IC0gdGhpcy5taW5Qb3NpdGlvbi54KSA8PSB0aGlzLnRvbGVyYW5jZS54ICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGN1cnJlbnRQb3MueSAtIHRoaXMubWluUG9zaXRpb24ueSkgPD0gdGhpcy50b2xlcmFuY2UueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNvbWVPdGhlckZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc05lYXJNaW5Qb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19