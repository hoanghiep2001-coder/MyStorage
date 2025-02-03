
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ToStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '078a3wCCVdJ5qP81bvcA87q', 'ToStore');
// Script/ToStore.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    window.gameReady && window.gameReady();
    console.log('start');
  },
  onFinish: function onFinish() {
    window.gameEnd && window.gameEnd();
  },
  installHandle: function installHandle() {
    console.log('store');
    cc.audioEngine.stopAll();
    this.onFinish(); //If ad network is tiktok

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
        mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/app/id1589022394?mt=8");
        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUb1N0b3JlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJ3aW5kb3ciLCJnYW1lUmVhZHkiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2giLCJnYW1lRW5kIiwiaW5zdGFsbEhhbmRsZSIsImF1ZGlvRW5naW5lIiwic3RvcEFsbCIsInBsYXlhYmxlU0RLIiwib3BlbkFwcFN0b3JlIiwiRXhpdEFwaSIsImV4aXQiLCJkYXBpIiwib3BlblN0b3JlVXJsIiwibXJhaWQiLCJzeXMiLCJvcyIsIk9TX0FORFJPSUQiLCJBTkRST0lEIiwib3BlbiIsIk9TX0lPUyIsIklQSE9ORSIsIklQQUQiLCJpbnN0YWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxNQU5LLG9CQU1JLENBQ1IsQ0FQSTtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHO0FBQ0pDLElBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxJQUFvQkQsTUFBTSxDQUFDQyxTQUFQLEVBQXBCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLFFBZEssc0JBY007QUFDUEosSUFBQUEsTUFBTSxDQUFDSyxPQUFQLElBQWtCTCxNQUFNLENBQUNLLE9BQVAsRUFBbEI7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FULElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxPQUFmO0FBQ0EsU0FBS0osUUFBTCxHQUh1QixDQUt2Qjs7QUFDQSxRQUFJLE9BQVFLLFdBQVIsSUFBd0IsV0FBNUIsRUFBeUM7QUFDckNULE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxDQUFtQkMsWUFBbkI7QUFDQTtBQUNILEtBVHNCLENBV3ZCOzs7QUFDQSxRQUFJLE9BQVFDLE9BQVIsSUFBb0IsV0FBeEIsRUFBcUM7QUFDakNBLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBO0FBQ0gsS0Fmc0IsQ0FpQnZCOzs7QUFDQSxRQUFJLE9BQVFDLElBQVIsSUFBaUIsV0FBckIsRUFBa0M7QUFDOUJBLE1BQUFBLElBQUksQ0FBQ0MsWUFBTDtBQUNBO0FBQ0gsS0FyQnNCLENBdUJ2Qjs7O0FBQ0EsUUFBSSxPQUFRQyxLQUFSLElBQWtCLFdBQXRCLEVBQW1DO0FBQy9CLFVBQUlyQixFQUFFLENBQUNzQixHQUFILENBQU9DLEVBQVAsSUFBYXZCLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBT0UsVUFBcEIsSUFBa0N4QixFQUFFLENBQUNzQixHQUFILENBQU9DLEVBQVAsSUFBYXZCLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBT0csT0FBMUQsRUFBbUU7QUFDL0RKLFFBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLG1FQUFYO0FBQ0E7QUFDSDs7QUFFRCxVQUFJMUIsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9LLE1BQXBCLElBQThCM0IsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9NLE1BQWxELElBQTRENUIsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9PLElBQXBGLEVBQTBGO0FBQ3RGUixRQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVyxtREFBWDtBQUNBO0FBQ0g7O0FBRURMLE1BQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLG1FQUFYO0FBQ0E7QUFDSCxLQXJDc0IsQ0FzQ3ZCOzs7QUFDQXBCLElBQUFBLE1BQU0sQ0FBQ3dCLE9BQVAsSUFBa0J4QixNQUFNLENBQUN3QixPQUFQLEVBQWxCO0FBRUg7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhbGxIYW5kbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUnKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZiAobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy50aGllZnB1enpsZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQxNTg5MDIyMzk0P210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy50aGllZnB1enpsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19