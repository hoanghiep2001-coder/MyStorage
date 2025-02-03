
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
    if (window.isLoseGame || _StateForJS.StateForJs.isToStore) {
      this.GameController.getComponent("GameController").installHandle();
      return;
    }

    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
  },
  touch_end: function touch_end(event) {
    var _this = this;

    if (_StateForJS.StateForJs.isToStore) {
      return;
    }

    if (window.currentLv === 2) {
      this.EggController.getComponent("EggController").changeRigidbodyType();
    }

    if (!_StateForJS.StateForJs.isCanDraw) {
      this.offEvent();
      this.createGraphics();
    }

    this.scheduleOnce(function () {
      if (window.isReplayGame) {
        return;
      }

      if (!window.isLoseGame) _this.GamePlay.getComponent("GamePlay").winGame();
    }, _StateForJS.StateForJs.timeToWin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJHYW1lUGxheSIsIkdhbWVDb250cm9sbGVyIiwiRWdnQ29udHJvbGxlciIsIm9uTG9hZCIsIndpbmRvdyIsImlzRHJhdyIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hfc3RhcnQiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJzdGFydCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJjcmVhdGVHcmFwaGljcyIsImlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZSIsImlzTG9zZUdhbWUiLCJpc1RvU3RvcmUiLCJnZXRDb21wb25lbnQiLCJpbnN0YWxsSGFuZGxlIiwicGxheVNvdW5kIiwiZHJhd1NvdW5kIiwibG9vcCIsImV2ZW50IiwiY3VycmVudEx2IiwiY2hhbmdlUmlnaWRib2R5VHlwZSIsIm9mZkV2ZW50Iiwic2NoZWR1bGVPbmNlIiwiaXNSZXBsYXlHYW1lIiwid2luR2FtZSIsInRpbWVUb1dpbiIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTyxJ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LENBQWxCO0FBQ0EsU0FBS2hDLElBQUwsQ0FBVWlDLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgICAgICBHYW1lUGxheTogY2MuTm9kZSxcclxuICAgICAgICBHYW1lQ29udHJvbGxlcjogY2MuTm9kZSxcclxuICAgICAgICBFZ2dDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHdpbmRvdy5pc0RyYXcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBTdGF0ZUZvckpzLmlzQ2FuRHJhdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB0b3VjaF9zdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYod2luZG93LmlzTG9zZUdhbWUgfHwgU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5U291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLmRyYXdTb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoX2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLkVnZ0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiRWdnQ29udHJvbGxlclwiKS5jaGFuZ2VSaWdpZGJvZHlUeXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pc1JlcGxheUdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5pc0xvc2VHYW1lKSB0aGlzLkdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLndpbkdhbWUoKTtcclxuICAgICAgICB9LCBTdGF0ZUZvckpzLnRpbWVUb1dpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5zdG9wU291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjcmVhdGVHcmFwaGljcygpIHtcclxuICAgICAgICB2YXIgZ3JhcGhpY3Nfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzX25vZGUueCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdyYXBoaWNzX25vZGUpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==