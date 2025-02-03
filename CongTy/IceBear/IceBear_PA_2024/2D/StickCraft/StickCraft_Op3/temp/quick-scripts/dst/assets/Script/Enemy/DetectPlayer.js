
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/DetectPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2c04dzmqdFwJkeq9miBlhk', 'DetectPlayer');
// Script/Enemy/DetectPlayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    IsDetectPlayer: false
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.IsDetectPlayer = true;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    this.IsDetectPlayer = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRGV0ZWN0UGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSXNEZXRlY3RQbGF5ZXIiLCJzdGFydCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJvbkNvbGxpc2lvbkV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUU7QUFEUixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsS0FUSyxtQkFTSSxDQUVSLENBWEk7QUFhTDtBQUVBQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsU0FBS0osY0FBTCxHQUFzQixJQUF0QjtBQUNILEdBakJJO0FBbUJMSyxFQUFBQSxlQUFlLEVBQUUseUJBQVVGLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDLFNBQUtKLGNBQUwsR0FBc0IsS0FBdEI7QUFDSDtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIElzRGV0ZWN0UGxheWVyOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5Jc0RldGVjdFBsYXllciA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5Jc0RldGVjdFBsYXllciA9IGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19