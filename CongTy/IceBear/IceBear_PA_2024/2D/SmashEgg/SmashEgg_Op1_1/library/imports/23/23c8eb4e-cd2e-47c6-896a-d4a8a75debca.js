"use strict";
cc._RF.push(module, '23c8etOzS5Hxolq1KinXevK', 'Egg');
// Script/Controller/Egg.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        // Component
        _this.rigidbody = null;
        _this.collide = null;
        // state
        _this.isCollideLine = false;
        // Animation
        _this.result_fail = "result_fail";
        _this.egg_break = "egg_break";
        _this.result_win = "result_win";
        _this.idle_security = "idle_security";
        return _this;
    }
    Egg.prototype.start = function () {
        var _this = this;
        this.collide = this.getComponent(cc.PhysicsCircleCollider);
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact =
            function (c, s, o) {
                if (o.tag === 5 && !_this.isCollideLine) {
                    _this.isCollideLine = true;
                    _this.rigidbody.destroy();
                    _this.collide.destroy();
                    _this.setAnimation(_this.egg_break, false);
                    constants_1.Constants.EggDieCount += 1;
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                    _this.scheduleOnce(function () {
                        _this.node.destroy();
                    }, 1);
                }
            };
    };
    Egg.prototype.setAnimation = function (anim, loop) {
        var spine = this.node.getChildByName("Spine_Egg").getComponent(sp.Skeleton);
        spine.setAnimation(0, anim, loop);
    };
    __decorate([
        property(AudioManager_1.default)
    ], Egg.prototype, "AudioManager", void 0);
    Egg = __decorate([
        ccclass
    ], Egg);
    return Egg;
}(cc.Component));
exports.default = Egg;

cc._RF.pop();