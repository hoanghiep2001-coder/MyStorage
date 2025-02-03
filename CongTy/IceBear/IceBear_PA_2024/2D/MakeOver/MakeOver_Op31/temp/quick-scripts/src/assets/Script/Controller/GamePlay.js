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
var Anims_1 = require("../Data/Anims");
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
        _this.star = null;
        _this.star1 = null;
        _this.star2 = null;
        _this.sp_mouth = null;
        // Tools
        _this.sp_dryer = null;
        _this.Teeth_scum = null;
        _this.Options = null;
        _this.hand = null;
        // state
        _this.trackEnTry = null;
        _this.isActiveRemoveSound1 = false;
        _this.isActiveRemoveSound2 = false;
        _this.isActiveRemoveSound3 = false;
        _this.isActiveRemoveSound4 = false;
        _this.activeCTA = false;
        _this.CTA_steps = 0;
        _this.CTA_thumbnail = null;
        _this.CTA_isBtn = false;
        _this.CTA_anyThumbnail = true;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.NodeContainer.CTA.active = false;
        this.hideTears();
        this.scheduleOnce(function () {
            _this.showTools(_this.NodeContainer.Tool, true);
        }, 2.5);
        this.scheduleOnce(function () {
            _this.NodeContainer.Delight_EyeAlert.active = true;
            _this.NodeContainer.Hand.active = true;
        }, 3);
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // debug 
        // this.debug();
    };
    GamePlay.prototype.debug = function () {
        var _this = this;
        // hide tear
        this.NodeContainer.Tears.forEach(function (node) { return _this.hideAnim(node); });
        // show tools
        this.showTools(this.NodeContainer.Tool, true);
        // CTA anim
        // this.activeCTAAnim();
    };
    GamePlay.prototype.hideTears = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        this.scheduleOnce(function () { _this.NodeContainer.Tears.forEach(function (node) { return _this.hideAnim(node); }); }, 1.5);
        // this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.screamHoooSound);}, 2.5);
    };
    GamePlay.prototype.activeCTAAnim = function () {
        var _this = this;
        this.NodeContainer.CTA.active = true;
        this.CTA_thumbnail = this.NodeContainer.CTA_logo;
        cc.tween(this.NodeContainer.CTA_overlay)
            .to(0.5, { opacity: 150 })
            .call(function () {
            _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
        })
            .start();
    };
    GamePlay.prototype.showThumbnailTween = function (thumbnail, anyThumbnail, isBtn) {
        var _this = this;
        console.log(this.NodeContainer.CTA.active);
        switch (this.CTA_steps) {
            case 0:
                this.CTA_thumbnail = this.NodeContainer.CTA_logo;
                break;
            case 1:
                this.CTA_thumbnail = this.NodeContainer.CTA_icon;
                break;
            case 2:
                this.CTA_thumbnail = this.NodeContainer.CTA_Btn;
                this.CTA_anyThumbnail = false;
                this.CTA_isBtn = true;
                break;
            default:
                break;
        }
        this.CTA_steps += 1;
        cc.tween(thumbnail)
            .to(0.5, { opacity: 255 })
            .call(function () {
            anyThumbnail && _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
            isBtn && _this.activeBtnTween(_this.CTA_thumbnail);
        }).start();
    };
    GamePlay.prototype.activeBtnTween = function (btn) {
        cc.tween(btn)
            .repeatForever(cc.tween(btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
    };
    GamePlay.prototype.showIntro = function () {
        var _this = this;
        this.NodeContainer.Btn_1.active = false;
        this.NodeContainer.MainGame.active = false;
        this.NodeContainer.intro.active = true;
        // active sound intro
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.walkSound);
        // declare vars
        var Delight_Intro = this.NodeContainer.intro.getChildByName("Delight");
        var spine_Delight = Delight_Intro.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
        var Spider_Intro = this.NodeContainer.intro.getChildByName("Spider");
        // scale intro
        cc.tween(Delight_Intro)
            .to(4, { scale: 1.15 })
            .start();
        // caculated time to active/unactive Intro steps & sounds
        this.scheduleOnce(function () {
            Spider_Intro.active = true;
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.walkSound);
        }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.spiderSound); }, 2.5);
        this.scheduleOnce(function () {
            Spider_Intro.active = false;
            spine_Delight.setAnimation(0, Anims_1.SpineAnims.Intro_DollAnim.Scare, false);
        }, 3.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound); }, 5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.scareSound); }, 6.5);
        this.scheduleOnce(function () {
            _this.NodeContainer.CTA.active = true;
            _this.scheduleOnce(function () {
                cc.tween(_this.NodeContainer.CTA_Btn)
                    .repeatForever(cc.tween(_this.NodeContainer.CTA_Btn)
                    .to(0.5, { scale: 0.45 })
                    .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
            }, 1.5);
        }, 7);
    };
    GamePlay.prototype.showHint = function () {
        // this.hand.active = true;
        // cc.tween(this.hand)
        //   .to(0.5, { opacity: 255 })
        //   .call(() => {
        //     this.hand.getComponent(cc.Animation).play("Hand_HintAnim");
        //   })
        //   .start()
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        if (!isActive)
            tool.active = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .start();
        this.showHint();
    };
    GamePlay.prototype.checkCollideFly = function () {
        var area = this.NodeContainer.ToolHeadArea.getBoundingBox();
        var fly = this.NodeContainer.Fly.getBoundingBox();
        if (area.intersects(fly)) {
            constants_1.Constants.isCanTouch = false;
            constants_1.Constants.isRemovedFly = true;
            this.NodeContainer.Spine_Remove.node.active = true;
            this.NodeContainer.Tool.active = false;
            this.trackEnTry = this.NodeContainer.Spine_Remove.setAnimation(0, "Action", false);
            this.setCompleteSpine();
        }
    };
    GamePlay.prototype.setCompleteSpine = function () {
        var _this = this;
        this.NodeContainer.Spine_Remove.setCompleteListener(function (track) {
            if (track.animation.name === "Action") {
                _this.doneFlowAndShowNextOption();
            }
        });
    };
    GamePlay.prototype.getCurentTimeOfTrack = function () {
        if (this.trackEnTry) {
            if (this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
                this.isActiveRemoveSound1 = true;
                this.NodeContainer.Fly.active = false;
                this.NodeContainer.Delight_EyeFly.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
            }
            if (this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
                this.isActiveRemoveSound2 = true;
                this.NodeContainer.Fly.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
            }
            if (this.trackEnTry.trackTime >= 2 && !this.isActiveRemoveSound3) {
                this.isActiveRemoveSound3 = true;
                this.NodeContainer.Fly.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
            }
            if (this.trackEnTry.trackTime >= 2.5) {
                this.isActiveRemoveSound4 = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.gapRuoiSound);
            }
        }
    };
    GamePlay.prototype.doneFlowAndShowNextOption = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.star2.getComponent(cc.Animation).play("StarAnim");
        this.scheduleOnce(function () {
            _this.NodeContainer.Btn_1.active = true;
            cc.tween(_this.NodeContainer.Btn_1)
                .to(0.5, { opacity: 255 })
                .call(function () {
                cc.tween(_this.NodeContainer.Btn_1)
                    .repeatForever(cc.tween(_this.NodeContainer.Btn_1)
                    .to(0.5, { scale: 0.45 })
                    .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
            })
                .start();
            // this.Options.active = true;
            // this.Options.getComponent(cc.Animation).play("ShowOptions");
            // mtg & applovin
            // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1.5);
    };
    GamePlay.prototype.update = function (dt) {
        // this.activeCTA && this.activeCTAAnim();
        !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
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
    ], GamePlay.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_mouth", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_dryer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Teeth_scum", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();