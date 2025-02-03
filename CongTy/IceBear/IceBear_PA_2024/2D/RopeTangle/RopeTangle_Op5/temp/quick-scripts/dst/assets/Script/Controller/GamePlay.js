
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        // Container
        _this.Character = null;
        _this.UI_Hrz = null;
        _this.UI_Vtc = null;
        // horizontal ---------------------
        // UI
        // @property([cc.Node])
        // knots: cc.Node[] = [];
        _this.Ropes = [];
        _this.hints = [];
        // effect
        _this.Effects = [];
        // ---------------------------------
        // Vertical ---------------------
        // UI
        // @property([cc.Node])
        // knots_Vtc: cc.Node[] = [];
        _this.Ropes_Vtc = [];
        _this.hints_Vtc = [];
        // effect
        _this.Effects_Vtc = [];
        // ---------------------------------
        // Character
        _this.Ponmi_Roped = null;
        _this.Spine_Rope = null;
        _this.Pomi_UnRoped = null;
        // CTA
        _this.CTA = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        _this.step1Flag = false;
        _this.step2Flag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
        this.initGame();
    };
    ;
    GamePlay.prototype.initGame = function () {
        this.Pomi_UnRoped.active = false;
        this.hints.forEach(function (hint) { return hint.active = false; });
        this.hints_Vtc.forEach(function (hint) { return hint.active = false; });
        this.CTA.active = false;
    };
    ;
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.hints[0].active = true;
        this.hints_Vtc[0].active = true;
    };
    GamePlay.prototype.showCTA = function () {
        this.CTA.active = true;
        this.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    GamePlay.prototype.checkStep = function () {
        var _this = this;
        switch (constants_1.Constants.step) {
            case 1:
                this.step1Flag = true;
                this.hints[0].active = false;
                this.hints_Vtc[0].active = false;
                this.scheduleOnce(function () {
                    _this.Ropes[0].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[0].getComponent(cc.Animation).play("Rope_BackAnim");
                }, 0.5);
                this.scheduleOnce(function () {
                    _this.Effects[0].resetSystem();
                    _this.Effects_Vtc[0].resetSystem();
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                }, 1);
                this.scheduleOnce(function () {
                    _this.Spine_Rope.setAnimation(0, "break", false);
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.breakRopeSound);
                    _this.hints[2].active = true;
                    _this.hints[1].active = false;
                    _this.hints_Vtc[2].active = true;
                    _this.hints_Vtc[1].active = false;
                }, 1.5);
                break;
            case 2:
                this.step2Flag = true;
                this.hints[2].active = false;
                this.hints[1].active = false;
                this.hints_Vtc[2].active = false;
                this.hints_Vtc[1].active = false;
                this.scheduleOnce(function () {
                    _this.Ropes[1].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes[2].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[1].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[2].getComponent(cc.Animation).play("Rope_BackAnim");
                }, 0.5);
                this.scheduleOnce(function () {
                    _this.Effects[0].resetSystem();
                    _this.Effects[1].resetSystem();
                    _this.Effects_Vtc[0].resetSystem();
                    _this.Effects_Vtc[1].resetSystem();
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound2);
                }, 1);
                this.scheduleOnce(function () {
                    _this.Ponmi_Roped.active = false;
                    _this.Pomi_UnRoped.active = true;
                }, 1.5);
                this.scheduleOnce(function () {
                    _this.showCTA();
                }, 2.5);
                break;
            case 3:
                this.GameController.installHandle();
                break;
            default:
                break;
        }
        constants_1.Constants.step = constants_1.Constants.step + 1;
    };
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isCollideKnot1 && !this.step1Flag && this.checkStep();
        constants_1.Constants.isCollideKnot2 && !this.step2Flag && this.checkStep();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Character", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_Hrz", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "Ropes", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "hints", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effects", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "Ropes_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "hints_Vtc", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effects_Vtc", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Ponmi_Roped", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "Spine_Rope", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Pomi_UnRoped", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_btn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlMQztRQTlLQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLFlBQVk7UUFFWixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixtQ0FBbUM7UUFDbkMsS0FBSztRQUNMLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFFekIsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUV0QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLFNBQVM7UUFFVCxhQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUNsQyxvQ0FBb0M7UUFHcEMsaUNBQWlDO1FBQ2pDLEtBQUs7UUFDTCx1QkFBdUI7UUFDdkIsNkJBQTZCO1FBRTdCLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixTQUFTO1FBRVQsaUJBQVcsR0FBd0IsRUFBRSxDQUFDO1FBQ3RDLG9DQUFvQztRQUdwQyxZQUFZO1FBRVosaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFH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LGNBQWMsQ0FBQyxDQUFDOzZDQUNJO0lBU2xDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOytDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOytDQUNNO0lBSTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lEQUNRO0lBTXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDUztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBM0RMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpTDVCO0lBQUQsZUFBQztDQWpMRCxBQWlMQyxDQWpMcUMsRUFBRSxDQUFDLFNBQVMsR0FpTGpEO2tCQWpMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAvLyBDb250YWluZXJcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFVJX0hyejogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgVUlfVnRjOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gaG9yaXpvbnRhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBVSVxyXG4gIC8vIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgLy8ga25vdHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgUm9wZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgaGludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvLyBlZmZlY3RcclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBFZmZlY3RzOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAvLyBWZXJ0aWNhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBVSVxyXG4gIC8vIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgLy8ga25vdHNfVnRjOiBjYy5Ob2RlW10gPSBbXTtcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIFJvcGVzX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBoaW50c19WdGM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvLyBlZmZlY3RcclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBFZmZlY3RzX1Z0YzogY2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgLy8gQ2hhcmFjdGVyXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgUG9ubWlfUm9wZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICBTcGluZV9Sb3BlOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgUG9taV9VblJvcGVkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gQ1RBXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBzdGVwMUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGVwMkZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICBsZXQgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gICAgLy8gY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLlBvbWlfVW5Sb3BlZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaGludHMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5oaW50c19WdGMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5DVEEuYWN0aXZlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZUdhbWVQbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaW50c1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5oaW50c19WdGNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dDVEEoKTogdm9pZCB7XHJcbiAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5DVEFfYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICB0aGlzLkNUQV9vdmVybGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hlY2tTdGVwKCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChDb25zdGFudHMuc3RlcCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5zdGVwMUZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGludHNbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaW50c19WdGNbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc1swXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUm9wZV9CYWNrQW5pbVwiKTtcclxuICAgICAgICAgIHRoaXMuUm9wZXNfVnRjWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgIH0sIDAuNSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5FZmZlY3RzWzBdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNfVnRjWzBdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZCk7XHJcbiAgICAgICAgfSwgMSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5TcGluZV9Sb3BlLnNldEFuaW1hdGlvbigwLCBcImJyZWFrXCIsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5icmVha1JvcGVTb3VuZCk7XHJcbiAgICAgICAgICB0aGlzLmhpbnRzWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmhpbnRzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIHRoaXMuaGludHNfVnRjWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmhpbnRzX1Z0Y1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdGhpcy5zdGVwMkZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGludHNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaW50c1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzX1Z0Y1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzX1Z0Y1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc1syXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUm9wZV9CYWNrQW5pbVwiKTtcclxuICAgICAgICAgIHRoaXMuUm9wZXNfVnRjWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc19WdGNbMl0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgIHRoaXMuRWZmZWN0c1sxXS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgdGhpcy5FZmZlY3RzX1Z0Y1swXS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgdGhpcy5FZmZlY3RzX1Z0Y1sxXS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQyKTtcclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlBvbm1pX1JvcGVkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5Qb21pX1VuUm9wZWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0NUQSgpO1xyXG4gICAgICAgIH0sIDIuNSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5zdGVwID0gQ29uc3RhbnRzLnN0ZXAgKyAxO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QxICYmICF0aGlzLnN0ZXAxRmxhZyAmJiB0aGlzLmNoZWNrU3RlcCgpO1xyXG4gICAgQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QyICYmICF0aGlzLnN0ZXAyRmxhZyAmJiB0aGlzLmNoZWNrU3RlcCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19