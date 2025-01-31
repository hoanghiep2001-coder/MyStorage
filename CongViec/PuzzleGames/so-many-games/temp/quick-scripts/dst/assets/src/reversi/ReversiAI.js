
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f554edBfB9EGb5YaGb6mEq/', 'ReversiAI');
// src/reversi/ReversiAI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiAI = void 0;
var ReversiConstants_1 = require("./ReversiConstants");
var ReversiAI = /** @class */ (function () {
    function ReversiAI(board) {
        this.board = board;
    }
    ReversiAI.prototype.getNextCoor = function () {
        var moveableList = [];
        for (var x = 0; x < this.board.pieceMap.length; x++) {
            for (var y = 0; y < this.board.pieceMap[x].length; y++) {
                if (this.board.pieceMap[x][y].color === ReversiConstants_1.NONE && this.board.canPlace(ReversiConstants_1.WHITE, cc.v2(x, y))) {
                    // 优先占边
                    if (x === 0 || y === 0 || x === this.board.pieceMap.length - 1 || y === this.board.pieceMap[x].length - 1) {
                        return cc.v2(x, y);
                    }
                    else {
                        moveableList.push(cc.v2(x, y));
                    }
                }
            }
        }
        var n = Math.floor(Math.random() * moveableList.length);
        return moveableList[n];
    };
    return ReversiAI;
}());
exports.ReversiAI = ReversiAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpQUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBd0Q7QUFFeEQ7SUFDSSxtQkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFJLENBQUM7SUFFNUMsK0JBQVcsR0FBWDtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLHVCQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsd0JBQUssRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuRixPQUFPO29CQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO3dCQUN0RyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQjt5QkFBSTt3QkFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZXJzaUJvYXJkIH0gZnJvbSBcIi4vUmV2ZXJzaUJvYXJkXCI7XHJcbmltcG9ydCB7IE5PTkUsIEJMQUNLLCBXSElURSB9IGZyb20gXCIuL1JldmVyc2lDb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNpQUkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBib2FyZDogUmV2ZXJzaUJvYXJkKSB7IH1cclxuXHJcbiAgICBnZXROZXh0Q29vcigpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgbW92ZWFibGVMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkLnBpZWNlTWFwLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZC5waWVjZU1hcFt4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQucGllY2VNYXBbeF1beV0uY29sb3IgPT09IE5PTkUgJiYgdGhpcy5ib2FyZC5jYW5QbGFjZShXSElURSxjYy52Mih4LHkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS8mOWFiOWNoOi+uVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDAgfHwgeCA9PT0gdGhpcy5ib2FyZC5waWVjZU1hcC5sZW5ndGggLSAxIHx8IHkgPT09IHRoaXMuYm9hcmQucGllY2VNYXBbeF0ubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy52Mih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlYWJsZUxpc3QucHVzaChjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm1vdmVhYmxlTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBtb3ZlYWJsZUxpc3Rbbl07XHJcbiAgICB9XHJcbn1cclxuIl19