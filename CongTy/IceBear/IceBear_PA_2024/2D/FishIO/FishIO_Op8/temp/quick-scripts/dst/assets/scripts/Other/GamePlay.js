
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d0b2UAFNhFjZ33buq0tdva', 'GamePlay');
// scripts/Other/GamePlay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gc: cc.Node,
    bgWarning: cc.Node,
    timeShowWarning: 8,
    boss: cc.Node,
    bgMove: cc.Node,
    isIronSource: cc.Boolean
  },
  playBgMusic: function playBgMusic() {
    if (!this.isPlayBgMusic) {
      this.gameController.playAudio(this.gameController.reviveSound);
      this.gameController.playAudio(this.gameController.audioBgMusic);
      this.isPlayBgMusic = true;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    cc.director.getPhysicsManager().enabled = true;
    var collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true; //collisionManager.enabledDebugDraw = true;

    this.gameController = this.gc.getComponent("GameController"); // ironSource

    this.isPlayBgMusic = false;

    if (this.isIronSource) {
      this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
        if (_this.isPlayBgMusic) return;

        _this.playBgMusic();
      });
    } else {
      this.playBgMusic();
    } // ----------------------

  },
  showBoss: function showBoss() {
    this.scheduleOnce(function () {
      this.gameController.playAudio(this.gameController.audioWarning);
      this.bgWarning.active = true;
      this.scheduleOnce(function () {
        this.bgWarning.active = false;
        this.boss.active = true;
      }, 3);
    }, this.timeShowWarning);
  },
  showPopupOptions: function showPopupOptions() {
    console.log("test");
  },
  start: function start() {},
  update: function update(dt) {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.bgMove.y = 0;
    } else {
      this.bgMove.y = -800;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXEdhbWVQbGF5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2MiLCJOb2RlIiwiYmdXYXJuaW5nIiwidGltZVNob3dXYXJuaW5nIiwiYm9zcyIsImJnTW92ZSIsImlzSXJvblNvdXJjZSIsIkJvb2xlYW4iLCJwbGF5QmdNdXNpYyIsImlzUGxheUJnTXVzaWMiLCJnYW1lQ29udHJvbGxlciIsInBsYXlBdWRpbyIsInJldml2ZVNvdW5kIiwiYXVkaW9CZ011c2ljIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJjb2xsaXNpb25NYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImdldENvbXBvbmVudCIsIm5vZGUiLCJwYXJlbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJzaG93Qm9zcyIsInNjaGVkdWxlT25jZSIsImF1ZGlvV2FybmluZyIsImFjdGl2ZSIsInNob3dQb3B1cE9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQztBQUVSQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGTjtBQUdSRSxJQUFBQSxlQUFlLEVBQUUsQ0FIVDtBQUlSQyxJQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKRDtBQUtSSSxJQUFBQSxNQUFNLEVBQUVULEVBQUUsQ0FBQ0ssSUFMSDtBQU1SSyxJQUFBQSxZQUFZLEVBQUVWLEVBQUUsQ0FBQ1c7QUFOVCxHQUhQO0FBYUxDLEVBQUFBLFdBYksseUJBYVM7QUFDVixRQUFJLENBQUMsS0FBS0MsYUFBVixFQUF5QjtBQUNyQixXQUFLQyxjQUFMLENBQW9CQyxTQUFwQixDQUE4QixLQUFLRCxjQUFMLENBQW9CRSxXQUFsRDtBQUNBLFdBQUtGLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JHLFlBQWxEO0FBQ0EsV0FBS0osYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0osR0FuQkk7QUFxQkxLLEVBQUFBLE1BckJLLG9CQXFCSTtBQUFBOztBQUNMbEIsSUFBQUEsRUFBRSxDQUFDbUIsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBR3RCLEVBQUUsQ0FBQ21CLFFBQUgsQ0FBWUksbUJBQVosRUFBdkI7QUFDQUQsSUFBQUEsZ0JBQWdCLENBQUNELE9BQWpCLEdBQTJCLElBQTNCLENBSEssQ0FJTDs7QUFFQSxTQUFLUCxjQUFMLEdBQXNCLEtBQUtWLEVBQUwsQ0FBUW9CLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXRCLENBTkssQ0FRTDs7QUFDQSxTQUFLWCxhQUFMLEdBQXFCLEtBQXJCOztBQUNBLFFBQUksS0FBS0gsWUFBVCxFQUF1QjtBQUNuQixXQUFLZSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEVBQWpCLENBQW9CM0IsRUFBRSxDQUFDSyxJQUFILENBQVF1QixTQUFSLENBQWtCQyxXQUF0QyxFQUFtRCxVQUFDQyxLQUFELEVBQVc7QUFDMUQsWUFBSSxLQUFJLENBQUNqQixhQUFULEVBQXdCOztBQUN4QixRQUFBLEtBQUksQ0FBQ0QsV0FBTDtBQUNILE9BSEQ7QUFJSCxLQUxELE1BS087QUFDSCxXQUFLQSxXQUFMO0FBQ0gsS0FqQkksQ0FrQkw7O0FBRUgsR0F6Q0k7QUEyQ0xtQixFQUFBQSxRQTNDSyxzQkEyQ007QUFDUCxTQUFLQyxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2xCLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JtQixZQUFsRDtBQUNBLFdBQUszQixTQUFMLENBQWU0QixNQUFmLEdBQXdCLElBQXhCO0FBQ0EsV0FBS0YsWUFBTCxDQUFrQixZQUFZO0FBQzFCLGFBQUsxQixTQUFMLENBQWU0QixNQUFmLEdBQXdCLEtBQXhCO0FBQ0EsYUFBSzFCLElBQUwsQ0FBVTBCLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxPQUhELEVBR0csQ0FISDtBQUlILEtBUEQsRUFPRyxLQUFLM0IsZUFQUjtBQVFILEdBcERJO0FBdURMNEIsRUFBQUEsZ0JBdkRLLDhCQXVEYztBQUNmQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBRUgsR0ExREk7QUE2RExDLEVBQUFBLEtBN0RLLG1CQTZERyxDQUNQLENBOURJO0FBZ0VMQyxFQUFBQSxNQWhFSyxrQkFnRUVDLEVBaEVGLEVBZ0VNO0FBRVAsUUFBSXhDLEVBQUUsQ0FBQ3lDLElBQUgsQ0FBUUMsWUFBUixHQUF1QkMsS0FBdkIsR0FBK0IzQyxFQUFFLENBQUN5QyxJQUFILENBQVFDLFlBQVIsR0FBdUJFLE1BQTFELEVBQWtFO0FBQzlELFdBQUtuQyxNQUFMLENBQVlvQyxDQUFaLEdBQWdCLENBQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS3BDLE1BQUwsQ0FBWW9DLENBQVosR0FBZ0IsQ0FBQyxHQUFqQjtBQUNIO0FBQ0o7QUF2RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdjOiBjYy5Ob2RlLFxuICAgICAgICBiZ1dhcm5pbmc6IGNjLk5vZGUsXG4gICAgICAgIHRpbWVTaG93V2FybmluZzogOCxcbiAgICAgICAgYm9zczogY2MuTm9kZSxcbiAgICAgICAgYmdNb3ZlOiBjYy5Ob2RlLFxuICAgICAgICBpc0lyb25Tb3VyY2U6IGNjLkJvb2xlYW4sXG5cbiAgICB9LFxuXG4gICAgcGxheUJnTXVzaWMoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1BsYXlCZ011c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlBdWRpbyh0aGlzLmdhbWVDb250cm9sbGVyLnJldml2ZVNvdW5kKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUF1ZGlvKHRoaXMuZ2FtZUNvbnRyb2xsZXIuYXVkaW9CZ011c2ljKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5QmdNdXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy9jb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLmdjLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpO1xuXG4gICAgICAgIC8vIGlyb25Tb3VyY2VcbiAgICAgICAgdGhpcy5pc1BsYXlCZ011c2ljID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzSXJvblNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5QmdNdXNpYykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUJnTXVzaWMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5QmdNdXNpYygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIH0sXG5cbiAgICBzaG93Qm9zcygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5QXVkaW8odGhpcy5nYW1lQ29udHJvbGxlci5hdWRpb1dhcm5pbmcpO1xuICAgICAgICAgICAgdGhpcy5iZ1dhcm5pbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJnV2FybmluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3MuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDMpO1xuICAgICAgICB9LCB0aGlzLnRpbWVTaG93V2FybmluZyk7XG4gICAgfSxcblxuXG4gICAgc2hvd1BvcHVwT3B0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBcbiAgICB9LFxuXG5cbiAgICBzdGFydCgpIHtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5iZ01vdmUueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnTW92ZS55ID0gLTgwMDtcbiAgICAgICAgfVxuICAgIH0sXG5cblxufSk7XG4iXX0=