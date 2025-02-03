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
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        _this.touchArea = null;
        // state
        _this.anims = [];
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // this.scheduleOnce(() => {}, 1)
        this.touchArea.getComponent("TouchAreaController").registerEventStep2();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.activeBtnAnim();
    };
    GamePlay.prototype.activeBtnAnim = function () {
        this.anims[0] = cc.tween(this.NodeContainer.btn_Active)
            .repeatForever(cc.tween(this.node)
            .to(0.5, { scale: 0.9 })
            .to(0.5, { scale: 1 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.handleStep1 = function () {
        constants_1.Constants.isDoneStep1 = true;
        this.anims[0].stop();
        this.NodeContainer.btn_Active.scale = 1;
        this.runTweenAnims();
    };
    GamePlay.prototype.runTweenAnims = function () {
        var _this = this;
        var kimtiem = this.NodeContainer.Step1_btn_KimTiem.getChildByName("kimtiem");
        var frame = this.NodeContainer.Step1_btn_KimTiem.getChildByName("frame");
        var Step1_BoneThan = this.NodeContainer.PlayerBase.getChildByName("Bonethan");
        var Step1_Head = this.NodeContainer.Step1_character.getChildByName("Head").getChildByName("dau");
        // tween kim tiem
        cc.tween(kimtiem)
            .to(0.5, { scale: 2 }, { easing: 'elasticOut' })
            .call(function () {
            cc.tween(_this.NodeContainer.btn_Active)
                .to(2.5, { scale: 0 }, { easing: 'elasticInOut' })
                .start();
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.tiem);
            cc.tween(kimtiem)
                .to(0.5, { x: 70 })
                .call(function () {
                _this.NodeContainer.Step1_character.getComponent(cc.Animation).stop("Character_IdleAnim");
                // scale down frame
                cc.tween(frame)
                    .to(1.5, { scaleY: 0 })
                    .call(function () {
                    // show bone character
                    cc.tween(Step1_BoneThan)
                        .to(0.5, { opacity: 255 })
                        .call(function () {
                        console.log(Step1_Head.opacity);
                        cc.tween(kimtiem)
                            .to(0.5, { opacity: 0 })
                            .start();
                        cc.tween(_this.NodeContainer.overlay)
                            .to(1, { opacity: 150 })
                            .call(function () {
                            _this.NodeContainer.Step1.active = false;
                            _this.NodeContainer.Step2.active = true;
                            _this.touchArea.getComponent("TouchAreaController").registerEventStep2();
                        })
                            .to(1, { opacity: 0 })
                            .start();
                    })
                        .start();
                    // --------------
                    // hide main character
                    cc.tween(_this.NodeContainer.Step1_character)
                        .to(0.5, { opacity: 0 })
                        .start();
                    // --------------
                    Step1_Head.getComponent(cc.Animation).stop();
                    cc.tween(Step1_Head)
                        .to(0.5, { angle: -45, opacity: 0 })
                        .start();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    GamePlay.prototype.setInHole = function (weapon) {
        var weaponBdx = weapon.getBoundingBox();
        for (var index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
            var hole = this.NodeContainer.Step2_Holes[index];
            var holeBdx = hole.getBoundingBox();
            if (holeBdx.intersects(weaponBdx)) {
                var holeName = hole.name;
                weapon.active = false;
                weapon.off(cc.Node.EventType.TOUCH_START);
                weapon.off(cc.Node.EventType.TOUCH_MOVE);
                weapon.off(cc.Node.EventType.TOUCH_END);
                weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                hole.getChildByName("frame").opacity = 255;
                hole.getChildByName("number").opacity = 0;
                this.activeWeapon(hole, weapon);
                this.NodeContainer.Step2_Holes.splice(index, 1);
                switch (holeName) {
                    case "Hole1":
                        constants_1.Constants.isHole1Actived = true;
                        return true;
                    case "Hole2":
                        constants_1.Constants.isHole2Actived = true;
                        return true;
                    case "Hole3":
                        constants_1.Constants.isHole3Actived = true;
                        return true;
                    default:
                        break;
                }
            }
        }
        return false;
    };
    GamePlay.prototype.setInHoleWithTouch = function (weapon) {
        var weaponBdx = weapon.getBoundingBox();
        for (var index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
            var hole = this.NodeContainer.Step2_Holes[index];
            var holeBdx = hole.getBoundingBox();
            if (holeBdx.intersects(weaponBdx)) {
                var holeName = hole.name;
                weapon.setPosition(hole.getPosition());
                hole.getChildByName("frame").opacity = 255;
                hole.getChildByName("number").opacity = 0;
                switch (holeName) {
                    case "Hole1":
                        constants_1.Constants.isHole1Actived = true;
                        break;
                    case "Hole2":
                        constants_1.Constants.isHole2Actived = true;
                        break;
                    case "Hole3":
                        constants_1.Constants.isHole3Actived = true;
                        break;
                    default:
                        break;
                }
            }
            else {
                if (!constants_1.Constants.isHole1Actived) {
                    constants_1.Constants.isHole1Actived = true;
                    this.NodeContainer.Step2_TempHoles[0].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[0].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
                if (!constants_1.Constants.isHole2Actived) {
                    constants_1.Constants.isHole2Actived = true;
                    this.NodeContainer.Step2_TempHoles[1].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[1].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
                if (!constants_1.Constants.isHole3Actived) {
                    constants_1.Constants.isHole3Actived = true;
                    this.NodeContainer.Step2_TempHoles[2].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[2].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
            }
        }
    };
    GamePlay.prototype.showBtnActive = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.canhbaoSound);
        var Step2_BtnActive = this.NodeContainer.Step2.getChildByName("Btn_Active");
        for (var index = 0; index < this.NodeContainer.Step2_TempHoles.length; index++) {
            var hole = this.NodeContainer.Step2_TempHoles[index];
            cc.tween(hole)
                .to(2, { scale: 0 }, { easing: 'elasticInOut' })
                .call(function () {
                cc.tween(Step2_BtnActive)
                    .to(0.5, { scale: 1, opacity: 255 }, { easing: 'elasticInOut' })
                    .call(function () {
                    _this.anims[1] = cc.tween(Step2_BtnActive)
                        .repeatForever(cc.tween(_this.node)
                        .to(0.5, { scale: 0.9 })
                        .to(0.5, { scale: 1 }, { easing: 'elasticOut' })).start();
                })
                    .start();
            })
                .start();
        }
        for (var index = 0; index < this.NodeContainer.Step2_Frames.length; index++) {
            var frame = this.NodeContainer.Step2_Frames[index];
            cc.tween(frame)
                .to(2, { scale: 0 }, { easing: 'elasticInOut' })
                .start();
        }
    };
    GamePlay.prototype.activeWeapon = function (hole, weapon) {
        var hole1 = this.NodeContainer.Step2_Options.getChildByName("Hole1_Weapon");
        var hole2 = this.NodeContainer.Step2_Options.getChildByName("Hole2_Weapon");
        var hole3 = this.NodeContainer.Step2_Options.getChildByName("Hole3_Weapon");
        var weaponName = weapon.name;
        switch (hole.name) {
            case "Hole1":
                hole1.getChildByName(weaponName).active = true;
                break;
            case "Hole2":
                hole2.getChildByName(weaponName).active = true;
                break;
            case "Hole3":
                hole3.getChildByName(weaponName).active = true;
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.showCTA = function () {
        // mtg & applovin
        // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.gun);
        cc.tween(this.NodeContainer.Step2)
            .to(1, { opacity: 0 }, { easing: 'elasticOut' })
            .call(function () {
            _this.NodeContainer.CTA.active = true;
            cc.tween(_this.NodeContainer.CTA)
                .to(1, { opacity: 255 }, { easing: 'elasticOut' })
                .call(function () {
                cc.tween(_this.NodeContainer.CTA_btnDownload)
                    .repeatForever(cc.tween(_this.node)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })).start();
            })
                .start();
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "touchArea", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();