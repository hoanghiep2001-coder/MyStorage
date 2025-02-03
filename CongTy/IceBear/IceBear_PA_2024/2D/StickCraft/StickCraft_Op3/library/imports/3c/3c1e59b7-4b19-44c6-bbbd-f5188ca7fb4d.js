"use strict";
cc._RF.push(module, '3c1e5m3SxlExru99RiMp/tN', 'EnemyCollisionAttack');
// Script/Enemy/EnemyCollisionAttack.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.ZombieBaseAttack);
    }
  }
});

cc._RF.pop();