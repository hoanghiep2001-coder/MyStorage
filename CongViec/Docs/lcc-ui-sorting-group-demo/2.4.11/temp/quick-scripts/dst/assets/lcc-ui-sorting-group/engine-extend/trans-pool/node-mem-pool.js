
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