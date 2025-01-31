
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzlueBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bb55t2HhJOT5e97sLmAVu/', 'PuzzlueBoard');
// Scripts/PuzzlueBoard.ts

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
exports.PuzzleBoard = void 0;
var PuzzlePiece_1 = require("./PuzzlePiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var PuzzleBoard = /** @class */ (function (_super) {
    __extends(PuzzleBoard, _super);
    // @executeInEditMode
    function PuzzleBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 5;
        _this.colSpace = 5;
        _this.colWidth = 0;
        _this.blankPiece = null;
        _this.puzzleScene = null;
        return _this;
    }
    PuzzleBoard.prototype.init = function (puzzleScene) {
        this.puzzleScene = puzzleScene;
        this.addListeners();
    };
    PuzzleBoard.prototype.reset = function (colNum) {
        this.colNum = colNum;
        this.colWidth = (this.node.width - this.colSpace * (this.colNum + 1)) / this.colNum;
        this.node.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.colNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.x = x * (this.colWidth + this.colSpace) + this.colSpace;
                pieceNode.y = y * (this.colWidth + this.colSpace) + this.colSpace;
                this.pieceMap[x][y] = pieceNode.getComponent(PuzzlePiece_1.Piece);
                this.pieceMap[x][y].init(x, y, this.colNum, this.colWidth);
                if (this.pieceMap[x][y].isBlank) {
                    this.blankPiece = this.pieceMap[x][y];
                }
            }
        }
        this.shuffle();
        // for (let x = 0; x < this.colNum; x++) {
        //     this.pieceMap[x] = [];
        //     for (let y = 0; y < this.colNum; y++) {
        //         let pieceNode = cc.instantiate(this.piecePrefab);
        //         this.node.addChild(pieceNode);
        //         pieceNode.x = x * (this.node.width / this.colNum);
        //         pieceNode.y = y * (this.node.height / this.colNum);
        //         this.pieceMap[x][y] = pieceNode.getComponent(Piece);
        //         this.pieceMap[x][y].init(x, y, this.colNum, this.colWidth);
        //         if (this.pieceMap[x][y].isBlank) {
        //             this.blankPiece = this.pieceMap[x][y];
        //         }
        //     }
        // }
        // this.shuffle();
    };
    PuzzleBoard.prototype.shuffle = function () {
        for (var i = 0; i < 1000; i++) {
            var nearPieces = this.getNearPieces(this.blankPiece);
            var n = Math.floor(Math.random() * nearPieces.length);
            this.exchangeTwoPiece(this.blankPiece, nearPieces[n]);
        }
    };
    PuzzleBoard.prototype.onBoadTouch = function (event) {
        var worldPos = event.getLocation();
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        var x = Math.floor((localPos.x - this.colSpace) / (this.colWidth + this.colSpace));
        var y = Math.floor((localPos.y - this.colSpace) / (this.colWidth + this.colSpace));
        this.puzzleScene.onBoardTouch(x, y);
    };
    PuzzleBoard.prototype.movePiece = function (x, y) {
        var piece = this.pieceMap[x][y];
        var nearPieces = this.getNearPieces(piece);
        for (var _i = 0, nearPieces_1 = nearPieces; _i < nearPieces_1.length; _i++) {
            var nearPiece = nearPieces_1[_i];
            if (nearPiece.isBlank) {
                this.exchangeTwoPiece(piece, nearPiece);
                return true;
            }
        }
        return false;
    };
    PuzzleBoard.prototype.judgeWin = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (!this.pieceMap[x][y].isRight) {
                    return false;
                }
            }
        }
        this.blankPiece.node.active = true;
        return true;
    };
    PuzzleBoard.prototype.getNearPieces = function (piece) {
        var nearPieces = [];
        if (piece.curCol > 0) { // left
            nearPieces.push(this.pieceMap[piece.curCol - 1][piece.curRow]);
        }
        if (piece.curCol < this.colNum - 1) { // right
            nearPieces.push(this.pieceMap[piece.curCol + 1][piece.curRow]);
        }
        if (piece.curRow > 0) { // bottom
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow - 1]);
        }
        if (piece.curRow < this.colNum - 1) { // top
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow + 1]);
        }
        return nearPieces;
    };
    PuzzleBoard.prototype.exchangeTwoPiece = function (piece1, piece2) {
        var _a, _b, _c;
        this.pieceMap[piece2.curCol][piece2.curRow] = piece1;
        this.pieceMap[piece1.curCol][piece1.curRow] = piece2;
        _a = [piece2.curCol, piece1.curCol], piece1.curCol = _a[0], piece2.curCol = _a[1];
        _b = [piece2.curRow, piece1.curRow], piece1.curRow = _b[0], piece2.curRow = _b[1];
        _c = [piece2.node.position, piece1.node.position], piece1.node.position = _c[0], piece2.node.position = _c[1];
    };
    PuzzleBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onBoadTouch, this);
    };
    PuzzleBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], PuzzleBoard.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colSpace", void 0);
    PuzzleBoard = __decorate([
        ccclass
        // @executeInEditMode
    ], PuzzleBoard);
    return PuzzleBoard;
}(cc.Component));
exports.PuzzleBoard = PuzzleBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emx1ZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBc0M7QUFHaEMsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBaUMsK0JBQVk7SUFEN0MscUJBQXFCO0lBQ3JCO1FBQUEscUVBdUlDO1FBcElXLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWdCLElBQUksQ0FBQzs7SUEwSDVDLENBQUM7SUF4SEcsMEJBQUksR0FBSixVQUFLLFdBQXdCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUs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LEVBQUUsQ0FBQyxTQUFTLEdBdUk1QztBQXZJWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vUHV6emxlUGllY2VcIjtcclxuaW1wb3J0IHsgUHV6emxlU2NlbmUgfSBmcm9tIFwiLi9QdXp6bGVTY2VuZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGNsYXNzIFB1enpsZUJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBwaWVjZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xOdW06IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgY29sU3BhY2U6IG51bWJlciA9IDU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xXaWR0aDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcGllY2VNYXA6IEFycmF5PEFycmF5PFBpZWNlPj47XHJcbiAgICBwcml2YXRlIGJsYW5rUGllY2U6IFBpZWNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHB1enpsZVNjZW5lOiBQdXp6bGVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgaW5pdChwdXp6bGVTY2VuZTogUHV6emxlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnB1enpsZVNjZW5lID0gcHV6emxlU2NlbmU7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoY29sTnVtPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb2xOdW0gPSBjb2xOdW07XHJcbiAgICAgICAgdGhpcy5jb2xXaWR0aCA9ICh0aGlzLm5vZGUud2lkdGggLSB0aGlzLmNvbFNwYWNlICogKHRoaXMuY29sTnVtICsgMSkpIC8gdGhpcy5jb2xOdW07XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29sTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnggPSB4ICogKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSArIHRoaXMuY29sU3BhY2U7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaW5pdCh4LCB5LCB0aGlzLmNvbE51bSwgdGhpcy5jb2xXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5pc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFua1BpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNodWZmbGUoKTtcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcGllY2VOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waWVjZVByZWZhYik7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGllY2VOb2RlKTtcclxuICAgICAgICAvLyAgICAgICAgIHBpZWNlTm9kZS54ID0geCAqICh0aGlzLm5vZGUud2lkdGggLyB0aGlzLmNvbE51bSk7XHJcbiAgICAgICAgLy8gICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5ub2RlLmhlaWdodCAvIHRoaXMuY29sTnVtKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0uaW5pdCh4LCB5LCB0aGlzLmNvbE51bSwgdGhpcy5jb2xXaWR0aCk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5pc0JsYW5rKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ibGFua1BpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnNodWZmbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNodWZmbGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5lYXJQaWVjZXMgPSB0aGlzLmdldE5lYXJQaWVjZXModGhpcy5ibGFua1BpZWNlKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZWFyUGllY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZSh0aGlzLmJsYW5rUGllY2UsIG5lYXJQaWVjZXNbbl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQm9hZFRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcigobG9jYWxQb3MueCAtIHRoaXMuY29sU3BhY2UpIC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKChsb2NhbFBvcy55IC0gdGhpcy5jb2xTcGFjZSkgLyAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpKTtcclxuICAgICAgICB0aGlzLnB1enpsZVNjZW5lLm9uQm9hcmRUb3VjaCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVBpZWNlKHgsIHkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcGllY2UgPSB0aGlzLnBpZWNlTWFwW3hdW3ldO1xyXG4gICAgICAgIGxldCBuZWFyUGllY2VzID0gdGhpcy5nZXROZWFyUGllY2VzKHBpZWNlKTtcclxuICAgICAgICBmb3IgKGxldCBuZWFyUGllY2Ugb2YgbmVhclBpZWNlcykge1xyXG4gICAgICAgICAgICBpZiAobmVhclBpZWNlLmlzQmxhbmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZShwaWVjZSwgbmVhclBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGllY2VNYXBbeF1beV0uaXNSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJsYW5rUGllY2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmVhclBpZWNlcyhwaWVjZTogUGllY2UpOiBBcnJheTxQaWVjZT4ge1xyXG4gICAgICAgIGxldCBuZWFyUGllY2VzID0gW107XHJcblxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPiAwKSB7IC8vIGxlZnRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sIC0gMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPCB0aGlzLmNvbE51bSAtIDEpIHsgLy8gcmlnaHRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sICsgMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJSb3cgPiAwKSB7IC8vIGJvdHRvbVxyXG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2xdW3BpZWNlLmN1clJvdyAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBpZWNlLmN1clJvdyA8IHRoaXMuY29sTnVtIC0gMSkgeyAvLyB0b3BcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sXVtwaWVjZS5jdXJSb3cgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWFyUGllY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGNoYW5nZVR3b1BpZWNlKHBpZWNlMTogUGllY2UsIHBpZWNlMjogUGllY2UpIHtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwW3BpZWNlMi5jdXJDb2xdW3BpZWNlMi5jdXJSb3ddID0gcGllY2UxO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLmN1ckNvbF1bcGllY2UxLmN1clJvd10gPSBwaWVjZTI7XHJcblxyXG4gICAgICAgIFtwaWVjZTEuY3VyQ29sLCBwaWVjZTIuY3VyQ29sXSA9IFtwaWVjZTIuY3VyQ29sLCBwaWVjZTEuY3VyQ29sXTtcclxuICAgICAgICBbcGllY2UxLmN1clJvdywgcGllY2UyLmN1clJvd10gPSBbcGllY2UyLmN1clJvdywgcGllY2UxLmN1clJvd107XHJcblxyXG4gICAgICAgIFtwaWVjZTEubm9kZS5wb3NpdGlvbiwgcGllY2UyLm5vZGUucG9zaXRpb25dID0gW3BpZWNlMi5ub2RlLnBvc2l0aW9uLCBwaWVjZTEubm9kZS5wb3NpdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJvYWRUb3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==