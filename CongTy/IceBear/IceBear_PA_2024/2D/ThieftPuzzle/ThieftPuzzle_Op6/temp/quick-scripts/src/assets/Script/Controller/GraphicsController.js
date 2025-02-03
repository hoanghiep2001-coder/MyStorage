"use strict";
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