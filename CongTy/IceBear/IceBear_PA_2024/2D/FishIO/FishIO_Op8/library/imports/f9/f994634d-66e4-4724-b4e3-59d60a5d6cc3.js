"use strict";
cc._RF.push(module, 'f9946NNZuRHJLTjWdYKXWzD', 'CameraController');
// scripts/CameraController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    player: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    var targetPosition = this.player.getPosition();
    targetPosition.y = cc.misc.clampf(targetPosition.y, -100, 450);
    targetPosition.x = cc.misc.clampf(targetPosition.x, -500, 420);
    var currentPosition = this.node.getPosition();
    currentPosition.lerp(targetPosition, 0.2, currentPosition);
    this.node.setPosition(currentPosition);
  }
});

cc._RF.pop();