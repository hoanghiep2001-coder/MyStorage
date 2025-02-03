System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventTarget, EventManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a57e7YVSdLdqWtG/0/35WP", "EventManager", undefined);

      EventManager = class EventManager {
        constructor() {
          _defineProperty(this, "_eventTarget", void 0);

          this._eventTarget = new EventTarget();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new EventManager();
          }

          return this._instance;
        }

        emit(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this._eventTarget.emit(event, ...args);
        }

        on(event, callback, target) {
          this._eventTarget.on(event, callback, target);
        }

        off(event, callback, target) {
          this._eventTarget.off(event, callback, target);
        }

      };

      _defineProperty(EventManager, "_instance", void 0);

      _export("default", EventManager);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventManager.js.map