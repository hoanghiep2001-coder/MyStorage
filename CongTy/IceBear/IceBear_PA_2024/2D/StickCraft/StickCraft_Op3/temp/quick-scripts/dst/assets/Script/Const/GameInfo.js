
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Const/GameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df8a8sDuWhGnrd4GJVRRNO6', 'GameInfo');
// Script/Const/GameInfo.js

"use strict";

var _require = require("GameEnum"),
    EnStickState = _require.EnStickState,
    EnStickMode = _require.EnStickMode;

var GameInfo = {
  IsPlaying: false,
  TotalEnemy: 0,
  TotalEnemyAlive: 0,
  StickState: EnStickState.Idle,
  StickMode: EnStickMode.Normal,
  // Button Action
  InputAttackDown: false,
  InputJumpDown: false,
  InputDashDown: false,
  InputMoveHorizontal: 0,
  GamePause: false,
  TutorialDoneStage1: false,
  TutorialStartStage2: false,
  TutorialDoneStage2: false,
  IsShowPopupInstall: false,
  isLose: false,
  isWin: false
};
module.exports = GameInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25zdFxcR2FtZUluZm8uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVuU3RpY2tTdGF0ZSIsIkVuU3RpY2tNb2RlIiwiR2FtZUluZm8iLCJJc1BsYXlpbmciLCJUb3RhbEVuZW15IiwiVG90YWxFbmVteUFsaXZlIiwiU3RpY2tTdGF0ZSIsIklkbGUiLCJTdGlja01vZGUiLCJOb3JtYWwiLCJJbnB1dEF0dGFja0Rvd24iLCJJbnB1dEp1bXBEb3duIiwiSW5wdXREYXNoRG93biIsIklucHV0TW92ZUhvcml6b250YWwiLCJHYW1lUGF1c2UiLCJUdXRvcmlhbERvbmVTdGFnZTEiLCJUdXRvcmlhbFN0YXJ0U3RhZ2UyIiwiVHV0b3JpYWxEb25lU3RhZ2UyIiwiSXNTaG93UG9wdXBJbnN0YWxsIiwiaXNMb3NlIiwiaXNXaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQW9DQSxPQUFPLENBQUMsVUFBRCxDQUEzQztBQUFBLElBQU9DLFlBQVAsWUFBT0EsWUFBUDtBQUFBLElBQXFCQyxXQUFyQixZQUFxQkEsV0FBckI7O0FBRUEsSUFBSUMsUUFBUSxHQUFHO0FBQ1hDLEVBQUFBLFNBQVMsRUFBRyxLQUREO0FBRVhDLEVBQUFBLFVBQVUsRUFBRSxDQUZEO0FBR1hDLEVBQUFBLGVBQWUsRUFBRSxDQUhOO0FBSVhDLEVBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTyxJQUpkO0FBS1hDLEVBQUFBLFNBQVMsRUFBRVAsV0FBVyxDQUFDUSxNQUxaO0FBT1g7QUFDQUMsRUFBQUEsZUFBZSxFQUFFLEtBUk47QUFTWEMsRUFBQUEsYUFBYSxFQUFFLEtBVEo7QUFVWEMsRUFBQUEsYUFBYSxFQUFFLEtBVko7QUFXWEMsRUFBQUEsbUJBQW1CLEVBQUUsQ0FYVjtBQWFYQyxFQUFBQSxTQUFTLEVBQUUsS0FiQTtBQWNYQyxFQUFBQSxrQkFBa0IsRUFBRSxLQWRUO0FBZVhDLEVBQUFBLG1CQUFtQixFQUFFLEtBZlY7QUFnQlhDLEVBQUFBLGtCQUFrQixFQUFFLEtBaEJUO0FBa0JYQyxFQUFBQSxrQkFBa0IsRUFBRSxLQWxCVDtBQW1CWEMsRUFBQUEsTUFBTSxFQUFHLEtBbkJFO0FBb0JYQyxFQUFBQSxLQUFLLEVBQUc7QUFwQkcsQ0FBZjtBQXVCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtFblN0aWNrU3RhdGUsIEVuU3RpY2tNb2RlfSA9IHJlcXVpcmUoXCJHYW1lRW51bVwiKTtcclxuXHJcbnZhciBHYW1lSW5mbyA9IHtcclxuICAgIElzUGxheWluZyA6IGZhbHNlLFxyXG4gICAgVG90YWxFbmVteTogMCxcclxuICAgIFRvdGFsRW5lbXlBbGl2ZTogMCxcclxuICAgIFN0aWNrU3RhdGU6IEVuU3RpY2tTdGF0ZS5JZGxlLFxyXG4gICAgU3RpY2tNb2RlOiBFblN0aWNrTW9kZS5Ob3JtYWwsXHJcblxyXG4gICAgLy8gQnV0dG9uIEFjdGlvblxyXG4gICAgSW5wdXRBdHRhY2tEb3duOiBmYWxzZSxcclxuICAgIElucHV0SnVtcERvd246IGZhbHNlLFxyXG4gICAgSW5wdXREYXNoRG93bjogZmFsc2UsXHJcbiAgICBJbnB1dE1vdmVIb3Jpem9udGFsOiAwLFxyXG5cclxuICAgIEdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICBUdXRvcmlhbERvbmVTdGFnZTE6IGZhbHNlLFxyXG4gICAgVHV0b3JpYWxTdGFydFN0YWdlMjogZmFsc2UsXHJcbiAgICBUdXRvcmlhbERvbmVTdGFnZTI6IGZhbHNlLFxyXG5cclxuICAgIElzU2hvd1BvcHVwSW5zdGFsbDogZmFsc2UsXHJcbiAgICBpc0xvc2U6ICBmYWxzZSxcclxuICAgIGlzV2luOiAgZmFsc2UsXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUluZm87Il19