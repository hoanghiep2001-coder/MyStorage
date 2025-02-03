
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerJSB.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '908f2U8uBBKHLoXjGNOOkv8', 'NeutrinoAssemblerJSB');
// NeutrinoAssemblerJSB.ts

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
var renderer = cc.renderer;
//const gfx = renderer.renderEngine.gfx;
var quadIndices = [0, 1, 3, 1, 2, 3];
var numQuadVertices = 4;
var maxQuadsInDrawCall = 512;
var maxVerticesInDrawCall = numQuadVertices * maxQuadsInDrawCall;
var maxIndicesInDrawCall = quadIndices.length * maxQuadsInDrawCall;
var NeutrinoAssembler = /** @class */ (function (_super) {
    __extends(NeutrinoAssembler, _super);
    function NeutrinoAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentVertex = 0;
        _this._renderStyleIndex = null;
        _this._worldScale = new cc.Vec3();
        return _this;
    }
    NeutrinoAssembler._checkAndCreateCurrentBuffer = function () {
        var bufIndex = NeutrinoAssembler._bufferIndex;
        if (!NeutrinoAssembler._vertexBuffers[bufIndex]) {
            NeutrinoAssembler._vertexBuffers[bufIndex] = new ArrayBuffer(NeutrinoAssembler._vertexFormat._bytes *
                maxVerticesInDrawCall);
            NeutrinoAssembler._vertexFloatBuffers[bufIndex] = new Float32Array(NeutrinoAssembler._vertexBuffers[bufIndex]);
            NeutrinoAssembler._vertexUint32Buffers[bufIndex] = new Uint32Array(NeutrinoAssembler._vertexBuffers[bufIndex]);
        }
        if (!NeutrinoAssembler._indexBuffers[bufIndex]) {
            NeutrinoAssembler._indexBuffers[bufIndex] = new Uint16Array(maxIndicesInDrawCall);
        }
    };
    NeutrinoAssembler._incBuffer = function () {
        ++NeutrinoAssembler._bufferIndex;
        NeutrinoAssembler._numBufferVertices = 0;
        NeutrinoAssembler._numBufferIndices = 0;
        NeutrinoAssembler._startBufferVertex = 0;
        NeutrinoAssembler._startBufferIndex = 0;
        NeutrinoAssembler._checkAndCreateCurrentBuffer();
    };
    NeutrinoAssembler.prototype._prepareForGeometry = function (numVertices, numIndices) {
        if (NeutrinoAssembler._numBufferVertices + numVertices == maxVerticesInDrawCall) {
            var i = 0;
        }
        if (NeutrinoAssembler._numBufferVertices + numVertices > maxVerticesInDrawCall
            || NeutrinoAssembler._numBufferIndices + numIndices > maxIndicesInDrawCall) {
            this._finishDrawCall();
            NeutrinoAssembler._incBuffer();
        }
    };
    NeutrinoAssembler.prototype._commitGeometry = function (numVertices, numIndices) {
        NeutrinoAssembler._numBufferVertices += numVertices;
        NeutrinoAssembler._numBufferIndices += numIndices;
    };
    NeutrinoAssembler._resetGeometryBuffers = function () {
        this._bufferIndex = 0;
        this._numBufferVertices = 0;
        this._numBufferIndices = 0;
        this._startBufferVertex = 0;
        this._startBufferIndex = 0;
        this._checkAndCreateCurrentBuffer();
    };
    NeutrinoAssembler.prototype._finishDrawCall = function () {
        if (NeutrinoAssembler._startBufferIndex === NeutrinoAssembler._numBufferIndices) {
            return;
        }
        var bufIndex = NeutrinoAssembler._bufferIndex;
        var subVertices = new Float32Array(NeutrinoAssembler._vertexBuffers[bufIndex], NeutrinoAssembler._startBufferVertex * NeutrinoAssembler._vertexFormat._bytes, ((NeutrinoAssembler._numBufferVertices - NeutrinoAssembler._startBufferVertex) * NeutrinoAssembler._vertexFormat._bytes) / 4);
        var subIndices = new Uint16Array(NeutrinoAssembler._indexBuffers[bufIndex].buffer, NeutrinoAssembler._startBufferIndex * 2, NeutrinoAssembler._numBufferIndices - NeutrinoAssembler._startBufferIndex);
        this.updateIAData(this._drawCallIndex, NeutrinoAssembler._vertexFormat._nativeObj, subVertices, subIndices);
        var effect = this._renderComp.materials[this._renderStyleIndex].effect;
        this.updateEffect(this._drawCallIndex, effect._nativeObj);
        NeutrinoAssembler._startBufferVertex = NeutrinoAssembler._numBufferVertices;
        NeutrinoAssembler._startBufferIndex = NeutrinoAssembler._numBufferIndices;
        ++this._drawCallIndex;
    };
    NeutrinoAssembler.prototype.updateRenderData = function (comp) {
        this.fillBuffers(comp);
        comp.node._renderFlag |= cc.RenderFlow.FLAG_UPDATE_RENDER_DATA;
    };
    NeutrinoAssembler.prototype.fillBuffers = function (comp) {
        if (!comp._neutrinoEffect || !comp.context.loaded()) {
            return;
        }
        this.reset(); // CustomAssembler.reset()
        NeutrinoAssembler._resetGeometryBuffers();
        this._drawCallIndex = 0;
        this._currentVertex = 0;
        this._renderStyleIndex = null;
        this._worldScale = comp._worldScale;
        comp._neutrinoEffect.fillGeometryBuffers([1, 0, 0], [0, 1, 0], [0, 0, -1]);
        this._finishDrawCall();
    };
    // Methods called by neutrinoEffect
    NeutrinoAssembler.prototype.initialize = function (maxNumVertices, texChannels, indices, maxNumRenderCalls) {
    };
    NeutrinoAssembler.prototype.beforeQuad = function (renderStyleIndex) {
        if (this._renderStyleIndex !== renderStyleIndex) {
            this._finishDrawCall();
            this._renderStyleIndex = renderStyleIndex;
        }
        this._prepareForGeometry(numQuadVertices, quadIndices.length);
    };
    NeutrinoAssembler.prototype.pushVertex = function (vertex) {
        var bufIndex = NeutrinoAssembler._bufferIndex;
        var floatsPerVertex = NeutrinoAssembler._vertexFormat._bytes / 4;
        var floatsBuffer = NeutrinoAssembler._vertexFloatBuffers[bufIndex];
        var uintsBuffer = NeutrinoAssembler._vertexUint32Buffers[bufIndex];
        var floatsStart = (NeutrinoAssembler._numBufferVertices + this._currentVertex) * floatsPerVertex;
        var x = vertex.position[0] * this._worldScale.x;
        var y = vertex.position[1] * this._worldScale.y;
        var z = vertex.position[2] * this._worldScale.z;
        floatsBuffer[floatsStart++] = x;
        floatsBuffer[floatsStart++] = y;
        floatsBuffer[floatsStart++] = z;
        floatsBuffer[floatsStart++] = vertex.texCoords[0][0];
        floatsBuffer[floatsStart++] = 1.0 - vertex.texCoords[0][1];
        uintsBuffer[floatsStart++] =
            (vertex.color[0]) |
                (vertex.color[1] << 8) |
                (vertex.color[2] << 16) |
                (vertex.color[3] << 24);
        ++this._currentVertex;
        if (this._currentVertex == 4) {
            var idicesBuffer = NeutrinoAssembler._indexBuffers[bufIndex];
            for (var i = 0; i < quadIndices.length; ++i) {
                idicesBuffer[NeutrinoAssembler._numBufferIndices + i] =
                    (NeutrinoAssembler._numBufferVertices - NeutrinoAssembler._startBufferVertex)
                        + quadIndices[i];
            }
            this._commitGeometry(numQuadVertices, quadIndices.length);
            this._currentVertex = 0;
        }
    };
    NeutrinoAssembler.prototype.pushRenderCall = function (rc) {
    };
    NeutrinoAssembler.prototype.cleanup = function () {
    };
    NeutrinoAssembler._vertexFormat = cc.gfx.VertexFormat.XYZ_UV_Color;
    NeutrinoAssembler._vertexBuffers = [];
    NeutrinoAssembler._vertexFloatBuffers = [];
    NeutrinoAssembler._vertexUint32Buffers = [];
    NeutrinoAssembler._indexBuffers = [];
    return NeutrinoAssembler;
}(cc.MeshRenderer.__assembler__));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXJKU0IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLEdBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNsQyx3Q0FBd0M7QUFFeEMsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztBQUMvQixJQUFNLHFCQUFxQixHQUFHLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUNuRSxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFFckU7SUFBK0MscUNBQTZCO0lBQTVFO1FBQUEscUVBZ0xDO1FBL0tHLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOztJQTZLaEMsQ0FBQztJQTlKVSw4Q0FBNEIsR0FBbkM7UUFDSSxJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLENBQUM7UUFFaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU07Z0JBQy9GLHFCQUFxQixDQUFDLENBQUM7WUFDM0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FB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QUM7WUFFL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7b0JBQ2pELENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7MEJBQzNFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsRUFBRTtJQUNqQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtJQUNBLENBQUM7SUExS00sK0JBQWEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDakQsZ0NBQWMsR0FBa0IsRUFBRSxDQUFDO0lBQ25DLHFDQUFtQixHQUFtQixFQUFFLENBQUM7SUFDekMsc0NBQW9CLEdBQWtCLEVBQUUsQ0FBQztJQUN6QywrQkFBYSxHQUFrQixFQUFFLENBQUM7SUF1SzdDLHdCQUFDO0NBaExELEFBZ0xDLENBaEw4QyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FnTDNFO2tCQWhMb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJy4vTmV1dHJpbm9Db21wb25lbnQnO1xyXG5cclxuY29uc3QgcmVuZGVyZXIgPSA8YW55PmNjLnJlbmRlcmVyO1xyXG4vL2NvbnN0IGdmeCA9IHJlbmRlcmVyLnJlbmRlckVuZ2luZS5nZng7XHJcblxyXG5jb25zdCBxdWFkSW5kaWNlcyA9IFswLCAxLCAzLCAxLCAyLCAzXTtcclxuY29uc3QgbnVtUXVhZFZlcnRpY2VzID0gNDtcclxuY29uc3QgbWF4UXVhZHNJbkRyYXdDYWxsID0gNTEyO1xyXG5jb25zdCBtYXhWZXJ0aWNlc0luRHJhd0NhbGwgPSBudW1RdWFkVmVydGljZXMgKiBtYXhRdWFkc0luRHJhd0NhbGw7XHJcbmNvbnN0IG1heEluZGljZXNJbkRyYXdDYWxsID0gcXVhZEluZGljZXMubGVuZ3RoICogbWF4UXVhZHNJbkRyYXdDYWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9Bc3NlbWJsZXIgZXh0ZW5kcyBjYy5NZXNoUmVuZGVyZXIuX19hc3NlbWJsZXJfXyB7XHJcbiAgICBfY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICBfcmVuZGVyU3R5bGVJbmRleCA9IG51bGw7XHJcbiAgICBfd29ybGRTY2FsZSA9IG5ldyBjYy5WZWMzKCk7XHJcblxyXG4gICAgc3RhdGljIF92ZXJ0ZXhGb3JtYXQgPSBjYy5nZnguVmVydGV4Rm9ybWF0LlhZWl9VVl9Db2xvcjtcclxuICAgIHN0YXRpYyBfdmVydGV4QnVmZmVyczogQXJyYXlCdWZmZXJbXSA9IFtdO1xyXG4gICAgc3RhdGljIF92ZXJ0ZXhGbG9hdEJ1ZmZlcnM6IEZsb2F0MzJBcnJheVtdID0gW107XHJcbiAgICBzdGF0aWMgX3ZlcnRleFVpbnQzMkJ1ZmZlcnM6IFVpbnQzMkFycmF5W10gPSBbXTtcclxuICAgIHN0YXRpYyBfaW5kZXhCdWZmZXJzOiBVaW50MTZBcnJheVtdID0gW107XHJcbiAgICBzdGF0aWMgX2J1ZmZlckluZGV4OiBudW1iZXI7XHJcbiAgICBzdGF0aWMgX251bUJ1ZmZlclZlcnRpY2VzOiBudW1iZXI7XHJcbiAgICBzdGF0aWMgX251bUJ1ZmZlckluZGljZXM6IG51bWJlcjtcclxuICAgIHN0YXRpYyBfc3RhcnRCdWZmZXJWZXJ0ZXg6IG51bWJlcjtcclxuICAgIHN0YXRpYyBfc3RhcnRCdWZmZXJJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIF9kcmF3Q2FsbEluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIF9jaGVja0FuZENyZWF0ZUN1cnJlbnRCdWZmZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcblxyXG4gICAgICAgIGlmICghTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEJ1ZmZlcnNbYnVmSW5kZXhdKSB7XHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhCdWZmZXJzW2J1ZkluZGV4XSA9IG5ldyBBcnJheUJ1ZmZlcihOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9ieXRlcyAqXHJcbiAgICAgICAgICAgICAgICBtYXhWZXJ0aWNlc0luRHJhd0NhbGwpO1xyXG4gICAgICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4RmxvYXRCdWZmZXJzW2J1ZkluZGV4XSA9IG5ldyBGbG9hdDMyQXJyYXkoTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEJ1ZmZlcnNbYnVmSW5kZXhdKTtcclxuICAgICAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleFVpbnQzMkJ1ZmZlcnNbYnVmSW5kZXhdID0gbmV3IFVpbnQzMkFycmF5KE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhCdWZmZXJzW2J1ZkluZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU5ldXRyaW5vQXNzZW1ibGVyLl9pbmRleEJ1ZmZlcnNbYnVmSW5kZXhdKSB7XHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9pbmRleEJ1ZmZlcnNbYnVmSW5kZXhdID0gbmV3IFVpbnQxNkFycmF5KG1heEluZGljZXNJbkRyYXdDYWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9pbmNCdWZmZXIoKSB7XHJcbiAgICAgICAgKytOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzID0gMDtcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyA9IDA7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVyVmVydGV4ID0gMDtcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX2NoZWNrQW5kQ3JlYXRlQ3VycmVudEJ1ZmZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcmVwYXJlRm9yR2VvbWV0cnkobnVtVmVydGljZXM6IG51bWJlciwgbnVtSW5kaWNlczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyArIG51bVZlcnRpY2VzID09IG1heFZlcnRpY2VzSW5EcmF3Q2FsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVyVmVydGljZXMgKyBudW1WZXJ0aWNlcyA+IG1heFZlcnRpY2VzSW5EcmF3Q2FsbFxyXG4gICAgICAgICAgICB8fCBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyArIG51bUluZGljZXMgPiBtYXhJbmRpY2VzSW5EcmF3Q2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmluaXNoRHJhd0NhbGwoKTtcclxuICAgICAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9pbmNCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbW1pdEdlb21ldHJ5KG51bVZlcnRpY2VzOiBudW1iZXIsIG51bUluZGljZXM6IG51bWJlcikge1xyXG4gICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyArPSBudW1WZXJ0aWNlcztcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyArPSBudW1JbmRpY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfcmVzZXRHZW9tZXRyeUJ1ZmZlcnMoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fYnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX251bUJ1ZmZlclZlcnRpY2VzID0gMDtcclxuICAgICAgICB0aGlzLl9udW1CdWZmZXJJbmRpY2VzID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydEJ1ZmZlclZlcnRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tBbmRDcmVhdGVDdXJyZW50QnVmZmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbmlzaERyYXdDYWxsKCkge1xyXG4gICAgICAgIGlmIChOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCA9PT0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YlZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4QnVmZmVyc1tidWZJbmRleF0sXHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlclZlcnRleCAqIE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhGb3JtYXQuX2J5dGVzLFxyXG4gICAgICAgICAgICAoKE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyAtIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlclZlcnRleCkgKiBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9ieXRlcykgLyA0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViSW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShOZXV0cmlub0Fzc2VtYmxlci5faW5kZXhCdWZmZXJzW2J1ZkluZGV4XS5idWZmZXIsIFxyXG4gICAgICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCAqIDIsXHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJJbmRpY2VzIC0gTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVySW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUlBRGF0YSh0aGlzLl9kcmF3Q2FsbEluZGV4LCBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9uYXRpdmVPYmosXHJcbiAgICAgICAgICAgIHN1YlZlcnRpY2VzLCBzdWJJbmRpY2VzKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fcmVuZGVyQ29tcC5tYXRlcmlhbHNbdGhpcy5fcmVuZGVyU3R5bGVJbmRleF0uZWZmZWN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWZmZWN0KHRoaXMuX2RyYXdDYWxsSW5kZXgsIGVmZmVjdC5fbmF0aXZlT2JqKTtcclxuXHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVyVmVydGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzO1xyXG4gICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlckluZGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXM7XHJcbiAgICAgICAgKyt0aGlzLl9kcmF3Q2FsbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlbmRlckRhdGEgKGNvbXApIHsgXHJcbiAgICAgICAgdGhpcy5maWxsQnVmZmVycyhjb21wKTtcclxuICAgICAgICBjb21wLm5vZGUuX3JlbmRlckZsYWcgfD0gY2MuUmVuZGVyRmxvdy5GTEFHX1VQREFURV9SRU5ERVJfREFUQTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCkge1xyXG4gICAgICAgIGlmICghY29tcC5fbmV1dHJpbm9FZmZlY3QgfHwgIWNvbXAuY29udGV4dC5sb2FkZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0KCk7IC8vIEN1c3RvbUFzc2VtYmxlci5yZXNldCgpXHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3Jlc2V0R2VvbWV0cnlCdWZmZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZHJhd0NhbGxJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGVJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZSA9IGNvbXAuX3dvcmxkU2NhbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tcC5fbmV1dHJpbm9FZmZlY3QuZmlsbEdlb21ldHJ5QnVmZmVycyhbMSwgMCwgMF0sIFswLCAxLCAwXSwgWzAsIDAsIC0xXSk7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoRHJhd0NhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGNhbGxlZCBieSBuZXV0cmlub0VmZmVjdFxyXG5cclxuICAgIGluaXRpYWxpemUobWF4TnVtVmVydGljZXMsIHRleENoYW5uZWxzLCBpbmRpY2VzLCBtYXhOdW1SZW5kZXJDYWxscykge1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVF1YWQocmVuZGVyU3R5bGVJbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJTdHlsZUluZGV4ICE9PSByZW5kZXJTdHlsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaERyYXdDYWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlclN0eWxlSW5kZXggPSByZW5kZXJTdHlsZUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9wcmVwYXJlRm9yR2VvbWV0cnkobnVtUXVhZFZlcnRpY2VzLCBxdWFkSW5kaWNlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hWZXJ0ZXgodmVydGV4KSB7XHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcbiAgICAgICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEZvcm1hdC5fYnl0ZXMgLyA0O1xyXG4gICAgICAgIGNvbnN0IGZsb2F0c0J1ZmZlciA9IE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhGbG9hdEJ1ZmZlcnNbYnVmSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHVpbnRzQnVmZmVyID0gTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleFVpbnQzMkJ1ZmZlcnNbYnVmSW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgZmxvYXRzU3RhcnQgPSAoTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzICsgdGhpcy5fY3VycmVudFZlcnRleCkgKiBmbG9hdHNQZXJWZXJ0ZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSB2ZXJ0ZXgucG9zaXRpb25bMF0gKiB0aGlzLl93b3JsZFNjYWxlLng7XHJcbiAgICAgICAgY29uc3QgeSA9IHZlcnRleC5wb3NpdGlvblsxXSAqIHRoaXMuX3dvcmxkU2NhbGUueTtcclxuICAgICAgICBjb25zdCB6ID0gdmVydGV4LnBvc2l0aW9uWzJdICogdGhpcy5fd29ybGRTY2FsZS56O1xyXG5cclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQrK10gPSB4O1xyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCsrXSA9IHk7XHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0KytdID0gejtcclxuXHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0KytdID0gdmVydGV4LnRleENvb3Jkc1swXVswXTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQrK10gPSAxLjAgLSB2ZXJ0ZXgudGV4Q29vcmRzWzBdWzFdO1xyXG5cclxuICAgICAgICB1aW50c0J1ZmZlcltmbG9hdHNTdGFydCsrXSA9IFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzBdKSB8XHJcbiAgICAgICAgICAgICh2ZXJ0ZXguY29sb3JbMV0gPDwgOCkgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzJdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICh2ZXJ0ZXguY29sb3JbM10gPDwgMjQpO1xyXG5cclxuICAgICAgICArK3RoaXMuX2N1cnJlbnRWZXJ0ZXg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmVydGV4ID09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWRpY2VzQnVmZmVyID0gTmV1dHJpbm9Bc3NlbWJsZXIuX2luZGV4QnVmZmVyc1tidWZJbmRleF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1YWRJbmRpY2VzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZGljZXNCdWZmZXJbTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXMgKyBpXSA9IFxyXG4gICAgICAgICAgICAgICAgICAgIChOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVyVmVydGljZXMgLSBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJWZXJ0ZXgpIFxyXG4gICAgICAgICAgICAgICAgICAgICsgcXVhZEluZGljZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEdlb21ldHJ5KG51bVF1YWRWZXJ0aWNlcywgcXVhZEluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2hSZW5kZXJDYWxsKHJjKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=