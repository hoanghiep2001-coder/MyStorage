
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9b4J96u9N86ZDPdyznPbw', 'M2048Piece');
// src/2048/M2048Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var M2048Piece = /** @class */ (function (_super) {
    __extends(M2048Piece, _super);
    function M2048Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nLabel = null;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(M2048Piece.prototype, "n", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            var color;
            var str;
            switch (value) {
                case 0:
                    str = "";
                    color = cc.Color.BLACK;
                    break;
                case 2:
                    str = "幼儿园";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 4:
                    str = "小学生";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 8:
                    str = "初中生";
                    color = new cc.Color().fromHEX("#7E5109");
                    break;
                case 16:
                    str = "高中生";
                    color = new cc.Color().fromHEX("#7D6608");
                    break;
                case 32:
                    str = "大学生";
                    color = new cc.Color().fromHEX("#186A3B");
                    break;
                case 64:
                    str = "研究生";
                    color = new cc.Color().fromHEX("#145A32");
                    break;
                case 128:
                    str = "硕士生";
                    color = new cc.Color().fromHEX("#0B5345");
                    break;
                case 256:
                    str = "博士生";
                    color = new cc.Color().fromHEX("#0E6251");
                    break;
                case 512:
                    str = "实习生";
                    color = new cc.Color().fromHEX("#1B4F72");
                    break;
                case 1024:
                    str = "码农";
                    color = new cc.Color().fromHEX("#154360");
                    break;
                case 2048:
                    str = "码神";
                    color = new cc.Color().fromHEX("#4A235A");
                    break;
                case 4096:
                    str = "女装大佬";
                    color = new cc.Color().fromHEX("#512E5F");
                    break;
                case 8192:
                    str = "众生平等";
                    color = new cc.Color().fromHEX("#78281F");
                    break;
                default:
                    str = "开挂吧你";
                    color = new cc.Color().fromHEX("#641E16");
                    break;
            }
            this.nLabel.string = str;
            this.nLabel.node.color = color;
            // this.nLabel.node.color = this.getHcolor(Math.random(),1);
        },
        enumerable: false,
        configurable: true
    });
    M2048Piece.prototype.init = function (x, y, n) {
        this.x = x;
        this.y = y;
        this.n = n;
    };
    M2048Piece.prototype.randomNumber = function () {
        this.n = Math.random() < 0.9 ? 2 : 4;
    };
    M2048Piece.prototype.getHcolor = function (top, height) {
        var oneHeight = height / 6;
        var d = 0, rgbStr;
        var r = 0, g = 0, b = 0;
        if (top < oneHeight * 1) {
            d = (top / oneHeight) * 255;
            r = 255;
            g = 0;
            b = Math.round(d);
        }
        else if (top >= oneHeight && top < 2 * oneHeight) {
            d = 255 - ((top - oneHeight) / oneHeight) * 255;
            r = Math.round(d);
            g = 0;
            b = 255;
        }
        else if (top >= 2 * oneHeight && top < 3 * oneHeight) {
            d = ((top - 2 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = Math.round(d);
            b = 255;
        }
        else if (top >= 3 * oneHeight && top < 4 * oneHeight) {
            d = 255 - ((top - 3 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = 255;
            b = Math.round(d);
        }
        else if (top >= 4 * oneHeight && top < oneHeight * 5) {
            d = ((top - oneHeight * 4) / oneHeight) * 255;
            r = Math.round(d);
            g = 255;
            b = 0;
        }
        else {
            d = 255 - ((top - oneHeight * 5) / oneHeight) * 255;
            r = 255;
            g = Math.round(d);
            b = 0;
        }
        return cc.color(r, g, b);
    };
    __decorate([
        property(cc.Label)
    ], M2048Piece.prototype, "nLabel", void 0);
    M2048Piece = __decorate([
        ccclass
    ], M2048Piece);
    return M2048Piece;
}(cc.Component));
exports.M2048Piece = M2048Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OFBpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFpSUM7UUE5SFUsWUFBTSxHQUFhLElBQUksQ0FBQztRQUl2QixRQUFFLEdBQVcsQ0FBQyxDQUFDOztJQTBIM0IsQ0FBQztJQXpIRyxzQkFBVyx5QkFBQzthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDaEIsSUFBSSxLQUFlLENBQUM7WUFDcEIsSUFBSSxHQUFXLENBQUM7WUFDaEIsUUFBUSxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNaLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ1osS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDWixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMs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QUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBaUl0QjtJQUFELGlCQUFDO0NBaklELEFBaUlDLENBakkrQixFQUFFLENBQUMsU0FBUyxHQWlJM0M7QUFqSVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE0yMDQ4UGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX246IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IG4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX247XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX24gPSB2YWx1ZTtcclxuICAgICAgICBsZXQgY29sb3I6IGNjLkNvbG9yO1xyXG4gICAgICAgIGxldCBzdHI6IHN0cmluZztcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5bm85YS/5ZutXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzg0MjEyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5bCP5a2m55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzg0MjEyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5Yid5Lit55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjN0U1MTA5XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIumrmOS4reeUn1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzdENjYwOFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLlpKflrabnlJ9cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMxODZBM0JcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CU56m255SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMTQ1QTMyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTI4OlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLnoZXlo6vnlJ9cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMwQjUzNDVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTY6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIuWNmuWjq+eUn1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzBFNjI1MVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUxMjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5a6e5Lmg55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMUI0RjcyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAyNDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CB5YacXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMTU0MzYwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CB56WeXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEEyMzVBXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA5NjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5aWz6KOF5aSn5L2sXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNTEyRTVGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODE5MjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5LyX55Sf5bmz562JXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzgyODFGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIuW8gOaMguWQp+S9oFwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzY0MUUxNlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5MYWJlbC5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgdGhpcy5uTGFiZWwubm9kZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMubkxhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmdldEhjb2xvcihNYXRoLnJhbmRvbSgpLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tTnVtYmVyKCkge1xyXG4gICAgICAgIHRoaXMubiA9IE1hdGgucmFuZG9tKCkgPCAwLjkgPyAyIDogNDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhjb2xvcih0b3A6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb25lSGVpZ2h0ID0gaGVpZ2h0IC8gNjtcclxuICAgICAgICBsZXQgZCA9IDAsIHJnYlN0cjtcclxuICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgICAgICBpZiAodG9wIDwgb25lSGVpZ2h0ICogMSkge1xyXG4gICAgICAgICAgICBkID0gKHRvcCAvIG9uZUhlaWdodCkgKiAyNTU7XHJcbiAgICAgICAgICAgIHIgPSAyNTU7XHJcbiAgICAgICAgICAgIGcgPSAwO1xyXG4gICAgICAgICAgICBiID0gTWF0aC5yb3VuZChkKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSBvbmVIZWlnaHQgJiYgdG9wIDwgMiAqIG9uZUhlaWdodCkge1xyXG4gICAgICAgICAgICBkID0gMjU1IC0gKCh0b3AgLSBvbmVIZWlnaHQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGcgPSAwO1xyXG4gICAgICAgICAgICBiID0gMjU1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG9wID49IDIgKiBvbmVIZWlnaHQgJiYgdG9wIDwgMyAqIG9uZUhlaWdodCkge1xyXG4gICAgICAgICAgICBkID0gKCh0b3AgLSAyICogb25lSGVpZ2h0KSAvIG9uZUhlaWdodCkgKiAyNTU7XHJcbiAgICAgICAgICAgIHIgPSAwO1xyXG4gICAgICAgICAgICBnID0gTWF0aC5yb3VuZChkKTtcclxuICAgICAgICAgICAgYiA9IDI1NTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSAzICogb25lSGVpZ2h0ICYmIHRvcCA8IDQgKiBvbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgZCA9IDI1NSAtICgodG9wIC0gMyAqIG9uZUhlaWdodCkgLyBvbmVIZWlnaHQpICogMjU1O1xyXG4gICAgICAgICAgICByID0gMDtcclxuICAgICAgICAgICAgZyA9IDI1NTtcclxuICAgICAgICAgICAgYiA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3AgPj0gNCAqIG9uZUhlaWdodCAmJiB0b3AgPCBvbmVIZWlnaHQgKiA1KSB7XHJcbiAgICAgICAgICAgIGQgPSAoKHRvcCAtIG9uZUhlaWdodCAqIDQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGcgPSAyNTU7XHJcbiAgICAgICAgICAgIGIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGQgPSAyNTUgLSAoKHRvcCAtIG9uZUhlaWdodCAqIDUpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IDI1NTtcclxuICAgICAgICAgICAgZyA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MuY29sb3IociwgZywgYik7XHJcbiAgICB9XHJcbn0iXX0=