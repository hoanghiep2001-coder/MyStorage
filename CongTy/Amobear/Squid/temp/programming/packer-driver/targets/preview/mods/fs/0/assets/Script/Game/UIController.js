System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, UIController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbbeewRqIxDUJyFgFUdCrAU", "UIController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec(_class = class UIController extends Component {
        start() {}

        setupTime() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIController.js.map