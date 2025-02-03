System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Camera, Component, _dec, _class, _temp, _crd, ccclass, property, CameraController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a31f86fp3JJCbWTGM9ai5co", "CameraController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CameraController", CameraController = (_dec = ccclass('CameraController'), _dec(_class = (_temp = class CameraController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "camera", null);
        }

        start() {
          this.camera = this.getComponent(Camera); // this.camera.clearColor = Color.lerp(hsl(195.92,88.02%,67.25%))
          // let  c = Color.add(new math.Color(195.92, 88, 67), new math.Color(195.92, 88, 67), new math.Color(195.92, 88, 67));
          // this.camera.clearColor = c;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CameraController.js.map