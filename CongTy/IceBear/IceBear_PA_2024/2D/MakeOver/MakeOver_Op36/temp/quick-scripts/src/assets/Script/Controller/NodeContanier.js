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
        _this.CTA = null;
        _this.Btn_1 = null;
        _this.Hand = null;
        _this.Hint_Circle = null;
        // Character Path
        _this.Doll = null;
        _this.Doll_Face = null;
        _this.Doll_Mask = null;
        _this.Doll_Bandage = null;
        // Flow
        _this.Flow1 = null;
        _this.Flow2 = null;
        // Tools
        _this.ToolArea = null;
        _this.Flow1_Tool = null;
        _this.Flow1_ToolHead = null;
        _this.Flow2_spineTool = null;
        _this.Flow2_Tool = null;
        _this.Flow2_ToolHead = null;
        // Area
        _this.Flow1_Areas = [];
        _this.Flow1_Acnes = [];
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        _this.initPosTool_Flow1 = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        var _this = this;
        this.Hand = this.UI.getChildByName("hand2");
        this.Doll = this.UI.getChildByName("Doll");
        this.Doll_Face = this.Doll.getChildByName("Gal").getComponent(sp.Skeleton);
        this.Doll_Mask = this.Doll.getChildByName("Doll_Mask");
        this.Doll_Bandage = this.Doll.getChildByName("bandage");
        this.Flow1 = this.UI.getChildByName("Flow_1");
        this.Flow1_Tool = this.Flow1.getChildByName("Tool");
        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");
        this.Hint_Circle = this.Flow1.getChildByName("Hint_2");
        this.Flow1.children.forEach(function (child) {
            if (child.name.includes("AcneArea"))
                _this.Flow1_Areas.push(child);
        });
        this.Flow1_Acnes = this.Doll.getChildByName("Nose").children;
        this.Flow2 = this.UI.getChildByName("Flow_2");
        this.Flow2_spineTool = this.Flow2.getChildByName("spine_cream");
        this.Flow2_ToolHead = this.Flow2.getChildByName("MaskPoint");
        this.Flow2_Tool = this.Flow2.getChildByName("ToolCream");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.init();
    };
    NodeContainer.prototype.init = function () {
        this.initPosTool_Flow1 = this.Flow1_Tool.getPosition();
        this.ToolArea = this.Flow1_Tool;
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
    ], NodeContainer.prototype, "CTA", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();