
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
        _this.CTA = null;
        _this.Btn_1 = null;
        _this.Hand = null;
        _this.Hint_Circle = null;
        // Character Path
        _this.Doll = null;
        _this.Doll_Face = null;
        _this.Doll_Mask = null;
        _this.Doll_Bandage = null;
        // Flow
        _this.Flow1 = null;
        _this.Flow2 = null;
        // Tools
        _this.ToolArea = null;
        _this.Flow1_Tool = null;
        _this.Flow1_ToolHead = null;
        _this.Flow2_spineTool = null;
        _this.Flow2_Tool = null;
        _this.Flow2_ToolHead = null;
        // Area
        _this.Flow1_Areas = [];
        _this.Flow1_Acnes = [];
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        _this.initPosTool_Flow1 = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        var _this = this;
        this.Hand = this.UI.getChildByName("hand2");
        this.Doll = this.UI.getChildByName("Doll");
        this.Doll_Face = this.Doll.getChildByName("Gal").getComponent(sp.Skeleton);
        this.Doll_Mask = this.Doll.getChildByName("Doll_Mask");
        this.Doll_Bandage = this.Doll.getChildByName("bandage");
        this.Flow1 = this.UI.getChildByName("Flow_1");
        this.Flow1_Tool = this.Flow1.getChildByName("Tool");
        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");
        this.Hint_Circle = this.Flow1.getChildByName("Hint_2");
        this.Flow1.children.forEach(function (child) {
            if (child.name.includes("AcneArea"))
                _this.Flow1_Areas.push(child);
        });
        this.Flow1_Acnes = this.Doll.getChildByName("Nose").children;
        this.Flow2 = this.UI.getChildByName("Flow_2");
        this.Flow2_spineTool = this.Flow2.getChildByName("spine_cream");
        this.Flow2_ToolHead = this.Flow2.getChildByName("MaskPoint");
        this.Flow2_Tool = this.Flow2.getChildByName("ToolCream");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.init();
    };
    NodeContainer.prototype.init = function () {
        this.initPosTool_Flow1 = this.Flow1_Tool.getPosition();
        this.ToolArea = this.Flow1_Tool;
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
    ], NodeContainer.prototype, "CTA", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBc0dDO1FBbkdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLEtBQUs7UUFFTCxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixpQkFBaUI7UUFDakIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLE9BQU87UUFDUCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsUUFBUTtRQUNSLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsT0FBTztRQUNQLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQWMsRUFB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QVcsRUFBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBSzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUt6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNFO0lBbkJILGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FzR2pDO0lBQUQsb0JBQUM7Q0F0R0QsQUFzR0MsQ0F0RzBDLEVBQUUsQ0FBQyxTQUFTLEdBc0d0RDtrQkF0R29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY3JhdGNoYWJsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIEJnXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJnXzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICAvLyBVSVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEJ0bl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgSGludF9DaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDaGFyYWN0ZXIgUGF0aFxyXG4gICAgRG9sbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xsX0ZhY2U6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIERvbGxfTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xsX0JhbmRhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBGbG93XHJcbiAgICBGbG93MTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93MjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIFRvb2xzXHJcbiAgICBUb29sQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93MV9Ub29sOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cxX1Rvb2xIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBGbG93Ml9zcGluZVRvb2w6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRmxvdzJfVG9vbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93Ml9Ub29sSGVhZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQXJlYVxyXG4gICAgRmxvdzFfQXJlYXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgRmxvdzFfQWNuZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBDVEFcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX2ljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX292ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBpbml0UG9zVG9vbF9GbG93MTogY2MuVmVjMiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkhhbmQgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiaGFuZDJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Eb2xsID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRvbGxcIik7XHJcbiAgICAgICAgdGhpcy5Eb2xsX0ZhY2UgPSB0aGlzLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJHYWxcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLkRvbGxfTWFzayA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIkRvbGxfTWFza1wiKTtcclxuICAgICAgICB0aGlzLkRvbGxfQmFuZGFnZSA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcImJhbmRhZ2VcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5GbG93MSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJGbG93XzFcIik7XHJcbiAgICAgICAgdGhpcy5GbG93MV9Ub29sID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIlRvb2xcIik7XHJcbiAgICAgICAgdGhpcy5GbG93MV9Ub29sSGVhZCA9IHRoaXMuRmxvdzEuZ2V0Q2hpbGRCeU5hbWUoXCJUb29sSGVhZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkhpbnRfQ2lyY2xlID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIkhpbnRfMlwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkZsb3cxLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQWNuZUFyZWFcIikpIHRoaXMuRmxvdzFfQXJlYXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzFfQWNuZXMgPSB0aGlzLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJOb3NlXCIpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLkZsb3cyID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkZsb3dfMlwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX3NwaW5lVG9vbCA9IHRoaXMuRmxvdzIuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9jcmVhbVwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX1Rvb2xIZWFkID0gdGhpcy5GbG93Mi5nZXRDaGlsZEJ5TmFtZShcIk1hc2tQb2ludFwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX1Rvb2wgPSB0aGlzLkZsb3cyLmdldENoaWxkQnlOYW1lKFwiVG9vbENyZWFtXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9CdG4gPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcImJ0bk5leHRcIik7XHJcbiAgICAgICAgdGhpcy5DVEFfbG9nbyA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwibG9nb1wiKTtcclxuICAgICAgICB0aGlzLkNUQV9pY29uID0gdGhpcy5DVEEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpO1xyXG4gICAgICAgIHRoaXMuQ1RBX292ZXJsYXkgPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcIk92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zVG9vbF9GbG93MSA9IHRoaXMuRmxvdzFfVG9vbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLlRvb2xBcmVhID0gdGhpcy5GbG93MV9Ub29sO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==