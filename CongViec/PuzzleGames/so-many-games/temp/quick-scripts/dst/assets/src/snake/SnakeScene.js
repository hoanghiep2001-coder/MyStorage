
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b466sS/aBAA5gHjzWJtbJX', 'SnakeScene');
// src/snake/SnakeScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeScene = void 0;
var SnakeBoard_1 = require("./SnakeBoard");
var SnakeConstants_1 = require("./SnakeConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SnakeScene = /** @class */ (function (_super) {
    __extends(SnakeScene, _super);
    function SnakeScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.board = null;
        _this.score = 0;
        return _this;
    }
    SnakeScene.prototype.start = function () {
        var _this = this;
        this.board.init(this);
        G_1.G.gameRoot.showTip("四方向手势滑动");
        this.startGame();
        /**
         * 手势，键盘，按钮操作
         */
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var startPos = event.getStartLocation();
            var endPos = event.getLocation();
            var offsetX = endPos.x - startPos.x;
            var offsetY = endPos.y - startPos.y;
            if (Math.abs(offsetX) > Math.abs(offsetY)) {
                if (offsetX > 0) {
                    _this.onBtnRight();
                }
                else {
                    _this.onBtnLeft();
                }
            }
            else {
                if (offsetY > 0) {
                    _this.onBtnUp();
                }
                else {
                    _this.onBtnDown();
                }
            }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.left:
                case cc.KEY.a:
                    _this.onBtnLeft();
                    break;
                case cc.KEY.right:
                case cc.KEY.d:
                    _this.onBtnRight();
                    break;
                case cc.KEY.up:
                case cc.KEY.w:
                    _this.onBtnUp();
                    break;
                case cc.KEY.down:
                case cc.KEY.s:
                    _this.onBtnDown();
                    break;
            }
        }, this);
    };
    SnakeScene.prototype.startGame = function () {
        this.score = 0;
        this.scoreLabel.string = this.score + "";
        this.board.startGame();
    };
    SnakeScene.prototype.overGame = function () {
        G_1.G.gameRoot.showMaskMessage("你吃了" + this.score + "坨", { label: "厉害了" });
    };
    SnakeScene.prototype.onEatFood = function () {
        this.score += 1;
        this.scoreLabel.string = this.score + "";
        this.board.addFood();
        var level = this.score / 10 | 0;
        this.board.updateLevel(level);
    };
    SnakeScene.prototype.onBtnLeft = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.LEFT);
    };
    SnakeScene.prototype.onBtnRight = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.RIGHT);
    };
    SnakeScene.prototype.onBtnUp = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.UP);
    };
    SnakeScene.prototype.onBtnDown = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.DOWN);
    };
    SnakeScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    SnakeScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    __decorate([
        property(cc.Label)
    ], SnakeScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(SnakeBoard_1.default)
    ], SnakeScene.prototype, "board", void 0);
    SnakeScene = __decorate([
        ccclass
    ], SnakeScene);
    return SnakeScene;
}(cc.Component));
exports.SnakeScene = SnakeScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpQztBQUNqQyxtREFBNkM7QUFDN0MsMEJBQXlCO0FBRW5CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBbUdDO1FBaEdHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFWixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQTRGdEIsQ0FBQztJQTFGRywwQkFBSyxHQUFMO1FBQUEsaUJBOENDO1FBN0NHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQjs7V0FFRztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQWU7WUFDdEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtvQkFDYixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDcEI7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0o7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO1lBQ3ZELFFBQVMsS0FBYSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsTUFBTTtnQkFDVixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixNQUFNO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsTUFBTTthQUNiO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxLQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDBCQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTlGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLG9CQUFLLENBQUM7NkNBQ0k7SUFMWCxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBbUd0QjtJQUFELGlCQUFDO0NBbkdELEFBbUdDLENBbkcrQixFQUFFLENBQUMsU0FBUyxHQW1HM0M7QUFuR1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vU25ha2VCb2FyZFwiO1xyXG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi9TbmFrZUNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFNuYWtlU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb2FyZClcclxuICAgIGJvYXJkOiBCb2FyZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZSA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLlm5vmlrnlkJHmiYvlir/mu5HliqhcIik7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmiYvlir/vvIzplK7nm5jvvIzmjInpkq7mk43kvZxcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IGVuZFBvcy55IC0gc3RhcnRQb3MueTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFgpID4gTWF0aC5hYnMob2Zmc2V0WSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKChldmVudCBhcyBhbnkpLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5MZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJHYW1lKCkge1xyXG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g5ZCD5LqGXCIgKyB0aGlzLnNjb3JlICsgXCLlnahcIiwgeyBsYWJlbDogXCLljonlrrPkuoZcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRWF0Rm9vZCgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlKz0xO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkLmFkZEZvb2QoKTtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLnNjb3JlIC8gMTAgfCAwO1xyXG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlTGV2ZWwobGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuTGVmdCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uTEVGVCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5SaWdodCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuVXAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC50dXJuU25ha2UoRElSRUNUSU9OLlVQKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC50dXJuU25ha2UoRElSRUNUSU9OLkRPV04pOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdG5SZXN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==