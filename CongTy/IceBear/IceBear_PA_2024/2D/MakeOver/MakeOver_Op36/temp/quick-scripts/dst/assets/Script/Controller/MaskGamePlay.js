
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MaskGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e413qp47tDJaKLlYhUb7NL', 'MaskGamePlay');
// Script/Controller/MaskGamePlay.js

"use strict";

var Scratchable = require("Scratchable");

cc.Class({
  "extends": cc.Component,
  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node
  },
  onLoad: function onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },
  update: function update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;

    if (this.pointClear.active && this.isTouch) {
      var point = cc.v2(this.pointClear.x + cc.winSize.width / 2, this.pointClear.y + cc.winSize.height / 2);
      this.scratchables.forEach(function (scratchable) {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwicG9pbnQiLCJ2MiIsIngiLCJ3aW5TaXplIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZm9yRWFjaCIsInNjcmF0Y2hhYmxlIiwiaXNTY3JhdGNoYWJsZSIsImlzSW5Cb3VuZCIsInNjcmF0Y2hIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVWQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGSixHQUhMO0FBUVBFLEVBQUFBLE1BUk8sb0JBUUU7QUFDUCxTQUFLQyxZQUFMLEdBQW9CLEtBQUtDLHVCQUFMLENBQTZCWCxXQUE3QixDQUFwQjtBQUNELEdBVk07QUFZUFksRUFBQUEsTUFaTyxrQkFZQUMsRUFaQSxFQVlJO0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEtBQUtOLFNBQUwsQ0FBZU8sWUFBZixDQUE0QixxQkFBNUIsRUFBbURELE9BQWxFOztBQUNBLFFBQUksS0FBS1IsVUFBTCxDQUFnQlUsTUFBaEIsSUFBMEIsS0FBS0YsT0FBbkMsRUFBNEM7QUFDMUMsVUFBSUcsS0FBSyxHQUFHZixFQUFFLENBQUNnQixFQUFILENBQ1YsS0FBS1osVUFBTCxDQUFnQmEsQ0FBaEIsR0FBb0JqQixFQUFFLENBQUNrQixPQUFILENBQVdDLEtBQVgsR0FBbUIsQ0FEN0IsRUFFVixLQUFLZixVQUFMLENBQWdCZ0IsQ0FBaEIsR0FBb0JwQixFQUFFLENBQUNrQixPQUFILENBQVdHLE1BQVgsR0FBb0IsQ0FGOUIsQ0FBWjtBQUlBLFdBQUtiLFlBQUwsQ0FBa0JjLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQXpCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHZhciBwb2ludCA9IGNjLnYyKFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueCArIGNjLndpblNpemUud2lkdGggLyAyLFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMlxuICAgICAgKTtcbiAgICAgIHRoaXMuc2NyYXRjaGFibGVzLmZvckVhY2goKHNjcmF0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGlmIChzY3JhdGNoYWJsZS5pc1NjcmF0Y2hhYmxlICYmIHNjcmF0Y2hhYmxlLmlzSW5Cb3VuZChwb2ludCkpIHtcbiAgICAgICAgICBzY3JhdGNoYWJsZS5zY3JhdGNoSG9sZShwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19