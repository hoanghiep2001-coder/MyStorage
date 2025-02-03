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
        this.NodesContainer.Lobsters.forEach(function (lobster) {
            lobster.on(cc.Node.EventType.TOUCH_START, _this.lobsterTouchStart, _this);
            lobster.on(cc.Node.EventType.TOUCH_MOVE, _this.lobsterTouchMove, _this);
            lobster.on(cc.Node.EventType.TOUCH_END, _this.lobsterTouchEnd, _this);
            lobster.on(cc.Node.EventType.TOUCH_CANCEL, _this.lobsterTouchEnd, _this);
        });
        this.NodesContainer.CTA_button.on(cc.Node.EventType.TOUCH_START, function () {
            _this.GameController.installHandle();
        }, this);
        // mtg & applovin
        this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, function () {
            _this.GameController.installHandle();
        }, this);
    };
    TouchAreaController.prototype.lobsterTouchStart = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        // this.handleIronSourcePlaySound();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        constants_1.Constants.isGameStart = true;
        var targetNode = e.currentTarget, parentNode = targetNode.parent, childCount = parentNode.childrenCount, targetNodeScale = targetNode.scale;
        this.NodesContainer.hand.active = false;
        // lấy ra số tương ứng của lobster đang click
        constants_1.Constants.currentLobsterIndex = this.getNumberFromNodeName(targetNode.name);
        // scale up target node
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale + 0.03 }, { easing: cc.easing.elasticOut })
            .start();
        // luôn luôn cho nổi trên bề mặt canvas khi đc chọn
        targetNode.setSiblingIndex(childCount - 1);
    };
    TouchAreaController.prototype.lobsterTouchMove = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        var targetNode = e.currentTarget, touchPos = e.getLocation();
        targetNode.setPosition(this.node.convertToNodeSpaceAR(touchPos));
    };
    TouchAreaController.prototype.lobsterTouchEnd = function (e) {
        if (!constants_1.Constants.isCanTouch)
            return;
        var targetNode = e.currentTarget, targetNodeScale = targetNode.scale, demoLobster = this.NodesContainer.UI
            .getChildByName("Demo")
            .getChildByName("Lobster" + constants_1.Constants.currentLobsterIndex);
        // check collide correct area or not
        this.isCollideCorrectLobsterArea(targetNode)
            ? this.correct(targetNode, targetNodeScale, demoLobster)
            : this.wrong(targetNode, targetNodeScale);
    };
    TouchAreaController.prototype.correct = function (targetNode, targetNodeScale, demoLobster) {
        targetNode.setSiblingIndex(constants_1.Constants.currentLobsterIndex);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.CorrectSound);
        constants_1.Constants.currentCorrectStatus += 1;
        if (constants_1.Constants.lobsterStatus.every(function (status) { return status === true; })) {
            this.GamePlay.showCTA(true);
        }
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale - 0.03, position: demoLobster.position }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.wrong = function (targetNode, targetNodeScale) {
        cc.tween(targetNode)
            .to(0.5, { scale: targetNodeScale - 0.03 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.hideMaskTouch = function () {
        // mtg & applovin
        this.GameController.installHandle();
    };
    TouchAreaController.prototype.getNumberFromNodeName = function (nodeName) {
        var match = nodeName.match(/\d+$/);
        if (match)
            return parseInt(match[0], 10);
        return null;
    };
    TouchAreaController.prototype.isCollideCorrectLobsterArea = function (lobster) {
        var lobsterBdx = lobster.getBoundingBox(), correctAreaBdx = this.NodesContainer.
            CorrectLobsterAreas[constants_1.Constants.currentLobsterIndex - 1].getBoundingBox();
        if (lobsterBdx.intersects(correctAreaBdx)) {
            constants_1.Constants.lobsterStatus[constants_1.Constants.currentLobsterIndex - 1] = true;
            return true;
        }
        else {
            constants_1.Constants.lobsterStatus[constants_1.Constants.currentLobsterIndex - 1] = false;
            return false;
        }
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
        // this.GamePlay.handleMuteSoundIronSource();
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