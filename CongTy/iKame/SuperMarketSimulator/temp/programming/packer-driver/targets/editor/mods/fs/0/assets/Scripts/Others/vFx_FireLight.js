System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, ParticleSystem2D, tween, Vec2, GameInfo, _dec, _class, _temp, _crd, ccclass, property, vFx_FireLight;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      ParticleSystem2D = _cc.ParticleSystem2D;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
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

        start() {
          this.PS_fireLight = this.node.getComponentInChildren(ParticleSystem2D);
        }

        updateDirectionFireLightVfx(touchPos) {
          if (touchPos.x > (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).touchPos.x) {
            this.smoothGravity(true);
            this.currentSideIsLeft = true;
          } else {
            this.smoothGravity(false);
            this.currentSideIsLeft = false;
          }
        }

        smoothGravity(isLeft) {
          if (isLeft === this.currentSideIsLeft) return; // log("switch Side vFx")

          let number = isLeft ? -500 : 500;
          tween(this.PS_fireLight).to(0.2, {
            gravity: new Vec2(number, 200)
          }, {
            easing: easing.smooth
          }).start();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=vFx_FireLight.js.map