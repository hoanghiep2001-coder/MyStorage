
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