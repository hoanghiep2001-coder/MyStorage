
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ultils/BottleItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '739edhvLuxKk7ufJqFAN/rI', 'BottleItem');
// Script/Ultils/BottleItem.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var WaterManager_1 = require("./WaterManager");
var BottleItem = /** @class */ (function (_super) {
    __extends(BottleItem, _super);
    function BottleItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteColors = [];
        _this.AudioManager = null;
        _this.waterColors = [];
        _this.waterHeights = [];
        _this.tubeSide = "";
        _this.newState = null;
        _this.height1 = 210;
        _this.height2 = 200;
        _this.height3 = 250;
        _this.height4 = 350;
        _this.GamePlay = null;
        _this.isIncreasing = false;
        _this.initPos = null;
        _this.PS_Star = null;
        return _this;
    }
    BottleItem.prototype.start = function () {
        this.applyWaterColor();
        this.initTubeSide();
        var GamePlayNode = this.node.parent.parent.parent.parent;
        this.GamePlay = GamePlayNode.getComponent("GamePlay");
        this.initPos = this.node.getPosition();
    };
    BottleItem.prototype.initTubeSide = function () {
        switch (this.node.name) {
            case "Bottle_1":
                this.tubeSide = "left";
                break;
            case "Bottle_2":
                this.tubeSide = "right";
                break;
            case "Bottle_3":
                this.tubeSide = "left";
                break;
            case "Bottle_4":
                this.tubeSide = "right";
                break;
            default:
                break;
        }
    };
    BottleItem.prototype.applyWaterColor = function () {
        for (var index = 0; index < this.spriteColors.length; index++) {
            var sprite = this.spriteColors[index];
            sprite.node.color = this.waterColors[index];
            this.isTransparentColor(sprite.node.color) && this.setTransparentColor(sprite.node);
        }
        ;
    };
    BottleItem.prototype.MoveToAnotherTube = function (newState) {
        var _this = this;
        cc.log("Di chuyển");
        constants_1.Constants.isCanTouch = false;
        this.newState = newState;
        cc.tween(this.node)
            .to(0.3, { position: newState.position })
            .call(function () { return _this.rotateTube(newState); })
            .start();
    };
    ;
    BottleItem.prototype.rotateTube = function (tubeState) {
        var _this = this;
        cc.log("angling");
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.WaterDropSound);
        this.scheduleOnce(function () {
            _this.decreaseHeightOfWater(tubeState);
            tubeState.otherTube.increseHeightOfWater();
        }, 0.5);
        cc.tween(this.node)
            .to(0.5, { angle: tubeState.angle })
            .start();
    };
    BottleItem.prototype.getColorStatus = function () {
        var GamePlayNode = this.node.parent.parent.parent.parent;
        var GamePlayComp = GamePlayNode.getComponent("GamePlay");
        var colorStatus = GamePlayComp.getColorStatus(this.waterColors);
        return colorStatus;
    };
    BottleItem.prototype.changeColorWater = function (colorRgba) {
        // tách chuỗi string rgba thành từng phần
        var values = colorRgba.match(/\d+(\.\d+)?/g).map(Number);
        var color = new cc.Color(values[0], values[1], values[2], values[3] * 255);
        cc.log("Màu đc chuyển đổi: " + color);
        return color;
    };
    BottleItem.prototype.increseHeightOfWater = function () {
        cc.log("Tăng mực nước");
        this.drawLineRender();
        // this.scheduleOnce(() => {
        // }, 0.2);
        var colorStatus = this.getColorStatus();
        WaterManager_1.WaterManager.increaseWater(constants_1.Constants.numberOfIncreaseFloor, this.changeColorWater(constants_1.Constants.colorToIncrease), colorStatus.indexOfFirstColor, this);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.BoilSound);
    };
    BottleItem.prototype.activeDoneStepSound = function () {
        this.node.getChildByName("PSBase").children[0].getComponent(cc.ParticleSystem).resetSystem();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
    };
    BottleItem.prototype.decreaseHeightOfWater = function (tubeState) {
        cc.log("giảm mực nước");
        var colorStatus = this.getColorStatus();
        constants_1.Constants.numberOfIncreaseFloor = colorStatus.numberOfDecreaseFloor;
        constants_1.Constants.colorToIncrease = colorStatus.firstColorOfTube;
        cc.log(colorStatus.isHasThreeSameOneDiffColor);
        WaterManager_1.WaterManager.decreaseWater(colorStatus.numberOfDecreaseFloor, colorStatus.indexOfFirstColor, this);
    };
    BottleItem.prototype.drawLineRender = function () {
        var lineRender = this.node.getChildByName("LineRender");
        lineRender.color = this.changeColorWater(this.getColorStatus().firstColorOfTube);
        cc.tween(lineRender)
            .to(0.35, { height: 1100 })
            .call(function () {
            cc.tween(lineRender)
                .to(0.15, { height: 0 })
                .start();
        })
            .start();
    };
    BottleItem.prototype.isTransparentColor = function (color) {
        if (color.a === 0)
            return true;
        return false;
    };
    BottleItem.prototype.setTransparentColor = function (node) {
        node.opacity = 0;
    };
    BottleItem.prototype.update = function (dt) {
        this.angleColorWithBottle();
    };
    BottleItem.prototype.angleColorWithBottle = function () {
        for (var index = 0; index < this.spriteColors.length; index++) {
            var sprite = this.spriteColors[index];
            sprite.node.angle = -this.node.angle / 1.5;
        }
    };
    __decorate([
        property([cc.Sprite])
    ], BottleItem.prototype, "spriteColors", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], BottleItem.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], BottleItem.prototype, "PS_Star", void 0);
    BottleItem = __decorate([
        ccclass
    ], BottleItem);
    return BottleItem;
}(cc.Component));
exports.default = BottleItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVbHRpbHNcXEJvdHRsZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsK0NBQThDO0FBTTlDLHVEQUFrRDtBQUNsRCwrQ0FBOEM7QUFHOUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErTUM7UUE1TUcsa0JBQVksR0FBZ0IsRUFBRSxDQUFDO1FBRy9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUU3QixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUVuQyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGNBQVEsR0FBeUIsSUFBSSxDQUFDO1FBRXRDLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFFdEIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUV0QixhQUFPLEdBQVcsR0FBRyxDQUFDO1FBRXRCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFFdEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBc0IsSUFBSSxDQUFDOztJQWdMdEMsQ0FBQztJQTlLYSwwQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFNLFlBQVksR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVwRSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFhLENBQUM7UUFFbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJ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akIsQ0FBQztJQUdPLHVDQUFrQixHQUExQixVQUEyQixLQUFlO1FBQ3RDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdPLHdDQUFtQixHQUEzQixVQUE0QixJQUFhO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFHUywyQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHTyx5Q0FBb0IsR0FBNUI7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUM5QztJQUNMLENBQUM7SUExTUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0RBQ1M7SUFHL0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztvREFDVztJQXlCbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzsrQ0FDTTtJQS9CakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStNOUI7SUFBRCxpQkFBQztDQS9NRCxBQStNQyxDQS9NdUMsRUFBRSxDQUFDLFNBQVMsR0ErTW5EO2tCQS9Nb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9EYXRhL2NvbnN0YW50cyc7XHJcblxyXG50eXBlIEdhbWVQbGF5ID0gaW1wb3J0KFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiKS5kZWZhdWx0O1xyXG5cclxuaW1wb3J0ICogYXMgSW50ZXJmYWNlcyBmcm9tICcuLi9EYXRhL2ludGVyZmFjZXMnO1xyXG5cclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyJztcclxuaW1wb3J0IHsgV2F0ZXJNYW5hZ2VyIH0gZnJvbSAnLi9XYXRlck1hbmFnZXInO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dGxlSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxyXG4gICAgc3ByaXRlQ29sb3JzOiBjYy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHdhdGVyQ29sb3JzOiBjYy5Db2xvcltdID0gW107XHJcblxyXG4gICAgcHVibGljIHdhdGVySGVpZ2h0czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICB0dWJlU2lkZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBuZXdTdGF0ZTogSW50ZXJmYWNlcy50dWJlU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIGhlaWdodDE6IG51bWJlciA9IDIxMDtcclxuXHJcbiAgICBoZWlnaHQyOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgaGVpZ2h0MzogbnVtYmVyID0gMjUwO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ0OiBudW1iZXIgPSAzNTA7XHJcblxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBpc0luY3JlYXNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbml0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19TdGFyOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwbHlXYXRlckNvbG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFR1YmVTaWRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEdhbWVQbGF5Tm9kZTogY2MuTm9kZSA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkgPSBHYW1lUGxheU5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZVBsYXlcIikgYXMgR2FtZVBsYXk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXRUdWJlU2lkZSgpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0bGVfMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50dWJlU2lkZSA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0bGVfMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50dWJlU2lkZSA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dGxlXzNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudHViZVNpZGUgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dGxlXzRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudHViZVNpZGUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFwcGx5V2F0ZXJDb2xvcigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zcHJpdGVDb2xvcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlQ29sb3JzW2luZGV4XTtcclxuICAgICAgICAgICAgc3ByaXRlLm5vZGUuY29sb3IgPSB0aGlzLndhdGVyQ29sb3JzW2luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pc1RyYW5zcGFyZW50Q29sb3Ioc3ByaXRlLm5vZGUuY29sb3IpICYmIHRoaXMuc2V0VHJhbnNwYXJlbnRDb2xvcihzcHJpdGUubm9kZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIE1vdmVUb0Fub3RoZXJUdWJlKG5ld1N0YXRlOiBJbnRlcmZhY2VzLnR1YmVTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGNjLmxvZyhcIkRpIGNodXnhu4NuXCIpO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5ld1N0YXRlID0gbmV3U3RhdGU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMywgeyBwb3NpdGlvbjogbmV3U3RhdGUucG9zaXRpb24gfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5yb3RhdGVUdWJlKG5ld1N0YXRlKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlVHViZSh0dWJlU3RhdGU6IEludGVyZmFjZXMudHViZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgY2MubG9nKFwiYW5nbGluZ1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLldhdGVyRHJvcFNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlSGVpZ2h0T2ZXYXRlcih0dWJlU3RhdGUpO1xyXG4gICAgICAgICAgICB0dWJlU3RhdGUub3RoZXJUdWJlLmluY3Jlc2VIZWlnaHRPZldhdGVyKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IGFuZ2xlOiB0dWJlU3RhdGUuYW5nbGUgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29sb3JTdGF0dXMoKTogSW50ZXJmYWNlcy5jb2xvclN0YXR1cyB7XHJcbiAgICAgICAgY29uc3QgR2FtZVBsYXlOb2RlOiBjYy5Ob2RlID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudDtcclxuICAgICAgICBjb25zdCBHYW1lUGxheUNvbXA6IEdhbWVQbGF5ID0gR2FtZVBsYXlOb2RlLmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpIGFzIEdhbWVQbGF5O1xyXG4gICAgICAgIGNvbnN0IGNvbG9yU3RhdHVzID0gR2FtZVBsYXlDb21wLmdldENvbG9yU3RhdHVzKHRoaXMud2F0ZXJDb2xvcnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29sb3JTdGF0dXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQ29sb3JXYXRlcihjb2xvclJnYmE6IHN0cmluZyk6IGNjLkNvbG9yIHtcclxuICAgICAgICAvLyB0w6FjaCBjaHXhu5dpIHN0cmluZyByZ2JhIHRow6BuaCB04burbmcgcGjhuqduXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IGNvbG9yUmdiYS5tYXRjaCgvXFxkKyhcXC5cXGQrKT8vZykubWFwKE51bWJlcik7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gbmV3IGNjLkNvbG9yKHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0sIHZhbHVlc1szXSAqIDI1NSk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIk3DoHUgxJFjIGNodXnhu4NuIMSR4buVaTogXCIgKyBjb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbmNyZXNlSGVpZ2h0T2ZXYXRlcigpOiB2b2lkIHtcclxuICAgICAgICBjYy5sb2coXCJUxINuZyBt4buxYyBuxrDhu5tjXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdMaW5lUmVuZGVyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vIH0sIDAuMik7XHJcblxyXG4gICAgICAgIGxldCBjb2xvclN0YXR1cyA9IHRoaXMuZ2V0Q29sb3JTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgV2F0ZXJNYW5hZ2VyLmluY3JlYXNlV2F0ZXIoXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5udW1iZXJPZkluY3JlYXNlRmxvb3IsXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3JXYXRlcihDb25zdGFudHMuY29sb3JUb0luY3JlYXNlKSwgXHJcbiAgICAgICAgICAgIGNvbG9yU3RhdHVzLmluZGV4T2ZGaXJzdENvbG9yLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkJvaWxTb3VuZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlRG9uZVN0ZXBTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQU0Jhc2VcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53aW5Tb3VuZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkZWNyZWFzZUhlaWdodE9mV2F0ZXIodHViZVN0YXRlOiBJbnRlcmZhY2VzLnR1YmVTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGNjLmxvZyhcImdp4bqjbSBt4buxYyBuxrDhu5tjXCIpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3JTdGF0dXMgPSB0aGlzLmdldENvbG9yU3RhdHVzKCk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5udW1iZXJPZkluY3JlYXNlRmxvb3IgPSBjb2xvclN0YXR1cy5udW1iZXJPZkRlY3JlYXNlRmxvb3I7XHJcbiAgICAgICAgQ29uc3RhbnRzLmNvbG9yVG9JbmNyZWFzZSA9IGNvbG9yU3RhdHVzLmZpcnN0Q29sb3JPZlR1YmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MubG9nKGNvbG9yU3RhdHVzLmlzSGFzVGhyZWVTYW1lT25lRGlmZkNvbG9yKVxyXG5cclxuICAgICAgICBXYXRlck1hbmFnZXIuZGVjcmVhc2VXYXRlcihcclxuICAgICAgICAgICAgY29sb3JTdGF0dXMubnVtYmVyT2ZEZWNyZWFzZUZsb29yLCBcclxuICAgICAgICAgICAgY29sb3JTdGF0dXMuaW5kZXhPZkZpcnN0Q29sb3IsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGRyYXdMaW5lUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsaW5lUmVuZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTGluZVJlbmRlclwiKTtcclxuICAgICAgICBsaW5lUmVuZGVyLmNvbG9yID0gdGhpcy5jaGFuZ2VDb2xvcldhdGVyKHRoaXMuZ2V0Q29sb3JTdGF0dXMoKS5maXJzdENvbG9yT2ZUdWJlKVxyXG5cclxuICAgICAgICBjYy50d2VlbihsaW5lUmVuZGVyKVxyXG4gICAgICAgICAgICAudG8oMC4zNSwgeyBoZWlnaHQ6IDExMDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obGluZVJlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xNSwgeyBoZWlnaHQ6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNUcmFuc3BhcmVudENvbG9yKGNvbG9yOiBjYy5Db2xvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChjb2xvci5hID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VHJhbnNwYXJlbnRDb2xvcihub2RlOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmdsZUNvbG9yV2l0aEJvdHRsZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlQ29sb3JXaXRoQm90dGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNwcml0ZUNvbG9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5zcHJpdGVDb2xvcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBzcHJpdGUubm9kZS5hbmdsZSA9IC10aGlzLm5vZGUuYW5nbGUgLyAxLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=