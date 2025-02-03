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
        _this.star = null;
        _this.touchArea = null;
        // Tools
        _this.hand = null;
        _this.scratchAble = null;
        // state
        _this.trackEnTry = null;
        _this.isDoneScratchAble = false;
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
        this.NodeContainer.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.scaleToDollNose();
    };
    GamePlay.prototype.scaleToDollNose = function () {
        var _this = this;
        var DollCurrentPos = this.NodeContainer.Doll.getPosition();
        this.scheduleOnce(function () {
            cc.tween(_this.NodeContainer.Doll)
                .to(1, { y: DollCurrentPos.y - 100, scale: 1.4 })
                .call(function () {
                constants_1.Constants.isCanTouch = true;
                _this.showTools(_this.NodeContainer.Flow1_Tool, false);
            })
                .start();
        }, 1.5);
    };
    GamePlay.prototype.scaleOutToDollFace = function () {
        var _this = this;
        var DollCurrentPos = this.NodeContainer.Doll.getPosition();
        cc.tween(this.NodeContainer.Doll)
            .to(1, { y: DollCurrentPos.y + 40, scale: 1.2 })
            .call(function () {
            constants_1.Constants.isCanTouch = true;
            _this.showTools(_this.NodeContainer.Flow2_spineTool, true);
            _this.showTowel();
        })
            .start();
    };
    GamePlay.prototype.showHint = function () {
        this.NodeContainer.Hand.active = true;
        this.NodeContainer.Hand.getComponent(cc.Animation).play();
    };
    GamePlay.prototype.debug = function () {
        // flow 2
        this.showTools(this.NodeContainer.Flow2_spineTool, true);
        this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
        constants_1.Constants.isDoneStep1 = true;
        this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false);
        // hide tear
        // this.NodeContainer.Tears.forEach(node => this.hideAnim(node))
        // show tools
        // this.showTools(this.NodeContainer.Tool, true);
        // CTA anim
        // this.activeCTAAnim();
    };
    GamePlay.prototype.hideTears = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.crySound);
        // this.scheduleOnce(() => {this.NodeContainer.Tears.forEach(node => this.hideAnim(node));}, 1.5);
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
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        var _this = this;
        tool.opacity = 0;
        if (!isActive)
            tool.active = true;
        constants_1.Constants.isCanTouch = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .call(function () {
            if (constants_1.Constants.isDoneStep1) {
                _this.showHint();
                return;
            }
            else {
                _this.showHint();
                _this.NodeContainer.Hint_Circle.active = true;
                _this.NodeContainer.Hint_Circle.getComponent(cc.Animation).play();
            }
        })
            .start();
        // this.showHint();
    };
    GamePlay.prototype.checkCollideAcne = function () {
        var _this = this;
        var toolHead = this.NodeContainer.Flow1_ToolHead.getBoundingBox();
        var _loop_1 = function (index) {
            var area = this_1.NodeContainer.Flow1_Areas[index];
            var areaBdx = area.getBoundingBox();
            if (areaBdx.intersects(toolHead)) {
                this_1.playNhoMunSound();
                constants_1.Constants.isCanTouch = false;
                constants_1.Constants.AcneRemoved += 1;
                if (constants_1.Constants.AcneRemoved >= 4)
                    constants_1.Constants.isDoneStep1 = true;
                var removeSpine = area.getChildByName("Remove_spine").getComponent(sp.Skeleton);
                var spineCream_1 = area.getChildByName("cream").getComponent(sp.Skeleton);
                removeSpine.node.active = true;
                this_1.NodeContainer.Flow1_Tool.active = false;
                this_1.NodeContainer.Flow1_Tool.opacity = 0;
                this_1.NodeContainer.Flow1_Tool.setPosition(this_1.NodeContainer.initPosTool_Flow1);
                this_1.trackEnTry = removeSpine.setAnimation(0, "action01_squeze02", false);
                this_1.scheduleOnce(function () {
                    var number = area.name.match(/\d+/)[0];
                    _this.NodeContainer.Doll.getChildByName("Nose").getChildByName("4acne_" + number).active = false;
                    spineCream_1.setAnimation(0, "action02_cream_scar", false);
                }, 2);
                this_1.setCompleteSpine(removeSpine, index);
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.NodeContainer.Flow1_Areas.length; index++) {
            _loop_1(index);
        }
    };
    GamePlay.prototype.setCompleteSpine = function (removeSpine, index) {
        var _this = this;
        removeSpine.setCompleteListener(function (track) {
            if (track.animation.name === "action01_squeze02") {
                _this.NodeContainer.Flow1_Areas.splice(index, 1);
                _this.doneFlowAndShowNextOption();
            }
        });
    };
    GamePlay.prototype.playNhoMunSound = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 1.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.spiderSound);
        }, 2);
    };
    GamePlay.prototype.getCurentTimeOfTrack = function () {
        // if(this.trackEnTry) {
        //   if(this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
        //     this.isActiveRemoveSound1 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.NodeContainer.Delight_EyeFly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
        //     this.isActiveRemoveSound2 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 2 && !this.isActiveRemoveSound3) {
        //     this.isActiveRemoveSound3 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 2.5) {
        //     this.isActiveRemoveSound4 = true;
        //     this.AudioManager.playSound(Constants.SoundTrack.gapRuoiSound);
        //   }
        // }
    };
    GamePlay.prototype.doneFlowAndShowNextOption = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.star.getComponent(cc.Animation).play("StarAnim");
        if (constants_1.Constants.isDoneStep1) {
            this.scheduleOnce(function () {
                _this.scaleOutToDollFace();
            }, 2);
            return;
        }
        ;
        this.scheduleOnce(function () {
            _this.showTools(_this.NodeContainer.Flow1_Tool, false);
        }, 1.5);
    };
    GamePlay.prototype.showTowel = function () {
        this.touchArea.getComponent("TouchAreaController").registerNewEvent();
        this.showTools(this.NodeContainer.Flow2_spineTool, true);
        constants_1.Constants.isCanTouch = true;
        this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
        // Constants.isDoneStep1 = true;
        this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false);
    };
    GamePlay.prototype.checkDoneMask = function () {
        if (this.scratchAble.getComponent("Scratchable").isWin) {
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.FaceWashSound);
            this.scratchAble.active = false;
            this.NodeContainer.Flow2_Tool.active = false;
            this.NodeContainer.Flow2_spineTool.active = false;
            this.isDoneScratchAble = true;
            this.star.getComponent(cc.Animation).play("StarAnim");
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
            this.NodeContainer.Doll_Mask.active = true;
            this.showDollBeautyFace();
        }
    };
    GamePlay.prototype.showDollBeautyFace = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.NodeContainer.Doll_Bandage.active = true;
            _this.NodeContainer.Doll_Face.setAnimation(0, "idle03", true);
        }, 1);
        this.scheduleOnce(function () {
            cc.tween(_this.NodeContainer.Doll_Mask)
                .to(1, { opacity: 0 })
                .call(function () { return _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound); })
                .start();
        }, 3);
        this.scheduleOnce(function () {
            _this.NodeContainer.CTA.active = true;
        }, 5.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.isDoneScratchAble && this.checkDoneMask();
        // !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
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
    ], GamePlay.prototype, "touchArea", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "scratchAble", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();