
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/Portal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fd3eVtg49LYIaXQUDhjPp2', 'Portal');
// Script/Others/Portal.js

"use strict";

var GameInfo = require("GameInfo");

var Player3D = require("Player3D");

cc.Class({
  "extends": cc.Component,
  properties: {
    StoneCover: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._isOpen = false;
  },
  start: function start() {},
  update: function update(dt) {
    if (this._isOpen) return;

    if (GameInfo.TotalEnemyAlive <= 0) {
      this._isOpen = true;
      this.openDoor();
    }
  },
  openDoor: function openDoor() {
    this.StoneCover.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      this.playerEnterPortal(other);
    }
  },
  playerEnterPortal: function playerEnterPortal(playerNode) {
    console.log("Player Enter Portal " + GameInfo.TotalEnemyAlive);

    if (GameInfo.TotalEnemyAlive > 0) {
      console.log("You need kill more enemy!");
    } else {
      console.log("YOU WIN"); // Show End of Game

      playerNode.getComponent(Player3D).win();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXFBvcnRhbC5qcyJdLCJuYW1lcyI6WyJHYW1lSW5mbyIsInJlcXVpcmUiLCJQbGF5ZXIzRCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiU3RvbmVDb3ZlciIsIk5vZGUiLCJvbkxvYWQiLCJfaXNPcGVuIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIlRvdGFsRW5lbXlBbGl2ZSIsIm9wZW5Eb29yIiwiYWN0aXZlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsIm5vZGUiLCJncm91cCIsInBsYXllckVudGVyUG9ydGFsIiwicGxheWVyTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNILEdBWEk7QUFhTEMsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkk7QUFpQkxDLEVBQUFBLE1BakJLLGtCQWlCR0MsRUFqQkgsRUFpQk87QUFDUixRQUFHLEtBQUtILE9BQVIsRUFBaUI7O0FBRWpCLFFBQUdWLFFBQVEsQ0FBQ2MsZUFBVCxJQUE0QixDQUEvQixFQUFpQztBQUM3QixXQUFLSixPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUtLLFFBQUw7QUFDSDtBQUNKLEdBeEJJO0FBMEJMQSxFQUFBQSxRQTFCSyxzQkEwQks7QUFDTixTQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QixLQUF6QjtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdDLEtBQVgsSUFBb0IsUUFBdkIsRUFBZ0M7QUFDNUIsV0FBS0MsaUJBQUwsQ0FBdUJKLEtBQXZCO0FBQ0g7QUFDSixHQWxDSTtBQW9DTEksRUFBQUEsaUJBcENLLDZCQW9DYUMsVUFwQ2IsRUFvQ3dCO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBeUJ6QixRQUFRLENBQUNjLGVBQTlDOztBQUNBLFFBQUdkLFFBQVEsQ0FBQ2MsZUFBVCxHQUEyQixDQUE5QixFQUFnQztBQUM1QlUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQURHLENBRUg7O0FBQ0FGLE1BQUFBLFVBQVUsQ0FBQ0csWUFBWCxDQUF3QnhCLFFBQXhCLEVBQWtDeUIsR0FBbEM7QUFDSDtBQUNKO0FBN0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG52YXIgUGxheWVyM0QgPSByZXF1aXJlKFwiUGxheWVyM0RcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFN0b25lQ292ZXI6IGNjLk5vZGVcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzT3BlbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihHYW1lSW5mby5Ub3RhbEVuZW15QWxpdmUgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRvb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5Eb29yKCl7XHJcbiAgICAgICAgdGhpcy5TdG9uZUNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiUGxheWVyXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckVudGVyUG9ydGFsKG90aGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXllckVudGVyUG9ydGFsKHBsYXllck5vZGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIEVudGVyIFBvcnRhbCBcIiArIEdhbWVJbmZvLlRvdGFsRW5lbXlBbGl2ZSk7XHJcbiAgICAgICAgaWYoR2FtZUluZm8uVG90YWxFbmVteUFsaXZlID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IG5lZWQga2lsbCBtb3JlIGVuZW15IVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPVSBXSU5cIik7XHJcbiAgICAgICAgICAgIC8vIFNob3cgRW5kIG9mIEdhbWVcclxuICAgICAgICAgICAgcGxheWVyTm9kZS5nZXRDb21wb25lbnQoUGxheWVyM0QpLndpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==