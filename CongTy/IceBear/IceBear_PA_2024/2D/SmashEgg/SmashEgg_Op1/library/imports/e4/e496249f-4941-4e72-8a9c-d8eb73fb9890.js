"use strict";
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        _this.hasResult = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        // !Constants.isWin && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        constants_1.Constants.EggDieCount = 0;
        constants_1.Constants.ironSource.isPlayBgSound = false;
        window.isWin = false;
        window.isLineStop = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        // Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        // this.registerEvent();
        var hand = this.NodesController.hint.getChildByName("hand");
        if (constants_1.Constants.isLoseGameFirstTime) {
            hand.getComponent(cc.Animation).play("Hint_2_Anim");
            var line = this.NodesController.hint.getChildByName("Shape 1");
            line.opacity = 255;
        }
        else {
            hand.getComponent(cc.Animation).play("Hint_1_Anim");
            var line = this.NodesController.hint.getChildByName("Line 1");
            line.opacity = 255;
        }
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        this.handleIronSourcePlaySound();
        // this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
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
    GamePlay.prototype.failGame = function () {
        if (this.hasResult)
            return;
        console.log("fail");
        constants_1.Constants.isLoseGameFirstTime = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.thaybaSound);
        this.hasResult = true;
        this.NodesController.text_tryAgain.getComponent(cc.Animation).play();
        for (var index = 0; index < this.NodesController.eggs.length; index++) {
            if (this.NodesController.eggs[index].active) {
                var node = this.NodesController.eggs[index];
                node.getChildByName("Fail_Icon").active = true;
            }
        }
        this.scheduleOnce(function () {
            cc.director.loadScene("game");
        }, 1.5);
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        if (this.hasResult)
            return;
        console.log("win");
        this.hasResult = true;
        constants_1.Constants.isWin = true;
        window.isWin = true;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            _this.NodesController.text_eggcelent.getComponent(cc.Animation).play();
        }, 1.5);
        this.scheduleOnce(function () {
            cc.director.loadScene("game_2");
        }, 3);
    };
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.EggDieCount === 3) {
            this.winGame();
        }
        if (window.isLineStop && constants_1.Constants.EggDieCount < 3) {
            this.failGame();
        }
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();