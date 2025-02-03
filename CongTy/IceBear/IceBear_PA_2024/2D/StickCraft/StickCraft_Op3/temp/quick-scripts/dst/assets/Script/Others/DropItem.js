
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/DropItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcc2bp5e4hPqYagHCPiUZww', 'DropItem');
// Script/Others/DropItem.js

"use strict";

var Player3D = require("Player3D");

var GameInfo = require("GameInfo");

var EnWeapon = require("GameEnum").EnWeapon;

cc.Class({
  "extends": cc.Component,
  properties: {
    weaponType: {
      "default": EnWeapon.None,
      type: EnWeapon
    },
    weaponIcon: {
      "default": null,
      type: cc.Sprite,
      serializable: true
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    cc.tween(this.weaponIcon.node).repeatForever(cc.tween().to(1, {
      position: cc.v2(0, 7)
    }).to(1, {
      position: cc.v2(0, 0)
    })).start();
  },
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      this.collectWeapon(other.node.getComponent(Player3D));
    }
  },
  collectWeapon: function collectWeapon(player) {
    console.log("Player collect weapon: " + this.weaponType);
    player.changeWeapon(this.weaponType);

    if (this.weaponType == EnWeapon.Sword) {
      GameInfo.TutorialDoneStage1 = true;
    }

    if (this.weaponType == EnWeapon.Archer) {
      GameInfo.TutorialDoneStage2 = true;
    }

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXERyb3BJdGVtLmpzIl0sIm5hbWVzIjpbIlBsYXllcjNEIiwicmVxdWlyZSIsIkdhbWVJbmZvIiwiRW5XZWFwb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIndlYXBvblR5cGUiLCJOb25lIiwidHlwZSIsIndlYXBvbkljb24iLCJTcHJpdGUiLCJzZXJpYWxpemFibGUiLCJvbkxvYWQiLCJzdGFydCIsInR3ZWVuIiwibm9kZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsInBvc2l0aW9uIiwidjIiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJjb2xsZWN0V2VhcG9uIiwiZ2V0Q29tcG9uZW50IiwicGxheWVyIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVdlYXBvbiIsIlN3b3JkIiwiVHV0b3JpYWxEb25lU3RhZ2UxIiwiQXJjaGVyIiwiVHV0b3JpYWxEb25lU3RhZ2UyIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUFQLENBQW9CRSxRQUFuQzs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTTCxRQUFRLENBQUNNLElBRFY7QUFFUkMsTUFBQUEsSUFBSSxFQUFFUDtBQUZFLEtBREo7QUFLUlEsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ1EsTUFGRDtBQUdSQyxNQUFBQSxZQUFZLEVBQUU7QUFITjtBQUxKLEdBSFA7QUFlTEMsRUFBQUEsTUFmSyxvQkFlSyxDQUFFLENBZlA7QUFpQkxDLEVBQUFBLEtBakJLLG1CQWlCSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxVQUFMLENBQWdCTSxJQUF6QixFQUNDQyxhQURELENBRUlkLEVBQUUsQ0FBQ1ksS0FBSCxHQUFXRyxFQUFYLENBQWMsQ0FBZCxFQUFpQjtBQUFDQyxNQUFBQSxRQUFRLEVBQUdoQixFQUFFLENBQUNpQixFQUFILENBQU0sQ0FBTixFQUFTLENBQVQ7QUFBWixLQUFqQixFQUNDRixFQURELENBQ0ksQ0FESixFQUNPO0FBQUNDLE1BQUFBLFFBQVEsRUFBR2hCLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVDtBQUFaLEtBRFAsQ0FGSixFQUlDTixLQUpEO0FBS0gsR0F2Qkk7QUF5Qkw7QUFFQU8sRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUdELEtBQUssQ0FBQ04sSUFBTixDQUFXUSxLQUFYLElBQW9CLFFBQXZCLEVBQWdDO0FBQzVCLFdBQUtDLGFBQUwsQ0FBbUJILEtBQUssQ0FBQ04sSUFBTixDQUFXVSxZQUFYLENBQXdCM0IsUUFBeEIsQ0FBbkI7QUFDSDtBQUNKLEdBL0JJO0FBaUNMMEIsRUFBQUEsYUFqQ0sseUJBaUNTRSxNQWpDVCxFQWlDZ0I7QUFDakJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUE0QixLQUFLdEIsVUFBN0M7QUFDQW9CLElBQUFBLE1BQU0sQ0FBQ0csWUFBUCxDQUFvQixLQUFLdkIsVUFBekI7O0FBRUEsUUFBRyxLQUFLQSxVQUFMLElBQW1CTCxRQUFRLENBQUM2QixLQUEvQixFQUFxQztBQUNqQzlCLE1BQUFBLFFBQVEsQ0FBQytCLGtCQUFULEdBQThCLElBQTlCO0FBQ0g7O0FBRUQsUUFBRyxLQUFLekIsVUFBTCxJQUFtQkwsUUFBUSxDQUFDK0IsTUFBL0IsRUFBc0M7QUFDbENoQyxNQUFBQSxRQUFRLENBQUNpQyxrQkFBVCxHQUE4QixJQUE5QjtBQUNIOztBQUVELFNBQUtsQixJQUFMLENBQVVtQixPQUFWO0FBQ0g7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllcjNEID0gcmVxdWlyZShcIlBsYXllcjNEXCIpO1xyXG5jb25zdCBHYW1lSW5mbyA9IHJlcXVpcmUoXCJHYW1lSW5mb1wiKTtcclxudmFyIEVuV2VhcG9uID0gcmVxdWlyZShcIkdhbWVFbnVtXCIpLkVuV2VhcG9uO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB3ZWFwb25UeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IEVuV2VhcG9uLk5vbmUsXHJcbiAgICAgICAgICAgIHR5cGU6IEVuV2VhcG9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VhcG9uSWNvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLCAgICAgICBcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsIFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy53ZWFwb25JY29uLm5vZGUpXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwge3Bvc2l0aW9uIDogY2MudjIoMCwgNyl9KVxyXG4gICAgICAgICAgICAudG8oMSwge3Bvc2l0aW9uIDogY2MudjIoMCwgMCl9KSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlBsYXllclwiKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0V2VhcG9uKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFBsYXllcjNEKSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29sbGVjdFdlYXBvbihwbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGNvbGxlY3Qgd2VhcG9uOiBcIiArIHRoaXMud2VhcG9uVHlwZSk7XHJcbiAgICAgICAgcGxheWVyLmNoYW5nZVdlYXBvbih0aGlzLndlYXBvblR5cGUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLndlYXBvblR5cGUgPT0gRW5XZWFwb24uU3dvcmQpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5UdXRvcmlhbERvbmVTdGFnZTEgPSB0cnVlOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy53ZWFwb25UeXBlID09IEVuV2VhcG9uLkFyY2hlcil7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19