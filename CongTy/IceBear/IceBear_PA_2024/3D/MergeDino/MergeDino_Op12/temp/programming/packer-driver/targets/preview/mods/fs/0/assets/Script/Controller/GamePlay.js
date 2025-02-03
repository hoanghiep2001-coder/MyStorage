System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UITransform, ParticleSystem, tween, GameController, AudioManager, Constants, NodesController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GamePlay;

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
      ParticleSystem = _cc.ParticleSystem;
      tween = _cc.tween;
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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _defineProperty(this, "isMergeStep", false);

          _defineProperty(this, "isMergeFlag", false);

          _defineProperty(this, "dino1", null);

          _defineProperty(this, "dino2", null);
        }

        onLoad() {}

        start() {
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.bgSound);
          this.unActiveUI();
          this.unActiveDinos();
        }

        unActiveUI() {
          this.NodesController.hint_2.active = false;
          this.NodesController.hint_3.active = false;
        }

        unActiveDinos() {
          this.NodesController.Rex.active = false;
          this.NodesController.Rex2.active = false;

          for (var index = 1; index < this.NodesController.Dinos.length; index++) {
            var dino = this.NodesController.Dinos[index];
            dino.active = false;
          }
        }

        handleBuyDino() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).countClick += 1;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).Money = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).Money - (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DinoPrice;
          this.NodesController.Label_Money.string = "" + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).Money;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DinoPrice += 200;
          this.NodesController.Label_Price.string = "" + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DinoPrice;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).countClick >= 3) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isDoneAddDino = true;
            this.NodesController.hint_1.active = false;
            this.NodesController.hint_2.active = true;
          }
        }

        showDino() {
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Dino_ScreamSound);
          this.NodesController.Dinos[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).countClick].active = true;
        }

        showMergeStep() {
          this.NodesController.Btn_AddDino.active = false;
          this.NodesController.Label_Money.node.parent.active = false;
        }

        checkMergeDino() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMerge1 ? this.handleStep2() : this.handleStep1();
        }

        handleStep1() {
          for (var index = 0; index < this.NodesController.dinoPoints.length; index++) {
            var node = this.NodesController.dinoPoints[index];
            var bdx = node.getComponent(UITransform).getBoundingBox();
            var pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();
            var dinoLine1 = this.NodesController.DinoLines[0];
            var dinoLine2 = this.NodesController.DinoLines[1];

            if (pointBdx.intersects(bdx) && !this.NodesController.DinoLines[index].active) {
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).dinoChoosen) (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).dinoChoosen = index + 1;
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
              this.NodesController.DinoLines[index].active = true;
              dinoLine1.active && dinoLine2.active && this.setDoneMerge();
            }
          }
        }

        handleStep2() {
          for (var index = 0; index < this.NodesController.dinoPoints2.length; index++) {
            var node = this.NodesController.dinoPoints2[index];
            var bdx = node.getComponent(UITransform).getBoundingBox();
            var pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();
            var dinoLine1 = this.NodesController.DinoLines2[0];
            var dinoLine2 = this.NodesController.DinoLines2[1];

            if (pointBdx.intersects(bdx) && !this.NodesController.DinoLines2[index].active) {
              if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).dinoChoosen) (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).dinoChoosen = index + 1;
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
              this.NodesController.DinoLines2[index].active = true;
              dinoLine1.active && dinoLine2.active && this.setDoneMerge();
            }
          }
        }

        setDoneMerge() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMerged = true;
          this.NodesController.hint_2.active = false;
        }

        unActiveDinoLines() {
          for (var index = 0; index < this.NodesController.DinoLines.length; index++) {
            var node = this.NodesController.DinoLines[index];
            node.active = false;
          }
        }

        mergeDino() {
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Dino_FightSound);
          this.isMergeFlag = true;
          var firstDino;
          var secondDino;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMerge1) {
            firstDino = this.NodesController.Dinos[2];
            secondDino = this.NodesController.Dinos[3];
          } else {
            firstDino = this.NodesController.Dinos[0];
            secondDino = this.NodesController.Dinos[1];
          }

          switch ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dinoChoosen) {
            case 1:
              this.setMergeAnim(firstDino, secondDino);
              break;

            case 2:
              this.setMergeAnim(secondDino, firstDino);
              break;

            default:
              break;
          }
        }

        setMergeAnim(firstDino, secondDino) {
          var dino2Pos = secondDino.getPosition();
          tween(firstDino).to(0.3, {
            position: dino2Pos
          }).call(() => {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.Dino_MergeSound);
            firstDino.active = false;
            secondDino.active = false;
            this.activeRex(dino2Pos);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMerged = false;
            this.isMergeFlag = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dinoChoosen = null;
          }).start();
        }

        activeRex(dino2Pos) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMerge1) {
            this.NodesController.Rex2.setPosition(dino2Pos);
            this.NodesController.Rex2.active = true;
            this.NodesController.Rex2.getChildByName("Merge FX").getChildByName("Cube").getComponent(ParticleSystem).play(); // this.NodesController.hint_2.active = true;

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isDonePA = true;
          } else {
            this.NodesController.Rex.setPosition(dino2Pos);
            this.NodesController.Rex.active = true;
            this.NodesController.FX_Merge.node.getChildByName("Cube").getComponent(ParticleSystem).play();
            this.NodesController.hint_3.active = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isDoneMerge1 = true;
          }
        }

        update(dt) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneAddDino && !this.isMergeStep && this.showMergeStep();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMerged && !this.isMergeFlag && this.mergeDino();
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GamePlay.js.map