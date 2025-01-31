System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameInfo, _crd, GTA_PA_08, GTA_PA_09, GTA_PA_10, GTA_PA_11;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78833x0bhxP6rWkKt7hczRv", "GameInfo", undefined);

      GTA_PA_08 = {
        isRidingMoto: false,
        isHitBrakeBtn: false,
        isHitBrakeBtnFlag: false,
        isTouchCheckPointFlag: false,
        isHitDogeCopsBtn: false
      };
      GTA_PA_09 = {
        isHitGetRewardBtn: false,
        isCharacterArrivedReWard: false
      };
      GTA_PA_10 = {
        currentEnemyKilled: 0,
        isShowInstallPopup: false
      };
      GTA_PA_11 = {
        currentEnemyKilled: 0,
        isShowInstallPopup: false,
        isDoneRotateCamera: false,
        isShowHealthBar: false,
        isCharacterDead: false
      };

      _export("GameInfo", GameInfo = class GameInfo {});

      _defineProperty(GameInfo, "currentOption", 11);

      _defineProperty(GameInfo, "GTA_PA_08", GTA_PA_08);

      _defineProperty(GameInfo, "GTA_PA_09", GTA_PA_09);

      _defineProperty(GameInfo, "GTA_PA_10", GTA_PA_10);

      _defineProperty(GameInfo, "GTA_PA_11", GTA_PA_11);

      _defineProperty(GameInfo, "isCanTouch", true);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isOnMotobike", false);

      _defineProperty(GameInfo, "isRotate", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map