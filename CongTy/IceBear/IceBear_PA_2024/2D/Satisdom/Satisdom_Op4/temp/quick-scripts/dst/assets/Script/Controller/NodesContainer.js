
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
        _this.Tutorial = null;
        _this.PS = [];
        _this.Tubes = [];
        _this.time = null;
        _this.hand = null;
        _this.logo = null;
        _this.text = null;
        _this.btn_Play = null;
        _this.CTA = null;
        _this.CTA_button = null;
        _this.CTA_button_tryAgain = null;
        _this.CTA_button_Next = null;
        _this.CTA_overlay = null;
        _this.FX_Star = null;
        _this.FX_Confetti = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
        var _this = this;
        this.time = this.UI.getChildByName("time_tab1");
        this.UI.getChildByName("MainContent").getChildByName("TubeController").children.forEach(function (child) {
            if (child.name.includes("Bottle"))
                _this.Tubes.push(child);
        });
        this.hand = this.UI.getChildByName("hand");
        this.CTA = this.UI.getChildByName("CTA");
        this.CTA_button = this.CTA.getChildByName("button");
        this.CTA_button_tryAgain = this.CTA_button.getChildByName("TRY AGAIN");
        this.CTA_button_Next = this.CTA_button.getChildByName("NEXT");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.FX_Star = this.UI.getChildByName("StarFX").getComponent(cc.ParticleSystem);
        this.FX_Confetti = this.UI.getChildByName("ConfettiBase").children[0].getComponent(cc.ParticleSystem);
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
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Tutorial", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], NodesContainer.prototype, "PS", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThEQztRQTVERyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFFBQUUsR0FBd0IsRUFBRSxDQUFDO1FBRTdCLFdBQUssR0FBYyxFQUFFLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBRXBDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBc0IsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQXNCLElBQUksQ0FBQzs7SUF3QjFDLENBQUM7SUFyQmEsOEJBQUssR0FBZjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQzFGLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7OENBQ0Q7SUFaWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOERsQztJQUFELHFCQUFDO0NBOURELEFBOERDLENBOUQyQyxFQUFFLENBQUMsU0FBUyxHQThEdkQ7a0JBOURvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQkc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFR1dG9yaWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICAgIFBTOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcblxyXG4gICAgVHViZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICB0ZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBidG5fUGxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEFfYnV0dG9uX3RyeUFnYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQ1RBX2J1dHRvbl9OZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgRlhfU3RhcjogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIEZYX0NvbmZldHRpOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwidGltZV90YWIxXCIpO1xyXG5cclxuICAgICAgICB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiTWFpbkNvbnRlbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUdWJlQ29udHJvbGxlclwiKS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQm90dGxlXCIpKSB0aGlzLlR1YmVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmQgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEEgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiQ1RBXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9idXR0b24gPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLkNUQV9idXR0b25fdHJ5QWdhaW4gPSB0aGlzLkNUQV9idXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJUUlkgQUdBSU5cIik7XHJcbiAgICAgICAgdGhpcy5DVEFfYnV0dG9uX05leHQgPSB0aGlzLkNUQV9idXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJORVhUXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9vdmVybGF5ID0gdGhpcy5DVEEuZ2V0Q2hpbGRCeU5hbWUoXCJPdmVybGF5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLkZYX1N0YXIgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiU3RhckZYXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuRlhfQ29uZmV0dGkgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiQ29uZmV0dGlCYXNlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICB9XHJcbn1cclxuIl19