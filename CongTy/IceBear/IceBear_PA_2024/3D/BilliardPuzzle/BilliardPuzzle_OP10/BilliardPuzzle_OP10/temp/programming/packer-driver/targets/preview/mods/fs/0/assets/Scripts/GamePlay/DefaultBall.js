System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, log, SphereCollider, Vec3, Ball, EventManager, Global, SoundManager, _dec, _class, _temp, _crd, ccclass, property, DefaultBall;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Utility3D/Observer/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Utility3D/Global", _context.meta, extras);
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
      log = _cc.log;
      SphereCollider = _cc.SphereCollider;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Ball = _unresolved_2.Ball;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      Global = _unresolved_4.default;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e898On75lI8IQJbp/0VRL5", "DefaultBall", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DefaultBall", DefaultBall = (_dec = ccclass('DefaultBall'), _dec(_class = (_temp = class DefaultBall extends (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
        error: Error()
      }), Ball) : Ball) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "prePos", Vec3.ZERO);

          _defineProperty(this, "lastPos", Vec3.ZERO);
        }

        // rb: RigidBody = null;
        onEnable() {
          this.prePos = this.node.getPosition(); // log(this.prePos);

          this.lastPos = this.prePos;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).ActiveRb, this.ActiveRb, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).ResetGame, this.ResetThisBall, this);
          this.prePos = this.node.getPosition();
          this.rb.useCCD = true;
          this.collider = this.node.getComponent(SphereCollider);
          this.collider.on('onCollisionEnter', this.onCollisionEnter, this);
          this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
        }

        onTriggerEnter(event) {
          var otherTrigger = event.otherCollider;

          if (event.type === 'onTriggerEnter') {
            if (otherTrigger.getGroup() === 32) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).instance.emit((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                error: Error()
              }), Global) : Global).ActiveRb);
              otherTrigger.node.active = false;
            }

            if (otherTrigger.getGroup() === 8) {
              (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                error: Error()
              }), Global) : Global).isDefaultBallFall = true;
              this.node.active = false;
              this.collider.enabled = false;
              this.scheduleOnce(() => {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).instance.emit((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                  error: Error()
                }), Global) : Global).ResetGame);
              }, 0.25);
            }
          }
        }

        checkMoving() {
          var linearVelocity = new Vec3();
          this.rb.getLinearVelocity(linearVelocity); // if (this.lastPos.clone().subtract(this.node.position.clone()).normalize().length() > 0) {
          //     this.lastPos = this.node.getPosition();
          //     return true;
          // }
          // return false;

          if (linearVelocity.length() > 0) {
            log("moving");
            return true;
          }

          return false;
        }

        update(dt) {
          this.CalculateShadow();
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
              }), SoundManager) : SoundManager).PlaySound("HitBall");
              this.rb.clearForces();
            }

            if (otherCollider.getGroup() === 8) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).Instance(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).PlaySound("HitEdge");
            }
          }
        }

        ResetThisBall() {
          this.node.setPosition(this.prePos);
          this.node.active = true;
          this.collider.enabled = true;
        }

        ResetBall() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DefaultBall.js.map