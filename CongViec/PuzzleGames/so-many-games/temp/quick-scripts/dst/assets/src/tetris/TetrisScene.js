
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