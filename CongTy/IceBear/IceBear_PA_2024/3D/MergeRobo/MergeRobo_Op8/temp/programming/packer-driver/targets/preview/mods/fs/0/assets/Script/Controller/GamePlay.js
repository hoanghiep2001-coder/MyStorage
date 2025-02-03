System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Component, math, SkeletalAnimation, Vec3, tween, easing, GameController, AudioManager, Constants, NodesController, BossController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "./NodesController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossController(extras) {
    _reporterNs.report("BossController", "./BossController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      math = _cc.math;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      easing = _cc.easing;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      NodesController = _unresolved_5.NodesController;
    }, function (_unresolved_6) {
      BossController = _unresolved_6.BossController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec5 = property(_crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
        error: Error()
      }), BossController) : BossController), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _initializerDefineProperty(this, "BossController", _descriptor4, this);

          _defineProperty(this, "isMergeStep1Flag", false);

          _defineProperty(this, "isMergeStep2Flag", false);

          _defineProperty(this, "isDonePA", false);
        }

        onLoad() {}

        start() {
          this.NodesController.Text_Tap.active = false; // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        startHintToMerge(robo1, robo2) {
          var robo1Pos = robo1.getPosition();
          var robo2Pos = robo2.getPosition();
          tween(robo1).to(0.5, {
            position: new math.Vec3(robo1Pos.x, -12.1, robo1Pos.z)
          }, {
            easing: easing.elasticInOut
          }).start();
          tween(robo2).to(0.5, {
            position: new math.Vec3(robo2Pos.x, -12.1, robo2Pos.z)
          }, {
            easing: easing.elasticInOut
          }).start();
        }

        mergeStep1() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch = false;
          this.isMergeStep1Flag = true;
          var robo1 = this.NodesController.robo_Step1[0];
          var robo2 = this.NodesController.robo_Step1[1];
          var robo3 = this.NodesController.robo_Step1[2];
          var posRobo3 = robo3.getPosition();
          this.NodesController.robo_Step1.forEach(robo => robo.getComponent(SkeletalAnimation).play("pickup"));
          this.startHintToMerge(robo1, robo2);
          this.scheduleOnce(() => {
            tween(robo1).to(0.5, {
              position: posRobo3
            }).start();
            tween(robo2).to(0.5, {
              position: posRobo3
            }).call(() => {
              this.NodesController.Spine_Flash.active = true;
              this.NodesController.hideMask.getComponent(Animation).play();
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.MergeSound);
              robo1.active = false;
              robo2.active = false;
              this.scheduleOnce(() => {
                this.NodesController.optimus_Step1.active = true;
                this.BossController.playDanceAnim();
              }, 0.5);
            }).start();
          }, 0.5);
          this.scheduleOnce(() => {
            this.showStep2();
          }, 4);
        }

        showStep2() {
          this.NodesController.hideMask.getComponent(Animation).play();
          this.scheduleOnce(() => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanTouch = true;
            this.NodesController.Text_Tap.active = true;
            this.activeEasingTweenForNode(this.NodesController.Text_Tap, 0.35, 0.3);
            this.NodesController.optimus_Step1.setRotationFromEuler(0, 180, 0);
            this.NodesController.optimus_Step1.children[0].getChildByName("Level").setRotationFromEuler(0, -180, 0);
            this.NodesController.optimus_Step1.children[0].getChildByName("Level").setPosition(0.008, 0.025, -0.006);
            this.BossController.playMuscleAnim();
          }, 0.5);
        }

        activeEasingTweenForNode(node, scaleUp, scaleDown) {
          tween(node).repeatForever(tween(node).to(0.5, {
            scale: new Vec3(scaleUp, scaleUp, scaleUp)
          }).to(0.5, {
            scale: new Vec3(scaleDown, scaleDown, scaleDown)
          }, {
            easing: easing.elasticOut
          })).start();
        }

        showCTA() {
          this.isDonePA = true;
          this.NodesController.CTA.active = true;
          this.activeEasingTweenForNode(this.NodesController.CTA_btn, 0.5, 0.45);
        }

        update(dt) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GameData.isDoneStep1 && !this.isMergeStep1Flag && this.mergeStep1();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDonePA && !this.isDonePA && this.showCTA();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec2], {
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BossController", [_dec5], {
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