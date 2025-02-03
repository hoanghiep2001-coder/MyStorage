System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Vec2, Camera, Animation, UIOpacity, sp, PlayerController, Constants, GameController, AudioManager, IronSource, SkiingController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, TouchAreaController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../Data/IronSource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkiingController(extras) {
    _reporterNs.report("SkiingController", "./SkiingController", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      Camera = _cc.Camera;
      Animation = _cc.Animation;
      UIOpacity = _cc.UIOpacity;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      IronSource = _unresolved_6.IronSource;
    }, function (_unresolved_7) {
      SkiingController = _unresolved_7.SkiingController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff172xm2OREha6aYbXDC0YP", "TouchAreaController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchAreaController", TouchAreaController = (_dec = ccclass('TouchAreaController'), _dec2 = property(_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
        error: Error()
      }), IronSource) : IronSource), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec5 = property(_crd && SkiingController === void 0 ? (_reportPossibleCrUseOfSkiingController({
        error: Error()
      }), SkiingController) : SkiingController), _dec6 = property(Camera), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = (_temp = class TouchAreaController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "IronSource", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "GameController", _descriptor3, this);

          _initializerDefineProperty(this, "SkiingController", _descriptor4, this);

          _initializerDefineProperty(this, "camera", _descriptor5, this);

          _initializerDefineProperty(this, "Skiiing_hideMask", _descriptor6, this);

          _initializerDefineProperty(this, "Skiing_hand", _descriptor7, this);

          _initializerDefineProperty(this, "Skiing_hand_2", _descriptor8, this);

          _initializerDefineProperty(this, "Skiing_overlay", _descriptor9, this);

          _initializerDefineProperty(this, "player", _descriptor10, this);

          _initializerDefineProperty(this, "fakeHideMask", _descriptor11, this);

          _initializerDefineProperty(this, "hideMask", _descriptor12, this);

          _initializerDefineProperty(this, "tutorial", _descriptor13, this);

          _initializerDefineProperty(this, "stickPoint", _descriptor14, this);

          _defineProperty(this, "playerController", null);

          _defineProperty(this, "stickPointUIOpacity", null);

          _defineProperty(this, "tutorialOpacity", null);

          _defineProperty(this, "levelPlayer", null);

          _defineProperty(this, "playerSpine", null);

          _defineProperty(this, "positionTouch", new Vec3(0, 0, 0));

          _defineProperty(this, "localTouch", new Vec3(0, 0, 0));

          _defineProperty(this, "locationPos", new Vec2(0, 0));

          _defineProperty(this, "angleCount", null);
        }

        start() {
          // toStore
          // Constants.toStore = true;
          this.init();
          this.registerEvent();
        }

        init() {
          this.levelPlayer = this.player.getChildByName("Body").getChildByName("Level");
          this.playerSpine = this.player.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
          this.playerController = this.player.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
          this.stickPointUIOpacity = this.stickPoint.getComponent(UIOpacity);
          this.tutorialOpacity = this.tutorial.getComponent(UIOpacity);
        }

        registerEvent() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).toStore) {
            this.hideMask.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            return;
          }

          ;
          this.SkiingController.Button_Left.on(Node.EventType.TOUCH_START, this.Skiing_BtnLeftTouchStart, this);
          this.SkiingController.Button_Up.on(Node.EventType.TOUCH_START, this.Skiing_BtnUpTouchStart, this); // ironsource

          this.Skiiing_hideMask.on(Node.EventType.TOUCH_START, this.IronSource.handleIronSourcePlaySound, this);
          this.hideMask.on(Node.EventType.TOUCH_START, this.onHideMaskTouchStart, this);
          this.hideMask.on(Node.EventType.TOUCH_MOVE, this.onHideMaskTouchMove, this);
          this.hideMask.on(Node.EventType.TOUCH_END, this.onHideMaskTouchEnd, this);
          this.hideMask.on(Node.EventType.TOUCH_CANCEL, this.onHideMaskTouchEnd, this);
        }

        offEvent() {
          this.hideMask.off(Node.EventType.TOUCH_START);
          this.hideMask.off(Node.EventType.TOUCH_MOVE);
          this.hideMask.off(Node.EventType.TOUCH_END);
          this.hideMask.off(Node.EventType.TOUCH_CANCEL);
        }

        Skiing_BtnLeftTouchStart() {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClickBtnLeft) return;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnLeft = true;
          this.Skiing_hand.active = false;
          this.IronSource.handleIronSourcePlaySound();
        }

        Skiing_BtnUpTouchStart() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isJumping || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) return; // Kiểm tra xem đã chạm đất và có thể nhấn nhảy

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnLeft = true;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnJump = true;
          this.IronSource.handleIronSourcePlaySound();
          this.Skiing_hand.active = false;
          this.Skiing_overlay.active = false;
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Skiing_JumpSound);
          this.scheduleOnce(() => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isClickBtnJump = false;
          }, 0.5);
        }

        onHideMaskTouchStart(event) {
          if (!this.playerController.isLive || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCompleteVideo) {
            return;
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).flagReplay) {
            this.GameController.installHandle();
            return;
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isPlayGame = true;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;
          this.playerController.isMove = true;
          this.stickPointUIOpacity.opacity = 180;
          this.tutorialOpacity.opacity = 0;
          this.tutorial.getComponent(Animation).stop();
          this.playerSpine.setAnimation(0, "eat", true);
          this.playerSpine.timeScale = 1; // this.IronSource.handleIronSourcePlaySound();
        }

        onHideMaskTouchMove(event) {
          if (!this.playerController.isLive || (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).forceReplay || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCompleteVideo) {
            return;
          }

          var touchPos = event.getUILocation();
          this.localTouch = this.convertToLocalLocation(touchPos);
          this.positionTouch = this.localTouch;
          this.positionTouch.x += this.camera.node.getPosition().x;
          this.positionTouch.y += this.camera.node.getPosition().y;
          this.handleStickPos();
          this.playerController.move();
        }

        onHideMaskTouchEnd() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = false;
          this.playerController.isMove = false;
          this.playerController.stop();
          this.stickPointUIOpacity.opacity = 0;
          this.playerSpine.setAnimation(0, "idle", true);
          this.playerSpine.timeScale = 1.5;
          this.handleShowTutorialAgain();
        } // clear fix bug from 14/12/2023
        // critical bug: Not get the exactly pos of stickPoint in 3D env.
        // --- update 19/12/2023: Fixed
        // --- Dev: Hiep


        handleStickPos() {
          var newStickPos = new Vec3(this.positionTouch.x -= this.camera.node.getPosition().x, this.positionTouch.y -= this.camera.node.getPosition().y, 0); // count angle of player

          var angleInRadian = Math.atan2(newStickPos.y, newStickPos.x);
          this.angleCount = angleInRadian * (180 / Math.PI);
          this.stickPoint.setPosition(newStickPos); // --------------------
        }

        handleShowTutorialAgain() {
          this.scheduleOnce(() => {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isTouching) {
              return;
            }

            ;
            this.tutorial.getComponent(Animation).play("Tutorial_ShowAnim");
          }, 3);
        }

        HandleAnglePlayer(player) {
          player.angle = this.angleCount;

          if (this.angleCount >= 90 || this.angleCount <= -90) {
            player.setScale(new Vec3(-1, -1, 1.2));
            this.levelPlayer.setScale(new Vec3(0.5, 0.5, 0.5));
          } else {
            player.setScale(new Vec3(-1, 1, 1));
            this.levelPlayer.setScale(new Vec3(-0.5, 0.5, 0.5));
          }
        }

        convertToLocalLocation(value) {
          var localX = value.x - 240;
          var localY = value.y - 160;
          var result = new Vec3(localX, localY, 0);
          return result;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "IronSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SkiingController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Skiiing_hideMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_hand", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_hand_2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_overlay", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "fakeHideMask", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tutorial", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "stickPoint", [_dec15], {
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
//# sourceMappingURL=TouchAreaController.js.map