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

      _cclegacy._RF.push({}, "3f16eM2XcpOTKzB+Mq3ew2M", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec(_class = (_temp = class Responsive extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "responsiveUIs", []);

          _defineProperty(this, "device", "");

          _defineProperty(this, "isRotate", false);

          _defineProperty(this, "HORIZONTAL_IPX", "horizontal_IPX");

          _defineProperty(this, "HORIZONTAL_TABLET", "horizontal_Tablet");

          _defineProperty(this, "VERTICAL_IPX", "vertical_IPX");

          _defineProperty(this, "VERTICAL_MOBILE", "vertical_Mobile");
        }

        start() {
          this.handleRotate();
        }

        handleRotate() {
          if (screen.windowSize.width > screen.windowSize.height) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isRotate = true;
            this.isRotate = true;
            this.setHorizontal();
          } else {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isRotate = false;
            this.isRotate = false;
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

          this.device = this.HORIZONTAL_IPX; // IP X

          if (screen.windowSize.height / screen.windowSize.width < 0.47) {
            this.responsiveUIs.forEach(item => {
              item.Node.setPosition(item.Position);
              item.Node.setScale(item.Scale);
            });
          } // IP 6 / 7 / 8
          else {
              this.responsiveUIs.forEach(item => {
                item.Node.setPosition(item.Position);
                item.Node.setScale(item.Scale);
              });
            }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.responsiveUIs.forEach(item => {
            item.Node.setPosition(item.Position);
            item.Node.setScale(item.Scale);
          }); // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
          //     // Iphone 6 / 6 plus / 7 / 7 Plus
          // } else {    
          //     // Ipad
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

          this.device = this.VERTICAL_IPX;
          this.responsiveUIs.forEach(item => {
            item.Node.setPosition(item.Position);
            item.Node.setScale(item.Scale);
          });
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          let width = screen.windowSize.width;
          let height = screen.windowSize.height;

          if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.responsiveUIs.forEach(item => {
              item.Node.setPosition(item.Position);
              item.Node.setScale(item.Scale);
            });
          } else {
            this.responsiveUIs.forEach(item => {
              item.Node.setPosition(item.Position);
              item.Node.setScale(item.Scale);
            });
          } // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
          //     // Iphone 6 / 6 plus / 7 / 7 Plus
          // } else {
          //     // Ipad
          // }

        }

        update(dt) {
          this.handleRotate();
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
//# sourceMappingURL=Responsive.js.map