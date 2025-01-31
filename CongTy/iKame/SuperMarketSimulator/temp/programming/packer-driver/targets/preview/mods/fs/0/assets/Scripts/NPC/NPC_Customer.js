System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, math, Node, Quat, tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, NPC_Customer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      Node = _cc.Node;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf75cFgR+lLxpEHkXnPJ22D", "NPC_Customer", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = NPC_Customer
       * DateTime = Sat Nov 23 2024 17:24:28 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = NPC_Customer.ts
       * FileBasenameNoExtension = NPC_Customer
       * URL = db://assets/Scripts/NPC/NPC_Customer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("NPC_Customer", NPC_Customer = (_dec = ccclass('NPC_Customer'), _dec2 = property([Node]), _dec(_class = (_class2 = (_temp = class NPC_Customer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skins", _descriptor, this);
        }

        start() {
          // this.schedule(() => {
          tween(this.node).by(6.5, {
            position: new Vec3(6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, -60, 0)
          }).by(6.5, {
            position: new Vec3(-6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 115, 0)
          }).call(() => {
            this.skins.forEach(skin => skin.active = false);
            var randomSkin = math.randomRangeInt(0, 4);
            this.skins[randomSkin].active = true;
          }).union().repeatForever().start(); // }, 6);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skins", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
//# sourceMappingURL=NPC_Customer.js.map