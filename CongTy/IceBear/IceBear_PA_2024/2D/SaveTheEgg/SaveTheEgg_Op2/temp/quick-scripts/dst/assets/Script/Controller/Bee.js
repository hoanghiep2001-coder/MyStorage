
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Bee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

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
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        return _this;
    }
    Bee.prototype.start = function () {
        this.beginContact();
        this.initPos = this.node.getPosition();
        // let grid = new PF.Grid(100, 100);
        // console.log(grid);
    };
    Bee.prototype.createPathFinding = function () {
        // let grid = new PF.Grid(10, 10);
        // console.log(PF.Grid(100, 100));
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4) {
                console.log("collide");
                // this.isCollide = true;
                // this.jumpBack();
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                constants_1.Constants.isHit = true;
                // let random = Math.floor(Math.random() * 3) + 1;
                // console.log(random);
                // if(random === 1) {
                //     targetPosition = Constants.Char_Point1;
                // } else if (random === 2) {
                //     targetPosition = Constants.Char_Point2;
                // } else {
                //     targetPosition = Constants.Char_Point3;
                // }
                // switch (random) {
                //     case 1:
                //         targetPosition = Constants.Char_Point1;
                //         break;
                //     case 2:
                //         targetPosition = Constants.Char_Point2;
                //         break;
                //     case 3:
                //         targetPosition = Constants.Char_Point3;
                //         break;
                //     default:
                //         break;
                // }
                // let currentPosition = this.node.getPosition();
                // currentPosition.lerp(targetPosition, 0.5, currentPosition);
                // this.node.setPosition(currentPosition);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var targetPosition = new cc.Vec2(this.initPos.x, this.initPos.y);
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.attack = function () {
        var targetPosition = constants_1.Constants.CharacterPos;
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.015, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFpR0M7UUE5Rkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUF3RjVCLENBQUM7SUF0RmEsbUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsb0NBQW9DO1FBQ3BDLHFCQUFxQjtJQUN6QixDQUFDO0lBR08sK0JBQWlCLEdBQXpCO1FBQ0ksa0NBQWtDO1FBQ2xDLGtDQUFrQztJQUV0QyxDQUFDO0lBR08sMEJBQVksR0FBcEI7UUFBQSxpQkE4Q0M7UUE3Q0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLG1CQUFtQjthQUN0QjtZQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsSUFBRyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNmLE9BQU87aUJBQ1Y7Z0JBRUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixxQkFBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLGtEQUFrRDtnQkFDbEQsdUJBQXVCO2dCQUV2QixxQkFBcUI7Z0JBQ3JCLDhDQUE4QztnQkFDOUMsNkJBQTZCO2dCQUM3Qiw4Q0FBOEM7Z0JBQzlDLFdBQVc7Z0JBQ1gsOENBQThDO2dCQUM5QyxJQUFJO2dCQUNKLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLElBQUk7Z0JBRUosaURBQWlEO2dCQUNqRCw4REFBOEQ7Z0JBQzlELDBDQUEwQzthQUM3QztRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHTyxzQkFBUSxHQUFoQjtRQUNJLElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHTyxvQkFBTSxHQUFkO1FBQ0ksSUFBSSxjQUFjLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUM7UUFDNUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdTLG9CQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBNUZEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkNBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQU5kLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FpR3ZCO0lBQUQsVUFBQztDQWpHRCxBQWlHQyxDQWpHZ0MsRUFBRSxDQUFDLFNBQVMsR0FpRzVDO2tCQWpHb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgaXNDb2xsaWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpbml0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKDEwMCwgMTAwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQYXRoRmluZGluZygpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKDEwLCAxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coUEYuR3JpZCgxMDAsIDEwMCkpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkub25CZWdpbkNvbnRhY3QgPSAoYywgcywgbykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZVwiKTsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc0NvbGxpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5qdW1wQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNDb2xsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdGluZ1NvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb20pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmKHJhbmRvbSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldFBvc2l0aW9uID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyYW5kb20gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0YXJnZXRQb3NpdGlvbiA9IENvbnN0YW50cy5DaGFyX1BvaW50MjtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjUsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wQmFjaygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBuZXcgY2MuVmVjMih0aGlzLmluaXRQb3MueCwgdGhpcy5pbml0UG9zLnkpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcmFjdGVyUG9zO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycCh0YXJnZXRQb3NpdGlvbiwgMC4wMTUsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaXNEcmF3ICYmICF0aGlzLmlzQ29sbGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19