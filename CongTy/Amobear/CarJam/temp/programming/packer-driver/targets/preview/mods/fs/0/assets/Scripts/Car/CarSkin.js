System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CCString, Component, easing, Node, tween, Vec3, CarBehavior, SoundController, CONST, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CarSkin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCarBehavior(extras) {
    _reporterNs.report("CarBehavior", "./CarBehavior", _context.meta, extras);
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
      CCString = _cc.CCString;
      Component = _cc.Component;
      easing = _cc.easing;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CarBehavior = _unresolved_2.CarBehavior;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }, function (_unresolved_4) {
      CONST = _unresolved_4.CONST;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87bdcj1WRNLPYZcpKUtqk8s", "CarSkin", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarSkin", CarSkin = (_dec = ccclass('CarSkin'), _dec2 = property(Node), _dec3 = property(CCString), _dec4 = property(CCString), _dec(_class = (_class2 = (_temp = class CarSkin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "car_Top", _descriptor, this);

          _initializerDefineProperty(this, "CarColor", _descriptor2, this);

          _initializerDefineProperty(this, "CarStyle", _descriptor3, this);

          _defineProperty(this, "colorCustomer", null);

          _defineProperty(this, "CarColorId", null);

          _defineProperty(this, "CarSeats", null);

          _defineProperty(this, "customerSeats", []);

          _defineProperty(this, "currentCarSeat", 0);

          _defineProperty(this, "actuallySeat", 0);

          _defineProperty(this, "isDone", false);

          _defineProperty(this, "fxBounce", null);
        }

        start() {
          this.unActiveCustomerSeats();
          this.setCarProperties();
        }

        setCarProperties() {
          switch (this.CarColor) {
            case "Blue":
              this.colorCustomer = "Blue";
              this.CarColorId = 0;
              break;

            case "Green":
              this.colorCustomer = "Green";
              this.CarColorId = 1;
              break;

            case "Orange":
              this.colorCustomer = "Orange";
              this.CarColorId = 2;
              break;

            case "Pink":
              this.colorCustomer = "Pink";
              this.CarColorId = 3;
              break;

            case "Purple":
              this.colorCustomer = "Purple";
              this.CarColorId = 4;
              break;

            case "Red":
              this.colorCustomer = "Red";
              this.CarColorId = 5;
              break;

            case "Yellow":
              this.colorCustomer = "Yellow";
              this.CarColorId = 6;
              break;

            case "Blue_light":
              this.colorCustomer = "Blue_light";
              this.CarColorId = 7;
              break;

            default:
              break;
          }

          switch (this.CarStyle) {
            case "Car":
              this.CarSeats = 4;
              break;

            case "Van":
              this.CarSeats = 6;
              break;

            case "Bus":
              this.CarSeats = 10;
              break;

            default:
              break;
          }
        }

        bounceAnim() {
          this.fxBounce.play();
          var currentScale = this.node.getScale(),
              newScale = new Vec3(currentScale.x + 0.08, currentScale.y + 0.08, currentScale.z + 0.08);
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

        activeCustomerSeat(index) {
          if (this.isDone) return;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.LoadCustomer);
          this.bounceAnim();
          this.customerSeats[index].active = true;
          this.customerSeats[index].getChildByName(this.colorCustomer).active = true;

          if (index + 1 === this.CarSeats) {
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
              error: Error()
            }), CONST) : CONST).SoundTrack.Happy);
            this.isDone = true;
            this.getComponent(_crd && CarBehavior === void 0 ? (_reportPossibleCrUseOfCarBehavior({
              error: Error()
            }), CarBehavior) : CarBehavior).handleDoneFullCustomer();
          }
        }

        unActiveCustomerSeats() {
          var customerSeatsNode = this.node.getChildByName("CustomerSeats");
          this.customerSeats = customerSeatsNode.children;
          this.customerSeats.forEach(seat => seat.active = false);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "car_Top", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CarColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CarStyle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CarSkin.js.map