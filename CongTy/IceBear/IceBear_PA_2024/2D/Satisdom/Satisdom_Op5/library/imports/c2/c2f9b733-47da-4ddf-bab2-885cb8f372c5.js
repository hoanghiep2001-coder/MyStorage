"use strict";
cc._RF.push(module, 'c2f9bczR9pN37qyiFy483LF', 'Flow2Controller');
// Script/Controller/Flow2Controller.ts

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
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Flow2Controller = /** @class */ (function (_super) {
    __extends(Flow2Controller, _super);
    function Flow2Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.spine = null;
        _this.hand = null;
        _this.minPosition = cc.v2(0, -160); // Vị trí tối thiểu (x = 0, y = -160)
        _this.maxPosition = cc.v2(151.999, -28.076); // Vị trí ban đầu (x = 151.999, y = -28.076)
        _this.minAngle = 0; // Góc xoay tối thiểu
        _this.maxAngle = 45; // Góc xoay ban đầu
        _this.tolerance = cc.v2(5, 5);
        _this.currentPos = new cc.Vec2();
        return _this;
    }
    Flow2Controller.prototype.start = function () {
        this.registerEvent();
    };
    Flow2Controller.prototype.registerEvent = function () {
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodesContainer.Flow2_SpineNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    Flow2Controller.prototype.touchStart = function () {
        if (constants_1.Constants.isDoneFlow2)
            return;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        this.hand.active = false;
    };
    Flow2Controller.prototype.touchMove = function (event) {
        if (constants_1.Constants.isDoneFlow2)
            return;
        var touchLocation = event.getLocation();
        // Chuyển đổi vị trí chạm từ không gian thế giới sang không gian của Node
        var localTouchLocation = this.node.parent.convertToNodeSpaceAR(touchLocation);
        // Tính toán vị trí mới
        var newX = Math.min(Math.max(localTouchLocation.x, this.minPosition.x), this.maxPosition.x);
        var newY = Math.min(Math.max(localTouchLocation.y, this.minPosition.y), this.maxPosition.y);
        // Tính toán phần trăm thay đổi vị trí
        var positionPercent = (newY - this.minPosition.y) / (this.maxPosition.y - this.minPosition.y);
        // Tính toán góc xoay mới dựa trên phần trăm thay đổi vị trí
        var newAngle = this.minAngle + (this.maxAngle - this.minAngle) * positionPercent;
        var currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        var targetPos = cc.v2(newX, newY);
        var smoothedPos = currentPos.lerp(targetPos, 0.1);
        var currentAngle = this.NodesContainer.Flow2_SpineNode.angle;
        var smoothedAngle = cc.misc.lerp(currentAngle, newAngle, 0.1);
        // Cập nhật vị trí và góc xoay của Node
        this.NodesContainer.Flow2_SpineNode.angle = smoothedAngle;
        this.NodesContainer.Flow2_SpineNode.setPosition(smoothedPos);
        this.currentPos = touchLocation;
    };
    Flow2Controller.prototype.touchEnd = function () {
        if (constants_1.Constants.isDoneFlow2)
            return;
        if (this.isNearMinPosition()) {
            constants_1.Constants.isDoneFlow2 = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            this.win();
            cc.tween(this.NodesContainer.Flow2_SpineNode)
                .to(3.2, { x: 0, y: -160, angle: 0 })
                .start();
            console.log("Okey!");
        }
        else {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
            console.log("Wrong!");
        }
    };
    Flow2Controller.prototype.win = function () {
        var _this = this;
        this.spine.setAnimation(0, "win", false);
        this.GamePlay.doneFlow();
        this.scheduleOnce(function () {
            _this.GamePlay.showNextFlow(3);
        }, 2.5);
    };
    Flow2Controller.prototype.isNearMinPosition = function () {
        var currentPos = this.NodesContainer.Flow2_SpineNode.getPosition();
        return (Math.abs(currentPos.x - this.minPosition.x) <= this.tolerance.x &&
            Math.abs(currentPos.y - this.minPosition.y) <= this.tolerance.y);
    };
    Flow2Controller.prototype.someOtherFunction = function () {
        if (!this.isNearMinPosition()) {
            return false;
        }
        return true;
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Flow2Controller.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], Flow2Controller.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Flow2Controller.prototype, "GamePlay", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Flow2Controller.prototype, "spine", void 0);
    __decorate([
        property(cc.Node)
    ], Flow2Controller.prototype, "hand", void 0);
    Flow2Controller = __decorate([
        ccclass
    ], Flow2Controller);
    return Flow2Controller;
}(cc.Component));
exports.default = Flow2Controller;

cc._RF.pop();