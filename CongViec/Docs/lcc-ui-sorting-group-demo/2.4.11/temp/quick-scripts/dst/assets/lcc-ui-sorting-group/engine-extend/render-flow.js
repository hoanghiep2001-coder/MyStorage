
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