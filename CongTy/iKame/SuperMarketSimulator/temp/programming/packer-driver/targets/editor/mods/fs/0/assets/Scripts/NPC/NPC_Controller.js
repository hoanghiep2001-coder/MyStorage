System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameInfo, NPC_Behavior, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, NPC_Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPC_Behavior(extras) {
    _reporterNs.report("NPC_Behavior", "./NPC_Behavior", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      NPC_Behavior = _unresolved_3.NPC_Behavior;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734edaKLBRLyJoeYfCgrR9h", "NPC_Controller", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = NPC_Controller
       * DateTime = Sat Nov 23 2024 12:50:30 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = NPC_Controller.ts
       * FileBasenameNoExtension = NPC_Controller
       * URL = db://assets/Scripts/NPC/NPC_Controller.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("NPC_Controller", NPC_Controller = (_dec = ccclass('NPC_Controller'), _dec2 = property([_crd && NPC_Behavior === void 0 ? (_reportPossibleCrUseOfNPC_Behavior({
        error: Error()
      }), NPC_Behavior) : NPC_Behavior]), _dec(_class = (_class2 = (_temp = class NPC_Controller extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "NPCs", _descriptor, this);
        }

        start() {}

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).completePayment) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).completePayment = false;
            this.NPCs.forEach(npc => npc.updateStandForNPC());
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NPCs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=NPC_Controller.js.map