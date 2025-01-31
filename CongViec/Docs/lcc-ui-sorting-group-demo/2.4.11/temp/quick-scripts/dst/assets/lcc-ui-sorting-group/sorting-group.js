
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/sorting-group.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXHNvcnRpbmctZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFvRTtBQUU5RCxJQUFBLEtBQTZELEVBQUUsQ0FBQyxVQUFVLEVBQXhFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUtqRjtJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQThDQztRQTdDRzs7V0FFRztRQUVLLG1CQUFhLEdBQWdCLDZCQUFZLENBQUMsT0FBTyxDQUFDO1FBYzFEOztXQUVHO1FBRUssbUJBQWEsR0FBVSxDQUFDLENBQUM7O0lBdUJyQyxDQUFDO0lBbkNHLHNCQUFJLHNDQUFZO1FBSmhCOztXQUVHO2FBRUg7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUNELFVBQWlCLEtBQWtCO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsbUNBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pJLENBQUM7OztPQUpBO0lBZ0JELHNCQUFJLHNDQUFZO1FBSmhCOztXQUVHO2FBRUg7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUNELFVBQWlCLEtBQVk7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxtQ0FBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekksQ0FBQzs7O09BSkE7SUFNRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxtQ0FBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQVksQ0FBQyxFQUFDLENBQUM7dURBQ2tCO0lBTTFEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQVksQ0FBQyxFQUFDLENBQUM7b0RBR3ZDO0lBVUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRyxtQ0FBa0IsRUFBRSxDQUFDO3VEQUM3QjtJQU1qQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFHLG1DQUFrQixFQUFFLENBQUM7b0RBRzdEO0lBL0JRLFlBQVk7UUFIeEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1FBQzlCLGdCQUFnQixFQUFFO1FBQ2xCLGlCQUFpQixFQUFFO09BQ1AsWUFBWSxDQThDeEI7SUFBRCxtQkFBQztDQTlDRCxBQThDQyxDQTlDaUMsRUFBRSxDQUFDLFNBQVMsR0E4QzdDO0FBOUNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE9SREVSX0lOX0xBWUVSX01BWCwgU29ydGluZ0xheWVyIH0gZnJvbSAnLi9zb3J0aW5nLWRlZmluZSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdsY2MtdWkvU29ydGluZ0dyb3VwJylcclxuQGRpc2FsbG93TXVsdGlwbGUoKVxyXG5AZXhlY3V0ZUluRWRpdE1vZGUoKVxyXG5leHBvcnQgY2xhc3MgU29ydGluZ0dyb3VwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICog5o6S5bqP5bGCXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRW51bShTb3J0aW5nTGF5ZXIpfSlcclxuICAgIHByaXZhdGUgX3NvcnRpbmdMYXllcjpTb3J0aW5nTGF5ZXIgPSBTb3J0aW5nTGF5ZXIuREVGQVVMVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaOkuW6j+WxglxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkVudW0oU29ydGluZ0xheWVyKX0pXHJcbiAgICBnZXQgc29ydGluZ0xheWVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdMYXllcjtcclxuICAgIH1cclxuICAgIHNldCBzb3J0aW5nTGF5ZXIodmFsdWU6U29ydGluZ0xheWVyKXtcclxuICAgICAgICB0aGlzLl9zb3J0aW5nTGF5ZXIgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuc29ydGluZ1ByaW9yaXR5ID0gTWF0aC5zaWduKHRoaXMuX3NvcnRpbmdMYXllcikgKiAoTWF0aC5hYnModGhpcy5fc29ydGluZ0xheWVyKSAqIE9SREVSX0lOX0xBWUVSX01BWCArIHRoaXMuX29yZGVySW5MYXllcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5o6S5bqP5YC8XHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6Y2MuRmxvYXQsIG1pbjogMCwgbWF4IDogT1JERVJfSU5fTEFZRVJfTUFYIH0pXHJcbiAgICBwcml2YXRlIF9vcmRlckluTGF5ZXI6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaOkuW6j+WAvFxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOmNjLkZsb2F0LCBtaW46IDAsIG1heCA6IE9SREVSX0lOX0xBWUVSX01BWCB9KVxyXG4gICAgZ2V0IG9yZGVySW5MYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcmRlckluTGF5ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgb3JkZXJJbkxheWVyKHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fb3JkZXJJbkxheWVyID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNvcnRpbmdQcmlvcml0eSA9IE1hdGguc2lnbih0aGlzLl9zb3J0aW5nTGF5ZXIpICogKE1hdGguYWJzKHRoaXMuX3NvcnRpbmdMYXllcikgKiBPUkRFUl9JTl9MQVlFUl9NQVggKyB0aGlzLl9vcmRlckluTGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNvcnRpbmdQcmlvcml0eSA9IE1hdGguc2lnbih0aGlzLl9zb3J0aW5nTGF5ZXIpICogKE1hdGguYWJzKHRoaXMuX3NvcnRpbmdMYXllcikgKiBPUkRFUl9JTl9MQVlFUl9NQVggKyB0aGlzLl9vcmRlckluTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zb3J0aW5nRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNvcnRpbmdQcmlvcml0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNvcnRpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19