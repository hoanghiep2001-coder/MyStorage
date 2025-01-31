
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzlePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b1b5qWuY9FS6vyp1qWoUJ4', 'PuzzlePiece');
// src/puzzle/PuzzlePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "isRight", {
        get: function () {
            return this.curCol === this.oriCol && this.curRow === this.oriRow;
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (col, row, colNum, colWidth) {
        this.oriCol = col;
        this.oriRow = row;
        this.curCol = col;
        this.curRow = row;
        var sprite = this.node.addComponent(cc.Sprite);
        // 升级2.0后setRect失效 
        // sprite.spriteFrame = new cc.SpriteFrame(this.texture);
        // let rect = sprite.spriteFrame.getRect();
        var rect = cc.rect(0, 0, this.texture.width, this.texture.height);
        var newRectWidth = rect.width / colNum;
        var newRectHeight = rect.height / colNum;
        var newRectX = col * newRectWidth;
        var newRectY = (colNum - row - 1) * newRectHeight;
        var newRect = cc.rect(newRectX, newRectY, newRectWidth, newRectHeight);
        // sprite.spriteFrame.setRect(newRect);
        sprite.spriteFrame = new cc.SpriteFrame(this.texture, newRect);
        this.node.width = colWidth;
        this.node.height = colWidth;
        this.isBlank = this.oriCol === colNum - 1 && this.oriRow === 0;
        if (this.isBlank) {
            this.node.active = false;
        }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], Piece.prototype, "texture", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZVBpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUE0Q0M7UUF2Q1csYUFBTyxHQUFpQixJQUFJLENBQUM7O0lBdUN6QyxDQUFDO0lBaENHLHNCQUFXLDBCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRU0sb0JBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxHQUFXLEVBQUUsTUFBYyxFQUFFLFFBQWdCO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWxCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELDJDQUEyQztRQUMzQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RSx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFyQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQzswQ0FDbUM7SUFMNUIsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTRDakI7SUFBRCxZQUFDO0NBNUNELEFBNENDLENBNUMwQixFQUFFLENBQUMsU0FBUyxHQTRDdEM7QUE1Q1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb3JpQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3JpUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNCbGFuazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBnZXQgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJDb2wgPT09IHRoaXMub3JpQ29sICYmIHRoaXMuY3VyUm93ID09PSB0aGlzLm9yaVJvdztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChjb2w6IG51bWJlciwgcm93OiBudW1iZXIsIGNvbE51bTogbnVtYmVyLCBjb2xXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcmlDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5vcmlSb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jdXJDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5jdXJSb3cgPSByb3c7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8g5Y2H57qnMi4w5ZCOc2V0UmVjdOWkseaViCBcclxuICAgICAgICAvLyBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlKTtcclxuICAgICAgICAvLyBsZXQgcmVjdCA9IHNwcml0ZS5zcHJpdGVGcmFtZS5nZXRSZWN0KCk7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBjYy5yZWN0KDAsIDAsIHRoaXMudGV4dHVyZS53aWR0aCwgdGhpcy50ZXh0dXJlLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IG5ld1JlY3RXaWR0aCA9IHJlY3Qud2lkdGggLyBjb2xOdW07XHJcbiAgICAgICAgbGV0IG5ld1JlY3RIZWlnaHQgPSByZWN0LmhlaWdodCAvIGNvbE51bTtcclxuICAgICAgICBsZXQgbmV3UmVjdFggPSBjb2wgKiBuZXdSZWN0V2lkdGg7XHJcbiAgICAgICAgbGV0IG5ld1JlY3RZID0gKGNvbE51bSAtIHJvdyAtIDEpICogbmV3UmVjdEhlaWdodDtcclxuICAgICAgICBsZXQgbmV3UmVjdCA9IGNjLnJlY3QobmV3UmVjdFgsIG5ld1JlY3RZLCBuZXdSZWN0V2lkdGgsIG5ld1JlY3RIZWlnaHQpO1xyXG4gICAgICAgIC8vIHNwcml0ZS5zcHJpdGVGcmFtZS5zZXRSZWN0KG5ld1JlY3QpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleHR1cmUsIG5ld1JlY3QpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBjb2xXaWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gY29sV2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuaXNCbGFuayA9IHRoaXMub3JpQ29sID09PSBjb2xOdW0gLSAxICYmIHRoaXMub3JpUm93ID09PSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmxhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=