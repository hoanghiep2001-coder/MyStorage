
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/Bee');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/GraphicsContro');
require('./assets/Script/Controller/NodesController');
require('./assets/Script/Controller/PointController');
require('./assets/Script/Controller/TouchController');
require('./assets/Script/Data/StateForJS');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/MyPhysicsCollider');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsContro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93044ZctVJBYpcfVaP3IJVr', 'GraphicsContro');
// Script/Controller/GraphicsContro.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: null,
    line_point: [cc.Vec2]
  },
  onLoad: function onLoad() {
    this.node.width = 5000;
    this.node.height = 5000;
    this.graphics = this.getComponent(cc.Graphics);
  },
  start: function start() {
    window.PointPos = cc.v2(-50, 100);
    this.onTouch();
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
    if (!_StateForJS.StateForJs.isCanDraw) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.isStartDraw = true;
    window.PointPos = pos;
    this.graphics.moveTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
  },
  touch_move: function touch_move(event) {
    if (!_StateForJS.StateForJs.isCanDraw) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.PointPos = pos;
    this.graphics.lineTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
    this.updateStrokeColor();
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

    if (!_StateForJS.StateForJs.isCanDraw) {
      return;
    } // Rút gọn đường vẽ


    var simplifiedPoints = this.simplifyPath(this.line_point, 2); // Sử dụng độ tolerance phù hợp

    _StateForJS.StateForJs.isCanDraw = false;
    window.isDraw = true;
    window.isTouchWall = false;
    this.createRigibody(simplifiedPoints);
    this.offTouch();
  },
  updateStrokeColor: function updateStrokeColor() {
    if (window.isTouchWall) {
      this.graphics.strokeColor = cc.Color.RED;
    } else {
      this.graphics.strokeColor = cc.Color.BLACK;
    }
  },
  createRigibody: function createRigibody(simplifiedPoints) {
    this.rigibodyLogic = this.addComponent(cc.RigidBody);
    this.rigibodyLogic.gravityScale = 2;
    this.physicsLine = this.addComponent("MyPhysicsCollider");
    this.physicsLine.lineWidth = 7;
    this.physicsLine.points = simplifiedPoints; // Sử dụng điểm đã rút gọn

    this.physicsLine.friction = 0;
    this.physicsLine.density = 100;
    this.physicsLine.tag = 4;
    this.physicsLine.apply();
  },
  checkStraightLine: function checkStraightLine(touchPoints) {
    if (touchPoints.length < 3) {
      return false;
    }

    var A = touchPoints[touchPoints.length - 3];
    var B = touchPoints[touchPoints.length - 2];
    var C = touchPoints[touchPoints.length - 1];
    return (B.x - A.x) * (C.y - A.y) === (B.y - A.y) * (C.x - A.x);
  },
  simplifyPath: function simplifyPath(points, tolerance) {
    if (points.length < 3) return points;
    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
    points = this.simplifyDouglasPeucker(points, sqTolerance);
    return points;
  },
  simplifyDouglasPeucker: function simplifyDouglasPeucker(points, sqTolerance) {
    var len = points.length,
        ArrayConstructor = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
        markers = new ArrayConstructor(len),
        first = 0,
        last = len - 1,
        stack = [],
        newPoints = [],
        i,
        maxSqDist,
        sqDist,
        index;
    markers[first] = markers[last] = 1;

    while (last) {
      maxSqDist = 0;

      for (i = first + 1; i < last; i++) {
        sqDist = this.getSqSegDist(points[i], points[first], points[last]);

        if (sqDist > maxSqDist) {
          index = i;
          maxSqDist = sqDist;
        }
      }

      if (maxSqDist > sqTolerance) {
        markers[index] = 1;
        stack.push(first, index, index, last);
      }

      last = stack.pop();
      first = stack.pop();
    }

    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i]);
      }
    }

    return newPoints;
  },
  getSqSegDist: function getSqSegDist(p, p1, p2) {
    var x = p1.x,
        y = p1.y,
        dx = p2.x - x,
        dy = p2.y - y;

    if (dx !== 0 || dy !== 0) {
      var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }

    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
  },
  checkIsCanDraw: function checkIsCanDraw(lastPoint, nowPoint) {
    return lastPoint.sub(nowPoint).mag() >= 20;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdyYXBoaWNzIiwibGluZV9wb2ludCIsIlZlYzIiLCJvbkxvYWQiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsInN0YXJ0Iiwid2luZG93IiwiUG9pbnRQb3MiLCJ2MiIsIm9uVG91Y2giLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoX3N0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoX21vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJvZmZUb3VjaCIsIm9mZiIsImV2ZW50IiwiU3RhdGVGb3JKcyIsImlzQ2FuRHJhdyIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0TG9jYXRpb24iLCJpc1N0YXJ0RHJhdyIsIm1vdmVUbyIsIngiLCJ5IiwicHVzaCIsImxpbmVUbyIsInVwZGF0ZVN0cm9rZUNvbG9yIiwic3Ryb2tlIiwiaXNUb3VjaFdhbGwiLCJjbGVhciIsInNpbXBsaWZpZWRQb2ludHMiLCJzaW1wbGlmeVBhdGgiLCJpc0RyYXciLCJjcmVhdGVSaWdpYm9keSIsInN0cm9rZUNvbG9yIiwiQ29sb3IiLCJSRUQiLCJCTEFDSyIsInJpZ2lib2R5TG9naWMiLCJhZGRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJncmF2aXR5U2NhbGUiLCJwaHlzaWNzTGluZSIsImxpbmVXaWR0aCIsInBvaW50cyIsImZyaWN0aW9uIiwiZGVuc2l0eSIsInRhZyIsImFwcGx5IiwiY2hlY2tTdHJhaWdodExpbmUiLCJ0b3VjaFBvaW50cyIsImxlbmd0aCIsIkEiLCJCIiwiQyIsInRvbGVyYW5jZSIsInNxVG9sZXJhbmNlIiwidW5kZWZpbmVkIiwic2ltcGxpZnlEb3VnbGFzUGV1Y2tlciIsImxlbiIsIkFycmF5Q29uc3RydWN0b3IiLCJVaW50OEFycmF5IiwiQXJyYXkiLCJtYXJrZXJzIiwiZmlyc3QiLCJsYXN0Iiwic3RhY2siLCJuZXdQb2ludHMiLCJpIiwibWF4U3FEaXN0Iiwic3FEaXN0IiwiaW5kZXgiLCJnZXRTcVNlZ0Rpc3QiLCJwb3AiLCJwIiwicDEiLCJwMiIsImR4IiwiZHkiLCJ0IiwiY2hlY2tJc0NhbkRyYXciLCJsYXN0UG9pbnQiLCJub3dQb2ludCIsInN1YiIsIm1hZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRSxJQURGO0FBRVJDLElBQUFBLFVBQVUsRUFBRSxDQUFDTCxFQUFFLENBQUNNLElBQUo7QUFGSixHQUhQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUk7QUFDTCxTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsSUFBbEI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLTixRQUFMLEdBQWdCLEtBQUtPLFlBQUwsQ0FBa0JYLEVBQUUsQ0FBQ1ksUUFBckIsQ0FBaEI7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0c7QUFDSkMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCZixFQUFFLENBQUNnQixFQUFILENBQU0sQ0FBQyxFQUFQLEVBQVcsR0FBWCxDQUFsQjtBQUNBLFNBQUtDLE9BQUw7QUFDSCxHQWpCSTtBQW1CTEEsRUFBQUEsT0FuQksscUJBbUJLO0FBQ04sU0FBS1QsSUFBTCxDQUFVVSxFQUFWLENBQWFsQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0EsU0FBS2QsSUFBTCxDQUFVVSxFQUFWLENBQWFsQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQS9CLEVBQTJDLEtBQUtDLFVBQWhELEVBQTRELElBQTVEO0FBQ0EsU0FBS2hCLElBQUwsQ0FBVVUsRUFBVixDQUFhbEIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxTQUEvQixFQUEwQyxLQUFLQyxTQUEvQyxFQUEwRCxJQUExRDtBQUNBLFNBQUtsQixJQUFMLENBQVVVLEVBQVYsQ0FBYWxCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsU0FBUixDQUFrQk8sWUFBL0IsRUFBNkMsS0FBS0QsU0FBbEQsRUFBNkQsSUFBN0Q7QUFDSCxHQXhCSTtBQTBCTEUsRUFBQUEsUUExQkssc0JBMEJNO0FBQ1AsU0FBS3BCLElBQUwsQ0FBVXFCLEdBQVYsQ0FBYzdCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBaEM7QUFDQSxTQUFLYixJQUFMLENBQVVxQixHQUFWLENBQWM3QixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQWhDO0FBQ0EsU0FBS2YsSUFBTCxDQUFVcUIsR0FBVixDQUFjN0IsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxTQUFoQztBQUNBLFNBQUtqQixJQUFMLENBQVVxQixHQUFWLENBQWM3QixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JPLFlBQWhDO0FBQ0gsR0EvQkk7QUFpQ0xMLEVBQUFBLFdBakNLLHVCQWlDT1EsS0FqQ1AsRUFpQ2M7QUFDZixRQUFJLENBQUNDLHVCQUFXQyxTQUFoQixFQUEyQjtBQUN2QjtBQUNIOztBQUVELFFBQUlDLEdBQUcsR0FBRyxLQUFLekIsSUFBTCxDQUFVMEIsb0JBQVYsQ0FBK0JKLEtBQUssQ0FBQ0ssV0FBTixFQUEvQixDQUFWO0FBQ0FyQixJQUFBQSxNQUFNLENBQUNzQixXQUFQLEdBQXFCLElBQXJCO0FBQ0F0QixJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JrQixHQUFsQjtBQUNBLFNBQUs3QixRQUFMLENBQWNpQyxNQUFkLENBQXFCSixHQUFHLENBQUNLLENBQXpCLEVBQTRCTCxHQUFHLENBQUNNLENBQWhDO0FBQ0EsU0FBS2xDLFVBQUwsQ0FBZ0JtQyxJQUFoQixDQUFxQnhDLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTWlCLEdBQUcsQ0FBQ0ssQ0FBVixFQUFhTCxHQUFHLENBQUNNLENBQWpCLENBQXJCO0FBQ0gsR0EzQ0k7QUE2Q0xmLEVBQUFBLFVBN0NLLHNCQTZDTU0sS0E3Q04sRUE2Q2E7QUFDZCxRQUFJLENBQUNDLHVCQUFXQyxTQUFoQixFQUEyQjtBQUN2QjtBQUNIOztBQUVELFFBQUlDLEdBQUcsR0FBRyxLQUFLekIsSUFBTCxDQUFVMEIsb0JBQVYsQ0FBK0JKLEtBQUssQ0FBQ0ssV0FBTixFQUEvQixDQUFWO0FBQ0FyQixJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JrQixHQUFsQjtBQUNBLFNBQUs3QixRQUFMLENBQWNxQyxNQUFkLENBQXFCUixHQUFHLENBQUNLLENBQXpCLEVBQTRCTCxHQUFHLENBQUNNLENBQWhDO0FBQ0EsU0FBS2xDLFVBQUwsQ0FBZ0JtQyxJQUFoQixDQUFxQnhDLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTWlCLEdBQUcsQ0FBQ0ssQ0FBVixFQUFhTCxHQUFHLENBQUNNLENBQWpCLENBQXJCO0FBRUEsU0FBS0csaUJBQUw7QUFDQSxTQUFLdEMsUUFBTCxDQUFjdUMsTUFBZDtBQUNILEdBekRJO0FBMkRMakIsRUFBQUEsU0EzREsscUJBMkRLSSxLQTNETCxFQTJEWTtBQUNiLFFBQUloQixNQUFNLENBQUM4QixXQUFYLEVBQXdCO0FBQ3BCYiw2QkFBV0MsU0FBWCxHQUF1QixJQUF2QjtBQUNBbEIsTUFBQUEsTUFBTSxDQUFDOEIsV0FBUCxHQUFxQixLQUFyQjtBQUNBLFdBQUt2QyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjeUMsS0FBZDtBQUNBO0FBQ0g7O0FBRUQsUUFBSSxDQUFDZCx1QkFBV0MsU0FBaEIsRUFBMkI7QUFDdkI7QUFDSCxLQVhZLENBYWI7OztBQUNBLFFBQUljLGdCQUFnQixHQUFHLEtBQUtDLFlBQUwsQ0FBa0IsS0FBSzFDLFVBQXZCLEVBQW1DLENBQW5DLENBQXZCLENBZGEsQ0Fja0Q7O0FBRS9EMEIsMkJBQVdDLFNBQVgsR0FBdUIsS0FBdkI7QUFDQWxCLElBQUFBLE1BQU0sQ0FBQ2tDLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQWxDLElBQUFBLE1BQU0sQ0FBQzhCLFdBQVAsR0FBcUIsS0FBckI7QUFDQSxTQUFLSyxjQUFMLENBQW9CSCxnQkFBcEI7QUFDQSxTQUFLbEIsUUFBTDtBQUNILEdBaEZJO0FBa0ZMYyxFQUFBQSxpQkFsRkssK0JBa0ZlO0FBQ2hCLFFBQUk1QixNQUFNLENBQUM4QixXQUFYLEVBQXdCO0FBQ3BCLFdBQUt4QyxRQUFMLENBQWM4QyxXQUFkLEdBQTRCbEQsRUFBRSxDQUFDbUQsS0FBSCxDQUFTQyxHQUFyQztBQUNILEtBRkQsTUFFTztBQUNILFdBQUtoRCxRQUFMLENBQWM4QyxXQUFkLEdBQTRCbEQsRUFBRSxDQUFDbUQsS0FBSCxDQUFTRSxLQUFyQztBQUNIO0FBQ0osR0F4Rkk7QUEwRkxKLEVBQUFBLGNBMUZLLDBCQTBGVUgsZ0JBMUZWLEVBMEY0QjtBQUM3QixTQUFLUSxhQUFMLEdBQXFCLEtBQUtDLFlBQUwsQ0FBa0J2RCxFQUFFLENBQUN3RCxTQUFyQixDQUFyQjtBQUNBLFNBQUtGLGFBQUwsQ0FBbUJHLFlBQW5CLEdBQWtDLENBQWxDO0FBRUEsU0FBS0MsV0FBTCxHQUFtQixLQUFLSCxZQUFMLENBQWtCLG1CQUFsQixDQUFuQjtBQUNBLFNBQUtHLFdBQUwsQ0FBaUJDLFNBQWpCLEdBQTZCLENBQTdCO0FBQ0EsU0FBS0QsV0FBTCxDQUFpQkUsTUFBakIsR0FBMEJkLGdCQUExQixDQU42QixDQU1nQjs7QUFDN0MsU0FBS1ksV0FBTCxDQUFpQkcsUUFBakIsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLSCxXQUFMLENBQWlCSSxPQUFqQixHQUEyQixHQUEzQjtBQUNBLFNBQUtKLFdBQUwsQ0FBaUJLLEdBQWpCLEdBQXVCLENBQXZCO0FBQ0EsU0FBS0wsV0FBTCxDQUFpQk0sS0FBakI7QUFDSCxHQXJHSTtBQXVHTEMsRUFBQUEsaUJBdkdLLDZCQXVHYUMsV0F2R2IsRUF1RzBCO0FBQzNCLFFBQUlBLFdBQVcsQ0FBQ0MsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QixhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJQyxDQUFDLEdBQUdGLFdBQVcsQ0FBQ0EsV0FBVyxDQUFDQyxNQUFaLEdBQXFCLENBQXRCLENBQW5CO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSCxXQUFXLENBQUNBLFdBQVcsQ0FBQ0MsTUFBWixHQUFxQixDQUF0QixDQUFuQjtBQUNBLFFBQUlHLENBQUMsR0FBR0osV0FBVyxDQUFDQSxXQUFXLENBQUNDLE1BQVosR0FBcUIsQ0FBdEIsQ0FBbkI7QUFFQSxXQUFPLENBQUNFLENBQUMsQ0FBQy9CLENBQUYsR0FBTThCLENBQUMsQ0FBQzlCLENBQVQsS0FBZWdDLENBQUMsQ0FBQy9CLENBQUYsR0FBTTZCLENBQUMsQ0FBQzdCLENBQXZCLE1BQThCLENBQUM4QixDQUFDLENBQUM5QixDQUFGLEdBQU02QixDQUFDLENBQUM3QixDQUFULEtBQWUrQixDQUFDLENBQUNoQyxDQUFGLEdBQU04QixDQUFDLENBQUM5QixDQUF2QixDQUFyQztBQUNILEdBakhJO0FBbUhMUyxFQUFBQSxZQW5ISyx3QkFtSFFhLE1BbkhSLEVBbUhnQlcsU0FuSGhCLEVBbUgyQjtBQUM1QixRQUFJWCxNQUFNLENBQUNPLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUIsT0FBT1AsTUFBUDtBQUV2QixRQUFJWSxXQUFXLEdBQUdELFNBQVMsS0FBS0UsU0FBZCxHQUEwQkYsU0FBUyxHQUFHQSxTQUF0QyxHQUFrRCxDQUFwRTtBQUNBWCxJQUFBQSxNQUFNLEdBQUcsS0FBS2Msc0JBQUwsQ0FBNEJkLE1BQTVCLEVBQW9DWSxXQUFwQyxDQUFUO0FBRUEsV0FBT1osTUFBUDtBQUNILEdBMUhJO0FBNEhMYyxFQUFBQSxzQkE1SEssa0NBNEhrQmQsTUE1SGxCLEVBNEgwQlksV0E1SDFCLEVBNEh1QztBQUN4QyxRQUFJRyxHQUFHLEdBQUdmLE1BQU0sQ0FBQ08sTUFBakI7QUFBQSxRQUNJUyxnQkFBZ0IsR0FBRyxPQUFPQyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DQSxVQUFwQyxHQUFpREMsS0FEeEU7QUFBQSxRQUVJQyxPQUFPLEdBQUcsSUFBSUgsZ0JBQUosQ0FBcUJELEdBQXJCLENBRmQ7QUFBQSxRQUdJSyxLQUFLLEdBQUcsQ0FIWjtBQUFBLFFBSUlDLElBQUksR0FBR04sR0FBRyxHQUFHLENBSmpCO0FBQUEsUUFLSU8sS0FBSyxHQUFHLEVBTFo7QUFBQSxRQU1JQyxTQUFTLEdBQUcsRUFOaEI7QUFBQSxRQU9JQyxDQVBKO0FBQUEsUUFPT0MsU0FQUDtBQUFBLFFBT2tCQyxNQVBsQjtBQUFBLFFBTzBCQyxLQVAxQjtBQVNBUixJQUFBQSxPQUFPLENBQUNDLEtBQUQsQ0FBUCxHQUFpQkQsT0FBTyxDQUFDRSxJQUFELENBQVAsR0FBZ0IsQ0FBakM7O0FBRUEsV0FBT0EsSUFBUCxFQUFhO0FBQ1RJLE1BQUFBLFNBQVMsR0FBRyxDQUFaOztBQUVBLFdBQUtELENBQUMsR0FBR0osS0FBSyxHQUFHLENBQWpCLEVBQW9CSSxDQUFDLEdBQUdILElBQXhCLEVBQThCRyxDQUFDLEVBQS9CLEVBQW1DO0FBQy9CRSxRQUFBQSxNQUFNLEdBQUcsS0FBS0UsWUFBTCxDQUFrQjVCLE1BQU0sQ0FBQ3dCLENBQUQsQ0FBeEIsRUFBNkJ4QixNQUFNLENBQUNvQixLQUFELENBQW5DLEVBQTRDcEIsTUFBTSxDQUFDcUIsSUFBRCxDQUFsRCxDQUFUOztBQUVBLFlBQUlLLE1BQU0sR0FBR0QsU0FBYixFQUF3QjtBQUNwQkUsVUFBQUEsS0FBSyxHQUFHSCxDQUFSO0FBQ0FDLFVBQUFBLFNBQVMsR0FBR0MsTUFBWjtBQUNIO0FBQ0o7O0FBRUQsVUFBSUQsU0FBUyxHQUFHYixXQUFoQixFQUE2QjtBQUN6Qk8sUUFBQUEsT0FBTyxDQUFDUSxLQUFELENBQVAsR0FBaUIsQ0FBakI7QUFDQUwsUUFBQUEsS0FBSyxDQUFDMUMsSUFBTixDQUFXd0MsS0FBWCxFQUFrQk8sS0FBbEIsRUFBeUJBLEtBQXpCLEVBQWdDTixJQUFoQztBQUNIOztBQUVEQSxNQUFBQSxJQUFJLEdBQUdDLEtBQUssQ0FBQ08sR0FBTixFQUFQO0FBQ0FULE1BQUFBLEtBQUssR0FBR0UsS0FBSyxDQUFDTyxHQUFOLEVBQVI7QUFDSDs7QUFFRCxTQUFLTCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdULEdBQWhCLEVBQXFCUyxDQUFDLEVBQXRCLEVBQTBCO0FBQ3RCLFVBQUlMLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFYLEVBQWdCO0FBQ1pELFFBQUFBLFNBQVMsQ0FBQzNDLElBQVYsQ0FBZW9CLE1BQU0sQ0FBQ3dCLENBQUQsQ0FBckI7QUFDSDtBQUNKOztBQUVELFdBQU9ELFNBQVA7QUFDSCxHQXBLSTtBQXNLTEssRUFBQUEsWUF0S0ssd0JBc0tRRSxDQXRLUixFQXNLV0MsRUF0S1gsRUFzS2VDLEVBdEtmLEVBc0ttQjtBQUNwQixRQUFJdEQsQ0FBQyxHQUFHcUQsRUFBRSxDQUFDckQsQ0FBWDtBQUFBLFFBQ0lDLENBQUMsR0FBR29ELEVBQUUsQ0FBQ3BELENBRFg7QUFBQSxRQUVJc0QsRUFBRSxHQUFHRCxFQUFFLENBQUN0RCxDQUFILEdBQU9BLENBRmhCO0FBQUEsUUFHSXdELEVBQUUsR0FBR0YsRUFBRSxDQUFDckQsQ0FBSCxHQUFPQSxDQUhoQjs7QUFLQSxRQUFJc0QsRUFBRSxLQUFLLENBQVAsSUFBWUMsRUFBRSxLQUFLLENBQXZCLEVBQTBCO0FBQ3RCLFVBQUlDLENBQUMsR0FBRyxDQUFDLENBQUNMLENBQUMsQ0FBQ3BELENBQUYsR0FBTUEsQ0FBUCxJQUFZdUQsRUFBWixHQUFpQixDQUFDSCxDQUFDLENBQUNuRCxDQUFGLEdBQU1BLENBQVAsSUFBWXVELEVBQTlCLEtBQXFDRCxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUFwRCxDQUFSOztBQUVBLFVBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUHpELFFBQUFBLENBQUMsR0FBR3NELEVBQUUsQ0FBQ3RELENBQVA7QUFDQUMsUUFBQUEsQ0FBQyxHQUFHcUQsRUFBRSxDQUFDckQsQ0FBUDtBQUNILE9BSEQsTUFHTyxJQUFJd0QsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNkekQsUUFBQUEsQ0FBQyxJQUFJdUQsRUFBRSxHQUFHRSxDQUFWO0FBQ0F4RCxRQUFBQSxDQUFDLElBQUl1RCxFQUFFLEdBQUdDLENBQVY7QUFDSDtBQUNKOztBQUVERixJQUFBQSxFQUFFLEdBQUdILENBQUMsQ0FBQ3BELENBQUYsR0FBTUEsQ0FBWDtBQUNBd0QsSUFBQUEsRUFBRSxHQUFHSixDQUFDLENBQUNuRCxDQUFGLEdBQU1BLENBQVg7QUFFQSxXQUFPc0QsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBdEI7QUFDSCxHQTVMSTtBQThMTEUsRUFBQUEsY0E5TEssMEJBOExVQyxTQTlMVixFQThMcUJDLFFBOUxyQixFQThMK0I7QUFDaEMsV0FBT0QsU0FBUyxDQUFDRSxHQUFWLENBQWNELFFBQWQsRUFBd0JFLEdBQXhCLE1BQWlDLEVBQXhDO0FBQ0g7QUFoTUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBncmFwaGljczogbnVsbCxcclxuICAgICAgICBsaW5lX3BvaW50OiBbY2MuVmVjMl0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSA1MDAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHdpbmRvdy5Qb2ludFBvcyA9IGNjLnYyKC01MCwgMTAwKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2goKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uVG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaF9tb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvZmZUb3VjaCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvdWNoX3N0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFTdGF0ZUZvckpzLmlzQ2FuRHJhdykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHdpbmRvdy5pc1N0YXJ0RHJhdyA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LlBvaW50UG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5saW5lX3BvaW50LnB1c2goY2MudjIocG9zLngsIHBvcy55KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvdWNoX21vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIVN0YXRlRm9ySnMuaXNDYW5EcmF3KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgd2luZG93LlBvaW50UG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5saW5lX3BvaW50LnB1c2goY2MudjIocG9zLngsIHBvcy55KSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3Ryb2tlQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3VjaF9lbmQoZXZlbnQpIHtcclxuICAgICAgICBpZiAod2luZG93LmlzVG91Y2hXYWxsKSB7XHJcbiAgICAgICAgICAgIFN0YXRlRm9ySnMuaXNDYW5EcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGluZV9wb2ludCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUsO6dCBn4buNbiDEkcaw4budbmcgduG6vVxyXG4gICAgICAgIGxldCBzaW1wbGlmaWVkUG9pbnRzID0gdGhpcy5zaW1wbGlmeVBhdGgodGhpcy5saW5lX3BvaW50LCAyKTsgIC8vIFPhu60gZOG7pW5nIMSR4buZIHRvbGVyYW5jZSBwaMO5IGjhu6NwXHJcblxyXG4gICAgICAgIFN0YXRlRm9ySnMuaXNDYW5EcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSaWdpYm9keShzaW1wbGlmaWVkUG9pbnRzKTtcclxuICAgICAgICB0aGlzLm9mZlRvdWNoKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVN0cm9rZUNvbG9yKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaXNUb3VjaFdhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVSaWdpYm9keShzaW1wbGlmaWVkUG9pbnRzKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpYm9keUxvZ2ljID0gdGhpcy5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLnJpZ2lib2R5TG9naWMuZ3Jhdml0eVNjYWxlID0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZSA9IHRoaXMuYWRkQ29tcG9uZW50KFwiTXlQaHlzaWNzQ29sbGlkZXJcIik7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5saW5lV2lkdGggPSA3O1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUucG9pbnRzID0gc2ltcGxpZmllZFBvaW50czsgIC8vIFPhu60gZOG7pW5nIMSRaeG7g20gxJHDoyByw7p0IGfhu41uXHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5mcmljdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5kZW5zaXR5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUudGFnID0gNDtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmFwcGx5KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrU3RyYWlnaHRMaW5lKHRvdWNoUG9pbnRzKSB7XHJcbiAgICAgICAgaWYgKHRvdWNoUG9pbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IEEgPSB0b3VjaFBvaW50c1t0b3VjaFBvaW50cy5sZW5ndGggLSAzXTtcclxuICAgICAgICBsZXQgQiA9IHRvdWNoUG9pbnRzW3RvdWNoUG9pbnRzLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgIGxldCBDID0gdG91Y2hQb2ludHNbdG91Y2hQb2ludHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIHJldHVybiAoQi54IC0gQS54KSAqIChDLnkgLSBBLnkpID09PSAoQi55IC0gQS55KSAqIChDLnggLSBBLngpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaW1wbGlmeVBhdGgocG9pbnRzLCB0b2xlcmFuY2UpIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDMpIHJldHVybiBwb2ludHM7XHJcblxyXG4gICAgICAgIGxldCBzcVRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPT0gdW5kZWZpbmVkID8gdG9sZXJhbmNlICogdG9sZXJhbmNlIDogMTtcclxuICAgICAgICBwb2ludHMgPSB0aGlzLnNpbXBsaWZ5RG91Z2xhc1BldWNrZXIocG9pbnRzLCBzcVRvbGVyYW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9LFxyXG5cclxuICAgIHNpbXBsaWZ5RG91Z2xhc1BldWNrZXIocG9pbnRzLCBzcVRvbGVyYW5jZSkge1xyXG4gICAgICAgIGxldCBsZW4gPSBwb2ludHMubGVuZ3RoLFxyXG4gICAgICAgICAgICBBcnJheUNvbnN0cnVjdG9yID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5LFxyXG4gICAgICAgICAgICBtYXJrZXJzID0gbmV3IEFycmF5Q29uc3RydWN0b3IobGVuKSxcclxuICAgICAgICAgICAgZmlyc3QgPSAwLFxyXG4gICAgICAgICAgICBsYXN0ID0gbGVuIC0gMSxcclxuICAgICAgICAgICAgc3RhY2sgPSBbXSxcclxuICAgICAgICAgICAgbmV3UG9pbnRzID0gW10sXHJcbiAgICAgICAgICAgIGksIG1heFNxRGlzdCwgc3FEaXN0LCBpbmRleDtcclxuXHJcbiAgICAgICAgbWFya2Vyc1tmaXJzdF0gPSBtYXJrZXJzW2xhc3RdID0gMTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxhc3QpIHtcclxuICAgICAgICAgICAgbWF4U3FEaXN0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IGZpcnN0ICsgMTsgaSA8IGxhc3Q7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3FEaXN0ID0gdGhpcy5nZXRTcVNlZ0Rpc3QocG9pbnRzW2ldLCBwb2ludHNbZmlyc3RdLCBwb2ludHNbbGFzdF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcURpc3QgPiBtYXhTcURpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4U3FEaXN0ID0gc3FEaXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWF4U3FEaXN0ID4gc3FUb2xlcmFuY2UpIHtcclxuICAgICAgICAgICAgICAgIG1hcmtlcnNbaW5kZXhdID0gMTtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goZmlyc3QsIGluZGV4LCBpbmRleCwgbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhc3QgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgZmlyc3QgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWFya2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1BvaW50cztcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3FTZWdEaXN0KHAsIHAxLCBwMikge1xyXG4gICAgICAgIGxldCB4ID0gcDEueCxcclxuICAgICAgICAgICAgeSA9IHAxLnksXHJcbiAgICAgICAgICAgIGR4ID0gcDIueCAtIHgsXHJcbiAgICAgICAgICAgIGR5ID0gcDIueSAtIHk7XHJcblxyXG4gICAgICAgIGlmIChkeCAhPT0gMCB8fCBkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdCA9ICgocC54IC0geCkgKiBkeCArIChwLnkgLSB5KSAqIGR5KSAvIChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHggPSBwMi54O1xyXG4gICAgICAgICAgICAgICAgeSA9IHAyLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHggKz0gZHggKiB0O1xyXG4gICAgICAgICAgICAgICAgeSArPSBkeSAqIHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGR4ID0gcC54IC0geDtcclxuICAgICAgICBkeSA9IHAueSAtIHk7XHJcblxyXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tJc0NhbkRyYXcobGFzdFBvaW50LCBub3dQb2ludCkge1xyXG4gICAgICAgIHJldHVybiBsYXN0UG9pbnQuc3ViKG5vd1BvaW50KS5tYWcoKSA+PSAyMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/StateForJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '658d5P3MUBBApXFkwazlx6Z', 'StateForJS');
