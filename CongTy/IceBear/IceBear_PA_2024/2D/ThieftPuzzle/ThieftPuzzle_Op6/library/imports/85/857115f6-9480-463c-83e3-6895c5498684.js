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
var Ultils_1 = require("../Data/Ultils");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GraphicsController_1 = require("./GraphicsController");
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.HandController = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // node
        _this.HideMask = null;
        _this.Line = null;
        _this.Tutorial = null;
        _this.fence = null;
        _this.fenceLeft = null;
        return _this;
    }
    // state
    TouchAreaController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    TouchAreaController.prototype.onLoad = function () {
        constants_1.Constants.fencePoint = this.fence.getPosition();
        this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        // ironsource
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
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
    TouchAreaController.prototype.touchStart = function (event) {
        // if (Constants.ironSource.isEndGame) {
        //   this.GameController.installHandle();
        // }
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        this.Line.active = false;
        constants_1.Constants.isTouch = true;
        this.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        constants_1.Constants.currentPosition = event.getLocation();
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (constants_1.Constants.isLoseGame || !constants_1.Constants.isCanMove) {
            return;
        }
        Ultils_1.Ultils.TouchArea.checkTouchPoint(this.fence, this.HandController.fakeHand, this.fenceLeft);
        constants_1.Constants.currentPosition = event.getLocation();
        this.HandController.move();
        Ultils_1.Ultils.TouchArea.checkTouchCondition1(this.HandController.node, this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[0], this.HandController.Apple_1_Points[1]);
        // Ultils.TouchArea.checkTouchCondition2(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[1], 
        //   this.HandController.Apple_1_Points[0] 
        // );
        // Ultils.TouchArea.checkTouchCondition3(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[2], 
        //   this.HandController.Apple_1_Points[1] 
        // );
        // Ultils.TouchArea.checkTouchCondition4(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[3], 
        //   this.HandController.Apple_1_Points[2] 
        // );
        // Ultils.TouchArea.checkTouchCondition5(
        //   this.HandController.node, 
        //   this.HandController.Apple_1_Points[0], 
        //   this.HandController.Apple_1_Points[3],
        //   this.GraphicsController.graphicsNodes[4]
        // );
        Ultils_1.Ultils.TouchArea.checkTouchCondition6(this.HandController.node, this.HandController.Apple_1_Points[4], this.HandController.Apple_1_Points[0], this.GraphicsController.graphicsNodes[5]);
        Ultils_1.Ultils.TouchArea.checkTouchCondition7(this.HandController.node);
        Ultils_1.Ultils.TouchArea.checkTouchCondition8(this.HandController.node, this.GraphicsController.graphicsNodes[6]);
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.HandController.stop();
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
    TouchAreaController.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(HandController_1.default)
    ], TouchAreaController.prototype, "HandController", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], TouchAreaController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Tutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fence", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fenceLeft", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

cc._RF.pop();