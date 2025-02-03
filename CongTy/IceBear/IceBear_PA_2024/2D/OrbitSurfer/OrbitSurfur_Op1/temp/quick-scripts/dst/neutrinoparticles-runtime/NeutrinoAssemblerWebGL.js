
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerWebGL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32e92P2G2hLrY8BaVp0+NVh', 'NeutrinoAssemblerWebGL');
// NeutrinoAssemblerWebGL.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var indices = [0, 1, 3, 1, 2, 3];
var NeutrinoAssembler = /** @class */ (function (_super) {
    __extends(NeutrinoAssembler, _super);
    function NeutrinoAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initialized = false;
        _this._currentVertex = 0;
        _this._renderStyleIndex = null;
        _this._vertexFormat = cc.gfx.VertexFormat.XYZ_UV_Color;
        _this._buffer = null;
        _this._bufferOffsetInfo = null;
        _this._modelBatcher = null;
        _this._worldScale = new cc.Vec3();
        return _this;
    }
    NeutrinoAssembler.prototype.fillBuffers = function (comp, modelBatcher) {
        if (!comp._neutrinoEffect || !comp.context.loaded()) {
            return;
        }
        if (!this._initialized) {
            this._buffer = modelBatcher.getBuffer('mesh', this._vertexFormat);
            this._initialized = true;
        }
        this._modelBatcher = modelBatcher;
        this._renderStyleIndex = null;
        this._worldScale = comp._worldScale;
        comp._neutrinoEffect.fillGeometryBuffers([1, 0, 0], [0, 1, 0], [0, 0, -1]);
    };
    // Methods called by neutrinoEffect
    NeutrinoAssembler.prototype.initialize = function (maxNumVertices, texChannels, indices, maxNumRenderCalls) {
    };
    NeutrinoAssembler.prototype.beforeQuad = function (renderStyleIndex) {
        if (this._renderStyleIndex !== renderStyleIndex) {
            var material = this._renderComp.materials[renderStyleIndex];
            if (material) {
                if (material.getHash() !== this._modelBatcher.material.getHash()) {
                    this._modelBatcher._flush();
                    this._modelBatcher.material = material;
                }
            }
            this._renderStyleIndex = renderStyleIndex;
        }
        this._bufferOffsetInfo = this._buffer.request(4, indices.length);
    };
    NeutrinoAssembler.prototype.pushVertex = function (vertex) {
        var oi = this._bufferOffsetInfo;
        var floatsPerVertex = this._vertexFormat._bytes / 4;
        var buffer = this._buffer;
        var floatsBuffer = buffer._vData;
        var uintsBuffer = buffer._uintVData;
        var floatsStart = oi.byteOffset / 4 + this._currentVertex * floatsPerVertex;
        var x = vertex.position[0] * this._worldScale.x;
        var y = vertex.position[1] * this._worldScale.y;
        var z = vertex.position[2] * this._worldScale.z;
        floatsBuffer[floatsStart + 0] = x;
        floatsBuffer[floatsStart + 1] = y;
        floatsBuffer[floatsStart + 2] = z;
        floatsBuffer[floatsStart + 3] = vertex.texCoords[0][0];
        floatsBuffer[floatsStart + 4] = 1.0 - vertex.texCoords[0][1];
        uintsBuffer[floatsStart + 5] =
            (vertex.color[0]) |
                (vertex.color[1] << 8) |
                (vertex.color[2] << 16) |
                (vertex.color[3] << 24);
        ++this._currentVertex;
        if (this._currentVertex == 4) {
            var idicesBuffer = buffer._iData;
            for (var i = 0; i < indices.length; ++i) {
                idicesBuffer[oi.indiceOffset + i] = oi.vertexOffset + indices[i];
            }
            this._currentVertex = 0;
        }
    };
    NeutrinoAssembler.prototype.pushRenderCall = function (rc) {
    };
    NeutrinoAssembler.prototype.cleanup = function () {
    };
    return NeutrinoAssembler;
}(cc.Assembler));
exports.default = NeutrinoAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUE2RkM7UUE1Rkcsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG1CQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ2pELGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFxRmhDLENBQUM7SUFuRkcsdUNBQVcsR0FBWCxVQUFhLElBQUksRUFBRSxZQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJ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LEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEVBQUU7SUFDakIsQ0FBQztJQUVELG1DQUFPLEdBQVA7SUFDQSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxDQTdGOEMsRUFBRSxDQUFDLFNBQVMsR0E2RjFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJy4vTmV1dHJpbm9Db21wb25lbnQnO1xyXG5cclxuY29uc3QgaW5kaWNlcyA9IFswLCAxLCAzLCAxLCAyLCAzXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcclxuICAgIF9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgX3JlbmRlclN0eWxlSW5kZXggPSBudWxsO1xyXG4gICAgX3ZlcnRleEZvcm1hdCA9IGNjLmdmeC5WZXJ0ZXhGb3JtYXQuWFlaX1VWX0NvbG9yO1xyXG4gICAgX2J1ZmZlciA9IG51bGw7XHJcbiAgICBfYnVmZmVyT2Zmc2V0SW5mbyA9IG51bGw7XHJcbiAgICBfbW9kZWxCYXRjaGVyID0gbnVsbDtcclxuICAgIF93b3JsZFNjYWxlID0gbmV3IGNjLlZlYzMoKTtcclxuXHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCwgbW9kZWxCYXRjaGVyKSB7XHJcbiAgICAgICAgaWYgKCFjb21wLl9uZXV0cmlub0VmZmVjdCB8fCAhY29tcC5jb250ZXh0LmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gbW9kZWxCYXRjaGVyLmdldEJ1ZmZlcignbWVzaCcsIHRoaXMuX3ZlcnRleEZvcm1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlciA9IG1vZGVsQmF0Y2hlcjtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTdHlsZUluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl93b3JsZFNjYWxlID0gY29tcC5fd29ybGRTY2FsZTtcclxuICAgICAgICBcclxuICAgICAgICBjb21wLl9uZXV0cmlub0VmZmVjdC5maWxsR2VvbWV0cnlCdWZmZXJzKFsxLCAwLCAwXSwgWzAsIDEsIDBdLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGNhbGxlZCBieSBuZXV0cmlub0VmZmVjdFxyXG5cclxuICAgIGluaXRpYWxpemUobWF4TnVtVmVydGljZXMsIHRleENoYW5uZWxzLCBpbmRpY2VzLCBtYXhOdW1SZW5kZXJDYWxscykge1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVF1YWQocmVuZGVyU3R5bGVJbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJTdHlsZUluZGV4ICE9PSByZW5kZXJTdHlsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5fcmVuZGVyQ29tcC5tYXRlcmlhbHNbcmVuZGVyU3R5bGVJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmdldEhhc2goKSAhPT0gdGhpcy5fbW9kZWxCYXRjaGVyLm1hdGVyaWFsLmdldEhhc2goKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbEJhdGNoZXIubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGVJbmRleCA9IHJlbmRlclN0eWxlSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldEluZm8gPSB0aGlzLl9idWZmZXIucmVxdWVzdCg0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaFZlcnRleCh2ZXJ0ZXgpIHtcclxuICAgICAgICBjb25zdCBvaSA9IHRoaXMuX2J1ZmZlck9mZnNldEluZm87XHJcbiAgICAgICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gdGhpcy5fdmVydGV4Rm9ybWF0Ll9ieXRlcyAvIDQ7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xyXG5cclxuICAgICAgICBjb25zdCBmbG9hdHNCdWZmZXIgPSBidWZmZXIuX3ZEYXRhO1xyXG4gICAgICAgIGNvbnN0IHVpbnRzQnVmZmVyID0gYnVmZmVyLl91aW50VkRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsb2F0c1N0YXJ0ID0gb2kuYnl0ZU9mZnNldCAvIDQgKyB0aGlzLl9jdXJyZW50VmVydGV4ICogZmxvYXRzUGVyVmVydGV4O1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gdmVydGV4LnBvc2l0aW9uWzBdICogdGhpcy5fd29ybGRTY2FsZS54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB2ZXJ0ZXgucG9zaXRpb25bMV0gKiB0aGlzLl93b3JsZFNjYWxlLnk7XHJcbiAgICAgICAgY29uc3QgeiA9IHZlcnRleC5wb3NpdGlvblsyXSAqIHRoaXMuX3dvcmxkU2NhbGUuejtcclxuXHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgMF0gPSB4O1xyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDFdID0geTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyAyXSA9IHo7XHJcblxyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDNdID0gdmVydGV4LnRleENvb3Jkc1swXVswXTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyA0XSA9IDEuMCAtIHZlcnRleC50ZXhDb29yZHNbMF1bMV07XHJcblxyXG4gICAgICAgIHVpbnRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgNV0gPSBcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclswXSkgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzFdIDw8IDgpIHxcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclsyXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzNdIDw8IDI0KTtcclxuXHJcbiAgICAgICAgKyt0aGlzLl9jdXJyZW50VmVydGV4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZlcnRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkaWNlc0J1ZmZlciA9IGJ1ZmZlci5faURhdGE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlkaWNlc0J1ZmZlcltvaS5pbmRpY2VPZmZzZXQgKyBpXSA9IG9pLnZlcnRleE9mZnNldCArIGluZGljZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoUmVuZGVyQ2FsbChyYykge1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbn1cclxuIl19