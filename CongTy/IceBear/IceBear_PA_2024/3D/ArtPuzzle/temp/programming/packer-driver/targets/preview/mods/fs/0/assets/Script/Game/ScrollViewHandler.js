System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, instantiate, log, Node, ScrollView, Sprite, tween, UITransform, Vec3, UIController, Constants, GameCommon, GamePlay, GameController, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ScrollViewHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommon(extras) {
    _reporterNs.report("GameCommon", "../Data/GameCommon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "./GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      Component = _cc.Component;
      easing = _cc.easing;
      instantiate = _cc.instantiate;
      log = _cc.log;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UIController = _unresolved_2.UIController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      GameCommon = _unresolved_4.GameCommon;
    }, function (_unresolved_5) {
      GamePlay = _unresolved_5.GamePlay;
    }, function (_unresolved_6) {
      GameController = _unresolved_6.GameController;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cd0cpcm4tBeYvcI30Hkdcj", "ScrollViewHandler", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollViewHandler", ScrollViewHandler = (_dec = ccclass('ScrollViewHandler'), _dec2 = property(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec5 = property(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
        error: Error()
      }), GamePlay) : GamePlay), _dec(_class = (_class2 = (_temp = class ScrollViewHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIController", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "GameController", _descriptor3, this);

          _initializerDefineProperty(this, "GamePlay", _descriptor4, this);

          _defineProperty(this, "prevPos", null);

          _defineProperty(this, "pickingStep", 0);
        }

        start() {
          this.UIController.Items.forEach(item => {
            item.on(Node.EventType.TOUCH_START, this.onItemTouchStart, this);
            item.on(Node.EventType.TOUCH_MOVE, this.onItemTouchMove, this);
            item.on(Node.EventType.TOUCH_END, this.onItemTouchEnd, this);
            item.on(Node.EventType.TOUCH_CANCEL, this.onItemTouchEnd, this);
          });
        }

        onItemClicked(event, customEventData) {
          this.UIController.Tutorial.active = false;
          console.log("Item clicked: ", customEventData);
        }

        onItemTouchStart(event) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dissolvedItemNumber >= 20) {
            this.GameController.installHandle();
            return;
          }

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) return; // ironsource

          this.GamePlay.handleIronSourcePlaySound();
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.clickSound);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;
          this.node.getComponent(ScrollView).enabled = false;
          var item = event.target;
          var subItem = instantiate(item);
          var pos = this.convertToNodeSpace(event.getUILocation());
          var pickingItem = item.children[0].name;
          var match = pickingItem.match(/Step(\d+)_/);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode = subItem;
          this.prevPos = pos;
          this.pickingStep = Number(match[1]);
          this.GamePlay.filterSameArea(pickingItem);
          this.UIController.ImpactArea.addChild((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode);
          item.children[0].getComponent(Sprite).enabled = false;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode.setPosition(pos);
          this.scaleUpNode((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode);
          this.UIController.Tutorial.active = false;
          log("picking step: " + this.pickingStep + ", item: " + pickingItem);
        }

        onItemTouchMove(event) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick) return;
          var item = event.target;
          var pos = this.convertToNodeSpace(event.getUILocation());

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode.setPosition(pos);
          }

          if (this.checkImpactArea((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).sameArea) && this.pickingStep === (_crd && GameCommon === void 0 ? (_reportPossibleCrUseOfGameCommon({
            error: Error()
          }), GameCommon) : GameCommon).currentStep) {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.matchSound);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanClick = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isDissolveIn = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).targetNode.active = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode.active = false;
            this.prevPos = null;
            this.node.getComponent(ScrollView).enabled = true;
            this.UIController.ImpactArea.removeChild((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode);
            item.active = false;
            item.removeFromParent();
            log("Correct!! dissolving!!");
          }
        }

        onItemTouchEnd(event) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick || !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode) return;
          var item = event.target;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = false;

          if (this.pickingStep !== (_crd && GameCommon === void 0 ? (_reportPossibleCrUseOfGameCommon({
            error: Error()
          }), GameCommon) : GameCommon).currentStep || !this.checkImpactArea((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).sameArea)) {
            this.turnBack((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode, item);
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.WrongSound);
          }
        }

        convertToNodeSpace(screenPos) {
          var pos = new Vec3(screenPos.x - 160, screenPos.y - 240, 0);
          return pos;
        }

        scaleUpNode(Node) {
          log("saleUp ```");
          var scaleNumber = 2;
          if (Node.name === "item_16" || Node.name === "item_17" || Node.name === "item_8") scaleNumber = 3.5;
          tween(Node).to(0.5, {
            scale: new Vec3(scaleNumber, scaleNumber, scaleNumber)
          }, {
            easing: easing.elasticOut
          }).start();
        }

        turnBack(dragNode, item) {
          log("TurnBack ```");
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanClick = false;
          this.node.getComponent(ScrollView).enabled = true;
          tween(dragNode).to(0.5, {
            scale: new Vec3(1, 1, 1),
            position: this.prevPos
          }).call(() => {
            this.prevPos = null;
            item.children[0].getComponent(Sprite).enabled = true;
            dragNode.active = false;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode = null;
            this.node.getComponent(ScrollView).enabled = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isCanClick = true;
          }).start();
        }

        checkImpactArea(area) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).currentDragNode) {
            var nodeBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).currentDragNode.getComponent(UITransform).getBoundingBox();
            var impactArea = area.getComponent(UITransform).getBoundingBox();
            if (impactArea.intersects(nodeBdx)) return true;else return false;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec5], {
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
//# sourceMappingURL=ScrollViewHandler.js.map