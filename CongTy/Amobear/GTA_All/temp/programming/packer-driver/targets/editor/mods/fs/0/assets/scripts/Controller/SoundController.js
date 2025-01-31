System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Singleton, _dec, _class, _temp, _crd, ccclass, property, SoundController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Others/Singleton", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a1fd3Y1GIxL7IFS45mM5ZxM", "SoundController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundController", SoundController = (_dec = ccclass('SoundController'), _dec(_class = (_temp = class SoundController extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();

          _defineProperty(this, "sounds", []);

          SoundController._instance = this;
        }

        onLoad() {}

        start() {
          this.sounds = this.node.getComponentsInChildren(AudioSource);
          window.gameReady && window.gameReady();
        }

        playSound(soundName) {
          // if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
          let result = this.sounds.find(sound => sound.node.name === soundName);
          result.volume = 1;
          result.play(); // }
        }

        muteSound(soundName, isMuted) {
          let result = this.sounds.find(sound => sound.node.name === soundName);
          if (isMuted) result.volume = 0;else result.volume = 1;
        }

        stopSound(soundName) {
          let result = this.sounds.find(sound => sound.node.name === soundName);
          result.stop();
        }

        stopAllSound() {
          this.sounds.forEach(sound => sound.stop());
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SoundController.js.map