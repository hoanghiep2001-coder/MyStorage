
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/lcc-ui-sorting-group/engine-extend/node');
require('./assets/lcc-ui-sorting-group/engine-extend/render-component');
require('./assets/lcc-ui-sorting-group/engine-extend/render-flow');
require('./assets/lcc-ui-sorting-group/engine-extend/spine-assembler');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/index');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/mem-pool');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-mem-pool');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-unit');
require('./assets/lcc-ui-sorting-group/engine-extend/trans-pool/unit-base');
require('./assets/lcc-ui-sorting-group/sorting-define');
require('./assets/lcc-ui-sorting-group/sorting-group');
require('./assets/test/scripts/list-test-item');
require('./assets/test/scripts/test-scene');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test/scripts/list-test-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdGVzdFxcc2NyaXB0c1xcbGlzdC10ZXN0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnQ0M7UUE3QkcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWtCLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBVzdCLENBQUM7SUFURyxpQ0FBVSxHQUFWLFVBQVcsS0FBWSxFQUFFLGVBQThCO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsR0FBRyxDQUFHLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDRDQUFZLEtBQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7a0RBQ0Y7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO2tEQUNGO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzttREFDRDtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7bURBQ0Q7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO2tEQUNGO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztrREFDRjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7bURBQ0Q7SUFyQlIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdDaEM7SUFBRCxtQkFBQztDQWhDRCxBQWdDQyxDQWhDeUMsRUFBRSxDQUFDLFNBQVMsR0FnQ3JEO2tCQWhDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFRlc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIHJhbmtUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGdvbGRUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLlNwcml0ZX0pXHJcbiAgICBmbGFnSW1hZ2U6Y2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGxldmVsVGV4dDpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuUHJvZ3Jlc3NCYXJ9KVxyXG4gICAgbGV2ZWxCYXI6Y2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGRlc2NUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcclxuICAgIHVpT3BhY2l0eTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgcmFuZG9tRGF0YShpbmRleDpudW1iZXIsIGZsYWdTcHJpdGVGcmFtZTpjYy5TcHJpdGVGcmFtZSl7XHJcbiAgICAgICAgdGhpcy5yYW5rVGV4dC5zdHJpbmcgPSBTdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZ29sZFRleHQuc3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3IoMTAwMCArIE1hdGgucmFuZG9tKCkqIDEwMDApKTtcclxuICAgICAgICB0aGlzLmZsYWdJbWFnZS5zcHJpdGVGcmFtZSA9IGZsYWdTcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dC5zdHJpbmcgPSBgbHYuJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIDEwMCl9YDtcclxuICAgICAgICB0aGlzLmxldmVsQmFyLnByb2dyZXNzID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmRlc2NUZXh0LnN0cmluZyA9IGDku4DkuYjkuZ/msqHnlZnkuIsgLSAke2luZGV4fWA7XHJcbiAgICAgICAgdGhpcy51aU9wYWNpdHkub3BhY2l0eSA9IDEwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1NSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-mem-pool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'caa4dN6nfRKe5QH6vo8J992', 'node-mem-pool');
// lcc-ui-sorting-group/engine-extend/trans-pool/node-mem-pool.js

"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var MemPool = require('./mem-pool');

var NodeMemPool = function NodeMemPool(unitClass) {
  MemPool.call(this, unitClass);
};

(function () {
  var Super = function Super() {};

  Super.prototype = MemPool.prototype;
  NodeMemPool.prototype = new Super();
})();

var proto = NodeMemPool.prototype;

proto._initNative = function () {
  this._nativeMemPool = new renderer.NodeMemPool();
};

proto._destroyUnit = function (unitID) {
  MemPool.prototype._destroyUnit.call(this, unitID);

  if (CC_JSB && CC_NATIVERENDERER) {
    this._nativeMemPool.removeNodeData(unitID);
  }
};

module.exports = NodeMemPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHRyYW5zLXBvb2xcXG5vZGUtbWVtLXBvb2wuanMiXSwibmFtZXMiOlsiTWVtUG9vbCIsInJlcXVpcmUiLCJOb2RlTWVtUG9vbCIsInVuaXRDbGFzcyIsImNhbGwiLCJTdXBlciIsInByb3RvdHlwZSIsInByb3RvIiwiX2luaXROYXRpdmUiLCJfbmF0aXZlTWVtUG9vbCIsInJlbmRlcmVyIiwiX2Rlc3Ryb3lVbml0IiwidW5pdElEIiwiQ0NfSlNCIiwiQ0NfTkFUSVZFUkVOREVSRVIiLCJyZW1vdmVOb2RlRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVQyxTQUFWLEVBQXFCO0FBQ25DSCxFQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYSxJQUFiLEVBQW1CRCxTQUFuQjtBQUNILENBRkQ7O0FBSUEsQ0FBQyxZQUFVO0FBQ1AsTUFBSUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVSxDQUFFLENBQXhCOztBQUNBQSxFQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JOLE9BQU8sQ0FBQ00sU0FBMUI7QUFDQUosRUFBQUEsV0FBVyxDQUFDSSxTQUFaLEdBQXdCLElBQUlELEtBQUosRUFBeEI7QUFDSCxDQUpEOztBQU1BLElBQUlFLEtBQUssR0FBR0wsV0FBVyxDQUFDSSxTQUF4Qjs7QUFDQUMsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLFlBQVk7QUFDNUIsT0FBS0MsY0FBTCxHQUFzQixJQUFJQyxRQUFRLENBQUNSLFdBQWIsRUFBdEI7QUFDSCxDQUZEOztBQUlBSyxLQUFLLENBQUNJLFlBQU4sR0FBcUIsVUFBVUMsTUFBVixFQUFrQjtBQUNuQ1osRUFBQUEsT0FBTyxDQUFDTSxTQUFSLENBQWtCSyxZQUFsQixDQUErQlAsSUFBL0IsQ0FBb0MsSUFBcEMsRUFBMENRLE1BQTFDOztBQUNBLE1BQUlDLE1BQU0sSUFBSUMsaUJBQWQsRUFBaUM7QUFDN0IsU0FBS0wsY0FBTCxDQUFvQk0sY0FBcEIsQ0FBbUNILE1BQW5DO0FBQ0g7QUFDSixDQUxEOztBQU9BSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLFdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5sZXQgTWVtUG9vbCA9IHJlcXVpcmUoJy4vbWVtLXBvb2wnKTtcclxubGV0IE5vZGVNZW1Qb29sID0gZnVuY3Rpb24gKHVuaXRDbGFzcykge1xyXG4gICAgTWVtUG9vbC5jYWxsKHRoaXMsIHVuaXRDbGFzcyk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgIGxldCBTdXBlciA9IGZ1bmN0aW9uKCl7fTtcclxuICAgIFN1cGVyLnByb3RvdHlwZSA9IE1lbVBvb2wucHJvdG90eXBlO1xyXG4gICAgTm9kZU1lbVBvb2wucHJvdG90eXBlID0gbmV3IFN1cGVyKCk7XHJcbn0pKCk7XHJcblxyXG5sZXQgcHJvdG8gPSBOb2RlTWVtUG9vbC5wcm90b3R5cGU7XHJcbnByb3RvLl9pbml0TmF0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5fbmF0aXZlTWVtUG9vbCA9IG5ldyByZW5kZXJlci5Ob2RlTWVtUG9vbCgpO1xyXG59O1xyXG5cclxucHJvdG8uX2Rlc3Ryb3lVbml0ID0gZnVuY3Rpb24gKHVuaXRJRCkge1xyXG4gICAgTWVtUG9vbC5wcm90b3R5cGUuX2Rlc3Ryb3lVbml0LmNhbGwodGhpcywgdW5pdElEKTtcclxuICAgIGlmIChDQ19KU0IgJiYgQ0NfTkFUSVZFUkVOREVSRVIpIHtcclxuICAgICAgICB0aGlzLl9uYXRpdmVNZW1Qb29sLnJlbW92ZU5vZGVEYXRhKHVuaXRJRCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVNZW1Qb29sOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/spine-assembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85ae97cN59LQL9ugbRsj5K1', 'spine-assembler');
// lcc-ui-sorting-group/engine-extend/spine-assembler.ts

