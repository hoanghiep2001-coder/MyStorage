System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Utils, _crd, ccclass, property, getTrailingNumber;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Utils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a07b7y2nwhC85HahxDC5POT", "Utils", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      getTrailingNumber = string => {
        var match = string.match(/\d+$/); // Tìm số ở cuối chuỗi

        return match ? parseInt(match[0], 10) : null; // Trả về số hoặc null nếu không có số
      };

      _export("Utils", Utils = class Utils {});

      _defineProperty(Utils, "getTrailingNumber", getTrailingNumber);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utils.js.map