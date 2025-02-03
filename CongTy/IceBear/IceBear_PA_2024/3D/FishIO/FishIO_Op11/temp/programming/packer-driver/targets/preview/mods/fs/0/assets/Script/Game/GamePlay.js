System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec2, VideoPlayer, GameController, AudioManager, Constants, UIController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UIController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      VideoPlayer = _cc.VideoPlayer;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      UIController = _unresolved_5.UIController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec5 = property(Node), _dec6 = property(VideoPlayer), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "background", _descriptor4, this);

          _initializerDefineProperty(this, "video", _descriptor5, this);

          _initializerDefineProperty(this, "HideMask", _descriptor6, this);

          _initializerDefineProperty(this, "CTA", _descriptor7, this);

          _initializerDefineProperty(this, "CTA_overlay", _descriptor8, this);

          _initializerDefineProperty(this, "CTA_icon", _descriptor9, this);

          _initializerDefineProperty(this, "CTA_logo", _descriptor10, this);

          _initializerDefineProperty(this, "CTA_btn", _descriptor11, this);

          _initializerDefineProperty(this, "layer", _descriptor12, this);

          _defineProperty(this, "currentPos", new Vec2(0, 0));

          _defineProperty(this, "currentPos2", new Vec2(0, 0));

          _defineProperty(this, "countingTimeVideo", 0);

          _defineProperty(this, "countingTimeVideoWithRightBtn", 0);

          _defineProperty(this, "isDoneLeftBtn", false);
        }

        onLoad() {
          this.CTA.active = false;
        }

        start() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick = true;
          this.handleVideo(); // use if build ironSource
          // this.background.active = false;
          // this.video.stayOnBottom = true;
          // this.AudioManager.bgSound.volume = 0;
          // this.HideMask.on(Node.EventType.TOUCH_START, () => {
          //     this.AudioManager.bgSound.volume = 1;
          // }, this);
          // ------------------
        }

        registerEvent() {
          this.UIController.Btn_Left.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.UIController.Btn_Left.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.UIController.Btn_Left.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        registerEventForBtnRight() {
          this.UIController.Btn_Right.on(Node.EventType.TOUCH_MOVE, this.touchMoveWithBtnRight, this);
          this.UIController.Btn_Right.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.UIController.Btn_Right.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        offEvent() {
          this.UIController.Btn_Left.off(Node.EventType.TOUCH_MOVE);
          this.UIController.Btn_Left.off(Node.EventType.TOUCH_END);
          this.UIController.Btn_Left.off(Node.EventType.TOUCH_CANCEL);
          this.UIController.Btn_Right.off(Node.EventType.TOUCH_MOVE);
          this.UIController.Btn_Right.off(Node.EventType.TOUCH_END);
          this.UIController.Btn_Right.off(Node.EventType.TOUCH_CANCEL);
        }

        handleVideo() {
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.bgSound);
          this.video.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.initVideo, this);
          this.video.node.on(VideoPlayer.EventType.COMPLETED, this.endVideo, this); // this.scheduleOnce(() => {
          //     this.AudioManager.pauseSound(Constants.SoundTrack.bgSound);
          //     this.video.pause();
          //     this.registerEvent();
          // }, 3.5);
        }

        touchMove(e) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) {
            return;
          }

          var pos = e.getLocation();

          if (pos.y > this.currentPos.y) {
            !this.AudioManager.bgSound.playing && this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.bgSound);
            this.video.play();
            this.countingTimeVideo += 0.1;

            if (this.countingTimeVideo >= 2.5) {
              console.log("off ----------------------------");
              this.swtichGameToBtnRight();
              this.offEvent();
              this.isDoneLeftBtn = true;
            }
          }

          this.currentPos = pos;
        }

        touchMoveWithBtnRight(e) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) {
            return;
          }

          var pos = e.getLocation();

          if (pos.y > this.currentPos2.y) {
            !this.AudioManager.bgSound.playing && this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.bgSound);
            this.video.play();
            this.countingTimeVideoWithRightBtn += 0.1;

            if (this.countingTimeVideoWithRightBtn >= 2.5) {
              console.log("off ----------------------------");
              this.offEvent();
            }
          }

          this.currentPos2 = pos;
        }

        touchEnd() {
          this.video.pause();
          this.AudioManager.pauseSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.bgSound);
        }

        swtichGameToBtnRight() {
          this.scheduleOnce(() => {
            this.registerEventForBtnRight();
            this.video.pause();
            this.AudioManager.pauseSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.bgSound);
          }, 3.5);
        }

        handleMuteSoundIronSource() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.State) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.State === 1 && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.isEndGame) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState = true;
            }

            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.State === 2 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState = false;
              this.AudioManager.stopAllSound();
            }
          }
        }

        initVideo(video) {
          video.play();
          video.volume = 0;
        }

        endVideo() {
          this.CTA.active = true;
          this.background.active = false;
          this.video.stayOnBottom = true;
          this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this); // mtg & applovin

          this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        handleInstall() {
          this.btn_accept.off(Node.EventType.TOUCH_START);
          this.btn_decline.off(Node.EventType.TOUCH_START);
          this.GameController.installHandle();
        }

        handleIronSourcePlaySound() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isPlayBgSound) {
            return;
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.iphoneSound);
            this.AudioManager.switchVolume((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.iphoneSound, 0.7);
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isPlayBgSound = true;
        }

        update(dt) {// ironsource
          // this.handleMuteSoundIronSource();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "video", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CTA_overlay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CTA_icon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "CTA_logo", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "CTA_btn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "layer", [_dec13], {
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
//# sourceMappingURL=GamePlay.js.map