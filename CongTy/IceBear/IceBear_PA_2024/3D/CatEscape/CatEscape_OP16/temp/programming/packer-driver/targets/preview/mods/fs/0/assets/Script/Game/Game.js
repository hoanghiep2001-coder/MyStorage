System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, CCFloat, v3, screen, Animation, director, GameController, JoyStick, Constants, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
      v3 = _cc.v3;
      screen = _cc.screen;
      Animation = _cc.Animation;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      JoyStick = _unresolved_3.JoyStick;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab7fdcqdMJBlbVEI/I8YoiE", "Game", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass("Game"), _dec2 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(CCFloat), _dec18 = property(CCFloat), _dec(_class = (_class2 = (_temp = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "JoyStickComponent", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "Cat", _descriptor4, this);

          _initializerDefineProperty(this, "canvas2D", _descriptor5, this);

          _initializerDefineProperty(this, "icon", _descriptor6, this);

          _initializerDefineProperty(this, "navigate", _descriptor7, this);

          _initializerDefineProperty(this, "text", _descriptor8, this);

          _initializerDefineProperty(this, "title", _descriptor9, this);

          _initializerDefineProperty(this, "joyStick", _descriptor10, this);

          _initializerDefineProperty(this, "camera", _descriptor11, this);

          _initializerDefineProperty(this, "step", _descriptor12, this);

          _initializerDefineProperty(this, "HideMask", _descriptor13, this);

          _initializerDefineProperty(this, "CTA", _descriptor14, this);

          _initializerDefineProperty(this, "CTA_tryBtn", _descriptor15, this);

          _initializerDefineProperty(this, "CTA_Download", _descriptor16, this);

          _initializerDefineProperty(this, "_realHeight", _descriptor17, this);

          _initializerDefineProperty(this, "_realWidth", _descriptor18, this);

          _defineProperty(this, "meowSoundState", null);

          _defineProperty(this, "ironSourceState", 1);

          _defineProperty(this, "ironSourceSoundState", true);

          _defineProperty(this, "isEndGame", false);

          _defineProperty(this, "endGame", false);
        }

        start() {
          this.reset(); // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
          // this.AudioManager.playSound(Constants.SoundTrack.catAngrySound);

          this.Cat.active = true;
          this.canvas2D.active = true;
          this.text.active = true;
          this.navigate.active = true;
          this.canvas2D.on(Node.EventType.TOUCH_START, this.managerScene, this);
        }

        reset() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCollideDoor = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).laser = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).wallLaser = true;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isEatFood = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isWinGame && this.HideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        countDown() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouch || (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCatched || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCatLive) {
            return;
          } // this.scheduleOnce(() => {
          //   if (Constants.ironSource.isEndGame) {
          //     return;
          //   }
          //   this.EndGame(false);
          // }, 10);

        }

        handleCountingTime() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).countingTime < 0 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isRing) {
            this.timeline.setScale(0, 1, 1);
            return;
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).countingTime < 0.5 && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isRing) {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.clockSound);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isRing = true;
          }

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).countingTime -= 0.0017;
            this.timeline.setScale((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).countingTime, 1, 1);
          }
        }

        EndGame(bool) {
          // Constants.ironSource.isEndGame = true;
          this.CTA.getComponent(Animation).play("CTA_Anim");
          this.title.active = false;
          this.icon.active = false;

          if (bool) {
            this.JoyStickComponent.fakeBg.getComponent(Animation).play();
            this.scheduleOnce(() => {
              director.loadScene("CatScene2");
            }, 1.5);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isWinGame = true; // this.CTA_tryBtn.active = false;
            // this.CTA_Download.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.winSound);
          } else {
            this.CTA_Download.active = false;
            this.CTA_tryBtn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.loseSound);
            this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.catAngrySound); // mtg & applovin
            //  this.HideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
          }
        }

        managerScene(e) {
          this.step++;

          if (this.step === 2) {
            var pos = e.getUILocation();
            var localPos = new Vec3(pos.x - 160, pos.y - 240, 0);
            this.JoyStickComponent.node.setPosition(localPos);
            this.JoyStickComponent.stick.setPosition(localPos);
            this.text.active = false;
            this.navigate.active = false;
          }
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

        update(deltaTime) {
          this.responsive(); // Constants.isTouch && !Constants.ironSource.isEndGame && this.handleCountingTime();

          this.handleMuteSoundIronSource();
        }

        responsive() {
          if (screen.windowSize.width > screen.windowSize.height) {
            this.camera.setPosition(v3(-14.8, 24, 0));
            this._realHeight = 480;
            this._realWidth = 320 * (screen.windowSize.width / screen.windowSize.height); // console.log(this._realWidth);

            this.icon.setPosition((this._realWidth - 320) / 2 + 160, 0, 0);
            this.title.setPosition((320 - this._realWidth) / 2 - 160, 0, 0);
            this.icon.setScale(0.9, 0.9, 0.9);
            this.title.setScale(0.35, 0.35, 0.35);
          } else {
            this.camera.setPosition(v3(-13, 24, 0));

            if (screen.windowSize.height / screen.windowSize.width < 1.4) {
              this._realWidth = 370;
            } else {
              this._realWidth = 320;
            }

            this._realHeight = this._realWidth * (screen.windowSize.height / screen.windowSize.width); // this.title.y = (this._realHeight - 480) / 2 + 207;
            // this.icon.y = (this._realHeight - 480) / 2 + 207;

            this.icon.setPosition(56, 207 + (this._realHeight - 480) / 2, 0);
            this.title.setPosition(-40, 207 + (this._realHeight - 480) / 2, 0);
            this.icon.setScale(0.25, 0.25, 0.25);
            this.title.setScale(0.2, 0.2, 0.2);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "JoyStickComponent", [_dec2], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Cat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canvas2D", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "navigate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "step", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "CTA_tryBtn", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "CTA_Download", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_realHeight", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_realWidth", [_dec18], {
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
//# sourceMappingURL=Game.js.map