System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AnimationClip, Camera, Collider, Component, find, log, Node, RigidBody, SkeletalAnimation, v3, Vec3, EasyController, EasyControllerEvent, GameInfo, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, v3_1, characterAnim, CharacterController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyController(extras) {
    _reporterNs.report("EasyController", "./joystick/EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "./joystick/EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "./CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./Controller/SoundController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AnimationClip = _cc.AnimationClip;
      Camera = _cc.Camera;
      Collider = _cc.Collider;
      Component = _cc.Component;
      find = _cc.find;
      log = _cc.log;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      SkeletalAnimation = _cc.SkeletalAnimation;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EasyController = _unresolved_2.EasyController;
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      SoundController = _unresolved_4.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "974930CoLFKCptbINpNTCy6", "CharacterController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      v3_1 = v3();

      (function (characterAnim) {
        characterAnim["moto_sit"] = "Moto_sit";
        characterAnim["idle"] = "main_idle";
      })(characterAnim || (characterAnim = {}));

      _export("CharacterController", CharacterController = (_dec = ccclass('CharacterController'), _dec2 = property(Camera), _dec3 = property(AnimationClip), _dec4 = property(AnimationClip), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class CharacterController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mainCamera", _descriptor, this);

          _initializerDefineProperty(this, "velocity", _descriptor2, this);

          _initializerDefineProperty(this, "jumpVelocity", _descriptor3, this);

          _initializerDefineProperty(this, "maxJumpTimes", _descriptor4, this);

          _defineProperty(this, "_curJumpTimes", 0);

          _initializerDefineProperty(this, "idleAnimClip", _descriptor5, this);

          _initializerDefineProperty(this, "moveAnimClip", _descriptor6, this);

          _initializerDefineProperty(this, "tutorial3D", _descriptor7, this);

          _defineProperty(this, "_rigidBody", null);

          _defineProperty(this, "_collider", null);

          _defineProperty(this, "_isMoving", false);

          _defineProperty(this, "_velocityScale", 1.0);

          _defineProperty(this, "_isInTheAir", false);

          _defineProperty(this, "_curentVerticalVelocity", 0.0);

          _defineProperty(this, "_anim", void 0);

          _defineProperty(this, "isRidingMoto", false);

          _defineProperty(this, "isCheckpoint", false);

          _defineProperty(this, "_tmp", v3());
        }

        start() {
          if (!this.mainCamera) {
            var _find;

            this.mainCamera = (_find = find('Main Camera')) === null || _find === void 0 ? void 0 : _find.getComponent(Camera);
          }

          this._rigidBody = this.node.getComponent(RigidBody); // this._anim = this.node.getComponent(SkeletalAnimation);
          // if (this._anim) {
          //     let clipArr = [
          //         this.idleAnimClip,
          //         this.moveAnimClip
          //     ];
          //     for (let i = 0; i < clipArr.length; ++i) {
          //         let clip = clipArr[i];
          //         if (clip) {
          //             if (!this._anim.getState(clip.name)) {
          //                 this._anim.addClip(clip);
          //             }
          //         }
          //     }
          //     if (this.idleAnimClip) {
          //         this._anim.play(this.idleAnimClip.name);
          //     }
          // }

          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementRelease, this);
          this._collider = this.getComponent(Collider);

          this._collider.on('onCollisionEnter', target => {
            if (target.otherCollider != target.selfCollider) {
              this.onLand();
            }
          });

          this.checkTrigger();
        }

        checkTrigger() {
          // Trigger
          this._collider = this.getComponent(Collider);

          this._collider.on('onTriggerEnter', target => {
            if (target.otherCollider.node.name == 'Checkpoint Collider') {
              console.log("Check point!");
              this.isCheckpoint = true; // disable tutorial

              this.tutorial3D.active = false;
            }
          });
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementRelease, this);
        }

        update(deltaTime) {
          if (this.node.getComponent(RigidBody).enabled == true) {
            if (this._isMoving) {
              this._tmp.set(this.node.forward);

              this._tmp.multiplyScalar(-1.0);

              this._tmp.multiplyScalar(this.velocity * this._velocityScale);

              this._tmp.multiplyScalar(deltaTime);

              this._tmp.add(this.node.position);

              this.node.setPosition(this._tmp);
            }
          }

          if (this._isInTheAir) {
            // if(this.jumpBeginAnimClip && this._anim){
            //     let state = this._anim.getState(this.jumpBeginAnimClip.name);
            //     if(state.isPlaying && state.current >= state.duration){
            //         if(this.jumpLoopAnimClip){
            //             this._anim.crossFade(this.jumpLoopAnimClip.name);
            //         }
            //     }
            // }
            if (!this._rigidBody) {
              this._curentVerticalVelocity -= 9.8 * deltaTime;
              var oldPos = this.node.position;
              var nextY = oldPos.y + this._curentVerticalVelocity * deltaTime;

              if (nextY <= 0) {
                this.onLand();
                nextY = 0.0;
              }

              this.node.setPosition(oldPos.x, nextY, oldPos.z);
            }
          }

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 8 || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 9) {
            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isOnMotobike && !this.isRidingMoto) {
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).playSound("WhistlingSound");
              this._collider.center.x = -1.2;
              this._rigidBody.enabled = false;
              this._collider.enabled = false;
              this.isRidingMoto = true;
              this.getComponent(SkeletalAnimation).play(characterAnim.moto_sit); // this.motobikeCollider.active = true;
            }
          }
        }

        onLand() {
          this._isInTheAir = false;
          this._curentVerticalVelocity = 0.0;
          this._curJumpTimes = 0;

          if (this.moveAnimClip) {
            if (this._isMoving) {
              this._anim.crossFade(this.moveAnimClip.name, 0.5);
            } else {
              this._anim.crossFade(this.idleAnimClip.name, 0.5);
            }
          }
        }

        onMovement(degree, offset) {
          log("alo");
          var cameraRotationY = 0;

          if (this.mainCamera) {
            cameraRotationY = this.mainCamera.node.eulerAngles.y;
          }

          this._velocityScale = offset;

          this._tmp.set(0, cameraRotationY + degree - 90 + 180, 0);

          this.node.setRotationFromEuler(this._tmp);

          if (this._anim) {
            if (!this._isMoving && !this._isInTheAir) {
              if (this.moveAnimClip) {
                this._anim.crossFade(this.moveAnimClip.name, 0.5);
              }
            }

            if (this.moveAnimClip) {
              // this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale;
              this._anim.getState(this.moveAnimClip.name).speed = 1.2;
            }
          }

          this._isMoving = true;
        }

        onMovementRelease() {
          if (!this._isInTheAir && this.idleAnimClip) {
            var _this$_anim;

            (_this$_anim = this._anim) === null || _this$_anim === void 0 ? void 0 : _this$_anim.crossFade(this.idleAnimClip.name, 0.5);
          }

          this._isMoving = false;

          if (this._rigidBody) {
            this._rigidBody.setLinearVelocity(Vec3.ZERO);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jumpVelocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxJumpTimes", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "idleAnimClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveAnimClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tutorial3D", [_dec5], {
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
//# sourceMappingURL=CharacterController.js.map