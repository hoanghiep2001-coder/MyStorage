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