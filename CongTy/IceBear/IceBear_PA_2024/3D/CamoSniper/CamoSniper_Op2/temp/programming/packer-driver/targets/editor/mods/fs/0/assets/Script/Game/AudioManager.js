System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8852crIf49LULXJpY9pXiqJ", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "k98Sound", _descriptor2, this);

          _initializerDefineProperty(this, "GreatSound1", _descriptor3, this);

          _initializerDefineProperty(this, "GreatSound2", _descriptor4, this);

          _initializerDefineProperty(this, "GreatSound3", _descriptor5, this);
        }

        playSound(soundName) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (soundName) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "k98Sound":
                this.k98Sound.play();
                break;

              case "GreatSound1":
                this.GreatSound1.play();
                break;

              case "GreatSound2":
                this.GreatSound2.play();
                break;

              case "GreatSound3":
                this.GreatSound3.play();
                break;

              default:
                break;
            }
          }
        }

        switchVolume(soundName, volume) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.volume = volume;
              break;

            case "k98Sound":
              this.k98Sound.volume = volume;
              break;

            case "GreatSound1":
              this.GreatSound1.volume = volume;
              break;

            case "GreatSound2":
              this.GreatSound2.volume = volume;
              break;

            case "GreatSound3":
              this.GreatSound3.volume = volume;
              break;

            default:
              break;
          }
        }

        pauseSound(soundName) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.pause();
              break;

            case "k98Sound":
              this.k98Sound.pause();
              break;

            case "GreatSound1":
              this.GreatSound1.pause();
              break;

            case "GreatSound2":
              this.GreatSound2.pause();
              break;

            case "GreatSound3":
              this.GreatSound3.pause();
              break;

            default:
              break;
          }
        }

        stopSound(soundName) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.stop();
              break;

            case "k98Sound":
              this.k98Sound.stop();
              break;

            case "GreatSound1":
              this.GreatSound1.stop();
              break;

            case "GreatSound2":
              this.GreatSound2.stop();
              break;

            case "GreatSound3":
              this.GreatSound3.stop();
              break;

            default:
              break;
          }
        }

        stopAllSound() {
          this.bgSound.stop();
          this.GreatSound1.stop();
          this.GreatSound2.stop();
          this.GreatSound3.stop();
          this.k98Sound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "k98Sound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GreatSound1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GreatSound2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "GreatSound3", [_dec6], {
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