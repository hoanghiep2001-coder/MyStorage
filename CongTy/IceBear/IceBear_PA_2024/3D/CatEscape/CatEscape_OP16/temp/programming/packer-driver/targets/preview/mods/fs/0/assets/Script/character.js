System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCString, RigidBody, v3, SkeletalAnimation, CCBoolean, JoyStick, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, v3Clone, Character;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCString = _cc.CCString;
      RigidBody = _cc.RigidBody;
      v3 = _cc.v3;
      SkeletalAnimation = _cc.SkeletalAnimation;
      CCBoolean = _cc.CCBoolean;
    }, function (_unresolved_2) {
      JoyStick = _unresolved_2.JoyStick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a71aeAfMGJFxKenCwe3oHI6", "character", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      v3Clone = v3();

      _export("Character", Character = (_dec = ccclass("Character"), _dec2 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec3 = property(CCString), _dec4 = property(RigidBody), _dec5 = property(CCBoolean), _dec6 = property(SkeletalAnimation), _dec(_class = (_class2 = (_temp = class Character extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "joyStick", _descriptor, this);

          _initializerDefineProperty(this, "catDirectionMove", _descriptor2, this);

          _initializerDefineProperty(this, "_body", _descriptor3, this);

          _initializerDefineProperty(this, "_isMoving", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          _initializerDefineProperty(this, "_aniSkeleton", _descriptor6, this);
        }

        start() {
          this._body = this.node.getComponent(RigidBody);
          this.node.setRotationFromEuler(v3(0, 90, 0));
          this._aniSkeleton = this.node.getComponent(SkeletalAnimation);

          this._aniSkeleton.play("Cats_Runcycle");
        }

        directionMove(value) {
          var result = "";

          if (value === null) {
            this._aniSkeleton.pause();

            return result = "stop";
          } else {
            this._aniSkeleton.resume();

            if (-45 <= value && value < 45) return result = "top";
            if (45 <= value && value < 135) return result = "right";
            if (135 <= value && value < 180) return result = "bottom";
            if (-180 <= value && value < -135) return result = "bottom";
            if (-135 <= value && value < -45) return result = "left";
          }
        }

        update(deltaTime) {
          this.catDirectionMove = this.directionMove(this.joyStick.angleMove);

          switch (this.catDirectionMove) {
            case "stop":
              return this._body.setLinearVelocity(v3(0, 0, 0));

            case "top":
              this.node.setRotationFromEuler(v3(0, 90, 0));
              return this._body.setLinearVelocity(v3(this.speed, 0, 0));

            case "right":
              this.node.setRotationFromEuler(v3(0, 0, 0));
              return this._body.setLinearVelocity(v3(0, 0, this.speed));

            case "bottom":
              this.node.setRotationFromEuler(v3(0, -90, 0));
              return this._body.setLinearVelocity(v3(-this.speed, 0, 0));

            case "left":
              this.node.setRotationFromEuler(v3(0, 180, 0));
              return this._body.setLinearVelocity(v3(0, 0, -this.speed));

            default:
              return this._body.setLinearVelocity(v3(0, 0, 0));
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "catDirectionMove", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "stop";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_body", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_isMoving", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_aniSkeleton", [_dec6], {
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
//# sourceMappingURL=character.js.map