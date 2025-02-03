
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/HandController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '730b3Z1IwJDqI1WXeAS4N6z', 'HandController');
// Script/Controller/HandController.ts

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
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HandController = /** @class */ (function (_super) {
    __extends(HandController, _super);
    function HandController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.GraphicsController = null;
        _this.GamePlay = null;
        _this.fakeHand = null;
        _this.Line = null;
        _this.obstaclePoints = [];
        _this.rigidBody = null;
        _this.collide = null;
        _this.targetPosition = null;
        _this.speed = 150;
        _this.currentPosition = null;
        return _this;
    }
    HandController.prototype.onLoad = function () {
    };
    HandController.prototype.start = function () {
        this.handleContact();
    };
    HandController.prototype.handleContact = function () {
        this.currentPosition = this.node.getPosition();
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 2) {
                // !Constants.isLoseGame && this.GamePlay.getComponent(GamePlay).loseGame();
            }
        };
    };
    HandController.prototype.handleCheckIntersects = function () {
        var handBdx = this.fakeHand.getBoundingBox();
        for (var i = 0; i < this.obstaclePoints.length; i++) {
            var point = this.obstaclePoints[i];
            var iBdx = point.getBoundingBox();
            if (handBdx.intersects(iBdx)) {
                var pointPos = point.getPosition();
                if (constants_1.Constants.startPos.x === pointPos.x)
                    return;
                this.GraphicsController.createGraphics();
                constants_1.Constants.startPos = pointPos;
                constants_1.Constants.touchPointsPos.push(pointPos);
                console.log(this.GraphicsController.graphicsArr);
            }
        }
    };
    HandController.prototype.handleRotateHand = function (startPos) {
        var thisPos = new cc.Vec2(startPos.x, startPos.y);
        var directionVector = thisPos.sub(this.node.getPosition());
        var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
        var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
        this.node.angle = rotationDegrees - 20;
    };
    HandController.prototype.move = function () {
        if (!constants_1.Constants.isCanMove) {
            this.stop();
            return;
        }
        if (!constants_1.Constants.ironSource.isEndGame) {
            this.node.setPosition(constants_1.Constants.currentLocalPosition);
            this.fakeHand.setPosition(constants_1.Constants.currentLocalPosition);
            this.currentPosition = this.node.getPosition();
        }
    };
    HandController.prototype.stop = function () {
        this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
        this.node.setPosition(this.currentPosition);
    };
    HandController.prototype.update = function (dt) {
        (!constants_1.Constants.isTouch || constants_1.Constants.isLoseGame) && this.stop();
        constants_1.Constants.isTouch && this.handleRotateHand(constants_1.Constants.startPos);
        constants_1.Constants.isTouch && this.handleCheckIntersects();
    };
    __decorate([
        property(GraphicsController_1.default)
    ], HandController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "fakeHand", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Line", void 0);
    __decorate([
        property([cc.Node])
    ], HandController.prototype, "obstaclePoints", void 0);
    HandController = __decorate([
        ccclass
    ], HandController);
    return HandController;
}(cc.Component));
exports.default = HandController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxIYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsMkRBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBaUdDO1FBL0ZDLFlBQVk7UUFFWix3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRTlDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIscUJBQWUsR0FBWSxJQUFJLENBQUM7O0lBOEVsQyxDQUFDO0lBM0VXLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDhCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLHNDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFvQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7WUFDakcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFD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QUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QscUJBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzs4REFDaUI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MERBQ1c7SUFiWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBaUdsQztJQUFELHFCQUFDO0NBakdELEFBaUdDLENBakcyQyxFQUFFLENBQUMsU0FBUyxHQWlHdkQ7a0JBakdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgR3JhcGhpY3NDb250cm9sbGVyIGZyb20gXCIuL0dyYXBoaWNzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmYWtlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBvYnN0YWNsZVBvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICBjb2xsaWRlOiBjYy5Db2xsaWRlciA9IG51bGw7XHJcbiAgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gIHNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlQ29udGFjdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ29udGFjdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5vbkJlZ2luQ29udGFjdCA9IChjOiBjYy5QaHlzaWNzQ29udGFjdCwgczogY2MuUGh5c2ljc0NvbGxpZGVyLCBvOiBjYy5QaHlzaWNzQ29sbGlkZXIpID0+IHtcclxuICAgICAgaWYgKG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgLy8gIUNvbnN0YW50cy5pc0xvc2VHYW1lICYmIHRoaXMuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5sb3NlR2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDaGVja0ludGVyc2VjdHMoKTogdm9pZCB7XHJcbiAgICBsZXQgaGFuZEJkeCA9IHRoaXMuZmFrZUhhbmQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm9ic3RhY2xlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBwb2ludCA9IHRoaXMub2JzdGFjbGVQb2ludHNbaV07XHJcbiAgICAgIGxldCBpQmR4ID0gcG9pbnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGhhbmRCZHguaW50ZXJzZWN0cyhpQmR4KSApIHtcclxuICAgICAgICBsZXQgcG9pbnRQb3MgPSBwb2ludC5nZXRQb3NpdGlvbigpOyBcclxuICAgICAgICBpZihDb25zdGFudHMuc3RhcnRQb3MueCA9PT0gcG9pbnRQb3MueCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLnN0YXJ0UG9zID0gcG9pbnRQb3M7XHJcbiAgICAgICAgQ29uc3RhbnRzLnRvdWNoUG9pbnRzUG9zLnB1c2gocG9pbnRQb3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzQXJyKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUm90YXRlSGFuZChzdGFydFBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgbGV0IHRoaXNQb3MgPSBuZXcgY2MuVmVjMihzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSB0aGlzUG9zLnN1Yih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHRoaXMubm9kZS5hbmdsZSA9IHJvdGF0aW9uRGVncmVlcyAtIDIwO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0Nhbk1vdmUpIHtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbilcclxuICAgICAgdGhpcy5mYWtlSGFuZC5zZXRQb3NpdGlvbihDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24pXHJcbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG4gICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY3VycmVudFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICghQ29uc3RhbnRzLmlzVG91Y2ggfHwgQ29uc3RhbnRzLmlzTG9zZUdhbWUpICYmIHRoaXMuc3RvcCgpO1xyXG4gICAgQ29uc3RhbnRzLmlzVG91Y2ggJiYgdGhpcy5oYW5kbGVSb3RhdGVIYW5kKENvbnN0YW50cy5zdGFydFBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNUb3VjaCAmJiB0aGlzLmhhbmRsZUNoZWNrSW50ZXJzZWN0cygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19