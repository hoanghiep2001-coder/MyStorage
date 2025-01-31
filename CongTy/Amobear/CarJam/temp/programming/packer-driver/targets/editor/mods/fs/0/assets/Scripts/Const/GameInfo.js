System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vec3, GameInfo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8208eJUfxdPTodwrpIiHbc+", "GameInfo", undefined);

      _export("GameInfo", GameInfo = class GameInfo {});

      _defineProperty(GameInfo, "currentOption", 6);

      _defineProperty(GameInfo, "isToStore", true);

      _defineProperty(GameInfo, "IsPlaying", false);

      _defineProperty(GameInfo, "GamePause", false);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isCanTouch", true);

      _defineProperty(GameInfo, "IsShowPopupInstall", false);

      _defineProperty(GameInfo, "isLose", false);

      _defineProperty(GameInfo, "isWin", false);

      _defineProperty(GameInfo, "isRotate", false);

      _defineProperty(GameInfo, "queueLabelCalPosY", 0);

      _defineProperty(GameInfo, "queueLabelCalPosX", 0);

      _defineProperty(GameInfo, "currentQueue", null);

      _defineProperty(GameInfo, "currentCustomers", []);

      _defineProperty(GameInfo, "customerQueue", [{
        id: 1,
        position: new Vec3(-10.43, 0.432, -10.182),
        isReady: false,
        rotate: 180
      }, {
        id: 2,
        position: new Vec3(-10.43, 0.432, -11.232),
        isReady: false,
        rotate: 180
      }, {
        id: 3,
        position: new Vec3(-10.43, 0.432, -12.248),
        isReady: false,
        rotate: 180
      }, {
        id: 4,
        position: new Vec3(-10.711, 0.432, -13.537),
        isReady: false,
        rotate: 120
      }, {
        id: 5,
        position: new Vec3(-9.528, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 6,
        position: new Vec3(-8.357, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 7,
        position: new Vec3(-7.281, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 8,
        position: new Vec3(-6.175, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 9,
        position: new Vec3(-5.005, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 10,
        position: new Vec3(-3.928, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 11,
        position: new Vec3(-2.878, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 12,
        position: new Vec3(-1.706, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 13,
        position: new Vec3(-0.63, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 14,
        position: new Vec3(0.476, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 15,
        position: new Vec3(1.647, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }, {
        id: 16,
        position: new Vec3(2.723, 0.432, -13.68),
        isReady: false,
        rotate: 90
      }]);

      _defineProperty(GameInfo, "carStops", []);

      _defineProperty(GameInfo, "activeVibration", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map