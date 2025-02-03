"use strict";
cc._RF.push(module, 'b7838NrFfZMWpWVpJlrJ5k0', 'EggController');
// Script/Controller/EggController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.effectDies = [];
        _this.rigidbody = null;
        _this.collide = null;
        _this.isChangeEggRigidbodyType = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 8) {
                constants_1.Constants.isLoseLv2 = true;
                _this.rigidbody.destroy();
                _this.getComponent(cc.Collider).destroy();
                _this.node.getChildByName("Spine_Character").active = false;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.explosionSound);
                _this.effectDies.forEach(function (fx) { return fx.resetSystem(); });
                _this.scheduleOnce(function () { _this.GamePlay.loseLv2(); }, 2.5);
            }
        };
    };
    NewClass.prototype.changeRigidbodyType = function () {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    };
    NewClass.prototype.update = function (dt) {
        if (window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }
    };
    __decorate([
        property(GamePlay_1.default)
    ], NewClass.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], NewClass.prototype, "effectDies", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();