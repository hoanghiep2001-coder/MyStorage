
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Spine_Bees = [];
        _this.Spine_Character = null;
        // Node
        _this.FakeCharacters = [];
        _this.HideMask = null;
        _this.LineContainer = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        _this.Hint = null;
        // PreFab
        _this.Prefab_Graphics = null;
        return _this;
    }
    NodesController.prototype.start = function () {
        constants_1.Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
        constants_1.Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
        constants_1.Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
    };
    __decorate([
        property([sp.Skeleton])
    ], NodesController.prototype, "Spine_Bees", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesController.prototype, "Spine_Character", void 0);
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
    ], NodesController.prototype, "Hint", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdkNHLFlBQVk7UUFFWixnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFFL0IscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBR3BDLE9BQU87UUFFUCxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFTO1FBRVQscUJBQWUsR0FBYyxJQUFJLENBQUM7O0lBT3RDLENBQUM7SUFMYSwrQkFBSyxHQUFmO1FBQ0kscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt1REFDTztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzREQUNjO0lBS3BDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzJEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRztJQUlyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBakNqQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0NuQztJQUFELHNCQUFDO0NBeENELEFBd0NDLENBeEM0QyxFQUFFLENBQUMsU0FBUyxHQXdDeEQ7a0JBeENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXHJcbiAgICBTcGluZV9CZWVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9DaGFyYWN0ZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEZha2VDaGFyYWN0ZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaW5lQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRfY2hlY2tDb2xsaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRW52aXJvbm1lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcmVGYWJcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5DaGFyX1BvaW50MSA9IHRoaXMuRmFrZUNoYXJhY3RlcnNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBDb25zdGFudHMuQ2hhcl9Qb2ludDIgPSB0aGlzLkZha2VDaGFyYWN0ZXJzWzFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJfUG9pbnQzID0gdGhpcy5GYWtlQ2hhcmFjdGVyc1syXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==