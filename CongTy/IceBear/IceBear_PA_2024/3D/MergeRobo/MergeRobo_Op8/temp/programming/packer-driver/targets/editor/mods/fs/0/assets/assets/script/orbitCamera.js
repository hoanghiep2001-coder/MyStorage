System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, math, CameraComponent, ModelComponent, geometry, sys, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, RAD_TO_DEG, DEG_TO_RAD, OrbitCamera;

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
      math = _cc.math;
      CameraComponent = _cc.CameraComponent;
      ModelComponent = _cc.ModelComponent;
      geometry = _cc.geometry;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1173VNaPVHxI1DspO5zMw+", "orbitCamera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      RAD_TO_DEG = 180 / Math.PI;
      DEG_TO_RAD = Math.PI / 180;

      _export("OrbitCamera", OrbitCamera = (_dec = ccclass('OrbitCamera'), _dec2 = property(Node), _dec3 = property(CameraComponent), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class OrbitCamera extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "distanceMax", _descriptor, this);

          _initializerDefineProperty(this, "distanceMin", _descriptor2, this);

          _initializerDefineProperty(this, "pitchAngleMax", _descriptor3, this);

          _initializerDefineProperty(this, "pitchAngleMin", _descriptor4, this);

          _initializerDefineProperty(this, "inertiaFactor", _descriptor5, this);

          _initializerDefineProperty(this, "focusEntity", _descriptor6, this);

          _initializerDefineProperty(this, "frameOnStart", _descriptor7, this);

          _initializerDefineProperty(this, "camera", _descriptor8, this);

          _initializerDefineProperty(this, "nodeLight", _descriptor9, this);

          _defineProperty(this, "_targetDistance", 0);

          _defineProperty(this, "_targetPitch", 0);

          _defineProperty(this, "_targetYaw", 0);

          _defineProperty(this, "_yaw", 0);

          _defineProperty(this, "_pivotPoint", new math.Vec3());

          _defineProperty(this, "distanceBetween", new math.Vec3());

          _defineProperty(this, "quatWithoutYaw", new math.Quat());

          _defineProperty(this, "yawOffset", new math.Quat());

          _defineProperty(this, "_pitch", 0);

          _defineProperty(this, "_distance", 0);

          _defineProperty(this, "_modelsAabb", void 0);

          _defineProperty(this, "_modelsAdded", 0);

          _defineProperty(this, "isLock", false);
        }

        get distance() {
          return this._targetDistance;
        }

        set distance(value) {
          this._targetDistance = this._clampDistance(value);
        }

        get pitch() {
          return this._targetPitch;
        }

        set pitch(value) {
          this._targetPitch = this._clampPitchAngle(value);
        }

        get yaw() {
          return this._targetYaw;
        }

        set yaw(value) {
          this._targetYaw = value; // Ensure that the yaw takes the shortest route by making sure that
          // the difference between the targetYaw and the actual is 180 degrees
          // in either direction

          var diff = this._targetYaw - this._yaw;
          var reminder = diff % 360;

          if (reminder > 180) {
            this._targetYaw = this._yaw - (360 - reminder);
          } else if (reminder < -180) {
            this._targetYaw = this._yaw + (360 + reminder);
          } else {
            this._targetYaw = this._yaw + reminder;
          }
        }

        get pivotPoint() {
          return this._pivotPoint;
        }

        set pivotPoint(value) {
          math.Vec3.copy(this._pivotPoint, value);
        }

        focus(focusEntity) {
          // Calculate an bounding box that encompasses all the models to frame in the camera view
          this._modelsAdded = this._buildAabb(focusEntity, 0);
          var halfExtents = this._modelsAabb.halfExtents;
          var radius = Math.max(halfExtents.x, Math.max(halfExtents.y, halfExtents.z));
          this.distance = radius * 1.5 / Math.sin(0.5 * this.camera.fov * DEG_TO_RAD);

          this._removeInertia();

          math.Vec3.copy(this._pivotPoint, this._modelsAabb.center);
        }

        resetAndLookAtPoint(resetPoint, lookAtPoint) {
          math.Vec3.copy(this.pivotPoint, lookAtPoint);
          this.node.setPosition(resetPoint);
          this.node.lookAt(lookAtPoint);
          var distance = this.distanceBetween;
          math.Vec3.subtract(distance, lookAtPoint, resetPoint);
          this.distance = distance.length();
          math.Vec3.copy(this.pivotPoint, lookAtPoint);
          var cameraQuat = this.node.getRotation();
          this.yaw = this._calcYaw(cameraQuat);
          this.pitch = this._calcPitch(cameraQuat, this.yaw);

          this._removeInertia();

          this._updatePosition();
        }

        resetAndLookAtEntity(resetPoint, entity) {
          this._modelsAdded = this._buildAabb(entity, 0);
          this.resetAndLookAtPoint(resetPoint, this._modelsAabb.center);
        }

        reset(yaw, pitch, distance) {
          this.pitch = pitch;
          this.yaw = yaw;
          this.distance = distance;

          this._removeInertia();
        }

        start() {
          var self = this;

          var onWindowResize = function () {
            self._checkAspectRatio();
          };

          if (sys.isBrowser) {
            window.addEventListener('resize', onWindowResize, true);
          }

          this._checkAspectRatio(); // Find all the models in the scene that are under the focused entity


          this._modelsAabb = new geometry.aabb();
          this._modelsAdded = this._buildAabb(this.focusEntity, 0);
          this.node.lookAt(this._modelsAabb.center);
          this._pivotPoint = new math.Vec3();
          math.Vec3.copy(this._pivotPoint, this._modelsAabb.center); // Calculate the camera euler angle rotation around x and y axes
          // This allows us to place the camera at a particular rotation to begin with in the scene

          var cameraQuat = this.node.getRotation(); // Preset the camera

          this._yaw = this._calcYaw(cameraQuat);
          this._pitch = this._clampPitchAngle(this._calcPitch(cameraQuat, this._yaw));
          this.node.setRotationFromEuler(this._pitch, this._yaw, 0);
          this._distance = 0;
          this._targetYaw = this._yaw;
          this._targetPitch = this._pitch; // If we have ticked focus on start, then attempt to position the camera where it frames
          // the focused entity and move the pivot point to entity's position otherwise, set the distance
          // to be between the camera position in the scene and the pivot point

          if (this.frameOnStart) {
            this.focus(this.focusEntity);
          } else {
            var distanceBetween = new math.Vec3();
            math.Vec3.subtract(distanceBetween, this.node.getPosition(), this._pivotPoint);
            this._distance = this._clampDistance(distanceBetween.length());
          }

          this._targetDistance = this._distance; //this._distance = this.distanceMin;

          this._distance = this._clampDistance(this._distance);
          this._pitch = this._clampPitchAngle(this._pitch);

          if (this.frameOnStart) {
            this.focus(this.focusEntity);
          } else {
            this.resetAndLookAtEntity(this.node.getPosition(), this.focusEntity);
          }
        }

        update(dt) {
          // // Add inertia, if any
          var t = this.inertiaFactor === 0 ? 1 : Math.min(dt / this.inertiaFactor, 1);
          this._distance = math.lerp(this._distance, this._targetDistance, t);
          this._yaw = math.lerp(this._yaw, this._targetYaw, t);
          this._pitch = math.lerp(this._pitch, this._targetPitch, t);

          this._updatePosition();
        }

        _updatePosition() {
          // Work out the camera position based on the pivot point, pitch, yaw and distance
          this.node.setPosition(0, 0, 0);
          this.node.setRotationFromEuler(this._pitch, this._yaw, 0);
          this.nodeLight.setRotationFromEuler(this._pitch, this._yaw, 0);
          var position = this.node.getPosition();
          math.Vec3.copy(position, this.node.forward);
          math.Vec3.scaleAndAdd(position, this.pivotPoint, position, -this._distance);
          this.node.setPosition(position);
        }

        _removeInertia() {
          this._yaw = this._targetYaw;
          this._pitch = this._targetPitch;
          this._distance = this._targetDistance;
        }

        _checkAspectRatio() {
          var height = cc.winSize.height;
          var width = cc.winSize.width; // Match the axis of FOV to match the aspect ratio of the canvas so
          // the focused entities is always in frame

          this.camera.fovAxis = height > width ? CameraComponent.FOVAxis.VERTICAL : CameraComponent.FOVAxis.HORIZONTAL;
        }

        _calcYaw(quat) {
          var transformedForward = new math.Vec3();
          this.transformVector(quat, math.Vec3.FORWARD, transformedForward);
          return Math.atan2(-transformedForward.x, -transformedForward.z) * RAD_TO_DEG;
        }

        _clampDistance(distance) {
          if (this.distanceMax > 0) {
            return math.clamp(distance, this.distanceMin, this.distanceMax);
          }

          return Math.max(distance, this.distanceMin);
        }

        _clampPitchAngle(pitch) {
          // Negative due as the pitch is inversed since the camera is orbiting the entity
          return math.clamp(pitch, -this.pitchAngleMax, -this.pitchAngleMin);
        }

        _calcPitch(quat, yaw) {
          var quatWithoutYaw = this.quatWithoutYaw;
          var yawOffset = this.yawOffset;
          math.Quat.fromEuler(yawOffset, 0, -yaw, 0);
          math.Quat.multiply(quatWithoutYaw, yawOffset, quat);
          var transformedForward = new math.Vec3();
          this.transformVector(quatWithoutYaw, math.Vec3.FORWARD, transformedForward);
          return Math.atan2(transformedForward.y, -transformedForward.z) * RAD_TO_DEG;
        }

        transformVector(q, vec, res) {
          if (res === undefined) {
            res = new math.Vec3();
          }

          var x = vec.x,
              y = vec.y,
              z = vec.z;
          var qx = q.x,
              qy = q.y,
              qz = q.z,
              qw = q.w; // calculate quat * vec

          var ix = qw * x + qy * z - qz * y;
          var iy = qw * y + qz * x - qx * z;
          var iz = qw * z + qx * y - qy * x;
          var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

          res.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          res.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          res.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
          return res;
        }

        _buildAabb(entity, modelsAdded) {
          let models = entity.getComponentsInChildren(ModelComponent);

          for (let i = 0; i < models.length; i++) {
            if (!models[i].model) return;
            let bound = models[i].model.modelBounds;

            if (modelsAdded === 0) {
              this._modelsAabb.copy(bound);
            } else {
              geometry.aabb.merge(this._modelsAabb, this._modelsAabb, bound);
            }

            modelsAdded += 1;
          }

          return modelsAdded;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "distanceMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distanceMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pitchAngleMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 90;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pitchAngleMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -90;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "inertiaFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "focusEntity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "frameOnStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=orbitCamera.js.map