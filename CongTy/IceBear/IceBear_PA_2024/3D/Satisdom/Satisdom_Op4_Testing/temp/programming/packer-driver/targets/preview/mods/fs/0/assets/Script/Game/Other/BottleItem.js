System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCInteger, Graphics, Color, tween, log, Vec3, UITransform, Constants, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, executeInEditMode, BottleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Controller/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCInteger = _cc.CCInteger;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      tween = _cc.tween;
      log = _cc.log;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c7c6iJbhpOyZPbVaEnE7BT", "BottleItem", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("BottleItem", BottleItem = (_dec = ccclass('BottleItem'), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property({
        type: [CCInteger]
      }), _dec4 = property({
        type: [Color]
      }), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property(Graphics), _dec(_class = (_class2 = (_temp = class BottleItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "_waterHeights", _descriptor2, this);

          _initializerDefineProperty(this, "_waterColors", _descriptor3, this);

          _initializerDefineProperty(this, "bottleWidth", _descriptor4, this);

          _initializerDefineProperty(this, "bottleHeight", _descriptor5, this);

          _initializerDefineProperty(this, "_bottleAngle", _descriptor6, this);

          _initializerDefineProperty(this, "drawGraphics", _descriptor7, this);

          _defineProperty(this, "height1", 900);

          _defineProperty(this, "height2", 450);

          _defineProperty(this, "height3", 200);

          _defineProperty(this, "tubeSide", "");

          _defineProperty(this, "initPos", null);

          _defineProperty(this, "tubeController", null);

          _defineProperty(this, "graphics", null);

          _defineProperty(this, "isSorting", false);

          _defineProperty(this, "newState", null);
        }

        get waterHeights() {
          return this._waterHeights;
        }

        set waterHeights(heights) {
          this._waterHeights = heights;
          this.drawWater();
        }

        get waterColors() {
          return this._waterColors;
        }

        set waterColors(colors) {
          this._waterColors = colors;
          this.drawWater();
        }

        get bottleAngle() {
          return this._bottleAngle;
        }

        set bottleAngle(angle) {
          this._bottleAngle = angle;
          this.node.angle = angle;
          this.drawWater();
        }

        onLoad() {}

        start() {
          // step 1 = 65;
          // step 2 = 85;
          // step 3 = 90;
          this.initPos = this.node.getPosition();
          this.applyHeightToColors();
          this.initTubeSide();
          this.drawWater();
          this.tubeController = this.node.parent.getComponent("TubeController");
          this.graphics = this.tubeController.Graphics;
        }

        applyHeightToColors() {
          this._waterHeights = [this.height1, this.height2, this.height3];
        }

        getColorStatus() {
          var GamePlayNode = this.node.parent.parent.parent.getChildByName("GamePlay");
          var GamePlayComp = GamePlayNode.getComponent("GamePlay");
          var colorStatus = GamePlayComp.getColorStatus(this.waterColors);
          return colorStatus;
        }

        applyWaterColor() {
          var colorStatus = this.getColorStatus(); // tách chuỗi string rgba thành từng phần

          var values = colorStatus.firstColorOfTube.match(/\d+(\.\d+)?/g).map(Number);
          var color = new Color(values[0], values[1], values[2], values[3] * 255);
          this._waterColors[colorStatus.indexOfFirstColor - 1] = color;
          log("Màu đc chuyển đổi: " + color);
        }

        rotateTube(tubeState) {
          log("angling");
          tubeState.otherTube.setIndexHeightToZero(tubeState.currentHeightOfColor);
          tubeState.otherTube.applyWaterColor();
          tubeState.otherTube.increseHeightOfWater();
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.WaterDropSound);
          tween(this.node).to(1.5, {
            angle: tubeState.angle
          }).call(() => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isFillUp2Color = false;
            this.isSorting = false;
            this.graphics.clear();
          }).start();
          this.scheduleOnce(() => {
            this.isSorting = true;
            this.decreaseHeightOfWater(tubeState);
          }, 0.4);
        }

        increseHeightOfWater() {
          console.log("Tăng mực nước");
          var colorStatus = this.getColorStatus();
          var targetNumber = null;
          var heightObject = {
            height: null
          };

          switch (colorStatus.nonTransparentColorArr.length) {
            case 3:
              targetNumber = 900;
              heightObject.height = this.height1;
              break;

            case 2:
              targetNumber = 900;
              heightObject.height = this.height2;
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isFillUp2Color = true;
              break;

            default:
              break;
          }

          tween(heightObject).to(1.5, {
            height: targetNumber
          }, {
            onUpdate: target => {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isFillUp2Color) {
                this.height2 = target.height;
              } else {
                if (targetNumber === 900) this.height1 = target.height;else if (targetNumber === 450) this.height2 = target.height;else if (targetNumber === 200) this.height3 = target.height;
              }

              this.applyHeightToColors();
            }
          }).start();
        }

        fakeDrawSortWater(newState) {
          var leftPoint = this.node.getChildByName("LeftPoint"),
              rightPoint = this.node.getChildByName("RightPoint"),
              otherTube = newState.otherTube.node,
              otherTubeMiddlePoint = otherTube.getChildByName("MiddlePoint"),
              values = newState.firstColorOfTube.match(/\d+(\.\d+)?/g).map(Number),
              colorToDraw = new Color(values[0], values[1], values[2], values[3] * 255),
              posA = new Vec3(),
              posB = new Vec3();

          if (newState.drawWaterSide === "left") {
            posA = leftPoint.getWorldPosition();
            posB = otherTubeMiddlePoint.getWorldPosition();
          } else {
            posA = rightPoint.getWorldPosition();
            posB = otherTubeMiddlePoint.getWorldPosition();
          } // Chuyển đổi vị trí từ không gian thế giới sang không gian của GraphicsNode


          var graphicsNodeTransform = this.graphics.getComponent(UITransform);
          var nodeAPosition = graphicsNodeTransform.convertToNodeSpaceAR(posA);
          var nodeBPosition = graphicsNodeTransform.convertToNodeSpaceAR(posB); // Vẽ đường nối và đặt màu

          this.graphics.clear();
          this.graphics.strokeColor = colorToDraw; // Đặt màu cho đường vẽ

          this.graphics.moveTo(nodeAPosition.x, nodeAPosition.y);
          this.graphics.lineTo(nodeBPosition.x, nodeBPosition.y);
          this.graphics.stroke();
          log("vẽ giọt nước");
        }

        decreaseHeightOfWater(newState) {
          var colorStatus = this.getColorStatus();
          var targetNumber = null;
          var heightObject = {
            height: null
          };

          switch (colorStatus.nonTransparentColorArr.length) {
            case 3:
              targetNumber = 900;
              heightObject.height = this.height1;
              break;

            case 2:
              targetNumber = 900;
              heightObject.height = this.height1;
              break;

            default:
              break;
          }

          tween(heightObject).to(1.5, {
            height: 0
          }, {
            onUpdate: target => {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isFillUp2Color) {
                this.height1 = target.height;
                this.height2 = target.height;
              } else {
                if (targetNumber === 900) this.height1 = target.height;else if (targetNumber === 450) this.height2 = target.height;else if (targetNumber === 200) this.height3 = target.height;
              }

              this.applyHeightToColors();
            }
          }).call(() => {
            this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SoundTrack.CompleteSound);
            this.comeBackInitPos();
            this._waterColors[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).interactingColorNumber] = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).transparentColor;
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isFillUp2Color) this._waterColors[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).interactingColorNumber + 1] = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).transparentColor;
            console.log("Sort Xong");
            log("------------------");
          }).start();
        }

        comeBackInitPos() {
          tween(this.node).to(0.3, {
            position: this.initPos,
            angle: 0
          }).call(() => (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch = true).start();
        }

        MoveToAnotherTube(newState) {
          log("Di chuyển");
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch = false;
          this.newState = newState;
          tween(this.node).to(0.3, {
            position: newState.position
          }).call(() => this.rotateTube(newState)).start();
        }

        setIndexHeightToZero(heightToCompare) {
          var height = "";

          switch (heightToCompare) {
            case 900:
              this.height1 = 0;
              height = "height1";
              break;

            case 450:
              this.height2 = 450;
              height = "height2";
              if (this.node.name === "Base_Tube_2") this.height1 = 0;
              break;

            case 200:
              this.height3 = 200;
              height = "height3";
              break;

            default:
              break;
          }

          ;
          log(this.node.name + " - index Height to zero: " + height);
          this.applyHeightToColors();
        }

        initTubeSide() {
          switch (this.node.name) {
            case "Base_Tube_0":
              this.tubeSide = "left";
              break;

            case "Base_Tube_1":
              this.tubeSide = "right";
              break;

            case "Base_Tube_2":
              this.tubeSide = "right";
              break;

            case "Base_Tube_3":
              this.tubeSide = "left";
              break;

            default:
              break;
          }
        }

        drawWater() {
          if (!this.drawGraphics) return;
          this.drawGraphics.clear();

          for (var index = 0; index < this.waterHeights.length; index++) {
            var height = this.waterHeights[index];
            this.drawOneWater(height, this.waterColors[index]);
          }
        }

        drawOneWater(height, color) {
          var radiansA = this.bottleAngle / 180 * Math.PI;
          var radiansM = Math.atan(2 * height / this.bottleWidth);
          var tempWTan = this.bottleWidth * Math.tan(radiansA);
          this.drawGraphics.fillColor = color;

          if (radiansA <= radiansM) {
            if (radiansA < -radiansM) {
              var hL = Math.sqrt(2 * height * -tempWTan);
              hL = hL > this.bottleHeight ? this.bottleHeight : hL;
              var bW = hL / Math.tan(-radiansA);
              this.drawGraphics.moveTo(this.bottleWidth, 0);
              this.drawGraphics.lineTo(this.bottleWidth, hL);
              this.drawGraphics.lineTo(this.bottleWidth - bW, 0);
              this.drawGraphics.lineTo(this.bottleWidth, 0);
            } else {
              this.drawGraphics.moveTo(0, 0);

              var _hL = height + tempWTan / 2;

              var cutOffset = 0;

              if (_hL > this.bottleHeight) {
                cutOffset += _hL - this.bottleHeight;
              }

              var hR = height - tempWTan / 2;

              if (hR > this.bottleHeight) {
                cutOffset += hR - this.bottleHeight;
              }

              this.drawGraphics.lineTo(this.bottleWidth, 0);
              this.drawGraphics.lineTo(this.bottleWidth, hR - cutOffset);
              this.drawGraphics.lineTo(0, _hL - cutOffset);
              this.drawGraphics.lineTo(0, 0);
            }
          } else {
            var _hL2 = Math.sqrt(2 * height * tempWTan);

            _hL2 = _hL2 > this.bottleHeight ? this.bottleHeight : _hL2;

            var _bW = _hL2 / Math.tan(radiansA);

            this.drawGraphics.moveTo(0, 0);
            this.drawGraphics.lineTo(_bW, 0);
            this.drawGraphics.lineTo(0, _hL2);
            this.drawGraphics.lineTo(0, 0);
          }

          this.drawGraphics.fill();
        }

        update(dt) {
          this.bottleAngle = this.node.eulerAngles.z;
          this.isSorting && this.fakeDrawSortWater(this.newState);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_waterHeights", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_waterColors", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bottleWidth", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 564;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bottleHeight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_bottleAngle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bottleAngle", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "bottleAngle"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "drawGraphics", [_dec9], {
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
//# sourceMappingURL=BottleItem.js.map