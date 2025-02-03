System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ParticleSystem, Constants, CatController, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, LaserController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatController(extras) {
    _reporterNs.report("CatController", "./CatController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      CatController = _unresolved_3.CatController;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a31f86fp3JJCbWTGM9ai5co", "LaserController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LaserController", LaserController = (_dec = ccclass('LaserController'), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property(_crd && CatController === void 0 ? (_reportPossibleCrUseOfCatController({
        error: Error()
      }), CatController) : CatController), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property([ParticleSystem]), _dec(_class = (_class2 = (_temp = class LaserController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "CatController", _descriptor2, this);

          _initializerDefineProperty(this, "wallLaser_1", _descriptor3, this);

          _initializerDefineProperty(this, "wallLaser_2", _descriptor4, this);

          _initializerDefineProperty(this, "Laser", _descriptor5, this);

          _initializerDefineProperty(this, "LaserBtn_Red", _descriptor6, this);

          _initializerDefineProperty(this, "LaserBtn_Blue", _descriptor7, this);

          _initializerDefineProperty(this, "wallLaserBtn_Red", _descriptor8, this);

          _initializerDefineProperty(this, "wallLaserBtn_Blue", _descriptor9, this);

          _initializerDefineProperty(this, "Fx_Lightning", _descriptor10, this);

          _defineProperty(this, "laserFlag", false);

          _defineProperty(this, "wallLaserFlag", false);
        }

        onLoad() {
          if (this.LaserBtn_Blue) {
            this.LaserBtn_Blue.active = false;
            this.LaserBtn_Red.active = true;
            this.wallLaserBtn_Blue.active = true;
            this.wallLaserBtn_Red.active = false;
          }

          if (this.Laser) {
            this.Laser.active = false;
          }

          this.Fx_Lightning.forEach(fx => {
            fx.node.active = false;
          });
        }

        start() {}

        activeLaser() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).wallLaser) {
            this.wallLaserBtn_Blue.active = true;
            this.wallLaserBtn_Red.active = false;
            this.wallLaser_1.active = true;
            this.wallLaser_2.active = true;
          } else {
            this.wallLaserBtn_Red.active = true;
            this.wallLaserBtn_Blue.active = false;
            this.wallLaser_1.active = false;
            this.wallLaser_2.active = false;
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).laser) {
            if (this.laserFlag) {
              return;
            }

            this.laserFlag = true;
            this.LaserBtn_Blue.active = true;
            this.LaserBtn_Red.active = false;
            this.Laser.active = true;
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.electricSound);
            this.Fx_Lightning.forEach(fx => {
              fx.node.active = true;
              fx.play();
            });
          } else {
            if (!this.laserFlag) {
              return;
            }

            this.laserFlag = false;
            this.LaserBtn_Red.active = true;
            this.LaserBtn_Blue.active = false;
            this.Laser.active = false;
            this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.electricSound);
            this.Fx_Lightning.forEach(fx => {
              fx.node.active = false;
              fx.stop();
            });
          }
        }

        update(dt) {
          !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame && this.LaserBtn_Blue && this.activeLaser();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CatController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wallLaser_1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wallLaser_2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Laser", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "LaserBtn_Red", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "LaserBtn_Blue", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wallLaserBtn_Red", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "wallLaserBtn_Blue", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Fx_Lightning", [_dec11], {
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
//# sourceMappingURL=LaserController.js.map