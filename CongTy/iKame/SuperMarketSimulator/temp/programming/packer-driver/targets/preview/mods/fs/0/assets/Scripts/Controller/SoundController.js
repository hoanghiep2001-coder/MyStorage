System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Singleton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, SoundController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Utils/Singleton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b3313nS1VKCLCVaB9Df1SK", "SoundController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundController", SoundController = (_dec = ccclass('SoundController'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec(_class = (_class2 = (_temp = class SoundController extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "clickSound", _descriptor2, this);

          _initializerDefineProperty(this, "paySound", _descriptor3, this);

          _initializerDefineProperty(this, "placeSound", _descriptor4, this);

          _initializerDefineProperty(this, "winSound", _descriptor5, this);

          _initializerDefineProperty(this, "paidSound", _descriptor6, this);

          _initializerDefineProperty(this, "loseSound", _descriptor7, this);

          SoundController._instance = this;
        }

        onLoad() {}

        start() {// this.bgSound.play();
        }

        PlaySound(stringAudioName) {
          // if (!IronSource.SoundState) return;
          switch (stringAudioName) {
            case "bgSound":
              this.bgSound.play();
              break;

            case "clickSound":
              this.clickSound.play();
              break;

            case "paySound":
              this.paySound.play();
              break;

            case "placeSound":
              this.placeSound.play();
              break;

            case "winSound":
              this.winSound.play();
              break;

            case "paidSound":
              this.paidSound.play();
              break;

            case "loseSound":
              this.loseSound.play();
              break;
          }
        }

        StopAllSound() {
          this.bgSound.stop();
          this.clickSound.stop();
          this.paySound.stop();
          this.placeSound.stop();
          this.paidSound.stop();
          this.winSound.stop();
          this.loseSound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "paySound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "placeSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "paidSound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loseSound", [_dec8], {
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
//# sourceMappingURL=SoundController.js.map