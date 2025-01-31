System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, log, SoundController, _dec, _class, _crd, ccclass, property, GameController;

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./SoundController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b00cCndvxCP5cdGpGi66UP", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec(_class = class GameController extends Component {
        start() {
          window.gameReady && window.gameReady();
        }

        installHandle() {
          log("install");
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).stopAllSound();
          window.gameEnd && window.gameEnd(); //If ad network is tiktok

          if (typeof playableSDK != "undefined") {
            window.playableSDK.openAppStore();
            return;
          } // If ad network is google ads


          if (typeof ExitApi != "undefined") {
            ExitApi.exit();
            return;
          } // If ad netwrok is ironsources


          if (typeof dapi != "undefined") {
            dapi.openStoreUrl();
            return;
          } // If ad network support MRAID 2.0


          if (typeof mraid != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
              mraid.open("https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas");
              return;
            } // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6689494845?mt=8");
            //     return;
            // }


            mraid.open("https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas");
            return;
          } // If ad network is mindwork. window alway avaiable so skip undefined check


          window.install && window.install();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameController.js.map