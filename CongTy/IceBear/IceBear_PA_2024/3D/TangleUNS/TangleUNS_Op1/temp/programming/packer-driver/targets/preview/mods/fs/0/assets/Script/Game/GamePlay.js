System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, Vec3, VideoPlayer, GameController, AudioManager, Constants, UIController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, GamePlay;

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
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
      }), AudioManager) : AudioManager), _dec5 = property(VideoPlayer), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "video", _descriptor4, this);

          _initializerDefineProperty(this, "HideMask", _descriptor5, this);

          _initializerDefineProperty(this, "CTA", _descriptor6, this);

          _initializerDefineProperty(this, "CTA_overlay", _descriptor7, this);

          _initializerDefineProperty(this, "CTA_icon", _descriptor8, this);

          _initializerDefineProperty(this, "CTA_btn", _descriptor9, this);

          _initializerDefineProperty(this, "layer", _descriptor10, this);

          _initializerDefineProperty(this, "layer_icon", _descriptor11, this);

          _defineProperty(this, "isDoneFirstDot", false);

          _defineProperty(this, "isDoneSecondDot", false);

          _defineProperty(this, "isCanPlayVideo", true);

          _defineProperty(this, "caculatedTime", null);

          _defineProperty(this, "currentPos", null);
        }

        onLoad() {
          this.CTA.active = false;
        }

        start() {
          // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick = true;
          this.initVideo();
          this.registerEvent();

          for (var index = 0; index < this.UIController.Hints.length; index++) {
            var hint = this.UIController.Hints[index];
            hint.active = false;
          }

          this.UIController.Hints[0].active = true;
        }

        registerEvent() {
          for (var index = 0; index < this.UIController.Btns.length; index++) {
            var btn = this.UIController.Btns[index];
            btn.on(Node.EventType.TOUCH_START, this.handleBtnTouch, this);
          }
        }

        handleBtnTouch(e) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) return;
          this.handleIronSourcePlaySound();
          var btnName = e.target.name;
          console.log(btnName);
          this.filterBtn(btnName);

          if (this.isCanPlayVideo) {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.rope_1Sound);
            this.video.play();
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanClick = false;
          }

          if (this.caculatedTime) {
            this.scheduleOnce(() => {
              // this.AudioManager.playSound(Constants.SoundTrack.rope_2Sound)
              this.video.pause();
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isCanClick = true;
            }, this.caculatedTime);
          }
        }

        filterBtn(btnName) {
          switch (btnName) {
            case "Btn_1":
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFirstBtn = true;
              this.isCanPlayVideo = true;
              this.caculatedTime = 0.7;
              this.UIController.Hints[0].active = false;
              this.UIController.Hints[2].active = true;
              break;

            case "Btn_3":
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFirstBtn) {
                this.isCanPlayVideo = false;
                return;
              }

              ;

              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchForthBtn) {
                this.isCanPlayVideo = true;
                this.caculatedTime = 0.55;
                this.UIController.Hints[2].active = false;
                this.UIController.Hints[4].active = true;
                return;
              }

              this.UIController.Hints[2].active = false;
              this.UIController.Hints[1].active = true;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchSecondBtn = true;
              this.isCanPlayVideo = true;
              this.caculatedTime = 0.82;
              break;

            case "Btn_2":
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFirstBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchSecondBtn) {
                this.isCanPlayVideo = false;
                return;
              }

              ;
              this.UIController.Hints[1].active = false;
              this.UIController.Hints[3].active = true;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchThirdBtn = true;
              this.isCanPlayVideo = true;
              this.caculatedTime = 0.4;
              break;

            case "Btn_4":
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFirstBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchSecondBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchThirdBtn) {
                this.isCanPlayVideo = false;
                return;
              }

              ;
              this.UIController.Hints[3].active = false;
              this.UIController.Hints[2].active = true;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchForthBtn = true;
              this.isCanPlayVideo = true;
              this.caculatedTime = 0.8;
              break;

            case "Btn_5":
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFirstBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchSecondBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchThirdBtn || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchForthBtn) {
                this.isCanPlayVideo = false;
                return;
              }

              ;
              this.UIController.Hints[4].active = false;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isTouchFifthBtn = true;
              this.isCanPlayVideo = true;
              this.caculatedTime = null;
              this.scheduleOnce(() => {
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.winSound);
              }, 0.8);
              break;

            default:
              break;
          }
        }

        convertToNodeSpace(pos) {
          var result = new Vec3(pos.x - 160, pos.y - 240, 0);
          return result;
        }

        initVideo() {
          this.video.node.on(VideoPlayer.EventType.COMPLETED, this.endVideo, this);
        }

        endVideo() {
          this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.bgSound);
          this.CTA.active = true;

          for (var index = 0; index < this.UIController.Btns.length; index++) {
            var btn = this.UIController.Btns[index];
            btn.off(Node.EventType.TOUCH_START);
          }

          tween(this.CTA_btn).repeatForever(tween(this.CTA_btn).to(0.5, {
            scale: new Vec3(0.45, 0.45, 0.45)
          }).to(0.5, {
            scale: new Vec3(0.5, 0.5, 0.5)
          }, {
            easing: 'elasticOut'
          })).start();
          this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this); // mtg & applovin
          // this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
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
            }), Constants) : Constants).SoundTrack.bgSound);
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isPlayBgSound = true;
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
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.bgSound);
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

        update(dt) {
          // ironsource
          this.handleMuteSoundIronSource();
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "video", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CTA_overlay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CTA_icon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CTA_btn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "layer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "layer_icon", [_dec12], {
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