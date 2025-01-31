System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, director, EasyControllerEvent, EasyController, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    EasyControllerEvent: void 0,
    EasyController: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29601ngZGhISKRfKOeHm5VO", "EasyController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EasyControllerEvent", EasyControllerEvent = class EasyControllerEvent {});

      _defineProperty(EasyControllerEvent, "CAMERA_ROTATE", 'EasyControllerEvent.CAMERA_ROTATE');

      _defineProperty(EasyControllerEvent, "CAMERA_ZOOM", 'EasyControllerEvent.CAMERA_ZOOM');

      _defineProperty(EasyControllerEvent, "MOVEMENT", 'EasyControllerEvent.MOVEMENT');

      _defineProperty(EasyControllerEvent, "MOVEMENT_STOP", 'EasyControllerEvent.MOVEMENT_STOP');

      _defineProperty(EasyControllerEvent, "JUMP", 'EasyControllerEvent.JUMP');

      _export("EasyController", EasyController = class EasyController {
        static on(type, callback, target) {
          director.getScene().on(type, callback, target);
        }

        static off(type, callback, target) {
          var _director$getScene;

          (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.off(type, callback, target);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EasyController.js.map