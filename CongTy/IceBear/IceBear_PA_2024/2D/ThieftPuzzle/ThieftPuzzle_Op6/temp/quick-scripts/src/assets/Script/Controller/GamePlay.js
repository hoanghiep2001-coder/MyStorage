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
var GameController_1 = require("./GameController");
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // Node
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_Button = null;
        // UI
        _this.background = null;
        _this.thieftDefault = null;
        _this.guardDefault = null;
        _this.guardDefault_Flag = null;
        _this.thieftCTA = null;
        _this.guardCTA = null;
        _this.tree = null;
        _this.glass = null;
        _this.cage = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.initPhysics();
    };
    GamePlay.prototype.start = function () {
        this.thieftCTA.active = false;
        this.guardCTA.active = false;
        this.guardDefault_Flag.active = false;
    };
    GamePlay.prototype.loseGame = function () {
        var _this = this;
        constants_1.Constants.isLoseGame = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.naniSound);
        // fill color for graphics to red
        this.GraphicsController.getComponent(cc.Graphics).fillColor = cc.Color.RED;
        this.GraphicsController.getComponent(cc.Graphics).strokeColor = cc.Color.RED;
        this.GraphicsController.graphicsNodes.forEach(function (graphic) {
            graphic.clear();
        });
        if (constants_1.Constants.isTouchPoint1) {
            this.GraphicsController.graphicsNodes[1].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
            this.GraphicsController.graphicsNodes[1].lineTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[1].stroke();
            this.GraphicsController.graphicsNodes[2].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].moveTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[2].lineTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[2].stroke();
            this.GraphicsController.graphicsNodes[6].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[6].lineTo(constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
            this.GraphicsController.graphicsNodes[6].stroke();
        }
        // show flag
        this.guardDefault_Flag.active = true;
        this.scheduleOnce(function () {
            constants_1.Constants.ironSource.isEndGame = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stunSound);
            // active CTA
            _this.guardDefault.active = false;
            _this.thieftDefault.active = false;
            _this.guardCTA.active = true;
            _this.thieftCTA.active = true;
            // destroy hand
            _this.Hand.active = false;
            _this.Hand.destroy();
            _this.GraphicsController.graphicsNodes.forEach(function (graphic) { return graphic.clear(); });
            _this.GraphicsController.getComponent(cc.Graphics).clear();
        }, 1.5);
        this.scheduleOnce(function () {
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.CTA_Button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 2.5);
    };
    GamePlay.prototype.initPhysics = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        collisionManager.enabledDrawBoundingBox = true;
    };
    GamePlay.prototype.update = function (dt) {
        // ironsource
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], GamePlay.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_Button", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault_Flag", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "tree", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "glass", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "cage", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();