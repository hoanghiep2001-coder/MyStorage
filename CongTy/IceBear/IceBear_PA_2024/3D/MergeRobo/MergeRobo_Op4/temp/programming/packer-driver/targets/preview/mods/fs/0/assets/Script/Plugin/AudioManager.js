System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, AudioManager;

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
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd163zuMEBDDa1UHoAitHH9", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec9 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "Dino_AttkSound", _descriptor2, this);

          _initializerDefineProperty(this, "Dino_LoseSound", _descriptor3, this);

          _initializerDefineProperty(this, "Dino_ScreamSound", _descriptor4, this);

          _initializerDefineProperty(this, "Dino_MergeSound", _descriptor5, this);

          _initializerDefineProperty(this, "Dino_FightSound", _descriptor6, this);

          _initializerDefineProperty(this, "Dino_ChooseSound", _descriptor7, this);

          _initializerDefineProperty(this, "ExplosionSound", _descriptor8, this);
        }

        playSound(sound) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (sound) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "ExplosionSound":
                this.ExplosionSound.play();
                break;

              case "Dino_AttkSound":
                this.Dino_AttkSound.play();
                break;

              case "Dino_LoseSound":
                this.Dino_LoseSound.play();
                break;

              case "Dino_ScreamSound":
                this.Dino_ScreamSound.play();
                break;

              case "Dino_MergeSound":
                this.Dino_MergeSound.play();
                break;

              case "Dino_FightSound":
                this.Dino_FightSound.play();
                break;

              case "Dino_ChooseSound":
                this.Dino_ChooseSound.play();
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

            case "Dino_AttkSound":
              this.Dino_AttkSound.volume = volume;
              break;

            case "ExplosionSound":
              this.ExplosionSound.volume = volume;
              break;

            case "Dino_LoseSound":
              this.Dino_LoseSound.volume = volume;
              break;

            case "Dino_ScreamSound":
              this.Dino_ScreamSound.volume = volume;
              break;

            case "Dino_MergeSound":
              this.Dino_MergeSound.volume = volume;
              break;

            case "Dino_FightSound":
              this.Dino_FightSound.volume = volume;
              break;

            case "Dino_ChooseSound":
              this.Dino_ChooseSound.volume = volume;
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

            case "ExplosionSound":
              this.ExplosionSound.pause();
              break;

            case "Dino_AttkSound":
              this.Dino_AttkSound.pause();
              break;

            case "Dino_LoseSound":
              this.Dino_LoseSound.pause();
              break;

            case "Dino_ScreamSound":
              this.Dino_ScreamSound.pause();
              break;

            case "Dino_MergeSound":
              this.Dino_MergeSound.pause();
              break;

            case "Dino_FightSound":
              this.Dino_FightSound.pause();
              break;

            case "Dino_ChooseSound":
              this.Dino_ChooseSound.pause();
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

            case "ExplosionSound":
              this.ExplosionSound.stop();
              break;

            case "Dino_AttkSound":
              this.Dino_AttkSound.stop();
              break;

            case "Dino_LoseSound":
              this.Dino_LoseSound.stop();
              break;

            case "Dino_ScreamSound":
              this.Dino_ScreamSound.stop();
              break;

            case "Dino_MergeSound":
              this.Dino_MergeSound.stop();
              break;

            case "Dino_FightSound":
              this.Dino_FightSound.stop();
              break;

            case "Dino_ChooseSound":
              this.Dino_ChooseSound.stop();
              break;

            default:
              break;
          }
        }

        stopAllSound() {
          this.bgSound.stop();
          this.ExplosionSound.stop();
          this.Dino_AttkSound.stop();
          this.Dino_LoseSound.stop();
          this.Dino_ScreamSound.stop();
          this.Dino_MergeSound.stop();
          this.Dino_ChooseSound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Dino_AttkSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Dino_LoseSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Dino_ScreamSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Dino_MergeSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Dino_FightSound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Dino_ChooseSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ExplosionSound", [_dec9], {
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
//# sourceMappingURL=AudioManager.js.map