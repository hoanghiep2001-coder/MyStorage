
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/PointController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80da3u/zVdMR5yti8YdVBri', 'PointController');
// Script/Controller/PointController.ts

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
var GameOption_1 = require("../Data/GameOption");
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointCollider = /** @class */ (function (_super) {
    __extends(PointCollider, _super);
    function PointCollider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.rigidbody = null;
        _this.clearFixArea = null;
        return _this;
    }
    PointCollider.prototype.start = function () {
        this.beginContact();
        GameOption_1.GameOption.currentOption === 16 && this.initClearFixAreaOp16();
    };
    PointCollider.prototype.initClearFixAreaOp16 = function () {
        this.clearFixArea = this.node.parent.getChildByName("ClearFixArea");
    };
    PointCollider.prototype.checkCollideClearAreaOp16 = function () {
        var nodeBdx = this.node.getBoundingBox();
        var clearFixAreaBdx = this.clearFixArea.getBoundingBox();
        if (nodeBdx.intersects(clearFixAreaBdx)) {
            GameOption_1.GameOption.Op16.isPointTouchClearFixArea = true;
        }
    };
    PointCollider.prototype.beginContact = function () {
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 0 || o.tag === 8) {
                window.isTouchWall = true;
            }
        };
    };
    PointCollider.prototype.update = function (dt) {
        GameOption_1.GameOption.currentOption === 16 && this.checkCollideClearAreaOp16();
        this.node.setPosition(window.PointPos);
    };
    __decorate([
        property(GameController_1.GameController)
    ], PointCollider.prototype, "GameController", void 0);
    __decorate([
        property(cc.RigidBody)
    ], PointCollider.prototype, "rigidbody", void 0);
    PointCollider = __decorate([
        ccclass
    ], PointCollider);
    return PointCollider;
}(cc.Component));
exports.default = PointCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxQb2ludENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQWdEO0FBQ2hELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQThDQztRQTNDRyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBdUNqQyxDQUFDO0lBckNhLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsdUJBQVUsQ0FBQyxhQUFhLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFHTyw0Q0FBb0IsR0FBNUI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBR08saURBQXlCLEdBQWpDO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXpELElBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNoQyx1QkFBVSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztZQUNsQyxJQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUM3QjtRQUVMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHUyw4QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLHVCQUFVLENBQUMsYUFBYSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXpDRDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3lEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1E7SUFMZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBOENqQztJQUFELG9CQUFDO0NBOUNELEFBOENDLENBOUMwQyxFQUFFLENBQUMsU0FBUyxHQThDdEQ7a0JBOUNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdhbWVPcHRpb24gfSBmcm9tIFwiLi4vRGF0YS9HYW1lT3B0aW9uXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRDb2xsaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUmlnaWRCb2R5KVxyXG4gICAgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIGNsZWFyRml4QXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmVnaW5Db250YWN0KCk7XHJcblxyXG4gICAgICAgIEdhbWVPcHRpb24uY3VycmVudE9wdGlvbiA9PT0gMTYgJiYgdGhpcy5pbml0Q2xlYXJGaXhBcmVhT3AxNigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXRDbGVhckZpeEFyZWFPcDE2KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJGaXhBcmVhID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkNsZWFyRml4QXJlYVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0NvbGxpZGVDbGVhckFyZWFPcDE2KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBub2RlQmR4ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgbGV0IGNsZWFyRml4QXJlYUJkeCA9IHRoaXMuY2xlYXJGaXhBcmVhLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICAgIGlmKG5vZGVCZHguaW50ZXJzZWN0cyhjbGVhckZpeEFyZWFCZHgpKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9uLk9wMTYuaXNQb2ludFRvdWNoQ2xlYXJGaXhBcmVhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYmVnaW5Db250YWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmlnaWRib2R5Lm9uQmVnaW5Db250YWN0ID0gKGMscyxvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG8udGFnID09PSAwIHx8IG8udGFnID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaXNUb3VjaFdhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZU9wdGlvbi5jdXJyZW50T3B0aW9uID09PSAxNiAmJiB0aGlzLmNoZWNrQ29sbGlkZUNsZWFyQXJlYU9wMTYoKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24od2luZG93LlBvaW50UG9zKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=