// @ts-ignore
var gfx = cc.gfx;
// @ts-ignore
var spine = sp.spine;
// @ts-ignore
var VFOneColor = gfx.VertexFormat.vfmtPosUvColor;
// @ts-ignore
var VFTwoColor = gfx.VertexFormat.vfmtPosUvTwoColor;
var FLAG_BATCH = 0x10;
var FLAG_TWO_COLOR = 0x01;
var _handleVal = 0x00;
var _quadTriangles = [0, 1, 2, 2, 3, 0];
var _slotColor = cc.color(0, 0, 255, 255);
var _boneColor = cc.color(255, 0, 0, 255);
var _originColor = cc.color(0, 255, 0, 255);
var _meshColor = cc.color(255, 255, 0, 255);
var _finalColor = null;
var _darkColor = null;
var _tempPos = null, _tempUv = null;
// @ts-ignore
if (!CC_NATIVERENDERER) {
    _finalColor = new spine.Color(1, 1, 1, 1);
    _darkColor = new spine.Color(1, 1, 1, 1);
    _tempPos = new spine.Vector2();
    _tempUv = new spine.Vector2();
}
var _premultipliedAlpha;
var _multiplier;
var _slotRangeStart;
var _slotRangeEnd;
var _useTint;
var _debugSlots;
var _debugBones;
var _debugMesh;
var _nodeR, _nodeG, _nodeB, _nodeA;
var _finalColor32, _darkColor32;
var _vertexFormat;
var _perVertexSize;
var _perClipVertexSize;
var _vertexFloatCount = 0, _vertexCount = 0, _vertexFloatOffset = 0, _vertexOffset = 0, _indexCount = 0, _indexOffset = 0, _vfOffset = 0;
var _tempr, _tempg, _tempb;
var _inRange;
var _mustFlush;
var _x, _y, _m00, _m04, _m12, _m01, _m05, _m13;
var _r, _g, _b, _fr, _fg, _fb, _fa, _dr, _dg, _db, _da;
var _comp, _buffer, _renderer, _node, _needColor, _vertexEffect;
function _getSlotMaterial(tex, blendMode) {
    var src, dst;
    switch (blendMode) {
        case spine.BlendMode.Additive:
            src = _premultipliedAlpha ? cc.macro.ONE : cc.macro.SRC_ALPHA;
            dst = cc.macro.ONE;
            break;
        case spine.BlendMode.Multiply:
            src = cc.macro.DST_COLOR;
            dst = cc.macro.ONE_MINUS_SRC_ALPHA;
            break;
        case spine.BlendMode.Screen:
            src = cc.macro.ONE;
            dst = cc.macro.ONE_MINUS_SRC_COLOR;
            break;
        case spine.BlendMode.Normal:
        default:
            src = _premultipliedAlpha ? cc.macro.ONE : cc.macro.SRC_ALPHA;
            dst = cc.macro.ONE_MINUS_SRC_ALPHA;
            break;
    }
    var useModel = !_comp.enableBatch;
    var baseMaterial = _comp._materials[0];
    if (!baseMaterial)
        return null;
    // The key use to find corresponding material
    var key = tex.getId() + src + dst + _useTint + useModel;
    var materialCache = _comp._materialCache;
    var material = materialCache[key];
    if (!material) {
        if (!materialCache.baseMaterial) {
            material = baseMaterial;
            materialCache.baseMaterial = baseMaterial;
        }
        else {
            material = cc.MaterialVariant.create(baseMaterial, null);
        }
        material.define('CC_USE_MODEL', useModel);
        material.define('USE_TINT', _useTint);
        // update texture
        material.setProperty('texture', tex);
        // update blend function
        material.setBlend(true, gfx.BLEND_FUNC_ADD, src, dst, gfx.BLEND_FUNC_ADD, src, dst);
        materialCache[key] = material;
    }
    return material;
}
function _handleColor(color) {
    // temp rgb has multiply 255, so need divide 255;
    _fa = color.fa * _nodeA;
    _multiplier = _premultipliedAlpha ? _fa / 255 : 1;
    _r = _nodeR * _multiplier;
    _g = _nodeG * _multiplier;
    _b = _nodeB * _multiplier;
    _fr = color.fr * _r;
    _fg = color.fg * _g;
    _fb = color.fb * _b;
    _finalColor32 = ((_fa << 24) >>> 0) + (_fb << 16) + (_fg << 8) + _fr;
    _dr = color.dr * _r;
    _dg = color.dg * _g;
    _db = color.db * _b;
    _da = _premultipliedAlpha ? 255 : 0;
    _darkColor32 = ((_da << 24) >>> 0) + (_db << 16) + (_dg << 8) + _dr;
}
function _spineColorToInt32(spineColor) {
    return ((spineColor.a << 24) >>> 0) + (spineColor.b << 16) + (spineColor.g << 8) + spineColor.r;
}
// @ts-ignore
sp.Skeleton.__assembler__.fillVertices = function (skeletonColor, attachmentColor, slotColor, clipper, slot) {
    var vbuf = _buffer._vData, ibuf = _buffer._iData, uintVData = _buffer._uintVData;
    var offsetInfo;
    _finalColor.a = slotColor.a * attachmentColor.a * skeletonColor.a * _nodeA * 255;
    _multiplier = _premultipliedAlpha ? _finalColor.a : 255;
    _tempr = _nodeR * attachmentColor.r * skeletonColor.r * _multiplier;
    _tempg = _nodeG * attachmentColor.g * skeletonColor.g * _multiplier;
    _tempb = _nodeB * attachmentColor.b * skeletonColor.b * _multiplier;
    _finalColor.r = _tempr * slotColor.r;
    _finalColor.g = _tempg * slotColor.g;
    _finalColor.b = _tempb * slotColor.b;
    if (slot.darkColor == null) {
        _darkColor.set(0.0, 0.0, 0.0, 1.0);
    }
    else {
        _darkColor.r = slot.darkColor.r * _tempr;
        _darkColor.g = slot.darkColor.g * _tempg;
        _darkColor.b = slot.darkColor.b * _tempb;
    }
    _darkColor.a = _premultipliedAlpha ? 255 : 0;
    if (!clipper.isClipping()) {
        if (_vertexEffect) {
            for (var v = _vertexFloatOffset, n = _vertexFloatOffset + _vertexFloatCount; v < n; v += _perVertexSize) {
                _tempPos.x = vbuf[v];
                _tempPos.y = vbuf[v + 1];
                _tempUv.x = vbuf[v + 2];
                _tempUv.y = vbuf[v + 3];
                _vertexEffect.transform(_tempPos, _tempUv, _finalColor, _darkColor);
                vbuf[v] = _tempPos.x; // x
                vbuf[v + 1] = _tempPos.y; // y
                vbuf[v + 2] = _tempUv.x; // u
                vbuf[v + 3] = _tempUv.y; // v
                uintVData[v + 4] = _spineColorToInt32(_finalColor); // light color
                _useTint && (uintVData[v + 5] = _spineColorToInt32(_darkColor)); // dark color
            }
        }
        else {
            _finalColor32 = _spineColorToInt32(_finalColor);
            _darkColor32 = _spineColorToInt32(_darkColor);
            for (var v = _vertexFloatOffset, n = _vertexFloatOffset + _vertexFloatCount; v < n; v += _perVertexSize) {
                uintVData[v + 4] = _finalColor32; // light color
                _useTint && (uintVData[v + 5] = _darkColor32); // dark color
            }
        }
    }
    else {
        var uvs = vbuf.subarray(_vertexFloatOffset + 2);
        clipper.clipTriangles(vbuf.subarray(_vertexFloatOffset), _vertexFloatCount, ibuf.subarray(_indexOffset), _indexCount, uvs, _finalColor, _darkColor, _useTint, _perVertexSize);
        var clippedVertices = new Float32Array(clipper.clippedVertices);
        var clippedTriangles = clipper.clippedTriangles;
        // insure capacity
        _indexCount = clippedTriangles.length;
        _vertexFloatCount = clippedVertices.length / _perClipVertexSize * _perVertexSize;
        offsetInfo = _buffer.request(_vertexFloatCount / _perVertexSize, _indexCount);
        _indexOffset = offsetInfo.indiceOffset,
            _vertexOffset = offsetInfo.vertexOffset,
            _vertexFloatOffset = offsetInfo.byteOffset >> 2;
        vbuf = _buffer._vData,
            ibuf = _buffer._iData;
        uintVData = _buffer._uintVData;
        // fill indices
        ibuf.set(clippedTriangles, _indexOffset);
        // fill vertices contain x y u v light color dark color
        if (_vertexEffect) {
            for (var v = 0, n = clippedVertices.length, offset = _vertexFloatOffset; v < n; v += _perClipVertexSize, offset += _perVertexSize) {
                _tempPos.x = clippedVertices[v];
                _tempPos.y = clippedVertices[v + 1];
                _finalColor.set(clippedVertices[v + 2], clippedVertices[v + 3], clippedVertices[v + 4], clippedVertices[v + 5]);
                _tempUv.x = clippedVertices[v + 6];
                _tempUv.y = clippedVertices[v + 7];
                if (_useTint) {
                    _darkColor.set(clippedVertices[v + 8], clippedVertices[v + 9], clippedVertices[v + 10], clippedVertices[v + 11]);
                }
                else {
                    _darkColor.set(0, 0, 0, 0);
                }
                _vertexEffect.transform(_tempPos, _tempUv, _finalColor, _darkColor);
                vbuf[offset] = _tempPos.x; // x
                vbuf[offset + 1] = _tempPos.y; // y
                vbuf[offset + 2] = _tempUv.x; // u
                vbuf[offset + 3] = _tempUv.y; // v
                uintVData[offset + 4] = _spineColorToInt32(_finalColor);
                if (_useTint) {
                    uintVData[offset + 5] = _spineColorToInt32(_darkColor);
                }
            }
        }
        else {
            for (var v = 0, n = clippedVertices.length, offset = _vertexFloatOffset; v < n; v += _perClipVertexSize, offset += _perVertexSize) {
                vbuf[offset] = clippedVertices[v]; // x
                vbuf[offset + 1] = clippedVertices[v + 1]; // y
                vbuf[offset + 2] = clippedVertices[v + 6]; // u
                vbuf[offset + 3] = clippedVertices[v + 7]; // v
                _finalColor32 = ((clippedVertices[v + 5] << 24) >>> 0) + (clippedVertices[v + 4] << 16) + (clippedVertices[v + 3] << 8) + clippedVertices[v + 2];
                uintVData[offset + 4] = _finalColor32;
                if (_useTint) {
                    _darkColor32 = ((clippedVertices[v + 11] << 24) >>> 0) + (clippedVertices[v + 10] << 16) + (clippedVertices[v + 9] << 8) + clippedVertices[v + 8];
                    uintVData[offset + 5] = _darkColor32;
                }
            }
        }
    }
};
// @ts-ignore
sp.Skeleton.__assembler__.realTimeTraverse = function (worldMat) {
    var vbuf;
    var ibuf;
    var locSkeleton = _comp._skeleton;
    var skeletonColor = locSkeleton.color;
    var graphics = _comp._debugRenderer;
    var clipper = _comp._clipper;
    var material = null;
    var attachment, attachmentColor, slotColor, uvs, triangles;
    var isRegion, isMesh, isClip;
    var offsetInfo;
    var slot;
    var worldMatm;
    _slotRangeStart = _comp._startSlotIndex;
    _slotRangeEnd = _comp._endSlotIndex;
    _inRange = false;
    if (_slotRangeStart == -1)
        _inRange = true;
    _debugSlots = _comp.debugSlots;
    _debugBones = _comp.debugBones;
    _debugMesh = _comp.debugMesh;
    if (graphics && (_debugBones || _debugSlots || _debugMesh)) {
        graphics.clear();
        graphics.lineWidth = 2;
    }
    // x y u v r1 g1 b1 a1 r2 g2 b2 a2 or x y u v r g b a 
    _perClipVertexSize = _useTint ? 12 : 8;
    _vertexFloatCount = 0;
    _vertexFloatOffset = 0;
    _vertexOffset = 0;
    _indexCount = 0;
    _indexOffset = 0;
    for (var slotIdx = 0, slotCount = locSkeleton.drawOrder.length; slotIdx < slotCount; slotIdx++) {
        slot = locSkeleton.drawOrder[slotIdx];
        if (slot == undefined || !slot.bone.active) {
            continue;
        }
        if (_slotRangeStart >= 0 && _slotRangeStart == slot.data.index) {
            _inRange = true;
        }
        if (!_inRange) {
            clipper.clipEndWithSlot(slot);
            continue;
        }
        if (_slotRangeEnd >= 0 && _slotRangeEnd == slot.data.index) {
            _inRange = false;
        }
        _vertexFloatCount = 0;
        _indexCount = 0;
        attachment = slot.getAttachment();
        if (!attachment) {
            clipper.clipEndWithSlot(slot);
            continue;
        }
        isRegion = attachment instanceof spine.RegionAttachment;
        isMesh = attachment instanceof spine.MeshAttachment;
        isClip = attachment instanceof spine.ClippingAttachment;
        if (isClip) {
            clipper.clipStart(slot, attachment);
            continue;
        }
        if (!isRegion && !isMesh) {
            clipper.clipEndWithSlot(slot);
            continue;
        }
        material = _getSlotMaterial(attachment.region.texture._texture, slot.data.blendMode);
        if (!material) {
            clipper.clipEndWithSlot(slot);
            continue;
        }
        if (_mustFlush || material.getHash() !== _renderer.material.getHash()) {
            _mustFlush = false;
            _renderer._flush();
            _renderer.node = _node;
            _renderer.material = material;
        }
        if (isRegion) {
            triangles = _quadTriangles;
            // insure capacity
            _vertexFloatCount = 4 * _perVertexSize;
            _indexCount = 6;
            offsetInfo = _buffer.request(4, 6);
            _indexOffset = offsetInfo.indiceOffset,
                _vertexOffset = offsetInfo.vertexOffset,
                _vertexFloatOffset = offsetInfo.byteOffset >> 2;
            vbuf = _buffer._vData,
                ibuf = _buffer._iData;
            // compute vertex and fill x y
            attachment.computeWorldVertices(slot.bone, vbuf, _vertexFloatOffset, _perVertexSize);
            // draw debug slots if enabled graphics
            if (graphics && _debugSlots) {
                graphics.strokeColor = _slotColor;
                graphics.moveTo(vbuf[_vertexFloatOffset], vbuf[_vertexFloatOffset + 1]);
                for (var ii = _vertexFloatOffset + _perVertexSize, nn = _vertexFloatOffset + _vertexFloatCount; ii < nn; ii += _perVertexSize) {
                    graphics.lineTo(vbuf[ii], vbuf[ii + 1]);
                }
                graphics.close();
                graphics.stroke();
            }
        }
        else if (isMesh) {
            triangles = attachment.triangles;
            // insure capacity
            _vertexFloatCount = (attachment.worldVerticesLength >> 1) * _perVertexSize;
            _indexCount = triangles.length;
            offsetInfo = _buffer.request(_vertexFloatCount / _perVertexSize, _indexCount);
            _indexOffset = offsetInfo.indiceOffset,
                _vertexOffset = offsetInfo.vertexOffset,
                _vertexFloatOffset = offsetInfo.byteOffset >> 2;
            vbuf = _buffer._vData,
                ibuf = _buffer._iData;
            // compute vertex and fill x y
            attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, vbuf, _vertexFloatOffset, _perVertexSize);
            // draw debug mesh if enabled graphics
            if (graphics && _debugMesh) {
                graphics.strokeColor = _meshColor;
                for (var ii = 0, nn = triangles.length; ii < nn; ii += 3) {
                    var v1 = triangles[ii] * _perVertexSize + _vertexFloatOffset;
                    var v2 = triangles[ii + 1] * _perVertexSize + _vertexFloatOffset;
                    var v3 = triangles[ii + 2] * _perVertexSize + _vertexFloatOffset;
                    graphics.moveTo(vbuf[v1], vbuf[v1 + 1]);
                    graphics.lineTo(vbuf[v2], vbuf[v2 + 1]);
                    graphics.lineTo(vbuf[v3], vbuf[v3 + 1]);
                    graphics.close();
                    graphics.stroke();
                }
            }
        }
        if (_vertexFloatCount == 0 || _indexCount == 0) {
            clipper.clipEndWithSlot(slot);
            continue;
        }
        // fill indices
        ibuf.set(triangles, _indexOffset);
        // fill u v
        uvs = attachment.uvs;
        for (var v = _vertexFloatOffset, n = _vertexFloatOffset + _vertexFloatCount, u = 0; v < n; v += _perVertexSize, u += 2) {
            vbuf[v + 2] = uvs[u]; // u
            vbuf[v + 3] = uvs[u + 1]; // v
        }
        attachmentColor = attachment.color,
            slotColor = slot.color;
        this.fillVertices(skeletonColor, attachmentColor, slotColor, clipper, slot);
        // reset buffer pointer, because clipper maybe realloc a new buffer in file Vertices function.
        vbuf = _buffer._vData,
            ibuf = _buffer._iData;
        if (_indexCount > 0) {
            for (var ii = _indexOffset, nn = _indexOffset + _indexCount; ii < nn; ii++) {
                ibuf[ii] += _vertexOffset;
            }
            if (worldMat) {
                worldMatm = worldMat.m;
                _m00 = worldMatm[0];
                _m04 = worldMatm[4];
                _m12 = worldMatm[12];
                _m01 = worldMatm[1];
                _m05 = worldMatm[5];
                _m13 = worldMatm[13];
                for (var ii = _vertexFloatOffset, nn = _vertexFloatOffset + _vertexFloatCount; ii < nn; ii += _perVertexSize) {
                    _x = vbuf[ii];
                    _y = vbuf[ii + 1];
                    vbuf[ii] = _x * _m00 + _y * _m04 + _m12;
                    vbuf[ii + 1] = _x * _m01 + _y * _m05 + _m13;
                }
            }
            _buffer.adjust(_vertexFloatCount / _perVertexSize, _indexCount);
        }
        clipper.clipEndWithSlot(slot);
    }
    clipper.clipEnd();
    if (graphics && _debugBones) {
        var bone = void 0;
        graphics.strokeColor = _boneColor;
        graphics.fillColor = _slotColor; // Root bone color is same as slot color.
        for (var i = 0, n = locSkeleton.bones.length; i < n; i++) {
            bone = locSkeleton.bones[i];
            var x = bone.data.length * bone.a + bone.worldX;
            var y = bone.data.length * bone.c + bone.worldY;
            // Bone lengths.
            graphics.moveTo(bone.worldX, bone.worldY);
            graphics.lineTo(x, y);
            graphics.stroke();
            // Bone origins.
            graphics.circle(bone.worldX, bone.worldY, Math.PI * 1.5);
            graphics.fill();
            if (i === 0) {
                graphics.fillColor = _originColor;
            }
        }
    }
};
// @ts-ignore
sp.Skeleton.__assembler__.cacheTraverse = function (worldMat) {
    var frame = _comp._curFrame;
    if (!frame)
        return;
    var segments = frame.segments;
    if (segments.length == 0)
        return;
    var vbuf, ibuf, uintbuf;
    var material;
    var offsetInfo;
    var vertices = frame.vertices;
    var indices = frame.indices;
    var worldMatm;
    var frameVFOffset = 0, frameIndexOffset = 0, segVFCount = 0;
    if (worldMat) {
        worldMatm = worldMat.m;
        _m00 = worldMatm[0];
        _m01 = worldMatm[1];
        _m04 = worldMatm[4];
        _m05 = worldMatm[5];
        _m12 = worldMatm[12];
        _m13 = worldMatm[13];
    }
    var justTranslate = _m00 === 1 && _m01 === 0 && _m04 === 0 && _m05 === 1;
    var needBatch = (_handleVal & FLAG_BATCH);
    var calcTranslate = needBatch && justTranslate;
    var colorOffset = 0;
    var colors = frame.colors;
    var nowColor = colors[colorOffset++];
    var maxVFOffset = nowColor.vfOffset;
    _handleColor(nowColor);
    for (var i = 0, n = segments.length; i < n; i++) {
        var segInfo = segments[i];
        material = _getSlotMaterial(segInfo.tex, segInfo.blendMode);
        if (!material)
            continue;
        if (_mustFlush || material.getHash() !== _renderer.material.getHash()) {
            _mustFlush = false;
            _renderer._flush();
            _renderer.node = _node;
            _renderer.material = material;
        }
        _vertexCount = segInfo.vertexCount;
        _indexCount = segInfo.indexCount;
        offsetInfo = _buffer.request(_vertexCount, _indexCount);
        _indexOffset = offsetInfo.indiceOffset;
        _vertexOffset = offsetInfo.vertexOffset;
        _vfOffset = offsetInfo.byteOffset >> 2;
        vbuf = _buffer._vData;
        ibuf = _buffer._iData;
        uintbuf = _buffer._uintVData;
        for (var ii = _indexOffset, il = _indexOffset + _indexCount; ii < il; ii++) {
            ibuf[ii] = _vertexOffset + indices[frameIndexOffset++];
        }
        segVFCount = segInfo.vfCount;
        vbuf.set(vertices.subarray(frameVFOffset, frameVFOffset + segVFCount), _vfOffset);
        frameVFOffset += segVFCount;
        if (calcTranslate) {
            for (var ii = _vfOffset, il = _vfOffset + segVFCount; ii < il; ii += 6) {
                vbuf[ii] += _m12;
                vbuf[ii + 1] += _m13;
            }
        }
        else if (needBatch) {
            for (var ii = _vfOffset, il = _vfOffset + segVFCount; ii < il; ii += 6) {
                _x = vbuf[ii];
                _y = vbuf[ii + 1];
                vbuf[ii] = _x * _m00 + _y * _m04 + _m12;
                vbuf[ii + 1] = _x * _m01 + _y * _m05 + _m13;
            }
        }
        _buffer.adjust(_vertexCount, _indexCount);
        if (!_needColor)
            continue;
        // handle color
        var frameColorOffset = frameVFOffset - segVFCount;
        for (var ii = _vfOffset + 4, il = _vfOffset + 4 + segVFCount; ii < il; ii += 6, frameColorOffset += 6) {
            if (frameColorOffset >= maxVFOffset) {
                nowColor = colors[colorOffset++];
                _handleColor(nowColor);
                maxVFOffset = nowColor.vfOffset;
            }
            uintbuf[ii] = _finalColor32;
            uintbuf[ii + 1] = _darkColor32;
        }
    }
};
// @ts-ignore
sp.Skeleton.__assembler__.fillBuffers = function (comp, renderer) {
    var node = comp.node;
    // @ts-ignore
    node._renderFlag |= cc.RenderFlow.FLAG_UPDATE_RENDER_DATA;
    if (!comp._skeleton)
        return;
    var nodeColor = node._color;
    _nodeR = nodeColor.r / 255;
    _nodeG = nodeColor.g / 255;
    _nodeB = nodeColor.b / 255;
    _nodeA = nodeColor.a / 255;
    _useTint = comp.useTint || comp.isAnimationCached();
    _vertexFormat = _useTint ? VFTwoColor : VFOneColor;
    // x y u v color1 color2 or x y u v color
    _perVertexSize = _useTint ? 6 : 5;
    _node = comp.node;
    _buffer = renderer.getBuffer('spine', _vertexFormat);
    _renderer = renderer;
    _comp = comp;
    _mustFlush = true;
    _premultipliedAlpha = comp.premultipliedAlpha;
    _multiplier = 1.0;
    _handleVal = 0x00;
    _needColor = false;
    _vertexEffect = comp._effectDelegate && comp._effectDelegate._vertexEffect;
    if (nodeColor._val !== 0xffffffff || _premultipliedAlpha) {
        _needColor = true;
    }
    if (_useTint) {
        _handleVal |= FLAG_TWO_COLOR;
    }
    var worldMat = undefined;
    if (_comp.enableBatch) {
        worldMat = _node._worldMatrix;
        _mustFlush = false;
        _handleVal |= FLAG_BATCH;
    }
    if (comp.isAnimationCached()) {
        // Traverse input assembler.
        this.cacheTraverse(worldMat);
    }
    else {
        if (_vertexEffect)
            _vertexEffect.begin(comp._skeleton);
        this.realTimeTraverse(worldMat);
        if (_vertexEffect)
            _vertexEffect.end();
    }
    // Clear temp var.
    _node = undefined;
    _buffer = undefined;
    _renderer = undefined;
    _comp = undefined;
    _vertexEffect = null;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHNwaW5lLWFzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ2IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUVuQixhQUFhO0FBQ2IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUV2QixhQUFhO0FBQ2IsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7QUFDbkQsYUFBYTtBQUNiLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7QUFFdEQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMxQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFNUMsSUFBSSxXQUFXLEdB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QixTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3RCLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBnZnggPSBjYy5nZng7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IHNwaW5lID0gc3Auc3BpbmU7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IFZGT25lQ29sb3IgPSBnZnguVmVydGV4Rm9ybWF0LnZmbXRQb3NVdkNvbG9yO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IFZGVHdvQ29sb3IgPSBnZnguVmVydGV4Rm9ybWF0LnZmbXRQb3NVdlR3b0NvbG9yO1xyXG5cclxuY29uc3QgRkxBR19CQVRDSCA9IDB4MTA7XHJcbmNvbnN0IEZMQUdfVFdPX0NPTE9SID0gMHgwMTtcclxuXHJcbmxldCBfaGFuZGxlVmFsID0gMHgwMDtcclxubGV0IF9xdWFkVHJpYW5nbGVzID0gWzAsIDEsIDIsIDIsIDMsIDBdO1xyXG5sZXQgX3Nsb3RDb2xvciA9IGNjLmNvbG9yKDAsIDAsIDI1NSwgMjU1KTtcclxubGV0IF9ib25lQ29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbmxldCBfb3JpZ2luQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDAsIDI1NSk7XHJcbmxldCBfbWVzaENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDAsIDI1NSk7XHJcblxyXG5sZXQgX2ZpbmFsQ29sb3IgPSBudWxsO1xyXG5sZXQgX2RhcmtDb2xvciA9IG51bGw7XHJcbmxldCBfdGVtcFBvcyA9IG51bGwsIF90ZW1wVXYgPSBudWxsO1xyXG4vLyBAdHMtaWdub3JlXHJcbmlmICghQ0NfTkFUSVZFUkVOREVSRVIpIHtcclxuICAgIF9maW5hbENvbG9yID0gbmV3IHNwaW5lLkNvbG9yKDEsIDEsIDEsIDEpO1xyXG4gICAgX2RhcmtDb2xvciA9IG5ldyBzcGluZS5Db2xvcigxLCAxLCAxLCAxKTtcclxuICAgIF90ZW1wUG9zID0gbmV3IHNwaW5lLlZlY3RvcjIoKTtcclxuICAgIF90ZW1wVXYgPSBuZXcgc3BpbmUuVmVjdG9yMigpO1xyXG59XHJcblxyXG5sZXQgX3ByZW11bHRpcGxpZWRBbHBoYTtcclxubGV0IF9tdWx0aXBsaWVyO1xyXG5sZXQgX3Nsb3RSYW5nZVN0YXJ0O1xyXG5sZXQgX3Nsb3RSYW5nZUVuZDtcclxubGV0IF91c2VUaW50O1xyXG5sZXQgX2RlYnVnU2xvdHM7XHJcbmxldCBfZGVidWdCb25lcztcclxubGV0IF9kZWJ1Z01lc2g7XHJcbmxldCBfbm9kZVIsXHJcbiAgICBfbm9kZUcsXHJcbiAgICBfbm9kZUIsXHJcbiAgICBfbm9kZUE7XHJcbmxldCBfZmluYWxDb2xvcjMyLCBfZGFya0NvbG9yMzI7XHJcbmxldCBfdmVydGV4Rm9ybWF0O1xyXG5sZXQgX3BlclZlcnRleFNpemU7XHJcbmxldCBfcGVyQ2xpcFZlcnRleFNpemU7XHJcblxyXG5sZXQgX3ZlcnRleEZsb2F0Q291bnQgPSAwLCBfdmVydGV4Q291bnQgPSAwLCBfdmVydGV4RmxvYXRPZmZzZXQgPSAwLCBfdmVydGV4T2Zmc2V0ID0gMCxcclxuICAgIF9pbmRleENvdW50ID0gMCwgX2luZGV4T2Zmc2V0ID0gMCwgX3ZmT2Zmc2V0ID0gMDtcclxubGV0IF90ZW1wciwgX3RlbXBnLCBfdGVtcGI7XHJcbmxldCBfaW5SYW5nZTtcclxubGV0IF9tdXN0Rmx1c2g7XHJcbmxldCBfeCwgX3ksIF9tMDAsIF9tMDQsIF9tMTIsIF9tMDEsIF9tMDUsIF9tMTM7XHJcbmxldCBfciwgX2csIF9iLCBfZnIsIF9mZywgX2ZiLCBfZmEsIF9kciwgX2RnLCBfZGIsIF9kYTtcclxubGV0IF9jb21wLCBfYnVmZmVyLCBfcmVuZGVyZXIsIF9ub2RlLCBfbmVlZENvbG9yLCBfdmVydGV4RWZmZWN0O1xyXG5cclxuZnVuY3Rpb24gX2dldFNsb3RNYXRlcmlhbCAodGV4LCBibGVuZE1vZGUpIHtcclxuICAgIGxldCBzcmMsIGRzdDtcclxuICAgIHN3aXRjaCAoYmxlbmRNb2RlKSB7XHJcbiAgICAgICAgY2FzZSBzcGluZS5CbGVuZE1vZGUuQWRkaXRpdmU6XHJcbiAgICAgICAgICAgIHNyYyA9IF9wcmVtdWx0aXBsaWVkQWxwaGEgPyBjYy5tYWNyby5PTkUgOiBjYy5tYWNyby5TUkNfQUxQSEE7XHJcbiAgICAgICAgICAgIGRzdCA9IGNjLm1hY3JvLk9ORTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzcGluZS5CbGVuZE1vZGUuTXVsdGlwbHk6XHJcbiAgICAgICAgICAgIHNyYyA9IGNjLm1hY3JvLkRTVF9DT0xPUjtcclxuICAgICAgICAgICAgZHN0ID0gY2MubWFjcm8uT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzcGluZS5CbGVuZE1vZGUuU2NyZWVuOlxyXG4gICAgICAgICAgICBzcmMgPSBjYy5tYWNyby5PTkU7XHJcbiAgICAgICAgICAgIGRzdCA9IGNjLm1hY3JvLk9ORV9NSU5VU19TUkNfQ09MT1I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc3BpbmUuQmxlbmRNb2RlLk5vcm1hbDpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzcmMgPSBfcHJlbXVsdGlwbGllZEFscGhhID8gY2MubWFjcm8uT05FIDogY2MubWFjcm8uU1JDX0FMUEhBO1xyXG4gICAgICAgICAgICBkc3QgPSBjYy5tYWNyby5PTkVfTUlOVVNfU1JDX0FMUEhBO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXNlTW9kZWwgPSAhX2NvbXAuZW5hYmxlQmF0Y2g7XHJcbiAgICBsZXQgYmFzZU1hdGVyaWFsID0gX2NvbXAuX21hdGVyaWFsc1swXTtcclxuICAgIGlmICghYmFzZU1hdGVyaWFsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBUaGUga2V5IHVzZSB0byBmaW5kIGNvcnJlc3BvbmRpbmcgbWF0ZXJpYWxcclxuICAgIGxldCBrZXkgPSB0ZXguZ2V0SWQoKSArIHNyYyArIGRzdCArIF91c2VUaW50ICsgdXNlTW9kZWw7XHJcbiAgICBsZXQgbWF0ZXJpYWxDYWNoZSA9IF9jb21wLl9tYXRlcmlhbENhY2hlO1xyXG4gICAgbGV0IG1hdGVyaWFsID0gbWF0ZXJpYWxDYWNoZVtrZXldO1xyXG4gICAgaWYgKCFtYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICghbWF0ZXJpYWxDYWNoZS5iYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwgPSBiYXNlTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsQ2FjaGUuYmFzZU1hdGVyaWFsID0gYmFzZU1hdGVyaWFsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZShiYXNlTWF0ZXJpYWwsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBtYXRlcmlhbC5kZWZpbmUoJ0NDX1VTRV9NT0RFTCcsIHVzZU1vZGVsKTtcclxuICAgICAgICBtYXRlcmlhbC5kZWZpbmUoJ1VTRV9USU5UJywgX3VzZVRpbnQpO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB0ZXh0dXJlXHJcbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXgpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgYmxlbmQgZnVuY3Rpb25cclxuICAgICAgICBtYXRlcmlhbC5zZXRCbGVuZChcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBzcmMsIGRzdCxcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBzcmMsIGRzdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWF0ZXJpYWxDYWNoZVtrZXldID0gbWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0ZXJpYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9oYW5kbGVDb2xvciAoY29sb3IpIHtcclxuICAgIC8vIHRlbXAgcmdiIGhhcyBtdWx0aXBseSAyNTUsIHNvIG5lZWQgZGl2aWRlIDI1NTtcclxuICAgIF9mYSA9IGNvbG9yLmZhICogX25vZGVBO1xyXG4gICAgX211bHRpcGxpZXIgPSBfcHJlbXVsdGlwbGllZEFscGhhID8gX2ZhIC8gMjU1IDogMTtcclxuICAgIF9yID0gX25vZGVSICogX211bHRpcGxpZXI7XHJcbiAgICBfZyA9IF9ub2RlRyAqIF9tdWx0aXBsaWVyO1xyXG4gICAgX2IgPSBfbm9kZUIgKiBfbXVsdGlwbGllcjtcclxuXHJcbiAgICBfZnIgPSBjb2xvci5mciAqIF9yO1xyXG4gICAgX2ZnID0gY29sb3IuZmcgKiBfZztcclxuICAgIF9mYiA9IGNvbG9yLmZiICogX2I7XHJcbiAgICBfZmluYWxDb2xvcjMyID0gKChfZmE8PDI0KSA+Pj4gMCkgKyAoX2ZiPDwxNikgKyAoX2ZnPDw4KSArIF9mcjtcclxuXHJcbiAgICBfZHIgPSBjb2xvci5kciAqIF9yO1xyXG4gICAgX2RnID0gY29sb3IuZGcgKiBfZztcclxuICAgIF9kYiA9IGNvbG9yLmRiICogX2I7XHJcbiAgICBfZGEgPSBfcHJlbXVsdGlwbGllZEFscGhhID8gMjU1IDogMDtcclxuICAgIF9kYXJrQ29sb3IzMiA9ICgoX2RhPDwyNCkgPj4+IDApICsgKF9kYjw8MTYpICsgKF9kZzw8OCkgKyBfZHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zcGluZUNvbG9yVG9JbnQzMiAoc3BpbmVDb2xvcikge1xyXG4gICAgcmV0dXJuICgoc3BpbmVDb2xvci5hPDwyNCkgPj4+IDApICsgKHNwaW5lQ29sb3IuYjw8MTYpICsgKHNwaW5lQ29sb3IuZzw8OCkgKyBzcGluZUNvbG9yLnI7XHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuc3AuU2tlbGV0b24uX19hc3NlbWJsZXJfXy5maWxsVmVydGljZXMgPSBmdW5jdGlvbiAoc2tlbGV0b25Db2xvciwgYXR0YWNobWVudENvbG9yLCBzbG90Q29sb3IsIGNsaXBwZXIsIHNsb3QpIHtcclxuXHJcbiAgICBsZXQgdmJ1ZiA9IF9idWZmZXIuX3ZEYXRhLFxyXG4gICAgICAgIGlidWYgPSBfYnVmZmVyLl9pRGF0YSxcclxuICAgICAgICB1aW50VkRhdGEgPSBfYnVmZmVyLl91aW50VkRhdGE7XHJcbiAgICBsZXQgb2Zmc2V0SW5mbztcclxuXHJcbiAgICBfZmluYWxDb2xvci5hID0gc2xvdENvbG9yLmEgKiBhdHRhY2htZW50Q29sb3IuYSAqIHNrZWxldG9uQ29sb3IuYSAqIF9ub2RlQSAqIDI1NTtcclxuICAgIF9tdWx0aXBsaWVyID0gX3ByZW11bHRpcGxpZWRBbHBoYT8gX2ZpbmFsQ29sb3IuYSA6IDI1NTtcclxuICAgIF90ZW1wciA9IF9ub2RlUiAqIGF0dGFjaG1lbnRDb2xvci5yICogc2tlbGV0b25Db2xvci5yICogX211bHRpcGxpZXI7XHJcbiAgICBfdGVtcGcgPSBfbm9kZUcgKiBhdHRhY2htZW50Q29sb3IuZyAqIHNrZWxldG9uQ29sb3IuZyAqIF9tdWx0aXBsaWVyO1xyXG4gICAgX3RlbXBiID0gX25vZGVCICogYXR0YWNobWVudENvbG9yLmIgKiBza2VsZXRvbkNvbG9yLmIgKiBfbXVsdGlwbGllcjtcclxuICAgIFxyXG4gICAgX2ZpbmFsQ29sb3IuciA9IF90ZW1wciAqIHNsb3RDb2xvci5yO1xyXG4gICAgX2ZpbmFsQ29sb3IuZyA9IF90ZW1wZyAqIHNsb3RDb2xvci5nO1xyXG4gICAgX2ZpbmFsQ29sb3IuYiA9IF90ZW1wYiAqIHNsb3RDb2xvci5iO1xyXG5cclxuICAgIGlmIChzbG90LmRhcmtDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgX2RhcmtDb2xvci5zZXQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX2RhcmtDb2xvci5yID0gc2xvdC5kYXJrQ29sb3IuciAqIF90ZW1wcjtcclxuICAgICAgICBfZGFya0NvbG9yLmcgPSBzbG90LmRhcmtDb2xvci5nICogX3RlbXBnO1xyXG4gICAgICAgIF9kYXJrQ29sb3IuYiA9IHNsb3QuZGFya0NvbG9yLmIgKiBfdGVtcGI7XHJcbiAgICB9XHJcbiAgICBfZGFya0NvbG9yLmEgPSBfcHJlbXVsdGlwbGllZEFscGhhID8gMjU1IDogMDtcclxuXHJcbiAgICBpZiAoIWNsaXBwZXIuaXNDbGlwcGluZygpKSB7XHJcbiAgICAgICAgaWYgKF92ZXJ0ZXhFZmZlY3QpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IF92ZXJ0ZXhGbG9hdE9mZnNldCwgbiA9IF92ZXJ0ZXhGbG9hdE9mZnNldCArIF92ZXJ0ZXhGbG9hdENvdW50OyB2IDwgbjsgdiArPSBfcGVyVmVydGV4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgX3RlbXBQb3MueCA9IHZidWZbdl07XHJcbiAgICAgICAgICAgICAgICBfdGVtcFBvcy55ID0gdmJ1Zlt2ICsgMV07XHJcbiAgICAgICAgICAgICAgICBfdGVtcFV2LnggPSB2YnVmW3YgKyAyXTtcclxuICAgICAgICAgICAgICAgIF90ZW1wVXYueSA9IHZidWZbdiArIDNdO1xyXG4gICAgICAgICAgICAgICAgX3ZlcnRleEVmZmVjdC50cmFuc2Zvcm0oX3RlbXBQb3MsIF90ZW1wVXYsIF9maW5hbENvbG9yLCBfZGFya0NvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YnVmW3ZdICAgICA9IF90ZW1wUG9zLng7ICAgICAgICAvLyB4XHJcbiAgICAgICAgICAgICAgICB2YnVmW3YgKyAxXSA9IF90ZW1wUG9zLnk7ICAgICAgICAvLyB5XHJcbiAgICAgICAgICAgICAgICB2YnVmW3YgKyAyXSA9IF90ZW1wVXYueDsgICAgICAgICAvLyB1XHJcbiAgICAgICAgICAgICAgICB2YnVmW3YgKyAzXSA9IF90ZW1wVXYueTsgICAgICAgICAvLyB2XHJcbiAgICAgICAgICAgICAgICB1aW50VkRhdGFbdiArIDRdICA9IF9zcGluZUNvbG9yVG9JbnQzMihfZmluYWxDb2xvcik7ICAgICAgICAgICAgICAgICAgLy8gbGlnaHQgY29sb3JcclxuICAgICAgICAgICAgICAgIF91c2VUaW50ICYmICh1aW50VkRhdGFbdiArIDVdID0gX3NwaW5lQ29sb3JUb0ludDMyKF9kYXJrQ29sb3IpKTsgICAgICAvLyBkYXJrIGNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfZmluYWxDb2xvcjMyID0gX3NwaW5lQ29sb3JUb0ludDMyKF9maW5hbENvbG9yKTtcclxuICAgICAgICAgICAgX2RhcmtDb2xvcjMyID0gX3NwaW5lQ29sb3JUb0ludDMyKF9kYXJrQ29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IF92ZXJ0ZXhGbG9hdE9mZnNldCwgbiA9IF92ZXJ0ZXhGbG9hdE9mZnNldCArIF92ZXJ0ZXhGbG9hdENvdW50OyB2IDwgbjsgdiArPSBfcGVyVmVydGV4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdWludFZEYXRhW3YgKyA0XSAgPSBfZmluYWxDb2xvcjMyOyAgICAgICAgICAgICAgICAgICAvLyBsaWdodCBjb2xvclxyXG4gICAgICAgICAgICAgICAgX3VzZVRpbnQgJiYgKHVpbnRWRGF0YVt2ICsgNV0gID0gX2RhcmtDb2xvcjMyKTsgICAgICAvLyBkYXJrIGNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB1dnMgPSB2YnVmLnN1YmFycmF5KF92ZXJ0ZXhGbG9hdE9mZnNldCArIDIpO1xyXG4gICAgICAgIGNsaXBwZXIuY2xpcFRyaWFuZ2xlcyh2YnVmLnN1YmFycmF5KF92ZXJ0ZXhGbG9hdE9mZnNldCksIF92ZXJ0ZXhGbG9hdENvdW50LCBpYnVmLnN1YmFycmF5KF9pbmRleE9mZnNldCksIF9pbmRleENvdW50LCB1dnMsIF9maW5hbENvbG9yLCBfZGFya0NvbG9yLCBfdXNlVGludCwgX3BlclZlcnRleFNpemUpO1xyXG4gICAgICAgIGxldCBjbGlwcGVkVmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGNsaXBwZXIuY2xpcHBlZFZlcnRpY2VzKTtcclxuICAgICAgICBsZXQgY2xpcHBlZFRyaWFuZ2xlcyA9IGNsaXBwZXIuY2xpcHBlZFRyaWFuZ2xlcztcclxuICAgICAgICBcclxuICAgICAgICAvLyBpbnN1cmUgY2FwYWNpdHlcclxuICAgICAgICBfaW5kZXhDb3VudCA9IGNsaXBwZWRUcmlhbmdsZXMubGVuZ3RoO1xyXG4gICAgICAgIF92ZXJ0ZXhGbG9hdENvdW50ID0gY2xpcHBlZFZlcnRpY2VzLmxlbmd0aCAvIF9wZXJDbGlwVmVydGV4U2l6ZSAqIF9wZXJWZXJ0ZXhTaXplO1xyXG5cclxuICAgICAgICBvZmZzZXRJbmZvID0gX2J1ZmZlci5yZXF1ZXN0KF92ZXJ0ZXhGbG9hdENvdW50IC8gX3BlclZlcnRleFNpemUsIF9pbmRleENvdW50KTtcclxuICAgICAgICBfaW5kZXhPZmZzZXQgPSBvZmZzZXRJbmZvLmluZGljZU9mZnNldCxcclxuICAgICAgICBfdmVydGV4T2Zmc2V0ID0gb2Zmc2V0SW5mby52ZXJ0ZXhPZmZzZXQsXHJcbiAgICAgICAgX3ZlcnRleEZsb2F0T2Zmc2V0ID0gb2Zmc2V0SW5mby5ieXRlT2Zmc2V0ID4+IDI7XHJcbiAgICAgICAgdmJ1ZiA9IF9idWZmZXIuX3ZEYXRhLFxyXG4gICAgICAgIGlidWYgPSBfYnVmZmVyLl9pRGF0YTtcclxuICAgICAgICB1aW50VkRhdGEgPSBfYnVmZmVyLl91aW50VkRhdGE7XHJcblxyXG4gICAgICAgIC8vIGZpbGwgaW5kaWNlc1xyXG4gICAgICAgIGlidWYuc2V0KGNsaXBwZWRUcmlhbmdsZXMsIF9pbmRleE9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIGZpbGwgdmVydGljZXMgY29udGFpbiB4IHkgdSB2IGxpZ2h0IGNvbG9yIGRhcmsgY29sb3JcclxuICAgICAgICBpZiAoX3ZlcnRleEVmZmVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB2ID0gMCwgbiA9IGNsaXBwZWRWZXJ0aWNlcy5sZW5ndGgsIG9mZnNldCA9IF92ZXJ0ZXhGbG9hdE9mZnNldDsgdiA8IG47IHYgKz0gX3BlckNsaXBWZXJ0ZXhTaXplLCBvZmZzZXQgKz0gX3BlclZlcnRleFNpemUpIHtcclxuICAgICAgICAgICAgICAgIF90ZW1wUG9zLnggPSBjbGlwcGVkVmVydGljZXNbdl07XHJcbiAgICAgICAgICAgICAgICBfdGVtcFBvcy55ID0gY2xpcHBlZFZlcnRpY2VzW3YgKyAxXTtcclxuICAgICAgICAgICAgICAgIF9maW5hbENvbG9yLnNldChjbGlwcGVkVmVydGljZXNbdiArIDJdLCBjbGlwcGVkVmVydGljZXNbdiArIDNdLCBjbGlwcGVkVmVydGljZXNbdiArIDRdLCBjbGlwcGVkVmVydGljZXNbdiArIDVdKTtcclxuICAgICAgICAgICAgICAgIF90ZW1wVXYueCA9IGNsaXBwZWRWZXJ0aWNlc1t2ICsgNl07XHJcbiAgICAgICAgICAgICAgICBfdGVtcFV2LnkgPSBjbGlwcGVkVmVydGljZXNbdiArIDddO1xyXG4gICAgICAgICAgICAgICAgaWYgKF91c2VUaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhcmtDb2xvci5zZXQoY2xpcHBlZFZlcnRpY2VzW3YgKyA4XSwgY2xpcHBlZFZlcnRpY2VzW3YgKyA5XSwgY2xpcHBlZFZlcnRpY2VzW3YgKyAxMF0sIGNsaXBwZWRWZXJ0aWNlc1t2ICsgMTFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhcmtDb2xvci5zZXQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdmVydGV4RWZmZWN0LnRyYW5zZm9ybShfdGVtcFBvcywgX3RlbXBVdiwgX2ZpbmFsQ29sb3IsIF9kYXJrQ29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0XSA9IF90ZW1wUG9zLng7ICAgICAgICAgICAgIC8vIHhcclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0ICsgMV0gPSBfdGVtcFBvcy55OyAgICAgICAgIC8vIHlcclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0ICsgMl0gPSBfdGVtcFV2Lng7ICAgICAgICAgIC8vIHVcclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0ICsgM10gPSBfdGVtcFV2Lnk7ICAgICAgICAgIC8vIHZcclxuICAgICAgICAgICAgICAgIHVpbnRWRGF0YVtvZmZzZXQgKyA0XSA9IF9zcGluZUNvbG9yVG9JbnQzMihfZmluYWxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3VzZVRpbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1aW50VkRhdGFbb2Zmc2V0ICsgNV0gPSBfc3BpbmVDb2xvclRvSW50MzIoX2RhcmtDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB2ID0gMCwgbiA9IGNsaXBwZWRWZXJ0aWNlcy5sZW5ndGgsIG9mZnNldCA9IF92ZXJ0ZXhGbG9hdE9mZnNldDsgdiA8IG47IHYgKz0gX3BlckNsaXBWZXJ0ZXhTaXplLCBvZmZzZXQgKz0gX3BlclZlcnRleFNpemUpIHtcclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0XSAgICAgPSBjbGlwcGVkVmVydGljZXNbdl07ICAgICAgICAgLy8geFxyXG4gICAgICAgICAgICAgICAgdmJ1ZltvZmZzZXQgKyAxXSA9IGNsaXBwZWRWZXJ0aWNlc1t2ICsgMV07ICAgICAvLyB5XHJcbiAgICAgICAgICAgICAgICB2YnVmW29mZnNldCArIDJdID0gY2xpcHBlZFZlcnRpY2VzW3YgKyA2XTsgICAgIC8vIHVcclxuICAgICAgICAgICAgICAgIHZidWZbb2Zmc2V0ICsgM10gPSBjbGlwcGVkVmVydGljZXNbdiArIDddOyAgICAgLy8gdlxyXG5cclxuICAgICAgICAgICAgICAgIF9maW5hbENvbG9yMzIgPSAoKGNsaXBwZWRWZXJ0aWNlc1t2ICsgNV08PDI0KSA+Pj4gMCkgKyAoY2xpcHBlZFZlcnRpY2VzW3YgKyA0XTw8MTYpICsgKGNsaXBwZWRWZXJ0aWNlc1t2ICsgM108PDgpICsgY2xpcHBlZFZlcnRpY2VzW3YgKyAyXTtcclxuICAgICAgICAgICAgICAgIHVpbnRWRGF0YVtvZmZzZXQgKyA0XSA9IF9maW5hbENvbG9yMzI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF91c2VUaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhcmtDb2xvcjMyID0gKChjbGlwcGVkVmVydGljZXNbdiArIDExXTw8MjQpID4+PiAwKSArIChjbGlwcGVkVmVydGljZXNbdiArIDEwXTw8MTYpICsgKGNsaXBwZWRWZXJ0aWNlc1t2ICsgOV08PDgpICsgY2xpcHBlZFZlcnRpY2VzW3YgKyA4XTtcclxuICAgICAgICAgICAgICAgICAgICB1aW50VkRhdGFbb2Zmc2V0ICsgNV0gPSBfZGFya0NvbG9yMzI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuc3AuU2tlbGV0b24uX19hc3NlbWJsZXJfXy5yZWFsVGltZVRyYXZlcnNlID0gZnVuY3Rpb24gKHdvcmxkTWF0KSB7XHJcbiAgICBsZXQgdmJ1ZjtcclxuICAgIGxldCBpYnVmO1xyXG5cclxuICAgIGxldCBsb2NTa2VsZXRvbiA9IF9jb21wLl9za2VsZXRvbjtcclxuICAgIGxldCBza2VsZXRvbkNvbG9yID0gbG9jU2tlbGV0b24uY29sb3I7XHJcbiAgICBsZXQgZ3JhcGhpY3MgPSBfY29tcC5fZGVidWdSZW5kZXJlcjtcclxuICAgIGxldCBjbGlwcGVyID0gX2NvbXAuX2NsaXBwZXI7XHJcbiAgICBsZXQgbWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgbGV0IGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRDb2xvciwgc2xvdENvbG9yLCB1dnMsIHRyaWFuZ2xlcztcclxuICAgIGxldCBpc1JlZ2lvbiwgaXNNZXNoLCBpc0NsaXA7XHJcbiAgICBsZXQgb2Zmc2V0SW5mbztcclxuICAgIGxldCBzbG90O1xyXG4gICAgbGV0IHdvcmxkTWF0bTtcclxuXHJcbiAgICBfc2xvdFJhbmdlU3RhcnQgPSBfY29tcC5fc3RhcnRTbG90SW5kZXg7XHJcbiAgICBfc2xvdFJhbmdlRW5kID0gX2NvbXAuX2VuZFNsb3RJbmRleDtcclxuICAgIF9pblJhbmdlID0gZmFsc2U7XHJcbiAgICBpZiAoX3Nsb3RSYW5nZVN0YXJ0ID09IC0xKSBfaW5SYW5nZSA9IHRydWU7XHJcblxyXG4gICAgX2RlYnVnU2xvdHMgPSBfY29tcC5kZWJ1Z1Nsb3RzO1xyXG4gICAgX2RlYnVnQm9uZXMgPSBfY29tcC5kZWJ1Z0JvbmVzO1xyXG4gICAgX2RlYnVnTWVzaCA9IF9jb21wLmRlYnVnTWVzaDtcclxuICAgIGlmIChncmFwaGljcyAmJiAoX2RlYnVnQm9uZXMgfHwgX2RlYnVnU2xvdHMgfHwgX2RlYnVnTWVzaCkpIHtcclxuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8geCB5IHUgdiByMSBnMSBiMSBhMSByMiBnMiBiMiBhMiBvciB4IHkgdSB2IHIgZyBiIGEgXHJcbiAgICBfcGVyQ2xpcFZlcnRleFNpemUgPSBfdXNlVGludCA/IDEyIDogODtcclxuXHJcbiAgICBfdmVydGV4RmxvYXRDb3VudCA9IDA7XHJcbiAgICBfdmVydGV4RmxvYXRPZmZzZXQgPSAwO1xyXG4gICAgX3ZlcnRleE9mZnNldCA9IDA7XHJcbiAgICBfaW5kZXhDb3VudCA9IDA7XHJcbiAgICBfaW5kZXhPZmZzZXQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IHNsb3RJZHggPSAwLCBzbG90Q291bnQgPSBsb2NTa2VsZXRvbi5kcmF3T3JkZXIubGVuZ3RoOyBzbG90SWR4IDwgc2xvdENvdW50OyBzbG90SWR4KyspIHtcclxuICAgICAgICBzbG90ID0gbG9jU2tlbGV0b24uZHJhd09yZGVyW3Nsb3RJZHhdO1xyXG5cclxuICAgICAgICBpZihzbG90ID09IHVuZGVmaW5lZCB8fCAhc2xvdC5ib25lLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfc2xvdFJhbmdlU3RhcnQgPj0gMCAmJiBfc2xvdFJhbmdlU3RhcnQgPT0gc2xvdC5kYXRhLmluZGV4KSB7XHJcbiAgICAgICAgICAgIF9pblJhbmdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFfaW5SYW5nZSkge1xyXG4gICAgICAgICAgICBjbGlwcGVyLmNsaXBFbmRXaXRoU2xvdChzbG90KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoX3Nsb3RSYW5nZUVuZCA+PSAwICYmIF9zbG90UmFuZ2VFbmQgPT0gc2xvdC5kYXRhLmluZGV4KSB7XHJcbiAgICAgICAgICAgIF9pblJhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfdmVydGV4RmxvYXRDb3VudCA9IDA7XHJcbiAgICAgICAgX2luZGV4Q291bnQgPSAwO1xyXG5cclxuICAgICAgICBhdHRhY2htZW50ID0gc2xvdC5nZXRBdHRhY2htZW50KCk7XHJcbiAgICAgICAgaWYgKCFhdHRhY2htZW50KSB7XHJcbiAgICAgICAgICAgIGNsaXBwZXIuY2xpcEVuZFdpdGhTbG90KHNsb3QpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzUmVnaW9uID0gYXR0YWNobWVudCBpbnN0YW5jZW9mIHNwaW5lLlJlZ2lvbkF0dGFjaG1lbnQ7XHJcbiAgICAgICAgaXNNZXNoID0gYXR0YWNobWVudCBpbnN0YW5jZW9mIHNwaW5lLk1lc2hBdHRhY2htZW50O1xyXG4gICAgICAgIGlzQ2xpcCA9IGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBzcGluZS5DbGlwcGluZ0F0dGFjaG1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChpc0NsaXApIHtcclxuICAgICAgICAgICAgY2xpcHBlci5jbGlwU3RhcnQoc2xvdCwgYXR0YWNobWVudCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc1JlZ2lvbiAmJiAhaXNNZXNoKSB7XHJcbiAgICAgICAgICAgIGNsaXBwZXIuY2xpcEVuZFdpdGhTbG90KHNsb3QpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdGVyaWFsID0gX2dldFNsb3RNYXRlcmlhbChhdHRhY2htZW50LnJlZ2lvbi50ZXh0dXJlLl90ZXh0dXJlLCBzbG90LmRhdGEuYmxlbmRNb2RlKTtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGNsaXBwZXIuY2xpcEVuZFdpdGhTbG90KHNsb3QpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfbXVzdEZsdXNoIHx8IG1hdGVyaWFsLmdldEhhc2goKSAhPT0gX3JlbmRlcmVyLm1hdGVyaWFsLmdldEhhc2goKSkge1xyXG4gICAgICAgICAgICBfbXVzdEZsdXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9yZW5kZXJlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgX3JlbmRlcmVyLm5vZGUgPSBfbm9kZTtcclxuICAgICAgICAgICAgX3JlbmRlcmVyLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNSZWdpb24pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyaWFuZ2xlcyA9IF9xdWFkVHJpYW5nbGVzO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5zdXJlIGNhcGFjaXR5XHJcbiAgICAgICAgICAgIF92ZXJ0ZXhGbG9hdENvdW50ID0gNCAqIF9wZXJWZXJ0ZXhTaXplO1xyXG4gICAgICAgICAgICBfaW5kZXhDb3VudCA9IDY7XHJcblxyXG4gICAgICAgICAgICBvZmZzZXRJbmZvID0gX2J1ZmZlci5yZXF1ZXN0KDQsIDYpO1xyXG4gICAgICAgICAgICBfaW5kZXhPZmZzZXQgPSBvZmZzZXRJbmZvLmluZGljZU9mZnNldCxcclxuICAgICAgICAgICAgX3ZlcnRleE9mZnNldCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0LFxyXG4gICAgICAgICAgICBfdmVydGV4RmxvYXRPZmZzZXQgPSBvZmZzZXRJbmZvLmJ5dGVPZmZzZXQgPj4gMjtcclxuICAgICAgICAgICAgdmJ1ZiA9IF9idWZmZXIuX3ZEYXRhLFxyXG4gICAgICAgICAgICBpYnVmID0gX2J1ZmZlci5faURhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIHZlcnRleCBhbmQgZmlsbCB4IHlcclxuICAgICAgICAgICAgYXR0YWNobWVudC5jb21wdXRlV29ybGRWZXJ0aWNlcyhzbG90LmJvbmUsIHZidWYsIF92ZXJ0ZXhGbG9hdE9mZnNldCwgX3BlclZlcnRleFNpemUpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBkZWJ1ZyBzbG90cyBpZiBlbmFibGVkIGdyYXBoaWNzXHJcbiAgICAgICAgICAgIGlmIChncmFwaGljcyAmJiBfZGVidWdTbG90cykge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBfc2xvdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHZidWZbX3ZlcnRleEZsb2F0T2Zmc2V0XSwgdmJ1ZltfdmVydGV4RmxvYXRPZmZzZXQgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpaSA9IF92ZXJ0ZXhGbG9hdE9mZnNldCArIF9wZXJWZXJ0ZXhTaXplLCBubiA9IF92ZXJ0ZXhGbG9hdE9mZnNldCArIF92ZXJ0ZXhGbG9hdENvdW50OyBpaSA8IG5uOyBpaSArPSBfcGVyVmVydGV4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2YnVmW2lpXSwgdmJ1ZltpaSArIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01lc2gpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyaWFuZ2xlcyA9IGF0dGFjaG1lbnQudHJpYW5nbGVzO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5zdXJlIGNhcGFjaXR5XHJcbiAgICAgICAgICAgIF92ZXJ0ZXhGbG9hdENvdW50ID0gKGF0dGFjaG1lbnQud29ybGRWZXJ0aWNlc0xlbmd0aCA+PiAxKSAqIF9wZXJWZXJ0ZXhTaXplO1xyXG4gICAgICAgICAgICBfaW5kZXhDb3VudCA9IHRyaWFuZ2xlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBvZmZzZXRJbmZvID0gX2J1ZmZlci5yZXF1ZXN0KF92ZXJ0ZXhGbG9hdENvdW50IC8gX3BlclZlcnRleFNpemUsIF9pbmRleENvdW50KTtcclxuICAgICAgICAgICAgX2luZGV4T2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXHJcbiAgICAgICAgICAgIF92ZXJ0ZXhPZmZzZXQgPSBvZmZzZXRJbmZvLnZlcnRleE9mZnNldCxcclxuICAgICAgICAgICAgX3ZlcnRleEZsb2F0T2Zmc2V0ID0gb2Zmc2V0SW5mby5ieXRlT2Zmc2V0ID4+IDI7XHJcbiAgICAgICAgICAgIHZidWYgPSBfYnVmZmVyLl92RGF0YSxcclxuICAgICAgICAgICAgaWJ1ZiA9IF9idWZmZXIuX2lEYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8gY29tcHV0ZSB2ZXJ0ZXggYW5kIGZpbGwgeCB5XHJcbiAgICAgICAgICAgIGF0dGFjaG1lbnQuY29tcHV0ZVdvcmxkVmVydGljZXMoc2xvdCwgMCwgYXR0YWNobWVudC53b3JsZFZlcnRpY2VzTGVuZ3RoLCB2YnVmLCBfdmVydGV4RmxvYXRPZmZzZXQsIF9wZXJWZXJ0ZXhTaXplKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgZGVidWcgbWVzaCBpZiBlbmFibGVkIGdyYXBoaWNzXHJcbiAgICAgICAgICAgIGlmIChncmFwaGljcyAmJiBfZGVidWdNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IF9tZXNoQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWkgPSAwLCBubiA9IHRyaWFuZ2xlcy5sZW5ndGg7IGlpIDwgbm47IGlpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdjEgPSB0cmlhbmdsZXNbaWldICogX3BlclZlcnRleFNpemUgKyBfdmVydGV4RmxvYXRPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYyID0gdHJpYW5nbGVzW2lpICsgMV0gKiBfcGVyVmVydGV4U2l6ZSArIF92ZXJ0ZXhGbG9hdE9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdjMgPSB0cmlhbmdsZXNbaWkgKyAyXSAqIF9wZXJWZXJ0ZXhTaXplICsgX3ZlcnRleEZsb2F0T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2YnVmW3YxXSwgdmJ1Zlt2MSArIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmJ1Zlt2Ml0sIHZidWZbdjIgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZidWZbdjNdLCB2YnVmW3YzICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfdmVydGV4RmxvYXRDb3VudCA9PSAwIHx8IF9pbmRleENvdW50ID09IDApIHtcclxuICAgICAgICAgICAgY2xpcHBlci5jbGlwRW5kV2l0aFNsb3Qoc2xvdCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmlsbCBpbmRpY2VzXHJcbiAgICAgICAgaWJ1Zi5zZXQodHJpYW5nbGVzLCBfaW5kZXhPZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyBmaWxsIHUgdlxyXG4gICAgICAgIHV2cyA9IGF0dGFjaG1lbnQudXZzO1xyXG4gICAgICAgIGZvciAobGV0IHYgPSBfdmVydGV4RmxvYXRPZmZzZXQsIG4gPSBfdmVydGV4RmxvYXRPZmZzZXQgKyBfdmVydGV4RmxvYXRDb3VudCwgdSA9IDA7IHYgPCBuOyB2ICs9IF9wZXJWZXJ0ZXhTaXplLCB1ICs9IDIpIHtcclxuICAgICAgICAgICAgdmJ1Zlt2ICsgMl0gPSB1dnNbdV07ICAgICAgICAgICAvLyB1XHJcbiAgICAgICAgICAgIHZidWZbdiArIDNdID0gdXZzW3UgKyAxXTsgICAgICAgLy8gdlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0YWNobWVudENvbG9yID0gYXR0YWNobWVudC5jb2xvcixcclxuICAgICAgICBzbG90Q29sb3IgPSBzbG90LmNvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGxWZXJ0aWNlcyhza2VsZXRvbkNvbG9yLCBhdHRhY2htZW50Q29sb3IsIHNsb3RDb2xvciwgY2xpcHBlciwgc2xvdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmVzZXQgYnVmZmVyIHBvaW50ZXIsIGJlY2F1c2UgY2xpcHBlciBtYXliZSByZWFsbG9jIGEgbmV3IGJ1ZmZlciBpbiBmaWxlIFZlcnRpY2VzIGZ1bmN0aW9uLlxyXG4gICAgICAgIHZidWYgPSBfYnVmZmVyLl92RGF0YSxcclxuICAgICAgICBpYnVmID0gX2J1ZmZlci5faURhdGE7XHJcblxyXG4gICAgICAgIGlmIChfaW5kZXhDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBfaW5kZXhPZmZzZXQsIG5uID0gX2luZGV4T2Zmc2V0ICsgX2luZGV4Q291bnQ7IGlpIDwgbm47IGlpKyspIHtcclxuICAgICAgICAgICAgICAgIGlidWZbaWldICs9IF92ZXJ0ZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3b3JsZE1hdCkge1xyXG4gICAgICAgICAgICAgICAgd29ybGRNYXRtID0gd29ybGRNYXQubTtcclxuICAgICAgICAgICAgICAgIF9tMDAgPSB3b3JsZE1hdG1bMF07XHJcbiAgICAgICAgICAgICAgICBfbTA0ID0gd29ybGRNYXRtWzRdO1xyXG4gICAgICAgICAgICAgICAgX20xMiA9IHdvcmxkTWF0bVsxMl07XHJcbiAgICAgICAgICAgICAgICBfbTAxID0gd29ybGRNYXRtWzFdO1xyXG4gICAgICAgICAgICAgICAgX20wNSA9IHdvcmxkTWF0bVs1XTtcclxuICAgICAgICAgICAgICAgIF9tMTMgPSB3b3JsZE1hdG1bMTNdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBfdmVydGV4RmxvYXRPZmZzZXQsIG5uID0gX3ZlcnRleEZsb2F0T2Zmc2V0ICsgX3ZlcnRleEZsb2F0Q291bnQ7IGlpIDwgbm47IGlpICs9IF9wZXJWZXJ0ZXhTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3ggPSB2YnVmW2lpXTtcclxuICAgICAgICAgICAgICAgICAgICBfeSA9IHZidWZbaWkgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YnVmW2lpXSA9IF94ICogX20wMCArIF95ICogX20wNCArIF9tMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmJ1ZltpaSArIDFdID0gX3ggKiBfbTAxICsgX3kgKiBfbTA1ICsgX20xMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfYnVmZmVyLmFkanVzdChfdmVydGV4RmxvYXRDb3VudCAvIF9wZXJWZXJ0ZXhTaXplLCBfaW5kZXhDb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGlwcGVyLmNsaXBFbmRXaXRoU2xvdChzbG90KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlwcGVyLmNsaXBFbmQoKTtcclxuXHJcbiAgICBpZiAoZ3JhcGhpY3MgJiYgX2RlYnVnQm9uZXMpIHtcclxuICAgICAgICBsZXQgYm9uZTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IF9ib25lQ29sb3I7XHJcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gX3Nsb3RDb2xvcjsgLy8gUm9vdCBib25lIGNvbG9yIGlzIHNhbWUgYXMgc2xvdCBjb2xvci5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBsb2NTa2VsZXRvbi5ib25lcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgYm9uZSA9IGxvY1NrZWxldG9uLmJvbmVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGJvbmUuZGF0YS5sZW5ndGggKiBib25lLmEgKyBib25lLndvcmxkWDtcclxuICAgICAgICAgICAgbGV0IHkgPSBib25lLmRhdGEubGVuZ3RoICogYm9uZS5jICsgYm9uZS53b3JsZFk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb25lIGxlbmd0aHMuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhib25lLndvcmxkWCwgYm9uZS53b3JsZFkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oeCwgeSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9uZSBvcmlnaW5zLlxyXG4gICAgICAgICAgICBncmFwaGljcy5jaXJjbGUoYm9uZS53b3JsZFgsIGJvbmUud29ybGRZLCBNYXRoLlBJICogMS41KTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gX29yaWdpbkNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbnNwLlNrZWxldG9uLl9fYXNzZW1ibGVyX18uY2FjaGVUcmF2ZXJzZSA9IGZ1bmN0aW9uICh3b3JsZE1hdCkge1xyXG4gICAgXHJcbiAgICBsZXQgZnJhbWUgPSBfY29tcC5fY3VyRnJhbWU7XHJcbiAgICBpZiAoIWZyYW1lKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHNlZ21lbnRzID0gZnJhbWUuc2VnbWVudHM7XHJcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgdmJ1ZiwgaWJ1ZiwgdWludGJ1ZjtcclxuICAgIGxldCBtYXRlcmlhbDtcclxuICAgIGxldCBvZmZzZXRJbmZvO1xyXG4gICAgbGV0IHZlcnRpY2VzID0gZnJhbWUudmVydGljZXM7XHJcbiAgICBsZXQgaW5kaWNlcyA9IGZyYW1lLmluZGljZXM7XHJcbiAgICBsZXQgd29ybGRNYXRtO1xyXG5cclxuICAgIGxldCBmcmFtZVZGT2Zmc2V0ID0gMCwgZnJhbWVJbmRleE9mZnNldCA9IDAsIHNlZ1ZGQ291bnQgPSAwO1xyXG4gICAgaWYgKHdvcmxkTWF0KSB7XHJcbiAgICAgICAgd29ybGRNYXRtID0gd29ybGRNYXQubTtcclxuICAgICAgICBfbTAwID0gd29ybGRNYXRtWzBdO1xyXG4gICAgICAgIF9tMDEgPSB3b3JsZE1hdG1bMV07XHJcbiAgICAgICAgX20wNCA9IHdvcmxkTWF0bVs0XTtcclxuICAgICAgICBfbTA1ID0gd29ybGRNYXRtWzVdO1xyXG4gICAgICAgIF9tMTIgPSB3b3JsZE1hdG1bMTJdO1xyXG4gICAgICAgIF9tMTMgPSB3b3JsZE1hdG1bMTNdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBqdXN0VHJhbnNsYXRlID0gX20wMCA9PT0gMSAmJiBfbTAxID09PSAwICYmIF9tMDQgPT09IDAgJiYgX20wNSA9PT0gMTtcclxuICAgIGxldCBuZWVkQmF0Y2ggPSAoX2hhbmRsZVZhbCAmIEZMQUdfQkFUQ0gpO1xyXG4gICAgbGV0IGNhbGNUcmFuc2xhdGUgPSBuZWVkQmF0Y2ggJiYganVzdFRyYW5zbGF0ZTtcclxuXHJcbiAgICBsZXQgY29sb3JPZmZzZXQgPSAwO1xyXG4gICAgbGV0IGNvbG9ycyA9IGZyYW1lLmNvbG9ycztcclxuICAgIGxldCBub3dDb2xvciA9IGNvbG9yc1tjb2xvck9mZnNldCsrXTtcclxuICAgIGxldCBtYXhWRk9mZnNldCA9IG5vd0NvbG9yLnZmT2Zmc2V0O1xyXG4gICAgX2hhbmRsZUNvbG9yKG5vd0NvbG9yKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHNlZ21lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIGxldCBzZWdJbmZvID0gc2VnbWVudHNbaV07XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBfZ2V0U2xvdE1hdGVyaWFsKHNlZ0luZm8udGV4LCBzZWdJbmZvLmJsZW5kTW9kZSk7XHJcbiAgICAgICAgaWYgKCFtYXRlcmlhbCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChfbXVzdEZsdXNoIHx8IG1hdGVyaWFsLmdldEhhc2goKSAhPT0gX3JlbmRlcmVyLm1hdGVyaWFsLmdldEhhc2goKSkge1xyXG4gICAgICAgICAgICBfbXVzdEZsdXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9yZW5kZXJlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgX3JlbmRlcmVyLm5vZGUgPSBfbm9kZTtcclxuICAgICAgICAgICAgX3JlbmRlcmVyLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfdmVydGV4Q291bnQgPSBzZWdJbmZvLnZlcnRleENvdW50O1xyXG4gICAgICAgIF9pbmRleENvdW50ID0gc2VnSW5mby5pbmRleENvdW50O1xyXG5cclxuICAgICAgICBvZmZzZXRJbmZvID0gX2J1ZmZlci5yZXF1ZXN0KF92ZXJ0ZXhDb3VudCwgX2luZGV4Q291bnQpO1xyXG4gICAgICAgIF9pbmRleE9mZnNldCA9IG9mZnNldEluZm8uaW5kaWNlT2Zmc2V0O1xyXG4gICAgICAgIF92ZXJ0ZXhPZmZzZXQgPSBvZmZzZXRJbmZvLnZlcnRleE9mZnNldDtcclxuICAgICAgICBfdmZPZmZzZXQgPSBvZmZzZXRJbmZvLmJ5dGVPZmZzZXQgPj4gMjtcclxuICAgICAgICB2YnVmID0gX2J1ZmZlci5fdkRhdGE7XHJcbiAgICAgICAgaWJ1ZiA9IF9idWZmZXIuX2lEYXRhO1xyXG4gICAgICAgIHVpbnRidWYgPSBfYnVmZmVyLl91aW50VkRhdGE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGlpID0gX2luZGV4T2Zmc2V0LCBpbCA9IF9pbmRleE9mZnNldCArIF9pbmRleENvdW50OyBpaSA8IGlsOyBpaSsrKSB7XHJcbiAgICAgICAgICAgIGlidWZbaWldID0gX3ZlcnRleE9mZnNldCArIGluZGljZXNbZnJhbWVJbmRleE9mZnNldCsrXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlZ1ZGQ291bnQgPSBzZWdJbmZvLnZmQ291bnQ7XHJcbiAgICAgICAgdmJ1Zi5zZXQodmVydGljZXMuc3ViYXJyYXkoZnJhbWVWRk9mZnNldCwgZnJhbWVWRk9mZnNldCArIHNlZ1ZGQ291bnQpLCBfdmZPZmZzZXQpO1xyXG4gICAgICAgIGZyYW1lVkZPZmZzZXQgKz0gc2VnVkZDb3VudDtcclxuXHJcbiAgICAgICAgaWYgKGNhbGNUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBfdmZPZmZzZXQsIGlsID0gX3ZmT2Zmc2V0ICsgc2VnVkZDb3VudDsgaWkgPCBpbDsgaWkgKz0gNikge1xyXG4gICAgICAgICAgICAgICAgdmJ1ZltpaV0gKz0gX20xMjtcclxuICAgICAgICAgICAgICAgIHZidWZbaWkgKyAxXSArPSBfbTEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZWVkQmF0Y2gpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBfdmZPZmZzZXQsIGlsID0gX3ZmT2Zmc2V0ICsgc2VnVkZDb3VudDsgaWkgPCBpbDsgaWkgKz0gNikge1xyXG4gICAgICAgICAgICAgICAgX3ggPSB2YnVmW2lpXTtcclxuICAgICAgICAgICAgICAgIF95ID0gdmJ1ZltpaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgdmJ1ZltpaV0gPSBfeCAqIF9tMDAgKyBfeSAqIF9tMDQgKyBfbTEyO1xyXG4gICAgICAgICAgICAgICAgdmJ1ZltpaSArIDFdID0gX3ggKiBfbTAxICsgX3kgKiBfbTA1ICsgX20xMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2J1ZmZlci5hZGp1c3QoX3ZlcnRleENvdW50LCBfaW5kZXhDb3VudCk7XHJcbiAgICAgICAgaWYgKCAhX25lZWRDb2xvciApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY29sb3JcclxuICAgICAgICBsZXQgZnJhbWVDb2xvck9mZnNldCA9IGZyYW1lVkZPZmZzZXQgLSBzZWdWRkNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gX3ZmT2Zmc2V0ICsgNCwgaWwgPSBfdmZPZmZzZXQgKyA0ICsgc2VnVkZDb3VudDsgaWkgPCBpbDsgaWkgKz0gNiwgZnJhbWVDb2xvck9mZnNldCArPSA2KSB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZUNvbG9yT2Zmc2V0ID49IG1heFZGT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBub3dDb2xvciA9IGNvbG9yc1tjb2xvck9mZnNldCsrXTtcclxuICAgICAgICAgICAgICAgIF9oYW5kbGVDb2xvcihub3dDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBtYXhWRk9mZnNldCA9IG5vd0NvbG9yLnZmT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVpbnRidWZbaWldID0gX2ZpbmFsQ29sb3IzMjtcclxuICAgICAgICAgICAgdWludGJ1ZltpaSArIDFdID0gX2RhcmtDb2xvcjMyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5zcC5Ta2VsZXRvbi5fX2Fzc2VtYmxlcl9fLmZpbGxCdWZmZXJzID0gZnVuY3Rpb24gKGNvbXAsIHJlbmRlcmVyKSB7XHJcbiAgICBcclxuICAgIGxldCBub2RlID0gY29tcC5ub2RlO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbm9kZS5fcmVuZGVyRmxhZyB8PSBjYy5SZW5kZXJGbG93LkZMQUdfVVBEQVRFX1JFTkRFUl9EQVRBO1xyXG4gICAgaWYgKCFjb21wLl9za2VsZXRvbikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBub2RlQ29sb3IgPSBub2RlLl9jb2xvcjtcclxuICAgIF9ub2RlUiA9IG5vZGVDb2xvci5yIC8gMjU1O1xyXG4gICAgX25vZGVHID0gbm9kZUNvbG9yLmcgLyAyNTU7XHJcbiAgICBfbm9kZUIgPSBub2RlQ29sb3IuYiAvIDI1NTtcclxuICAgIF9ub2RlQSA9IG5vZGVDb2xvci5hIC8gMjU1O1xyXG5cclxuICAgIF91c2VUaW50ID0gY29tcC51c2VUaW50IHx8IGNvbXAuaXNBbmltYXRpb25DYWNoZWQoKTtcclxuICAgIF92ZXJ0ZXhGb3JtYXQgPSBfdXNlVGludD8gVkZUd29Db2xvciA6IFZGT25lQ29sb3I7XHJcbiAgICAvLyB4IHkgdSB2IGNvbG9yMSBjb2xvcjIgb3IgeCB5IHUgdiBjb2xvclxyXG4gICAgX3BlclZlcnRleFNpemUgPSBfdXNlVGludCA/IDYgOiA1O1xyXG5cclxuICAgIF9ub2RlID0gY29tcC5ub2RlO1xyXG4gICAgX2J1ZmZlciA9IHJlbmRlcmVyLmdldEJ1ZmZlcignc3BpbmUnLCBfdmVydGV4Rm9ybWF0KTtcclxuICAgIF9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgX2NvbXAgPSBjb21wO1xyXG5cclxuICAgIF9tdXN0Rmx1c2ggPSB0cnVlO1xyXG4gICAgX3ByZW11bHRpcGxpZWRBbHBoYSA9IGNvbXAucHJlbXVsdGlwbGllZEFscGhhO1xyXG4gICAgX211bHRpcGxpZXIgPSAxLjA7XHJcbiAgICBfaGFuZGxlVmFsID0gMHgwMDtcclxuICAgIF9uZWVkQ29sb3IgPSBmYWxzZTtcclxuICAgIF92ZXJ0ZXhFZmZlY3QgPSBjb21wLl9lZmZlY3REZWxlZ2F0ZSAmJiBjb21wLl9lZmZlY3REZWxlZ2F0ZS5fdmVydGV4RWZmZWN0O1xyXG5cclxuICAgIGlmIChub2RlQ29sb3IuX3ZhbCAhPT0gMHhmZmZmZmZmZiB8fCBfcHJlbXVsdGlwbGllZEFscGhhKSB7XHJcbiAgICAgICAgX25lZWRDb2xvciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF91c2VUaW50KSB7XHJcbiAgICAgICAgX2hhbmRsZVZhbCB8PSBGTEFHX1RXT19DT0xPUjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd29ybGRNYXQgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoX2NvbXAuZW5hYmxlQmF0Y2gpIHtcclxuICAgICAgICB3b3JsZE1hdCA9IF9ub2RlLl93b3JsZE1hdHJpeDtcclxuICAgICAgICBfbXVzdEZsdXNoID0gZmFsc2U7XHJcbiAgICAgICAgX2hhbmRsZVZhbCB8PSBGTEFHX0JBVENIO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb21wLmlzQW5pbWF0aW9uQ2FjaGVkKCkpIHtcclxuICAgICAgICAvLyBUcmF2ZXJzZSBpbnB1dCBhc3NlbWJsZXIuXHJcbiAgICAgICAgdGhpcy5jYWNoZVRyYXZlcnNlKHdvcmxkTWF0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKF92ZXJ0ZXhFZmZlY3QpIF92ZXJ0ZXhFZmZlY3QuYmVnaW4oY29tcC5fc2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMucmVhbFRpbWVUcmF2ZXJzZSh3b3JsZE1hdCk7XHJcbiAgICAgICAgaWYgKF92ZXJ0ZXhFZmZlY3QpIF92ZXJ0ZXhFZmZlY3QuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGVtcCB2YXIuXHJcbiAgICBfbm9kZSA9IHVuZGVmaW5lZDtcclxuICAgIF9idWZmZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBfcmVuZGVyZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBfY29tcCA9IHVuZGVmaW5lZDtcclxuICAgIF92ZXJ0ZXhFZmZlY3QgPSBudWxsO1xyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test/scripts/test-scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66495YFVDxEp7II38SL3Oi4', 'test-scene');
// test/scripts/test-scene.ts

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
exports.TestScene = void 0;
var list_test_item_1 = require("./list-test-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestScene = /** @class */ (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listTestItemPrefab = null;
        _this.listContent = null;
        _this.flagSpriteFrames = [];
        _this.listItemMax = 200;
        return _this;
    }
    TestScene.prototype.start = function () {
        for (var i = 0; i < this.listItemMax; i++) {
            var node = cc.instantiate(this.listTestItemPrefab);
            node.parent = this.listContent;
            var item = node.getComponent(list_test_item_1.default);
            item === null || item === void 0 ? void 0 : item.randomData(i + 1, this.flagSpriteFrames[Math.floor(Math.random() * this.flagSpriteFrames.length)]);
        }
    };
    __decorate([
        property({ type: cc.Prefab })
    ], TestScene.prototype, "listTestItemPrefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], TestScene.prototype, "listContent", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], TestScene.prototype, "flagSpriteFrames", void 0);
    __decorate([
        property
    ], TestScene.prototype, "listItemMax", void 0);
    TestScene = __decorate([
        ccclass
    ], TestScene);
    return TestScene;
}(cc.Component));
exports.TestScene = TestScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdGVzdFxcc2NyaXB0c1xcdGVzdC1zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTRDO0FBRXRDLElBQUEsS0FBeUIsRUFBRSxDQUFDLFVBQVUsRUFBcEMsT0FBTyxhQUFBLEVBQUcsUUFBUSxjQUFrQixDQUFDO0FBRzdDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBc0JDO1FBbkJHLHdCQUFrQixHQUFhLElBQUksQ0FBQztRQUdwQyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUczQixzQkFBZ0IsR0FBb0IsRUFBRSxDQUFDO1FBR3ZDLGlCQUFXLEdBQVUsR0FBRyxDQUFDOztJQVU3QixDQUFDO0lBUkcseUJBQUssR0FBTDtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUM7U0FDM0c7SUFDTCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzt5REFDUztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7a0RBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQzt1REFDSztJQUd2QztRQURDLFFBQVE7a0RBQ2dCO0lBWmhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FzQnJCO0lBQUQsZ0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjhCLEVBQUUsQ0FBQyxTQUFTLEdBc0IxQztBQXRCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0VGVzdEl0ZW0gZnJvbSBcIi4vbGlzdC10ZXN0LWl0ZW1cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRlc3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlByZWZhYn0pXHJcbiAgICBsaXN0VGVzdEl0ZW1QcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBsaXN0Q29udGVudDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6W2NjLlNwcml0ZUZyYW1lXX0pXHJcbiAgICBmbGFnU3ByaXRlRnJhbWVzOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGxpc3RJdGVtTWF4Om51bWJlciA9IDIwMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbU1heDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RUZXN0SXRlbVByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5saXN0Q29udGVudDtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChMaXN0VGVzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtPy5yYW5kb21EYXRhKGkgKyAxLCB0aGlzLmZsYWdTcHJpdGVGcmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5mbGFnU3ByaXRlRnJhbWVzLmxlbmd0aCldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/render-component.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '910f4xoAolEIqZcbcZPd1Ee', 'render-component');
// lcc-ui-sorting-group/engine-extend/render-component.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHJlbmRlci1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kZWNsYXJlIG1vZHVsZSBjYyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlbmRlckNvbXBvbmVudCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5riy5p+T5LyY5YWI57qnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVuZGVyUHJpb3JpdHk6bnVtYmVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/trans-pool/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb098zFC+JI7oEDmJ0gIWva', 'index');
// lcc-ui-sorting-group/engine-extend/trans-pool/index.js

