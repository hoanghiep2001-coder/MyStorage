
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var BottleItem_1 = require("../Ultils/BottleItem");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.Tubes.forEach(function (tube) {
            tube.on(cc.Node.EventType.TOUCH_START, _this.tubeTouchStart, _this);
        });
    };
    TouchAreaController.prototype.tubeTouchStart = function (e) {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isCanTouch)
            return;
        this.handleIronSourcePlaySound();
        var clickedNode = e.target;
        this.NodesContainer.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.TouchSound);
        if (constants_1.Constants.TubeClicked) {
            this.isPickCorrectTube(constants_1.Constants.TubeClicked, clickedNode)
                ? this.GamePlay.handleMoveToAnotherTube(constants_1.Constants.TubeClicked, clickedNode)
                : cc.log("wrong");
            this.scaleDownTube(constants_1.Constants.TubeClicked);
            constants_1.Constants.TubeClicked = null;
        }
        else {
            constants_1.Constants.TubeClicked = clickedNode;
            this.scaleUpTube(clickedNode);
            cc.log("wrong");
            cc.log("------------------------");
        }
    };
    TouchAreaController.prototype.isPickCorrectTube = function (tube1, tube2) {
        var reuslt = false;
        var tube1BottleItemComponent = tube1.getComponent(BottleItem_1.default);
        var tube2BottleItemComponent = tube2.getComponent(BottleItem_1.default);
        var colorA = this.GamePlay.getColorStatus(tube1BottleItemComponent.waterColors);
        var colorB = this.GamePlay.getColorStatus(tube2BottleItemComponent.waterColors);
        constants_1.Constants.interactingColorNumber = colorA.indexOfFirstColor;
        cc.log(colorA.nonTransparentColorArr.length);
        if (tube1.name === tube2.name)
            return false;
        else {
            if (colorA.isHasThreeSameOneDiffColor && colorB.nonTransparentColorArr.length === 0)
                return true;
            if (colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 1)
                return false;
            if (colorB.nonTransparentColorArr.length === 4 && colorA.nonTransparentColorArr.length === 0)
                return false;
            if (colorB.nonTransparentColorArr.length === 0 && colorA.nonTransparentColorArr.length === 4)
                return false;
            if (colorB.nonTransparentColorArr.length === 3 && colorA.nonTransparentColorArr.length == 2)
                return false;
            if (colorA.firstColorOfTube === colorB.firstColorOfTube)
                return true;
        }
        return reuslt;
    };
    TouchAreaController.prototype.scaleUpTube = function (tube) {
        cc.tween(tube)
            .to(0.5, { scale: 0.17 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.scaleDownTube = function (tube) {
        cc.tween(tube)
            .to(0.5, { scale: 0.15 }, { easing: cc.easing.elasticOut })
            .start();
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    TouchAreaController.prototype.update = function (dt) {
        this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBSWxDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQTJIQztRQXpIQyxZQUFZO1FBRVosb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFpSDVCLENBQUM7SUE5R1csb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTyw0Q0FBYyxHQUF0QixVQUF1QixDQUFzQjtRQUMzQyxJQUFJLHFCQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDcEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFB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bEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBVmYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0EySC9CO0lBQUQsMEJBQUM7Q0EzSEQsQUEySEMsQ0EzSHdDLEVBQUUsQ0FBQyxTQUFTLEdBMkhwRDtBQTNIWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQm90dGxlSXRlbSBmcm9tIFwiLi4vVWx0aWxzL0JvdHRsZUl0ZW1cIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmltcG9ydCAqIGFzIEludGVyZmFjZXMgZnJvbSAnLi4vRGF0YS9pbnRlcmZhY2VzJztcclxuXHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlR1YmVzLmZvckVhY2goKHR1YmUpID0+IHtcclxuICAgICAgdHViZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50dWJlVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHR1YmVUb3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIGxldCBjbGlja2VkTm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuVHV0b3JpYWwuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLlRvdWNoU291bmQpO1xyXG5cclxuICAgIGlmIChDb25zdGFudHMuVHViZUNsaWNrZWQpIHtcclxuICAgICAgdGhpcy5pc1BpY2tDb3JyZWN0VHViZShDb25zdGFudHMuVHViZUNsaWNrZWQsIGNsaWNrZWROb2RlKVxyXG4gICAgICAgID8gdGhpcy5HYW1lUGxheS5oYW5kbGVNb3ZlVG9Bbm90aGVyVHViZShDb25zdGFudHMuVHViZUNsaWNrZWQsIGNsaWNrZWROb2RlKVxyXG4gICAgICAgIDogY2MubG9nKFwid3JvbmdcIik7XHJcblxyXG4gICAgICB0aGlzLnNjYWxlRG93blR1YmUoQ29uc3RhbnRzLlR1YmVDbGlja2VkKTtcclxuXHJcbiAgICAgIENvbnN0YW50cy5UdWJlQ2xpY2tlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIENvbnN0YW50cy5UdWJlQ2xpY2tlZCA9IGNsaWNrZWROb2RlO1xyXG5cclxuICAgICAgdGhpcy5zY2FsZVVwVHViZShjbGlja2VkTm9kZSk7XHJcblxyXG4gICAgICBjYy5sb2coXCJ3cm9uZ1wiKTtcclxuICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNQaWNrQ29ycmVjdFR1YmUodHViZTE6IGNjLk5vZGUsIHR1YmUyOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcmV1c2x0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHR1YmUxQm90dGxlSXRlbUNvbXBvbmVudCA9IHR1YmUxLmdldENvbXBvbmVudChCb3R0bGVJdGVtKTtcclxuICAgIGxldCB0dWJlMkJvdHRsZUl0ZW1Db21wb25lbnQgPSB0dWJlMi5nZXRDb21wb25lbnQoQm90dGxlSXRlbSk7XHJcblxyXG4gICAgbGV0IGNvbG9yQTogSW50ZXJmYWNlcy5jb2xvclN0YXR1cyA9IHRoaXMuR2FtZVBsYXkuZ2V0Q29sb3JTdGF0dXModHViZTFCb3R0bGVJdGVtQ29tcG9uZW50LndhdGVyQ29sb3JzKTtcclxuICAgIGxldCBjb2xvckI6IEludGVyZmFjZXMuY29sb3JTdGF0dXMgPSB0aGlzLkdhbWVQbGF5LmdldENvbG9yU3RhdHVzKHR1YmUyQm90dGxlSXRlbUNvbXBvbmVudC53YXRlckNvbG9ycyk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmludGVyYWN0aW5nQ29sb3JOdW1iZXIgPSBjb2xvckEuaW5kZXhPZkZpcnN0Q29sb3I7XHJcblxyXG4gICAgY2MubG9nKGNvbG9yQS5ub25UcmFuc3BhcmVudENvbG9yQXJyLmxlbmd0aClcclxuXHJcbiAgICBpZiAodHViZTEubmFtZSA9PT0gdHViZTIubmFtZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKGNvbG9yQS5pc0hhc1RocmVlU2FtZU9uZURpZmZDb2xvciAmJiBjb2xvckIubm9uVHJhbnNwYXJlbnRDb2xvckFyci5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG4gICAgICBpZihjb2xvckIubm9uVHJhbnNwYXJlbnRDb2xvckFyci5sZW5ndGggPT09IDQgJiYgY29sb3JBLm5vblRyYW5zcGFyZW50Q29sb3JBcnIubGVuZ3RoID09PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKGNvbG9yQi5ub25UcmFuc3BhcmVudENvbG9yQXJyLmxlbmd0aCA9PT0gNCAmJiBjb2xvckEubm9uVHJhbnNwYXJlbnRDb2xvckFyci5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoY29sb3JCLm5vblRyYW5zcGFyZW50Q29sb3JBcnIubGVuZ3RoID09PSAwICYmIGNvbG9yQS5ub25UcmFuc3BhcmVudENvbG9yQXJyLmxlbmd0aCA9PT0gNCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZihjb2xvckIubm9uVHJhbnNwYXJlbnRDb2xvckFyci5sZW5ndGggPT09IDMgJiYgY29sb3JBLm5vblRyYW5zcGFyZW50Q29sb3JBcnIubGVuZ3RoID09IDIpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYgKGNvbG9yQS5maXJzdENvbG9yT2ZUdWJlID09PSBjb2xvckIuZmlyc3RDb2xvck9mVHViZSkgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV1c2x0O1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2NhbGVVcFR1YmUodHViZTogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgY2MudHdlZW4odHViZSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4xNyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzY2FsZURvd25UdWJlKHR1YmU6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIGNjLnR3ZWVuKHR1YmUpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICB9XHJcbn1cclxuIl19