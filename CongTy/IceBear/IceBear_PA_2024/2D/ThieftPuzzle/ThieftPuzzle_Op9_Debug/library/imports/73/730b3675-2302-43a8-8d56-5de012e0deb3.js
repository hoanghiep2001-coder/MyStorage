"use strict";
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