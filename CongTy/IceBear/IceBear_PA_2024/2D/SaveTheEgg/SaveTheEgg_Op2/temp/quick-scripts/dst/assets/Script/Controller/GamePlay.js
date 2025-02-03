
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
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        // Path Finding
        // this.drawGrid();
        // this.checkGridCollide();
        // -------------------
    };
    // private drawGrid(): void {
    //     this.pathFinding_Grid = new PF.Grid(400, 400);
    //     this.pathFinding_Nodes = this.pathFinding_Grid.nodes;
    //     this.graphic.node.y = -400 / 2;
    //     this.graphic.node.x = -400 / 2;
    //     console.log(this.pathFinding_Grid);
    //     // Đặt màu và độ dày của đường vẽ
    //     this.graphic.strokeColor = cc.Color.BLACK;
    //     this.graphic.lineWidth = 4;
    //     // Vẽ lưới
    //     for (let i = 0; i <= 400; i += 5) {
    //         // Vẽ dòng ngang
    //         this.graphic.moveTo(0, i);
    //         this.graphic.lineTo(400, i);
    //         // Vẽ dòng dọc
    //         this.graphic.moveTo(i, 0);
    //         this.graphic.lineTo(i, 400);
    //     }
    //     // Áp dụng các đường vẽ
    //     this.graphic.stroke();
    // }
    // private checkGridCollide(): void {
    //     let environmentColliders: cc.PhysicsPolygonCollider = this.NodesController.Environment.getComponent(cc.PhysicsPolygonCollider);
    //     let points = environmentColliders.points;
    //     this.pathFinding_Nodes.forEach(node => {
    //         if (this.isPointInPolygon(node, points)) {
    //             console.log('Node va chạm:', node);
    //         } else {
    //             console.log("0 va");
    //         }
    //     });
    // }
    // private isPointInPolygon(point, polygon): boolean {
    //     let x = point.x, y = point.y;
    //     let inside = false;
    //     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    //         let xi = polygon[i].x, yi = polygon[i].y;
    //         let xj = polygon[j].x, yj = polygon[j].y;
    //         let intersect = ((yi > y) !== (yj > y))
    //             && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    //         if (intersect) inside = !inside;
    //     }
    //     return inside;
    // }
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.characterHit = function () {
        var _this = this;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        this.scheduleOnce(function () {
            _this.NodesController.CTA.active = true;
            _this.NodesController.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.loseSound);
            _this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
            // mtg & applovin
            // this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1);
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        this.handleIronSourcePlaySound();
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        // this.handleMuteSoundIronSource();
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0xDO1FBcExHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBNEo1QixDQUFDO0lBekphLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlFQUFpRTtJQUNyRSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFeEMsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixxQkFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFNUIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isc0JBQXNCO0lBQzFCLENBQUM7SUFHRCw2QkFBNkI7SUFDN0IscURBQXFEO0lBQ3JELDREQUE0RDtJQUM1RCxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBRXRDLDBDQUEwQztJQUUxQyx3Q0FBd0M7SUFDeEMsaURBQWlEO0lBQ2pELGtDQUFrQztJQUVsQyxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsdUNBQXVDO0lBRXZDLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLFFBQVE7SUFFUiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLElBQUk7SUFHSixxQ0FBcUM7SUFDckMsc0lBQXNJO0lBQ3RJLGdEQUFnRDtJQUVoRCwrQ0FBK0M7SUFDL0MscURBQXFEO0lBQ3JELGtEQUFrRDtJQUNsRCxtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixVQUFVO0lBQ1YsSUFBSTtJQUdKLHNEQUFzRDtJQUN0RCxvQ0FBb0M7SUFFcEMsMEJBQTBCO0lBQzFCLDZFQUE2RTtJQUM3RSxvREFBb0Q7SUFDcEQsb0RBQW9EO0lBRXBELGtEQUFrRDtJQUNsRCw4REFBOEQ7SUFDOUQsMkNBQTJDO0lBQzNDLFFBQVE7SUFFUixxQkFBcUI7SUFDckIsSUFBSTtJQUdJLGlDQUFjLEdBQXRCO1FBQ0kscUJBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR08sZ0NBQWEsR0FBckI7SUFFQSxDQUFDO0lBR00sNENBQXlCLEdBQWhDO1FBQ0ksSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFHTyw0Q0FBeUIsR0FBakM7UUFDSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVsRixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdEO1lBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDckUscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUdPLCtCQUFZLEdBQXBCO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU1RCxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBRTNHLGlCQUFpQjtZQUNqQiwrR0FBK0c7UUFDbkgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUdPLCtCQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixvQ0FBb0M7UUFDcEMscUJBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQWpMRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3FEQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVF0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNNO0lBaEJYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzTDVCO0lBQUQsZUFBQztDQXRMRCxBQXNMQyxDQXRMcUMsRUFBRSxDQUFDLFNBQVMsR0FzTGpEO2tCQXRMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udHJvbGxlciBmcm9tIFwiLi9Ob2Rlc0NvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmlwdFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgZ3JhcGhpYzogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgcGF0aEZpbmRpbmdfR3JpZDogYW55ID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX05vZGVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgY3VyZW50UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgY3VycmVudEhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY3VycmVudFBlbmNpbDogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgY3VyZXJudFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzSGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0hpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUGF0aCBGaW5kaW5nXHJcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tHcmlkQ29sbGlkZSgpO1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBkcmF3R3JpZCgpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLnBhdGhGaW5kaW5nX0dyaWQgPSBuZXcgUEYuR3JpZCg0MDAsIDQwMCk7XHJcbiAgICAvLyAgICAgdGhpcy5wYXRoRmluZGluZ19Ob2RlcyA9IHRoaXMucGF0aEZpbmRpbmdfR3JpZC5ub2RlcztcclxuICAgIC8vICAgICB0aGlzLmdyYXBoaWMubm9kZS55ID0gLTQwMCAvIDI7XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLm5vZGUueCA9IC00MDAgLyAyO1xyXG5cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnBhdGhGaW5kaW5nX0dyaWQpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIMSQ4bq3dCBtw6B1IHbDoCDEkeG7mSBkw6B5IGPhu6dhIMSRxrDhu51uZyB24bq9XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLmxpbmVXaWR0aCA9IDQ7XHJcblxyXG4gICAgLy8gICAgIC8vIFbhur0gbMaw4bubaVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDQwMDsgaSArPSA1KSB7XHJcbiAgICAvLyAgICAgICAgIC8vIFbhur0gZMOybmcgbmdhbmdcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLm1vdmVUbygwLCBpKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLmxpbmVUbyg0MDAsIGkpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gVuG6vSBkw7JuZyBk4buNY1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdyYXBoaWMubW92ZVRvKGksIDApO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdyYXBoaWMubGluZVRvKGksIDQwMCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDDgXAgZOG7pW5nIGPDoWMgxJHGsOG7nW5nIHbhur1cclxuICAgIC8vICAgICB0aGlzLmdyYXBoaWMuc3Ryb2tlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY2hlY2tHcmlkQ29sbGlkZSgpOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgZW52aXJvbm1lbnRDb2xsaWRlcnM6IGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5FbnZpcm9ubWVudC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAvLyAgICAgbGV0IHBvaW50cyA9IGVudmlyb25tZW50Q29sbGlkZXJzLnBvaW50cztcclxuXHJcbiAgICAvLyAgICAgdGhpcy5wYXRoRmluZGluZ19Ob2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5Qb2x5Z29uKG5vZGUsIHBvaW50cykpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb2RlIHZhIGNo4bqhbTonLCBub2RlKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMCB2YVwiKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGlzUG9pbnRJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pOiBib29sZWFuIHtcclxuICAgIC8vICAgICBsZXQgeCA9IHBvaW50LngsIHkgPSBwb2ludC55O1xyXG4gICAgXHJcbiAgICAvLyAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwLCBqID0gcG9seWdvbi5sZW5ndGggLSAxOyBpIDwgcG9seWdvbi5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IHhpID0gcG9seWdvbltpXS54LCB5aSA9IHBvbHlnb25baV0ueTtcclxuICAgIC8vICAgICAgICAgbGV0IHhqID0gcG9seWdvbltqXS54LCB5aiA9IHBvbHlnb25bal0ueTtcclxuICAgIFxyXG4gICAgLy8gICAgICAgICBsZXQgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSlcclxuICAgIC8vICAgICAgICAgICAgICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAgICAgcmV0dXJuIGluc2lkZTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuQ2hhcmFjdGVyUG9zID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuU3BpbmVfQ2hhcmFjdGVyLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVySGl0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5zZXRBbmltYXRpb24oMCwgXCJiZWluZ19oaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDVEFfQW5pbVwiKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmxvc2VTb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEFfYnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBX092ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1bmFjdGl2ZUhpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0hpbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0hpdCAmJiAhdGhpcy5pc0hpdCAmJiB0aGlzLmNoYXJhY3RlckhpdCgpO1xyXG4gICAgICAgIHdpbmRvdy5pc1N0YXJ0RHJhdyAmJiAhdGhpcy5pc0hpbnQgJiYgdGhpcy51bmFjdGl2ZUhpbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19