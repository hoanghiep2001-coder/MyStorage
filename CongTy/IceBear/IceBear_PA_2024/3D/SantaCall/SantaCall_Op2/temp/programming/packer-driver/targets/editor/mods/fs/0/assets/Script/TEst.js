System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, TEst;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3dfc0qsO2hECKiek2bEuXaI", "TEst", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TEst", TEst = (_dec = ccclass('TEst'), _dec(_class = (_temp = class TEst extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isDragging", false);

          _defineProperty(this, "prevPosition", new Vec3());
        }

        start() {// this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
          //     console.log('Mouse down');
          //   }, this);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TEst.js.map