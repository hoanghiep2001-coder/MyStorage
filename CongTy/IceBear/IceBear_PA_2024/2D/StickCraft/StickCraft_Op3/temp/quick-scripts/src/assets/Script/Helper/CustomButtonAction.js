"use strict";
cc._RF.push(module, '7acebqphMtAR5w2MXkyjGdp', 'CustomButtonAction');
// Script/Helper/CustomButtonAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Mouse Event
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.log("On Mouse Down");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      cc.log("On Mouse Up");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      cc.log("On Mouse Leave");
    }, this); // Touch Event

    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      cc.log("On Touch Start");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      cc.log("On Touch End");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      cc.log("On Touch Cancel");
    }, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();