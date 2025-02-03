System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BoxCollider2D, Component, Node, RigidBody2D, Vec2, Contact2DType, CircleCollider2D, Animation, Label, sp, TouchAreaController, Constants, AudioManager, Enemy, EnemiesController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTouchAreaController(extras) {
    _reporterNs.report("TouchAreaController", "./TouchAreaController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../TypeScript/Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemiesController(extras) {
    _reporterNs.report("EnemiesController", "./EnemiesController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Contact2DType = _cc.Contact2DType;
      CircleCollider2D = _cc.CircleCollider2D;
      Animation = _cc.Animation;
      Label = _cc.Label;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      TouchAreaController = _unresolved_2.TouchAreaController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      Enemy = _unresolved_5.default;
    }, function (_unresolved_6) {
      EnemiesController = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b7e3VUM7FBtZ2DeuoauA0C", "PlayerController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property(_crd && EnemiesController === void 0 ? (_reportPossibleCrUseOfEnemiesController({
        error: Error()
      }), EnemiesController) : EnemiesController), _dec3 = property(_crd && TouchAreaController === void 0 ? (_reportPossibleCrUseOfTouchAreaController({
        error: Error()
      }), TouchAreaController) : TouchAreaController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec5 = property(RigidBody2D), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "EnemiesController", _descriptor, this);

          _initializerDefineProperty(this, "TouchAreaController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor4, this);

          _initializerDefineProperty(this, "Player_Mouth", _descriptor5, this);

          _initializerDefineProperty(this, "Player_fakeMount", _descriptor6, this);

          _defineProperty(this, "PlayerBody", null);

          _defineProperty(this, "Player_Level", null);

          _defineProperty(this, "Player_SpineDie", null);

          _defineProperty(this, "Player_CircleCollider", null);

          _defineProperty(this, "Player_MouthRigidBody", null);

          _defineProperty(this, "Player_MouthCollider", null);

          _defineProperty(this, "Player_fakeMountCollide", null);

          _defineProperty(this, "isLive", true);

          _defineProperty(this, "isMove", false);

          _defineProperty(this, "isLevelUp", false);

          _defineProperty(this, "targetPosition", null);

          _defineProperty(this, "speed", 150);

          _defineProperty(this, "distance", 40);
        }

        start() {
          this.PlayerBody = this.node.getChildByName("Body");
          this.Player_SpineDie = this.node.getChildByName("Spine_Die").getComponent(sp.Skeleton);
          this.Player_CircleCollider = this.getComponent(CircleCollider2D);
          this.Player_fakeMountCollide = this.Player_fakeMount.getComponent(BoxCollider2D);
          this.Player_Level = this.node.getChildByName("Body").getChildByName("Level").getComponent(Label);
          this.Player_fakeMountCollide.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          this.Player_CircleCollider.on(Contact2DType.BEGIN_CONTACT, this.onCircleBeginContact, this);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 1 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching && !otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy).isAte) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState) {
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.eatSound);
            }

            this.handleEatFishLv1(otherCollider);
          }
        }

        onCircleBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 2) {
            if (this.isLive && !this.isLevelUp) {
              this.isLive = false;
              this.handleEatAnimOfEnemy(otherCollider);
              this.die();
            }
          }
        }

        handleEatAnimOfEnemy(otherCollider) {
          var spine = otherCollider.node.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
          spine.setAnimation(0, "eat", false);
          spine.timeScale = 2;
          this.scheduleOnce(() => {
            spine.setAnimation(0, "idle", true);
          }, 0.5);
        }

        die() {
          if (this.isLive && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isReplay) {
            return;
          }

          this.stop();
          this.TouchAreaController.stickPointUIOpacity.opacity = 0;
          this.scheduleOnce(() => {
            this.PlayerBody.active = false;
            this.Player_SpineDie.node.active = true;
          }, 0.01);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isReplay = true;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.dieSound);
          }

          this.scheduleOnce(() => {
            this.getComponent(Animation).play("Player_DieAnim");
          }, 1);
        }

        handleEatFishLv1(other) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).score += 5;

          if (other.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy).isLive) {
            other.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
              error: Error()
            }), Enemy) : Enemy).die();
          }
        }

        move() {
          if (this.isMove && this.isLive) {
            this.targetPosition = this.TouchAreaController.positionTouch;
            var direction = this.targetPosition.subtract(this.node.position).normalize();
            var velocity;
            this.isLevelUp ? velocity = direction.multiplyScalar(this.speed) : velocity = direction.multiplyScalar(2.5);
            this.rigidBody.linearVelocity = velocity;
          }
        }

        stop() {
          this.rigidBody.linearVelocity = new Vec2(0, 0);
        }

        handleOffsetBoxCollide() {
          this.Player_fakeMount.setPosition(this.Player_Mouth.getPosition());
        }

        update(dt) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching) {
            this.Player_Level.string = String((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).score);
            this.TouchAreaController.HandleAnglePlayer(this.PlayerBody);
          }

          this.handleOffsetBoxCollide();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "EnemiesController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TouchAreaController", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Player_Mouth", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Player_fakeMount", [_dec7], {
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
//# sourceMappingURL=PlayerController.js.map