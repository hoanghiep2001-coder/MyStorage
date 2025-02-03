"use strict";
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var BottleItem_1 = require("../Ultils/BottleItem");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.Tubes.forEach(function (tube) {
            tube.on(cc.Node.EventType.TOUCH_START, _this.tubeTouchStart, _this);
        });
    };
    TouchAreaController.prototype.tubeTouchStart = function (e) {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isCanTouch)
            return;
        this.handleIronSourcePlaySound();
        var clickedNode = e.target;
        this.NodesContainer.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        if (constants_1.Constants.TubeClicked) {
            this.isPickCorrectTube(constants_1.Constants.TubeClicked, clickedNode)
                ? this.GamePlay.handleMoveToAnotherTube(constants_1.Constants.TubeClicked, clickedNode)
                : cc.log("wrong");
            this.scaleDownTube(constants_1.Constants.TubeClicked);
            constants_1.Constants.TubeClicked = null;
        }
        else {
            constants_1.Constants.TubeClicked = clickedNode;
            this.scaleUpTube(clickedNode);
            cc.log("wrong");
            cc.log("------------------------");
        }
    };
    TouchAreaController.prototype.isPickCorrectTube = function (tube1, tube2) {
        var reuslt = false;
        var tube1BottleItemComponent = tube1.getComponent(BottleItem_1.default);
        var tube2BottleItemComponent = tube2.getComponent(BottleItem_1.default);
        var colorA = this.GamePlay.getColorStatus(tube1BottleItemComponent.waterColors);
        var colorB = this.GamePlay.getColorStatus(tube2BottleItemComponent.waterColors);
        constants_1.Constants.interactingColorNumber = colorA.indexOfFirstColor;
        cc.log(colorA.nonTransparentColorArr.length);
        if (tube1.name === tube2.name)
            return false;
        else {
            if (colorA.isHasThreeSameOneDiffColor && colorB.nonTransparentColorArr.length === 0)
                return true;
            if (colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 1)
                return false;
            if (colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 0)
                return false;
            if (colorB.nonTransparentColorArr.length === 0 && colorA.nonTransparentColorArr.length === 4)
                return false;
            if (colorB.nonTransparentColorArr.length === 3 && colorA.nonTransparentColorArr.length == 2)
                return false;
            if (colorA.firstColorOfTube === colorB.firstColorOfTube)
                return true;
        }
        return reuslt;
    };
    TouchAreaController.prototype.scaleUpTube = function (tube) {
        cc.tween(tube)
            .to(0.5, { scale: 0.17 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.scaleDownTube = function (tube) {
        cc.tween(tube)
            .to(0.5, { scale: 0.15 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    TouchAreaController.prototype.update = function (dt) {
        this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();