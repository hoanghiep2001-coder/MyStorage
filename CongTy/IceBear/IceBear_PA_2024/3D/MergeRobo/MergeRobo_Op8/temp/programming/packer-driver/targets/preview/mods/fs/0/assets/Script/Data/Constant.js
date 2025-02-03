System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Constants, _crd, ccclass, property, Event, IronSource, GameData, Responsive, SoundTrack;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Constants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "003cf7+IiVN57yGe89L8QSt", "Constant", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      Event = {
        touchStart: "touchstart",
        touchMove: "touchmove",
        touchEnd: "touchend",
        touchCancel: "touchcancel"
      };
      IronSource = {
        SoundState: true,
        State: 1,
        isEndGame: false,
        isPlayBgSound: false
      };
      GameData = {
        isDoneStep1: false,
        roboTouchingNumber: null,
        touchPointCount: 0
      };
      Responsive = {
        HORIZONTAL_IPX: "horizontal_IPX",
        HORIZONTAL_TABLET: "horizontal_Tablet",
        VERTICAL_IPX: "vertical_IPX",
        VERTICAL_MOBILE: "vertical_Mobile"
      };

      (function (SoundTrack) {
        SoundTrack["bgSound"] = "bgSound";
        SoundTrack["MergeSound"] = "MergeSound";
        SoundTrack["succesSound"] = "succesSound";
        SoundTrack["chooseSound"] = "chooseSound";
        SoundTrack["Dino_AttkSound"] = "Dino_AttkSound";
        SoundTrack["DieSound"] = "DieSound";
      })(SoundTrack || (SoundTrack = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "toStore", true);

      _defineProperty(Constants, "isTouching", false);

      _defineProperty(Constants, "isCanTouch", true);

      _defineProperty(Constants, "isDoneStep1", false);

      _defineProperty(Constants, "isFailStep1", false);

      _defineProperty(Constants, "isFailStep2", false);

      _defineProperty(Constants, "isDoneStep2", false);

      _defineProperty(Constants, "isCharacterCollideBoos", false);

      _defineProperty(Constants, "isFightStep1", false);

      _defineProperty(Constants, "isDonePA", false);

      _defineProperty(Constants, "GameData", GameData);

      _defineProperty(Constants, "Event", Event);

      _defineProperty(Constants, "SoundTrack", SoundTrack);

      _defineProperty(Constants, "ironSource", IronSource);

      _defineProperty(Constants, "Responsive", Responsive);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Constant.js.map