System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, math, systemEvent, SystemEvent, CameraComponent, EventMouse, view, OrbitCamera, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, OrbitCameraInputMouse;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrbitCamera(extras) {
    _reporterNs.report("OrbitCamera", "./orbitCamera", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      CameraComponent = _cc.CameraComponent;
      EventMouse = _cc.EventMouse;
      view = _cc.view;
    }, function (_unresolved_2) {
      OrbitCamera = _unresolved_2.OrbitCamera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27c05NoMnhECLh8nggB/pJV", "orbitCameraInputMouse", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OrbitCameraInputMouse", OrbitCameraInputMouse = (_dec = ccclass('OrbitCameraInputMouse'), _dec2 = property(_crd && OrbitCamera === void 0 ? (_reportPossibleCrUseOfOrbitCamera({
        error: Error()
      }), OrbitCamera) : OrbitCamera), _dec3 = property(CameraComponent), _dec(_class = (_class2 = (_temp = class OrbitCameraInputMouse extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "orbitSensitivity", _descriptor, this);

          _initializerDefineProperty(this, "distanceSensitivity", _descriptor2, this);

          _initializerDefineProperty(this, "orbitCamera", _descriptor3, this);

          _initializerDefineProperty(this, "camera", _descriptor4, this);

          _defineProperty(this, "lookButtonDown", false);

          _defineProperty(this, "panButtonDown", false);

          _defineProperty(this, "lastPoint", new math.Vec2());

          _defineProperty(this, "fromWorldPoint", new math.Vec3());

          _defineProperty(this, "toWorldPoint", new math.Vec3());

          _defineProperty(this, "worldDiff", new math.Vec3());

          _defineProperty(this, "center", null);

          _defineProperty(this, "touchPos", null);
        }

        start() {
          // Your initialization goes here.
          this.orbitCamera.distance = 200; //最多300
        }

        onDestroy() {
          this._removeEvents();
        }

        onEnable() {
          this._addEvents();
        }

        onDisable() {
          this._removeEvents();
        }

        _addEvents() {
          systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this); // systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          // systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          // systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);

          systemEvent.on(SystemEvent.EventType.MOUSE_LEAVE, this.onMouseOut, this);
        }

        _removeEvents() {
          systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this); // systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          // systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          // systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);

          systemEvent.off(SystemEvent.EventType.MOUSE_LEAVE, this.onMouseOut, this);
        }

        pan(screenPoint) {
          var fromWorldPoint = this.fromWorldPoint;
          var toWorldPoint = this.toWorldPoint;
          var worldDiff = this.worldDiff; // For panning to work at any zoom level, we use screen point to world projection
          // to work out how far we need to pan the pivotEntity in world space

          var distance = this.orbitCamera.distance;
          this.camera.screenToWorld(new math.Vec3(screenPoint.getLocationX(), screenPoint.getLocationY(), distance), fromWorldPoint);
          this.camera.screenToWorld(new math.Vec3(this.lastPoint.x, this.lastPoint.y, distance), toWorldPoint);
          math.Vec3.subtract(worldDiff, toWorldPoint, fromWorldPoint);
          this.orbitCamera.pivotPoint.add(worldDiff);
        }

        onMouseDown(event) {
          switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
              this.lookButtonDown = true;
              break;

            case EventMouse.BUTTON_MIDDLE:
            case EventMouse.BUTTON_RIGHT:
              this.panButtonDown = true;
              break;
          }
        }

        onMouseUp(event) {
          switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
              this.lookButtonDown = false;
              break;

            case EventMouse.BUTTON_MIDDLE:
            case EventMouse.BUTTON_RIGHT:
              this.panButtonDown = false;
              break;
          }
        }

        onMouseMove(event) {
          if (this.lookButtonDown) {
            this.orbitCamera.pitch -= event.getDeltaY() * this.orbitSensitivity;
            this.orbitCamera.yaw -= event.getDeltaX() * this.orbitSensitivity;
          } else if (this.panButtonDown) {
            this.pan(event);
          }

          this.lastPoint.set(event.getLocationX(), event.getLocationY());
        }

        onMouseWheel(event) {
          console.log("###onMouseWheel", event);
          var size = view.getCanvasSize();
          this.center = {
            x: size.width / 2,
            y: size.height / 2
          };
          this.touchPos = {
            x: event._x,
            y: event._y
          };

          if (this.orbitCamera.isLock) {
            return;
          }

          var wheel = 0;

          if (event.getScrollY() > 0) {
            wheel = -1 * -2; // console.log("放大");
          } else if (event.getScrollY() < 0) {
            wheel = +1 * -2; // console.log("缩小");
          } // console.log("wheel: ", wheel, "this.distanceSensitivity: ",this.distanceSensitivity, "this.orbitCamera.distance",  this.orbitCamera.distance );


          this.orbitCamera.distance -= wheel * this.distanceSensitivity * (this.orbitCamera.distance * 0.1); //event.event.preventDefault();
        }

        onMouseOut(event) {
          this.lookButtonDown = false;
          this.panButtonDown = false;
        }

        update(deltaTime) {// Your update function goes here.
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "orbitSensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distanceSensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "orbitCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
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
//# sourceMappingURL=orbitCameraInputMouse.js.map