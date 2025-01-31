
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