System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameCommon, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameCommon", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15f524T0YFGRY2Q6YsLT9m1", "GameCommon", undefined);

      _export("GameCommon", GameCommon = class GameCommon {});

      _defineProperty(GameCommon, "currentStep", 1);

      _defineProperty(GameCommon, "Step1States", [false, false, false, false, false]);

      _defineProperty(GameCommon, "Step2States", [false, false, false, false]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameCommon.js.map