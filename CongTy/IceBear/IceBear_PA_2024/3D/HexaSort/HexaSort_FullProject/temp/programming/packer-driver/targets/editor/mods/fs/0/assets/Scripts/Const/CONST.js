System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CONST, _crd, SoundTrack;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("CONST", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70362mlXbBL95cghOSeF1Id", "CONST", undefined);

      (function (SoundTrack) {
        SoundTrack["bgSound"] = "bgSound";
        SoundTrack["bangSound"] = "bangSound";
        SoundTrack["mergeSound"] = "mergeSound";
        SoundTrack["chooseSound"] = "chooseSound";
        SoundTrack["winSound"] = "winSound";
        SoundTrack["loseSound"] = "loseSound";
      })(SoundTrack || (SoundTrack = {}));

      _export("CONST", CONST = class CONST {});

      _defineProperty(CONST, "SoundTrack", SoundTrack);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CONST.js.map