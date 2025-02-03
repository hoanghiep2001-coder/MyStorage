
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
    audioManager: cc.Node,
    GamePlay: cc.Node,
    GameController: cc.Node,
    EggController: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    _StateForJS.StateForJs.isCanDraw = true;
    this.createGraphics();
    this.isChangeEggRigidbodyType = false;
  },
  touch_start: function touch_start() {
    if (window.isToStore) {
      this.GameController.getComponent("GameController").installHandle();
      return;
    } // if(window.isLoseGame || StateForJs.isToStore) {
    //     this.GameController.getComponent("GameController").installHandle();
    //     return;
    // }


    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
  },
  touch_end: function touch_end(event) {
    var _this = this;

    if (window.isToStore) {
      // this.GameController.getComponent("GameController").installHandle();
      return;
    }

    if (_StateForJS.StateForJs.isToStore || window.isTouchWall) {
      this.audioManager.getComponent("AudioManager").stopSound("drawSound");
      window.isTouchWall = false;
      return;
    }

    if (!_StateForJS.StateForJs.isCanDraw) {
      this.offEvent();
      this.EggController.getComponent("EggController").changeRigidbodyType();
      this.createGraphics();
    }

    this.audioManager.getComponent("AudioManager").stopSound("drawSound");
    this.scheduleOnce(function () {
      if (window.isReplayGame) {
        return;
      }

      if (!window.isLoseGame) _this.GamePlay.getComponent("GamePlay").winGame();
    }, _StateForJS.StateForJs.timeToWin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJHYW1lUGxheSIsIkdhbWVDb250cm9sbGVyIiwiRWdnQ29udHJvbGxlciIsIm9uTG9hZCIsIndpbmRvdyIsImlzRHJhdyIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hfc3RhcnQiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJzdGFydCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJjcmVhdGVHcmFwaGljcyIsImlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZSIsImlzVG9TdG9yZSIsImdldENvbXBvbmVudCIsImluc3RhbGxIYW5kbGUiLCJwbGF5U291bmQiLCJkcmF3U291bmQiLCJsb29wIiwiZXZlbnQiLCJpc1RvdWNoV2FsbCIsInN0b3BTb3VuZCIsIm9mZkV2ZW50IiwiY2hhbmdlUmlnaWRib2R5VHlwZSIsInNjaGVkdWxlT25jZSIsImlzUmVwbGF5R2FtZSIsImlzTG9zZUdhbWUiLCJ3aW5HYW1lIiwidGltZVRvV2luIiwib2ZmIiwiZ3JhcGhpY3Nfbm9kZSIsImluc3RhbnRpYXRlIiwieCIsImFkZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLE1BREw7QUFFUkMsSUFBQUEsZUFBZSxFQUFFTixFQUFFLENBQUNPLElBRlo7QUFHUkMsSUFBQUEsWUFBWSxFQUFFUixFQUFFLENBQUNP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RyxTQUFoQztBQUNILEdBN0VJO0FBZ0ZMTSxFQUFBQSxjQWhGSyw0QkFnRlk7QUFDYixRQUFJbUIsYUFBYSxHQUFHN0MsRUFBRSxDQUFDOEMsV0FBSCxDQUFlLEtBQUsxQyxRQUFwQixDQUFwQjtBQUNBeUMsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBS2hDLElBQUwsQ0FBVWlDLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUFwRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JhcGhpY3M6IGNjLlByZWZhYixcclxuICAgICAgICBub2Rlc0NvbnRyb2xsZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgYXVkaW9NYW5hZ2VyOiBjYy5Ob2RlLFxyXG4gICAgICAgIEdhbWVQbGF5OiBjYy5Ob2RlLFxyXG4gICAgICAgIEdhbWVDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIEVnZ0NvbnRyb2xsZXI6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgd2luZG93LmlzRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaF9zdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFN0YXRlRm9ySnMuaXNDYW5EcmF3ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5pc0NoYW5nZUVnZ1JpZ2lkYm9keVR5cGUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoX3N0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIikuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmKHdpbmRvdy5pc0xvc2VHYW1lIHx8IFN0YXRlRm9ySnMuaXNUb1N0b3JlKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIikuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmF1ZGlvTWFuYWdlci5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheVNvdW5kKFwiZHJhd1NvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB0b3VjaF9lbmQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKHdpbmRvdy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5HYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChTdGF0ZUZvckpzLmlzVG9TdG9yZSB8fCB3aW5kb3cuaXNUb3VjaFdhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnN0b3BTb3VuZChcImRyYXdTb3VuZFwiKTtcclxuICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLkVnZ0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiRWdnQ29udHJvbGxlclwiKS5jaGFuZ2VSaWdpZGJvZHlUeXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JhcGhpY3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5zdG9wU291bmQoXCJkcmF3U291bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pc1JlcGxheUdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuaXNMb3NlR2FtZSkgdGhpcy5HYW1lUGxheS5nZXRDb21wb25lbnQoXCJHYW1lUGxheVwiKS53aW5HYW1lKCk7XHJcbiAgICAgICAgfSwgU3RhdGVGb3JKcy50aW1lVG9XaW4pO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb2ZmRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgY3JlYXRlR3JhcGhpY3MoKSB7XHJcbiAgICAgICAgdmFyIGdyYXBoaWNzX25vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljc19ub2RlLnggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChncmFwaGljc19ub2RlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=