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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
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
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        this.NodeContainer.Bg.scale = 1.1;
        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;
        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);
        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.Bg.scale = 1;
        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;
        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);
        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        this.NodeContainer.Bg.scale = 0.8;
        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;
        this.NodeContainer.Step2_Frames[0].setPosition(-100, -280);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -280);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -280);
        this.NodeContainer.Step2_Gun1.setPosition(-100, -280);
        this.NodeContainer.Step2_Gun2.setPosition(100, -280);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -280);
        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        this.NodeContainer.Bg.scale = 0.8;
        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;
        this.NodeContainer.Step2_Frames[0].setPosition(-100, -250);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -250);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -250);
        this.NodeContainer.Step2_Gun1.setPosition(-100, -250);
        this.NodeContainer.Step2_Gun2.setPosition(100, -250);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -250);
        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
        }
        else {
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

cc._RF.pop();