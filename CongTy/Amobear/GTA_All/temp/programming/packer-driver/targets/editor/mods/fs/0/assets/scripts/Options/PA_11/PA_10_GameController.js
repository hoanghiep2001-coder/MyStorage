System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Director, GameInfo, _dec, _class, _temp, _crd, ccclass, property, getOrCreateSlomoPolyfill, PA_10_GameController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4abxneGdI6Y3PO9KI4zzB", "PA_10_GameController", undefined);

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
        let polyfill;
        return () => {
          if (!polyfill) {
            const polyfill_ = {
              multiplier: 1.0
            };
            const tick = Director.prototype.tick;

            Director.prototype.tick = function (dt, ...args) {
              tick.call(this, dt * polyfill_.multiplier, ...args);
            };

            polyfill = polyfill_;
          }

          return polyfill;
        };
      })();

      _export("PA_10_GameController", PA_10_GameController = (_dec = ccclass('PA_10_GameController'), _dec(_class = (_temp = class PA_10_GameController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "StartSlowMotionRate", 0.3);

          _defineProperty(this, "isActiveSlomotion", false);
        }

        start() {// SoundController.Instance(SoundController).playSound("WarSfx");
          // this.schedule(() => {
          //     if(GameInfo.GTA_PA_10.currentEnemyKilled >= 2) return;
          //     SoundController.Instance(SoundController).playSound("BulletHittRock");
          // }, 2)
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
          }), GameInfo) : GameInfo).GTA_PA_10.currentEnemyKilled >= 2 && !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_10.isShowInstallPopup) {
            this.activeSlowMotion();

            if (this.StartSlowMotionRate >= 1) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).GTA_PA_10.isShowInstallPopup = true;
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
//# sourceMappingURL=PA_10_GameController.js.map