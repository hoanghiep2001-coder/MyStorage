System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, GameInfo, _crd, ccclass, property, Event, IronSource, Responsive, SoundTrack;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("GameInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3dafa5u3i1HLJpbTnbM+3lg", "GameInfo", undefined);

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

      _export("GameInfo", GameInfo = class GameInfo {});

      _defineProperty(GameInfo, "isRotate", false);

      _defineProperty(GameInfo, "toStore", true);

      _defineProperty(GameInfo, "isTouching", false);

      _defineProperty(GameInfo, "isCanTouch", true);

      _defineProperty(GameInfo, "isDoneStep1", false);

      _defineProperty(GameInfo, "isFailStep1", false);

      _defineProperty(GameInfo, "isFailStep2", false);

      _defineProperty(GameInfo, "isDoneStep2", false);

      _defineProperty(GameInfo, "isCharacterCollideBoos", false);

      _defineProperty(GameInfo, "isFightStep1", false);

      _defineProperty(GameInfo, "isDonePA", false);

      _defineProperty(GameInfo, "Event", Event);

      _defineProperty(GameInfo, "SoundTrack", SoundTrack);

      _defineProperty(GameInfo, "ironSource", IronSource);

      _defineProperty(GameInfo, "Responsive", Responsive);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameInfo.js.map