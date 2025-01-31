System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Color, Component, Material, MeshRenderer, utils, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PA_30_LineRenderer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      utils = _cc.utils;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a84b3iakvhMxbRtFtErllSl", "PA_30_LineRenderer", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_30_LineRenderer
       * DateTime = Sat Dec 28 2024 16:20:04 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_30_LineRenderer.ts
       * FileBasenameNoExtension = PA_30_LineRenderer
       * URL = db://assets/Script/Options/PA_30/GamePlay/PA_30_LineRenderer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_30_LineRenderer", PA_30_LineRenderer = (_dec = ccclass('PA_30_LineRenderer'), _dec2 = property({
        type: Material
      }), _dec(_class = (_class2 = (_temp = class PA_30_LineRenderer extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "mesh", null);

          _defineProperty(this, "vertices", []);

          _defineProperty(this, "indices", []);

          _defineProperty(this, "colors", []);

          _initializerDefineProperty(this, "lineMaterial", _descriptor, this);

          _defineProperty(this, "points", []);
        }

        start() {
          const points = [new Vec3(0, 0, 0), new Vec3(1, 1, 0), new Vec3(2, 0, 1), new Vec3(3, -1, 2)];
          this.createLine(points);
        }

        createLine(points) {
          this.vertices = points; // Tạo indices (mỗi 2 điểm tạo 1 đoạn thẳng)

          this.indices = [];

          for (let i = 0; i < points.length - 1; i++) {
            this.indices.push(i, i + 1);
          } // Tạo màu cho từng điểm (tùy chọn)


          this.colors = points.map(() => new Color(255, 255, 255, 255)); // Tạo Mesh

          this.mesh = utils.createMesh({
            positions: this.vertices.map(v => [v.x, v.y, v.z]).reduce((acc, val) => acc.concat(val), []),
            colors: this.colors.map(c => [c.r / 255, c.g / 255, c.b / 255, c.a / 255]).reduce((acc, val) => acc.concat(val), []),
            indices: this.indices
          }); // Gán Mesh và Material vào MeshRenderer

          const meshRenderer = this.node.getComponent(MeshRenderer);

          if (meshRenderer) {
            meshRenderer.mesh = this.mesh;

            if (this.lineMaterial) {
              meshRenderer.material = this.lineMaterial;
            }
          }
        }

        update(dt) {// if(GameInfo.Squid_PA_30.isDetachCandy) {
          //     this.createLine(GameInfo.Squid_PA_30.lineRenderPoints)
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_30_LineRenderer.js.map