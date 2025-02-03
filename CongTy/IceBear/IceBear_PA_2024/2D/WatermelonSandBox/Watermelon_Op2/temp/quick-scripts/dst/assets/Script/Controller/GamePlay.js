
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrVUM7UUFoVUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFJcEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixRQUFRO1FBQ1IsV0FBSyxHQUFlLEVBQUUsQ0FBQzs7SUFxVHpCLENBQUM7SUFsVFcseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDeEUsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sZ0NBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDcEQsYUFBYSxDQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFB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T0FBTztPQUNhLFFBQVEsQ0FrVTVCO0lBQUQsZUFBQztDQWxVRCxBQWtVQyxDQWxVcUMsRUFBRSxDQUFDLFNBQVMsR0FrVWpEO2tCQWxVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgYW5pbXM6IGNjLlR3ZWVuW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt9LCAxKVxyXG4gICAgdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhQ29udHJvbGxlclwiKS5yZWdpc3RlckV2ZW50U3RlcDIoKTtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMuYWN0aXZlQnRuQW5pbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlQnRuQW5pbSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbXNbMF0gPSBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuYnRuX0FjdGl2ZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVTdGVwMSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hbmltc1swXS5zdG9wKCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuYnRuX0FjdGl2ZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgdGhpcy5ydW5Ud2VlbkFuaW1zKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBydW5Ud2VlbkFuaW1zKCk6IHZvaWQge1xyXG4gICAgbGV0IGtpbXRpZW0gPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDFfYnRuX0tpbVRpZW0uZ2V0Q2hpbGRCeU5hbWUoXCJraW10aWVtXCIpO1xyXG4gICAgbGV0IGZyYW1lID0gdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2J0bl9LaW1UaWVtLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIik7XHJcbiAgICBsZXQgU3RlcDFfQm9uZVRoYW4gPSB0aGlzLk5vZGVDb250YWluZXIuUGxheWVyQmFzZS5nZXRDaGlsZEJ5TmFtZShcIkJvbmV0aGFuXCIpXHJcbiAgICBsZXQgU3RlcDFfSGVhZCA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkXCIpLmdldENoaWxkQnlOYW1lKFwiZGF1XCIpXHJcblxyXG4gICAgLy8gdHdlZW4ga2ltIHRpZW1cclxuICAgIGNjLnR3ZWVuKGtpbXRpZW0pXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5idG5fQWN0aXZlKVxyXG4gICAgICAgICAgLnRvKDIuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sudGllbSk7XHJcbiAgICAgICAgY2MudHdlZW4oa2ltdGllbSlcclxuICAgICAgICAgIC50bygwLjUsIHsgeDogNzAgfSlcclxuICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcIkNoYXJhY3Rlcl9JZGxlQW5pbVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlIGRvd24gZnJhbWVcclxuICAgICAgICAgICAgY2MudHdlZW4oZnJhbWUpXHJcbiAgICAgICAgICAgICAgLnRvKDEuNSwgeyBzY2FsZVk6IDAgfSlcclxuICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBib25lIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oU3RlcDFfQm9uZVRoYW4pXHJcbiAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhTdGVwMV9IZWFkLm9wYWNpdHkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oa2ltdGllbSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5vdmVybGF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoQXJlYS5nZXRDb21wb25lbnQoXCJUb3VjaEFyZWFDb250cm9sbGVyXCIpLnJlZ2lzdGVyRXZlbnRTdGVwMigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBtYWluIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2NoYXJhY3RlcilcclxuICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgICAgICAgICBTdGVwMV9IZWFkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKFN0ZXAxX0hlYWQpXHJcbiAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgYW5nbGU6IC00NSwgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldEluSG9sZSh3ZWFwb246IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgIGxldCB3ZWFwb25CZHggPSB3ZWFwb24uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfSG9sZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfSG9sZXNbaW5kZXhdO1xyXG4gICAgICBjb25zdCBob2xlQmR4ID0gaG9sZS5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgaWYgKGhvbGVCZHguaW50ZXJzZWN0cyh3ZWFwb25CZHgpKSB7XHJcbiAgICAgICAgbGV0IGhvbGVOYW1lID0gaG9sZS5uYW1lO1xyXG4gICAgICAgIHdlYXBvbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKTtcclxuICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICBob2xlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBob2xlLmdldENoaWxkQnlOYW1lKFwibnVtYmVyXCIpLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVdlYXBvbihob2xlLCB3ZWFwb24pXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0hvbGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaG9sZU5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMVwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMlwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlM1wiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0SW5Ib2xlV2l0aFRvdWNoKHdlYXBvbjogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgbGV0IHdlYXBvbkJkeCA9IHdlYXBvbi5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgaG9sZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlc1tpbmRleF07XHJcbiAgICAgIGNvbnN0IGhvbGVCZHggPSBob2xlLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICBpZiAoaG9sZUJkeC5pbnRlcnNlY3RzKHdlYXBvbkJkeCkpIHtcclxuICAgICAgICBsZXQgaG9sZU5hbWUgPSBob2xlLm5hbWU7XHJcbiAgICAgICAgd2VhcG9uLnNldFBvc2l0aW9uKGhvbGUuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaG9sZU5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMVwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMlwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJIb2xlM1wiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUxQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzBdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUyQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUzQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzJdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2hvd0J0bkFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jYW5oYmFvU291bmQpO1xyXG5cclxuICAgIGxldCBTdGVwMl9CdG5BY3RpdmUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDIuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5fQWN0aXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzW2luZGV4XTtcclxuICAgICAgY2MudHdlZW4oaG9sZSlcclxuICAgICAgICAudG8oMiwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2VlbihTdGVwMl9CdG5BY3RpdmUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYW5pbXNbMV0gPSBjYy50d2VlbihTdGVwMl9CdG5BY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbaW5kZXhdO1xyXG4gICAgICBjYy50d2VlbihmcmFtZSlcclxuICAgICAgICAudG8oMiwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVdlYXBvbihob2xlOiBjYy5Ob2RlLCB3ZWFwb246IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIGxldCBob2xlMTogY2MuTm9kZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiSG9sZTFfV2VhcG9uXCIpO1xyXG4gICAgbGV0IGhvbGUyOiBjYy5Ob2RlID0gdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX09wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJIb2xlMl9XZWFwb25cIik7XHJcbiAgICBsZXQgaG9sZTM6IGNjLk5vZGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkhvbGUzX1dlYXBvblwiKTtcclxuICAgIGxldCB3ZWFwb25OYW1lID0gd2VhcG9uLm5hbWU7XHJcblxyXG4gICAgc3dpdGNoIChob2xlLm5hbWUpIHtcclxuICAgICAgY2FzZSBcIkhvbGUxXCI6XHJcbiAgICAgICAgaG9sZTEuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkhvbGUyXCI6XHJcbiAgICAgICAgaG9sZTIuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkhvbGUzXCI6XHJcbiAgICAgICAgaG9sZTMuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2hvd0NUQSgpOiB2b2lkIHtcclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmd1bik7XHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuU3RlcDIpXHJcbiAgICAudG8oMSwge29wYWNpdHk6IDB9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxyXG4gICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5DVEEpXHJcbiAgICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogJ2VsYXN0aWNPdXQnfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfYnRuRG93bmxvYWQpXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9KVxyXG4gICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==