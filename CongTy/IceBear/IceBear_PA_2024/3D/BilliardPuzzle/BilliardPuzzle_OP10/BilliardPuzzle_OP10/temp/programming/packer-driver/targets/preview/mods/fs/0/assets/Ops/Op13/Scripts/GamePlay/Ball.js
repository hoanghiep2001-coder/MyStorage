System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, SphereCollider, tween, Vec3, EventManager, Global, GameManager, SoundManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Utility3D/Observer/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Utility3D/Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Utility3D/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Utility3D/SoundManager", _context.meta, extras);
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
      SphereCollider = _cc.SphereCollider;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Global = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91e2crIx89Dc5Vpa7XlTF3v", "Ball", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property(RigidBody), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Ball extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rb", _descriptor, this);

          _initializerDefineProperty(this, "shadow", _descriptor2, this);

          _defineProperty(this, "collider", null);

          _defineProperty(this, "ballUI", null);

          _defineProperty(this, "indexBall", null);

          _defineProperty(this, "prePos", Vec3.ZERO);

          _defineProperty(this, "boolOnHole", false);
        }

        onEnable() {
          this.prePos = this.node.getPosition();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).ActiveRb, this.ActiveRb, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).ResetGame, this.ResetBall, this);
          this.rb.useCCD = true;
          this.collider = this.node.getComponent(SphereCollider);
          this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
          this.collider.on('onCollisionEnter', this.onCollisionEnter, this);
        }

        start() {}

        Init(index, ballUI) {
          this.indexBall = index;
          this.ballUI = ballUI;
        }

        ActiveRb() {
          this.rb.type = RigidBody.Type.DYNAMIC;
          this.rb.useCCD = true;
          this.rb.linearFactor = new Vec3(1, 1, 1);
          this.rb.angularFactor = new Vec3(1, 1, 1);
          this.rb.angularDamping = 0.7;
          this.rb.linearDamping = 0.2;
          this.rb.useGravity = true;
        }

        onCollisionEnter(event) {
          var otherCollider = event.otherCollider;

          if (event.type === 'onCollisionEnter') {
            //this.rb.clearForces();
            if (otherCollider.getGroup() === 2) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).Instance(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).PlaySound("HitBall"); // log("clear force");
              // this.rb.clearForces();
            }

            if (otherCollider.getGroup() === 8) {//   SoundManager.Instance(SoundManager).PlaySound("HitEdge");
              //   log("clear force");
              //this.rb.clearForces();
            } //  log("clear force");

          }
        }

        onTriggerEnter(event) {
          var otherTrigger = event.otherCollider;

          if (event.type === 'onTriggerEnter') {
            //    log(this.node.name + " trigger " + otherTrigger.node.name);
            if (otherTrigger.getGroup() === 8) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).Instance(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).PlaySound("HitPocket");
              this.rb.enabled = false;
              this.RollIOnHole(otherTrigger.node);
            }
          }
        }

        RollIOnHole(hole) {
          if (this.boolOnHole) return;
          this.boolOnHole = true;
          this.rb.clearVelocity();
          tween(this.node).to(0.08, {
            position: hole.getWorldPosition()
          }).call(() => {
            this.collider.enabled = false;

            if (this.ballUI) {
              this.ballUI.active = false;
            }

            this.node.active = false; //   

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.emit((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).SpawnPotedBall, this.indexBall);
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ActiveTextPraise();
          }).start();
        }

        ResetBall() {
          if (this.boolOnHole) return;
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).firstShoot) return;
          this.node.setWorldPosition(this.prePos);
          this.node.setRotationFromEuler(90, 90, 0);
          this.rb.type = RigidBody.Type.KINEMATIC;
          this.rb.useGravity = false;
          this.rb.enabled = true;
          this.collider.enabled = true;
        }

        update(dt) {
          this.CalculateShadow();
        }

        CalculateShadow() {
          this.shadow.setWorldRotationFromEuler(-90, 0, 0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shadow", [_dec3], {
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
//# sourceMappingURL=Ball.js.map