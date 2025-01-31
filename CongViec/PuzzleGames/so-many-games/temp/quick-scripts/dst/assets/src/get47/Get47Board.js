
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e746t6FElNd7L0fGocCm7k', 'Get47Board');
// src/get47/Get47Board.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Get47Board = void 0;
var Get47Piece_1 = require("./Get47Piece");
var Get47Constants_1 = require("./Get47Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Get47Board = /** @class */ (function (_super) {
    __extends(Get47Board, _super);
    function Get47Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsNum = 7;
        _this.rowsNum = 7;
        _this.padding = 5;
        _this.spacing = 5;
        _this.piecePrefab = null;
        _this.get47Scene = null;
        _this.runningAction = false;
        _this.score = 0;
        _this.inputDir = 0; // 手机倾斜方向，1向右分数相加，-1向左分数相减
        return _this;
    }
    Get47Board.prototype.init = function (get47Scene) {
        this.get47Scene = get47Scene;
        this.pieceWidth = (this.node.width - this.padding * 2 - this.spacing * (this.colsNum - 1)) / this.colsNum;
    };
    Get47Board.prototype.reset = function () {
        this.node.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colsNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.width = this.pieceWidth;
                pieceNode.height = this.pieceWidth;
                pieceNode.position = cc.v2(this.padding + x * (this.pieceWidth + this.spacing), this.padding + y * (this.pieceWidth + this.spacing));
                var piece = pieceNode.getComponent(Get47Piece_1.Piece);
                piece.init(x, y);
                this.addTouchEvent(piece);
                this.pieceMap[x][y] = piece;
            }
        }
        this.deletePieces();
    };
    Get47Board.prototype.addTouchEvent = function (piece) {
        var _this = this;
        var f = function (e) {
            if (_this.runningAction) {
                return;
            }
            var p1 = e.getStartLocation();
            var p2 = e.getLocation();
            var dir;
            if (Math.abs(p2.x - p1.x) > Math.abs(p2.y - p1.y)) {
                if (p2.x > p1.x) {
                    dir = Get47Constants_1.DIR.RIGHT;
                }
                else {
                    dir = Get47Constants_1.DIR.LEFT;
                }
            }
            else {
                if (p2.y > p1.y) {
                    dir = Get47Constants_1.DIR.UP;
                }
                else {
                    dir = Get47Constants_1.DIR.DOWN;
                }
            }
            _this.inputDir = 0;
            _this.get47Scene.onPieceTouch(piece, dir);
        };
        piece.node.on(cc.Node.EventType.TOUCH_END, f, this);
        piece.node.on(cc.Node.EventType.TOUCH_CANCEL, f, this);
    };
    Get47Board.prototype.tryExchange = function (piece, dir) {
        var _this = this;
        var neighborPiece = this.getNeighborPiece(piece, dir);
        if (neighborPiece === null) {
            return;
        }
        this.runningAction = true;
        this.exchangeTwoPiecesState(piece, neighborPiece);
        var hLines = this.getHorizontalLines();
        var vLines = this.getVerticalLines();
        if (hLines.length + vLines.length > 0) {
            this.exchangeTwoPiecesPosIndex(piece, neighborPiece);
            var finished_1 = 0;
            var total_1 = 2;
            var self = this;
            var action1 = cc.sequence(cc.moveTo(0.15, piece.posIndex), cc.callFunc(function () {
                finished_1++;
                if (finished_1 === total_1) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            var action2 = cc.sequence(cc.moveTo(0.15, neighborPiece.posIndex), cc.callFunc(function () {
                finished_1++;
                if (finished_1 === total_1) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            piece.node.runAction(action1);
            neighborPiece.node.runAction(action2);
        }
        else {
            this.exchangeTwoPiecesState(piece, neighborPiece);
            var finished_2 = 0;
            var total_2 = 2;
            var tilePos = piece.node.position;
            var neighborTilePos = neighborPiece.node.position;
            var action1 = cc.sequence(cc.moveTo(0.1, neighborTilePos), cc.moveTo(0.1, tilePos), cc.callFunc(function () {
                finished_2++;
                if (finished_2 === total_2) {
                    _this.runningAction = false;
                }
            }));
            var action2 = cc.sequence(cc.moveTo(0.1, tilePos), cc.moveTo(0.1, neighborTilePos), cc.callFunc(function () {
                finished_2++;
                if (finished_2 === total_2) {
                    _this.runningAction = false;
                }
            }));
            piece.node.runAction(action1);
            neighborPiece.node.runAction(action2);
        }
    };
    Get47Board.prototype.exchangeTwoPiecesState = function (piece1, piece2) {
        var _a, _b;
        this.pieceMap[piece1.x][piece1.y] = piece2;
        this.pieceMap[piece2.x][piece2.y] = piece1;
        _a = [piece2.x, piece1.x], piece1.x = _a[0], piece2.x = _a[1];
        _b = [piece2.y, piece1.y], piece1.y = _b[0], piece2.y = _b[1];
    };
    Get47Board.prototype.exchangeTwoPiecesPosIndex = function (piece1, piece2) {
        var _a;
        _a = [piece2.posIndex, piece1.posIndex], piece1.posIndex = _a[0], piece2.posIndex = _a[1];
    };
    Get47Board.prototype.deletePieces = function () {
        var _this = this;
        this.runningAction = true;
        var hLines = this.getHorizontalLines();
        var vLines = this.getVerticalLines();
        if (hLines.length + vLines.length === 0) {
            this.runningAction = false;
            return;
        }
        var addNumber = 0; //横加竖减
        var minusNumber = 0;
        var lines = [];
        for (var _i = 0, hLines_1 = hLines; _i < hLines_1.length; _i++) {
            var piece = hLines_1[_i];
            addNumber += piece.type;
            lines.push(piece);
        }
        for (var _a = 0, vLines_1 = vLines; _a < vLines_1.length; _a++) {
            var vPiece = vLines_1[_a];
            minusNumber += vPiece.type;
            if (lines.indexOf(vPiece) === -1) {
                lines.push(vPiece);
            }
        }
        // TODO:
        if (this.inputDir > 0) {
            this.get47Scene.updateScore(addNumber + minusNumber);
        }
        else if (this.inputDir < 0) {
            this.get47Scene.updateScore(-addNumber - minusNumber);
        }
        else {
            this.get47Scene.updateScore(addNumber - minusNumber);
        }
        // this.score += (addNumber - minusNumber);
        var finished = 0;
        var total = lines.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.scaleTo(0.15, 0, 0), cc.callFunc(function () {
                finished++;
                if (finished === total) {
                    _this.runningAction = false;
                    _this.fallPieces();
                }
            }));
            lines[i].isAlive = false;
            lines[i].node.runAction(action);
        }
    };
    Get47Board.prototype.fallPieces = function () {
        var _this = this;
        this.runningAction = true;
        //下落
        var isAllFall = false;
        while (!isAllFall) {
            isAllFall = true;
            for (var y = 1; y < this.rowsNum; y++) {
                for (var x = 0; x < this.colsNum; x++) {
                    if (this.pieceMap[x][y].isAlive && !this.pieceMap[x][y - 1].isAlive) {
                        this.exchangeTwoPiecesState(this.pieceMap[x][y], this.pieceMap[x][y - 1]);
                        this.exchangeTwoPiecesPosIndex(this.pieceMap[x][y], this.pieceMap[x][y - 1]);
                        isAllFall = false;
                    }
                }
            }
        }
        var fallingPieces = [];
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                if (this.pieceMap[x][y].posIndex !== this.pieceMap[x][y].node.position) {
                    fallingPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var finished = 0;
        var total = fallingPieces.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.moveTo(0.3, fallingPieces[i].posIndex), cc.callFunc(function () {
                finished++;
                if (finished == total) {
                    _this.runningAction = false;
                    _this.addPieces();
                }
            }));
            fallingPieces[i].node.runAction(action);
        }
    };
    Get47Board.prototype.addPieces = function () {
        var _this = this;
        this.runningAction = true;
        //填补空白
        var addingPieces = [];
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum; x++) {
                if (!this.pieceMap[x][y].isAlive) {
                    addingPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var finished = 0;
        var total = addingPieces.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.scaleTo(0.15, 1, 1), cc.callFunc(function () {
                finished++;
                if (finished == total) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            addingPieces[i].randomType();
            addingPieces[i].isAlive = true;
            addingPieces[i].node.runAction(action);
        }
    };
    Get47Board.prototype.getVerticalLines = function () {
        var linePieces = [];
        var count = 1;
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum - 2; y = y + count) {
                var piece = this.pieceMap[x][y];
                count = 1;
                for (var n = y + 1; n < this.rowsNum; n++) {
                    if (this.pieceMap[x][n].type === piece.type) {
                        count++;
                    }
                    else {
                        break;
                    }
                }
                if (count >= 3) {
                    for (var i = 0; i < count; i++) {
                        linePieces.push(this.pieceMap[x][y + i]);
                    }
                }
            }
        }
        return linePieces;
    };
    Get47Board.prototype.getHorizontalLines = function () {
        var linePieces = [];
        var count = 1;
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum - 2; x = x + count) {
                var piece = this.pieceMap[x][y];
                var pieceType = piece.type;
                count = 1;
                for (var n = x + 1; n < this.colsNum; n++) {
                    if (this.pieceMap[n][y].type === pieceType) {
                        count++;
                    }
                    else {
                        break;
                    }
                }
                if (count >= 3) {
                    for (var i = 0; i < count; i++) {
                        linePieces.push(this.pieceMap[x + i][y]);
                    }
                }
            }
        }
        return linePieces;
    };
    Get47Board.prototype.getNeighborPiece = function (piece, dir) {
        var x = piece.x;
        var y = piece.y;
        switch (dir) {
            case Get47Constants_1.DIR.LEFT:
                if (x > 0) {
                    return this.pieceMap[x - 1][y];
                }
                break;
            case Get47Constants_1.DIR.RIGHT:
                if (x < this.colsNum - 1) {
                    return this.pieceMap[x + 1][y];
                }
                break;
            case Get47Constants_1.DIR.UP:
                if (y < this.rowsNum - 1) {
                    return this.pieceMap[x][y + 1];
                }
                break;
            case Get47Constants_1.DIR.DOWN:
                if (y > 0) {
                    return this.pieceMap[x][y - 1];
                }
                break;
        }
        return null;
    };
    Get47Board.prototype.newView = function (input) {
        var _this = this;
        if (input === void 0) { input = 0; }
        this.inputDir = input;
        if (!this.runningAction) {
            this.runningAction = true;
            var finished_3 = 0;
            for (var x = 0; x < this.colsNum; x++) {
                for (var y = 0; y < this.rowsNum; y++) {
                    var action = cc.sequence(cc.scaleTo(0.3, 0, 0), cc.callFunc(function () {
                        finished_3++;
                        if (finished_3 === (_this.colsNum - 1) * (_this.rowsNum - 1)) {
                            _this.runningAction = false;
                            _this.addPieces();
                        }
                    }));
                    this.pieceMap[x][y].isAlive = false;
                    this.pieceMap[x][y].node.runAction(action);
                }
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "colsNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "rowsNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "padding", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "spacing", void 0);
    __decorate([
        property(cc.Prefab)
    ], Get47Board.prototype, "piecePrefab", void 0);
    Get47Board = __decorate([
        ccclass
    ], Get47Board);
    return Get47Board;
}(cc.Component));
exports.Get47Board = Get47Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFxQztBQUNyQyxtREFBdUM7QUFFakMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFpWEM7UUE5V1csYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7O0lBOFY1RCxDQUFDO0lBNVZVLHlCQUFJLEdBQVgsVUFBWSxVQUFzQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlHLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxF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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDa0I7SUFYN0IsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWlYdEI7SUFBRCxpQkFBQztDQWpYRCxBQWlYQyxDQWpYK0IsRUFBRSxDQUFDLFNBQVMsR0FpWDNDO0FBalhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0NDdTY2VuZSB9IGZyb20gXCIuL0dldDQ3U2NlbmVcIjtcclxuaW1wb3J0IHsgUGllY2UgfSBmcm9tIFwiLi9HZXQ0N1BpZWNlXCI7XHJcbmltcG9ydCB7IERJUiB9IGZyb20gXCIuL0dldDQ3Q29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdldDQ3Qm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xzTnVtOiBudW1iZXIgPSA3O1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIHJvd3NOdW06IG51bWJlciA9IDc7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgcGFkZGluZzogbnVtYmVyID0gNTtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBzcGFjaW5nOiBudW1iZXIgPSA1O1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgcGllY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwaWVjZVdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdldDQ3U2NlbmU6IEdldDQ3U2NlbmUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwaWVjZU1hcDogQXJyYXk8QXJyYXk8UGllY2U+PjtcclxuICAgIHByaXZhdGUgcnVubmluZ0FjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGlucHV0RGlyOiBudW1iZXIgPSAwOyAvLyDmiYvmnLrlgL7mlpzmlrnlkJHvvIwx5ZCR5Y+z5YiG5pWw55u45Yqg77yMLTHlkJHlt6bliIbmlbDnm7jlh49cclxuXHJcbiAgICBwdWJsaWMgaW5pdChnZXQ0N1NjZW5lOiBHZXQ0N1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5nZXQ0N1NjZW5lID0gZ2V0NDdTY2VuZTtcclxuICAgICAgICB0aGlzLnBpZWNlV2lkdGggPSAodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5wYWRkaW5nICogMiAtIHRoaXMuc3BhY2luZyAqICh0aGlzLmNvbHNOdW0gLSAxKSkgLyB0aGlzLmNvbHNOdW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGllY2VQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBpZWNlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUud2lkdGggPSB0aGlzLnBpZWNlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUuaGVpZ2h0ID0gdGhpcy5waWVjZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnBvc2l0aW9uID0gY2MudjIodGhpcy5wYWRkaW5nICsgeCAqICh0aGlzLnBpZWNlV2lkdGggKyB0aGlzLnNwYWNpbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGluZyArIHkgKiAodGhpcy5waWVjZVdpZHRoICsgdGhpcy5zcGFjaW5nKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmluaXQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoRXZlbnQocGllY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XSA9IHBpZWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVsZXRlUGllY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRUb3VjaEV2ZW50KHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGxldCBmID0gKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZ0FjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwMSA9IGUuZ2V0U3RhcnRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgcDIgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBkaXI6IERJUjtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHAyLnggLSBwMS54KSA+IE1hdGguYWJzKHAyLnkgLSBwMS55KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAyLnggPiBwMS54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gRElSLlJJR0hUO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBESVIuTEVGVDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwMi55ID4gcDEueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IERJUi5VUDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gRElSLkRPV047XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnB1dERpciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0NDdTY2VuZS5vblBpZWNlVG91Y2gocGllY2UsIGRpcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwaWVjZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZiwgdGhpcyk7XHJcbiAgICAgICAgcGllY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGYsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5RXhjaGFuZ2UocGllY2U6IFBpZWNlLCBkaXI6IERJUikge1xyXG4gICAgICAgIGxldCBuZWlnaGJvclBpZWNlID0gdGhpcy5nZXROZWlnaGJvclBpZWNlKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgIGlmIChuZWlnaGJvclBpZWNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1N0YXRlKHBpZWNlLCBuZWlnaGJvclBpZWNlKTtcclxuICAgICAgICBsZXQgaExpbmVzID0gdGhpcy5nZXRIb3Jpem9udGFsTGluZXMoKTtcclxuICAgICAgICBsZXQgdkxpbmVzID0gdGhpcy5nZXRWZXJ0aWNhbExpbmVzKCk7XHJcbiAgICAgICAgaWYgKGhMaW5lcy5sZW5ndGggKyB2TGluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4Y2hhbmdlVHdvUGllY2VzUG9zSW5kZXgocGllY2UsIG5laWdoYm9yUGllY2UpO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdG90YWwgPSAyO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24xID0gY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMTUsIHBpZWNlLnBvc0luZGV4KSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUGllY2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xNSwgbmVpZ2hib3JQaWVjZS5wb3NJbmRleCksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IHRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVBpZWNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHBpZWNlLm5vZGUucnVuQWN0aW9uKGFjdGlvbjEpO1xyXG4gICAgICAgICAgICBuZWlnaGJvclBpZWNlLm5vZGUucnVuQWN0aW9uKGFjdGlvbjIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZXNTdGF0ZShwaWVjZSwgbmVpZ2hib3JQaWVjZSk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDI7XHJcbiAgICAgICAgICAgIGxldCB0aWxlUG9zID0gcGllY2Uubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IG5laWdoYm9yVGlsZVBvcyA9IG5laWdoYm9yUGllY2Uubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLCBuZWlnaGJvclRpbGVQb3MpLCBjYy5tb3ZlVG8oMC4xLCB0aWxlUG9zKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLCB0aWxlUG9zKSwgY2MubW92ZVRvKDAuMSwgbmVpZ2hib3JUaWxlUG9zKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGllY2Uubm9kZS5ydW5BY3Rpb24oYWN0aW9uMSk7XHJcbiAgICAgICAgICAgIG5laWdoYm9yUGllY2Uubm9kZS5ydW5BY3Rpb24oYWN0aW9uMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4Y2hhbmdlVHdvUGllY2VzU3RhdGUocGllY2UxOiBQaWVjZSwgcGllY2UyOiBQaWVjZSkge1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLnhdW3BpZWNlMS55XSA9IHBpZWNlMjtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwW3BpZWNlMi54XVtwaWVjZTIueV0gPSBwaWVjZTE7XHJcbiAgICAgICAgW3BpZWNlMS54LCBwaWVjZTIueF0gPSBbcGllY2UyLngsIHBpZWNlMS54XTtcclxuICAgICAgICBbcGllY2UxLnksIHBpZWNlMi55XSA9IFtwaWVjZTIueSwgcGllY2UxLnldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhjaGFuZ2VUd29QaWVjZXNQb3NJbmRleChwaWVjZTE6IFBpZWNlLCBwaWVjZTI6IFBpZWNlKSB7Ly/kuqTmjaLkvY3nva7kv6Hmga/vvIzlrp7pmYXkvY3nva7msqHmnInmlLnlj5hcclxuICAgICAgICBbcGllY2UxLnBvc0luZGV4LCBwaWVjZTIucG9zSW5kZXhdID0gW3BpZWNlMi5wb3NJbmRleCwgcGllY2UxLnBvc0luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlUGllY2VzKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGhMaW5lcyA9IHRoaXMuZ2V0SG9yaXpvbnRhbExpbmVzKCk7XHJcbiAgICAgICAgbGV0IHZMaW5lcyA9IHRoaXMuZ2V0VmVydGljYWxMaW5lcygpO1xyXG4gICAgICAgIGlmIChoTGluZXMubGVuZ3RoICsgdkxpbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWRkTnVtYmVyID0gMDsvL+aoquWKoOerluWHj1xyXG4gICAgICAgIGxldCBtaW51c051bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGxpbmVzOiBBcnJheTxQaWVjZT4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBoTGluZXMpIHtcclxuICAgICAgICAgICAgYWRkTnVtYmVyICs9IHBpZWNlLnR5cGU7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2gocGllY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB2UGllY2Ugb2YgdkxpbmVzKSB7XHJcbiAgICAgICAgICAgIG1pbnVzTnVtYmVyICs9IHZQaWVjZS50eXBlO1xyXG4gICAgICAgICAgICBpZiAobGluZXMuaW5kZXhPZih2UGllY2UpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh2UGllY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXREaXIgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0NDdTY2VuZS51cGRhdGVTY29yZShhZGROdW1iZXIgKyBtaW51c051bWJlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0RGlyIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldDQ3U2NlbmUudXBkYXRlU2NvcmUoLWFkZE51bWJlciAtIG1pbnVzTnVtYmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldDQ3U2NlbmUudXBkYXRlU2NvcmUoYWRkTnVtYmVyIC0gbWludXNOdW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNjb3JlICs9IChhZGROdW1iZXIgLSBtaW51c051bWJlcik7XHJcblxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gbGluZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjE1LCAwLCAwKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFsbFBpZWNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzW2ldLmlzQWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGluZXNbaV0ubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmYWxsUGllY2VzKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy/kuIvokL1cclxuICAgICAgICBsZXQgaXNBbGxGYWxsID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKCFpc0FsbEZhbGwpIHtcclxuICAgICAgICAgICAgaXNBbGxGYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNOdW07IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLmlzQWxpdmUgJiYgIXRoaXMucGllY2VNYXBbeF1beSAtIDFdLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1N0YXRlKHRoaXMucGllY2VNYXBbeF1beV0sIHRoaXMucGllY2VNYXBbeF1beSAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1Bvc0luZGV4KHRoaXMucGllY2VNYXBbeF1beV0sIHRoaXMucGllY2VNYXBbeF1beSAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBbGxGYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmYWxsaW5nUGllY2VzOiBBcnJheTxQaWVjZT4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLnBvc0luZGV4ICE9PSB0aGlzLnBpZWNlTWFwW3hdW3ldLm5vZGUucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWxsaW5nUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4XVt5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gZmFsbGluZ1BpZWNlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4zLCBmYWxsaW5nUGllY2VzW2ldLnBvc0luZGV4KSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PSB0b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQaWVjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmYWxsaW5nUGllY2VzW2ldLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFBpZWNlcygpIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIC8v5aGr6KGl56m655m9XHJcbiAgICAgICAgbGV0IGFkZGluZ1BpZWNlczogQXJyYXk8UGllY2U+ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGllY2VNYXBbeF1beV0uaXNBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGluZ1BpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbeF1beV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IGFkZGluZ1BpZWNlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMTUsIDEsIDEpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09IHRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVBpZWNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFkZGluZ1BpZWNlc1tpXS5yYW5kb21UeXBlKCk7XHJcbiAgICAgICAgICAgIGFkZGluZ1BpZWNlc1tpXS5pc0FsaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWRkaW5nUGllY2VzW2ldLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VmVydGljYWxMaW5lcygpOiBBcnJheTxQaWVjZT4ge1xyXG4gICAgICAgIGxldCBsaW5lUGllY2VzOiBBcnJheTxQaWVjZT4gPSBbXTtcclxuICAgICAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW0gLSAyOyB5ID0geSArIGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSB0aGlzLnBpZWNlTWFwW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IHkgKyAxOyBuIDwgdGhpcy5yb3dzTnVtOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVtuXS50eXBlID09PSBwaWVjZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbeF1beSArIGldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVQaWVjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Jpem9udGFsTGluZXMoKTogQXJyYXk8UGllY2U+IHtcclxuICAgICAgICBsZXQgbGluZVBpZWNlczogQXJyYXk8UGllY2U+ID0gW107XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtIC0gMjsgeCA9IHggKyBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZVR5cGUgPSBwaWVjZS50eXBlO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IHggKyAxOyBuIDwgdGhpcy5jb2xzTnVtOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFtuXVt5XS50eXBlID09PSBwaWVjZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4ICsgaV1beV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZVBpZWNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5laWdoYm9yUGllY2UocGllY2U6IFBpZWNlLCBkaXI6IERJUik6IFBpZWNlIHtcclxuICAgICAgICBsZXQgeCA9IHBpZWNlLng7XHJcbiAgICAgICAgbGV0IHkgPSBwaWVjZS55O1xyXG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRElSLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFt4IC0gMV1beV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVIuUklHSFQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA8IHRoaXMuY29sc051bSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFt4ICsgMV1beV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVIuVVA6XHJcbiAgICAgICAgICAgICAgICBpZiAoeSA8IHRoaXMucm93c051bSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFt4XVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVIuRE9XTjpcclxuICAgICAgICAgICAgICAgIGlmICh5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZWNlTWFwW3hdW3kgLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3VmlldyhpbnB1dDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXREaXIgPSBpbnB1dDtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZ0FjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoZWQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4zLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gKHRoaXMuY29sc051bSAtIDEpICogKHRoaXMucm93c051bSAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQaWVjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==