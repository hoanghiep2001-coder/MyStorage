"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

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
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        _this.targetPos = null;
        _this.isJumpback = false;
        return _this;
    }
    Bee.prototype.start = function () {
        this.initTargetPos();
        this.beginContact();
        this.initPos = this.node.getPosition();
    };
    Bee.prototype.initTargetPos = function () {
        var random = cc.math.randomRangeInt(1, 4);
        switch (random) {
            case 1:
                this.targetPos = constants_1.Constants.Char_Point1;
                break;
            case 2:
                this.targetPos = constants_1.Constants.Char_Point2;
                break;
            case 3:
                this.targetPos = constants_1.Constants.Char_Point3;
                break;
            default:
                break;
        }
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4 && !constants_1.Constants.isHit) {
                _this.jumpBack();
                console.log("collide line");
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                // if(window.currentLv === 2) {
                //     Constants.isLoseLv2 = true;
                //     o.getComponent(cc.RigidBody).destroy();
                //     o.getComponent(cc.Collider).destroy();
                //     this.AudioManager.playSound(Constants.SoundTrack.stingSound);
                //     this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
                //     this.scheduleOnce(() => {this.GamePlay.loseLv2()}, 2.5)
                //     return;
                // }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                window.isLoseGame = true;
                constants_1.Constants.isHit = true;
                _this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var _this = this;
        this.isJumpback = true;
        this.isCollide = true;
        cc.tween(this.node)
            .to(0.2, { x: this.initPos.x, y: this.initPos.y }, { easing: cc.easing.smooth })
            .call(function () {
            _this.initTargetPos();
            _this.isCollide = false;
        })
            .start();
    };
    Bee.prototype.setAttackAgain = function () {
        var _this = this;
        if (this.isJumpback)
            return;
        this.scheduleOnce(function () { _this.isCollide = false; }, 1);
    };
    Bee.prototype.attack = function () {
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(this.targetPos, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide && !constants_1.Constants.isWinGame) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Bee.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

cc._RF.pop();