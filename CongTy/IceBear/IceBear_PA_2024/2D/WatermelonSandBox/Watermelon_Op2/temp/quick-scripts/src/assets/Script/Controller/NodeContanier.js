"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        // Bg
        _this.Bg = null;
        _this.HideMask = null;
        // UI
        _this.btn_Active = null;
        _this.PlayerBase = null;
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_btnDownload = null;
        // Step 1
        _this.Step1 = null;
        _this.Step1_Btn_Active = null;
        _this.Step1_btn_KimTiem = null;
        _this.Step1_character = null;
        // Step 2
        _this.Step2 = null;
        _this.Step2_Options = null;
        _this.Step2_Gun1 = null;
        _this.Step2_kimtiem = null;
        _this.Step2_Gun2 = null;
        _this.Step2_AimingCharacter = null;
        _this.Step2_Btn_Active = null;
        _this.Step2_Hole1 = null;
        _this.Step2_Hole2 = null;
        _this.Step2_Hole3 = null;
        _this.Step2_Holes = [];
        _this.Step2_TempHoles = [];
        _this.Step2_Frames = [];
        // overlay
        _this.overlay = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        var _this = this;
        // init variables for step 1
        this.Step1 = this.UI.getChildByName("Step1");
        this.Step1_Btn_Active = this.btn_Active.getChildByName("btn");
        this.Step1_btn_KimTiem = this.PlayerBase.getChildByName("Btn_KimTiem");
        this.Step1_character = this.PlayerBase.getChildByName("character");
        this.overlay = this.UI.getChildByName("Overlay");
        // init variables for step 2
        this.Step2 = this.UI.getChildByName("Step2");
        this.Step2_Options = this.Step2.getChildByName("PlayerBase").getChildByName("Options");
        this.Step2_AimingCharacter = this.Step2_Options.getChildByName("AimingCharacter");
        this.Step2_Btn_Active = this.Step2.getChildByName("Btn_Active").getChildByName("btn");
        this.Step2_Gun1 = this.Step2_Options.getChildByName("Gun1");
        this.Step2_Gun2 = this.Step2_Options.getChildByName("Gun2");
        this.Step2_kimtiem = this.Step2_Options.getChildByName("kimtiem");
        this.Step2_Hole1 = this.Step2_Options.getChildByName("Hole1");
        this.Step2_Hole2 = this.Step2_Options.getChildByName("Hole2");
        this.Step2_Hole3 = this.Step2_Options.getChildByName("Hole3");
        this.Step2_Holes.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);
        this.Step2_TempHoles.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);
        this.Step2_Options.children.filter(function (node) {
            var isFrame = node.name.startsWith("frame");
            isFrame ? _this.Step2_Frames.push(node) : "";
        });
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "btn_Active", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "PlayerBase", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA_btnDownload", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();