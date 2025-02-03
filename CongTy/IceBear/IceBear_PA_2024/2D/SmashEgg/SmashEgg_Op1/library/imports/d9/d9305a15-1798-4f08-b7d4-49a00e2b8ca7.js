"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'TouchController');
// Script/Controller/TouchController.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab,
    nodesController: cc.Node,
    audioManager: cc.Node,
    gameController: cc.Node,
    gamePlay: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start() {
    // toStore
    // this.gameController.getComponent("GameController").installHandle();
    if (window.isWin) {
      this.gameController.getComponent("GameController").installHandle();
    }

    this.gamePlay.getComponent("GamePlay").handleIronSourcePlaySound();
    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
    this.nodesController.getComponent("NodesController").hint.active = false;
    this.nodesController.getComponent("NodesController").text_draw.active = false;
  },
  touch_end: function touch_end(event) {
    if (!_StateForJS.StateForJs.isCanDraw || window.isWin) {
      this.offEvent();
      this.createGraphics();
    }

    this.audioManager.getComponent("AudioManager").stopSound("drawSound");
  },
  offEvent: function offEvent() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_END);
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
  }
});

cc._RF.pop();