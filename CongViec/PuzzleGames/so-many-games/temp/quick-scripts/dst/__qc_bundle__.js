
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/src/2048/M2048Board');
require('./assets/src/2048/M2048Constants');
require('./assets/src/2048/M2048Piece');
require('./assets/src/2048/M2048Scene');
require('./assets/src/G');
require('./assets/src/brick/BrickBall');
require('./assets/src/brick/BrickColor');
require('./assets/src/brick/BrickLayout');
require('./assets/src/brick/BrickPaddle');
require('./assets/src/brick/BrickScene');
require('./assets/src/get47/Get47Board');
require('./assets/src/get47/Get47Constants');
require('./assets/src/get47/Get47Piece');
require('./assets/src/get47/Get47Scene');
require('./assets/src/get47/Get47Score');
require('./assets/src/gobang/GobangAI');
require('./assets/src/gobang/GobangBoard');
require('./assets/src/gobang/GobangConstants');
require('./assets/src/gobang/GobangPiece');
require('./assets/src/gobang/GobangScene');
require('./assets/src/hall/HallScene');
require('./assets/src/jump/JumpBlock');
require('./assets/src/jump/JumpConstants');
require('./assets/src/jump/JumpPlayer');
require('./assets/src/jump/JumpProgress');
require('./assets/src/jump/JumpScene');
require('./assets/src/jump/JumpStage');
require('./assets/src/link/LinkBoard');
require('./assets/src/link/LinkConstants');
require('./assets/src/link/LinkPiece');
require('./assets/src/link/LinkScene');
require('./assets/src/loading/LoadingScene');
require('./assets/src/mine/MineConstans');
require('./assets/src/mine/MineLevelLabel');
require('./assets/src/mine/MinePiece');
require('./assets/src/mine/MineScene');
require('./assets/src/mine/MnieBoard');
require('./assets/src/puzzle/PuzzleBoard');
require('./assets/src/puzzle/PuzzleConstants');
require('./assets/src/puzzle/PuzzlePiece');
require('./assets/src/puzzle/PuzzleScene');
require('./assets/src/reversi/ReversiAI');
require('./assets/src/reversi/ReversiBoard');
require('./assets/src/reversi/ReversiConstants');
require('./assets/src/reversi/ReversiPiece');
require('./assets/src/reversi/ReversiScene');
require('./assets/src/shared/GameRoot');
require('./assets/src/shared/Streak');
require('./assets/src/shared/Timer');
require('./assets/src/snake/SnakeBoard');
require('./assets/src/snake/SnakeConstants');
require('./assets/src/snake/SnakePiece');
require('./assets/src/snake/SnakeScene');
require('./assets/src/tetris/TetrisBoard');
require('./assets/src/tetris/TetrisConstants');
require('./assets/src/tetris/TetrisPiece');
require('./assets/src/tetris/TetrisScene');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce000bUU0NAbL2c+4Z/4nRf', 'BrickScene');
// src/brick/BrickScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickScene = void 0;
var BrickBall_1 = require("./BrickBall");
var BrickPaddle_1 = require("./BrickPaddle");
var BrickLayout_1 = require("./BrickLayout");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickScene = /** @class */ (function (_super) {
    __extends(BrickScene, _super);
    function BrickScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.paddle = null;
        _this.layout = null;
        _this.scoreLabel = null;
        _this.brickNum = 50;
        _this.score = 0;
        _this.physicsManager = null;
        return _this;
    }
    BrickScene.prototype.onLoad = function () {
        this.physicsManager = cc.director.getPhysicsManager();
        this.startGame();
    };
    //this.physicsManager.debugDrawFlags =0;
    // cc.PhysicsManager.DrawBits.e_aabbBit |
    // cc.PhysicsManager.DrawBits.e_pairBit |
    // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    // cc.PhysicsManager.DrawBits.e_jointBit |
    // cc.PhysicsManager.DrawBits.e_shapeBit
    // ; 
    BrickScene.prototype.init = function () {
        this.score = 0;
        this.scoreLabel.string = "0";
        this.brickNum = 50;
        this.physicsManager.enabled = true;
        this.ball.init(this);
        this.paddle.init();
        this.layout.init(this.brickNum);
        // this.overPanel.init(this);
    };
    BrickScene.prototype.startGame = function () {
        this.init();
    };
    BrickScene.prototype.pauseGame = function () {
        this.physicsManager.enabled = false;
    };
    BrickScene.prototype.resumeGame = function () {
        this.physicsManager.enabled = true;
    };
    BrickScene.prototype.stopGame = function () {
        var _this = this;
        this.physicsManager.enabled = false;
        G_1.G.gameRoot.showMaskMessage("游戏结束", {
            label: "再来一局",
            cb: function () {
                _this.startGame();
            },
            target: this
        }, {
            label: "返回大厅",
            cb: function () {
                G_1.G.returnHall();
            },
            target: this
        });
    };
    BrickScene.prototype.addScore = function (score) {
        this.score += score;
    };
    BrickScene.prototype.minusBrick = function (n) {
        this.brickNum -= n;
    };
    BrickScene.prototype.onBallContactBrick = function (ballNode, brickNode) {
        brickNode.parent = null;
        this.addScore(1);
        this.minusBrick(1);
        this.scoreLabel.string = this.score + "";
        if (this.brickNum <= 0) {
            this.stopGame();
        }
    };
    BrickScene.prototype.onBallContactGround = function (ballNode, groundNode) {
        this.stopGame();
    };
    BrickScene.prototype.onBallContactPaddle = function (ballNode, paddleNode) {
    };
    BrickScene.prototype.onBallContactWall = function (ballNode, brickNode) {
    };
    BrickScene.prototype.onDestroy = function () {
        this.physicsManager.enabled = false;
    };
    __decorate([
        property(BrickBall_1.BrickBall)
    ], BrickScene.prototype, "ball", void 0);
    __decorate([
        property(BrickPaddle_1.BrickPaddle)
    ], BrickScene.prototype, "paddle", void 0);
    __decorate([
        property(BrickLayout_1.BrickLayout)
    ], BrickScene.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], BrickScene.prototype, "scoreLabel", void 0);
    BrickScene = __decorate([
        ccclass
    ], BrickScene);
    return BrickScene;
}(cc.Component));
exports.BrickScene = BrickScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDBCQUF5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQXNHQztRQW5HVyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLG9CQUFjLEdBQXNCLElBQUksQ0FBQzs7SUF5RnJELENBQUM7SUF2RkcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsaURBQWlEO0lBQ2pELDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFDeEMsS0FBSztJQUVMLHlCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsNkJBQTZCO0lBRWpDLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEMsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUN6QjtZQUNJLEtBQUssRUFBRSxNQUFNO1lBQUUsRUFBRSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQUUsTUFBTSxFQUFFLElBQUk7U0FDbEIsRUFDRDtZQUNJLEtBQUssRUFBRSxNQUFNO1lBQUUsRUFBRSxFQUFFO2dCQUNmLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBQUUsTUFBTSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFrQixHQUFsQixVQUFtQixRQUFRLEVBQUUsU0FBUztRQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsd0NBQW1CLEdBQW5CLFVBQW9CLFFBQWlCLEVBQUUsVUFBbUI7UUFDdEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsUUFBaUIsRUFBRSxVQUFtQjtJQUUxRCxDQUFDO0lBRUQsc0NBQWlCLEdBQWpCLFVBQWtCLFFBQWlCLEVBQUUsU0FBa0I7SUFFdkQsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQWhHRDtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDOzRDQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLHlCQUFXLENBQUM7OENBQ2E7SUFFbkM7UUFEQyxRQUFRLENBQUMseUJBQVcsQ0FBQzs4Q0FDYTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNpQjtJQVQzQixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBc0d0QjtJQUFELGlCQUFDO0NBdEdELEFBc0dDLENBdEcrQixFQUFFLENBQUMsU0FBUyxHQXNHM0M7QUF0R1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmlja0JhbGwgfSBmcm9tIFwiLi9Ccmlja0JhbGxcIjtcclxuaW1wb3J0IHsgQnJpY2tQYWRkbGUgfSBmcm9tIFwiLi9Ccmlja1BhZGRsZVwiO1xyXG5pbXBvcnQgeyBCcmlja0xheW91dCB9IGZyb20gXCIuL0JyaWNrTGF5b3V0XCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCcmlja1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQnJpY2tCYWxsKVxyXG4gICAgcHJpdmF0ZSBiYWxsOiBCcmlja0JhbGwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJyaWNrUGFkZGxlKVxyXG4gICAgcHJpdmF0ZSBwYWRkbGU6IEJyaWNrUGFkZGxlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCcmlja0xheW91dClcclxuICAgIHByaXZhdGUgbGF5b3V0OiBCcmlja0xheW91dCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBicmlja051bTogbnVtYmVyID0gNTA7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuICAgIHByaXZhdGUgcGh5c2ljc01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMucGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPTA7XHJcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxyXG4gICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9wYWlyQml0IHxcclxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcclxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfFxyXG4gICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdFxyXG4gICAgLy8gOyBcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmJyaWNrTnVtID0gNTA7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJhbGwuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5pdCh0aGlzLmJyaWNrTnVtKTtcclxuICAgICAgICAvLyB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIua4uOaIj+e7k+adn1wiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWGjeadpeS4gOWxgFwiLCBjYjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLov5Tlm57lpKfljoVcIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRy5yZXR1cm5IYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY29yZShzY29yZSl7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBzY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51c0JyaWNrKG4pe1xyXG4gICAgICAgIHRoaXMuYnJpY2tOdW0gLT0gbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhbGxDb250YWN0QnJpY2soYmFsbE5vZGUsIGJyaWNrTm9kZSkge1xyXG4gICAgICAgIGJyaWNrTm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoMSk7XHJcbiAgICAgICAgdGhpcy5taW51c0JyaWNrKDEpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5icmlja051bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWxsQ29udGFjdEdyb3VuZChiYWxsTm9kZTogY2MuTm9kZSwgZ3JvdW5kTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhbGxDb250YWN0UGFkZGxlKGJhbGxOb2RlOiBjYy5Ob2RlLCBwYWRkbGVOb2RlOiBjYy5Ob2RlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFsbENvbnRhY3RXYWxsKGJhbGxOb2RlOiBjYy5Ob2RlLCBicmlja05vZGU6IGNjLk5vZGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '409bcMsMydAJKg/yHU4OEJk', 'G');
// src/G.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
var GlobalInstance = /** @class */ (function () {
    function GlobalInstance() {
        this.gameRoot = null;
    }
    GlobalInstance.prototype.enterHall = function () {
        cc.director.loadScene("hall");
    };
    GlobalInstance.prototype.returnHall = function () {
        cc.director.loadScene("hall");
    };
    GlobalInstance.prototype.enterGobang = function () {
        this.loadSceneWithProgress("gobang");
    };
    GlobalInstance.prototype.enterReversi = function () {
        this.loadSceneWithProgress("reversi");
    };
    GlobalInstance.prototype.enter2048 = function () {
        this.loadSceneWithProgress("2048");
    };
    GlobalInstance.prototype.enterJump = function () {
        this.loadSceneWithProgress("jump");
    };
    GlobalInstance.prototype.enterPuzzle = function () {
        this.loadSceneWithProgress("puzzle");
    };
    GlobalInstance.prototype.enterGet47 = function () {
        this.loadSceneWithProgress("get47");
    };
    GlobalInstance.prototype.enterTetris = function () {
        this.loadSceneWithProgress("tetris");
    };
    GlobalInstance.prototype.enterMine = function () {
        this.loadSceneWithProgress("mine");
    };
    GlobalInstance.prototype.enterLink = function () {
        this.loadSceneWithProgress("link");
    };
    GlobalInstance.prototype.enterSnake = function () {
        this.loadSceneWithProgress("snake");
    };
    GlobalInstance.prototype.enterBrick = function () {
        this.loadSceneWithProgress("brick");
    };
    GlobalInstance.prototype.enterPinball = function () {
        this.loadSceneWithProgress("pinball");
    };
    GlobalInstance.prototype.setLoadingDisplay = function () {
        if (cc.sys.isNative) {
            return;
        }
        // Loading splash scene
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var percent = 100 * completedCount / totalCount;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
    };
    GlobalInstance.prototype.loadSceneWithProgress = function (scene, cb) {
        this.setLoadingDisplay();
        cc.director.preloadScene(scene, function () {
            setTimeout(function () {
                cc.director.loadScene(scene, cb);
            }, 1000);
        });
    };
    GlobalInstance.prototype.setResolutionPolicy = function () {
        var f = function () {
            if (cc.sys.isMobile) {
                cc.log('手机场景适配');
                cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_WIDTH);
                cc.Canvas.instance['alignWithScreen']();
            }
            else {
                cc.log('电脑场景适配');
                cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);
                cc.Canvas.instance['alignWithScreen']();
            }
        };
        f();
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, f);
    };
    GlobalInstance.Instance = new GlobalInstance();
    return GlobalInstance;
}());
exports.G = GlobalInstance.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxjQUFjLEVBQUUsQ0FBQztJQTJHM0UscUJBQUM7Q0E3R0QsQUE2R0MsSUFBQTtBQUVZLFFBQUEsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL3NoYXJlZC9HYW1lUm9vdFwiO1xyXG5cclxuY2xhc3MgR2xvYmFsSW5zdGFuY2Uge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW5zdGFuY2U6IEdsb2JhbEluc3RhbmNlID0gbmV3IEdsb2JhbEluc3RhbmNlKCk7XHJcbiAgICBwdWJsaWMgZ2FtZVJvb3Q6IEdhbWVSb290ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRlckhhbGwoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0dXJuSGFsbCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRlckdvYmFuZygpIHtcclxuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcImdvYmFuZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXJSZXZlcnNpKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwicmV2ZXJzaVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXIyMDQ4KCkge1xyXG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwiMjA0OFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXJKdW1wKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKFwianVtcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXJQdXp6bGUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJwdXp6bGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGVyR2V0NDcoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJnZXQ0N1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXJUZXRyaXMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJ0ZXRyaXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGVyTWluZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcIm1pbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGVyTGluaygpIHtcclxuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcImxpbmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGVyU25ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJzbmFrZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50ZXJCcmljaygpIHtcclxuICAgICAgICB0aGlzLmxvYWRTY2VuZVdpdGhQcm9ncmVzcyhcImJyaWNrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRlclBpbmJhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoXCJwaW5iYWxsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TG9hZGluZ0Rpc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvYWRpbmcgc3BsYXNoIHNjZW5lXHJcbiAgICAgICAgbGV0IHNwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2gnKTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBzcGxhc2gucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhciBzcGFuJyk7XHJcbiAgICAgICAgKGNjLmxvYWRlciBhcyBhbnkpLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoY29tcGxldGVkQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSAxMDAgKiBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0Jhcikge1xyXG4gICAgICAgICAgICAgICAgKHByb2dyZXNzQmFyIGFzIGFueSkuc3R5bGUud2lkdGggPSBwZXJjZW50LnRvRml4ZWQoMikgKyAnJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAocHJvZ3Jlc3NCYXIgYXMgYW55KS5zdHlsZS53aWR0aCA9ICcwJSc7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9uY2UoY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfU0NFTkVfTEFVTkNILCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFNjZW5lV2l0aFByb2dyZXNzKHNjZW5lOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnNldExvYWRpbmdEaXNwbGF5KCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNjZW5lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLCBjYik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZXNvbHV0aW9uUG9saWN5KCkge1xyXG4gICAgICAgIGxldCBmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+aJi+acuuWcuuaZr+mAgumFjScpO1xyXG4gICAgICAgICAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEgpO1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlWydhbGlnbldpdGhTY3JlZW4nXSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKCfnlLXohJHlnLrmma/pgILphY0nKTtcclxuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzIwLCAxMjgwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcclxuICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZVsnYWxpZ25XaXRoU2NyZWVuJ10oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmKCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1NDRU5FX0xPQURJTkcsIGYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRyA9IEdsb2JhbEluc3RhbmNlLkluc3RhbmNlO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13fe4mwiuZGjaCf2paO8sE7', 'Get47Constants');
// src/get47/Get47Constants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = exports.DIR = void 0;
var DIR;
(function (DIR) {
    DIR[DIR["LEFT"] = 1] = "LEFT";
    DIR[DIR["UP"] = 2] = "UP";
    DIR[DIR["RIGHT"] = 3] = "RIGHT";
    DIR[DIR["DOWN"] = 4] = "DOWN";
})(DIR = exports.DIR || (exports.DIR = {}));
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdDb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLEdBS1g7QUFMRCxXQUFZLEdBQUc7SUFDWCw2QkFBUSxDQUFBO0lBQ1IseUJBQU0sQ0FBQTtJQUNOLCtCQUFTLENBQUE7SUFDVCw2QkFBUSxDQUFBO0FBQ1osQ0FBQyxFQUxXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQUtkO0FBQ0QsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2IsaUNBQVEsQ0FBQTtJQUNSLG1DQUFTLENBQUE7SUFDVCxpQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUloQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIERJUntcclxuICAgIExFRlQgPSAxLFxyXG4gICAgVVAgPSAyLFxyXG4gICAgUklHSFQgPSAzLFxyXG4gICAgRE9XTiA9IDRcclxufVxyXG5leHBvcnQgZW51bSBTVEFURXtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgU1RBUlQgPSAxLFxyXG4gICAgT1ZFUiA9IDJcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c537hphVJHQ529UlnH6eF9', 'GobangBoard');
// src/gobang/GobangBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangBoard = void 0;
var GobangConstants_1 = require("./GobangConstants");
var GobangPiece_1 = require("./GobangPiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangBoard = /** @class */ (function (_super) {
    __extends(GobangBoard, _super);
    function GobangBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 15;
        _this.rowsSum = 15;
        _this.graphics = null; // 用来画棋盘棋子
        _this.graphics2 = null; // 用来画上层UI
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.lastPiece = null;
        _this.gobangScene = null;
        return _this;
    }
    GobangBoard.prototype.init = function (gobangScene) {
        this.gobangScene = gobangScene;
        this.tileWidth = this.node.width / this.colsSum;
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * (this.colsSum - 1);
        this.boardHeight = this.tileWidth * (this.rowsSum - 1);
        this.reset();
        this.addListeners();
    };
    GobangBoard.prototype.reset = function () {
        this.graphics.clear();
        this.graphics2.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        // 中心点
        this.graphics.strokeColor = cc.Color.RED;
        this.graphics.fillColor = cc.Color.RED;
        var centerCol = Math.floor(this.colsSum / 2);
        var centerRow = Math.floor(this.rowsSum / 2);
        this.graphics.circle(this.startX + centerCol * this.tileWidth, this.startY + centerRow * this.tileWidth, 5);
        this.graphics.fill();
        this.pieceMap = [];
        for (var y = 0; y < this.rowsSum; y++) {
            this.pieceMap[y] = [];
            for (var x = 0; x < this.colsSum; x++) {
                this.pieceMap[y][x] = new GobangPiece_1.GobangPiece(x, y, GobangConstants_1.NONE);
            }
        }
    };
    GobangBoard.prototype.drawLastPieceRect = function () {
        this.graphics2.clear();
        if (this.lastPiece) {
            this.graphics2.strokeColor = cc.Color.RED;
            this.graphics2.rect(this.startX + this.tileWidth * this.lastPiece.x - this.tileWidth / 2, this.startY + this.tileWidth * this.lastPiece.y - this.tileWidth / 2, this.tileWidth, this.tileWidth);
            this.graphics2.stroke();
        }
    };
    GobangBoard.prototype.placeBlack = function (coor) {
        this.graphics.strokeColor = cc.Color.BLACK;
        this.graphics.fillColor = cc.Color.BLACK;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.BLACK);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.placeWhite = function (coor) {
        this.graphics.strokeColor = cc.Color.WHITE;
        this.graphics.fillColor = cc.Color.WHITE;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.WHITE);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.getPieceByCoor = function (coor) {
        return this.pieceMap[coor.x][coor.y];
    };
    GobangBoard.prototype.onTouched = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var coor = this.getCoorByPos(localPos);
        this.gobangScene.onBoardTouched(coor);
    };
    GobangBoard.prototype.getCoorByPos = function (pos) {
        var touchCol = Math.round((pos.x - this.startX) / this.tileWidth);
        var touchRow = Math.round((pos.y - this.startY) / this.tileWidth);
        return cc.v2(touchCol, touchRow);
    };
    GobangBoard.prototype.judgeWin = function () {
        //判断横向
        var fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (this.pieceMap[x][this.lastPiece.y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount === 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断纵向
        fiveCount = 0;
        for (var y = 0; y < this.rowsSum; y++) {
            if (this.pieceMap[this.lastPiece.x][y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右上斜向
        var f = this.lastPiece.y - this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (f + x < 0 || f + x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f + x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右下斜向
        f = this.lastPiece.y + this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < 15; x++) {
            if (f - x < 0 || f - x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f - x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        return false;
    };
    GobangBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
    };
    GobangBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics2", void 0);
    GobangBoard = __decorate([
        ccclass
    ], GobangBoard);
    return GobangBoard;
}(cc.Component));
exports.GobangBoard = GobangBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQXVEO0FBQ3ZELDZDQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQW9MQztRQWpMVyxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsY0FBUSxHQUFnQixJQUFJLENBQUMsQ0FBQyxVQUFVO1FBRXhDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDLENBQUMsVUFBVTtRQUV6QyxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNqQyxZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUM1QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNqQyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV6QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBaUs1QyxDQUFDO0lBL0pVLDBCQUFJLEdBQVgsVUFBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsTUFBTTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtRQUNELE1BQU07UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJ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LE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxxQ0FBZSxHQUF2QjtJQUVBLENBQUM7SUFoTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aURBQ2U7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDZ0I7SUFUN0IsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQW9MdkI7SUFBRCxrQkFBQztDQXBMRCxBQW9MQyxDQXBMZ0MsRUFBRSxDQUFDLFNBQVMsR0FvTDVDO0FBcExZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29iYW5nU2NlbmUgfSBmcm9tIFwiLi9Hb2JhbmdTY2VuZVwiO1xyXG5pbXBvcnQgeyBOT05FLCBCTEFDSywgV0hJVEUgfSBmcm9tIFwiLi9Hb2JhbmdDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgR29iYW5nUGllY2UgfSBmcm9tIFwiLi9Hb2JhbmdQaWVjZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHb2JhbmdCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGNvbHNTdW06IG51bWJlciA9IDE1O1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIHJvd3NTdW06IG51bWJlciA9IDE1O1xyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgcHJpdmF0ZSBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsOyAvLyDnlKjmnaXnlLvmo4vnm5jmo4vlrZBcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIHByaXZhdGUgZ3JhcGhpY3MyOiBjYy5HcmFwaGljcyA9IG51bGw7IC8vIOeUqOadpeeUu+S4iuWxglVJXHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlV2lkdGg6IG51bWJlciA9IDA7IC8vIOS4gOS4quaWueWdl+eahOWuveW6plxyXG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlciA9IDA7IC8vIOaji+ebmOW3puS4i+inklxyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGJvYXJkV2lkdGg6IG51bWJlciA9IDA7IC8vIOaji+ebmOiKgueCueWuvemrmFxyXG4gICAgcHJpdmF0ZSBib2FyZEhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBwaWVjZU1hcDogQXJyYXk8QXJyYXk8R29iYW5nUGllY2U+PjtcclxuICAgIHB1YmxpYyBsYXN0UGllY2U6IEdvYmFuZ1BpZWNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdvYmFuZ1NjZW5lOiBHb2JhbmdTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluaXQoZ29iYW5nU2NlbmU6IEdvYmFuZ1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5nb2JhbmdTY2VuZSA9IGdvYmFuZ1NjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMubm9kZS53aWR0aCAvIHRoaXMuY29sc1N1bTtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHRoaXMudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmJvYXJkV2lkdGggPSB0aGlzLnRpbGVXaWR0aCAqICh0aGlzLmNvbHNTdW0gLSAxKTtcclxuICAgICAgICB0aGlzLmJvYXJkSGVpZ2h0ID0gdGhpcy50aWxlV2lkdGggKiAodGhpcy5yb3dzU3VtIC0gMSk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljczIuY2xlYXIoKTtcclxuICAgICAgICAvLyDnlLvmo4vnm5hcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0aGlzLnN0YXJ0WCArIHggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5zdGFydFkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0aGlzLnN0YXJ0WCArIHggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5zdGFydFkgKyB0aGlzLmJvYXJkSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkgKyB5ICogdGhpcy50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0aGlzLnN0YXJ0WCArIHRoaXMuYm9hcmRXaWR0aCwgdGhpcy5zdGFydFkgKyB5ICogdGhpcy50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuK3lv4PngrlcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGxldCBjZW50ZXJDb2wgPSBNYXRoLmZsb29yKHRoaXMuY29sc1N1bSAvIDIpO1xyXG4gICAgICAgIGxldCBjZW50ZXJSb3cgPSBNYXRoLmZsb29yKHRoaXMucm93c1N1bSAvIDIpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKHRoaXMuc3RhcnRYICsgY2VudGVyQ29sICogdGhpcy50aWxlV2lkdGgsIHRoaXMuc3RhcnRZICsgY2VudGVyUm93ICogdGhpcy50aWxlV2lkdGgsIDUpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBpZWNlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeV1beF0gPSBuZXcgR29iYW5nUGllY2UoeCwgeSwgTk9ORSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3TGFzdFBpZWNlUmVjdCgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzMi5jbGVhcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQaWVjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljczIucmVjdCh0aGlzLnN0YXJ0WCArIHRoaXMudGlsZVdpZHRoICogdGhpcy5sYXN0UGllY2UueCAtIHRoaXMudGlsZVdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRZICsgdGhpcy50aWxlV2lkdGggKiB0aGlzLmxhc3RQaWVjZS55IC0gdGhpcy50aWxlV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZVdpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljczIuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZUJsYWNrKGNvb3I6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNpcmNsZSh0aGlzLnN0YXJ0WCArIGNvb3IueCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSArIGNvb3IueSAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVXaWR0aCAqIDAuNDUpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbY29vci54XVtjb29yLnldID0gbmV3IEdvYmFuZ1BpZWNlKGNvb3IueCwgY29vci55LCBCTEFDSyk7XHJcbiAgICAgICAgdGhpcy5sYXN0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2Nvb3IueF1bY29vci55XTtcclxuICAgICAgICB0aGlzLmRyYXdMYXN0UGllY2VSZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYWNlV2hpdGUoY29vcjogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKHRoaXMuc3RhcnRYICsgY29vci54ICogdGhpcy50aWxlV2lkdGgsIHRoaXMuc3RhcnRZICsgY29vci55ICogdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZVdpZHRoICogMC40NSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV0gPSBuZXcgR29iYW5nUGllY2UoY29vci54LCBjb29yLnksIFdISVRFKTtcclxuICAgICAgICB0aGlzLmxhc3RQaWVjZSA9IHRoaXMucGllY2VNYXBbY29vci54XVtjb29yLnldO1xyXG4gICAgICAgIHRoaXMuZHJhd0xhc3RQaWVjZVJlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGllY2VCeUNvb3IoY29vcjogY2MuVmVjMik6IEdvYmFuZ1BpZWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IGNvb3IgPSB0aGlzLmdldENvb3JCeVBvcyhsb2NhbFBvcyk7XHJcbiAgICAgICAgdGhpcy5nb2JhbmdTY2VuZS5vbkJvYXJkVG91Y2hlZChjb29yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvb3JCeVBvcyhwb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgdG91Y2hDb2wgPSBNYXRoLnJvdW5kKChwb3MueCAtIHRoaXMuc3RhcnRYKSAvIHRoaXMudGlsZVdpZHRoKTtcclxuICAgICAgICBsZXQgdG91Y2hSb3cgPSBNYXRoLnJvdW5kKChwb3MueSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMudGlsZVdpZHRoKTtcclxuICAgICAgICByZXR1cm4gY2MudjIodG91Y2hDb2wsIHRvdWNoUm93KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/liKTmlq3mqKrlkJFcclxuICAgICAgICBsZXQgZml2ZUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3RoaXMubGFzdFBpZWNlLnldLmNvbG9yID09PSB0aGlzLmxhc3RQaWVjZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgZml2ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat57q15ZCRXHJcbiAgICAgICAgZml2ZUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3RoaXMubGFzdFBpZWNlLnhdW3ldLmNvbG9yID09PSB0aGlzLmxhc3RQaWVjZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgZml2ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpdmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3lj7PkuIrmlpzlkJFcclxuICAgICAgICBsZXQgZiA9IHRoaXMubGFzdFBpZWNlLnkgLSB0aGlzLmxhc3RQaWVjZS54O1xyXG4gICAgICAgIGZpdmVDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoZiArIHggPCAwIHx8IGYgKyB4ID49IHRoaXMucm93c1N1bSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1bZiArIHhdLmNvbG9yID09PSB0aGlzLmxhc3RQaWVjZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgZml2ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpdmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3lj7PkuIvmlpzlkJFcclxuICAgICAgICBmID0gdGhpcy5sYXN0UGllY2UueSArIHRoaXMubGFzdFBpZWNlLng7XHJcbiAgICAgICAgZml2ZUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDE1OyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKGYgLSB4IDwgMCB8fCBmIC0geCA+PSB0aGlzLnJvd3NTdW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW2YgLSB4XS5jb2xvciA9PT0gdGhpcy5sYXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGZpdmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpdmVDb3VudCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '011d12M67BCB6Gv7D1zh1X3', 'JumpConstants');
// src/jump/JumpConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["READY"] = 1] = "READY";
    STATE[STATE["START"] = 2] = "START";
    STATE[STATE["OVER"] = 3] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxLQUtYO0FBTEQsV0FBWSxLQUFLO0lBQ2IsaUNBQVEsQ0FBQTtJQUNSLG1DQUFTLENBQUE7SUFDVCxtQ0FBUyxDQUFBO0lBQ1QsaUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFLaEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBTVEFURXtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgUkVBRFkgPSAxLFxyXG4gICAgU1RBUlQgPSAyLFxyXG4gICAgT1ZFUiA9IDNcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/hall/HallScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd226wRnxRPpLNRLPUta677', 'HallScene');
// src/hall/HallScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HallScene = void 0;
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallScene = /** @class */ (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallScene.prototype.onBtnGobang = function () {
        G_1.G.enterGobang();
    };
    HallScene.prototype.onBtnReversi = function () {
        G_1.G.enterReversi();
    };
    HallScene.prototype.onBtn2048 = function () {
        G_1.G.enter2048();
    };
    HallScene.prototype.onBtnJump = function () {
        G_1.G.enterJump();
    };
    HallScene.prototype.onBtnPuzzle = function () {
        G_1.G.enterPuzzle();
    };
    HallScene.prototype.onBtnGet47 = function () {
        G_1.G.enterGet47();
    };
    HallScene.prototype.onBtnTetris = function () {
        G_1.G.enterTetris();
    };
    HallScene.prototype.onBtnMine = function () {
        G_1.G.enterMine();
    };
    HallScene.prototype.onBtnLink = function () {
        G_1.G.enterLink();
    };
    HallScene.prototype.onBtnSnake = function () {
        G_1.G.enterSnake();
    };
    HallScene.prototype.onBtnBrick = function () {
        G_1.G.enterBrick();
    };
    HallScene.prototype.onPinball = function () {
        G_1.G.enterPinball();
    };
    HallScene = __decorate([
        ccclass
    ], HallScene);
    return HallScene;
}(cc.Component));
exports.HallScene = HallScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxoYWxsXFxIYWxsU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7O0lBa0RBLENBQUM7SUFoREcsK0JBQVcsR0FBWDtRQUNJLEtBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLEtBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLEtBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLEtBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLEtBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLEtBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLEtBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLEtBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLEtBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBaERRLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrRHJCO0lBQUQsZ0JBQUM7Q0FsREQsQUFrREMsQ0FsRDhCLEVBQUUsQ0FBQyxTQUFTLEdBa0QxQztBQWxEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBIYWxsU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uQnRuR29iYW5nKCkge1xyXG4gICAgICAgIEcuZW50ZXJHb2JhbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJldmVyc2koKSB7XHJcbiAgICAgICAgRy5lbnRlclJldmVyc2koKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bjIwNDgoKSB7XHJcbiAgICAgICAgRy5lbnRlcjIwNDgoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkp1bXAoKSB7XHJcbiAgICAgICAgRy5lbnRlckp1bXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blB1enpsZSgpIHtcclxuICAgICAgICBHLmVudGVyUHV6emxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5HZXQ0NygpIHtcclxuICAgICAgICBHLmVudGVyR2V0NDcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blRldHJpcygpIHtcclxuICAgICAgICBHLmVudGVyVGV0cmlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5NaW5lKCkge1xyXG4gICAgICAgIEcuZW50ZXJNaW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5MaW5rKCkge1xyXG4gICAgICAgIEcuZW50ZXJMaW5rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5TbmFrZSgpIHtcclxuICAgICAgICBHLmVudGVyU25ha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkJyaWNrKCkge1xyXG4gICAgICAgIEcuZW50ZXJCcmljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGluYmFsbCgpIHtcclxuICAgICAgICBHLmVudGVyUGluYmFsbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9347nByapGEZWvcbpq9syG', 'LinkConstants');
// src/link/LinkConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_STATE = exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));
var PIECE_STATE;
(function (PIECE_STATE) {
    PIECE_STATE[PIECE_STATE["IDLE"] = 0] = "IDLE";
    PIECE_STATE[PIECE_STATE["PRESS"] = 1] = "PRESS";
})(PIECE_STATE = exports.PIECE_STATE || (exports.PIECE_STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2IsaUNBQVEsQ0FBQTtJQUNSLG1DQUFTLENBQUE7SUFDVCxpQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUloQjtBQUNELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQiw2Q0FBUSxDQUFBO0lBQ1IsK0NBQVMsQ0FBQTtBQUNiLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFNUQVRFe1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBTVEFSVCA9IDEsXHJcbiAgICBPVkVSID0gMlxyXG59XHJcbmV4cG9ydCBlbnVtIFBJRUNFX1NUQVRFIHtcclxuICAgIElETEUgPSAwLFxyXG4gICAgUFJFU1MgPSAxXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineLevelLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4079avk3fFC/530/cecMnYc', 'MineLevelLabel');
// src/mine/MineLevelLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MineLevelLabel = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MineLevelLabel = /** @class */ (function (_super) {
    __extends(MineLevelLabel, _super);
    function MineLevelLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.s1 = null;
        _this.s2 = null;
        _this.nums = [];
        _this._level = 0;
        return _this;
    }
    Object.defineProperty(MineLevelLabel.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
            var n1 = value / 10 | 0;
            var n2 = value % 10;
            this.s1.spriteFrame = this.nums[n1];
            this.s2.spriteFrame = this.nums[n2];
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Sprite)
    ], MineLevelLabel.prototype, "s1", void 0);
    __decorate([
        property(cc.Sprite)
    ], MineLevelLabel.prototype, "s2", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], MineLevelLabel.prototype, "nums", void 0);
    MineLevelLabel = __decorate([
        ccclass
    ], MineLevelLabel);
    return MineLevelLabel;
}(cc.Component));
exports.MineLevelLabel = MineLevelLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lTGV2ZWxMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBcUJDO1FBbEJXLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsUUFBRSxHQUFjLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixZQUFNLEdBQVUsQ0FBQyxDQUFDOztJQVk5QixDQUFDO0lBVkcsc0JBQVcsaUNBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BUEE7SUFWRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQ1M7SUFQM0IsY0FBYztRQUQxQixPQUFPO09BQ0ssY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQXJCRCxBQXFCQyxDQXJCbUMsRUFBRSxDQUFDLFNBQVMsR0FxQi9DO0FBckJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBNaW5lTGV2ZWxMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHMxOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgczI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHByaXZhdGUgbnVtczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2xldmVsOm51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgbGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGxldmVsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9sZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBuMSA9IHZhbHVlIC8gMTAgfCAwO1xyXG4gICAgICAgIGxldCBuMiA9IHZhbHVlICUgMTA7XHJcbiAgICAgICAgdGhpcy5zMS5zcHJpdGVGcmFtZSA9IHRoaXMubnVtc1tuMV07XHJcbiAgICAgICAgdGhpcy5zMi5zcHJpdGVGcmFtZSA9IHRoaXMubnVtc1tuMl07XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/loading/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '118a2LRWWBIKY9afEfjWW/h', 'LoadingScene');
// src/loading/LoadingScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScene = void 0;
var G_1 = require("../G");
var GameRoot_1 = require("../shared/GameRoot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipLabel = null;
        _this.gameRoot = null;
        return _this;
    }
    LoadingScene.prototype.onLoad = function () {
        G_1.G.setResolutionPolicy();
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LoadingScene.prototype.initGlobal = function () {
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LoadingScene.prototype.start = function () {
        var _this = this;
        // cc.director.setDisplayStats(false);
        var tip = "始终相信美好的事情不会发生";
        var i = 0;
        this.tipLabel.string = '';
        this.schedule(function () {
            i++;
            if (i === tip.length + 1) {
                _this.onLoadSuccess();
            }
            else {
                _this.tipLabel.string = tip.substring(0, i);
            }
        }, 0.3, tip.length + 1, 0.3);
    };
    LoadingScene.prototype.onLoadSuccess = function () {
        G_1.G.enterHall();
    };
    __decorate([
        property(cc.Label)
    ], LoadingScene.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "gameRoot", void 0);
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.LoadingScene = LoadingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsb2FkaW5nXFxMb2FkaW5nU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBeUI7QUFDekIsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLGdDQUFZO0lBQTlDO1FBQUEscUVBbUNDO1FBaENXLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLElBQUksQ0FBQzs7SUE4QnBDLENBQUM7SUE1QkcsNkJBQU0sR0FBTjtRQUNJLEtBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLEtBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyw0QkFBSyxHQUFmO1FBQUEsaUJBYUM7UUFaRyxzQ0FBc0M7UUFDdEMsSUFBSSxHQUFHLEdBQUcsZUFBZSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUM7WUFDSixJQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO2lCQUFJO2dCQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sb0NBQWEsR0FBckI7UUFDSSxLQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUFMdkIsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQW1DeEI7SUFBRCxtQkFBQztDQW5DRCxBQW1DQyxDQW5DaUMsRUFBRSxDQUFDLFNBQVMsR0FtQzdDO0FBbkNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XHJcbmltcG9ydCB7IEdhbWVSb290IH0gZnJvbSBcIi4uL3NoYXJlZC9HYW1lUm9vdFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGdhbWVSb290OmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHLnNldFJlc29sdXRpb25Qb2xpY3koKTtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLmdhbWVSb290KTtcclxuICAgICAgICB0aGlzLmluaXRHbG9iYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2xvYmFsKCkge1xyXG4gICAgICAgIEcuZ2FtZVJvb3QgPSB0aGlzLmdhbWVSb290LmdldENvbXBvbmVudChHYW1lUm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgbGV0IHRpcCA9IFwi5aeL57uI55u45L+h576O5aW955qE5LqL5oOF5LiN5Lya5Y+R55SfXCJcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSAnJztcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYoaSA9PT0gdGlwLmxlbmd0aCsxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcC5zdWJzdHJpbmcoMCxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sMC4zLHRpcC5sZW5ndGgrMSwwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2FkU3VjY2VzcygpIHtcclxuICAgICAgICBHLmVudGVySGFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80923WSrblNDr5l6s/fRBrL', 'ReversiBoard');
// src/reversi/ReversiBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiBoard = void 0;
var ReversiPiece_1 = require("./ReversiPiece");
var ReversiConstants_1 = require("./ReversiConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ReversiBoard = /** @class */ (function (_super) {
    __extends(ReversiBoard, _super);
    function ReversiBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 8;
        _this.rowsSum = 8;
        _this.graphics = null; // 用来画棋盘
        _this.graphics2 = null; // 用来画棋子
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.lastPiece = null;
        _this.reversiScene = null;
        return _this;
    }
    ReversiBoard.prototype.init = function (reversiScene) {
        this.reversiScene = reversiScene;
        this.tileWidth = this.node.width / (this.colsSum + 1);
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * this.colsSum;
        this.boardHeight = this.tileWidth * this.rowsSum;
        this.reset();
        this.addListeners();
    };
    ReversiBoard.prototype.reset = function () {
        this.graphics.clear();
        this.graphics2.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum + 1; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum + 1; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        this.pieceMap = [];
        for (var x = 0; x < this.colsSum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsSum; y++) {
                this.pieceMap[x][y] = new ReversiPiece_1.ReversiPiece(x, y, ReversiConstants_1.NONE);
            }
        }
        this.placeBlack(cc.v2(Math.floor(this.colsSum / 2) - 1, Math.floor(this.rowsSum / 2) - 1));
        this.placeBlack(cc.v2(Math.floor(this.colsSum / 2), Math.floor(this.rowsSum / 2)));
        this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum / 2) - 1, Math.floor(this.rowsSum / 2))));
        this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum / 2), Math.floor(this.rowsSum / 2) - 1)));
    };
    ReversiBoard.prototype.refresh = function () {
        this.graphics2.clear();
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].color === ReversiConstants_1.BLACK) {
                    this.graphics2.strokeColor = cc.Color.BLACK;
                    this.graphics2.fillColor = cc.Color.BLACK;
                    this.graphics2.circle(this.startX + x * this.tileWidth + this.tileWidth / 2, this.startY + y * this.tileWidth + this.tileWidth / 2, this.tileWidth * 0.45);
                    this.graphics2.fill();
                }
                else if (this.pieceMap[x][y].color === ReversiConstants_1.WHITE) {
                    this.graphics2.strokeColor = cc.Color.WHITE;
                    this.graphics2.fillColor = cc.Color.WHITE;
                    this.graphics2.circle(this.startX + x * this.tileWidth + this.tileWidth / 2, this.startY + y * this.tileWidth + this.tileWidth / 2, this.tileWidth * 0.45);
                    this.graphics2.fill();
                }
            }
        }
    };
    ReversiBoard.prototype.placeBlack = function (coor) {
        this.pieceMap[coor.x][coor.y] = new ReversiPiece_1.ReversiPiece(coor.x, coor.y, ReversiConstants_1.BLACK);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.refresh();
    };
    ReversiBoard.prototype.placeWhite = function (coor) {
        this.pieceMap[coor.x][coor.y] = new ReversiPiece_1.ReversiPiece(coor.x, coor.y, ReversiConstants_1.WHITE);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.refresh();
    };
    ReversiBoard.prototype.getPieceByCoor = function (coor) {
        return this.pieceMap[coor.x][coor.y];
    };
    ReversiBoard.prototype.onTouched = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (localPos.x < this.startX || localPos.y < this.startY
            || localPos.x > this.startX + this.boardWidth
            || localPos.y > this.startY + this.boardHeight) {
            return;
        }
        var coor = this.getCoorByPos(localPos);
        this.reversiScene.onBoardTouched(coor);
    };
    ReversiBoard.prototype.getCoorByPos = function (pos) {
        var touchCol = Math.round((pos.x - this.startX - this.tileWidth / 2) / this.tileWidth);
        var touchRow = Math.round((pos.y - this.startY - this.tileWidth / 2) / this.tileWidth);
        return cc.v2(touchCol, touchRow);
    };
    ReversiBoard.prototype.nearPiece = function (piece, dir) {
        switch (dir) {
            case 1: //left
                if (piece.x !== 0) {
                    return this.pieceMap[piece.x - 1][piece.y];
                }
                break;
            case 2: //left up
                if (piece.x !== 0 && piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x - 1][piece.y + 1];
                }
                break;
            case 3: //up
                if (piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x][piece.y + 1];
                }
                break;
            case 4: //right up
                if (piece.x !== this.colsSum - 1 && piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x + 1][piece.y + 1];
                }
                break;
            case 5: //right
                if (piece.x !== this.colsSum - 1) {
                    return this.pieceMap[piece.x + 1][piece.y];
                }
                break;
            case 6: //right down
                if (piece.x !== this.colsSum - 1 && piece.y !== 0) {
                    return this.pieceMap[piece.x + 1][piece.y - 1];
                }
                break;
            case 7: //down
                if (piece.y !== 0) {
                    return this.pieceMap[piece.x][piece.y - 1];
                }
                break;
            case 8: //left down
                if (piece.x !== 0 && piece.y !== 0) {
                    return this.pieceMap[piece.x - 1][piece.y - 1];
                }
                break;
            default:
                break;
        }
        return null;
    };
    ReversiBoard.prototype.judgePass = function (stand, piece, dir) {
        var tempPiece = piece;
        tempPiece = this.nearPiece(piece, dir);
        if (tempPiece === null) {
            return false;
        }
        while (tempPiece.color === -stand) {
            tempPiece = this.nearPiece(tempPiece, dir);
            if (tempPiece === null) {
                return false;
            }
            if (tempPiece.color === stand) {
                return true;
            }
        }
        return false;
    };
    ReversiBoard.prototype.changePass = function (piece, dir) {
        var tempPiece = this.nearPiece(piece, dir);
        while (tempPiece.color === -this.reversiScene.state) {
            tempPiece.color = piece.color;
            tempPiece = this.nearPiece(tempPiece, dir);
        }
        this.refresh();
    };
    ReversiBoard.prototype.canPlace = function (color, coor) {
        for (var dir = 1; dir <= 8; dir++) {
            if (this.judgePass(color, this.getPieceByCoor(coor), dir)) {
                return true;
            }
            if (dir === 8) {
                return false;
            }
        }
    };
    ReversiBoard.prototype.judgeMoveable = function (stand) {
        var tryPiece = null;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                tryPiece = this.pieceMap[x][y];
                if (tryPiece.color === ReversiConstants_1.NONE) {
                    for (var dir = 1; dir <= 8; dir++) {
                        if (this.judgePass(stand, tryPiece, dir)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    ReversiBoard.prototype.judgeWin = function () {
        var selfMoveAble = this.judgeMoveable(this.lastPiece.color);
        var oppoMoveAble = this.judgeMoveable(-this.lastPiece.color);
        if (!selfMoveAble && !oppoMoveAble) {
            return true;
        }
        else {
            return false;
        }
    };
    ReversiBoard.prototype.getPieceCount = function () {
        var blackPieceSum = 0;
        var whitePieceSum = 0;
        for (var x = 0; x < this.pieceMap.length; x++) {
            for (var y = 0; y < this.pieceMap[x].length; y++) {
                if (this.pieceMap[x][y].color === ReversiConstants_1.BLACK) {
                    blackPieceSum++;
                }
                else if (this.pieceMap[x][y].color === ReversiConstants_1.WHITE) {
                    whitePieceSum++;
                }
            }
        }
        return { blackPieceSum: blackPieceSum, whitePieceSum: whitePieceSum };
    };
    ReversiBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
    };
    ReversiBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Integer)
    ], ReversiBoard.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], ReversiBoard.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], ReversiBoard.prototype, "graphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], ReversiBoard.prototype, "graphics2", void 0);
    ReversiBoard = __decorate([
        ccclass
    ], ReversiBoard);
    return ReversiBoard;
}(cc.Component));
exports.ReversiBoard = ReversiBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUMsdURBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLGdDQUFZO0lBQTlDO1FBQUEscUVBNFBDO1FBMVBXLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixjQUFRLEdBQWdCLElBQUksQ0FBQyxDQUFDLFFBQVE7UUFFdEMsZUFBUyxHQUFnQixJQUFJLENBQUMsQ0FBQyxRQUFRO1FBRXZDLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ2pDLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQzVCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2pDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQWlCLElBQUksQ0FBQzs7SUEwTzlDLENBQUM7SUF4T1UsMkJBQUksR0FBWCxVQUFZLFlBQTBCO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxT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QyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssd0JBQUssRUFBRTtvQkFDckMsYUFBYSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssd0JBQUssRUFBRTtvQkFDNUMsYUFBYSxFQUFFLENBQUM7aUJBQ25CO2FBQ0o7U0FDSjtRQUNELE9BQU8sRUFBRSxhQUFhLGVBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxzQ0FBZSxHQUF2QjtJQUVBLENBQUM7SUF6UEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDTztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ2U7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzttREFDZ0I7SUFSN0IsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTRQeEI7SUFBRCxtQkFBQztDQTVQRCxBQTRQQyxDQTVQaUMsRUFBRSxDQUFDLFNBQVMsR0E0UDdDO0FBNVBZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZXJzaVBpZWNlIH0gZnJvbSBcIi4vUmV2ZXJzaVBpZWNlXCI7XHJcbmltcG9ydCB7IFJldmVyc2lTY2VuZSB9IGZyb20gXCIuL1JldmVyc2lTY2VuZVwiO1xyXG5pbXBvcnQgeyBOT05FLCBCTEFDSywgV0hJVEUgfSBmcm9tIFwiLi9SZXZlcnNpQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFJldmVyc2lCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgY29sc1N1bTogbnVtYmVyID0gODtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSByb3dzU3VtOiBudW1iZXIgPSA4O1xyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgcHJpdmF0ZSBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsOyAvLyDnlKjmnaXnlLvmo4vnm5hcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIHByaXZhdGUgZ3JhcGhpY3MyOiBjYy5HcmFwaGljcyA9IG51bGw7IC8vIOeUqOadpeeUu+aji+WtkFxyXG5cclxuICAgIHByaXZhdGUgdGlsZVdpZHRoOiBudW1iZXIgPSAwOyAvLyDkuIDkuKrmlrnlnZfnmoTlrr3luqZcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAwOyAvLyDmo4vnm5jlt6bkuIvop5JcclxuICAgIHByaXZhdGUgc3RhcnRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBib2FyZFdpZHRoOiBudW1iZXIgPSAwOyAvLyDmo4vnm5joioLngrnlrr3pq5hcclxuICAgIHByaXZhdGUgYm9hcmRIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGllY2VNYXA6IEFycmF5PEFycmF5PFJldmVyc2lQaWVjZT4+O1xyXG4gICAgcHVibGljIGxhc3RQaWVjZTogUmV2ZXJzaVBpZWNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJldmVyc2lTY2VuZTogUmV2ZXJzaVNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChyZXZlcnNpU2NlbmU6IFJldmVyc2lTY2VuZSkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJzaVNjZW5lID0gcmV2ZXJzaVNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMubm9kZS53aWR0aCAvICh0aGlzLmNvbHNTdW0gKyAxKTtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHRoaXMudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmJvYXJkV2lkdGggPSB0aGlzLnRpbGVXaWR0aCAqIHRoaXMuY29sc1N1bTtcclxuICAgICAgICB0aGlzLmJvYXJkSGVpZ2h0ID0gdGhpcy50aWxlV2lkdGggKiB0aGlzLnJvd3NTdW07XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljczIuY2xlYXIoKTtcclxuICAgICAgICAvLyDnlLvmo4vnm5hcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW0gKyAxOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odGhpcy5zdGFydFggKyB4ICogdGhpcy50aWxlV2lkdGgsIHRoaXMuc3RhcnRZKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8odGhpcy5zdGFydFggKyB4ICogdGhpcy50aWxlV2lkdGgsIHRoaXMuc3RhcnRZICsgdGhpcy5ib2FyZEhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzU3VtICsgMTsgeSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSArIHkgKiB0aGlzLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuc3RhcnRYICsgdGhpcy5ib2FyZFdpZHRoLCB0aGlzLnN0YXJ0WSArIHkgKiB0aGlzLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBpZWNlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzU3VtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBuZXcgUmV2ZXJzaVBpZWNlKHgsIHksIE5PTkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYWNlQmxhY2soY2MudjIoTWF0aC5mbG9vcih0aGlzLmNvbHNTdW0gLyAyKSAtIDEsIE1hdGguZmxvb3IodGhpcy5yb3dzU3VtIC8gMikgLSAxKSk7XHJcbiAgICAgICAgdGhpcy5wbGFjZUJsYWNrKGNjLnYyKE1hdGguZmxvb3IodGhpcy5jb2xzU3VtIC8gMiksIE1hdGguZmxvb3IodGhpcy5yb3dzU3VtIC8gMikpKTtcclxuICAgICAgICB0aGlzLnBsYWNlV2hpdGUoY2MudjIoY2MudjIoTWF0aC5mbG9vcih0aGlzLmNvbHNTdW0gLyAyKSAtIDEsIE1hdGguZmxvb3IodGhpcy5yb3dzU3VtIC8gMikpKSk7XHJcbiAgICAgICAgdGhpcy5wbGFjZVdoaXRlKGNjLnYyKGNjLnYyKE1hdGguZmxvb3IodGhpcy5jb2xzU3VtIC8gMiksIE1hdGguZmxvb3IodGhpcy5yb3dzU3VtIC8gMikgLSAxKSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljczIuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzU3VtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLmNvbG9yID09PSBCTEFDSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MyLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljczIuZmlsbENvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljczIuY2lyY2xlKHRoaXMuc3RhcnRYICsgeCAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnN0YXJ0WSArIHkgKiB0aGlzLnRpbGVXaWR0aCArIHRoaXMudGlsZVdpZHRoIC8gMiwgdGhpcy50aWxlV2lkdGggKiAwLjQ1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGllY2VNYXBbeF1beV0uY29sb3IgPT09IFdISVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljczIuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5maWxsQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5jaXJjbGUodGhpcy5zdGFydFggKyB4ICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMuc3RhcnRZICsgeSAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnRpbGVXaWR0aCAqIDAuNDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MyLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VCbGFjayhjb29yOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV0gPSBuZXcgUmV2ZXJzaVBpZWNlKGNvb3IueCwgY29vci55LCBCTEFDSyk7XHJcbiAgICAgICAgdGhpcy5sYXN0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2Nvb3IueF1bY29vci55XTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VXaGl0ZShjb29yOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV0gPSBuZXcgUmV2ZXJzaVBpZWNlKGNvb3IueCwgY29vci55LCBXSElURSk7XHJcbiAgICAgICAgdGhpcy5sYXN0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2Nvb3IueF1bY29vci55XTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGllY2VCeUNvb3IoY29vcjogY2MuVmVjMik6IFJldmVyc2lQaWVjZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbY29vci54XVtjb29yLnldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaGVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGlmIChsb2NhbFBvcy54IDwgdGhpcy5zdGFydFggfHwgbG9jYWxQb3MueSA8IHRoaXMuc3RhcnRZXHJcbiAgICAgICAgICAgIHx8IGxvY2FsUG9zLnggPiB0aGlzLnN0YXJ0WCArIHRoaXMuYm9hcmRXaWR0aFxyXG4gICAgICAgICAgICB8fCBsb2NhbFBvcy55ID4gdGhpcy5zdGFydFkgKyB0aGlzLmJvYXJkSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvb3IgPSB0aGlzLmdldENvb3JCeVBvcyhsb2NhbFBvcyk7XHJcbiAgICAgICAgdGhpcy5yZXZlcnNpU2NlbmUub25Cb2FyZFRvdWNoZWQoY29vcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb29yQnlQb3MocG9zOiBjYy5WZWMyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHRvdWNoQ29sID0gTWF0aC5yb3VuZCgocG9zLnggLSB0aGlzLnN0YXJ0WCAtIHRoaXMudGlsZVdpZHRoIC8gMikgLyB0aGlzLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgbGV0IHRvdWNoUm93ID0gTWF0aC5yb3VuZCgocG9zLnkgLSB0aGlzLnN0YXJ0WSAtIHRoaXMudGlsZVdpZHRoIC8gMikgLyB0aGlzLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHRvdWNoQ29sLCB0b3VjaFJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZWFyUGllY2UocGllY2U6IFJldmVyc2lQaWVjZSwgZGlyOiBudW1iZXIpOiBSZXZlcnNpUGllY2Uge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL2xlZnRcclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS54ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbcGllY2UueCAtIDFdW3BpZWNlLnldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL2xlZnQgdXBcclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS54ICE9PSAwICYmIHBpZWNlLnkgIT09IHRoaXMucm93c1N1bSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFtwaWVjZS54IC0gMV1bcGllY2UueSArIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL3VwXHJcbiAgICAgICAgICAgICAgICBpZiAocGllY2UueSAhPT0gdGhpcy5yb3dzU3VtIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZWNlTWFwW3BpZWNlLnhdW3BpZWNlLnkgKyAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6Ly9yaWdodCB1cFxyXG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlLnggIT09IHRoaXMuY29sc1N1bSAtIDEgJiYgcGllY2UueSAhPT0gdGhpcy5yb3dzU3VtIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZWNlTWFwW3BpZWNlLnggKyAxXVtwaWVjZS55ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1Oi8vcmlnaHRcclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS54ICE9PSB0aGlzLmNvbHNTdW0gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbcGllY2UueCArIDFdW3BpZWNlLnldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjovL3JpZ2h0IGRvd25cclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS54ICE9PSB0aGlzLmNvbHNTdW0gLSAxICYmIHBpZWNlLnkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFtwaWVjZS54ICsgMV1bcGllY2UueSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzovL2Rvd25cclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS55ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbcGllY2UueF1bcGllY2UueSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODovL2xlZnQgZG93blxyXG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlLnggIT09IDAgJiYgcGllY2UueSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZWNlTWFwW3BpZWNlLnggLSAxXVtwaWVjZS55IC0gMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAganVkZ2VQYXNzKHN0YW5kOiBudW1iZXIsIHBpZWNlOiBSZXZlcnNpUGllY2UsIGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbXBQaWVjZSA9IHBpZWNlO1xyXG4gICAgICAgIHRlbXBQaWVjZSA9IHRoaXMubmVhclBpZWNlKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgIGlmICh0ZW1wUGllY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGVtcFBpZWNlLmNvbG9yID09PSAtc3RhbmQpIHtcclxuICAgICAgICAgICAgdGVtcFBpZWNlID0gdGhpcy5uZWFyUGllY2UodGVtcFBpZWNlLCBkaXIpO1xyXG4gICAgICAgICAgICBpZiAodGVtcFBpZWNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRlbXBQaWVjZS5jb2xvciA9PT0gc3RhbmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYXNzKHBpZWNlOiBSZXZlcnNpUGllY2UsIGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbXBQaWVjZSA9IHRoaXMubmVhclBpZWNlKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgIHdoaWxlICh0ZW1wUGllY2UuY29sb3IgPT09IC10aGlzLnJldmVyc2lTY2VuZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICB0ZW1wUGllY2UuY29sb3IgPSBwaWVjZS5jb2xvcjtcclxuICAgICAgICAgICAgdGVtcFBpZWNlID0gdGhpcy5uZWFyUGllY2UodGVtcFBpZWNlLCBkaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5QbGFjZShjb2xvcjpudW1iZXIsY29vcjpjYy5WZWMyKTpib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBkaXIgPSAxOyBkaXIgPD0gODsgZGlyKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuanVkZ2VQYXNzKGNvbG9yLCB0aGlzLmdldFBpZWNlQnlDb29yKGNvb3IpLCBkaXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVkZ2VNb3ZlYWJsZShzdGFuZCkgey8v5Yik5patc3RhbmTmmK/lkKbmnInlj6/okL3lrZDnmoTlnLDmlrlcclxuICAgICAgICBsZXQgdHJ5UGllY2UgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJ5UGllY2UgPSB0aGlzLnBpZWNlTWFwW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyeVBpZWNlLmNvbG9yID09PSBOT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGlyID0gMTsgZGlyIDw9IDg7IGRpcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmp1ZGdlUGFzcyhzdGFuZCwgdHJ5UGllY2UsIGRpcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBqdWRnZVdpbigpIHtcclxuICAgICAgICBsZXQgc2VsZk1vdmVBYmxlID0gdGhpcy5qdWRnZU1vdmVhYmxlKHRoaXMubGFzdFBpZWNlLmNvbG9yKTtcclxuICAgICAgICBsZXQgb3Bwb01vdmVBYmxlID0gdGhpcy5qdWRnZU1vdmVhYmxlKC10aGlzLmxhc3RQaWVjZS5jb2xvcik7XHJcbiAgICAgICAgaWYgKCFzZWxmTW92ZUFibGUgJiYgIW9wcG9Nb3ZlQWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlQ291bnQoKSB7XHJcbiAgICAgICAgbGV0IGJsYWNrUGllY2VTdW0gPSAwO1xyXG4gICAgICAgIGxldCB3aGl0ZVBpZWNlU3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGllY2VNYXAubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBpZWNlTWFwW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5jb2xvciA9PT0gQkxBQ0spIHtcclxuICAgICAgICAgICAgICAgICAgICBibGFja1BpZWNlU3VtKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGllY2VNYXBbeF1beV0uY29sb3IgPT09IFdISVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVQaWVjZVN1bSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGJsYWNrUGllY2VTdW0sIHdoaXRlUGllY2VTdW0gfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e5087jnptHobsyq50wncmT', 'Timer');
// src/shared/Timer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerLabel = null;
        _this.time = null;
        return _this;
    }
    Timer.prototype.run = function () {
        this.time = 0;
        this.schedule(this.tick, 0.1);
    };
    Timer.prototype.tick = function () {
        this.time += 0.1;
        this.timerLabel.string = this.time.toFixed(1) + " s";
    };
    Timer.prototype.stop = function () {
        this.unschedule(this.tick);
    };
    Timer.prototype.reset = function () {
        this.time = 0;
        this.timerLabel.string = "0.0 s";
    };
    __decorate([
        property(cc.Label)
    ], Timer.prototype, "timerLabel", void 0);
    Timer = __decorate([
        ccclass
    ], Timer);
    return Timer;
}(cc.Component));
exports.Timer = Timer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXFRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUF5QkM7UUF0QlcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFVLElBQUksQ0FBQzs7SUFvQjlCLENBQUM7SUFsQlUsbUJBQUcsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxvQkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pELENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ2lCO0lBSDNCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0F5QmpCO0lBQUQsWUFBQztDQXpCRCxBQXlCQyxDQXpCMEIsRUFBRSxDQUFDLFNBQVMsR0F5QnRDO0FBekJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUaW1lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIHB1YmxpYyB0aW1lOm51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHJ1bigpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrLDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aWNrKCkge1xyXG4gICAgICAgIHRoaXMudGltZSArPSAwLjE7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDEpICsgXCIgc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSBcIjAuMCBzXCI7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzleConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd89d7sU+zdF0KOaog5T9QzY', 'PuzzleConstants');
// src/puzzle/PuzzleConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["READY"] = 1] = "READY";
    STATE[STATE["START"] = 2] = "START";
    STATE[STATE["OVER"] = 3] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZUNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksS0FLWDtBQUxELFdBQVksS0FBSztJQUNiLGlDQUFRLENBQUE7SUFDUixtQ0FBUyxDQUFBO0lBQ1QsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBTFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBS2hCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU1RBVEV7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFJFQURZID0gMSxcclxuICAgIFNUQVJUID0gMixcclxuICAgIE9WRVIgPSAzXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakeConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3022Uj6HRLv61LrPccRv/n', 'SnakeConstants');