// Script/Data/StateForJS.js

"use strict";

exports.__esModule = true;
exports.StateForJs = void 0;
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;

var StateForJs = function StateForJs() {};

exports.StateForJs = StateForJs;
StateForJs.isCanDraw = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxTdGF0ZUZvckpTLmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7O0lBQ2FDOzs7QUFBQUEsV0FDRkMsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGNsYXNzIFN0YXRlRm9ySnMge1xyXG4gICAgc3RhdGljIGlzQ2FuRHJhdyA9IHRydWU7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/MyPhysicsCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16fa2jbwqRENLjduRsp+GPv', 'MyPhysicsCollider');
// Script/Plugin/MyPhysicsCollider.js

"use strict";

var MyPhysicsCollider = cc.Class({
  "extends": cc.PhysicsCollider,
  editor: {
    menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Polygon',
    requireComponent: cc.RigidBody
  },
  properties: {
    lineWidth: 10,
    points: [cc.Vec2]
  },
  _createShape: function _createShape(scale) {
    var shapes = [];
    var polys = this.points;
    var offset = this.offset;
    var polyIdx = 0;

    for (var i = 0; i < polys.length - 1; i++) {
      var posBegin = polys[i];
      var posEnd = polys[i + 1];
      var linelen = posBegin.sub(posEnd).mag();
      var angle = Math.atan2(posEnd.y - posBegin.y, posEnd.x - posBegin.x) - Math.PI / 2;
      var midPos = posBegin.add(posEnd).mul(0.5);
      var shape = new b2.PolygonShape();

      if (shape) {
        shape.SetAsBox(this.lineWidth / 2 / 32, linelen / 2 / 32, new b2.Vec2(midPos.x / 32, midPos.y / 32), angle);
        shapes.push(shape);
      }
    }

    return shapes;
  }
});
module.exports = MyPhysicsCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXE15UGh5c2ljc0NvbGxpZGVyLmpzIl0sIm5hbWVzIjpbIk15UGh5c2ljc0NvbGxpZGVyIiwiY2MiLCJDbGFzcyIsIlBoeXNpY3NDb2xsaWRlciIsImVkaXRvciIsIm1lbnUiLCJDQ19FRElUT1IiLCJyZXF1aXJlQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwicHJvcGVydGllcyIsImxpbmVXaWR0aCIsInBvaW50cyIsIlZlYzIiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNoYXBlcyIsInBvbHlzIiwib2Zmc2V0IiwicG9seUlkeCIsImkiLCJsZW5ndGgiLCJwb3NCZWdpbiIsInBvc0VuZCIsImxpbmVsZW4iLCJzdWIiLCJtYWciLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsInkiLCJ4IiwiUEkiLCJtaWRQb3MiLCJhZGQiLCJtdWwiLCJzaGFwZSIsImIyIiwiUG9seWdvblNoYXBlIiwiU2V0QXNCb3giLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDN0IsYUFBU0QsRUFBRSxDQUFDRSxlQURpQjtBQUU3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsU0FBUyxJQUFJLG1EQURmO0FBRUpDLElBQUFBLGdCQUFnQixFQUFFTixFQUFFLENBQUNPO0FBRmpCLEdBRnFCO0FBTTdCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFLEVBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csSUFBSjtBQUZBLEdBTmlCO0FBVTdCQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVVDLEtBQVYsRUFBaUI7QUFDM0IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0wsTUFBakI7QUFDQSxRQUFJTSxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFFQSxRQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQW5DLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFVBQUlFLFFBQVEsR0FBR0wsS0FBSyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHTixLQUFLLENBQUNHLENBQUMsR0FBRyxDQUFMLENBQWxCO0FBQ0EsVUFBSUksT0FBTyxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYUYsTUFBYixFQUFxQkcsR0FBckIsRUFBZDtBQUVBLFVBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLE1BQU0sQ0FBQ08sQ0FBUCxHQUFXUixRQUFRLENBQUNRLENBQS9CLEVBQWtDUCxNQUFNLENBQUNRLENBQVAsR0FBV1QsUUFBUSxDQUFDUyxDQUF0RCxJQUEyREgsSUFBSSxDQUFDSSxFQUFMLEdBQVUsQ0FBakY7QUFFQSxVQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhWCxNQUFiLEVBQXFCWSxHQUFyQixDQUF5QixHQUF6QixDQUFiO0FBRUEsVUFBSUMsS0FBSyxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsWUFBUCxFQUFaOztBQUVBLFVBQUlGLEtBQUosRUFBVztBQUNQQSxRQUFBQSxLQUFLLENBQUNHLFFBQU4sQ0FBZSxLQUFLNUIsU0FBTCxHQUFpQixDQUFqQixHQUFxQixFQUFwQyxFQUF3Q2EsT0FBTyxHQUFHLENBQVYsR0FBYyxFQUF0RCxFQUEwRCxJQUFJYSxFQUFFLENBQUN4QixJQUFQLENBQVlvQixNQUFNLENBQUNGLENBQVAsR0FBVyxFQUF2QixFQUEyQkUsTUFBTSxDQUFDSCxDQUFQLEdBQVcsRUFBdEMsQ0FBMUQsRUFBcUdILEtBQXJHO0FBRUFYLFFBQUFBLE1BQU0sQ0FBQ3dCLElBQVAsQ0FBWUosS0FBWjtBQUNIO0FBQ0o7O0FBRUQsV0FBT3BCLE1BQVA7QUFDSDtBQXBDNEIsQ0FBVCxDQUF4QjtBQXVDQXlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLGlCQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBNeVBoeXNpY3NDb2xsaWRlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlBoeXNpY3NDb2xsaWRlcixcclxuICAgIGVkaXRvcjoge1xyXG4gICAgICAgIG1lbnU6IENDX0VESVRPUiAmJiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvQ29sbGlkZXIvUG9seWdvbicsXHJcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpbmVXaWR0aDogMTAsXHJcbiAgICAgICAgcG9pbnRzOiBbY2MuVmVjMl1cclxuICAgIH0sXHJcbiAgICBfY3JlYXRlU2hhcGU6IGZ1bmN0aW9uIChzY2FsZSkge1xyXG4gICAgICAgIHZhciBzaGFwZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHBvbHlzID0gdGhpcy5wb2ludHM7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xyXG5cclxuICAgICAgICB2YXIgcG9seUlkeCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvc0JlZ2luID0gcG9seXNbaV07XHJcbiAgICAgICAgICAgIHZhciBwb3NFbmQgPSBwb2x5c1tpICsgMV07XHJcbiAgICAgICAgICAgIHZhciBsaW5lbGVuID0gcG9zQmVnaW4uc3ViKHBvc0VuZCkubWFnKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHBvc0VuZC55IC0gcG9zQmVnaW4ueSwgcG9zRW5kLnggLSBwb3NCZWdpbi54KSAtIE1hdGguUEkgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pZFBvcyA9IHBvc0JlZ2luLmFkZChwb3NFbmQpLm11bCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNoYXBlID0gbmV3IGIyLlBvbHlnb25TaGFwZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFwZS5TZXRBc0JveCh0aGlzLmxpbmVXaWR0aCAvIDIgLyAzMiwgbGluZWxlbiAvIDIgLyAzMiwgbmV3IGIyLlZlYzIobWlkUG9zLnggLyAzMiwgbWlkUG9zLnkgLyAzMiksIGFuZ2xlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hhcGVzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXlQaHlzaWNzQ29sbGlkZXI7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Spine_Bees = [];
        _this.Spine_Character = null;
        // Node
        _this.FakeCharacters = [];
        _this.HideMask = null;
        _this.LineContainer = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        _this.Hint = null;
        // PreFab
        _this.Prefab_Graphics = null;
        return _this;
    }
    NodesController.prototype.start = function () {
        constants_1.Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
        constants_1.Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
        constants_1.Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
    };
    __decorate([
        property([sp.Skeleton])
    ], NodesController.prototype, "Spine_Bees", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesController.prototype, "Spine_Character", void 0);
    __decorate([
        property([cc.Node])
    ], NodesController.prototype, "FakeCharacters", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "LineContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "point_checkCollide", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_button", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Hint", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdkNHLFlBQVk7UUFFWixnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFFL0IscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBR3BDLE9BQU87UUFFUCxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFTO1FBRVQscUJBQWUsR0FBYyxJQUFJLENBQUM7O0lBT3RDLENBQUM7SUFMYSwrQkFBSyxHQUFmO1FBQ0kscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt1REFDTztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzREQUNjO0lBS3BDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzJEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRztJQUlyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBakNqQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0NuQztJQUFELHNCQUFDO0NBeENELEFBd0NDLENBeEM0QyxFQUFFLENBQUMsU0FBUyxHQXdDeEQ7a0JBeENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXHJcbiAgICBTcGluZV9CZWVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9DaGFyYWN0ZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEZha2VDaGFyYWN0ZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaW5lQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRfY2hlY2tDb2xsaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRW52aXJvbm1lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcmVGYWJcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5DaGFyX1BvaW50MSA9IHRoaXMuRmFrZUNoYXJhY3RlcnNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBDb25zdGFudHMuQ2hhcl9Qb2ludDIgPSB0aGlzLkZha2VDaGFyYWN0ZXJzWzFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJfUG9pbnQzID0gdGhpcy5GYWtlQ2hhcmFjdGVyc1syXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'TouchController');
// Script/Controller/TouchController.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab,
    nodesController: cc.Node,
    audioManager: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start() {
    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
  },
  touch_end: function touch_end(event) {
    if (!_StateForJS.StateForJs.isCanDraw) {
      this.offEvent();
      this.createGraphics();
    }

    this.audioManager.getComponent("AudioManager").stopSound("drawSound");
  },
  offEvent: function offEvent() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_END);
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJvbkxvYWQiLCJ3aW5kb3ciLCJpc0RyYXciLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoX3N0YXJ0IiwiVE9VQ0hfRU5EIiwidG91Y2hfZW5kIiwiVE9VQ0hfQ0FOQ0VMIiwic3RhcnQiLCJjcmVhdGVHcmFwaGljcyIsImdldENvbXBvbmVudCIsInBsYXlTb3VuZCIsImRyYXdTb3VuZCIsImxvb3AiLCJldmVudCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJvZmZFdmVudCIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTztBQUhULEdBSlA7QUFXTEUsRUFBQUEsTUFYSyxvQkFXSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWIsRUFBRSxDQUFDTyxJQUFILENBQVFPLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFiLEVBQUUsQ0FBQ08sSUFBSCxDQUFRTyxTQUFSLENBQWtCRyxTQUEvQixFQUEwQyxLQUFLQyxTQUEvQyxFQUEwRCxJQUExRDtBQUNBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhYixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkssWUFBL0IsRUFBNkMsS0FBS0QsU0FBbEQsRUFBNkQsSUFBN0Q7QUFDSCxHQWhCSTtBQW1CTEUsRUFBQUEsS0FuQkssbUJBbUJHO0FBQ0osU0FBS0MsY0FBTDtBQUNILEdBckJJO0FBd0JMTCxFQUFBQSxXQXhCSyx5QkF3QlM7QUFDVixTQUFLUixZQUFMLENBQWtCYyxZQUFsQixDQUErQixjQUEvQixFQUErQ0MsU0FBL0MsQ0FBeUQsV0FBekQ7QUFDQSxTQUFLZixZQUFMLENBQWtCYyxZQUFsQixDQUErQixjQUEvQixFQUErQ0UsU0FBL0MsQ0FBeURDLElBQXpELEdBQWdFLElBQWhFO0FBQ0gsR0EzQkk7QUE4QkxQLEVBQUFBLFNBQVMsRUFBRSxtQkFBVVEsS0FBVixFQUFpQjtBQUN4QixRQUFHLENBQUNDLHVCQUFXQyxTQUFmLEVBQTBCO0FBQ3RCLFdBQUtDLFFBQUw7QUFDQSxXQUFLUixjQUFMO0FBQ0g7O0FBQ0QsU0FBS2IsWUFBTCxDQUFrQmMsWUFBbEIsQ0FBK0IsY0FBL0IsRUFBK0NRLFNBQS9DLENBQXlELFdBQXpEO0FBQ0gsR0FwQ0k7QUF1Q0xELEVBQUFBLFFBdkNLLHNCQXVDTTtBQUNQLFNBQUtqQixJQUFMLENBQVVtQixHQUFWLENBQWMvQixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkMsV0FBaEM7QUFDQSxTQUFLSCxJQUFMLENBQVVtQixHQUFWLENBQWMvQixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkcsU0FBaEM7QUFDSCxHQTFDSTtBQTZDTEksRUFBQUEsY0E3Q0ssNEJBNkNZO0FBQ2IsUUFBSVcsYUFBYSxHQUFHaEMsRUFBRSxDQUFDaUMsV0FBSCxDQUFlLEtBQUs3QixRQUFwQixDQUFwQjtBQUNBNEIsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBS3RCLElBQUwsQ0FBVXVCLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUFqREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlTb3VuZChcImRyYXdTb3VuZFwiKTtcclxuICAgICAgICB0aGlzLmF1ZGlvTWFuYWdlci5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikuZHJhd1NvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZighU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5zdG9wU291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjcmVhdGVHcmFwaGljcygpIHtcclxuICAgICAgICB2YXIgZ3JhcGhpY3Nfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzX25vZGUueCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdyYXBoaWNzX25vZGUpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
// Script/Plugin/Responsive.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var NodesController_1 = require("../Controller/NodesController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesController = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        // } else {    
        //     // Ipad
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesController_1.default)
    ], Responsive.prototype, "NodesController", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTREO0FBQzVELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZHQztRQTNHRyxZQUFZO1FBRVoscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBS3hDLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQTZGaEQsQ0FBQztJQTNGYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUVJLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO1lBQ3BFLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sd0NBQW1CLEdBQTNCO1FBQ0ksSUFBRyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxRCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCO1FBQ0ksSUFBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUQsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBRUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0lBRzNELENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFHdkQsMkVBQTJFO1FBQzNFLHdDQUF3QztRQUV4QyxlQUFlO1FBQ2YsY0FBYztRQUVkLElBQUk7SUFFUixDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBSnZCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RzlCO0lBQUQsaUJBQUM7Q0E3R0QsQUE2R0MsQ0E3R3VDLEVBQUUsQ0FBQyxTQUFTLEdBNkduRDtrQkE3R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuICAgICAgXHJcblxyXG4gICAgICAgIC8vIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNykge1xyXG4gICAgICAgIC8vICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXNcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9IGVsc2UgeyAgICBcclxuICAgICAgICAvLyAgICAgLy8gSXBhZFxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["successSound"] = "successSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["loseSound"] = "loseSound";
    SoundTrack["stingSound"] = "stingSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.currentPosition = null;
    Constants.CharacterPos = null;
    Constants.Char_Point1 = null;
    Constants.Char_Point2 = null;
    Constants.Char_Point3 = null;
    Constants.isHit = false;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFVSjtBQVZELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0lBQ2pDLG1DQUFxQixDQUFBO0lBQ3JCLHVDQUF5QixDQUFBO0lBQ3pCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0FBQzdCLENBQUMsRUFWSSxVQUFVLEtBQVYsVUFBVSxRQVVkO0FBR0Q7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLFlBQVk7SUFDTCwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIseUJBQWUsR0FBWSxJQUFJLENBQUM7SUFDaEMsc0JBQVksR0FBWSxJQUFJLENBQUM7SUFDN0IscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsZUFBSyxHQUFZLEtBQUssQ0FBQztJQUU5QixRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFDdEQsZ0JBQUM7Q0E1QkQsQUE0QkMsSUFBQTtBQTVCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBkcmF3U291bmQgPSBcImRyYXdTb3VuZFwiLFxyXG4gICAgc3VjY2Vzc1NvdW5kID0gXCJzdWNjZXNzU291bmRcIixcclxuICAgIG1vdmVTb3VuZCA9IFwibW92ZVNvdW5kXCIsXHJcbiAgICBmaXJld29ya3NTb3VuZCA9IFwiZmlyZXdvcmtzU291bmRcIixcclxuICAgIGNyeVNvdW5kID0gXCJjcnlTb3VuZFwiLFxyXG4gICAgY2xpY2tTb3VuZCA9IFwiY2xpY2tTb3VuZFwiLFxyXG4gICAgbG9zZVNvdW5kID0gXCJsb3NlU291bmRcIixcclxuICAgIHN0aW5nU291bmQgPSBcInN0aW5nU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNDbGlja0dhbWVTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIENoYXJhY3RlclBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgQ2hhcl9Qb2ludDE6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIENoYXJfUG9pbnQyOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBDaGFyX1BvaW50MzogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgaXNIaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxufVxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/PointController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80da3u/zVdMR5yti8YdVBri', 'PointController');
