
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