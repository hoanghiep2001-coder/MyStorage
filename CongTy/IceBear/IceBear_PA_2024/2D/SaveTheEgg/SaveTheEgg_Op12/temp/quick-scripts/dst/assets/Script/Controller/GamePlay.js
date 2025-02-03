
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQWdEO0FBQ2hELHVEQUFrRDtBQUNsRCwyQ0FBMEM7QUFDMUMsbURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHVFQXdXQztRQXRXRyxTQUFTO1FBRVQsdUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLG9CQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxzQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsWUFBWTtRQUdaLE9BQU87UUFFUCxlQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1Qix3QkFBZ0IsR0FBUSxJQUFJLENBQUM7UUFDN0IseUJBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRzVCLGVBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsUUFBUTtRQUNSLHNCQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLHFCQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxvQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixhQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQU0sR0FBWSxLQUFLLENBQUM7O0lBMlU1QixDQUFDO0lBeFVhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtFQUFrRTtJQUN0RSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUVJLHNDQUFzQztRQUN0QyxJQUFJLHVCQUFVLENBQUMs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QUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVwRixvQ0FBb0M7SUFDeEMsQ0FBQztJQW5XRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3FEQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVF0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNNO0lBSzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFyQlAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdXNUI7SUFBRCxlQUFDO0NBeFdELEFBd1dDLENBeFdxQyxFQUFFLENBQUMsU0FBUyxHQXdXakQ7a0JBeFdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdhbWVPcHRpb24gfSBmcm9tIFwiLi4vRGF0YS9HYW1lT3B0aW9uXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVWx0aWxzIH0gZnJvbSBcIi4uL1BsdWdpbi9VbHRpbHNcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250cm9sbGVyIGZyb20gXCIuL05vZGVzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcblxyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGdyYXBoaWM6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX0dyaWQ6IGFueSA9IG51bGw7XHJcbiAgICBwYXRoRmluZGluZ19Ob2RlczogYW55ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBPdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgY3VyZW50UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgY3VycmVudEhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY3VycmVudFBlbmNpbDogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgY3VyZXJudFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzSGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0hpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjw6FjIG9wIGtow7RuZyBwaOG6o2kgbMOgIDE1IHRow6wgY2jhuqF5IEdQXHJcbiAgICAgICAgaWYgKEdhbWVPcHRpb24uY3VycmVudE9wdGlvbiAhPT0gMTUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkhpbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5pc1N0YXJ0RHJhdyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmlzTG9zZUdhbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5pc1JlcGxheUdhbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5pc1RvU3RvcmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gY2Mud2FybihcIndpbmRvdyBpc1RvU3RvcmUgfCBjb25zdGFudCBpc1RvU3RvcmUgxJFhbmcgYuG6rXQuXCIpO1xyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzV2luR2FtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPcCAxNSBGYWtlIEdhbWUgUGxheVxyXG4gICAgICAgIGlmIChHYW1lT3B0aW9uLmN1cnJlbnRPcHRpb24gPT09IDE1ICYmICFDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE9wMTUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuYmdTb3VuZC52b2x1bWUgPSAwLjY7XHJcblxyXG4gICAgICAgIC8vIE9wIDE1IHRow6wgY29tbWVudCBkw7JuZyBuw6B5IHbDoCBpc1RvU3RvcmUg4bufIHRyw6puIMSRaVxyXG4gICAgICAgIC8vIGlmIChDb25zdGFudHMuaXNUb1N0b3JlIHx8IHdpbmRvdy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcylcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAvLyBpZihDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSBcclxuICAgICAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbml0T3AxNSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IE9wMTUgPSB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLk5vZGVzQ29udHJvbGxlci5PcDE1X0hhdGNoQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBPcDE1LmhhbmRsZUhhdGNoRWdnLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuT3AxNV9IYXRjaEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgT3AxNS5vcDE1XzEsIHRoaXMpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaGFuZGxlSGF0Y2hFZ2c6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmhhdGNoRWdnU291bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLk5vZGVzQ29udHJvbGxlci5PcDE1X0hhdGNoQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLk5vZGVzQ29udHJvbGxlci5PcDE1X0VnZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBmaXJld29ya3NcclxuICAgICAgICAgICAgICAgIF90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuTm9kZXNDb250cm9sbGVyLk9wMTVfRmlyZVdvcmsuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndpblNvdW5kKTtcclxuICAgICAgICAgICAgICAgIH0sIDMuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPcDE1Lm9wZW5OZXdHYW1lUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgNS41KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9wMTVfMTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb3Blbk5ld0dhbWVQbGF5OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaXNUb1N0b3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvU3RvcmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF90aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShgT3AxM2ApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhY3RpdmVCdXR0b25IYXRjaFR3ZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihfdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuT3AxNV9IYXRjaEJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oX3RoaXMuTm9kZXNDb250cm9sbGVyLk9wMTVfSGF0Y2hCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ3IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHN0YXJ0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBPcDE1LnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIE9wMTUuYWN0aXZlQnV0dG9uSGF0Y2hUd2VlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPcDE1LnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJhY3RlclBvcyA9IHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgPSBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgKyAyNVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlckhpdCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5sb2coXCJoaXQhIVwiKVxyXG5cclxuICAgICAgICB3aW5kb3cuaXNSZXBsYXlHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicmVzdWx0X2ZhaWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuXHJcbiAgICAgICAgLy8gc2F1IDEuNSwgY2hlY2sgY8OzIMSRYyBo4buTaSBzaW5oIGtow7RuZyB0aMOsIGNobyBoaeG7h24gQ1RBXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDEyLnJldml2ZUNvdW50ID0gVWx0aWxzLmRlY3JlYXNlUmV2aXZlKEdhbWVPcHRpb24uT3AxMi5yZXZpdmVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZXZpdmUgTGVmdDogXCIgKyBHYW1lT3B0aW9uLk9wMTIucmV2aXZlQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWVPcHRpb24uT3AxMi5yZXZpdmVDb3VudCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dDVEEoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDEzLnJldml2ZUNvdW50ID0gVWx0aWxzLmRlY3JlYXNlUmV2aXZlKEdhbWVPcHRpb24uT3AxMy5yZXZpdmVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZXZpdmUgTGVmdDogXCIgKyBHYW1lT3B0aW9uLk9wMTMucmV2aXZlQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWVPcHRpb24uT3AxMy5yZXZpdmVDb3VudCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dDVEEoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxNCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDE0LnJldml2ZUNvdW50ID0gVWx0aWxzLmRlY3JlYXNlUmV2aXZlKEdhbWVPcHRpb24uT3AxNC5yZXZpdmVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZXZpdmUgTGVmdDogXCIgKyBHYW1lT3B0aW9uLk9wMTQucmV2aXZlQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWVPcHRpb24uT3AxNC5yZXZpdmVDb3VudCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dDVEEoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q1RBKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxNykge1xyXG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDE3LnJldml2ZUNvdW50ID0gVWx0aWxzLmRlY3JlYXNlUmV2aXZlKEdhbWVPcHRpb24uT3AxNy5yZXZpdmVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZXZpdmUgTGVmdDogXCIgKyBHYW1lT3B0aW9uLk9wMTcucmV2aXZlQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWVPcHRpb24uT3AxNy5yZXZpdmVDb3VudCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dDVEEoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMS41KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1dpbkdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MubG9nKFwibG9zZSFcIilcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzTG9zZUdhbWUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZihHYW1lT3B0aW9uLmN1cnJlbnRPcHRpb24gPT09IDE3ICYmIEdhbWVPcHRpb24uT3AxNy5pc1Bhc3NMZXZlbDI4KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuT3ZlcmxheSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoYE9wMTNgKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5PdmVybGF5KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNtb290aCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShgT3Ake0dhbWVPcHRpb24uY3VycmVudE9wdGlvbn1gKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHdpbkdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1dpbkdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MubG9nKFwid2luIVwiKVxyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicmVzdWx0X3dpblwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgaWYgKEdhbWVPcHRpb24uY3VycmVudE9wdGlvbiA9PT0gMTQgJiYgIUdhbWVPcHRpb24uT3AxNC5zaG93Q1RBKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5QU19Db25mZXR0aS5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDE0LnNob3dDVEEgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5PdmVybGF5KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGBPcDEyYCkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEdhbWVPcHRpb24uY3VycmVudE9wdGlvbiA9PT0gMTcgJiYgIUdhbWVPcHRpb24uT3AxNy5zaG93Q1RBKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5QU19Db25mZXR0aS5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDE3LmlzUGFzc0xldmVsMjggPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgR2FtZU9wdGlvbi5PcDE3LnNob3dDVEEgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5PdmVybGF5KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RoIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShgT3AxM2ApIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXNXaW5HYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndpblNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuUFNfQ29uZmV0dGkucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93Q1RBKHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dDVEEoaXNXaW4/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaXNXaW5cclxuICAgICAgICAgICAgPyB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEFfUGxheU5vdy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIDogdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBX1RyeUFnYWluLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQV9idXR0b24pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udHJvbGxlci5DVEFfYnV0dG9uKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQV9idXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgICAgICAgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEFfYnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgICAgIC8vIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQV9PdmVybGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVuYWN0aXZlSGludCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLmlzSGludCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuSGludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzSGl0ICYmICF0aGlzLmlzSGl0ICYmIHRoaXMuY2hhcmFjdGVySGl0KCk7XHJcbiAgICAgICAgd2luZG93LmlzU3RhcnREcmF3ICYmICF0aGlzLmlzSGludCAmJiB0aGlzLnVuYWN0aXZlSGludCgpO1xyXG4gICAgICAgIHdpbmRvdy5zdG9wRHJhd1NvdW5kICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5kcmF3U291bmQpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=