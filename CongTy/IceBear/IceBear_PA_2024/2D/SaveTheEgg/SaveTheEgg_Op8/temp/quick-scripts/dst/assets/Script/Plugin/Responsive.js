
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
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
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
var NodesController_1 = require("../Controller/NodesController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesController = null;
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
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
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
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
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
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        // } else {    
        //     // Ipad
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesController_1.default)
    ], Responsive.prototype, "NodesController", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTREO0FBQzVELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZHQztRQTNHRyxZQUFZO1FBRVoscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBS3hDLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQTZGaEQsQ0FBQztJQTNGYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUVJLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO1lBQ3BFLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sd0NBQW1CLEdBQTNCO1FBQ0ksSUFBRyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxRCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCO1FBQ0ksSUFBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUQsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBRUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0lBRzNELENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFHdkQsMkVBQTJFO1FBQzNFLHdDQUF3QztRQUV4QyxlQUFlO1FBQ2YsY0FBYztRQUVkLElBQUk7SUFFUixDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBSnZCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RzlCO0lBQUQsaUJBQUM7Q0E3R0QsQUE2R0MsQ0E3R3VDLEVBQUUsQ0FBQyxTQUFTLEdBNkduRDtrQkE3R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuICAgICAgXHJcblxyXG4gICAgICAgIC8vIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNykge1xyXG4gICAgICAgIC8vICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXNcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9IGVsc2UgeyAgICBcclxuICAgICAgICAvLyAgICAgLy8gSXBhZFxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==