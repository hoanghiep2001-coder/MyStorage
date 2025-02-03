"use strict";
cc._RF.push(module, '07ccfFEkf1B0p36uFfTfjhr', 'TubeController');
// Script/Controller/TubeController.ts

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
var BottleItem_1 = require("../Ultils/BottleItem");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TubeController = /** @class */ (function (_super) {
    __extends(TubeController, _super);
    function TubeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.BottleItems = [];
        _this.StatusArr = [false, false, false, false];
        _this.blueColor = cc.color(28, 101, 170, 255);
        _this.brownColor = cc.color(161, 71, 71, 255);
        _this.orangeColor = cc.color(241, 116, 58, 255);
        _this.transparent = cc.color(255, 255, 255, 0);
        return _this;
    }
    TubeController.prototype.start = function () {
        this.initTubeColors();
    };
    TubeController.prototype.initTubeColors = function () {
        this.BottleItems[0].waterColors = [this.blueColor, this.blueColor, this.brownColor, this.blueColor];
        this.BottleItems[1].waterColors = [this.orangeColor, this.orangeColor, this.blueColor, this.brownColor];
        this.BottleItems[2].waterColors = [this.transparent, this.transparent, this.orangeColor, this.brownColor];
        this.BottleItems[3].waterColors = [this.transparent, this.transparent, this.brownColor, this.orangeColor];
    };
    TubeController.prototype.hasMoreThanThreeTrueValues = function (array) {
        // Đếm số lượng phần tử true trong mảng
        var trueCount = array.filter(function (value) { return value === true; }).length;
        // Kiểm tra nếu số lượng phần tử true lớn hơn 3
        return trueCount > 3;
    };
    TubeController.prototype.isDoneGame = function () {
        var _loop_1 = function (index) {
            var bottle = this_1.BottleItems[index];
            var colorToCompare = bottle.waterColors[0].toCSS();
            if (bottle.waterColors.every(function (color) { return color.toCSS() === colorToCompare; }))
                this_1.StatusArr[index] = true;
            if (this_1.hasMoreThanThreeTrueValues(this_1.StatusArr))
                this_1.GamePlay.showCTA(true);
        };
        var this_1 = this;
        for (var index = 0; index < this.BottleItems.length; index++) {
            _loop_1(index);
        }
    };
    TubeController.prototype.update = function (dt) {
        !constants_1.Constants.isShowCTA && this.isDoneGame();
    };
    __decorate([
        property(GamePlay_1.default)
    ], TubeController.prototype, "GamePlay", void 0);
    __decorate([
        property([BottleItem_1.default])
    ], TubeController.prototype, "BottleItems", void 0);
    TubeController = __decorate([
        ccclass
    ], TubeController);
    return TubeController;
}(cc.Component));
exports.default = TubeController;

cc._RF.pop();