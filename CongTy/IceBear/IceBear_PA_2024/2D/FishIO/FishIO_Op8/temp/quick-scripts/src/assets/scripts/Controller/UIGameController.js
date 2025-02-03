"use strict";
cc._RF.push(module, 'd451a3z+gxLII7oceSoPGiY', 'UIGameController');
// scripts/UIGameController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    camera: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    this.node.setPosition(this.camera.getPosition());
  }
});

cc._RF.pop();