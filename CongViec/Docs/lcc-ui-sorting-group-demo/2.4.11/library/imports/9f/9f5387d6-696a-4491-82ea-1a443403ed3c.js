"use strict";
cc._RF.push(module, '9f538fWaWpEkYLqGkQ0A+08', 'list-test-item');
// test/scripts/list-test-item.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var ListTestItem = /** @class */ (function (_super) {
    __extends(ListTestItem, _super);
    function ListTestItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankText = null;
        _this.goldText = null;
        _this.flagImage = null;
        _this.levelText = null;
        _this.levelBar = null;
        _this.descText = null;
        _this.uiOpacity = null;
        return _this;
    }
    ListTestItem.prototype.randomData = function (index, flagSpriteFrame) {
        this.rankText.string = String(index);
        this.goldText.string = String(Math.floor(1000 + Math.random() * 1000));
        this.flagImage.spriteFrame = flagSpriteFrame;
        this.levelText.string = "lv." + Math.floor(Math.random() * 100);
        this.levelBar.progress = Math.random();
        this.descText.string = "\u4EC0\u4E48\u4E5F\u6CA1\u7559\u4E0B - " + index;
        this.uiOpacity.opacity = 100 + Math.floor(Math.random() * 155);
    };
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "rankText", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "goldText", void 0);
    __decorate([
        property({ type: cc.Sprite })
    ], ListTestItem.prototype, "flagImage", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "levelText", void 0);
    __decorate([
        property({ type: cc.ProgressBar })
    ], ListTestItem.prototype, "levelBar", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "descText", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ListTestItem.prototype, "uiOpacity", void 0);
    ListTestItem = __decorate([
        ccclass
    ], ListTestItem);
    return ListTestItem;
}(cc.Component));
exports.default = ListTestItem;

cc._RF.pop();