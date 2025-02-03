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

      _cclegacy._RF.push({}, "ad635qlxYJKO7zA3Z348j6W", "Constant", undefined);

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
        SoundTrack["catAngrySound"] = "catAngrySound";
        SoundTrack["electricSound"] = "electricSound";
        SoundTrack["electric2Sound"] = "electric2Sound";
        SoundTrack["winSound"] = "winSound";
        SoundTrack["loseSound"] = "loseSound";
        SoundTrack["eatSound"] = "eatSound";
        SoundTrack["clockSound"] = "clockSound";
      })(SoundTrack || (SoundTrack = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "localPos", null);

      _defineProperty(Constants, "bossAction", null);

      _defineProperty(Constants, "countingTime", 1);

      _defineProperty(Constants, "isCatLive", true);

      _defineProperty(Constants, "isEatFood", false);

      _defineProperty(Constants, "isCatched", false);

      _defineProperty(Constants, "laser", false);

      _defineProperty(Constants, "wallLaser", true);

      _defineProperty(Constants, "isTouch", false);

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "isRing", false);

      _defineProperty(Constants, "isCollideDoor", false);

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