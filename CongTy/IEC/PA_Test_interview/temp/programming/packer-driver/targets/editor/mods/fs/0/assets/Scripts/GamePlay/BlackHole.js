System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider, Component, easing, log, RigidBody, tween, Vec3, GameInfo, _dec, _class, _temp, _crd, ccclass, property, BlackHole;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider = _cc.Collider;
      Component = _cc.Component;
      easing = _cc.easing;
      log = _cc.log;
      RigidBody = _cc.RigidBody;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18df8ZmBm1PNpU2RRmg9J3j", "BlackHole", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BlackHole
       * DateTime = Wed Jan 01 2025 12:13:12 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = BlackHole.ts
       * FileBasenameNoExtension = BlackHole
       * URL = db://assets/Scripts/GamePlay/BlackHole.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BlackHole", BlackHole = (_dec = ccclass('BlackHole'), _dec(_class = (_temp = class BlackHole extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "speed", 8);

          _defineProperty(this, "deltaTime", 0.01);

          _defineProperty(this, "radian", null);

          _defineProperty(this, "thisWorldPos", new Vec3());

          _defineProperty(this, "rigidbody", null);

          _defineProperty(this, "collider", null);

          _defineProperty(this, "isActiveBounceAnim", false);

          _defineProperty(this, "scheduleCallback", null);

          _defineProperty(this, "bounceTimes", 0);

          _defineProperty(this, "tweenBounceAnim", null);
        }

        start() {
          this.initRigidbody();
          this.registerPhysics();
        }

        initRigidbody() {
          this.rigidbody = this.getComponent(RigidBody);
          this.collider = this.getComponent(Collider);
        }

        registerPhysics() {
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name.includes("Capsule") || e.otherCollider.node.name.includes("Cube") || e.otherCollider.node.name.includes("Cylinder")) {
              log(e.otherCollider.node.name);
              e.otherCollider.getComponent(RigidBody).setGroup(0); // tween(e.otherCollider.node)
              // .to(0.1, {worldPosition: this.thisWorldPos}, {easing: easing.smooth})
              // .start()
              // e.otherCollider.getComponent(RigidBody).type = ERigidBodyType.DYNAMIC;
              // this.scheduleOnce(() => {
              //     log("destroy")
              //     this.node.active = false;
              //     this.node.destroy();
              // }, 1);
            }
          }); // this.collider.on("onCollisionExit", (e: ICollisionEvent) => {
          //     if (e.otherCollider.node.name.includes("Capsule")
          //         || e.otherCollider.node.name.includes("Cube")
          //         || e.otherCollider.node.name.includes("Cylinder")
          //     ) {
          //         e.otherCollider.getComponent(RigidBody).group = 2;   
          //         e.otherCollider.getComponent(RigidBody).type = ERigidBodyType.STATIC;             
          //     }
          // })
        }

        bonceAnim() {
          if (this.isActiveBounceAnim) return;
          this.scheduleCallback = this.schedule(() => {
            this.isActiveBounceAnim = true;

            if (this.bounceTimes >= 4) {
              this.unschedule(this.scheduleCallback);
              return;
            }

            this.bounceTimes += 1;
            this.speed += 1;
            const currentScale = this.node.getScale(),
                  scaleUpNumber = 0.36,
                  newScale = new Vec3(currentScale.x + scaleUpNumber, currentScale.y + scaleUpNumber, currentScale.z + scaleUpNumber);
            this.tweenBounceAnim = tween(this.node).to(0.2, {
              scale: newScale
            }, {
              easing: easing.elasticOut
            }).start();
          }, 3);
        }

        move(radian) {
          const moveDirection = new Vec3(Math.sin(radian), 0, Math.cos(radian));
          moveDirection.normalize();
          moveDirection.multiplyScalar(this.speed * this.deltaTime);
          let pos = new Vec3(moveDirection.x, 0, moveDirection.z);
          this.node.setPosition(this.node.position.add(pos));
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching && this.move(this.radian);
          this.thisWorldPos = this.node.worldPosition;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BlackHole.js.map