"use strict";
cc._RF.push(module, '3cdc76y48VMIozePWT6y+zO', 'TouchArea');
// scripts/Other/TouchArea.js

"use strict";

var _require = require("../Data/Constant"),
    Constants = _require.Constants;

cc.Class({
  "extends": cc.Component,
  properties: {
    positionTouch: cc.Vec2,
    player: cc.Node,
    camera: cc.Node,
    rigidBody: cc.RigidBody,
    tut: cc.Node,
    enemyController: cc.Node,
    gamePlay: cc.Node,
    btn_revive: cc.Node
  },
  start: function start() {
    var _this = this;

    this.bodyPlayer = this.player.getChildByName("Body");
    this.isTouched = false;
    this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (_this.tut.active) {
        _this.tut.active = false;
        _this.player.getComponent("PlayerController").isMove = true;

        _this.enemyController.getComponent("EnemyController").startCreateEnemy();

        _this.gamePlay.getComponent("GamePlay").showBoss();
      }

      Constants.isGameStart = true;
      _this.isTouched = true;

      _this.moveWithTouch(event);
    });
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      _this.moveWithTouch(event);
    });
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      _this.isTouched = false;
    });
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      _this.isTouched = false;
    });
  },
  registerReviveAction: function registerReviveAction() {
    this.btn_revive.on(cc.Node.EventType.TOUCH_START, this.handleBtnReviveTouchStart, this);
  },
  handleBtnReviveTouchStart: function handleBtnReviveTouchStart() {
    cc.audioEngine.stopAll();
    Constants.countDie >= 1 && cc.director.loadScene("Game");
  },
  moveWithTouch: function moveWithTouch(event) {
    this.positionTouch = event.getLocation();
    var localTouchPos = this.node.convertToNodeSpaceAR(this.positionTouch);
    this.positionTouch = localTouchPos;
    this.positionTouch.x += this.camera.x;
    this.positionTouch.y += this.camera.y;
    var anglePlayer = cc.misc.radiansToDegrees(Math.atan((this.player.y - localTouchPos.y) / (this.player.x - localTouchPos.x)));
    this.bodyPlayer.angle = anglePlayer;

    if (this.player.x - localTouchPos.x > 0) {
      this.bodyPlayer.scaleX = -1;
    } else {
      this.bodyPlayer.scaleX = 1;
    }
  },
  update: function update(dt) {
    if (Constants.isGameStart && !Constants.isShowPopupOptions) {
      Constants.gameTime += 0.01;

      if (Constants.gameTime >= 3) {
        Constants.isShowPopupOptions = true;
        this.gamePlay.getComponent("GamePlay").showPopupOptions();
      }
    }
  }
});

cc._RF.pop();