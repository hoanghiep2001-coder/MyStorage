System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Camera, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, NodesController;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10beQtB81Cg6A6SV/C935H", "NodesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodesController", NodesController = (_dec = ccclass('NodesController'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class NodesController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Camera", _descriptor, this);

          _initializerDefineProperty(this, "hideMask", _descriptor2, this);

          _initializerDefineProperty(this, "canvas", _descriptor3, this);

          _initializerDefineProperty(this, "details", _descriptor4, this);

          _defineProperty(this, "robo_Step1", []);

          _defineProperty(this, "points", []);

          _defineProperty(this, "movingPoint", null);

          _defineProperty(this, "optimus_Step1", null);

          _defineProperty(this, "Hand", null);

          _defineProperty(this, "Spine_Flash", null);

          _defineProperty(this, "Text_Tap", null);

          _defineProperty(this, "FX_FireBalls", []);

          _defineProperty(this, "CTA", null);

          _defineProperty(this, "CTA_overlay", null);

          _defineProperty(this, "CTA_btn", null);
        }

        start() {
          this.canvas.getChildByName("Points").children.forEach(point => {
            if (point.name.includes("_")) this.points.push(point);else this.movingPoint = point;
          });
          this.robo_Step1 = this.details.getChildByName("Robo_Step1").children;
          this.optimus_Step1 = this.details.getChildByName("Optimus_Step1");
          this.Hand = this.canvas.getChildByName("Hint");
          this.Spine_Flash = this.canvas.getChildByName("spine_Flash");
          this.FX_FireBalls = this.details.getChildByName("FX").children;
          this.Text_Tap = this.canvas.getChildByName("text_Tap");
          this.CTA = this.canvas.getChildByName("CTA");
          this.CTA_btn = this.CTA.getChildByName("TryAgain");
          this.CTA_overlay = this.CTA.getChildByName("Overlay");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "details", [_dec5], {
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
//# sourceMappingURL=NodesController.js.map