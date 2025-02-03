System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, screen, Node, Quat, Vec2, Vec3, Global, SoundManager, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Joystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Utility3D/Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Utility3D/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utility3D/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      screen = _cc.screen;
      Node = _cc.Node;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Global = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1b1eHKAyVE7J4tmK/rYqYM", "Joystick", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Joystick
       * DateTime = Wed May 22 2024 14:20:42 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = Joystick.ts
       * FileBasenameNoExtension = Joystick
       * URL = db://assets/Scripts/GamePlay/Joystick.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Joystick", Joystick = (_dec = ccclass('Joystick'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Camera), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class Joystick extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "targetNode", _descriptor, this);

          _initializerDefineProperty(this, "ball", _descriptor2, this);

          _initializerDefineProperty(this, "mainCam", _descriptor3, this);

          _initializerDefineProperty(this, "guide", _descriptor4, this);

          _defineProperty(this, "startPos", Vec2.ZERO);

          _defineProperty(this, "isRotating", false);

          _defineProperty(this, "speedRotation", 1);

          _defineProperty(this, "direction1", Vec2.ZERO);

          _defineProperty(this, "direction2", Vec2.ZERO);

          _defineProperty(this, "mag1", 0);

          _defineProperty(this, "mag2", 0);

          _defineProperty(this, "boolFirstMove", false);

          _defineProperty(this, "boolCanPlaySound", true);

          _defineProperty(this, "vectorOrigin", Vec2.ZERO);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onMouseUp, this);
          this.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
        }

        onMouseDown(event) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).touchPowerBar) return;
          this.guide.active = false;
          this.isRotating = true;
          this.startPos = event.getLocation();
        }

        onMouseUp() {
          this.isRotating = false;
          this.unscheduleAllCallbacks();
          this.boolCanPlaySound = true;
        }

        onMouseMove(event) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).endGame) return;
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).touchPowerBar) return;

          if (this.isRotating) {
            while (this.boolCanPlaySound) {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState) {
                (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                  error: Error()
                }), SoundManager) : SoundManager).Instance(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                  error: Error()
                }), SoundManager) : SoundManager).adjustAngle.play();
              }

              this.boolCanPlaySound = false;
              this.scheduleOnce(() => {
                this.boolCanPlaySound = true;
              }, 0.5);
            }

            this.direction1 = Vec2.subtract(new Vec2(), this.startPos, this.vectorOrigin);
            var currentPos = event.getLocation();
            this.direction2 = Vec2.subtract(new Vec2(), currentPos, this.vectorOrigin); //log(this.direction2);

            var angle1 = Math.atan2(this.direction1.y, this.direction1.x);
            var angle2 = Math.atan2(this.direction2.y, this.direction2.x);
            var angleBetween = angle2 - angle1;

            if (angleBetween > Math.PI) {
              angleBetween -= 2 * Math.PI;
            } else if (angleBetween < -Math.PI) {
              angleBetween += 2 * Math.PI;
            }

            this.rotateNodeAroundY(this.targetNode, angleBetween);
            this.startPos = currentPos;
          }
        } // Phương thức xoay node quanh trục Y


        rotateNodeAroundY(node, angle) {
          var axis = new Vec3(0, 1, 0); // Trục Y
          // Tính toán ma trận quay từ trục và góc xoay

          var rotationQuat = new Quat();
          Quat.fromAxisAngle(rotationQuat, axis, angle); // Áp dụng ma trận quay vào node

          var rotation = node.rotation.clone();
          Quat.multiply(rotation, rotation, rotationQuat);
          node.rotation = rotation; //   node.rotate(rotationQuat, Node.NodeSpace.WORLD);
        }

        update(dt) {
          this.vectorOrigin = new Vec2(screen.windowSize.width / 2, screen.windowSize.height / 2); //log(this.vectorOrigin);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainCam", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec5], {
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
//# sourceMappingURL=Joystick.js.map