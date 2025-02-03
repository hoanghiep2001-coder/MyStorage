
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
        _this.Lobsters = [];
        _this.CorrectLobsterAreas = [];
        _this.DemoLobsters = [];
        _this.main = null;
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
        this.hand = this.UI.getChildByName("hand");
        this.UI.getChildByName("DragArea").children.forEach(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThEQztRQTVERyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLHlCQUFtQixHQUFjLEVBQUUsQ0FBQztRQUNwQyxrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUU3QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwQyxxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQXNCLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFzQixJQUFJLENBQUM7O0lBMkIxQyxDQUFDO0lBeEJhLDhCQUFLLEdBQWY7UUFBQSxpQkF1QkM7UUF0QkcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3BELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBOztnQkFDdEQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRTVELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0M7SUFORixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOERsQztJQUFELHFCQUFDO0NBOURELEFBOERDLENBOUQyQyxFQUFFLENBQUMsU0FBUyxHQThEdkQ7a0JBOURvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQkc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBMb2JzdGVyczogY2MuTm9kZVtdID0gW107XHJcbiAgICBDb3JyZWN0TG9ic3RlckFyZWFzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIERlbW9Mb2JzdGVyczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGltZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIHRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJ0bl9QbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIENUQV9idXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIENUQV9idXR0b25fdHJ5QWdhaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX2J1dHRvbl9OZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgRlhfU3RhcjogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIEZYX0NvbmZldHRpOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwidGltZV90YWIxXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmQgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRyYWdBcmVhXCIpLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuaW5jbHVkZXMoXCJMb2JzdGVyXCIpKSB0aGlzLkxvYnN0ZXJzLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgZWxzZSB0aGlzLkNvcnJlY3RMb2JzdGVyQXJlYXMucHVzaChpdGVtKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkRlbW9Mb2JzdGVycyA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJEZW1vXCIpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLkNUQSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJDVEFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2J1dHRvbiA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuQ1RBX2J1dHRvbl90cnlBZ2FpbiA9IHRoaXMuQ1RBX2J1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIlRSWSBBR0FJTlwiKTtcclxuICAgICAgICB0aGlzLkNUQV9idXR0b25fTmV4dCA9IHRoaXMuQ1RBX2J1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIk5FWFRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX292ZXJsYXkgPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcIk92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRlhfU3RhciA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyRlhcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5GWF9Db25mZXR0aSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJDb25mZXR0aUJhc2VcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgIH1cclxufVxyXG4iXX0=