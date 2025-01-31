System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Director, SoundController, GameInfo, _dec, _class, _temp, _crd, ccclass, property, getOrCreateSlomoPolyfill, PA_11_GameController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Director = _cc.Director;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4abxneGdI6Y3PO9KI4zzB", "PA_11_GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_10_UI
       * DateTime = Wed Dec 25 2024 09:20:50 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_10_UI.ts
       * FileBasenameNoExtension = PA_10_UI
       * URL = db://assets/scripts/Options/PA_10/PA_10_UI.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      getOrCreateSlomoPolyfill = (() => {
        var polyfill;
        return () => {
          if (!polyfill) {
            var polyfill_ = {
              multiplier: 1.0
            };
            var tick = Director.prototype.tick;

            Director.prototype.tick = function (dt) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              tick.call(this, dt * polyfill_.multiplier, ...args);
            };

            polyfill = polyfill_;
          }

          return polyfill;
        };
      })();

      _export("PA_11_GameController", PA_11_GameController = (_dec = ccclass('PA_11_GameController'), _dec(_class = (_temp = class PA_11_GameController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "StartSlowMotionRate", 0.3);

          _defineProperty(this, "isActiveSlomotion", false);
        }

        start() {
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playSound("WarSfx");
          this.schedule(() => {
            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_11.currentEnemyKilled >= 2) return;
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).playSound("BulletHittRock");
          }, 2);
        }

        activeSlowMotion() {
          if (this.isActiveSlomotion) return;
          this.isActiveSlomotion = true;
          this.slowMotionEffect(this.StartSlowMotionRate);
        }

        slowMotionEffect(multiplier) {
          getOrCreateSlomoPolyfill().multiplier = multiplier;
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.currentEnemyKilled >= 2 && !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.isShowInstallPopup) {
            this.activeSlowMotion();

            if (this.StartSlowMotionRate >= 1) {
              // GameInfo.GTA_PA_11.isShowInstallPopup = true;
              return;
            }

            this.slowMotionEffect(this.StartSlowMotionRate += 0.0036);
          }
        }

      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_11_GameController.js.map