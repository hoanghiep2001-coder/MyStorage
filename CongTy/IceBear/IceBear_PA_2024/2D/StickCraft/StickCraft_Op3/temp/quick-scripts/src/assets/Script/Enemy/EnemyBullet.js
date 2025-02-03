"use strict";
cc._RF.push(module, '724e8+Zs8VHWZBHLkR6Rzc9', 'EnemyBullet');
// Script/Enemy/EnemyBullet.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    DampFactor: 1
  },
  onLoad: function onLoad() {
    this._isLanching = false;
    this._direction = 0;
    this._speed = 15;
  },
  start: function start() {
    this._isLanching = true;
  },
  Launch: function Launch(baseDamp, direction) {
    this._direction = direction;
    this._baseDamp = baseDamp;
    this.node.scaleX = direction;
  },
  update: function update(dt) {
    if (!this._isLanching) return;
    this.node.setPosition(this.node.getPosition().x + this._speed * 10 * this._direction * dt, this.node.getPosition().y);
  },
  hitPlayer: function hitPlayer() {
    console.log("Bullet Hit Player");
    this.node.destroy();
  },
  hitPlatform: function hitPlatform() {
    this._isLanching = false;
    this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.PoisonVineBaseAttack);
      this.hitPlayer();
    } else if (other.node.group == "Solid") {
      this.hitPlatform();
    }
  }
});

cc._RF.pop();