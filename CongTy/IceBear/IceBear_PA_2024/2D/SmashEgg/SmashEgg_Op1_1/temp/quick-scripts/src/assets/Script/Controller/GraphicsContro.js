"use strict";
cc._RF.push(module, '93044ZctVJBYpcfVaP3IJVr', 'GraphicsContro');
// Script/Controller/GraphicsContro.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: null,
    line_point: [cc.Vec2],
    isCanDraw: true
  },
  onLoad: function onLoad() {
    this.node.width = 320;
    this.node.height = 480;
    this.graphics = this.getComponent(cc.Graphics);
  },
  start: function start() {
    // StateForJs.isCanDraw = true;
    window.PointPos = cc.v2(-50, 100);
    window.isLineStop = false;
    this.isActiveLineLogic = false;
    this.onTouch();
  },
  update: function update() {
    if (this.rigibodyLogic && this.isActiveLineLogic) {
      if (this.rigibodyLogic.linearVelocity.x === 0 && this.rigibodyLogic.linearVelocity.y === 0) {
        window.isLineStop = true;
      }
    }
  },
  onTouch: function onTouch() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  offTouch: function offTouch() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_MOVE);
    this.node.off(cc.Node.EventType.TOUCH_END);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL);
  },
  touch_start: function touch_start(event) {
    if (!this.isCanDraw || window.isWin) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.isStartDraw = true;
    window.PointPos = pos;
    this.graphics.moveTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
  },
  touch_move: function touch_move(event) {
    if (!this.isCanDraw || window.isWin) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.PointPos = pos;
    this.graphics.lineTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));

    if (window.isTouchWall) {
      this.graphics.strokeColor = cc.Color.RED;
    } else {
      this.graphics.strokeColor = cc.Color.BLACK;
    }

    this.graphics.stroke();
  },
  touch_end: function touch_end(event) {
    if (window.isTouchWall) {
      _StateForJS.StateForJs.isCanDraw = true;
      window.isTouchWall = false;
      this.line_point = [];
      this.graphics.clear();
      return;
    }

    if (!this.isCanDraw || window.isWin) {
      return;
    }

    this.isCanDraw = false;
    window.isDraw = true;
    window.isTouchWall = false;
    this.createRigibody();
    this.offTouch();
  },
  createRigibody: function createRigibody() {
    var _this = this;

    this.rigibodyLogic = this.addComponent(cc.RigidBody);
    this.rigibodyLogic.gravityScale = 2;
    this.physicsLine = this.addComponent("MyPhysicsCollider");
    this.physicsLine.lineWidth = 9;
    this.physicsLine.points = this.line_point;
    this.physicsLine.friction = 0;
    this.physicsLine.density = 100000000;
    this.physicsLine.tag = 5;
    this.physicsLine.apply();
    this.scheduleOnce(function () {
      _this.isActiveLineLogic = true;
    }, 0.3);
  },
  checkIsCanDraw: function checkIsCanDraw(lastPoint, nowPoint) {
    return lastPoint.sub(nowPoint).mag() >= 20;
  }
});

cc._RF.pop();