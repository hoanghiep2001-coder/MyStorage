
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/EggController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7838NrFfZMWpWVpJlrJ5k0', 'EggController');
// Script/Controller/EggController.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.effectDies = [];
        _this.rigidbody = null;
        _this.collide = null;
        _this.isChangeEggRigidbodyType = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 8) {
                constants_1.Constants.isLoseLv2 = true;
                _this.rigidbody.destroy();
                _this.getComponent(cc.Collider).destroy();
                _this.node.getChildByName("Spine_Character").active = false;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.explosionSound);
                _this.effectDies.forEach(function (fx) { return fx.resetSystem(); });
                _this.scheduleOnce(function () { _this.GamePlay.loseLv2(); }, 2.5);
            }
        };
    };
    NewClass.prototype.changeRigidbodyType = function () {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    };
    NewClass.prototype.update = function (dt) {
        if (window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }
    };
    __decorate([
        property(GamePlay_1.default)
    ], NewClass.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], NewClass.prototype, "effectDies", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxFZ2dDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1Qiw4QkFBd0IsR0FBWSxLQUFLLENBQUM7O0lBK0I5QyxDQUFDO0lBNUJhLHdCQUFLLEdBQWY7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFtQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7WUFDOUYsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDWixxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUMxRDtRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHTSxzQ0FBbUIsR0FBMUI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFHLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNoRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7Z0RBQ087SUFQcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBDNUI7SUFBRCxlQUFDO0NBMUNELEFBMENDLENBMUNxQyxFQUFFLENBQUMsU0FBUyxHQTBDakQ7a0JBMUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gICAgZWZmZWN0RGllczogY2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGU6IGNjLkNvbGxpZGVyID0gbnVsbDtcclxuICAgIGlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS5vbkJlZ2luQ29udGFjdCA9IChjOmNjLlBoeXNpY3NDb250YWN0LCBzOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG86IGNjLlBoeXNpY3NDb2xsaWRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZihvLnRhZyA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzTG9zZUx2MiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3BpbmVfQ2hhcmFjdGVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmV4cGxvc2lvblNvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGllcy5mb3JFYWNoKGZ4ID0+IGZ4LnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuR2FtZVBsYXkubG9zZUx2MigpfSwgMi41KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlUmlnaWRib2R5VHlwZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih3aW5kb3cuY2hhbmdlRWdnUmlnaWRib2R5VHlwZSAmJiAhdGhpcy5pc0NoYW5nZUVnZ1JpZ2lkYm9keVR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYW5nZUVnZ1JpZ2lkYm9keVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVJpZ2lkYm9keVR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19