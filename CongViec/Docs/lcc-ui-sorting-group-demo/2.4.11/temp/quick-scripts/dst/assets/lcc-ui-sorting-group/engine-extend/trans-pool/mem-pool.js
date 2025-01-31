
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