
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MnieBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5dcaOV26xKp7PBWPzaeZRU', 'MnieBoard');
// src/mine/MnieBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var MinePiece_1 = require("./MinePiece");
var MineConstans_1 = require("./MineConstans");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 9;
        _this.colSpace = 9;
        _this.pressTime = 1;
        _this.colWidth = 80;
        _this.touchingPiece = null;
        _this.touchStartTime = 0;
        _this.bombNum = 0;
        _this.flagNum = 0;
        _this.mineScene = null;
        return _this;
    }
    Board.prototype.onLoad = function () {
        var _this = this;
        this.colWidth = (this.node.width - this.colSpace * (this.colNum + 1)) / this.colNum;
        this.node.removeAllChildren();
        this.pieceMap = [];
        var _loop_1 = function (x) {
            this_1.pieceMap[x] = [];
            var _loop_2 = function (y) {
                var pieceNode = cc.instantiate(this_1.piecePrefab);
                this_1.node.addChild(pieceNode);
                pieceNode.x = x * (this_1.colWidth + this_1.colSpace) + this_1.colSpace;
                pieceNode.y = y * (this_1.colWidth + this_1.colSpace) + this_1.colSpace;
                pieceNode.width = this_1.colWidth;
                pieceNode.height = this_1.colWidth;
                this_1.pieceMap[x][y] = pieceNode.getComponent(MinePiece_1.Piece);
                this_1.pieceMap[x][y].init(x, y, MineConstans_1.PIECE_TYPE.OPEN0, MineConstans_1.PIECE_STATE.OPEN);
                pieceNode.on(cc.Node.EventType.TOUCH_START, function () {
                    _this.onPieceTouchStart(_this.pieceMap[x][y]);
                }, this_1);
                pieceNode.on(cc.Node.EventType.TOUCH_END, function () {
                    _this.onPieceTouchEnd(_this.pieceMap[x][y]);
                }, this_1);
            };
            for (var y = 0; y < this_1.colNum; y++) {
                _loop_2(y);
            }
        };
        var this_1 = this;
        for (var x = 0; x < this.colNum; x++) {
            _loop_1(x);
        }
    };
    Board.prototype.init = function (mineScene) {
        this.mineScene = mineScene;
    };
    Board.prototype.onPieceTouchStart = function (piece) {
        this.touchStartTime = new Date().getTime();
        this.touchingPiece = piece;
    };
    Board.prototype.onPieceTouchEnd = function (piece) {
        var touchEndTime = new Date().getTime();
        if (touchEndTime - this.touchStartTime > this.pressTime * 1000) {
            this.mineScene.onPressPiece(piece);
        }
        else {
            this.mineScene.onClickPiece(piece);
        }
    };
    Board.prototype.openPiece = function (piece) {
        if (piece.state === MineConstans_1.PIECE_STATE.PENDING) {
            if (piece.type === MineConstans_1.PIECE_TYPE.BOMB) {
                piece.state = MineConstans_1.PIECE_STATE.OPEN;
                this.showAll();
                this.mineScene.overGame(false);
            }
            else {
                this.showBlank(piece);
                this.judgeWin();
            }
        }
    };
    Board.prototype.flagPiece = function (piece) {
        if (piece.state === MineConstans_1.PIECE_STATE.PENDING) {
            piece.state = MineConstans_1.PIECE_STATE.FLAG;
            this.flagNum--;
            if (this.flagNum === 0) {
                var isWin = this.showRest();
                this.mineScene.overGame(isWin);
            }
        }
        else if (piece.state === MineConstans_1.PIECE_STATE.FLAG) {
            piece.state = MineConstans_1.PIECE_STATE.PENDING;
            this.flagNum++;
        }
    };
    Board.prototype.getBombNum = function () {
        return this.bombNum;
    };
    Board.prototype.getFlagNum = function () {
        return this.flagNum;
    };
    Board.prototype.getMaxLevel = function () {
        return this.colNum * this.colNum - 1;
    };
    Board.prototype.judgeWin = function () {
        var openNum = 0;
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].state === MineConstans_1.PIECE_STATE.OPEN) {
                    openNum++;
                }
            }
        }
        if (openNum === Math.pow(this.colNum, 2) - this.bombNum) {
            this.mineScene.overGame(true);
        }
    };
    Board.prototype.reset = function (level) {
        this.resetBlank();
        this.resetBombs(level);
        this.resetHintsAndMask();
    };
    Board.prototype.resetBlank = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                this.pieceMap[x][y].type = MineConstans_1.PIECE_TYPE.OPEN0;
            }
        }
    };
    Board.prototype.resetBombs = function (bombNum) {
        this.bombNum = bombNum;
        this.flagNum = bombNum;
        var pieceMapIndex = [];
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                pieceMapIndex.push({ x: x, y: y });
            }
        }
        for (var n = 0; n < bombNum; n++) {
            var i = Math.random() * pieceMapIndex.length | 0;
            var piecePos = pieceMapIndex[i];
            cc.log(piecePos);
            this.pieceMap[piecePos.x][piecePos.y].type = MineConstans_1.PIECE_TYPE.BOMB;
            pieceMapIndex.splice(i, 1);
        }
    };
    Board.prototype.resetHintsAndMask = function () {
        for (var x = 0; x < this.colNum; x++) {
            var _loop_3 = function (y) {
                if (this_2.pieceMap[x][y].type !== MineConstans_1.PIECE_TYPE.BOMB) {
                    var roundPieces = this_2.getRoundPieces(x, y);
                    var roundBombs_1 = 0;
                    roundPieces.forEach(function (piece) {
                        if (piece.type === MineConstans_1.PIECE_TYPE.BOMB) {
                            roundBombs_1++;
                        }
                    });
                    this_2.pieceMap[x][y].type = roundBombs_1;
                }
                this_2.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.PENDING;
            };
            var this_2 = this;
            for (var y = 0; y < this.colNum; y++) {
                _loop_3(y);
            }
        }
    };
    Board.prototype.getRoundPieces = function (x, y) {
        var roundPieces = [];
        // left
        if (x >= 1) {
            roundPieces.push(this.pieceMap[x - 1][y]);
        }
        // left top
        if (x >= 1 && y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x - 1][y + 1]);
        }
        // top
        if (y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x][y + 1]);
        }
        // right top
        if (x <= this.colNum - 2 && y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x + 1][y + 1]);
        }
        // right
        if (x <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x + 1][y]);
        }
        // right bottom
        if (x <= this.colNum - 2 && y >= 1) {
            roundPieces.push(this.pieceMap[x + 1][y - 1]);
        }
        // bottom
        if (y >= 1) {
            roundPieces.push(this.pieceMap[x][y - 1]);
        }
        // left bottom
        if (x >= 1 && y >= 1) {
            roundPieces.push(this.pieceMap[x - 1][y - 1]);
        }
        return roundPieces;
    };
    Board.prototype.showBlank = function (piece) {
        var testPieces = [piece];
        while (testPieces.length > 0) {
            var testPiece = testPieces.pop();
            if (testPiece.type === MineConstans_1.PIECE_TYPE.OPEN0) {
                testPiece.state = MineConstans_1.PIECE_STATE.OPEN;
                var roundPieces = this.getRoundPieces(testPiece.x, testPiece.y);
                roundPieces.forEach(function (p) {
                    if (p.state === MineConstans_1.PIECE_STATE.PENDING) {
                        testPieces.push(p);
                    }
                });
            }
            else if (testPiece.type >= MineConstans_1.PIECE_TYPE.OPEN1 && testPiece.type <= MineConstans_1.PIECE_TYPE.OPEN8) {
                testPiece.state = MineConstans_1.PIECE_STATE.OPEN;
            }
        }
    };
    // 失败后显示全部格子
    Board.prototype.showAll = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                this.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.OPEN;
            }
        }
    };
    // 旗子插满后显示其他没有插旗的地方
    Board.prototype.showRest = function () {
        var isWin = true;
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].state === MineConstans_1.PIECE_STATE.PENDING) {
                    this.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.OPEN;
                    if (this.pieceMap[x][y].type === MineConstans_1.PIECE_TYPE.BOMB) {
                        isWin = false;
                    }
                }
            }
        }
        return isWin;
    };
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colSpace", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "pressTime", void 0);
    Board = __decorate([
        ccclass,
        executeInEditMode
    ], Board);
    return Board;
}(cc.Component));
exports.Board = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNbmllQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsK0NBQXlEO0FBR25ELElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBb1BDO1FBalBXLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsbUJBQWEsR0FBVSxJQUFJLENBQUM7UUFDNUIsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQW1PeEMsQ0FBQztJQWpPRyxzQkFBTSxHQUFOO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dDQUNWLENBQUM7WUFDTixPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0NBQ2IsQ0FBQztnQkFDTixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssV0FBVyxDQUFDLENB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LENBQUMsT0FBTyxDQUFDOzJDQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1c7SUFUckIsS0FBSztRQUZqQixPQUFPO1FBQ1AsaUJBQWlCO09BQ0wsS0FBSyxDQW9QakI7SUFBRCxZQUFDO0NBcFBELEFBb1BDLENBcFAwQixFQUFFLENBQUMsU0FBUyxHQW9QdEM7QUFwUFksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaWVjZSB9IGZyb20gXCIuL01pbmVQaWVjZVwiO1xyXG5pbXBvcnQgeyBQSUVDRV9UWVBFLCBQSUVDRV9TVEFURSB9IGZyb20gXCIuL01pbmVDb25zdGFuc1wiO1xyXG5pbXBvcnQgeyBNaW5lU2NlbmUgfSBmcm9tIFwiLi9NaW5lU2NlbmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgcGllY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgY29sTnVtOiBudW1iZXIgPSA5O1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGNvbFNwYWNlOiBudW1iZXIgPSA5O1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBwcmVzc1RpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xXaWR0aDogbnVtYmVyID0gODA7XHJcbiAgICBwcml2YXRlIHBpZWNlTWFwOiBBcnJheTxBcnJheTxQaWVjZT4+O1xyXG4gICAgcHJpdmF0ZSB0b3VjaGluZ1BpZWNlOiBQaWVjZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRUaW1lID0gMDtcclxuICAgIHByaXZhdGUgYm9tYk51bSA9IDA7XHJcbiAgICBwcml2YXRlIGZsYWdOdW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBtaW5lU2NlbmU6IE1pbmVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuY29sV2lkdGggPSAodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5jb2xTcGFjZSAqICh0aGlzLmNvbE51bSArIDEpKSAvIHRoaXMuY29sTnVtO1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29sTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnggPSB4ICogKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSArIHRoaXMuY29sU3BhY2U7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS53aWR0aCA9IHRoaXMuY29sV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUuaGVpZ2h0ID0gdGhpcy5jb2xXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaW5pdCh4LCB5LCBQSUVDRV9UWVBFLk9QRU4wLCBQSUVDRV9TVEFURS5PUEVOKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QaWVjZVRvdWNoU3RhcnQodGhpcy5waWVjZU1hcFt4XVt5XSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGllY2VUb3VjaEVuZCh0aGlzLnBpZWNlTWFwW3hdW3ldKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KG1pbmVTY2VuZTogTWluZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5taW5lU2NlbmUgPSBtaW5lU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBpZWNlVG91Y2hTdGFydChwaWVjZTogUGllY2UpIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy50b3VjaGluZ1BpZWNlID0gcGllY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblBpZWNlVG91Y2hFbmQocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFRpbWUgLSB0aGlzLnRvdWNoU3RhcnRUaW1lID4gdGhpcy5wcmVzc1RpbWUgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluZVNjZW5lLm9uUHJlc3NQaWVjZShwaWVjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5taW5lU2NlbmUub25DbGlja1BpZWNlKHBpZWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5QaWVjZShwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBpZiAocGllY2Uuc3RhdGUgPT09IFBJRUNFX1NUQVRFLlBFTkRJTkcpIHtcclxuICAgICAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBJRUNFX1RZUEUuQk9NQikge1xyXG4gICAgICAgICAgICAgICAgcGllY2Uuc3RhdGUgPSBQSUVDRV9TVEFURS5PUEVOO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmVTY2VuZS5vdmVyR2FtZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCbGFuayhwaWVjZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlV2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZsYWdQaWVjZShwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBpZiAocGllY2Uuc3RhdGUgPT09IFBJRUNFX1NUQVRFLlBFTkRJTkcpIHtcclxuICAgICAgICAgICAgcGllY2Uuc3RhdGUgPSBQSUVDRV9TVEFURS5GTEFHO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmxhZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzV2luID0gdGhpcy5zaG93UmVzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5lU2NlbmUub3ZlckdhbWUoaXNXaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwaWVjZS5zdGF0ZSA9PT0gUElFQ0VfU1RBVEUuRkxBRykge1xyXG4gICAgICAgICAgICBwaWVjZS5zdGF0ZSA9IFBJRUNFX1NUQVRFLlBFTkRJTkc7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ051bSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Qm9tYk51bSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib21iTnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGbGFnTnVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZsYWdOdW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbE51bSAqIHRoaXMuY29sTnVtIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGp1ZGdlV2luKCkge1xyXG4gICAgICAgIGxldCBvcGVuTnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5zdGF0ZSA9PT0gUElFQ0VfU1RBVEUuT1BFTikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5OdW0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3Blbk51bSA9PT0gdGhpcy5jb2xOdW0gKiogMiAtIHRoaXMuYm9tYk51bSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbmVTY2VuZS5vdmVyR2FtZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QmxhbmsoKTtcclxuICAgICAgICB0aGlzLnJlc2V0Qm9tYnMobGV2ZWwpO1xyXG4gICAgICAgIHRoaXMucmVzZXRIaW50c0FuZE1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QmxhbmsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS50eXBlID0gUElFQ0VfVFlQRS5PUEVOMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0Qm9tYnMoYm9tYk51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ib21iTnVtID0gYm9tYk51bTtcclxuICAgICAgICB0aGlzLmZsYWdOdW0gPSBib21iTnVtO1xyXG4gICAgICAgIGxldCBwaWVjZU1hcEluZGV4ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgcGllY2VNYXBJbmRleC5wdXNoKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGJvbWJOdW07IG4rKykge1xyXG4gICAgICAgICAgICBsZXQgaSA9IE1hdGgucmFuZG9tKCkgKiBwaWVjZU1hcEluZGV4Lmxlbmd0aCB8IDA7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZVBvcyA9IHBpZWNlTWFwSW5kZXhbaV07XHJcbiAgICAgICAgICAgIGNjLmxvZyhwaWVjZVBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMucGllY2VNYXBbcGllY2VQb3MueF1bcGllY2VQb3MueV0udHlwZSA9IFBJRUNFX1RZUEUuQk9NQjtcclxuICAgICAgICAgICAgcGllY2VNYXBJbmRleC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIaW50c0FuZE1hc2soKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0udHlwZSAhPT0gUElFQ0VfVFlQRS5CT01CKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdW5kUGllY2VzID0gdGhpcy5nZXRSb3VuZFBpZWNlcyh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm91bmRCb21icyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRQaWVjZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBJRUNFX1RZUEUuQk9NQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRCb21icysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS50eXBlID0gcm91bmRCb21icztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uc3RhdGUgPSBQSUVDRV9TVEFURS5QRU5ESU5HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Um91bmRQaWVjZXMoeCwgeSk6IEFycmF5PFBpZWNlPiB7XHJcbiAgICAgICAgbGV0IHJvdW5kUGllY2VzOiBQaWVjZVtdID0gW107XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIGlmICh4ID49IDEpIHtcclxuICAgICAgICAgICAgcm91bmRQaWVjZXMucHVzaCh0aGlzLnBpZWNlTWFwW3ggLSAxXVt5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxlZnQgdG9wXHJcbiAgICAgICAgaWYgKHggPj0gMSAmJiB5IDw9IHRoaXMuY29sTnVtIC0gMikge1xyXG4gICAgICAgICAgICByb3VuZFBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbeCAtIDFdW3kgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRvcFxyXG4gICAgICAgIGlmICh5IDw9IHRoaXMuY29sTnVtIC0gMikge1xyXG4gICAgICAgICAgICByb3VuZFBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbeF1beSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmlnaHQgdG9wXHJcbiAgICAgICAgaWYgKHggPD0gdGhpcy5jb2xOdW0gLSAyICYmIHkgPD0gdGhpcy5jb2xOdW0gLSAyKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4ICsgMV1beSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICBpZiAoeCA8PSB0aGlzLmNvbE51bSAtIDIpIHtcclxuICAgICAgICAgICAgcm91bmRQaWVjZXMucHVzaCh0aGlzLnBpZWNlTWFwW3ggKyAxXVt5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxyXG4gICAgICAgIGlmICh4IDw9IHRoaXMuY29sTnVtIC0gMiAmJiB5ID49IDEpIHtcclxuICAgICAgICAgICAgcm91bmRQaWVjZXMucHVzaCh0aGlzLnBpZWNlTWFwW3ggKyAxXVt5IC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBib3R0b21cclxuICAgICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4XVt5IC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZWZ0IGJvdHRvbVxyXG4gICAgICAgIGlmICh4ID49IDEgJiYgeSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4IC0gMV1beSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kUGllY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0JsYW5rKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGxldCB0ZXN0UGllY2VzOiBBcnJheTxQaWVjZT4gPSBbcGllY2VdO1xyXG4gICAgICAgIHdoaWxlICh0ZXN0UGllY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHRlc3RQaWVjZSA9IHRlc3RQaWVjZXMucG9wKCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0UGllY2UudHlwZSA9PT0gUElFQ0VfVFlQRS5PUEVOMCkge1xyXG4gICAgICAgICAgICAgICAgdGVzdFBpZWNlLnN0YXRlID0gUElFQ0VfU1RBVEUuT1BFTjtcclxuICAgICAgICAgICAgICAgIGxldCByb3VuZFBpZWNlcyA9IHRoaXMuZ2V0Um91bmRQaWVjZXModGVzdFBpZWNlLngsIHRlc3RQaWVjZS55KTtcclxuICAgICAgICAgICAgICAgIHJvdW5kUGllY2VzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuc3RhdGUgPT09IFBJRUNFX1NUQVRFLlBFTkRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdFBpZWNlcy5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRlc3RQaWVjZS50eXBlID49IFBJRUNFX1RZUEUuT1BFTjEgJiYgdGVzdFBpZWNlLnR5cGUgPD0gUElFQ0VfVFlQRS5PUEVOOCkge1xyXG4gICAgICAgICAgICAgICAgdGVzdFBpZWNlLnN0YXRlID0gUElFQ0VfU1RBVEUuT1BFTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDlpLHotKXlkI7mmL7npLrlhajpg6jmoLzlrZBcclxuICAgIHByaXZhdGUgc2hvd0FsbCgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLnN0YXRlID0gUElFQ0VfU1RBVEUuT1BFTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDml5flrZDmj5Lmu6HlkI7mmL7npLrlhbbku5bmsqHmnInmj5Lml5fnmoTlnLDmlrlcclxuICAgIHByaXZhdGUgc2hvd1Jlc3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGlzV2luID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5zdGF0ZSA9PT0gUElFQ0VfU1RBVEUuUEVORElORykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uc3RhdGUgPSBQSUVDRV9TVEFURS5PUEVOO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLnR5cGUgPT09IFBJRUNFX1RZUEUuQk9NQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNXaW47XHJcbiAgICB9XHJcbn0iXX0=