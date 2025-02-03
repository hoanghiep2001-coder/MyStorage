
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/CustomButtonAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7acebqphMtAR5w2MXkyjGdp', 'CustomButtonAction');
// Script/Helper/CustomButtonAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Mouse Event
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.log("On Mouse Down");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      cc.log("On Mouse Up");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      cc.log("On Mouse Leave");
    }, this); // Touch Event

    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      cc.log("On Touch Start");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      cc.log("On Touch End");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      cc.log("On Touch Cancel");
    }, this);
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXEN1c3RvbUJ1dHRvbkFjdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJsb2ciLCJNT1VTRV9VUCIsIk1PVVNFX0xFQVZFIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ047QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFVBQVNDLEtBQVQsRUFBZTtBQUN0RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sZUFBUDtBQUNILEtBRkQsRUFFRyxJQUZIO0FBSUEsU0FBS04sSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCSSxRQUEvQixFQUF5QyxVQUFTRixLQUFULEVBQWU7QUFDcERWLE1BQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPLGFBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkssV0FBL0IsRUFBNEMsVUFBU0gsS0FBVCxFQUFlO0FBQ3ZEVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxnQkFBUDtBQUNILEtBRkQsRUFFRyxJQUZILEVBVk0sQ0FlTjs7QUFDQSxTQUFLTixJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JNLFdBQS9CLEVBQTRDLFVBQVNKLEtBQVQsRUFBZTtBQUN2RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sZ0JBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQk8sU0FBL0IsRUFBMEMsVUFBU0wsS0FBVCxFQUFlO0FBQ3JEVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxjQUFQO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFJQSxTQUFLTixJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JRLFlBQS9CLEVBQTZDLFVBQVNOLEtBQVQsRUFBZTtBQUN4RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8saUJBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBcENJO0FBc0NMTSxFQUFBQSxLQXRDSyxtQkFzQ0ksQ0FFUixDQXhDSSxDQTBDTDs7QUExQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gTW91c2UgRXZlbnRcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBNb3VzZSBEb3duXCIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY2MubG9nKFwiT24gTW91c2UgVXBcIik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBNb3VzZSBMZWF2ZVwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIk9uIFRvdWNoIFN0YXJ0XCIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIk9uIFRvdWNoIEVuZFwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBUb3VjaCBDYW5jZWxcIik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19