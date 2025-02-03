
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TubeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07ccfFEkf1B0p36uFfTfjhr', 'TubeController');
// Script/Controller/TubeController.ts

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
var constants_1 = require("../Data/constants");
var BottleItem_1 = require("../Ultils/BottleItem");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TubeController = /** @class */ (function (_super) {
    __extends(TubeController, _super);
    function TubeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.BottleItems = [];
        _this.StatusArr = [false, false, false, false];
        _this.blueColor = cc.color(28, 101, 170, 255);
        _this.brownColor = cc.color(161, 71, 71, 255);
        _this.orangeColor = cc.color(241, 116, 58, 255);
        _this.transparent = cc.color(255, 255, 255, 0);
        return _this;
    }
    TubeController.prototype.start = function () {
        this.initTubeColors();
    };
    TubeController.prototype.initTubeColors = function () {
        this.BottleItems[0].waterColors = [this.blueColor, this.blueColor, this.brownColor, this.blueColor];
        this.BottleItems[1].waterColors = [this.orangeColor, this.orangeColor, this.blueColor, this.brownColor];
        this.BottleItems[2].waterColors = [this.transparent, this.transparent, this.orangeColor, this.brownColor];
        this.BottleItems[3].waterColors = [this.transparent, this.transparent, this.brownColor, this.orangeColor];
    };
    TubeController.prototype.hasMoreThanThreeTrueValues = function (array) {
        // Đếm số lượng phần tử true trong mảng
        var trueCount = array.filter(function (value) { return value === true; }).length;
        // Kiểm tra nếu số lượng phần tử true lớn hơn 3
        return trueCount > 3;
    };
    TubeController.prototype.isDoneGame = function () {
        var _loop_1 = function (index) {
            var bottle = this_1.BottleItems[index];
            var colorToCompare = bottle.waterColors[0].toCSS();
            if (bottle.waterColors.every(function (color) { return color.toCSS() === colorToCompare; }))
                this_1.StatusArr[index] = true;
            if (this_1.hasMoreThanThreeTrueValues(this_1.StatusArr))
                this_1.GamePlay.showCTA(true);
        };
        var this_1 = this;
        for (var index = 0; index < this.BottleItems.length; index++) {
            _loop_1(index);
        }
    };
    TubeController.prototype.update = function (dt) {
        !constants_1.Constants.isShowCTA && this.isDoneGame();
    };
    __decorate([
        property(GamePlay_1.default)
    ], TubeController.prototype, "GamePlay", void 0);
    __decorate([
        property([BottleItem_1.default])
    ], TubeController.prototype, "BottleItems", void 0);
    TubeController = __decorate([
        ccclass
    ], TubeController);
    return TubeController;
}(cc.Component));
exports.default = TubeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUdWJlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsbURBQThDO0FBQzlDLHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXlEQztRQXRERyxjQUFRLEdBQWEsSUFBSSxDQUFBO1FBR3pCLGlCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUUvQixlQUFTLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU3QyxlQUFTLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxnQkFBVSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsaUJBQVcsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELGlCQUFXLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUE0QzlELENBQUM7SUF6Q2EsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBR08sdUNBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVuRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUV2RyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUV6RyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBR0EsbURBQTBCLEdBQTFCLFVBQTJCLEtBQWdCO1FBQ3hDLHVDQUF1QztRQUN2QyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLElBQUksRUFBZCxDQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFL0QsK0NBQStDO1FBQy9DLE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBR08sbUNBQVUsR0FBbEI7Z0NBQ2EsS0FBSztZQUNWLElBQU0sTUFBTSxHQUFHLE9BQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckQsSUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxjQUFjLEVBQWhDLENBQWdDLENBQUM7Z0JBQUUsT0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXJHLElBQUcsT0FBSywwQkFBMEIsQ0FBQyxPQUFLLFNBQVMsQ0FBQztnQkFBRSxPQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OztRQU5wRixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUFuRCxLQUFLO1NBT2I7SUFDTCxDQUFDO0lBR1MsK0JBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixDQUFDLHFCQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7b0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxvQkFBVSxDQUFDLENBQUM7dURBQ1E7SUFOZCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBeURsQztJQUFELHFCQUFDO0NBekRELEFBeURDLENBekQyQyxFQUFFLENBQUMsU0FBUyxHQXlEdkQ7a0JBekRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBCb3R0bGVJdGVtIGZyb20gXCIuLi9VbHRpbHMvQm90dGxlSXRlbVwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHViZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGxcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KFtCb3R0bGVJdGVtXSlcclxuICAgIEJvdHRsZUl0ZW1zOiBCb3R0bGVJdGVtW10gPSBbXTtcclxuXHJcbiAgICBTdGF0dXNBcnI6IGJvb2xlYW5bXSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgcHVibGljIGJsdWVDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigyOCwgMTAxLCAxNzAsIDI1NSk7XHJcbiAgICBwdWJsaWMgYnJvd25Db2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigxNjEsIDcxLCA3MSwgMjU1KTtcclxuICAgIHB1YmxpYyBvcmFuZ2VDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigyNDEsIDExNiwgNTgsIDI1NSk7XHJcbiAgICBwdWJsaWMgdHJhbnNwYXJlbnQ6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRUdWJlQ29sb3JzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5pdFR1YmVDb2xvcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Cb3R0bGVJdGVtc1swXS53YXRlckNvbG9ycyA9IFt0aGlzLmJsdWVDb2xvciwgdGhpcy5ibHVlQ29sb3IsIHRoaXMuYnJvd25Db2xvciwgdGhpcy5ibHVlQ29sb3JdXHJcblxyXG4gICAgICAgIHRoaXMuQm90dGxlSXRlbXNbMV0ud2F0ZXJDb2xvcnMgPSBbdGhpcy5vcmFuZ2VDb2xvciwgdGhpcy5vcmFuZ2VDb2xvciwgdGhpcy5ibHVlQ29sb3IsIHRoaXMuYnJvd25Db2xvcl1cclxuXHJcbiAgICAgICAgdGhpcy5Cb3R0bGVJdGVtc1syXS53YXRlckNvbG9ycyA9IFt0aGlzLnRyYW5zcGFyZW50LCB0aGlzLnRyYW5zcGFyZW50LCB0aGlzLm9yYW5nZUNvbG9yLCB0aGlzLmJyb3duQ29sb3JdXHJcblxyXG4gICAgICAgIHRoaXMuQm90dGxlSXRlbXNbM10ud2F0ZXJDb2xvcnMgPSBbdGhpcy50cmFuc3BhcmVudCwgdGhpcy50cmFuc3BhcmVudCwgdGhpcy5icm93bkNvbG9yLCB0aGlzLm9yYW5nZUNvbG9yXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgaGFzTW9yZVRoYW5UaHJlZVRydWVWYWx1ZXMoYXJyYXk6IGJvb2xlYW5bXSkge1xyXG4gICAgICAgIC8vIMSQ4bq/bSBz4buRIGzGsOG7o25nIHBo4bqnbiB04butIHRydWUgdHJvbmcgbeG6o25nXHJcbiAgICAgICAgY29uc3QgdHJ1ZUNvdW50ID0gYXJyYXkuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGg7XHJcbiAgICBcclxuICAgICAgICAvLyBLaeG7g20gdHJhIG7hur91IHPhu5EgbMaw4bujbmcgcGjhuqduIHThu60gdHJ1ZSBs4bubbiBoxqFuIDNcclxuICAgICAgICByZXR1cm4gdHJ1ZUNvdW50ID4gMztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc0RvbmVHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLkJvdHRsZUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBib3R0bGUgPSB0aGlzLkJvdHRsZUl0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JUb0NvbXBhcmUgPSBib3R0bGUud2F0ZXJDb2xvcnNbMF0udG9DU1MoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGJvdHRsZS53YXRlckNvbG9ycy5ldmVyeShjb2xvciA9PiBjb2xvci50b0NTUygpID09PSBjb2xvclRvQ29tcGFyZSkpIHRoaXMuU3RhdHVzQXJyW2luZGV4XSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmhhc01vcmVUaGFuVGhyZWVUcnVlVmFsdWVzKHRoaXMuU3RhdHVzQXJyKSkgdGhpcy5HYW1lUGxheS5zaG93Q1RBKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgIUNvbnN0YW50cy5pc1Nob3dDVEEgJiYgdGhpcy5pc0RvbmVHYW1lKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==