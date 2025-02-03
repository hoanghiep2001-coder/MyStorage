System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Constants, _crd, ccclass, property, Event, IronSource, Responsive, SoundTrack;

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
      Responsive = {
        HORIZONTAL_IPX: "horizontal_IPX",
        HORIZONTAL_TABLET: "horizontal_Tablet",
        VERTICAL_IPX: "vertical_IPX",
        VERTICAL_MOBILE: "vertical_Mobile"
      };

      (function (SoundTrack) {
        SoundTrack["bgSound"] = "bgSound";
        SoundTrack["hitSound"] = "hitSound";
        SoundTrack["collideWallSound"] = "collideWallSound";
        SoundTrack["collideBallSound"] = "collideBallSound";
        SoundTrack["GoalSound"] = "GoalSound";
        SoundTrack["ComboSound"] = "ComboSound";
        SoundTrack["LoseSound"] = "LoseSound";
        SoundTrack["inHoleSound"] = "inHoleSound";
        SoundTrack["AngleSound"] = "AngleSound";
        SoundTrack["woaSound1"] = "woaSound1";
        SoundTrack["woaSound2"] = "woaSound2";
      })(SoundTrack || (SoundTrack = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "isPlayGame", false);

      _defineProperty(Constants, "isPlaySound", false);

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "toStore", false);

      _defineProperty(Constants, "isTouching", false);

      _defineProperty(Constants, "isPlaying", false);

      _defineProperty(Constants, "isLose", false);

      _defineProperty(Constants, "isWin", false);

      _defineProperty(Constants, "isPlayFirstTime", false);

      _defineProperty(Constants, "isMainBallStoped", false);

      _defineProperty(Constants, "shootingTurn", 4);

      _defineProperty(Constants, "playedCount", 0);

      _defineProperty(Constants, "scoreCount", 0);

      _defineProperty(Constants, "comboCount", 0);

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