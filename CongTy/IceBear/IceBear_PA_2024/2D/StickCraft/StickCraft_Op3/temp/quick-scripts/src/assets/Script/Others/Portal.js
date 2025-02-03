"use strict";
cc._RF.push(module, '3fd3eVtg49LYIaXQUDhjPp2', 'Portal');
// Script/Others/Portal.js

"use strict";

var GameInfo = require("GameInfo");

var Player3D = require("Player3D");

cc.Class({
  "extends": cc.Component,
  properties: {
    StoneCover: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._isOpen = false;
  },
  start: function start() {},
  update: function update(dt) {
    if (this._isOpen) return;

    if (GameInfo.TotalEnemyAlive <= 0) {
      this._isOpen = true;
      this.openDoor();
    }
  },
  openDoor: function openDoor() {
    this.StoneCover.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      this.playerEnterPortal(other);
    }
  },
  playerEnterPortal: function playerEnterPortal(playerNode) {
    console.log("Player Enter Portal " + GameInfo.TotalEnemyAlive);

    if (GameInfo.TotalEnemyAlive > 0) {
      console.log("You need kill more enemy!");
    } else {
      console.log("YOU WIN"); // Show End of Game

      playerNode.getComponent(Player3D).win();
    }
  }
});

cc._RF.pop();