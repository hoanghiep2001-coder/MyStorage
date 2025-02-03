System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Constants, _dec, _class, _crd, ccclass, property, GameController;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Data/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "068c9ERAfJF1b4+fsWryUsH", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec(_class = class GameController extends Component {
        onLoad() {}

        start() {
          window.gameReady && window.gameReady();
        }

        installHandle() {
          console.log("install");
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame = true;
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
              mraid.open("https://play.google.com/store/apps/details?id=com.nextsol.muscleemotion");
              return;
            } // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id1627953728?mt=8");
            //     return;
            // }


            mraid.open("https://play.google.com/store/apps/details?id=com.nextsol.muscleemotion");
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