System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Camera, Component, Node, ParticleSystem, sp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, NodesController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10beQtB81Cg6A6SV/C935H", "NodesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodesController", NodesController = (_dec = ccclass('NodesController'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property([ParticleSystem]), _dec(_class = (_class2 = (_temp = class NodesController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Camera", _descriptor, this);

          _initializerDefineProperty(this, "hint", _descriptor2, this);

          _initializerDefineProperty(this, "point", _descriptor3, this);

          _initializerDefineProperty(this, "canvas2D", _descriptor4, this);

          _initializerDefineProperty(this, "hideMask", _descriptor5, this);

          _initializerDefineProperty(this, "btnFight", _descriptor6, this);

          _initializerDefineProperty(this, "Popup", _descriptor7, this);

          _defineProperty(this, "Popup_Btns", []);

          _initializerDefineProperty(this, "Details", _descriptor8, this);

          _defineProperty(this, "Boss", null);

          _defineProperty(this, "Boss_Die", null);

          _defineProperty(this, "SkibidiNugget", null);

          _defineProperty(this, "Points", []);

          _defineProperty(this, "Nuggets", []);

          _defineProperty(this, "NuggetLines", []);

          _defineProperty(this, "FX_Lightning", null);

          _initializerDefineProperty(this, "FX_Fires", _descriptor9, this);

          _defineProperty(this, "CTA", null);

          _defineProperty(this, "CTA_btn", null);

          _defineProperty(this, "CTA_overlay", null);

          _defineProperty(this, "isSaveOnceFlag", false);
        }

        start() {
          this.FX_Lightning = this.canvas2D.getChildByName("sp_lightning").getComponent(sp.Skeleton);
          this.Boss = this.Details.getChildByName("Enemy");
          this.Boss_Die = this.Details.getChildByName("Dying");
          this.Points = this.canvas2D.getChildByName("Points").children; // cắt thằng đầu tiên vì thằng đầu tiên là point để bắt va chạm

          this.Points.splice(0, 1);
          this.Nuggets = this.Details.getChildByName("Ally").children;
          this.SkibidiNugget = this.Details.getChildByName("Ally").getChildByName("SkibidiNugget"); // cắt thằng cuối vì thằng cuối để merge

          this.Nuggets.splice(this.Nuggets.length - 1, 1);
          this.Nuggets.forEach(nugget => this.NuggetLines.push(nugget.getChildByName("Line")));
          this.Popup_Btns = this.Popup.getChildByName("btns").children;
          this.CTA = this.canvas2D.getChildByName("CTA");
          this.CTA_btn = this.CTA.getChildByName("Btn");
          this.CTA_overlay = this.CTA.getChildByName("Overlay");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canvas2D", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnFight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Popup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Details", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "FX_Fires", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NodesController.js.map