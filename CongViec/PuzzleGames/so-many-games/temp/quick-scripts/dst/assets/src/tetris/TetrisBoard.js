
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/tetris/TetrisBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c50e6LtA35NprKFbQ2Byit0', 'TetrisBoard');
// src/tetris/TetrisBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var TetrisPiece_1 = require("./TetrisPiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsNum = 0;
        _this.piecePrefab = null;
        _this.frameTime = 1;
        _this.isStart = false;
        _this.pastTime = 0;
        _this.rowsNum = 0;
        _this.gridWidth = 0;
        _this.player = {
            pos: cc.v2(0, 0),
            matrix: null,
            score: 0,
        };
        _this.nextBlock = "囧";
        return _this;
    }
    Board.prototype.onLoad = function () {
        this.gridWidth = this.node.width / this.colsNum;
        // this.rowsNum = this.node.height / this.gridWidth | 0;
        this.rowsNum = cc.winSize.height / this.gridWidth | 0;
        this.pieceMap = [];
        for (var y = 0; y < this.rowsNum; y++) {
            this.pieceMap[y] = [];
            for (var x = 0; x < this.colsNum; x++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.width = this.gridWidth;
                pieceNode.height = this.gridWidth;
                pieceNode.x = x * this.gridWidth + pieceNode.width / 2;
                pieceNode.y = y * this.gridWidth + pieceNode.height / 2;
                this.pieceMap[y][x] = pieceNode.getComponent(TetrisPiece_1.Piece);
            }
        }
    };
    Board.prototype.init = function (tetrisScene) {
        this.tetrisScene = tetrisScene;
    };
    Board.prototype.reset = function () {
        this.arena = this.createMatrix(this.colsNum, this.rowsNum);
        this.playerReset();
        this.clear();
        this.draw();
        this.isStart = true;
    };
    Board.prototype.stop = function () {
        this.isStart = false;
    };
    Board.prototype.clear = function () {
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum; x++) {
                this.pieceMap[y][x].hide();
            }
        }
    };
    Board.prototype.createMatrix = function (w, h) {
        var matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    };
    Board.prototype.drawMatrix = function (matrix, offset) {
        var _this = this;
        matrix.forEach(function (row, y) {
            row.forEach(function (value, x) {
                if (value !== 0) {
                    _this.pieceMap[y + offset.y][x + offset.x].show();
                }
            });
        });
    };
    Board.prototype.draw = function () {
        this.clear();
        this.drawMatrix(this.arena, cc.v2(0, 0));
        this.drawMatrix(this.player.matrix, this.player.pos);
    };
    Board.prototype.playerReset = function () {
        this.player.matrix = this.createBlock(this.nextBlock);
        this.player.pos.y = this.rowsNum - this.player.matrix.length;
        this.player.pos.x = (this.arena[0].length / 2 | 0) -
            (this.player.matrix[0].length / 2 | 0);
        if (this.collide()) {
            // this.arena.forEach(row => row.fill(0));
            this.tetrisScene.stopGame(this.player.score);
            // this.player.score = 0;
        }
        if (Math.random() < 0.01) {
            this.nextBlock = "囧";
        }
        else {
            var blocks = 'TJLOSZIX';
            this.nextBlock = blocks[blocks.length * Math.random() | 0];
        }
        this.tetrisScene.updateHint(this.nextBlock);
    };
    Board.prototype.playerDrop = function () {
        this.player.pos.y--;
        if (this.collide()) {
            this.player.pos.y++;
            this.merge();
            this.playerReset();
            this.arenaSweep();
            this.tetrisScene.updateScore(this.player.score);
        }
        this.draw();
    };
    Board.prototype.playerMove = function (offset) {
        this.player.pos.x += offset;
        if (this.collide()) {
            this.player.pos.x -= offset;
        }
        this.draw();
    };
    Board.prototype.playerRotate = function (dir) {
        var pos = this.player.pos.x;
        var offset = 1;
        this.rotate(this.player.matrix, -dir);
        while (this.collide()) {
            this.player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > this.player.matrix.length) {
                this.rotate(this.player.matrix, dir);
                this.player.pos.x = pos;
                return;
            }
        }
        this.draw();
    };
    Board.prototype.arenaSweep = function () {
        var rowCount = 1;
        outer: for (var y = 0; y < this.arena.length - 1; y++) {
            for (var x = 0; x < this.arena[y].length; x++) {
                if (this.arena[y][x] === 0) {
                    continue outer;
                }
            }
            var row = this.arena.splice(y, 1)[0].fill(0);
            this.arena.push(row);
            y--;
            this.player.score += rowCount * 10;
            rowCount *= 2;
        }
    };
    Board.prototype.collide = function () {
        var m = this.player.matrix;
        var o = this.player.pos;
        for (var y = 0; y < m.length; y++) {
            for (var x = 0; x < m[y].length; x++) {
                if (m[y][x] !== 0 &&
                    (this.arena[y + o.y] &&
                        this.arena[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    };
    Board.prototype.merge = function () {
        var _this = this;
        this.player.matrix.forEach(function (row, y) {
            row.forEach(function (value, x) {
                if (value !== 0) {
                    _this.arena[y + _this.player.pos.y][x + _this.player.pos.x] = value;
                }
            });
        });
    };
    Board.prototype.rotate = function (matrix, dir) {
        var _a;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < y; x++) {
                _a = [
                    matrix[y][x],
                    matrix[x][y]
                ], matrix[x][y] = _a[0], matrix[y][x] = _a[1];
            }
        }
        if (dir > 0) {
            matrix.forEach(function (row) { return row.reverse(); });
        }
        else {
            matrix.reverse();
        }
    };
    Board.prototype.createBlock = function (type) {
        if (type === 'I') {
            return [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ];
        }
        else if (type === 'L') {
            return [
                [0, 2, 0],
                [0, 2, 0],
                [0, 2, 2],
            ];
        }
        else if (type === 'J') {
            return [
                [0, 3, 0],
                [0, 3, 0],
                [3, 3, 0],
            ];
        }
        else if (type === 'O') {
            return [
                [4, 4],
                [4, 4],
            ];
        }
        else if (type === 'Z') {
            return [
                [5, 5, 0],
                [0, 5, 5],
                [0, 0, 0],
            ];
        }
        else if (type === 'S') {
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        }
        else if (type === 'T') {
            return [
                [0, 7, 0],
                [7, 7, 7],
                [0, 0, 0],
            ];
        }
        else if (type === 'X') {
            return [
                [1, 0, 1],
                [0, 1, 0],
                [1, 0, 1],
            ];
        }
        else if (type === '囧') {
            return [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ].reverse();
        }
    };
    Board.prototype.update = function (dt) {
        if (this.isStart) {
            this.pastTime += dt;
            if (this.pastTime >= this.frameTime) {
                this.playerDrop();
                this.pastTime = 0;
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colsNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "frameTime", void 0);
    Board = __decorate([
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx0ZXRyaXNcXFRldHJpc0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBd1JDO1FBclJXLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLFlBQU0sR0FBRztZQUNiLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDTSxlQUFTLEdBQVcsR0FBRyxDQUFDOztJQW1RcEMsQ0FBQztJQWhRRyxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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QUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNsQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNyQjtTQUNKO0lBQ0wsQ0FBQztJQW5SRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBDQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1c7SUFQckIsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQXdSakI7SUFBRCxZQUFDO0NBeFJELEFBd1JDLENBeFIwQixFQUFFLENBQUMsU0FBUyxHQXdSdEM7QUF4Ulksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaWVjZSB9IGZyb20gXCIuL1RldHJpc1BpZWNlXCI7XHJcbmltcG9ydCB7IFRldHJpc1NjZW5lIH0gZnJvbSBcIi4vVGV0cmlzU2NlbmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xzTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgcGllY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwcml2YXRlIGZyYW1lVGltZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIHRldHJpc1NjZW5lOiBUZXRyaXNTY2VuZTtcclxuICAgIHByaXZhdGUgaXNTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBwYXN0VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcm93c051bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZ3JpZFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwaWVjZU1hcDogUGllY2VbXVtdO1xyXG4gICAgcHJpdmF0ZSBhcmVuYTogbnVtYmVyW11bXTtcclxuICAgIHByaXZhdGUgcGxheWVyID0ge1xyXG4gICAgICAgIHBvczogY2MudjIoMCwgMCksXHJcbiAgICAgICAgbWF0cml4OiBudWxsLFxyXG4gICAgICAgIHNjb3JlOiAwLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgbmV4dEJsb2NrOiBzdHJpbmcgPSBcIuWbp1wiO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSB0aGlzLm5vZGUud2lkdGggLyB0aGlzLmNvbHNOdW07XHJcbiAgICAgICAgLy8gdGhpcy5yb3dzTnVtID0gdGhpcy5ub2RlLmhlaWdodCAvIHRoaXMuZ3JpZFdpZHRoIHwgMDtcclxuICAgICAgICB0aGlzLnJvd3NOdW0gPSBjYy53aW5TaXplLmhlaWdodCAvIHRoaXMuZ3JpZFdpZHRoIHwgMDtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLndpZHRoID0gdGhpcy5ncmlkV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUuaGVpZ2h0ID0gdGhpcy5ncmlkV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueCA9IHggKiB0aGlzLmdyaWRXaWR0aCArIHBpZWNlTm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiB0aGlzLmdyaWRXaWR0aCArIHBpZWNlTm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt5XVt4XSA9IHBpZWNlTm9kZS5nZXRDb21wb25lbnQoUGllY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQodGV0cmlzU2NlbmU6IFRldHJpc1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy50ZXRyaXNTY2VuZSA9IHRldHJpc1NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuYXJlbmEgPSB0aGlzLmNyZWF0ZU1hdHJpeCh0aGlzLmNvbHNOdW0sIHRoaXMucm93c051bSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhcigpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeV1beF0uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWF0cml4KHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGgtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3TWF0cml4KG1hdHJpeDogbnVtYmVyW11bXSwgb2Zmc2V0OiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeSArIG9mZnNldC55XVt4ICsgb2Zmc2V0LnhdLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdNYXRyaXgodGhpcy5hcmVuYSwgY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuZHJhd01hdHJpeCh0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4ID0gdGhpcy5jcmVhdGVCbG9jayh0aGlzLm5leHRCbG9jayk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnkgPSB0aGlzLnJvd3NOdW0gLSB0aGlzLnBsYXllci5tYXRyaXgubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy54ID0gKHRoaXMuYXJlbmFbMF0ubGVuZ3RoIC8gMiB8IDApIC1cclxuICAgICAgICAodGhpcy5wbGF5ZXIubWF0cml4WzBdLmxlbmd0aCAvIDIgfCAwKTtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5hcmVuYS5mb3JFYWNoKHJvdyA9PiByb3cuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV0cmlzU2NlbmUuc3RvcEdhbWUodGhpcy5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYXllci5zY29yZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKE1hdGgucmFuZG9tKCk8MC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRCbG9jayA9IFwi5ZunXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrcyA9ICdUSkxPU1pJWCc7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEJsb2NrID0gYmxvY2tzW2Jsb2Nrcy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpIHwgMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV0cmlzU2NlbmUudXBkYXRlSGludCh0aGlzLm5leHRCbG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRHJvcCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueS0tO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueSsrO1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyUmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5hcmVuYVN3ZWVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV0cmlzU2NlbmUudXBkYXRlU2NvcmUodGhpcy5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJNb3ZlKG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggKz0gb2Zmc2V0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllclJvdGF0ZShkaXI6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucGxheWVyLnBvcy54O1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xyXG4gICAgICAgIHRoaXMucm90YXRlKHRoaXMucGxheWVyLm1hdHJpeCwgLWRpcik7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gLShvZmZzZXQgKyAob2Zmc2V0ID4gMCA/IDEgOiAtMSkpO1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gdGhpcy5wbGF5ZXIubWF0cml4Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGUodGhpcy5wbGF5ZXIubWF0cml4LCBkaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggPSBwb3M7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJlbmFTd2VlcCgpIHtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSAxO1xyXG4gICAgICAgIG91dGVyOiBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuYXJlbmEubGVuZ3RoIC0gMTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5hcmVuYVt5XS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJlbmFbeV1beF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmFyZW5hLnNwbGljZSh5LCAxKVswXS5maWxsKDApO1xyXG4gICAgICAgICAgICB0aGlzLmFyZW5hLnB1c2gocm93KTtcclxuICAgICAgICAgICAgeS0tO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gcm93Q291bnQgKiAxMDtcclxuICAgICAgICAgICAgcm93Q291bnQgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZSgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5wbGF5ZXIubWF0cml4O1xyXG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLnBsYXllci5wb3M7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbVt5XS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1beV1beF0gIT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5hcmVuYVt5ICsgby55XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyZW5hW3kgKyBvLnldW3ggKyBvLnhdKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmVuYVt5ICsgdGhpcy5wbGF5ZXIucG9zLnldW3ggKyB0aGlzLnBsYXllci5wb3MueF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKG1hdHJpeDogbnVtYmVyW11bXSwgZGlyOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFt4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFt5XVt4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W3hdW3ldXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpciA+IDApIHtcclxuICAgICAgICAgICAgbWF0cml4LmZvckVhY2gocm93ID0+IHJvdy5yZXZlcnNlKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdHJpeC5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQmxvY2sodHlwZTogc3RyaW5nKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdJJykge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0wnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMl0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFswLCAzLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAzLCAwXSxcclxuICAgICAgICAgICAgICAgIFszLCAzLCAwXSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdPJykge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzQsIDRdLFxyXG4gICAgICAgICAgICAgICAgWzQsIDRdLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1onKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbNSwgNSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFswLCA2LCA2XSxcclxuICAgICAgICAgICAgICAgIFs2LCA2LCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdUJykge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzAsIDcsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzcsIDcsIDddLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiggdHlwZSA9PT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsMSwwXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMV0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICflm6cnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDEsMCwxLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDEsMCwxLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIF0ucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXN0VGltZSArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzdFRpbWUgPj0gdGhpcy5mcmFtZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19