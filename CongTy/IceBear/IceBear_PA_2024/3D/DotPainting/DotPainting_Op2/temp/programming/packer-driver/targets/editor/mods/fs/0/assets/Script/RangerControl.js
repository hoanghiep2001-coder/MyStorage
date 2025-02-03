System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ERigidBodyType, BoxCollider, RigidBody, math, SkeletalAnimation, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, RangerControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ERigidBodyType = _cc.ERigidBodyType;
      BoxCollider = _cc.BoxCollider;
      RigidBody = _cc.RigidBody;
      math = _cc.math;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51538WFcw1P6baoyBNVdquG", "RangerControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RangerControl", RangerControl = (_dec = ccclass('RangerControl'), _dec2 = property(Component), _dec(_class = (_class2 = (_temp = class RangerControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Character", _descriptor, this);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);
        }

        start() {
          this.Character = this.Character.getComponent("CharacterControl");
          this.rigidbody = this.node.getComponent(RigidBody);
          this.collider = this.node.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Ranger07" && e.selfCollider.node.name !== "RangerLittle_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isRun = false;
              this.node.getComponent(SkeletalAnimation).play("Comp|Die");
              this.scheduleOnce(() => {
                this.node.active = false;
                this.node.getComponent(SkeletalAnimation).stop();
              }, 1);
            }

            if (e.selfCollider.node.name === "CompLittle_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isRun = false;
              this.node.getComponent(SkeletalAnimation).play("Comp|Die");
              this.scheduleOnce(() => {
                this.node.active = false;
                this.node.getComponent(SkeletalAnimation).stop();
              }, 1);
            }
          });
        }

        Run() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;

          switch (this.node.name) {
            case "CompLittle_9":
              this.rigidbody.setLinearVelocity(new math.Vec3(-1, 0, -7));
              break;

            case "CompLittle_10":
              this.rigidbody.setLinearVelocity(new math.Vec3(-8, 0, -7));
              break;

            case "CompLittle_11":
              this.rigidbody.setLinearVelocity(new math.Vec3(-6, 0, -6));
              break;

            case "CompLittle_12":
              this.rigidbody.setLinearVelocity(new math.Vec3(-2, 0, -7));
              break;

            case "CompLittle_13":
              this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -7));
              break;

            default:
              break;
          }
        }

        update(dt) {
          if (this.isRun) this.Run();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Character", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RangerControl.js.map