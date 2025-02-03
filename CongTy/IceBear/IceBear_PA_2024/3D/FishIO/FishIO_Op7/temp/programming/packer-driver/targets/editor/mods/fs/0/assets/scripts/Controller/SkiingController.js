System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Component, Node, ParticleSystem2D, UITransform, Vec3, Constants, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, SkiingController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem2D = _cc.ParticleSystem2D;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1adfbnfn7NPWbc8XQisN+2p", "SkiingController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkiingController", SkiingController = (_dec = ccclass('SkiingController'), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(ParticleSystem2D), _dec(_class = (_class2 = (_temp = class SkiingController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "Button_Left", _descriptor2, this);

          _initializerDefineProperty(this, "Button_Up", _descriptor3, this);

          _initializerDefineProperty(this, "Character", _descriptor4, this);

          _initializerDefineProperty(this, "Character_skateBoard", _descriptor5, this);

          _initializerDefineProperty(this, "Character_default", _descriptor6, this);

          _initializerDefineProperty(this, "Character_Lose", _descriptor7, this);

          _initializerDefineProperty(this, "Shark", _descriptor8, this);

          _initializerDefineProperty(this, "SkateBoard", _descriptor9, this);

          _initializerDefineProperty(this, "SharkHunt", _descriptor10, this);

          _initializerDefineProperty(this, "FlagPoint", _descriptor11, this);

          _initializerDefineProperty(this, "FlagJumpPoint", _descriptor12, this);

          _initializerDefineProperty(this, "readyJumpPoint", _descriptor13, this);

          _initializerDefineProperty(this, "PS_FunSui", _descriptor14, this);

          _defineProperty(this, "flag", false);

          _defineProperty(this, "flagMove", false);

          _defineProperty(this, "flagJump", false);

          _defineProperty(this, "flagCanJump", false);

          _defineProperty(this, "jumpTime", 0);

          _defineProperty(this, "jumpHeight", 200);
        }

        start() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).forceReplay) {
            this.node.active = false;
            return;
          } // ironsource
          // else {
          //     this.AudioManager.playSound(Constants.SoundTrack.Skiing_BgSound);
          // };

        }

        isIntersectsFlagPoint() {
          let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
          let flagPointBdx = this.FlagPoint.getComponent(UITransform).getBoundingBox();
          if (characterBdx.intersects(flagPointBdx)) return true;
          return false;
        }

        setIsCompleteVideo() {
          this.flagMove = true;
          this.flag = true;
          this.SharkHunt.active = false;
          this.Character_default.active = false;
          this.Character_Lose.active = true;
          this.Character.getComponent(Animation).play("Skiing_CharAnim");
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Skiing_ScreamSound);
          this.scheduleOnce(() => {
            this.PS_FunSui.resetSystem();
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.Skiing_EatSound); // this.SkateBoard.active = false;
            // this.Character_Lose.active = false;
          }, 0.3);
          this.scheduleOnce(() => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCompleteVideo = true;
            this.node.active = false;
            this.AudioManager.stopSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.Skiing_BgSound);
          }, 1);
        }

        characterMove(dt) {
          let characterOldPos = new Vec3();
          this.Character.getPosition(characterOldPos);
          let targetPos = new Vec3(characterOldPos.x + dt * 4000, characterOldPos.y, characterOldPos.z);
          let newPos = new Vec3();
          Vec3.lerp(newPos, characterOldPos, targetPos, dt * 5); // Sử dụng lerp để tạo chuyển động mượt mà

          this.Character.setPosition(newPos);
        }

        isIntersectsReadyJumpPoint(dt) {
          if (!this.readyJumpPoint.active) return false;
          let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
          let flagPointBdx = this.readyJumpPoint.getComponent(UITransform).getBoundingBox();

          if (characterBdx.intersects(flagPointBdx)) {
            this.getComponent(Animation).play("Skiing_HintJump");
            this.readyJumpPoint.active = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanClickBtnLeft = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isClickBtnLeft = false;
            return true;
          }
        }

        isIntersectsFlagJumpPoint(dt) {
          let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
          let flagPointBdx = this.FlagJumpPoint.getComponent(UITransform).getBoundingBox();

          if (characterBdx.intersects(flagPointBdx)) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isOnGround = true; // Nên cập nhật ở đây

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isJumping = false;
            this.flagCanJump = false;
            return true;
          } else {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isOnGround = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanClick = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isJumping = true;
            this.flagCanJump = true;
            this.characterFall(dt);
            return false;
          }
        }

        characterJump(dt) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isJumping = true;
          let characterOldPos = this.Character.getPosition();
          this.Character.setPosition(characterOldPos.x, characterOldPos.y + dt * 1400, characterOldPos.z);
        }

        characterFall(dt) {
          let characterOldPos = new Vec3();
          this.Character.getPosition(characterOldPos);
          let targetPos = new Vec3(characterOldPos.x, characterOldPos.y - dt * 8000, characterOldPos.z);
          let newPos = new Vec3();
          Vec3.lerp(newPos, characterOldPos, targetPos, dt * 5); // Sử dụng lerp để tạo chuyển động mượt mà

          this.Character.setPosition(newPos);
        }

        update(dt) {
          !this.flagMove && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnLeft && this.characterMove(dt);
          !this.flagJump && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnJump && this.characterJump(dt);
          !this.flag && this.isIntersectsFlagPoint() && this.setIsCompleteVideo();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnLeft && this.isIntersectsFlagJumpPoint(dt);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickBtnLeft && this.isIntersectsReadyJumpPoint(dt);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_Left", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_Up", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Character", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Character_skateBoard", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Character_default", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Character_Lose", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Shark", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "SkateBoard", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "SharkHunt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "FlagPoint", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "FlagJumpPoint", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "readyJumpPoint", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "PS_FunSui", [_dec15], {
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
//# sourceMappingURL=SkiingController.js.map