"use strict";
cc._RF.push(module, 'd5cab3lV9FL3JPzR1b7qO2N', 'AttackBoxStick');
// Script/Character/AttackBoxStick.js

"use strict";

var AudioManager = require("AudioManager");

cc.Class({
  "extends": cc.Component,
  properties: {
    AudioManager: AudioManager
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  // update (dt) {},
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log("Attack Box Stick: ", other.node.group);
    window.isUsingSword && this.AudioManager.bladeSound.play();
    window.isUsingFist && this.AudioManager.hitSound.play();

    if (other.node.group == "Enemy") {
      console.log("Hit Enemy");
    }
  }
});

cc._RF.pop();