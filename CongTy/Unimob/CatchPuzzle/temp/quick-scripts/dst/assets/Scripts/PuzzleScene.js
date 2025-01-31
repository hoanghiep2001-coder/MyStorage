
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PuzzleScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c735b1laCtHdIdMu2J7NWsl', 'PuzzleScene');
// Scripts/PuzzleScene.ts

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
exports.PuzzleScene = void 0;
var CONST_1 = require("./Const/CONST");
var GameInfo_1 = require("./Const/GameInfo");
var GameController_1 = require("./Controller/GameController");
var SoundController_1 = require("./Controller/SoundController");
var PuzzleConstants_1 = require("./PuzzleConstants");
var PuzzlueBoard_1 = require("./PuzzlueBoard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PuzzleScene = /** @class */ (function (_super) {
    __extends(PuzzleScene, _super);
    function PuzzleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.btnHint = null;
        _this.board = null;
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
        // this.winPanel.active = false;
        this.state = PuzzleConstants_1.STATE.START;
        this.board.reset(this.level);
    };
    PuzzleScene.prototype.overGame = function () {
        var _this = this;
        // this.winPanel.opacity = 255;
        this.winPanel.active = true;
        this.state = PuzzleConstants_1.STATE.OVER;
        GameInfo_1.default.isShowInstallPopup = true;
        this.btnHint.children.forEach(function (child) {
            child.color = cc.color(255, 184, 0, 255);
        });
        cc.tween(this.winPanel)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () {
            var label = _this.btnHint.getComponentInChildren(cc.Label);
            label.string = 'DOWNLOAD';
            label.node.color = cc.color(255, 255, 255, 255);
            label.node.scale = 0.8;
            _this.btnHint.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        })
            .start();
        cc.tween(this.btnHint)
            .repeatForever(cc.tween(this.btnHint)
            .to(0.5, { scale: 1 }, { easing: cc.easing.smooth })
            .to(0.5, { scale: 1.06 }, { easing: cc.easing.elasticOut })).start();
    };
    PuzzleScene.prototype.onBoardTouch = function (x, y) {
        if (GameInfo_1.default.isShowInstallPopup)
            return;
        if (this.state = PuzzleConstants_1.STATE.START) {
            var isMove = this.board.movePiece(x, y);
            if (!isMove) {
                cc.log("wrong");
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.wrongSound);
            }
            else {
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.slideSound);
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
    PuzzleScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    PuzzleScene.prototype.addListeners = function () {
        this.btnHint.on(cc.Node.EventType.TOUCH_START, this.activeHint, this);
    };
    PuzzleScene.prototype.activeHint = function () {
        console.log("Check");
        if (!GameInfo_1.default.isCanTouch)
            return;
        GameInfo_1.default.isCanTouch = false;
        this.winPanel.getComponent(cc.Animation).play();
        this.scheduleOnce(function () { return GameInfo_1.default.isCanTouch = true; }, 1.1);
        SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.clickBtnSound);
    };
    PuzzleScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(GameController_1.GameController)
    ], PuzzleScene.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "btnHint", void 0);
    __decorate([
        property(PuzzlueBoard_1.PuzzleBoard)
    ], PuzzleScene.prototype, "board", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHV6emxlU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0Qyw2Q0FBd0M7QUFDeEMsOERBQTZEO0FBQzdELGdFQUErRDtBQUMvRCxxREFBMEM7QUFDMUMsK0NBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBb0hDO1FBbEhHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRWhCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFLLEdBQVUsdUJBQUssQ0FBQyxJQUFJLENBQUM7O0lBd0dyQyxDQUFDO0lBdEdHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTywrQkFBUyxHQUFqQjtRQUNJLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sOEJBQVEsR0FBaEI7UUFBQSxpQkE2QkM7UUE1QkcsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsSUFB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QztnREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQywwQkFBVyxDQUFDOzhDQUNZO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2U7SUFUeEIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQW9IdkI7SUFBRCxrQkFBQztDQXBIRCxBQW9IQyxDQXBIZ0MsRUFBRSxDQUFDLFNBQVMsR0FvSDVDO0FBcEhZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OU1QgfSBmcm9tIFwiLi9Db25zdC9DT05TVFwiO1xyXG5pbXBvcnQgR2FtZUluZm8gZnJvbSBcIi4vQ29uc3QvR2FtZUluZm9cIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4vUHV6emxlQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFB1enpsZUJvYXJkIH0gZnJvbSBcIi4vUHV6emx1ZUJvYXJkXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFB1enpsZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5IaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShQdXp6bGVCb2FyZClcclxuICAgIHByaXZhdGUgYm9hcmQ6IFB1enpsZUJvYXJkID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB3aW5QYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzdGF0ZTogU1RBVEUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy53aW5QYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG92ZXJHYW1lKCkge1xyXG4gICAgICAgIC8vIHRoaXMud2luUGFuZWwub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLndpblBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XHJcblxyXG4gICAgICAgIEdhbWVJbmZvLmlzU2hvd0luc3RhbGxQb3B1cCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuSGludC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuY29sb3IgPSBjYy5jb2xvcigyNTUsIDE4NCwgMCwgMjU1KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy53aW5QYW5lbClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5idG5IaW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gJ0RPV05MT0FEJztcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5zY2FsZSA9IDAuODtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkhpbnQpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5IaW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGggfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxLjA2IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQm9hcmRUb3VjaCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLmlzU2hvd0luc3RhbGxQb3B1cCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUKSB7XHJcbiAgICAgICAgICAgIGxldCBpc01vdmUgPSB0aGlzLmJvYXJkLm1vdmVQaWVjZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYgKCFpc01vdmUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIndyb25nXCIpO1xyXG4gICAgICAgICAgICAgICAgU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheVNvdW5kKENPTlNULlNvdW5kVHJhY2sud3JvbmdTb3VuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5U291bmQoQ09OU1QuU291bmRUcmFjay5zbGlkZVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVdpbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJ0bkxldmVsRWFzeSgpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gMztcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJ0bkxldmVsTm9ybWFsKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSA1O1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnRuTGV2ZWxIYXJkKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxMDtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuUmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYnRuSGludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5hY3RpdmVIaW50LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZUhpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja1wiKTtcclxuXHJcbiAgICAgICAgaWYgKCFHYW1lSW5mby5pc0NhblRvdWNoKSByZXR1cm47XHJcblxyXG4gICAgICAgIEdhbWVJbmZvLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5QYW5lbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IEdhbWVJbmZvLmlzQ2FuVG91Y2ggPSB0cnVlLCAxLjEpO1xyXG5cclxuICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5U291bmQoQ09OU1QuU291bmRUcmFjay5jbGlja0J0blNvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==