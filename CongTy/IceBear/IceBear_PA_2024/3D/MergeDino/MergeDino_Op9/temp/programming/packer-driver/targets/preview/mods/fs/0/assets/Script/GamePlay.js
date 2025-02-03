System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Camera, Component, Graphics, math, Node, PhysicsSystem, SkeletalAnimation, Vec3, UITransform, ParticleSystem, CharacterControl, RangerControl, GameController, AudioManager, JoyStick, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterControl(extras) {
    _reporterNs.report("CharacterControl", "./CharacterControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRangerControl(extras) {
    _reporterNs.report("RangerControl", "./RangerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      math = _cc.math;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      CharacterControl = _unresolved_2.CharacterControl;
    }, function (_unresolved_3) {
      RangerControl = _unresolved_3.RangerControl;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      JoyStick = _unresolved_6.JoyStick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(Camera), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec5 = property(_crd && CharacterControl === void 0 ? (_reportPossibleCrUseOfCharacterControl({
        error: Error()
      }), CharacterControl) : CharacterControl), _dec6 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec7 = property(Graphics), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(ParticleSystem), _dec11 = property(ParticleSystem), _dec12 = property(ParticleSystem), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property([Node]), _dec20 = property([Node]), _dec21 = property([Node]), _dec22 = property([_crd && RangerControl === void 0 ? (_reportPossibleCrUseOfRangerControl({
        error: Error()
      }), RangerControl) : RangerControl]), _dec23 = property([Node]), _dec24 = property([Node]), _dec25 = property([Node]), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Camera", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "CharacterControl", _descriptor4, this);

          _initializerDefineProperty(this, "JoyStick", _descriptor5, this);

          _initializerDefineProperty(this, "Graphics", _descriptor6, this);

          _initializerDefineProperty(this, "Point", _descriptor7, this);

          _initializerDefineProperty(this, "HideMask", _descriptor8, this);

          _initializerDefineProperty(this, "FX_FireBall", _descriptor9, this);

          _initializerDefineProperty(this, "FX_Explosion", _descriptor10, this);

          _initializerDefineProperty(this, "FX_Merge", _descriptor11, this);

          _initializerDefineProperty(this, "Boss", _descriptor12, this);

          _initializerDefineProperty(this, "line_white", _descriptor13, this);

          _initializerDefineProperty(this, "MergeUnit", _descriptor14, this);

          _initializerDefineProperty(this, "text", _descriptor15, this);

          _initializerDefineProperty(this, "text_90Per", _descriptor16, this);

          _initializerDefineProperty(this, "hand", _descriptor17, this);

          _initializerDefineProperty(this, "ParentSmallUnit", _descriptor18, this);

          _initializerDefineProperty(this, "SmallUnit", _descriptor19, this);

          _initializerDefineProperty(this, "SmallUnitMerge", _descriptor20, this);

          _initializerDefineProperty(this, "RangerControls", _descriptor21, this);

          _initializerDefineProperty(this, "redLines", _descriptor22, this);

          _initializerDefineProperty(this, "PointRobos", _descriptor23, this);

          _initializerDefineProperty(this, "Lines", _descriptor24, this);

          _initializerDefineProperty(this, "canvas2D", _descriptor25, this);

          _initializerDefineProperty(this, "Spine_Blast", _descriptor26, this);

          _initializerDefineProperty(this, "Spine_Blast2", _descriptor27, this);

          _initializerDefineProperty(this, "Spine_Blast3", _descriptor28, this);

          _initializerDefineProperty(this, "TryAgain", _descriptor29, this);

          _defineProperty(this, "currentPos", null);

          _defineProperty(this, "initPos", null);

          _defineProperty(this, "currentIndex", 0);

          _defineProperty(this, "isTouch", false);

          _defineProperty(this, "isRotate", false);

          _defineProperty(this, "isMerged", false);

          _defineProperty(this, "isPlayed", false);

          _defineProperty(this, "isFighting", false);

          _defineProperty(this, "isPlayBgSound", false);

          _defineProperty(this, "isDoneMerge", [false, false, false, false, false, false, false, false]);

          _defineProperty(this, "RoboStates", [{
            x: -2.2,
            y: -15.5,
            z: 9.2
          }, {
            x: -2.2,
            y: -15.5,
            z: 10.8
          }, {
            x: -1.1,
            y: -15.5,
            z: 10.8
          }, {
            x: 0,
            y: -15.5,
            z: 9.2
          }, {
            x: 0,
            y: -15.5,
            z: 10.8
          }, {
            x: 0,
            y: -15.5,
            z: 7.6
          }, {
            x: -1.1,
            y: -15.5,
            z: 7.6
          }, {
            x: -2.2,
            y: -15.5,
            z: 7.6
          }]);

          _defineProperty(this, "physics", PhysicsSystem.instance);
        }

        onLoad() {
          PhysicsSystem.instance.enable = true;
          this.text.active = false;
          this.Lines.forEach(line => line.active = false);
          this.TryAgain.active = false;
        }

        start() {
          // this.AudioManager.bgSound.play();
          this.handleGamePlay();
          this.registerEvent();
        }

        handleGamePlay() {
          this.scheduleOnce(() => {
            this.node.getComponent(Animation).play("UIAnim");
          }, 0.5);
          this.scheduleOnce(() => {
            if (this.isPlayed) return;
            this.SmallUnitMerge.forEach((baby, index) => {
              baby.active = false;
            });
          }, 2.5);
          this.scheduleOnce(() => {
            if (this.isPlayed) return;
            this.SmallUnitMerge.forEach((baby, index) => {
              baby.active = true;
            });
            this.node.getComponent(Animation).play("UIAnim");
          }, 3.6);
          this.scheduleOnce(() => {
            if (this.isPlayed) return;
            this.SmallUnitMerge.forEach((baby, index) => {
              baby.active = false;
            });
          }, 5.6);
          this.scheduleOnce(() => {
            if (this.isPlayed) return;
            this.SmallUnitMerge.forEach((baby, index) => {
              baby.active = true;
            });
            this.MergeUnit.active = false; // this.text.active = true;
            // this.text.getComponent(Animation).play("Blink");

            this.node.getComponent(Animation).play("UI_HintLoopAnim");
          }, 6.6);
          this.Boss.getComponent(SkeletalAnimation).play("dancing");
          this.MergeUnit.getComponent(SkeletalAnimation).play("dancing");
          this.SmallUnit.forEach(ranger => {
            ranger.getComponent(Animation).play("idle");
          });
        }

        handleFight() {
          if (this.isFighting) return;
          this.HideMask.off(Node.EventType.TOUCH_START);
          this.AudioManager.attackSound.play();
          this.AudioManager.attackSound.loop = true;
          this.isFighting = true;
          this.Boss.getComponent(SkeletalAnimation).play("atk");
          this.MergeUnit.getComponent(SkeletalAnimation).play("atk");
          this.scheduleOnce(() => {
            this.Spine_Blast2.getComponent("sp.Skeleton").setAnimation(0, "2", false);
            this.AudioManager.blastSound.play();
          }, 0.7);
          this.scheduleOnce(() => {
            this.Spine_Blast.getComponent("sp.Skeleton").setAnimation(0, "2", false);
            this.AudioManager.blastSound.play();
          }, 0.5);
          this.scheduleOnce(() => {
            this.Spine_Blast3.getComponent("sp.Skeleton").setAnimation(0, "2", false);
            this.AudioManager.blastSound.play();
          }, 0.9);
          this.scheduleOnce(() => {
            this.Boss.getComponent(SkeletalAnimation).play("dancing");
            this.MergeUnit.getComponent(SkeletalAnimation).play("die");
            this.AudioManager.attackSound.stop();
          }, 2);
          this.scheduleOnce(() => {
            this.MergeUnit.getComponent(SkeletalAnimation).stop(); // this.MergeUnit.active = false;

            this.Boss.getComponent(SkeletalAnimation).play("dancing");
            this.handleEndGame();
            this.AudioManager.loseSound.play();
          }, 3);
        }

        registerEvent() {
          this.HideMask.on(Node.EventType.TOUCH_START, this.onHideMaskTouchStart, this);
          this.HideMask.on(Node.EventType.TOUCH_MOVE, this.onHideMaskTouchMove, this);
          this.HideMask.on(Node.EventType.TOUCH_END, this.onHideMaskTouchEnd, this);
          this.HideMask.on(Node.EventType.TOUCH_CANCEL, this.onHideMaskTouchEnd, this);
        }

        handleIronSource() {
          if (this.isPlayBgSound) {
            return;
          }

          this.isPlayBgSound = true;
          this.AudioManager.bgSound.play();
        }

        onHideMaskTouchStart() {
          this.isPlayed = true;
          this.isTouch = true;

          if (!this.isMerged) {
            this.node.getComponent(Animation).play("UIAnim");
            this.node.getComponent(Animation).stop();
            this.ParentSmallUnit.forEach((unit, index) => {
              unit.setPosition(new math.Vec3(this.RoboStates[index].x, this.RoboStates[index].y, this.RoboStates[index].z));
              unit.setScale(new math.Vec3(8, 8, 8));
            });
            this.redLines.forEach(line => line.active = false);
            this.hand.active = false;
            this.SmallUnitMerge.forEach(unit => {
              unit.active = true;
              unit.setScale(new math.Vec3(5, 5, 5));
              unit.setPosition(new math.Vec3(0, 0, 0));
              this.MergeUnit.active = false;
            });
          }

          this.handleIronSource();
        }

        onHideMaskTouchMove(e) {
          this.JoyStick.stickMove(e, this.Point);
          this.currentPos = this.JoyStick.pos;
          this.initPos = new Vec3(this.currentPos.x - 1, this.currentPos.y, 0);
          this.Point.setPosition(this.currentPos);
          this.handleCheckCollideRoboPoint();
        }

        onHideMaskTouchEnd() {
          this.isTouch = false;
          var result = this.isDoneMerge.find(status => {
            return status === false;
          });

          if (String(result) === "false") {
            this.mergeFail();
          } else {
            this.mergeSuccess();
          }
        }

        handleCheckCollideRoboPoint() {
          this.PointRobos.forEach((point, index) => {
            if (point.getComponent(UITransform).getBoundingBox().intersects(this.Point.getComponent(UITransform).getBoundingBox())) {
              this.handleCancelCallBack(index);
            }
          });
        }

        handleCancelCallBack(index) {
          if (this.isDoneMerge[index]) {
            return;
          }

          this.isDoneMerge[index] = true;
          this.Lines[index].active = true;
          this.SmallUnitMerge[index].getComponent(SkeletalAnimation).play("dancing");
        }

        mergeSuccess() {
          if (this.isMerged) {
            this.text.active = false;
            this.line_white.active = false;
            this.CharacterControl.isRun = true;
            this.RangerControls.forEach(component => {
              component.isRun = true;
            }); // this.HideMask.off(Node.EventType.TOUCH_START);

            this.HideMask.off(Node.EventType.TOUCH_MOVE);
            return;
          }

          this.Camera.getComponent(Animation).play("CameraAnim");
          this.Lines.forEach(line => line.active = false);
          this.text_90Per.active = false;
          this.scheduleOnce(() => {
            this.FX_Merge.play();
            this.FX_Merge.loop = true;
          }, 1);
          this.scheduleOnce(() => {
            this.isMerged = true;
            this.node.getComponent(Animation).stop();
            this.MergeUnit.active = true;
            this.hand.active = false;
            this.node.getComponent(Animation).play("UI_MergeAnim");
            this.scheduleOnce(() => {
              this.FX_Merge.loop = false;
              this.SmallUnitMerge.forEach(ranger => {
                ranger.active = false;
              });
              this.AudioManager.mergeSound.play();
            }, 0.2);
            this.scheduleOnce(() => {
              this.text.active = true;
              this.text.getComponent(Animation).play("Blink");
            }, 1);
          }, 2);
        }

        mergeFail() {
          this.isDoneMerge[0] = false;
          this.isDoneMerge[1] = false;
          this.isDoneMerge[2] = false;
          this.isDoneMerge[3] = false;
          this.isDoneMerge[4] = false;
          this.isDoneMerge[5] = false;
          this.isDoneMerge[6] = false;
          this.isDoneMerge[7] = false;
          this.Lines.forEach(line => line.active = false);
          this.SmallUnitMerge.forEach(unit => unit.getComponent(SkeletalAnimation).play("idle"));
        }

        handleEndGame() {
          this.TryAgain.active = true;
          this.TryAgain.getComponent(Animation).play("TryAgain_Anim"); // others

          this.TryAgain.on(Node.EventType.TOUCH_START, () => {
            console.log("install");
            this.AudioManager.bgSound.stop();
            this.GameController.installHandle();
          }); // mtg && applovin
          // this.HideMask.on(Node.EventType.TOUCH_START, () => {
          //     console.log("install");
          //     this.AudioManager.bgSound.stop();
          //     this.GameController.installHandle();
          // });
        }

        update(dt) {
          if (this.CharacterControl.isFight && !this.isFighting) this.handleFight();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "CharacterControl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "JoyStick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Graphics", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Point", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "FX_FireBall", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "FX_Explosion", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "FX_Merge", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "line_white", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "MergeUnit", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "text_90Per", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "hand", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "ParentSmallUnit", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "SmallUnit", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "SmallUnitMerge", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "RangerControls", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "redLines", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "PointRobos", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Lines", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "canvas2D", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Blast", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Blast2", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Blast3", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "TryAgain", [_dec30], {
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
//# sourceMappingURL=GamePlay.js.map