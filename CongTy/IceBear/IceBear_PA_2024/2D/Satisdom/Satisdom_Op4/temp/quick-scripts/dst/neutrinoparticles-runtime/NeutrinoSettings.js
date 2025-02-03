
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoSettings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9TZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7Ozs7OztHQU9HO0FBR0g7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF3QkM7UUF0Qkcsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLCtCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUcvQix3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBZ0I5QixDQUFDO3lCQXhCb0IsZ0JBQWdCO0lBVTFCLHlCQUFRLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pELFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7U0FDeEM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dFQUNRO0lBRzFCO1FBREMsUUFBUTt1RUFDc0I7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnRUFDQztJQVJULGdCQUFnQjtRQURuQyxPQUFPO09BQ1ksZ0JBQWdCLENBd0JwQztJQUFELHVCQUFDO0NBeEJELEFBd0JDLENBeEI2QyxFQUFFLENBQUMsU0FBUyxHQXdCekQ7a0JBeEJvQixnQkFBZ0I7QUEwQnJDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIE5ldXRyaW5vU2V0dGluZ3MgY29tcG9uZW50IGlzIGEgY29udGFpbmVyIGZvciBkZWZhdWx0IHZhbHVlcyBvZiBOZXV0cmlub0NvbXBvbmVudFxyXG4gKiBwcm9wZXJ0aWVzLiBJbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHNob3VsZCBiZSBhIHNpbmdsZXRvbiBpbiB0aGUgc2NvcGUgb2YgYSBzY2VuZVxyXG4gKiBhbmQgaGFzIHRvIGJlIGFjY2Vzc2VkIG9ubHkgdmlhIGNjLk5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKSBzdGF0aWMgbWV0aG9kLiBUaGlzXHJcbiAqIG1ldGhvZCBjcmVhdGVzIGEgbm9kZSB3aXRoIG5hbWUgJ19fTmV1dHJpbm9QYXJ0aWNsZXNfXycgaW4gdGhlIHJvb3Qgb2YgdGhlIHNjZW5lXHJcbiAqIGFuZCBhdHRhY2hlcyBOZXV0cmlub1NldHRpbmdzIGNvbXBvbmVudCB0byBpdC4gRnVydGhlciBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnRcclxuICogY2FuIGJlIGNoYW5nZWQgaW4gdGhlIGVkaXRvciBvciBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gKi9cclxuXHJcbiBAY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXV0cmlub1NldHRpbmdzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVmYXVsdFdvcmxkUGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRUZXh0dXJlc1ByZWZpeFBhdGggPSAnJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXHJcbiAgICBkZWZhdWx0U3ByaXRlQXRsYXMgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIDogTmV1dHJpbm9TZXR0aW5ncyB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBjYW52YXMuZ2V0Q29tcG9uZW50KE5ldXRyaW5vU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBjYW52YXMuYWRkQ29tcG9uZW50KE5ldXRyaW5vU2V0dGluZ3MpO1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0V29ybGRQYXJlbnQgPSBjYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNjLk5ldXRyaW5vU2V0dGluZ3MgPSBOZXV0cmlub1NldHRpbmdzOyJdfQ==