// src/snake/SnakeConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_TYPE = exports.DIRECTION = void 0;
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["UP"] = -2] = "UP";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    DIRECTION[DIRECTION["DOWN"] = 2] = "DOWN";
})(DIRECTION = exports.DIRECTION || (exports.DIRECTION = {}));
var PIECE_TYPE;
(function (PIECE_TYPE) {
    PIECE_TYPE[PIECE_TYPE["BLANK"] = 0] = "BLANK";
    PIECE_TYPE[PIECE_TYPE["FOOD"] = 1] = "FOOD";
    PIECE_TYPE[PIECE_TYPE["SNAKE_HEAD"] = 2] = "SNAKE_HEAD";
    PIECE_TYPE[PIECE_TYPE["SNAKE_BODY"] = 3] = "SNAKE_BODY";
    // SNAKE_JOINT = 4,
    PIECE_TYPE[PIECE_TYPE["SNAKE_TAIL"] = 5] = "SNAKE_TAIL";
})(PIECE_TYPE = exports.PIECE_TYPE || (exports.PIECE_TYPE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VDb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsMENBQVMsQ0FBQTtJQUNULHNDQUFPLENBQUE7SUFDUCwyQ0FBUyxDQUFBO0lBQ1QseUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUVELElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQiw2Q0FBUyxDQUFBO0lBQ1QsMkNBQVEsQ0FBQTtJQUNSLHVEQUFjLENBQUE7SUFDZCx1REFBYyxDQUFBO0lBQ2QsbUJBQW1CO0lBQ25CLHVEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRElSRUNUSU9OIHtcclxuICAgIExFRlQgPSAtMSxcclxuICAgIFVQID0gLTIsXHJcbiAgICBSSUdIVCA9IDEsXHJcbiAgICBET1dOID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQSUVDRV9UWVBFIHtcclxuICAgIEJMQU5LID0gMCxcclxuICAgIEZPT0QgPSAxLFxyXG4gICAgU05BS0VfSEVBRCA9IDIsXHJcbiAgICBTTkFLRV9CT0RZID0gMyxcclxuICAgIC8vIFNOQUtFX0pPSU5UID0gNCxcclxuICAgIFNOQUtFX1RBSUwgPSA1XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be503PDOvtNXIDhuGvVUML8', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwcm9qZWN0cyBwcmlvciB0byB2Mi4xLjAuXHJcbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXHJcbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXHJcbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuaWYgKGNjLlRvZ2dsZSkge1xyXG4gICAgLy8gV2hldGhlciB0aGUgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIGFyZSBmaXJlZCB3aGVuICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIGlzIGNhbGxlZCBpbiB0aGUgY29kZVxyXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/tetris/TetrisConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dda65IwMBO4peY9Ktr0VrB', 'TetrisConstants');
// src/tetris/TetrisConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx0ZXRyaXNcXFRldHJpc0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksS0FJWDtBQUpELFdBQVksS0FBSztJQUNiLGlDQUFRLENBQUE7SUFDUixtQ0FBUyxDQUFBO0lBQ1QsaUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFJaEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBTVEFURXtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgU1RBUlQgPSAxLFxyXG4gICAgT1ZFUiA9IDJcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc55f3NtT5G+KpukC6ZPkmK', 'Get47Piece');
// src/get47/Get47Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pics = [];
        _this.sprite = null;
        _this.x = 0;
        _this.y = 0;
        _this.posIndex = cc.v2();
        _this.isAlive = true;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            this.sprite.spriteFrame = this.pics[value - 1];
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y) {
        this.x = x;
        this.y = y;
        this.posIndex = this.node.position;
        this.randomType();
        this.isAlive = true;
    };
    Piece.prototype.randomType = function () {
        this.type = Math.floor(Math.random() * this.pics.length) + 1;
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Piece.prototype, "pics", void 0);
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdQaWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBK0JDO1FBNUJXLFVBQUksR0FBMEIsRUFBRSxDQUFDO1FBRWpDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFMUIsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFRLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFvQjNCLENBQUM7SUFuQkcsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1NLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFO0lBQ2hFLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dUNBQ2M7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDYTtJQUx4QixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBK0JqQjtJQUFELFlBQUM7Q0EvQkQsQUErQkMsQ0EvQjBCLEVBQUUsQ0FBQyxTQUFTLEdBK0J0QztBQS9CWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgcHJpdmF0ZSBwaWNzOiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBvc0luZGV4OiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIHB1YmxpYyBpc0FsaXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX246IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNzW3ZhbHVlIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5wb3NJbmRleCA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnJhbmRvbVR5cGUoKTtcclxuICAgICAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVR5cGUoKXtcclxuICAgICAgICB0aGlzLnR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5waWNzLmxlbmd0aCkgKyAxIDtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickPaddle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21d56KpJ3FBQL2sth9PNm1+', 'BrickPaddle');
// src/brick/BrickPaddle.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickPaddle = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickPaddle = /** @class */ (function (_super) {
    __extends(BrickPaddle, _super);
    function BrickPaddle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrickPaddle.prototype.onLoad = function () {
        var _this = this;
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //将世界坐标转化为本地坐标
            var touchPoint = _this.node.parent.convertToNodeSpace(event.getLocation());
            _this.node.x = touchPoint.x;
        });
    };
    BrickPaddle.prototype.init = function () {
        this.node.x = 360;
    };
    BrickPaddle = __decorate([
        ccclass
    ], BrickPaddle);
    return BrickPaddle;
}(cc.Component));
exports.BrickPaddle = BrickPaddle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tQYWRkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQywrQkFBWTtJQUE3Qzs7SUFhQSxDQUFDO0lBWEcsNEJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQTBCO1lBQ3pFLGNBQWM7WUFDZCxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQVpRLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQWJELEFBYUMsQ0FiZ0MsRUFBRSxDQUFDLFNBQVMsR0FhNUM7QUFiWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEJyaWNrUGFkZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5bCG5LiW55WM5Z2Q5qCH6L2s5YyW5Li65pys5Zyw5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2UoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdG91Y2hQb2ludC54O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IDM2MDtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '695b581X8JE+455NQwB9qyS', 'BrickBall');
// src/brick/BrickBall.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBall = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickBall = /** @class */ (function (_super) {
    __extends(BrickBall, _super);
    function BrickBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickScene = null;
        return _this;
    }
    BrickBall.prototype.init = function (brickScene) {
        this.brickScene = brickScene;
        this.node.position = cc.v2(360, 270); //初始化位置
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800, 800); //初始化速度
    };
    BrickBall.prototype.onBeginContact = function (contact, self, other) {
        switch (other.tag) {
            case 1: //球碰到砖块
                this.brickScene.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰到地面
                this.brickScene.onBallContactGround(self.node, other.node);
                break;
            case 3: //球碰到托盘
                this.brickScene.onBallContactPaddle(self.node, other.node);
                break;
            case 4: //球碰到墙
                this.brickScene.onBallContactWall(self.node, other.node);
                break;
        }
    };
    BrickBall = __decorate([
        ccclass
    ], BrickBall);
    return BrickBall;
}(cc.Component));
exports.BrickBall = BrickBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUEwQkM7UUF4QlcsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBd0IxQyxDQUFDO0lBdEJHLHdCQUFJLEdBQUosVUFBSyxVQUFxQjtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLE9BQU87UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztJQUMzRSxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixRQUFRLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07U0FDYjtJQUNMLENBQUM7SUF6QlEsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTBCckI7SUFBRCxnQkFBQztDQTFCRCxBQTBCQyxDQTFCOEIsRUFBRSxDQUFDLFNBQVMsR0EwQjFDO0FBMUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJpY2tTY2VuZSB9IGZyb20gXCIuL0JyaWNrU2NlbmVcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEJyaWNrQmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBicmlja1NjZW5lOiBCcmlja1NjZW5lID0gbnVsbDtcclxuXHJcbiAgICBpbml0KGJyaWNrU2NlbmU6QnJpY2tTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuYnJpY2tTY2VuZSA9IGJyaWNrU2NlbmU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoMzYwLDI3MCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoODAwLDgwMCk7Ly/liJ3lp4vljJbpgJ/luqZcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+eQg+eisOWIsOegluWdl1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icmlja1NjZW5lLm9uQmFsbENvbnRhY3RCcmljayhzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+eQg+eisOWIsOWcsOmdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmlja1NjZW5lLm9uQmFsbENvbnRhY3RHcm91bmQoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6Ly/nkIPnorDliLDmiZjnm5hcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tTY2VuZS5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v55CD56Kw5Yiw5aKZXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrU2NlbmUub25CYWxsQ29udGFjdFdhbGwoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fcd3v+r05H8q3UVtZU7Lkf', 'GobangScene');
// src/gobang/GobangScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangScene = void 0;
var GobangBoard_1 = require("./GobangBoard");
var GobangConstants_1 = require("./GobangConstants");
var GobangAI_1 = require("./GobangAI");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangScene = /** @class */ (function (_super) {
    __extends(GobangScene, _super);
    function GobangScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.ai = null;
        _this.state = GobangConstants_1.NONE;
        return _this;
    }
    GobangScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new GobangAI_1.GobangAI(this.board);
        this.startGame();
    };
    GobangScene.prototype.startGame = function () {
        this.state = GobangConstants_1.BLACK;
        this.board.reset();
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    GobangScene.prototype.overGame = function () {
        if (this.state === GobangConstants_1.BLACK) {
            cc.log("黑棋胜");
            this.state = GobangConstants_1.NONE;
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (this.state === GobangConstants_1.WHITE) {
            cc.log("白旗胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
            this.state = GobangConstants_1.NONE;
        }
    };
    GobangScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    GobangScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    GobangScene.prototype.onBoardTouched = function (coor) {
        var _this = this;
        switch (this.state) {
            case GobangConstants_1.NONE:
                break;
            case GobangConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== GobangConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                this.board.placeBlack(coor);
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    this.state = GobangConstants_1.WHITE;
                    this.scheduleOnce(function () {
                        _this.board.placeWhite(_this.ai.getNextCoor());
                        if (_this.board.judgeWin()) {
                            _this.overGame();
                        }
                        else {
                            _this.state = GobangConstants_1.BLACK;
                        }
                    }, 1);
                }
                break;
            case GobangConstants_1.WHITE:
                // this.board.placeWhite(coor);
                // if(this.board.judgeWin()) {
                //     cc.log("白棋胜");
                // }else {
                //     this.state = BLACK;
                // }
                break;
            default: break;
        }
    };
    __decorate([
        property(GobangBoard_1.GobangBoard)
    ], GobangScene.prototype, "board", void 0);
    GobangScene = __decorate([
        ccclass
    ], GobangScene);
    return GobangScene;
}(cc.Component));
exports.GobangScene = GobangScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHFEQUF1RDtBQUN2RCx1Q0FBc0M7QUFDdEMsMEJBQXlCO0FBQ25CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBaUZDO1FBOUVXLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFHLHNCQUFJLENBQUM7O0lBMkV6QixDQUFDO0lBekVHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssdUJBQUssRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBSSxDQUFDO1lBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFDbEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN2RDthQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyx1QkFBSyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZCxLQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQ3ZDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQUksQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsSUFBYTtRQUE1QixpQkFvQ0M7UUFuQ0csUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssc0JBQUk7Z0JBRVQsTUFBTTtZQUNOLEtBQUssdUJBQUs7Z0JBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxzQkFBSSxFQUFFO29CQUN0QixLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDbEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQzdDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDdkIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUM7eUJBQ3RCO29CQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxNQUFNO1lBQ1YsS0FBSyx1QkFBSztnQkFDTiwrQkFBK0I7Z0JBQy9CLDhCQUE4QjtnQkFDOUIscUJBQXFCO2dCQUNyQixVQUFVO2dCQUNWLDBCQUEwQjtnQkFDMUIsSUFBSTtnQkFDSixNQUFNO1lBQ1YsT0FBTyxDQUFDLENBQUMsTUFBTTtTQUNsQjtJQUNMLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMseUJBQVcsQ0FBQzs4Q0FDWTtJQUh6QixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBaUZ2QjtJQUFELGtCQUFDO0NBakZELEFBaUZDLENBakZnQyxFQUFFLENBQUMsU0FBUyxHQWlGNUM7QUFqRlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2JhbmdCb2FyZCB9IGZyb20gXCIuL0dvYmFuZ0JvYXJkXCI7XHJcbmltcG9ydCB7IE5PTkUsIEJMQUNLLCBXSElURSB9IGZyb20gXCIuL0dvYmFuZ0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHb2JhbmdBSSB9IGZyb20gXCIuL0dvYmFuZ0FJXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdvYmFuZ1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR29iYW5nQm9hcmQpXHJcbiAgICBwcml2YXRlIGJvYXJkOiBHb2JhbmdCb2FyZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhaTogR29iYW5nQUkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZSA9IE5PTkU7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWkgPSBuZXcgR29iYW5nQUkodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEJMQUNLO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkvaDmmK/pu5Hmo4vkvaDlhYjotbBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckdhbWUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gQkxBQ0spIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi6buR5qOL6IOcXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gTk9ORTtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDotaLkuobpmL/lsJTms5Xkuozni5fvvIFcIixcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyV55+l6YGT5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlID09PSBXSElURSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLnmb3ml5fog5xcIik7XHJcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g6L6T57uZ5LqG6Zi/5bCU5rOV5LqM54uX77yBXCIsXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyN5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4jeacjVwiLCBjYjogKCkgPT4geyB9LCB0YXJnZXQ6IHRoaXMgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBOT05FO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJldHVybigpIHtcclxuICAgICAgICBHLnJldHVybkhhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJlc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJvYXJkVG91Y2hlZChjb29yOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTk9ORTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJMQUNLOlxyXG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5ib2FyZC5nZXRQaWVjZUJ5Q29vcihjb29yKTtcclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIui/memHjOacieWtkOS6hu+8jOS9oOaYr+S4jeaYr+WCu1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBsYWNlQmxhY2soY29vcik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVdpbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gV0hJVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBsYWNlV2hpdGUodGhpcy5haS5nZXROZXh0Q29vcigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VXaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IEJMQUNLO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBXSElURTpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYm9hcmQucGxhY2VXaGl0ZShjb29yKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuYm9hcmQuanVkZ2VXaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNjLmxvZyhcIueZveaji+iDnFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bff9a8PUMtCz7ZHZp5ezQ9T', 'Get47Scene');
// src/get47/Get47Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Get47Scene = void 0;
var Get47Board_1 = require("./Get47Board");
var Get47Constants_1 = require("./Get47Constants");
var G_1 = require("../G");
var Get47Score_1 = require("./Get47Score");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Get47Scene = /** @class */ (function (_super) {
    __extends(Get47Scene, _super);
    function Get47Scene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.score = null;
        _this.target = 47;
        _this.state = Get47Constants_1.STATE.NONE;
        return _this;
    }
    Get47Scene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
        this.addListeners();
    };
    Get47Scene.prototype.startGame = function () {
        this.state = Get47Constants_1.STATE.START;
        this.board.reset();
        this.score.reset(0);
    };
    Get47Scene.prototype.overGame = function () {
        this.state = Get47Constants_1.STATE.OVER;
        G_1.G.gameRoot.showMaskMessage("666", { label: "233", cb: function () { }, target: this });
    };
    Get47Scene.prototype.updateScore = function (score) {
        if (this.state !== Get47Constants_1.STATE.START) {
            return;
        }
        if (score > 0) {
            this.score.add(score);
        }
        else if (score < 0) {
            this.score.minus(-score);
        }
        if (this.score.num === this.target) {
            this.overGame();
        }
    };
    Get47Scene.prototype.onPieceTouch = function (piece, dir) {
        if (this.state === Get47Constants_1.STATE.START) {
            this.board.tryExchange(piece, dir);
        }
    };
    Get47Scene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    Get47Scene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    Get47Scene.prototype.addListeners = function () {
        // (cc as any).inputManager.setAccelerometerEnabled(true);
        // cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    };
    Get47Scene.prototype.removeListeners = function () {
        cc.inputManager.setAccelerometerEnabled(false);
    };
    Get47Scene.prototype.onDeviceMotionEvent = function (event) {
        // if (Math.abs(event.acc.x) > 0.3 && Math.abs(event.acc.y) > 0.3) {
        //     this.board.newView();
        // }
        // 一个失败的创意
        // if(event.acc.x > 0.5){
        //     this.board.newView(1);
        // }
        // if(event.acc.x < -0.5) {
        //     this.board.newView(-1);
        // }
    };
    __decorate([
        property(Get47Board_1.Get47Board)
    ], Get47Scene.prototype, "board", void 0);
    __decorate([
        property(Get47Score_1.Score)
    ], Get47Scene.prototype, "score", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Scene.prototype, "target", void 0);
    Get47Scene = __decorate([
        ccclass
    ], Get47Scene);
    return Get47Scene;
}(cc.Component));
exports.Get47Scene = Get47Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUUxQyxtREFBOEM7QUFDOUMsMEJBQXlCO0FBQ3pCLDJDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQStFQztRQTVFVyxXQUFLLEdBQWUsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixXQUFLLEdBQVUsc0JBQUssQ0FBQyxJQUFJLENBQUM7O0lBc0V0QyxDQUFDO0lBcEVHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sNkJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFDNUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssc0JBQUssQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRU0saUNBQVksR0FBbkIsVUFBb0IsS0FBWSxFQUFFLEdBQVE7UUFDdEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLHNCQUFLLENBQUMsS0FBSyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksMERBQTBEO1FBQzFELDRGQUE0RjtJQUNoRyxDQUFDO0lBRU8sb0NBQWUsR0FBdkI7UUFDSyxFQUFVLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyx3Q0FBbUIsR0FBM0IsVUFBNEIsS0FBSztRQUM3QixvRUFBb0U7UUFDcEUsNEJBQTRCO1FBQzVCLElBQUk7UUFDSixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixJQUFJO0lBQ1IsQ0FBQztJQTFFRDtRQURDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDOzZDQUNZO0lBRWpDO1FBREMsUUFBUSxDQUFDLGtCQUFLLENBQUM7NkNBQ1k7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQVBuQixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBK0V0QjtJQUFELGlCQUFDO0NBL0VELEFBK0VDLENBL0UrQixFQUFFLENBQUMsU0FBUyxHQStFM0M7QUEvRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXQ0N0JvYXJkIH0gZnJvbSBcIi4vR2V0NDdCb2FyZFwiO1xyXG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gXCIuL0dldDQ3UGllY2VcIjtcclxuaW1wb3J0IHsgRElSLCBTVEFURSB9IGZyb20gXCIuL0dldDQ3Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL0dldDQ3U2NvcmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2V0NDdTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdldDQ3Qm9hcmQpXHJcbiAgICBwcml2YXRlIGJvYXJkOiBHZXQ0N0JvYXJkID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShTY29yZSlcclxuICAgIHByaXZhdGUgc2NvcmU6IFNjb3JlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlciA9IDQ3O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZS5yZXNldCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG92ZXJHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5PVkVSO1xyXG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwiNjY2XCIsXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiMjMzXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2NvcmUoc2NvcmU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY29yZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5hZGQoc2NvcmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUubWludXMoLXNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUubnVtID09PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm92ZXJHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBpZWNlVG91Y2gocGllY2U6IFBpZWNlLCBkaXI6IERJUikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnRyeUV4Y2hhbmdlKHBpZWNlLCBkaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdG5SZXN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgLy8gKGNjIGFzIGFueSkuaW5wdXRNYW5hZ2VyLnNldEFjY2VsZXJvbWV0ZXJFbmFibGVkKHRydWUpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5ERVZJQ0VNT1RJT04sIHRoaXMub25EZXZpY2VNb3Rpb25FdmVudCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgKGNjIGFzIGFueSkuaW5wdXRNYW5hZ2VyLnNldEFjY2VsZXJvbWV0ZXJFbmFibGVkKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGV2aWNlTW90aW9uRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICAvLyBpZiAoTWF0aC5hYnMoZXZlbnQuYWNjLngpID4gMC4zICYmIE1hdGguYWJzKGV2ZW50LmFjYy55KSA+IDAuMykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLm5ld1ZpZXcoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8g5LiA5Liq5aSx6LSl55qE5Yib5oSPXHJcbiAgICAgICAgLy8gaWYoZXZlbnQuYWNjLnggPiAwLjUpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLm5ld1ZpZXcoMSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKGV2ZW50LmFjYy54IDwgLTAuNSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLm5ld1ZpZXcoLTEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d1454ZxfBKuoBi2bCCS2eB', 'GobangConstants');
// src/gobang/GobangConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.WHITE = exports.BLACK = exports.NONE = void 0;
exports.NONE = 0;
exports.BLACK = 1;
exports.WHITE = 2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNULFFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNWLFFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBOT05FID0gMDtcclxuZXhwb3J0IGNvbnN0IEJMQUNLID0gMTtcclxuZXhwb3J0IGNvbnN0IFdISVRFID0gMjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b4dcrVKZGkYFaEw6tiwLd', 'JumpPlayer');
// src/jump/JumpPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.power = 0;
        _this.initSpeed = 0;
        _this.jumpDistance = 0;
        _this.speed = 0;
        _this.isReadyJump = false;
        _this.direction = 1;
        return _this;
    }
    Player.prototype.readyJump = function () {
        this.node.runAction(cc.scaleTo(2, 1, 0.5));
        this.speed = this.initSpeed;
        this.isReadyJump = true;
    };
    Player.prototype.jumpTo = function (targetPos, cb, cbTarget) {
        var _this = this;
        this.node.stopAllActions();
        // let targetPos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.isReadyJump = false;
        var resetAction = cc.scaleTo(1, 1, 1);
        var jumpAction = cc.jumpTo(0.5, targetPos, 200, 1);
        // let rotateAction = cc.rotateBy(0.5,this.direction*360);
        var finished = cc.callFunc(function () {
            _this.speed = 0;
            _this.jumpDistance = 0;
            cb();
        }, cbTarget);
        this.node.runAction(resetAction);
        this.node.runAction(cc.sequence(jumpAction, finished));
    };
    Player.prototype.update = function (dt) {
        if (this.isReadyJump) {
            this.speed += dt * this.power;
            this.jumpDistance += this.speed * dt;
        }
    };
    __decorate([
        property(cc.Integer)
    ], Player.prototype, "power", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "initSpeed", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE2Q0M7UUF6Q1UsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUErQmpDLENBQUM7SUE3QlUsMEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVCQUFNLEdBQWIsVUFBYyxTQUFpQixFQUFDLEVBQVcsRUFBQyxRQUFhO1FBQXpELGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsMERBQTBEO1FBQzFELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixFQUFFLEVBQUUsQ0FBQztRQUNULENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVNLHVCQUFNLEdBQWIsVUFBYyxFQUFFO1FBQ1osSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN4QztJQUNMLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNVO0lBTnBCLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0E2Q2xCO0lBQUQsYUFBQztDQTdDRCxBQTZDQyxDQTdDMkIsRUFBRSxDQUFDLFNBQVMsR0E2Q3ZDO0FBN0NZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIHBvd2VyOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGluaXRTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMganVtcERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaXNSZWFkeUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyByZWFkeUp1bXAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDIsMSwwLjUpKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5pbml0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5SnVtcCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBUbyh0YXJnZXRQb3M6Y2MuVmVjMixjYjpGdW5jdGlvbixjYlRhcmdldD86YW55KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVzZXRBY3Rpb24gPSBjYy5zY2FsZVRvKDEsMSwxKTtcclxuICAgICAgICBsZXQganVtcEFjdGlvbiA9IGNjLmp1bXBUbygwLjUsdGFyZ2V0UG9zLDIwMCwxKTtcclxuICAgICAgICAvLyBsZXQgcm90YXRlQWN0aW9uID0gY2Mucm90YXRlQnkoMC41LHRoaXMuZGlyZWN0aW9uKjM2MCk7XHJcbiAgICAgICAgbGV0IGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LGNiVGFyZ2V0KTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJlc2V0QWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGp1bXBBY3Rpb24sZmluaXNoZWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmlzUmVhZHlKdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgKz0gZHQgKiB0aGlzLnBvd2VyO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEaXN0YW5jZSArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1aa3dPul9JxbYweTzmBe9T', 'GobangPiece');
// src/gobang/GobangPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangPiece = void 0;
var GobangPiece = /** @class */ (function () {
    function GobangPiece(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    return GobangPiece;
}());
exports.GobangPiece = GobangPiece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ1BpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDSSxxQkFBbUIsQ0FBUSxFQUFRLENBQVEsRUFBUSxLQUFZO1FBQTVDLE1BQUMsR0FBRCxDQUFDLENBQU87UUFBUSxNQUFDLEdBQUQsQ0FBQyxDQUFPO1FBQVEsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFFLENBQUM7SUFDdEUsa0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdvYmFuZ1BpZWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4Om51bWJlcixwdWJsaWMgeTpudW1iZXIscHVibGljIGNvbG9yOm51bWJlcil7fVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpProgress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ecec+6EYpOOICro+tY1/xi', 'JumpProgress');
// src/jump/JumpProgress.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.anchor = null;
        _this.target = null;
        _this.length = 100;
        return _this;
    }
    Progress.prototype.init = function (length) {
        this.length = length;
        this.anchor.x = 0;
    };
    Progress.prototype.show = function () {
        this.node.active = true;
    };
    Progress.prototype.hide = function () {
        this.node.active = false;
    };
    Progress.prototype.updateProgress = function (progress) {
        this.progressBar.progress = progress / this.length;
        if (this.progressBar.progress >= 0.95) {
            this.anchor.x = this.node.width;
            return true;
        }
        else {
            this.anchor.x = this.node.getChildByName("bar").width;
            return false;
        }
    };
    __decorate([
        property(cc.ProgressBar)
    ], Progress.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Node)
    ], Progress.prototype, "anchor", void 0);
    __decorate([
        property(cc.Node)
    ], Progress.prototype, "target", void 0);
    Progress = __decorate([
        ccclass
    ], Progress);
    return Progress;
}(cc.Component));
exports.Progress = Progress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wUHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQWtDQztRQS9CVyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxHQUFHLENBQUM7O0lBeUJqQyxDQUFDO0lBdkJVLHVCQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0saUNBQWMsR0FBckIsVUFBc0IsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNrQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2E7SUFQdEIsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQWtDcEI7SUFBRCxlQUFDO0NBbENELEFBa0NDLENBbEM2QixFQUFFLENBQUMsU0FBUyxHQWtDekM7QUFsQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgcHVibGljIGluaXQobGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmFuY2hvci54ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcyAvIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPj0gMC45NSl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLnggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFuY2hvci54ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpLndpZHRoO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51bd5D4aHJO/be6iKwDn88G', 'Get47Score');
// src/get47/Get47Score.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.addLabel = null;
        _this.minusLabel = null;
        _this.anim = null;
        _this.num = 0;
        return _this;
    }
    Score.prototype.reset = function (n) {
        this.num = n;
        this.scoreLabel.string = n + "";
    };
    Score.prototype.add = function (n) {
        this.num += n;
        this.scoreLabel.string = this.num + "";
        this.addLabel.string = "+" + n;
        this.anim.play("add");
    };
    Score.prototype.minus = function (n) {
        this.num -= n;
        this.scoreLabel.string = this.num + "";
        this.minusLabel.string = "-" + n;
        this.anim.play("minus");
    };
    __decorate([
        property(cc.Label)
    ], Score.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Score.prototype, "addLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Score.prototype, "minusLabel", void 0);
    __decorate([
        property(cc.Animation)
    ], Score.prototype, "anim", void 0);
    Score = __decorate([
        ccclass
    ], Score);
    return Score;
}(cc.Component));
exports.Score = Score;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdTY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBZ0NDO1FBN0JXLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFM0IsU0FBRyxHQUFXLENBQUMsQ0FBQzs7SUFxQjNCLENBQUM7SUFuQlUscUJBQUssR0FBWixVQUFhLENBQVM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxtQkFBRyxHQUFWLFVBQVcsQ0FBUztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxDQUFTO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDaUI7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1Q0FDVztJQVR6QixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBZ0NqQjtJQUFELFlBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzBCLEVBQUUsQ0FBQyxTQUFTLEdBZ0N0QztBQWhDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBhZGRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBtaW51c0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBudW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHJlc2V0KG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubnVtID0gbjtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gbiArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm51bSArPSBuO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLm51bSArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5hZGRMYWJlbC5zdHJpbmcgPSBcIitcIiArIG47XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhZGRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbnVzKG46IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubnVtIC09IG47XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMubnVtICsgXCJcIjtcclxuICAgICAgICB0aGlzLm1pbnVzTGFiZWwuc3RyaW5nID0gXCItXCIgKyBuO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwibWludXNcIik7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '718e4R2i4ZJIo5PjMMgEagd', 'GobangAI');
// src/gobang/GobangAI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangAI = void 0;
var GobangConstants_1 = require("./GobangConstants");
var GobangAI = /** @class */ (function () {
    function GobangAI(board) {
        this.board = board;
        this.fiveGroup = []; //五元组
        this.fiveGroupScore = []; //五元组分数
        //添加五元数组
        //横向
        for (var y = 0; y < 15; y++) {
            for (var x = 0; x < 11; x++) {
                this.fiveGroup.push([cc.v2(x, y), cc.v2(x + 1, y), cc.v2(x + 2, y), cc.v2(x + 3, y), cc.v2(x + 4, y)]);
            }
        }
        //纵向
        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 11; y++) {
                this.fiveGroup.push([cc.v2(x, y), cc.v2(x, y + 1), cc.v2(x, y + 2), cc.v2(x, y + 3), cc.v2(x, y + 4)]);
            }
        }
        //右上斜向
        for (var b = -10; b <= 10; b++) {
            for (var x = 0; x < 11; x++) {
                if (b + x < 0 || b + x > 10) {
                    continue;
                }
                else {
                    this.fiveGroup.push([cc.v2(x, b + x), cc.v2(x + 1, b + x + 1), cc.v2(x + 2, b + x + 2), cc.v2(x + 3, b + x + 3), cc.v2(x + 4, b + x + 4)]);
                }
            }
        }
        //右下斜向
        for (var b = 4; b <= 24; b++) {
            for (var y = 0; y < 11; y++) {
                if (b - y < 4 || b - y > 14) {
                    continue;
                }
                else {
                    this.fiveGroup.push([cc.v2(b - y, y), cc.v2(b - y - 1, y + 1), cc.v2(b - y - 2, y + 2), cc.v2(b - y - 3, y + 3), cc.v2(b - y - 4, y + 4)]);
                }
            }
        }
    }
    GobangAI.prototype.getNextCoor = function () {
        var pieceMap = this.board.pieceMap;
        //评分
        for (var i = 0; i < this.fiveGroup.length; i++) {
            var b = 0; //五元组里黑棋的个数
            var w = 0; //五元组里白棋的个数
            for (var j = 0; j < 5; j++) {
                if (this.board.getPieceByCoor(this.fiveGroup[i][j]).color === GobangConstants_1.BLACK) {
                    b++;
                }
                else if (this.board.getPieceByCoor(this.fiveGroup[i][j]).color === GobangConstants_1.WHITE) {
                    w++;
                }
            }
            if (b + w == 0) {
                this.fiveGroupScore[i] = 7;
            }
            else if (b > 0 && w > 0) {
                this.fiveGroupScore[i] = 0;
            }
            else if (b == 0 && w == 1) {
                this.fiveGroupScore[i] = 35;
            }
            else if (b == 0 && w == 2) {
                this.fiveGroupScore[i] = 800;
            }
            else if (b == 0 && w == 3) {
                this.fiveGroupScore[i] = 15000;
            }
            else if (b == 0 && w == 4) {
                this.fiveGroupScore[i] = 800000;
            }
            else if (w == 0 && b == 1) {
                this.fiveGroupScore[i] = 15;
            }
            else if (w == 0 && b == 2) {
                this.fiveGroupScore[i] = 400;
            }
            else if (w == 0 && b == 3) {
                this.fiveGroupScore[i] = 1800;
            }
            else if (w == 0 && b == 4) {
                this.fiveGroupScore[i] = 100000;
            }
        }
        //找最高分的五元组
        var hScore = 0;
        var mPosition = 0;
        for (var i = 0; i < this.fiveGroupScore.length; i++) {
            if (this.fiveGroupScore[i] > hScore) {
                hScore = this.fiveGroupScore[i];
                mPosition = i;
            }
        }
        //在最高分的五元组里找到最优下子位置
        var flag1 = false; //无子
        var flag2 = false; //有子
        var nPosition = 0;
        for (var i = 0; i < 5; i++) {
            if (!flag1 && this.board.getPieceByCoor(this.fiveGroup[mPosition][i]).color === GobangConstants_1.NONE) {
                nPosition = i;
            }
            if (!flag2 && this.board.getPieceByCoor(this.fiveGroup[mPosition][i]).color !== GobangConstants_1.NONE) {
                flag1 = true;
                flag2 = true;
            }
            if (flag2 && this.board.getPieceByCoor(this.fiveGroup[mPosition][i]).color === GobangConstants_1.NONE) {
                nPosition = i;
                break;
            }
        }
        //在最最优位置下子
        return this.fiveGroup[mPosition][nPosition];
    };
    return GobangAI;
}());
exports.GobangAI = GobangAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQXVEO0FBRXZEO0lBTUksa0JBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFKOUIsY0FBUyxHQUF5QixFQUFFLENBQUMsQ0FBQSxLQUFLO1FBRTFDLG1CQUFjLEdBQWlCLEVBQUUsQ0FBQSxDQUFBLE9BQU87UUFHNUMsUUFBUTtRQUNSLElBQUk7UUFDSixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RjtTQUNKO1FBQ0QsSUFBSTtRQUNKLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDakIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDakIsSUFBSSxDQUFDLFNBQVMs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QUE7QUExR1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2JhbmdCb2FyZCB9IGZyb20gXCIuL0dvYmFuZ0JvYXJkXCI7XHJcbmltcG9ydCB7IE5PTkUsIEJMQUNLLCBXSElURSB9IGZyb20gXCIuL0dvYmFuZ0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvYmFuZ0FJIHtcclxuXHJcbiAgICBwcml2YXRlIGZpdmVHcm91cDpBcnJheTxBcnJheTxjYy5WZWMyPj4gPSBbXTsvL+S6lOWFg+e7hFxyXG5cclxuICAgIHByaXZhdGUgZml2ZUdyb3VwU2NvcmU6QXJyYXk8bnVtYmVyPiA9IFtdLy/kupTlhYPnu4TliIbmlbBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvYXJkOiBHb2JhbmdCb2FyZCkgeyBcclxuICAgICAgICAvL+a3u+WKoOS6lOWFg+aVsOe7hFxyXG4gICAgICAgIC8v5qiq5ZCRXHJcbiAgICAgICAgZm9yKGxldCB5PTA7eTwxNTt5Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IHg9MDt4PDExO3grKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVHcm91cC5wdXNoKFtjYy52Mih4LHkpLGNjLnYyKHgrMSx5KSxjYy52Mih4KzIseSksY2MudjIoeCszLHkpLGNjLnYyKHgrNCx5KV0pO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nurXlkJFcclxuICAgICAgICBmb3IobGV0IHg9MDt4PDE1O3grKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeT0wO3k8MTE7eSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml2ZUdyb3VwLnB1c2goW2NjLnYyKHgseSksY2MudjIoeCx5KzEpLGNjLnYyKHgseSsyKSxjYy52Mih4LHkrMyksY2MudjIoeCx5KzQpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIrmlpzlkJFcclxuICAgICAgICBmb3IobGV0IGI9LTEwO2I8PTEwO2IrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeD0wO3g8MTE7eCsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGIreDwwfHxiK3g+MTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXAucHVzaChbY2MudjIoeCxiK3gpLGNjLnYyKHgrMSxiK3grMSksY2MudjIoeCsyLGIreCsyKSxjYy52Mih4KzMsYit4KzMpLGNjLnYyKHgrNCxiK3grNCldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4i+aWnOWQkVxyXG4gICAgICAgIGZvcihsZXQgYj00O2I8PTI0O2IrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeT0wO3k8MTE7eSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGIteTw0fHxiLXk+MTQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXAucHVzaChbY2MudjIoYi15LHkpLGNjLnYyKGIteS0xLHkrMSksY2MudjIoYi15LTIseSsyKSxjYy52MihiLXktMyx5KzMpLGNjLnYyKGIteS00LHkrNCldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0Q29vcigpOmNjLlZlYzIge1xyXG4gICAgICAgIGxldCBwaWVjZU1hcCA9IHRoaXMuYm9hcmQucGllY2VNYXA7ICAgICAgICBcclxuICAgICAgICAvL+ivhOWIhlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maXZlR3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSAwOy8v5LqU5YWD57uE6YeM6buR5qOL55qE5Liq5pWwXHJcbiAgICAgICAgICAgIGxldCB3ID0gMDsvL+S6lOWFg+e7hOmHjOeZveaji+eahOS4quaVsFxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuZ2V0UGllY2VCeUNvb3IodGhpcy5maXZlR3JvdXBbaV1bal0pLmNvbG9yID09PSBCTEFDSykge1xyXG4gICAgICAgICAgICAgICAgICAgIGIrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZC5nZXRQaWVjZUJ5Q29vcih0aGlzLmZpdmVHcm91cFtpXVtqXSkuY29sb3IgPT09IFdISVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiICsgdyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVHcm91cFNjb3JlW2ldID0gNztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiID4gMCAmJiB3ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYiA9PSAwICYmIHcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDM1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGIgPT0gMCAmJiB3ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml2ZUdyb3VwU2NvcmVbaV0gPSA4MDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYiA9PSAwICYmIHcgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDE1MDAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGIgPT0gMCAmJiB3ID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml2ZUdyb3VwU2NvcmVbaV0gPSA4MDAwMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodyA9PSAwICYmIGIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDE1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHcgPT0gMCAmJiBiID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml2ZUdyb3VwU2NvcmVbaV0gPSA0MDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodyA9PSAwICYmIGIgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDE4MDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodyA9PSAwICYmIGIgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXZlR3JvdXBTY29yZVtpXSA9IDEwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJvuacgOmrmOWIhueahOS6lOWFg+e7hFxyXG4gICAgICAgIGxldCBoU2NvcmUgPSAwO1xyXG4gICAgICAgIGxldCBtUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maXZlR3JvdXBTY29yZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXZlR3JvdXBTY29yZVtpXSA+IGhTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgaFNjb3JlID0gdGhpcy5maXZlR3JvdXBTY29yZVtpXTtcclxuICAgICAgICAgICAgICAgIG1Qb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lnKjmnIDpq5jliIbnmoTkupTlhYPnu4Tph4zmib7liLDmnIDkvJjkuIvlrZDkvY3nva5cclxuICAgICAgICBsZXQgZmxhZzEgPSBmYWxzZTsvL+aXoOWtkFxyXG4gICAgICAgIGxldCBmbGFnMiA9IGZhbHNlOy8v5pyJ5a2QXHJcbiAgICAgICAgbGV0IG5Qb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFmbGFnMSAmJiB0aGlzLmJvYXJkLmdldFBpZWNlQnlDb29yKHRoaXMuZml2ZUdyb3VwW21Qb3NpdGlvbl1baV0pLmNvbG9yID09PSBOT05FKSB7XHJcbiAgICAgICAgICAgICAgICBuUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZmxhZzIgJiYgdGhpcy5ib2FyZC5nZXRQaWVjZUJ5Q29vcih0aGlzLmZpdmVHcm91cFttUG9zaXRpb25dW2ldKS5jb2xvciAhPT0gTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZzEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZmxhZzIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmbGFnMiAmJiB0aGlzLmJvYXJkLmdldFBpZWNlQnlDb29yKHRoaXMuZml2ZUdyb3VwW21Qb3NpdGlvbl1baV0pLmNvbG9yID09PSBOT05FKSB7XHJcbiAgICAgICAgICAgICAgICBuUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lnKjmnIDmnIDkvJjkvY3nva7kuIvlrZBcclxuICAgICAgICByZXR1cm4gdGhpcy5maXZlR3JvdXBbbVBvc2l0aW9uXVtuUG9zaXRpb25dO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7df288Am4VDaoxBjM38OlOw', 'JumpScene');
// src/jump/JumpScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpScene = void 0;
var JumpStage_1 = require("./JumpStage");
var JumpConstants_1 = require("./JumpConstants");
var JumpProgress_1 = require("./JumpProgress");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JumpScene = /** @class */ (function (_super) {
    __extends(JumpScene, _super);
    function JumpScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = null;
        _this.progress = null;
        _this.ignoreStoryButton = null;
        _this.state = JumpConstants_1.STATE.NONE;
        return _this;
    }
    JumpScene.prototype.start = function () {
        this.addListeners();
        this.startGame();
    };
    JumpScene.prototype.startGame = function () {
        var _this = this;
        this.state = JumpConstants_1.STATE.READY;
        this.stage.init(this);
        this.stage.showStartStory(function () {
            _this.ignoreStoryButton.active = false;
            _this.progress.init(200);
            _this.progress.show();
            _this.state = JumpConstants_1.STATE.START;
            _this.stage.startGame();
        }, this);
    };
    JumpScene.prototype.overGame = function (isSuccess) {
        var _this = this;
        if (isSuccess) {
            this.progress.hide();
            this.state = JumpConstants_1.STATE.OVER;
            this.stage.endGame(function () {
                G_1.G.gameRoot.showMaskMessage("原来我不是男主", {
                    label: "打扰了",
                    cb: function () {
                        G_1.G.returnHall();
                    },
                    target: _this
                });
            }, this);
        }
        else {
            this.state = JumpConstants_1.STATE.OVER;
            G_1.G.gameRoot.showMaskMessage("缘已至此", {
                label: "放不下",
                cb: function () {
                    _this.stage.startGame();
                    _this.state = JumpConstants_1.STATE.START;
                    _this.progress.updateProgress(0);
                },
                target: this
            }, {
                label: "算了吧",
                cb: function () {
                    G_1.G.returnHall();
                },
                target: this
            });
        }
    };
    JumpScene.prototype.onScreenTouchStart = function () {
        if (this.state === JumpConstants_1.STATE.START) {
            this.stage.playerReadyJump();
        }
    };
    JumpScene.prototype.onScreenTouchEnd = function () {
        var _this = this;
        if (this.state === JumpConstants_1.STATE.START) {
            this.stage.playerJump(function (playerIndex, needNewBlock) {
                if (playerIndex === -1) {
                    _this.state = JumpConstants_1.STATE.NONE;
                    _this.stage.playerDie(function () {
                        _this.overGame(false);
                    }, _this);
                }
                else {
                    var isSuccess = _this.progress.updateProgress(playerIndex);
                    if (isSuccess) {
                        _this.overGame(true);
                    }
                    else {
                        if (needNewBlock) {
                            _this.stage.addNewBlock();
                        }
                    }
                }
            }, this);
        }
    };
    JumpScene.prototype.ignoreStory = function () {
        this.stage.ignoreStory();
    };
    JumpScene.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onScreenTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onScreenTouchEnd, this);
    };
    JumpScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(JumpStage_1.Stage)
    ], JumpScene.prototype, "stage", void 0);
    __decorate([
        property(JumpProgress_1.Progress)
    ], JumpScene.prototype, "progress", void 0);
    __decorate([
        property(cc.Node)
    ], JumpScene.prototype, "ignoreStoryButton", void 0);
    JumpScene = __decorate([
        ccclass
    ], JumpScene);
    return JumpScene;
}(cc.Component));
exports.JumpScene = JumpScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsaURBQXdDO0FBQ3hDLCtDQUEwQztBQUMxQywwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFvR0M7UUFqR1csV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVuQyxXQUFLLEdBQVUscUJBQUssQ0FBQyxJQUFJLENBQUM7O0lBMkZyQyxDQUFDO0lBekZHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUN0QixLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcscUJBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixD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SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyxtQ0FBZSxHQUF2QjtJQUVBLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsaUJBQUssQ0FBQzs0Q0FDWTtJQUU1QjtRQURDLFFBQVEsQ0FBQyx1QkFBUSxDQUFDOytDQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ3dCO0lBUGpDLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FvR3JCO0lBQUQsZ0JBQUM7Q0FwR0QsQUFvR0MsQ0FwRzhCLEVBQUUsQ0FBQyxTQUFTLEdBb0cxQztBQXBHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0p1bXBQbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9KdW1wU3RhZ2VcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi9KdW1wQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4vSnVtcFByb2dyZXNzXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBKdW1wU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShTdGFnZSlcclxuICAgIHByaXZhdGUgc3RhZ2U6IFN0YWdlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShQcm9ncmVzcylcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3M6IFByb2dyZXNzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBpZ25vcmVTdG9yeUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBTVEFURSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5SRUFEWTtcclxuICAgICAgICB0aGlzLnN0YWdlLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zaG93U3RhcnRTdG9yeSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWdub3JlU3RvcnlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuaW5pdCgyMDApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlckdhbWUoaXNTdWNjZXNzOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UuZW5kR2FtZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLljp/mnaXmiJHkuI3mmK/nlLfkuLtcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiZPmibDkuoZcIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRy5yZXR1cm5IYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuT1ZFUjtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLnvJjlt7Loh7PmraRcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmlL7kuI3kuItcIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFnZS5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzLnVwZGF0ZVByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLnrpfkuoblkKdcIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRy5yZXR1cm5IYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TY3JlZW5Ub3VjaFN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlLnBsYXllclJlYWR5SnVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2NyZWVuVG91Y2hFbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UucGxheWVySnVtcCgocGxheWVySW5kZXg6IG51bWJlciwgbmVlZE5ld0Jsb2NrOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk5PTkU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFnZS5wbGF5ZXJEaWUoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3VjY2VzcyA9IHRoaXMucHJvZ3Jlc3MudXBkYXRlUHJvZ3Jlc3MocGxheWVySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmVlZE5ld0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlLmFkZE5ld0Jsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlnbm9yZVN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuaWdub3JlU3RvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25TY3JlZW5Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU2NyZWVuVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '484catbAbJCg4Ac4ycFbtOo', 'LinkPiece');
// src/link/LinkPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.herosAtlas = null;
        _this.x = 0;
        _this.y = 0;
        _this.type = 0;
        _this.state = LinkConstants_1.PIECE_STATE.IDLE;
        return _this;
    }
    Piece.prototype.init = function (x, y, type, state) {
        if (state === void 0) { state = LinkConstants_1.PIECE_STATE.IDLE; }
        this.x = x;
        this.y = y;
        this.setType(type);
        this.setState(state);
    };
    Piece.prototype.setType = function (type) {
        this.type = type;
        if (type === 0) {
            this.sprite.spriteFrame = null;
        }
        else {
            this.sprite.spriteFrame = this.herosAtlas.getSpriteFrame("hero_" + type);
        }
    };
    Piece.prototype.setState = function (state) {
        if (state === this.state) {
            return;
        }
        this.state = state;
        if (state === LinkConstants_1.PIECE_STATE.IDLE) {
            this.node.color = cc.Color.WHITE;
        }
        else if (state === LinkConstants_1.PIECE_STATE.PRESS) {
            this.node.color = cc.Color.GRAY;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Piece.prototype, "herosAtlas", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUF3Q0M7UUFyQ1csWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbkMsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBZ0IsMkJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBOEJqRCxDQUFDO0lBNUJVLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQVksRUFBRSxLQUF3QjtRQUF4QixzQkFBQSxFQUFBLFFBQVEsMkJBQVcsQ0FBQyxJQUFJO1FBQ3BFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBa0I7UUFDOUIsSUFBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssS0FBSywyQkFBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNwQzthQUFNLElBQUcsS0FBSyxLQUFLLDJCQUFXLENBQUMsS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2lCO0lBTGpDLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0F3Q2pCO0lBQUQsWUFBQztDQXhDRCxBQXdDQyxDQXhDMEIsRUFBRSxDQUFDLFNBQVMsR0F3Q3RDO0FBeENZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUElFQ0VfU1RBVEUgfSBmcm9tIFwiLi9MaW5rQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXHJcbiAgICBwcml2YXRlIGhlcm9zQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHR5cGU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGU6IFBJRUNFX1NUQVRFID0gUElFQ0VfU1RBVEUuSURMRTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdHlwZTogbnVtYmVyLCBzdGF0ZSA9IFBJRUNFX1NUQVRFLklETEUpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5zZXRUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0VHlwZSh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGlmKHR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5oZXJvc0F0bGFzLmdldFNwcml0ZUZyYW1lKFwiaGVyb19cIiArIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFBJRUNFX1NUQVRFKSB7XHJcbiAgICAgICAgaWYoc3RhdGUgPT09IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBQSUVDRV9TVEFURS5JRExFKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIH0gZWxzZSBpZihzdGF0ZSA9PT0gUElFQ0VfU1RBVEUuUFJFU1MpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpStage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3e700jxwtD1ao6LQTfMpyq', 'JumpStage');
// src/jump/JumpStage.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
var JumpBlock_1 = require("./JumpBlock");
var JumpPlayer_1 = require("./JumpPlayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    // @executeInEditMode
    function Stage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.groundLayer = null;
        _this.gridNum = 20;
        _this.g = null;
        _this.minBlockSpace = 1; //两个block最小间距
        _this.maxBlockSpace = 10;
        _this.minBlockLength = 1;
        _this.maxBlockLength = 7;
        _this.cameraMoveDuration = 1;
        _this.endScene = null;
        _this.jumpScene = null;
        _this.gridWidth = 32;
        _this.groundOrigin = cc.v2();
        _this.offset = 0;
        _this.currBlock = null; // 同一屏只出现两个block，玩家站的是这个
        _this.nextBlock = null;
        _this.playerIndex = null;
        _this.animState = null;
        _this.isMovingStage = false;
        return _this;
    }
    Stage.prototype.onLoad = function () {
        this.gridWidth = Math.floor(this.groundLayer.width / this.gridNum);
        this.groundOrigin = this.groundLayer.position;
    };
    Stage.prototype.init = function (jumpScene) {
        this.jumpScene = jumpScene;
    };
    Stage.prototype.showStartStory = function (cb, cbTarget) {
        this.g.clear();
        this.drawBlock(new JumpBlock_1.Block(0, 5));
        this.drawBlock(new JumpBlock_1.Block(9, 5));
        var anim = this.getComponent(cc.Animation);
        anim.once("finished", function () {
            cb();
        }, cbTarget);
        this.animState = anim.play("start");
    };
    Stage.prototype.startGame = function () {
        this.reset();
    };
    Stage.prototype.endGame = function (cb, cbTarget) {
        var _this = this;
        this.g.clear();
        this.scheduleOnce(function () {
            _this.endScene.active = true;
        }, 5);
        this.scheduleOnce(function () {
            _this.player.node.getChildByName("name").getComponent(cc.Label).string = "";
        }, 10);
        this.scheduleOnce(function () {
            _this.player.node.children.forEach(function (child) {
                child.color = new cc.Color().fromHEX("#58D639");
                var streak = _this.player.getComponent(cc.MotionStreak);
                streak.color = new cc.Color().fromHEX("#58D639");
            });
        }, 15);
        this.scheduleOnce(function () {
            _this.player.readyJump();
        }, 20);
        this.scheduleOnce(function () {
            var far = cc.v2(_this.player.node.x - 1000, _this.player.node.y);
            _this.player.jumpTo(far, cb, cbTarget);
        }, 25);
    };
    Stage.prototype.reset = function () {
        this.groundLayer.position = this.groundOrigin;
        this.g.clear();
        this.currBlock = new JumpBlock_1.Block(0, 5);
        this.nextBlock = new JumpBlock_1.Block(9, 5);
        this.drawBlock(this.currBlock);
        this.drawBlock(this.nextBlock);
        var center = this.currBlock.head + Math.floor(this.currBlock.length / 2);
        this.playerIndex = center;
        this.player.node.position = cc.v2(center * this.gridWidth + this.gridWidth / 2, 0);
        this.isMovingStage = false;
    };
    Stage.prototype.drawBlock = function (block) {
        this.g.rect(block.head * this.gridWidth, -this.gridWidth, this.gridWidth * block.length, this.gridWidth);
        this.g.fill();
    };
    Stage.prototype.addNewBlock = function () {
        var _this = this;
        var cb = function () {
            _this.currBlock = _this.nextBlock;
            var space = Math.floor(_this.minBlockSpace + Math.random() * (_this.maxBlockSpace - _this.minBlockSpace));
            var head = _this.currBlock.head + _this.currBlock.length + space;
            var length = Math.floor(_this.minBlockLength + Math.random() * (_this.maxBlockLength - _this.minBlockLength));
            _this.nextBlock = new JumpBlock_1.Block(head, length);
            _this.drawBlock(_this.nextBlock);
        };
        this.moveStage(cb, this);
    };
    Stage.prototype.moveStage = function (cb, target) {
        var _this = this;
        this.isMovingStage = true;
        var moveLength = (this.nextBlock.head - this.currBlock.head) * this.gridWidth;
        var moveAction = cc.moveBy(this.cameraMoveDuration, -moveLength, 0);
        var action = cc.sequence(moveAction, cc.callFunc(function () {
            _this.isMovingStage = false;
            cb();
        }, target));
        this.groundLayer.runAction(action);
    };
    Stage.prototype.canReadyJump = function () {
        return !this.isMovingStage && this.player.speed === 0;
    };
    Stage.prototype.playerReadyJump = function () {
        if (this.canReadyJump()) {
            this.player.readyJump();
        }
    };
    Stage.prototype.ignoreStory = function () {
        this.animState.speed = 4;
    };
    Stage.prototype.playerDie = function (cb, cbTarget) {
        var action = cc.sequence(cc.moveBy(1, 0, -1000), cc.callFunc(cb, cbTarget));
        this.player.node.runAction(action);
    };
    Stage.prototype.playerJump = function (cb, target) {
        var _this = this;
        if (!this.player.isReadyJump) {
            return;
        }
        var jumpGrids = Math.round(this.player.jumpDistance / this.gridWidth);
        var targetGrid = this.playerIndex + jumpGrids;
        var targetPos = cc.v2(this.gridWidth * targetGrid + this.gridWidth / 2, 0);
        this.player.jumpTo(targetPos, function () {
            _this.playerIndex = targetGrid;
            if (targetGrid <= _this.currBlock.tail) {
                cb(_this.playerIndex, false);
            }
            else if (targetGrid >= _this.nextBlock.head && targetGrid <= _this.nextBlock.tail) {
                cb(_this.playerIndex, true);
            }
            else {
                cb(-1, false);
            }
        }, this);
    };
    __decorate([
        property(JumpPlayer_1.Player)
    ], Stage.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "groundLayer", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "gridNum", void 0);
    __decorate([
        property(cc.Graphics)
    ], Stage.prototype, "g", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "minBlockSpace", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "maxBlockSpace", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "minBlockLength", void 0);
    __decorate([
        property(cc.Integer)
    ], Stage.prototype, "maxBlockLength", void 0);
    __decorate([
        property(cc.Float)
    ], Stage.prototype, "cameraMoveDuration", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "endScene", void 0);
    Stage = __decorate([
        ccclass
        // @executeInEditMode
    ], Stage);
    return Stage;
}(cc.Component));
exports.Stage = Stage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQTJCLHlCQUFZO0lBRHZDLHFCQUFxQjtJQUNyQjtRQUFBLHFFQWtLQztRQS9KVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsT0FBQyxHQUFnQixJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQSxhQUFhO1FBRXZDLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFDNUIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGVBQVMsR0FBVSxJQUFJLENBQUMsQ0FBQSx3QkFBd0I7UUFDaEQsZUFBUyxHQUFVLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQXNCLElBQUksQ0FBQztRQUNwQyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFrSTNDLENBQUM7SUFoSUcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixFQUFFLEVBQUUsUUFBUTtRQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsRUFBRSxFQUFFLENBQUM7UUFDVCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsRUFBRSxFQUFFLFFBQVE7UUFBM0IsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQy9FLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVNLHFCQUFL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UUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDYTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNjO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ2M7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDYztJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNvQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNlO0lBckJ4QixLQUFLO1FBRmpCLE9BQU87UUFDUixxQkFBcUI7T0FDUixLQUFLLENBa0tqQjtJQUFELFlBQUM7Q0FsS0QsQUFrS0MsQ0FsSzBCLEVBQUUsQ0FBQyxTQUFTLEdBa0t0QztBQWxLWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIi4vSnVtcEJsb2NrXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0p1bXBQbGF5ZXJcIjtcclxuaW1wb3J0IHsgSnVtcFNjZW5lIH0gZnJvbSBcIi4vSnVtcFNjZW5lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbi8vIEBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBncm91bmRMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgZ3JpZE51bTogbnVtYmVyID0gMjA7XHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBwcml2YXRlIGc6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBtaW5CbG9ja1NwYWNlOiBudW1iZXIgPSAxOy8v5Lik5LiqYmxvY2vmnIDlsI/pl7Tot51cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBtYXhCbG9ja1NwYWNlOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBtaW5CbG9ja0xlbmd0aDogbnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBtYXhCbG9ja0xlbmd0aDogbnVtYmVyID0gNztcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHByaXZhdGUgY2FtZXJhTW92ZUR1cmF0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGVuZFNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXBTY2VuZTogSnVtcFNjZW5lID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JpZFdpZHRoOiBudW1iZXIgPSAzMjtcclxuICAgIHByaXZhdGUgZ3JvdW5kT3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIHByaXZhdGUgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyQmxvY2s6IEJsb2NrID0gbnVsbDsvLyDlkIzkuIDlsY/lj6rlh7rnjrDkuKTkuKpibG9ja++8jOeOqeWutuermeeahOaYr+i/meS4qlxyXG4gICAgcHJpdmF0ZSBuZXh0QmxvY2s6IEJsb2NrID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllckluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbmltU3RhdGU6IGNjLkFuaW1hdGlvblN0YXRlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdTdGFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IE1hdGguZmxvb3IodGhpcy5ncm91bmRMYXllci53aWR0aCAvIHRoaXMuZ3JpZE51bSk7XHJcbiAgICAgICAgdGhpcy5ncm91bmRPcmlnaW4gPSB0aGlzLmdyb3VuZExheWVyLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGp1bXBTY2VuZTogSnVtcFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5qdW1wU2NlbmUgPSBqdW1wU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTdGFydFN0b3J5KGNiLCBjYlRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuZy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Jsb2NrKG5ldyBCbG9jaygwLCA1KSk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmxvY2sobmV3IEJsb2NrKDksIDUpKTtcclxuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgYW5pbS5vbmNlKFwiZmluaXNoZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIH0sIGNiVGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmFuaW1TdGF0ZSA9IGFuaW0ucGxheShcInN0YXJ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmRHYW1lKGNiLCBjYlRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuZy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmRTY2VuZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM1OEQ2MzlcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyZWFrID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYWsuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzU4RDYzOVwiKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWFkeUp1bXAoKTtcclxuICAgICAgICB9LCAyMCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmFyID0gY2MudjIodGhpcy5wbGF5ZXIubm9kZS54IC0gMTAwMCwgdGhpcy5wbGF5ZXIubm9kZS55KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKGZhciwgY2IsIGNiVGFyZ2V0KTtcclxuICAgICAgICB9LCAyNSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmdyb3VuZExheWVyLnBvc2l0aW9uID0gdGhpcy5ncm91bmRPcmlnaW47XHJcbiAgICAgICAgdGhpcy5nLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSBuZXcgQmxvY2soMCwgNSk7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBuZXcgQmxvY2soOSwgNSk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmxvY2sodGhpcy5jdXJyQmxvY2spO1xyXG4gICAgICAgIHRoaXMuZHJhd0Jsb2NrKHRoaXMubmV4dEJsb2NrKTtcclxuICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5jdXJyQmxvY2suaGVhZCArIE1hdGguZmxvb3IodGhpcy5jdXJyQmxvY2subGVuZ3RoIC8gMik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uID0gY2MudjIoY2VudGVyICogdGhpcy5ncmlkV2lkdGggKyB0aGlzLmdyaWRXaWR0aCAvIDIsIDApO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmdTdGFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0Jsb2NrKGJsb2NrOiBCbG9jaykge1xyXG4gICAgICAgIHRoaXMuZy5yZWN0KGJsb2NrLmhlYWQgKiB0aGlzLmdyaWRXaWR0aCwgLSB0aGlzLmdyaWRXaWR0aCwgdGhpcy5ncmlkV2lkdGggKiBibG9jay5sZW5ndGgsdGhpcy5ncmlkV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZy5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE5ld0Jsb2NrKCkge1xyXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICAgICAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcih0aGlzLm1pbkJsb2NrU3BhY2UgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4QmxvY2tTcGFjZSAtIHRoaXMubWluQmxvY2tTcGFjZSkpO1xyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IHRoaXMuY3VyckJsb2NrLmhlYWQgKyB0aGlzLmN1cnJCbG9jay5sZW5ndGggKyBzcGFjZTtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IodGhpcy5taW5CbG9ja0xlbmd0aCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhCbG9ja0xlbmd0aCAtIHRoaXMubWluQmxvY2tMZW5ndGgpKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBuZXcgQmxvY2soaGVhZCwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmxvY2sodGhpcy5uZXh0QmxvY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmVTdGFnZShjYiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlU3RhZ2UoY2I6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmdTdGFnZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IG1vdmVMZW5ndGggPSAodGhpcy5uZXh0QmxvY2suaGVhZCAtIHRoaXMuY3VyckJsb2NrLmhlYWQpICogdGhpcy5ncmlkV2lkdGg7XHJcbiAgICAgICAgbGV0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlQnkodGhpcy5jYW1lcmFNb3ZlRHVyYXRpb24sIC1tb3ZlTGVuZ3RoLCAwKTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZUFjdGlvbiwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nU3RhZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LCB0YXJnZXQpKTtcclxuICAgICAgICB0aGlzLmdyb3VuZExheWVyLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuUmVhZHlKdW1wKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc01vdmluZ1N0YWdlICYmIHRoaXMucGxheWVyLnNwZWVkID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJSZWFkeUp1bXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUmVhZHlKdW1wKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpZ25vcmVTdG9yeSgpIHtcclxuICAgICAgICB0aGlzLmFuaW1TdGF0ZS5zcGVlZCA9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXllckRpZShjYiwgY2JUYXJnZXQpIHtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDEsIDAsIC0xMDAwKSwgY2MuY2FsbEZ1bmMoY2IsIGNiVGFyZ2V0KSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWVySnVtcChjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllci5pc1JlYWR5SnVtcCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBqdW1wR3JpZHMgPSBNYXRoLnJvdW5kKHRoaXMucGxheWVyLmp1bXBEaXN0YW5jZSAvIHRoaXMuZ3JpZFdpZHRoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0R3JpZCA9IHRoaXMucGxheWVySW5kZXggKyBqdW1wR3JpZHM7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYyKHRoaXMuZ3JpZFdpZHRoICogdGFyZ2V0R3JpZCArIHRoaXMuZ3JpZFdpZHRoIC8gMiwgMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gdGFyZ2V0R3JpZDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldEdyaWQgPD0gdGhpcy5jdXJyQmxvY2sudGFpbCkge1xyXG4gICAgICAgICAgICAgICAgY2IodGhpcy5wbGF5ZXJJbmRleCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldEdyaWQgPj0gdGhpcy5uZXh0QmxvY2suaGVhZCAmJiB0YXJnZXRHcmlkIDw9IHRoaXMubmV4dEJsb2NrLnRhaWwpIHtcclxuICAgICAgICAgICAgICAgIGNiKHRoaXMucGxheWVySW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IoLTEsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f59bXfwKJPCLY3438CoYsJ', 'JumpBlock');
// src/jump/JumpBlock.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(head, length) {
        this.head = head;
        this.length = length;
    }
    Object.defineProperty(Block.prototype, "tail", {
        get: function () {
            return this.head + this.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    return Block;
}());
exports.Block = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQVFJLGVBQW1CLElBQVcsRUFBQyxNQUFhO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFQRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBTUwsWUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmxvY2t7XHJcblxyXG4gICAgcHVibGljIGhlYWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdGFpbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkK3RoaXMubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGhlYWQ6bnVtYmVyLGxlbmd0aDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2905cdKUxxBqrUAlqcuwUGI', 'LinkBoard');
// src/link/LinkBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkBoard = void 0;
var LinkPiece_1 = require("./LinkPiece");
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var LinkBoard = /** @class */ (function (_super) {
    __extends(LinkBoard, _super);
    function LinkBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 10;
        _this.colSpace = 5;
        _this.pen = null;
        _this.pictureNum = 8;
        _this.colWidth = 0;
        _this.lastPiece = null;
        _this.linkScene = null;
        return _this;
    }
    LinkBoard.prototype.onLoad = function () {
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
                pieceNode.width = this.colWidth;
                pieceNode.height = this.colWidth;
                var piece = pieceNode.getComponent(LinkPiece_1.Piece);
                this.pieceMap[x][y] = piece;
                // 最外一圈当作墙
                this.pieceMap[x][y].init(x, y, 0);
                this.addTouchEvent(piece);
            }
        }
    };
    LinkBoard.prototype.init = function (linkScene) {
        this.linkScene = linkScene;
    };
    LinkBoard.prototype.reset = function () {
        this.shuffle();
    };
    LinkBoard.prototype.addTouchEvent = function (piece) {
        var _this = this;
        piece.node.on(cc.Node.EventType.TOUCH_END, function () {
            if (piece.type === 0) {
                return;
            }
            if (piece.state === LinkConstants_1.PIECE_STATE.IDLE) {
                if (_this.lastPiece === null) {
                    piece.setState(LinkConstants_1.PIECE_STATE.PRESS);
                    _this.lastPiece = piece;
                }
                else {
                    if (_this.link(_this.lastPiece, piece)) {
                        _this.lastPiece = null;
                        _this.judgeWin();
                    }
                    else {
                        _this.lastPiece.setState(LinkConstants_1.PIECE_STATE.IDLE);
                        piece.setState(LinkConstants_1.PIECE_STATE.PRESS);
                        _this.lastPiece = piece;
                    }
                }
            }
            else if (piece.state === LinkConstants_1.PIECE_STATE.PRESS) {
                piece.setState(LinkConstants_1.PIECE_STATE.IDLE);
                _this.lastPiece = null;
            }
        }, this);
    };
    LinkBoard.prototype.canDirectLink = function (piece1, piece2) {
        if (piece1.x === piece2.x) {
            var minY = Math.min(piece1.y, piece2.y);
            var maxY = Math.max(piece1.y, piece2.y);
            for (var y = minY + 1; y < maxY; y++) {
                if (this.pieceMap[piece1.x][y].type !== 0) {
                    return false;
                }
            }
            return true;
        }
        if (piece1.y === piece2.y) {
            var minX = Math.min(piece1.x, piece2.x);
            var maxX = Math.max(piece1.x, piece2.x);
            for (var x = minX + 1; x < maxX; x++) {
                if (this.pieceMap[x][piece1.y].type !== 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    LinkBoard.prototype.findCorner = function (piece1, piece2) {
        var c1, c2;
        // 0折
        if (this.canDirectLink(piece1, piece2)) {
            return [true, []];
        }
        // 1折 找一个点
        c1 = this.pieceMap[piece1.x][piece2.y];
        if (c1.type === 0 && this.canDirectLink(c1, piece1) && this.canDirectLink(c1, piece2)) {
            return [true, [c1]];
        }
        c1 = this.pieceMap[piece2.x][piece1.y];
        if (c1.type === 0 && this.canDirectLink(c1, piece1) && this.canDirectLink(c1, piece2)) {
            return [true, [c1]];
        }
        // 2折 找一条线
        for (var x = 0; x < this.colNum; x++) {
            if (x === piece1.x || x === piece2.x) {
                continue;
            }
            c1 = this.pieceMap[x][piece1.y];
            c2 = this.pieceMap[x][piece2.y];
            if (c1.type === 0 && c2.type === 0
                && this.canDirectLink(c1, c2)
                && this.canDirectLink(c1, piece1)
                && this.canDirectLink(c2, piece2)) {
                return [true, [c1, c2]];
            }
        }
        for (var y = 0; y < this.colNum; y++) {
            if (y === piece1.y || y === piece2.y) {
                continue;
            }
            c1 = this.pieceMap[piece1.x][y];
            c2 = this.pieceMap[piece2.x][y];
            if (c1.type === 0 && c2.type === 0
                && this.canDirectLink(c1, c2)
                && this.canDirectLink(c1, piece1)
                && this.canDirectLink(c2, piece2)) {
                return [true, [c1, c2]];
            }
        }
        return [false, null];
    };
    LinkBoard.prototype.link = function (piece1, piece2) {
        if (piece1.type !== piece2.type) {
            return false;
        }
        var _a = this.findCorner(piece1, piece2), pass = _a[0], corners = _a[1];
        if (pass) {
            this.drawLine([piece1].concat(corners).concat(piece2));
            piece1.setType(0);
            piece2.setType(0);
            return true;
        }
        else {
            return false;
        }
    };
    LinkBoard.prototype.drawLine = function (path) {
        var _this = this;
        var pos = this.getPieceCenterPosition(path[0]);
        this.pen.moveTo(pos.x, pos.y);
        for (var i = 1; i < path.length; i++) {
            pos = this.getPieceCenterPosition(path[i]);
            this.pen.lineTo(pos.x, pos.y);
        }
        this.pen.stroke();
        setTimeout(function () {
            _this.clearLine();
        }, 500);
    };
    LinkBoard.prototype.clearLine = function () {
        this.pen.clear();
    };
    LinkBoard.prototype.getPieceCenterPosition = function (piece) {
        var x = piece.x * (this.colWidth + this.colSpace) + this.colSpace + this.colWidth / 2;
        var y = piece.y * (this.colWidth + this.colSpace) + this.colSpace + this.colWidth / 2;
        return cc.v2(x, y);
    };
    LinkBoard.prototype.shuffle = function () {
        var pictureList = [];
        for (var i = 1; i <= 78; i++) {
            pictureList.push(i);
        }
        var pending = [];
        for (var x = 1; x < this.colNum - 1; x++) {
            for (var y = 1; y < this.colNum - 1; y++) {
                pending.push(this.pieceMap[x][y]);
            }
        }
        var p1, p2;
        var pieceNum = Math.pow((this.colNum - 2), 2);
        var rem = pieceNum / 2 % this.pictureNum; // 余数，重复的几对
        var coupleNum = (pieceNum / 2 - rem) / this.pictureNum; // 相同的图片有多少对
        for (var i = 0; i < this.pictureNum; i++) {
            var picture = this.randomPop(pictureList);
            for (var j = 0; j < coupleNum * 2; j++) {
                var p = this.randomPop(pending);
                p.setType(picture);
                p.setState(LinkConstants_1.PIECE_STATE.IDLE);
            }
            if (i < rem) {
                for (var k = 0; k < 2; k++) {
                    var p = this.randomPop(pending);
                    p.setType(picture);
                    p.setState(LinkConstants_1.PIECE_STATE.IDLE);
                }
            }
        }
    };
    LinkBoard.prototype.randomPop = function (arr) {
        var n = Math.random() * arr.length | 0;
        return arr.splice(n, 1)[0];
    };
    LinkBoard.prototype.judgeWin = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].type !== 0) {
                    return false;
                }
            }
        }
        this.linkScene.overGame();
        return true;
    };
    __decorate([
        property(cc.Prefab)
    ], LinkBoard.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "colSpace", void 0);
    __decorate([
        property(cc.Graphics)
    ], LinkBoard.prototype, "pen", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "pictureNum", void 0);
    LinkBoard = __decorate([
        ccclass,
        executeInEditMode
    ], LinkBoard);
    return LinkBoard;
}(cc.Component));
exports.LinkBoard = LinkBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFcEMsaURBQThDO0FBRXhDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBdU9DO1FBcE9XLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFjLElBQUksQ0FBQzs7SUFzTnhDLENBQUM7SUFwTkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMs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UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFsT0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDTztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ1U7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDVTtJQVh0QixTQUFTO1FBRnJCLE9BQU87UUFDUCxpQkFBaUI7T0FDTCxTQUFTLENBdU9yQjtJQUFELGdCQUFDO0NBdk9ELEFBdU9DLENBdk84QixFQUFFLENBQUMsU0FBUyxHQXVPMUM7QUF2T1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaWVjZSB9IGZyb20gXCIuL0xpbmtQaWVjZVwiO1xyXG5pbXBvcnQgeyBMaW5rU2NlbmUgfSBmcm9tIFwiLi9MaW5rU2NlbmVcIjtcclxuaW1wb3J0IHsgUElFQ0VfU1RBVEUgfSBmcm9tIFwiLi9MaW5rQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgTGlua0JvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBwaWVjZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xOdW06IG51bWJlciA9IDEwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGNvbFNwYWNlOiBudW1iZXIgPSA1O1xyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgcHJpdmF0ZSBwZW46IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBwaWN0dXJlTnVtOiBudW1iZXIgPSA4O1xyXG5cclxuICAgIHByaXZhdGUgY29sV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBpZWNlTWFwOiBBcnJheTxBcnJheTxQaWVjZT4+O1xyXG4gICAgcHJpdmF0ZSBsYXN0UGllY2U6IFBpZWNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpbmtTY2VuZTogTGlua1NjZW5lID0gbnVsbDtcclxuICAgIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuY29sV2lkdGggPSAodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5jb2xTcGFjZSAqICh0aGlzLmNvbE51bSArIDEpKSAvIHRoaXMuY29sTnVtO1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29sTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnggPSB4ICogKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSArIHRoaXMuY29sU3BhY2U7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS53aWR0aCA9IHRoaXMuY29sV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUuaGVpZ2h0ID0gdGhpcy5jb2xXaWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZSA9IHBpZWNlTm9kZS5nZXRDb21wb25lbnQoUGllY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XSA9IHBpZWNlO1xyXG4gICAgICAgICAgICAgICAgLy8g5pyA5aSW5LiA5ZyI5b2T5L2c5aKZXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLmluaXQoeCwgeSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoRXZlbnQocGllY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQobGlua1NjZW5lOiBMaW5rU2NlbmUpIHtcclxuICAgICAgICB0aGlzLmxpbmtTY2VuZSA9IGxpbmtTY2VuZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVG91Y2hFdmVudChwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBwaWVjZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGllY2UudHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwaWVjZS5zdGF0ZSA9PT0gUElFQ0VfU1RBVEUuSURMRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBpZWNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGllY2Uuc2V0U3RhdGUoUElFQ0VfU1RBVEUuUFJFU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBpZWNlID0gcGllY2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmsodGhpcy5sYXN0UGllY2UsIHBpZWNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VXaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQaWVjZS5zZXRTdGF0ZShQSUVDRV9TVEFURS5JRExFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2Uuc2V0U3RhdGUoUElFQ0VfU1RBVEUuUFJFU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQaWVjZSA9IHBpZWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwaWVjZS5zdGF0ZSA9PT0gUElFQ0VfU1RBVEUuUFJFU1MpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlLnNldFN0YXRlKFBJRUNFX1NUQVRFLklETEUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGllY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGlyZWN0TGluayhwaWVjZTE6IFBpZWNlLCBwaWVjZTI6IFBpZWNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBpZWNlMS54ID09PSBwaWVjZTIueCkge1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IE1hdGgubWluKHBpZWNlMS55LCBwaWVjZTIueSk7XHJcbiAgICAgICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgocGllY2UxLnksIHBpZWNlMi55KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblkgKyAxOyB5IDwgbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFtwaWVjZTEueF1beV0udHlwZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGllY2UxLnkgPT09IHBpZWNlMi55KSB7XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4ocGllY2UxLngsIHBpZWNlMi54KTtcclxuICAgICAgICAgICAgbGV0IG1heFggPSBNYXRoLm1heChwaWVjZTEueCwgcGllY2UyLngpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gbWluWCArIDE7IHggPCBtYXhYOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3BpZWNlMS55XS50eXBlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQ29ybmVyKHBpZWNlMTogUGllY2UsIHBpZWNlMjogUGllY2UpOiBbYm9vbGVhbiwgQXJyYXk8UGllY2U+XSB7XHJcbiAgICAgICAgbGV0IGMxOiBQaWVjZSwgYzI6IFBpZWNlO1xyXG4gICAgICAgIC8vIDDmiphcclxuICAgICAgICBpZiAodGhpcy5jYW5EaXJlY3RMaW5rKHBpZWNlMSwgcGllY2UyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3RydWUsIFtdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMeaKmCDmib7kuIDkuKrngrlcclxuICAgICAgICBjMSA9IHRoaXMucGllY2VNYXBbcGllY2UxLnhdW3BpZWNlMi55XTtcclxuICAgICAgICBpZiAoYzEudHlwZSA9PT0gMCAmJiB0aGlzLmNhbkRpcmVjdExpbmsoYzEsIHBpZWNlMSkgJiYgdGhpcy5jYW5EaXJlY3RMaW5rKGMxLCBwaWVjZTIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgW2MxXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGMxID0gdGhpcy5waWVjZU1hcFtwaWVjZTIueF1bcGllY2UxLnldO1xyXG4gICAgICAgIGlmIChjMS50eXBlID09PSAwICYmIHRoaXMuY2FuRGlyZWN0TGluayhjMSwgcGllY2UxKSAmJiB0aGlzLmNhbkRpcmVjdExpbmsoYzEsIHBpZWNlMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCBbYzFdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMuaKmCDmib7kuIDmnaHnur9cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHggPT09IHBpZWNlMS54IHx8IHggPT09IHBpZWNlMi54KSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjMSA9IHRoaXMucGllY2VNYXBbeF1bcGllY2UxLnldO1xyXG4gICAgICAgICAgICBjMiA9IHRoaXMucGllY2VNYXBbeF1bcGllY2UyLnldO1xyXG4gICAgICAgICAgICBpZiAoYzEudHlwZSA9PT0gMCAmJiBjMi50eXBlID09PSAwXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmNhbkRpcmVjdExpbmsoYzEsIGMyKVxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5jYW5EaXJlY3RMaW5rKGMxLCBwaWVjZTEpXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmNhbkRpcmVjdExpbmsoYzIsIHBpZWNlMikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgW2MxLCBjMl1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICBpZiAoeSA9PT0gcGllY2UxLnkgfHwgeSA9PT0gcGllY2UyLnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMxID0gdGhpcy5waWVjZU1hcFtwaWVjZTEueF1beV07XHJcbiAgICAgICAgICAgIGMyID0gdGhpcy5waWVjZU1hcFtwaWVjZTIueF1beV07XHJcbiAgICAgICAgICAgIGlmIChjMS50eXBlID09PSAwICYmIGMyLnR5cGUgPT09IDBcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY2FuRGlyZWN0TGluayhjMSwgYzIpXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmNhbkRpcmVjdExpbmsoYzEsIHBpZWNlMSlcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY2FuRGlyZWN0TGluayhjMiwgcGllY2UyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCBbYzEsIGMyXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaW5rKHBpZWNlMTogUGllY2UsIHBpZWNlMjogUGllY2UpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocGllY2UxLnR5cGUgIT09IHBpZWNlMi50eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtwYXNzLCBjb3JuZXJzXSA9IHRoaXMuZmluZENvcm5lcihwaWVjZTEsIHBpZWNlMik7XHJcbiAgICAgICAgaWYgKHBhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3TGluZShbcGllY2UxXS5jb25jYXQoY29ybmVycykuY29uY2F0KHBpZWNlMikpO1xyXG4gICAgICAgICAgICBwaWVjZTEuc2V0VHlwZSgwKTtcclxuICAgICAgICAgICAgcGllY2UyLnNldFR5cGUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3TGluZShwYXRoOiBQaWVjZVtdKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UGllY2VDZW50ZXJQb3NpdGlvbihwYXRoWzBdKTtcclxuICAgICAgICB0aGlzLnBlbi5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5nZXRQaWVjZUNlbnRlclBvc2l0aW9uKHBhdGhbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnBlbi5saW5lVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZW4uc3Ryb2tlKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMaW5lKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyTGluZSgpIHtcclxuICAgICAgICB0aGlzLnBlbi5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGllY2VDZW50ZXJQb3NpdGlvbihwaWVjZTogUGllY2UpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgeCA9IHBpZWNlLnggKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZSArIHRoaXMuY29sV2lkdGggLyAyO1xyXG4gICAgICAgIGxldCB5ID0gcGllY2UueSAqICh0aGlzLmNvbFdpZHRoICsgdGhpcy5jb2xTcGFjZSkgKyB0aGlzLmNvbFNwYWNlICsgdGhpcy5jb2xXaWR0aCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2h1ZmZsZSgpIHtcclxuICAgICAgICBsZXQgcGljdHVyZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3ODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpY3R1cmVMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwZW5kaW5nID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCB0aGlzLmNvbE51bSAtIDE7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMTsgeSA8IHRoaXMuY29sTnVtIC0gMTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nLnB1c2godGhpcy5waWVjZU1hcFt4XVt5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHAxLCBwMjtcclxuICAgICAgICBsZXQgcGllY2VOdW0gPSAodGhpcy5jb2xOdW0gLSAyKSAqKiAyO1xyXG4gICAgICAgIGxldCByZW0gPSBwaWVjZU51bSAvIDIgJSB0aGlzLnBpY3R1cmVOdW07IC8vIOS9meaVsO+8jOmHjeWkjeeahOWHoOWvuVxyXG4gICAgICAgIGxldCBjb3VwbGVOdW0gPSAocGllY2VOdW0gLyAyIC0gcmVtKSAvIHRoaXMucGljdHVyZU51bTsgLy8g55u45ZCM55qE5Zu+54mH5pyJ5aSa5bCR5a+5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpY3R1cmVOdW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGljdHVyZSA9IHRoaXMucmFuZG9tUG9wKHBpY3R1cmVMaXN0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VwbGVOdW0gKiAyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5yYW5kb21Qb3AocGVuZGluZyk7XHJcbiAgICAgICAgICAgICAgICBwLnNldFR5cGUocGljdHVyZSk7XHJcbiAgICAgICAgICAgICAgICBwLnNldFN0YXRlKFBJRUNFX1NUQVRFLklETEUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpIDwgcmVtKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnJhbmRvbVBvcChwZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnNldFR5cGUocGljdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRTdGF0ZShQSUVDRV9TVEFURS5JRExFKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRvbVBvcChhcnI6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBsZXQgbiA9IE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoIHwgMDtcclxuICAgICAgICByZXR1cm4gYXJyLnNwbGljZShuLCAxKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0udHlwZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtTY2VuZS5vdmVyR2FtZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67198fHIXNKkbYuV6JCgYzA', 'MineScene');
// src/mine/MineScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MineScene = void 0;
var MnieBoard_1 = require("./MnieBoard");
var G_1 = require("../G");
var MineConstans_1 = require("./MineConstans");
var MineLevelLabel_1 = require("./MineLevelLabel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MineScene = /** @class */ (function (_super) {
    __extends(MineScene, _super);
    function MineScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.bombNumLabel = null;
        _this.flagNumLabel = null;
        _this.levelLabel = null;
        _this.state = MineConstans_1.STATE.NONE;
        _this.level = 1;
        _this.maxLevel = 20;
        return _this;
    }
    MineScene.prototype.start = function () {
        this.board.init(this);
        this.maxLevel = this.board.getMaxLevel();
        this.startGame(1);
    };
    MineScene.prototype.startGame = function (level) {
        this.level = level;
        this.state = MineConstans_1.STATE.START;
        this.board.reset(level);
        this.levelLabel.level = level;
        this.bombNumLabel.string = this.board.getBombNum() + "";
        this.flagNumLabel.string = this.board.getFlagNum() + "";
    };
    MineScene.prototype.overGame = function (isWin) {
        var _this = this;
        this.state = MineConstans_1.STATE.OVER;
        if (isWin) {
            if (this.level === this.maxLevel) {
                G_1.G.gameRoot.showMaskMessage("恭喜通关!\n获得雷公称号!", { label: "233", cb: function () { G_1.G.returnHall(); }, target: this });
            }
            else {
                G_1.G.gameRoot.showMaskMessage("恭喜通过第" + this.level + "关!", {
                    label: "下一关",
                    cb: function () {
                        _this.level++;
                        _this.startGame(_this.level);
                    },
                    target: this
                }, { label: "不玩了", cb: function () { G_1.G.returnHall(); }, target: this });
            }
        }
        else {
            G_1.G.gameRoot.showMaskMessage("你死在了第" + this.level + "关!", {
                label: "续命",
                cb: function () {
                    _this.startGame(_this.level);
                },
                target: this
            }, { label: "不玩了", cb: function () { G_1.G.returnHall(); }, target: this });
        }
    };
    MineScene.prototype.onClickPiece = function (piece) {
        if (this.state === MineConstans_1.STATE.START) {
            this.board.openPiece(piece);
            var bombNum = this.board.getBombNum();
            this.bombNumLabel.string = bombNum + "";
        }
    };
    MineScene.prototype.onPressPiece = function (piece) {
        if (this.state === MineConstans_1.STATE.START) {
            this.board.flagPiece(piece);
            var flagNum = this.board.getFlagNum();
            this.flagNumLabel.string = flagNum + "";
        }
    };
    MineScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    MineScene.prototype.onBtnRestart = function () {
        this.startGame(this.level);
    };
    __decorate([
        property(MnieBoard_1.Board)
    ], MineScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], MineScene.prototype, "bombNumLabel", void 0);
    __decorate([
        property(cc.Label)
    ], MineScene.prototype, "flagNumLabel", void 0);
    __decorate([
        property(MineLevelLabel_1.MineLevelLabel)
    ], MineScene.prototype, "levelLabel", void 0);
    MineScene = __decorate([
        ccclass
    ], MineScene);
    return MineScene;
}(cc.Component));
exports.MineScene = MineScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsMEJBQXlCO0FBQ3pCLCtDQUF1QztBQUN2QyxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFtRkM7UUFoRlcsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsV0FBSyxHQUFVLG9CQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUFzRWxDLENBQUM7SUFwRUcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FB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QztJQS9FRDtRQURDLFFBQVEsQ0FBQyxpQkFBSyxDQUFDOzRDQUNZO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7aURBQ2lCO0lBVGpDLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FtRnJCO0lBQUQsZ0JBQUM7Q0FuRkQsQUFtRkMsQ0FuRjhCLEVBQUUsQ0FBQyxTQUFTLEdBbUYxQztBQW5GWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vTWluZVBpZWNlXCI7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vTW5pZUJvYXJkXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuL01pbmVDb25zdGFuc1wiO1xyXG5pbXBvcnQgeyBNaW5lTGV2ZWxMYWJlbCB9IGZyb20gXCIuL01pbmVMZXZlbExhYmVsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1pbmVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvYXJkKVxyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBib21iTnVtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgZmxhZ051bUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTWluZUxldmVsTGFiZWwpXHJcbiAgICBwcml2YXRlIGxldmVsTGFiZWw6IE1pbmVMZXZlbExhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTVEFURSA9IFNUQVRFLk5PTkU7XHJcbiAgICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSB0aGlzLmJvYXJkLmdldE1heExldmVsKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQobGV2ZWwpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMuYm9tYk51bUxhYmVsLnN0cmluZyA9IHRoaXMuYm9hcmQuZ2V0Qm9tYk51bSgpICsgXCJcIjtcclxuICAgICAgICB0aGlzLmZsYWdOdW1MYWJlbC5zdHJpbmcgPSB0aGlzLmJvYXJkLmdldEZsYWdOdW0oKSArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckdhbWUoaXNXaW46IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuT1ZFUjtcclxuICAgICAgICBpZiAoaXNXaW4pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IHRoaXMubWF4TGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5oGt5Zac6YCa5YWzIVxcbuiOt+W+l+mbt+WFrOensOWPtyFcIixcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIjIzM1wiLCBjYjogKCkgPT4geyBHLnJldHVybkhhbGwoKSB9LCB0YXJnZXQ6IHRoaXMgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5oGt5Zac6YCa6L+H56ysXCIgKyB0aGlzLmxldmVsICsgXCLlhbMhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLkuIvkuIDlhbNcIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKHRoaXMubGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0YXJnZXQ6IHRoaXNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiN546p5LqGXCIsIGNiOiAoKSA9PiB7IEcucmV0dXJuSGFsbCgpIH0sIHRhcmdldDogdGhpcyB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDmrbvlnKjkuobnrKxcIiArIHRoaXMubGV2ZWwgKyBcIuWFsyFcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLnu63lkb1cIiwgY2I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUodGhpcy5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLkuI3njqnkuoZcIiwgY2I6ICgpID0+IHsgRy5yZXR1cm5IYWxsKCkgfSwgdGFyZ2V0OiB0aGlzIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1BpZWNlKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLm9wZW5QaWVjZShwaWVjZSk7XHJcbiAgICAgICAgICAgIGxldCBib21iTnVtID0gdGhpcy5ib2FyZC5nZXRCb21iTnVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYk51bUxhYmVsLnN0cmluZyA9IGJvbWJOdW0gKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByZXNzUGllY2UocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZmxhZ1BpZWNlKHBpZWNlKTtcclxuICAgICAgICAgICAgbGV0IGZsYWdOdW0gPSB0aGlzLmJvYXJkLmdldEZsYWdOdW0oKTtcclxuICAgICAgICAgICAgdGhpcy5mbGFnTnVtTGFiZWwuc3RyaW5nID0gZmxhZ051bSArIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSh0aGlzLmxldmVsKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MinePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '813feimwL1NhqxaGQMpXWGV', 'MinePiece');
// src/mine/MinePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var MineConstans_1 = require("./MineConstans");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pieceSprite = null;
        _this.picPending = null;
        _this.picFlag = null;
        _this.picDeath = null;
        _this.picOpen0 = null;
        _this.picOpen1 = null;
        _this.picOpen2 = null;
        _this.picOpen3 = null;
        _this.picOpen4 = null;
        _this.picOpen5 = null;
        _this.picOpen6 = null;
        _this.picOpen7 = null;
        _this.picOpen8 = null;
        _this.x = 0;
        _this.y = 0;
        _this._state = MineConstans_1.PIECE_STATE.PENDING;
        _this._type = MineConstans_1.PIECE_TYPE.OPEN0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            switch (this.state) {
                case MineConstans_1.PIECE_STATE.PENDING:
                    this.pieceSprite.spriteFrame = this.picPending;
                    break;
                case MineConstans_1.PIECE_STATE.FLAG:
                    this.pieceSprite.spriteFrame = this.picFlag;
                    break;
                case MineConstans_1.PIECE_STATE.OPEN:
                    this.setSpriteByType();
                    break;
                default:
                    cc.error("unknown state!");
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.setSpriteByType = function () {
        switch (this.type) {
            case MineConstans_1.PIECE_TYPE.OPEN0:
                this.pieceSprite.spriteFrame = this.picOpen0;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN1:
                this.pieceSprite.spriteFrame = this.picOpen1;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN2:
                this.pieceSprite.spriteFrame = this.picOpen2;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN3:
                this.pieceSprite.spriteFrame = this.picOpen3;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN4:
                this.pieceSprite.spriteFrame = this.picOpen4;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN5:
                this.pieceSprite.spriteFrame = this.picOpen5;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN6:
                this.pieceSprite.spriteFrame = this.picOpen6;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN7:
                this.pieceSprite.spriteFrame = this.picOpen7;
                break;
            case MineConstans_1.PIECE_TYPE.OPEN8:
                this.pieceSprite.spriteFrame = this.picOpen8;
                break;
            case MineConstans_1.PIECE_TYPE.BOMB:
                this.pieceSprite.spriteFrame = this.picDeath;
        }
    };
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setSpriteByType();
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y, type, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.type = type;
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "pieceSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picPending", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picFlag", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picDeath", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen4", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen5", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen6", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen7", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picOpen8", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBcUU7QUFFL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUEwR0M7UUF2R1csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxPQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2IsWUFBTSxHQUFHLDBCQUFXLENBQUMsT0FBTyxDQUFDO1FBMEQ3QixXQUFLLEdBQUcseUJBQVUsQ0FBQyxLQUFLLENBQUM7O0lBaUJyQyxDQUFDO0lBekVHLHNCQUFXLHdCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFpQixLQUFrQjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLEtBQUssMEJBQVcsQ0FBQyxPQUFPO29CQUNwQixJQUFJLENBQUMs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QUUsQ0FBQyxXQUFXLENBQUM7MENBQ2M7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZTtJQTNCL0IsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTBHakI7SUFBRCxZQUFDO0NBMUdELEFBMEdDLENBMUcwQixFQUFFLENBQUMsU0FBUyxHQTBHdEM7QUExR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQSUVDRV9TVEFURSwgUElFQ0VfVFlQRSwgUElFQ0VfSElOVCB9IGZyb20gXCIuL01pbmVDb25zdGFuc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQaWVjZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgcGllY2VTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBpY1BlbmRpbmc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgcGljRmxhZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNEZWF0aDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuMDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuMzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuNDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuNTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuNjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuNzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNPcGVuODogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IFBJRUNFX1NUQVRFLlBFTkRJTkc7XHJcblxyXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBQSUVDRV9TVEFURSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc3RhdGUodmFsdWU6IFBJRUNFX1NUQVRFKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9TVEFURS5QRU5ESU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljUGVuZGluZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBJRUNFX1NUQVRFLkZMQUc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNGbGFnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUElFQ0VfU1RBVEUuT1BFTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlQnlUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwidW5rbm93biBzdGF0ZSFcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTcHJpdGVCeVR5cGUoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU4wOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU4xOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU4yOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU4zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU40OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU41OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU42OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3BlbjY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU43OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3Blbjc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLk9QRU44OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljT3Blbjg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLkJPTUI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNEZWF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZSA9IFBJRUNFX1RZUEUuT1BFTjA7XHJcblxyXG4gICAgcHVibGljIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOlBJRUNFX1RZUEUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTcHJpdGVCeVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCB0eXBlOiBQSUVDRV9UWVBFLCBzdGF0ZTogUElFQ0VfU1RBVEUpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc931w3hAtIsYZIL9HDvPQN', 'LinkScene');
// src/link/LinkScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkScene = void 0;
var LinkBoard_1 = require("./LinkBoard");
var LinkConstants_1 = require("./LinkConstants");
var G_1 = require("../G");
var Timer_1 = require("../shared/Timer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LinkScene = /** @class */ (function (_super) {
    __extends(LinkScene, _super);
    function LinkScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.rewardNode = null;
        _this.timer = null;
        _this.state = LinkConstants_1.STATE.NONE;
        return _this;
    }
    LinkScene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
    };
    LinkScene.prototype.startGame = function () {
        this.state = LinkConstants_1.STATE.START;
        this.board.reset();
        this.rewardNode.active = false;
        this.timer.reset();
        this.timer.run();
    };
    LinkScene.prototype.overGame = function () {
        var _this = this;
        this.state = LinkConstants_1.STATE.OVER;
        this.timer.stop();
        G_1.G.gameRoot.showMaskMessage("你用了" + this.timer.time.toFixed(1) + "秒", { label: "领取奖励", cb: function () { _this.rewardNode.active = true; } });
    };
    LinkScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    LinkScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    __decorate([
        property(LinkBoard_1.LinkBoard)
    ], LinkScene.prototype, "board", void 0);
    __decorate([
        property(cc.Node)
    ], LinkScene.prototype, "rewardNode", void 0);
    __decorate([
        property(Timer_1.Timer)
    ], LinkScene.prototype, "timer", void 0);
    LinkScene = __decorate([
        ccclass
    ], LinkScene);
    return LinkScene;
}(cc.Component));
exports.LinkScene = LinkScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsaURBQXdDO0FBQ3hDLDBCQUF5QjtBQUN6Qix5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFxQ0M7UUFsQ1csV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQzs7SUE0Qi9CLENBQUM7SUExQkcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsY0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDOzRDQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLGFBQUssQ0FBQzs0Q0FDWTtJQVBuQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBcUNyQjtJQUFELGdCQUFDO0NBckNELEFBcUNDLENBckM4QixFQUFFLENBQUMsU0FBUyxHQXFDMUM7QUFyQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rQm9hcmQgfSBmcm9tIFwiLi9MaW5rQm9hcmRcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi9MaW5rQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuLi9zaGFyZWQvVGltZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlua1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTGlua0JvYXJkKVxyXG4gICAgcHJpdmF0ZSBib2FyZDogTGlua0JvYXJkID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSByZXdhcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShUaW1lcilcclxuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMucmV3YXJkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVyLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy50aW1lci5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlckdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKCk7XHJcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDnlKjkuoZcIiArIHRoaXMudGltZXIudGltZS50b0ZpeGVkKDEpICsgXCLnp5JcIiwgeyBsYWJlbDogXCLpooblj5blpZblirFcIiwgY2I6ICgpPT57dGhpcy5yZXdhcmROb2RlLmFjdGl2ZSA9IHRydWV9fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJ0blJldHVybigpIHtcclxuICAgICAgICBHLnJldHVybkhhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuUmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineConstans.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '377f1wDS+ZNiK34Bo00vs8d', 'MineConstans');
// src/mine/MineConstans.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_STATE = exports.PIECE_TYPE = exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));
var PIECE_TYPE;
(function (PIECE_TYPE) {
    PIECE_TYPE[PIECE_TYPE["OPEN0"] = 0] = "OPEN0";
    PIECE_TYPE[PIECE_TYPE["OPEN1"] = 1] = "OPEN1";
    PIECE_TYPE[PIECE_TYPE["OPEN2"] = 2] = "OPEN2";
    PIECE_TYPE[PIECE_TYPE["OPEN3"] = 3] = "OPEN3";
    PIECE_TYPE[PIECE_TYPE["OPEN4"] = 4] = "OPEN4";
    PIECE_TYPE[PIECE_TYPE["OPEN5"] = 5] = "OPEN5";
    PIECE_TYPE[PIECE_TYPE["OPEN6"] = 6] = "OPEN6";
    PIECE_TYPE[PIECE_TYPE["OPEN7"] = 7] = "OPEN7";
    PIECE_TYPE[PIECE_TYPE["OPEN8"] = 8] = "OPEN8";
    PIECE_TYPE[PIECE_TYPE["BOMB"] = 9] = "BOMB";
})(PIECE_TYPE = exports.PIECE_TYPE || (exports.PIECE_TYPE = {}));
var PIECE_STATE;
(function (PIECE_STATE) {
    PIECE_STATE[PIECE_STATE["PENDING"] = 1] = "PENDING";
    PIECE_STATE[PIECE_STATE["FLAG"] = 2] = "FLAG";
    PIECE_STATE[PIECE_STATE["OPEN"] = 3] = "OPEN";
})(PIECE_STATE = exports.PIECE_STATE || (exports.PIECE_STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lQ29uc3RhbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYixpQ0FBUSxDQUFBO0lBQ1IsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCO0FBRUQsSUFBWSxVQVdYO0FBWEQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDJDQUFRLENBQUE7QUFDWixDQUFDLEVBWFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFXckI7QUFFRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsbURBQVcsQ0FBQTtJQUNYLDZDQUFRLENBQUE7SUFDUiw2Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU1RBVEV7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNUQVJUID0gMSxcclxuICAgIE9WRVIgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBJRUNFX1RZUEUge1xyXG4gICAgT1BFTjAgPSAwLFxyXG4gICAgT1BFTjEgPSAxLFxyXG4gICAgT1BFTjIgPSAyLFxyXG4gICAgT1BFTjMgPSAzLFxyXG4gICAgT1BFTjQgPSA0LFxyXG4gICAgT1BFTjUgPSA1LFxyXG4gICAgT1BFTjYgPSA2LFxyXG4gICAgT1BFTjcgPSA3LFxyXG4gICAgT1BFTjggPSA4LFxyXG4gICAgQk9NQiA9IDlcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUElFQ0VfU1RBVEUge1xyXG4gICAgUEVORElORyA9IDEsXHJcbiAgICBGTEFHID0gMixcclxuICAgIE9QRU4gPSAzXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzleBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9b13Qa7CZHRZEtlGELlUrB', 'PuzzleBoard');
// src/puzzle/PuzzleBoard.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNDO0FBR2hDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQWlDLCtCQUFZO0lBRDdDLHFCQUFxQjtJQUNyQjtRQUFBLHFFQXFIQztRQWxIVyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBd0c1QyxDQUFDO0lBdEdHLDBCQUFJLEdBQUosVUFBSyxXQUF3QjtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxNQUFlO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lB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LEVBQUUsTUFBTSxDQUFDLE1BQU0sUUFBQSxDQUFtQztRQUNoRSxLQUFpQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE5RCxNQUFNLENBQUMsTUFBTSxRQUFBLEVBQUUsTUFBTSxDQUFDLE1BQU0sUUFBQSxDQUFtQztRQUVoRSxLQUErQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQTFGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxRQUFBLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLFFBQUEsQ0FBaUQ7SUFDaEcsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLHFDQUFlLEdBQXZCO0lBRUEsQ0FBQztJQWhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ1E7SUFQcEIsV0FBVztRQUZ2QixPQUFPO1FBQ1IscUJBQXFCO09BQ1IsV0FBVyxDQXFIdkI7SUFBRCxrQkFBQztDQXJIRCxBQXFIQyxDQXJIZ0MsRUFBRSxDQUFDLFNBQVMsR0FxSDVDO0FBckhZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGllY2UgfSBmcm9tIFwiLi9QdXp6bGVQaWVjZVwiO1xyXG5pbXBvcnQgeyBQdXp6bGVTY2VuZSB9IGZyb20gXCIuL1B1enpsZVNjZW5lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbi8vIEBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgUHV6emxlQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHBpZWNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGNvbE51bTogbnVtYmVyID0gNTtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBjb2xTcGFjZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBwcml2YXRlIGNvbFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwaWVjZU1hcDogQXJyYXk8QXJyYXk8UGllY2U+PjtcclxuICAgIHByaXZhdGUgYmxhbmtQaWVjZTogUGllY2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcHV6emxlU2NlbmU6IFB1enpsZVNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBpbml0KHB1enpsZVNjZW5lOiBQdXp6bGVTY2VuZSkge1xyXG4gICAgICAgIHRoaXMucHV6emxlU2NlbmUgPSBwdXp6bGVTY2VuZTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldChjb2xOdW0/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbE51bSA9IGNvbE51bTtcclxuICAgICAgICB0aGlzLmNvbFdpZHRoID0gKHRoaXMubm9kZS53aWR0aCAtIHRoaXMuY29sU3BhY2UgKiAodGhpcy5jb2xOdW0gKyAxKSkgLyB0aGlzLmNvbE51bTtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbE51bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGllY2VOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waWVjZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGllY2VOb2RlKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS54ID0geCAqICh0aGlzLmNvbFdpZHRoICsgdGhpcy5jb2xTcGFjZSkgKyB0aGlzLmNvbFNwYWNlO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnkgPSB5ICogKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSArIHRoaXMuY29sU3BhY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldID0gcGllY2VOb2RlLmdldENvbXBvbmVudChQaWVjZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLmluaXQoeCwgeSwgdGhpcy5jb2xOdW0sIHRoaXMuY29sV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0uaXNCbGFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxhbmtQaWVjZSA9IHRoaXMucGllY2VNYXBbeF1beV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaHVmZmxlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZWFyUGllY2VzID0gdGhpcy5nZXROZWFyUGllY2VzKHRoaXMuYmxhbmtQaWVjZSk7XHJcbiAgICAgICAgICAgIGxldCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmVhclBpZWNlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmV4Y2hhbmdlVHdvUGllY2UodGhpcy5ibGFua1BpZWNlLCBuZWFyUGllY2VzW25dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJvYWRUb3VjaChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoKGxvY2FsUG9zLnggLSB0aGlzLmNvbFNwYWNlKSAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5jb2xTcGFjZSkpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcigobG9jYWxQb3MueSAtIHRoaXMuY29sU3BhY2UpIC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLmNvbFNwYWNlKSk7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTY2VuZS5vbkJvYXJkVG91Y2goeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVQaWVjZSh4LCB5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcclxuICAgICAgICBsZXQgbmVhclBpZWNlcyA9IHRoaXMuZ2V0TmVhclBpZWNlcyhwaWVjZSk7XHJcbiAgICAgICAgZm9yIChsZXQgbmVhclBpZWNlIG9mIG5lYXJQaWVjZXMpIHtcclxuICAgICAgICAgICAgaWYgKG5lYXJQaWVjZS5pc0JsYW5rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlVHdvUGllY2UocGllY2UsIG5lYXJQaWVjZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1ZGdlV2luKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xOdW07IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29sTnVtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBpZWNlTWFwW3hdW3ldLmlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ibGFua1BpZWNlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5lYXJQaWVjZXMocGllY2U6IFBpZWNlKTogQXJyYXk8UGllY2U+IHtcclxuICAgICAgICBsZXQgbmVhclBpZWNlcyA9IFtdO1xyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPiAwKSB7IC8vIGxlZnRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sIC0gMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJDb2wgPCB0aGlzLmNvbE51bSAtIDEpIHsgLy8gcmlnaHRcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sICsgMV1bcGllY2UuY3VyUm93XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaWVjZS5jdXJSb3cgPiAwKSB7IC8vIGJvdHRvbVxyXG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2xdW3BpZWNlLmN1clJvdyAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBpZWNlLmN1clJvdyA8IHRoaXMuY29sTnVtIC0gMSkgeyAvLyB0b3BcclxuICAgICAgICAgICAgbmVhclBpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbcGllY2UuY3VyQ29sXVtwaWVjZS5jdXJSb3cgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWFyUGllY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGNoYW5nZVR3b1BpZWNlKHBpZWNlMTogUGllY2UsIHBpZWNlMjogUGllY2UpIHtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwW3BpZWNlMi5jdXJDb2xdW3BpZWNlMi5jdXJSb3ddID0gcGllY2UxO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLmN1ckNvbF1bcGllY2UxLmN1clJvd10gPSBwaWVjZTI7XHJcblxyXG4gICAgICAgIFtwaWVjZTEuY3VyQ29sLCBwaWVjZTIuY3VyQ29sXSA9IFtwaWVjZTIuY3VyQ29sLCBwaWVjZTEuY3VyQ29sXTtcclxuICAgICAgICBbcGllY2UxLmN1clJvdywgcGllY2UyLmN1clJvd10gPSBbcGllY2UyLmN1clJvdywgcGllY2UxLmN1clJvd107XHJcblxyXG4gICAgICAgIFtwaWVjZTEubm9kZS5wb3NpdGlvbiwgcGllY2UyLm5vZGUucG9zaXRpb25dID0gW3BpZWNlMi5ub2RlLnBvc2l0aW9uLCBwaWVjZTEubm9kZS5wb3NpdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJvYWRUb3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42661F1JzZNuZUWFOTg6E1t', 'ReversiConstants');
// src/reversi/ReversiConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.WHITE = exports.BLACK = exports.NONE = void 0;
exports.NONE = 0;
exports.BLACK = 1;
exports.WHITE = -1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsUUFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ1QsUUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsUUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTk9ORSA9IDA7XHJcbmV4cG9ydCBjb25zdCBCTEFDSyA9IDE7XHJcbmV4cG9ydCBjb25zdCBXSElURSA9IC0xOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/GameRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a370bXtLwVLZ7lyzdETAio/', 'GameRoot');
// src/shared/GameRoot.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoot = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.messageBtn1 = null;
        _this.messageBtn2 = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, btn1, btn2) {
        var _this = this;
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (btn1) {
            this.messageBtn1.active = true;
            this.messageBtn1.getComponent(cc.Label).string = btn1.label;
            this.messageBtn1.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn1.cb) {
                    btn1.cb();
                }
            }, btn1.target);
        }
        else {
            this.messageBtn1.active = false;
        }
        if (btn2) {
            this.messageBtn2.active = true;
            this.messageBtn2.getComponent(cc.Label).string = btn2.label;
            this.messageBtn2.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn2.cb) {
                    btn2.cb();
                }
            }, btn2.target);
        }
        else {
            this.messageBtn2.active = false;
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn1", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn2", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXEdhbWVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBOEIsNEJBQVk7SUFBMUM7UUFBQSxxRUF1REM7UUFwRFcsZUFBUyxHQUFXLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBMENyQyxDQUFDO0lBeENVLGtDQUFlLEdBQXRCLFVBQXVCLE9BQWMsRUFBQyxJQUE2QyxFQUFDLElBQTZDO1FBQWpJLGlCQTZCQztRQTVCRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDbkMsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNoQztRQUNELElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7Z0JBQzlDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNSLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7YUFBSTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztRQUNELElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7Z0JBQzlDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsRUFBRSxFQUFDO29CQUNQLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7YUFBSTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFTSxrQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU0sMEJBQU8sR0FBZCxVQUFlLEdBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNjO0lBYnhCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0F1RHBCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxDQXZENkIsRUFBRSxDQUFDLFNBQVMsR0F1RHpDO0FBdkRZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lUm9vdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1hc2tQYW5lbDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbWVzc2FnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWVzc2FnZUJ0bjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VCdG4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0aXBQYW5lbDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGlwTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzaG93TWFza01lc3NhZ2UobWVzc2FnZTpzdHJpbmcsYnRuMT86e2xhYmVsOnN0cmluZyxjYj86RnVuY3Rpb24sdGFyZ2V0Pzphbnl9LGJ0bjI/OntsYWJlbDpzdHJpbmcsY2I/OkZ1bmN0aW9uLHRhcmdldD86YW55fSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICAgICAgaWYoIXRoaXMubWFza1BhbmVsLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGJ0bjEpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4xLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYnRuMS5sYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTWFza01lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ0bjEuY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4xLmNiKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sYnRuMS50YXJnZXQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihidG4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJ0bjIubGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjIub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1hc2tNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihidG4yLmNiKXtcclxuICAgICAgICAgICAgICAgICAgICBidG4yLmNiKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sYnRuMi50YXJnZXQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZU1hc2tNZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMubWFza1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VGlwKHRpcDpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcDtcclxuICAgICAgICB0aGlzLnRpcFBhbmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdfa7e/LeBNGpN93hwoveof', 'ReversiPiece');
// src/reversi/ReversiPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiPiece = void 0;
var ReversiPiece = /** @class */ (function () {
    function ReversiPiece(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    return ReversiPiece;
}());
exports.ReversiPiece = ReversiPiece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNJLHNCQUFtQixDQUFRLEVBQVEsQ0FBUSxFQUFRLEtBQVk7UUFBNUMsTUFBQyxHQUFELENBQUMsQ0FBTztRQUFRLE1BQUMsR0FBRCxDQUFDLENBQU87UUFBUSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUUsQ0FBQztJQUN0RSxtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmV2ZXJzaVBpZWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4Om51bWJlcixwdWJsaWMgeTpudW1iZXIscHVibGljIGNvbG9yOm51bWJlcil7fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/Streak.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d2a9UGfIdOHJj/cCvXlEIj', 'Streak');
// src/shared/Streak.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Streak = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Streak = /** @class */ (function (_super) {
    __extends(Streak, _super);
    function Streak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        return _this;
    }
    Streak.prototype.start = function () {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Streak.prototype.onTouchStart = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchMove = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.lineTo(localPos.x, localPos.y);
        this.g.stroke();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchEnd = function (event) {
        // this.node.position = this.node.parent.convertToNodeSpaceAR(event.getStartLocation());
        // let moveAction = cc.moveTo(0.3, this.node.parent.convertToNodeSpaceAR(event.getLocation()));
        // this.node.runAction(moveAction);
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.clear();
    };
    __decorate([
        property(cc.Graphics)
    ], Streak.prototype, "g", void 0);
    Streak = __decorate([
        ccclass
    ], Streak);
    return Streak;
}(cc.Component));
exports.Streak = Streak;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXFN0cmVhay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRCLDBCQUFZO0lBQXhDO1FBQUEscUVBb0NDO1FBakNXLE9BQUMsR0FBZ0IsSUFBSSxDQUFDOztJQWlDbEMsQ0FBQztJQS9CRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sNkJBQVksR0FBcEIsVUFBcUIsS0FBMEI7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sNEJBQVcsR0FBbkIsVUFBb0IsS0FBMEI7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sMkJBQVUsR0FBbEIsVUFBbUIsS0FBMEI7UUFDekMsd0ZBQXdGO1FBQ3hGLCtGQUErRjtRQUMvRixtQ0FBbUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQ0FDUTtJQUhyQixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBb0NsQjtJQUFELGFBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzJCLEVBQUUsQ0FBQyxTQUFTLEdBb0N2QztBQXBDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU3RyZWFrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBwcml2YXRlIGc6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Ub3VjaFN0YXJ0LHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSx0aGlzLm9uVG91Y2hNb3ZlLHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25Ub3VjaEVuZCx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLm9uVG91Y2hFbmQsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpe1xyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5nLmNpcmNsZShsb2NhbFBvcy54LGxvY2FsUG9zLnksNSk7XHJcbiAgICAgICAgdGhpcy5nLmZpbGwoKTtcclxuICAgICAgICB0aGlzLmcubW92ZVRvKGxvY2FsUG9zLngsbG9jYWxQb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5nLmxpbmVUbyhsb2NhbFBvcy54LGxvY2FsUG9zLnkpO1xyXG4gICAgICAgIHRoaXMuZy5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmcubW92ZVRvKGxvY2FsUG9zLngsbG9jYWxQb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRTdGFydExvY2F0aW9uKCkpO1xyXG4gICAgICAgIC8vIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKDAuMywgdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihtb3ZlQWN0aW9uKTtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuZy5jaXJjbGUobG9jYWxQb3MueCxsb2NhbFBvcy55LDUpO1xyXG4gICAgICAgIHRoaXMuZy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5nLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakeBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84adR6dohB5YJuAMwnUu08', 'SnakeBoard');
// src/snake/SnakeBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeConstants_1 = require("./SnakeConstants");
var SnakePiece_1 = require("./SnakePiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameTime = 0.5;
        _this.levelRatio = 0.05;
        _this.piecePrefab = null;
        _this.layout = null;
        _this.isStart = false;
        _this.pastTime = 0;
        _this.rowsNum = 16;
        _this.colsNum = 16;
        _this.gridWidth = 0;
        _this.moveDir = SnakeConstants_1.DIRECTION.RIGHT;
        _this.level = 0;
        _this.snakeScene = null;
        return _this;
        // update(dt: number) {
        //     if (this.isStart) {
        //         this.pastTime += dt;
        //         if (this.pastTime >= this.frameTime * (this.levelRatio**this.level)) {
        //             this.moveSnake();
        //             this.pastTime = 0;
        //         }
        //     }
        // }
    }
    Board.prototype.onLoad = function () {
        this.gridWidth = this.layout.width / this.colsNum;
        this.pieceMap = [];
        for (var x = 0; x < this.colsNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.layout.addChild(pieceNode);
                pieceNode.width = this.gridWidth;
                pieceNode.height = this.gridWidth;
                pieceNode.x = x * this.gridWidth + pieceNode.width / 2;
                pieceNode.y = y * this.gridWidth + pieceNode.height / 2;
                this.pieceMap[x][y] = pieceNode.getComponent(SnakePiece_1.Piece);
                this.pieceMap[x][y].x = x;
                this.pieceMap[x][y].y = y;
            }
        }
    };
    Board.prototype.updateTick = function () {
        this.unschedule(this.tickHandler);
        var time = this.frameTime - (this.levelRatio * this.level);
        if (time < 0.1) {
            time = 0.1;
        }
        this.schedule(this.tickHandler, time);
    };
    Board.prototype.tickHandler = function () {
        if (this.isStart) {
            this.moveSnake();
        }
    };
    Board.prototype.init = function (snakeScene) {
        this.snakeScene = snakeScene;
    };
    Board.prototype.startGame = function () {
        this.reset();
        for (var i = 0; i < 10; i++) {
            this.addFood();
        }
        this.isStart = true;
        this.updateTick();
    };
    Board.prototype.reset = function () {
        this.clear();
        this.snake = [];
        this.pieceMap[9][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.RIGHT);
        this.pieceMap[8][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.RIGHT);
        this.pieceMap[7][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.UP);
        this.pieceMap[7][8].init(SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL, SnakeConstants_1.DIRECTION.UP, SnakeConstants_1.DIRECTION.UP);
        this.snake.push(this.pieceMap[9][9]);
        this.snake.push(this.pieceMap[8][9]);
        this.snake.push(this.pieceMap[7][9]);
        this.snake.push(this.pieceMap[7][8]);
        this.moveDir = SnakeConstants_1.DIRECTION.RIGHT;
        this.level = 0;
    };
    Board.prototype.addFood = function () {
        var blankList = [];
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                if (this.pieceMap[x][y].type === SnakeConstants_1.PIECE_TYPE.BLANK) {
                    blankList.push(this.pieceMap[x][y]);
                }
            }
        }
        var randomPiece = blankList[(Math.random() * blankList.length) | 0];
        randomPiece.type = SnakeConstants_1.PIECE_TYPE.FOOD;
    };
    Board.prototype.clear = function () {
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                this.pieceMap[x][y].type = SnakeConstants_1.PIECE_TYPE.BLANK;
            }
        }
    };
    Board.prototype.updateLevel = function (level) {
        if (level !== this.level) {
            this.level = level;
            this.updateTick();
        }
    };
    Board.prototype.turnSnake = function (dir) {
        if (this.snake[0].outDir !== -dir) {
            this.moveDir = dir;
        }
    };
    Board.prototype.moveSnake = function () {
        var head = this.snake[0];
        head.inDir = this.snake[1].outDir;
        head.outDir = this.moveDir;
        var nextPiece;
        switch (head.outDir) {
            case SnakeConstants_1.DIRECTION.UP:
                if (head.y === this.rowsNum - 1) {
                    nextPiece = this.pieceMap[head.x][0];
                }
                else {
                    nextPiece = this.pieceMap[head.x][head.y + 1];
                }
                break;
            case SnakeConstants_1.DIRECTION.RIGHT:
                if (head.x === this.colsNum - 1) {
                    nextPiece = this.pieceMap[0][head.y];
                }
                else {
                    nextPiece = this.pieceMap[head.x + 1][head.y];
                }
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                if (head.y === 0) {
                    nextPiece = this.pieceMap[head.x][this.rowsNum - 1];
                }
                else {
                    nextPiece = this.pieceMap[head.x][head.y - 1];
                }
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                if (head.x === 0) {
                    nextPiece = this.pieceMap[this.colsNum - 1][head.y];
                }
                else {
                    nextPiece = this.pieceMap[head.x - 1][head.y];
                }
                break;
        }
        this.moveSnakeToPiece(nextPiece);
    };
    Board.prototype.moveSnakeToPiece = function (nextPiece) {
        var head = this.snake[0];
        switch (nextPiece.type) {
            case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
            case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                this.isStart = false;
                this.snakeScene.overGame();
                break;
            case SnakeConstants_1.PIECE_TYPE.FOOD:
                nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, head.outDir, head.inDir);
                head.init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, head.outDir, head.inDir);
                this.snake.unshift(nextPiece);
                this.snakeScene.onEatFood();
                break;
            case SnakeConstants_1.PIECE_TYPE.BLANK:
                var newSnake_1 = [];
                this.snake.forEach(function (piece, index) {
                    switch (piece.type) {
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, piece.outDir, piece.inDir);
                            break;
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, nextPiece.outDir, piece.outDir);
                            break;
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL, nextPiece.outDir, piece.outDir);
                            piece.type = SnakeConstants_1.PIECE_TYPE.BLANK;
                            break;
                    }
                    newSnake_1.push(nextPiece);
                    nextPiece = piece;
                });
                // for (let piece of this.snake) {
                // }
                this.snake = newSnake_1;
        }
    };
    __decorate([
        property(cc.Float)
    ], Board.prototype, "frameTime", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "levelRatio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "layout", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlEO0FBQ3pELDJDQUFxQztBQUcvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlNQztRQXhNK0IsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUNoQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRTNDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsYUFBTyxHQUFHLDBCQUFTLENBQUMsS0FBSyxDQUFDO1FBQzNCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFVCxnQkFBVSxHQUFlLElBQUksQ0FBQzs7UUFnTHRDLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLGlGQUFpRjtRQUNqRixnQ0FBZ0M7UUFDaEMsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUF2TEcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMs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Q0FBQztRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBVSxDQUFDLFVBQVUsRUFBRSwwQkFBUyxDQUFDLEtBQUssRUFBRSwwQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsVUFBVSxFQUFFLDBCQUFTLENBQUMsRUFBRSxFQUFFLDBCQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsMEJBQVMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDSSxJQUFJLFNBQVMsR0FBWSxFQUFFLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxH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Qzs0QkFDOUIsTUFBTTtxQkFDYjtvQkFDRCxVQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QixTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDSCxrQ0FBa0M7Z0JBRWxDLElBQUk7Z0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFRLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBN0xtQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FBeUI7SUFDeEI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQTJCO0lBQ3pCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUF1QztJQUN4QztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FBZ0M7SUFKakMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXlNekI7SUFBRCxZQUFDO0NBek1ELEFBeU1DLENBek1rQyxFQUFFLENBQUMsU0FBUyxHQXlNOUM7a0JBek1vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRElSRUNUSU9OLCBQSUVDRV9UWVBFIH0gZnJvbSAnLi9TbmFrZUNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9TbmFrZVBpZWNlJztcclxuaW1wb3J0IHsgU25ha2VTY2VuZSB9IGZyb20gJy4vU25ha2VTY2VuZSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KSBwcml2YXRlIGZyYW1lVGltZSA9IDAuNTtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdCkgcHJpdmF0ZSBsZXZlbFJhdGlvID0gMC4wNTtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHByaXZhdGUgcGllY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBsYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBhc3RUaW1lID0gMDtcclxuICAgIHByaXZhdGUgcm93c051bTogbnVtYmVyID0gMTY7XHJcbiAgICBwcml2YXRlIGNvbHNOdW06IG51bWJlciA9IDE2O1xyXG4gICAgcHJpdmF0ZSBncmlkV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHBpZWNlTWFwOiBQaWVjZVtdW107XHJcbiAgICBwcml2YXRlIHNuYWtlOiBQaWVjZVtdO1xyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyID0gRElSRUNUSU9OLlJJR0hUO1xyXG4gICAgcHVibGljIGxldmVsID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNuYWtlU2NlbmU6IFNuYWtlU2NlbmUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdyaWRXaWR0aCA9IHRoaXMubGF5b3V0LndpZHRoIC8gdGhpcy5jb2xzTnVtO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGllY2VQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQuYWRkQ2hpbGQocGllY2VOb2RlKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS53aWR0aCA9IHRoaXMuZ3JpZFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLmhlaWdodCA9IHRoaXMuZ3JpZFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnggPSB4ICogdGhpcy5ncmlkV2lkdGggKyBwaWVjZU5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgcGllY2VOb2RlLnkgPSB5ICogdGhpcy5ncmlkV2lkdGggKyBwaWVjZU5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ueCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLnkgPSB5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaWNrKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2tIYW5kbGVyKTtcclxuICAgICAgICBsZXQgdGltZSA9IHRoaXMuZnJhbWVUaW1lIC0gKHRoaXMubGV2ZWxSYXRpbyAqIHRoaXMubGV2ZWwpO1xyXG4gICAgICAgIGlmICh0aW1lIDwgMC4xKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSAwLjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrSGFuZGxlciwgdGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTbmFrZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KHNuYWtlU2NlbmU6IFNuYWtlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNuYWtlU2NlbmUgPSBzbmFrZVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRm9vZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNuYWtlID0gW107XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcFs5XVs5XS5pbml0KFBJRUNFX1RZUEUuU05BS0VfSEVBRCwgRElSRUNUSU9OLlJJR0hULCBESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgICAgIHRoaXMucGllY2VNYXBbOF1bOV0uaW5pdChQSUVDRV9UWVBFLlNOQUtFX0JPRFksIERJUkVDVElPTi5SSUdIVCwgRElSRUNUSU9OLlJJR0hUKTtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwWzddWzldLmluaXQoUElFQ0VfVFlQRS5TTkFLRV9CT0RZLCBESVJFQ1RJT04uUklHSFQsIERJUkVDVElPTi5VUCk7XHJcbiAgICAgICAgdGhpcy5waWVjZU1hcFs3XVs4XS5pbml0KFBJRUNFX1RZUEUuU05BS0VfVEFJTCwgRElSRUNUSU9OLlVQLCBESVJFQ1RJT04uVVApO1xyXG4gICAgICAgIHRoaXMuc25ha2UucHVzaCh0aGlzLnBpZWNlTWFwWzldWzldKTtcclxuICAgICAgICB0aGlzLnNuYWtlLnB1c2godGhpcy5waWVjZU1hcFs4XVs5XSk7XHJcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKHRoaXMucGllY2VNYXBbN11bOV0pO1xyXG4gICAgICAgIHRoaXMuc25ha2UucHVzaCh0aGlzLnBpZWNlTWFwWzddWzhdKTtcclxuICAgICAgICB0aGlzLm1vdmVEaXIgPSBESVJFQ1RJT04uUklHSFQ7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRm9vZCgpIHtcclxuICAgICAgICBsZXQgYmxhbmtMaXN0OiBQaWVjZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNOdW07IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS50eXBlID09PSBQSUVDRV9UWVBFLkJMQU5LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhbmtMaXN0LnB1c2godGhpcy5waWVjZU1hcFt4XVt5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhbmRvbVBpZWNlID0gYmxhbmtMaXN0WyhNYXRoLnJhbmRvbSgpICogYmxhbmtMaXN0Lmxlbmd0aCkgfCAwXTtcclxuICAgICAgICByYW5kb21QaWVjZS50eXBlID0gUElFQ0VfVFlQRS5GT09EO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS50eXBlID0gUElFQ0VfVFlQRS5CTEFOSztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMZXZlbChsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxldmVsICE9PSB0aGlzLmxldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR1cm5TbmFrZShkaXI6IERJUkVDVElPTikge1xyXG4gICAgICAgIGlmICh0aGlzLnNuYWtlWzBdLm91dERpciAhPT0gLWRpcikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBkaXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTbmFrZSgpIHtcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuc25ha2VbMF07XHJcbiAgICAgICAgaGVhZC5pbkRpciA9IHRoaXMuc25ha2VbMV0ub3V0RGlyO1xyXG4gICAgICAgIGhlYWQub3V0RGlyID0gdGhpcy5tb3ZlRGlyO1xyXG4gICAgICAgIGxldCBuZXh0UGllY2U6IFBpZWNlO1xyXG4gICAgICAgIHN3aXRjaCAoaGVhZC5vdXREaXIpIHtcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uVVA6XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZC55ID09PSB0aGlzLnJvd3NOdW0gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpZWNlID0gdGhpcy5waWVjZU1hcFtoZWFkLnhdWzBdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2hlYWQueF1baGVhZC55ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZC54ID09PSB0aGlzLmNvbHNOdW0gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpZWNlID0gdGhpcy5waWVjZU1hcFswXVtoZWFkLnldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2hlYWQueCArIDFdW2hlYWQueV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjpcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkLnkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2hlYWQueF1bdGhpcy5yb3dzTnVtIC0gMV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaWVjZSA9IHRoaXMucGllY2VNYXBbaGVhZC54XVtoZWFkLnkgLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWQueCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaWVjZSA9IHRoaXMucGllY2VNYXBbdGhpcy5jb2xzTnVtIC0gMV1baGVhZC55XTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpZWNlID0gdGhpcy5waWVjZU1hcFtoZWFkLnggLSAxXVtoZWFkLnldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVNuYWtlVG9QaWVjZShuZXh0UGllY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTbmFrZVRvUGllY2UobmV4dFBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5zbmFrZVswXTtcclxuICAgICAgICBzd2l0Y2ggKG5leHRQaWVjZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUElFQ0VfVFlQRS5TTkFLRV9CT0RZOlxyXG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuU05BS0VfVEFJTDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZVNjZW5lLm92ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLkZPT0Q6XHJcbiAgICAgICAgICAgICAgICBuZXh0UGllY2UuaW5pdChQSUVDRV9UWVBFLlNOQUtFX0hFQUQsIGhlYWQub3V0RGlyLCBoZWFkLmluRGlyKTtcclxuICAgICAgICAgICAgICAgIGhlYWQuaW5pdChQSUVDRV9UWVBFLlNOQUtFX0JPRFksIGhlYWQub3V0RGlyLCBoZWFkLmluRGlyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2UudW5zaGlmdChuZXh0UGllY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZVNjZW5lLm9uRWF0Rm9vZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUElFQ0VfVFlQRS5CTEFOSzpcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTbmFrZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBpZWNlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLlNOQUtFX0hFQUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGllY2UuaW5pdChQSUVDRV9UWVBFLlNOQUtFX0hFQUQsIHBpZWNlLm91dERpciwgcGllY2UuaW5EaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUElFQ0VfVFlQRS5TTkFLRV9CT0RZOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBpZWNlLmluaXQoUElFQ0VfVFlQRS5TTkFLRV9CT0RZLCBuZXh0UGllY2Uub3V0RGlyLCBwaWVjZS5vdXREaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUElFQ0VfVFlQRS5TTkFLRV9UQUlMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBpZWNlLmluaXQoUElFQ0VfVFlQRS5TTkFLRV9UQUlMLCBuZXh0UGllY2Uub3V0RGlyLCBwaWVjZS5vdXREaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UudHlwZSA9IFBJRUNFX1RZUEUuQkxBTks7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U25ha2UucHVzaChuZXh0UGllY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaWVjZSA9IHBpZWNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBwaWVjZSBvZiB0aGlzLnNuYWtlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZSA9IG5ld1NuYWtlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5wYXN0VGltZSArPSBkdDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMucGFzdFRpbWUgPj0gdGhpcy5mcmFtZVRpbWUgKiAodGhpcy5sZXZlbFJhdGlvKip0aGlzLmxldmVsKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5tb3ZlU25ha2UoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucGFzdFRpbWUgPSAwO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00d12WpVXdPwalrhrKeGbMH', 'SnakePiece');
// src/snake/SnakePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var SnakeConstants_1 = require("./SnakeConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.picFood = null;
        _this.picSnakeHeadRight = null;
        _this.picSnakeBodyH = null;
        _this.picSnakeJointRight = null;
        _this.picSnakeTailUp = null;
        _this.x = 0;
        _this.y = 0;
        _this._inDir = SnakeConstants_1.DIRECTION.RIGHT;
        _this._outDir = SnakeConstants_1.DIRECTION.RIGHT;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "inDir", {
        get: function () {
            return this._inDir;
        },
        set: function (value) {
            this._inDir = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "outDir", {
        get: function () {
            return this._outDir;
        },
        set: function (value) {
            this._outDir = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (type, outDir, inDir) {
        if (outDir === void 0) { outDir = SnakeConstants_1.DIRECTION.RIGHT; }
        if (inDir === void 0) { inDir = SnakeConstants_1.DIRECTION.RIGHT; }
        this._type = type;
        this._inDir = inDir;
        this._outDir = outDir;
        this.render();
    };
    Piece.prototype.render = function () {
        switch (this.type) {
            case SnakeConstants_1.PIECE_TYPE.BLANK:
                this.sprite.spriteFrame = null;
                this.rotateOther();
                break;
            case SnakeConstants_1.PIECE_TYPE.FOOD:
                this.sprite.spriteFrame = this.picFood;
                this.rotateOther();
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD:
                this.sprite.spriteFrame = this.picSnakeHeadRight;
                this.rotateHeadByDir(this.outDir);
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
                if (this.inDir === this.outDir) {
                    this.sprite.spriteFrame = this.picSnakeBodyH;
                    this.rotateBodyByDir(this.outDir);
                }
                else {
                    this.sprite.spriteFrame = this.picSnakeJointRight;
                    this.rotateJointByDir(this.inDir, this.outDir);
                }
                break;
            case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                this.sprite.spriteFrame = this.picSnakeTailUp;
                this.rotateTailByDir(this.outDir);
                break;
            default:
                cc.error("wrong piece type!");
        }
    };
    Piece.prototype.rotateHeadByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 90;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateBodyByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 90;
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateJointByDir = function (inDir, outDir) {
        if (inDir === SnakeConstants_1.DIRECTION.UP && outDir === SnakeConstants_1.DIRECTION.RIGHT || inDir === SnakeConstants_1.DIRECTION.LEFT && outDir === SnakeConstants_1.DIRECTION.DOWN) {
            this.node.rotation = 0;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.RIGHT && outDir === SnakeConstants_1.DIRECTION.DOWN || inDir === SnakeConstants_1.DIRECTION.UP && outDir === SnakeConstants_1.DIRECTION.LEFT) {
            this.node.rotation = 90;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.RIGHT && outDir === SnakeConstants_1.DIRECTION.UP || inDir === SnakeConstants_1.DIRECTION.DOWN && outDir === SnakeConstants_1.DIRECTION.LEFT) {
            this.node.rotation = 180;
        }
        else if (inDir === SnakeConstants_1.DIRECTION.DOWN && outDir === SnakeConstants_1.DIRECTION.RIGHT || inDir === SnakeConstants_1.DIRECTION.LEFT && outDir === SnakeConstants_1.DIRECTION.UP) {
            this.node.rotation = 270;
        }
    };
    Piece.prototype.rotateTailByDir = function (dir) {
        switch (dir) {
            case SnakeConstants_1.DIRECTION.UP:
                this.node.rotation = 0;
                break;
            case SnakeConstants_1.DIRECTION.RIGHT:
                this.node.rotation = 90;
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                this.node.rotation = 180;
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                this.node.rotation = 270;
                break;
        }
    };
    Piece.prototype.rotateOther = function () {
        this.node.rotation = 0;
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picFood", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeHeadRight", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeBodyH", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeJointRight", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Piece.prototype, "picSnakeTailUp", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VQaWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQix5QkFBWTtJQUF2QztRQUFBLHFFQXNKQztRQW5KVyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFtQixJQUFJLENBQUM7UUFFekMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLHdCQUFrQixHQUFtQixJQUFJLENBQUM7UUFFMUMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLE9BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixPQUFDLEdBQUcsQ0FBQyxDQUFDO1FBV0wsWUFBTSxHQUFjLDBCQUFTLENBQUMsS0FBSyxDQUFDO1FBU3BDLGFBQU8sR0FBYywwQkFBUyxDQUFDLEtBQUssQ0FBQzs7SUFpSGpELENBQUM7SUFsSUcsc0JBQUksdUJBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFpQjtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSx3QkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFVLEtBQWdCO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ29CO0lBRTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ3lCO0lBRWxEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ3FCO0lBZHJDLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FzSmpCO0lBQUQsWUFBQztDQXRKRCxBQXNKQyxDQXRKMEIsRUFBRSxDQUFDLFNBQVMsR0FzSnRDO0FBdEpZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUElFQ0VfVFlQRSwgRElSRUNUSU9OIH0gZnJvbSBcIi4vU25ha2VDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwaWNGb29kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBpY1NuYWtlSGVhZFJpZ2h0OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBpY1NuYWtlQm9keUg6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgcGljU25ha2VKb2ludFJpZ2h0OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHBpY1NuYWtlVGFpbFVwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHggPSAwO1xyXG4gICAgcHVibGljIHkgPSAwO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF90eXBlOiBQSUVDRV9UWVBFO1xyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogUElFQ0VfVFlQRSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luRGlyOiBESVJFQ1RJT04gPSBESVJFQ1RJT04uUklHSFQ7XHJcbiAgICBnZXQgaW5EaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luRGlyO1xyXG4gICAgfVxyXG4gICAgc2V0IGluRGlyKHZhbHVlOiBESVJFQ1RJT04pIHtcclxuICAgICAgICB0aGlzLl9pbkRpciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb3V0RGlyOiBESVJFQ1RJT04gPSBESVJFQ1RJT04uUklHSFQ7XHJcbiAgICBnZXQgb3V0RGlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXREaXI7XHJcbiAgICB9XHJcbiAgICBzZXQgb3V0RGlyKHZhbHVlOiBESVJFQ1RJT04pIHtcclxuICAgICAgICB0aGlzLl9vdXREaXIgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KHR5cGU6IFBJRUNFX1RZUEUsIG91dERpciA9IERJUkVDVElPTi5SSUdIVCwgaW5EaXIgPSBESVJFQ1RJT04uUklHSFQpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9pbkRpciA9IGluRGlyO1xyXG4gICAgICAgIHRoaXMuX291dERpciA9IG91dERpcjtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLkJMQU5LOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVPdGhlcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUElFQ0VfVFlQRS5GT09EOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY0Zvb2Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZU90aGVyKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLlNOQUtFX0hFQUQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljU25ha2VIZWFkUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUhlYWRCeURpcih0aGlzLm91dERpcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQSUVDRV9UWVBFLlNOQUtFX0JPRFk6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkRpciA9PT0gdGhpcy5vdXREaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljU25ha2VCb2R5SDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUJvZHlCeURpcih0aGlzLm91dERpcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNTbmFrZUpvaW50UmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVKb2ludEJ5RGlyKHRoaXMuaW5EaXIsIHRoaXMub3V0RGlyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBJRUNFX1RZUEUuU05BS0VfVEFJTDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNTbmFrZVRhaWxVcDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGFpbEJ5RGlyKHRoaXMub3V0RGlyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJ3cm9uZyBwaWVjZSB0eXBlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByb3RhdGVIZWFkQnlEaXIoZGlyOiBESVJFQ1RJT04pe1xyXG4gICAgICAgIHN3aXRjaChkaXIpIHtcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkRPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSA5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcm90YXRlQm9keUJ5RGlyKGRpcjogRElSRUNUSU9OKSB7XHJcbiAgICAgICAgc3dpdGNoKGRpcikge1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcm90YXRlSm9pbnRCeURpcihpbkRpcjogRElSRUNUSU9OLCBvdXREaXI6IERJUkVDVElPTikge1xyXG4gICAgICAgIGlmKGluRGlyID09PSBESVJFQ1RJT04uVVAgJiYgb3V0RGlyID09PSBESVJFQ1RJT04uUklHSFQgfHwgaW5EaXIgPT09IERJUkVDVElPTi5MRUZUICYmIG91dERpciA9PT0gRElSRUNUSU9OLkRPV04pIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYoaW5EaXIgPT09IERJUkVDVElPTi5SSUdIVCAmJiBvdXREaXIgPT09IERJUkVDVElPTi5ET1dOIHx8IGluRGlyID09PSBESVJFQ1RJT04uVVAgJiYgb3V0RGlyID09PSBESVJFQ1RJT04uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSA5MDtcclxuICAgICAgICB9IGVsc2UgaWYoaW5EaXIgPT09IERJUkVDVElPTi5SSUdIVCAmJiBvdXREaXIgPT09IERJUkVDVElPTi5VUCB8fCBpbkRpciA9PT0gRElSRUNUSU9OLkRPV04gJiYgb3V0RGlyID09PSBESVJFQ1RJT04uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAxODA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGluRGlyID09PSBESVJFQ1RJT04uRE9XTiAmJiBvdXREaXIgPT09IERJUkVDVElPTi5SSUdIVCB8fCBpbkRpciA9PT0gRElSRUNUSU9OLkxFRlQgJiYgb3V0RGlyID09PSBESVJFQ1RJT04uVVApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJvdGF0ZVRhaWxCeURpcihkaXI6IERJUkVDVElPTikge1xyXG4gICAgICAgIHN3aXRjaChkaXIpIHtcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uVVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMjcwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcm90YXRlT3RoZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/tetris/TetrisPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d09eH0obdDS6b119IOSvSi', 'TetrisPiece');
// src/tetris/TetrisPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piece.prototype.hide = function () {
        this.node.active = false;
    };
    Piece.prototype.show = function () {
        this.node.active = true;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx0ZXRyaXNcXFRldHJpc1BpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7O0lBU0EsQ0FBQztJQVBVLG9CQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQVJRLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FTakI7SUFBRCxZQUFDO0NBVEQsQUFTQyxDQVQwQixFQUFFLENBQUMsU0FBUyxHQVN0QztBQVRZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQaWVjZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/tetris/TetrisScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f98a8vySGJO/rrzqvUD1fRq', 'TetrisScene');
// src/tetris/TetrisScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TetrisScene = void 0;
var TetrisBoard_1 = require("./TetrisBoard");
var TetrisConstants_1 = require("./TetrisConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TetrisScene = /** @class */ (function (_super) {
    __extends(TetrisScene, _super);
    function TetrisScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.scoreLabel = null;
        _this.nextLabel = null;
        _this.state = TetrisConstants_1.STATE.NONE;
        return _this;
    }
    TetrisScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    TetrisScene.prototype.startGame = function () {
        this.state = TetrisConstants_1.STATE.START;
        this.board.reset();
        this.updateScore(0);
    };
    TetrisScene.prototype.stopGame = function (score) {
        var _this = this;
        this.state = TetrisConstants_1.STATE.OVER;
        this.board.stop();
        G_1.G.gameRoot.showMaskMessage("无聊指数：" + score, {
            label: "再来",
            cb: function () {
                _this.startGame();
            },
            target: this
        }, {
            label: "溜了",
            cb: function () {
                G_1.G.returnHall();
            },
            target: this
        });
    };
    TetrisScene.prototype.updateScore = function (score) {
        this.scoreLabel.string = score + "";
    };
    TetrisScene.prototype.updateHint = function (hint) {
        this.nextLabel.string = hint;
    };
    TetrisScene.prototype.onBtnExit = function () {
        this.board.stop();
        G_1.G.returnHall();
    };
    TetrisScene.prototype.onBtnLeft = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerMove(-1);
        }
    };
    TetrisScene.prototype.onBtnRight = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerMove(1);
        }
    };
    TetrisScene.prototype.onBtnRotate = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerRotate(1);
        }
    };
    TetrisScene.prototype.onBtnDrop = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerDrop();
        }
    };
    TetrisScene.prototype.addListeners = function () {
        var _this = this;
        this.board.node.on(cc.Node.EventType.TOUCH_END, function (event) {
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
                    _this.onBtnRotate();
                }
                else {
                    _this.onBtnDrop();
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
                    _this.onBtnRotate();
                    break;
                case cc.KEY.down:
                case cc.KEY.s:
                    _this.onBtnDrop();
                    break;
            }
        }, this);
    };
    __decorate([
        property(TetrisBoard_1.Board)
    ], TetrisScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], TetrisScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TetrisScene.prototype, "nextLabel", void 0);
    TetrisScene = __decorate([
        ccclass
    ], TetrisScene);
    return TetrisScene;
}(cc.Component));
exports.TetrisScene = TetrisScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx0ZXRyaXNcXFRldHJpc1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNDO0FBQ3RDLHFEQUEwQztBQUMxQywwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUFxSEM7UUFsSFcsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBUyx1QkFBSyxDQUFDLElBQUksQ0FBQzs7SUE0R3JDLENBQUM7SUExR0csMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQWE7UUFBdEIsaUJBY0M7UUFiRyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFDLEtBQUssRUFDeEM7WUFDSSxLQUFLLEVBQUUsSUFBSTtZQUFFLEVBQUUsRUFBRTtnQkFDYixLQUFJLENB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QkFDNUIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsTUFBTTtnQkFDVixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtnQkFDVixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNqQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLE1BQU07YUFDYjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFqSEQ7UUFEQyxRQUFRLENBQUMsbUJBQUssQ0FBQzs4Q0FDWTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNnQjtJQVAxQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBcUh2QjtJQUFELGtCQUFDO0NBckhELEFBcUhDLENBckhnQyxFQUFFLENBQUMsU0FBUyxHQXFINUM7QUFySFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL1RldHJpc0JvYXJkXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4vVGV0cmlzQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUZXRyaXNTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvYXJkKVxyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIG5leHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGU6U1RBVEUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wR2FtZShzY29yZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5zdG9wKCk7XHJcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLml6DogYrmjIfmlbDvvJpcIitzY29yZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuWGjeadpVwiLCBjYjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIua6nOS6hlwiLCBjYjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRy5yZXR1cm5IYWxsKCk7XHJcbiAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gc2NvcmUgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpbnQoaGludDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwuc3RyaW5nID0gaGludDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkV4aXQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5zdG9wKCk7XHJcbiAgICAgICAgRy5yZXR1cm5IYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5MZWZ0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmlnaHQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuU1RBUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGF5ZXJNb3ZlKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJvdGF0ZSgpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBsYXllclJvdGF0ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5Ecm9wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxheWVyRHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IGVuZFBvcy55IC0gc3RhcnRQb3MueTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFgpID4gTWF0aC5hYnMob2Zmc2V0WSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blJvdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuRHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICgoZXZlbnQgYXMgYW55KS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS53OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Sb3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Ecm9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpQztBQUNqQyxtREFBNkM7QUFDN0MsMEJBQXlCO0FBRW5CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBbUdDO1FBaEdHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFWixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQTRGdEIsQ0FBQztJQTFGRywwQkFBSyxHQUFMO1FBQUEsaUJBOENDO1FBN0NHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQjs7V0FFRztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQWU7WUFDdEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLElB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QVMsQ0FBQywwQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTlGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLG9CQUFLLENBQUM7NkNBQ0k7SUFMWCxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBbUd0QjtJQUFELGlCQUFDO0NBbkdELEFBbUdDLENBbkcrQixFQUFFLENBQUMsU0FBUyxHQW1HM0M7QUFuR1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vU25ha2VCb2FyZFwiO1xyXG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi9TbmFrZUNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFNuYWtlU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb2FyZClcclxuICAgIGJvYXJkOiBCb2FyZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZSA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLlm5vmlrnlkJHmiYvlir/mu5HliqhcIik7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmiYvlir/vvIzplK7nm5jvvIzmjInpkq7mk43kvZxcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IGVuZFBvcy55IC0gc3RhcnRQb3MueTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFgpID4gTWF0aC5hYnMob2Zmc2V0WSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKChldmVudCBhcyBhbnkpLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5MZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJHYW1lKCkge1xyXG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g5ZCD5LqGXCIgKyB0aGlzLnNjb3JlICsgXCLlnahcIiwgeyBsYWJlbDogXCLljonlrrPkuoZcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRWF0Rm9vZCgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlKz0xO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcclxuICAgICAgICB0aGlzLmJvYXJkLmFkZEZvb2QoKTtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLnNjb3JlIC8gMTAgfCAwO1xyXG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlTGV2ZWwobGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuTGVmdCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uTEVGVCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5SaWdodCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuVXAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC50dXJuU25ha2UoRElSRUNUSU9OLlVQKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC50dXJuU25ha2UoRElSRUNUSU9OLkRPV04pOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuUmV0dXJuKCkge1xyXG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdG5SZXN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae1feSJm35PO7NFsru97cE/', 'M2048Constants');
// src/2048/M2048Constants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = exports.DIR = void 0;
// export const DIR = cc.Enum({
//     LEFT:-1,
//     UP:-1,
//     RIGHT:-1,
//     DOWN:-1
// });
var DIR;
(function (DIR) {
    DIR[DIR["LEFT"] = 1] = "LEFT";
    DIR[DIR["UP"] = 2] = "UP";
    DIR[DIR["RIGHT"] = 3] = "RIGHT";
    DIR[DIR["DOWN"] = 4] = "DOWN";
})(DIR = exports.DIR || (exports.DIR = {}));
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OENvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsTUFBTTtBQUNOLElBQVksR0FLWDtBQUxELFdBQVksR0FBRztJQUNYLDZCQUFRLENBQUE7SUFDUix5QkFBTSxDQUFBO0lBQ04sK0JBQVMsQ0FBQTtJQUNULDZCQUFRLENBQUE7QUFDWixDQUFDLEVBTFcsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBS2Q7QUFDRCxJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYixpQ0FBUSxDQUFBO0lBQ1IsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IERJUiA9IGNjLkVudW0oe1xyXG4vLyAgICAgTEVGVDotMSxcclxuLy8gICAgIFVQOi0xLFxyXG4vLyAgICAgUklHSFQ6LTEsXHJcbi8vICAgICBET1dOOi0xXHJcbi8vIH0pO1xyXG5leHBvcnQgZW51bSBESVJ7XHJcbiAgICBMRUZUID0gMSxcclxuICAgIFVQID0gMixcclxuICAgIFJJR0hUID0gMyxcclxuICAgIERPV04gPSA0XHJcbn1cclxuZXhwb3J0IGVudW0gU1RBVEV7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNUQVJUID0gMSxcclxuICAgIE9WRVIgPSAyXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8daa0Je3Z9NaKuqNJt/x5E8', 'M2048Board');
// src/2048/M2048Board.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Board = void 0;
var M2048Piece_1 = require("./M2048Piece");
var M2048Constants_1 = require("./M2048Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var M2048Board = /** @class */ (function (_super) {
    __extends(M2048Board, _super);
    function M2048Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 4;
        _this.rowsSum = 4;
        _this.graphics = null; // 用来画棋盘
        _this.piecePrefab = null; // 画不了文字，只能用prefab了
        _this.pieceLayer = null;
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.m2048Scene = null;
        return _this;
    }
    M2048Board.prototype.onLoad = function () {
        this.tileWidth = this.node.width / (this.colsSum + 1);
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * this.colsSum;
        this.boardHeight = this.tileWidth * this.rowsSum;
        this.graphics.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum + 1; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum + 1; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        // 初始化数字位置
        this.pieceLayer.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colsSum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsSum; y++) {
                var piece = cc.instantiate(this.piecePrefab).getComponent(M2048Piece_1.M2048Piece);
                piece.node.parent = this.pieceLayer;
                piece.node.x = this.startX + x * this.tileWidth + this.tileWidth / 2;
                piece.node.y = this.startY + y * this.tileWidth + this.tileWidth / 2;
                this.pieceMap[x][y] = piece;
                piece.init(x, x, 0);
            }
        }
    };
    M2048Board.prototype.init = function (m2048Scene) {
        this.m2048Scene = m2048Scene;
        this.reset();
        this.addListeners();
    };
    M2048Board.prototype.reset = function () {
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                this.pieceMap[x][y].n = 0;
            }
        }
        for (var i = 0; i < 2; i++) {
            this.newPiece();
        }
    };
    M2048Board.prototype.newPiece = function () {
        var zeroPieces = [];
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n === 0) {
                    zeroPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var n = Math.floor(Math.random() * zeroPieces.length);
        zeroPieces[n].randomNumber();
    };
    M2048Board.prototype.judgeOver = function () {
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n === 0) {
                    return false;
                }
                if (x <= this.colsSum - 2 && this.pieceMap[x][y].n === this.pieceMap[x + 1][y].n) {
                    return false;
                }
                if (y <= this.rowsSum - 2 && this.pieceMap[x][y].n === this.pieceMap[x][y + 1].n) {
                    return false;
                }
            }
        }
        return true;
    };
    M2048Board.prototype.getMaxNLabel = function () {
        var max = 2;
        var str = "2";
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n > max) {
                    max = this.pieceMap[x][y].n;
                    str = this.pieceMap[x][y].nLabel.string;
                }
            }
        }
        return str;
    };
    M2048Board.prototype.slideLeft = function () {
        //左滑F
        //合并
        var isMove = false;
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var x0 = x + 1; x0 < this.colsSum; x0++) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x0][y].n) {
                        this.pieceMap[x][y].n *= 2;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var x0 = x + 1; x0 < this.rowsSum; x0++) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x0][y].n;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideRight = function () {
        //右滑
        //合并
        var isMove = false; //判断是否有tile移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = this.colsSum - 1; x >= 0; x--) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var x0 = x - 1; x0 >= 0; x0--) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x0][y].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = this.colsSum - 1; x >= 0; x--) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var x0 = x - 1; x0 >= 0; x0--) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x0][y].n;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        //有tile移动才添加新的tile
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideDown = function () {
        //下滑
        //合并
        var isMove = false;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var y0 = y + 1; y0 < 4; y0++) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x][y0].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var y0 = y + 1; y0 < this.rowsSum; y0++) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x][y0].n;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideUp = function () {
        //上滑
        //合并
        var isMove = false;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = this.rowsSum - 1; y >= 0; y--) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var y0 = y - 1; y0 >= 0; y0--) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x][y0].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = this.rowsSum - 1; y >= 0; y--) {
                if (this.pieceMap[x][y].n != 0) {
                    continue;
                }
                for (var y0 = y - 1; y0 >= 0; y0--) {
                    if (this.pieceMap[x][y0].n == 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x][y0].n;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.onTouched = function (event) {
        var startPos = event.getStartLocation();
        var endPos = event.getLocation();
        var offsetX = endPos.x - startPos.x;
        var offsetY = endPos.y - startPos.y;
        if (Math.abs(offsetX) > Math.abs(offsetY)) {
            if (offsetX > 40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.RIGHT);
            }
            else if (offsetX < -40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.LEFT);
            }
        }
        else {
            if (offsetY > 40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.UP);
            }
            else if (offsetY < -40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.DOWN);
            }
        }
    };
    M2048Board.prototype.onKey = function (event) {
        switch (event.keyCode) {
            case cc.KEY.up:
            case cc.KEY.w:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.UP);
                break;
            case cc.KEY.down:
            case cc.KEY.s:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.DOWN);
                break;
            case cc.KEY.left:
            case cc.KEY.a:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.LEFT);
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.RIGHT);
                break;
        }
    };
    M2048Board.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKey, this);
    };
    M2048Board.prototype.removeListeners = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKey, this);
    };
    __decorate([
        property(cc.Integer)
    ], M2048Board.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], M2048Board.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], M2048Board.prototype, "graphics", void 0);
    __decorate([
        property(cc.Prefab)
    ], M2048Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], M2048Board.prototype, "pieceLayer", void 0);
    M2048Board = __decorate([
        ccclass,
        executeInEditMode
    ], M2048Board);
    return M2048Board;
}(cc.Component));
exports.M2048Board = M2048Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OEJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRTFDLG1EQUF1QztBQUVqQyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUkvRDtJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQW1XQztRQWpXVyxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsY0FBUSxHQUFnQixJQUFJLENBQUMsQ0FBQyxRQUFRO1FBRXRDLGlCQUFXLEdBQWMsSUFBSSxDQUFDLENBQUMsbUJBQW1CO1FBRWxELGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ2pDLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQzVCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2pDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQWdWMUMsQ0FBQztJQTlVYSwyQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNo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QUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU8sb0NBQWUsR0FBdkI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBaFdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ087SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDTztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNlO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2lCO0lBVjFCLFVBQVU7UUFGdEIsT0FBTztRQUNQLGlCQUFpQjtPQUNMLFVBQVUsQ0FtV3RCO0lBQUQsaUJBQUM7Q0FuV0QsQUFtV0MsQ0FuVytCLEVBQUUsQ0FBQyxTQUFTLEdBbVczQztBQW5XWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE0yMDQ4UGllY2UgfSBmcm9tIFwiLi9NMjA0OFBpZWNlXCI7XHJcbmltcG9ydCB7IE0yMDQ4U2NlbmUgfSBmcm9tIFwiLi9NMjA0OFNjZW5lXCI7XHJcbmltcG9ydCB7IERJUiB9IGZyb20gXCIuL00yMDQ4Q29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgTTIwNDhCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgY29sc1N1bTogbnVtYmVyID0gNDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSByb3dzU3VtOiBudW1iZXIgPSA0O1xyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgcHJpdmF0ZSBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsOyAvLyDnlKjmnaXnlLvmo4vnm5hcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHBpZWNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyAvLyDnlLvkuI3kuobmloflrZfvvIzlj6rog73nlKhwcmVmYWLkuoZcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBwaWVjZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRpbGVXaWR0aDogbnVtYmVyID0gMDsgLy8g5LiA5Liq5pa55Z2X55qE5a695bqmXHJcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyID0gMDsgLy8g5qOL55uY5bem5LiL6KeSXHJcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYm9hcmRXaWR0aDogbnVtYmVyID0gMDsgLy8g5qOL55uY6IqC54K55a696auYXHJcbiAgICBwcml2YXRlIGJvYXJkSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBpZWNlTWFwOiBBcnJheTxBcnJheTxNMjA0OFBpZWNlPj47XHJcblxyXG4gICAgcHJpdmF0ZSBtMjA0OFNjZW5lOiBNMjA0OFNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy5ub2RlLndpZHRoIC8gKHRoaXMuY29sc1N1bSArIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0gdGhpcy50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYm9hcmRXaWR0aCA9IHRoaXMudGlsZVdpZHRoICogdGhpcy5jb2xzU3VtO1xyXG4gICAgICAgIHRoaXMuYm9hcmRIZWlnaHQgPSB0aGlzLnRpbGVXaWR0aCAqIHRoaXMucm93c1N1bTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgLy8g55S75qOL55uYXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtICsgMTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHRoaXMuc3RhcnRYICsgeCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuc3RhcnRYICsgeCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSArIHRoaXMuYm9hcmRIZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bSArIDE7IHkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkgKyB5ICogdGhpcy50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0aGlzLnN0YXJ0WCArIHRoaXMuYm9hcmRXaWR0aCwgdGhpcy5zdGFydFkgKyB5ICogdGhpcy50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJ3lp4vljJbmlbDlrZfkvY3nva5cclxuICAgICAgICB0aGlzLnBpZWNlTGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnBpZWNlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzU3VtOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaWVjZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGllY2VQcmVmYWIpLmdldENvbXBvbmVudChNMjA0OFBpZWNlKTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLm5vZGUucGFyZW50ID0gdGhpcy5waWVjZUxheWVyO1xyXG4gICAgICAgICAgICAgICAgcGllY2Uubm9kZS54ID0gdGhpcy5zdGFydFggKyB4ICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5ub2RlLnkgPSB0aGlzLnN0YXJ0WSArIHkgKiB0aGlzLnRpbGVXaWR0aCArIHRoaXMudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0gPSBwaWVjZTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmluaXQoeCwgeCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQobTIwNDhTY2VuZTogTTIwNDhTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubTIwNDhTY2VuZSA9IG0yMDQ4U2NlbmU7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS5uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1BpZWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld1BpZWNlKCkge1xyXG4gICAgICAgIGxldCB6ZXJvUGllY2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BpZWNlcy5wdXNoKHRoaXMucGllY2VNYXBbeF1beV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogemVyb1BpZWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIHplcm9QaWVjZXNbbl0ucmFuZG9tTnVtYmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAganVkZ2VPdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzU3VtOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNTdW07IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4IDw9IHRoaXMuY29sc1N1bSAtIDIgJiYgdGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSB0aGlzLnBpZWNlTWFwW3ggKyAxXVt5XS5uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPD0gdGhpcy5yb3dzU3VtIC0gMiAmJiB0aGlzLnBpZWNlTWFwW3hdW3ldLm4gPT09IHRoaXMucGllY2VNYXBbeF1beSArIDFdLm4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF4TkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG1heCA9IDI7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiMlwiO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHRoaXMucGllY2VNYXBbeF1beV0ubjtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSB0aGlzLnBpZWNlTWFwW3hdW3ldLm5MYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/lt6bmu5FGXHJcbiAgICAgICAgLy/lkIjlubZcclxuICAgICAgICBsZXQgaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4MCA9IHggKyAxOyB4MCA8IHRoaXMuY29sc1N1bTsgeDArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3gwXVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSB0aGlzLnBpZWNlTWFwW3gwXVt5XS5uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubiAqPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3gwXVt5XS5uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4MCA9IHggKyAxOyB4MCA8IHRoaXMucm93c1N1bTsgeDArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3gwXVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubiA9IHRoaXMucGllY2VNYXBbeDBdW3ldLm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeDBdW3ldLm4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1BpZWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01vdmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVSaWdodCgpOiBib29sZWFuIHtcclxuICAgICAgICAvL+WPs+a7kVxyXG4gICAgICAgIC8v5ZCI5bm2XHJcbiAgICAgICAgbGV0IGlzTW92ZSA9IGZhbHNlOyAvL+WIpOaWreaYr+WQpuaciXRpbGXnp7vliqhcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLmNvbHNTdW0gLSAxOyB4ID49IDA7IHgtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeDAgPSB4IC0gMTsgeDAgPj0gMDsgeDAtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3gwXVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSB0aGlzLnBpZWNlTWFwW3gwXVt5XS5uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubiA9IHRoaXMucGllY2VNYXBbeF1beV0ubiAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeDBdW3ldLm4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/np7vliqhcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLmNvbHNTdW0gLSAxOyB4ID49IDA7IHgtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeDAgPSB4IC0gMTsgeDAgPj0gMDsgeDAtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3gwXVt5XS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubiA9IHRoaXMucGllY2VNYXBbeDBdW3ldLm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeDBdW3ldLm4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mnIl0aWxl56e75Yqo5omN5re75Yqg5paw55qEdGlsZVxyXG4gICAgICAgIGlmIChpc01vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdQaWVjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlRG93bigpOiBib29sZWFuIHtcclxuICAgICAgICAvL+S4i+a7kVxyXG4gICAgICAgIC8v5ZCI5bm2XHJcbiAgICAgICAgbGV0IGlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTAgPSB5ICsgMTsgeTAgPCA0OyB5MCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beTBdLm4gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLm4gPT09IHRoaXMucGllY2VNYXBbeF1beTBdLm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS5uID0gdGhpcy5waWVjZU1hcFt4XVt5XS5uICogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5MF0ubiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTAgPSB5ICsgMTsgeTAgPCB0aGlzLnJvd3NTdW07IHkwKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5MF0ubiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLm4gPSB0aGlzLnBpZWNlTWFwW3hdW3kwXS5uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3kwXS5uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc01vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdQaWVjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlVXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/kuIrmu5FcclxuICAgICAgICAvL+WQiOW5tlxyXG4gICAgICAgIGxldCBpc01vdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnJvd3NTdW0gLSAxOyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTAgPSB5IC0gMTsgeTAgPj0gMDsgeTAtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3kwXS5uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5uID09PSB0aGlzLnBpZWNlTWFwW3hdW3kwXS5uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beV0ubiA9IHRoaXMucGllY2VNYXBbeF1beV0ubiAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF1beTBdLm4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/np7vliqhcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnJvd3NTdW0gLSAxOyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ubiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5MCA9IHkgLSAxOyB5MCA+PSAwOyB5MC0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beTBdLm4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLm4gPSB0aGlzLnBpZWNlTWFwW3hdW3kwXS5uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3kwXS5uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc01vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdQaWVjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaGVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gZXZlbnQuZ2V0U3RhcnRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gZW5kUG9zLnkgLSBzdGFydFBvcy55O1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXRYKSA+IE1hdGguYWJzKG9mZnNldFkpKSB7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXRYID4gNDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubTIwNDhTY2VuZS5vbkJvYXJkU2xpZChESVIuUklHSFQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldFggPCAtNDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubTIwNDhTY2VuZS5vbkJvYXJkU2xpZChESVIuTEVGVCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0WSA+IDQwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm0yMDQ4U2NlbmUub25Cb2FyZFNsaWQoRElSLlVQKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRZIDwgLTQwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm0yMDQ4U2NlbmUub25Cb2FyZFNsaWQoRElSLkRPV04pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXkoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XHJcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm0yMDQ4U2NlbmUub25Cb2FyZFNsaWQoRElSLlVQKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kb3duOlxyXG4gICAgICAgICAgICBjYXNlIGNjLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tMjA0OFNjZW5lLm9uQm9hcmRTbGlkKERJUi5ET1dOKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tMjA0OFNjZW5lLm9uQm9hcmRTbGlkKERJUi5MRUZUKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcclxuICAgICAgICAgICAgY2FzZSBjYy5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMubTIwNDhTY2VuZS5vbkJvYXJkU2xpZChESVIuUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaGVkLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXksIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9b4J96u9N86ZDPdyznPbw', 'M2048Piece');
// src/2048/M2048Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var M2048Piece = /** @class */ (function (_super) {
    __extends(M2048Piece, _super);
    function M2048Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nLabel = null;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(M2048Piece.prototype, "n", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            var color;
            var str;
            switch (value) {
                case 0:
                    str = "";
                    color = cc.Color.BLACK;
                    break;
                case 2:
                    str = "幼儿园";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 4:
                    str = "小学生";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 8:
                    str = "初中生";
                    color = new cc.Color().fromHEX("#7E5109");
                    break;
                case 16:
                    str = "高中生";
                    color = new cc.Color().fromHEX("#7D6608");
                    break;
                case 32:
                    str = "大学生";
                    color = new cc.Color().fromHEX("#186A3B");
                    break;
                case 64:
                    str = "研究生";
                    color = new cc.Color().fromHEX("#145A32");
                    break;
                case 128:
                    str = "硕士生";
                    color = new cc.Color().fromHEX("#0B5345");
                    break;
                case 256:
                    str = "博士生";
                    color = new cc.Color().fromHEX("#0E6251");
                    break;
                case 512:
                    str = "实习生";
                    color = new cc.Color().fromHEX("#1B4F72");
                    break;
                case 1024:
                    str = "码农";
                    color = new cc.Color().fromHEX("#154360");
                    break;
                case 2048:
                    str = "码神";
                    color = new cc.Color().fromHEX("#4A235A");
                    break;
                case 4096:
                    str = "女装大佬";
                    color = new cc.Color().fromHEX("#512E5F");
                    break;
                case 8192:
                    str = "众生平等";
                    color = new cc.Color().fromHEX("#78281F");
                    break;
                default:
                    str = "开挂吧你";
                    color = new cc.Color().fromHEX("#641E16");
                    break;
            }
            this.nLabel.string = str;
            this.nLabel.node.color = color;
            // this.nLabel.node.color = this.getHcolor(Math.random(),1);
        },
        enumerable: false,
        configurable: true
    });
    M2048Piece.prototype.init = function (x, y, n) {
        this.x = x;
        this.y = y;
        this.n = n;
    };
    M2048Piece.prototype.randomNumber = function () {
        this.n = Math.random() < 0.9 ? 2 : 4;
    };
    M2048Piece.prototype.getHcolor = function (top, height) {
        var oneHeight = height / 6;
        var d = 0, rgbStr;
        var r = 0, g = 0, b = 0;
        if (top < oneHeight * 1) {
            d = (top / oneHeight) * 255;
            r = 255;
            g = 0;
            b = Math.round(d);
        }
        else if (top >= oneHeight && top < 2 * oneHeight) {
            d = 255 - ((top - oneHeight) / oneHeight) * 255;
            r = Math.round(d);
            g = 0;
            b = 255;
        }
        else if (top >= 2 * oneHeight && top < 3 * oneHeight) {
            d = ((top - 2 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = Math.round(d);
            b = 255;
        }
        else if (top >= 3 * oneHeight && top < 4 * oneHeight) {
            d = 255 - ((top - 3 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = 255;
            b = Math.round(d);
        }
        else if (top >= 4 * oneHeight && top < oneHeight * 5) {
            d = ((top - oneHeight * 4) / oneHeight) * 255;
            r = Math.round(d);
            g = 255;
            b = 0;
        }
        else {
            d = 255 - ((top - oneHeight * 5) / oneHeight) * 255;
            r = 255;
            g = Math.round(d);
            b = 0;
        }
        return cc.color(r, g, b);
    };
    __decorate([
        property(cc.Label)
    ], M2048Piece.prototype, "nLabel", void 0);
    M2048Piece = __decorate([
        ccclass
    ], M2048Piece);
    return M2048Piece;
}(cc.Component));
exports.M2048Piece = M2048Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OFBpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFpSUM7UUE5SFUsWUFBTSxHQUFhLElBQUksQ0FBQztRQUl2QixRQUFFLEdBQVcsQ0FBQyxDQUFDOztJQTBIM0IsQ0FBQztJQXpIRyxzQkFBVyx5QkFBQzthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDaEIsSUFBSSxLQUFlLENBQUM7WUFDcEIsSUFBSSxHQUFXLENBQUM7WUFDaEIsUUFBUSxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNaLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ1osS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDWixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMs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QUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBaUl0QjtJQUFELGlCQUFDO0NBaklELEFBaUlDLENBakkrQixFQUFFLENBQUMsU0FBUyxHQWlJM0M7QUFqSVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE0yMDQ4UGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX246IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IG4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX247XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX24gPSB2YWx1ZTtcclxuICAgICAgICBsZXQgY29sb3I6IGNjLkNvbG9yO1xyXG4gICAgICAgIGxldCBzdHI6IHN0cmluZztcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5bm85YS/5ZutXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzg0MjEyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5bCP5a2m55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzg0MjEyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5Yid5Lit55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjN0U1MTA5XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIumrmOS4reeUn1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzdENjYwOFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLlpKflrabnlJ9cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMxODZBM0JcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CU56m255SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMTQ1QTMyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTI4OlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLnoZXlo6vnlJ9cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMwQjUzNDVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTY6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIuWNmuWjq+eUn1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzBFNjI1MVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUxMjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5a6e5Lmg55SfXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMUI0RjcyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAyNDpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CB5YacXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMTU0MzYwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CB56WeXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEEyMzVBXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA5NjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5aWz6KOF5aSn5L2sXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNTEyRTVGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODE5MjpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5LyX55Sf5bmz562JXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNzgyODFGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIuW8gOaMguWQp+S9oFwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzY0MUUxNlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5MYWJlbC5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgdGhpcy5uTGFiZWwubm9kZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMubkxhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmdldEhjb2xvcihNYXRoLnJhbmRvbSgpLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9tTnVtYmVyKCkge1xyXG4gICAgICAgIHRoaXMubiA9IE1hdGgucmFuZG9tKCkgPCAwLjkgPyAyIDogNDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhjb2xvcih0b3A6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb25lSGVpZ2h0ID0gaGVpZ2h0IC8gNjtcclxuICAgICAgICBsZXQgZCA9IDAsIHJnYlN0cjtcclxuICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgICAgICBpZiAodG9wIDwgb25lSGVpZ2h0ICogMSkge1xyXG4gICAgICAgICAgICBkID0gKHRvcCAvIG9uZUhlaWdodCkgKiAyNTU7XHJcbiAgICAgICAgICAgIHIgPSAyNTU7XHJcbiAgICAgICAgICAgIGcgPSAwO1xyXG4gICAgICAgICAgICBiID0gTWF0aC5yb3VuZChkKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSBvbmVIZWlnaHQgJiYgdG9wIDwgMiAqIG9uZUhlaWdodCkge1xyXG4gICAgICAgICAgICBkID0gMjU1IC0gKCh0b3AgLSBvbmVIZWlnaHQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGcgPSAwO1xyXG4gICAgICAgICAgICBiID0gMjU1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG9wID49IDIgKiBvbmVIZWlnaHQgJiYgdG9wIDwgMyAqIG9uZUhlaWdodCkge1xyXG4gICAgICAgICAgICBkID0gKCh0b3AgLSAyICogb25lSGVpZ2h0KSAvIG9uZUhlaWdodCkgKiAyNTU7XHJcbiAgICAgICAgICAgIHIgPSAwO1xyXG4gICAgICAgICAgICBnID0gTWF0aC5yb3VuZChkKTtcclxuICAgICAgICAgICAgYiA9IDI1NTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSAzICogb25lSGVpZ2h0ICYmIHRvcCA8IDQgKiBvbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgZCA9IDI1NSAtICgodG9wIC0gMyAqIG9uZUhlaWdodCkgLyBvbmVIZWlnaHQpICogMjU1O1xyXG4gICAgICAgICAgICByID0gMDtcclxuICAgICAgICAgICAgZyA9IDI1NTtcclxuICAgICAgICAgICAgYiA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3AgPj0gNCAqIG9uZUhlaWdodCAmJiB0b3AgPCBvbmVIZWlnaHQgKiA1KSB7XHJcbiAgICAgICAgICAgIGQgPSAoKHRvcCAtIG9uZUhlaWdodCAqIDQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGcgPSAyNTU7XHJcbiAgICAgICAgICAgIGIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGQgPSAyNTUgLSAoKHRvcCAtIG9uZUhlaWdodCAqIDUpIC8gb25lSGVpZ2h0KSAqIDI1NTtcclxuICAgICAgICAgICAgciA9IDI1NTtcclxuICAgICAgICAgICAgZyA9IE1hdGgucm91bmQoZCk7XHJcbiAgICAgICAgICAgIGIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MuY29sb3IociwgZywgYik7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6ad1DvUutCO5e9tw6UJExv', 'M2048Scene');
// src/2048/M2048Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Scene = void 0;
var M2048Board_1 = require("./M2048Board");
var G_1 = require("../G");
var M2048Constants_1 = require("./M2048Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var M2048Scene = /** @class */ (function (_super) {
    __extends(M2048Scene, _super);
    function M2048Scene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.state = M2048Constants_1.STATE.NONE;
        return _this;
    }
    M2048Scene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
    };
    M2048Scene.prototype.startGame = function () {
        this.state = M2048Constants_1.STATE.START;
        this.board.reset();
        G_1.G.gameRoot.showTip("四方向手势滑动");
    };
    M2048Scene.prototype.overGame = function () {
        var max = this.board.getMaxNLabel();
        G_1.G.gameRoot.showMaskMessage(max, { label: "OK", cb: function () { }, target: this });
        this.state = M2048Constants_1.STATE.OVER;
    };
    M2048Scene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    M2048Scene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    M2048Scene.prototype.onBoardSlid = function (dir) {
        var isMove = false;
        switch (dir) {
            case M2048Constants_1.DIR.LEFT:
                isMove = this.board.slideLeft();
                break;
            case M2048Constants_1.DIR.RIGHT:
                isMove = this.board.slideRight();
                break;
            case M2048Constants_1.DIR.UP:
                isMove = this.board.slideUp();
                break;
            case M2048Constants_1.DIR.DOWN:
                isMove = this.board.slideDown();
                break;
            default:
                cc.error("方向错误");
                break;
        }
        if (isMove) {
            if (this.board.judgeOver()) {
                this.overGame();
            }
        }
    };
    __decorate([
        property(M2048Board_1.M2048Board)
    ], M2048Scene.prototype, "board", void 0);
    M2048Scene = __decorate([
        ccclass
    ], M2048Scene);
    return M2048Scene;
}(cc.Component));
exports.M2048Scene = M2048Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDBCQUF5QjtBQUN6QixtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUEwREM7UUF4RFcsV0FBSyxHQUFlLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVUsc0JBQUssQ0FBQyxJQUFJLENBQUM7O0lBc0RyQyxDQUFDO0lBcERHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFDMUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxHQUFHLEVBQUU7WUFDVCxLQUFLLG9CQUFHLENBQUMsSUFBSTtnQkFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssb0JBQUcsQ0FBQyxLQUFLO2dCQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxvQkFBRyxDQUFDLEVBQUU7Z0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLG9CQUFHLENBQUMsSUFBSTtnQkFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtZQUNWO2dCQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtRQUNELElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7U0FDSjtJQUNMLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQzs2Q0FDWTtJQUZ4QixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBMER0QjtJQUFELGlCQUFDO0NBMURELEFBMERDLENBMUQrQixFQUFFLENBQUMsU0FBUyxHQTBEM0M7QUExRFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNMjA0OEJvYXJkIH0gZnJvbSBcIi4vTTIwNDhCb2FyZFwiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dcIjtcclxuaW1wb3J0IHsgRElSLCBTVEFURSB9IGZyb20gXCIuL00yMDQ4Q29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE0yMDQ4U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KE0yMDQ4Qm9hcmQpXHJcbiAgICBwcml2YXRlIGJvYXJkOiBNMjA0OEJvYXJkID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcclxuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLlm5vmlrnlkJHmiYvlir/mu5HliqhcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckdhbWUoKSB7XHJcbiAgICAgICAgbGV0IG1heCA9IHRoaXMuYm9hcmQuZ2V0TWF4TkxhYmVsKCk7XHJcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UobWF4LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk9LXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuT1ZFUjtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJldHVybigpIHtcclxuICAgICAgICBHLnJldHVybkhhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blJlc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJvYXJkU2xpZChkaXI6IERJUikge1xyXG4gICAgICAgIGxldCBpc01vdmUgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgICAgICBjYXNlIERJUi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlID0gdGhpcy5ib2FyZC5zbGlkZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIGlzTW92ZSA9IHRoaXMuYm9hcmQuc2xpZGVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSLlVQOlxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlID0gdGhpcy5ib2FyZC5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBESVIuRE9XTjpcclxuICAgICAgICAgICAgICAgIGlzTW92ZSA9IHRoaXMuYm9hcmQuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5pa55ZCR6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc01vdmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VPdmVyKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlckdhbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd659ijKY1FVbW2vtuTNQfM', 'BrickColor');
// src/brick/BrickColor.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickColor = /** @class */ (function (_super) {
    __extends(BrickColor, _super);
    function BrickColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickSprite = null;
        _this.picList = [];
        return _this;
    }
    BrickColor.prototype.start = function () {
        var n = Math.random() * this.picList.length | 0;
        this.brickSprite.spriteFrame = this.picList[n];
    };
    __decorate([
        property(cc.Sprite)
    ], BrickColor.prototype, "brickSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BrickColor.prototype, "picList", void 0);
    BrickColor = __decorate([
        ccclass
    ], BrickColor);
    return BrickColor;
}(cc.Component));
exports.BrickColor = BrickColor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBV0M7UUFSRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQXFCLEVBQUUsQ0FBQzs7SUFNbkMsQ0FBQztJQUpHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7K0NBQ0k7SUFMdEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQVd0QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVgrQixFQUFFLENBQUMsU0FBUyxHQVczQztBQVhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQnJpY2tDb2xvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJyaWNrU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBwaWNMaXN0OiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBuID0gTWF0aC5yYW5kb20oKSAqIHRoaXMucGljTGlzdC5sZW5ndGggfCAwO1xyXG4gICAgICAgIHRoaXMuYnJpY2tTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY0xpc3Rbbl07XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b69bBWKdlMDpJ3ExSopM/4', 'BrickLayout');
// src/brick/BrickLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickLayout = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickLayout = /** @class */ (function (_super) {
    __extends(BrickLayout, _super);
    function BrickLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.padding = 0;
        _this.spacing = 0;
        _this.colNum = 0;
        _this.brickPrefab = null;
        _this.brickNum = 0;
        return _this;
    }
    BrickLayout.prototype.init = function (brickNum) {
        this.node.removeAllChildren();
        this.brickNum = brickNum;
        for (var i = 0; i < this.brickNum; i++) {
            var brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = this.padding + (i % this.colNum) * (brickNode.width + this.spacing) + brickNode.width / 2;
            brickNode.y = -this.padding - Math.floor(i / this.colNum) * (brickNode.height + this.spacing) - brickNode.height / 2;
        }
    };
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "padding", void 0);
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "spacing", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "colNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], BrickLayout.prototype, "brickPrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "brickNum", void 0);
    BrickLayout = __decorate([
        ccclass
    ], BrickLayout);
    return BrickLayout;
}(cc.Component));
exports.BrickLayout = BrickLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQXVCQztRQXBCVyxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQVlqQyxDQUFDO0lBVkcsMEJBQUksR0FBSixVQUFLLFFBQVE7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN4RyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4SDtJQUNMLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ007SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDUTtJQVhwQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBdkJELEFBdUJDLENBdkJnQyxFQUFFLENBQUMsU0FBUyxHQXVCNUM7QUF2Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCcmlja0xheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBwYWRkaW5nOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHJpdmF0ZSBzcGFjaW5nOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGNvbE51bTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGJyaWNrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGJyaWNrTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGluaXQoYnJpY2tOdW0pIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmJyaWNrTnVtID0gYnJpY2tOdW07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJyaWNrTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJyaWNrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnJpY2tQcmVmYWIpO1xyXG4gICAgICAgICAgICBicmlja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBicmlja05vZGUueCA9IHRoaXMucGFkZGluZyArIChpICUgdGhpcy5jb2xOdW0pICogKGJyaWNrTm9kZS53aWR0aCArIHRoaXMuc3BhY2luZykgKyBicmlja05vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBicmlja05vZGUueSA9IC10aGlzLnBhZGRpbmcgLSBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbE51bSkgKiAoYnJpY2tOb2RlLmhlaWdodCArIHRoaXMuc3BhY2luZykgLSBicmlja05vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------
