System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, log, _dec, _class, _temp, _crd, ccclass, property, HandleGraphics;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0215D5omRJD5xwaN7/PeYb", "HandleGraphics", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HandleGraphics
       * DateTime = Mon Aug 26 2024 09:38:33 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = HandleGraphics.ts
       * FileBasenameNoExtension = HandleGraphics
       * URL = db://assets/Scripts/GamePlay/HandleGraphics.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("HandleGraphics", HandleGraphics = (_dec = ccclass('HandleGraphics'), _dec(_class = (_temp = class HandleGraphics extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "graphics", null);
        }

        start() {
          this.graphics = this.getComponent(Graphics);
        }

        drawGraphics(moveTo, LineTo) {
          this.graphics.moveTo(moveTo.x, moveTo.y);
          this.graphics.lineTo(LineTo.x, LineTo.y);
          this.graphics.stroke();
          log("Drawing");
        }

        clearGraphics() {
          this.graphics.clear();
          log("Clear Graphics");
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
//# sourceMappingURL=HandleGraphics.js.map