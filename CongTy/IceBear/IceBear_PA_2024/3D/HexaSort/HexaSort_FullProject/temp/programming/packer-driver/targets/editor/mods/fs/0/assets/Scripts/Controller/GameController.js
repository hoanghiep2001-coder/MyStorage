System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SoundController, IronSource, _dec, _class, _crd, ccclass, property, GameController;

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./SoundController", _context.meta, extras);
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
      IronSource = _unresolved_3.IronSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9aa2eHF0CNMMaktDBvyAFOG", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec(_class = class GameController extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onFinish() {
          window.gameEnd && window.gameEnd();
        }

        start() {
          window.gameReady && window.gameReady(); // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
        }

        installHandle() {
          console.log("install");
          (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).isEndGame = true;
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
              mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.mergerobo");
              return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
              mraid.open("https://itunes.apple.com/us/app/id6475570212?mt=8");
              return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.mergerobo");
            return;
          } // If ad network is mindwork. window alway avaiable so skip undefined check


          window.install && window.install();
        }

        update(deltaTime) {
          (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).handleMuteSoundIronSource();
        }

      }) || _class));
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
//# sourceMappingURL=GameController.js.map