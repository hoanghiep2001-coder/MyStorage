
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/GraphicsController');
require('./assets/Script/Controller/HandController');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/HandController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '730b3Z1IwJDqI1WXeAS4N6z', 'HandController');
// Script/Controller/HandController.ts

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
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HandController = /** @class */ (function (_super) {
    __extends(HandController, _super);
    function HandController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.GraphicsController = null;
        _this.GamePlay = null;
        _this.fakeHand = null;
        _this.Line = null;
        _this.obstaclePoints = [];
        _this.rigidBody = null;
        _this.collide = null;
        _this.targetPosition = null;
        _this.speed = 150;
        _this.currentPosition = null;
        return _this;
    }
    HandController.prototype.onLoad = function () {
    };
    HandController.prototype.start = function () {
        this.handleContact();
    };
    HandController.prototype.handleContact = function () {
        this.currentPosition = this.node.getPosition();
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 2) {
                // !Constants.isLoseGame && this.GamePlay.getComponent(GamePlay).loseGame();
            }
        };
    };
    HandController.prototype.handleCheckIntersects = function () {
        var handBdx = this.fakeHand.getBoundingBox();
        for (var i = 0; i < this.obstaclePoints.length; i++) {
            var point = this.obstaclePoints[i];
            var iBdx = point.getBoundingBox();
            if (handBdx.intersects(iBdx)) {
                var pointPos = point.getPosition();
                if (constants_1.Constants.startPos.x === pointPos.x)
                    return;
                this.GraphicsController.createGraphics();
                constants_1.Constants.startPos = pointPos;
                constants_1.Constants.touchPointsPos.push(pointPos);
                console.log(this.GraphicsController.graphicsArr);
            }
        }
    };
    HandController.prototype.handleRotateHand = function (startPos) {
        var thisPos = new cc.Vec2(startPos.x, startPos.y);
        var directionVector = thisPos.sub(this.node.getPosition());
        var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
        var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
        this.node.angle = rotationDegrees - 20;
    };
    HandController.prototype.move = function () {
        if (!constants_1.Constants.isCanMove) {
            this.stop();
            return;
        }
        if (!constants_1.Constants.ironSource.isEndGame) {
            this.node.setPosition(constants_1.Constants.currentLocalPosition);
            this.fakeHand.setPosition(constants_1.Constants.currentLocalPosition);
            this.currentPosition = this.node.getPosition();
        }
    };
    HandController.prototype.stop = function () {
        this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
        this.node.setPosition(this.currentPosition);
    };
    HandController.prototype.update = function (dt) {
        (!constants_1.Constants.isTouch || constants_1.Constants.isLoseGame) && this.stop();
        constants_1.Constants.isTouch && this.handleRotateHand(constants_1.Constants.startPos);
        constants_1.Constants.isTouch && this.handleCheckIntersects();
    };
    __decorate([
        property(GraphicsController_1.default)
    ], HandController.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "fakeHand", void 0);
    __decorate([
        property(cc.Node)
    ], HandController.prototype, "Line", void 0);
    __decorate([
        property([cc.Node])
    ], HandController.prototype, "obstaclePoints", void 0);
    HandController = __decorate([
        ccclass
    ], HandController);
    return HandController;
}(cc.Component));
exports.default = HandController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxIYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsMkRBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBaUdDO1FBL0ZDLFlBQVk7UUFFWix3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRTlDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIscUJBQWUsR0FBWSxJQUFJLENBQUM7O0lBOEVsQyxDQUFDO0lBM0VXLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDhCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLHNDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFvQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7WUFDakcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFD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QUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QscUJBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzs4REFDaUI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MERBQ1c7SUFiWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBaUdsQztJQUFELHFCQUFDO0NBakdELEFBaUdDLENBakcyQyxFQUFFLENBQUMsU0FBUyxHQWlHdkQ7a0JBakdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgR3JhcGhpY3NDb250cm9sbGVyIGZyb20gXCIuL0dyYXBoaWNzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmYWtlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBvYnN0YWNsZVBvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICBjb2xsaWRlOiBjYy5Db2xsaWRlciA9IG51bGw7XHJcbiAgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gIHNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlQ29udGFjdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ29udGFjdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5vbkJlZ2luQ29udGFjdCA9IChjOiBjYy5QaHlzaWNzQ29udGFjdCwgczogY2MuUGh5c2ljc0NvbGxpZGVyLCBvOiBjYy5QaHlzaWNzQ29sbGlkZXIpID0+IHtcclxuICAgICAgaWYgKG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgLy8gIUNvbnN0YW50cy5pc0xvc2VHYW1lICYmIHRoaXMuR2FtZVBsYXkuZ2V0Q29tcG9uZW50KEdhbWVQbGF5KS5sb3NlR2FtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDaGVja0ludGVyc2VjdHMoKTogdm9pZCB7XHJcbiAgICBsZXQgaGFuZEJkeCA9IHRoaXMuZmFrZUhhbmQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm9ic3RhY2xlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBwb2ludCA9IHRoaXMub2JzdGFjbGVQb2ludHNbaV07XHJcbiAgICAgIGxldCBpQmR4ID0gcG9pbnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGhhbmRCZHguaW50ZXJzZWN0cyhpQmR4KSApIHtcclxuICAgICAgICBsZXQgcG9pbnRQb3MgPSBwb2ludC5nZXRQb3NpdGlvbigpOyBcclxuICAgICAgICBpZihDb25zdGFudHMuc3RhcnRQb3MueCA9PT0gcG9pbnRQb3MueCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLnN0YXJ0UG9zID0gcG9pbnRQb3M7XHJcbiAgICAgICAgQ29uc3RhbnRzLnRvdWNoUG9pbnRzUG9zLnB1c2gocG9pbnRQb3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzQXJyKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUm90YXRlSGFuZChzdGFydFBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgbGV0IHRoaXNQb3MgPSBuZXcgY2MuVmVjMihzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSB0aGlzUG9zLnN1Yih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHRoaXMubm9kZS5hbmdsZSA9IHJvdGF0aW9uRGVncmVlcyAtIDIwO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xyXG4gICAgaWYoIUNvbnN0YW50cy5pc0Nhbk1vdmUpIHtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbilcclxuICAgICAgdGhpcy5mYWtlSGFuZC5zZXRQb3NpdGlvbihDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24pXHJcbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG4gICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuY3VycmVudFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICghQ29uc3RhbnRzLmlzVG91Y2ggfHwgQ29uc3RhbnRzLmlzTG9zZUdhbWUpICYmIHRoaXMuc3RvcCgpO1xyXG4gICAgQ29uc3RhbnRzLmlzVG91Y2ggJiYgdGhpcy5oYW5kbGVSb3RhdGVIYW5kKENvbnN0YW50cy5zdGFydFBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNUb3VjaCAmJiB0aGlzLmhhbmRsZUNoZWNrSW50ZXJzZWN0cygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["stunSound"] = "stunSound";
    SoundTrack["naniSound"] = "naniSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.startPos = new cc.Vec2(0, 0);
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.currentLocalPosition = new cc.Vec2(0, 0);
    Constants.touchPointsPos = [];
    Constants.isCanMove = true;
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanDraw = true;
    Constants.isLoseGame = false;
    Constants.isTouchFence = false;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBQTtJQWdDQSxDQUFDO0lBOUJHLFlBQVk7SUFDTCxrQkFBUSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMseUJBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLDhCQUFvQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsd0JBQWMsR0FBYyxFQUFFLENBQUM7SUFHL0IsbUJBQVMsR0FBWSxJQUFJLENBQUM7SUFDMUIsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsbUJBQVMsR0FBWSxJQUFJLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsc0JBQVksR0FBWSxLQUFLLENBQUM7SUFHckMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBaENELEFBZ0NDLElBQUE7QUFoQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWQ6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIGRyYXdTb3VuZCA9IFwiZHJhd1NvdW5kXCIsXHJcbiAgICBzdHVuU291bmQgPSBcInN0dW5Tb3VuZFwiLFxyXG4gICAgbmFuaVNvdW5kID0gXCJuYW5pU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgc3RhcnRQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLDApO1xyXG4gICAgc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcbiAgICBzdGF0aWMgY3VycmVudExvY2FsUG9zaXRpb246IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLDApO1xyXG4gICAgc3RhdGljIHRvdWNoUG9pbnRzUG9zOiBjYy5WZWMyW10gPSBbXTtcclxuXHJcblxyXG4gICAgc3RhdGljIGlzQ2FuTW92ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5EcmF3OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc0xvc2VHYW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaEZlbmNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var HandController_1 = require("./HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.HandController = null;
        _this.GameController = null;
        // node
        _this.HideMask = null;
        _this.Line = null;
        _this.Tutorial = null;
        _this.fence = null;
        _this.fenceLeft = null;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
    };
    TouchAreaController.prototype.onLoad = function () {
        // Constants.fencePoint = this.fence.getPosition();
        this.HandController.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.HandController.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        // ironsource
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.touchStart = function (event) {
        // if (Constants.ironSource.isEndGame) {
        //   this.GameController.installHandle();
        // }
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = true;
        constants_1.Constants.currentPosition = event.getLocation();
        this.Line.active = false;
        this.Tutorial.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        // this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (event) {
        if (constants_1.Constants.isLoseGame || !constants_1.Constants.isCanMove) {
            return;
        }
        constants_1.Constants.currentPosition = event.getLocation();
        constants_1.Constants.currentLocalPosition = this.node.convertToNodeSpaceAR(event.getLocation());
        this.HandController.move();
    };
    TouchAreaController.prototype.touchEnd = function (event) {
        if (constants_1.Constants.isLoseGame) {
            return;
        }
        constants_1.Constants.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.HandController.stop();
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(HandController_1.default)
    ], TouchAreaController.prototype, "HandController", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Line", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Tutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fence", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "fenceLeft", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUE2R0M7UUEzR0MsWUFBWTtRQUVaLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLE9BQU87UUFFUCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBd0Y1QixDQUFDO0lBdEZXLG1DQUFLLEdBQWY7SUFFQSxDQUFDO0lBR1Msb0NBQU0sR0FBaEI7UUFDRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUks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SUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQztJQXhHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUt0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1E7SUFyQmYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0E2Ry9CO0lBQUQsMEJBQUM7Q0E3R0QsQUE2R0MsQ0E3R3dDLEVBQUUsQ0FBQyxTQUFTLEdBNkdwRDtBQTdHWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBIYW5kQ29udHJvbGxlciBmcm9tIFwiLi9IYW5kQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEhhbmRDb250cm9sbGVyKVxyXG4gIEhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBub2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIExpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFR1dG9yaWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBmZW5jZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZmVuY2VMZWZ0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICBcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgLy8gQ29uc3RhbnRzLmZlbmNlUG9pbnQgPSB0aGlzLmZlbmNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLkhhbmRDb250cm9sbGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICAvLyB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcclxuXHJcbiAgICAvLyBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAvLyAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXNMb3NlR2FtZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICB0aGlzLkxpbmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLlR1dG9yaWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcblxyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZXZlbnQ6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzTG9zZUdhbWUgfHwgIUNvbnN0YW50cy5pc0Nhbk1vdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5tb3ZlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEVuZChldmVudDogY2MuVG91Y2gpIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNMb3NlR2FtZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5kcmF3U291bmQpO1xyXG4gICAgdGhpcy5IYW5kQ29udHJvbGxlci5zdG9wKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1589022394?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkMTU4OTAyMjM5ND9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50dmMudGhpZWZwdXp6bGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

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
var HandController_1 = require("../Controller/HandController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.HandController = null;
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
        // this.GamePlay.cage.x = 150;
        // this.GamePlay.background.scale = 0.55;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        // this.GamePlay.cage.x = 150;
        // this.GamePlay.background.scale = 0.55;
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
        // this.GamePlay.cage.x = 120;
        // this.GamePlay.background.scale = 0.65;
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
            // this.GamePlay.cage.x = 120;
            // this.GamePlay.background.scale = 0.55;
        }
        else {
            // this.GamePlay.cage.x = 120;
            // this.GamePlay.background.scale = 0.55;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(HandController_1.default)
    ], Responsive.prototype, "HandController", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUdwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlIQztRQTlHRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFrR2hELENBQUM7SUFoR2EsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtZQUNyRSxxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVPLHdDQUFtQixHQUEzQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyw4QkFBOEI7UUFDOUIseUNBQXlDO0lBQzdDLENBQUM7SUFFTywyQ0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRXJDLDhCQUE4QjtRQUM5Qix5Q0FBeUM7SUFFN0MsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFaEMsOEJBQThCO1FBQzlCLHlDQUF5QztJQUM3QyxDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFbkMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDcEUsb0pBQW9KO1lBQ3BKLDhCQUE4QjtZQUU5QixjQUFjO1lBQ2QsSUFBSTtZQUVKLG9DQUFvQztZQUNwQyw4QkFBOEI7WUFDOUIseUNBQXlDO1NBQzVDO2FBQU07WUFDSCw4QkFBOEI7WUFDOUIseUNBQXlDO1NBQzVDO0lBQ0wsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE3R0Q7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztnREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBTHJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpSDlCO0lBQUQsaUJBQUM7Q0FqSEQsQUFpSEMsQ0FqSHVDLEVBQUUsQ0FBQyxTQUFTLEdBaUhuRDtrQkFqSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVBsYXlcIjtcclxuaW1wb3J0IEhhbmRDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0hhbmRDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoSGFuZENvbnRyb2xsZXIpXHJcbiAgICBIYW5kQ29udHJvbGxlcjogSGFuZENvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTUwO1xyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuYmFja2dyb3VuZC5zY2FsZSA9IDAuNTU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTUwO1xyXG4gICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuYmFja2dyb3VuZC5zY2FsZSA9IDAuNTU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmNhZ2UueCA9IDEyMDtcclxuICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjY1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ID49IDAuNiAmJiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTIwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2FtZVBsYXkuY2FnZS54ID0gMTIwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdhbWVQbGF5LmJhY2tncm91bmQuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var constants_1 = require("./constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rotateDefault = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.pointA_Pos);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
var rotateWithPoint = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.newPoint);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
// const checkTouchCondition1 = (hand: cc.Node, point: cc.Node, graphic: cc.Graphics, pointCompare: cc.Node): void => {
//     if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
//         return;
//     }
//     if(hand.x < point.x &&  !Constants.isTouchPoint2) {
//             Constants.isDrawPoint1 = false;
//             Constants.isTouchPoint1 = false;
//             Constants.newPoint = Constants.pointA_Pos;
//             graphic.clear();
//             return;
//     }
//     if (hand.x > point.x && hand.y > point.y && !Constants.isTouchPoint1) {
//         Constants.isTouchPoint1 = true;
//         Constants.newPoint = point.getPosition();
//     }
// }
// const checkTouchCondition6 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphics: cc.Graphics): void => {
//     if(!Constants.isTouchPoint2  && !Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
//         if (hand.x < newPoint.x  && Constants.isTouchPoint1) {
//             graphics.clear();
//             Constants.isDrawPoint6 = false;
//             Constants.isTouchPoint6 = false;
//             return;
//         }
//         if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
//             Constants.isTouchPoint6 = true;
//             Constants.oldPoint = oldPoint.getPosition();
//             Constants.newPoint = newPoint.getPosition();
//         }
//     } 
//     if (Constants.isTouchPoint2  && Constants.isTouchPoint3 && Constants.isTouchPoint4) {
//         if (hand.x < newPoint.x) {
//             graphics.clear();
//             Constants.isDrawPoint6 = false;
//             Constants.isTouchPoint6 = false;
//             Constants.oldPoint = Constants.point4Pos; 
//             Constants.newPoint = Constants.point1Pos;
//             return;
//         }
//         if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
//             Constants.isTouchPoint6 = true;
//             Constants.oldPoint = oldPoint.getPosition();
//             Constants.newPoint = newPoint.getPosition();
//         }
//     }
// }
// const checkTouchCondition7 = (hand: cc.Node): void => {
//     if(Constants.isTouchPoint1) {
//         if(hand.x < Constants.point5Pos.x) {
//             Constants.oldPoint = Constants.pointA_Pos;
//             Constants.newPoint = Constants.point1Pos;
//         }
//     }
// }
// const checkTouchCondition8 = (hand: cc.Node, graphic: cc.Graphics): void => {
//     if(Constants.isTouchPoint1 && Constants.isTouchPoint6) {
//         if(hand.x < Constants.point6Pos.x && Constants.isTouchPoint7) {
//             graphic.clear();
//             Constants.isTouchPoint7 = false;
//             Constants.isDrawPoint7 = false;
//             Constants.oldPoint = Constants.point1Pos;
//             Constants.newPoint = Constants.point5Pos;
//             return;
//         }
//         if(hand.x > Constants.point6Pos.x) {
//             Constants.isTouchPoint7 = true;
//             Constants.oldPoint = Constants.point5Pos;
//             Constants.newPoint = Constants.point6Pos;
//         }
//     }
// }
// const checkTouchCondition9 = (boudingbox: cc.Rect, hand: cc.Node): void => {
//     if(Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
//         Constants.isTouchFence = true;
//     } else {
//         Constants.isTouchFence = false;
//     }
// }
var checkTouchPoint = function (fence, hand, fenceLeft) {
    var f_BoudingBox = fence.getBoundingBox();
    var fl_BoudingBox = fenceLeft.getBoundingBox();
    var h_BoudingBox = hand.getBoundingBox();
    var checkPosX = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    var checkPosY = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
    // // touch point 6
    // if(Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
    //     if(checkPosY < Constants.point7Pos.y) {
    //         return;
    //     }
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch fence
    // if(f_BoudingBox.intersects(h_BoudingBox)) {
    //     if(Constants.fencePoint.y > checkPosY) {
    //         return;
    //     }
    //     if(Constants.fencePoint.y < checkPosY && Constants.point2Pos.x > checkPosX) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch point 3 && 4
    // if(h_BoudingBox.intersects(Constants.point3Bdb) || h_BoudingBox.intersects(Constants.point4Bdb)) {
    //     if(checkPosY < Constants.point3Pos.y && checkPosX < Constants.point3Pos.x) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     } 
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     return;
    // }
    // // tooouch fence Left
    // if(fl_BoudingBox.intersects(h_BoudingBox)) {
    //     if(checkPosX <  fenceLeft.x) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
};
var Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
};
var TouchArea = {
    // checkTouchCondition1: checkTouchCondition1,
    // checkTouchCondition6: checkTouchCondition6,
    // checkTouchCondition7: checkTouchCondition7,
    // checkTouchCondition8: checkTouchCondition8,
    checkTouchPoint: checkTouchPoint,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.Hand = Hand;
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBa0I7SUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsT0FBTyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsU0FBa0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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Qy9DLHFDQUFxQztJQUNyQyxpR0FBaUc7SUFDakcsa0dBQWtHO0lBQ2xHLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsOEZBQThGO0lBQzlGLGNBQWM7SUFDZCxJQUFJO0lBR0oscUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN0RixxQkFBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQTtBQUdELElBQU0sSUFBSSxHQUFHO0lBQ1QsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZUFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQTtBQUNELElBQU0sU0FBUyxHQUFHO0lBQ2QsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLGVBQWUsRUFBRSxlQUFlO0NBQ25DLENBQUE7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUhVLFdBQUksR0FBZ0IsSUFBSSxDQUFDO0lBQ3pCLGdCQUFTLEdBQXFCLFNBQVMsQ0FBQztJQUVuRCxhQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCByb3RhdGVEZWZhdWx0ID0gKGJhc2VQb2ludDogY2MuVmVjMik6IG51bWJlciA9PiB7XHJcbiAgICBsZXQgdGhpc1BvcyA9IG5ldyBjYy5WZWMyKGJhc2VQb2ludC54LCBiYXNlUG9pbnQueSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gdGhpc1Bvcy5zdWIoQ29uc3RhbnRzLnBvaW50QV9Qb3MpO1xyXG4gICAgY29uc3Qgcm90YXRpb25SYWRpYW5zID0gTWF0aC5hdGFuMihkaXJlY3Rpb25WZWN0b3IueSwgZGlyZWN0aW9uVmVjdG9yLngpO1xyXG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJvdGF0aW9uUmFkaWFucyk7XHJcbiAgICByZXR1cm4gcm90YXRpb25EZWdyZWVzICsgMjA7XHJcbn1cclxuXHJcbmNvbnN0IHJvdGF0ZVdpdGhQb2ludCA9IChiYXNlUG9pbnQ6IGNjLlZlYzIpOiBudW1iZXIgPT4ge1xyXG4gICAgbGV0IHRoaXNQb3MgPSBuZXcgY2MuVmVjMihiYXNlUG9pbnQueCwgYmFzZVBvaW50LnkpO1xyXG4gICAgbGV0IGRpcmVjdGlvblZlY3RvciA9IHRoaXNQb3Muc3ViKENvbnN0YW50cy5uZXdQb2ludCk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHJldHVybiByb3RhdGlvbkRlZ3JlZXMgKyAyMDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uMSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MsIHBvaW50Q29tcGFyZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGhhbmQueCA+IHBvaW50Q29tcGFyZS54ICYmIGhhbmQueSA+IHBvaW50Q29tcGFyZS55KSB7XHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICBpZihoYW5kLnggPCBwb2ludC54ICYmICAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIpIHtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50MSA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuLy8gICAgICAgICAgICAgZ3JhcGhpYy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaWYgKGhhbmQueCA+IHBvaW50LnggJiYgaGFuZC55ID4gcG9pbnQueSAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IHRydWU7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gcG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjYgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlLCBncmFwaGljczogY2MuR3JhcGhpY3MpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKCFDb25zdGFudHMuaXNUb3VjaFBvaW50MiAgJiYgIUNvbnN0YW50cy5pc1RvdWNoUG9pbnQzICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50NCkge1xyXG4vLyAgICAgICAgIGlmIChoYW5kLnggPCBuZXdQb2ludC54ICAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4vLyAgICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbiAgICBcclxuLy8gICAgICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9IFxyXG4gICAgXHJcbiAgICBcclxuLy8gICAgIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MiAgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDMgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuLy8gICAgICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCkge1xyXG4vLyAgICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludDRQb3M7IFxyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb243ID0gKGhhbmQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgaWYoaGFuZC54IDwgQ29uc3RhbnRzLnBvaW50NVBvcy54KSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludEFfUG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjggPSAoaGFuZDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2KSB7XHJcbi8vICAgICAgICAgaWYoaGFuZC54IDwgQ29uc3RhbnRzLnBvaW50NlBvcy54ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3KSB7XHJcbi8vICAgICAgICAgICAgIGdyYXBoaWMuY2xlYXIoKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDcgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NyA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQ1UG9zO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZihoYW5kLnggPiBDb25zdGFudHMucG9pbnQ2UG9zLngpIHtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDcgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQ1UG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQ2UG9zO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjkgPSAoYm91ZGluZ2JveDogY2MuUmVjdCwgaGFuZDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgYm91ZGluZ2JveC5pbnRlcnNlY3RzKGhhbmQuZ2V0Qm91bmRpbmdCb3goKSkpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaEZlbmNlID0gdHJ1ZTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hGZW5jZSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuY29uc3QgY2hlY2tUb3VjaFBvaW50ID0gKGZlbmNlOiBjYy5Ob2RlLCBoYW5kOiBjYy5Ob2RlLCBmZW5jZUxlZnQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuICAgIGxldCBmX0JvdWRpbmdCb3ggPSBmZW5jZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGZsX0JvdWRpbmdCb3ggPSBmZW5jZUxlZnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBoX0JvdWRpbmdCb3ggPSBoYW5kLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgY2hlY2tQb3NYID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICBsZXQgY2hlY2tQb3NZID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuXHJcbiAgICAvLyAvLyB0b3VjaCBwb2ludCA2XHJcbiAgICAvLyBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50NiAmJiBmX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhoX0JvdWRpbmdCb3gpKSB7XHJcbiAgICAvLyAgICAgaWYoY2hlY2tQb3NZIDwgQ29uc3RhbnRzLnBvaW50N1Bvcy55KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyAvLyB0b3VjaCBmZW5jZVxyXG4gICAgLy8gaWYoZl9Cb3VkaW5nQm94LmludGVyc2VjdHMoaF9Cb3VkaW5nQm94KSkge1xyXG4gICAgLy8gICAgIGlmKENvbnN0YW50cy5mZW5jZVBvaW50LnkgPiBjaGVja1Bvc1kpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgIFxyXG4gICAgLy8gICAgIGlmKENvbnN0YW50cy5mZW5jZVBvaW50LnkgPCBjaGVja1Bvc1kgJiYgQ29uc3RhbnRzLnBvaW50MlBvcy54ID4gY2hlY2tQb3NYKSB7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvdWNoIHBvaW50IDMgJiYgNFxyXG4gICAgLy8gaWYoaF9Cb3VkaW5nQm94LmludGVyc2VjdHMoQ29uc3RhbnRzLnBvaW50M0JkYikgfHwgaF9Cb3VkaW5nQm94LmludGVyc2VjdHMoQ29uc3RhbnRzLnBvaW50NEJkYikpIHtcclxuICAgIC8vICAgICBpZihjaGVja1Bvc1kgPCBDb25zdGFudHMucG9pbnQzUG9zLnkgJiYgY2hlY2tQb3NYIDwgQ29uc3RhbnRzLnBvaW50M1Bvcy54KSB7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfSBcclxuXHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvb291Y2ggZmVuY2UgTGVmdFxyXG4gICAgLy8gaWYoZmxfQm91ZGluZ0JveC5pbnRlcnNlY3RzKGhfQm91ZGluZ0JveCkpIHtcclxuICAgIC8vICAgICBpZihjaGVja1Bvc1ggPCAgZmVuY2VMZWZ0LngpIHtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG59XHJcblxyXG5cclxuY29uc3QgSGFuZCA9IHtcclxuICAgIHJvdGF0ZURlZmF1bHQ6IHJvdGF0ZURlZmF1bHQsXHJcbiAgICByb3RhdGVXaXRoUG9pbnQ6IHJvdGF0ZVdpdGhQb2ludCxcclxufVxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uMTogY2hlY2tUb3VjaENvbmRpdGlvbjEsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uNjogY2hlY2tUb3VjaENvbmRpdGlvbjYsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uNzogY2hlY2tUb3VjaENvbmRpdGlvbjcsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uODogY2hlY2tUb3VjaENvbmRpdGlvbjgsXHJcbiAgICBjaGVja1RvdWNoUG9pbnQ6IGNoZWNrVG91Y2hQb2ludCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVsdGlscyB7XHJcblxyXG4gICAgc3RhdGljIEhhbmQ6IHR5cGVvZiBIYW5kID0gSGFuZDtcclxuICAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var GameController_1 = require("./GameController");
var GraphicsController_1 = require("./GraphicsController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GraphicsController = null;
        // Node
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_Button = null;
        // UI
        _this.background = null;
        _this.thieftDefault = null;
        _this.guardDefault = null;
        _this.guardDefault_Flag = null;
        _this.thieftCTA = null;
        _this.guardCTA = null;
        // GP
        _this.stickman_arm = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.initPhysics();
    };
    GamePlay.prototype.start = function () {
        constants_1.Constants.startPos = this.stickman_arm.getPosition();
        constants_1.Constants.touchPointsPos.push(this.stickman_arm.getPosition());
    };
    GamePlay.prototype.initPhysics = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(GraphicsController_1.default)
    ], GamePlay.prototype, "GraphicsController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_Button", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardDefault_Flag", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "thieftCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "guardCTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "stickman_arm", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFHaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1REM7UUFwREMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0Qyx3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRzlDLE9BQU87UUFFUCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsS0FBSztRQUVMLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsS0FBSztRQUVMLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQW9CL0IsQ0FBQztJQWpCVyx5QkFBTSxHQUFoQjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQscUJBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR08sOEJBQVcsR0FBbkI7UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLDRCQUFrQixDQUFDO3dEQUNpQjtJQUs5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUszQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQW5DVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUQ1QjtJQUFELGVBQUM7Q0F2REQsQUF1REMsQ0F2RHFDLEVBQUUsQ0FBQyxTQUFTLEdBdURqRDtrQkF2RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHcmFwaGljc0NvbnRyb2xsZXIgZnJvbSBcIi4vR3JhcGhpY3NDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBOb2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIFVJXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdGhpZWZ0RGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ3VhcmREZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBndWFyZERlZmF1bHRfRmxhZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdGhpZWZ0Q1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBndWFyZENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIEdQXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc3RpY2ttYW5fYXJtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLnN0YXJ0UG9zID0gdGhpcy5zdGlja21hbl9hcm0uZ2V0UG9zaXRpb24oKTtcclxuICAgIENvbnN0YW50cy50b3VjaFBvaW50c1Bvcy5wdXNoKHRoaXMuc3RpY2ttYW5fYXJtLmdldFBvc2l0aW9uKCkpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICBsZXQgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4c073bv1FK85YFJROX1Ttb', 'GraphicsController');
