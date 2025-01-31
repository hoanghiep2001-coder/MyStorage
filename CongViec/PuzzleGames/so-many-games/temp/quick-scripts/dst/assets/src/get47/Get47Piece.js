
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc55f3NtT5G+KpukC6ZPkmK', 'Get47Piece');
// src/get47/Get47Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pics = [];
        _this.sprite = null;
        _this.x = 0;
        _this.y = 0;
        _this.posIndex = cc.v2();
        _this.isAlive = true;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            this.sprite.spriteFrame = this.pics[value - 1];
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y) {
        this.x = x;
        this.y = y;
        this.posIndex = this.node.position;
        this.randomType();
        this.isAlive = true;
    };
    Piece.prototype.randomType = function () {
        this.type = Math.floor(Math.random() * this.pics.length) + 1;
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Piece.prototype, "pics", void 0);
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdQaWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBK0JDO1FBNUJXLFVBQUksR0FBMEIsRUFBRSxDQUFDO1FBRWpDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFMUIsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFRLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFvQjNCLENBQUM7SUFuQkcsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1NLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFO0lBQ2hFLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dUNBQ2M7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDYTtJQUx4QixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBK0JqQjtJQUFELFlBQUM7Q0EvQkQsQUErQkMsQ0EvQjBCLEVBQUUsQ0FBQyxTQUFTLEdBK0J0QztBQS9CWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgcHJpdmF0ZSBwaWNzOiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBvc0luZGV4OiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIHB1YmxpYyBpc0FsaXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX246IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNzW3ZhbHVlIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5wb3NJbmRleCA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnJhbmRvbVR5cGUoKTtcclxuICAgICAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVR5cGUoKXtcclxuICAgICAgICB0aGlzLnR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5waWNzLmxlbmd0aCkgKyAxIDtcclxuICAgIH1cclxufSJdfQ==