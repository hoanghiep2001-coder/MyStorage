System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Singleton, _dec, _class, _crd, ccclass, property, RoboController;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Utils/Singleton", _context.meta, extras);
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

      _cclegacy._RF.push({}, "7b73a5PaopMZIFgRWhIkWlN", "RoboController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RoboController
       * DateTime = Tue Aug 27 2024 14:05:17 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = RoboController.ts
       * FileBasenameNoExtension = RoboController
       * URL = db://assets/Scripts/Controller/RoboController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RoboController", RoboController = (_dec = ccclass('RoboController'), _dec(_class = class RoboController extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
          RoboController._instance = this;
        }

        start() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoboController.js.map