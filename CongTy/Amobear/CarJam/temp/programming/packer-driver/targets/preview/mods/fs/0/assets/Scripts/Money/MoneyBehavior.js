System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, log, Node, tween, Vec3, GameInfo, SoundController, CONST, _dec, _class, _crd, ccclass, property, MoneyBehavior;

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }, function (_unresolved_4) {
      CONST = _unresolved_4.CONST;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db6cf6Ky+BHeJ+CN/+jEqUp", "MoneyBehavior", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MoneyBehavior
       * DateTime = Fri Nov 22 2024 15:46:51 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = MoneyBehavior.ts
       * FileBasenameNoExtension = MoneyBehavior
       * URL = db://assets/Scripts/Money/MoneyBehavior.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MoneyBehavior", MoneyBehavior = (_dec = ccclass('MoneyBehavior'), _dec(_class = class MoneyBehavior extends Component {
        start() {
          this.registerEvent(); // log("ahihi", this.node.name)
        }

        registerEvent() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        }

        bounceAnim() {
          var startScaLe = new Vec3(1, 1, 1);
          var bounceScale = new Vec3(startScaLe.x - 0.05, startScaLe.y - 0.05, startScaLe.z - 0.05);
          tween(this.node.parent).to(0.1, {
            scale: bounceScale
          }, {
            easing: easing.smooth
          }).to(0.1, {
            scale: startScaLe
          }, {
            easing: easing.smooth
          }).start();
        }

        touchStart() {
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.clickSound); // if parent's name of btn is "Nums", active input banking. else active cash payment

          if (this.node.parent.name === "Nums") this.handleBankingPayment();else this.handleCashPayment();
        }

        handleBankingPayment() {
          // log(GameInfo.currentBankingInput.slice(0, -1))
          if (this.node.name === "del") {
            var newInput = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentBankingInput.slice(0, -1);
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentBankingInput = newInput;
          } else (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentBankingInput = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentBankingInput.concat(this.node.name);
        }

        handleCashPayment() {
          this.bounceAnim();

          if (this.node.parent.parent.name === "dollar") {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).lastDollarGiveBack = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGiveBack;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGiveBack += 1;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGive += Number(this.node.name);
          } else {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).lastCenGiveBack = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGiveBack;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGiveBack += 1;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGive += Number(this.node.name);
          }

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive >= 100) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGive += 1;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGive -= 100;
          }

          log((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive, (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive);
        }

        touchEnd() {// GameInfo.moneyUserTouching = Number(this.node.name);
          // log(GameInfo.moneyUserTouching);
        }

      }) || _class));
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
//# sourceMappingURL=MoneyBehavior.js.map