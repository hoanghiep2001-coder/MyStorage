System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, vFx_FireLight;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b4b3agzj1Mz5DCQRjcctMy", "vFx_FireLight", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("vFx_FireLight", vFx_FireLight = (_dec = ccclass('vFx_FireLight'), _dec(_class = (_temp = class vFx_FireLight extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "PS_fireLight", null);

          _defineProperty(this, "currentSideIsLeft", true);
        }

        start() {// this.PS_fireLight = this.node.getComponentInChildren(ParticleSystem2D);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=vFx_FireLight.js.map