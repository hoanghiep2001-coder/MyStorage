System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SoundController, GameInfo, IronSource, _dec, _class, _crd, ccclass, property, GameController;

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../AdHelper/IronSource", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      IronSource = _unresolved_4.IronSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9aa2eHF0CNMMaktDBvyAFOG", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec(_class = class GameController extends Component {
        onFinish() {
          window.gameEnd && window.gameEnd();
        }

        start() {
          window.gameReady && window.gameReady(); // this.handleOrientation();
          // view.setResizeCallback(() => {
          //     this.handleOrientation();
          // });
          // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
        } // private handleOrientation(): void {
        //     if (screen.windowSize.width > screen.windowSize.height) {
        //         this.rotatePopup.active = false;
        //         GameInfo.isCanTouch = true;
        //     } else {
        //         this.rotatePopup.active = true;
        //         GameInfo.isCanTouch = false;
        //     }
        // }


        installHandle() {
          // IronSource.handleMuteSoundIronSource();
          console.log("install");
          (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).isEndGame = true;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall = true;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).StopAllSound();
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
              mraid.open("https://play.google.com/store/apps/details?id=com.bus.sort.color.car.parkingjam");
              return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
              mraid.open("https://itunes.apple.com/us/app/id6689494845?mt=8");
              return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.bus.sort.color.car.parkingjam");
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