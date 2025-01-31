System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, v3, Vec3, EasyController, EasyControllerEvent, GameInfo, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, v3_1, v3_2, ROTATION_STRENGTH, ThirdPersonCamera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyController(extras) {
    _reporterNs.report("EasyController", "../joystick/EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "../joystick/EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EasyController = _unresolved_2.EasyController;
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64f69pc5yxKK54uUb01rAcz", "ThirdPersonCamera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      v3_1 = v3();
      v3_2 = v3();
      ROTATION_STRENGTH = 20.0;

      _export("ThirdPersonCamera", ThirdPersonCamera = (_dec = ccclass('ThirdPersonCamera'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class ThirdPersonCamera extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "fakeTarget", _descriptor2, this);

          _initializerDefineProperty(this, "lookAtOffset", _descriptor3, this);

          _initializerDefineProperty(this, "zoomSensitivity", _descriptor4, this);

          _initializerDefineProperty(this, "lenMin", _descriptor5, this);

          _initializerDefineProperty(this, "lenMax", _descriptor6, this);

          _initializerDefineProperty(this, "len", _descriptor7, this);

          _initializerDefineProperty(this, "rotateVHSeparately", _descriptor8, this);

          _initializerDefineProperty(this, "tweenTime", _descriptor9, this);

          _defineProperty(this, "_targetLen", 0);

          _defineProperty(this, "_targetAngles", v3());
        }

        start() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
          this._targetLen = this.len;

          this._targetAngles.set(this.node.eulerAngles);
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
        }

        lateUpdate(deltaTime) {
          if (!this.target) {
            return;
          }

          var t = Math.min(deltaTime / this.tweenTime, 1.0); //rotation

          v3_1.set(this.node.eulerAngles);
          Vec3.lerp(v3_1, v3_1, this._targetAngles, t);
          this.node.setRotationFromEuler(v3_1); //lookat

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isHitBrakeBtnFlag) v3_1.set(this.fakeTarget.worldPosition);else v3_1.set(this.target.worldPosition);
          v3_1.add(this.lookAtOffset); //len and position

          this.len = this.len * (1.0 - t) + this._targetLen * t;
          v3_2.set(this.node.forward);
          v3_2.multiplyScalar(this.len);
          v3_1.subtract(v3_2);
          this.node.setPosition(v3_1); // log(this.node.getPosition().z)
        }

        onCameraRotate(deltaX, deltaY) {
          var eulerAngles = this.node.eulerAngles;

          if (this.rotateVHSeparately) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
              deltaY = 0;
            } else {
              deltaX = 0;
            }
          }

          this._targetAngles.set(eulerAngles.x + deltaX * ROTATION_STRENGTH, eulerAngles.y + deltaY * ROTATION_STRENGTH, eulerAngles.z);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fakeTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zoomSensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lenMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lenMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "len", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rotateVHSeparately", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tweenTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ThirdPersonCamera.js.map