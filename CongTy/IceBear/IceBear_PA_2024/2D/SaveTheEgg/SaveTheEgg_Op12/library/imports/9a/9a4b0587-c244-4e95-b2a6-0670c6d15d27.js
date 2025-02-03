"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

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
var GameOption_1 = require("../Data/GameOption");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Spine_Bees = [];
        _this.Spine_Character = null;
        // Node
        _this.EggController = null;
        _this.FakeCharacters = [];
        _this.HideMask = null;
        _this.LineContainer = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        _this.CTA_TryAgain = null;
        _this.CTA_PlayNow = null;
        _this.Hint = null;
        _this.PS_Confetti = null;
        // PreFab
        _this.Prefab_Graphics = null;
        // Op15
        _this.Op15_HatchButton = null;
        _this.Op15_Egg = null;
        _this.Op15_FireWork = null;
        return _this;
    }
    NodesController.prototype.start = function () {
        // Nếu Op hiện tại ko phải 15 thì mới khởi tạo điểm tấn công cho các con ong.
        if (GameOption_1.GameOption.currentOption !== 15) {
            constants_1.Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
            constants_1.Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
            constants_1.Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
        }
    };
    __decorate([
        property([sp.Skeleton])
    ], NodesController.prototype, "Spine_Bees", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesController.prototype, "Spine_Character", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "EggController", void 0);
    __decorate([
        property([cc.Node])
    ], NodesController.prototype, "FakeCharacters", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "LineContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "point_checkCollide", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_button", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_TryAgain", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_PlayNow", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Hint", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesController.prototype, "PS_Confetti", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_HatchButton", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_Egg", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_FireWork", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

cc._RF.pop();