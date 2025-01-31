System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Collider, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PA_08_Moto;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider = _cc.Collider;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12d6cRDK9xAIZjL7CqU5ecb", "PA_08_Moto", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_08_Moto", PA_08_Moto = (_dec = ccclass('PA_08_Moto'), _dec2 = property(Node), _dec3 = property(Collider), _dec(_class = (_class2 = (_temp = class PA_08_Moto extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "checkPoint_1", _descriptor, this);

          _initializerDefineProperty(this, "collider", _descriptor2, this);
        }

        start() {// this.collider.on('onCollisionEnter', (target: ICollisionEvent) => {
          //     if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
          //         console.log("Check point!");
          //         // disable tutorial
          //         this.checkPoint_1.active = false;
          //     }
          // });
          // this.collider.on('onTriggerEnter', (target: ITriggerEvent) => {
          //     if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
          //         console.log("Check point!");
          //         // disable tutorial
          //         this.checkPoint_1.active = false;
          //     }
          // });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec3], {
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
//# sourceMappingURL=PA_08_Moto.js.map