"use strict";
cc._RF.push(module, '3697cH7HvJKfaxYpx5bnrPE', 'Hand');
// Script/Hand.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Main: require('Main'),
    Res: require('Res')
  },
  onLoad: function onLoad() {},
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var _this = this;

    if (otherCollider.node._name == 'Round') {
      this.Main.FlagStatus = "Round";
    }

    if (otherCollider.node._name == 'man1') {
      this.Main.FlagStatus = "God";
      this.Res.FlagMove = false;
      this.Res.FlagStatus = 'Lose';
      setTimeout(function () {
        _this.Res.Flag_Done = true;
      }, 500);
    }
  } // onEndContact(contact, selfCollider, otherCollider) {
  //     if(otherCollider.node._name == 'Round') {
  //         this.Main.FlagStatus = false;
  //     }
  //     if(otherCollider.node._name == 'god') {
  //         this.Main.FlagStatus = false;
  //     }
  // }
  // update (dt) {},

});

cc._RF.pop();