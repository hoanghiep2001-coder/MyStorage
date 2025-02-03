"use strict";
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