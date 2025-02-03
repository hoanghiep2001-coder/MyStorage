
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
var NodesContainer_1 = require("../Controller/NodesContainer");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
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
        this.NodesContainer.main.scale = 0.55;
        this.NodesContainer.main.setPosition(0, -50);
        var logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignHorizontalCenter = false;
        logoWidget.isAlignLeft = true;
        logoWidget.isAlignTop = true;
        logoWidget.top = 20;
        logoWidget.left = 20;
        this.NodesContainer.logo.scale = 0.7;
        this.NodesContainer.text.scale = 0.6;
        this.NodesContainer.text.setPosition(0, -175);
        var btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 15;
        btnPlayWidget.bottom = 15;
        this.NodesContainer.btn_Play.scale = 0.6;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.NodesContainer.BG.scale = 0.4;
        }
        else {
            // IpX
            this.NodesContainer.BG.scale = 0.5;
        }
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodesContainer.BG.scale = 0.3;
        this.NodesContainer.main.scale = 0.45;
        this.NodesContainer.main.setPosition(0, -50);
        var logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignLeft = false;
        logoWidget.isAlignTop = false;
        logoWidget.isAlignHorizontalCenter = true;
        this.NodesContainer.logo.scale = 0.5;
        this.NodesContainer.text.scale = 0.5;
        this.NodesContainer.text.setPosition(0, -175);
        var btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 10;
        btnPlayWidget.bottom = 10;
        this.NodesContainer.btn_Play.scale = 0.4;
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
        this.NodesContainer.BG.scale = 0.27;
        this.NodesContainer.main.scale = 0.4;
        this.NodesContainer.main.setPosition(0, -50);
        var logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignLeft = false;
        logoWidget.isAlignTop = false;
        logoWidget.isAlignHorizontalCenter = true;
        this.NodesContainer.logo.scale = 0.5;
        this.NodesContainer.text.scale = 0.4;
        this.NodesContainer.text.setPosition(0, -175);
        var btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 10;
        btnPlayWidget.bottom = 10;
        this.NodesContainer.btn_Play.scale = 0.4;
        // ----------------------
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
            this.NodesContainer.BG.scale = 0.2;
            this.NodesContainer.main.scale = 0.4;
            this.NodesContainer.main.setPosition(0, -50);
            var logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            logoWidget.isAlignLeft = false;
            logoWidget.isAlignTop = false;
            logoWidget.isAlignHorizontalCenter = true;
            this.NodesContainer.logo.scale = 0.5;
            this.NodesContainer.text.scale = 0.5;
            this.NodesContainer.text.setPosition(0, -175);
            var btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            btnPlayWidget.isAlignTop = false;
            btnPlayWidget.isAlignLeft = false;
            btnPlayWidget.isAlignRight = true;
            btnPlayWidget.isAlignBottom = true;
            btnPlayWidget.right = 10;
            btnPlayWidget.bottom = 10;
            this.NodesContainer.btn_Play.scale = 0.4;
        }
        else {
            this.NodesContainer.BG.scale = 0.2;
            this.NodesContainer.main.scale = 0.4;
            this.NodesContainer.main.setPosition(0, -60);
            var logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            logoWidget.isAlignLeft = false;
            logoWidget.isAlignTop = false;
            logoWidget.isAlignHorizontalCenter = true;
            this.NodesContainer.logo.scale = 0.5;
            this.NodesContainer.text.scale = 0.5;
            this.NodesContainer.text.setPosition(0, -175);
            var btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            btnPlayWidget.isAlignTop = false;
            btnPlayWidget.isAlignLeft = false;
            btnPlayWidget.isAlignRight = true;
            btnPlayWidget.isAlignBottom = true;
            btnPlayWidget.right = 10;
            btnPlayWidget.bottom = 10;
            this.NodesContainer.btn_Play.scale = 0.4;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBQzFELCtDQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJOQztRQXhORyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBK01oRCxDQUFDO0lBN01hLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBRU0saUNBQVksR0FBbkI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILHFCQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFB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cG9ydCBHYW1lUGxheSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICAgIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLm1haW4uc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIubWFpbi5zZXRQb3NpdGlvbigwLCAtNTApO1xyXG5cclxuICAgICAgICBsZXQgbG9nb1dpZGdldCA9IHRoaXMuTm9kZXNDb250YWluZXIuYnRuX1BsYXkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbG9nb1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgbG9nb1dpZGdldC50b3AgPSAyMDtcclxuICAgICAgICBsb2dvV2lkZ2V0LmxlZnQgPSAyMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uc2NhbGUgPSAwLjc7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIudGV4dC5zY2FsZSA9IDAuNjtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2V0UG9zaXRpb24oMCwgLTE3NSk7XHJcblxyXG4gICAgICAgIGxldCBidG5QbGF5V2lkZ2V0ID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5yaWdodCA9IDE1O1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuYm90dG9tID0gMTU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5zY2FsZSA9IDAuNjtcclxuXHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMC41NSkge1xyXG4gICAgICAgICAgICAvLyBJcCA2IC8gNlBsdXMgLyA3IC8gNyBQbHVzXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQkcuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXBYXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQkcuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JUYWJsZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5tYWluLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLm1haW4uc2V0UG9zaXRpb24oMCwgLTUwKTtcclxuXHJcbiAgICAgICAgbGV0IGxvZ29XaWRnZXQgPSB0aGlzLk5vZGVzQ29udGFpbmVyLmJ0bl9QbGF5LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICBsb2dvV2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICBsb2dvV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uc2NhbGUgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIudGV4dC5zY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2V0UG9zaXRpb24oMCwgLTE3NSk7XHJcblxyXG4gICAgICAgIGxldCBidG5QbGF5V2lkZ2V0ID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5yaWdodCA9IDEwO1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuYm90dG9tID0gMTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5zY2FsZSA9IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuMjc7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIubWFpbi5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLm1haW4uc2V0UG9zaXRpb24oMCwgLTUwKTtcclxuXHJcbiAgICAgICAgbGV0IGxvZ29XaWRnZXQgPSB0aGlzLk5vZGVzQ29udGFpbmVyLmJ0bl9QbGF5LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICBsb2dvV2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICBsb2dvV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uc2NhbGUgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIudGV4dC5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2V0UG9zaXRpb24oMCwgLTE3NSk7XHJcblxyXG4gICAgICAgIGxldCBidG5QbGF5V2lkZ2V0ID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgYnRuUGxheVdpZGdldC5yaWdodCA9IDEwO1xyXG4gICAgICAgIGJ0blBsYXlXaWRnZXQuYm90dG9tID0gMTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5zY2FsZSA9IDAuNDtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ID49IDAuNiAmJiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgUGx1cyAvIDcgLyA3IFBsdXMgICBcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIubWFpbi5zY2FsZSA9IDAuNDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5tYWluLnNldFBvc2l0aW9uKDAsIC01MCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbG9nb1dpZGdldCA9IHRoaXMuTm9kZXNDb250YWluZXIuYnRuX1BsYXkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbG9nb1dpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uc2NhbGUgPSAwLjU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIudGV4dC5zZXRQb3NpdGlvbigwLCAtMTc1KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBidG5QbGF5V2lkZ2V0ID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0blBsYXlXaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICBidG5QbGF5V2lkZ2V0LnJpZ2h0ID0gMTA7XHJcbiAgICAgICAgICAgIGJ0blBsYXlXaWRnZXQuYm90dG9tID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnRuX1BsYXkuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIubWFpbi5zY2FsZSA9IDAuNDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5tYWluLnNldFBvc2l0aW9uKDAsIC02MCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbG9nb1dpZGdldCA9IHRoaXMuTm9kZXNDb250YWluZXIuYnRuX1BsYXkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbG9nb1dpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvZ29XaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmxvZ28uc2NhbGUgPSAwLjU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLnRleHQuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIudGV4dC5zZXRQb3NpdGlvbigwLCAtMTc1KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBidG5QbGF5V2lkZ2V0ID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5idG5fUGxheS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0blBsYXlXaWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuUGxheVdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG5QbGF5V2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICBidG5QbGF5V2lkZ2V0LnJpZ2h0ID0gMTA7XHJcbiAgICAgICAgICAgIGJ0blBsYXlXaWRnZXQuYm90dG9tID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnRuX1BsYXkuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==