System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, BrickController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10387vCsGxIsa+x/CTEXOJf", "BrickController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BrickController", BrickController = (_dec = ccclass('BrickController'), _dec(_class = (_temp = class BrickController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "BrickColors", []);
        }

        onLoad() {// this.BrickColors = this.node.children;
        }

        start() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BrickController.js.map