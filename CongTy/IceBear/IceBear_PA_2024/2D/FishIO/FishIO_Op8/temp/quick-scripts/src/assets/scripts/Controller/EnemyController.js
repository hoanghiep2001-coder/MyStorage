"use strict";
cc._RF.push(module, 'f274euVKR9EnbLmW4BUE0K6', 'EnemyController');
// scripts/EnemyController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    arrPoint: [cc.Node],
    arrEnemy: [cc.Prefab],
    indexEnemy: 0,
    indexPoint: 0,
    player: cc.Node
  },
  onLoad: function onLoad() {},
  start: function start() {},
  startCreateEnemy: function startCreateEnemy() {
    this.schedule(function () {
      this.spawnEnemy();
    }, 0.01, 22, 0);
    this.schedule(function () {
      this.spawnEnemy();
    }, 1, 20, 3);
  },
  randomPoint: function randomPoint() {
    this.indexPoint = cc.math.randomRangeInt(0, this.arrPoint.length);
  },
  randomEnemy: function randomEnemy() {
    //this.indexEnemy = 5
    this.indexEnemy = cc.math.randomRangeInt(0, this.arrEnemy.length);
  },
  spawnEnemy: function spawnEnemy() {
    if (!this.player.getComponent("PlayerController").isLive) return;
    this.randomEnemy();
    this.randomPoint();
    var enemy = cc.instantiate(this.arrEnemy[this.indexEnemy]);
    enemy.parent = this.node;
    enemy.setPosition(cc.v2(this.arrPoint[this.indexPoint].getPosition().x, this.arrPoint[this.indexPoint].getPosition().y));
  } //update (dt) {},

});

cc._RF.pop();