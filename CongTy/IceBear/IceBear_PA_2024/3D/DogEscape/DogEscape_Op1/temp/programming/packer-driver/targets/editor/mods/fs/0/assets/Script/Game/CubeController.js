System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, Constants, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CubeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d69fA7YXNFdJ3sO7cec90s", "CubeController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CubeController", CubeController = (_dec = ccclass('CubeController'), _dec2 = property([Node]), _dec(_class = (_class2 = (_temp = class CubeController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Cubes", _descriptor, this);

          _defineProperty(this, "changeTypeFlag", false);
        }

        start() {
          this.Cubes.forEach(cube => {
            let rigdbody = cube.getComponent(RigidBody);
            rigdbody.type = RigidBody.Type.STATIC;
          });
        }

        changeRigidType() {
          this.changeTypeFlag = true;
          this.Cubes.forEach(cube => {
            let rigdbody = cube.getComponent(RigidBody);
            rigdbody.type = RigidBody.Type.DYNAMIC;
            rigdbody.mass = 0.0001;
          });
        }

        update(dt) {
          !this.changeTypeFlag && (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isEatFood && this.changeRigidType();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Cubes", [_dec2], {
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
//# sourceMappingURL=CubeController.js.map