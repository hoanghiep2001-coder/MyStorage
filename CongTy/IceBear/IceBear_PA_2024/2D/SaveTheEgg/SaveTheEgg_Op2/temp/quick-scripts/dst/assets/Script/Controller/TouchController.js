
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
    audioManager: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start() {
    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
  },
  touch_end: function touch_end(event) {
    if (!_StateForJS.StateForJs.isCanDraw) {
      this.offEvent();
      this.createGraphics();
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJvbkxvYWQiLCJ3aW5kb3ciLCJpc0RyYXciLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoX3N0YXJ0IiwiVE9VQ0hfRU5EIiwidG91Y2hfZW5kIiwiVE9VQ0hfQ0FOQ0VMIiwic3RhcnQiLCJjcmVhdGVHcmFwaGljcyIsImdldENvbXBvbmVudCIsInBsYXlTb3VuZCIsImRyYXdTb3VuZCIsImxvb3AiLCJldmVudCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJvZmZFdmVudCIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTztBQUhULEdBSlA7QUFXTEUsRUFBQUEsTUFYSyxvQkFXSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWIsRUFBRSxDQUFDTyxJQUFILENBQVFPLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFiLEVBQUUsQ0FBQ08sSUFBSCxDQUFRTyxTQUFSLENBQWtCRyxTQUEvQixFQUEwQyxLQUFLQyxTQUEvQyxFQUEwRCxJQUExRDtBQUNBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhYixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkssWUFBL0IsRUFBNkMsS0FBS0QsU0FBbEQsRUFBNkQsSUFBN0Q7QUFDSCxHQWhCSTtBQW1CTEUsRUFBQUEsS0FuQkssbUJBbUJHO0FBQ0osU0FBS0MsY0FBTDtBQUNILEdBckJJO0FBd0JMTCxFQUFBQSxXQXhCSyx5QkF3QlM7QUFDVixTQUFLUixZQUFMLENBQWtCYyxZQUFsQixDQUErQixjQUEvQixFQUErQ0MsU0FBL0MsQ0FBeUQsV0FBekQ7QUFDQSxTQUFLZixZQUFMLENBQWtCYyxZQUFsQixDQUErQixjQUEvQixFQUErQ0UsU0FBL0MsQ0FBeURDLElBQXpELEdBQWdFLElBQWhFO0FBQ0gsR0EzQkk7QUE4QkxQLEVBQUFBLFNBQVMsRUFBRSxtQkFBVVEsS0FBVixFQUFpQjtBQUN4QixRQUFHLENBQUNDLHVCQUFXQyxTQUFmLEVBQTBCO0FBQ3RCLFdBQUtDLFFBQUw7QUFDQSxXQUFLUixjQUFMO0FBQ0g7O0FBQ0QsU0FBS2IsWUFBTCxDQUFrQmMsWUFBbEIsQ0FBK0IsY0FBL0IsRUFBK0NRLFNBQS9DLENBQXlELFdBQXpEO0FBQ0gsR0FwQ0k7QUF1Q0xELEVBQUFBLFFBdkNLLHNCQXVDTTtBQUNQLFNBQUtqQixJQUFMLENBQVVtQixHQUFWLENBQWMvQixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkMsV0FBaEM7QUFDQSxTQUFLSCxJQUFMLENBQVVtQixHQUFWLENBQWMvQixFQUFFLENBQUNPLElBQUgsQ0FBUU8sU0FBUixDQUFrQkcsU0FBaEM7QUFDSCxHQTFDSTtBQTZDTEksRUFBQUEsY0E3Q0ssNEJBNkNZO0FBQ2IsUUFBSVcsYUFBYSxHQUFHaEMsRUFBRSxDQUFDaUMsV0FBSCxDQUFlLEtBQUs3QixRQUFwQixDQUFwQjtBQUNBNEIsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBS3RCLElBQUwsQ0FBVXVCLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUFqREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlTb3VuZChcImRyYXdTb3VuZFwiKTtcclxuICAgICAgICB0aGlzLmF1ZGlvTWFuYWdlci5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikuZHJhd1NvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZighU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5zdG9wU291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjcmVhdGVHcmFwaGljcygpIHtcclxuICAgICAgICB2YXIgZ3JhcGhpY3Nfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzX25vZGUueCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdyYXBoaWNzX25vZGUpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==