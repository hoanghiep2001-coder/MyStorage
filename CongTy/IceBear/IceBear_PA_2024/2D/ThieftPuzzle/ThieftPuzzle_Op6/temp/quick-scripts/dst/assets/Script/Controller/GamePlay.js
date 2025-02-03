
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
        _this.tree = null;
        _this.glass = null;
        _this.cage = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.initPhysics();
    };
    GamePlay.prototype.start = function () {
        this.thieftCTA.active = false;
        this.guardCTA.active = false;
        this.guardDefault_Flag.active = false;
    };
    GamePlay.prototype.loseGame = function () {
        var _this = this;
        constants_1.Constants.isLoseGame = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.naniSound);
        // fill color for graphics to red
        this.GraphicsController.getComponent(cc.Graphics).fillColor = cc.Color.RED;
        this.GraphicsController.getComponent(cc.Graphics).strokeColor = cc.Color.RED;
        this.GraphicsController.graphicsNodes.forEach(function (graphic) {
            graphic.clear();
        });
        if (constants_1.Constants.isTouchPoint1) {
            this.GraphicsController.graphicsNodes[1].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[1].moveTo(constants_1.Constants.pointA_Pos.x, constants_1.Constants.pointA_Pos.y);
            this.GraphicsController.graphicsNodes[1].lineTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[1].stroke();
            this.GraphicsController.graphicsNodes[2].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[2].moveTo(constants_1.Constants.point1Pos.x, constants_1.Constants.point1Pos.y);
            this.GraphicsController.graphicsNodes[2].lineTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[2].stroke();
            this.GraphicsController.graphicsNodes[6].fillColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].strokeColor = cc.Color.RED;
            this.GraphicsController.graphicsNodes[6].moveTo(constants_1.Constants.point5Pos.x, constants_1.Constants.point5Pos.y);
            this.GraphicsController.graphicsNodes[6].lineTo(constants_1.Constants.point6Pos.x, constants_1.Constants.point6Pos.y);
            this.GraphicsController.graphicsNodes[6].stroke();
        }
        // show flag
        this.guardDefault_Flag.active = true;
        this.scheduleOnce(function () {
            constants_1.Constants.ironSource.isEndGame = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stunSound);
            // active CTA
            _this.guardDefault.active = false;
            _this.thieftDefault.active = false;
            _this.guardCTA.active = true;
            _this.thieftCTA.active = true;
            // destroy hand
            _this.Hand.active = false;
            _this.Hand.destroy();
            _this.GraphicsController.graphicsNodes.forEach(function (graphic) { return graphic.clear(); });
            _this.GraphicsController.getComponent(cc.Graphics).clear();
        }, 1.5);
        this.scheduleOnce(function () {
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.CTA_Button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 2.5);
    };
    GamePlay.prototype.initPhysics = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        collisionManager.enabledDrawBoundingBox = true;
    };
    GamePlay.prototype.update = function (dt) {
        // ironsource
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
    ], GamePlay.prototype, "tree", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "glass", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "cage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFHaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrSUM7UUEvSEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0Qyx3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRzlDLE9BQU87UUFFUCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsS0FBSztRQUVMLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBMkZ2QixDQUFDO0lBeEZXLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMs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QUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQXZDRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0k1QjtJQUFELGVBQUM7Q0FsSUQsQUFrSUMsQ0FsSXFDLEVBQUUsQ0FBQyxTQUFTLEdBa0lqRDtrQkFsSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHcmFwaGljc0NvbnRyb2xsZXIgZnJvbSBcIi4vR3JhcGhpY3NDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdyYXBoaWNzQ29udHJvbGxlcilcclxuICBHcmFwaGljc0NvbnRyb2xsZXI6IEdyYXBoaWNzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICAvLyBOb2RlXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIFVJXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRoaWVmdERlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGd1YXJkRGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ3VhcmREZWZhdWx0X0ZsYWc6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRoaWVmdENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgZ3VhcmRDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0cmVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBnbGFzczogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY2FnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGhpZWZ0Q1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5ndWFyZENUQS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ3VhcmREZWZhdWx0X0ZsYWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGxvc2VHYW1lKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzTG9zZUdhbWUgPSB0cnVlO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submFuaVNvdW5kKTtcclxuICAgIFxyXG4gICAgLy8gZmlsbCBjb2xvciBmb3IgZ3JhcGhpY3MgdG8gcmVkXHJcbiAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzLmZvckVhY2goZ3JhcGhpYyA9PiB7XHJcbiAgICAgIGdyYXBoaWMuY2xlYXIoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1sxXS5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0uc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0ubW92ZVRvKENvbnN0YW50cy5wb2ludEFfUG9zLngsIENvbnN0YW50cy5wb2ludEFfUG9zLnkpO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzFdLmxpbmVUbyhDb25zdGFudHMucG9pbnQxUG9zLngsIENvbnN0YW50cy5wb2ludDFQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMV0uc3Ryb2tlKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMl0uZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzJdLm1vdmVUbyhDb25zdGFudHMucG9pbnQxUG9zLngsIENvbnN0YW50cy5wb2ludDFQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbMl0ubGluZVRvKENvbnN0YW50cy5wb2ludDVQb3MueCwgQ29uc3RhbnRzLnBvaW50NVBvcy55KTtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1syXS5zdHJva2UoKTtcclxuXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0uZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICB0aGlzLkdyYXBoaWNzQ29udHJvbGxlci5ncmFwaGljc05vZGVzWzZdLm1vdmVUbyhDb25zdGFudHMucG9pbnQ1UG9zLngsIENvbnN0YW50cy5wb2ludDVQb3MueSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXNbNl0ubGluZVRvKENvbnN0YW50cy5wb2ludDZQb3MueCwgQ29uc3RhbnRzLnBvaW50NlBvcy55KTtcclxuICAgICAgdGhpcy5HcmFwaGljc0NvbnRyb2xsZXIuZ3JhcGhpY3NOb2Rlc1s2XS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IGZsYWdcclxuICAgIHRoaXMuZ3VhcmREZWZhdWx0X0ZsYWcuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdHVuU291bmQpO1xyXG5cclxuICAgICAgLy8gYWN0aXZlIENUQVxyXG4gICAgICB0aGlzLmd1YXJkRGVmYXVsdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aGllZnREZWZhdWx0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmd1YXJkQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudGhpZWZ0Q1RBLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAvLyBkZXN0cm95IGhhbmRcclxuICAgICAgdGhpcy5IYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkhhbmQuZGVzdHJveSgpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdyYXBoaWNzTm9kZXMuZm9yRWFjaChncmFwaGljID0+IGdyYXBoaWMuY2xlYXIoKSk7XHJcbiAgICAgIHRoaXMuR3JhcGhpY3NDb250cm9sbGVyLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgICAgXHJcbiAgICB9LCAxLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpICA9PiB7XHJcbiAgICAgIHRoaXMuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDVEFfQW5pbVwiKTtcclxuXHJcbiAgICAgIHRoaXMuQ1RBX0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIH0sIDIuNSlcclxuICB9XHJcbiAgXHJcblxyXG4gIHByaXZhdGUgaW5pdFBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgbGV0IGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19