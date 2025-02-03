
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeContanier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.intro = null;
        _this.MainGame = null;
        _this.CTA = null;
        _this.Hand = null;
        _this.Btn_1 = null;
        // Character Path
        _this.Spine_Delight = null;
        _this.Delight_EyeFly = null;
        _this.Delight_EyeAlert = null;
        _this.Tears = [];
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        // Tool
        _this.Spine_Remove = null;
        _this.Tool = null;
        _this.ToolArea = null;
        _this.ToolHeadArea = null;
        _this.Fly = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        this.Btn_1 = this.MainGame.getChildByName("btnNext");
        this.Spine_Delight = this.MainGame.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
        this.Tears = this.Spine_Delight.node.children.filter(function (child) { return child.name.includes("Tears"); });
        this.Delight_EyeFly = this.Spine_Delight.node.getChildByName("fly");
        this.Delight_EyeAlert = this.Spine_Delight.node.getChildByName("Alert");
        this.Spine_Remove = this.Spine_Delight.node.getChildByName("Spine_Remove").getComponent(sp.Skeleton);
        this.Fly = this.MainGame.getChildByName("fly");
        this.Tool = this.MainGame.getChildByName("Tools");
        this.ToolArea = this.MainGame.getChildByName("Tools_Area");
        this.ToolHeadArea = this.MainGame.getChildByName("Tools_HeadArea");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "intro", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "MainGame", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0VDO1FBckVHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLEtBQUs7UUFFTCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsaUJBQWlCO1FBQ2pCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUd0QixNQUFNO1FBQ04sYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsT0FBTztRQUNQLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUNqQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsU0FBRyxHQUFZLElBQUksQ0FBQzs7SUF1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dCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGludHJvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTWFpbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBCdG5fMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIENoYXJhY3RlciBQYXRoXHJcbiAgICBTcGluZV9EZWxpZ2h0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBEZWxpZ2h0X0V5ZUZseTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEZWxpZ2h0X0V5ZUFsZXJ0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFRlYXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIFxyXG5cclxuICAgIC8vIENUQVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfaWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIFRvb2xcclxuICAgIFNwaW5lX1JlbW92ZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgVG9vbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBUb29sQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBUb29sSGVhZEFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRmx5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQnRuXzEgPSB0aGlzLk1haW5HYW1lLmdldENoaWxkQnlOYW1lKFwiYnRuTmV4dFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5TcGluZV9EZWxpZ2h0ID0gdGhpcy5NYWluR2FtZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lX0RlbGlnaHRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIHRoaXMuVGVhcnMgPSB0aGlzLlNwaW5lX0RlbGlnaHQubm9kZS5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIlRlYXJzXCIpKTtcclxuICAgICAgICB0aGlzLkRlbGlnaHRfRXllRmx5ID0gdGhpcy5TcGluZV9EZWxpZ2h0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbHlcIik7XHJcbiAgICAgICAgdGhpcy5EZWxpZ2h0X0V5ZUFsZXJ0ID0gdGhpcy5TcGluZV9EZWxpZ2h0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBbGVydFwiKTtcclxuICAgICAgICB0aGlzLlNwaW5lX1JlbW92ZSA9IHRoaXMuU3BpbmVfRGVsaWdodC5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3BpbmVfUmVtb3ZlXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHJcbiAgICAgICAgdGhpcy5GbHkgPSB0aGlzLk1haW5HYW1lLmdldENoaWxkQnlOYW1lKFwiZmx5XCIpO1xyXG4gICAgICAgIHRoaXMuVG9vbCA9IHRoaXMuTWFpbkdhbWUuZ2V0Q2hpbGRCeU5hbWUoXCJUb29sc1wiKTtcclxuICAgICAgICB0aGlzLlRvb2xBcmVhID0gdGhpcy5NYWluR2FtZS5nZXRDaGlsZEJ5TmFtZShcIlRvb2xzX0FyZWFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ub29sSGVhZEFyZWEgPSB0aGlzLk1haW5HYW1lLmdldENoaWxkQnlOYW1lKFwiVG9vbHNfSGVhZEFyZWFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX0J0biA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiYnRuTmV4dFwiKTtcclxuICAgICAgICB0aGlzLkNUQV9sb2dvID0gdGhpcy5DVEEuZ2V0Q2hpbGRCeU5hbWUoXCJsb2dvXCIpO1xyXG4gICAgICAgIHRoaXMuQ1RBX2ljb24gPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICAgICAgdGhpcy5DVEFfb3ZlcmxheSA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiT3ZlcmxheVwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=