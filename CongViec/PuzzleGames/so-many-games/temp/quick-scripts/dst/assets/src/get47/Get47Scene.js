
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