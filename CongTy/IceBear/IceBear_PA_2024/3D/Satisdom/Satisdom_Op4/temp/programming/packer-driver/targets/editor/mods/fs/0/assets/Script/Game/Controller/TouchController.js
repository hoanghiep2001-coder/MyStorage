System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, log, Node, tween, Vec3, NodeController, Constants, BottleItem, GamePlay, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, executeInEditMode, TouchController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNodeController(extras) {
    _reporterNs.report("NodeController", "./NodeController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBottleItem(extras) {
    _reporterNs.report("BottleItem", "../Other/BottleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "../Other/GamePlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      log = _cc.log;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NodeController = _unresolved_2.NodeController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      BottleItem = _unresolved_4.BottleItem;
    }, function (_unresolved_5) {
      GamePlay = _unresolved_5.GamePlay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "555fbtXYS1MyrKSGXDGNOn2", "TouchController", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("TouchController", TouchController = (_dec = ccclass('TouchController'), _dec2 = property(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
        error: Error()
      }), GamePlay) : GamePlay), _dec3 = property(_crd && NodeController === void 0 ? (_reportPossibleCrUseOfNodeController({
        error: Error()
      }), NodeController) : NodeController), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = class TouchController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "NodeController", _descriptor2, this);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.NodeController.Tubes.forEach(tube => {
            tube.on(Node.EventType.TOUCH_START, this.tubeTouchStart, this);
          });
        }

        tubeTouchStart(e) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch) return;
          let clickedNode = e.target;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TubeClicked) {
            this.isPickCorrectTube((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TubeClicked, clickedNode) ? this.GamePlay.handleMoveToAnotherTube((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TubeClicked, clickedNode) : console.log("wrong");
            this.scaleDownTube((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TubeClicked);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TubeClicked = null;
          } else {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TubeClicked = clickedNode;
            this.scaleUpTube(clickedNode);
            console.log("wrong");
            log("------------------------");
          }
        }

        scaleUpTube(tube) {
          tween(tube).to(0.5, {
            scale: new Vec3(0.17, 0.17, 0.17)
          }, {
            easing: easing.elasticOut
          }).start();
        }

        scaleDownTube(tube) {
          tween(tube).to(0.5, {
            scale: new Vec3(0.15, 0.15, 0.15)
          }, {
            easing: easing.elasticOut
          }).start();
        }

        isPickCorrectTube(tube1, tube2) {
          let reuslt = false;
          let tube1BottleItemComponent = tube1.getComponent(_crd && BottleItem === void 0 ? (_reportPossibleCrUseOfBottleItem({
            error: Error()
          }), BottleItem) : BottleItem);
          let tube2BottleItemComponent = tube2.getComponent(_crd && BottleItem === void 0 ? (_reportPossibleCrUseOfBottleItem({
            error: Error()
          }), BottleItem) : BottleItem);
          let colorA = this.GamePlay.getColorStatus(tube1BottleItemComponent.waterColors);
          let colorB = this.GamePlay.getColorStatus(tube2BottleItemComponent.waterColors);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).interactingColorNumber = colorA.indexOfFirstColor;
          log("Index Màu đang tương tác: " + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).interactingColorNumber);
          if (colorB.nonTransparentColorArr.length === 3) return false;else {
            if (colorA.firstColorOfTube === colorB.firstColorOfTube) return true;
          }
          return reuslt;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NodeController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TouchController.js.map