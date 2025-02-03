System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, GameController, Constants, AudioManager, BottleItem, NodeController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../Controller/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Controller/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBottleItem(extras) {
    _reporterNs.report("BottleItem", "./BottleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeController(extras) {
    _reporterNs.report("NodeController", "../Controller/NodeController", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      BottleItem = _unresolved_5.BottleItem;
    }, function (_unresolved_6) {
      NodeController = _unresolved_6.NodeController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(_crd && NodeController === void 0 ? (_reportPossibleCrUseOfNodeController({
        error: Error()
      }), NodeController) : NodeController), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "NodeController", _descriptor3, this);

          _initializerDefineProperty(this, "HideMask", _descriptor4, this);
        }

        onLoad() {}

        start() {// this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        getColorStatus(colors) {
          var firstColorOfTube = null;
          var indexOfFirstColor = null;
          var nonTransparentColorArr = [];
          var heightOfFirstColor = null;
          var colorHeightArr = [900, 450, 200];
          var isHasTwoSameColor = false;
          isHasTwoSameColor = this.hasConsecutiveDuplicateColors(colors);

          for (var i = 0; i < colors.length; i++) {
            if (colors[i].a !== 0) {
              if (!firstColorOfTube) {
                firstColorOfTube = colors[i].toCSS();
                heightOfFirstColor = colorHeightArr[i];
                indexOfFirstColor = i;
              }

              ;
              nonTransparentColorArr.push(colors[i].toCSS());
            }
          }

          return {
            firstColorOfTube: firstColorOfTube,
            indexOfFirstColor: indexOfFirstColor,
            nonTransparentColorArr: nonTransparentColorArr,
            heightOfFirstColor: heightOfFirstColor,
            isHasTwoSameColor: isHasTwoSameColor
          };
        }

        areColorsEqual(color1, color2) {
          return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b && color1.a === color2.a;
        }

        hasConsecutiveDuplicateColors(colors) {
          for (var i = 0; i < colors.length - 1; i++) {
            if (this.areColorsEqual(colors[i], colors[i + 1])) {
              return true;
            }
          }

          return false;
        }

        handleMoveToAnotherTube(tubeA, tubeB) {
          var tubeABottleItemComp = tubeA.getComponent(_crd && BottleItem === void 0 ? (_reportPossibleCrUseOfBottleItem({
            error: Error()
          }), BottleItem) : BottleItem);
          var tubeBBottleItemComp = tubeB.getComponent(_crd && BottleItem === void 0 ? (_reportPossibleCrUseOfBottleItem({
            error: Error()
          }), BottleItem) : BottleItem);
          tubeB.setSiblingIndex(this.NodeController.Tubes.length - 1);
          tubeA.setSiblingIndex(this.NodeController.Tubes.length - 2);
          var tubeState = this.calculateNewTubeState(tubeBBottleItemComp, tubeABottleItemComp);
          tubeABottleItemComp.MoveToAnotherTube(tubeState);
          console.log("correct");
        }

        calculateNewTubeState(tubeBBottleItemComp, tubeABottleItemComp) {
          var newState = {
            position: null,
            angle: null,
            firstColorOfTube: null,
            currentHeightOfColor: null,
            otherTube: null,
            drawWaterSide: null
          };
          var tubeBpos = tubeBBottleItemComp.node.getPosition();
          var colorStatus = this.getColorStatus(tubeABottleItemComp.waterColors);
          newState.firstColorOfTube = colorStatus.firstColorOfTube;
          newState.currentHeightOfColor = colorStatus.heightOfFirstColor;
          newState.otherTube = tubeBBottleItemComp;

          switch (tubeBBottleItemComp.tubeSide) {
            case "left":
              newState.position = new Vec3(30, tubeBpos.y + 120, 0);
              if (colorStatus.nonTransparentColorArr.length === 3) newState.angle = 65;else if (colorStatus.nonTransparentColorArr.length === 2) newState.angle = 85;else newState.angle = 90;
              newState.drawWaterSide = "left";
              break;

            case "right":
              newState.position = new Vec3(-30, tubeBpos.y + 120, 0);
              if (colorStatus.nonTransparentColorArr.length === 3) newState.angle = -75;else if (colorStatus.nonTransparentColorArr.length === 2) newState.angle = -85;else newState.angle = -90;
              newState.drawWaterSide = "right";
              break;

            default:
              break;
          }

          return newState;
        }

        handleMuteSoundIronSource() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.State) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.State === 1 && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState && !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.isEndGame) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState = true;
            }

            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.State === 2 && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState = false;
              this.AudioManager.stopAllSound();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NodeController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec5], {
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