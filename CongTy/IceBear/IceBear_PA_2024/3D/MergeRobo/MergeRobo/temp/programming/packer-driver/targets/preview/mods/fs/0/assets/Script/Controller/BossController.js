System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimation, Constants, _dec, _class, _temp, _crd, ccclass, property, BossController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c38f329EN1D9YpLdfC+d21z", "BossController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec(_class = (_temp = class BossController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isFight", false);

          _defineProperty(this, "isFight_2", false);

          _defineProperty(this, "isIdle", false);

          _defineProperty(this, "isIdle_2", false);
        }

        start() {
          this.playMuscleAnim();
        }

        playMuscleAnim() {
          this.getComponent(SkeletalAnimation).play("muscle");
        }

        playDanceAnim() {
          this.getComponent(SkeletalAnimation).play("dancing");
        }

        fight() {
          this.isFight = true;
          this.getComponent(SkeletalAnimation).play("atk");
        }

        idle() {
          this.isIdle = true;
          this.getComponent(SkeletalAnimation).play("dancing");
        }

        update(dt) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCharacterCollideBoos && !this.isFight && this.fight();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneStep1 && !this.isIdle && this.idle();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BossController.js.map