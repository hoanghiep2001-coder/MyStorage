System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, AudioManager;

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

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec9 = property(AudioSource), _dec10 = property(AudioSource), _dec11 = property(AudioSource), _dec12 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "hitSound", _descriptor2, this);

          _initializerDefineProperty(this, "collideWallSound", _descriptor3, this);

          _initializerDefineProperty(this, "collideBallSound", _descriptor4, this);

          _initializerDefineProperty(this, "AngleSound", _descriptor5, this);

          _initializerDefineProperty(this, "GoalSound", _descriptor6, this);

          _initializerDefineProperty(this, "ComboSound", _descriptor7, this);

          _initializerDefineProperty(this, "LoseSound", _descriptor8, this);

          _initializerDefineProperty(this, "inHoleSound", _descriptor9, this);

          _initializerDefineProperty(this, "woaSound1", _descriptor10, this);

          _initializerDefineProperty(this, "woaSound2", _descriptor11, this);
        }

        playSound(sound) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (sound) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "collideWallSound":
                this.collideWallSound.play();
                break;

              case "inHoleSound":
                this.inHoleSound.play();
                break;

              case "hitSound":
                this.hitSound.play();
                break;

              case "AngleSound":
                this.AngleSound.play();
                break;

              case "collideBallSound":
                this.collideBallSound.play();
                break;

              case "GoalSound":
                this.GoalSound.play();
                break;

              case "ComboSound":
                this.ComboSound.play();
                break;

              case "LoseSound":
                this.LoseSound.play();
                break;

              case "woaSound1":
                this.woaSound1.play();
                break;

              case "woaSound2":
                this.woaSound2.play();
                break;

              default:
                break;
            }
          } // ironsource
          // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
          //     switch (sound) {
          //         case "bgSound":
          //             this.bgSound.play();
          //             break;
          //         case "collideWallSound":
          //             this.collideWallSound.play();
          //             break;
          //         case "inHoleSound":
          //             this.inHoleSound.play();
          //             break;
          //         case "hitSound":
          //             this.hitSound.play();
          //             break;
          //         case "AngleSound":
          //             this.AngleSound.play();
          //             break;
          //         case "collideBallSound":
          //             this.collideBallSound.play();
          //             break;
          //         case "GoalSound":
          //             this.GoalSound.play();
          //             break;
          //         case "ComboSound":
          //             this.ComboSound.play();
          //             break;
          //         case "LoseSound":
          //             this.LoseSound.play();
          //             break;
          //         case "woaSound1":
          //             this.woaSound1.play();
          //             break;
          //         case "woaSound2":
          //             this.woaSound2.play();
          //             break;
          //         default:
          //             break;
          //     }
          // }

        }

        switchVolume(soundName, volume) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.volume = volume;
              break;

            case "collideWallSound":
              this.collideWallSound.volume = volume;
              break;

            case "inHoleSound":
              this.inHoleSound.volume = volume;
              break;

            case "hitSound":
              this.hitSound.volume = volume;
              break;

            case "AngleSound":
              this.AngleSound.volume = volume;
              break;

            case "collideBallSound":
              this.collideBallSound.volume = volume;
              break;

            case "GoalSound":
              this.GoalSound.volume = volume;
              break;

            case "ComboSound":
              this.ComboSound.volume = volume;
              break;

            case "LoseSound":
              this.LoseSound.volume = volume;
              break;

            case "woaSound1":
              this.woaSound1.volume = volume;
              break;

            case "woaSound2":
              this.woaSound2.volume = volume;
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

            case "collideWallSound":
              this.collideWallSound.pause();
              break;

            case "inHoleSound":
              this.inHoleSound.pause();
              break;

            case "hitSound":
              this.hitSound.pause();
              break;

            case "AngleSound":
              this.AngleSound.pause();
              break;

            case "collideBallSound":
              this.collideBallSound.pause();
              break;

            case "GoalSound":
              this.GoalSound.pause();
              break;

            case "ComboSound":
              this.ComboSound.pause();
              break;

            case "LoseSound":
              this.LoseSound.pause();
              break;

            case "woaSound1":
              this.woaSound1.pause();
              break;

            case "woaSound2":
              this.woaSound2.pause();
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

            case "hitSound":
              this.hitSound.stop();
              break;

            case "inHoleSound":
              this.inHoleSound.stop();
              break;

            case "collideWallSound":
              this.collideWallSound.stop();
              break;

            case "AngleSound":
              this.AngleSound.stop();
              break;

            case "collideBallSound":
              this.collideBallSound.stop();
              break;

            case "GoalSound":
              this.GoalSound.stop();
              break;

            case "ComboSound":
              this.ComboSound.stop();
              break;

            case "LoseSound":
              this.LoseSound.stop();
              break;

            case "woaSound1":
              this.woaSound1.stop();
              break;

            case "woaSound2":
              this.woaSound2.stop();
              break;

            default:
              break;
          }
        }

        stopAllSound() {
          this.bgSound.stop();
          this.inHoleSound.stop();
          this.hitSound.pause();
          this.collideWallSound.stop();
          this.AngleSound.stop();
          this.collideBallSound.stop();
          this.GoalSound.stop();
          this.ComboSound.stop();
          this.LoseSound.stop();
          this.woaSound1.stop();
          this.woaSound2.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hitSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "collideWallSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "collideBallSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "AngleSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "GoalSound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ComboSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "LoseSound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "inHoleSound", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "woaSound1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "woaSound2", [_dec12], {
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