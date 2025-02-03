"use strict";
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BG = null;
        _this.hideMask = null;
        _this.UI = null;
        _this.Plate = null;
        _this.DragArea = null;
        _this.Lobsters = [];
        _this.CorrectLobsterAreas = [];
        _this.DemoLobsters = [];
        _this.main = null;
        _this.time = null;
        _this.hand = null;
        _this.logo = null;
        _this.text = null;
        _this.btn_Play = null;
        _this.NextFlow = null;
        _this.CTA = null;
        _this.CTA_button = null;
        _this.CTA_button_tryAgain = null;
        _this.CTA_button_Next = null;
        _this.CTA_overlay = null;
        _this.FX_Star = null;
        _this.FX_Confetti = null;
        _this.Flow2 = null;
        _this.Flow2_SpineNode = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
        var _this = this;
        this.time = this.UI.getChildByName("time_tab1");
        this.hand = this.UI.getChildByName("hand");
        this.Plate = this.UI.getChildByName("Plate");
        this.DragArea = this.UI.getChildByName("DragArea");
        this.DragArea.children.forEach(function (item) {
            if (item.name.includes("Lobster"))
                _this.Lobsters.push(item);
            else
                _this.CorrectLobsterAreas.push(item);
        });
        this.DemoLobsters = this.UI.getChildByName("Demo").children;
        this.CTA = this.UI.getChildByName("CTA");
        this.CTA_button = this.CTA.getChildByName("button");
        this.CTA_button_tryAgain = this.CTA_button.getChildByName("TRY AGAIN");
        this.CTA_button_Next = this.CTA_button.getChildByName("NEXT");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.FX_Star = this.UI.getChildByName("StarFX").getComponent(cc.ParticleSystem);
        this.FX_Confetti = this.UI.getChildByName("ConfettiBase").children[0].getComponent(cc.ParticleSystem);
        this.NextFlow = this.UI.getChildByName("NextFlow");
        this.Flow2 = this.UI.getChildByName("Flow2");
        this.Flow2_SpineNode = this.Flow2.getChildByName("SpineNode");
    };
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

cc._RF.pop();