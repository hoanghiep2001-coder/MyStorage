System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Singleton, _class, _crd, ccclass, property, Utility;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Singleton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e8024bz9NHzYb4ixk48R1Q", "Utility", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Utility = ccclass(_class = class Utility extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
          Utility._instance = this;
        }

        static RandomRangeFloat(lower, upper) {
          return Math.random() * (upper - lower) + lower; //return Math.floor(Math.random() * (lower - lower)) + lower;
        }

        static RandomRangeInteger(lower, upper) {
          return Math.round(Math.random() * (upper - lower) + lower);
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utility.js.map