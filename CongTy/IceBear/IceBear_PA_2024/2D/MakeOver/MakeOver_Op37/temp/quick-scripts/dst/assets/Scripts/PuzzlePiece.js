
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzlePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2602nrFPpMH5B2rclAcEKW', 'PuzzlePiece');
// Scripts/PuzzlePiece.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emxlUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBMkNDO1FBdENXLGFBQU8sR0FBaUIsSUFBSSxDQUFDOztJQXNDekMsQ0FBQztJQS9CRyxzQkFBVywwQkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQUVNLG9CQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUUsR0FBVyxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MseURBQXlEO1FBQ3pELDJDQUEyQztRQUMzQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RSx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFwQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQzswQ0FDbUM7SUFMNUIsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTJDakI7SUFBRCxZQUFDO0NBM0NELEFBMkNDLENBM0MwQixFQUFFLENBQUMsU0FBUyxHQTJDdEM7QUEzQ1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb3JpQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3JpUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyQ29sOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VyUm93OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNCbGFuazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBnZXQgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJDb2wgPT09IHRoaXMub3JpQ29sICYmIHRoaXMuY3VyUm93ID09PSB0aGlzLm9yaVJvdztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChjb2w6IG51bWJlciwgcm93OiBudW1iZXIsIGNvbE51bTogbnVtYmVyLCBjb2xXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcmlDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5vcmlSb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jdXJDb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5jdXJSb3cgPSByb3c7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgLy8gbGV0IHJlY3QgPSBzcHJpdGUuc3ByaXRlRnJhbWUuZ2V0UmVjdCgpO1xyXG4gICAgICAgIGxldCByZWN0ID0gY2MucmVjdCgwLCAwLCB0aGlzLnRleHR1cmUud2lkdGgsIHRoaXMudGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBuZXdSZWN0V2lkdGggPSByZWN0LndpZHRoIC8gY29sTnVtO1xyXG4gICAgICAgIGxldCBuZXdSZWN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQgLyBjb2xOdW07XHJcbiAgICAgICAgbGV0IG5ld1JlY3RYID0gY29sICogbmV3UmVjdFdpZHRoO1xyXG4gICAgICAgIGxldCBuZXdSZWN0WSA9IChjb2xOdW0gLSByb3cgLSAxKSAqIG5ld1JlY3RIZWlnaHQ7XHJcbiAgICAgICAgbGV0IG5ld1JlY3QgPSBjYy5yZWN0KG5ld1JlY3RYLCBuZXdSZWN0WSwgbmV3UmVjdFdpZHRoLCBuZXdSZWN0SGVpZ2h0KTtcclxuICAgICAgICAvLyBzcHJpdGUuc3ByaXRlRnJhbWUuc2V0UmVjdChuZXdSZWN0KTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlLCBuZXdSZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gY29sV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IGNvbFdpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmlzQmxhbmsgPSB0aGlzLm9yaUNvbCA9PT0gY29sTnVtIC0gMSAmJiB0aGlzLm9yaVJvdyA9PT0gMDtcclxuICAgICAgICBpZiAodGhpcy5pc0JsYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19