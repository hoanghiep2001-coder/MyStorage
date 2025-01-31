System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, log, Node, _dec, _class, _crd, ccclass, property, UI_HideMask;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8399AMWmhAuqlf/nHiFYlG", "UI_HideMask", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UI_HideMask
       * DateTime = Mon Dec 23 2024 17:01:29 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = UI_HideMask.ts
       * FileBasenameNoExtension = UI_HideMask
       * URL = db://assets/scripts/UI/UI_HideMask.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("UI_HideMask", UI_HideMask = (_dec = ccclass('UI_HideMask'), _dec(_class = class UI_HideMask extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart() {
          log("Check");
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
//# sourceMappingURL=UI_HideMask.js.map