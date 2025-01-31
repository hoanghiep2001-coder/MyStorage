System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vec3, Utility, _crd, convertToLocalLocation;

  _export("Utility", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29ed2QLqpFJMqWkXKNBHWvZ", "Utility", undefined);

      convertToLocalLocation = (value, node) => {
        var nodePos = node.getPosition();
        var localX = value.x - 160 - nodePos.x;
        var localY = value.y - 240 - nodePos.y;
        var result = new Vec3(localX, localY, 0);
        return result;
      };

      _export("Utility", Utility = class Utility {
        static convertToLocalLocation(value, node) {
          return convertToLocalLocation(value, node);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utility.js.map