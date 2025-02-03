
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '334a5xuWkJMG7HmI+HE3sDk', 'CameraController');
// Script/Controllers/CameraController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Player_Node: cc.Node,
    BG_Layer_Back: cc.Node,
    BG_Layer_Mid: cc.Node,
    BG_Layer_Cloud: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    var target_position = this.Player_Node.getPosition();
    target_position.y = cc.misc.clampf(target_position.y, 0, 220); // Move Camera to offset halft size

    target_position.x -= 240;
    target_position.y -= 160;
    var current_position = this.node.getPosition();
    current_position.lerp(target_position, 0.1, current_position);
    this.node.setPosition(current_position);
    this.BG_Layer_Back.setPosition(current_position.x, current_position.y);
    this.BG_Layer_Cloud.setPosition(current_position.x / 2, current_position.y / 2);
    this.BG_Layer_Mid.setPosition(current_position.x / 4, current_position.y / 4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcQ2FtZXJhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlBsYXllcl9Ob2RlIiwiTm9kZSIsIkJHX0xheWVyX0JhY2siLCJCR19MYXllcl9NaWQiLCJCR19MYXllcl9DbG91ZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0YXJnZXRfcG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInkiLCJtaXNjIiwiY2xhbXBmIiwieCIsImN1cnJlbnRfcG9zaXRpb24iLCJub2RlIiwibGVycCIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsV0FBVyxFQUFDSixFQUFFLENBQUNLLElBRlA7QUFJUkMsSUFBQUEsYUFBYSxFQUFDTixFQUFFLENBQUNLLElBSlQ7QUFNUkUsSUFBQUEsWUFBWSxFQUFDUCxFQUFFLENBQUNLLElBTlI7QUFRUkcsSUFBQUEsY0FBYyxFQUFDUixFQUFFLENBQUNLO0FBUlYsR0FIUDtBQWVMSSxFQUFBQSxLQWZLLG1CQWVFLENBRU4sQ0FqQkk7QUFtQkxDLEVBQUFBLE1BbkJLLGtCQW1CR0MsRUFuQkgsRUFtQk87QUFDUixRQUFJQyxlQUFlLEdBQUcsS0FBS1IsV0FBTCxDQUFpQlMsV0FBakIsRUFBdEI7QUFDQUQsSUFBQUEsZUFBZSxDQUFDRSxDQUFoQixHQUFvQmQsRUFBRSxDQUFDZSxJQUFILENBQVFDLE1BQVIsQ0FBZUosZUFBZSxDQUFDRSxDQUEvQixFQUFpQyxDQUFqQyxFQUFtQyxHQUFuQyxDQUFwQixDQUZRLENBSVI7O0FBQ0FGLElBQUFBLGVBQWUsQ0FBQ0ssQ0FBaEIsSUFBc0IsR0FBdEI7QUFDQUwsSUFBQUEsZUFBZSxDQUFDRSxDQUFoQixJQUFzQixHQUF0QjtBQUVBLFFBQUlJLGdCQUFnQixHQUFHLEtBQUtDLElBQUwsQ0FBVU4sV0FBVixFQUF2QjtBQUVBSyxJQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBdUJSLGVBQXZCLEVBQXlDLEdBQXpDLEVBQStDTSxnQkFBL0M7QUFFQSxTQUFLQyxJQUFMLENBQVVFLFdBQVYsQ0FBc0JILGdCQUF0QjtBQUVBLFNBQUtaLGFBQUwsQ0FBbUJlLFdBQW5CLENBQStCSCxnQkFBZ0IsQ0FBQ0QsQ0FBaEQsRUFBa0RDLGdCQUFnQixDQUFDSixDQUFuRTtBQUVBLFNBQUtOLGNBQUwsQ0FBb0JhLFdBQXBCLENBQWdDSCxnQkFBZ0IsQ0FBQ0QsQ0FBakIsR0FBbUIsQ0FBbkQsRUFBcURDLGdCQUFnQixDQUFDSixDQUFqQixHQUFtQixDQUF4RTtBQUVBLFNBQUtQLFlBQUwsQ0FBa0JjLFdBQWxCLENBQThCSCxnQkFBZ0IsQ0FBQ0QsQ0FBakIsR0FBbUIsQ0FBakQsRUFBbURDLGdCQUFnQixDQUFDSixDQUFqQixHQUFtQixDQUF0RTtBQUVIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBQbGF5ZXJfTm9kZTpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBCR19MYXllcl9CYWNrOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIEJHX0xheWVyX01pZDpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBCR19MYXllcl9DbG91ZDpjYy5Ob2RlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0X3Bvc2l0aW9uID0gdGhpcy5QbGF5ZXJfTm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRhcmdldF9wb3NpdGlvbi55ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0X3Bvc2l0aW9uLnksMCwyMjApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vdmUgQ2FtZXJhIHRvIG9mZnNldCBoYWxmdCBzaXplXHJcbiAgICAgICAgdGFyZ2V0X3Bvc2l0aW9uLnggIC09IDI0MDtcclxuICAgICAgICB0YXJnZXRfcG9zaXRpb24ueSAgLT0gMTYwO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudF9wb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uLmxlcnAoIHRhcmdldF9wb3NpdGlvbiAsIDAuMSAsIGN1cnJlbnRfcG9zaXRpb24gKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRfcG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLkJHX0xheWVyX0JhY2suc2V0UG9zaXRpb24oY3VycmVudF9wb3NpdGlvbi54LGN1cnJlbnRfcG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIHRoaXMuQkdfTGF5ZXJfQ2xvdWQuc2V0UG9zaXRpb24oY3VycmVudF9wb3NpdGlvbi54LzIsY3VycmVudF9wb3NpdGlvbi55LzIpO1xyXG5cclxuICAgICAgICB0aGlzLkJHX0xheWVyX01pZC5zZXRQb3NpdGlvbihjdXJyZW50X3Bvc2l0aW9uLngvNCxjdXJyZW50X3Bvc2l0aW9uLnkvNCk7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==