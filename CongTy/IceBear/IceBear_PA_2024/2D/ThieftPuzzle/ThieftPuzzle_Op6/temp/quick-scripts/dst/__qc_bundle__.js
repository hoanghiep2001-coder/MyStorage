
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/GraphicsController');
require('./assets/Script/Controller/HandController');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var GamePlay_1 = require("../Controller/GamePlay");
var HandController_1 = require("../Controller/HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.HandController = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.GamePlay.cage.x = 150;
        this.GamePlay.background.scale = 0.55;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.GamePlay.cage.x = 150;
        this.GamePlay.background.scale = 0.55;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.GamePlay.cage.x = 120;
        this.GamePlay.background.scale = 0.65;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.GamePlay.cage.x = 120;
            this.GamePlay.background.scale = 0.55;
        }
        else {
            this.GamePlay.cage.x = 120;
            this.GamePlay.background.scale = 0.55;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(HandController_1.default)
    ], Responsive.prototype, "HandController", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUdwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlIQztRQTlHRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFrR2hELENBQUM7SUFoR2EsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFH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QyxRQUFRLENBQUMsd0JBQWMsQ0FBQztzREFDYTtJQUxyQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUg5QjtJQUFELGlCQUFDO0NBakhELEFBaUhDLENBakh1QyxFQUFFLENBQUMsU0FBUyxHQWlIbkQ7a0JBakhvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBIYW5kQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9IYW5kQ29udHJvbGxlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEhhbmRDb250cm9sbGVyKVxyXG4gICAgSGFuZENvbnRyb2xsZXI6IEhhbmRDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDE1MDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDE1MDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5jYWdlLnggPSAxMjA7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5iYWNrZ3JvdW5kLnNjYWxlID0gMC42NTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcblxyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA+PSAwLjYgJiYgY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC42Mikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbW9iaWxlIG1vZGUgYXBwbG92aW5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDEyMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5iYWNrZ3JvdW5kLnNjYWxlID0gMC41NTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDEyMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5iYWNrZ3JvdW5kLnNjYWxlID0gMC41NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var constants_1 = require("./constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rotateDefault = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.pointA_Pos);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
var rotateWithPoint = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.newPoint);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
// const checkConditionOfPoint1 = (hand: cc.Node, point: cc.Node): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;
//     if (
//         (boudingBox.intersects(point.getBoundingBox()) && Constants.newPoint !== point.getPosition())
//     ) {
//         Constants.isTouchPoint1 = true;
//         result = true;
//     }
//     return result;
// }
// const checkConditionWithPoint = (hand: cc.Node, point: cc.Node, oldPoint: cc.Node, index: number): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;
//     if (
//         boudingBox.intersects(point.getBoundingBox())
//         && Constants.newPoint !== point.getPosition()
//     ) {
//         result = true;
//     }
//     return result;
// }
var checkTouchCondition1 = function (hand, point, graphic, pointCompare) {
    if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
        return;
    }
    if (hand.x < point.x && !constants_1.Constants.isTouchPoint2) {
        constants_1.Constants.isDrawPoint1 = false;
        constants_1.Constants.isTouchPoint1 = false;
        constants_1.Constants.newPoint = constants_1.Constants.pointA_Pos;
        graphic.clear();
        return;
    }
    if (hand.x > point.x && hand.y > point.y && !constants_1.Constants.isTouchPoint1) {
        constants_1.Constants.isTouchPoint1 = true;
        constants_1.Constants.newPoint = point.getPosition();
    }
};
// const checkTouchCondition2 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x > newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1) {
//         Constants.isTouchPoint2 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition3 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1 && !Constants.isTouchPoint3) {
//         Constants.isTouchPoint3 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition4 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
//         Constants.isTouchPoint4 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition5 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphic: cc.Graphics): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint4 && !Constants.isTouchPoint5) {
//         Constants.isTouchPoint5 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
var checkTouchCondition6 = function (hand, newPoint, oldPoint, graphics) {
    if (!constants_1.Constants.isTouchPoint2 && !constants_1.Constants.isTouchPoint3 && !constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x && constants_1.Constants.isTouchPoint1) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
    if (constants_1.Constants.isTouchPoint2 && constants_1.Constants.isTouchPoint3 && constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point4Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
};
var checkTouchCondition7 = function (hand) {
    if (constants_1.Constants.isTouchPoint1) {
        if (hand.x < constants_1.Constants.point5Pos.x) {
            constants_1.Constants.oldPoint = constants_1.Constants.pointA_Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
        }
    }
};
var checkTouchCondition8 = function (hand, graphic) {
    if (constants_1.Constants.isTouchPoint1 && constants_1.Constants.isTouchPoint6) {
        if (hand.x < constants_1.Constants.point6Pos.x && constants_1.Constants.isTouchPoint7) {
            graphic.clear();
            constants_1.Constants.isTouchPoint7 = false;
            constants_1.Constants.isDrawPoint7 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point1Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point5Pos;
            return;
        }
        if (hand.x > constants_1.Constants.point6Pos.x) {
            constants_1.Constants.isTouchPoint7 = true;
            constants_1.Constants.oldPoint = constants_1.Constants.point5Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point6Pos;
        }
    }
};
var checkTouchCondition9 = function (boudingbox, hand) {
    if (constants_1.Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
        constants_1.Constants.isTouchFence = true;
    }
    else {
        constants_1.Constants.isTouchFence = false;
    }
};
var checkTouchPoint = function (fence, hand, fenceLeft) {
    var f_BoudingBox = fence.getBoundingBox();
    var fl_BoudingBox = fenceLeft.getBoundingBox();
    var h_BoudingBox = hand.getBoundingBox();
    var checkPosX = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    var checkPosY = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
    // // touch point 7 
    // if(Constants.isTouchPoint7) {
    //     if(checkPosX < Constants.point6Pos.x) {
    //         return;
    //     }
    //     if(checkPosX < Constants.point6Pos.x && checkPosY > Constants.point6Pos.y) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         // Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch point 6
    if (constants_1.Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosY < constants_1.Constants.point7Pos.y) {
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch fence
    if (f_BoudingBox.intersects(h_BoudingBox)) {
        if (constants_1.Constants.fencePoint.y > checkPosY) {
            return;
        }
        if (constants_1.Constants.fencePoint.y < checkPosY && constants_1.Constants.point2Pos.x > checkPosX) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch point 3 && 4
    if (h_BoudingBox.intersects(constants_1.Constants.point3Bdb) || h_BoudingBox.intersects(constants_1.Constants.point4Bdb)) {
        if (checkPosY < constants_1.Constants.point3Pos.y && checkPosX < constants_1.Constants.point3Pos.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        return;
    }
    // tooouch fence Left
    if (fl_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosX < fenceLeft.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
};
var Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
};
var TouchArea = {
    checkTouchCondition1: checkTouchCondition1,
    // checkTouchCondition2: checkTouchCondition2,
    // checkTouchCondition3: checkTouchCondition3,
    // checkTouchCondition4: checkTouchCondition4,
    // checkTouchCondition5: checkTouchCondition5,
    checkTouchCondition6: checkTouchCondition6,
    checkTouchCondition7: checkTouchCondition7,
    checkTouchCondition8: checkTouchCondition8,
    // checkTouchCondition9: checkTouchCondition9,
    checkTouchPoint: checkTouchPoint,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.Hand = Hand;
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBa0I7SUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsT0FBTyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsU0FBa0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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QUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQTtBQUdELElBQU0sSUFBSSxHQUFHO0lBQ1QsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZUFBZSxFQUFFLGVBQWU7Q0FHbkMsQ0FBQTtBQUNELElBQU0sU0FBUyxHQUFHO0lBQ2Qsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5QyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLG9CQUFvQixFQUFFLG9CQUFvQjtJQUMxQyw4Q0FBOEM7SUFDOUMsZUFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQTtBQUVEO0lBQUE7SUFLQSxDQUFDO0lBSFUsV0FBSSxHQUFnQixJQUFJLENBQUM7SUFDekIsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRW5ELGFBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHJvdGF0ZURlZmF1bHQgPSAoYmFzZVBvaW50OiBjYy5WZWMyKTogbnVtYmVyID0+IHtcclxuICAgIGxldCB0aGlzUG9zID0gbmV3IGNjLlZlYzIoYmFzZVBvaW50LngsIGJhc2VQb2ludC55KTtcclxuICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSB0aGlzUG9zLnN1YihDb25zdGFudHMucG9pbnRBX1Bvcyk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHJldHVybiByb3RhdGlvbkRlZ3JlZXMgKyAyMDtcclxufVxyXG5cclxuY29uc3Qgcm90YXRlV2l0aFBvaW50ID0gKGJhc2VQb2ludDogY2MuVmVjMik6IG51bWJlciA9PiB7XHJcbiAgICBsZXQgdGhpc1BvcyA9IG5ldyBjYy5WZWMyKGJhc2VQb2ludC54LCBiYXNlUG9pbnQueSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gdGhpc1Bvcy5zdWIoQ29uc3RhbnRzLm5ld1BvaW50KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uUmFkaWFucyA9IE1hdGguYXRhbjIoZGlyZWN0aW9uVmVjdG9yLnksIGRpcmVjdGlvblZlY3Rvci54KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlcyA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyb3RhdGlvblJhZGlhbnMpO1xyXG4gICAgcmV0dXJuIHJvdGF0aW9uRGVncmVlcyArIDIwO1xyXG59XHJcblxyXG5cclxuLy8gY29uc3QgY2hlY2tDb25kaXRpb25PZlBvaW50MSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSk6IGJvb2xlYW4gPT4ge1xyXG4vLyAgICAgbGV0IGJvdWRpbmdCb3ggPSBoYW5kLmdldEJvdW5kaW5nQm94KCk7XHJcbi8vICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICAgIChib3VkaW5nQm94LmludGVyc2VjdHMocG9pbnQuZ2V0Qm91bmRpbmdCb3goKSkgJiYgQ29uc3RhbnRzLm5ld1BvaW50ICE9PSBwb2ludC5nZXRQb3NpdGlvbigpKVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgPSB0cnVlO1xyXG4vLyAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tDb25kaXRpb25XaXRoUG9pbnQgPSAoaGFuZDogY2MuTm9kZSwgcG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbi8vICAgICBsZXQgYm91ZGluZ0JveCA9IGhhbmQuZ2V0Qm91bmRpbmdCb3goKTtcclxuLy8gICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgICAgYm91ZGluZ0JveC5pbnRlcnNlY3RzKHBvaW50LmdldEJvdW5kaW5nQm94KCkpXHJcbi8vICAgICAgICAgJiYgQ29uc3RhbnRzLm5ld1BvaW50ICE9PSBwb2ludC5nZXRQb3NpdGlvbigpXHJcbi8vICAgICApIHtcclxuLy8gICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uMSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MsIHBvaW50Q29tcGFyZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKGhhbmQueCA+IHBvaW50Q29tcGFyZS54ICYmIGhhbmQueSA+IHBvaW50Q29tcGFyZS55KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZihoYW5kLnggPCBwb2ludC54ICYmICAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50MSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuICAgICAgICAgICAgZ3JhcGhpYy5jbGVhcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbmQueCA+IHBvaW50LnggJiYgaGFuZC55ID4gcG9pbnQueSAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gcG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjIgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPCBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgPSB0cnVlO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjMgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAmJiBoYW5kLnkgPCBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50Mykge1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQzID0gdHJ1ZTtcclxuLy8gICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb240ID0gKGhhbmQ6IGNjLk5vZGUsIG5ld1BvaW50OiBjYy5Ob2RlLCBvbGRQb2ludDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGhhbmQueCA8IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NCA9IHRydWU7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBuZXdQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uNSA9IChoYW5kOiBjYy5Ob2RlLCBuZXdQb2ludDogY2MuTm9kZSwgb2xkUG9pbnQ6IGNjLk5vZGUsIGdyYXBoaWM6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ0ICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50NSkge1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ1ID0gdHJ1ZTtcclxuLy8gICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb242ID0gKGhhbmQ6IGNjLk5vZGUsIG5ld1BvaW50OiBjYy5Ob2RlLCBvbGRQb2ludDogY2MuTm9kZSwgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbiAgICBpZighQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuICAgICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGhhbmQueCA+IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQzICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ0KSB7XHJcbiAgICAgICAgaWYgKGhhbmQueCA8IG5ld1BvaW50LngpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQ0UG9zOyBcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmQueCA+IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uNyA9IChoYW5kOiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgIGlmKGhhbmQueCA8IENvbnN0YW50cy5wb2ludDVQb3MueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb244ID0gKGhhbmQ6IGNjLk5vZGUsIGdyYXBoaWM6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbiAgICBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Nikge1xyXG4gICAgICAgIGlmKGhhbmQueCA8IENvbnN0YW50cy5wb2ludDZQb3MueCAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Nykge1xyXG4gICAgICAgICAgICBncmFwaGljLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDcgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50NVBvcztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaGFuZC54ID4gQ29uc3RhbnRzLnBvaW50NlBvcy54KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50NVBvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50NlBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb245ID0gKGJvdWRpbmdib3g6IGNjLlJlY3QsIGhhbmQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIGJvdWRpbmdib3guaW50ZXJzZWN0cyhoYW5kLmdldEJvdW5kaW5nQm94KCkpKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hGZW5jZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIENvbnN0YW50cy5pc1RvdWNoRmVuY2UgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hQb2ludCA9IChmZW5jZTogY2MuTm9kZSwgaGFuZDogY2MuTm9kZSwgZmVuY2VMZWZ0OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBsZXQgZl9Cb3VkaW5nQm94ID0gZmVuY2UuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBmbF9Cb3VkaW5nQm94ID0gZmVuY2VMZWZ0LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgaF9Cb3VkaW5nQm94ID0gaGFuZC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGNoZWNrUG9zWCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgbGV0IGNoZWNrUG9zWSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuXHJcblxyXG4gICAgLy8gLy8gdG91Y2ggcG9pbnQgNyBcclxuICAgIC8vIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3KSB7XHJcbiAgICAvLyAgICAgaWYoY2hlY2tQb3NYIDwgQ29uc3RhbnRzLnBvaW50NlBvcy54KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmKGNoZWNrUG9zWCA8IENvbnN0YW50cy5wb2ludDZQb3MueCAmJiBjaGVja1Bvc1kgPiBDb25zdGFudHMucG9pbnQ2UG9zLnkpIHtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICAgICAgLy8gQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvdWNoIHBvaW50IDZcclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ICYmIGZfQm91ZGluZ0JveC5pbnRlcnNlY3RzKGhfQm91ZGluZ0JveCkpIHtcclxuICAgICAgICBpZihjaGVja1Bvc1kgPCBDb25zdGFudHMucG9pbnQ3UG9zLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRvdWNoIGZlbmNlXHJcbiAgICBpZihmX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhoX0JvdWRpbmdCb3gpKSB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA+IGNoZWNrUG9zWSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA8IGNoZWNrUG9zWSAmJiBDb25zdGFudHMucG9pbnQyUG9zLnggPiBjaGVja1Bvc1gpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG91Y2ggcG9pbnQgMyAmJiA0XHJcbiAgICBpZihoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQzQmRiKSB8fCBoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQ0QmRiKSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWSA8IENvbnN0YW50cy5wb2ludDNQb3MueSAmJiBjaGVja1Bvc1ggPCBDb25zdGFudHMucG9pbnQzUG9zLngpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG9vb3VjaCBmZW5jZSBMZWZ0XHJcbiAgICBpZihmbF9Cb3VkaW5nQm94LmludGVyc2VjdHMoaF9Cb3VkaW5nQm94KSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWCA8ICBmZW5jZUxlZnQueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBIYW5kID0ge1xyXG4gICAgcm90YXRlRGVmYXVsdDogcm90YXRlRGVmYXVsdCxcclxuICAgIHJvdGF0ZVdpdGhQb2ludDogcm90YXRlV2l0aFBvaW50LFxyXG4gICAgLy8gY2hlY2tDb25kaXRpb24xOiBjaGVja0NvbmRpdGlvbk9mUG9pbnQxLFxyXG4gICAgLy8gY2hlY2tDb25kaXRpb25XaXRoUG9pbnQ6IGNoZWNrQ29uZGl0aW9uV2l0aFBvaW50LFxyXG59XHJcbmNvbnN0IFRvdWNoQXJlYSA9IHtcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb24xOiBjaGVja1RvdWNoQ29uZGl0aW9uMSxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb24yOiBjaGVja1RvdWNoQ29uZGl0aW9uMixcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb24zOiBjaGVja1RvdWNoQ29uZGl0aW9uMyxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb240OiBjaGVja1RvdWNoQ29uZGl0aW9uNCxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb241OiBjaGVja1RvdWNoQ29uZGl0aW9uNSxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb242OiBjaGVja1RvdWNoQ29uZGl0aW9uNixcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb243OiBjaGVja1RvdWNoQ29uZGl0aW9uNyxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb244OiBjaGVja1RvdWNoQ29uZGl0aW9uOCxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb245OiBjaGVja1RvdWNoQ29uZGl0aW9uOSxcclxuICAgIGNoZWNrVG91Y2hQb2ludDogY2hlY2tUb3VjaFBvaW50LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgSGFuZDogdHlwZW9mIEhhbmQgPSBIYW5kO1xyXG4gICAgc3RhdGljIFRvdWNoQXJlYTogdHlwZW9mIFRvdWNoQXJlYSA9IFRvdWNoQXJlYTtcclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1589022394?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkMTU4OTAyMjM5ND9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.drawSound = null;
        _this.stunSound = null;
        _this.naniSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "stunSound":
                    this.stunSound.play();
                    break;
                case "naniSound":
                    this.naniSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "stunSound":
                this.stunSound.stop();
                break;
            case "naniSound":
                this.naniSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.drawSound.stop();
        this.stunSound.stop();
        this.naniSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stunSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "naniSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwREM7UUF4REcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDOztJQWdEckMsQ0FBQztJQTlDVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFWaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBEaEM7SUFBRCxtQkFBQztDQTFERCxBQTBEQyxDQTFEeUMsRUFBRSxDQUFDLFNBQVMsR0EwRHJEO2tCQTFEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcmF3U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHN0dW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmFuaVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1blNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbmlTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // Node
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_Button = null;
        // UI
        _this.background = null;
        _this.thieftDefault = null;
        _this.guardDefault = null;
        _this.guardDefault_Flag = null;
        _this.thieftCTA = null;
        _this.guardCTA = null;
        _this.tree = null;
        _this.glass = null;
        _this.cage = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.initPhysics();
    };
    GamePlay.prototype.start = function () {
        this.thieftCTA.active = false;
        this.guardCTA.active = false;
        this.guardDefault_Flag.active = false;
    };
    GamePlay.prototype.loseGame = function () {
        var _this = this;
        constants_1.Constants.isLoseGame = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.naniSound);
        // fill color for graphics to red
        this.GraphicsController.getComponent(cc.Graphics).fillColor = cc.Color.RED;
        this.GraphicsController.getComponent(cc.Graphics).strokeColor = cc.Color.RED;
        this.GraphicsController.graphicsNodes.forEach(function (graphic) {
            graphic.clear();
        });
        if (constants_1.Constants.isTouchPoint1) {
            this.GraphicsController.graphicsNodes[1].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
            this.GraphicsController.graphicsNodes[1].lineTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[1].stroke();
            this.GraphicsController.graphicsNodes[2].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].moveTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[2].lineTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[2].stroke();
            this.GraphicsController.graphicsNodes[6].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[6].lineTo(constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
            this.GraphicsController.graphicsNodes[6].stroke();
        }
        // show flag
        this.guardDefault_Flag.active = true;
        this.scheduleOnce(function () {
            constants_1.Constants.ironSource.isEndGame = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stunSound);
            // active CTA
            _this.guardDefault.active = false;
            _this.thieftDefault.active = false;
            _this.guardCTA.active = true;
            _this.thieftCTA.active = true;
            // destroy hand
            _this.Hand.active = false;
            _this.Hand.destroy();
            _this.GraphicsController.graphicsNodes.forEach(function (graphic) { return graphic.clear(); });
            _this.GraphicsController.getComponent(cc.Graphics).clear();
        }, 1.5);
        this.scheduleOnce(function () {
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.CTA_Button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 2.5);
    };
    GamePlay.prototype.initPhysics = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        collisionManager.enabledDrawBoundingBox = true;
    };
    GamePlay.prototype.update = function (dt) {
        // ironsource
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], GamePlay.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_Button", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault_Flag", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "tree", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "glass", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "cage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFHaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrSUM7UUEvSEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0Qyx3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRzlDLE9BQU87UUFFUCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsS0FBSztRQUVMLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBMkZ2QixDQUFDO0lBeEZXLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMs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QUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQXZDRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0k1QjtJQUFELGVBQUM7Q0FsSUQsQUFrSUMsQ0FsSXFDLEVBQUUsQ0FBQyxTQUFTLEdBa0lqRDtrQkFsSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHcmFwaGljc0NvbnRyb2xsZXIgZnJvbSBcIi4vR3JhcGhpY3NDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBOb2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIFVJXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRoaWVmdERlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGd1YXJkRGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ3VhcmREZWZhdWx0X0ZsYWc6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRoaWVmdENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ3VhcmRDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0cmVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBnbGFzczogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY2FnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGhpZWZ0Q1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5ndWFyZENUQS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ3VhcmREZWZhdWx0X0ZsYWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGxvc2VHYW1lKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzTG9zZUdhbWUgPSB0cnVlO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submFuaVNvdW5kKTtcclxuICAgIFxyXG4gICAgLy8gZmlsbCBjb2xvciBmb3IgZ3JhcGhpY3MgdG8gcmVkXHJcbiAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzLmZvckVhY2goZ3JhcGhpYyA9PiB7XHJcbiAgICAgIGdyYXBoaWMuY2xlYXIoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1sxXS5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0uc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0ubW92ZVRvKENvbnN0YW50cy5wb2ludEFfUG9zLngsIENvbnN0YW50cy5wb2ludEFfUG9zLnkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzFdLmxpbmVUbyhDb25zdGFudHMucG9pbnQxUG9zLngsIENvbnN0YW50cy5wb2ludDFQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0uc3Ryb2tlKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMl0uZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLm1vdmVUbyhDb25zdGFudHMucG9pbnQxUG9zLngsIENvbnN0YW50cy5wb2ludDFQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMl0ubGluZVRvKENvbnN0YW50cy5wb2ludDVQb3MueCwgQ29uc3RhbnRzLnBvaW50NVBvcy55KTtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1syXS5zdHJva2UoKTtcclxuXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0uZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLm1vdmVUbyhDb25zdGFudHMucG9pbnQ1UG9zLngsIENvbnN0YW50cy5wb2ludDVQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0ubGluZVRvKENvbnN0YW50cy5wb2ludDZQb3MueCwgQ29uc3RhbnRzLnBvaW50NlBvcy55KTtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1s2XS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IGZsYWdcclxuICAgIHRoaXMuZ3VhcmREZWZhdWx0X0ZsYWcuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdHVuU291bmQpO1xyXG5cclxuICAgICAgLy8gYWN0aXZlIENUQVxyXG4gICAgICB0aGlzLmd1YXJkRGVmYXVsdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aGllZnREZWZhdWx0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmd1YXJkQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudGhpZWZ0Q1RBLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAvLyBkZXN0cm95IGhhbmRcclxuICAgICAgdGhpcy5IYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkhhbmQuZGVzdHJveSgpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXMuZm9yRWFjaChncmFwaGljID0+IGdyYXBoaWMuY2xlYXIoKSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgICAgXHJcbiAgICB9LCAxLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpICA9PiB7XHJcbiAgICAgIHRoaXMuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDVEFfQW5pbVwiKTtcclxuXHJcbiAgICAgIHRoaXMuQ1RBX0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIH0sIDIuNSlcclxuICB9XHJcbiAgXHJcblxyXG4gIHByaXZhdGUgaW5pdFBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgbGV0IGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4c073bv1FK85YFJROX1Ttb', 'GraphicsController');
// Script/Controller/GraphicsController.ts

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
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GraphicsController = /** @class */ (function (_super) {
    __extends(GraphicsController, _super);
    function GraphicsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.graphicsNodes = [];
        _this.graphics = null;
        _this.handController = null;
        return _this;
    }
    GraphicsController.prototype.start = function () {
        this.graphics = this.getComponent(cc.Graphics);
        this.handController = this.hand.getComponent(HandController_1.default);
    };
    GraphicsController.prototype.handleDrawLine = function (start, end) {
        if (constants_1.Constants.newPoint) {
            start = constants_1.Constants.newPoint;
        }
        this.graphics.clear();
        this.graphics.lineWidth = 7;
        this.graphics.moveTo(start.x, start.y);
        this.graphics.lineTo(end.x, end.y);
        this.graphics.stroke();
    };
    GraphicsController.prototype.handleDrawWithTouchPoint = function () {
        if (constants_1.Constants.isTouchPoint1 && !constants_1.Constants.isDrawPoint1) {
            this.handleDrawOldLine(1);
            return;
        }
        if (constants_1.Constants.isTouchPoint2 && !constants_1.Constants.isDrawPoint2) {
            this.handleDrawOldLine(2);
            return;
        }
        if (constants_1.Constants.isTouchPoint3 && !constants_1.Constants.isDrawPoint3) {
            this.handleDrawOldLine(3);
            return;
        }
        if (constants_1.Constants.isTouchPoint4 && !constants_1.Constants.isDrawPoint4) {
            this.handleDrawOldLine(4);
            return;
        }
        if (constants_1.Constants.isTouchPoint5 && !constants_1.Constants.isDrawPoint5) {
            this.handleDrawOldLine(5);
            return;
        }
        if (constants_1.Constants.isTouchPoint6 && !constants_1.Constants.isDrawPoint6) {
            this.handleDrawOldLine(6);
            return;
        }
        if (constants_1.Constants.isTouchPoint7 && !constants_1.Constants.isDrawPoint7) {
            this.handleDrawOldLine(7);
            return;
        }
    };
    GraphicsController.prototype.handleDrawOldLine = function (step) {
        this.graphicsNodes[step - 1].clear();
        this.graphicsNodes[step - 1].lineWidth = 6;
        if (constants_1.Constants.isLoseGame) {
            this.graphicsNodes[step - 1].fillColor = cc.Color.RED;
            this.graphicsNodes[step - 1].strokeColor = cc.Color.RED;
        }
        switch (step) {
            case 1:
                if (constants_1.Constants.newPoint) {
                    constants_1.Constants.isDrawPoint1 = true;
                    this.graphicsNodes[step - 1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
                    // this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    var controlPointX = constants_1.Constants.point1Pos.x - 15;
                    var controlPointY = constants_1.Constants.point1Pos.y - 15;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY, constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
                }
                break;
            case 2:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint2 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].quadraticCurveTo((this.handController.Apple_1_Points[1].x + this.handController.Apple_1_Points[0].x) / 2, (this.handController.Apple_1_Points[1].y + this.handController.Apple_1_Points[0].y) / 2 + 3, this.handController.Apple_1_Points[1].x, this.handController.Apple_1_Points[1].y);
                }
                break;
            case 3:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint3 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[1].x, this.handController.Apple_1_Points[1].y);
                    var controlPointX = (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[1].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[1].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX + 6, controlPointY, this.handController.Apple_1_Points[2].x, this.handController.Apple_1_Points[2].y);
                }
                break;
            case 4:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint4 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[2].x, this.handController.Apple_1_Points[2].y);
                    var controlPointX = (this.handController.Apple_1_Points[2].x + this.handController.Apple_1_Points[3].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[2].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY - 6, this.handController.Apple_1_Points[3].x, this.handController.Apple_1_Points[3].y);
                }
                break;
            case 5:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint5 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[3].x, this.handController.Apple_1_Points[3].y);
                    var controlPointX = (this.handController.Apple_1_Points[0].x + this.handController.Apple_1_Points[3].x) / 2;
                    var controlPointY = (this.handController.Apple_1_Points[0].y + this.handController.Apple_1_Points[3].y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX - 6, controlPointY, this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                }
                break;
            case 6:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint6 = true;
                    this.graphicsNodes[step - 1].moveTo(this.handController.Apple_1_Points[0].x, this.handController.Apple_1_Points[0].y);
                    this.graphicsNodes[step - 1].lineTo(this.handController.Apple_1_Points[4].x, this.handController.Apple_1_Points[4].y);
                }
                break;
            case 7:
                if (constants_1.Constants.oldPoint) {
                    constants_1.Constants.isDrawPoint7 = true;
                    this.graphicsNodes[step - 1].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
                    var controlPointX = (constants_1.Constants.point6Pos.x + constants_1.Constants.point5Pos.x) / 2;
                    var controlPointY = (constants_1.Constants.point6Pos.y + constants_1.Constants.point5Pos.y) / 2;
                    this.graphicsNodes[step - 1].quadraticCurveTo(controlPointX, controlPointY + 6, constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
                }
                break;
            default:
                break;
        }
        this.graphicsNodes[step - 1].stroke();
    };
    GraphicsController.prototype.update = function (dt) {
        this.handleDrawWithTouchPoint();
        this.hand.active && this.handleDrawLine(constants_1.Constants.pointA_Pos, this.hand.getPosition());
    };
    __decorate([
        property(cc.Node)
    ], GraphicsController.prototype, "hand", void 0);
    __decorate([
        property([cc.Graphics])
    ], GraphicsController.prototype, "graphicsNodes", void 0);
    GraphicsController = __decorate([
        ccclass
    ], GraphicsController);
    return GraphicsController;
}(cc.Component));
exports.default = GraphicsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTRMQztRQXpMRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBb0wxQyxDQUFDO0lBakxhLGtDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHTywyQ0FBYyxHQUF0QixVQUF1QixLQUFjLEVBQUUsR0FBWTtRQUMvQyxJQUFJLHFCQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLEtBQUssR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxD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SUFDM0YsQ0FBQztJQXhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZEQUNVO0lBTGpCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNEx0QztJQUFELHlCQUFDO0NBNUxELEFBNExDLENBNUwrQyxFQUFFLENBQUMsU0FBUyxHQTRMM0Q7a0JBNUxvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEhhbmRDb250cm9sbGVyIGZyb20gXCIuL0hhbmRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5HcmFwaGljc10pXHJcbiAgICBncmFwaGljc05vZGVzOiBjYy5HcmFwaGljc1tdID0gW107XHJcbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIGhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuaGFuZENvbnRyb2xsZXIgPSB0aGlzLmhhbmQuZ2V0Q29tcG9uZW50KEhhbmRDb250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEcmF3TGluZShzdGFydDogY2MuVmVjMiwgZW5kOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5uZXdQb2ludCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IENvbnN0YW50cy5uZXdQb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDc7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oZW5kLngsIGVuZC55KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRHJhd1dpdGhUb3VjaFBvaW50KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgIUNvbnN0YW50cy5pc0RyYXdQb2ludDEpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVEcmF3T2xkTGluZSgxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQyICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoMik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzRHJhd1BvaW50Mykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURyYXdPbGRMaW5lKDMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQgJiYgIUNvbnN0YW50cy5pc0RyYXdQb2ludDQpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVEcmF3T2xkTGluZSg0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ1ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ICYmICFDb25zdGFudHMuaXNEcmF3UG9pbnQ3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhd09sZExpbmUoNyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVEcmF3T2xkTGluZShzdGVwOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5saW5lV2lkdGggPSA2O1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNMb3NlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMubmV3UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQxID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyhDb25zdGFudHMucG9pbnRBX1Bvcy54LCBDb25zdGFudHMucG9pbnRBX1Bvcy55KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLmxpbmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udHJvbFBvaW50WCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDFQb3MueCAtIDE1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250cm9sUG9pbnRZID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLnBvaW50MVBvcy55IC0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMucG9pbnQxUG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDFQb3MueVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKENvbnN0YW50cy5vbGRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NOb2Rlc1tzdGVwIC0gMV0ubW92ZVRvKHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueCwgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLnF1YWRyYXRpY0N1cnZlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLnggKyB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0ueSArIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSkgLyAyICsgMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYICsgNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMl0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1syXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZIC0gNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbM10ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS54ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS54KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS55ICsgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1szXS55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5xdWFkcmF0aWNDdXJ2ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRYIC0gNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMub2xkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzTm9kZXNbc3RlcCAtIDFdLm1vdmVUbyh0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLngsIHRoaXMuaGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5saW5lVG8odGhpcy5oYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1s0XS54LCB0aGlzLmhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzRdLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbnN0YW50cy5vbGRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5tb3ZlVG8oQ29uc3RhbnRzLnBvaW50NVBvcy54LCBDb25zdGFudHMucG9pbnQ1UG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQb2ludFggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKENvbnN0YW50cy5wb2ludDZQb3MueCArIENvbnN0YW50cy5wb2ludDVQb3MueCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udHJvbFBvaW50WSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQ29uc3RhbnRzLnBvaW50NlBvcy55ICsgQ29uc3RhbnRzLnBvaW50NVBvcy55KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NOb2Rlc1tzdGVwIC0gMV0ucXVhZHJhdGljQ3VydmVUbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xQb2ludFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnRZICsgNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDZQb3MueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5wb2ludDZQb3MueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljc05vZGVzW3N0ZXAgLSAxXS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmF3V2l0aFRvdWNoUG9pbnQoKTtcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlICYmIHRoaXMuaGFuZGxlRHJhd0xpbmUoQ29uc3RhbnRzLnBvaW50QV9Qb3MsIHRoaXMuaGFuZC5nZXRQb3NpdGlvbigpKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["stunSound"] = "stunSound";
    SoundTrack["naniSound"] = "naniSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.pointA_Pos = new cc.Vec2(0, 0);
    Constants.newPoint = null;
    Constants.oldPoint = null;
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.beforePosition = new cc.Vec2(0, 0);
    Constants.currentLocalPosition = new cc.Vec2(0, 0);
    Constants.isCanMove = true;
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanDraw = true;
    Constants.isLoseGame = false;
    Constants.isTouchFence = false;
    Constants.isTouchPoint1 = false;
    Constants.isTouchPoint2 = false;
    Constants.isTouchPoint3 = false;
    Constants.isTouchPoint4 = false;
    Constants.isTouchPoint5 = false;
    Constants.isTouchPoint6 = false;
    Constants.isTouchPoint7 = false;
    Constants.isDrawPoint1 = false;
    Constants.isDrawPoint2 = false;
    Constants.isDrawPoint3 = false;
    Constants.isDrawPoint4 = false;
    Constants.isDrawPoint5 = false;
    Constants.isDrawPoint6 = false;
    Constants.isDrawPoint7 = false;
    Constants.point1Pos = null;
    Constants.point2Pos = null;
    Constants.point3Pos = null;
    Constants.point4Pos = null;
    Constants.point5Pos = null;
    Constants.point6Pos = null;
    Constants.point7Pos = null;
    Constants.fencePoint = null;
    Constants.point1Bdb = null;
    Constants.point2Bdb = null;
    Constants.point3Bdb = null;
    Constants.point4Bdb = null;
    Constants.step = 1;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBQTtJQW1FQSxDQUFDO0lBakVHLFlBQVk7SUFDTCxvQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIsa0JBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIseUJBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLHdCQUFjLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyw4QkFBb0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2pELG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRzlCLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLHVCQUFhLEdBQVksS0FBSyxDQUFDO0lBRS9CLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLHNCQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBRTNCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBQzFCLG1CQUFTLEdBQVksSUFBSSxDQUFDO0lBRTFCLGNBQUksR0FBVyxDQUFDLENBQUM7SUFHeEIsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBbkVELEFBbUVDLElBQUE7QUFuRVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWQ6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIGRyYXdTb3VuZCA9IFwiZHJhd1NvdW5kXCIsXHJcbiAgICBzdHVuU291bmQgPSBcInN0dW5Tb3VuZFwiLFxyXG4gICAgbmFuaVNvdW5kID0gXCJuYW5pU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgcG9pbnRBX1BvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcbiAgICBzdGF0aWMgbmV3UG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIG9sZFBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLDApO1xyXG4gICAgc3RhdGljIGJlZm9yZVBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwwKTtcclxuICAgIHN0YXRpYyBjdXJyZW50TG9jYWxQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcblxyXG5cclxuICAgIHN0YXRpYyBpc0Nhbk1vdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuRHJhdzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNMb3NlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hGZW5jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoUG9pbnQ2OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaFBvaW50NzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RyYXdQb2ludDc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M1BvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDVQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50NlBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ3UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBmZW5jZVBvaW50OiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgcG9pbnQxQmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuICAgIHN0YXRpYyBwb2ludDJCZGI6IGNjLlJlY3QgPSBudWxsO1xyXG4gICAgc3RhdGljIHBvaW50M0JkYjogY2MuUmVjdCA9IG51bGw7XHJcbiAgICBzdGF0aWMgcG9pbnQ0QmRiOiBjYy5SZWN0ID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc3RlcDogbnVtYmVyID0gMTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GraphicsController_1 = require("./GraphicsController");
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.HandController = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // node
        _this.HideMask = null;
        _this.Line = null;
        _this.Tutorial = null;
        _this.fence = null;
        _this.fenceLeft = null;
        return _this;
    }
    // state
    TouchAreaController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    TouchAreaController.prototype.onLoad = function () {
        constants_1.Constants.fencePoint = this.fence.getPosition();
        this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        // ironsource
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.touchStart = function (event) {
        // if (Constants.ironSource.isEndGame) {
        //   this.GameController.installHandle();
        // }
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        this.Line.active = false;
        constants_1.Constants.isTouch = true;
        this.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        constants_1.Constants.currentPosition = event.getLocation();
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (constants_1.Constants.isLoseGame || !constants_1.Constants.isCanMove) {
            return;
        }
        Ultils_1.Ultils.TouchArea.checkTouchPoint(this.fence, this.HandController.fakeHand, this.fenceLeft);
        constants_1.Constants.currentPosition = event.getLocation();
        this.HandController.move();
        Ultils_1.Ultils.TouchArea.checkTouchCondition1(this.HandController.node, this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[0], this.HandController.Apple_1_Points[1]);
        // Ultils.TouchArea.checkTouchCondition2(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[1], 
        //   this.HandController.Apple_1_Points[0] 
        // );
        // Ultils.TouchArea.checkTouchCondition3(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[2], 
        //   this.HandController.Apple_1_Points[1] 
        // );
        // Ultils.TouchArea.checkTouchCondition4(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[3], 
        //   this.HandController.Apple_1_Points[2] 
        // );
        // Ultils.TouchArea.checkTouchCondition5(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[0], 
        //   this.HandController.Apple_1_Points[3],
        //   this.GraphicsController.graphicsNodes[4]
        // );
        Ultils_1.Ultils.TouchArea.checkTouchCondition6(this.HandController.node, this.HandController.Apple_1_Points[4], this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[5]);
        Ultils_1.Ultils.TouchArea.checkTouchCondition7(this.HandController.node);
        Ultils_1.Ultils.TouchArea.checkTouchCondition8(this.HandController.node, this.GraphicsController.graphicsNodes[6]);
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.HandController.stop();
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    TouchAreaController.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(HandController_1.default)
    ], TouchAreaController.prototype, "HandController", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], TouchAreaController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Tutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fence", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fenceLeft", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQTZKQztRQTNKQyxZQUFZO1FBRVosa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUc5QyxPQUFPO1FBRVAsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQXNJNUIsQ0FBQztJQXBJQyxRQUFRO0lBR0UsbUNBQUssR0FBZjtRQUNFLDZEQUE2RDtJQUMvRCxDQUFDO0lBR1Msb0NBQU0sR0FBaEI7UUFDRSxxQkFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QXZCZixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTZKL0I7SUFBRCwwQkFBQztDQTdKRCxBQTZKQyxDQTdKd0MsRUFBRSxDQUFDLFNBQVMsR0E2SnBEO0FBN0pZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVsdGlscyB9IGZyb20gXCIuLi9EYXRhL1VsdGlsc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHcmFwaGljc0NvbnRyb2xsZXIgZnJvbSBcIi4vR3JhcGhpY3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCBIYW5kQ29udHJvbGxlciBmcm9tIFwiLi9IYW5kQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEhhbmRDb250cm9sbGVyKVxyXG4gIEhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBub2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIExpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFR1dG9yaWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmZW5jZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZmVuY2VMZWZ0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gc3RhdGVcclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgQ29uc3RhbnRzLmZlbmNlUG9pbnQgPSB0aGlzLmZlbmNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcblxyXG4gICAgLy8gaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgLy8gICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuTGluZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuVHV0b3JpYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc0xvc2VHYW1lIHx8ICFDb25zdGFudHMuaXNDYW5Nb3ZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBVbHRpbHMuVG91Y2hBcmVhLmNoZWNrVG91Y2hQb2ludCh0aGlzLmZlbmNlLCB0aGlzLkhhbmRDb250cm9sbGVyLmZha2VIYW5kLCB0aGlzLmZlbmNlTGVmdCk7XHJcbiAgICBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubW92ZSgpO1xyXG5cclxuICAgIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjEoXHJcbiAgICAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSxcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1swXSxcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1swXSxcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5BcHBsZV8xX1BvaW50c1sxXVxyXG4gICAgKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjIoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMV0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjMoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMl0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzFdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjQoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbM10sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzJdIFxyXG4gICAgLy8gKTtcclxuICAgIC8vIFVsdGlscy5Ub3VjaEFyZWEuY2hlY2tUb3VjaENvbmRpdGlvbjUoXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIubm9kZSwgXHJcbiAgICAvLyAgIHRoaXMuSGFuZENvbnRyb2xsZXIuQXBwbGVfMV9Qb2ludHNbMF0sIFxyXG4gICAgLy8gICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzNdLFxyXG4gICAgLy8gICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzRdXHJcbiAgICAvLyApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uNihcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLFxyXG4gICAgICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzRdLFxyXG4gICAgICB0aGlzLkhhbmRDb250cm9sbGVyLkFwcGxlXzFfUG9pbnRzWzBdLFxyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzVdXHJcbiAgICApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uNyhcclxuICAgICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlXHJcbiAgICApO1xyXG4gICAgVWx0aWxzLlRvdWNoQXJlYS5jaGVja1RvdWNoQ29uZGl0aW9uOCh0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUsIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgIHRoaXMuSGFuZENvbnRyb2xsZXIuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBcclxuICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
