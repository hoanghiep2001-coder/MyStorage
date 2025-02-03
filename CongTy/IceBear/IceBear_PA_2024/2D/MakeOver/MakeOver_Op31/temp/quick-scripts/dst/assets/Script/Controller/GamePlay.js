
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd1RDO1FBdFRDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBR3BDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLFFBQVE7UUFFUixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsUUFBUTtRQUNSLGdCQUFVLEdBQXdCLElBQUksQ0FBQztRQUN2QywwQkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QywwQkFBb0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDOztJQWdSbkMsQ0FBQztJQTdR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QUM7bURBQ1k7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTztJQUs3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNPO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBMUJGLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3VDVCO0lBQUQsZUFBQztDQXhURCxBQXdUQyxDQXhUcUMsRUFBRSxDQUFDLFNBQVMsR0F3VGpEO2tCQXhUb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBzdGFyMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIHNwX21vdXRoOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAvLyBUb29sc1xyXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICBzcF9kcnllcjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFRlZXRoX3NjdW06IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICB0cmFja0VuVHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5ID0gbnVsbDtcclxuICBpc0FjdGl2ZVJlbW92ZVNvdW5kMTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzQWN0aXZlUmVtb3ZlU291bmQyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNBY3RpdmVSZW1vdmVTb3VuZDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0FjdGl2ZVJlbW92ZVNvdW5kNDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhY3RpdmVDVEE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBDVEFfc3RlcHM6IG51bWJlciA9IDA7XHJcbiAgQ1RBX3RodW1ibmFpbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQ1RBX2lzQnRuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQ1RBX2FueVRodW1ibmFpbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DVEEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmhpZGVUZWFycygpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLlRvb2wsIHRydWUpO1xyXG4gICAgfSwgMi41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5EZWxpZ2h0X0V5ZUFsZXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LCAzKVxyXG4gICAgXHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcblxyXG5cclxuICAgIC8vIGRlYnVnIFxyXG4gICAgLy8gdGhpcy5kZWJ1ZygpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZGVidWcoKTogdm9pZCB7XHJcbiAgICAvLyBoaWRlIHRlYXJcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZWFycy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5oaWRlQW5pbShub2RlKSlcclxuXHJcbiAgICAvLyBzaG93IHRvb2xzXHJcbiAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuVG9vbCwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gQ1RBIGFuaW1cclxuICAgIC8vIHRoaXMuYWN0aXZlQ1RBQW5pbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZVRlYXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLk5vZGVDb250YWluZXIuVGVhcnMuZm9yRWFjaChub2RlID0+IHRoaXMuaGlkZUFuaW0obm9kZSkpO30sIDEuNSk7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY3JlYW1Ib29vU291bmQpO30sIDIuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVDVEFBbmltKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5DVEFfdGh1bWJuYWlsID0gdGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9sb2dvO1xyXG4gICAgXHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuQ1RBX292ZXJsYXkpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbFR3ZWVuKHRoaXMuQ1RBX3RodW1ibmFpbCwgdGhpcy5DVEFfYW55VGh1bWJuYWlsLCB0aGlzLkNUQV9pc0J0bik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VGh1bWJuYWlsVHdlZW4odGh1bWJuYWlsOiBjYy5Ob2RlLCBhbnlUaHVtYm5haWw6IGJvb2xlYW4sIGlzQnRuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSk7XHJcbiAgICBzd2l0Y2ggKHRoaXMuQ1RBX3N0ZXBzKSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2xvZ287XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2ljb247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX0J0bjtcclxuICAgICAgICB0aGlzLkNUQV9hbnlUaHVtYm5haWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNUQV9pc0J0biA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5DVEFfc3RlcHMgKz0gMTtcclxuXHJcbiAgICBjYy50d2Vlbih0aHVtYm5haWwpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBhbnlUaHVtYm5haWwgJiYgdGhpcy5zaG93VGh1bWJuYWlsVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsLCB0aGlzLkNUQV9hbnlUaHVtYm5haWwsIHRoaXMuQ1RBX2lzQnRuKVxyXG4gICAgICAgIGlzQnRuICYmIHRoaXMuYWN0aXZlQnRuVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsKVxyXG4gICAgICB9XHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUJ0blR3ZWVuKGJ0bjogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2VlbihidG4pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2hvd0ludHJvKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJ0bl8xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLk1haW5HYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gYWN0aXZlIHNvdW5kIGludHJvXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2Fsa1NvdW5kKTtcclxuXHJcbiAgICAvLyBkZWNsYXJlIHZhcnNcclxuICAgIGxldCBEZWxpZ2h0X0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiRGVsaWdodFwiKTtcclxuICAgIGxldCBzcGluZV9EZWxpZ2h0OiBzcC5Ta2VsZXRvbiA9IERlbGlnaHRfSW50cm8uZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZV9EZWxpZ2h0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICBsZXQgU3BpZGVyX0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiU3BpZGVyXCIpO1xyXG5cclxuICAgIC8vIHNjYWxlIGludHJvXHJcbiAgICBjYy50d2VlbihEZWxpZ2h0X0ludHJvKVxyXG4gICAgICAudG8oNCwgeyBzY2FsZTogMS4xNSB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyBjYWN1bGF0ZWQgdGltZSB0byBhY3RpdmUvdW5hY3RpdmUgSW50cm8gc3RlcHMgJiBzb3VuZHNcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgU3BpZGVyX0ludHJvLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53YWxrU291bmQpO1xyXG4gICAgfSwgMS41KTtcclxuXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3BpZGVyU291bmQpIH0sIDIuNSk7XHJcblxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgU3BpZGVyX0ludHJvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBzcGluZV9EZWxpZ2h0LnNldEFuaW1hdGlvbigwLCBTcGluZUFuaW1zLkludHJvX0RvbGxBbmltLlNjYXJlLCBmYWxzZSk7XHJcbiAgICB9LCAzLjIpO1xyXG5cclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5obW1Tb3VuZCkgfSwgNSk7XHJcblxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnNjYXJlU291bmQpIH0sIDYuNSk7XHJcblxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfQnRuKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9CdG4pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgfSwgMS41KVxyXG4gICAgfSwgNyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93SGludCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gY2MudHdlZW4odGhpcy5oYW5kKVxyXG4gICAgLy8gICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgLy8gICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5oYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIYW5kX0hpbnRBbmltXCIpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZUFuaW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb2xzKHRvb2w6IGNjLk5vZGUsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzQWN0aXZlKSB0b29sLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7XHJcbiAgICBsZXQgcG9zaXRpb24gPSB0b29sLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0b29sLnNldFBvc2l0aW9uKHBvc2l0aW9uLnggLSAzMCwgcG9zaXRpb24ueSk7XHJcbiAgICBjYy50d2Vlbih0b29sKVxyXG4gICAgICAudG8oMC41LCB7IHg6IHBvc2l0aW9uLngsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnNob3dIaW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQ29sbGlkZUZseSgpOiB2b2lkIHtcclxuICAgIGxldCBhcmVhID0gdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xIZWFkQXJlYS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGZseSA9IHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICBpZihhcmVhLmludGVyc2VjdHMoZmx5KSkge1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICBDb25zdGFudHMuaXNSZW1vdmVkRmx5ID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9SZW1vdmUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuVG9vbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50cmFja0VuVHJ5ID0gdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JlbW92ZS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNldENvbXBsZXRlU3BpbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldENvbXBsZXRlU3BpbmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUmVtb3ZlLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrOiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09PSBcIkFjdGlvblwiKSB7XHJcbiAgICAgICAgdGhpcy5kb25lRmxvd0FuZFNob3dOZXh0T3B0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRDdXJlbnRUaW1lT2ZUcmFjaygpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMudHJhY2tFblRyeSkge1xyXG4gICAgICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMSkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRlbGlnaHRfRXllRmx5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuNSAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMikge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMykge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMi41KSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kNCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmdhcFJ1b2lTb3VuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRvbmVGbG93QW5kU2hvd05leHRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcbiAgICB0aGlzLnN0YXIyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGFyQW5pbVwiKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5CdG5fMS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkJ0bl8xKVxyXG4gICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5CdG5fMSlcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5CdG5fMSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40NSB9KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgICAgLy8gdGhpcy5PcHRpb25zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIHRoaXMuT3B0aW9ucy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2hvd09wdGlvbnNcIik7XHJcblxyXG4gICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICB9LCAxLjUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZUNUQSAmJiB0aGlzLmFjdGl2ZUNUQUFuaW0oKTtcclxuICAgICF0aGlzLmlzQWN0aXZlUmVtb3ZlU291bmQ0ICYmIHRoaXMuZ2V0Q3VyZW50VGltZU9mVHJhY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==