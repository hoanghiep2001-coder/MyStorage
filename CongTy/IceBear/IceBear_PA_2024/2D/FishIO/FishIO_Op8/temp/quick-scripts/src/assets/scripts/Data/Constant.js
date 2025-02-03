"use strict";
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