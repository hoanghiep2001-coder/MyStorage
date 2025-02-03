"use strict";
cc._RF.push(module, '739edhvLuxKk7ufJqFAN/rI', 'BottleItem');
// Script/Ultils/BottleItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var WaterManager_1 = require("./WaterManager");
var BottleItem = /** @class */ (function (_super) {
    __extends(BottleItem, _super);
    function BottleItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteColors = [];
        _this.AudioManager = null;
        _this.waterColors = [];
        _this.waterHeights = [];
        _this.tubeSide = "";
        _this.newState = null;
        _this.height1 = 210;
        _this.height2 = 200;
        _this.height3 = 250;
        _this.height4 = 350;
        _this.GamePlay = null;
        _this.isIncreasing = false;
        _this.initPos = null;
        _this.PS_Star = null;
        return _this;
    }
    BottleItem.prototype.start = function () {
        this.applyWaterColor();
        this.initTubeSide();
        var GamePlayNode = this.node.parent.parent.parent.parent;
        this.GamePlay = GamePlayNode.getComponent("GamePlay");
        this.initPos = this.node.getPosition();
    };
    BottleItem.prototype.initTubeSide = function () {
        switch (this.node.name) {
            case "Bottle_1":
                this.tubeSide = "left";
                break;
            case "Bottle_2":
                this.tubeSide = "right";
                break;
            case "Bottle_3":
                this.tubeSide = "left";
                break;
            case "Bottle_4":
                this.tubeSide = "right";
                break;
            default:
                break;
        }
    };
    BottleItem.prototype.applyWaterColor = function () {
        for (var index = 0; index < this.spriteColors.length; index++) {
            var sprite = this.spriteColors[index];
            sprite.node.color = this.waterColors[index];
            this.isTransparentColor(sprite.node.color) && this.setTransparentColor(sprite.node);
        }
        ;
    };
    BottleItem.prototype.MoveToAnotherTube = function (newState) {
        var _this = this;
        cc.log("Di chuyển");
        constants_1.Constants.isCanTouch = false;
        this.newState = newState;
        cc.tween(this.node)
            .to(0.3, { position: newState.position })
            .call(function () { return _this.rotateTube(newState); })
            .start();
    };
    ;
    BottleItem.prototype.rotateTube = function (tubeState) {
        var _this = this;
        cc.log("angling");
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.WaterDropSound);
        this.scheduleOnce(function () {
            _this.decreaseHeightOfWater(tubeState);
            tubeState.otherTube.increseHeightOfWater();
        }, 0.5);
        cc.tween(this.node)
            .to(0.5, { angle: tubeState.angle })
            .start();
    };
    BottleItem.prototype.getColorStatus = function () {
        var GamePlayNode = this.node.parent.parent.parent.parent;
        var GamePlayComp = GamePlayNode.getComponent("GamePlay");
        var colorStatus = GamePlayComp.getColorStatus(this.waterColors);
        return colorStatus;
    };
    BottleItem.prototype.changeColorWater = function (colorRgba) {
        // tách chuỗi string rgba thành từng phần
        var values = colorRgba.match(/\d+(\.\d+)?/g).map(Number);
        var color = new cc.Color(values[0], values[1], values[2], values[3] * 255);
        cc.log("Màu đc chuyển đổi: " + color);
        return color;
    };
    BottleItem.prototype.increseHeightOfWater = function () {
        cc.log("Tăng mực nước");
        this.drawLineRender();
        // this.scheduleOnce(() => {
        // }, 0.2);
        var colorStatus = this.getColorStatus();
        WaterManager_1.WaterManager.increaseWater(constants_1.Constants.numberOfIncreaseFloor, this.changeColorWater(constants_1.Constants.colorToIncrease), colorStatus.indexOfFirstColor, this);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.BoilSound);
    };
    BottleItem.prototype.activeDoneStepSound = function () {
        this.node.getChildByName("PSBase").children[0].getComponent(cc.ParticleSystem).resetSystem();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
    };
    BottleItem.prototype.decreaseHeightOfWater = function (tubeState) {
        cc.log("giảm mực nước");
        var colorStatus = this.getColorStatus();
        constants_1.Constants.numberOfIncreaseFloor = colorStatus.numberOfDecreaseFloor;
        constants_1.Constants.colorToIncrease = colorStatus.firstColorOfTube;
        cc.log(colorStatus.isHasThreeSameOneDiffColor);
        WaterManager_1.WaterManager.decreaseWater(colorStatus.numberOfDecreaseFloor, colorStatus.indexOfFirstColor, this);
    };
    BottleItem.prototype.drawLineRender = function () {
        var lineRender = this.node.getChildByName("LineRender");
        lineRender.color = this.changeColorWater(this.getColorStatus().firstColorOfTube);
        cc.tween(lineRender)
            .to(0.35, { height: 1100 })
            .call(function () {
            cc.tween(lineRender)
                .to(0.15, { height: 0 })
                .start();
        })
            .start();
    };
    BottleItem.prototype.isTransparentColor = function (color) {
        if (color.a === 0)
            return true;
        return false;
    };
    BottleItem.prototype.setTransparentColor = function (node) {
        node.opacity = 0;
    };
    BottleItem.prototype.update = function (dt) {
        this.angleColorWithBottle();
    };
    BottleItem.prototype.angleColorWithBottle = function () {
        for (var index = 0; index < this.spriteColors.length; index++) {
            var sprite = this.spriteColors[index];
            sprite.node.angle = -this.node.angle / 1.5;
        }
    };
    __decorate([
        property([cc.Sprite])
    ], BottleItem.prototype, "spriteColors", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], BottleItem.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], BottleItem.prototype, "PS_Star", void 0);
    BottleItem = __decorate([
        ccclass
    ], BottleItem);
    return BottleItem;
}(cc.Component));
exports.default = BottleItem;

cc._RF.pop();