
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Data/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78eee14aM5NzKTN1Ih9o+kO', 'Constant');
// scripts/Data/Constant.js

"use strict";

exports.__esModule = true;
exports.Constants = void 0;
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var Event = {
  touchStart: "touchstart",
  touchMove: "touchmove",
  touchEnd: "touchend",
  touchCancel: "touchcancel"
};
var IronSource = {
  // ironsource 
  SoundState: true,
  State: 1,
  isEndGame: false,
  isPlayBgSound: false
};
var Responsive = {
  HORIZONTAL_IPX: "horizontal_IPX",
  HORIZONTAL_TABLET: "horizontal_Tablet",
  VERTICAL_IPX: "vertical_IPX",
  VERTICAL_MOBILE: "vertical_Mobile"
};

var Constants = function Constants() {};

exports.Constants = Constants;
Constants.isClickGameStart = false;
Constants.isPlaySound = false;
Constants.isRotate = false;
Constants.countDie = 0;
Constants.isGameStart = false;
Constants.isShowPopupOptions = false;
Constants.gameTime = 0;
Constants.Event = Event;
Constants.ironSource = IronSource;
Constants.Responsive = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGF0YVxcQ29uc3RhbnQuanMiXSwibmFtZXMiOlsiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRXZlbnQiLCJ0b3VjaFN0YXJ0IiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsIklyb25Tb3VyY2UiLCJTb3VuZFN0YXRlIiwiU3RhdGUiLCJpc0VuZEdhbWUiLCJpc1BsYXlCZ1NvdW5kIiwiUmVzcG9uc2l2ZSIsIkhPUklaT05UQUxfSVBYIiwiSE9SSVpPTlRBTF9UQUJMRVQiLCJWRVJUSUNBTF9JUFgiLCJWRVJUSUNBTF9NT0JJTEUiLCJDb25zdGFudHMiLCJpc0NsaWNrR2FtZVN0YXJ0IiwiaXNQbGF5U291bmQiLCJpc1JvdGF0ZSIsImNvdW50RGllIiwiaXNHYW1lU3RhcnQiLCJpc1Nob3dQb3B1cE9wdGlvbnMiLCJnYW1lVGltZSIsImlyb25Tb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7QUFFQSxJQUFNQyxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsVUFBVSxFQUFFLFlBREY7QUFFVkMsRUFBQUEsU0FBUyxFQUFFLFdBRkQ7QUFHVkMsRUFBQUEsUUFBUSxFQUFFLFVBSEE7QUFJVkMsRUFBQUEsV0FBVyxFQUFFO0FBSkgsQ0FBZDtBQVFBLElBQU1DLFVBQVUsR0FBRztBQUNmO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRSxJQUZHO0FBR2ZDLEVBQUFBLEtBQUssRUFBRSxDQUhRO0FBSWZDLEVBQUFBLFNBQVMsRUFBRSxLQUpJO0FBS2ZDLEVBQUFBLGFBQWEsRUFBRTtBQUxBLENBQW5CO0FBU0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLEVBQUFBLGNBQWMsRUFBRSxnQkFERDtBQUVmQyxFQUFBQSxpQkFBaUIsRUFBRSxtQkFGSjtBQUdmQyxFQUFBQSxZQUFZLEVBQUUsY0FIQztBQUlmQyxFQUFBQSxlQUFlLEVBQUU7QUFKRixDQUFuQjs7SUFRYUM7OztBQUFBQSxVQUdGQyxtQkFBbUI7QUFIakJELFVBSUZFLGNBQWM7QUFKWkYsVUFLRkcsV0FBVztBQUxUSCxVQU1GSSxXQUFXO0FBTlRKLFVBT0ZLLGNBQWM7QUFQWkwsVUFRRk0scUJBQXFCO0FBUm5CTixVQVNGTyxXQUFXO0FBVFRQLFVBYUZmLFFBQVFBO0FBYk5lLFVBaUJGUSxhQUFhbEI7QUFqQlhVLFVBcUJGTCxhQUFhQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBFdmVudCA9IHtcclxuICAgIHRvdWNoU3RhcnQ6IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlOiBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQ6IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsOiBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIEhPUklaT05UQUxfSVBYOiBcImhvcml6b250YWxfSVBYXCIsXHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogXCJob3Jpem9udGFsX1RhYmxldFwiLFxyXG4gICAgVkVSVElDQUxfSVBYOiBcInZlcnRpY2FsX0lQWFwiLFxyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBcInZlcnRpY2FsX01vYmlsZVwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNDbGlja0dhbWVTdGFydCA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUGxheVNvdW5kID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBjb3VudERpZSA9IDA7XHJcbiAgICBzdGF0aWMgaXNHYW1lU3RhcnQgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1Nob3dQb3B1cE9wdGlvbnMgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBnYW1lVGltZSA9IDA7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcbn1cclxuIl19