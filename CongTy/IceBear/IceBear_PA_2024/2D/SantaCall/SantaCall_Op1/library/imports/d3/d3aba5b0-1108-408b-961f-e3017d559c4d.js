"use strict";
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