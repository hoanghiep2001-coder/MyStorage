System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, RigidBody, v3, CCString, SkeletalAnimation, Quat, Vec3, Vec2, BoxCollider, JoyStick, Game, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, controlCubeBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      v3 = _cc.v3;
      CCString = _cc.CCString;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      BoxCollider = _cc.BoxCollider;
    }, function (_unresolved_2) {
      JoyStick = _unresolved_2.JoyStick;
    }, function (_unresolved_3) {
      Game = _unresolved_3.Game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50226TeMLNKEqzuYMFQBSOm", "controlCubeBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("controlCubeBox", controlCubeBox = (_dec = ccclass("controlCubeBox"), _dec2 = property(_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
        error: Error()
      }), Game) : Game), _dec3 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec4 = property(RigidBody), _dec5 = property(CCString), _dec6 = property(SkeletalAnimation), _dec(_class = (_class2 = (_temp = class controlCubeBox extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "joyStick", _descriptor2, this);

          _initializerDefineProperty(this, "_body", _descriptor3, this);

          _initializerDefineProperty(this, "catDirectionMove", _descriptor4, this);

          _initializerDefineProperty(this, "_aniSkeleton", _descriptor5, this);

          _defineProperty(this, "speed", 5);

          _defineProperty(this, "radian", null);

          _defineProperty(this, "isMoving", false);

          _defineProperty(this, "flag", false);

          _defineProperty(this, "isRun", true);

          _defineProperty(this, "rigidbody", null);

          _defineProperty(this, "collider", null);

          _defineProperty(this, "angle", null);

          _defineProperty(this, "targetRotation", new Quat());

          _defineProperty(this, "currentRotation", new Quat());
        }

        start() {
          this.isMoving = false;
          this._body = this.node.getComponent(RigidBody);
          this.node.setRotationFromEuler(v3(0, 90, 0));
          this._aniSkeleton = this.node.getComponent(SkeletalAnimation);

          this._aniSkeleton.play("Cats_Runcycle");

          this.handleCollideDoor();
        }

        handleCollideDoor() {
          this.rigidbody = this.getComponent(RigidBody);
          this.collider = this.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Door") {
              console.log("end");
              this.GamePlay.bg.stop();
              this.GamePlay.catSound.stop();
              this.GamePlay.Cat.active = false;
              this.GamePlay.Boss.active = false;
              this.GamePlay.endGame = true;
              this.GamePlay.handleEndGame();
            }
          });
        }

        handleAngleCat() {
          var directionVector;
          var joyStickPos = this.joyStick.node.getPosition();
          var newPos = new Vec2(joyStickPos.x, joyStickPos.y);
          directionVector = this.joyStick.stick.getPosition().subtract(newPos);
          var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
          var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
          this.radian = rotationRadians;
          this.angle = rotationDegrees;
        }

        update(deltaTime) {
          if (this.flag && this.isMoving) {
            this.flag = false;

            this._aniSkeleton.resume();
          }

          if (!this.flag && !this.isMoving) {
            this.flag = true;

            this._aniSkeleton.pause();
          }

          if (this.isMoving) {
            var moveDirection = new Vec3(Math.sin(this.radian), 0, Math.cos(this.radian));
            moveDirection.normalize();
            moveDirection.multiplyScalar(this.speed * deltaTime);
            var pos = new Vec3(moveDirection.x, 0, moveDirection.z);
            this.node.setRotationFromEuler(v3(0, this.angle, 0));

            if (this.isRun) {
              if (this.node.getPosition().y > 0) {
                return;
              }

              this.node.setPosition(this.node.position.add(pos));
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_body", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "catDirectionMove", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "stop";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_aniSkeleton", [_dec6], {
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
//# sourceMappingURL=controlCubeBox.js.map