"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var NodeUnit = require('./node-unit');

var NodeMemPool = require('./node-mem-pool');

module.exports = {
  NodeMemPool: new NodeMemPool(NodeUnit)
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHRyYW5zLXBvb2xcXGluZGV4LmpzIl0sIm5hbWVzIjpbIk5vZGVVbml0IiwicmVxdWlyZSIsIk5vZGVNZW1Qb29sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXRCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQXpCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkYsRUFBQUEsV0FBVyxFQUFFLElBQUlBLFdBQUosQ0FBZ0JGLFFBQWhCO0FBREEsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTkgWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmxldCBOb2RlVW5pdCA9IHJlcXVpcmUoJy4vbm9kZS11bml0Jyk7XHJcbmxldCBOb2RlTWVtUG9vbCA9IHJlcXVpcmUoJy4vbm9kZS1tZW0tcG9vbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBOb2RlTWVtUG9vbDogbmV3IE5vZGVNZW1Qb29sKE5vZGVVbml0KVxyXG59OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0c38KI25NEaKsqDjvCBZ0V', 'node');
// lcc-ui-sorting-group/engine-extend/node.ts

//@ts-ignore
var nodeMemPool = require('./trans-pool/index').NodeMemPool;
if (!('sortingPriority' in cc.Node.prototype)) {
    Object.defineProperty(cc.Node.prototype, 'sortingPriority', {
        get: function () {
            return this._sortingPriority;
        },
        set: function (value) {
            this._sortingPriority = value;
            // console.log(`sortingPriority ${this.name} ${value}`);
            if (CC_JSB) {
                this._sortingPriorityProxy[0] = value;
            }
        },
        enumerable: true
    });
    Object.defineProperty(cc.Node.prototype, 'sortingEnabled', {
        get: function () {
            return this._sortingEnabled;
        },
        set: function (value) {
            this._sortingEnabled = value;
            // console.log(`sortingEnabled ${this.name} ${value}`);
            if (CC_JSB) {
                this._sortingEnabledProxy[0] = value ? 1 : 0;
            }
        },
        enumerable: true
    });
}
if (CC_JSB) {
    //@ts-ignore
    cc.Node.prototype._initDataFromPool = function () {
        if (!this._spaceInfo) {
            if (CC_EDITOR || CC_TEST) {
                this._spaceInfo = {
                    trs: new Float64Array(10),
                    localMat: new Float64Array(16),
                    worldMat: new Float64Array(16),
                };
            }
            else {
                this._spaceInfo = nodeMemPool.pop();
            }
        }
        var spaceInfo = this._spaceInfo;
        this._matrix = cc.mat4(spaceInfo.localMat);
        cc.Mat4.identity(this._matrix);
        this._worldMatrix = cc.mat4(spaceInfo.worldMat);
        cc.Mat4.identity(this._worldMatrix);
        this._localMatDirty = 0xffff;
        this._worldMatDirty = true;
        this._sortingPriorityProxy = spaceInfo.sortingPriority;
        this._sortingEnabledProxy = spaceInfo.sortingEnabled;
        var trs = this._trs = spaceInfo.trs;
        trs[0] = 0; // position.x
        trs[1] = 0; // position.y
        trs[2] = 0; // position.z
        trs[3] = 0; // rotation.x
        trs[4] = 0; // rotation.y
        trs[5] = 0; // rotation.z
        trs[6] = 1; // rotation.w
        trs[7] = 1; // scale.x
        trs[8] = 1; // scale.y
        trs[9] = 1; // scale.z
    };
    //@ts-ignore
    cc.Node.prototype._backDataIntoPool = function () {
        if (!(CC_EDITOR || CC_TEST)) {
            // push back to pool
            nodeMemPool.push(this._spaceInfo);
            this._sortingPriorityProxy = null;
            this._sortingEnabledProxy = null;
            this._matrix = null;
            this._worldMatrix = null;
            this._trs = null;
            this._spaceInfo = null;
        }
    };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXG5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBWTtBQUNaLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQTtBQTJCN0QsSUFBRyxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQztJQUN6QyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3hELEdBQUcsRUFBRTtZQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7UUFDRCxHQUFHLEVBQUUsVUFBUyxLQUFLO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5Qix3REFBd0Q7WUFDeEQsSUFBRyxNQUFNLEVBQUM7Z0JBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN6QztRQUNMLENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFO1FBQ3ZELEdBQUcsRUFBRTtZQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLFVBQVMsS0FBSztZQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLHVEQUF1RDtZQUN2RCxJQUFHLE1BQU0sRUFBQztnQkFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRDtR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Q0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUMsQ0FBQTtDQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vQHRzLWlnbm9yZVxyXG5jb25zdCBub2RlTWVtUG9vbCA9IHJlcXVpcmUoJy4vdHJhbnMtcG9vbC9pbmRleCcpLk5vZGVNZW1Qb29sXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBjYyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE5vZGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaOkuW6j+S8mOWFiOe6pyAtIHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBfc29ydGluZ1ByaW9yaXR5Om51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o6S5bqP5LyY5YWI57qnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydGluZ1ByaW9yaXR5Om51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o6S5bqP5LyY5L2/6IO9IC0gcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9zb3J0aW5nRW5hYmxlZDpib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmjpLluo/kvJjkvb/og71cclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3J0aW5nRW5hYmxlZDpib29sZWFuO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZighKCdzb3J0aW5nUHJpb3JpdHknIGluIGNjLk5vZGUucHJvdG90eXBlKSl7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2MuTm9kZS5wcm90b3R5cGUsICdzb3J0aW5nUHJpb3JpdHknLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3J0aW5nUHJpb3JpdHk7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkgeyBcclxuICAgICAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzb3J0aW5nUHJpb3JpdHkgJHt0aGlzLm5hbWV9ICR7dmFsdWV9YCk7XHJcbiAgICAgICAgICAgIGlmKENDX0pTQil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0aW5nUHJpb3JpdHlQcm94eVswXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2MuTm9kZS5wcm90b3R5cGUsICdzb3J0aW5nRW5hYmxlZCcsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdFbmFibGVkOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzb3J0aW5nRW5hYmxlZCAke3RoaXMubmFtZX0gJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgaWYoQ0NfSlNCKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkUHJveHlbMF0gPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYoQ0NfSlNCKXtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY2MuTm9kZS5wcm90b3R5cGUuX2luaXREYXRhRnJvbVBvb2wgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghdGhpcy5fc3BhY2VJbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IgfHwgQ0NfVEVTVCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BhY2VJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyczogbmV3IEZsb2F0NjRBcnJheSgxMCksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYXQ6IG5ldyBGbG9hdDY0QXJyYXkoMTYpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkTWF0OiBuZXcgRmxvYXQ2NEFycmF5KDE2KSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGFjZUluZm8gPSBub2RlTWVtUG9vbC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IHRoaXMuX3NwYWNlSW5mbztcclxuICAgICAgICB0aGlzLl9tYXRyaXggPSBjYy5tYXQ0KHNwYWNlSW5mby5sb2NhbE1hdCk7XHJcbiAgICAgICAgY2MuTWF0NC5pZGVudGl0eSh0aGlzLl9tYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gY2MubWF0NChzcGFjZUluZm8ud29ybGRNYXQpO1xyXG4gICAgICAgIGNjLk1hdDQuaWRlbnRpdHkodGhpcy5fd29ybGRNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuX2xvY2FsTWF0RGlydHkgPSAweGZmZmY7XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXREaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5UHJveHkgPSBzcGFjZUluZm8uc29ydGluZ1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkUHJveHkgPSBzcGFjZUluZm8uc29ydGluZ0VuYWJsZWQ7XHJcblxyXG4gICAgICAgIGxldCB0cnMgPSB0aGlzLl90cnMgPSBzcGFjZUluZm8udHJzO1xyXG4gICAgICAgIHRyc1swXSA9IDA7IC8vIHBvc2l0aW9uLnhcclxuICAgICAgICB0cnNbMV0gPSAwOyAvLyBwb3NpdGlvbi55XHJcbiAgICAgICAgdHJzWzJdID0gMDsgLy8gcG9zaXRpb24uelxyXG4gICAgICAgIHRyc1szXSA9IDA7IC8vIHJvdGF0aW9uLnhcclxuICAgICAgICB0cnNbNF0gPSAwOyAvLyByb3RhdGlvbi55XHJcbiAgICAgICAgdHJzWzVdID0gMDsgLy8gcm90YXRpb24uelxyXG4gICAgICAgIHRyc1s2XSA9IDE7IC8vIHJvdGF0aW9uLndcclxuICAgICAgICB0cnNbN10gPSAxOyAvLyBzY2FsZS54XHJcbiAgICAgICAgdHJzWzhdID0gMTsgLy8gc2NhbGUueVxyXG4gICAgICAgIHRyc1s5XSA9IDE7IC8vIHNjYWxlLnpcclxuICAgIH1cclxuXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNjLk5vZGUucHJvdG90eXBlLl9iYWNrRGF0YUludG9Qb29sID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCEoQ0NfRURJVE9SIHx8IENDX1RFU1QpKSB7XHJcbiAgICAgICAgICAgIC8vIHB1c2ggYmFjayB0byBwb29sXHJcbiAgICAgICAgICAgIG5vZGVNZW1Qb29sLnB1c2godGhpcy5fc3BhY2VJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5UHJveHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0aW5nRW5hYmxlZFByb3h5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fbWF0cml4ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl90cnMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zcGFjZUluZm8gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/trans-pool/mem-pool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13cfcLUuFlC3JF6VhZiOGt2', 'mem-pool');
// lcc-ui-sorting-group/engine-extend/trans-pool/mem-pool.js

"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var MemPool = function MemPool(unitClass) {
  this._unitClass = unitClass;
  this._pool = [];
  this._findOrder = [];

  if (CC_JSB && CC_NATIVERENDERER) {
    this._initNative();
  }
};

var proto = MemPool.prototype;

proto._initNative = function () {
  this._nativeMemPool = new renderer.MemPool();
};

proto._buildUnit = function (unitID) {
  var unit = new this._unitClass(unitID, this);

  if (CC_JSB && CC_NATIVERENDERER) {
    this._nativeMemPool.updateCommonData(unitID, unit._data, unit._signData);
  }

  return unit;
};

proto._destroyUnit = function (unitID) {
  this._pool[unitID] = null;

  for (var idx = 0, n = this._findOrder.length; idx < n; idx++) {
    var unit = this._findOrder[idx];

    if (unit && unit.unitID == unitID) {
      this._findOrder.splice(idx, 1);

      break;
    }
  }

  if (CC_JSB && CC_NATIVERENDERER) {
    this._nativeMemPool.removeCommonData(unitID);
  }
};

proto._findUnitID = function () {
  var unitID = 0;
  var pool = this._pool;

  while (pool[unitID]) {
    unitID++;
  }

  return unitID;
};

proto.pop = function () {
  var findUnit = null;
  var idx = 0;
  var findOrder = this._findOrder;
  var pool = this._pool;

  for (var n = findOrder.length; idx < n; idx++) {
    var unit = findOrder[idx];

    if (unit && unit.hasSpace()) {
      findUnit = unit;
      break;
    }
  }

  if (!findUnit) {
    var unitID = this._findUnitID();

    findUnit = this._buildUnit(unitID);
    pool[unitID] = findUnit;
    findOrder.push(findUnit);
    idx = findOrder.length - 1;
  } // swap has space unit to first position, so next find will fast


  var firstUnit = findOrder[0];

  if (firstUnit !== findUnit) {
    findOrder[0] = findUnit;
    findOrder[idx] = firstUnit;
  }

  return findUnit.pop();
};

proto.push = function (info) {
  var unit = this._pool[info.unitID];
  unit.push(info.index);

  if (this._findOrder.length > 1 && unit.isAllFree()) {
    this._destroyUnit(info.unitID);
  }

  return unit;
};

module.exports = MemPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHRyYW5zLXBvb2xcXG1lbS1wb29sLmpzIl0sIm5hbWVzIjpbIk1lbVBvb2wiLCJ1bml0Q2xhc3MiLCJfdW5pdENsYXNzIiwiX3Bvb2wiLCJfZmluZE9yZGVyIiwiQ0NfSlNCIiwiQ0NfTkFUSVZFUkVOREVSRVIiLCJfaW5pdE5hdGl2ZSIsInByb3RvIiwicHJvdG90eXBlIiwiX25hdGl2ZU1lbVBvb2wiLCJyZW5kZXJlciIsIl9idWlsZFVuaXQiLCJ1bml0SUQiLCJ1bml0IiwidXBkYXRlQ29tbW9uRGF0YSIsIl9kYXRhIiwiX3NpZ25EYXRhIiwiX2Rlc3Ryb3lVbml0IiwiaWR4IiwibiIsImxlbmd0aCIsInNwbGljZSIsInJlbW92ZUNvbW1vbkRhdGEiLCJfZmluZFVuaXRJRCIsInBvb2wiLCJwb3AiLCJmaW5kVW5pdCIsImZpbmRPcmRlciIsImhhc1NwYWNlIiwicHVzaCIsImZpcnN0VW5pdCIsImluZm8iLCJpbmRleCIsImlzQWxsRnJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVUMsU0FBVixFQUFxQjtBQUMvQixPQUFLQyxVQUFMLEdBQWtCRCxTQUFsQjtBQUNBLE9BQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxNQUFJQyxNQUFNLElBQUlDLGlCQUFkLEVBQWlDO0FBQzdCLFNBQUtDLFdBQUw7QUFDSDtBQUNKLENBUkQ7O0FBVUEsSUFBSUMsS0FBSyxHQUFHUixPQUFPLENBQUNTLFNBQXBCOztB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R0FBZUQsUUFBZjtBQUNBQyxJQUFBQSxTQUFTLENBQUNULEdBQUQsQ0FBVCxHQUFpQlksU0FBakI7QUFDSDs7QUFFRCxTQUFPSixRQUFRLENBQUNELEdBQVQsRUFBUDtBQUNILENBN0JEOztBQStCQWxCLEtBQUssQ0FBQ3NCLElBQU4sR0FBYSxVQUFVRSxJQUFWLEVBQWdCO0FBQ3pCLE1BQUlsQixJQUFJLEdBQUcsS0FBS1gsS0FBTCxDQUFXNkIsSUFBSSxDQUFDbkIsTUFBaEIsQ0FBWDtBQUNBQyxFQUFBQSxJQUFJLENBQUNnQixJQUFMLENBQVVFLElBQUksQ0FBQ0MsS0FBZjs7QUFDQSxNQUFJLEtBQUs3QixVQUFMLENBQWdCaUIsTUFBaEIsR0FBeUIsQ0FBekIsSUFBOEJQLElBQUksQ0FBQ29CLFNBQUwsRUFBbEMsRUFBb0Q7QUFDaEQsU0FBS2hCLFlBQUwsQ0FBa0JjLElBQUksQ0FBQ25CLE1BQXZCO0FBQ0g7O0FBQ0QsU0FBT0MsSUFBUDtBQUNILENBUEQ7O0FBUUFxQixNQUFNLENBQUNDLE9BQVAsR0FBaUJwQyxPQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxOSBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxubGV0IE1lbVBvb2wgPSBmdW5jdGlvbiAodW5pdENsYXNzKSB7XHJcbiAgICB0aGlzLl91bml0Q2xhc3MgPSB1bml0Q2xhc3M7XHJcbiAgICB0aGlzLl9wb29sID0gW107XHJcbiAgICB0aGlzLl9maW5kT3JkZXIgPSBbXTtcclxuXHJcbiAgICBpZiAoQ0NfSlNCICYmIENDX05BVElWRVJFTkRFUkVSKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdE5hdGl2ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IHByb3RvID0gTWVtUG9vbC5wcm90b3R5cGU7XHJcbnByb3RvLl9pbml0TmF0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5fbmF0aXZlTWVtUG9vbCA9IG5ldyByZW5kZXJlci5NZW1Qb29sKCk7XHJcbn07XHJcblxyXG5wcm90by5fYnVpbGRVbml0ID0gZnVuY3Rpb24gKHVuaXRJRCkge1xyXG4gICAgbGV0IHVuaXQgPSBuZXcgdGhpcy5fdW5pdENsYXNzKHVuaXRJRCwgdGhpcyk7XHJcbiAgICBpZiAoQ0NfSlNCICYmIENDX05BVElWRVJFTkRFUkVSKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWVtUG9vbC51cGRhdGVDb21tb25EYXRhKHVuaXRJRCwgdW5pdC5fZGF0YSwgdW5pdC5fc2lnbkRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXQ7XHJcbn07XHJcblxyXG5wcm90by5fZGVzdHJveVVuaXQgPSBmdW5jdGlvbiAodW5pdElEKSB7XHJcbiAgICB0aGlzLl9wb29sW3VuaXRJRF0gPSBudWxsO1xyXG4gICAgZm9yIChsZXQgaWR4ID0gMCwgbiA9IHRoaXMuX2ZpbmRPcmRlci5sZW5ndGg7IGlkeCA8IG47IGlkeCsrKSB7XHJcbiAgICAgICAgbGV0IHVuaXQgPSB0aGlzLl9maW5kT3JkZXJbaWR4XTtcclxuICAgICAgICBpZiAodW5pdCAmJiB1bml0LnVuaXRJRCA9PSB1bml0SUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmluZE9yZGVyLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoQ0NfSlNCICYmIENDX05BVElWRVJFTkRFUkVSKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlTWVtUG9vbC5yZW1vdmVDb21tb25EYXRhKHVuaXRJRCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5wcm90by5fZmluZFVuaXRJRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB1bml0SUQgPSAwO1xyXG4gICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sO1xyXG4gICAgd2hpbGUgKHBvb2xbdW5pdElEXSkgdW5pdElEKys7XHJcbiAgICByZXR1cm4gdW5pdElEO1xyXG59O1xyXG5cclxucHJvdG8ucG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZpbmRVbml0ID0gbnVsbDtcclxuICAgIGxldCBpZHggPSAwO1xyXG4gICAgbGV0IGZpbmRPcmRlciA9IHRoaXMuX2ZpbmRPcmRlcjtcclxuICAgIGxldCBwb29sID0gdGhpcy5fcG9vbDtcclxuICAgIGZvciAobGV0IG4gPSBmaW5kT3JkZXIubGVuZ3RoOyBpZHggPCBuOyBpZHgrKykge1xyXG4gICAgICAgIGxldCB1bml0ID0gZmluZE9yZGVyW2lkeF07XHJcbiAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5oYXNTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIGZpbmRVbml0ID0gdW5pdDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmluZFVuaXQpIHtcclxuICAgICAgICBsZXQgdW5pdElEID0gdGhpcy5fZmluZFVuaXRJRCgpO1xyXG4gICAgICAgIGZpbmRVbml0ID0gdGhpcy5fYnVpbGRVbml0KHVuaXRJRCk7XHJcbiAgICAgICAgcG9vbFt1bml0SURdID0gZmluZFVuaXQ7XHJcbiAgICAgICAgZmluZE9yZGVyLnB1c2goZmluZFVuaXQpO1xyXG4gICAgICAgIGlkeCA9IGZpbmRPcmRlci5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3YXAgaGFzIHNwYWNlIHVuaXQgdG8gZmlyc3QgcG9zaXRpb24sIHNvIG5leHQgZmluZCB3aWxsIGZhc3RcclxuICAgIGxldCBmaXJzdFVuaXQgPSBmaW5kT3JkZXJbMF07XHJcbiAgICBpZiAoZmlyc3RVbml0ICE9PSBmaW5kVW5pdCkge1xyXG4gICAgICAgIGZpbmRPcmRlclswXSA9IGZpbmRVbml0O1xyXG4gICAgICAgIGZpbmRPcmRlcltpZHhdID0gZmlyc3RVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaW5kVW5pdC5wb3AoKTtcclxufTtcclxuXHJcbnByb3RvLnB1c2ggPSBmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgbGV0IHVuaXQgPSB0aGlzLl9wb29sW2luZm8udW5pdElEXTtcclxuICAgIHVuaXQucHVzaChpbmZvLmluZGV4KTtcclxuICAgIGlmICh0aGlzLl9maW5kT3JkZXIubGVuZ3RoID4gMSAmJiB1bml0LmlzQWxsRnJlZSgpKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVVuaXQoaW5mby51bml0SUQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXQ7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gTWVtUG9vbDsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/render-flow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9ee1KTc+BFiKBYaF11vhkS', 'render-flow');
// lcc-ui-sorting-group/engine-extend/render-flow.ts

var _batcher;
var _cullingMask = 0;
/**
 * 当前渲染层级
 */
var renderLevel = 0;
/**
 * 当前渲染优先级
 */
var renderPriority = 0;
/**
 * 渲染器缓存
 */
var rendererCache = [];
/**
 * 渲染器排序
 */
var rendererOrder = false;
/**
 * 刷新渲染缓存
 */
function flushRendererCache() {
    if (rendererCache.length > 0) {
        if (rendererOrder) {
            rendererCache.sort(function (a, b) { return a.renderPriority - b.renderPriority; });
        }
        for (var _i = 0, rendererCache_1 = rendererCache; _i < rendererCache_1.length; _i++) {
            var render = rendererCache_1[_i];
            // console.log(`${render.node.name} - ${render.renderPriority}`);
            //@ts-ignore
            render._checkBacth(_batcher, render.node._cullingMask);
            //@ts-ignore
            render._assembler.fillBuffers(render, _batcher);
        }
        rendererCache.length = 0;
    }
    rendererOrder = false;
}
//@ts-ignore
cc.RenderFlow.visitRootNode = function (rootNode) {
    renderLevel = 0;
    renderPriority = 0;
    rendererCache.length = 0;
    rendererOrder = false;
    //@ts-ignore
    _batcher = cc.RenderFlow.getBachther();
    //@ts-ignore
    cc.RenderFlow.validateRenderers();
    var preCullingMask = _cullingMask;
    _cullingMask = rootNode._cullingMask;
    //@ts-ignore
    if (rootNode._renderFlag & cc.RenderFlow.FLAG_WORLD_TRANSFORM) {
        _batcher.worldMatDirty++;
        rootNode._calculWorldMatrix();
        //@ts-ignore
        rootNode._renderFlag &= ~cc.RenderFlow.FLAG_WORLD_TRANSFORM;
        //@ts-ignore
        cc.RenderFlow.flows[rootNode._renderFlag]._func(rootNode);
        flushRendererCache();
        _batcher.worldMatDirty--;
    }
    else {
        //@ts-ignore
        cc.RenderFlow.flows[rootNode._renderFlag]._func(rootNode);
        flushRendererCache();
    }
    _cullingMask = preCullingMask;
};
//@ts-ignore
cc.RenderFlow.prototype._render = function (node) {
    var comp = node._renderComponent;
    var preRenderPriority = renderPriority;
    renderPriority = node._sortingEnabled ? node._sortingPriority : renderPriority;
    if (node._sortingEnabled) {
        // cc.log(`++ ${node.name}`);
        ++renderLevel;
    }
    // cc.log(`${renderLevel} -> ${node.name}`);
    if (renderLevel > 0) {
        if (comp instanceof cc.Mask) {
            flushRendererCache();
            //@ts-ignore
            comp._checkBacth(_batcher, node._cullingMask);
            //@ts-ignore
            comp._assembler.fillBuffers(comp, _batcher);
        }
        else {
            if (_batcher.worldMatDirty && comp._assembler.updateWorldVerts) {
                comp._assembler.updateWorldVerts(comp);
            }
            if (comp instanceof sp.Skeleton) {
                _batcher.worldMatDirty++;
                //@ts-ignore
                comp.attachUtil._syncAttachedNode();
            }
            rendererCache.push(comp);
            comp.renderPriority = node._sortingEnabled ? node._sortingPriority : renderPriority;
            if (renderPriority != 0) {
                rendererOrder = true;
            }
        }
    }
    else {
        //@ts-ignore
        comp._checkBacth(_batcher, node._cullingMask);
        //@ts-ignore
        comp._assembler.fillBuffers(comp, _batcher);
    }
    this._next._func(node);
    if (node._sortingEnabled) {
        // cc.log(`-- ${node.name}`);
        --renderLevel;
        if (renderLevel <= 0) {
            flushRendererCache();
        }
    }
    renderPriority = preRenderPriority;
};
//@ts-ignore
cc.RenderFlow.prototype._postRender = function (node) {
    var comp = node._renderComponent;
    if (comp instanceof cc.Mask) {
        flushRendererCache();
    }
    comp._checkBacth(_batcher, node._cullingMask);
    comp._assembler.postFillBuffers(comp, _batcher);
    this._next._func(node);
};
//@ts-ignore
cc.RenderFlow.prototype._children = function (node) {
    var cullingMask = _cullingMask;
    var batcher = _batcher;
    var parentOpacity = batcher.parentOpacity;
    var opacity = (batcher.parentOpacity *= (node._opacity / 255));
    if (!node._renderComponent && node._sortingEnabled) {
        // cc.log(`++ ${node.name}`);
        ++renderLevel;
    }
    //@ts-ignore
    var worldTransformFlag = batcher.worldMatDirty ? cc.RenderFlow.FLAG_WORLD_TRANSFORM : 0;
    //@ts-ignore
    var worldOpacityFlag = batcher.parentOpacityDirty ? cc.RenderFlow.FLAG_OPACITY_COLOR : 0;
    var worldDirtyFlag = worldTransformFlag | worldOpacityFlag;
    var children = node._children;
    for (var i = 0, l = children.length; i < l; i++) {
        var c = children[i];
        // Advance the modification of the flag to avoid node attribute modification is invalid when opacity === 0.
        c._renderFlag |= worldDirtyFlag;
        if (!c._activeInHierarchy || c._opacity === 0)
            continue;
        _cullingMask = c._cullingMask = c.groupIndex === 0 ? cullingMask : 1 << c.groupIndex;
        // TODO: Maybe has better way to implement cascade opacity
        var colorVal = c._color._val;
        c._color._fastSetA(c._opacity * opacity);
        // @ts-ignore
        cc.RenderFlow.flows[c._renderFlag]._func(c);
        c._color._val = colorVal;
    }
    batcher.parentOpacity = parentOpacity;
    this._next._func(node);
    if (!node._renderComponent && node._sortingEnabled) {
        // cc.log(`-- ${node.name}`);
        --renderLevel;
        if (renderLevel <= 0) {
            flushRendererCache();
        }
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHJlbmRlci1mbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxDQUFDO0FBQ2IsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCOztHQUVHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCOztHQUVHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXZCOztHQUVHO0FBQ0gsSUFBSSxhQUFhLEdBQXdCLEVBQUUsQ0FBQztBQUU1Qzs7R0FFRztBQUNILElBQUksYUFBYSxHQUFXLEtBQUssQ0FBQztBQUVsQzs7R0FFRztBQUNILFNBQVMsa0JBQWtCO0lBQ3ZCLElBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDeEIsSUFBRyxhQUFhLEVBQUM7WUFDYixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsS0FBa0IsVUFBYSxFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUM7WUFBNUIsSUFBSSxNQUFNLHNCQUFBO1lBQ1YsaUVBQWlFO1lBQ2pFLFlBQVk7WUFDWixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZELFlBQVk7WUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUM1QjtJQUNELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDMUIsQ0FBQztBQUVELFlBQVk7QUFDWixFQUFFLENB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QUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFFckYsMERBQTBEO1FBQzFELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDekMsYUFBYTtRQUNiLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0tBQzVCO0lBRUQsT0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkIsSUFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFDO1FBQzlDLDZCQUE2QjtRQUM3QixFQUFFLFdBQVcsQ0FBQztRQUNkLElBQUcsV0FBVyxJQUFJLENBQUMsRUFBQztZQUNoQixrQkFBa0IsRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IF9iYXRjaGVyO1xyXG5sZXQgX2N1bGxpbmdNYXNrID0gMDtcclxuXHJcbi8qKlxyXG4gKiDlvZPliY3muLLmn5PlsYLnuqdcclxuICovXHJcbmxldCByZW5kZXJMZXZlbCA9IDA7XHJcblxyXG4vKipcclxuICog5b2T5YmN5riy5p+T5LyY5YWI57qnXHJcbiAqL1xyXG5sZXQgcmVuZGVyUHJpb3JpdHkgPSAwO1xyXG5cclxuLyoqXHJcbiAqIOa4suafk+WZqOe8k+WtmFxyXG4gKi9cclxubGV0IHJlbmRlcmVyQ2FjaGU6Y2MuUmVuZGVyQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiDmuLLmn5PlmajmjpLluo9cclxuICovXHJcbmxldCByZW5kZXJlck9yZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiDliLfmlrDmuLLmn5PnvJPlrZhcclxuICovXHJcbmZ1bmN0aW9uIGZsdXNoUmVuZGVyZXJDYWNoZSgpe1xyXG4gICAgaWYocmVuZGVyZXJDYWNoZS5sZW5ndGggPiAwKXtcclxuICAgICAgICBpZihyZW5kZXJlck9yZGVyKXtcclxuICAgICAgICAgICAgcmVuZGVyZXJDYWNoZS5zb3J0KChhLCBiKT0+eyByZXR1cm4gYS5yZW5kZXJQcmlvcml0eSAtIGIucmVuZGVyUHJpb3JpdHk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHJlbmRlciBvZiByZW5kZXJlckNhY2hlKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7cmVuZGVyLm5vZGUubmFtZX0gLSAke3JlbmRlci5yZW5kZXJQcmlvcml0eX1gKTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlbmRlci5fY2hlY2tCYWN0aChfYmF0Y2hlciwgcmVuZGVyLm5vZGUuX2N1bGxpbmdNYXNrKTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJlbmRlci5fYXNzZW1ibGVyLmZpbGxCdWZmZXJzKHJlbmRlciwgX2JhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJlckNhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJlck9yZGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vQHRzLWlnbm9yZVxyXG5jYy5SZW5kZXJGbG93LnZpc2l0Um9vdE5vZGUgPSBmdW5jdGlvbiAocm9vdE5vZGUpe1xyXG4gICAgcmVuZGVyTGV2ZWwgPSAwO1xyXG4gICAgcmVuZGVyUHJpb3JpdHkgPSAwO1xyXG4gICAgcmVuZGVyZXJDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgcmVuZGVyZXJPcmRlciA9IGZhbHNlO1xyXG5cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgX2JhdGNoZXIgPSBjYy5SZW5kZXJGbG93LmdldEJhY2h0aGVyKCk7XHJcbiAgICBcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY2MuUmVuZGVyRmxvdy52YWxpZGF0ZVJlbmRlcmVycygpOyAgICBcclxuXHJcbiAgICBsZXQgcHJlQ3VsbGluZ01hc2sgPSBfY3VsbGluZ01hc2s7XHJcbiAgICBfY3VsbGluZ01hc2sgPSByb290Tm9kZS5fY3VsbGluZ01hc2s7XHJcblxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpZiAocm9vdE5vZGUuX3JlbmRlckZsYWcgJiBjYy5SZW5kZXJGbG93LkZMQUdfV09STERfVFJBTlNGT1JNKSB7XHJcbiAgICAgICAgX2JhdGNoZXIud29ybGRNYXREaXJ0eSArKztcclxuICAgICAgICByb290Tm9kZS5fY2FsY3VsV29ybGRNYXRyaXgoKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICByb290Tm9kZS5fcmVuZGVyRmxhZyAmPSB+Y2MuUmVuZGVyRmxvdy5GTEFHX1dPUkxEX1RSQU5TRk9STTtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgY2MuUmVuZGVyRmxvdy5mbG93c1tyb290Tm9kZS5fcmVuZGVyRmxhZ10uX2Z1bmMocm9vdE5vZGUpO1xyXG4gICAgICAgIGZsdXNoUmVuZGVyZXJDYWNoZSgpO1xyXG5cclxuICAgICAgICBfYmF0Y2hlci53b3JsZE1hdERpcnR5IC0tO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgY2MuUmVuZGVyRmxvdy5mbG93c1tyb290Tm9kZS5fcmVuZGVyRmxhZ10uX2Z1bmMocm9vdE5vZGUpO1xyXG4gICAgICAgIGZsdXNoUmVuZGVyZXJDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jdWxsaW5nTWFzayA9IHByZUN1bGxpbmdNYXNrO1xyXG59XHJcblxyXG4vL0B0cy1pZ25vcmVcclxuY2MuUmVuZGVyRmxvdy5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICBsZXQgY29tcCA9IG5vZGUuX3JlbmRlckNvbXBvbmVudDtcclxuICAgIGxldCBwcmVSZW5kZXJQcmlvcml0eSA9IHJlbmRlclByaW9yaXR5O1xyXG5cclxuICAgIHJlbmRlclByaW9yaXR5ID0gbm9kZS5fc29ydGluZ0VuYWJsZWQgPyBub2RlLl9zb3J0aW5nUHJpb3JpdHkgOiByZW5kZXJQcmlvcml0eTtcclxuICAgIFxyXG4gICAgaWYobm9kZS5fc29ydGluZ0VuYWJsZWQpe1xyXG4gICAgICAgIC8vIGNjLmxvZyhgKysgJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgKytyZW5kZXJMZXZlbDtcclxuICAgIH1cclxuICAgIC8vIGNjLmxvZyhgJHtyZW5kZXJMZXZlbH0gLT4gJHtub2RlLm5hbWV9YCk7XHJcbiAgICBpZihyZW5kZXJMZXZlbCA+IDApe1xyXG4gICAgICAgIGlmKGNvbXAgaW5zdGFuY2VvZiBjYy5NYXNrKXtcclxuICAgICAgICAgICAgZmx1c2hSZW5kZXJlckNhY2hlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29tcC5fY2hlY2tCYWN0aChfYmF0Y2hlciwgbm9kZS5fY3VsbGluZ01hc2spO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29tcC5fYXNzZW1ibGVyLmZpbGxCdWZmZXJzKGNvbXAsIF9iYXRjaGVyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgKF9iYXRjaGVyLndvcmxkTWF0RGlydHkgJiYgY29tcC5fYXNzZW1ibGVyLnVwZGF0ZVdvcmxkVmVydHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbXAuX2Fzc2VtYmxlci51cGRhdGVXb3JsZFZlcnRzKGNvbXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbXAgaW5zdGFuY2VvZiBzcC5Ta2VsZXRvbil7XHJcbiAgICAgICAgICAgICAgICBfYmF0Y2hlci53b3JsZE1hdERpcnR5Kys7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGNvbXAuYXR0YWNoVXRpbC5fc3luY0F0dGFjaGVkTm9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlcmVyQ2FjaGUucHVzaChjb21wKTtcclxuICAgICAgICAgICAgY29tcC5yZW5kZXJQcmlvcml0eSA9IG5vZGUuX3NvcnRpbmdFbmFibGVkID8gbm9kZS5fc29ydGluZ1ByaW9yaXR5IDogcmVuZGVyUHJpb3JpdHk7XHJcbiAgICAgICAgICAgIGlmKHJlbmRlclByaW9yaXR5ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJPcmRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBjb21wLl9jaGVja0JhY3RoKF9iYXRjaGVyLCBub2RlLl9jdWxsaW5nTWFzayk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgY29tcC5fYXNzZW1ibGVyLmZpbGxCdWZmZXJzKGNvbXAsIF9iYXRjaGVyKTtcclxuICAgIH1cclxuICAgIHRoaXMuX25leHQuX2Z1bmMobm9kZSk7XHJcblxyXG4gICAgaWYobm9kZS5fc29ydGluZ0VuYWJsZWQpe1xyXG4gICAgICAgIC8vIGNjLmxvZyhgLS0gJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgLS1yZW5kZXJMZXZlbDtcclxuICAgICAgICBpZihyZW5kZXJMZXZlbCA8PSAwKXtcclxuICAgICAgICAgICAgZmx1c2hSZW5kZXJlckNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyUHJpb3JpdHkgPSBwcmVSZW5kZXJQcmlvcml0eTtcclxuXHJcbn07XHJcblxyXG4vL0B0cy1pZ25vcmVcclxuY2MuUmVuZGVyRmxvdy5wcm90b3R5cGUuX3Bvc3RSZW5kZXIgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgbGV0IGNvbXAgPSBub2RlLl9yZW5kZXJDb21wb25lbnQ7XHJcbiAgICBpZihjb21wIGluc3RhbmNlb2YgY2MuTWFzayl7XHJcbiAgICAgICAgZmx1c2hSZW5kZXJlckNhY2hlKCk7XHJcbiAgICB9XHJcbiAgICBjb21wLl9jaGVja0JhY3RoKF9iYXRjaGVyLCBub2RlLl9jdWxsaW5nTWFzayk7XHJcbiAgICBjb21wLl9hc3NlbWJsZXIucG9zdEZpbGxCdWZmZXJzKGNvbXAsIF9iYXRjaGVyKTtcclxuICAgIHRoaXMuX25leHQuX2Z1bmMobm9kZSk7XHJcbn07XHJcblxyXG4vL0B0cy1pZ25vcmVcclxuY2MuUmVuZGVyRmxvdy5wcm90b3R5cGUuX2NoaWxkcmVuID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgIGxldCBjdWxsaW5nTWFzayA9IF9jdWxsaW5nTWFzaztcclxuICAgIGxldCBiYXRjaGVyID0gX2JhdGNoZXI7XHJcblxyXG4gICAgbGV0IHBhcmVudE9wYWNpdHkgPSBiYXRjaGVyLnBhcmVudE9wYWNpdHk7XHJcbiAgICBsZXQgb3BhY2l0eSA9IChiYXRjaGVyLnBhcmVudE9wYWNpdHkgKj0gKG5vZGUuX29wYWNpdHkgLyAyNTUpKTtcclxuXHJcbiAgICBpZighbm9kZS5fcmVuZGVyQ29tcG9uZW50ICYmIG5vZGUuX3NvcnRpbmdFbmFibGVkKXtcclxuICAgICAgICAvLyBjYy5sb2coYCsrICR7bm9kZS5uYW1lfWApO1xyXG4gICAgICAgICsrcmVuZGVyTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBsZXQgd29ybGRUcmFuc2Zvcm1GbGFnID0gYmF0Y2hlci53b3JsZE1hdERpcnR5ID8gY2MuUmVuZGVyRmxvdy5GTEFHX1dPUkxEX1RSQU5TRk9STSA6IDA7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGxldCB3b3JsZE9wYWNpdHlGbGFnID0gYmF0Y2hlci5wYXJlbnRPcGFjaXR5RGlydHkgPyBjYy5SZW5kZXJGbG93LkZMQUdfT1BBQ0lUWV9DT0xPUiA6IDA7XHJcbiAgICBsZXQgd29ybGREaXJ0eUZsYWcgPSB3b3JsZFRyYW5zZm9ybUZsYWcgfCB3b3JsZE9wYWNpdHlGbGFnO1xyXG5cclxuICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuX2NoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IGNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAvLyBBZHZhbmNlIHRoZSBtb2RpZmljYXRpb24gb2YgdGhlIGZsYWcgdG8gYXZvaWQgbm9kZSBhdHRyaWJ1dGUgbW9kaWZpY2F0aW9uIGlzIGludmFsaWQgd2hlbiBvcGFjaXR5ID09PSAwLlxyXG4gICAgICAgIGMuX3JlbmRlckZsYWcgfD0gd29ybGREaXJ0eUZsYWc7XHJcbiAgICAgICAgaWYgKCFjLl9hY3RpdmVJbkhpZXJhcmNoeSB8fCBjLl9vcGFjaXR5ID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgX2N1bGxpbmdNYXNrID0gYy5fY3VsbGluZ01hc2sgPSBjLmdyb3VwSW5kZXggPT09IDAgPyBjdWxsaW5nTWFzayA6IDEgPDwgYy5ncm91cEluZGV4O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBNYXliZSBoYXMgYmV0dGVyIHdheSB0byBpbXBsZW1lbnQgY2FzY2FkZSBvcGFjaXR5XHJcbiAgICAgICAgbGV0IGNvbG9yVmFsID0gYy5fY29sb3IuX3ZhbDtcclxuICAgICAgICBjLl9jb2xvci5fZmFzdFNldEEoYy5fb3BhY2l0eSAqIG9wYWNpdHkpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjYy5SZW5kZXJGbG93LmZsb3dzW2MuX3JlbmRlckZsYWddLl9mdW5jKGMpO1xyXG4gICAgICAgIGMuX2NvbG9yLl92YWwgPSBjb2xvclZhbDtcclxuICAgIH1cclxuXHJcbiAgICBiYXRjaGVyLnBhcmVudE9wYWNpdHkgPSBwYXJlbnRPcGFjaXR5O1xyXG5cclxuICAgIHRoaXMuX25leHQuX2Z1bmMobm9kZSk7XHJcbiAgICBcclxuICAgIGlmKCFub2RlLl9yZW5kZXJDb21wb25lbnQgJiYgbm9kZS5fc29ydGluZ0VuYWJsZWQpe1xyXG4gICAgICAgIC8vIGNjLmxvZyhgLS0gJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgLS1yZW5kZXJMZXZlbDtcclxuICAgICAgICBpZihyZW5kZXJMZXZlbCA8PSAwKXtcclxuICAgICAgICAgICAgZmx1c2hSZW5kZXJlckNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/trans-pool/unit-base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1e0aAMygJJupVhGcTKMHjf', 'unit-base');
// lcc-ui-sorting-group/engine-extend/trans-pool/unit-base.js

"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
// Unit has many segment, layout such as :
// Head Free Pointer + Using Segment Num + Segment 1 + Segment 2 + Segment 3 ...
// sign data format
// Space : [If Free Flag]                          [Size:1 Uint16]
// Space : [Next Free Index]                       [Size:1 Uint16]
// invalid pointer value
var POINTER_INVALID_FLAG = 0xffff;
var SPACE_FREE_FLAG = 0x0;
var SPACE_USE_FLAG = 0x1;
var POS_NEXT_FREE = 0;
var POS_FREE_FLAG = 1;

var UnitBase = function UnitBase(unitID, memPool, contentNum) {
  contentNum = contentNum || 128; // set unit id

  this.unitID = unitID;
  this._memPool = memPool;
  this._data = new Uint16Array(2); // head of the free content index

  this._data[0] = 0; // using segment num

  this._data[1] = 0;
  this._contentNum = contentNum;
  this._signData = new Uint16Array(this._contentNum * 2);
  this._spacesData = [];

  for (var i = 0; i < contentNum; i++) {
    var signIndex = i * 2; // store content block index but not sign array index

    this._signData[signIndex + POS_NEXT_FREE] = i + 1;
    this._signData[signIndex + POS_FREE_FLAG] = SPACE_FREE_FLAG;
    this._spacesData[i] = {
      index: i,
      unitID: unitID
    };
  } // last one has no next space;


  this._signData[(contentNum - 1) * 2] = POINTER_INVALID_FLAG;
};

var UnitBaseProto = UnitBase.prototype;

UnitBaseProto.hasSpace = function () {
  return this._data[0] !== POINTER_INVALID_FLAG;
};

UnitBaseProto.isAllFree = function () {
  return this._data[1] == 0;
}; // pop space from unit


UnitBaseProto.pop = function () {
  var headFreeIndex = this._data[0];
  if (headFreeIndex === POINTER_INVALID_FLAG) return null;
  var index = headFreeIndex;
  var signIndex = index * 2;
  var space = this._spacesData[index]; // set use flag

  this._signData[signIndex + POS_FREE_FLAG] = SPACE_USE_FLAG; // store new next free space index

  this._data[0] = this._signData[signIndex + POS_NEXT_FREE]; // add using segment num

  this._data[1]++;
  return space;
}; // push back to unit


UnitBaseProto.push = function (index) {
  var signIndex = index * 2; // set free flag

  this._signData[signIndex + POS_FREE_FLAG] = SPACE_FREE_FLAG; // store head free index to the space

  this._signData[signIndex + POS_NEXT_FREE] = this._data[0]; // update head free index

  this._data[0] = index; // sub using segment num

  this._data[1]--;
}; // dump all space info


UnitBaseProto.dump = function () {
  var spaceNum = 0;
  var index = this._data[0];
  var freeStr = "";

  while (index != POINTER_INVALID_FLAG) {
    spaceNum++;
    freeStr += index + "->";
    index = this._signData[index * 2 + POS_NEXT_FREE];
  }

  var usingNum = 0;
  var usingStr = "";
  var contentNum = this._contentNum;

  for (var i = 0; i < contentNum; i++) {
    var freeFlag = this._signData[i * 2 + POS_FREE_FLAG];

    if (freeFlag == SPACE_USE_FLAG) {
      usingNum++;
      usingStr += i + "->";
    }
  }

  var totalNum = spaceNum + usingNum;
  console.log("unitID:", this.unitID, "spaceNum:", spaceNum, "calc using num:", usingNum, 'store using num:', this._data[1], 'calc total num:', totalNum, 'actually total num:', this._contentNum);
  console.log("free info:", freeStr);
  console.log("using info:", usingStr);

  if (usingNum != this._data[1]) {
    cc.error('using num error', "calc using num:", usingNum, 'store using num:', this._data[1]);
  }

  if (spaceNum + usingNum != this._contentNum) {
    cc.error('total num error', 'calc total num:', totalNum, 'actually total num:', this._contentNum);
  }
};

module.exports = UnitBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHRyYW5zLXBvb2xcXHVuaXQtYmFzZS5qcyJdLCJuYW1lcyI6WyJQT0lOVEVSX0lOVkFMSURfRkxBRyIsIlNQQUNFX0ZSRUVfRkxBRyIsIlNQQUNFX1VTRV9GTEFHIiwiUE9TX05FWFRfRlJFRSIsIlBPU19GUkVFX0ZMQUciLCJVbml0QmFzZSIsInVuaXRJRCIsIm1lbVBvb2wiLCJjb250ZW50TnVtIiwiX21lbVBvb2wiLCJfZGF0YSIsIlVpbnQxNkFycmF5IiwiX2NvbnRlbnROdW0iLCJfc2lnbkRhdGEiLCJfc3BhY2VzRGF0YSIsImkiLCJzaWduSW5kZXgiLCJpbmRleCIsIlVuaXRCYXNlUHJvdG8iLCJwcm90b3R5cGUiLCJoYXNTcGFjZSIsImlzQWxsRnJlZSIsInBvcCIsImhlYWRGcmVlSW5kZXgiLCJzcGFjZSIsInB1c2giLCJkdW1wIiwic3BhY2VOdW0iLCJmcmVlU3RyIiwidXNpbmdOdW0iLCJ1c2luZ1N0ciIsImZyZWVGbGFnIiwidG90YWxOdW0iLCJjb25zb2xlIiwibG9nIiwiY2MiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsTUFBM0I7QUFDQSxJQUFJQyxlQUFlLEdBQUcsR0FBdEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsR0FBckI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBRUEsSUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVUMs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QixFQUlJLGtCQUpKLEVBSXdCLEtBQUtuQixLQUFMLENBQVcsQ0FBWCxDQUp4QixFQUtJLGlCQUxKLEVBS3VCc0IsUUFMdkIsRUFNSSxxQkFOSixFQU0yQixLQUFLcEIsV0FOaEM7QUFRQXFCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJOLE9BQTFCO0FBQ0FLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJKLFFBQTNCOztBQUVBLE1BQUlELFFBQVEsSUFBSSxLQUFLbkIsS0FBTCxDQUFXLENBQVgsQ0FBaEIsRUFBK0I7QUFDM0J5QixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSSxpQkFESixFQUVJLGlCQUZKLEVBRXVCUCxRQUZ2QixFQUdJLGtCQUhKLEVBR3dCLEtBQUtuQixLQUFMLENBQVcsQ0FBWCxDQUh4QjtBQUtIOztBQUVELE1BQUlpQixRQUFRLEdBQUdFLFFBQVgsSUFBdUIsS0FBS2pCLFdBQWhDLEVBQTZDO0FBQ3pDdUIsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQ0ksaUJBREosRUFFSSxpQkFGSixFQUV1QkosUUFGdkIsRUFHSSxxQkFISixFQUcyQixLQUFLcEIsV0FIaEM7QUFLSDtBQUNKLENBakREOztBQW1EQXlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpDLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBVbml0IGhhcyBtYW55IHNlZ21lbnQsIGxheW91dCBzdWNoIGFzIDpcclxuLy8gSGVhZCBGcmVlIFBvaW50ZXIgKyBVc2luZyBTZWdtZW50IE51bSArIFNlZ21lbnQgMSArIFNlZ21lbnQgMiArIFNlZ21lbnQgMyAuLi5cclxuXHJcbi8vIHNpZ24gZGF0YSBmb3JtYXRcclxuLy8gU3BhY2UgOiBbSWYgRnJlZSBGbGFnXSAgICAgICAgICAgICAgICAgICAgICAgICAgW1NpemU6MSBVaW50MTZdXHJcbi8vIFNwYWNlIDogW05leHQgRnJlZSBJbmRleF0gICAgICAgICAgICAgICAgICAgICAgIFtTaXplOjEgVWludDE2XVxyXG5cclxuLy8gaW52YWxpZCBwb2ludGVyIHZhbHVlXHJcbmxldCBQT0lOVEVSX0lOVkFMSURfRkxBRyA9IDB4ZmZmZjtcclxubGV0IFNQQUNFX0ZSRUVfRkxBRyA9IDB4MDtcclxubGV0IFNQQUNFX1VTRV9GTEFHID0gMHgxO1xyXG5sZXQgUE9TX05FWFRfRlJFRSA9IDA7XHJcbmxldCBQT1NfRlJFRV9GTEFHID0gMTtcclxuXHJcbmxldCBVbml0QmFzZSA9IGZ1bmN0aW9uICh1bml0SUQsIG1lbVBvb2wsIGNvbnRlbnROdW0pIHtcclxuICAgIGNvbnRlbnROdW0gPSBjb250ZW50TnVtIHx8IDEyODtcclxuXHJcbiAgICAvLyBzZXQgdW5pdCBpZFxyXG4gICAgdGhpcy51bml0SUQgPSB1bml0SUQ7XHJcbiAgICB0aGlzLl9tZW1Qb29sID0gbWVtUG9vbDtcclxuXHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQxNkFycmF5KDIpO1xyXG4gICAgLy8gaGVhZCBvZiB0aGUgZnJlZSBjb250ZW50IGluZGV4XHJcbiAgICB0aGlzLl9kYXRhWzBdID0gMDtcclxuICAgIC8vIHVzaW5nIHNlZ21lbnQgbnVtXHJcbiAgICB0aGlzLl9kYXRhWzFdID0gMDtcclxuXHJcbiAgICB0aGlzLl9jb250ZW50TnVtID0gY29udGVudE51bTtcclxuICAgIHRoaXMuX3NpZ25EYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2NvbnRlbnROdW0gKiAyKTtcclxuICAgIHRoaXMuX3NwYWNlc0RhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnROdW07IGkrKykge1xyXG4gICAgICAgIGxldCBzaWduSW5kZXggPSBpICogMjtcclxuICAgICAgICAvLyBzdG9yZSBjb250ZW50IGJsb2NrIGluZGV4IGJ1dCBub3Qgc2lnbiBhcnJheSBpbmRleFxyXG4gICAgICAgIHRoaXMuX3NpZ25EYXRhW3NpZ25JbmRleCArIFBPU19ORVhUX0ZSRUVdID0gaSArIDE7XHJcbiAgICAgICAgdGhpcy5fc2lnbkRhdGFbc2lnbkluZGV4ICsgUE9TX0ZSRUVfRkxBR10gPSBTUEFDRV9GUkVFX0ZMQUc7XHJcblxyXG4gICAgICAgIHRoaXMuX3NwYWNlc0RhdGFbaV0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICB1bml0SUQ6IHVuaXRJRCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gbGFzdCBvbmUgaGFzIG5vIG5leHQgc3BhY2U7XHJcbiAgICB0aGlzLl9zaWduRGF0YVsoY29udGVudE51bSAtIDEpICogMl0gPSBQT0lOVEVSX0lOVkFMSURfRkxBRztcclxufTtcclxuXHJcbmxldCBVbml0QmFzZVByb3RvID0gVW5pdEJhc2UucHJvdG90eXBlO1xyXG5Vbml0QmFzZVByb3RvLmhhc1NwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFbMF0gIT09IFBPSU5URVJfSU5WQUxJRF9GTEFHO1xyXG59O1xyXG5cclxuVW5pdEJhc2VQcm90by5pc0FsbEZyZWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YVsxXSA9PSAwO1xyXG59O1xyXG5cclxuLy8gcG9wIHNwYWNlIGZyb20gdW5pdFxyXG5Vbml0QmFzZVByb3RvLnBvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBoZWFkRnJlZUluZGV4ID0gdGhpcy5fZGF0YVswXTtcclxuICAgIGlmIChoZWFkRnJlZUluZGV4ID09PSBQT0lOVEVSX0lOVkFMSURfRkxBRykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gaGVhZEZyZWVJbmRleDtcclxuICAgIGxldCBzaWduSW5kZXggPSBpbmRleCAqIDI7XHJcbiAgICBsZXQgc3BhY2UgPSB0aGlzLl9zcGFjZXNEYXRhW2luZGV4XTtcclxuXHJcbiAgICAvLyBzZXQgdXNlIGZsYWdcclxuICAgIHRoaXMuX3NpZ25EYXRhW3NpZ25JbmRleCArIFBPU19GUkVFX0ZMQUddID0gU1BBQ0VfVVNFX0ZMQUc7XHJcblxyXG4gICAgLy8gc3RvcmUgbmV3IG5leHQgZnJlZSBzcGFjZSBpbmRleFxyXG4gICAgdGhpcy5fZGF0YVswXSA9IHRoaXMuX3NpZ25EYXRhW3NpZ25JbmRleCArIFBPU19ORVhUX0ZSRUVdO1xyXG4gICAgLy8gYWRkIHVzaW5nIHNlZ21lbnQgbnVtXHJcbiAgICB0aGlzLl9kYXRhWzFdKys7XHJcbiAgICByZXR1cm4gc3BhY2U7XHJcbn07XHJcblxyXG4vLyBwdXNoIGJhY2sgdG8gdW5pdFxyXG5Vbml0QmFzZVByb3RvLnB1c2ggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgIGxldCBzaWduSW5kZXggPSBpbmRleCAqIDI7XHJcblxyXG4gICAgLy8gc2V0IGZyZWUgZmxhZ1xyXG4gICAgdGhpcy5fc2lnbkRhdGFbc2lnbkluZGV4ICsgUE9TX0ZSRUVfRkxBR10gPSBTUEFDRV9GUkVFX0ZMQUc7XHJcblxyXG4gICAgLy8gc3RvcmUgaGVhZCBmcmVlIGluZGV4IHRvIHRoZSBzcGFjZVxyXG4gICAgdGhpcy5fc2lnbkRhdGFbc2lnbkluZGV4ICsgUE9TX05FWFRfRlJFRV0gPSB0aGlzLl9kYXRhWzBdO1xyXG4gICAgLy8gdXBkYXRlIGhlYWQgZnJlZSBpbmRleFxyXG4gICAgdGhpcy5fZGF0YVswXSA9IGluZGV4O1xyXG4gICAgLy8gc3ViIHVzaW5nIHNlZ21lbnQgbnVtXHJcbiAgICB0aGlzLl9kYXRhWzFdLS07XHJcbn07XHJcblxyXG4vLyBkdW1wIGFsbCBzcGFjZSBpbmZvXHJcblVuaXRCYXNlUHJvdG8uZHVtcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzcGFjZU51bSA9IDA7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9kYXRhWzBdO1xyXG4gICAgbGV0IGZyZWVTdHIgPSBcIlwiO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoaW5kZXggIT0gUE9JTlRFUl9JTlZBTElEX0ZMQUcpIHtcclxuICAgICAgICBzcGFjZU51bSArKztcclxuICAgICAgICBmcmVlU3RyICs9IGluZGV4ICsgXCItPlwiO1xyXG4gICAgICAgIGluZGV4ID0gdGhpcy5fc2lnbkRhdGFbaW5kZXggKiAyICsgUE9TX05FWFRfRlJFRV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVzaW5nTnVtID0gMDtcclxuICAgIGxldCB1c2luZ1N0ciA9IFwiXCI7XHJcbiAgICBsZXQgY29udGVudE51bSA9IHRoaXMuX2NvbnRlbnROdW07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnROdW07IGkrKykge1xyXG4gICAgICAgIGxldCBmcmVlRmxhZyA9IHRoaXMuX3NpZ25EYXRhW2kgKiAyICsgUE9TX0ZSRUVfRkxBR107XHJcbiAgICAgICAgaWYgKGZyZWVGbGFnID09IFNQQUNFX1VTRV9GTEFHKSB7XHJcbiAgICAgICAgICAgIHVzaW5nTnVtICsrO1xyXG4gICAgICAgICAgICB1c2luZ1N0ciArPSBpICsgXCItPlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRvdGFsTnVtID0gc3BhY2VOdW0gKyB1c2luZ051bTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwidW5pdElEOlwiLCB0aGlzLnVuaXRJRCwgXHJcbiAgICAgICAgXCJzcGFjZU51bTpcIiwgc3BhY2VOdW0sIFxyXG4gICAgICAgIFwiY2FsYyB1c2luZyBudW06XCIsIHVzaW5nTnVtLCBcclxuICAgICAgICAnc3RvcmUgdXNpbmcgbnVtOicsIHRoaXMuX2RhdGFbMV0sIFxyXG4gICAgICAgICdjYWxjIHRvdGFsIG51bTonLCB0b3RhbE51bSwgXHJcbiAgICAgICAgJ2FjdHVhbGx5IHRvdGFsIG51bTonLCB0aGlzLl9jb250ZW50TnVtXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJmcmVlIGluZm86XCIsIGZyZWVTdHIpO1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2luZyBpbmZvOlwiLCB1c2luZ1N0cik7XHJcblxyXG4gICAgaWYgKHVzaW5nTnVtICE9IHRoaXMuX2RhdGFbMV0pIHtcclxuICAgICAgICBjYy5lcnJvcihcclxuICAgICAgICAgICAgJ3VzaW5nIG51bSBlcnJvcicsIFxyXG4gICAgICAgICAgICBcImNhbGMgdXNpbmcgbnVtOlwiLCB1c2luZ051bSwgXHJcbiAgICAgICAgICAgICdzdG9yZSB1c2luZyBudW06JywgdGhpcy5fZGF0YVsxXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwYWNlTnVtICsgdXNpbmdOdW0gIT0gdGhpcy5fY29udGVudE51bSkge1xyXG4gICAgICAgIGNjLmVycm9yKFxyXG4gICAgICAgICAgICAndG90YWwgbnVtIGVycm9yJywgXHJcbiAgICAgICAgICAgICdjYWxjIHRvdGFsIG51bTonLCB0b3RhbE51bSwgXHJcbiAgICAgICAgICAgICdhY3R1YWxseSB0b3RhbCBudW06JywgdGhpcy5fY29udGVudE51bVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRCYXNlOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/trans-pool/node-unit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e324O2RaRO7Jq7gF3lXosf', 'node-unit');
// lcc-ui-sorting-group/engine-extend/trans-pool/node-unit.js

"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var FLOAT_ARRAY_TYPE = CC_JSB && CC_NATIVERENDERER ? Float32Array : Float64Array;
var FLOAT_BYTES = CC_JSB && CC_NATIVERENDERER ? 4 : 8;
var Uint32_Bytes = 4;
var Uint8_Bytes = 1; // Space : [Dirty]                                  [Size:4 Uint32]

var Dirty_Type = Uint32Array;
var Dirty_Members = 1;
var Dirty_Stride = Dirty_Members * Uint32_Bytes; // Space : [TRS]                                    [Size:4 * 10 Float32|Float64]

var TRS_Members = 10;
var TRS_Stride = TRS_Members * FLOAT_BYTES; // Space : [LocalMatrix]                            [Size:4 * 16 Float32|Float64]

var LocalMatrix_Members = 16;
var LocalMatrix_Stride = LocalMatrix_Members * FLOAT_BYTES; // Space : [WorldMatrix]                            [Size:4 * 16 Float32|Float64]

var WorldMatrix_Members = 16;
var WorldMatrix_Stride = WorldMatrix_Members * FLOAT_BYTES; // Space : [sortingPriority]                        [Size:4 * 1 Float32|Float64]

var SortingPriority_Members = 1;
var SortingPriority_Stride = SortingPriority_Members * FLOAT_BYTES; // Space : [Parent Unit]                            [Size:4 Uint32]
// Space : [Parent Index]                           [Size:4 Uint32]

var Parent_Type = Uint32Array;
var Parent_Members = 2;
var Parent_Stride = Parent_Members * Uint32_Bytes; // Space : [ZOrder]                                 [Size:4 Uint32]

var ZOrder_Type = Uint32Array;
var ZOrder_Members = 1;
var ZOrder_Stride = ZOrder_Members * Uint32_Bytes; // Space : [CullingMask]                            [Size:4 Int32]

var CullingMask_Type = Int32Array;
var CullingMask_Members = 1;
var CullingMask_Stride = CullingMask_Members * Uint32_Bytes; // Space : [Opacity]                                [Size:1 Uint8]

var Opacity_Type = Uint8Array;
var Opacity_Members = 1;
var Opacity_Stride = Opacity_Members * Uint8_Bytes; // Space : [Is3D]                                   [Size:1 Uint8]

var Is3D_Type = Uint8Array;
var Is3D_Members = 1;
var Is3D_Stride = Is3D_Members * Uint8_Bytes; // Space : [sortingEnabled]                         [Size:1 Uint8]

var SortingEnabled_Type = Uint8Array;
var SortingEnabled_Members = 1;
var SortingEnabled_Stride = SortingEnabled_Members * Uint8_Bytes; // Space : [NodePtr]                                [Size:4 * 2 Uint32]

var Node_Type = Uint32Array;
var Node_Members = 2; // Space : [Skew]                                   [Size:4 * 2 Float32]

var Skew_Members = 2;
var Skew_Stride = Skew_Members * FLOAT_BYTES;

var UnitBase = require('./unit-base');

var NodeUnit = function NodeUnit(unitID, memPool) {
  UnitBase.call(this, unitID, memPool);
  var contentNum = this._contentNum;
  this.trsList = new FLOAT_ARRAY_TYPE(contentNum * TRS_Members);
  this.localMatList = new FLOAT_ARRAY_TYPE(contentNum * LocalMatrix_Members);
  this.worldMatList = new FLOAT_ARRAY_TYPE(contentNum * WorldMatrix_Members);

  if (CC_JSB && CC_NATIVERENDERER) {
    this.dirtyList = new Dirty_Type(contentNum * Dirty_Members);
    this.parentList = new Parent_Type(contentNum * Parent_Members);
    this.zOrderList = new ZOrder_Type(contentNum * ZOrder_Members);
    this.cullingMaskList = new CullingMask_Type(contentNum * CullingMask_Members);
    this.opacityList = new Opacity_Type(contentNum * Opacity_Members);
    this.is3DList = new Is3D_Type(contentNum * Is3D_Members);
    this.nodeList = new Node_Type(contentNum * Node_Members);
    this.skewList = new FLOAT_ARRAY_TYPE(contentNum * Skew_Members);
    this.sortingPriorityList = new FLOAT_ARRAY_TYPE(contentNum * SortingPriority_Stride);
    this.sortingEnabledList = new SortingEnabled_Type(contentNum * SortingEnabled_Stride);

    this._memPool._nativeMemPool.updateNodeData(unitID, this.dirtyList, this.trsList, this.localMatList, this.worldMatList, this.parentList, this.zOrderList, this.cullingMaskList, this.opacityList, this.is3DList, this.nodeList, this.skewList, this.sortingPriorityList, this.sortingEnabledList);
  }

  for (var i = 0; i < contentNum; i++) {
    var space = this._spacesData[i];
    space.trs = new FLOAT_ARRAY_TYPE(this.trsList.buffer, i * TRS_Stride, TRS_Members);
    space.localMat = new FLOAT_ARRAY_TYPE(this.localMatList.buffer, i * LocalMatrix_Stride, LocalMatrix_Members);
    space.worldMat = new FLOAT_ARRAY_TYPE(this.worldMatList.buffer, i * WorldMatrix_Stride, WorldMatrix_Members);

    if (CC_JSB && CC_NATIVERENDERER) {
      space.dirty = new Dirty_Type(this.dirtyList.buffer, i * Dirty_Stride, Dirty_Members);
      space.parent = new Parent_Type(this.parentList.buffer, i * Parent_Stride, Parent_Members);
      space.zOrder = new ZOrder_Type(this.zOrderList.buffer, i * ZOrder_Stride, ZOrder_Members);
      space.cullingMask = new CullingMask_Type(this.cullingMaskList.buffer, i * CullingMask_Stride, CullingMask_Members);
      space.opacity = new Opacity_Type(this.opacityList.buffer, i * Opacity_Stride, Opacity_Members);
      space.is3D = new Is3D_Type(this.is3DList.buffer, i * Is3D_Stride, Is3D_Members);
      space.skew = new FLOAT_ARRAY_TYPE(this.skewList.buffer, i * Skew_Stride, Skew_Members);
      space.sortingPriority = new FLOAT_ARRAY_TYPE(this.sortingPriorityList.buffer, i * SortingPriority_Stride, SortingPriority_Members);
      space.sortingEnabled = new SortingEnabled_Type(this.sortingEnabledList.buffer, i * SortingEnabled_Stride, SortingEnabled_Members);
    }
  }
};

(function () {
  var Super = function Super() {};

  Super.prototype = UnitBase.prototype;
  NodeUnit.prototype = new Super();
})();

module.exports = NodeUnit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXHRyYW5zLXBvb2xcXG5vZGUtdW5pdC5qcyJdLCJuYW1lcyI6WyJGTE9BVF9BUlJBWV9UWVBFIiwiQ0NfSlNCIiwiQ0NfTkFUSVZFUkVOREVSRVIiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJGTE9BVF9CWVRFUyIsIlVpbnQzMl9CeXRlcyIsIlVpbnQ4X0J5dGVzIiwiRGlydHlfVHlwZSIsIlVpbnQzMkFycmF5IiwiRGlydHlfTWVtYmVycyIsIkRpcnR5X1N0cmlkZSIsIlRSU19NZW1iZXJzIiwiVFJTX1N0cmlkZSIsIkxvY2FsTWF0cml4X01lbWJlcnMiLCJMb2NhbE1hdHJpeF9TdHJpZGUiLCJXb3JsZE1hdHJpeF9NZW1iZXJzIiwiV29ybGRNYXRyaXhfU3RyaWRlIiwiU29ydGluZ1ByaW9yaXR5X01lbWJlcnMiLCJTb3J0aW5nUHJpb3JpdHlfU3RyaWRlIiwiUGFyZW50X1R5cGUiLCJQYXJlbnRfTWVtYmVycyIsIlBhcmVudF9TdHJpZGUiLCJaT3JkZXJfVHlwZSIsIlpPcmRlcl9NZW1iZXJzIiwiWk9yZGVyX1N0cmlkZSIsIkN1bGxpbmdNYXNrX1R5cGUiLCJJbnQzMkFycmF5IiwiQ3VsbGluZ01hc2tfTWVtYmVycyIsIkN1bGxpbmdNYXNrX1N0cmlkZSIsIk9wYWNpdHlfVHlwZSIsIlVpbnQ4QXJyYXkiLCJPcGFjaXR5X01lbWJlcnMiLCJPcGFjaXR5X1N0cmlkZSIsIklzM0RfVHlwZSIsIklzM0RfTWVtYmVycyIsIklzM0RfU3RyaWRlIiwiU29ydGluZ0VuYWJsZWRfVHlwZSIsIlNvcnRpbmdFbmFibGVkX01lbWJlcnMiLCJTb3J0aW5nRW5hYmxlZF9TdHJpZGUiLCJOb2RlX1R5cGUiLCJOb2RlX01lbWJlcnMiLCJTa2V3X01lbWJlcnMiLCJTa2V3X1N0cmlkZSIsIlVuaXRCYXNlIiwicmVxdWlyZSIsIk5vZGVVbml0IiwidW5pdElEIiwibWVtUG9vbCIsImNhbGwiLCJjb250ZW50TnVtIiwiX2NvbnRlbnROdW0iLCJ0cnNMaXN0IiwibG9jYWxNYXRMaXN0Iiwid29ybGRNYXRMaXN0IiwiZGlydHlMaXN0IiwicGFyZW50TGlzdCIsInpPcmRlckxpc3QiLCJjdWxsaW5nTWFza0xpc3QiLCJvcGFjaXR5TGlzdCIsImlzM0RMaXN0Iiwibm9kZUxpc3QiLCJza2V3TGlzdCIsInNvcnRpbmdQcmlvcml0eUxpc3QiLCJzb3J0aW5nRW5hYmxlZExpc3QiLCJfbWVtUG9vbCIsIl9uYXRpdmVNZW1Qb29sIiwidXBkYXRlTm9kZURhdGEiLCJpIiwic3BhY2UiLCJfc3BhY2VzRGF0YSIsInRycyIsImJ1ZmZlciIsImxvY2FsTWF0Iiwid29ybGRNYXQiLCJkaXJ0eSIsInBhcmVudCIsInpPcmRlciIsImN1bGxpbmdNYXNrIiwib3BhY2l0eSIsImlzM0QiLCJza2V3Iiwic29ydGluZ1ByaW9yaXR5Iiwic29ydGluZ0VuYWJsZWQiLCJTdXBlciIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUlDLE1BQU0sSUFBSUMsaUJBQVgsR0FBZ0NDLFlBQWhDLEdBQStDQyxZQUF4RTtBQUNBLElBQU1DLFdBQVcsR0FBSUosTUFBTSxJQUFJQyxpQkFBWCxHQUFnQyxDQUFoQyxHQUFvQyxDQUF4RDtBQUVBLElBQU1JLFlBQVksR0FBRyxDQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxDQUFwQixFQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBR0MsV0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FBdEI7QUFDQSxJQUFNQyxZQUFZLEdBQUdELGFBQWEsR0FBR0osWUFBckMs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LENBQWhCO0FBQ0FxQyxNQUFBQSxLQUFLLENBQUNXLElBQU4sR0FBYSxJQUFJOUMsU0FBSixDQUFjLEtBQUswQixRQUFMLENBQWNZLE1BQTVCLEVBQW9DSixDQUFDLEdBQUdoQyxXQUF4QyxFQUFxREQsWUFBckQsQ0FBYjtBQUNBa0MsTUFBQUEsS0FBSyxDQUFDWSxJQUFOLEdBQWEsSUFBSWpGLGdCQUFKLENBQXFCLEtBQUs4RCxRQUFMLENBQWNVLE1BQW5DLEVBQTJDSixDQUFDLEdBQUd6QixXQUEvQyxFQUE0REQsWUFBNUQsQ0FBYjtBQUNBMkIsTUFBQUEsS0FBSyxDQUFDYSxlQUFOLEdBQXdCLElBQUlsRixnQkFBSixDQUFxQixLQUFLK0QsbUJBQUwsQ0FBeUJTLE1BQTlDLEVBQXNESixDQUFDLEdBQUdqRCxzQkFBMUQsRUFBa0ZELHVCQUFsRixDQUF4QjtBQUNBbUQsTUFBQUEsS0FBSyxDQUFDYyxjQUFOLEdBQXVCLElBQUk5QyxtQkFBSixDQUF3QixLQUFLMkIsa0JBQUwsQ0FBd0JRLE1BQWhELEVBQXdESixDQUFDLEdBQUc3QixxQkFBNUQsRUFBbUZELHNCQUFuRixDQUF2QjtBQUNIO0FBQ0o7QUFDSixDQXpERDs7QUEyREEsQ0FBQyxZQUFVO0FBQ1AsTUFBSThDLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVUsQ0FBRSxDQUF4Qjs7QUFDQUEsRUFBQUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCekMsUUFBUSxDQUFDeUMsU0FBM0I7QUFDQXZDLEVBQUFBLFFBQVEsQ0FBQ3VDLFNBQVQsR0FBcUIsSUFBSUQsS0FBSixFQUFyQjtBQUNILENBSkQ7O0FBTUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5jb25zdCBGTE9BVF9BUlJBWV9UWVBFID0gKENDX0pTQiAmJiBDQ19OQVRJVkVSRU5ERVJFUikgPyBGbG9hdDMyQXJyYXkgOiBGbG9hdDY0QXJyYXk7XHJcbmNvbnN0IEZMT0FUX0JZVEVTID0gKENDX0pTQiAmJiBDQ19OQVRJVkVSRU5ERVJFUikgPyA0IDogODtcclxuXHJcbmNvbnN0IFVpbnQzMl9CeXRlcyA9IDQ7XHJcbmNvbnN0IFVpbnQ4X0J5dGVzID0gMTtcclxuXHJcbi8vIFNwYWNlIDogW0RpcnR5XSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0IFVpbnQzMl1cclxuY29uc3QgRGlydHlfVHlwZSA9IFVpbnQzMkFycmF5O1xyXG5jb25zdCBEaXJ0eV9NZW1iZXJzID0gMTtcclxuY29uc3QgRGlydHlfU3RyaWRlID0gRGlydHlfTWVtYmVycyAqIFVpbnQzMl9CeXRlcztcclxuXHJcbi8vIFNwYWNlIDogW1RSU10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0ICogMTAgRmxvYXQzMnxGbG9hdDY0XVxyXG5jb25zdCBUUlNfTWVtYmVycyA9IDEwO1xyXG5jb25zdCBUUlNfU3RyaWRlID0gVFJTX01lbWJlcnMgKiBGTE9BVF9CWVRFUztcclxuXHJcbi8vIFNwYWNlIDogW0xvY2FsTWF0cml4XSAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0ICogMTYgRmxvYXQzMnxGbG9hdDY0XVxyXG5jb25zdCBMb2NhbE1hdHJpeF9NZW1iZXJzID0gMTY7XHJcbmNvbnN0IExvY2FsTWF0cml4X1N0cmlkZSA9IExvY2FsTWF0cml4X01lbWJlcnMgKiBGTE9BVF9CWVRFUztcclxuXHJcbi8vIFNwYWNlIDogW1dvcmxkTWF0cml4XSAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0ICogMTYgRmxvYXQzMnxGbG9hdDY0XVxyXG5jb25zdCBXb3JsZE1hdHJpeF9NZW1iZXJzID0gMTY7XHJcbmNvbnN0IFdvcmxkTWF0cml4X1N0cmlkZSA9IFdvcmxkTWF0cml4X01lbWJlcnMgKiBGTE9BVF9CWVRFUztcclxuXHJcbi8vIFNwYWNlIDogW3NvcnRpbmdQcmlvcml0eV0gICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0ICogMSBGbG9hdDMyfEZsb2F0NjRdXHJcbmNvbnN0IFNvcnRpbmdQcmlvcml0eV9NZW1iZXJzID0gMTtcclxuY29uc3QgU29ydGluZ1ByaW9yaXR5X1N0cmlkZSA9IFNvcnRpbmdQcmlvcml0eV9NZW1iZXJzICogRkxPQVRfQllURVM7XHJcblxyXG4vLyBTcGFjZSA6IFtQYXJlbnQgVW5pdF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1NpemU6NCBVaW50MzJdXHJcbi8vIFNwYWNlIDogW1BhcmVudCBJbmRleF0gICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0IFVpbnQzMl1cclxuY29uc3QgUGFyZW50X1R5cGUgPSBVaW50MzJBcnJheTtcclxuY29uc3QgUGFyZW50X01lbWJlcnMgPSAyO1xyXG5jb25zdCBQYXJlbnRfU3RyaWRlID0gUGFyZW50X01lbWJlcnMgKiBVaW50MzJfQnl0ZXM7XHJcblxyXG4vLyBTcGFjZSA6IFtaT3JkZXJdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1NpemU6NCBVaW50MzJdXHJcbmNvbnN0IFpPcmRlcl9UeXBlID0gVWludDMyQXJyYXk7XHJcbmNvbnN0IFpPcmRlcl9NZW1iZXJzID0gMTtcclxuY29uc3QgWk9yZGVyX1N0cmlkZSA9IFpPcmRlcl9NZW1iZXJzICogVWludDMyX0J5dGVzO1xyXG5cclxuLy8gU3BhY2UgOiBbQ3VsbGluZ01hc2tdICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtTaXplOjQgSW50MzJdXHJcbmNvbnN0IEN1bGxpbmdNYXNrX1R5cGUgPSBJbnQzMkFycmF5O1xyXG5jb25zdCBDdWxsaW5nTWFza19NZW1iZXJzID0gMTtcclxuY29uc3QgQ3VsbGluZ01hc2tfU3RyaWRlID0gQ3VsbGluZ01hc2tfTWVtYmVycyAqIFVpbnQzMl9CeXRlcztcclxuXHJcbi8vIFNwYWNlIDogW09wYWNpdHldICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZToxIFVpbnQ4XVxyXG5jb25zdCBPcGFjaXR5X1R5cGUgPSBVaW50OEFycmF5O1xyXG5jb25zdCBPcGFjaXR5X01lbWJlcnMgPSAxO1xyXG5jb25zdCBPcGFjaXR5X1N0cmlkZSA9IE9wYWNpdHlfTWVtYmVycyAqIFVpbnQ4X0J5dGVzO1xyXG5cclxuLy8gU3BhY2UgOiBbSXMzRF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtTaXplOjEgVWludDhdXHJcbmNvbnN0IElzM0RfVHlwZSA9IFVpbnQ4QXJyYXk7XHJcbmNvbnN0IElzM0RfTWVtYmVycyA9IDE7XHJcbmNvbnN0IElzM0RfU3RyaWRlID0gSXMzRF9NZW1iZXJzICogVWludDhfQnl0ZXM7XHJcblxyXG4vLyBTcGFjZSA6IFtzb3J0aW5nRW5hYmxlZF0gICAgICAgICAgICAgICAgICAgICAgICAgW1NpemU6MSBVaW50OF1cclxuY29uc3QgU29ydGluZ0VuYWJsZWRfVHlwZSA9IFVpbnQ4QXJyYXk7XHJcbmNvbnN0IFNvcnRpbmdFbmFibGVkX01lbWJlcnMgPSAxO1xyXG5jb25zdCBTb3J0aW5nRW5hYmxlZF9TdHJpZGUgPSBTb3J0aW5nRW5hYmxlZF9NZW1iZXJzICogVWludDhfQnl0ZXM7XHJcblxyXG4vLyBTcGFjZSA6IFtOb2RlUHRyXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1NpemU6NCAqIDIgVWludDMyXVxyXG5jb25zdCBOb2RlX1R5cGUgPSBVaW50MzJBcnJheTtcclxuY29uc3QgTm9kZV9NZW1iZXJzID0gMjtcclxuXHJcbi8vIFNwYWNlIDogW1NrZXddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbU2l6ZTo0ICogMiBGbG9hdDMyXVxyXG5jb25zdCBTa2V3X01lbWJlcnMgPSAyO1xyXG5jb25zdCBTa2V3X1N0cmlkZSA9IFNrZXdfTWVtYmVycyAqIEZMT0FUX0JZVEVTO1xyXG5cclxubGV0IFVuaXRCYXNlID0gcmVxdWlyZSgnLi91bml0LWJhc2UnKTtcclxubGV0IE5vZGVVbml0ID0gZnVuY3Rpb24gKHVuaXRJRCwgbWVtUG9vbCkge1xyXG4gICAgVW5pdEJhc2UuY2FsbCh0aGlzLCB1bml0SUQsIG1lbVBvb2wpO1xyXG5cclxuICAgIGxldCBjb250ZW50TnVtID0gdGhpcy5fY29udGVudE51bTtcclxuICAgIHRoaXMudHJzTGlzdCA9IG5ldyBGTE9BVF9BUlJBWV9UWVBFKGNvbnRlbnROdW0gKiBUUlNfTWVtYmVycyk7XHJcbiAgICB0aGlzLmxvY2FsTWF0TGlzdCA9IG5ldyBGTE9BVF9BUlJBWV9UWVBFKGNvbnRlbnROdW0gKiBMb2NhbE1hdHJpeF9NZW1iZXJzKTtcclxuICAgIHRoaXMud29ybGRNYXRMaXN0ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUoY29udGVudE51bSAqIFdvcmxkTWF0cml4X01lbWJlcnMpO1xyXG5cclxuICAgIGlmIChDQ19KU0IgJiYgQ0NfTkFUSVZFUkVOREVSRVIpIHtcclxuICAgICAgICB0aGlzLmRpcnR5TGlzdCA9IG5ldyBEaXJ0eV9UeXBlKGNvbnRlbnROdW0gKiBEaXJ0eV9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLnBhcmVudExpc3QgPSBuZXcgUGFyZW50X1R5cGUoY29udGVudE51bSAqIFBhcmVudF9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLnpPcmRlckxpc3QgPSBuZXcgWk9yZGVyX1R5cGUoY29udGVudE51bSAqIFpPcmRlcl9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLmN1bGxpbmdNYXNrTGlzdCA9IG5ldyBDdWxsaW5nTWFza19UeXBlKGNvbnRlbnROdW0gKiBDdWxsaW5nTWFza19NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHlMaXN0ID0gbmV3IE9wYWNpdHlfVHlwZShjb250ZW50TnVtICogT3BhY2l0eV9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLmlzM0RMaXN0ID0gbmV3IElzM0RfVHlwZShjb250ZW50TnVtICogSXMzRF9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLm5vZGVMaXN0ID0gbmV3IE5vZGVfVHlwZShjb250ZW50TnVtICogTm9kZV9NZW1iZXJzKTtcclxuICAgICAgICB0aGlzLnNrZXdMaXN0ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUoY29udGVudE51bSAqIFNrZXdfTWVtYmVycyk7XHJcbiAgICAgICAgdGhpcy5zb3J0aW5nUHJpb3JpdHlMaXN0ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUoY29udGVudE51bSAqIFNvcnRpbmdQcmlvcml0eV9TdHJpZGUpO1xyXG4gICAgICAgIHRoaXMuc29ydGluZ0VuYWJsZWRMaXN0ID0gbmV3IFNvcnRpbmdFbmFibGVkX1R5cGUoY29udGVudE51bSAqIFNvcnRpbmdFbmFibGVkX1N0cmlkZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX21lbVBvb2wuX25hdGl2ZU1lbVBvb2wudXBkYXRlTm9kZURhdGEoXHJcbiAgICAgICAgICAgIHVuaXRJRCxcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eUxpc3QsXHJcbiAgICAgICAgICAgIHRoaXMudHJzTGlzdCxcclxuICAgICAgICAgICAgdGhpcy5sb2NhbE1hdExpc3QsXHJcbiAgICAgICAgICAgIHRoaXMud29ybGRNYXRMaXN0LFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudExpc3QsXHJcbiAgICAgICAgICAgIHRoaXMuek9yZGVyTGlzdCxcclxuICAgICAgICAgICAgdGhpcy5jdWxsaW5nTWFza0xpc3QsXHJcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eUxpc3QsXHJcbiAgICAgICAgICAgIHRoaXMuaXMzRExpc3QsXHJcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3QsXHJcbiAgICAgICAgICAgIHRoaXMuc2tld0xpc3QsXHJcbiAgICAgICAgICAgIHRoaXMuc29ydGluZ1ByaW9yaXR5TGlzdCxcclxuICAgICAgICAgICAgdGhpcy5zb3J0aW5nRW5hYmxlZExpc3RcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudE51bTsgaSArKykge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHRoaXMuX3NwYWNlc0RhdGFbaV07XHJcblxyXG4gICAgICAgIHNwYWNlLnRycyA9IG5ldyBGTE9BVF9BUlJBWV9UWVBFKHRoaXMudHJzTGlzdC5idWZmZXIsIGkgKiBUUlNfU3RyaWRlLCBUUlNfTWVtYmVycyk7XHJcbiAgICAgICAgc3BhY2UubG9jYWxNYXQgPSBuZXcgRkxPQVRfQVJSQVlfVFlQRSh0aGlzLmxvY2FsTWF0TGlzdC5idWZmZXIsIGkgKiBMb2NhbE1hdHJpeF9TdHJpZGUsIExvY2FsTWF0cml4X01lbWJlcnMpO1xyXG4gICAgICAgIHNwYWNlLndvcmxkTWF0ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUodGhpcy53b3JsZE1hdExpc3QuYnVmZmVyLCBpICogV29ybGRNYXRyaXhfU3RyaWRlLCBXb3JsZE1hdHJpeF9NZW1iZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0pTQiAmJiBDQ19OQVRJVkVSRU5ERVJFUikge1xyXG4gICAgICAgICAgICBzcGFjZS5kaXJ0eSA9IG5ldyBEaXJ0eV9UeXBlKHRoaXMuZGlydHlMaXN0LmJ1ZmZlciwgaSAqIERpcnR5X1N0cmlkZSwgRGlydHlfTWVtYmVycyk7XHJcbiAgICAgICAgICAgIHNwYWNlLnBhcmVudCA9IG5ldyBQYXJlbnRfVHlwZSh0aGlzLnBhcmVudExpc3QuYnVmZmVyLCBpICogUGFyZW50X1N0cmlkZSwgUGFyZW50X01lbWJlcnMpO1xyXG4gICAgICAgICAgICBzcGFjZS56T3JkZXIgPSBuZXcgWk9yZGVyX1R5cGUodGhpcy56T3JkZXJMaXN0LmJ1ZmZlciwgaSAqIFpPcmRlcl9TdHJpZGUsIFpPcmRlcl9NZW1iZXJzKTtcclxuICAgICAgICAgICAgc3BhY2UuY3VsbGluZ01hc2sgPSBuZXcgQ3VsbGluZ01hc2tfVHlwZSh0aGlzLmN1bGxpbmdNYXNrTGlzdC5idWZmZXIsIGkgKiBDdWxsaW5nTWFza19TdHJpZGUsIEN1bGxpbmdNYXNrX01lbWJlcnMpO1xyXG4gICAgICAgICAgICBzcGFjZS5vcGFjaXR5ID0gbmV3IE9wYWNpdHlfVHlwZSh0aGlzLm9wYWNpdHlMaXN0LmJ1ZmZlciwgaSAqIE9wYWNpdHlfU3RyaWRlLCBPcGFjaXR5X01lbWJlcnMpO1xyXG4gICAgICAgICAgICBzcGFjZS5pczNEID0gbmV3IElzM0RfVHlwZSh0aGlzLmlzM0RMaXN0LmJ1ZmZlciwgaSAqIElzM0RfU3RyaWRlLCBJczNEX01lbWJlcnMpO1xyXG4gICAgICAgICAgICBzcGFjZS5za2V3ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUodGhpcy5za2V3TGlzdC5idWZmZXIsIGkgKiBTa2V3X1N0cmlkZSwgU2tld19NZW1iZXJzKTtcclxuICAgICAgICAgICAgc3BhY2Uuc29ydGluZ1ByaW9yaXR5ID0gbmV3IEZMT0FUX0FSUkFZX1RZUEUodGhpcy5zb3J0aW5nUHJpb3JpdHlMaXN0LmJ1ZmZlciwgaSAqIFNvcnRpbmdQcmlvcml0eV9TdHJpZGUsIFNvcnRpbmdQcmlvcml0eV9NZW1iZXJzKTtcclxuICAgICAgICAgICAgc3BhY2Uuc29ydGluZ0VuYWJsZWQgPSBuZXcgU29ydGluZ0VuYWJsZWRfVHlwZSh0aGlzLnNvcnRpbmdFbmFibGVkTGlzdC5idWZmZXIsIGkgKiBTb3J0aW5nRW5hYmxlZF9TdHJpZGUsIFNvcnRpbmdFbmFibGVkX01lbWJlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgbGV0IFN1cGVyID0gZnVuY3Rpb24oKXt9O1xyXG4gICAgU3VwZXIucHJvdG90eXBlID0gVW5pdEJhc2UucHJvdG90eXBlO1xyXG4gICAgTm9kZVVuaXQucHJvdG90eXBlID0gbmV3IFN1cGVyKCk7XHJcbn0pKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVVbml0OyJdfQ==
//------QC-SOURCE-SPLIT------
