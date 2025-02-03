"use strict";
cc._RF.push(module, 'a9845K/gYlJtr3Brfor2Gf6', 'HealthBarEnemy');
// Script/Enemy/HealthBarEnemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this._maxHP = 0;
    // this._currentHP = 0;
    this.nodeParent = this.node.parent.parent;
  },
  start: function start() {},
  update: function update(dt) {
    if (this.nodeParent.scaleX < 0) this.node.scaleX = -1;else this.node.scaleX = 1;
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
  },
  setHP: function setHP(hp) {
    cc.log("Enemy Set HP ", hp);
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
  },
  decrement: function decrement(damp) {
    cc.log("Health Bar Enemy ", damp);
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  isAlive: function isAlive() {
    return this._currentHP > 0;
  }
});

cc._RF.pop();