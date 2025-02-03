System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, EnemiesController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1d1aeM28BEXZ5HVTBrSi6a", "EnemiesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", EnemiesController = (_dec = property([Prefab]), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([Node]), ccclass(_class = (_class2 = (_temp = class EnemiesController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemiesFish", _descriptor, this);

          _initializerDefineProperty(this, "Point_Lv1", _descriptor2, this);

          _initializerDefineProperty(this, "Point_Lv2", _descriptor3, this);

          _initializerDefineProperty(this, "Point_Lv3", _descriptor4, this);

          _defineProperty(this, "Fishes_Lv1", []);

          _defineProperty(this, "Fishes_Lv2", []);
        }

        onLoad() {}

        start() {
          for (let i = 0; i < this.Point_Lv1.length; ++i) {
            let newFish = instantiate(this.enemiesFish[0]);
            let x = this.Point_Lv1[i].getPosition().x;
            let y = this.Point_Lv1[i].getPosition().y;
            newFish.setPosition(x, y, 0);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + `_${i}`);
          }

          for (let i = 0; i < this.Point_Lv2.length; ++i) {
            let newFish = instantiate(this.enemiesFish[1]);
            let x = this.Point_Lv2[i].getPosition().x;
            let y = this.Point_Lv2[i].getPosition().y;
            newFish.setPosition(x, y);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + `_${i}`);
          } // for (let i = 0; i < this.Point_Lv3.length; ++i) {
          //     let newFish = instantiate(this.enemiesFish[2]);
          //     let x = this.Point_Lv3[i].getPosition().x;
          //     let y = this.Point_Lv3[i].getPosition().y;
          //     newFish.setPosition(x, y);
          //     newFish.parent = this.node;
          //     newFish.name = String(newFish.name + `_${i}`)
          // }

        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemiesFish", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv3", [_dec4], {
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
//# sourceMappingURL=EnemiesController.js.map