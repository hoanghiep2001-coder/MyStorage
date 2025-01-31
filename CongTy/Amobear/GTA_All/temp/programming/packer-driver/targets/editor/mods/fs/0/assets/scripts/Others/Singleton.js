System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, Singleton;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32a75f6o6RO+7TN+u6pBVqq", "Singleton", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Singleton
       * DateTime = Mon Dec 23 2024 18:53:32 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = Singleton.ts
       * FileBasenameNoExtension = Singleton
       * URL = db://assets/scripts/Others/Singleton.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("default", Singleton = (_dec = ccclass('Singleton'), _dec(_class = (_temp = _class2 = class Singleton extends Component {
        static Instance(c) {
          if (this._instance == null) {
            this._instance = new c();
          }

          return this._instance;
        }

      }, _defineProperty(_class2, "_instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Singleton.js.map