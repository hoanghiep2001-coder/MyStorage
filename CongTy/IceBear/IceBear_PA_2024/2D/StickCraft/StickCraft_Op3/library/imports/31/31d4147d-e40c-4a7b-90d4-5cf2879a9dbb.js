"use strict";
cc._RF.push(module, '31d41R95AxKe5DUXPKHmp27', 'ButtonAttack');
// Script/Others/ButtonAttack.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Icon: cc.Sprite,
    SwordSprite: cc.SpriteFrame,
    ArcherSprite: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  setSword: function setSword() {
    this.Icon.spriteFrame = this.SwordSprite;
  },
  setArcher: function setArcher() {
    this.Icon.spriteFrame = this.ArcherSprite;
  }
});

cc._RF.pop();