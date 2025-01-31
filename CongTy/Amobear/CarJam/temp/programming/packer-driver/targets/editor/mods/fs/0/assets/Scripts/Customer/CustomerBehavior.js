System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, SkeletalAnimation, tween, Vec3, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CustomerBehavior;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      SkeletalAnimation = _cc.SkeletalAnimation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebb54xiAR9FgbPyztrQpOb7", "CustomerBehavior", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomerBehavior", CustomerBehavior = (_dec = ccclass('CustomerBehavior'), _dec2 = property([Node]), _dec(_class = (_class2 = (_temp = class CustomerBehavior extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "customerID", null);

          _defineProperty(this, "customerColorID", null);

          _defineProperty(this, "goalPoint", null);

          _defineProperty(this, "isCanMove", false);

          _defineProperty(this, "goalPos", null);

          _defineProperty(this, "eulerAngle", 0);

          _initializerDefineProperty(this, "CustomerColors", _descriptor, this);
        }

        start() {
          this.CustomerColors[this.customerColorID].active = true;
        }

        moveToGoal() {
          this.getComponent(SkeletalAnimation).play("run"); // this.node.setRotationFromEuler(new math.Vec3(0, this.eulerAngle, 0))

          let carSkin = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops[this.goalPoint].carSkin;
          carSkin.actuallySeat += 1;

          if (carSkin.actuallySeat > carSkin.CarSeats) {
            this.node.active = false;
            this.destroy();
            return;
          }

          tween(this.node).to(0.3, {
            position: this.goalPos,
            eulerAngles: new Vec3(0, this.eulerAngle, 0)
          }, {
            easing: easing.smooth
          }).call(() => {
            carSkin.activeCustomerSeat(carSkin.currentCarSeat);
            carSkin.currentCarSeat += 1;
            this.node.active = false;
            this.destroy();
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CustomerColors", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CustomerBehavior.js.map