"use strict";
cc._RF.push(module, '5fb2cKNQxpGIL4KnJRuJdAo', 'HealthBar');
// Script/Character/HealthBar.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite,
    HealthText: {
      "default": null,
      type: cc.Label,
      serializable: true
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this._maxHP = 0;
    // this._currentHP = 0;
  },
  start: function start() {},
  update: function update(dt) {// this.updateHealthText();
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
    this.updateHealthText();
  },
  setHP: function setHP(hp) {
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
    this.updateHealthText();
  },
  decrement: function decrement(damp) {
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  updateHealthText: function updateHealthText() {
    if (this.HealthText == null) return;
    this.HealthText.string = this._currentHP + "/" + this._maxHP;
  },
  isAlive: function isAlive() {
    return this._currentHP > 0;
  }
});

cc._RF.pop();