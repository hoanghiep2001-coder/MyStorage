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
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.intro = null;
        _this.MainGame = null;
        _this.CTA = null;
        _this.Hand = null;
        _this.Btn_1 = null;
        // Character Path
        _this.Spine_Delight = null;
        _this.Delight_EyeFly = null;
        _this.Delight_EyeAlert = null;
        _this.Tears = [];
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        // Tool
        _this.Spine_Remove = null;
        _this.Tool = null;
        _this.ToolArea = null;
        _this.ToolHeadArea = null;
        _this.Fly = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        this.Btn_1 = this.MainGame.getChildByName("btnNext");
        this.Spine_Delight = this.MainGame.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
        this.Tears = this.Spine_Delight.node.children.filter(function (child) { return child.name.includes("Tears"); });
        this.Delight_EyeFly = this.Spine_Delight.node.getChildByName("fly");
        this.Delight_EyeAlert = this.Spine_Delight.node.getChildByName("Alert");
        this.Spine_Remove = this.Spine_Delight.node.getChildByName("Spine_Remove").getComponent(sp.Skeleton);
        this.Fly = this.MainGame.getChildByName("fly");
        this.Tool = this.MainGame.getChildByName("Tools");
        this.ToolArea = this.MainGame.getChildByName("Tools_Area");
        this.ToolHeadArea = this.MainGame.getChildByName("Tools_HeadArea");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "intro", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "MainGame", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();