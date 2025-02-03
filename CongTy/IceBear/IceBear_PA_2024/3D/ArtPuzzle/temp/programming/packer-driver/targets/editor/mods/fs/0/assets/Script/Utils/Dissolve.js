System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, gfx, MeshRenderer, Texture2D, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Dissolve;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      gfx = _cc.gfx;
      MeshRenderer = _cc.MeshRenderer;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8407Y4Hb1Gzqy/BzEZYN0H", "Dissolve", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Dissolve
       * DateTime = Tue May 28 2024 14:47:12 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = Dissolve.ts
       * FileBasenameNoExtension = Dissolve
       * URL = db://assets/Script/Utils/Dissolve.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Dissolve", Dissolve = (_dec = ccclass('Dissolve'), _dec2 = property(MeshRenderer), _dec3 = property(Texture2D), _dec4 = property(Texture2D), _dec(_class = (_class2 = (_temp = class Dissolve extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mr", _descriptor, this);

          _initializerDefineProperty(this, "txtNoise1", _descriptor2, this);

          _initializerDefineProperty(this, "txtNoise2", _descriptor3, this);

          _defineProperty(this, "dissolve", false);

          _defineProperty(this, "dissolve2", false);

          _defineProperty(this, "dissolveThresholdHandle", -1);

          _defineProperty(this, "dissolveThresholdTyeHandle", -1);

          _defineProperty(this, "dissolveType2Handle", -1);

          _defineProperty(this, "dissolveNoiseMapBinding", -1);

          _defineProperty(this, "dissolveThreshold", 0.0);
        }

        start() {}

        update(deltaTime) {
          var _this$mr;

          if ((_this$mr = this.mr) === null || _this$mr === void 0 ? void 0 : _this$mr.materials) {
            var _this$mr2, _this$mr2$materials$, _this$mr3, _this$mr3$materials$;

            let pass = (_this$mr2 = this.mr) === null || _this$mr2 === void 0 ? void 0 : (_this$mr2$materials$ = _this$mr2.materials[0]) === null || _this$mr2$materials$ === void 0 ? void 0 : _this$mr2$materials$.passes[0];

            if (pass) {
              if (this.dissolve) {
                this.dissolveThreshold += 1 * deltaTime;

                if (this.dissolveThreshold > 1) {
                  this.dissolveThreshold = 0;
                }
              }

              this.processPass(pass);
            }

            pass = (_this$mr3 = this.mr) === null || _this$mr3 === void 0 ? void 0 : (_this$mr3$materials$ = _this$mr3.materials[1]) === null || _this$mr3$materials$ === void 0 ? void 0 : _this$mr3$materials$.passes[0];

            if (pass) {
              this.processPass(pass);
            }

            if (0 == this.dissolveThreshold) {
              this.dissolve = false;
            }
          }
        }

        processPass(pass) {
          if (this.dissolve) {
            this.setDissolveThreshold(pass, this.dissolveThreshold);
          } else if (this.dissolve2) {
            this.setDissolveThreshold(pass, this.dissolveThreshold);
          }
        }

        preFetchHandles(pass) {
          if (-1 == this.dissolveThresholdHandle) {
            this.dissolveThresholdHandle = pass.getHandle('dissolveThreshold');
          }

          if (-1 == this.dissolveThresholdTyeHandle) {
            this.dissolveThresholdTyeHandle = pass.getHandle('dissolveOffsetDir', 3, gfx.Type.FLOAT);
          }

          if (-1 == this.dissolveType2Handle) {
            this.dissolveType2Handle = pass.getHandle('dissolveParams2', 0, gfx.Type.FLOAT);
          }

          if (-1 == this.dissolveNoiseMapBinding) {
            this.dissolveNoiseMapBinding = pass.getBinding('dissolveMap');
          }
        }

        setDissolveThreshold(pass, value) {
          pass.setUniform(this.dissolveThresholdHandle, value);
          pass.update();
        }

        onBtnDissolve() {
          var _this$mr4;

          this.dissolve = true;

          if ((_this$mr4 = this.mr) === null || _this$mr4 === void 0 ? void 0 : _this$mr4.materials) {
            var _this$mr5, _this$mr5$materials$, _this$mr6, _this$mr6$materials$;

            let pass = (_this$mr5 = this.mr) === null || _this$mr5 === void 0 ? void 0 : (_this$mr5$materials$ = _this$mr5.materials[0]) === null || _this$mr5$materials$ === void 0 ? void 0 : _this$mr5$materials$.passes[0];

            if (pass) {
              var _this$txtNoise;

              this.preFetchHandles(pass);
              console.log(pass);
              pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
              pass.setUniform(this.dissolveType2Handle, 1.0);
              pass.bindTexture(this.dissolveNoiseMapBinding, (_this$txtNoise = this.txtNoise1) === null || _this$txtNoise === void 0 ? void 0 : _this$txtNoise.getGFXTexture());
              pass.update();
            }

            pass = (_this$mr6 = this.mr) === null || _this$mr6 === void 0 ? void 0 : (_this$mr6$materials$ = _this$mr6.materials[1]) === null || _this$mr6$materials$ === void 0 ? void 0 : _this$mr6$materials$.passes[0];

            if (pass) {
              var _this$txtNoise2;

              pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
              pass.setUniform(this.dissolveType2Handle, 1.0);
              pass.bindTexture(this.dissolveNoiseMapBinding, (_this$txtNoise2 = this.txtNoise1) === null || _this$txtNoise2 === void 0 ? void 0 : _this$txtNoise2.getGFXTexture());
              pass.update();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtNoise1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtNoise2", [_dec4], {
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
//# sourceMappingURL=Dissolve.js.map