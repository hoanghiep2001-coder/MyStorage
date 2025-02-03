
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

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
var GameOption_1 = require("../Data/GameOption");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Spine_Bees = [];
        _this.Spine_Character = null;
        // Node
        _this.EggController = null;
        _this.FakeCharacters = [];
        _this.HideMask = null;
        _this.LineContainer = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        _this.CTA_TryAgain = null;
        _this.CTA_PlayNow = null;
        _this.Hint = null;
        _this.PS_Confetti = null;
        // PreFab
        _this.Prefab_Graphics = null;
        // Op15
        _this.Op15_HatchButton = null;
        _this.Op15_Egg = null;
        _this.Op15_FireWork = null;
        return _this;
    }
    NodesController.prototype.start = function () {
        // Nếu Op hiện tại ko phải 15 thì mới khởi tạo điểm tấn công cho các con ong.
        if (GameOption_1.GameOption.currentOption !== 15) {
            constants_1.Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
            constants_1.Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
            constants_1.Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
        }
    };
    __decorate([
        property([sp.Skeleton])
    ], NodesController.prototype, "Spine_Bees", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesController.prototype, "Spine_Character", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "EggController", void 0);
    __decorate([
        property([cc.Node])
    ], NodesController.prototype, "FakeCharacters", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "LineContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "point_checkCollide", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_button", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_TryAgain", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_PlayNow", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Hint", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesController.prototype, "PS_Confetti", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_HatchButton", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_Egg", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Op15_FireWork", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLGlEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWdFQztRQS9ERyxZQUFZO1FBRVosZ0JBQVUsR0FBa0IsRUFBRSxDQUFDO1FBRS9CLHFCQUFlLEdBQWdCLElBQUksQ0FBQztRQUdwQyxPQUFPO1FBRVAsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFFL0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5Qix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRXRDLFNBQVM7UUFFVCxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxPQUFPO1FBRVAsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBVWxDLENBQUM7SUFSYSwrQkFBSyxHQUFmO1FBQ0ksNkVBQTZFO1FBQzdFLElBQUcsdUJBQVUsQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFFO1lBQ2hDLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0QscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztJQTVERDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt1REFDTztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzREQUNjO0lBS3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MkRBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO3dEQUNVO0lBSXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2M7SUFLbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1k7SUF0RGIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWdFbkM7SUFBRCxzQkFBQztDQWhFRCxBQWdFQyxDQWhFNEMsRUFBRSxDQUFDLFNBQVMsR0FnRXhEO2tCQWhFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lT3B0aW9uIH0gZnJvbSBcIi4uL0RhdGEvR2FtZU9wdGlvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25dKVxyXG4gICAgU3BpbmVfQmVlczogc3AuU2tlbGV0b25bXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgU3BpbmVfQ2hhcmFjdGVyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRWdnQ29udHJvbGxlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEZha2VDaGFyYWN0ZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaW5lQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRfY2hlY2tDb2xsaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRW52aXJvbm1lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX1RyeUFnYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX1BsYXlOb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgUFNfQ29uZmV0dGk6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcmVGYWJcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIE9wMTVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3AxNV9IYXRjaEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wMTVfRWdnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3AxNV9GaXJlV29yazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE7hur91IE9wIGhp4buHbiB04bqhaSBrbyBwaOG6o2kgMTUgdGjDrCBt4bubaSBraOG7n2kgdOG6oW8gxJFp4buDbSB04bqlbiBjw7RuZyBjaG8gY8OhYyBjb24gb25nLlxyXG4gICAgICAgIGlmKEdhbWVPcHRpb24uY3VycmVudE9wdGlvbiAhPT0gMTUpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkNoYXJfUG9pbnQxID0gdGhpcy5GYWtlQ2hhcmFjdGVyc1swXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuQ2hhcl9Qb2ludDIgPSB0aGlzLkZha2VDaGFyYWN0ZXJzWzFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5DaGFyX1BvaW50MyA9IHRoaXMuRmFrZUNoYXJhY3RlcnNbMl0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19