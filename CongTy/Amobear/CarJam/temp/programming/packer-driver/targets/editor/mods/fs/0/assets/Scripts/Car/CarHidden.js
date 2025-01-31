System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, tween, Vec3, CarBehavior, GameInfo, CarSkin, SoundController, CONST, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarHidden;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCarBehavior(extras) {
    _reporterNs.report("CarBehavior", "./CarBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarSkin(extras) {
    _reporterNs.report("CarSkin", "./CarSkin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CarBehavior = _unresolved_2.CarBehavior;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      CarSkin = _unresolved_4.CarSkin;
    }, function (_unresolved_5) {
      SoundController = _unresolved_5.SoundController;
    }, function (_unresolved_6) {
      CONST = _unresolved_6.CONST;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c171a/d0MtJPpSAA9j84SjR", "CarHidden", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarHidden", CarHidden = (_dec = ccclass('CarHidden'), _dec2 = property([_crd && CarBehavior === void 0 ? (_reportPossibleCrUseOfCarBehavior({
        error: Error()
      }), CarBehavior) : CarBehavior]), _dec(_class = (_class2 = (_temp = class CarHidden extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "blockedCars", _descriptor, this);

          _defineProperty(this, "isTransformed", false);
        }

        start() {}

        bounceAnim() {
          let currentScale = this.node.getScale(),
              newScale = new Vec3(currentScale.x + 0.1, currentScale.y + 0.1, currentScale.z + 0.1);
          tween(this.node).to(0.1, {
            scale: newScale
          }, {
            easing: easing.smooth
          }).to(0.1, {
            scale: currentScale
          }, {
            easing: easing.smooth
          }).start();
        }

        transformRandomCarColor() {
          this.isTransformed = true;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.unlockHiddenCarSound);
          this.bounceAnim();
          const colorCarArr = this.getCarColorArr();
          let carColor = this.getRandomString(colorCarArr);
          const carSkinComp = this.getComponent(_crd && CarSkin === void 0 ? (_reportPossibleCrUseOfCarSkin({
            error: Error()
          }), CarSkin) : CarSkin);
          carSkinComp.CarColor = carColor;
          carSkinComp.setCarProperties(); // hide Black Hidden Color

          this.node.getChildByName("base").getChildByName("Black").active = false;
          const carColorNode = this.node.getChildByName("base").getChildByName(carColor);
          carColorNode.active = true;
          carSkinComp.car_Top = carColorNode.getChildByName("Top");
        }

        getCarColorArr() {
          let strings = [];

          switch ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption) {
            case 7:
              strings = ["Blue", "Green", "Orange", "Pink", "Purple", "Red", "Yellow", "Blue_light"];
              break;

            case 8:
              strings = ["Blue", "Green", "Orange", "Red", "Blue_light"];
              break;

            default:
              break;
          }

          return strings;
        }

        getRandomString(array) {
          // if (!Array.isArray(array) || array.length === 0) {
          //     throw new Error("Input must be a non-empty array.");
          // }
          const randomIndex = Math.floor(Math.random() * array.length);
          return array[randomIndex];
        }

        update(dt) {
          if (this.blockedCars.every(car => car.stopID) && !this.isTransformed) this.transformRandomCarColor();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockedCars", [_dec2], {
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
//# sourceMappingURL=CarHidden.js.map