// Script/Controller/PointController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointCollider = /** @class */ (function (_super) {
    __extends(PointCollider, _super);
    function PointCollider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.rigidbody = null;
        return _this;
    }
    PointCollider.prototype.start = function () {
        this.beginContact();
    };
    PointCollider.prototype.beginContact = function () {
        var _this = this;
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 0) {
                _this.GameController.installHandle();
                window.isTouchWall = true;
            }
        };
    };
    PointCollider.prototype.update = function (dt) {
        this.node.setPosition(window.PointPos);
    };
    __decorate([
        property(GameController_1.GameController)
    ], PointCollider.prototype, "GameController", void 0);
    __decorate([
        property(cc.RigidBody)
    ], PointCollider.prototype, "rigidbody", void 0);
    PointCollider = __decorate([
        ccclass
    ], PointCollider);
    return PointCollider;
}(cc.Component));
exports.default = PointCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxQb2ludENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkJDO1FBeEJHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUFzQm5DLENBQUM7SUFuQmEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQ2xDLElBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBR1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3lEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1E7SUFMZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkJqQztJQUFELG9CQUFDO0NBM0JELEFBMkJDLENBM0IwQyxFQUFFLENBQUMsU0FBUyxHQTJCdEQ7a0JBM0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludENvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkub25CZWdpbkNvbnRhY3QgPSAoYyxzLG8pID0+IHtcclxuICAgICAgICAgICAgaWYoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHdpbmRvdy5Qb2ludFBvcylcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Bee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        return _this;
    }
    Bee.prototype.start = function () {
        this.beginContact();
        this.initPos = this.node.getPosition();
        // let grid = new PF.Grid(100, 100);
        // console.log(grid);
    };
    Bee.prototype.createPathFinding = function () {
        // let grid = new PF.Grid(10, 10);
        // console.log(PF.Grid(100, 100));
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4) {
                console.log("collide");
                // this.isCollide = true;
                // this.jumpBack();
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                constants_1.Constants.isHit = true;
                // let random = Math.floor(Math.random() * 3) + 1;
                // console.log(random);
                // if(random === 1) {
                //     targetPosition = Constants.Char_Point1;
                // } else if (random === 2) {
                //     targetPosition = Constants.Char_Point2;
                // } else {
                //     targetPosition = Constants.Char_Point3;
                // }
                // switch (random) {
                //     case 1:
                //         targetPosition = Constants.Char_Point1;
                //         break;
                //     case 2:
                //         targetPosition = Constants.Char_Point2;
                //         break;
                //     case 3:
                //         targetPosition = Constants.Char_Point3;
                //         break;
                //     default:
                //         break;
                // }
                // let currentPosition = this.node.getPosition();
                // currentPosition.lerp(targetPosition, 0.5, currentPosition);
                // this.node.setPosition(currentPosition);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var targetPosition = new cc.Vec2(this.initPos.x, this.initPos.y);
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.attack = function () {
        var targetPosition = constants_1.Constants.CharacterPos;
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.015, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFpR0M7UUE5Rkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUF3RjVCLENBQUM7SUF0RmEsbUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsb0NBQW9DO1FBQ3BDLHFCQUFxQjtJQUN6QixDQUFDO0lBR08sK0JBQWlCLEdBQXpCO1FBQ0ksa0NBQWtDO1FBQ2xDLGtDQUFrQztJQUV0QyxDQUFDO0lBR08sMEJBQVksR0FBcEI7UUFBQSxpQkE4Q0M7UUE3Q0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLG1CQUFtQjthQUN0QjtZQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsSUFBRyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNmLE9BQU87aUJBQ1Y7Z0JBRUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixxQkFBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLGtEQUFrRDtnQkFDbEQsdUJBQXVCO2dCQUV2QixxQkFBcUI7Z0JBQ3JCLDhDQUE4QztnQkFDOUMsNkJBQTZCO2dCQUM3Qiw4Q0FBOEM7Z0JBQzlDLFdBQVc7Z0JBQ1gsOENBQThDO2dCQUM5QyxJQUFJO2dCQUNKLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLElBQUk7Z0JBRUosaURBQWlEO2dCQUNqRCw4REFBOEQ7Z0JBQzlELDBDQUEwQzthQUM3QztRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHTyxzQkFBUSxHQUFoQjtRQUNJLElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHTyxvQkFBTSxHQUFkO1FBQ0ksSUFBSSxjQUFjLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUM7UUFDNUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdTLG9CQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBNUZEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkNBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQU5kLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FpR3ZCO0lBQUQsVUFBQztDQWpHRCxBQWlHQyxDQWpHZ0MsRUFBRSxDQUFDLFNBQVMsR0FpRzVDO2tCQWpHb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgaXNDb2xsaWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpbml0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKDEwMCwgMTAwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQYXRoRmluZGluZygpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgZ3JpZCA9IG5ldyBQRi5HcmlkKDEwLCAxMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coUEYuR3JpZCgxMDAsIDEwMCkpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkub25CZWdpbkNvbnRhY3QgPSAoYywgcywgbykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZVwiKTsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc0NvbGxpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5qdW1wQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNDb2xsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdGluZ1NvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb20pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmKHJhbmRvbSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldFBvc2l0aW9uID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyYW5kb20gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0YXJnZXRQb3NpdGlvbiA9IENvbnN0YW50cy5DaGFyX1BvaW50MjtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjUsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wQmFjaygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBuZXcgY2MuVmVjMih0aGlzLmluaXRQb3MueCwgdGhpcy5pbml0UG9zLnkpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcmFjdGVyUG9zO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycCh0YXJnZXRQb3NpdGlvbiwgMC4wMTUsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaXNEcmF3ICYmICF0aGlzLmlzQ29sbGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
// Script/Plugin/AudioManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.drawSound = null;
        _this.crySound = null;
        _this.clickSound = null;
        _this.loseSound = null;
        _this.stingSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "loseSound":
                    this.loseSound.play();
                    break;
                case "stingSound":
                    this.stingSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "loseSound":
                this.loseSound.stop();
                break;
            case "stingSound":
                this.stingSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.drawSound.stop();
        this.crySound.stop();
        this.clickSound.stop();
        this.loseSound.stop();
        this.stingSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "loseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stingSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE2RUM7UUEzRUcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBK0R0QyxDQUFDO0lBNURVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pDLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssV0FBVztvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssVUFBVTtvQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUNWLEtBQUssWUFBWTtvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssV0FBVztvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNOLEtBQUssWUFBWTtvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNkO29CQUNJLE1BQU07YUFDYjtTQUNKO0lBQ0wsQ0FBQztJQUVNLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLFFBQVEsU0FBUyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNOLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixNQUFNO1lBQ2Q7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNTO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQWRqQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNkVoQztJQUFELG1CQUFDO0NBN0VELEFBNkVDLENBN0V5QyxFQUFFLENBQUMsU0FBUyxHQTZFckQ7a0JBN0VvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzb3VuZCBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGRyYXdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY3J5U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNsaWNrU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGxvc2VTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc3RpbmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkcmF3U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsb3NlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvc2VTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0aW5nU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGluZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhd1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9zZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGluZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGluZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5sb3NlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3RpbmdTb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfec3bBGHdHY4ShHxSUTm+E', 'GameController');
// Script/Controller/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        this.AudioManager.stopAllSound();
        constants_1.Constants.ironSource.isEndGame = true;
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6477533955?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXdEQztRQXRERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBc0R0QyxDQUFDO0lBcERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsNkVBQTZFLENBQUMsQ0FBQztnQkFDMUYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLDZFQUE2RSxDQUFDLENBQUM7WUFDMUYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBd0QxQjtJQUFELHFCQUFDO0NBeERELEFBd0RDLENBeERtQyxFQUFFLENBQUMsU0FBUyxHQXdEL0M7QUF4RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLnNhdmV0aGVlZ2dzLmRyYXd0b3NhdmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ3NzUzMzk1NT9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5zYXZldGhlZWdncy5kcmF3dG9zYXZlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
// Script/Controller/GamePlay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        // Path Finding
        // this.drawGrid();
        // this.checkGridCollide();
        // -------------------
    };
    // private drawGrid(): void {
    //     this.pathFinding_Grid = new PF.Grid(400, 400);
    //     this.pathFinding_Nodes = this.pathFinding_Grid.nodes;
    //     this.graphic.node.y = -400 / 2;
    //     this.graphic.node.x = -400 / 2;
    //     console.log(this.pathFinding_Grid);
    //     // Đặt màu và độ dày của đường vẽ
    //     this.graphic.strokeColor = cc.Color.BLACK;
    //     this.graphic.lineWidth = 4;
    //     // Vẽ lưới
    //     for (let i = 0; i <= 400; i += 5) {
    //         // Vẽ dòng ngang
    //         this.graphic.moveTo(0, i);
    //         this.graphic.lineTo(400, i);
    //         // Vẽ dòng dọc
    //         this.graphic.moveTo(i, 0);
    //         this.graphic.lineTo(i, 400);
    //     }
    //     // Áp dụng các đường vẽ
    //     this.graphic.stroke();
    // }
    // private checkGridCollide(): void {
    //     let environmentColliders: cc.PhysicsPolygonCollider = this.NodesController.Environment.getComponent(cc.PhysicsPolygonCollider);
    //     let points = environmentColliders.points;
    //     this.pathFinding_Nodes.forEach(node => {
    //         if (this.isPointInPolygon(node, points)) {
    //             console.log('Node va chạm:', node);
    //         } else {
    //             console.log("0 va");
    //         }
    //     });
    // }
    // private isPointInPolygon(point, polygon): boolean {
    //     let x = point.x, y = point.y;
    //     let inside = false;
    //     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    //         let xi = polygon[i].x, yi = polygon[i].y;
    //         let xj = polygon[j].x, yj = polygon[j].y;
    //         let intersect = ((yi > y) !== (yj > y))
    //             && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    //         if (intersect) inside = !inside;
    //     }
    //     return inside;
    // }
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    GamePlay.prototype.characterHit = function () {
        var _this = this;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        this.scheduleOnce(function () {
            _this.NodesController.CTA.active = true;
            _this.NodesController.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.loseSound);
            _this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
            // mtg & applovin
            // this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1);
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        this.handleIronSourcePlaySound();
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        // this.handleMuteSoundIronSource();
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0xDO1FBcExHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBNEo1QixDQUFDO0lBekphLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlFQUFpRTtJQUNyRSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFeEMsNkRBQTZEO1FBQzdE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QUM7UUFFMUQsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQWpMRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3FEQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVF0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzZDQUNNO0lBaEJYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzTDVCO0lBQUQsZUFBQztDQXRMRCxBQXNMQyxDQXRMcUMsRUFBRSxDQUFDLFNBQVMsR0FzTGpEO2tCQXRMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udHJvbGxlciBmcm9tIFwiLi9Ob2Rlc0NvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmlwdFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgZ3JhcGhpYzogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgcGF0aEZpbmRpbmdfR3JpZDogYW55ID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX05vZGVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgY3VyZW50UG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgY3VycmVudEhpbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY3VycmVudFBlbmNpbDogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgY3VyZXJudFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzSGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0hpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUGF0aCBGaW5kaW5nXHJcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tHcmlkQ29sbGlkZSgpO1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBkcmF3R3JpZCgpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLnBhdGhGaW5kaW5nX0dyaWQgPSBuZXcgUEYuR3JpZCg0MDAsIDQwMCk7XHJcbiAgICAvLyAgICAgdGhpcy5wYXRoRmluZGluZ19Ob2RlcyA9IHRoaXMucGF0aEZpbmRpbmdfR3JpZC5ub2RlcztcclxuICAgIC8vICAgICB0aGlzLmdyYXBoaWMubm9kZS55ID0gLTQwMCAvIDI7XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLm5vZGUueCA9IC00MDAgLyAyO1xyXG5cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnBhdGhGaW5kaW5nX0dyaWQpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIMSQ4bq3dCBtw6B1IHbDoCDEkeG7mSBkw6B5IGPhu6dhIMSRxrDhu51uZyB24bq9XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLmxpbmVXaWR0aCA9IDQ7XHJcblxyXG4gICAgLy8gICAgIC8vIFbhur0gbMaw4bubaVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDQwMDsgaSArPSA1KSB7XHJcbiAgICAvLyAgICAgICAgIC8vIFbhur0gZMOybmcgbmdhbmdcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLm1vdmVUbygwLCBpKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLmxpbmVUbyg0MDAsIGkpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gVuG6vSBkw7JuZyBk4buNY1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdyYXBoaWMubW92ZVRvKGksIDApO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdyYXBoaWMubGluZVRvKGksIDQwMCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDDgXAgZOG7pW5nIGPDoWMgxJHGsOG7nW5nIHbhur1cclxuICAgIC8vICAgICB0aGlzLmdyYXBoaWMuc3Ryb2tlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgY2hlY2tHcmlkQ29sbGlkZSgpOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgZW52aXJvbm1lbnRDb2xsaWRlcnM6IGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIgPSB0aGlzLk5vZGVzQ29udHJvbGxlci5FbnZpcm9ubWVudC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAvLyAgICAgbGV0IHBvaW50cyA9IGVudmlyb25tZW50Q29sbGlkZXJzLnBvaW50cztcclxuXHJcbiAgICAvLyAgICAgdGhpcy5wYXRoRmluZGluZ19Ob2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5Qb2x5Z29uKG5vZGUsIHBvaW50cykpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb2RlIHZhIGNo4bqhbTonLCBub2RlKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMCB2YVwiKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGlzUG9pbnRJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pOiBib29sZWFuIHtcclxuICAgIC8vICAgICBsZXQgeCA9IHBvaW50LngsIHkgPSBwb2ludC55O1xyXG4gICAgXHJcbiAgICAvLyAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwLCBqID0gcG9seWdvbi5sZW5ndGggLSAxOyBpIDwgcG9seWdvbi5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IHhpID0gcG9seWdvbltpXS54LCB5aSA9IHBvbHlnb25baV0ueTtcclxuICAgIC8vICAgICAgICAgbGV0IHhqID0gcG9seWdvbltqXS54LCB5aiA9IHBvbHlnb25bal0ueTtcclxuICAgIFxyXG4gICAgLy8gICAgICAgICBsZXQgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSlcclxuICAgIC8vICAgICAgICAgICAgICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAgICAgcmV0dXJuIGluc2lkZTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuQ2hhcmFjdGVyUG9zID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuU3BpbmVfQ2hhcmFjdGVyLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVySGl0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5zZXRBbmltYXRpb24oMCwgXCJiZWluZ19oaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDVEFfQW5pbVwiKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmxvc2VTb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5DVEFfYnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBX092ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1bmFjdGl2ZUhpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0hpbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pc0hpdCAmJiAhdGhpcy5pc0hpdCAmJiB0aGlzLmNoYXJhY3RlckhpdCgpO1xyXG4gICAgICAgIHdpbmRvdy5pc1N0YXJ0RHJhdyAmJiAhdGhpcy5pc0hpbnQgJiYgdGhpcy51bmFjdGl2ZUhpbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
