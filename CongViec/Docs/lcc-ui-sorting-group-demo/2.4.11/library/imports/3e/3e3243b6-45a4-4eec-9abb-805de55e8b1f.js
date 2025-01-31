"use strict";
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