// Script/Controller/GraphicsController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GraphicsController = /** @class */ (function (_super) {
    __extends(GraphicsController, _super);
    function GraphicsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand = null;
        _this.prefab_Graphics = null;
        // state
        _this.graphicsArr = [];
        _this.handController = null;
        return _this;
    }
    GraphicsController.prototype.start = function () {
        this.createGraphics();
    };
    GraphicsController.prototype.createGraphics = function () {
        var prefab = cc.instantiate(this.prefab_Graphics);
        var graphics = prefab.getComponent(cc.Graphics);
        prefab.x = 0;
        prefab.y = 0;
        prefab.parent = this.node;
        this.graphicsArr.push(graphics);
    };
    GraphicsController.prototype.handleDrawLine = function (start, end, graphics) {
        graphics.clear();
        graphics.lineWidth = 7;
        graphics.moveTo(start.x, start.y);
        graphics.lineTo(end.x, end.y);
        graphics.stroke();
    };
    GraphicsController.prototype.handleDrawWithTouchPoint = function () {
        if (constants_1.Constants.touchPointsPos.length >= 2) {
            for (var i = 1; i < constants_1.Constants.touchPointsPos.length; i++) {
                var start = constants_1.Constants.touchPointsPos[i - 1]; // Điểm trước
                var end = constants_1.Constants.touchPointsPos[i]; // Điểm hiện tại
                // graphics.moveTo(start.x, start.y);
                // graphics.lineTo(end.x, end.y);
            }
        }
    };
    GraphicsController.prototype.update = function (dt) {
        constants_1.Constants.isTouch && this.handleDrawLine(constants_1.Constants.startPos, this.hand.getPosition(), this.graphicsArr[0]);
        // console.log(Constants.touchPointsPos);
    };
    __decorate([
        property(cc.Node)
    ], GraphicsController.prototype, "hand", void 0);
    __decorate([
        property(cc.Prefab)
    ], GraphicsController.prototype, "prefab_Graphics", void 0);
    GraphicsController = __decorate([
        ccclass
    ], GraphicsController);
    return GraphicsController;
}(cc.Component));
exports.default = GraphicsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBR3hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBMkRDO1FBekRHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsUUFBUTtRQUVSLGlCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBaUQxQyxDQUFDO0lBOUNhLGtDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdNLDJDQUFjLEdBQXJCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR08sMkNBQWMsR0FBdEIsVUFBdUIsS0FBYyxFQUFFLEdBQVksRUFBRSxRQUFxQjtRQUN0RSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR08scURBQXdCLEdBQWhDO1FBQ0ksSUFBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksS0FBSyxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQzFELElBQUksR0FBRyxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO2dCQUN2RCxxQ0FBcUM7Z0JBQ3JDLGlDQUFpQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUdTLG1DQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIscUJBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FDcEMscUJBQVMsQ0FBQyxRQUFRLEVBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ3RCLENBQUM7UUFFRix5Q0FBeUM7SUFFN0MsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2M7SUFKakIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EyRHRDO0lBQUQseUJBQUM7Q0EzREQsQUEyREMsQ0EzRCtDLEVBQUUsQ0FBQyxTQUFTLEdBMkQzRDtrQkEzRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSGFuZENvbnRyb2xsZXIgZnJvbSBcIi4vSGFuZENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljc0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcblxyXG4gICAgZ3JhcGhpY3NBcnI6IGNjLkdyYXBoaWNzW10gPSBbXTtcclxuICAgIGhhbmRDb250cm9sbGVyOiBIYW5kQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHcmFwaGljcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJfR3JhcGhpY3MpO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IHByZWZhYi5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHByZWZhYi54ID0gMDtcclxuICAgICAgICBwcmVmYWIueSA9IDA7XHJcbiAgICAgICAgcHJlZmFiLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzQXJyLnB1c2goZ3JhcGhpY3MpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURyYXdMaW5lKHN0YXJ0OiBjYy5WZWMyLCBlbmQ6IGNjLlZlYzIsIGdyYXBoaWNzOiBjYy5HcmFwaGljcyk6IHZvaWQge1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gNztcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZC54LCBlbmQueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRHJhd1dpdGhUb3VjaFBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKENvbnN0YW50cy50b3VjaFBvaW50c1Bvcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IENvbnN0YW50cy50b3VjaFBvaW50c1Bvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gQ29uc3RhbnRzLnRvdWNoUG9pbnRzUG9zW2kgLSAxXTsgLy8gxJBp4buDbSB0csaw4bubY1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IENvbnN0YW50cy50b3VjaFBvaW50c1Bvc1tpXTsgLy8gxJBp4buDbSBoaeG7h24gdOG6oWlcclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaCAmJiB0aGlzLmhhbmRsZURyYXdMaW5lKFxyXG4gICAgICAgICAgICBDb25zdGFudHMuc3RhcnRQb3MsIFxyXG4gICAgICAgICAgICB0aGlzLmhhbmQuZ2V0UG9zaXRpb24oKSwgXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NBcnJbMF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhDb25zdGFudHMudG91Y2hQb2ludHNQb3MpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.drawSound = null;
        _this.stunSound = null;
        _this.naniSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "stunSound":
                    this.stunSound.play();
                    break;
                case "naniSound":
                    this.naniSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "stunSound":
                this.stunSound.stop();
                break;
            case "naniSound":
                this.naniSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.drawSound.stop();
        this.stunSound.stop();
        this.naniSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stunSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "naniSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwREM7UUF4REcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBbUIsSUFBSSxDQUFDOztJQWdEckMsQ0FBQztJQTlDVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFWaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBEaEM7SUFBRCxtQkFBQztDQTFERCxBQTBEQyxDQTFEeUMsRUFBRSxDQUFDLFNBQVMsR0EwRHJEO2tCQTFEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcmF3U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHN0dW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmFuaVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1blNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbmlTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0dW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW5pU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdHVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmFuaVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
