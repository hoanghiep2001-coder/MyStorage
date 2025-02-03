System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, Quat, Vec3, SkeletalAnimation, Collider, Constants, Game, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, BossAction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
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
      tween = _cc.tween;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      Game = _unresolved_3.Game;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3eadinT6dHdY+UphBQAWhj", "BossAction", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossAction", BossAction = (_dec = ccclass("BossAction"), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property(_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
        error: Error()
      }), Game) : Game), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class BossAction extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "Game", _descriptor2, this);

          _initializerDefineProperty(this, "fakeCat", _descriptor3, this);

          _initializerDefineProperty(this, "vision", _descriptor4, this);

          _defineProperty(this, "tweenState", null);

          _defineProperty(this, "isElectricFlag", false);

          _defineProperty(this, "isStopFlag", false);

          _defineProperty(this, "rigidbody", null);

          _defineProperty(this, "collide", null);
        }

        start() {
          this.node.name === "Boss" && this.runTweenOfBossFirstScene();
          this.node.name === "Boss_2" && this.runTweenOfBossSecondScene();
          this.collide = this.getComponent(Collider);
          this.handleCollide();
        }

        runTweenOfBossFirstScene() {
          this.tweenState = tween(this.node).by(3, {
            position: new Vec3(6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, -90, 0)
          }).by(3, {
            position: new Vec3(-6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 90, 0)
          }).union().repeatForever().start();
        }

        runTweenOfBossSecondScene() {
          this.tweenState = tween(this.node).by(3, {
            position: new Vec3(0, 0, 6)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 180, 0)
          }).by(3, {
            position: new Vec3(0, 0, -6)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 0, 0)
          }).union().repeatForever().start();
        }

        handleCollide() {
          if (this.collide) {
            this.collide.on("onCollisionEnter", e => {
              if (e.otherCollider.node.name === "Electro_vfx_mesh" && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).laser && !this.isElectricFlag) {
                this.die();
              }
            });
          }
        }

        die() {
          if (this.isElectricFlag) {
            return;
          }

          this.isElectricFlag = true;
          this.vision.active = false;
          this.tweenState.stop();
          this.getComponent(SkeletalAnimation).play("CE_police_electrizied");
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.electric2Sound);
        }

        isCatCatched() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame = true;
          this.isStopFlag = true;
          this.tweenState.stop();
          this.getComponent(SkeletalAnimation).play("CE_police_Catch");
          this.scheduleOnce(() => {
            this.fakeCat.active = true;
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.catAngrySound);
          }, 0.5);
          this.scheduleOnce(() => {
            this.Game.EndGame(false);
          }, 2.5);
        }

        update(dt) {
          !this.isStopFlag && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCatched && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCatLive && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).bossCatchedName === this.node.name && this.isCatCatched();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Game", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fakeCat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "vision", [_dec5], {
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
//# sourceMappingURL=BossAction.js.map