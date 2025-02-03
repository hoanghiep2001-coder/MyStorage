
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUMsdURBQWtEO0FBRWxELG1EQUE4QztBQUU5QyxtREFBOEM7QUFFOUMsbURBQWtEO0FBRWxELG1EQUE4QztBQUl4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFSQztRQWxSQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixpQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBSTdCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIseUJBQW1CLEdBQVksS0FBSyxDQUFDOztJQThQdkMsQ0FBQztJQTNQVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsNkRBQTZEO1FBQzdELDZCQUE2QjtRQUU3QiwyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCLCtDQUErQztRQUMvQyxvQ0FBb0M7UUFDcEMsNkRBQTZEO1FBQzdELGFBQWE7SUFDZixDQUFDO0lBR00sK0JBQVksR0FBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUUzQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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bnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSBcIi4uL1BsdWdpbi9SZXNwb25zaXZlXCI7XHJcblxyXG5pbXBvcnQgQm90dGxlSXRlbSBmcm9tIFwiLi4vVWx0aWxzL0JvdHRsZUl0ZW1cIjtcclxuXHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0ICogYXMgSW50ZXJmYWNlcyBmcm9tICcuLi9EYXRhL2ludGVyZmFjZXMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShSZXNwb25zaXZlKVxyXG4gIFJlc3BvbnNpdmU6IFJlc3BvbnNpdmUgPSBudWxsO1xyXG5cclxuICBkb2xsUHJlY2VudDogbnVtYmVyID0gMDtcclxuICBvcHBvbmVudFByZWNlbnQ6IG51bWJlciA9IDA7XHJcbiAgdHdlZW5TdGF0ZXM6IGNjLlR3ZWVuW10gPSBbXTtcclxuICBpc1Nob3dDVEE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBMZXZlbDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBpc0RyYXdXYXRlckdyYXBoaWNzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZVR3ZWVuVGV4dFRhcCgpO1xyXG5cclxuICAgIC8vIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbilcclxuICAgIC8vIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX2J1dHRvbilcclxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40NSB9KVxyXG4gICAgLy8gICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgLy8gKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjb3VudGluZ1RpbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1Nob3dDVEEpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbm9kZVRpbWVDaGlsZCA9IHRoaXMuTm9kZXNDb250YWluZXIudGltZS5jaGlsZHJlblswXTtcclxuICAgIGlmIChub2RlVGltZUNoaWxkLnNjYWxlWCA8PSAwICYmIENvbnN0YW50cy5pc0NhblRvdWNoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NUQShmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBub2RlVGltZUNoaWxkLnNjYWxlWCAtPSAwLjAwMDg7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNob3dDVEEoaXNXaW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNTaG93Q1RBID0gdHJ1ZTtcclxuXHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzU2hvd0NUQSA9IHRydWU7XHJcbiAgICBDb25zdGFudHMuaXNUb1N0b3JlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLkxldmVsMi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuVHViZXNbMF0ucGFyZW50KVxyXG4gICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICBcclxuICAgICAgY2MudHdlZW4odGhpcy5MZXZlbDIpXHJcbiAgICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIH0sIDEpXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tUaHJlZVNhbWVPbmVEaWZmZXJlbnQoY29sb3JzOiBjYy5Db2xvcltdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY29sb3JzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJN4bqjbmcgbcOgdSBwaOG6o2kgY2jhu6lhIGNow61uaCB4w6FjIDQgcGjhuqduIHThu60uXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDEkOG6v20gc+G7kSBs4bqnbiB4deG6pXQgaGnhu4duIGPhu6dhIHThu6tuZyBtw6B1XHJcbiAgICBjb25zdCBjb2xvckNvdW50TWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGZvciAobGV0IGNvbG9yIG9mIGNvbG9ycykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yS2V5ID0gY29sb3IudG9IRVgoKTsgLy8gU+G7rSBk4bulbmcgSEVYIMSR4buDIMSR4bqhaSBkaeG7h24gY2hvIG3DoHVcclxuICAgICAgICBpZiAoY29sb3JDb3VudE1hcC5oYXMoY29sb3JLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQ291bnRNYXAuc2V0KGNvbG9yS2V5LCBjb2xvckNvdW50TWFwLmdldChjb2xvcktleSkhICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3JDb3VudE1hcC5zZXQoY29sb3JLZXksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaHV54buDbiDEkeG7lWkgTWFwIHZhbHVlcyB0aMOgbmggbeG6o25nXHJcbiAgICBjb25zdCBjb3VudHMgPSBBcnJheS5mcm9tKGNvbG9yQ291bnRNYXAudmFsdWVzKCkpO1xyXG5cclxuICAgIC8vIEtp4buDbSB0cmEgbuG6v3UgY8OzIG3hu5l0IG3DoHUgeHXhuqV0IGhp4buHbiAzIGzhuqduIHbDoCBt4buZdCBtw6B1IHh14bqldCBoaeG7h24gMSBs4bqnblxyXG4gICAgbGV0IGhhc1RocmVlU2FtZSA9IGZhbHNlO1xyXG4gICAgbGV0IGhhc09uZURpZmZlcmVudCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGNvdW50IG9mIGNvdW50cykge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICBoYXNUaHJlZVNhbWUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgaGFzT25lRGlmZmVyZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1RocmVlU2FtZSAmJiBoYXNPbmVEaWZmZXJlbnQ7XHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRDb2xvclN0YXR1cyhjb2xvcnM6IGNjLkNvbG9yW10pOiBJbnRlcmZhY2VzLmNvbG9yU3RhdHVzIHtcclxuICAgIGxldCBmaXJzdENvbG9yT2ZUdWJlOiBzdHJpbmcgPSBudWxsLFxyXG4gICAgIGluZGV4T2ZGaXJzdENvbG9yOiBudW1iZXIgPSBudWxsLFxyXG4gICAgIG5vblRyYW5zcGFyZW50Q29sb3JBcnI6IHN0cmluZ1tdID0gW10sXHJcbiAgICAgaGVpZ2h0T2ZGaXJzdENvbG9yOiBudW1iZXIgPSBudWxsLFxyXG4gICAgIGNvbG9ySGVpZ2h0QXJyID0gWzIxMCwgMjAwLCAyNTAsIDM1MF0sXHJcbiAgICAgaXNIYXNUd29TYW1lQ29sb3I6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICBudW1iZXJPZkRlY3JlYXNlRmxvb3I6IG51bWJlciA9IDAsXHJcbiAgICAgbnVtYmVyT2ZJbmNyZWFzZUZsb29yOiBudW1iZXIgPSAwLFxyXG4gICAgLy8gIG51bWJlck9mRGVjcmVhc2VGbG9vcjogbnVtYmVyID0gMCxcclxuICAgIGlzSGFzVGhyZWVTYW1lT25lRGlmZkNvbG9yOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgZHJhd1dhdGVyU2lkZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAvLyBpc0hhc1R3b1NhbWVDb2xvciA9IHRoaXMuaGFzQ29uc2VjdXRpdmVEdXBsaWNhdGVDb2xvcnMoY29sb3JzKTtcclxuXHJcbiAgICBpc0hhc1RocmVlU2FtZU9uZURpZmZDb2xvciA9IHRoaXMuY2hlY2tUaHJlZVNhbWVPbmVEaWZmZXJlbnQoY29sb3JzKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjb2xvcnNbaV0uYSAhPT0gMCkge1xyXG4gICAgICAgIGlmICghZmlyc3RDb2xvck9mVHViZSkge1xyXG4gICAgICAgICAgZmlyc3RDb2xvck9mVHViZSA9IGNvbG9yc1tpXS50b0NTUygpO1xyXG4gICAgICAgICAgaGVpZ2h0T2ZGaXJzdENvbG9yID0gY29sb3JIZWlnaHRBcnJbaV07XHJcbiAgICAgICAgICBpbmRleE9mRmlyc3RDb2xvciA9IGk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBub25UcmFuc3BhcmVudENvbG9yQXJyLnB1c2goY29sb3JzW2ldLnRvQ1NTKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihmaXJzdENvbG9yT2ZUdWJlKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xvciA9IGNvbG9yc1tpXS50b0NTUygpO1xyXG4gICAgICAgIGlmKGN1cnJlbnRDb2xvciA9PT0gZmlyc3RDb2xvck9mVHViZSkgbnVtYmVyT2ZEZWNyZWFzZUZsb29yICs9IDFcclxuICAgICAgICBlbHNlIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpcnN0Q29sb3JPZlR1YmU6IGZpcnN0Q29sb3JPZlR1YmUsXHJcbiAgICAgIGluZGV4T2ZGaXJzdENvbG9yOiBpbmRleE9mRmlyc3RDb2xvcixcclxuICAgICAgbm9uVHJhbnNwYXJlbnRDb2xvckFycjogbm9uVHJhbnNwYXJlbnRDb2xvckFycixcclxuICAgICAgaGVpZ2h0T2ZGaXJzdENvbG9yOiBoZWlnaHRPZkZpcnN0Q29sb3IsXHJcbiAgICAgIGlzSGFzVHdvU2FtZUNvbG9yOiBpc0hhc1R3b1NhbWVDb2xvcixcclxuICAgICAgbnVtYmVyT2ZEZWNyZWFzZUZsb29yOiBudW1iZXJPZkRlY3JlYXNlRmxvb3IsXHJcbiAgICAgIGlzSGFzVGhyZWVTYW1lT25lRGlmZkNvbG9yOiBpc0hhc1RocmVlU2FtZU9uZURpZmZDb2xvclxyXG4gICAgICAvLyBudW1iZXJPZkluY3JlYXNlRmxvb3I6IG51bWJlck9mSW5jcmVhc2VGbG9vclxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVNb3ZlVG9Bbm90aGVyVHViZSh0dWJlQTogY2MuTm9kZSwgdHViZUI6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHR1YmVBQm90dGxlSXRlbUNvbXAgPSB0dWJlQS5nZXRDb21wb25lbnQoQm90dGxlSXRlbSk7XHJcblxyXG4gICAgY29uc3QgdHViZUJCb3R0bGVJdGVtQ29tcCA9IHR1YmVCLmdldENvbXBvbmVudChCb3R0bGVJdGVtKTtcclxuXHJcbiAgICB0dWJlQi5zZXRTaWJsaW5nSW5kZXgodGhpcy5Ob2Rlc0NvbnRhaW5lci5UdWJlcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICB0dWJlQS5zZXRTaWJsaW5nSW5kZXgodGhpcy5Ob2Rlc0NvbnRhaW5lci5UdWJlcy5sZW5ndGggLSAyKTtcclxuXHJcbiAgICBsZXQgdHViZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVOZXdUdWJlU3RhdGUodHViZUJCb3R0bGVJdGVtQ29tcCwgdHViZUFCb3R0bGVJdGVtQ29tcClcclxuXHJcbiAgICB0dWJlQUJvdHRsZUl0ZW1Db21wLk1vdmVUb0Fub3RoZXJUdWJlKHR1YmVTdGF0ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3VHViZVN0YXRlKHR1YmVCQm90dGxlSXRlbUNvbXA6IEJvdHRsZUl0ZW0sIHR1YmVBQm90dGxlSXRlbUNvbXA6IEJvdHRsZUl0ZW0pOiBJbnRlcmZhY2VzLnR1YmVTdGF0ZSB7XHJcbiAgICBsZXQgbmV3U3RhdGU6IEludGVyZmFjZXMudHViZVN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjogbnVsbCxcclxuICAgICAgYW5nbGU6IG51bGwsXHJcbiAgICAgIGZpcnN0Q29sb3JPZlR1YmU6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRIZWlnaHRPZkNvbG9yOiBudWxsLFxyXG4gICAgICBvdGhlclR1YmU6IG51bGwsXHJcbiAgICAgIGRyYXdXYXRlclNpZGU6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR1YmVCcG9zOiBjYy5WZWMyID0gdHViZUJCb3R0bGVJdGVtQ29tcC5ub2RlLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgY29sb3JTdGF0dXM6IEludGVyZmFjZXMuY29sb3JTdGF0dXMgPSB0aGlzLmdldENvbG9yU3RhdHVzKHR1YmVBQm90dGxlSXRlbUNvbXAud2F0ZXJDb2xvcnMpO1xyXG5cclxuICAgIG5ld1N0YXRlLmZpcnN0Q29sb3JPZlR1YmUgPSBjb2xvclN0YXR1cy5maXJzdENvbG9yT2ZUdWJlO1xyXG5cclxuICAgIG5ld1N0YXRlLmN1cnJlbnRIZWlnaHRPZkNvbG9yID0gY29sb3JTdGF0dXMuaGVpZ2h0T2ZGaXJzdENvbG9yO1xyXG5cclxuICAgIG5ld1N0YXRlLm90aGVyVHViZSA9IHR1YmVCQm90dGxlSXRlbUNvbXA7XHJcblxyXG4gICAgc3dpdGNoICh0dWJlQkJvdHRsZUl0ZW1Db21wLnR1YmVTaWRlKSB7XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgbmV3U3RhdGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMygzMCwgdHViZUJwb3MueSArIDEyMCwgMCk7XHJcbiAgICAgICAgbmV3U3RhdGUuYW5nbGUgPSA3NVxyXG5cclxuICAgICAgICBuZXdTdGF0ZS5kcmF3V2F0ZXJTaWRlID0gXCJsZWZ0XCI7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICBuZXdTdGF0ZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKC0zMCwgdHViZUJwb3MueSArIDEyMCwgMCk7XHJcbiAgICAgICAgbmV3U3RhdGUuYW5nbGUgPSAtNzU7XHJcblxyXG4gICAgICAgIG5ld1N0YXRlLmRyYXdXYXRlclNpZGUgPSBcInJpZ2h0XCI7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRHJhd1dhdGVyR3JhcGhpY3MobW92ZVRvOiBjYy5WZWMyLCBsaW5lVG86IGNjLlZlYzIsIGNvbG9yOiBjYy5Db2xvcik6IHZvaWQge1xyXG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG5cclxuICAgIGxldCBtb3ZlVG9Db252ZXJ0ZWQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobW92ZVRvKTtcclxuICAgIGxldCBMaW5lVG9Db252ZXJ0ZWQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobGluZVRvKTtcclxuXHJcbiAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhtb3ZlVG9Db252ZXJ0ZWQueCwgbW92ZVRvQ29udmVydGVkLnkpO1xyXG4gICAgdGhpcy5ncmFwaGljcy5saW5lVG8oTGluZVRvQ29udmVydGVkLngsIExpbmVUb0NvbnZlcnRlZC55KTtcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuaXNEcmF3V2F0ZXJHcmFwaGljcyAmJiB0aGlzLmhhbmRsZURyYXdXYXRlckdyYXBoaWNzKCk7XHJcbiAgICAvLyBDb25zdGFudHMuaXNHYW1lU3RhcnQgJiYgdGhpcy5jb3VudGluZ1RpbWUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==