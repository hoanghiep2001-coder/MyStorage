
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BG = null;
        _this.hideMask = null;
        _this.UI = null;
        _this.Plate = null;
        _this.DragArea = null;
        _this.Lobsters = [];
        _this.CorrectLobsterAreas = [];
        _this.DemoLobsters = [];
        _this.main = null;
        _this.time = null;
        _this.hand = null;
        _this.logo = null;
        _this.text = null;
        _this.btn_Play = null;
        _this.NextFlow = null;
        _this.CTA = null;
        _this.CTA_button = null;
        _this.CTA_button_tryAgain = null;
        _this.CTA_button_Next = null;
        _this.CTA_overlay = null;
        _this.FX_Star = null;
        _this.FX_Confetti = null;
        _this.Flow2 = null;
        _this.Flow2_SpineNode = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
        var _this = this;
        this.time = this.UI.getChildByName("time_tab1");
        this.hand = this.UI.getChildByName("hand");
        this.Plate = this.UI.getChildByName("Plate");
        this.DragArea = this.UI.getChildByName("DragArea");
        this.DragArea.children.forEach(function (item) {
            if (item.name.includes("Lobster"))
                _this.Lobsters.push(item);
            else
                _this.CorrectLobsterAreas.push(item);
        });
        this.DemoLobsters = this.UI.getChildByName("Demo").children;
        this.CTA = this.UI.getChildByName("CTA");
        this.CTA_button = this.CTA.getChildByName("button");
        this.CTA_button_tryAgain = this.CTA_button.getChildByName("TRY AGAIN");
        this.CTA_button_Next = this.CTA_button.getChildByName("NEXT");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.FX_Star = this.UI.getChildByName("StarFX").getComponent(cc.ParticleSystem);
        this.FX_Confetti = this.UI.getChildByName("ConfettiBase").children[0].getComponent(cc.ParticleSystem);
        this.NextFlow = this.UI.getChildByName("NextFlow");
        this.Flow2 = this.UI.getChildByName("Flow2");
        this.Flow2_SpineNode = this.Flow2.getChildByName("SpineNode");
    };
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXlGQztRQXZGRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6Qix5QkFBbUIsR0FBYyxFQUFFLENBQUM7UUFFcEMsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQXNCLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFzQixJQUFJLENBQUM7UUFFdEMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixxQkFBZSxHQUFZLElBQUksQ0FBQzs7SUF5Q3BDLENBQUM7SUFwQ2EsOEJBQUssR0FBZjtRQUFBLGlCQW1DQztRQWxDRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7O2dCQUN0RCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFNUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQXRGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQU5GLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F5RmxDO0lBQUQscUJBQUM7Q0F6RkQsQUF5RkMsQ0F6RjJDLEVBQUUsQ0FBQyxTQUFTLEdBeUZ2RDtrQkF6Rm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIFBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBEcmFnQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgTG9ic3RlcnM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIENvcnJlY3RMb2JzdGVyQXJlYXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIERlbW9Mb2JzdGVyczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGltZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIHRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJ0bl9QbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgTmV4dEZsb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQ1RBX2J1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQ1RBX2J1dHRvbl90cnlBZ2FpbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQ1RBX2J1dHRvbl9OZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgRlhfU3RhcjogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIEZYX0NvbmZldHRpOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgRmxvdzI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEZsb3cyX1NwaW5lTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lX3RhYjFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZCA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG5cclxuICAgICAgICB0aGlzLlBsYXRlID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIlBsYXRlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkRyYWdBcmVhID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRyYWdBcmVhXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkRyYWdBcmVhLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuaW5jbHVkZXMoXCJMb2JzdGVyXCIpKSB0aGlzLkxvYnN0ZXJzLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgZWxzZSB0aGlzLkNvcnJlY3RMb2JzdGVyQXJlYXMucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5EZW1vTG9ic3RlcnMgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiRGVtb1wiKS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgdGhpcy5DVEEgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiQ1RBXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9idXR0b24gPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfYnV0dG9uX3RyeUFnYWluID0gdGhpcy5DVEFfYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiVFJZIEFHQUlOXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9idXR0b25fTmV4dCA9IHRoaXMuQ1RBX2J1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIk5FWFRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX292ZXJsYXkgPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcIk92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRlhfU3RhciA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyRlhcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5GWF9Db25mZXR0aSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJDb25mZXR0aUJhc2VcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5OZXh0RmxvdyA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJOZXh0Rmxvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GbG93MiA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJGbG93MlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GbG93Ml9TcGluZU5vZGUgPSB0aGlzLkZsb3cyLmdldENoaWxkQnlOYW1lKFwiU3BpbmVOb2RlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==