System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, size, UITransform, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PA_11_CharHealth;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      size = _cc.size;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f4dfy5bKhK25Gk5twOdPEY", "PA_11_CharHealth", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_11_CharHealth", PA_11_CharHealth = (_dec = ccclass('PA_11_CharHealth'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class PA_11_CharHealth extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "HealthNode", _descriptor, this);

          _defineProperty(this, "currentNodeHeight", 100);

          _defineProperty(this, "isActiveDecreaseHealth", false);
        }

        start() {
          this.scheduleOnce(() => {
            this.isActiveDecreaseHealth = true;
            this.node.getChildByName("Overlay").active = false;
          }, 0.8);
        }

        handleDecreaseHealth() {
          if (this.currentNodeHeight <= 0) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = false;
            this.isActiveDecreaseHealth = false;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_11.isCharacterDead = true;
            return;
          }

          this.currentNodeHeight -= 1;
          this.HealthNode.getComponent(UITransform).setContentSize(size(100, this.currentNodeHeight));
        }

        update(dt) {
          if (this.isActiveDecreaseHealth) this.handleDecreaseHealth();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HealthNode", [_dec2], {
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
//# sourceMappingURL=PA_11_CharHealth.js.map