System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TimeCount;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b04c9+e9BPmKNBmlEbNglS", "TimeCount", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TimeCount
       * DateTime = Mon Dec 30 2024 14:37:45 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = TimeCount.ts
       * FileBasenameNoExtension = TimeCount
       * URL = db://assets/Script/Options/PA_30/Others/TimeCount.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TimeCount", TimeCount = (_dec = ccclass('TimeCount'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class TimeCount extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "UI_Time", _descriptor, this);

          _defineProperty(this, "isTimeOver", false);
        }

        start() {}

        deCreaseTime() {
          if (this.isTimeOver) return;
          const UItransform = this.UI_Time.getComponent(UITransform);
          UItransform.width -= 0.8;

          if (UItransform.width <= 0) {
            this.isTimeOver = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).Squid_PA_30.isTimeOver = true;
            this.scheduleOnce(() => this.destroyThis(), 1);
          }
        }

        destroyThis() {
          this.node.active = false;
          this.destroy();
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isStartPlaying) this.deCreaseTime();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDoneDrawCandy && !this.isTimeOver && this.node.active) this.destroyThis();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UI_Time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=TimeCount.js.map