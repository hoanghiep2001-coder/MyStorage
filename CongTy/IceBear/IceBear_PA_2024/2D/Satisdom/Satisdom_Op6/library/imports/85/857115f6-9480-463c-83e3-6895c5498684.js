"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        _this.background = null;
        _this.HideMask = null;
        _this.oneTap = null;
        _this.mouseJoint = null;
        // horizontal
        _this.Knots = [];
        _this.Knots_2 = [];
        // @property([cc.Node])
        // Knots_3: cc.Node[] = [];
        _this.Ropes = [];
        _this.motorJoints = [];
        // vertical
        _this.Knots_Vtc = [];
        _this.Knots_2_Vtc = [];
        // @property([cc.Node])
        // Knots_3_Vtc: cc.Node[] = [];
        _this.Ropes_Vtc = [];
        _this.motorJoints_Vtc = [];
        return _this;
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        // onetap -----------------
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.oneTap.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // ---------------------------
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.ropeTouchStart, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_END, this.ropeTouchEnd, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.ropeTouchEnd, this);
        // ironsource
        // this.background.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.ropeTouchStart = function (e) {
        this.GamePlay.hints.forEach(function (hint) { return hint.active = false; });
        this.GamePlay.hints_Vtc.forEach(function (hint) { return hint.active = false; });
        if (constants_1.Constants.step === 2 || !constants_1.Constants.isCollideKnot1) {
            this.GamePlay.hints[1].active = true;
            this.GamePlay.hints_Vtc[1].active = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound1);
        }
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.ropeTouchEnd = function () {
        var _this = this;
        // rope 1
        if ((this.Ropes[0].getBoundingBox().intersects(this.Knots[0].getBoundingBox())
            || this.Ropes_Vtc[0].getBoundingBox().intersects(this.Knots_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot1) {
            constants_1.Constants.isCollideKnot1 = true;
            constants_1.Constants.knot1Status = false;
            constants_1.Constants.knot4Status = false;
            this.motorJoints[0].linearOffset = new cc.Vec2(50, 245);
            this.motorJoints_Vtc[0].linearOffset = new cc.Vec2(43, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[0].destroy();
                _this.motorJoints_Vtc[0].destroy();
            }, 0.5);
            this.HideMask.width = 5000;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
        }
        // --------------------
        // rope 2
        if ((this.Ropes[1].getBoundingBox().intersects(this.Knots_2[0].getBoundingBox())
            || this.Ropes_Vtc[1].getBoundingBox().intersects(this.Knots_2_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot2) {
            constants_1.Constants.isCollideKnot2 = true;
            this.motorJoints[1].linearOffset = new cc.Vec2(115, 245);
            this.motorJoints_Vtc[1].linearOffset = new cc.Vec2(90, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[1].destroy();
                _this.motorJoints[2].destroy();
                _this.motorJoints_Vtc[1].destroy();
                _this.motorJoints_Vtc[2].destroy();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
            }, 0.5);
        }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[1].getBoundingBox()) && !Constants.knot2Status) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[2].getBoundingBox())) {
        //   Constants.knot3Status = true;
        //   this.motorJoints[1].linearOffset = new cc.Vec2(0, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[3].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[4].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-92, 198);
        // }
        // --------------------
        // rope 3
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[0].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(128, 185);
        // }
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[1].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(85, 185);
        // }
        // --------------------
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
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
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "oneTap", void 0);
    __decorate([
        property(cc.MouseJoint)
    ], TouchAreaController.prototype, "mouseJoint", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes_Vtc", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints_Vtc", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();