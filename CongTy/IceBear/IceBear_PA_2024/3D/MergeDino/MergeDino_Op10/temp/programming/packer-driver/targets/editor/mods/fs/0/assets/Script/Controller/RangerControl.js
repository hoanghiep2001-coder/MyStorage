System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ERigidBodyType, BoxCollider, RigidBody, math, SkeletalAnimation, Constants, _dec, _class, _temp, _crd, ccclass, property, RangerControl;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      ERigidBodyType = _cc.ERigidBodyType;
      BoxCollider = _cc.BoxCollider;
      RigidBody = _cc.RigidBody;
      math = _cc.math;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51538WFcw1P6baoyBNVdquG", "RangerControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RangerControl", RangerControl = (_dec = ccclass('RangerControl'), _dec(_class = (_temp = class RangerControl extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "isFight", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);
        }

        start() {
          this.getComponent(SkeletalAnimation).play("Idle_1");
          this.rigidbody = this.node.getComponent(RigidBody);
          this.collider = this.node.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Rex" && e.selfCollider.node.name !== "Unit_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isFight = true;
              this.die();
            }

            if (e.selfCollider.node.name === "Unit_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isFight = true;
              this.die();
            }
          });
        }

        die() {
          this.node.getComponent(SkeletalAnimation).play("Die");
          this.scheduleOnce(() => {
            this.node.active = false;
            this.node.getComponent(SkeletalAnimation).stop();
          }, 1.5);
        }

        Run() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;

          switch (this.node.parent.name) {
            case "Unit_9":
              this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -12));
              break;

            case "Unit_10":
              this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12));
              break;

            case "Unit_11":
              this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12));
              break;

            case "Unit_12":
              this.rigidbody.setLinearVelocity(new math.Vec3(-10, 0, -12));
              break;

            case "Unit_13":
              this.rigidbody.setLinearVelocity(new math.Vec3(-5, 0, -12));
              break;

            case "Unit_14":
              this.rigidbody.setLinearVelocity(new math.Vec3(-5, 0, -12));
              break;

            default:
              break;
          }

          if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
          }
        }

        runStep2() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;

          switch (this.node.parent.name) {
            case "Unit_1":
              this.rigidbody.setLinearVelocity(new math.Vec3(12, 0, -13));
              break;

            case "Unit_2":
              this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13));
              break;

            case "Unit_3":
              this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13));
              break;

            case "Unit_4":
              this.rigidbody.setLinearVelocity(new math.Vec3(10, 0, -13));
              break;

            case "Unit_5":
              this.rigidbody.setLinearVelocity(new math.Vec3(5, 0, -13));
              break;

            case "Unit_6":
              this.rigidbody.setLinearVelocity(new math.Vec3(5, 0, -13));
              break;

            case "Unit_7":
              this.rigidbody.setLinearVelocity(new math.Vec3(11, 0, -13));
              break;

            case "Unit_8":
              this.rigidbody.setLinearVelocity(new math.Vec3(11, 0, -13));
              break;
          }

          if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
          }
        }

        update(dt) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFightStep1 && !this.isFight && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep1) {
            this.Run();
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFightStep2 && !this.isFight && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isStartStep2) {
            this.runStep2();
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RangerControl.js.map