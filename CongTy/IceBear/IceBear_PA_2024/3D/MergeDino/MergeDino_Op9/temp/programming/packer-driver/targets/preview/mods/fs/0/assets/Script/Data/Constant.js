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
        SoundTrack["Dino_AttkSound"] = "Dino_AttkSound";
        SoundTrack["Dino_LoseSound"] = "Dino_LoseSound";
        SoundTrack["Dino_ScreamSound"] = "Dino_ScreamSound";
        SoundTrack["Dino_MergeSound"] = "Dino_MergeSound";
        SoundTrack["Dino_FightSound"] = "Dino_FightSound";
        SoundTrack["Dino_ChooseSound"] = "Dino_ChooseSound";
      })(SoundTrack || (SoundTrack = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "isPlayGame", false);

      _defineProperty(Constants, "isPlaySound", false);

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "toStore", false);

      _defineProperty(Constants, "isTouching", false);

      _defineProperty(Constants, "isDoneMergeStep1", false);

      _defineProperty(Constants, "isDoneMergeStep2", false);

      _defineProperty(Constants, "isDoneStep1", false);

      _defineProperty(Constants, "isDoneStep2", false);

      _defineProperty(Constants, "isStartStep2", false);

      _defineProperty(Constants, "isCharacterCollideBoos", false);

      _defineProperty(Constants, "isCharacter_2CollideBoos", false);

      _defineProperty(Constants, "isCanTouch", true);

      _defineProperty(Constants, "isFightStep1", false);

      _defineProperty(Constants, "isFightStep2", false);

      _defineProperty(Constants, "isFailStep1", false);

      _defineProperty(Constants, "isFailStep2", false);

      _defineProperty(Constants, "isMergeStep1States", [false, false, false, false, false, false, false, false]);

      _defineProperty(Constants, "isMergeStep2States", [false, false, false, false, false, false]);

      _defineProperty(Constants, "step", 1);

      _defineProperty(Constants, "targetPos", null);

      _defineProperty(Constants, "point", null);

      _defineProperty(Constants, "points_1", null);

      _defineProperty(Constants, "points_2", null);

      _defineProperty(Constants, "dino_lines", null);

      _defineProperty(Constants, "dino_lines_2", null);

      _defineProperty(Constants, "unitsStep1InitPos", null);

      _defineProperty(Constants, "unitsStep2InitPos", null);

      _defineProperty(Constants, "dinosStep1InitPos", null);

      _defineProperty(Constants, "dinosStep2InitPos", null);

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