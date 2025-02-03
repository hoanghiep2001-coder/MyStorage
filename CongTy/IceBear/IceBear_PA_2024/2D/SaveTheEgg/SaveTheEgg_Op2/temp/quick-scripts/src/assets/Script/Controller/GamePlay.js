"use strict";
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