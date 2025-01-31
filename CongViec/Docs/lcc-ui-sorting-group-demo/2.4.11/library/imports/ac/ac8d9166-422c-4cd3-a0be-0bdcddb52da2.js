"use strict";
cc._RF.push(module, 'ac8d9FmQixM06C+C9zdtS2i', 'sorting-group');
// lcc-ui-sorting-group/sorting-group.ts

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
exports.SortingGroup = void 0;
var sorting_define_1 = require("./sorting-define");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, executeInEditMode = _a.executeInEditMode;
var SortingGroup = /** @class */ (function (_super) {
    __extends(SortingGroup, _super);
    function SortingGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 排序层
         */
        _this._sortingLayer = sorting_define_1.SortingLayer.DEFAULT;
        /**
         * 排序值
         */
        _this._orderInLayer = 0;
        return _this;
    }
    Object.defineProperty(SortingGroup.prototype, "sortingLayer", {
        /**
         * 排序层
         */
        get: function () {
            return this._sortingLayer;
        },
        set: function (value) {
            this._sortingLayer = value;
            this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * sorting_define_1.ORDER_IN_LAYER_MAX + this._orderInLayer);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SortingGroup.prototype, "orderInLayer", {
        /**
         * 排序值
         */
        get: function () {
            return this._orderInLayer;
        },
        set: function (value) {
            this._orderInLayer = value;
            this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * sorting_define_1.ORDER_IN_LAYER_MAX + this._orderInLayer);
        },
        enumerable: false,
        configurable: true
    });
    SortingGroup.prototype.onEnable = function () {
        this.node.sortingPriority = Math.sign(this._sortingLayer) * (Math.abs(this._sortingLayer) * sorting_define_1.ORDER_IN_LAYER_MAX + this._orderInLayer);
        this.node.sortingEnabled = true;
    };
    SortingGroup.prototype.onDisable = function () {
        this.node.sortingPriority = 0;
        this.node.sortingEnabled = false;
    };
    __decorate([
        property({ type: cc.Enum(sorting_define_1.SortingLayer) })
    ], SortingGroup.prototype, "_sortingLayer", void 0);
    __decorate([
        property({ type: cc.Enum(sorting_define_1.SortingLayer) })
    ], SortingGroup.prototype, "sortingLayer", null);
    __decorate([
        property({ type: cc.Float, min: 0, max: sorting_define_1.ORDER_IN_LAYER_MAX })
    ], SortingGroup.prototype, "_orderInLayer", void 0);
    __decorate([
        property({ type: cc.Float, min: 0, max: sorting_define_1.ORDER_IN_LAYER_MAX })
    ], SortingGroup.prototype, "orderInLayer", null);
    SortingGroup = __decorate([
        ccclass('lcc-ui/SortingGroup'),
        disallowMultiple(),
        executeInEditMode()
    ], SortingGroup);
    return SortingGroup;
}(cc.Component));
exports.SortingGroup = SortingGroup;

cc._RF.pop();