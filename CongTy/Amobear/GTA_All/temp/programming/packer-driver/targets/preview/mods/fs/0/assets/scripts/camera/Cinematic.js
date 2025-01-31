System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, log, Node, tween, Vec3, CharacterController, JoystickController, GameInfo, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _temp, _crd, ccclass, property, Cinematic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterController(extras) {
    _reporterNs.report("CharacterController", "../CharacterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickController(extras) {
    _reporterNs.report("JoystickController", "../joystick/JoystickController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      log = _cc.log;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CharacterController = _unresolved_2.CharacterController;
    }, function (_unresolved_3) {
      JoystickController = _unresolved_3.JoystickController;
    }, function (_unresolved_4) {
      GameInfo = _unresolved_4.GameInfo;
    }, function (_unresolved_5) {
      SoundController = _unresolved_5.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6ca0/ki7dEGoDT97kAWXQz", "Cinematic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Cinematic", Cinematic = (_dec = ccclass('Cinematic'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(_crd && CharacterController === void 0 ? (_reportPossibleCrUseOfCharacterController({
        error: Error()
      }), CharacterController) : CharacterController), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec(_class = (_class2 = (_temp = class Cinematic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mainCamera", _descriptor, this);

          _initializerDefineProperty(this, "subCamera", _descriptor2, this);

          _initializerDefineProperty(this, "subCamera2", _descriptor3, this);

          _initializerDefineProperty(this, "subCamera3", _descriptor4, this);

          _initializerDefineProperty(this, "joyStickCtrl", _descriptor5, this);

          _initializerDefineProperty(this, "pointCtrl", _descriptor6, this);

          _initializerDefineProperty(this, "charCtrl", _descriptor7, this);

          _initializerDefineProperty(this, "tutorial3D", _descriptor8, this);

          _initializerDefineProperty(this, "tutorialUI1", _descriptor9, this);

          _initializerDefineProperty(this, "tutorialUI2", _descriptor10, this);

          _initializerDefineProperty(this, "tutorialUI3", _descriptor11, this);

          _initializerDefineProperty(this, "mainChar", _descriptor12, this);

          _initializerDefineProperty(this, "joyStickCtrl2", _descriptor13, this);

          _initializerDefineProperty(this, "pointCtrl2", _descriptor14, this);

          _initializerDefineProperty(this, "tutorialUI5", _descriptor15, this);

          _initializerDefineProperty(this, "tutorialUI6", _descriptor16, this);

          _initializerDefineProperty(this, "landscapeUI", _descriptor17, this);

          _initializerDefineProperty(this, "portraitUI", _descriptor18, this);

          _initializerDefineProperty(this, "cta", _descriptor19, this);

          _defineProperty(this, "isPlayCinema2", false);

          _defineProperty(this, "onCarButtonFlag", false);
        }

        // onLoad() {
        //     window.gameReady && window.gameReady();
        // }
        start() {
          // this.scheduleOnce(this.playIntro, 1);
          game.frameRate = 60;
          this.tutorial3D.active = true; // this.tutorialUI1.active = true;
          // this.tutorialUI3.active = true;
        }

        update(dt) {
          if (this.charCtrl.isCheckpoint == true && this.isPlayCinema2 == false) {
            this.isPlayCinema2 = true;
            this.pointCtrl.active = false;
            this.joyStickCtrl.getComponent(_crd && JoystickController === void 0 ? (_reportPossibleCrUseOfJoystickController({
              error: Error()
            }), JoystickController) : JoystickController).enabled = false;
            this.pointCtrl2.active = false;
            this.joyStickCtrl2.getComponent(_crd && JoystickController === void 0 ? (_reportPossibleCrUseOfJoystickController({
              error: Error()
            }), JoystickController) : JoystickController).enabled = false;
            this.playIntro();
          } // Check Device orientation
          // var frameSize = view.getVisibleSize();
          // if (frameSize.height > frameSize.width) {
          //     // portrait
          //     this.portraitUI.active = true;
          //     this.landscapeUI.active = false;
          // }
          // else if (frameSize.height < frameSize.width) {
          //     // landscape
          //     this.portraitUI.active = false;
          //     this.landscapeUI.active = true;
          // }


          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isOnMotobike && !this.onCarButtonFlag && this.onCarButton();

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 8 || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 9) {
            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_08.isHitBrakeBtn || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_08.isHitBrakeBtnFlag) {
              this.subCamera2.active = false;
              this.mainCamera.active = true;
            }
          } // if (this.cta.active == true) {
          //     this.scheduleOnce(this.endGameSchedule, 5);
          // }

        }

        onCarButton() {
          this.onCarButtonFlag = true;
          log("switch camera");
          this.tutorialUI2.active = false;
          this.tutorialUI5.active = false;
          this.subCamera2.active = true;
          this.scheduleOnce(this.playIntro2, 0.2);
        }

        playIntro() {
          log("play intro 1");
          var move = tween().to(1, {
            position: new Vec3(656.447, 28.438, -151.239)
          });
          this.tweenThen = tween(this.subCamera).delay(0.3).call(() => {
            this.tutorialUI2.active = true;
            this.tutorialUI5.active = true;
          }).start();
        }

        playIntro2() {
          log("play intro 2");
          var rotate = tween().to(1, {
            eulerAngles: new Vec3(7.1, 180, 0)
          }, {
            easing: 'smooth'
          });
          var move = tween().to(0.7, {
            position: new Vec3(670.813, 23.697, -102.513)
          }, {
            easing: 'smooth'
          });
          this.tweenThen2 = tween(this.subCamera2).then(move).delay(0.3).call(() => {
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).playSound("HeyYouSound");
            this.scheduleOnce(() => {
              if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentOption === 8 || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentOption === 9) {
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).GTA_PA_08.isRidingMoto = true;
              } // SoundController.Instance(SoundController).playSound("CarBrmmSound");

            }, 1);
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "subCamera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "subCamera2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "subCamera3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "joyStickCtrl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pointCtrl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "charCtrl", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tutorial3D", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mainChar", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "joyStickCtrl2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "pointCtrl2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI5", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI6", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "landscapeUI", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "portraitUI", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "cta", [_dec20], {
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
//# sourceMappingURL=Cinematic.js.map