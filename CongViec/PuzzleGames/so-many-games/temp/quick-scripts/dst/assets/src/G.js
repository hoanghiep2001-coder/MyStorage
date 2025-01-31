
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