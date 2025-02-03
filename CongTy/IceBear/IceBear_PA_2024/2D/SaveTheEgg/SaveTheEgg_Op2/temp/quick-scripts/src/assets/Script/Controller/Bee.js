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
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        return _this;
    }
    Bee.prototype.start = function () {
        this.beginContact();
        this.initPos = this.node.getPosition();
        // let grid = new PF.Grid(100, 100);
        // console.log(grid);
    };
    Bee.prototype.createPathFinding = function () {
        // let grid = new PF.Grid(10, 10);
        // console.log(PF.Grid(100, 100));
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4) {
                console.log("collide");
                // this.isCollide = true;
                // this.jumpBack();
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                constants_1.Constants.isHit = true;
                // let random = Math.floor(Math.random() * 3) + 1;
                // console.log(random);
                // if(random === 1) {
                //     targetPosition = Constants.Char_Point1;
                // } else if (random === 2) {
                //     targetPosition = Constants.Char_Point2;
                // } else {
                //     targetPosition = Constants.Char_Point3;
                // }
                // switch (random) {
                //     case 1:
                //         targetPosition = Constants.Char_Point1;
                //         break;
                //     case 2:
                //         targetPosition = Constants.Char_Point2;
                //         break;
                //     case 3:
                //         targetPosition = Constants.Char_Point3;
                //         break;
                //     default:
                //         break;
                // }
                // let currentPosition = this.node.getPosition();
                // currentPosition.lerp(targetPosition, 0.5, currentPosition);
                // this.node.setPosition(currentPosition);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var targetPosition = new cc.Vec2(this.initPos.x, this.initPos.y);
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.attack = function () {
        var targetPosition = constants_1.Constants.CharacterPos;
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.015, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
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