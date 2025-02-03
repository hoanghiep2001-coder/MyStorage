"use strict";
cc._RF.push(module, 'e28fbQo9BVHNLWxmVSNJWkz', 'HandTutorial');
// Script/Others/HandTutorial.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Hand: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.tween(this.Hand).repeatForever(cc.tween().to(1, {
      position: cc.v2(0, 20)
    }).to(1, {
      position: cc.v2(0, 0)
    })).start();
  } // update (dt) {},

});

cc._RF.pop();