
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/UIGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd451a3z+gxLII7oceSoPGiY', 'UIGameController');
// scripts/UIGameController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    camera: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    this.node.setPosition(this.camera.getPosition());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlHYW1lQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNhbWVyYSIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0s7QUFESCxHQUhQO0FBUUxDLEVBQUFBLEtBUkssbUJBUUUsQ0FFTixDQVZJO0FBWUpDLEVBQUFBLE1BWkksa0JBWUlDLEVBWkosRUFZUTtBQUNULFNBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLTixNQUFMLENBQVlPLFdBQVosRUFBdEI7QUFDRjtBQWRHLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhbWVyYTogY2MuTm9kZSxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgfSxcclxuXHJcbiAgIFxyXG5cclxufSk7XHJcbiJdfQ==