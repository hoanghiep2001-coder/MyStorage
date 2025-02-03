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
        // BG
        _this.BG_1 = null;
        _this.BG_2 = null;
        // UI
        _this.UIContainer = null;
        _this.Card_1 = null;
        _this.Card_2 = null;
        _this.HideMask = null;
        _this.CardWhite = null;
        _this.Text = null;
        _this.PS_Blink = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "BG_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "BG_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UIContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Card_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Card_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CardWhite", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Text", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodeContainer.prototype, "PS_Blink", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

cc._RF.pop();