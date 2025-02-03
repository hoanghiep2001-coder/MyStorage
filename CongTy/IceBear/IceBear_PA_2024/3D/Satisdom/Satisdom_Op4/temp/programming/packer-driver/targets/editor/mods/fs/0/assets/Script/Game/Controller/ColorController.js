System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Color, Component, BottleItem, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, executeInEditMode, TubeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBottleItem(extras) {
    _reporterNs.report("BottleItem", "../Other/BottleItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      BottleItem = _unresolved_2.BottleItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83117W9E+1POLMuSfQsWekM", "ColorController", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("TubeController", TubeController = (_dec = ccclass('TubeController'), _dec2 = property([_crd && BottleItem === void 0 ? (_reportPossibleCrUseOfBottleItem({
        error: Error()
      }), BottleItem) : BottleItem]), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = class TubeController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BottleItems", _descriptor, this);

          _defineProperty(this, "blueColor", new Color(28, 101, 170, 255));

          _defineProperty(this, "brownColor", new Color(161, 71, 71, 255));

          _defineProperty(this, "orangeColor", new Color(241, 116, 58, 255));

          _defineProperty(this, "transparent", new Color(255, 255, 255, 0));
        }

        start() {
          this.BottleItems[0]._waterColors = [this.blueColor, this.brownColor, this.blueColor];
          this.BottleItems[1]._waterColors = [this.orangeColor, this.blueColor, this.brownColor];
          this.BottleItems[2]._waterColors = [this.transparent, this.brownColor, this.orangeColor];
          this.BottleItems[3]._waterColors = [this.transparent, this.orangeColor, this.brownColor];
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BottleItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ColorController.js.map