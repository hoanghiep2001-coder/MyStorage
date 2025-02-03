System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, math, tween, Vec3, _dec, _class, _crd, ccclass, property, CameraController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12589K2EypIhboUdyGU7pg7", "CameraController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CameraController", CameraController = (_dec = ccclass('CameraController'), _dec(_class = class CameraController extends Component {
        start() {// this.initCamera();
          // this.scheduleOnce(() => this.activeTweenCameraStep1(), 1);
          // log(this.node.getWorldRotation())
          // x: -0.42896666549203716, y: 0, z: 0, w: 0.9033203196522498
        }

        initCamera() {
          this.node.setPosition(0, -6.625, 14.593);
          this.node.setWorldRotation(math.quat(-0.42896666549203716, 0, 0, 0.9033203196522498)); // this.node.setRotationFromEuler(-50.804, 0, 0);
        }

        activeTweenCameraStep1() {
          tween(this.node).to(1, {
            position: new Vec3(-0.23, -11.587, 5.744),
            worldRotation: math.quat(-315, 180, 0)
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CameraController.js.map