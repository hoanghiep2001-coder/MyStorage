
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
    gameController: cc.Node,
    gamePlay: cc.Node
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
    // toStore
    // this.gameController.getComponent("GameController").installHandle();
    if (window.isWin) {
      this.gameController.getComponent("GameController").installHandle();
    }

    this.gamePlay.getComponent("GamePlay").handleIronSourcePlaySound();
    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
    this.nodesController.getComponent("NodesController").hint.active = false;
    this.nodesController.getComponent("NodesController").text_draw.active = false;
  },
  touch_end: function touch_end(event) {
    if (!_StateForJS.StateForJs.isCanDraw || window.isWin) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJnYW1lQ29udHJvbGxlciIsImdhbWVQbGF5Iiwib25Mb2FkIiwid2luZG93IiwiaXNEcmF3Iiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaF9zdGFydCIsIlRPVUNIX0VORCIsInRvdWNoX2VuZCIsIlRPVUNIX0NBTkNFTCIsInN0YXJ0IiwiY3JlYXRlR3JhcGhpY3MiLCJpc1dpbiIsImdldENvbXBvbmVudCIsImluc3RhbGxIYW5kbGUiLCJoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kIiwicGxheVNvdW5kIiwiZHJhd1NvdW5kIiwibG9vcCIsImhpbnQiLCJhY3RpdmUiLCJ0ZXh0X2RyYXciLCJldmVudCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJvZmZFdmVudCIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTyxJQUhUO0FBSVJFLElBQUFBLGNBQWMsRUFBRVQsRUFBRSxDQUFDTyxJQUpYO0FBS1JHLElBQUFBLFFBQVEsRUFBRVYsRUFBRSxDQUFDTztBQUxMLEdBSlA7QUFhTEksRUFBQUEsTUFiSyxvQkFhSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWYsRUFBRSxDQUFDTyxJQUFILENBQVFTLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFmLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCRyxTQUEvQixFQUEwQyxLQUFLQyxTQUEvQyxFQUEwRCxJQUExRDtBQUNBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhZixFQUFFLENBQUNPLElBQUgsQ0FBUVMsU0FBUixDQUFrQkssWUFBL0IsRUFBNkMsS0FBS0QsU0FBbEQsRUFBNkQsSUFBN0Q7QUFDSCxHQWxCSTtBQXFCTEUsRUFBQUEsS0FyQkssbUJBcUJHO0FBQ0osU0FBS0MsY0FBTDtBQUNILEdBdkJJO0FBMEJMTCxFQUFBQSxXQTFCSyx5QkEwQlM7QUFDVjtBQUNBO0FBRUEsUUFBR04sTUFBTSxDQUFDWSxLQUFWLEVBQWlCO0FBQ2IsV0FBS2YsY0FBTCxDQUFvQmdCLFlBQXBCLENBQWlDLGdCQUFqQyxFQUFtREMsYUFBbkQ7QUFDSDs7QUFFRCxTQUFLaEIsUUFBTCxDQUFjZSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDRSx5QkFBdkM7QUFDQSxTQUFLbkIsWUFBTCxDQUFrQmlCLFlBQWxCLENBQStCLGNBQS9CLEVBQStDRyxTQUEvQyxDQUF5RCxXQUF6RDtBQUNBLFNBQUtwQixZQUFMLENBQWtCaUIsWUFBbEIsQ0FBK0IsY0FBL0IsRUFBK0NJLFNBQS9DLENBQXlEQyxJQUF6RCxHQUFnRSxJQUFoRTtBQUNBLFNBQUt4QixlQUFMLENBQXFCbUIsWUFBckIsQ0FBa0MsaUJBQWxDLEVBQXFETSxJQUFyRCxDQUEwREMsTUFBMUQsR0FBbUUsS0FBbkU7QUFDQSxTQUFLMUIsZUFBTCxDQUFxQm1CLFlBQXJCLENBQWtDLGlCQUFsQyxFQUFxRFEsU0FBckQsQ0FBK0RELE1BQS9ELEdBQXdFLEtBQXhFO0FBQ0gsR0F2Q0k7QUEwQ0xaLEVBQUFBLFNBQVMsRUFBRSxtQkFBVWMsS0FBVixFQUFpQjtBQUN4QixRQUFHLENBQUNDLHVCQUFXQyxTQUFaLElBQXlCeEIsTUFBTSxDQUFDWSxLQUFuQyxFQUEwQztBQUN0QyxXQUFLYSxRQUFMO0FBQ0EsV0FBS2QsY0FBTDtBQUNIOztBQUNELFNBQUtmLFlBQUwsQ0FBa0JpQixZQUFsQixDQUErQixjQUEvQixFQUErQ2EsU0FBL0MsQ0FBeUQsV0FBekQ7QUFDSCxHQWhESTtBQW1ETEQsRUFBQUEsUUFuREssc0JBbURNO0FBQ1AsU0FBS3ZCLElBQUwsQ0FBVXlCLEdBQVYsQ0FBY3ZDLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCQyxXQUFoQztBQUNBLFNBQUtILElBQUwsQ0FBVXlCLEdBQVYsQ0FBY3ZDLEVBQUUsQ0FBQ08sSUFBSCxDQUFRUyxTQUFSLENBQWtCRyxTQUFoQztBQUNILEdBdERJO0FBeURMSSxFQUFBQSxjQXpESyw0QkF5RFk7QUFDYixRQUFJaUIsYUFBYSxHQUFHeEMsRUFBRSxDQUFDeUMsV0FBSCxDQUFlLEtBQUtyQyxRQUFwQixDQUFwQjtBQUNBb0MsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBSzVCLElBQUwsQ0FBVTZCLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUE3REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgICAgICBnYW1lQ29udHJvbGxlcjogY2MuTm9kZSxcclxuICAgICAgICBnYW1lUGxheTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdG91Y2hfc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdG9TdG9yZVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIikuaW5zdGFsbEhhbmRsZSgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuaXNXaW4pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLmF1ZGlvTWFuYWdlci5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheVNvdW5kKFwiZHJhd1NvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5kcmF3U291bmQubG9vcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiTm9kZXNDb250cm9sbGVyXCIpLmhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiTm9kZXNDb250cm9sbGVyXCIpLnRleHRfZHJhdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoX2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIVN0YXRlRm9ySnMuaXNDYW5EcmF3IHx8IHdpbmRvdy5pc1dpbikge1xyXG4gICAgICAgICAgICB0aGlzLm9mZkV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JhcGhpY3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnN0b3BTb3VuZChcImRyYXdTb3VuZFwiKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9mZkV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGNyZWF0ZUdyYXBoaWNzKCkge1xyXG4gICAgICAgIHZhciBncmFwaGljc19ub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmFwaGljcyk7XHJcbiAgICAgICAgZ3JhcGhpY3Nfbm9kZS54ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ3JhcGhpY3Nfbm9kZSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19