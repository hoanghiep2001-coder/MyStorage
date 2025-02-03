System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UITransform, tween, Vec3, log, SkeletalAnimation, GameController, AudioManager, Constants, NodesController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GamePlay;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      log = _cc.log;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      NodesController = _unresolved_5.NodesController;
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
      }), AudioManager) : AudioManager), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _defineProperty(this, "isMergeStep", false);

          _defineProperty(this, "isMergeFlag", false);

          _defineProperty(this, "dino1", null);

          _defineProperty(this, "dino2", null);

          _defineProperty(this, "inPosMergeState", 0);
        }

        onLoad() {}

        start() {
          // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
          this.AudioManager.switchVolume((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.bgSound, 0.65); // this.unActiveUI();
          // this.unActiveDinos();
        }

        unActiveNuggets() {
          for (let index = 1; index < this.NodesController.Nuggets.length; index++) {
            const nugget = this.NodesController.Nuggets[index];
            nugget.active = false;
          }
        }

        checkMergeDino() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMerge1 ? this.handleStep2() : this.handleStep1();
        }

        checkMerge() {
          for (let i = 0; i < this.NodesController.Points.length; i++) {
            let currentNode = this.NodesController.Points[i];
            let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
            let pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();

            if (nodeBdx.intersects(pointBdx)) {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).mergeStatus[i]) {
                break;
              }

              for (let j = 0; j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).mergeStatus.length; j++) {
                if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).mergeStatus[j]) {
                  this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).mergeStatus[i] = true;
                  this.NodesController.NuggetLines[i].active = true;
                  let stateArr = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).mergeStatus.filter(state => state === true);
                  const arrayOf4 = stateArr.slice(0, 5);

                  if (arrayOf4.every(state => state === true) && arrayOf4[4]) {
                    console.log("done drag to Merge!!");
                    (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).isMerged = true;
                    this.merge();
                  }

                  break;
                }
              }

              break;
            }
          }
        }

        merge() {
          this.NodesController.NuggetLines.forEach(line => line.active = false);

          for (let index = 0; index < this.NodesController.Nuggets.length; index++) {
            const nugget5Pos = this.NodesController.Nuggets[4].getPosition();
            const nugget = this.NodesController.Nuggets[index];

            if (!nugget.name.includes("5")) {
              tween(nugget).to(1, {
                position: new Vec3(nugget5Pos)
              }, {
                easing: 'elasticInOut'
              }).call(() => {
                nugget.active = false;
                this.inPosMergeState += 1;
              }).start();
            }
          }
        }

        showSkibidiNugget() {
          console.log("Merged");
          this.isMergeFlag = true;
          let SkibidiNugget = this.NodesController.SkibidiNugget;
          SkibidiNugget.active = true;
          this.NodesController.Nuggets[4].active = false;
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Dino_MergeSound);
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.NuggetSound);
          this.NodesController.FX_Lightning.node.active = true;
          this.scheduleOnce(() => {
            this.showPopup();
          }, 1);
        }

        showPopup() {
          log("show popup");
          this.NodesController.Popup.active = true; // this.NodesController.btnFight.active = true;
          // tween(this.NodesController.btnFight)
          // .repeatForever(
          //     tween(this.NodesController.btnFight)
          //     .to(0.5, {scale: new Vec3(0.35, 0.35, 0.35)})
          //     .to(0.5, {scale: new Vec3(0.4, 0.4, 0.4)}, {easing: 'elasticOut'})
          // )
          // .start();
        }

        resetNuggetMerge(active) {
          for (let index = 0; index < this.NodesController.NuggetLines.length; index++) {
            const node = this.NodesController.NuggetLines[index];
            node.active = active;
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mergeStatus[0] = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mergeStatus[1] = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mergeStatus[2] = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mergeStatus[3] = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mergeStatus[4] = false;
        }

        nuggetShoot() {
          this.NodesController.Popup.active = false;
          this.NodesController.SkibidiNugget.getComponent(SkeletalAnimation).play("skibidi_nugget_atk");
          this.NodesController.FX_Fires[0].play();
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.BoomSound);
          this.scheduleOnce(() => {
            this.NodesController.FX_Fires[1].play();
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.BoomSound);
          }, 0.5);
          this.scheduleOnce(() => {
            this.NodesController.FX_Fires[2].play();
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.BoomSound);
            ;
            this.NodesController.Boss.active = false;
            this.NodesController.Boss_Die.active = true;
          }, 1);
          this.scheduleOnce(() => {
            this.NodesController.CTA.active = true;
            this.scheduleOnce(() => {
              tween(this.NodesController.CTA_btn).repeatForever(tween(this.NodesController.CTA_btn).to(0.5, {
                scale: new Vec3(0.5, 0.5, 0.5)
              }).to(0.5, {
                scale: new Vec3(0.45, 0.45, 0.45)
              }, {
                easing: 'elasticOut'
              })).start();
            }, 1.5);
          }, 3);
        }

        showCTA() {
          this.NodesController.CTA.active = true;
          this.scheduleOnce(() => {
            tween(this.NodesController.CTA_btn).repeatForever(tween(this.NodesController.CTA_btn).to(0.5, {
              scale: new Vec3(0.5, 0.5, 0.5)
            }).to(0.5, {
              scale: new Vec3(0.45, 0.45, 0.45)
            }, {
              easing: 'elasticOut'
            })).start();
          }, 1.5);
        }

        update(dt) {
          !this.isMergeFlag && this.inPosMergeState === 4 && this.showSkibidiNugget();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec4], {
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
//# sourceMappingURL=GamePlay.js.map