System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EnemiesController, Constants, _decorator, Component, Node, Animation, RigidBody2D, Vec2, Vec3, math, sp, tween, toDegree, CircleCollider2D, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnemiesController(extras) {
    _reporterNs.report("EnemiesController", "../Controller/EnemiesController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      math = _cc.math;
      sp = _cc.sp;
      tween = _cc.tween;
      toDegree = _cc.toDegree;
      CircleCollider2D = _cc.CircleCollider2D;
    }, function (_unresolved_2) {
      EnemiesController = _unresolved_2.default;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a264d90GYxAmrq4Wl0oQF/J", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Enemy = (_dec = property(RigidBody2D), _dec2 = property(Node), ccclass(_class = (_class2 = (_temp = class Enemy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "body", _descriptor, this);

          _initializerDefineProperty(this, "Level", _descriptor2, this);

          _defineProperty(this, "EnemiesController", null);

          _defineProperty(this, "GameController", null);

          _defineProperty(this, "playerController", null);

          _defineProperty(this, "touchArea", null);

          _defineProperty(this, "isAte", false);

          _defineProperty(this, "isScaleDownLv2", false);

          _defineProperty(this, "isLive", false);

          _defineProperty(this, "isIdle", false);

          _defineProperty(this, "randomChangeSpeed", 3);

          _defineProperty(this, "maxSpeed", 1);

          _defineProperty(this, "randomVecX", 0);

          _defineProperty(this, "randomVecY", 0);

          _defineProperty(this, "originalPosition", void 0);

          _defineProperty(this, "moveAmount", 3);

          _defineProperty(this, "moveDirection", 1);

          _defineProperty(this, "moveTimer", 0);

          _defineProperty(this, "moveInterval", 0.5);
        }

        start() {
          this.originalPosition = this.node.getPosition();
          this.EnemiesController = this.node.parent.getComponent(_crd && EnemiesController === void 0 ? (_reportPossibleCrUseOfEnemiesController({
            error: Error()
          }), EnemiesController) : EnemiesController);
          this.GameController = this.node.parent.parent.parent.parent.getChildByName("GameController").getComponent("GameController");
          this.playerController = this.node.parent.parent.getChildByName("Player");
          this.touchArea = this.node.parent.parent.parent.parent.getChildByName("TouchArea");
          this.isLive = true;
          var spine = this.node.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
          this.callBack(spine);
          this.schedule(() => {
            this.callBack(spine);
          }, 5);
        }

        callBack(spine) {
          spine.animation === "animation" || spine.animation === "idle" ? this.isIdle = true : this.isIdle = false;
          var random = Math.round(Math.random() * 5) + 1;
          this.isIdle ? spine.timeScale = random : console.log("");
        }

        die() {
          this.body.linearVelocity = new math.Vec2(0, 0);
          this.getComponent(CircleCollider2D).radius = 0;
          this.node.getComponent(Animation).play("Enemy_DieAnim");
          this.isAte = true;
          tween(this.node).to(0.02, {
            scale: new Vec3(0.6, 0.6, 0.6)
          }).start();
          this.scheduleOnce(() => {
            this.isAte = false;
            this.node.getChildByName("Body").active = false;
          }, 0.2);
          this.scheduleOnce(() => {
            this.isLive = false;
            this.node.destroy();
          }, 1);
        }

        handleFishUI() {
          this.handleFishAngle();
          this.handleFishMovement();
        }

        handleFishAngle() {
          var angleFish = toDegree(Math.atan((this.playerController.getPosition().y - this.node.getPosition().y) / (this.playerController.getPosition().x - this.node.getPosition().x)));
          this.node.getChildByName("Body").angle = angleFish;

          if (this.node.getPosition().x - this.playerController.getPosition().x > 0) {
            this.node.getChildByName("Body").setScale(new math.Vec3(1, 1, 0));
          } else {
            this.node.getChildByName("Body").setScale(new math.Vec3(-1, 1, 0));
          }
        }

        handleFishMovement() {
          if (this.isAte) {
            if (this.getComponent(RigidBody2D)) {
              this.body.destroy();
            }

            var lerpRatio = 0.012;
            var playerPos = this.playerController.getComponent("PlayerController").Player_Mouth.getPosition();
            var currentCameraPos = this.node.position;
            var newPosition = new Vec3();
            Vec3.lerp(newPosition, currentCameraPos, new Vec3(playerPos.x, playerPos.y, 0), lerpRatio);
            this.node.setPosition(newPosition);
            return;
          }

          if (!this.playerController.getComponent("PlayerController").isLive) {
            this.body.linearVelocity = new Vec2(0, 0);
            return;
          }

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isPlayGame) {
            return;
          }

          if (this.node.name.startsWith("Enemy3_")) {
            return;
          }

          if (this.node.name === "Enemy2_1" || this.node.name === "Enemy2_28" || this.node.name === "Enemy2_13" || this.node.name === "Enemy2_10" || this.node.name === "Enemy2_12" || this.node.name === "Enemy2_20" || this.node.name === "Enemy2_21") {
            var _direction = this.playerController.getPosition().subtract(this.node.getPosition()).normalize();

            var _velocity = _direction.multiplyScalar(2.3);

            var _clearFix = new math.Vec2(_velocity.x, _velocity.y);

            this.body.linearVelocity = _clearFix;
            return;
          }

          if (this.node.name.startsWith("Enemy2_")) {
            if (!this.playerController.getComponent("PlayerController").isLevelUp) {
              this.body.linearVelocity = new Vec2(0, 0);
              return;
            }
          }

          if (this.node.name.startsWith("Enemy1_") && this.isScaleDownLv2) {
            this.body.linearVelocity = new Vec2(0, 0);
            return;
          }

          var direction = this.playerController.getPosition().subtract(this.node.getPosition()).normalize();
          var velocity = direction.multiplyScalar(0.5);
          var clearFix = new math.Vec2(velocity.x, velocity.y);
          this.body.linearVelocity = clearFix;
        }

        update(dt) {
          this.handleFishUI();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Level", [_dec2], {
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
//# sourceMappingURL=Enemy.js.map