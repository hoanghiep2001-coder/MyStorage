System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, RoboAnim, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("RoboAnim", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85c31yD5klEyrC4D2Z3BMK6", "RoboAnim", undefined);

      _export("RoboAnim", RoboAnim = class RoboAnim {});

      _defineProperty(RoboAnim, "Idle", "idle");

      _defineProperty(RoboAnim, "Walk", "walk");

      _defineProperty(RoboAnim, "Atk", "atk");

      _defineProperty(RoboAnim, "Pickup", "pickup");

      _defineProperty(RoboAnim, "Die", "die");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoboAnim.js.map