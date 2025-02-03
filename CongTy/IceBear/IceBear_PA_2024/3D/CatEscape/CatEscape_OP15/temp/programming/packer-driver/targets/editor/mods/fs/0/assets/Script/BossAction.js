System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Quat, Vec3, _dec, _class, _crd, ccclass, property, BossAction;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3eadinT6dHdY+UphBQAWhj", "BossAction", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossAction", BossAction = (_dec = ccclass("BossAction"), _dec(_class = class BossAction extends Component {
        start() {
          // [3]
          // tween(this.node)
          //   .by(3.5, { position: new Vec3(6, 0, 0) })
          //   .to(0, { rotation: Quat.fromEuler(new Quat(), 0, -90, 0) })
          //   .by(3.5, { position: new Vec3(-6, 0, 0) })
          //   .to(0, { rotation: Quat.fromEuler(new Quat(), 0, 90, 0) })
          //   .union()
          //   .repeatForever()
          //   .start();
          tween(this.node).by(2.5, {
            position: new Vec3(0, 0, 3.5)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 180, 0)
          }).by(2.5, {
            position: new Vec3(0, 0, -3.5)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 0, 0)
          }).union().repeatForever().start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BossAction.js.map