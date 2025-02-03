const Scratchable = require("Scratchable");

cc.Class({
  extends: cc.Component,

  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node,
  },

  onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },

  update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;
    if (this.pointClear.active && this.isTouch) {
      var point = cc.v2(
        this.pointClear.x + cc.winSize.width / 2,
        this.pointClear.y + cc.winSize.height / 2
      );
      this.scratchables.forEach((scratchable) => {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
  },
});
