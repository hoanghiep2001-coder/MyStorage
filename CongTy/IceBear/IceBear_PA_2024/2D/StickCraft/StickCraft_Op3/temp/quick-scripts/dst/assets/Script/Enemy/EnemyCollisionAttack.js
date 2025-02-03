
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyCollisionAttack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c1e5m3SxlExru99RiMp/tN', 'EnemyCollisionAttack');
// Script/Enemy/EnemyCollisionAttack.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.ZombieBaseAttack);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlDb2xsaXNpb25BdHRhY2suanMiXSwibmFtZXMiOlsiUGxheWVyM0QiLCJyZXF1aXJlIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJvbkVuYWJsZSIsInNjaGVkdWxlT25jZSIsImRpc2FibGVDb2xsaXNpb24iLCJub2RlIiwiYWN0aXZlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIiwiZ2V0Q29tcG9uZW50IiwiaGl0IiwiWm9tYmllQmFzZUF0dGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBV0xDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJO0FBZUxDLEVBQUFBLE1BZkssa0JBZUdDLEVBZkgsRUFlTyxDQUVYLENBakJJO0FBbUJMQyxFQUFBQSxRQW5CSyxzQkFtQk07QUFDUCxTQUFLQyxZQUFMLENBQWtCLFlBQVc7QUFDekIsV0FBS0MsZ0JBQUw7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBdkJJO0FBeUJMQSxFQUFBQSxnQkF6QkssOEJBeUJhO0FBQ2QsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0EzQkk7QUE2QkxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNILElBQU4sQ0FBV0ssS0FBWCxJQUFvQixRQUF2QixFQUFnQztBQUM1QkYsTUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CcEIsUUFBbkIsRUFBNkJxQixHQUE3QixDQUFpQ25CLEtBQUssQ0FBQ29CLGdCQUF2QztBQUNIO0FBQ0o7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllcjNEID0gcmVxdWlyZShcIlBsYXllcjNEXCIpO1xyXG5jb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVDb2xsaXNpb24oKTtcclxuICAgICAgICB9LCAwLjE1KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZUNvbGxpc2lvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlBsYXllclwiKXtcclxuICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFBsYXllcjNEKS5oaXQoQ09OU1QuWm9tYmllQmFzZUF0dGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==