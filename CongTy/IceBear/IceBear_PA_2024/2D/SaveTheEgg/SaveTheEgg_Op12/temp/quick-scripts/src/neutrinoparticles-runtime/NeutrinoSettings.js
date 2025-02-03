"use strict";
cc._RF.push(module, 'fbcd0MmKjROJoyVC6K9nt1e', 'NeutrinoSettings');
// NeutrinoSettings.ts

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
/**
 * NeutrinoSettings component is a container for default values of NeutrinoComponent
 * properties. Instance of this class should be a singleton in the scope of a scene
 * and has to be accessed only via cc.NeutrinoSettings.instance() static method. This
 * method creates a node with name '__NeutrinoParticles__' in the root of the scene
 * and attaches NeutrinoSettings component to it. Further properties of the component
 * can be changed in the editor or programmatically.
 */
var NeutrinoSettings = /** @class */ (function (_super) {
    __extends(NeutrinoSettings, _super);
    function NeutrinoSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultWorldParent = null;
        _this.defaultTexturesPrefixPath = '';
        _this.defaultSpriteAtlas = null;
        return _this;
    }
    NeutrinoSettings_1 = NeutrinoSettings;
    NeutrinoSettings.instance = function () {
        var canvas = cc.find('Canvas');
        if (!canvas) {
            return null;
        }
        var settings = canvas.getComponent(NeutrinoSettings_1);
        if (!settings) {
            settings = canvas.addComponent(NeutrinoSettings_1);
            settings.defaultWorldParent = canvas;
        }
        return settings;
    };
    var NeutrinoSettings_1;
    __decorate([
        property(cc.Node)
    ], NeutrinoSettings.prototype, "defaultWorldParent", void 0);
    __decorate([
        property
    ], NeutrinoSettings.prototype, "defaultTexturesPrefixPath", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoSettings.prototype, "defaultSpriteAtlas", void 0);
    NeutrinoSettings = NeutrinoSettings_1 = __decorate([
        ccclass
    ], NeutrinoSettings);
    return NeutrinoSettings;
}(cc.Component));
exports.default = NeutrinoSettings;
cc.NeutrinoSettings = NeutrinoSettings;

cc._RF.pop();