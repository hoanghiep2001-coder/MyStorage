
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