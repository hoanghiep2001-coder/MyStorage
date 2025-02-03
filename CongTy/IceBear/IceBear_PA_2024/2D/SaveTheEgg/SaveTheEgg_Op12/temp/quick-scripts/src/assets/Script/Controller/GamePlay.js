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
var GameOption_1 = require("../Data/GameOption");
var AudioManager_1 = require("../Plugin/AudioManager");
var Ultils_1 = require("../Plugin/Ultils");
var GameController_1 = require("./GameController");
var NodesController_1 = require("./NodesController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this_1.NodesController = null;
        _this_1.AudioManager = null;
        _this_1.GameController = null;
        // Component
        // Node
        _this_1.graphic = null;
        _this_1.pathFinding_Grid = null;
        _this_1.pathFinding_Nodes = [];
        _this_1.Overlay = null;
        // State
        _this_1.curentPosition = null;
        _this_1.currentHint = null;
        _this_1.currentPencil = null;
        _this_1.curerntPoint = null;
        _this_1.isHit = false;
        _this_1.isHint = false;
        return _this_1;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
    };
    GamePlay.prototype.start = function () {
        // các op không phải là 15 thì chạy GP
        if (GameOption_1.GameOption.currentOption !== 15) {
            this.NodesController.Hint.active = true;
            this.NodesController.CTA.active = false;
            window.isStartDraw = false;
            window.isLoseGame = false;
            window.isReplayGame = false;
            // window.isToStore = true;
            // cc.warn("window isToStore | constant isToStore đang bật.");
            constants_1.Constants.isWinGame = false;
            constants_1.Constants.isHit = false;
            constants_1.Constants.isCanTouch = true;
            this.handleGamePlay();
        }
        // Op 15 Fake Game Play
        if (GameOption_1.GameOption.currentOption === 15 && !constants_1.Constants.isToStore) {
            this.initOp15();
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.6;
        // Op 15 thì comment dòng này và isToStore ở trên đi
        // if (Constants.isToStore || window.isToStore) {
        //     this.NodesController.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this)
        // }
        // ironsource
        // if(Constants.ironSource.isPlayBgSound) 
        //     this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    ;
    GamePlay.prototype.initOp15 = function () {
        var _this_1 = this;
        var _this = this;
        var Op15 = {
            registerEvent: function () {
                // _this.NodesController.Op15_HatchButton.on(cc.Node.EventType.TOUCH_START, Op15.handleHatchEgg, this);
                _this.NodesController.Op15_HatchButton.on(cc.Node.EventType.TOUCH_START, Op15.op15_1, _this_1);
            },
            handleHatchEgg: function () {
                // _this.handleIronSourcePlaySound();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hatchEggSound);
                _this.NodesController.Op15_HatchButton.active = false;
                _this.NodesController.Op15_Egg.getComponent(cc.Animation).play();
                // show fireworks
                _this.scheduleOnce(function () {
                    _this.NodesController.Op15_FireWork.active = true;
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
                }, 3.5);
                _this.scheduleOnce(function () {
                    Op15.openNewGamePlay();
                }, 5.5);
            },
            op15_1: function () {
                _this.GameController.installHandle();
            },
            openNewGamePlay: function () {
                window.isToStore = true;
                constants_1.Constants.isToStore = true;
                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(function () { cc.director.loadScene("Op13"); })
                    .start();
            },
            activeButtonHatchTween: function () {
                cc.tween(_this.NodesController.Op15_HatchButton)
                    .repeatForever(cc.tween(_this.NodesController.Op15_HatchButton)
                    .to(0.5, { scale: 0.45 })
                    .to(0.5, { scale: 0.47 }, { easing: cc.easing.elasticOut })).start();
            },
            start: function () {
                Op15.registerEvent();
                Op15.activeButtonHatchTween();
            }
        };
        Op15.start();
    };
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        constants_1.Constants.CharacterPos.y = constants_1.Constants.CharacterPos.y + 25;
        this.registerEvent();
    };
    ;
    GamePlay.prototype.registerEvent = function () {
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
    GamePlay.prototype.characterHit = function () {
        var _this_1 = this;
        cc.log("hit!!");
        window.isReplayGame = true;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "result_fail", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        // sau 1.5, check có đc hồi sinh không thì cho hiện CTA
        this.scheduleOnce(function () {
            if (GameOption_1.GameOption.currentOption === 12) {
                GameOption_1.GameOption.Op12.reviveCount = Ultils_1.Ultils.decreaseRevive(GameOption_1.GameOption.Op12.reviveCount);
                cc.log("revive Left: " + GameOption_1.GameOption.Op12.reviveCount);
                GameOption_1.GameOption.Op12.reviveCount > 0
                    ? _this_1.lose()
                    : _this_1.showCTA(false);
            }
            if (GameOption_1.GameOption.currentOption === 13) {
                GameOption_1.GameOption.Op13.reviveCount = Ultils_1.Ultils.decreaseRevive(GameOption_1.GameOption.Op13.reviveCount);
                cc.log("revive Left: " + GameOption_1.GameOption.Op13.reviveCount);
                GameOption_1.GameOption.Op13.reviveCount > 0
                    ? _this_1.lose()
                    : _this_1.showCTA(false);
            }
            if (GameOption_1.GameOption.currentOption === 14) {
                GameOption_1.GameOption.Op14.reviveCount = Ultils_1.Ultils.decreaseRevive(GameOption_1.GameOption.Op14.reviveCount);
                cc.log("revive Left: " + GameOption_1.GameOption.Op14.reviveCount);
                GameOption_1.GameOption.Op14.reviveCount > 0
                    ? _this_1.lose()
                    : _this_1.showCTA(false);
            }
            if (GameOption_1.GameOption.currentOption === 16) {
                _this_1.showCTA(false);
            }
            if (GameOption_1.GameOption.currentOption === 17) {
                GameOption_1.GameOption.Op17.reviveCount = Ultils_1.Ultils.decreaseRevive(GameOption_1.GameOption.Op17.reviveCount);
                cc.log("revive Left: " + GameOption_1.GameOption.Op17.reviveCount);
                GameOption_1.GameOption.Op17.reviveCount > 0
                    ? _this_1.lose()
                    : _this_1.showCTA(false);
            }
        }, 1.5);
    };
    GamePlay.prototype.lose = function () {
        if (constants_1.Constants.isWinGame)
            return;
        cc.log("lose!");
        constants_1.Constants.isLoseGame = true;
        if (GameOption_1.GameOption.currentOption === 17 && GameOption_1.GameOption.Op17.isPassLevel28) {
            cc.tween(this.Overlay)
                .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                .call(function () { cc.director.loadScene("Op13"); })
                .start();
            return;
        }
        cc.tween(this.Overlay)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () { cc.director.loadScene("Op" + GameOption_1.GameOption.currentOption); })
            .start();
    };
    GamePlay.prototype.winGame = function () {
        if (constants_1.Constants.isWinGame)
            return;
        cc.log("win!");
        this.NodesController.Spine_Character.setAnimation(0, "result_win", true);
        // 
        if (GameOption_1.GameOption.currentOption === 14 && !GameOption_1.GameOption.Op14.showCTA) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            this.NodesController.PS_Confetti.resetSystem();
            GameOption_1.GameOption.Op14.showCTA = true;
            cc.tween(this.Overlay)
                .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                .call(function () { cc.director.loadScene("Op12"); })
                .start();
            return;
        }
        if (GameOption_1.GameOption.currentOption === 17 && !GameOption_1.GameOption.Op17.showCTA) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            this.NodesController.PS_Confetti.resetSystem();
            GameOption_1.GameOption.Op17.isPassLevel28 = true;
            GameOption_1.GameOption.Op17.showCTA = true;
            cc.tween(this.Overlay)
                .to(1, { opacity: 255 }, { easing: cc.easing.smooth })
                .call(function () { cc.director.loadScene("Op13"); })
                .start();
            return;
        }
        constants_1.Constants.isWinGame = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
        this.NodesController.PS_Confetti.resetSystem();
        this.showCTA(true);
    };
    GamePlay.prototype.showCTA = function (isWin) {
        if (this.NodesController.CTA.active)
            return;
        this.NodesController.CTA.active = true;
        this.NodesController.CTA.getComponent(cc.Animation).play();
        isWin
            ? this.NodesController.CTA_PlayNow.active = true
            : this.NodesController.CTA_TryAgain.active = true;
        cc.tween(this.NodesController.CTA_button)
            .to(0.5, { opacity: 255 })
            .start();
        cc.tween(this.NodesController.CTA_button)
            .repeatForever(cc.tween(this.NodesController.CTA_button)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
        this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        // this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    GamePlay.prototype.unactiveHint = function () {
        // this.handleIronSourcePlaySound();
        this.isHint = true;
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        window.stopDrawSound && this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        // this.handleMuteSoundIronSource();
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
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Overlay", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();