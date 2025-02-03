System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, HandleGraphics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2570w97CJBM5lefcRjV3R/", "HandleGraphics", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HandleGraphics", HandleGraphics = (_dec = ccclass('HandleGraphics'), _dec(_class = class HandleGraphics extends Component {
        start() {
          this.registerEvent();
        }

        registerEvent() {
          var graphics = this.node.getComponent(Graphics);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HandleGraphics.js.map