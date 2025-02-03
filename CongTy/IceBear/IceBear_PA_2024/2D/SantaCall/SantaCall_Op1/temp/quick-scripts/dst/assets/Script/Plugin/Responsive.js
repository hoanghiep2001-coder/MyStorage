
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var GamePlay_1 = require("../Controller/GamePlay");
var TouchAreaController_1 = require("../Controller/TouchAreaController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TouchAreaController = null;
        _this.GamePlay = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 20;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 15;
        this.GamePlay.UI_icons.scale = 0.6;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 20;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 10;
        this.GamePlay.UI_time.node.scale = 0.45;
        this.GamePlay.UI_name.node.y = -30;
        this.TouchAreaController.btn_accept.x = 75;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.45;
        this.TouchAreaController.btn_decline.x = -75;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.45;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
        this.GamePlay.UI_icons.scale = 0.4;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
        this.GamePlay.UI_time.node.scale = 0.3;
        this.GamePlay.UI_name.node.y = -30;
        this.TouchAreaController.btn_accept.x = 65;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.45;
        this.TouchAreaController.btn_decline.x = -65;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.45;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
        this.GamePlay.UI_icons.scale = 0.32;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 12;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
        this.GamePlay.UI_time.node.scale = 0.24;
        this.GamePlay.UI_name.node.y = -30;
        this.TouchAreaController.btn_accept.x = 65;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.4;
        this.TouchAreaController.btn_decline.x = -65;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.4;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.GamePlay.UI_avatar.y = 100;
            this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
            this.GamePlay.UI_icons.getComponent(cc.Widget).top = 10;
            this.GamePlay.UI_icons.scale = 0.5;
            this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
            this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
            this.GamePlay.UI_time.node.scale = 0.35;
            this.GamePlay.UI_name.node.y = -30;
            this.TouchAreaController.btn_accept.x = 75;
            this.TouchAreaController.btn_accept.y = -170;
            this.TouchAreaController.btn_accept.scale = 0.42;
            this.TouchAreaController.btn_decline.x = -75;
            this.TouchAreaController.btn_decline.y = -170;
            this.TouchAreaController.btn_decline.scale = 0.42;
        }
        else {
            // tablet
            this.GamePlay.UI_avatar.y = 100;
            this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
            this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
            this.GamePlay.UI_icons.scale = 0.4;
            this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
            this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
            this.GamePlay.UI_time.node.scale = 0.3;
            this.GamePlay.UI_name.node.y = -30;
            this.TouchAreaController.btn_accept.x = 65;
            this.TouchAreaController.btn_accept.y = -170;
            this.TouchAreaController.btn_accept.scale = 0.45;
            this.TouchAreaController.btn_decline.x = -65;
            this.TouchAreaController.btn_decline.y = -170;
            this.TouchAreaController.btn_decline.scale = 0.45;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(TouchAreaController_1.TouchAreaController)
    ], Responsive.prototype, "TouchAreaController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHlFQUF3RTtBQUN4RSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5TEM7UUF2TEcseUJBQW1CLEdBQXdCLElBQUksQ0FBQztRQUVoRCxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQTRLaEQsQ0FBQztJQXpLYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUdPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxxQkFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxxQkFBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUdPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCB7IFRvdWNoQXJlYUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vQ29udHJvbGxlci9Ub3VjaEFyZWFDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFRvdWNoQXJlYUNvbnRyb2xsZXIpXHJcbiAgICBUb3VjaEFyZWFDb250cm9sbGVyOiBUb3VjaEFyZWFDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2F2YXRhci55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2ljb25zLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDE1O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuc2NhbGUgPSAwLjY7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAyMDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX3RpbWUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMTA7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLm5vZGUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfbmFtZS5ub2RlLnkgPSAtMzA7XHJcblxyXG4gICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fYWNjZXB0LnggPSA3NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC55ID0gLTE3MDtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnggPSAtNzU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnkgPSAtMTcwO1xyXG4gICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fZGVjbGluZS5zY2FsZSA9IDAuNDU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2F2YXRhci55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAxMDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2ljb25zLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDg7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9pY29ucy5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX3RpbWUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDEwO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfdGltZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA1O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfdGltZS5ub2RlLnNjYWxlID0gMC4zO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfbmFtZS5ub2RlLnkgPSAtMzA7XHJcblxyXG4gICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fYWNjZXB0LnggPSA2NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC55ID0gLTE3MDtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnggPSAtNjU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnkgPSAtMTcwO1xyXG4gICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fZGVjbGluZS5zY2FsZSA9IDAuNDU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9hdmF0YXIueSA9IDEwMDtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2ljb25zLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMTA7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9pY29ucy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA4O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuc2NhbGUgPSAwLjMyO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfdGltZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMTI7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDU7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLm5vZGUuc2NhbGUgPSAwLjI0O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfbmFtZS5ub2RlLnkgPSAtMzA7XHJcblxyXG4gICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fYWNjZXB0LnggPSA2NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC55ID0gLTE3MDtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2RlY2xpbmUueCA9IC02NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2RlY2xpbmUueSA9IC0xNzA7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnNjYWxlID0gMC40O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcblxyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA+PSAwLjYgJiYgY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC42Mikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbW9iaWxlIG1vZGUgYXBwbG92aW5cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfYXZhdGFyLnkgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9pY29ucy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9pY29ucy5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfdGltZS5ub2RlLnNjYWxlID0gMC4zNTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9uYW1lLm5vZGUueSA9IC0zMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fYWNjZXB0LnggPSA3NTtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9hY2NlcHQueSA9IC0xNzA7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fYWNjZXB0LnNjYWxlID0gMC40MjtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnggPSAtNzU7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5idG5fZGVjbGluZS55ID0gLTE3MDtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnNjYWxlID0gMC40MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gdGFibGV0XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfYXZhdGFyLnkgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfaWNvbnMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9pY29ucy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA4O1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX2ljb25zLnNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX3RpbWUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDEwO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX3RpbWUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV90aW1lLm5vZGUuc2NhbGUgPSAwLjM7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfbmFtZS5ub2RlLnkgPSAtMzA7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9hY2NlcHQueCA9IDY1O1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2FjY2VwdC55ID0gLTE3MDtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9hY2NlcHQuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2RlY2xpbmUueCA9IC02NTtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLmJ0bl9kZWNsaW5lLnkgPSAtMTcwO1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuYnRuX2RlY2xpbmUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=