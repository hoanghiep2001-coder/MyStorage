
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
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlMQztRQTlLQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLFlBQVk7UUFFWixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixtQ0FBbUM7UUFDbkMsS0FBSztRQUNMLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFFekIsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUV0QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLFNBQVM7UUFFVCxhQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUNsQyxvQ0FBb0M7UUFHcEMsaUNBQWlDO1FBQ2pDLEtBQUs7UUFDTCx1QkFBdUI7UUFDdkIsNkJBQTZCO1FBRTdCLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixTQUFTO1FBRVQsaUJBQVcsR0FBd0IsRUFBRSxDQUFDO1FBQ3RDLG9DQUFvQztRQUdwQyxZQUFZO1FBRVosaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFH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QUMsSUFBSSxDQUFDLENBQUM7MkNBQ0U7SUFJdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7NkNBQ0k7SUFTbEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7K0NBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7K0NBQ007SUFJMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7aURBQ1E7SUFNdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUEzREwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlMNUI7SUFBRCxlQUFDO0NBakxELEFBaUxDLENBakxxQyxFQUFFLENBQUMsU0FBUyxHQWlMakQ7a0JBakxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIENvbnRhaW5lclxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgVUlfSHJ6OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBVSV9WdGM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBob3Jpem9udGFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIFVJXHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBrbm90czogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBSb3BlczogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBoaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vIGVmZmVjdFxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdHM6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gIC8vIFZlcnRpY2FsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIFVJXHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBrbm90c19WdGM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgUm9wZXNfVnRjOiBjYy5Ob2RlW10gPSBbXTtcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGhpbnRzX1Z0YzogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vIGVmZmVjdFxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdHNfVnRjOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAvLyBDaGFyYWN0ZXJcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBQb25taV9Sb3BlZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIFNwaW5lX1JvcGU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBQb21pX1VuUm9wZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBDVEFcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQV9vdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIHN0ZXAxRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0ZXAyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaW5pdEdhbWUoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuUG9taV9VblJvcGVkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5oaW50cy5mb3JFYWNoKGhpbnQgPT4gaGludC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLmhpbnRzX1Z0Yy5mb3JFYWNoKGhpbnQgPT4gaGludC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpbnRzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmhpbnRzX1Z0Y1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0NUQSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLkNUQV9idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIHRoaXMuQ1RBX292ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1N0ZXAoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKENvbnN0YW50cy5zdGVwKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLnN0ZXAxRmxhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaW50c1swXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzX1Z0Y1swXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc19WdGNbMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgIHRoaXMuRWZmZWN0c19WdGNbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb21wbGV0ZVNvdW5kKTtcclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlNwaW5lX1JvcGUuc2V0QW5pbWF0aW9uKDAsIFwiYnJlYWtcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJyZWFrUm9wZVNvdW5kKTtcclxuICAgICAgICAgIHRoaXMuaGludHNbMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuaGludHNbMV0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgdGhpcy5oaW50c19WdGNbMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuaGludHNfVnRjWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLnN0ZXAyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaW50c1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGludHNfVnRjWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGludHNfVnRjWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuUm9wZXNbMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc19WdGNbMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzX1Z0Y1syXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUm9wZV9CYWNrQW5pbVwiKTtcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuRWZmZWN0c1swXS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgdGhpcy5FZmZlY3RzWzFdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNfVnRjWzBdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNfVnRjWzFdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZDIpO1xyXG4gICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuUG9ubWlfUm9wZWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLlBvbWlfVW5Sb3BlZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93Q1RBKCk7XHJcbiAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLnN0ZXAgPSBDb25zdGFudHMuc3RlcCArIDE7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDb2xsaWRlS25vdDEgJiYgIXRoaXMuc3RlcDFGbGFnICYmIHRoaXMuY2hlY2tTdGVwKCk7XHJcbiAgICBDb25zdGFudHMuaXNDb2xsaWRlS25vdDIgJiYgIXRoaXMuc3RlcDJGbGFnICYmIHRoaXMuY2hlY2tTdGVwKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=