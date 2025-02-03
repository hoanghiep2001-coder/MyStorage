System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, UITransform, Constants, NodesController, GameController, AudioManager, IronSource, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TouchAreaController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "./NodesController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../Plugin/IronSource", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      NodesController = _unresolved_3.NodesController;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      IronSource = _unresolved_6.IronSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c960lg0NRGuppywOJ0wWQL", "TouchAreaController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchAreaController", TouchAreaController = (_dec = ccclass("TouchAreaController"), _dec2 = property(_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
        error: Error()
      }), IronSource) : IronSource), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec5 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec(_class = (_class2 = (_temp = class TouchAreaController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "IronSource", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "NodesController", _descriptor3, this);

          _initializerDefineProperty(this, "GameController", _descriptor4, this);

          _defineProperty(this, "pos", null);

          _defineProperty(this, "isDoneMergeStep1", false);

          _defineProperty(this, "isDoneMergeStep2", false);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.NodesController.hideMask.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchStart() {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).toStore) {
            this.GameController.installHandle();
            return;
          }

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch) {
            return;
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMergeStep2 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep2) {
            this.GameController.installHandle();
          }

          this.NodesController.Text_Tap.active = false;
          this.NodesController.hint_1.active = false;
          this.NodesController.hint_2.active = false;
          this.NodesController.hint_3.active = false; // this.IronSource.handleIronSourcePlaySound();
        }

        touchMove(event, stick) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch || (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            return;
          }

          const screenPos = event.getUILocation();
          this.pos = this.convertToLocalLocation(screenPos);
          this.NodesController.point.setPosition(this.pos);
          !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep1 && this.checkMergeFirstStep();
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep1 && this.checkMergeSecondStep();
        }

        touchEnd() {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch || (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            return;
          }

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = false;

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep1 && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMergeStep1) {
            if (!this.isDoneMergeStep1) {
              this.NodesController.init();
            } else {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isDoneMergeStep1 = true;
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.Dino_FightSound);
            }

            return;
          }

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMergeStep2 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFailStep1) {
            if (!this.isDoneMergeStep2) {
              this.NodesController.init();
            } else {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isDoneMergeStep2 = true;
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.Dino_FightSound);
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).dino_lines_2.forEach(line => line.active = true);
            }
          }
        }

        convertToLocalLocation(value) {
          const localX = value.x - 160 - this.node.getPosition().x;
          const localY = value.y - 240 - this.node.getPosition().y;
          const result = new Vec3(localX, localY, 0);
          return result;
        }

        checkMergeFirstStep() {
          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_1.length; i++) {
            let currentNode = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).points_1[i];
            let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
            let pointBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).point.getComponent(UITransform).getBoundingBox();

            if (nodeBdx.intersects(pointBdx)) {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isMergeStep1States[i]) {
                break;
              }

              for (let j = 0; j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isMergeStep1States.length; j++) {
                if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).isMergeStep1States[j]) {
                  this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).isMergeStep1States[i] = true;
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).dino_lines[i].active = true;
                  let stateArr = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).isMergeStep1States.filter(state => state === true);
                  const arrayOf6 = stateArr.slice(0, 6);

                  if (arrayOf6.every(state => state === true) && arrayOf6[4]) {
                    this.isDoneMergeStep1 = true;
                    (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).dino_lines.forEach(line => line.active = true);
                  }

                  break;
                }
              }

              break;
            }
          }
        }

        checkMergeSecondStep() {
          for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_2.length; i++) {
            let currentNode = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).points_2[i];
            let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
            let pointBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).point.getComponent(UITransform).getBoundingBox();

            if (nodeBdx.intersects(pointBdx)) {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isMergeStep2States[i]) {
                break;
              }

              for (let j = 0; j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isMergeStep2States.length; j++) {
                if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).isMergeStep2States[j]) {
                  this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).isMergeStep2States[i] = true;
                  (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).dino_lines_2[i].active = true;
                  let stateArr = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).isMergeStep2States.filter(state => state === true);
                  const arrayOf4 = stateArr.slice(0, 5);

                  if (arrayOf4.every(state => state === true && arrayOf4[3])) {
                    this.isDoneMergeStep2 = true;
                    (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).dino_lines_2.forEach(line => line.active = true);
                  }

                  break;
                }
              }

              break;
            }
          }
        } // protected update(dt: number): void {
        //       this.IronSource.handleMuteSoundIronSource();
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "IronSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec5], {
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
//# sourceMappingURL=TouchAreaController.js.map