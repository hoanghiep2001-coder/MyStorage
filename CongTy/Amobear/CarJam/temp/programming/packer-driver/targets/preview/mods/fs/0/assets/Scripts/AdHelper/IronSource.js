System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CONST, SoundController, IronSource, _crd, handleIronSourcePlaySound, handleMuteSoundIronSource;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  _export("IronSource", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CONST = _unresolved_2.CONST;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6c66J3IX9FNoCaSEYvwllu", "IronSource", undefined);

      handleIronSourcePlaySound = () => {
        if (IronSource.isPlayBgSound) {
          return;
        }

        if (IronSource.SoundState) {
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.bgSound);
        }

        IronSource.isPlayBgSound = true;
      };

      handleMuteSoundIronSource = () => {
        IronSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);

        if (IronSource.State) {
          if (IronSource.State === 1 && !IronSource.SoundState && !IronSource.isEndGame) {
            IronSource.SoundState = true;
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
              error: Error()
            }), CONST) : CONST).SoundTrack.bgSound);
          }

          if (IronSource.State === 2 && IronSource.SoundState) {
            IronSource.SoundState = false;
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).StopAllSound();
          }
        }
      };

      _export("IronSource", IronSource = class IronSource {});

      _defineProperty(IronSource, "SoundState", true);

      _defineProperty(IronSource, "isEndGame", false);

      _defineProperty(IronSource, "isPlayBgSound", false);

      _defineProperty(IronSource, "State", 1);

      _defineProperty(IronSource, "handleIronSourcePlaySound", handleIronSourcePlaySound);

      _defineProperty(IronSource, "handleMuteSoundIronSource", handleMuteSoundIronSource);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IronSource.js.map