
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4c073bv1FK85YFJROX1Ttb', 'GraphicsController');
// Script/Controller/GraphicsController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GraphicsController = /** @class */ (function (_super) {
    __extends(GraphicsController, _super);
    function GraphicsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.prefab_Graphics = null;
        // state
        _this.graphicsArr = [];
        _this.handController = null;
        return _this;
    }
    GraphicsController.prototype.start = function () {
        this.createGraphics();
    };
    GraphicsController.prototype.createGraphics = function () {
        var prefab = cc.instantiate(this.prefab_Graphics);
        var graphics = prefab.getComponent(cc.Graphics);
        prefab.x = 0;
        prefab.y = 0;
        prefab.parent = this.node;
        this.graphicsArr.push(graphics);
    };
    GraphicsController.prototype.handleDrawLine = function (start, end, graphics) {
        graphics.clear();
        graphics.lineWidth = 7;
        graphics.moveTo(start.x, start.y);
        graphics.lineTo(end.x, end.y);
        graphics.stroke();
    };
    GraphicsController.prototype.handleDrawWithTouchPoint = function () {
        if (constants_1.Constants.touchPointsPos.length >= 2) {
            for (var i = 1; i < constants_1.Constants.touchPointsPos.length; i++) {
                var start = constants_1.Constants.touchPointsPos[i - 1]; // Điểm trước
                var end = constants_1.Constants.touchPointsPos[i]; // Điểm hiện tại
                // graphics.moveTo(start.x, start.y);
                // graphics.lineTo(end.x, end.y);
            }
        }
    };
    GraphicsController.prototype.update = function (dt) {
        constants_1.Constants.isTouch && this.handleDrawLine(constants_1.Constants.startPos, this.hand.getPosition(), this.graphicsArr[0]);
        // console.log(Constants.touchPointsPos);
    };
    __decorate([
        property(cc.Node)
    ], GraphicsController.prototype, "hand", void 0);
    __decorate([
        property(cc.Prefab)
    ], GraphicsController.prototype, "prefab_Graphics", void 0);
    GraphicsController = __decorate([
        ccclass
    ], GraphicsController);
    return GraphicsController;
}(cc.Component));
exports.default = GraphicsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBR3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBMkRDO1FBekRHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsUUFBUTtRQUVSLGlCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBaUQxQyxDQUFDO0lBOUNhLGtDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdNLDJDQUFjLEdBQXJCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR08sMkNBQWMsR0FBdEIsVUFBdUIsS0FBYyxFQUFFLEdBQVksRUFBRSxRQUFxQjtRQUN0RSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR08scURBQXdCLEdBQWhDO1FBQ0ksSUFBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksS0FBSyxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQzFELElBQUksR0FBRyxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO2dCQUN2RCxxQ0FBcUM7Z0JBQ3JDLGlDQUFpQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUdTLG1DQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIscUJBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FDcEMscUJBQVMsQ0FBQyxRQUFRLEVBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ3RCLENBQUM7UUFFRix5Q0FBeUM7SUFFN0MsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2M7SUFKakIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EyRHRDO0lBQUQseUJBQUM7Q0EzREQsQUEyREMsQ0EzRCtDLEVBQUUsQ0FBQyxTQUFTLEdBMkQzRDtrQkEzRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSGFuZENvbnRyb2xsZXIgZnJvbSBcIi4vSGFuZENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljc0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcblxyXG4gICAgZ3JhcGhpY3NBcnI6IGNjLkdyYXBoaWNzW10gPSBbXTtcclxuICAgIGhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHcmFwaGljcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJfR3JhcGhpY3MpO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IHByZWZhYi5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHByZWZhYi54ID0gMDtcclxuICAgICAgICBwcmVmYWIueSA9IDA7XHJcbiAgICAgICAgcHJlZmFiLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzQXJyLnB1c2goZ3JhcGhpY3MpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURyYXdMaW5lKHN0YXJ0OiBjYy5WZWMyLCBlbmQ6IGNjLlZlYzIsIGdyYXBoaWNzOiBjYy5HcmFwaGljcyk6IHZvaWQge1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gNztcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZC54LCBlbmQueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRHJhd1dpdGhUb3VjaFBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKENvbnN0YW50cy50b3VjaFBvaW50c1Bvcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IENvbnN0YW50cy50b3VjaFBvaW50c1Bvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gQ29uc3RhbnRzLnRvdWNoUG9pbnRzUG9zW2kgLSAxXTsgLy8gxJBp4buDbSB0csaw4bubY1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IENvbnN0YW50cy50b3VjaFBvaW50c1Bvc1tpXTsgLy8gxJBp4buDbSBoaeG7h24gdOG6oWlcclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaCAmJiB0aGlzLmhhbmRsZURyYXdMaW5lKFxyXG4gICAgICAgICAgICBDb25zdGFudHMuc3RhcnRQb3MsIFxyXG4gICAgICAgICAgICB0aGlzLmhhbmQuZ2V0UG9zaXRpb24oKSwgXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NBcnJbMF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhDb25zdGFudHMudG91Y2hQb2ludHNQb3MpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==