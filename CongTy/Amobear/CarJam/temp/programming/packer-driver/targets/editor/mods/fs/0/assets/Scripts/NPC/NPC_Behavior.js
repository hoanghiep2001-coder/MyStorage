System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, log, Node, SkeletalAnimation, tween, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, NPC_Behavior;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      log = _cc.log;
      Node = _cc.Node;
      SkeletalAnimation = _cc.SkeletalAnimation;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8c38/ma6dHh7ZfDCPghaOL", "NPC_Behavior", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = NPC_Behavior
       * DateTime = Sat Nov 23 2024 00:06:45 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = NPC_Behavior.ts
       * FileBasenameNoExtension = NPC_Behavior
       * URL = db://assets/Scripts/NPC/NPC_Behavior.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("NPC_Behavior", NPC_Behavior = (_dec = ccclass('NPC_Behavior'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class NPC_Behavior extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "payment", _descriptor, this);

          _defineProperty(this, "currentNPC_ID", null);

          _defineProperty(this, "isPaid", false);

          _defineProperty(this, "isWaitingToGetChange", false);
        }

        start() {
          // setup NPC id
          this.currentNPC_ID = Number(this.node.name.split("_")[1]);
          this.nextStand(false);
        }

        updateStandForNPC() {
          // this.currentNPC_ID -= 1;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentItems = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentSuccessClick;
          let isDonePayment = false;
          if (this.currentNPC_ID < (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentSuccessClick) isDonePayment = true;
          this.nextStand(isDonePayment);
        }

        nextStand(isDonePayment) {
          // GameInfo.isNPCDoneMove = false;
          // GameInfo.isCanTouch = false;
          this.node.setRotationFromEuler(0, -90, 0);
          this.node.getComponent(SkeletalAnimation).play("Walk");

          if (isDonePayment) {
            tween(this.node).to(1, {
              position: (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).NPC_DoorStand
            }, {
              easing: easing.smooth
            }).call(() => this.node.active = false).start();
          } else {
            log("updateId:", this.currentNPC_ID);
            tween(this.node).to(1, {
              position: (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).NPC_StandPoints[this.currentNPC_ID - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentSuccessClick].position
            }, {
              easing: easing.smooth
            }).call(() => {
              this.node.setRotationFromEuler(0, (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).NPC_StandPoints[this.currentNPC_ID - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentSuccessClick].rotate, 0);
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isNPCDoneMove = true;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isCanTouch = true;
              this.node.getComponent(SkeletalAnimation).play("Idle");
            }).start();
          }
        }

        update(dt) {
          // pay money
          if (this.currentNPC_ID === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentSuccessClick && (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentItems === 0 && !this.isPaid) {
            this.isPaid = true;
            this.payment.active = true;
            this.node.getComponent(SkeletalAnimation).play("Hand forward");
            this.scheduleOnce(() => this.node.getComponent(SkeletalAnimation).play("Hand forward Idle"), 0.2);
          } // waiting to get change


          if (this.isPaid && this.currentNPC_ID === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).NPCpaidTimes && !this.isWaitingToGetChange) {
            this.isWaitingToGetChange = true;
            this.node.getComponent(SkeletalAnimation).play("Idle");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "payment", [_dec2], {
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
//# sourceMappingURL=NPC_Behavior.js.map