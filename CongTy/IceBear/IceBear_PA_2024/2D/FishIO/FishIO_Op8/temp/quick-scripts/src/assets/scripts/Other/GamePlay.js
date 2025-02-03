"use strict";
cc._RF.push(module, '3d0b2UAFNhFjZ33buq0tdva', 'GamePlay');
// scripts/Other/GamePlay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gc: cc.Node,
    bgWarning: cc.Node,
    timeShowWarning: 8,
    boss: cc.Node,
    bgMove: cc.Node,
    isIronSource: cc.Boolean
  },
  playBgMusic: function playBgMusic() {
    if (!this.isPlayBgMusic) {
      this.gameController.playAudio(this.gameController.reviveSound);
      this.gameController.playAudio(this.gameController.audioBgMusic);
      this.isPlayBgMusic = true;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    cc.director.getPhysicsManager().enabled = true;
    var collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true; //collisionManager.enabledDebugDraw = true;

    this.gameController = this.gc.getComponent("GameController"); // ironSource

    this.isPlayBgMusic = false;

    if (this.isIronSource) {
      this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
        if (_this.isPlayBgMusic) return;

        _this.playBgMusic();
      });
    } else {
      this.playBgMusic();
    } // ----------------------

  },
  showBoss: function showBoss() {
    this.scheduleOnce(function () {
      this.gameController.playAudio(this.gameController.audioWarning);
      this.bgWarning.active = true;
      this.scheduleOnce(function () {
        this.bgWarning.active = false;
        this.boss.active = true;
      }, 3);
    }, this.timeShowWarning);
  },
  showPopupOptions: function showPopupOptions() {
    console.log("test");
  },
  start: function start() {},
  update: function update(dt) {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.bgMove.y = 0;
    } else {
      this.bgMove.y = -800;
    }
  }
});

cc._RF.pop();