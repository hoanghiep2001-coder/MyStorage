System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, systemEvent, SystemEvent, math, CameraComponent, SystemEventType, OrbitCamera, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, OrbitCameraInputTouch;

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
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      math = _cc.math;
      CameraComponent = _cc.CameraComponent;
      SystemEventType = _cc.SystemEventType;
    }, function (_unresolved_2) {
      OrbitCamera = _unresolved_2.OrbitCamera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21a35LqwZVC1K7DZskvRhuK", "orbitCameraInputTouch", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OrbitCameraInputTouch", OrbitCameraInputTouch = (_dec = ccclass('OrbitCameraInputTouch'), _dec2 = property(_crd && OrbitCamera === void 0 ? (_reportPossibleCrUseOfOrbitCamera({
        error: Error()
      }), OrbitCamera) : OrbitCamera), _dec3 = property(CameraComponent), _dec(_class = (_class2 = (_temp = class OrbitCameraInputTouch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "orbitSensitivity", _descriptor, this);

          _initializerDefineProperty(this, "distanceSensitivity", _descriptor2, this);

          _initializerDefineProperty(this, "orbitCamera", _descriptor3, this);

          _initializerDefineProperty(this, "camera", _descriptor4, this);

          _defineProperty(this, "fromWorldPoint", new math.Vec3());

          _defineProperty(this, "toWorldPoint", new math.Vec3());

          _defineProperty(this, "worldDiff", new math.Vec3());

          _defineProperty(this, "pinchMidPoint", new math.Vec2());

          _defineProperty(this, "lastTouchPoint", new math.Vec2());

          _defineProperty(this, "lastPinchMidPoint", new math.Vec2());

          _defineProperty(this, "lastPinchDistance", 0);

          _defineProperty(this, "startPos", new math.Vec2());

          _defineProperty(this, "endPos", new math.Vec2());

          _defineProperty(this, "touch1Pos", new math.Vec2());

          _defineProperty(this, "touch2Pos", new math.Vec2());
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          this._addEvents();
        }

        onDisable() {
          this._removeEvents();
        }

        _addEvents() {
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStartEndCancel, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchStartEndCancel, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_CANCEL, this.onTouchStartEndCancel, this);
        }

        _removeEvents() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onTouchStartEndCancel, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchStartEndCancel, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_CANCEL, this.onTouchStartEndCancel, this);
        }

        getPinchDistance(pointA, pointB) {
          // Return the distance between the two points
          var dx = pointA.x - pointB.x;
          var dy = pointA.y - pointB.y;
          return Math.sqrt(dx * dx + dy * dy);
        }

        calcMidPoint(pointA, pointB, result) {
          result.set(pointB.x - pointA.x, pointB.y - pointA.y);
          result.scale(0.5);
          result.x += pointA.x;
          result.y += pointA.y;
        }

        onTouchStartEndCancel(t, event) {
          // We only care about the first touch for camera rotation. As the user touches the screen,
          // we stored the current touch position
          // console.log(event.type);
          var touches = event.getTouches();

          if (touches.length == 1) {
            //this.lastTouchPoint.set(touches[0].x, touches[0].y);
            if (event.type === SystemEventType.TOUCH_START) {
              this.lastPinchDistance = null; //对于多点触控可能会导致获取数据异常
            }
          } else if (touches.length == 2) {
            // If there are 2 touches on the screen, then set the pinch distance
            touches[0].getLocation(this.touch1Pos);
            touches[1].getLocation(this.touch2Pos);
            this.lastPinchDistance = this.getPinchDistance(this.touch1Pos, this.touch2Pos);
            this.calcMidPoint(this.touch1Pos, this.touch2Pos, this.lastPinchMidPoint); // console.log(event.type, this.touch1Pos, this.touch2Pos, this.lastPinchDistance);
          }
        }

        pan(midPoint) {// var fromWorldPoint = this.fromWorldPoint;
          // var toWorldPoint = this.toWorldPoint;
          // var worldDiff = this.worldDiff;
          // // For panning to work at any zoom level, we use screen point to world projection
          // // to work out how far we need to pan the pivotEntity in world space
          // var distance = this.orbitCamera.distance;
          // this.camera.screenToWorld(new math.Vec3(midPoint.x, midPoint.y, distance), fromWorldPoint);
          // this.camera.screenToWorld(new math.Vec3(this.lastPinchMidPoint.x, this.lastPinchMidPoint.y, distance), toWorldPoint);
          // math.Vec3.subtract(worldDiff, toWorldPoint, fromWorldPoint);
          // this.orbitCamera.pivotPoint.add(worldDiff);
        }

        onTouchMove(t, event) {
          if (this.orbitCamera.isLock) {
            return;
          }

          var pinchMidPoint = this.pinchMidPoint; // We only care about the first touch for camera rotation. Work out the difference moved since the last event
          // and use that to update the camera target position

          var touches = event.getTouches();

          if (touches.length == 1) {
            var touch = touches[0];
            touch.getPreviousLocation(this.startPos);
            touch.getLocation(this.endPos);
            this.orbitCamera.pitch -= (this.startPos.y - this.endPos.y) * this.orbitSensitivity;
            this.orbitCamera.yaw -= (this.endPos.x - this.startPos.x) * this.orbitSensitivity; // this.orbitCamera.pitch -= (touch.y - this.lastTouchPoint.y) * this.orbitSensitivity;
            // this.orbitCamera.yaw -= (touch.x - this.lastTouchPoint.x) * this.orbitSensitivity;
            // this.lastTouchPoint.set(touch.x, touch.y);

            console.log("onTouchMove1", "this.orbitCamera.pitch: ", this.orbitCamera.pitch, "this.orbitCamera.yaw: ", this.orbitCamera.yaw);
          } else if (touches.length == 2) {
            // Calculate the difference in pinch distance since the last event
            touches[0].getLocation(this.touch1Pos);
            touches[1].getLocation(this.touch2Pos);
            var currentPinchDistance = this.getPinchDistance(this.touch1Pos, this.touch2Pos);
            var diffInPinchDistance = 0;

            if (this.lastPinchDistance !== null) {
              diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
            } // console.log("move:", this.touch1Pos, this.touch2Pos, currentPinchDistance, this.lastPinchDistance, diffInPinchDistance);


            this.lastPinchDistance = currentPinchDistance;
            this.orbitCamera.distance -= diffInPinchDistance * this.distanceSensitivity * 0.1 * (this.orbitCamera.distance * 0.1); // Calculate pan difference

            this.calcMidPoint(this.touch1Pos, this.touch2Pos, pinchMidPoint);
            this.pan(pinchMidPoint);
            math.Vec2.copy(this.lastPinchMidPoint, pinchMidPoint);
            console.log("onTouchMove2");
          }
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
//# sourceMappingURL=orbitCameraInputTouch.js.map