
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9946NNZuRHJLTjWdYKXWzD', 'CameraController');
// scripts/CameraController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    player: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    var targetPosition = this.player.getPosition();
    targetPosition.y = cc.misc.clampf(targetPosition.y, -100, 450);
    targetPosition.x = cc.misc.clampf(targetPosition.x, -500, 420);
    var currentPosition = this.node.getPosition();
    currentPosition.lerp(targetPosition, 0.2, currentPosition);
    this.node.setPosition(currentPosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FtZXJhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllciIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInkiLCJtaXNjIiwiY2xhbXBmIiwieCIsImN1cnJlbnRQb3NpdGlvbiIsIm5vZGUiLCJsZXJwIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBUUxDLEVBQUFBLEtBUkssbUJBUUksQ0FFUixDQVZJO0FBWUpDLEVBQUFBLE1BWkksa0JBWUlDLEVBWkosRUFZUTtBQUNULFFBQUlDLGNBQWMsR0FBRyxLQUFLTCxNQUFMLENBQVlNLFdBQVosRUFBckI7QUFFQUQsSUFBQUEsY0FBYyxDQUFDRSxDQUFmLEdBQW1CWCxFQUFFLENBQUNZLElBQUgsQ0FBUUMsTUFBUixDQUFlSixjQUFjLENBQUNFLENBQTlCLEVBQWlDLENBQUMsR0FBbEMsRUFBdUMsR0FBdkMsQ0FBbkI7QUFDQUYsSUFBQUEsY0FBYyxDQUFDSyxDQUFmLEdBQW1CZCxFQUFFLENBQUNZLElBQUgsQ0FBUUMsTUFBUixDQUFlSixjQUFjLENBQUNLLENBQTlCLEVBQWlDLENBQUMsR0FBbEMsRUFBdUMsR0FBdkMsQ0FBbkI7QUFFQSxRQUFJQyxlQUFlLEdBQUcsS0FBS0MsSUFBTCxDQUFVTixXQUFWLEVBQXRCO0FBQ0FLLElBQUFBLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUJSLGNBQXJCLEVBQXFDLEdBQXJDLEVBQTBDTSxlQUExQztBQUNBLFNBQUtDLElBQUwsQ0FBVUUsV0FBVixDQUFzQkgsZUFBdEI7QUFFRjtBQXRCRyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgcGxheWVyOiBjYy5Ob2RlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi55ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zaXRpb24ueSwgLTEwMCwgNDUwKTtcclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi54ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zaXRpb24ueCwgLTUwMCwgNDIwKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjIsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcblxyXG4gICAgIH0sXHJcbn0pO1xyXG4iXX0=