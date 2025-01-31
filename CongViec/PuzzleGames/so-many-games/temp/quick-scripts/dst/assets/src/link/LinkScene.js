
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