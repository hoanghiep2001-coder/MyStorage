System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, BoxCollider, Component, ERigidBodyType, math, RigidBody, _dec, _class, _temp, _crd, ccclass, property, CharacterControl;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      BoxCollider = _cc.BoxCollider;
      Component = _cc.Component;
      ERigidBodyType = _cc.ERigidBodyType;
      math = _cc.math;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c0ab6OlgNN8Ju8uLqdS5KA", "CharacterControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CharacterControl", CharacterControl = (_dec = ccclass('CharacterControl'), _dec(_class = (_temp = class CharacterControl extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "isFight", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);
        }

        start() {
          this.rigidbody = this.node.getComponent(RigidBody);
          this.collider = this.node.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Robot_melee02_base") {
              this.isRun = false;
              this.isFight = true;
            }
          });
        }

        Run() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;
          this.rigidbody.setLinearVelocity(new math.Vec3(2, 0, -10));
        }

        update(dt) {
          if (this.isRun) this.Run();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CharacterControl.js.map