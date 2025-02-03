
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxWUM7UUFuWUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFFBQVE7UUFFUixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFFBQVE7UUFDUixnQkFBVSxHQUF3QixJQUFJLENBQUM7UUFFdkMsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUF3V25DLENBQUM7SUFyV1cseUJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdEMsNkRBQTZEO1FBRTdELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR08sa0NBQWUsR0FBdkI7UUFBQSxpQkFhQztRQVpDLElBQU0sY0FBYyxHQUFHLElBQUks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QUFELGVBQUM7Q0FyWUQsQUFxWUMsQ0FyWXFDLEVBQUUsQ0FBQyxTQUFTLEdBcVlqRDtrQkFyWW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIFRvb2xzXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc2NyYXRjaEFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICB0cmFja0VuVHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5ID0gbnVsbDtcclxuXHJcbiAgaXNEb25lU2NyYXRjaEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgYWN0aXZlQ1RBOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQ1RBX3N0ZXBzOiBudW1iZXIgPSAwO1xyXG4gIENUQV90aHVtYm5haWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gIENUQV9pc0J0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIENUQV9hbnlUaHVtYm5haWw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcblxyXG4gICAgdGhpcy5zY2FsZVRvRG9sbE5vc2UoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNjYWxlVG9Eb2xsTm9zZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IERvbGxDdXJyZW50UG9zID0gdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGwuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsKVxyXG4gICAgICAudG8oMSwge3k6IERvbGxDdXJyZW50UG9zLnkgLSAxMDAsIHNjYWxlOiAxLjR9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbCwgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2NhbGVPdXRUb0RvbGxGYWNlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgRG9sbEN1cnJlbnRQb3MgPSB0aGlzLk5vZGVDb250YWluZXIuRG9sbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsKVxyXG4gICAgLnRvKDEsIHt5OiBEb2xsQ3VycmVudFBvcy55ICsgNDAsIHNjYWxlOiAxLjJ9KVxyXG4gICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLCB0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Rvd2VsKCk7XHJcbiAgICB9KVxyXG4gICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dIaW50KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICB9ICBcclxuXHJcblxyXG4gIHByaXZhdGUgZGVidWcoKTogdm9pZCB7XHJcbiAgICAvLyBmbG93IDJcclxuICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYSA9IHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJbnRyb1wiLCBmYWxzZSlcclxuXHJcbiAgICAvLyBoaWRlIHRlYXJcclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5UZWFycy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5oaWRlQW5pbShub2RlKSlcclxuXHJcbiAgICAvLyBzaG93IHRvb2xzXHJcbiAgICAvLyB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuVG9vbCwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gQ1RBIGFuaW1cclxuICAgIC8vIHRoaXMuYWN0aXZlQ1RBQW5pbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZVRlYXJzKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLk5vZGVDb250YWluZXIuVGVhcnMuZm9yRWFjaChub2RlID0+IHRoaXMuaGlkZUFuaW0obm9kZSkpO30sIDEuNSk7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY3JlYW1Ib29vU291bmQpO30sIDIuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVDVEFBbmltKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5DVEFfdGh1bWJuYWlsID0gdGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9sb2dvO1xyXG4gICAgXHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuQ1RBX292ZXJsYXkpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbFR3ZWVuKHRoaXMuQ1RBX3RodW1ibmFpbCwgdGhpcy5DVEFfYW55VGh1bWJuYWlsLCB0aGlzLkNUQV9pc0J0bik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VGh1bWJuYWlsVHdlZW4odGh1bWJuYWlsOiBjYy5Ob2RlLCBhbnlUaHVtYm5haWw6IGJvb2xlYW4sIGlzQnRuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuQ1RBX3N0ZXBzKSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2xvZ287XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2ljb247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX0J0bjtcclxuICAgICAgICB0aGlzLkNUQV9hbnlUaHVtYm5haWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNUQV9pc0J0biA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5DVEFfc3RlcHMgKz0gMTtcclxuXHJcbiAgICBjYy50d2Vlbih0aHVtYm5haWwpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBhbnlUaHVtYm5haWwgJiYgdGhpcy5zaG93VGh1bWJuYWlsVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsLCB0aGlzLkNUQV9hbnlUaHVtYm5haWwsIHRoaXMuQ1RBX2lzQnRuKVxyXG4gICAgICAgIGlzQnRuICYmIHRoaXMuYWN0aXZlQnRuVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsKVxyXG4gICAgICB9XHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUJ0blR3ZWVuKGJ0bjogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2VlbihidG4pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhpZGVBbmltKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUb29scyh0b29sOiBjYy5Ob2RlLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgIHRvb2wub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgaWYgKCFpc0FjdGl2ZSkgdG9vbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gdG9vbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIHRvb2wuc2V0UG9zaXRpb24ocG9zaXRpb24ueCAtIDMwLCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICBjYy50d2Vlbih0b29sKVxyXG4gICAgICAudG8oMC41LCB7IHg6IHBvc2l0aW9uLngsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzRG9uZVN0ZXAxKSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaG93SGludCgpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0hpbnQoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGludF9DaXJjbGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyB0aGlzLnNob3dIaW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQ29sbGlkZUFjbmUoKTogdm9pZCB7XHJcbiAgICBsZXQgdG9vbEhlYWQgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbEhlYWQuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBhcmVhID0gdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzW2luZGV4XTtcclxuICAgICAgY29uc3QgYXJlYUJkeCA9IGFyZWEuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgIGlmICggYXJlYUJkeC5pbnRlcnNlY3RzKHRvb2xIZWFkKSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5TmhvTXVuU291bmQoKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLkFjbmVSZW1vdmVkICs9IDE7IFxyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuQWNuZVJlbW92ZWQgPj0gNCkgQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlU3BpbmUgPSBhcmVhLmdldENoaWxkQnlOYW1lKFwiUmVtb3ZlX3NwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwaW5lQ3JlYW0gPSBhcmVhLmdldENoaWxkQnlOYW1lKFwiY3JlYW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlU3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX1Rvb2wub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLnNldFBvc2l0aW9uKHRoaXMuTm9kZUNvbnRhaW5lci5pbml0UG9zVG9vbF9GbG93MSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhY2tFblRyeSA9IHJlbW92ZVNwaW5lLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAxX3NxdWV6ZTAyXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IG51bWJlciA9IGFyZWEubmFtZS5tYXRjaCgvXFxkKy8pWzBdOyBcclxuXHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIk5vc2VcIikuZ2V0Q2hpbGRCeU5hbWUoYDRhY25lXyR7bnVtYmVyfWApLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgc3BpbmVDcmVhbS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wMl9jcmVhbV9zY2FyXCIsIGZhbHNlKTtcclxuICAgICAgICB9LCAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHJlbW92ZVNwaW5lLCBpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHByaXZhdGUgc2V0Q29tcGxldGVTcGluZShyZW1vdmVTcGluZTogc3AuU2tlbGV0b24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHJlbW92ZVNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrOiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09PSBcImFjdGlvbjAxX3NxdWV6ZTAyXCIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZUZsb3dBbmRTaG93TmV4dE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0gXHJcblxyXG5cclxuICBwcml2YXRlIHBsYXlOaG9NdW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjFTb3VuZCk7XHJcbiAgICB9LCAxKVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICB9LCAxLjUpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3BpZGVyU291bmQpO1xyXG4gICAgfSwgMilcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldEN1cmVudFRpbWVPZlRyYWNrKCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGlmKHRoaXMudHJhY2tFblRyeSkge1xyXG4gICAgLy8gICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMSkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDEgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRlbGlnaHRfRXllRmx5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuNSAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMikge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDIgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMykge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDMgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMi41KSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kNCA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmdhcFJ1b2lTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRvbmVGbG93QW5kU2hvd05leHRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcbiAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG4gICAgXHJcbiAgICBpZihDb25zdGFudHMuaXNEb25lU3RlcDEpIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NhbGVPdXRUb0RvbGxGYWNlKCk7XHJcbiAgICAgIH0sIDIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLCBmYWxzZSk7XHJcbiAgICB9LCAxLjUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvd2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhQ29udHJvbGxlclwiKS5yZWdpc3Rlck5ld0V2ZW50KCk7XHJcblxyXG4gICAgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX3NwaW5lVG9vbCwgdHJ1ZSk7XHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVG9vbEFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfVG9vbDtcclxuICAgIFxyXG4gICAgLy8gQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJbnRyb1wiLCBmYWxzZSlcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNoZWNrRG9uZU1hc2soKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLnNjcmF0Y2hBYmxlLmdldENvbXBvbmVudChcIlNjcmF0Y2hhYmxlXCIpLmlzV2luKSB7XHJcblxyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcblxyXG4gICAgICB0aGlzLnNjcmF0Y2hBYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5pc0RvbmVTY3JhdGNoQWJsZSA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG5cclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkRvbmVTdGVwU291bmQpO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfTWFzay5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zaG93RG9sbEJlYXV0eUZhY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dEb2xsQmVhdXR5RmFjZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfQmFuZGFnZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfRmFjZS5zZXRBbmltYXRpb24oMCwgXCJpZGxlMDNcIiwgdHJ1ZSlcclxuICAgIH0sIDEpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuRG9sbF9NYXNrKVxyXG4gICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suaG1tU291bmQpKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDMpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSwgNS41KVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAhdGhpcy5pc0RvbmVTY3JhdGNoQWJsZSAmJiB0aGlzLmNoZWNrRG9uZU1hc2soKTtcclxuICAgIC8vICF0aGlzLmlzQWN0aXZlUmVtb3ZlU291bmQ0ICYmIHRoaXMuZ2V0Q3VyZW50VGltZU9mVHJhY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==