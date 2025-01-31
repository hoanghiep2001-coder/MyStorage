
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/sorting-define.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXHNvcnRpbmctZGVmaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHO0FBQ0gsSUFBWSxZQVNYO0FBVEQsV0FBWSxZQUFZO0lBRXBCOztPQUVHO0lBQ0gscURBQVcsQ0FBQTtJQUVYLGNBQWM7SUFDZCxtRUFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBVFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFTdkI7QUFFRDs7R0FFRztBQUNVLFFBQUEsa0JBQWtCLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiDmjpLluo/lsYLnuqdcclxuICovXHJcbmV4cG9ydCBlbnVtIFNvcnRpbmdMYXllciB7XHJcbiAgICBcclxuICAgIC8qKiBcclxuICAgICAqIOm7mOiupOWxgue6p++8jOatpOaemuS4vuW/hemhu+S/neeVme+8jOW5tuS4lOWAvOS4jeiDveS/ruaUuVxyXG4gICAgICovXHJcbiAgICBERUZBVUxUID0gMCxcclxuXHJcbiAgICAvLyDmtYvor5XlrprkuYnvvIzlj6/ku6Xnm7TmjqXnp7vpmaRcclxuICAgIFRFU1RfTElTVF9JVEVNID0gMSxcclxufVxyXG5cclxuLyoqXHJcbiAqIOWcqOWxgue6p+S4reacgOWkp+aOkuW6j+WAvFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9SREVSX0lOX0xBWUVSX01BWCA9IDEwMDAwMDtcclxuIl19