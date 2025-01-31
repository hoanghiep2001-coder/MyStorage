System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, math, Node, Prefab, CarSkin, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, CarTransporter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCarSkin(extras) {
    _reporterNs.report("CarSkin", "./CarSkin", _context.meta, extras);
  }

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
      instantiate = _cc.instantiate;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      CarSkin = _unresolved_2.CarSkin;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63e59XcRlxBvqBIT3mFNyAY", "CarTransporter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarTransporter", CarTransporter = (_dec = ccclass('CarTransporter'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class CarTransporter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Car_Trans_4Seat", _descriptor, this);

          _initializerDefineProperty(this, "Van_Trans_6Seat", _descriptor2, this);

          _initializerDefineProperty(this, "Bus_Trans_10Seat", _descriptor3, this);

          _initializerDefineProperty(this, "spawnPoint", _descriptor4, this);

          _initializerDefineProperty(this, "slide", _descriptor5, this);

          _initializerDefineProperty(this, "destroyPoint", _descriptor6, this);

          _defineProperty(this, "currentIndexCar", 1);

          _defineProperty(this, "transpoterCarsArr", []);

          _defineProperty(this, "currentTimeOut", 0);
        }

        start() {// this.spawnCar();
        }

        spawnCar() {
          // this.schedule(() => {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isLose) return;
          var randomCar = math.randomRangeInt(0, 3);
          var newCar = null;

          switch (randomCar) {
            case 0:
              newCar = instantiate(this.Car_Trans_4Seat);
              break;

            case 1:
              newCar = instantiate(this.Van_Trans_6Seat);
              break;

            case 2:
              newCar = instantiate(this.Bus_Trans_10Seat);
              break;

            default:
              break;
          } // log("new Transporter Car:", this.currentIndexCar);


          this.currentIndexCar += 1; // Chuyển đổi vị trí spawnPoint từ world space sang local space của slide

          var worldPosition = this.spawnPoint.worldPosition; // Lấy vị trí toàn cục

          var worldMatrix = this.slide.getWorldMatrix(); // Ma trận thế giới của slide

          var localPosition = new math.Vec3();
          math.Mat4.invert(worldMatrix, worldMatrix); // Đảo ngược ma trận thế giới

          math.Vec3.transformMat4(localPosition, worldPosition, worldMatrix); // Chuyển đổi từ world space sang local space

          newCar.setPosition(localPosition); // Gán vị trí local

          newCar.parent = this.slide; // Đặt parent là slide

          this.removePhysicsForTranspoterCar(newCar);
          var randomColor = 0;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 6) randomColor = math.randomRangeInt(0, 7);else randomColor = math.randomRangeInt(0, 8);
          var carColorNode = newCar.getChildByName("base").children[randomColor];
          var carSkin = newCar.getComponent(_crd && CarSkin === void 0 ? (_reportPossibleCrUseOfCarSkin({
            error: Error()
          }), CarSkin) : CarSkin);
          carColorNode.active = true;
          carSkin.CarColor = carColorNode.name;
          carSkin.car_Top = carColorNode.getChildByName("Top");
          this.transpoterCarsArr.push(newCar); // }, 1.3);
        }

        removePhysicsForTranspoterCar(newCar) {// this.scheduleOnce(() => {
          //     let carBehavior = newCar.getComponent(CarBehavior)
          //     if (!carBehavior.isCanMove) carBehavior.removeRigidbody();
          //     this.scheduleOnce(() => {
          //         if (carBehavior.isTranspoter) return;
          //         this.transpoterCarsArr.splice(0, 1);
          //         newCar.active = false;
          //         newCar.destroy();
          //         // log("Car Trans Destroyed");
          //     }, 1)
          // }, 6.5)
        }

        update(dt) {
          var currentSlidePos = this.slide.position;
          this.slide.setPosition(currentSlidePos.x + 0.025, currentSlidePos.y, currentSlidePos.z);
          this.currentTimeOut += dt;

          if (this.currentTimeOut >= 1.6) {
            this.currentTimeOut = 0;
            this.spawnCar();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Car_Trans_4Seat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Van_Trans_6Seat", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Bus_Trans_10Seat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slide", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "destroyPoint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CarTransporter.js.map