
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/AttackBoxStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5cab3lV9FL3JPzR1b7qO2N', 'AttackBoxStick');
// Script/Character/AttackBoxStick.js

"use strict";

var AudioManager = require("AudioManager");

cc.Class({
  "extends": cc.Component,
  properties: {
    AudioManager: AudioManager
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  // update (dt) {},
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log("Attack Box Stick: ", other.node.group);
    window.isUsingSword && this.AudioManager.bladeSound.play();
    window.isUsingFist && this.AudioManager.hitSound.play();

    if (other.node.group == "Enemy") {
      console.log("Hit Enemy");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEF0dGFja0JveFN0aWNrLmpzIl0sIm5hbWVzIjpbIkF1ZGlvTWFuYWdlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwib25FbmFibGUiLCJzY2hlZHVsZU9uY2UiLCJkaXNhYmxlQ29sbGlzaW9uIiwibm9kZSIsImFjdGl2ZSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJsb2ciLCJncm91cCIsIndpbmRvdyIsImlzVXNpbmdTd29yZCIsImJsYWRlU291bmQiLCJwbGF5IiwiaXNVc2luZ0Zpc3QiLCJoaXRTb3VuZCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JMLElBQUFBLFlBQVksRUFBRUE7QUFETixHQUhQO0FBT0w7QUFFQTtBQUVBTSxFQUFBQSxLQVhLLG1CQVdJLENBRVIsQ0FiSTtBQWVMQyxFQUFBQSxRQWZLLHNCQWVNO0FBQ1AsU0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQ3pCLFdBQUtDLGdCQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQW5CSTtBQXFCTDtBQUVBQSxFQUFBQSxnQkF2QkssOEJBdUJhO0FBQ2QsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0F6Qkk7QUEyQkxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQ1osSUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sb0JBQVAsRUFBOEJGLEtBQUssQ0FBQ0gsSUFBTixDQUFXTSxLQUF6QztBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFlBQVAsSUFBdUIsS0FBS2xCLFlBQUwsQ0FBa0JtQixVQUFsQixDQUE2QkMsSUFBN0IsRUFBdkI7QUFDQUgsSUFBQUEsTUFBTSxDQUFDSSxXQUFQLElBQXNCLEtBQUtyQixZQUFMLENBQWtCc0IsUUFBbEIsQ0FBMkJGLElBQTNCLEVBQXRCOztBQUNBLFFBQUdQLEtBQUssQ0FBQ0gsSUFBTixDQUFXTSxLQUFYLElBQW9CLE9BQXZCLEVBQStCO0FBQzNCTyxNQUFBQSxPQUFPLENBQUNSLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFDSjtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIkF1ZGlvTWFuYWdlclwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkVuYWJsZSAoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQ29sbGlzaW9uKCk7XHJcbiAgICAgICAgfSwgMC4xNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGRpc2FibGVDb2xsaXNpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGNjLmxvZyhcIkF0dGFjayBCb3ggU3RpY2s6IFwiICwgb3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCAmJiB0aGlzLkF1ZGlvTWFuYWdlci5ibGFkZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cuaXNVc2luZ0Zpc3QgJiYgdGhpcy5BdWRpb01hbmFnZXIuaGl0U291bmQucGxheSgpO1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJFbmVteVwiKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaXQgRW5lbXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==