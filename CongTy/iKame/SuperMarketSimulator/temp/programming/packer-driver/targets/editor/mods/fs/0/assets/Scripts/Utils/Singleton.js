System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, _decorator, _class, _class2, _temp, _crd, ccclass, property, Singleton;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68e715GMApFxqQ2eqes1J1W", "Singleton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Singleton = ccclass(_class = (_temp = _class2 = class Singleton extends Component {
        static Instance(c) {
          if (this._instance == null) {
            this._instance = new c();
          }

          return this._instance;
        }

      }, _defineProperty(_class2, "_instance", null), _temp)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Singleton.js.map