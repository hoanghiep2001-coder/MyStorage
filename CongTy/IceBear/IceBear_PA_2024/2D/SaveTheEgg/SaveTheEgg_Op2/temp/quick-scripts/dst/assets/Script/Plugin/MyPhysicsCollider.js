
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