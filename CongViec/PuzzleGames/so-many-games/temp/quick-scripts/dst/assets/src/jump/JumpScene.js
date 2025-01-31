
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