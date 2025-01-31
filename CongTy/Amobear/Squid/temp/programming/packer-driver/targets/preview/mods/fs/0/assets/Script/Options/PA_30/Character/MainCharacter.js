System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimation, GameInfo, _dec, _class, _temp, _crd, ccclass, property, MainCharacter;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      SkeletalAnimation = _cc.SkeletalAnimation;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bb1bBJM5NJYLkjYHtKb/HM", "MainCharacter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainCharacter", MainCharacter = (_dec = ccclass('MainCharacter'), _dec(_class = (_temp = class MainCharacter extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isDie", false);

          _defineProperty(this, "isWin", false);
        }

        start() {}

        die() {
          this.isDie = true;
          this.node.getComponent(SkeletalAnimation).play("Die");
          this.scheduleOnce(() => (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall = true, 1.5);
        }

        win() {
          this.isWin = true;
          this.node.getComponent(SkeletalAnimation).play("Dance");
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isLose && !this.isDie) this.die();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin && !this.isWin) this.win();
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=MainCharacter.js.map