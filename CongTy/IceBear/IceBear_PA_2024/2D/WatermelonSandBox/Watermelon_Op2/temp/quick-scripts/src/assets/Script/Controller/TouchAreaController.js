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
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        // this.initVarialbes();
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Step1_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step1_btn_KimTiem.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step2_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showCTA, this);
        this.NodeContainer.CTA_btnDownload.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.registerEventStep2 = function () {
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
    };
    TouchAreaController.prototype.btnActiveTouchStart = function () {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
        !constants_1.Constants.isDoneStep1 && this.GamePlay.handleStep1();
    };
    TouchAreaController.prototype.WeaponTouchStart = function (e) {
        this.NodeContainer.Hand.active = false;
        var node = e.target;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        console.log(node.name);
        switch (node.name) {
            case "Gun1":
                cc.tween(node)
                    .to(0.5, { scale: 0.28 })
                    .start();
                break;
            case "kimtiem":
                cc.tween(node)
                    .to(0.5, { scale: 0.6 }).start();
                break;
            case "Gun2":
                cc.tween(node)
                    .to(0.5, { scale: 0.18 }).start();
                break;
            default:
                break;
        }
    };
    TouchAreaController.prototype.WeaponTouchMove = function (e) {
        var node = e.target;
        var pos = this.node.convertToNodeSpaceAR(e.touch.getLocation());
        node.setPosition(pos.x, pos.y - 40);
    };
    TouchAreaController.prototype.WeaponTouchEnd = function (e) {
        !this.AudioManager.pickdo.isPlaying && this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        var node = e.target;
        var result = this.GamePlay.setInHole(node);
        if (!result)
            this.GamePlay.setInHoleWithTouch(node);
        constants_1.Constants.isHole1Actived && constants_1.Constants.isHole2Actived && constants_1.Constants.isHole3Actived && this.GamePlay.showBtnActive();
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();