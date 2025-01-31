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

      _defineProperty(GameInfo, "isToStore", false);

      _defineProperty(GameInfo, "IsPlaying", false);

      _defineProperty(GameInfo, "GamePause", false);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isCanTouch", false);

      _defineProperty(GameInfo, "IsShowPopupInstall", false);

      _defineProperty(GameInfo, "isLose", false);

      _defineProperty(GameInfo, "isWin", false);

      _defineProperty(GameInfo, "currentTotalCost", 0);

      _defineProperty(GameInfo, "currentReceive", 0);

      _defineProperty(GameInfo, "currentChange", 0);

      _defineProperty(GameInfo, "currentCenGive", 0);

      _defineProperty(GameInfo, "currentDollarGive", 0);

      _defineProperty(GameInfo, "currentBankingInput", ``);

      _defineProperty(GameInfo, "currentFailedClick", 0);

      _defineProperty(GameInfo, "currentSuccessClick", 1);

      _defineProperty(GameInfo, "NPCpaidTimes", 0);

      _defineProperty(GameInfo, "isNPCDoneMove", false);

      _defineProperty(GameInfo, "NPC_DoorStand", new Vec3(-2.092, 0, 2.312));

      _defineProperty(GameInfo, "NPC_StandPoints", [{
        position: new Vec3(0.606, 0, 2.945),
        rotate: -20
      }, {
        position: new Vec3(1.239, 0, 2.982),
        rotate: -30
      }, {
        position: new Vec3(1.825, 0, 2.982),
        rotate: -40
      }, {
        position: new Vec3(2.377, 0, 3.269),
        rotate: -55
      }]);

      _defineProperty(GameInfo, "currentItems", 1);

      _defineProperty(GameInfo, "currentDollarGiveBack", 0);

      _defineProperty(GameInfo, "lastDollarGiveBack", 0);

      _defineProperty(GameInfo, "currentCenGiveBack", 0);

      _defineProperty(GameInfo, "lastCenGiveBack", 0);

      _defineProperty(GameInfo, "completePayment", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map