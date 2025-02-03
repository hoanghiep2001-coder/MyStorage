"use strict";
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