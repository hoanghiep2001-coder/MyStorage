System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider, Component, Node, RigidBody, Quat, Vec3, tween, easing, Animation, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, PA_09_Character;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider = _cc.Collider;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      easing = _cc.easing;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e4b7RFO4BLcojED47oIAtG", "PA_09_Character", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_09_Character", PA_09_Character = (_dec = ccclass('PA_09_Character'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class PA_09_Character extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "checkPoint_1", _descriptor, this);

          _initializerDefineProperty(this, "checkPoint_2", _descriptor2, this);

          _initializerDefineProperty(this, "checkPoint_3", _descriptor3, this);

          _initializerDefineProperty(this, "Camera_4", _descriptor4, this);

          _initializerDefineProperty(this, "Npc", _descriptor5, this);

          _defineProperty(this, "rigidbody", null);

          _defineProperty(this, "isCanMove", false);

          _defineProperty(this, "speed", 50);

          _defineProperty(this, "currentPos", null);

          _defineProperty(this, "_collider", null);

          _defineProperty(this, "movingCount", 0);

          _defineProperty(this, "targetToTurnStep", 136);

          _defineProperty(this, "targetQuat", new Quat());

          _defineProperty(this, "currentQuat", new Quat());

          _defineProperty(this, "isGotoPoint2Flag", false);

          _defineProperty(this, "isGotoPoint3Flag", false);
        }

        start() {
          this.rigidbody = this.getComponent(RigidBody);
          this.currentPos = this.node.getPosition();
          this._collider = this.getComponent(Collider);

          this._collider.on('onTriggerEnter', target => {
            if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
              console.log("Check point!");
              this.checkPoint_1.active = false;
            }
          });
        }

        move() {
          this.movingCount += 1; // this.rigidbody.setLinearVelocity(new Vec3(0, 0, this.speed));

          this.currentPos = this.node.getPosition();
          this.node.setPosition(this.currentPos.x, this.currentPos.y, this.currentPos.z + 0.3);

          if (this.movingCount >= this.targetToTurnStep) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_08.isHitBrakeBtn = false;
            this.checkPoint_1.active = false;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_08.isTouchCheckPointFlag = true; // this.handleGoToCheckpoint_2();
          }
        }

        handleGoToCheckpoint_2() {
          if (this.isGotoPoint2Flag) return;
          this.isGotoPoint2Flag = true;
          tween(this.node).to(0.8, {
            eulerAngles: new Vec3(0, -90, 0),
            position: this.checkPoint_2.position
          }, {
            easing: easing.smooth
          }).start();
        }

        handleGoToCheckPoint_3() {
          if (this.isGotoPoint3Flag) return;
          this.isGotoPoint3Flag = true;
          this.Camera_4.getComponent(Animation).play();
          tween(this.node).to(1, {
            eulerAngles: new Vec3(0, 0, -13),
            position: this.checkPoint_3.position
          }, {
            easing: easing.smooth
          }).call(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_09.isCharacterArrivedReWard = true;
            this.node.setRotationFromEuler(0, 0, 0);
            tween(this.Npc).to(0.5, {
              position: this.checkPoint_2.position
            }, {
              easing: easing.smooth
            }).start();
          }).start();
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isHitBrakeBtn && this.move();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isHitDogeCopsBtn && this.handleGoToCheckpoint_2();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_09.isHitGetRewardBtn && this.handleGoToCheckPoint_3(); // this.currentPos = this.node.getPosition();
          // this.node.setPosition(this.currentPos.x, this.currentPos.y, this.currentPos.z + 0.2);
          // this.isCanMove = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Camera_4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Npc", [_dec6], {
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
//# sourceMappingURL=PA_09_Character.js.map