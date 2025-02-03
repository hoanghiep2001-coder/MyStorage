System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Player, _decorator, Component, Node, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, EnemiesController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./PlayerMount", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Player = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1d1aeM28BEXZ5HVTBrSi6a", "EnemiesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", EnemiesController = (_dec = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec2 = property(Node), _dec3 = property([Prefab]), _dec4 = property([Node]), _dec5 = property([Node]), _dec6 = property([Node]), ccclass(_class = (_class2 = (_temp = class EnemiesController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Player", _descriptor, this);

          _initializerDefineProperty(this, "TouchArea", _descriptor2, this);

          _initializerDefineProperty(this, "enemiesFish", _descriptor3, this);

          _initializerDefineProperty(this, "Point_Lv1", _descriptor4, this);

          _initializerDefineProperty(this, "Point_Lv2", _descriptor5, this);

          _initializerDefineProperty(this, "Point_Lv3", _descriptor6, this);

          _defineProperty(this, "Fishes_Lv1", []);

          _defineProperty(this, "Fishes_Lv2", []);
        }

        onLoad() {}

        start() {
          for (var i = 0; i < this.Point_Lv1.length; ++i) {
            var newFish = instantiate(this.enemiesFish[0]);
            var x = this.Point_Lv1[i].getPosition().x;
            var y = this.Point_Lv1[i].getPosition().y;
            newFish.setPosition(x, y, 0);
            newFish.parent = this.node;
            newFish.name = String(newFish.name + ("_" + i)); // this.Fishes_Lv1.push(newFish);
          }

          for (var _i = 0; _i < this.Point_Lv2.length; ++_i) {
            var _newFish = instantiate(this.enemiesFish[1]);

            var _x = this.Point_Lv2[_i].getPosition().x;

            var _y = this.Point_Lv2[_i].getPosition().y;

            _newFish.setPosition(_x, _y);

            _newFish.parent = this.node;
            _newFish.name = String(_newFish.name + ("_" + _i)); // this.Fishes_Lv2.push(newFish);
          }

          for (var _i2 = 0; _i2 < this.Point_Lv3.length; ++_i2) {
            var _newFish2 = instantiate(this.enemiesFish[2]);

            var _x2 = this.Point_Lv3[_i2].getPosition().x;

            var _y2 = this.Point_Lv3[_i2].getPosition().y;

            _newFish2.setPosition(_x2, _y2);

            _newFish2.parent = this.node;
            _newFish2.name = String(_newFish2.name + ("_" + _i2));
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemiesFish", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Point_Lv3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnemiesController.js.map