System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, Vec3, Sprite, tween, v2, view, BoxCollider, sp, ToStore, Responsive, Constants, AudioManager, IronSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _temp, _crd, ccclass, property, Main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfToStore(extras) {
    _reporterNs.report("ToStore", "./ToStore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponsive(extras) {
    _reporterNs.report("Responsive", "./Responsive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "./Plugin/IronSource", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      v2 = _cc.v2;
      view = _cc.view;
      BoxCollider = _cc.BoxCollider;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ToStore = _unresolved_2.ToStore;
    }, function (_unresolved_3) {
      Responsive = _unresolved_3.Responsive;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      IronSource = _unresolved_6.IronSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db8b05axrBM5r4BSs1dGWfD", "Main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property(_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
        error: Error()
      }), IronSource) : IronSource), _dec4 = property(_crd && ToStore === void 0 ? (_reportPossibleCrUseOfToStore({
        error: Error()
      }), ToStore) : ToStore), _dec5 = property(_crd && Responsive === void 0 ? (_reportPossibleCrUseOfResponsive({
        error: Error()
      }), Responsive) : Responsive), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(sp.Skeleton), _dec(_class = (_class2 = (_temp = class Main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "IronSource", _descriptor2, this);

          _initializerDefineProperty(this, "ToStore", _descriptor3, this);

          _initializerDefineProperty(this, "Responsive", _descriptor4, this);

          _initializerDefineProperty(this, "Cube", _descriptor5, this);

          _initializerDefineProperty(this, "hint", _descriptor6, this);

          _initializerDefineProperty(this, "View_CTA", _descriptor7, this);

          _initializerDefineProperty(this, "Bar_Force", _descriptor8, this);

          _initializerDefineProperty(this, "Bar_Force_Interact", _descriptor9, this);

          _initializerDefineProperty(this, "Bar_Force_View", _descriptor10, this);

          _initializerDefineProperty(this, "Hand_01", _descriptor11, this);

          _initializerDefineProperty(this, "Hand_02", _descriptor12, this);

          _initializerDefineProperty(this, "Crosshair", _descriptor13, this);

          _initializerDefineProperty(this, "Ball_00", _descriptor14, this);

          _initializerDefineProperty(this, "Ball_09", _descriptor15, this);

          _initializerDefineProperty(this, "Head", _descriptor16, this);

          _initializerDefineProperty(this, "Store", _descriptor17, this);

          _initializerDefineProperty(this, "Enable", _descriptor18, this);

          _initializerDefineProperty(this, "PoolbackText", _descriptor19, this);

          _initializerDefineProperty(this, "Combo", _descriptor20, this);

          _defineProperty(this, "touchStartPos", v2(0, 0));

          _defineProperty(this, "touchStartPosBarForce", v2(0, 0));

          _defineProperty(this, "forceSet", 0);

          _defineProperty(this, "flagStatusBall_00", false);

          _defineProperty(this, "flagStatusBall_09", false);

          _defineProperty(this, "previousPosition_01", v2(0, 0));

          _defineProperty(this, "previousPosition_02", v2(0, 0));

          _defineProperty(this, "posBall_00", v2(0, 0));

          _defineProperty(this, "posBall_09", v2(0, 0));

          _defineProperty(this, "flagStart", false);

          _defineProperty(this, "flagShowCube", false);

          _defineProperty(this, "loadScene", false);

          _defineProperty(this, "isActiveCTA", false);
        }

        onLoad() {
          // ironsource
          // Constants.isLose && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isLose = false;
          this.ApplyEvent();
          this.posBall_00 = this.Ball_00.getPosition().clone();
          this.posBall_09 = this.Ball_09.getPosition().clone();
          this.previousPosition_01 = this.posBall_00;
          this.previousPosition_02 = this.posBall_09;
        }

        start() {
          // this.AudioManager.playSound(Constants.SoundTrack.bgSound)
          this.Cube.getComponent(BoxCollider).enabled = true;
        }

        ApplyEvent() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.AngleCube, this);
          this.node.on(Node.EventType.TOUCH_START, this.TouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.TouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
          this.Bar_Force_Interact.on(Node.EventType.TOUCH_START, this.SetBarForceDelta, this);
          this.Bar_Force_Interact.on(Node.EventType.TOUCH_MOVE, this.SetBarForce, this);
          this.Bar_Force_Interact.on(Node.EventType.TOUCH_END, this.SetBarForceEnd, this);
          this.Bar_Force_Interact.on(Node.EventType.TOUCH_CANCEL, this.SetBarForceEnd, this);
        }

        TouchStart(event) {
          // mtg & applovin
          this.isActiveCTA && this.ToStore.installHandle();
          this.touchStartPos = event.getLocation();
          this.IronSource.handleIronSourcePlaySound();
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.AngleSound);
          this.PoolbackText.active = false;
        }

        TouchEnd() {
          this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.AngleSound);
        }

        TouchStartToStore() {
          this.ToStore.installHandle();
        }

        hasNodeStopped(dt) {
          if (this.flagStart) {
            var velocity = new Vec3();
            this.Ball_00.getComponent("Ball").getComponent(RigidBody).getLinearVelocity(velocity);
            var velocityMagnitudeSquared = velocity.lengthSqr();
            var stopThresholdSquared = 0.01 * 0.01;
            var isStopping = velocityMagnitudeSquared < stopThresholdSquared;
            isStopping && this.activeCTA(); // isStopping && !Constants.isPlaying && !Constants.isLose && this.FnEnd();
          }

          ;
        }

        FnEnd() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMainBallStoped = true;
          this.Cube.active = true;
          this.hint.active = true;
          this.Bar_Force_Interact.setPosition(0, 0, 0);
          this.Bar_Force_View.getComponent(Sprite).fillRange = 0;
          this.Cube.getComponent(BoxCollider).enabled = false;
        }

        SetBarForceDelta(event) {
          this.isActiveCTA && this.ToStore.installHandle();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isPlaying = true;
          this.Cube.getComponent(BoxCollider).enabled = true;
          this.touchStartPosBarForce = event.getLocation();
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.AngleSound);
        }

        PercentFn() {
          var percent = -this.forceSet / 400 * 100;
          var forceReturn = 0.1 + percent / 100 * (0.05 - 0.1);
          return forceReturn;
        }

        SetBarForceEnd() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            return;
          }

          this.scheduleOnce(() => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isPlaying = false;
          }, 1);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).playedCount += 1; // Constants.shootingTurn -= 1;

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isPlayFirstTime = true;
          this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.AngleSound);
          var percent = this.PercentFn();
          this.AddForce(percent);
          this.forceSet = 0;
          this.touchStartPosBarForce = v2(0, 0);
        }

        SetBarForce(event) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            return;
          }

          this.Hand_02.active = false;
          var touchPos = event.getLocation();
          var deltaY = touchPos.y - this.touchStartPosBarForce.y;
          var posY = this.Bar_Force_Interact.getPosition().y + deltaY;

          if (posY < -400 || posY > 0) {
            return;
          }

          this.Bar_Force_Interact.setPosition(0, posY, 0);
          this.forceSet = posY;
          var fillrange = posY / 440;
          this.Bar_Force_View.getComponent(Sprite).fillRange = fillrange;
          this.touchStartPosBarForce = touchPos;
        }

        AngleCube(event) {
          this.Enable.active = false;
          this.Hand_01.active = false;
          this.Crosshair.active = false;
          this.Hand_02.active = true;
          var touchPos = event.getLocation();
          var deltaX = touchPos.x - this.touchStartPos.x;
          this.Cube.parent.setRotationFromEuler(0, this.Cube.parent.eulerAngles.y - deltaX, 0);
          this.touchStartPos = touchPos;
        }

        AddForce(percent) {
          this.hint.active = false;
          tween(this.Cube).to(percent, {
            position: new Vec3(0, 0, this.caculateForce(percent))
          }).call(() => {
            this.scheduleOnce(() => {
              this.Cube.setPosition(0, 0, 1.3);
              this.flagShowCube = true;
            }, 0.5);
            this.Cube.active = false;
            this.flagStart = true;
          }).start();
        }

        caculateForce(number) {
          var result;
          result = 1.2;
          return result;
        }

        showCombo() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).scoreCount > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).comboCount) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).comboCount += 1;

            switch ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).comboCount) {
              case 1:
                this.Combo.setSkin("Combo 1");
                this.Combo.setAnimation(0, "action", false);
                break;

              case 2:
                this.Combo.setSkin("Combo 2");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound1);
                break;

              case 3:
                this.Combo.setSkin("Combo 3");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound2);
                break;

              case 4:
                this.Combo.setSkin("Combo 4");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound1);
                break;

              case 5:
                this.Combo.setSkin("Combo 5");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound2);
                break;

              case 6:
                this.Combo.setSkin("Combo 6");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound1);
                break;

              case 7:
                this.Combo.setSkin("Combo 7");
                this.Combo.setAnimation(0, "action", false);
                this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SoundTrack.woaSound2);
                break;

              default:
                break;
            }
          }
        }

        activeCTA() {
          this.isActiveCTA = true;
          this.node.off(Node.EventType.TOUCH_MOVE);
          this.node.off(Node.EventType.TOUCH_START);
          this.node.off(Node.EventType.TOUCH_END);
          this.node.off(Node.EventType.TOUCH_CANCEL);
          this.Bar_Force_Interact.off(Node.EventType.TOUCH_START);
          this.Bar_Force_Interact.off(Node.EventType.TOUCH_MOVE);
          this.Bar_Force_Interact.off(Node.EventType.TOUCH_END);
          this.Bar_Force_Interact.off(Node.EventType.TOUCH_CANCEL);
          var vertical = this.View_CTA.getChildByName("_ver");
          var horizontal = this.View_CTA.getChildByName("_hor");
          var Ver_BtnTryAgain = vertical.getChildByName("btn_tryagain");
          var Ver_BtnContinue = vertical.getChildByName("btn_continue");
          Ver_BtnTryAgain.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
          Ver_BtnContinue.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
          var Hor_BtnTryAgain = horizontal.getChildByName("Node").getChildByName("btn_tryagain");
          var Hor_BtnContinue = horizontal.getChildByName("Node").getChildByName("btn_continue");
          Hor_BtnTryAgain.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
          Hor_BtnContinue.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this); // mtg & applovin
          // let Ver_Overlay = vertical.getChildByName("SpriteSplash");
          // let Hor_Overlay = horizontal.getChildByName("SpriteSplash-001");
          // Ver_Overlay.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
          // Hor_Overlay.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isWin) {
            Ver_BtnTryAgain.active = false;
            Hor_BtnTryAgain.active = false;
            Ver_BtnContinue.active = true;
            Hor_BtnContinue.active = true;
          } else {
            Ver_BtnTryAgain.active = true;
            Hor_BtnTryAgain.active = true;
            Ver_BtnContinue.active = false;
            Hor_BtnContinue.active = false;
          }

          this.scheduleOnce(() => {
            this.View_CTA.active = true;
          }, 1);
        }

        update(dt) {
          var screenSize = view.getVisibleSize();
          this.Bar_Force.setPosition(screenSize.x / 2.4, this.Bar_Force.getPosition().y, 0);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isLose && !this.isActiveCTA && this.activeCTA();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isWin && !this.isActiveCTA && this.activeCTA();
          !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame && this.showCombo();
          !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame && this.hasNodeStopped(dt); // ironsource

          this.IronSource.handleMuteSoundIronSource();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "IronSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ToStore", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Responsive", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Cube", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "View_CTA", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Bar_Force", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Bar_Force_Interact", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Bar_Force_View", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Hand_01", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Hand_02", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Crosshair", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Ball_00", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Ball_09", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Head", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Store", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Enable", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "PoolbackText", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Combo", [_dec21], {
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
//# sourceMappingURL=Main.js.map