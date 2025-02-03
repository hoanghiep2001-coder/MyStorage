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
        _this.UI_time = null;
        _this.UI_name = null;
        _this.UI_avatar = null;
        _this.UI_icons = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        // cc.director.getPhysicsManager().enabled = true;
        // let collisionManager = cc.director.getCollisionManager();
        // collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
        this.initGame();
    };
    ;
    GamePlay.prototype.initGame = function () {
        this.setupDate();
        this.setupName();
    };
    ;
    GamePlay.prototype.setupDate = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var result = hours + ":" + minutes;
        if (minutes < 10) {
            result = hours + ":0" + minutes;
        }
        ;
        this.UI_time.string = result;
    };
    GamePlay.prototype.setupName = function () {
        this.UI_name.string = "SANTA CLAUS";
        this.UI_name.spacingX = 10;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
    };
    GamePlay.prototype.update = function (dt) {
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "UI_time", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "UI_name", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_avatar", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_icons", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();