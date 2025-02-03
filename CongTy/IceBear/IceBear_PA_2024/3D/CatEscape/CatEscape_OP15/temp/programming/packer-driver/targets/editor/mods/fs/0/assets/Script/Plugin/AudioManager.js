System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, _decorator, Component, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d948b2gMqdAD6CRzTBJFAiN", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AudioManager = (_dec = ccclass("AudioManager"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec9 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "catAngrySound", _descriptor2, this);

          _initializerDefineProperty(this, "electricSound", _descriptor3, this);

          _initializerDefineProperty(this, "electric2Sound", _descriptor4, this);

          _initializerDefineProperty(this, "winSound", _descriptor5, this);

          _initializerDefineProperty(this, "loseSound", _descriptor6, this);

          _initializerDefineProperty(this, "eatSound", _descriptor7, this);

          _initializerDefineProperty(this, "clockSound", _descriptor8, this);
        }

        playSound(soundName) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (soundName) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "catAngrySound":
                this.catAngrySound.play();
                break;

              case "electricSound":
                this.electricSound.play();
                break;

              case "electric2Sound":
                this.electric2Sound.play();
                break;

              case "winSound":
                this.winSound.play();
                break;

              case "loseSound":
                this.loseSound.play();
                break;

              case "eatSound":
                this.eatSound.play();
                break;

              case "clockSound":
                this.clockSound.play();
                break;

              default:
                break;
            }
          }
        }

        stopSound(soundName) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.stop();
              break;

            case "catAngrySound":
              this.catAngrySound.stop();
              break;

            case "electricSound":
              this.electricSound.stop();
              break;

            case "electric2Sound":
              this.electric2Sound.stop();
              break;

            case "winSound":
              this.winSound.stop();
              break;

            case "loseSound":
              this.loseSound.stop();
              break;

            case "eatSound":
              this.eatSound.stop();
              break;

            case "clockSound":
              this.clockSound.play();
              break;

            default:
              break;
          }
        }

        stopAllSound() {
          this.bgSound.stop();
          this.catAngrySound.stop();
          this.electricSound.stop();
          this.electric2Sound.stop();
          this.winSound.stop();
          this.loseSound.stop();
          this.eatSound.stop();
          this.clockSound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "catAngrySound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "electricSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "electric2Sound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loseSound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "eatSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "clockSound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map