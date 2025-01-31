
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ff4fnZAdCwZScbk1f0GpO', 'ReversiScene');
// src/reversi/ReversiScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiScene = void 0;
var ReversiBoard_1 = require("./ReversiBoard");
var ReversiAI_1 = require("./ReversiAI");
var ReversiConstants_1 = require("./ReversiConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ReversiScene = /** @class */ (function (_super) {
    __extends(ReversiScene, _super);
    function ReversiScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.blackScoreLabel = null;
        _this.whiteScoreLabel = null;
        _this.ai = null;
        _this.state = ReversiConstants_1.NONE;
        return _this;
    }
    ReversiScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new ReversiAI_1.ReversiAI(this.board);
        this.startGame();
    };
    ReversiScene.prototype.startGame = function () {
        this.state = ReversiConstants_1.BLACK;
        this.board.reset();
        this.blackScoreLabel.string = "2";
        this.whiteScoreLabel.string = "2";
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    ReversiScene.prototype.overGame = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        if (blackPieceSum > whitePieceSum) {
            cc.log("白棋胜");
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (blackPieceSum < whitePieceSum) {
            cc.log("黑棋胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
        }
        else {
            cc.log("平局");
            G_1.G.gameRoot.showMaskMessage("你和阿尔法二狗五五开!", { label: "朕知道了", cb: function () { }, target: this });
        }
        this.state = ReversiConstants_1.NONE;
    };
    ReversiScene.prototype.updateScore = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        this.blackScoreLabel.string = blackPieceSum + "";
        this.whiteScoreLabel.string = whitePieceSum + "";
    };
    ReversiScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    ReversiScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    ReversiScene.prototype.runAi = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var coor = _this.ai.getNextCoor();
            _this.board.placeWhite(coor);
            var piece = _this.board.getPieceByCoor(coor);
            for (var dir = 1; dir <= 8; dir++) {
                if (_this.board.judgePass(ReversiConstants_1.WHITE, piece, dir)) {
                    _this.board.changePass(piece, dir);
                }
            }
            _this.updateScore();
            if (_this.board.judgeWin()) {
                _this.overGame();
            }
            else {
                if (_this.board.judgeMoveable(ReversiConstants_1.BLACK)) {
                    _this.state = ReversiConstants_1.BLACK;
                }
                else {
                    G_1.G.gameRoot.showTip("黑棋无地可下，白棋继续");
                    _this.runAi();
                }
            }
        }, 1);
    };
    ReversiScene.prototype.onBoardTouched = function (coor) {
        switch (this.state) {
            case ReversiConstants_1.NONE:
                break;
            case ReversiConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== ReversiConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                if (!this.board.canPlace(this.state, coor)) {
                    G_1.G.gameRoot.showTip("不符合规则");
                    return;
                }
                this.board.placeBlack(coor);
                piece = this.board.getPieceByCoor(coor);
                for (var dir = 1; dir <= 8; dir++) {
                    if (this.board.judgePass(ReversiConstants_1.BLACK, piece, dir)) {
                        this.board.changePass(piece, dir);
                    }
                }
                this.updateScore();
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    if (this.board.judgeMoveable(ReversiConstants_1.WHITE)) {
                        this.state = ReversiConstants_1.WHITE;
                        this.runAi();
                    }
                    else {
                        G_1.G.gameRoot.showTip("白棋无地可下，黑棋继续");
                    }
                }
                break;
            case ReversiConstants_1.WHITE:
                break;
            default: break;
        }
    };
    __decorate([
        property(ReversiBoard_1.ReversiBoard)
    ], ReversiScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "blackScoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "whiteScoreLabel", void 0);
    ReversiScene = __decorate([
        ccclass
    ], ReversiScene);
    return ReversiScene;
}(cc.Component));
exports.ReversiScene = ReversiScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMseUNBQXdDO0FBQ3hDLHVEQUF3RDtBQUN4RCwwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUEySEM7UUF6SFcsV0FBSyxHQUFpQixJQUFJLENBQUM7UUFFM0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsUUFBRSxHQUFjLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQUcsdUJBQUksQ0FBQzs7SUFrSHhCLENBQUM7SUFoSEcsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ1EsSUFBQSxLQUFtQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUEzRCxh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LElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyx3QkFBSyxDQUFDLEVBQUU7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQUssQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNoQjt5QkFBTTt3QkFDSCxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDckM7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssd0JBQUs7Z0JBRU4sTUFBTTtZQUNWLE9BQU8sQ0FBQyxDQUFDLE1BQU07U0FDbEI7SUFDTCxDQUFDO0lBdkhEO1FBREMsUUFBUSxDQUFDLDJCQUFZLENBQUM7K0NBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDc0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDc0I7SUFOaEMsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTJIeEI7SUFBRCxtQkFBQztDQTNIRCxBQTJIQyxDQTNIaUMsRUFBRSxDQUFDLFNBQVMsR0EySDdDO0FBM0hZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZXJzaUJvYXJkIH0gZnJvbSBcIi4vUmV2ZXJzaUJvYXJkXCI7XHJcbmltcG9ydCB7IFJldmVyc2lBSSB9IGZyb20gXCIuL1JldmVyc2lBSVwiO1xyXG5pbXBvcnQgeyBOT05FLCBCTEFDSywgV0hJVEUgfSBmcm9tIFwiLi9SZXZlcnNpQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNpU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFJldmVyc2lCb2FyZClcclxuICAgIHByaXZhdGUgYm9hcmQ6IFJldmVyc2lCb2FyZCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJsYWNrU2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aGl0ZVNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFpOiBSZXZlcnNpQUkgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRlID0gTk9ORTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5haSA9IG5ldyBSZXZlcnNpQUkodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEJMQUNLO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmJsYWNrU2NvcmVMYWJlbC5zdHJpbmcgPSBcIjJcIjtcclxuICAgICAgICB0aGlzLndoaXRlU2NvcmVMYWJlbC5zdHJpbmcgPSBcIjJcIjtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkvaDmmK/pu5Hmo4vkvaDlhYjotbBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckdhbWUoKSB7XHJcbiAgICAgICAgbGV0IHsgYmxhY2tQaWVjZVN1bSwgd2hpdGVQaWVjZVN1bSB9ID0gdGhpcy5ib2FyZC5nZXRQaWVjZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKGJsYWNrUGllY2VTdW0gPiB3aGl0ZVBpZWNlU3VtKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIueZveaji+iDnFwiKTtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDotaLkuobpmL/lsJTms5Xkuozni5fvvIFcIixcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyV55+l6YGT5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJsYWNrUGllY2VTdW0gPCB3aGl0ZVBpZWNlU3VtKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIum7keaji+iDnFwiKTtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDovpPnu5nkuobpmL/lsJTms5Xkuozni5fvvIFcIixcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyN5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9LFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLkuI3mnI1cIiwgY2I6ICgpID0+IHsgfSwgdGFyZ2V0OiB0aGlzIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuW5s+WxgFwiKTtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDlkozpmL/lsJTms5Xkuozni5fkupTkupTlvIAhXCIsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuacleefpemBk+S6hlwiLCBjYjogKCkgPT4geyB9LCB0YXJnZXQ6IHRoaXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBOT05FO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIGxldCB7IGJsYWNrUGllY2VTdW0sIHdoaXRlUGllY2VTdW0gfSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuYmxhY2tTY29yZUxhYmVsLnN0cmluZyA9IGJsYWNrUGllY2VTdW0gKyBcIlwiO1xyXG4gICAgICAgIHRoaXMud2hpdGVTY29yZUxhYmVsLnN0cmluZyA9IHdoaXRlUGllY2VTdW0gKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkFpKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvb3IgPSB0aGlzLmFpLmdldE5leHRDb29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VXaGl0ZShjb29yKTtcclxuICAgICAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUJ5Q29vcihjb29yKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGlyID0gMTsgZGlyIDw9IDg7IGRpcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVBhc3MoV0hJVEUsIHBpZWNlLCBkaXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5jaGFuZ2VQYXNzKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VXaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VNb3ZlYWJsZShCTEFDSykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIum7keaji+aXoOWcsOWPr+S4i++8jOeZveaji+e7p+e7rVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkFpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJvYXJkVG91Y2hlZChjb29yOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTk9ORTpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCTEFDSzpcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VCeUNvb3IoY29vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAocGllY2UuY29sb3IgIT09IE5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLov5nph4zmnInlrZDkuobvvIzkvaDmmK/kuI3mmK/lgrtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkLmNhblBsYWNlKHRoaXMuc3RhdGUsIGNvb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi5LiN56ym5ZCI6KeE5YiZXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VCbGFjayhjb29yKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUJ5Q29vcihjb29yKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRpciA9IDE7IGRpciA8PSA4OyBkaXIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlUGFzcyhCTEFDSywgcGllY2UsIGRpcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5jaGFuZ2VQYXNzKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlV2luKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlTW92ZWFibGUoV0hJVEUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXSElURTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5BaSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIueZveaji+aXoOWcsOWPr+S4i++8jOm7keaji+e7p+e7rVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBXSElURTpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=