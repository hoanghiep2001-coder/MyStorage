"use strict";
cc._RF.push(module, 'd2c04dzmqdFwJkeq9miBlhk', 'DetectPlayer');
// Script/Enemy/DetectPlayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    IsDetectPlayer: false
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.IsDetectPlayer = true;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    this.IsDetectPlayer = false;
  }
});

cc._RF.pop();