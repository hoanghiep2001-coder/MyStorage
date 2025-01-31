System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, screen, view, SoundController, CONST, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      screen = _cc.screen;
      view = _cc.view;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }, function (_unresolved_3) {
      CONST = _unresolved_3.CONST;
    }, function (_unresolved_4) {
      GameInfo = _unresolved_4.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9aa2eHF0CNMMaktDBvyAFOG", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rotatePopup", _descriptor, this);
        }

        onFinish() {
          window.gameEnd && window.gameEnd();
        }

        start() {
          window.gameReady && window.gameReady();
          this.handleOrientation();
          view.setResizeCallback(() => {
            this.handleOrientation();
          });
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.bgSound);
        }

        handleOrientation() {
          if (screen.windowSize.width > screen.windowSize.height) {
            this.rotatePopup.active = false;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
          } else {
            this.rotatePopup.active = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = false;
          }
        }

        installHandle() {
          console.log("install"); // IronSource.isEndGame = true;

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
              mraid.open("https://play.google.com/store/apps/details?id=com.ig.supermarket.manager.simulator");
              return;
            } // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6475570212?mt=8");
            //     return;
            // }


            mraid.open("https://play.google.com/store/apps/details?id=com.ig.supermarket.manager.simulator");
            return;
          } // If ad network is mindwork. window alway avaiable so skip undefined check


          window.install && window.install();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotatePopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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