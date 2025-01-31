System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, tween, Camera, easing, GameInfo, _dec, _class, _temp, _crd, ccclass, property, CameraComponent;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      tween = _cc.tween;
      Camera = _cc.Camera;
      easing = _cc.easing;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "807943GWgZJ+qmn8na567+2", "Camera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Camera
       * DateTime = Thu Dec 19 2024 11:05:27 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = Camera.ts
       * FileBasenameNoExtension = Camera
       * URL = db://assets/Scripts/UI/Camera.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CameraComponent", CameraComponent = (_dec = ccclass('Camera'), _dec(_class = (_temp = class CameraComponent extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "originalFov", null);

          _defineProperty(this, "cameraComp", null);
        }

        start() {
          this.cameraComp = this.node.getComponent(Camera);
          this.originalFov = this.cameraComp.fov;
        }

        vibration() {
          tween(this.cameraComp).to(0.1, {
            fov: this.originalFov + 1
          }, {
            easing: easing.smooth
          }).to(0.1, {
            fov: this.originalFov
          }, {
            easing: easing.smooth
          }).start();
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).activeVibration) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).activeVibration = false;
            this.vibration();
          }
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
//# sourceMappingURL=Camera.js.map