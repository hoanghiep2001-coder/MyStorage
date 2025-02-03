System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameInfo, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8208eJUfxdPTodwrpIiHbc+", "GameInfo", undefined);

      _export("GameInfo", GameInfo = class GameInfo {});

      _defineProperty(GameInfo, "currentOption", 12);

      _defineProperty(GameInfo, "isToStore", false);

      _defineProperty(GameInfo, "IsPlaying", false);

      _defineProperty(GameInfo, "GamePause", false);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isCanTouch", true);

      _defineProperty(GameInfo, "IsShowPopupInstall", false);

      _defineProperty(GameInfo, "isLose", false);

      _defineProperty(GameInfo, "isWin", false);

      _defineProperty(GameInfo, "touchPos", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map