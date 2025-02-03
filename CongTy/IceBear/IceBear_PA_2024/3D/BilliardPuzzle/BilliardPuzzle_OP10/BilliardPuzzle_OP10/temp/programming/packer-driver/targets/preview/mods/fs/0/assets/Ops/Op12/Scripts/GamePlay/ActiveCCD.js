System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RigidBody, _dec, _class, _crd, ccclass, property, ActiveCCD;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "313b6omHKRAzKqmRlaI4rvT", "ActiveCCD", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ActiveCCD", ActiveCCD = (_dec = ccclass('ActiveCCD'), _dec(_class = class ActiveCCD extends Component {
        start() {
          this.node.getComponent(RigidBody).useCCD = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActiveCCD.js.map