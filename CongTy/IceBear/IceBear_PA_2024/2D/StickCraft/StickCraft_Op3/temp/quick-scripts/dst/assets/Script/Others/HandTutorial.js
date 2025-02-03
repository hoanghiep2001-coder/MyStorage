
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/HandTutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e28fbQo9BVHNLWxmVSNJWkz', 'HandTutorial');
// Script/Others/HandTutorial.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Hand: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.tween(this.Hand).repeatForever(cc.tween().to(1, {
      position: cc.v2(0, 20)
    }).to(1, {
      position: cc.v2(0, 0)
    })).start();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEhhbmRUdXRvcmlhbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkhhbmQiLCJOb2RlIiwic3RhcnQiLCJ0d2VlbiIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsInBvc2l0aW9uIiwidjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJO0FBQ0xOLElBQUFBLEVBQUUsQ0FBQ08sS0FBSCxDQUFTLEtBQUtILElBQWQsRUFDQ0ksYUFERCxDQUVJUixFQUFFLENBQUNPLEtBQUgsR0FBV0UsRUFBWCxDQUFjLENBQWQsRUFBaUI7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsRUFBVDtBQUFYLEtBQWpCLEVBQ0NGLEVBREQsQ0FDSSxDQURKLEVBQ087QUFBQ0MsTUFBQUEsUUFBUSxFQUFFVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVDtBQUFYLEtBRFAsQ0FGSixFQUlDTCxLQUpEO0FBS0gsR0FqQkksQ0FtQkw7O0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEhhbmQ6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5IYW5kKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDEsIHtwb3NpdGlvbjogY2MudjIoMCwgMjApfSlcclxuICAgICAgICAgICAgLnRvKDEsIHtwb3NpdGlvbjogY2MudjIoMCwgMCl9KSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=