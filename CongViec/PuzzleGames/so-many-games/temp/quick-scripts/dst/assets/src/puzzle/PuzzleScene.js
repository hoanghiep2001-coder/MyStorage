
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzleScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c06b53OK21HfoqRmsnlNUNX', 'PuzzleScene');
// src/puzzle/PuzzleScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PuzzleScene = void 0;
var PuzzleConstants_1 = require("./PuzzleConstants");
var PuzzleBoard_1 = require("./PuzzleBoard");
var G_1 = require("../G");
var Timer_1 = require("../shared/Timer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PuzzleScene = /** @class */ (function (_super) {
    __extends(PuzzleScene, _super);
    function PuzzleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.timer = null;
        _this.winPanel = null;
        _this.level = 3;
        _this.state = PuzzleConstants_1.STATE.NONE;
        return _this;
    }
    PuzzleScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    PuzzleScene.prototype.startGame = function () {
        this.winPanel.active = false;
        this.state = PuzzleConstants_1.STATE.START;
        this.board.reset(this.level);
        this.timer.reset();
        this.timer.run();
    };
    PuzzleScene.prototype.overGame = function () {
        this.winPanel.active = true;
        this.state = PuzzleConstants_1.STATE.OVER;
        this.timer.stop();
        G_1.G.gameRoot.showMaskMessage("你坚持了" + this.timer.time.toFixed(1) + "秒", { label: "呵呵" });
    };
    PuzzleScene.prototype.onBoardTouch = function (x, y) {
        if (this.state = PuzzleConstants_1.STATE.START) {
            var isMove = this.board.movePiece(x, y);
            if (!isMove) {
                G_1.G.gameRoot.showTip("不符合规则");
            }
            else {
                if (this.board.judgeWin()) {
                    this.overGame();
                }
            }
        }
    };
    PuzzleScene.prototype.onBtnLevelEasy = function () {
        this.level = 3;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelNormal = function () {
        this.level = 5;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelHard = function () {
        this.level = 10;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    PuzzleScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    PuzzleScene.prototype.addListeners = function () {
    };
    PuzzleScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(PuzzleBoard_1.PuzzleBoard)
    ], PuzzleScene.prototype, "board", void 0);
    __decorate([
        property(Timer_1.Timer)
    ], PuzzleScene.prototype, "timer", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "winPanel", void 0);
    PuzzleScene = __decorate([
        ccclass
    ], PuzzleScene);
    return PuzzleScene;
}(cc.Component));
exports.PuzzleScene = PuzzleScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQTBDO0FBQzFDLDZDQUE0QztBQUM1QywwQkFBeUI7QUFDekIseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNkVDO1FBMUVXLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQUssR0FBVSx1QkFBSyxDQUFDLElBQUksQ0FBQzs7SUFtRXJDLENBQUM7SUFqRUcsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sOEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLENBQVMsRUFBRSxDQUFTO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sa0NBQVksR0FBcEI7SUFFQSxDQUFDO0lBRU8scUNBQWUsR0FBdkI7SUFFQSxDQUFDO0lBeEVEO1FBREMsUUFBUSxDQUFDLHlCQUFXLENBQUM7OENBQ1k7SUFFbEM7UUFEQyxRQUFRLENBQUMsYUFBSyxDQUFDOzhDQUNZO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2U7SUFQeEIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQTZFdkI7SUFBRCxrQkFBQztDQTdFRCxBQTZFQyxDQTdFZ0MsRUFBRSxDQUFDLFNBQVMsR0E2RTVDO0FBN0VZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi9QdXp6bGVDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgUHV6emxlQm9hcmQgfSBmcm9tIFwiLi9QdXp6bGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dcIjtcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vc2hhcmVkL1RpbWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFB1enpsZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUHV6emxlQm9hcmQpXHJcbiAgICBwcml2YXRlIGJvYXJkOiBQdXp6bGVCb2FyZCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoVGltZXIpXHJcbiAgICBwcml2YXRlIHRpbWVyOiBUaW1lciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgd2luUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMud2luUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQodGhpcy5sZXZlbCk7XHJcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudGltZXIucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvdmVyR2FtZSgpIHtcclxuICAgICAgICB0aGlzLndpblBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKCk7XHJcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDlnZrmjIHkuoZcIiArIHRoaXMudGltZXIudGltZS50b0ZpeGVkKDEpICsgXCLnp5JcIiwgeyBsYWJlbDogXCLlkbXlkbVcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Cb2FyZFRvdWNoKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICBsZXQgaXNNb3ZlID0gdGhpcy5ib2FyZC5tb3ZlUGllY2UoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmICghaXNNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkuI3nrKblkIjop4TliJlcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVdpbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJ0bkxldmVsRWFzeSgpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gMztcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJ0bkxldmVsTm9ybWFsKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSA1O1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnRuTGV2ZWxIYXJkKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxMDtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==