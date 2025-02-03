"use strict";
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
var Responsive_1 = require("../Plugin/Responsive");
var BottleItem_1 = require("../Ultils/BottleItem");
var GameController_1 = require("./GameController");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        _this.Responsive = null;
        _this.dollPrecent = 0;
        _this.opponentPrecent = 0;
        _this.tweenStates = [];
        _this.isShowCTA = false;
        _this.graphics = null;
        _this.Level2 = null;
        _this.isDrawWaterGraphics = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // this.activeTweenTextTap();
        // cc.tween(this.NodesContainer.CTA_button)
        // .repeatForever(
        //     cc.tween(this.NodesContainer.CTA_button)
        //         .to(0.5, { scale: 0.45 })
        //         .to(0.5, { scale: 0.5 }, { easing: 'elasticOut' })
        // ).start();
    };
    GamePlay.prototype.countingTime = function () {
        if (this.isShowCTA)
            return;
        var nodeTimeChild = this.NodesContainer.time.children[0];
        if (nodeTimeChild.scaleX <= 0 && constants_1.Constants.isCanTouch) {
            this.showCTA(false);
            return;
        }
        nodeTimeChild.scaleX -= 0.0008;
    };
    GamePlay.prototype.showCTA = function (isWin) {
        var _this = this;
        this.isShowCTA = true;
        constants_1.Constants.isCanTouch = false;
        constants_1.Constants.isShowCTA = true;
        constants_1.Constants.isToStore = true;
        this.Level2.active = true;
        this.scheduleOnce(function () {
            cc.tween(_this.NodesContainer.Tubes[0].parent)
                .to(1, { opacity: 0 })
                .start();
            cc.tween(_this.Level2)
                .to(1, { opacity: 255 })
                .start();
            _this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 1);
    };
    GamePlay.prototype.checkThreeSameOneDifferent = function (colors) {
        if (colors.length !== 4) {
            console.error("Mảng màu phải chứa chính xác 4 phần tử.");
            return false;
        }
        // Đếm số lần xuất hiện của từng màu
        var colorCountMap = new Map();
        for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
            var color = colors_1[_i];
            var colorKey = color.toHEX(); // Sử dụng HEX để đại diện cho màu
            if (colorCountMap.has(colorKey)) {
                colorCountMap.set(colorKey, colorCountMap.get(colorKey) + 1);
            }
            else {
                colorCountMap.set(colorKey, 1);
            }
        }
        // Chuyển đổi Map values thành mảng
        var counts = Array.from(colorCountMap.values());
        // Kiểm tra nếu có một màu xuất hiện 3 lần và một màu xuất hiện 1 lần
        var hasThreeSame = false;
        var hasOneDifferent = false;
        for (var _a = 0, counts_1 = counts; _a < counts_1.length; _a++) {
            var count = counts_1[_a];
            if (count === 3) {
                hasThreeSame = true;
            }
            else if (count === 1) {
                hasOneDifferent = true;
            }
        }
        return hasThreeSame && hasOneDifferent;
    };
    GamePlay.prototype.getColorStatus = function (colors) {
        var firstColorOfTube = null, indexOfFirstColor = null, nonTransparentColorArr = [], heightOfFirstColor = null, colorHeightArr = [210, 200, 250, 350], isHasTwoSameColor = false, numberOfDecreaseFloor = 0, numberOfIncreaseFloor = 0, 
        //  numberOfDecreaseFloor: number = 0,
        isHasThreeSameOneDiffColor = false, drawWaterSide = "";
        // isHasTwoSameColor = this.hasConsecutiveDuplicateColors(colors);
        isHasThreeSameOneDiffColor = this.checkThreeSameOneDifferent(colors);
        for (var i = 0; i < colors.length; i++) {
            if (colors[i].a !== 0) {
                if (!firstColorOfTube) {
                    firstColorOfTube = colors[i].toCSS();
                    heightOfFirstColor = colorHeightArr[i];
                    indexOfFirstColor = i;
                }
                ;
                nonTransparentColorArr.push(colors[i].toCSS());
            }
            if (firstColorOfTube) {
                var currentColor = colors[i].toCSS();
                if (currentColor === firstColorOfTube)
                    numberOfDecreaseFloor += 1;
                else
                    break;
            }
        }
        return {
            firstColorOfTube: firstColorOfTube,
            indexOfFirstColor: indexOfFirstColor,
            nonTransparentColorArr: nonTransparentColorArr,
            heightOfFirstColor: heightOfFirstColor,
            isHasTwoSameColor: isHasTwoSameColor,
            numberOfDecreaseFloor: numberOfDecreaseFloor,
            isHasThreeSameOneDiffColor: isHasThreeSameOneDiffColor
            // numberOfIncreaseFloor: numberOfIncreaseFloor
        };
    };
    GamePlay.prototype.handleMoveToAnotherTube = function (tubeA, tubeB) {
        var tubeABottleItemComp = tubeA.getComponent(BottleItem_1.default);
        var tubeBBottleItemComp = tubeB.getComponent(BottleItem_1.default);
        tubeB.setSiblingIndex(this.NodesContainer.Tubes.length - 1);
        tubeA.setSiblingIndex(this.NodesContainer.Tubes.length - 2);
        var tubeState = this.calculateNewTubeState(tubeBBottleItemComp, tubeABottleItemComp);
        tubeABottleItemComp.MoveToAnotherTube(tubeState);
        console.log("correct");
    };
    GamePlay.prototype.calculateNewTubeState = function (tubeBBottleItemComp, tubeABottleItemComp) {
        var newState = {
            position: null,
            angle: null,
            firstColorOfTube: null,
            currentHeightOfColor: null,
            otherTube: null,
            drawWaterSide: null,
        };
        var tubeBpos = tubeBBottleItemComp.node.getPosition();
        var colorStatus = this.getColorStatus(tubeABottleItemComp.waterColors);
        newState.firstColorOfTube = colorStatus.firstColorOfTube;
        newState.currentHeightOfColor = colorStatus.heightOfFirstColor;
        newState.otherTube = tubeBBottleItemComp;
        switch (tubeBBottleItemComp.tubeSide) {
            case "left":
                newState.position = new cc.Vec3(30, tubeBpos.y + 120, 0);
                newState.angle = 75;
                newState.drawWaterSide = "left";
                break;
            case "right":
                newState.position = new cc.Vec3(-30, tubeBpos.y + 120, 0);
                newState.angle = -75;
                newState.drawWaterSide = "right";
                break;
            default:
                break;
        }
        return newState;
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.handleDrawWaterGraphics = function (moveTo, lineTo, color) {
        this.graphics.clear();
        var moveToConverted = this.node.convertToNodeSpaceAR(moveTo);
        var LineToConverted = this.node.convertToNodeSpaceAR(lineTo);
        this.graphics.strokeColor = color;
        this.graphics.moveTo(moveToConverted.x, moveToConverted.y);
        this.graphics.lineTo(LineToConverted.x, LineToConverted.y);
        this.graphics.stroke();
        console.log("check");
    };
    GamePlay.prototype.update = function (dt) {
        // this.isDrawWaterGraphics && this.handleDrawWaterGraphics();
        // Constants.isGameStart && this.countingTime();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(Responsive_1.default)
    ], GamePlay.prototype, "Responsive", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphics", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Level2", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();