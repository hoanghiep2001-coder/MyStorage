System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Constants, _crd, IronSource;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Constants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e64b6hsiZ5Jzqzlg1v+/cjj", "Constant", undefined);

      IronSource = {
        // ironsource 
        SoundState: true,
        State: 1,
        isEndGame: false,
        isPlayBgSound: false
      };

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "ironSource", IronSource);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Constant.js.map