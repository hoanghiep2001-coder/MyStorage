"use strict";
cc._RF.push(module, 'c735b1laCtHdIdMu2J7NWsl', 'PuzzleScene');
// Scripts/PuzzleScene.ts

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
exports.PuzzleScene = void 0;
var CONST_1 = require("./Const/CONST");
var GameInfo_1 = require("./Const/GameInfo");
var GameController_1 = require("./Controller/GameController");
var SoundController_1 = require("./Controller/SoundController");
var PuzzleConstants_1 = require("./PuzzleConstants");
var PuzzlueBoard_1 = require("./PuzzlueBoard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PuzzleScene = /** @class */ (function (_super) {
    __extends(PuzzleScene, _super);
    function PuzzleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.btnHint = null;
        _this.board = null;
        _this.winPanel = null;
        _this.level = 3;
        _this.state = PuzzleConstants_1.STATE.NONE;
        return _this;
    }
    PuzzleScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    PuzzleScene.prototype.startGame = function () {
        // this.winPanel.active = false;
        this.state = PuzzleConstants_1.STATE.START;
        this.board.reset(this.level);
    };
    PuzzleScene.prototype.overGame = function () {
        var _this = this;
        // this.winPanel.opacity = 255;
        this.winPanel.active = true;
        this.state = PuzzleConstants_1.STATE.OVER;
        this.btnHint.children.forEach(function (child) {
            child.color = cc.color(255, 184, 0, 255);
        });
        cc.tween(this.winPanel)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () {
            var label = _this.btnHint.getComponentInChildren(cc.Label);
            label.string = 'DOWNLOAD';
            label.node.color = cc.color(255, 255, 255, 255);
            label.node.scale = 0.8;
            _this.btnHint.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        })
            .start();
        cc.tween(this.btnHint)
            .repeatForever(cc.tween(this.btnHint)
            .to(0.5, { scale: 1 }, { easing: cc.easing.smooth })
            .to(0.5, { scale: 1.06 }, { easing: cc.easing.elasticOut })).start();
    };
    PuzzleScene.prototype.onBoardTouch = function (x, y) {
        if (this.state = PuzzleConstants_1.STATE.START) {
            var isMove = this.board.movePiece(x, y);
            if (!isMove) {
                cc.log("wrong");
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.wrongSound);
            }
            else {
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.slideSound);
                if (this.board.judgeWin()) {
                    this.overGame();
                }
            }
        }
    };
    PuzzleScene.prototype.onBtnLevelEasy = function () {
        this.level = 3;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelNormal = function () {
        this.level = 5;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelHard = function () {
        this.level = 10;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    PuzzleScene.prototype.addListeners = function () {
        this.btnHint.on(cc.Node.EventType.TOUCH_START, this.activeHint, this);
    };
    PuzzleScene.prototype.activeHint = function () {
        console.log("Check");
        if (!GameInfo_1.default.isCanTouch)
            return;
        GameInfo_1.default.isCanTouch = false;
        this.winPanel.getComponent(cc.Animation).play();
        this.scheduleOnce(function () { return GameInfo_1.default.isCanTouch = true; }, 1.1);
        SoundController_1.SoundController.Instance(SoundController_1.SoundController).playSound(CONST_1.CONST.SoundTrack.clickBtnSound);
    };
    PuzzleScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(GameController_1.GameController)
    ], PuzzleScene.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "btnHint", void 0);
    __decorate([
        property(PuzzlueBoard_1.PuzzleBoard)
    ], PuzzleScene.prototype, "board", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "winPanel", void 0);
    PuzzleScene = __decorate([
        ccclass
    ], PuzzleScene);
    return PuzzleScene;
}(cc.Component));
exports.PuzzleScene = PuzzleScene;

cc._RF.pop();