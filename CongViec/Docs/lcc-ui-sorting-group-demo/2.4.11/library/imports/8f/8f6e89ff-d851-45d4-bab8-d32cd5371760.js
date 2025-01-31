"use strict";
cc._RF.push(module, '8f6e8n/2FFF1Lq40yzVNxdg', 'sorting-define');
// lcc-ui-sorting-group/sorting-define.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_IN_LAYER_MAX = exports.SortingLayer = void 0;
/**
 * 排序层级
 */
var SortingLayer;
(function (SortingLayer) {
    /**
     * 默认层级，此枚举必须保留，并且值不能修改
     */
    SortingLayer[SortingLayer["DEFAULT"] = 0] = "DEFAULT";
    // 测试定义，可以直接移除
    SortingLayer[SortingLayer["TEST_LIST_ITEM"] = 1] = "TEST_LIST_ITEM";
})(SortingLayer = exports.SortingLayer || (exports.SortingLayer = {}));
/**
 * 在层级中最大排序值
 */
exports.ORDER_IN_LAYER_MAX = 100000;

cc._RF.pop();