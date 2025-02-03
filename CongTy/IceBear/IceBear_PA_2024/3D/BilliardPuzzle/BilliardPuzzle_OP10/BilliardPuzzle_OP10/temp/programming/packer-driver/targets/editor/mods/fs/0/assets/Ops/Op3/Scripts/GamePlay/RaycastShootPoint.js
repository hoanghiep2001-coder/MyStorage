System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, geometry, misc, Node, PhysicsSystem, Vec3, Global, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, RaycastShootPoint;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Utility3D/Global", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      geometry = _cc.geometry;
      misc = _cc.misc;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Global = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f58fgKYORKMpBPgZrHM608", "RaycastShootPoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RaycastShootPoint
       * DateTime = Thu May 23 2024 08:34:54 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = RaycastShootPoint.ts
       * FileBasenameNoExtension = RaycastShootPoint
       * URL = db://assets/Scripts/GamePlay/RaycastShootPoint.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RaycastShootPoint", RaycastShootPoint = (_dec = ccclass('RaycastShootPoint'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = (_temp = class RaycastShootPoint extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "line", _descriptor, this);

          _initializerDefineProperty(this, "circle", _descriptor2, this);

          _initializerDefineProperty(this, "out", _descriptor3, this);

          _initializerDefineProperty(this, "in", _descriptor4, this);

          _initializerDefineProperty(this, "originRay", _descriptor5, this);

          _initializerDefineProperty(this, "targetRay", _descriptor6, this);

          _initializerDefineProperty(this, "originRayLeft", _descriptor7, this);

          _initializerDefineProperty(this, "targetRayLeft", _descriptor8, this);

          _initializerDefineProperty(this, "originRayRight", _descriptor9, this);

          _initializerDefineProperty(this, "targetRayRight", _descriptor10, this);

          _defineProperty(this, "distance", 0);

          _defineProperty(this, "target", null);

          _defineProperty(this, "hitPoint", Vec3.ZERO);

          _defineProperty(this, "targetCenter", null);

          _defineProperty(this, "targetLeft", null);

          _defineProperty(this, "targetRight", null);

          _defineProperty(this, "hitPointCenter", Vec3.ZERO);

          _defineProperty(this, "hitPointLeft", Vec3.ZERO);

          _defineProperty(this, "hitPointRight", Vec3.ZERO);

          _defineProperty(this, "distanceCenter", 0);

          _defineProperty(this, "distanceLeft", 0);

          _defineProperty(this, "distanceRight", 0);
        }

        start() {}

        update(deltaTime) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).endGame) return; //  log(this.originRayLeft.getWorldPosition());

          this.RaycastLeft();
          this.Raycast();
          this.RaycastRight();
          this.CalculateLine();
        }

        RaycastLeft() {
          const outRay = new geometry.Ray();
          geometry.Ray.fromPoints(outRay, this.originRayLeft.getWorldPosition(), this.targetRayLeft.getWorldPosition());
          const mask = (1 << 1) + (1 << 2) + (1 << 3); // const mask = 0xffffffff;

          const maxDistance = 10000000;
          const queryTrigger = false;

          if (PhysicsSystem.instance.raycastClosest(outRay, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            this.distanceLeft = raycastClosestResult.distance; // log(raycastClosestResult.collider.node.name + " " + raycastClosestResult.hitPoint);
            //log("left " + this.distanceLeft);
            // log(raycastClosestResult.hitNormal);
            //  log(this.distance);
            // this.line.setWorldScale(0.48 * this.distance / 0.512, 0.02, 1);
            //ball

            if (raycastClosestResult.collider.node.layer == 2) {
              this.targetLeft = raycastClosestResult.collider.node; // log(this.targetLeft.name);

              this.out.active = false;
              this.in.active = false;
            } //wall            
            else {
                this.targetLeft = null;
                this.out.active = false;
                this.in.active = false;
              }

            this.hitPointLeft = raycastClosestResult.hitPoint.clone(); //  log("left " + this.hitPointLeft);
            //   log(this.hitPointLeft);
            // // calcultate  angle
            // if (this.target) {
            //     this.in.setWorldPosition(this.target.getWorldPosition());
            //     // log(this.target.name);
            //     const startPoint = raycastClosestResult.hitPoint.x <= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const endPoint = raycastClosestResult.hitPoint.x >= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const angleOut = this.calculateAngleBetweenPoints(startPoint, endPoint);
            //     //log(angleOut)
            //     const offsetIn = startPoint.z >= endPoint.z ? 1 : 0;
            //     const angleIn = angleOut + 90 + offsetIn * 180;
            //     this.out.setRotationFromEuler(new Vec3(0, 0, angleOut));
            //     this.in.setRotationFromEuler(new Vec3(0, 0, angleIn));
            //     this.in.setScale(((Math.abs(angleOut)) / 90) * 2, 0.35, 1);
            //     this.target = null;
            // }
            // //set postion circle
            // let hitPoint = raycastClosestResult.hitPoint.clone();
            // const point = hitPoint;
            // this.circle.setPosition(0.503 * this.line.getWorldScale().x / 0.48, 0, 0);
          }
        }

        RaycastRight() {
          const outRay = new geometry.Ray();
          geometry.Ray.fromPoints(outRay, this.originRayRight.getWorldPosition(), this.targetRayRight.getWorldPosition());
          const mask = (1 << 1) + (1 << 2) + (1 << 3); // const mask = 0xffffffff;

          const maxDistance = 10000000;
          const queryTrigger = false;

          if (PhysicsSystem.instance.raycastClosest(outRay, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            this.distanceRight = raycastClosestResult.distance; //   log("right " + this.distanceRight);
            //  log(Vec3.distance(this.originRayRight.getWorldPosition(), raycastClosestResult.hitPoint.clone()));
            // log(raycastCVthis.distance);
            //  this.line.setWorldScale(0.48 * this.distance / 0.512, 0.02, 1);
            //ball

            if (raycastClosestResult.collider.node.layer == 2) {
              this.targetRight = raycastClosestResult.collider.node;
              this.out.active = false;
              this.in.active = false;
            } //wall            
            else {
                this.targetRight = null;
                this.out.active = false;
                this.in.active = false;
              }

            this.hitPointRight = raycastClosestResult.hitPoint.clone(); //    log("right " + this.hitPointRight);
            // // calcultate  angle
            // if (this.target) {
            //     this.in.setWorldPosition(this.target.getWorldPosition());
            //     // log(this.target.name);
            //     const startPoint = raycastClosestResult.hitPoint.x <= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const endPoint = raycastClosestResult.hitPoint.x >= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const angleOut = this.calculateAngleBetweenPoints(startPoint, endPoint);
            //     //log(angleOut)
            //     const offsetIn = startPoint.z >= endPoint.z ? 1 : 0;
            //     const angleIn = angleOut + 90 + offsetIn * 180;
            //     this.out.setRotationFromEuler(new Vec3(0, 0, angleOut));
            //     this.in.setRotationFromEuler(new Vec3(0, 0, angleIn));
            //     this.in.setScale(((Math.abs(angleOut)) / 90) * 2, 0.35, 1);
            //     this.target = null;
            // }
            // //set postion circle
            // let hitPoint = raycastClosestResult.hitPoint.clone();
            // const point = hitPoint;
            // this.circle.setPosition(0.503 * this.line.getWorldScale().x / 0.48, 0, 0);
          }
        }

        Raycast() {
          const outRay = new geometry.Ray();
          geometry.Ray.fromPoints(outRay, this.originRay.getWorldPosition(), this.targetRay.getWorldPosition());
          const mask = (1 << 1) + (1 << 2) + (1 << 3); // const mask = 0xffffffff;

          const maxDistance = 10000000;
          const queryTrigger = false;

          if (PhysicsSystem.instance.raycastClosest(outRay, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            this.distanceCenter = raycastClosestResult.distance; // log(raycastClosestResult.hitNormal);
            //  log("center " + this.distanceCenter);
            //  this.line.setWorldScale(0.48 * this.distance / 0.512, 0.02, 1);
            //ball

            if (raycastClosestResult.collider.node.layer == 2) {
              this.targetCenter = raycastClosestResult.collider.node;
              this.out.active = false;
              this.in.active = false;
            } //wall            
            else {
                this.targetCenter = null;
                this.out.active = false;
                this.in.active = false;
              }

            this.hitPointCenter = raycastClosestResult.hitPoint.clone(); //   log("center " + this.hitPointCenter);
            // // calcultate  angle
            // if (this.target) {
            //     this.in.setWorldPosition(this.target.getWorldPosition());
            //     // log(this.target.name);
            //     const startPoint = raycastClosestResult.hitPoint.x <= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const endPoint = raycastClosestResult.hitPoint.x >= this.target.getWorldPosition().x ? raycastClosestResult.hitPoint : this.target.getWorldPosition();
            //     const angleOut = this.calculateAngleBetweenPoints(startPoint, endPoint);
            //     //log(angleOut)
            //     const offsetIn = startPoint.z >= endPoint.z ? 1 : 0;
            //     const angleIn = angleOut + 90 + offsetIn * 180;
            //     this.out.setRotationFromEuler(new Vec3(0, 0, angleOut));
            //     this.in.setRotationFromEuler(new Vec3(0, 0, angleIn));
            //     this.in.setScale(((Math.abs(angleOut)) / 90) * 2, 0.35, 1);
            //     this.targetCenter = null;
            // }
            // //set postion circle
            // let hitPoint = raycastClosestResult.hitPoint.clone();
            // const point = hitPoint;
            // this.circle.setPosition(0.503 * this.line.getWorldScale().x / 0.48, 0, 0);
          }
        }

        GetTarget() {
          if (this.targetCenter == null && this.targetLeft == null && this.targetRight == null) {
            //  log("all null");
            this.target = null;
            this.distance = this.distanceCenter;
            this.hitPoint = this.hitPointCenter;
          } else {
            // target left null
            if (this.targetLeft == null) {
              //target left null + target center null
              if (this.targetCenter == null) {
                //target left null + target center null + target right null
                if (this.targetRight == null) {
                  //     log("target left null + target center null + target right null");
                  this.target = this.targetCenter;
                  this.distance = this.distanceCenter;
                  this.hitPoint = this.hitPointCenter; //target left null + target center null + target right !=null
                } else {
                  //    log("target left null + target center null + target right !=null");
                  this.target = this.targetRight;
                  this.distance = this.distanceRight;
                  this.hitPoint = this.hitPointRight;
                }
              } //target left null +target center != null 
              else {
                  //target left null + target center !=null + target right null
                  if (this.targetRight == null) {
                    //    log("target left null + target center !=null + target right null");
                    this.target = this.targetCenter;
                    this.distance = this.distanceCenter;
                    this.hitPoint = this.hitPointCenter;
                  } //target left null + target center !=null + target right !=null
                  else {
                      //     log("target left null + target center !=null + target right !=null");
                      if (this.hitPointCenter.x <= this.hitPointRight.x) {
                        this.target = this.targetCenter;
                        this.distance = this.distanceCenter;
                        this.hitPoint = this.hitPointCenter;
                      } else {
                        this.target = this.targetRight;
                        this.distance = this.distanceRight;
                        this.hitPoint = this.hitPointRight;
                      }
                    }
                }
            } // target left != null
            else {
                // target left != null target center null
                if (this.targetCenter == null) {
                  // target left != null target center null target right null
                  //   log(" target left != null target center null target right null");
                  if (this.targetRight == null) {
                    this.target = this.targetLeft;
                    this.distance = this.distanceLeft;
                    this.hitPoint = this.hitPointLeft;
                  } // target left != null target center null target right != null
                  else {
                      //  log(" target left != null target center null target right != null");
                      if (this.hitPointRight.x <= this.hitPointLeft.x) {
                        this.target = this.targetRight;
                        this.distance = this.distanceRight;
                        this.hitPoint = this.hitPointRight;
                      } else {
                        this.target = this.targetLeft;
                        this.distance = this.distanceLeft;
                        this.hitPoint = this.hitPointLeft;
                      }
                    }
                } // target left != null target center !=null
                else {
                    if (this.targetRight == null) {
                      // log("target left != null target center !=null target right null");
                      if (this.hitPointCenter.x <= this.hitPointLeft.x) {
                        this.target = this.targetCenter;
                        this.distance = this.distanceCenter;
                        this.hitPoint = this.hitPointCenter;
                      } else {
                        this.target = this.targetLeft;
                        this.distance = this.distanceLeft;
                        this.hitPoint = this.hitPointLeft;
                      }
                    } else {
                      //  log("target left != null target center !=null target right1= null");
                      if (this.hitPointCenter.x <= this.hitPointRight.x) {
                        this.target = this.targetCenter;
                        this.distance = this.distanceCenter;
                        this.hitPoint = this.hitPointCenter;
                      } else {
                        this.target = this.targetRight;
                        this.distance = this.distanceRight;
                        this.hitPoint = this.hitPointRight;
                      }

                      if (this.hitPoint.x >= this.hitPointLeft.x) {
                        this.target = this.targetLeft;
                        this.distance = this.distanceLeft;
                        this.hitPoint = this.hitPointLeft;
                      }
                    }
                  }
              }
          }
        }

        CalculateLine() {
          this.GetTarget();
          this.line.setWorldScale(0.48 * this.distance / 0.512, 0.02, 1);

          if (this.target != null) {
            const startPoint = this.hitPoint.x <= this.target.getWorldPosition().x ? this.hitPoint : this.target.getWorldPosition();
            const endPoint = this.hitPoint.x >= this.target.getWorldPosition().x ? this.hitPoint : this.target.getWorldPosition();
            const angleOut = this.calculateAngleBetweenPoints(startPoint, endPoint); //log(angleOut)

            const offsetIn = startPoint.z >= endPoint.z ? 1 : 0;
            const angleIn = angleOut + 90 + offsetIn * 180;
            this.out.setRotationFromEuler(new Vec3(0, 0, angleOut));
            this.in.setRotationFromEuler(new Vec3(0, 0, angleIn));
            this.in.setScale(Math.abs(angleOut) / 90 * 2, 0.35, 1);
            this.targetCenter = null;
            this.in.active = false;
            this.out.active = false;
          } else {
            this.in.active = false;
            this.out.active = false;
          }

          this.circle.setPosition(0.503 * this.line.getWorldScale().x / 0.48, 0, 0);
        }

        calculateAngleBetweenPoints(pointA, pointB) {
          const deltaX = parseFloat(pointB.x.toFixed(4)) - parseFloat(pointA.x.toFixed(4));
          const deltaZ = parseFloat(pointB.z.toFixed(4)) - parseFloat(pointA.z.toFixed(4)); //   log(deltaZ);
          // Tính góc dựa trên vector này bằng hàm Math.atan2()

          const angleRad = Math.atan2(-deltaZ, deltaX); // Chuyển đổi góc từ radian sang độ

          const angleDeg = misc.radiansToDegrees(angleRad);
          return angleDeg;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "circle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "out", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "in", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "originRay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetRay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "originRayLeft", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "targetRayLeft", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "originRayRight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "targetRayRight", [_dec11], {
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
//# sourceMappingURL=RaycastShootPoint.js.map