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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GraphicsController = /** @class */ (function (_super) {
    __extends(GraphicsController, _super);
    function GraphicsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.prefab_Graphics = null;
        // state
        _this.graphicsArr = [];
        _this.handController = null;
        return _this;
    }
    GraphicsController.prototype.start = function () {
        this.createGraphics();
    };
    GraphicsController.prototype.createGraphics = function () {
        var prefab = cc.instantiate(this.prefab_Graphics);
        var graphics = prefab.getComponent(cc.Graphics);
        prefab.x = 0;
        prefab.y = 0;
        prefab.parent = this.node;
        this.graphicsArr.push(graphics);
    };
    GraphicsController.prototype.handleDrawLine = function (start, end, graphics) {
        graphics.clear();
        graphics.lineWidth = 7;
        graphics.moveTo(start.x, start.y);
        graphics.lineTo(end.x, end.y);
        graphics.stroke();
    };
    GraphicsController.prototype.handleDrawWithTouchPoint = function () {
        if (constants_1.Constants.touchPointsPos.length >= 2) {
            for (var i = 1; i < constants_1.Constants.touchPointsPos.length; i++) {
                var start = constants_1.Constants.touchPointsPos[i - 1]; // Điểm trước
                var end = constants_1.Constants.touchPointsPos[i]; // Điểm hiện tại
                // graphics.moveTo(start.x, start.y);
                // graphics.lineTo(end.x, end.y);
            }
        }
    };
    GraphicsController.prototype.update = function (dt) {
        constants_1.Constants.isTouch && this.handleDrawLine(constants_1.Constants.startPos, this.hand.getPosition(), this.graphicsArr[0]);
        // console.log(Constants.touchPointsPos);
    };
    __decorate([
        property(cc.Node)
    ], GraphicsController.prototype, "hand", void 0);
    __decorate([
        property(cc.Prefab)
    ], GraphicsController.prototype, "prefab_Graphics", void 0);
    GraphicsController = __decorate([
        ccclass
    ], GraphicsController);
    return GraphicsController;
}(cc.Component));
exports.default = GraphicsController;

cc._RF.pop();