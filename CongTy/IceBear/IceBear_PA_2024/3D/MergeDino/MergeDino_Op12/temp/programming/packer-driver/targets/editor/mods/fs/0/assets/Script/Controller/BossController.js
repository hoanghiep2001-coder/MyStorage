System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimation, _dec, _class, _temp, _crd, ccclass, property, BossController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c38f329EN1D9YpLdfC+d21z", "BossController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec(_class = (_temp = class BossController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isFight", false);

          _defineProperty(this, "isFight_2", false);

          _defineProperty(this, "isIdle", false);

          _defineProperty(this, "isIdle_2", false);
        }

        start() {
          this.getComponent(SkeletalAnimation).play("Idle_2");
        }

        fight() {
          this.isFight = true;
          this.getComponent(SkeletalAnimation).play("Atk_1");
        }

        fightStep2() {
          this.isFight_2 = true;
          this.getComponent(SkeletalAnimation).play("Atk_1");
        }

        idle() {
          this.isIdle = true;
          this.getComponent(SkeletalAnimation).play("Idle_2");
        }

        idleStep2() {
          this.isIdle_2 = true;
          this.getComponent(SkeletalAnimation).play("Idle_2");
        } // protected update(dt: number): void {
        //     Constants.isCharacterCollideBoos && !this.isFight && this.fight();
        //     Constants.isCharacter_2CollideBoos && !this.isFight_2 && this.fightStep2();
        //     Constants.isDoneStep1 && !this.isIdle && this.idle();
        //     Constants.isDoneStep2 && !this.isIdle_2 && this.idleStep2();
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BossController.js.map