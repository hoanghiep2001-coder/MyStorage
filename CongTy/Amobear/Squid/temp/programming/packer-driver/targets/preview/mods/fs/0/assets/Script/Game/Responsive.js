System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, screen, GameInfo, _dec, _class, _temp, _crd, ccclass, property, Responsive;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c659dyycZOSLXLEYpk8aF8", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec(_class = (_temp = class Responsive extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "device", "");

          _defineProperty(this, "isRotate", false);

          _defineProperty(this, "hint_Pos_X", void 0);

          _defineProperty(this, "hint_Pos_Y", void 0);

          _defineProperty(this, "hand", null);

          _defineProperty(this, "HORIZONTAL_IPX", "horizontal_IPX");

          _defineProperty(this, "HORIZONTAL_TABLET", "horizontal_Tablet");

          _defineProperty(this, "VERTICAL_IPX", "vertical_IPX");

          _defineProperty(this, "VERTICAL_MOBILE", "vertical_Mobile");
        }

        onLoad() {}

        start() {}

        handleRotate() {
          if (screen.windowSize.width > screen.windowSize.height) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isRotate = true;
            this.setHorizontal();
          } else {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isRotate = false;
            this.setVertical();
          }
        }

        setHorizontal() {
          if (screen.windowSize.height / screen.windowSize.width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
          } else {
            this.setHorizontalForTablet();
          }
        }

        setHorizontalForIpX() {
          if (this.HORIZONTAL_IPX === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_IPX; // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
          //     // Applovin horizontal
          //     return;
          // }    

          if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            console.log(1);
          } else {
            // IpX
            console.log(2);
          }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          console.log(3); // horizontal google
          // if(cc.screen.windowSize.width / cc.screen.windowSize.height <= 1.2 && cc.screen.windowSize.width / cc.screen.windowSize.height >= 1.2) {
          //     return;
          // }
        }

        setVertical() {
          if (screen.windowSize.width / screen.windowSize.height < 0.5) {
            this.setIphoneX();
          } else {
            this.setMobile();
          }
        }

        setIphoneX() {
          if (this.VERTICAL_IPX === this.device) {
            return;
          }

          this.device = this.VERTICAL_IPX; // this.GamePlay.video.node.setScale(0.98, 0.98, 0.98);

          console.log(4);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 plus / 7 / 7 Plus
            console.log(5);
          } else {
            // Ipad
            console.log(6);
          }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Responsive.js.map