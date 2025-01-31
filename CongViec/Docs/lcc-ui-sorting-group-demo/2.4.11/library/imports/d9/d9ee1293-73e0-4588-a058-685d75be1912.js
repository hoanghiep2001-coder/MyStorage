"use strict";
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