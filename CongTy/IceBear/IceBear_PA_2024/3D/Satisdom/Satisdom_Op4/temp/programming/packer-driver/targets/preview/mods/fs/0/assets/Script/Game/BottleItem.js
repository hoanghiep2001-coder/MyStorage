System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCInteger, Graphics, Color, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, executeInEditMode, BottleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCInteger = _cc.CCInteger;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c7c6iJbhpOyZPbVaEnE7BT", "BottleItem", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("BottleItem", BottleItem = (_dec = ccclass('BottleItem'), _dec2 = property({
        type: [CCInteger]
      }), _dec3 = property({
        type: [Color]
      }), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(Graphics), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = class BottleItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_waterHeights", _descriptor, this);

          _initializerDefineProperty(this, "_waterColors", _descriptor2, this);

          _initializerDefineProperty(this, "bottleWidth", _descriptor3, this);

          _initializerDefineProperty(this, "bottleHeight", _descriptor4, this);

          _initializerDefineProperty(this, "_bottleAngle", _descriptor5, this);

          _initializerDefineProperty(this, "drawGraphics", _descriptor6, this);

          _defineProperty(this, "height1", 800);

          _defineProperty(this, "height2", 400);

          _defineProperty(this, "height3", 200);
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

        // private lastRotation: number = 0;
        onLoad() {}

        start() {
          // step 1 = 75;
          // step 2 = 85;
          // step 3 = 90;
          this._waterHeights = [this.height1, this.height2, this.height3];
          this.drawWater();
          log("------------------");
          this.waterColors.forEach(color => {
            log(color.toCSS());
          });
          log("------------------"); // this.scheduleOnce(() => {
          //     tween(this.node)
          //     .to(1.5, {angle: -90})
          //     .start()
          // }, 1.5)
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
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_waterHeights", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_waterColors", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bottleWidth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 564;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bottleHeight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_bottleAngle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bottleAngle", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "bottleAngle"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "drawGraphics", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BottleItem.js.map