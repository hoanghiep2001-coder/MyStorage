System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, AudioManager;

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

      _cclegacy._RF.push({}, "a3213HygWBNH4eVkpTX5ry/", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec9 = property(AudioSource), _dec10 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "videoSound", _descriptor2, this);

          _initializerDefineProperty(this, "eatSound", _descriptor3, this);

          _initializerDefineProperty(this, "dieSound", _descriptor4, this);

          _initializerDefineProperty(this, "whooseSound", _descriptor5, this);

          _initializerDefineProperty(this, "Skiing_BgSound", _descriptor6, this);

          _initializerDefineProperty(this, "Skiing_EatSound", _descriptor7, this);

          _initializerDefineProperty(this, "Skiing_JumpSound", _descriptor8, this);

          _initializerDefineProperty(this, "Skiing_ScreamSound", _descriptor9, this);
        }

        playSound(sound) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (sound) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "videoSound":
                this.videoSound.play();
                break;

              case "eatSound":
                this.eatSound.play();
                break;

              case "dieSound":
                this.dieSound.play();
                break;

              case "whooseSound":
                this.whooseSound.play();
                break;

              case "Skiing_BgSound":
                this.Skiing_BgSound.play();
                break;

              case "Skiing_EatSound":
                this.Skiing_EatSound.play();
                break;

              case "Skiing_JumpSound":
                this.Skiing_JumpSound.play();
                break;

              case "Skiing_ScreamSound":
                this.Skiing_ScreamSound.play();
                break;

              default:
                break;
            }
          }
        }

        stopSound(sound) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (sound) {
              case "bgSound":
                this.bgSound.stop();
                break;

              case "videoSound":
                this.videoSound.stop();
                break;

              case "eatSound":
                this.eatSound.stop();
                break;

              case "dieSound":
                this.dieSound.stop();
                break;

              case "whooseSound":
                this.whooseSound.stop();
                break;

              case "Skiing_BgSound":
                this.Skiing_BgSound.stop();
                break;

              case "Skiing_EatSound":
                this.Skiing_EatSound.stop();
                break;

              case "Skiing_JumpSound":
                this.Skiing_JumpSound.stop();
                break;

              case "Skiing_ScreamSound":
                this.Skiing_ScreamSound.stop();
                break;

              default:
                break;
            }
          }
        }

        stopAllSound() {
          console.log("stopAll");
          this.bgSound.stop();
          this.videoSound.stop();
          this.eatSound.stop();
          this.dieSound.stop();
          this.whooseSound.stop();
          this.Skiing_BgSound.stop();
          this.Skiing_EatSound.stop();
          this.Skiing_JumpSound.stop();
          this.Skiing_ScreamSound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "videoSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eatSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dieSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "whooseSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_BgSound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_EatSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_JumpSound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_ScreamSound", [_dec10], {
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