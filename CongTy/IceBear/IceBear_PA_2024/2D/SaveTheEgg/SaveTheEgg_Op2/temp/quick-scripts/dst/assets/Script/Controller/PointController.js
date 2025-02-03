
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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointCollider = /** @class */ (function (_super) {
    __extends(PointCollider, _super);
    function PointCollider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.rigidbody = null;
        return _this;
    }
    PointCollider.prototype.start = function () {
        this.beginContact();
    };
    PointCollider.prototype.beginContact = function () {
        var _this = this;
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 0) {
                _this.GameController.installHandle();
                window.isTouchWall = true;
            }
        };
    };
    PointCollider.prototype.update = function (dt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxQb2ludENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkJDO1FBeEJHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUFzQm5DLENBQUM7SUFuQmEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQ2xDLElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBR1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3lEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1E7SUFMZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkJqQztJQUFELG9CQUFDO0NBM0JELEFBMkJDLENBM0IwQyxFQUFFLENBQUMsU0FBUyxHQTJCdEQ7a0JBM0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludENvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkub25CZWdpbkNvbnRhY3QgPSAoYyxzLG8pID0+IHtcclxuICAgICAgICAgICAgaWYoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHdpbmRvdy5Qb2ludFBvcylcclxuICAgIH1cclxuXHJcbn1cclxuIl19