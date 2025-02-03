
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/GameEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15701YENilEgLfGYzImXtGW', 'GameEnum');
// Script/Helper/GameEnum.js

"use strict";

var EnEnemies = cc.Enum({
  None: 0,
  Zombie: 1,
  PoisonVine: 2
});
var EnFacing = cc.Enum({
  Left: 0,
  Right: 1
});
var EnGameState = cc.Enum({});
var EnWeapon = cc.Enum({
  None: 0,
  Sword: 1,
  Archer: 2
});
var EnStickMode = cc.Enum({
  Normal: 0,
  Sword: 1,
  Archer: 2
});
var EnStickState = cc.Enum({
  None: 100,
  Idle: 0,
  Run: 1,
  JumpStart: 2,
  JumpUp: 3,
  JumpDown: 4,
  JumpLanded: 5,
  DashA: 6,
  DashB: 7,
  Attack1: 8,
  Attack2: 9,
  Attack3: 10,
  Attack4: 11,
  Win: 12
});
var EnEnemyState = cc.Enum({
  Idle: 0,
  Walk: 1,
  Attack: 2
});
module.exports.EnEnemies = EnEnemies;
module.exports.EnFacing = EnFacing;
module.exports.EnGameState = EnGameState;
module.exports.EnWeapon = EnWeapon;
module.exports.EnStickState = EnStickState;
module.exports.EnStickMode = EnStickMode;
module.exports.EnEnemyState = EnEnemyState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXEdhbWVFbnVtLmpzIl0sIm5hbWVzIjpbIkVuRW5lbWllcyIsImNjIiwiRW51bSIsIk5vbmUiLCJab21iaWUiLCJQb2lzb25WaW5lIiwiRW5GYWNpbmciLCJMZWZ0IiwiUmlnaHQiLCJFbkdhbWVTdGF0ZSIsIkVuV2VhcG9uIiwiU3dvcmQiLCJBcmNoZXIiLCJFblN0aWNrTW9kZSIsIk5vcm1hbCIsIkVuU3RpY2tTdGF0ZSIsIklkbGUiLCJSdW4iLCJKdW1wU3RhcnQiLCJKdW1wVXAiLCJKdW1wRG93biIsIkp1bXBMYW5kZWQiLCJEYXNoQSIsIkRhc2hCIiwiQXR0YWNrMSIsIkF0dGFjazIiLCJBdHRhY2szIiwiQXR0YWNrNCIsIldpbiIsIkVuRW5lbXlTdGF0ZSIsIldhbGsiLCJBdHRhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDcEJDLEVBQUFBLElBQUksRUFBRSxDQURjO0FBRXBCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGWTtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQ0FBUixDQUFoQjtBQU1BLElBQUlDLFFBQVEsR0FBR0wsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDckJLLEVBQUFBLElBQUksRUFBRSxDQURlO0FBRXJCQyxFQUFBQSxLQUFLLEVBQUU7QUFGYyxDQUFSLENBQWY7QUFLQSxJQUFJQyxXQUFXLEdBQUdSLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEVBQVIsQ0FBbEI7QUFJQSxJQUFJUSxRQUFRLEdBQUdULEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ25CQyxFQUFBQSxJQUFJLEVBQUUsQ0FEYTtBQUVuQlEsRUFBQUEsS0FBSyxFQUFFLENBRlk7QUFHbkJDLEVBQUFBLE1BQU0sRUFBRTtBQUhXLENBQVIsQ0FBZjtBQU1BLElBQUlDLFdBQVcsR0FBR1osRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdEJZLEVBQUFBLE1BQU0sRUFBRSxDQURjO0FBRXRCSCxFQUFBQSxLQUFLLEVBQUUsQ0FGZTtBQUd0QkMsRUFBQUEsTUFBTSxFQUFFO0FBSGMsQ0FBUixDQUFsQjtBQU1BLElBQUlHLFlBQVksR0FBR2QsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdkJDLEVBQUFBLElBQUksRUFBRSxHQURpQjtBQUV2QmEsRUFBQUEsSUFBSSxFQUFFLENBRmlCO0FBR3ZCQyxFQUFBQSxHQUFHLEVBQUUsQ0FIa0I7QUFLdkJDLEVBQUFBLFNBQVMsRUFBRSxDQUxZO0FBTXZCQyxFQUFBQSxNQUFNLEVBQUUsQ0FOZTtBQU92QkMsRUFBQUEsUUFBUSxFQUFFLENBUGE7QUFRdkJDLEVBQUFBLFVBQVUsRUFBRSxDQVJXO0FBVXZCQyxFQUFBQSxLQUFLLEVBQUUsQ0FWZ0I7QUFXdkJDLEVBQUFBLEtBQUssRUFBRSxDQVhnQjtBQWF2QkMsRUFBQUEsT0FBTyxFQUFFLENBYmM7QUFjdkJDLEVBQUFBLE9BQU8sRUFBRSxDQWRjO0FBZXZCQyxFQUFBQSxPQUFPLEVBQUUsRUFmYztBQWdCdkJDLEVBQUFBLE9BQU8sRUFBRSxFQWhCYztBQWtCdkJDLEVBQUFBLEdBQUcsRUFBRTtBQWxCa0IsQ0FBUixDQUFuQjtBQXFCQSxJQUFJQyxZQUFZLEdBQUc1QixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QmMsRUFBQUEsSUFBSSxFQUFFLENBRGlCO0FBRXZCYyxFQUFBQSxJQUFJLEVBQUUsQ0FGaUI7QUFHdkJDLEVBQUFBLE1BQU0sRUFBRTtBQUhlLENBQVIsQ0FBbkI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLENBQWVqQyxTQUFmLEdBQTJCQSxTQUEzQjtBQUNBZ0MsTUFBTSxDQUFDQyxPQUFQLENBQWUzQixRQUFmLEdBQTBCQSxRQUExQjtBQUNBMEIsTUFBTSxDQUFDQyxPQUFQLENBQWV4QixXQUFmLEdBQTZCQSxXQUE3QjtBQUNBdUIsTUFBTSxDQUFDQyxPQUFQLENBQWV2QixRQUFmLEdBQTBCQSxRQUExQjtBQUNBc0IsTUFBTSxDQUFDQyxPQUFQLENBQWVsQixZQUFmLEdBQThCQSxZQUE5QjtBQUNBaUIsTUFBTSxDQUFDQyxPQUFQLENBQWVwQixXQUFmLEdBQTZCQSxXQUE3QjtBQUNBbUIsTUFBTSxDQUFDQyxPQUFQLENBQWVKLFlBQWYsR0FBOEJBLFlBQTlCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRW5FbmVtaWVzID0gY2MuRW51bSh7XHJcbiAgICBOb25lOiAwLFxyXG4gICAgWm9tYmllOiAxLFxyXG4gICAgUG9pc29uVmluZTogMlxyXG59KTtcclxuXHJcbnZhciBFbkZhY2luZyA9IGNjLkVudW0oe1xyXG4gIExlZnQ6IDAsXHJcbiAgUmlnaHQ6IDEsXHJcbn0pO1xyXG5cclxudmFyIEVuR2FtZVN0YXRlID0gY2MuRW51bSh7XHJcbiAgICBcclxufSk7XHJcblxyXG52YXIgRW5XZWFwb24gPSBjYy5FbnVtKHtcclxuICAgIE5vbmU6IDAsXHJcbiAgICBTd29yZDogMSxcclxuICAgIEFyY2hlcjogMlxyXG59KTtcclxuXHJcbnZhciBFblN0aWNrTW9kZSA9IGNjLkVudW0oe1xyXG4gICAgTm9ybWFsOiAwLFxyXG4gICAgU3dvcmQ6IDEsXHJcbiAgICBBcmNoZXI6IDJcclxufSk7XHJcblxyXG52YXIgRW5TdGlja1N0YXRlID0gY2MuRW51bSh7XHJcbiAgICBOb25lOiAxMDAsXHJcbiAgICBJZGxlOiAwLFxyXG4gICAgUnVuOiAxLFxyXG5cclxuICAgIEp1bXBTdGFydDogMixcclxuICAgIEp1bXBVcDogMyxcclxuICAgIEp1bXBEb3duOiA0LFxyXG4gICAgSnVtcExhbmRlZDogNSxcclxuXHJcbiAgICBEYXNoQTogNixcclxuICAgIERhc2hCOiA3LFxyXG5cclxuICAgIEF0dGFjazE6IDgsXHJcbiAgICBBdHRhY2syOiA5LFxyXG4gICAgQXR0YWNrMzogMTAsXHJcbiAgICBBdHRhY2s0OiAxMSxcclxuXHJcbiAgICBXaW46IDEyLFxyXG59KTtcclxuXHJcbnZhciBFbkVuZW15U3RhdGUgPSBjYy5FbnVtKHtcclxuICAgIElkbGU6IDAsXHJcbiAgICBXYWxrOiAxLFxyXG4gICAgQXR0YWNrOiAyXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuRW5FbmVtaWVzID0gRW5FbmVtaWVzO1xyXG5tb2R1bGUuZXhwb3J0cy5FbkZhY2luZyA9IEVuRmFjaW5nO1xyXG5tb2R1bGUuZXhwb3J0cy5FbkdhbWVTdGF0ZSA9IEVuR2FtZVN0YXRlO1xyXG5tb2R1bGUuZXhwb3J0cy5FbldlYXBvbiA9IEVuV2VhcG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5FblN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGU7XHJcbm1vZHVsZS5leHBvcnRzLkVuU3RpY2tNb2RlID0gRW5TdGlja01vZGU7XHJcbm1vZHVsZS5leHBvcnRzLkVuRW5lbXlTdGF0ZSA9IEVuRW5lbXlTdGF0ZTtcclxuIl19