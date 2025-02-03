
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/ButtonInstall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d8c3IIqOtKo5jLX4Dr7AFZ', 'ButtonInstall');
// Script/Others/ButtonInstall.js

"use strict";

var AudioManager = require("AudioManager");

var GameInfo = require("../Const/GameInfo");

cc.Class({
  "extends": cc.Component,
  properties: {
    // DhHiep
    hideMask: cc.Node,
    AudioManager: AudioManager,
    CTA_win: cc.Node,
    CTA_lose: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    // mtg && applovin
    this.hideMask.on(cc.Node.EventType.TOUCH_START, this.installHandle, this);
    if (GameInfo.isLose) this.CTA_win.active = false;
    if (GameInfo.isWin) this.CTA_lose.active = false;
    cc.tween(this.node).repeatForever(cc.tween(this.node).to(0.5, {
      scale: 0.9
    }).to(0.5, {
      scale: 1
    }, {
      easing: 'elasticOut'
    })).start();
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.tween(this.node).to(0.2, {
        scale: 0.9
      }, this).start();
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      cc.tween(this.node).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
  },
  // update (dt) {},
  installHandle: function installHandle() {
    // Handle for google playable ads
    cc.log("Click Install Handle");
    this.AudioManager.stopAllSound(); //If ad network is tiktok

    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    } // If ad network is google ads


    if (typeof ExitApi != "undefined") {
      ExitApi.exit();
      return;
    } // If ad netwrok is ironsources


    if (typeof dapi != "undefined") {
      dapi.openStoreUrl();
      return;
    } // If ad network support MRAID 2.0


    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open("https://play.google.com/store/apps/details?id=com.stickman.craftman");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/app/id1629824246?mt=8");
        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.stickman.craftman");
      return;
    } // If ad network is mindwork. window alway avaiable so skip undefined check


    window.install && window.install();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEJ1dHRvbkluc3RhbGwuanMiXSwibmFtZXMiOlsiQXVkaW9NYW5hZ2VyIiwicmVxdWlyZSIsIkdhbWVJbmZvIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoaWRlTWFzayIsIk5vZGUiLCJDVEFfd2luIiwiQ1RBX2xvc2UiLCJzdGFydCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJpbnN0YWxsSGFuZGxlIiwiaXNMb3NlIiwiYWN0aXZlIiwiaXNXaW4iLCJ0d2VlbiIsIm5vZGUiLCJyZXBlYXRGb3JldmVyIiwidG8iLCJzY2FsZSIsImVhc2luZyIsIk1PVVNFX0RPV04iLCJldmVudCIsIk1PVVNFX1VQIiwibG9nIiwic3RvcEFsbFNvdW5kIiwicGxheWFibGVTREsiLCJ3aW5kb3ciLCJvcGVuQXBwU3RvcmUiLCJFeGl0QXBpIiwiZXhpdCIsImRhcGkiLCJvcGVuU3RvcmVVcmwiLCJtcmFpZCIsInN5cyIsIm9zIiwiT1NfQU5EUk9JRCIsIkFORFJPSUQiLCJvcGVuIiwiT1NfSU9TIiwiSVBIT05FIiwiSVBBRCIsImluc3RhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUF4Qjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLElBRkw7QUFHUlIsSUFBQUEsWUFBWSxFQUFFQSxZQUhOO0FBS1JTLElBQUFBLE9BQU8sRUFBRU4sRUFBRSxDQUFDSyxJQUxKO0FBTVJFLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDSztBQU5MLEdBSFA7QUFZTDtBQUVBO0FBRUFHLEVBQUFBLEtBaEJLLG1CQWdCRztBQUNKO0FBQ0EsU0FBS0osUUFBTCxDQUFjSyxFQUFkLENBQWlCVCxFQUFFLENBQUNLLElBQUgsQ0FBUUssU0FBUixDQUFrQkMsV0FBbkMsRUFBZ0QsS0FBS0MsYUFBckQsRUFBb0UsSUFBcEU7QUFDQSxRQUFHYixRQUFRLENBQUNjLE1BQVosRUFBb0IsS0FBS1AsT0FBTCxDQUFhUSxNQUFiLEdBQXNCLEtBQXRCO0FBQ3BCLFFBQUdmLFFBQVEsQ0FBQ2dCLEtBQVosRUFBbUIsS0FBS1IsUUFBTCxDQUFjTyxNQUFkLEdBQXVCLEtBQXZCO0FBRW5CZCxJQUFBQSxFQUFFLENBQUNnQixLQUFILENBQVMsS0FBS0MsSUFBZCxFQUNLQyxhQURMLENBRVFsQixFQUFFLENBQUNnQixLQUFILENBQVMsS0FBS0MsSUFBZCxFQUNLRSxFQURMLENBQ1EsR0FEUixFQUNhO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBRGIsRUFFS0QsRUFGTCxDQUVRLEdBRlIsRUFFYTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUZiLEVBRTJCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRjNCLENBRlIsRUFLTWIsS0FMTjtBQU9BLFNBQUtTLElBQUwsQ0FBVVIsRUFBVixDQUFhVCxFQUFFLENBQUNLLElBQUgsQ0FBUUssU0FBUixDQUFrQlksVUFBL0IsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtBQUN4RHZCLE1BQUFBLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBUyxLQUFLQyxJQUFkLEVBQW9CRSxFQUFwQixDQUF1QixHQUF2QixFQUE0QjtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUE1QixFQUE0QyxJQUE1QyxFQUFrRFosS0FBbEQ7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUtTLElBQUwsQ0FBVVIsRUFBVixDQUFhVCxFQUFFLENBQUNLLElBQUgsQ0FBUUssU0FBUixDQUFrQmMsUUFBL0IsRUFBeUMsVUFBVUQsS0FBVixFQUFpQjtBQUN0RHZCLE1BQUFBLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBUyxLQUFLQyxJQUFkLEVBQW9CRSxFQUFwQixDQUF1QixHQUF2QixFQUE0QjtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUE1QixFQUEwQyxJQUExQyxFQUFnRFosS0FBaEQ7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBcENJO0FBc0NMO0FBRUFJLEVBQUFBLGFBeENLLDJCQXdDVztBQUNaO0FBQ0FaLElBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBTyxzQkFBUDtBQUNBLFNBQUs1QixZQUFMLENBQWtCNkIsWUFBbEIsR0FIWSxDQU9aOztBQUNBLFFBQUksT0FBUUMsV0FBUixJQUF3QixXQUE1QixFQUF5QztBQUNyQ0MsTUFBQUEsTUFBTSxDQUFDRCxXQUFQLENBQW1CRSxZQUFuQjtBQUNBO0FBQ0gsS0FYVyxDQWFaOzs7QUFDQSxRQUFJLE9BQVFDLE9BQVIsSUFBb0IsV0FBeEIsRUFBcUM7QUFDakNBLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBO0FBQ0gsS0FqQlcsQ0FtQlo7OztBQUNBLFFBQUksT0FBUUMsSUFBUixJQUFpQixXQUFyQixFQUFrQztBQUM5QkEsTUFBQUEsSUFBSSxDQUFDQyxZQUFMO0FBQ0E7QUFDSCxLQXZCVyxDQXlCWjs7O0FBQ0EsUUFBSSxPQUFRQyxLQUFSLElBQWtCLFdBQXRCLEVBQW1DO0FBQy9CLFVBQUlsQyxFQUFFLENBQUNtQyxHQUFILENBQU9DLEVBQVAsSUFBYXBDLEVBQUUsQ0FBQ21DLEdBQUgsQ0FBT0UsVUFBcEIsSUFBa0NyQyxFQUFFLENBQUNtQyxHQUFILENBQU9DLEVBQVAsSUFBYXBDLEVBQUUsQ0FBQ21DLEdBQUgsQ0FBT0csT0FBMUQsRUFBbUU7QUFDL0RKLFFBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLHFFQUFYO0FBQ0E7QUFDSDs7QUFFRCxVQUFJdkMsRUFBRSxDQUFDbUMsR0FBSCxDQUFPQyxFQUFQLElBQWFwQyxFQUFFLENBQUNtQyxHQUFILENBQU9LLE1BQXBCLElBQThCeEMsRUFBRSxDQUFDbUMsR0FBSCxDQUFPQyxFQUFQLElBQWFwQyxFQUFFLENBQUNtQyxHQUFILENBQU9NLE1BQWxELElBQTREekMsRUFBRSxDQUFDbUMsR0FBSCxDQUFPQyxFQUFQLElBQWFwQyxFQUFFLENBQUNtQyxHQUFILENBQU9PLElBQXBGLEVBQTBGO0FBQ3RGUixRQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVyxtREFBWDtBQUNBO0FBQ0g7O0FBRURMLE1BQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLHFFQUFYO0FBQ0E7QUFDSCxLQXZDVyxDQXdDWjs7O0FBQ0FYLElBQUFBLE1BQU0sQ0FBQ2UsT0FBUCxJQUFrQmYsTUFBTSxDQUFDZSxPQUFQLEVBQWxCO0FBQ0g7QUFsRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCJBdWRpb01hbmFnZXJcIik7XHJcbmNvbnN0IEdhbWVJbmZvID0gcmVxdWlyZShcIi4uL0NvbnN0L0dhbWVJbmZvXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIERoSGllcFxyXG4gICAgICAgIGhpZGVNYXNrOiBjYy5Ob2RlLFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyLFxyXG5cclxuICAgICAgICBDVEFfd2luOiBjYy5Ob2RlLFxyXG4gICAgICAgIENUQV9sb3NlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbXRnICYmIGFwcGxvdmluXHJcbiAgICAgICAgdGhpcy5oaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBpZihHYW1lSW5mby5pc0xvc2UpIHRoaXMuQ1RBX3dpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihHYW1lSW5mby5pc1dpbikgdGhpcy5DVEFfbG9zZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7IHNjYWxlOiAwLjkgfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgaW5zdGFsbEhhbmRsZSgpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZm9yIGdvb2dsZSBwbGF5YWJsZSBhZHNcclxuICAgICAgICBjYy5sb2coXCJDbGljayBJbnN0YWxsIEhhbmRsZVwiKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZiAobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnN0aWNrbWFuLmNyYWZ0bWFuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDE2Mjk4MjQyNDY/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uc3RpY2ttYW4uY3JhZnRtYW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19