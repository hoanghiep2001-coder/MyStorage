
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/loading/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '118a2LRWWBIKY9afEfjWW/h', 'LoadingScene');
// src/loading/LoadingScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScene = void 0;
var G_1 = require("../G");
var GameRoot_1 = require("../shared/GameRoot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipLabel = null;
        _this.gameRoot = null;
        return _this;
    }
    LoadingScene.prototype.onLoad = function () {
        G_1.G.setResolutionPolicy();
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LoadingScene.prototype.initGlobal = function () {
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LoadingScene.prototype.start = function () {
        var _this = this;
        // cc.director.setDisplayStats(false);
        var tip = "始终相信美好的事情不会发生";
        var i = 0;
        this.tipLabel.string = '';
        this.schedule(function () {
            i++;
            if (i === tip.length + 1) {
                _this.onLoadSuccess();
            }
            else {
                _this.tipLabel.string = tip.substring(0, i);
            }
        }, 0.3, tip.length + 1, 0.3);
    };
    LoadingScene.prototype.onLoadSuccess = function () {
        G_1.G.enterHall();
    };
    __decorate([
        property(cc.Label)
    ], LoadingScene.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "gameRoot", void 0);
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.LoadingScene = LoadingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsb2FkaW5nXFxMb2FkaW5nU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBeUI7QUFDekIsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLGdDQUFZO0lBQTlDO1FBQUEscUVBbUNDO1FBaENXLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLElBQUksQ0FBQzs7SUE4QnBDLENBQUM7SUE1QkcsNkJBQU0sR0FBTjtRQUNJLEtBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLEtBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyw0QkFBSyxHQUFmO1FBQUEsaUJBYUM7UUFaRyxzQ0FBc0M7UUFDdEMsSUFBSSxHQUFHLEdBQUcsZUFBZSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUM7WUFDSixJQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO2lCQUFJO2dCQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sb0NBQWEsR0FBckI7UUFDSSxLQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUFMdkIsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQW1DeEI7SUFBRCxtQkFBQztDQW5DRCxBQW1DQyxDQW5DaUMsRUFBRSxDQUFDLFNBQVMsR0FtQzdDO0FBbkNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XHJcbmltcG9ydCB7IEdhbWVSb290IH0gZnJvbSBcIi4uL3NoYXJlZC9HYW1lUm9vdFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGdhbWVSb290OmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHLnNldFJlc29sdXRpb25Qb2xpY3koKTtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLmdhbWVSb290KTtcclxuICAgICAgICB0aGlzLmluaXRHbG9iYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2xvYmFsKCkge1xyXG4gICAgICAgIEcuZ2FtZVJvb3QgPSB0aGlzLmdhbWVSb290LmdldENvbXBvbmVudChHYW1lUm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgbGV0IHRpcCA9IFwi5aeL57uI55u45L+h576O5aW955qE5LqL5oOF5LiN5Lya5Y+R55SfXCJcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSAnJztcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYoaSA9PT0gdGlwLmxlbmd0aCsxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcC5zdWJzdHJpbmcoMCxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sMC4zLHRpcC5sZW5ndGgrMSwwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2FkU3VjY2VzcygpIHtcclxuICAgICAgICBHLmVudGVySGFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==