System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameInfo, _crd, Squid_PA_30;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34984D6ZQ5E3L7v0pALotX1", "GameInfo", undefined);

      Squid_PA_30 = {
        isDetachCandy: false,
        lineRenderPoints: [],
        isDoneDrawCandy: false,
        isStartPlaying: false,
        isCharacterShooted: false,
        isTimeOver: false,
        detachCandySteps: 1,
        isDoneAllStep: false
      };

      _export("GameInfo", GameInfo = class GameInfo {});

      _defineProperty(GameInfo, "currentOption", 30);

      _defineProperty(GameInfo, "isToStore", false);

      _defineProperty(GameInfo, "IsPlaying", false);

      _defineProperty(GameInfo, "GamePause", false);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isCanTouch", false);

      _defineProperty(GameInfo, "IsShowPopupInstall", false);

      _defineProperty(GameInfo, "isLose", false);

      _defineProperty(GameInfo, "isWin", false);

      _defineProperty(GameInfo, "isRotate", false);

      _defineProperty(GameInfo, "Squid_PA_30", Squid_PA_30);

      _defineProperty(GameInfo, "activeVibration", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map