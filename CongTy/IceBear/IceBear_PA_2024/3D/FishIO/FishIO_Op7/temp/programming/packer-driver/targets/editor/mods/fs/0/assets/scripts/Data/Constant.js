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

      _cclegacy._RF.push({}, "4f504KFP+xHz5n0KXMp6asG", "Constant", undefined);

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
        SoundTrack["videoSound"] = "videoSound";
        SoundTrack["eatSound"] = "eatSound";
        SoundTrack["dieSound"] = "dieSound";
        SoundTrack["whooseSound"] = "whooseSound";
        SoundTrack["Skiing_BgSound"] = "Skiing_BgSound";
        SoundTrack["Skiing_EatSound"] = "Skiing_EatSound";
        SoundTrack["Skiing_JumpSound"] = "Skiing_JumpSound";
        SoundTrack["Skiing_ScreamSound"] = "Skiing_ScreamSound";
      })(SoundTrack || (SoundTrack = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "isClickBtnLeft", false);

      _defineProperty(Constants, "isClickBtnJump", false);

      _defineProperty(Constants, "isOnGround", true);

      _defineProperty(Constants, "isJumping", false);

      _defineProperty(Constants, "isCanClick", true);

      _defineProperty(Constants, "isCanClickBtnLeft", true);

      _defineProperty(Constants, "isPlayGame", false);

      _defineProperty(Constants, "isReplay", false);

      _defineProperty(Constants, "forceReplay", false);

      _defineProperty(Constants, "flagReplay", false);

      _defineProperty(Constants, "isPlaySound", false);

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "isCompleteVideo", false);

      _defineProperty(Constants, "toStore", false);

      _defineProperty(Constants, "isTouching", false);

      _defineProperty(Constants, "score", 20);

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