System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CameraController;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "194893DKSRL053V/nbqLcnj", "CameraController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CameraController
       * DateTime = Wed Jan 01 2025 11:54:35 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = CameraController.ts
       * FileBasenameNoExtension = CameraController
       * URL = db://assets/Scripts/Controller/CameraController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CameraController", CameraController = (_dec = ccclass('CameraController'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class CameraController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _defineProperty(this, "_targetWorldPosition", new Vec3());

          _defineProperty(this, "followDistance", 10);

          _defineProperty(this, "followHeight", 16);
        }

        start() {}

        update(dt) {
          if (this.target) {
            var cameraPos = new Vec3(this._targetWorldPosition.x - this.followDistance, this._targetWorldPosition.y + this.followHeight, this._targetWorldPosition.z);
            this.target.getWorldPosition(this._targetWorldPosition);
            this.node.setWorldPosition(cameraPos);
            this.node.lookAt(this._targetWorldPosition);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=CameraController.js.map