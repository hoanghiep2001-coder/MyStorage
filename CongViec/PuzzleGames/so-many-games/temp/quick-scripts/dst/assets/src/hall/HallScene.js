
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