
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