System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider, Component, easing, ERigidBodyType, log, math, ParticleSystem, Quat, RigidBody, tween, Vec3, CarStops, GameInfo, CarSkin, SoundController, CONST, CustomerBehavior, _dec, _class, _temp, _crd, ccclass, property, CarBehavior;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCarStops(extras) {
    _reporterNs.report("CarStops", "./CarStops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarSkin(extras) {
    _reporterNs.report("CarSkin", "./CarSkin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomerBehavior(extras) {
    _reporterNs.report("CustomerBehavior", "../Customer/CustomerBehavior", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider = _cc.Collider;
      Component = _cc.Component;
      easing = _cc.easing;
      ERigidBodyType = _cc.ERigidBodyType;
      log = _cc.log;
      math = _cc.math;
      ParticleSystem = _cc.ParticleSystem;
      Quat = _cc.Quat;
      RigidBody = _cc.RigidBody;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CarStops = _unresolved_2.CarStops;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      CarSkin = _unresolved_4.CarSkin;
    }, function (_unresolved_5) {
      SoundController = _unresolved_5.SoundController;
    }, function (_unresolved_6) {
      CONST = _unresolved_6.CONST;
    }, function (_unresolved_7) {
      CustomerBehavior = _unresolved_7.CustomerBehavior;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09628Cevr1CG7Vq9qwaq0pk", "CarBehavior", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarBehavior", CarBehavior = (_dec = ccclass('CarBehavior'), _dec(_class = (_temp = class CarBehavior extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "vFX_smoke", null);

          _defineProperty(this, "vFX_impact", null);

          _defineProperty(this, "stopID", null);

          _defineProperty(this, "roadStopsPoint", null);

          _defineProperty(this, "eulerAnglesY", 0);

          _defineProperty(this, "isCanMove", false);

          _defineProperty(this, "speed", 50);

          _defineProperty(this, "rigidBody", null);

          _defineProperty(this, "collider", null);

          _defineProperty(this, "side", null);

          _defineProperty(this, "donePoint", null);

          _defineProperty(this, "isTranspoter", false);

          _defineProperty(this, "targetQuat", new Quat());

          _defineProperty(this, "currentQuat", new Quat());

          _defineProperty(this, "targetNode", null);
        }

        onLoad() {
          this.collider = this.getComponent(Collider);
          this.rigidBody = this.node.getComponent(RigidBody);
        }

        start() {
          this.currentQuat = this.node.rotation;
          this.targetQuat = this.node.rotation;
          this.eulerAnglesY = this.node.eulerAngles.y;
          var fxChildrens = this.initVfx();
          var currentPos = this.node.getPosition();
          this.collider.on("onCollisionEnter", e => {
            // transporter Car
            if (e.otherCollider.node.name.includes("RmRigidbodyPoint") && !this.isCanMove) {
              this.removeRigidbody();
              this.scheduleOnce(() => {
                log("destroy");
                this.node.active = false;
                this.node.destroy();
              }, 1);
            } // transporter Car


            if (e.otherCollider.node.name.includes("DestroyPoint")) {
              log("destroy");
              this.node.active = false;
              this.node.destroy();
            } // handle Car in op 9


            if (e.otherCollider.node.name.includes("enabledClick")) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).activeVibration = true;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.Impact);
              this.vFX_impact.play();
              fxChildrens.forEach(fx => fx.getComponent(ParticleSystem));
              return;
            } // handle turn back


            if (e.otherCollider.node.name.includes("Car") || e.otherCollider.node.name.includes("Van") || e.otherCollider.node.name.includes("Bus")) {
              log(this.node.name, "collided");
              this.node.setRotationFromEuler(new Vec3(0, this.eulerAnglesY, 0));
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.Impact);
              this.vFX_impact.play();
              fxChildrens.forEach(fx => fx.getComponent(ParticleSystem));
              this.isCanMove = false;
              this.turnBack(currentPos);
            } // handle run to Result


            if (e.otherCollider.node.name.includes("PointA")) {
              if (!this.node.name.includes("Destroyer")) this.removeRigidbody();else {
                this.rigidBody.type = ERigidBodyType.STATIC;
                this.isCanMove = false;
              }
              var CarStopsComp = this.node.parent.parent.getChildByName("CarStops").getComponent(_crd && CarStops === void 0 ? (_reportPossibleCrUseOfCarStops({
                error: Error()
              }), CarStops) : CarStops);
              this.handleGoToTurnPoint(CarStopsComp);
            }

            if (e.otherCollider.node.name.includes("PointB")) {
              this.isTranspoter = true;
              this.removeRigidbody();

              if (!this.node.name.includes("Destroyer")) {
                this.node.setScale(1.5, 1.5, 1.5); // Lưu lại world position trước khi thay đổi parent

                var worldPos = this.node.getWorldPosition(); // Thay đổi parent

                this.node.parent = this.node.parent.parent.parent.parent.getChildByName("Cars"); // Thiết lập lại world position

                this.node.setWorldPosition(worldPos);
              } // Các logic khác


              var _CarStopsComp = this.node.parent.parent.getChildByName("CarStops").getComponent(_crd && CarStops === void 0 ? (_reportPossibleCrUseOfCarStops({
                error: Error()
              }), CarStops) : CarStops);

              this.handleGoToTurnPoint(_CarStopsComp);
            }
          });
        }

        initVfx() {
          this.vFX_smoke = this.node.getChildByName("VFX_Smoke").getComponent(ParticleSystem);
          this.vFX_smoke.node.active = false;
          var vfxNode = this.node.getChildByName("VFX_Impact2");
          this.getComponent(_crd && CarSkin === void 0 ? (_reportPossibleCrUseOfCarSkin({
            error: Error()
          }), CarSkin) : CarSkin).fxBounce = vfxNode.children[2].getComponent(ParticleSystem);
          var fxChildrens = vfxNode.children;
          fxChildrens.splice(2, 1);
          this.vFX_impact = vfxNode.getComponent(ParticleSystem);
          return fxChildrens;
        }

        setMoveBehavior() {
          this.rigidBody.type = ERigidBodyType.DYNAMIC;
          this.isCanMove = true;
        }

        turnBack(posTurnBack) {
          this.targetNode = null;
          if (!this.node.name.includes("Trans")) this.rigidBody.type = ERigidBodyType.STATIC;
          this.node.setRotationFromEuler(new Vec3(0, this.eulerAnglesY, 0));
          tween(this.node).to(0.2, {
            position: posTurnBack
          }, {
            easing: easing.smooth
          }).start();
        }

        applyforce() {
          switch (this.eulerAnglesY) {
            //sang trái
            case 90:
              this.side = "left";
              this.rigidBody.setLinearVelocity(new math.Vec3(this.speed, 0, 0));
              break;
            // nửa trái

            case 45:
              this.side = "half-left";
              this.rigidBody.setLinearVelocity(new math.Vec3(this.speed, 0, this.speed));
              break;
            // sang phải

            case -90:
              this.side = "right";
              this.rigidBody.setLinearVelocity(new math.Vec3(-this.speed, 0, 0));
              break;
            // nửa phải

            case -45:
              this.side = "half-right";
              this.rigidBody.setLinearVelocity(new math.Vec3(-this.speed, 0, this.speed));
              break;
            // lên trên

            case 0:
              this.side = "up";
              this.rigidBody.setLinearVelocity(new math.Vec3(0, 0, this.speed));
              break;
            // xuống dưới

            case 180:
              this.side = "down";
              this.rigidBody.setLinearVelocity(new math.Vec3(0, 0, -this.speed));
              break;

            default:
              break;
          }
        }

        removeRigidbody() {
          this.isCanMove = false;
          this.rigidBody.enabled = false;
          this.collider.enabled = false; // this.rigidBody.destroy();
          // this.collider.destroy();
        }

        handleGoToTurnPoint(CarStopsComp) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          this.vFX_smoke.node.active = true;
          var stopPoint = CarStopsComp.CarStopsState.find(state => state.state === false);
          stopPoint.state = true;
          this.stopID = stopPoint.id;
          var carSkin = this.getComponent(_crd && CarSkin === void 0 ? (_reportPossibleCrUseOfCarSkin({
            error: Error()
          }), CarSkin) : CarSkin);
          CarStopsComp.updateStopStates(stopPoint, carSkin);

          switch (this.side) {
            case "left":
              this.targetNode = CarStopsComp.turnRightPoint; // Quat.fromEuler(this.targetQuat, 0, 0, 0);

              tween(this.node).to(0.3, {
                position: CarStopsComp.turnRightPoint.position
              }, {
                easing: easing.smooth
              }).call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint)).start();
              break;

            case "half-left":
              this.targetNode = CarStopsComp.turnRightPoint; // Quat.fromEuler(this.targetQuat, 0, 0, 0);

              tween(this.node).to(0.3, {
                position: CarStopsComp.turnRightPoint.position
              }, {
                easing: easing.smooth
              }).call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint)).start();
              break;

            case "right":
              this.targetNode = CarStopsComp.turnLeftPoint; // Quat.fromEuler(this.targetQuat, 0, 0, 0);

              tween(this.node).to(0.3, {
                position: CarStopsComp.turnLeftPoint.position
              }, {
                easing: easing.smooth
              }).call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint)).start();
              break;

            case "half-right":
              this.targetNode = CarStopsComp.turnLeftPoint; // Quat.fromEuler(this.targetQuat, 0, 0, 0);

              tween(this.node).to(0.3, {
                position: CarStopsComp.turnLeftPoint.position
              }, {
                easing: easing.smooth
              }).call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint)).start();
              break;

            case "up":
              this.node.setRotationFromEuler(new math.Vec3(0, 0, 0));
              this.handleGoToRoadStopPoint(CarStopsComp, stopPoint);
              break;

            case "down":
              this.targetNode = CarStopsComp.Down_turnleftPoint; // Quat.fromEuler(this.targetQuat, 0, -90, 0);

              tween(this.node).to(0.35, {
                position: CarStopsComp.Down_turnleftPoint.position
              }, {
                easing: easing.smooth
              }).call(() => {
                this.targetNode = CarStopsComp.turnLeftPoint; // Quat.fromEuler(this.targetQuat, 0, 0, 0);

                tween(this.node).to(0.5, {
                  position: CarStopsComp.turnLeftPoint.position
                }, {
                  easing: easing.smooth
                }).call(() => {
                  this.handleGoToRoadStopPoint(CarStopsComp, stopPoint);
                }).start();
              }).start();
              break;

            default:
              break;
          }
        }

        handleGoToRoadStopPoint(CarStopsComp, stopPoint) {
          this.roadStopsPoint = CarStopsComp.node.getChildByName("RoadStop_" + stopPoint.id);
          this.donePoint = CarStopsComp.donePoint;
          var stopPointNode = CarStopsComp.CarStops[stopPoint.id - 1];
          var euler = -90;
          if (this.side.includes("right")) euler = 90;else if (this.side.includes("up")) {
            if (stopPoint.id === 1 || stopPoint.id === 2 || stopPoint.id === 3 || stopPoint.id === 4) euler = 90;
            if (stopPoint.id === 5 || stopPoint.id === 6 || stopPoint.id === 7 || stopPoint.id === 8) euler = -90;
          }
          this.targetNode = this.roadStopsPoint;
          Quat.fromEuler(this.targetQuat, 0, euler, 0);
          tween(this.node).to(0.3, {
            position: this.roadStopsPoint.position
          }, {
            easing: easing.smooth
          }).call(() => this.handleGoToStopPoint(CarStopsComp, stopPointNode, stopPoint)).start();
        }

        handleGoToStopPoint(CarStopsComp, stopPointNode, stopPoint) {
          this.targetNode = stopPointNode;
          this.vFX_smoke.node.active = false;
          tween(this.node).to(0.3, {
            position: stopPointNode.position
          }, {
            easing: easing.smooth
          }).call(() => {
            this.targetNode = null;
            Quat.fromEuler(this.targetQuat, 0, 31, 0);
            this.getComponent(_crd && CarSkin === void 0 ? (_reportPossibleCrUseOfCarSkin({
              error: Error()
            }), CarSkin) : CarSkin).car_Top.active = false;
            stopPoint.isReady = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).IsPlaying = true;
            var firstCumtomer = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCustomers[0].getComponent(_crd && CustomerBehavior === void 0 ? (_reportPossibleCrUseOfCustomerBehavior({
              error: Error()
            }), CustomerBehavior) : CustomerBehavior);
            var firstCustomerColorID = firstCumtomer.customerColorID;

            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).carStops.every(stop => stop.isReady === true && stop.colorID !== firstCustomerColorID) && (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).IsPlaying) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isLose = true;
            }
          }).start();
        }

        handleDoneFullCustomer() {
          this.targetNode = null;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops[this.stopID - 1].carSkin = null;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops[this.stopID - 1].isReady = false;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops[this.stopID - 1].state = false;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops[this.stopID - 1].colorID = null;
          tween(this.node).to(0.25, {
            position: this.roadStopsPoint.position
          }, {
            easing: easing.smooth
          }).call(() => gotoDonePoint()).start();

          var gotoDonePoint = () => {
            this.vFX_smoke.node.active = true;
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
              error: Error()
            }), CONST) : CONST).SoundTrack.carMoveToPlace);
            this.node.setRotationFromEuler(new math.Vec3(0, -90, 0));
            tween(this.node).to(1, {
              position: this.donePoint.position
            }, {
              easing: easing.smooth
            }).call(() => {
              this.node.active = false;
              this.destroy();
            }).start();
          };
        }

        updateRotation(dt) {
          if (!this.targetNode) return;
          var currentPos = this.node.worldPosition.clone();
          var targetPos = this.targetNode.worldPosition.clone();
          var direction = new Vec3();
          Vec3.subtract(direction, targetPos, currentPos);
          direction.normalize(); // Chuẩn hóa vector

          Quat.fromViewUp(this.targetQuat, direction, Vec3.UP);
          this.currentQuat = this.node.rotation; // Nội suy giữa quaternion hiện tại và quaternion mục tiêu

          Quat.slerp(this.currentQuat, this.currentQuat, this.targetQuat, 0.1 * dt); // Cập nhật góc quay cho Node

          this.node.setRotation(this.currentQuat);
        }

        update(dt) {
          this.updateRotation(dt);
          this.isCanMove && this.applyforce();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CarBehavior.js.map