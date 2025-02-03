
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '724e8+Zs8VHWZBHLkR6Rzc9', 'EnemyBullet');
// Script/Enemy/EnemyBullet.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    DampFactor: 1
  },
  onLoad: function onLoad() {
    this._isLanching = false;
    this._direction = 0;
    this._speed = 15;
  },
  start: function start() {
    this._isLanching = true;
  },
  Launch: function Launch(baseDamp, direction) {
    this._direction = direction;
    this._baseDamp = baseDamp;
    this.node.scaleX = direction;
  },
  update: function update(dt) {
    if (!this._isLanching) return;
    this.node.setPosition(this.node.getPosition().x + this._speed * 10 * this._direction * dt, this.node.getPosition().y);
  },
  hitPlayer: function hitPlayer() {
    console.log("Bullet Hit Player");
    this.node.destroy();
  },
  hitPlatform: function hitPlatform() {
    this._isLanching = false;
    this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.PoisonVineBaseAttack);
      this.hitPlayer();
    } else if (other.node.group == "Solid") {
      this.hitPlatform();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlCdWxsZXQuanMiXSwibmFtZXMiOlsiUGxheWVyM0QiLCJyZXF1aXJlIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkRhbXBGYWN0b3IiLCJvbkxvYWQiLCJfaXNMYW5jaGluZyIsIl9kaXJlY3Rpb24iLCJfc3BlZWQiLCJzdGFydCIsIkxhdW5jaCIsImJhc2VEYW1wIiwiZGlyZWN0aW9uIiwiX2Jhc2VEYW1wIiwibm9kZSIsInNjYWxlWCIsInVwZGF0ZSIsImR0Iiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsIngiLCJ5IiwiaGl0UGxheWVyIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3kiLCJoaXRQbGF0Zm9ybSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJncm91cCIsImdldENvbXBvbmVudCIsImhpdCIsIlBvaXNvblZpbmVCYXNlQXR0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFFQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQURKLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBRUEsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0k7QUFDTCxTQUFLSCxXQUFMLEdBQW1CLElBQW5CO0FBQ0gsR0FoQkk7QUFrQkxJLEVBQUFBLE1BbEJLLGtCQWtCRUMsUUFsQkYsRUFrQllDLFNBbEJaLEVBa0JzQjtBQUN2QixTQUFLTCxVQUFMLEdBQWtCSyxTQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJGLFFBQWpCO0FBRUEsU0FBS0csSUFBTCxDQUFVQyxNQUFWLEdBQW1CSCxTQUFuQjtBQUNILEdBdkJJO0FBeUJMSSxFQUFBQSxNQXpCSyxrQkF5QkdDLEVBekJILEVBeUJPO0FBQ1IsUUFBRyxDQUFDLEtBQUtYLFdBQVQsRUFBc0I7QUFFdEIsU0FBS1EsSUFBTCxDQUFVSSxXQUFWLENBQXNCLEtBQUtKLElBQUwsQ0FBVUssV0FBVixHQUF3QkMsQ0FBeEIsR0FBNEIsS0FBS1osTUFBTCxHQUFjLEVBQWQsR0FBbUIsS0FBS0QsVUFBeEIsR0FBcUNVLEVBQXZGLEVBQTJGLEtBQUtILElBQUwsQ0FBVUssV0FBVixHQUF3QkUsQ0FBbkg7QUFDSCxHQTdCSTtBQStCTEMsRUFBQUEsU0EvQkssdUJBK0JNO0FBQ1BDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsU0FBS1YsSUFBTCxDQUFVVyxPQUFWO0FBQ0gsR0FsQ0k7QUFvQ0xDLEVBQUFBLFdBcENLLHlCQW9DUTtBQUNULFNBQUtwQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS1EsSUFBTCxDQUFVVyxPQUFWO0FBQ0gsR0F2Q0k7QUF5Q0xFLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUVyQyxRQUFHRCxLQUFLLENBQUNkLElBQU4sQ0FBV2dCLEtBQVgsSUFBb0IsUUFBdkIsRUFBZ0M7QUFDNUJGLE1BQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQmxDLFFBQW5CLEVBQTZCbUMsR0FBN0IsQ0FBaUNqQyxLQUFLLENBQUNrQyxvQkFBdkM7QUFDQSxXQUFLWCxTQUFMO0FBQ0gsS0FIRCxNQUdPLElBQUdNLEtBQUssQ0FBQ2QsSUFBTixDQUFXZ0IsS0FBWCxJQUFvQixPQUF2QixFQUErQjtBQUNsQyxXQUFLSixXQUFMO0FBQ0g7QUFFSjtBQWxESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGxheWVyM0QgPSByZXF1aXJlKFwiUGxheWVyM0RcIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIkNPTlNUXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBEYW1wRmFjdG9yOiAxLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9zcGVlZCA9IDE1O1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNMYW5jaGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIExhdW5jaChiYXNlRGFtcCwgZGlyZWN0aW9uKXtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5fYmFzZURhbXAgPSBiYXNlRGFtcDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IGRpcmVjdGlvbjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc0xhbmNoaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgdGhpcy5fc3BlZWQgKiAxMCAqIHRoaXMuX2RpcmVjdGlvbiAqIGR0LCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgIH0sXHJcblxyXG4gICAgaGl0UGxheWVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdWxsZXQgSGl0IFBsYXllclwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaXRQbGF0Zm9ybSgpe1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiUGxheWVyXCIpe1xyXG4gICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoUGxheWVyM0QpLmhpdChDT05TVC5Qb2lzb25WaW5lQmFzZUF0dGFjayk7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0UGxheWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJTb2xpZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5oaXRQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=