
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Scratchable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e71dUgp89ACJhqvD+hiH+q', 'Scratchable');
// Script/Controller/Scratchable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDone: 0,
    isWin: cc.Boolean,
    eraserRadius: {
      type: cc.Int,
      "default": 60
    }
  },
  start: function start() {
    this.percentToWin = 0.5;
    var mask = this.getComponentInChildren(cc.Mask);
    this.graphics = mask._graphics;
    this.graphics.fillColor = cc.color(255, 255, 255, 0);
    this.reset();
  },
  calculateProgress: function calculateProgress() {
    if (!this.isScratchable) {
      return;
    }

    var hitItemCount = 0;
    this.polygonPointsList.forEach(function (item) {
      if (!item.isHit) return;
      hitItemCount += 1;
    });
    this.progress = hitItemCount / this.polygonPointsList.length;

    if (this.progress >= this.percentToWin) {
      this.isWin = true;
      this.isDone = 1;
    }

    if (this.isWin) {
      this.fillInstantly();
      this.completed = true;
      this.isScratchable = false;
      this.node.dispatchEvent(new cc.Event.EventCustom("completed", this));
    }
  },
  reset: function reset() {
    this.callbackFlag = true;
    this.graphics.clear();
    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progress = 0;
    this.completed = false;
    this.isScratchable = true;
    this.initPolygonList();
  },
  initPolygonList: function initPolygonList() {
    for (var x = 0; x < this.node.width; x += this.eraserRadius) {
      for (var y = 0; y < this.node.height; y += this.eraserRadius) {
        this.polygonPointsList.push({
          rect: cc.rect(x - this.node.width / 2, y - this.node.height / 2, this.eraserRadius, this.eraserRadius),
          isHit: false
        });
      }
    }
  },
  scratchHole: function scratchHole(pos) {
    pos = this.node.convertToNodeSpaceAR(pos);
    var stencil = this.graphics;
    var len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    this.calculateProgress();

    if (len <= 1) {
      stencil.circle(pos.x, pos.y, this.eraserRadius / 2);
      stencil.fill();
      this.polygonPointsList.forEach(function (item) {
        if (item.isHit) return;
        var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) item.isHit = true;
      });
    } else {
      var prevPos = this.tempDrawPoints[len - 2];
      var curPos = this.tempDrawPoints[len - 1];
      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = this.eraserRadius;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();
      this.polygonPointsList.forEach(function (item) {
        item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
      });
    }
  },
  resetProgress: function resetProgress() {
    this.clearInstantly();
    this.polygonPointsList = [];
    this.tempDrawPoints = [];
    this.progress = 0;
    this.initPolygonList();
  },
  isInBound: function isInBound(point) {
    return true;
  },
  clearInstantly: function clearInstantly() {
    this.graphics.clear();
  },
  fillInstantly: function fillInstantly() {
    this.graphics.moveTo(0, 0);
    this.graphics.rect(0, 0, this.node.width, this.node.height);
    this.graphics.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0E3R007QUErR1B5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBckhNO0FBdUhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBekhNO0FBMkhQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQTdITTtBQStIUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBbklNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBlcmNlbnRUb1dpbiA9IDAuNTtcbiAgICBsZXQgbWFzayA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5NYXNrKTtcbiAgICB0aGlzLmdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3JhdGNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gdGhpcy5wZXJjZW50VG9XaW4pIHtcbiAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xuICAgICAgdGhpcy5pc0RvbmUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzV2luKSB7XG4gICAgICB0aGlzLmZpbGxJbnN0YW50bHkoKTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTY3JhdGNoYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY29tcGxldGVkXCIsIHRoaXMpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrRmxhZyA9IHRydWU7XG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NyYXRjaGFibGUgPSB0cnVlO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaW5pdFBvbHlnb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm5vZGUud2lkdGg7IHggKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ub2RlLmhlaWdodDsgeSArPSB0aGlzLmVyYXNlclJhZGl1cykge1xuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoXG4gICAgICAgICAgICB4IC0gdGhpcy5ub2RlLndpZHRoIC8gMixcbiAgICAgICAgICAgIHkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5lcmFzZXJSYWRpdXNcbiAgICAgICAgICApLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNjcmF0Y2hIb2xlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmdyYXBoaWNzO1xuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xuXG4gICAgaWYgKGxlbiA8PSAxKSB7XG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIHRoaXMuZXJhc2VyUmFkaXVzIC8gMik7XG4gICAgICBzdGVuY2lsLmZpbGwoKTtcblxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHhGbGFnID1cbiAgICAgICAgICBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHlGbGFnID1cbiAgICAgICAgICBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIGl0ZW0uaXNIaXQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xuXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSB0aGlzLmVyYXNlclJhZGl1cztcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmlzSGl0ID1cbiAgICAgICAgICBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xlYXJJbnN0YW50bHkoKTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaXNJbkJvdW5kOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBjbGVhckluc3RhbnRseTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgfSxcblxuICBmaWxsSW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gIH0sXG59KTtcbiJdfQ==