System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Constants, _crd, Event, IronSource, SoundTrack, Responsive;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Constants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2561f056PZNnalT4L0PDxZm", "constants", undefined);

      (function (Event) {
        Event["touchStart"] = "touchstart";
        Event["touchMove"] = "touchmove";
        Event["touchEnd"] = "touchend";
        Event["touchCancel"] = "touchcancel";
      })(Event || (Event = {}));

      IronSource = {
        // ironsource 
        SoundState: true,
        State: 1,
        isEndGame: false,
        isPlayBgSound: false
      };

      (function (SoundTrack) {
        SoundTrack["bgSound"] = "bgSound";
        SoundTrack["rope_1Sound"] = "rope_1Sound";
        SoundTrack["rope_2Sound"] = "rope_2Sound";
        SoundTrack["winSound"] = "winSound";
        SoundTrack["breakSound"] = "breakSound";
      })(SoundTrack || (SoundTrack = {}));

      (function (Responsive) {
        Responsive["HORIZONTAL_IPX"] = "horizontal_IPX";
        Responsive["HORIZONTAL_TABLET"] = "horizontal_Tablet";
        Responsive["VERTICAL_IPX"] = "vertical_IPX";
        Responsive["VERTICAL_MOBILE"] = "vertical_Mobile";
      })(Responsive || (Responsive = {}));

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "isRotate", false);

      _defineProperty(Constants, "isCanClick", true);

      _defineProperty(Constants, "isTouchFirstBtn", false);

      _defineProperty(Constants, "isTouchSecondBtn", false);

      _defineProperty(Constants, "isTouchThirdBtn", false);

      _defineProperty(Constants, "isTouchForthBtn", false);

      _defineProperty(Constants, "isTouchFifthBtn", false);

      _defineProperty(Constants, "isTouchSixthBtn", false);

      _defineProperty(Constants, "isTouchSeventhBtn", false);

      _defineProperty(Constants, "isTouchEighthBtn", false);

      _defineProperty(Constants, "isTouchNinthBtn", false);

      _defineProperty(Constants, "isTouchTenthBtn", false);

      _defineProperty(Constants, "step", null);

      _defineProperty(Constants, "percentage", 0);

      _defineProperty(Constants, "Event", Event);

      _defineProperty(Constants, "ironSource", IronSource);

      _defineProperty(Constants, "Responsive", Responsive);

      _defineProperty(Constants, "SoundTrack", SoundTrack);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=constants.js.map