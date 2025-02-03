System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, CCBoolean, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, JoyStick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CCBoolean = _cc.CCBoolean;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3658qOQadEYZt80EqPpq5n", "JoyStick", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoyStick", JoyStick = (_dec = ccclass("JoyStick"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(CCBoolean), _dec(_class = (_class2 = (_temp = class JoyStick extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "controlCubeBox", _descriptor, this);

          _initializerDefineProperty(this, "stick", _descriptor2, this);

          _initializerDefineProperty(this, "fakeBg", _descriptor3, this);

          _initializerDefineProperty(this, "max_r", _descriptor4, this);

          _initializerDefineProperty(this, "isTouch", _descriptor5, this);

          _initializerDefineProperty(this, "angleMove", _descriptor6, this);

          _defineProperty(this, "controlCat", null);

          _defineProperty(this, "setTimeOut", void 0);

          _defineProperty(this, "currentPos", null);
        }

        start() {
          // this.stick.getComponent("cc.UIOpacity").opacity = 200;
          this.controlCat = this.controlCubeBox.getComponent("controlCubeBox");
          this.scheduleOnce(() => {
            this.fakeBg.on(cc.Node.EventType.TOUCH_START, this.stickStart, this);
            this.fakeBg.on(cc.Node.EventType.TOUCH_MOVE, this.stickMove, this);
            this.fakeBg.on(cc.Node.EventType.TOUCH_CANCEL, this.stickEnd, this);
            this.fakeBg.on(cc.Node.EventType.TOUCH_END, this.stickEnd, this);
          }, 0.5);
        }

        onLoad() {
          this.stick.setPosition(0, 0, 0);
        }

        stickStart(event) {
          this.isTouch = true;
          var screenPos = event.getUILocation();
          var pos = new Vec3(screenPos.x - 160, screenPos.y - 240, 0);
          this.node.setPosition(pos);
          this.node.getComponent("cc.UIOpacity").opacity = 200;
          this.stick.getComponent("cc.UIOpacity").opacity = 200;
          this.stick.setPosition(pos);
        }

        stickMove(event) {
          var screenPos = event.getUILocation();
          var pos = new Vec3(screenPos.x - 160, screenPos.y - 240, 0);
          var distance = pos.clone().subtract(this.node.position);

          if (distance.length() > this.max_r) {
            // Chuyển vị trí stick về ranh giới của joystick
            distance.normalize().multiplyScalar(this.max_r);
            pos = this.node.position.clone().add(distance);
          }

          this.stick.setPosition(pos);
          this.controlCat.isMoving = true;
          this.controlCat.handleAngleCat();
        }

        stickEnd(event) {
          this.isTouch = false;
          this.stick.setPosition(0, 0, 0);
          this.controlCat.isMoving = false;
          this.stick.getComponent("cc.UIOpacity").opacity = 0;
          this.node.getComponent("cc.UIOpacity").opacity = 0;
        }

        convertToLocalLocation(value) {
          var localX = value.x - 160 - this.stick.getPosition().x;
          var localY = value.y - 240 - this.stick.getPosition().y;
          var result = new cc.Vec3(localX, localY, 0);
          return result;
        }

        update(deltaTime) {// if (this.isTouch) {
          //   const clone = this.stick.getPosition();
          //   const angle = Vec3.angle(v3(clone.x, clone.y, 0), v3(0, 100, 0));
          //   if (clone.x < 0) {
          //     this.angleMove = math.toDegree(-angle);
          //   } else {
          //     this.angleMove = math.toDegree(angle);
          //   }
          // } else {
          //   this.angleMove = null;
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "controlCubeBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fakeBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "max_r", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isTouch", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "angleMove", [property], {
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
//# sourceMappingURL=JoyStick.js.map