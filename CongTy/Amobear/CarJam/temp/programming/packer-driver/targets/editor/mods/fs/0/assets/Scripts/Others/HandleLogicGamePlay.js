System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameInfo, LogicGamePlay, _crd, ccclass, property, CheckGameResult;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  _export("LogicGamePlay", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45fe3MiBmFIurG6uPTdysiB", "HandleLogicGamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HandleLogicGamePlay
       * DateTime = Tue Aug 27 2024 15:51:28 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = HandleLogicGamePlay.ts
       * FileBasenameNoExtension = HandleLogicGamePlay
       * URL = db://assets/Scripts/Others/HandleLogicGamePlay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
      */

      CheckGameResult = () => {
        let result = false;
        if (Number((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
          error: Error()
        }), GameInfo) : GameInfo).currentBankingInput) === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
          error: Error()
        }), GameInfo) : GameInfo).currentTotalCost) return true;
        if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
          error: Error()
        }), GameInfo) : GameInfo).currentDollarGive === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
          error: Error()
        }), GameInfo) : GameInfo).currentChange && (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
          error: Error()
        }), GameInfo) : GameInfo).currentCenGive === 0) result = true;
        return result;
      };

      _export("LogicGamePlay", LogicGamePlay = class LogicGamePlay {});

      _defineProperty(LogicGamePlay, "CheckGameResult", CheckGameResult);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HandleLogicGamePlay.js.map