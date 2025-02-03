
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
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HandController = /** @class */ (function (_super) {
    __extends(HandController, _super);
    function HandController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.GamePlay = null;
        _this.fakeHand = null;
        _this.Line = null;
        _this.Apple1 = null;
        _this.Apple2 = null;
        _this.PointA = null;
        _this.Apple_1_Points = [];
        _this.rigidBody = null;
        _this.collide = null;
        _this.targetPosition = null;
        _this.speed = 150;
        _this.currentPosition = null;
        return _this;
    }
    HandController.prototype.onLoad = function () {
        this.reset();
    };
    HandController.prototype.start = function () {
        this.currentPosition = this.node.getPosition();
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.handleContact();
    };
    HandController.prototype.reset = function () {
        constants_1.Constants.pointA_Pos = this.PointA.getPosition();
        constants_1.Constants.point1Pos = this.Apple_1_Points[0].getPosition();
        constants_1.Constants.point2Pos = this.Apple_1_Points[1].getPosition();
        constants_1.Constants.point3Pos = this.Apple_1_Points[2].getPosition();
        constants_1.Constants.point4Pos = this.Apple_1_Points[3].getPosition();
        constants_1.Constants.point5Pos = this.Apple_1_Points[4].getPosition();
        constants_1.Constants.point6Pos = this.Apple_1_Points[5].getPosition();
        constants_1.Constants.point7Pos = this.Apple_1_Points[5].getPosition();
        constants_1.Constants.point1Bdb = this.Apple_1_Points[0].getBoundingBox();
        constants_1.Constants.point2Bdb = this.Apple_1_Points[1].getBoundingBox();
        constants_1.Constants.point3Bdb = this.Apple_1_Points[2].getBoundingBox();
        constants_1.Constants.point4Bdb = this.Apple_1_Points[3].getBoundingBox();
    };
    HandController.prototype.handleContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 1) {
                if (o.name.startsWith("apple_1")) {
                    _this.checkContactApple1();
                }
                if (o.name.startsWith("apple_2")) {
                    _this.checkContactApple2();
                }
            }
            if (o.tag === 2) {
                !constants_1.Constants.isLoseGame && _this.GamePlay.getComponent(GamePlay_1.default).loseGame();
            }
        };
    };
    HandController.prototype.checkContactApple1 = function () {
        // - if touch point 1 2 3 4, run condition.
        //    if (Constants.isTouchPoint1 && Constants.isTouchPoint2 && Constants.isTouchPoint3 && Constants.isTouchPoint4) {
        //     if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[0], this.Apple_1_Points[3], 5)) {
        //       return;
        //     }
        //     return;
        //   }
        // // - if touch point 1 2 3, run condition.
        // if (Constants.isTouchPoint1 && Constants.isTouchPoint2 && Constants.isTouchPoint3) {
        //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[3], this.Apple_1_Points[2], 4)) {
        //     return;
        //   }
        //   return;
        // }
        // // - if touch point 1 2, run condition.
        // if (Constants.isTouchPoint1 && Constants.isTouchPoint2) {
        //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[2], this.Apple_1_Points[1], 3)) {
        //     return;
        //   }
        //   return;
        // }
        // // - if touch point 1, run condition.
        // if (Constants.isTouchPoint1) {
        //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[1], this.Apple_1_Points[0], 2)) {
        //     return;
        //   }
        //   return;
        // }
        // if (Ultils.Hand.checkCondition1(this.node, this.Apple_1_Points[0])) {
        //   return;
        // }
    };
    HandController.prototype.checkContactApple2 = function () {
        // - if touch point 1 2 3 4, run condition.
        //  if (Constants.isTouchPoint1 ) {
        //   if (Ultils.Hand.checkConditionWithPoint(this.node, this.Apple_1_Points[4], this.Apple_1_Points[0], 6)) {
        //     return;
        //   }
        //   return;
        // }
    };
    HandController.prototype.handleRotateHand = function () {
        if (constants_1.Constants.isTouchPoint1 && constants_1.Constants.isTouchPoint2) {
            return Ultils_1.Ultils.Hand.rotateWithPoint(this.node.getPosition());
        }
        if (constants_1.Constants.isTouchPoint1) {
            return Ultils_1.Ultils.Hand.rotateWithPoint(this.node.getPosition());
        }
        return Ultils_1.Ultils.Hand.rotateDefault(this.node.getPosition());
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
            // this.targetPosition = Constants.currentLocalPosition;
            // const direction = this.targetPosition.sub(this.node.getPosition()).normalize();
            // this.rigidBody.linearVelocity = direction.mul(this.speed);
        }
    };
    HandController.prototype.stop = function () {
        this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
        this.node.setPosition(this.currentPosition);
    };
    HandController.prototype.update = function (dt) {
        this.node.angle = this.handleRotateHand();
        (!constants_1.Constants.isTouch || constants_1.Constants.isLoseGame) && this.stop();
    };
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
        property(cc.Node)
    ], HandController.prototype, "Apple1", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Apple2", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "PointA", void 0);
    __decorate([
        property([cc.Node])
    ], HandController.prototype, "Apple_1_Points", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxIYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBQzlDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXlLQztRQXZLQyxZQUFZO1FBRVosY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFDNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixxQkFBZSxHQUFZLElBQUksQ0FBQzs7SUFrSmxDLENBQUM7SUFoSlcsK0JBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR1MsOEJBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sOEJBQUssR0FBWjtRQUNFLHFCQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQscUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELHFCQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0QscUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELHFCQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0QscUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzRCxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlELHFCQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUQscUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5RCxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFH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QUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHUywrQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU5RCxDQUFDO0lBbktEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNXO0lBakJaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F5S2xDO0lBQUQscUJBQUM7Q0F6S0QsQUF5S0MsQ0F6SzJDLEVBQUUsQ0FBQyxTQUFTLEdBeUt2RDtrQkF6S29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbHRpbHMgfSBmcm9tIFwiLi4vRGF0YS9VbHRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmYWtlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQXBwbGUxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBBcHBsZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFBvaW50QTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBBcHBsZV8xX1BvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICBjb2xsaWRlOiBjYy5Db2xsaWRlciA9IG51bGw7XHJcbiAgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gIHNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgdGhpcy5oYW5kbGVDb250YWN0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLnBvaW50QV9Qb3MgPSB0aGlzLlBvaW50QS5nZXRQb3NpdGlvbigpO1xyXG4gICAgQ29uc3RhbnRzLnBvaW50MVBvcyA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgIENvbnN0YW50cy5wb2ludDJQb3MgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICBDb25zdGFudHMucG9pbnQzUG9zID0gdGhpcy5BcHBsZV8xX1BvaW50c1syXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgQ29uc3RhbnRzLnBvaW50NFBvcyA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbM10uZ2V0UG9zaXRpb24oKTtcclxuICAgIENvbnN0YW50cy5wb2ludDVQb3MgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzRdLmdldFBvc2l0aW9uKCk7XHJcbiAgICBDb25zdGFudHMucG9pbnQ2UG9zID0gdGhpcy5BcHBsZV8xX1BvaW50c1s1XS5nZXRQb3NpdGlvbigpO1xyXG4gICAgQ29uc3RhbnRzLnBvaW50N1BvcyA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbNV0uZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICBDb25zdGFudHMucG9pbnQxQmRiID0gdGhpcy5BcHBsZV8xX1BvaW50c1swXS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgQ29uc3RhbnRzLnBvaW50MkJkYiA9IHRoaXMuQXBwbGVfMV9Qb2ludHNbMV0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIENvbnN0YW50cy5wb2ludDNCZGIgPSB0aGlzLkFwcGxlXzFfUG9pbnRzWzJdLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBDb25zdGFudHMucG9pbnQ0QmRiID0gdGhpcy5BcHBsZV8xX1BvaW50c1szXS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ29udGFjdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmlnaWRCb2R5Lm9uQmVnaW5Db250YWN0ID0gKGM6IGNjLlBoeXNpY3NDb250YWN0LCBzOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG86IGNjLlBoeXNpY3NDb2xsaWRlcikgPT4ge1xyXG4gICAgICBpZiAoby50YWcgPT09IDEpIHtcclxuICAgICAgICBpZiAoby5uYW1lLnN0YXJ0c1dpdGgoXCJhcHBsZV8xXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrQ29udGFjdEFwcGxlMSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoby5uYW1lLnN0YXJ0c1dpdGgoXCJhcHBsZV8yXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrQ29udGFjdEFwcGxlMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgIUNvbnN0YW50cy5pc0xvc2VHYW1lICYmIHRoaXMuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5sb3NlR2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0NvbnRhY3RBcHBsZTEoKTogdm9pZCB7XHJcbiAgICAgICAvLyAtIGlmIHRvdWNoIHBvaW50IDEgMiAzIDQsIHJ1biBjb25kaXRpb24uXHJcbiAgICAvLyAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDMgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuICAgIC8vICAgICBpZiAoVWx0aWxzLkhhbmQuY2hlY2tDb25kaXRpb25XaXRoUG9pbnQodGhpcy5ub2RlLCB0aGlzLkFwcGxlXzFfUG9pbnRzWzBdLCB0aGlzLkFwcGxlXzFfUG9pbnRzWzNdLCA1KSkge1xyXG4gICAgLy8gICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyAgIH1cclxuXHJcblxyXG4gICAgLy8gLy8gLSBpZiB0b3VjaCBwb2ludCAxIDIgMywgcnVuIGNvbmRpdGlvbi5cclxuICAgIC8vIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MiAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Mykge1xyXG4gICAgLy8gICBpZiAoVWx0aWxzLkhhbmQuY2hlY2tDb25kaXRpb25XaXRoUG9pbnQodGhpcy5ub2RlLCB0aGlzLkFwcGxlXzFfUG9pbnRzWzNdLCB0aGlzLkFwcGxlXzFfUG9pbnRzWzJdLCA0KSkge1xyXG4gICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIC0gaWYgdG91Y2ggcG9pbnQgMSAyLCBydW4gY29uZGl0aW9uLlxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQyKSB7XHJcbiAgICAvLyAgIGlmIChVbHRpbHMuSGFuZC5jaGVja0NvbmRpdGlvbldpdGhQb2ludCh0aGlzLm5vZGUsIHRoaXMuQXBwbGVfMV9Qb2ludHNbMl0sIHRoaXMuQXBwbGVfMV9Qb2ludHNbMV0sIDMpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gLy8gLSBpZiB0b3VjaCBwb2ludCAxLCBydW4gY29uZGl0aW9uLlxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbiAgICAvLyAgIGlmIChVbHRpbHMuSGFuZC5jaGVja0NvbmRpdGlvbldpdGhQb2ludCh0aGlzLm5vZGUsIHRoaXMuQXBwbGVfMV9Qb2ludHNbMV0sIHRoaXMuQXBwbGVfMV9Qb2ludHNbMF0sIDIpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gaWYgKFVsdGlscy5IYW5kLmNoZWNrQ29uZGl0aW9uMSh0aGlzLm5vZGUsIHRoaXMuQXBwbGVfMV9Qb2ludHNbMF0pKSB7XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNoZWNrQ29udGFjdEFwcGxlMigpOiB2b2lkIHtcclxuICAgIC8vIC0gaWYgdG91Y2ggcG9pbnQgMSAyIDMgNCwgcnVuIGNvbmRpdGlvbi5cclxuICAgIC8vICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgKSB7XHJcbiAgICAvLyAgIGlmIChVbHRpbHMuSGFuZC5jaGVja0NvbmRpdGlvbldpdGhQb2ludCh0aGlzLm5vZGUsIHRoaXMuQXBwbGVfMV9Qb2ludHNbNF0sIHRoaXMuQXBwbGVfMV9Qb2ludHNbMF0sIDYpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZUhhbmQoKTogbnVtYmVyIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Mikge1xyXG4gICAgICByZXR1cm4gVWx0aWxzLkhhbmQucm90YXRlV2l0aFBvaW50KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgcmV0dXJuIFVsdGlscy5IYW5kLnJvdGF0ZVdpdGhQb2ludCh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFVsdGlscy5IYW5kLnJvdGF0ZURlZmF1bHQodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0Nhbk1vdmUpIHtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGlmICghQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24pXHJcbiAgICAgIHRoaXMuZmFrZUhhbmQuc2V0UG9zaXRpb24oQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uKVxyXG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAvLyB0aGlzLnRhcmdldFBvc2l0aW9uID0gQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uO1xyXG4gICAgICAvLyBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnRhcmdldFBvc2l0aW9uLnN1Yih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSkubm9ybWFsaXplKCk7XHJcbiAgICAgIC8vIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gZGlyZWN0aW9uLm11bCh0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcbiAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5jdXJyZW50UG9zaXRpb24pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5oYW5kbGVSb3RhdGVIYW5kKCk7XHJcbiAgICAoIUNvbnN0YW50cy5pc1RvdWNoIHx8IENvbnN0YW50cy5pc0xvc2VHYW1lKSAmJiB0aGlzLnN0b3AoKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=