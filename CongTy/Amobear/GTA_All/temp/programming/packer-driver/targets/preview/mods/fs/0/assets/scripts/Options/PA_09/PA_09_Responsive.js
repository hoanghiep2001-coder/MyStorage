System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, screen, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PA_09_Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77ed8aKK6JBRb5GT1lHCu5a", "PA_09_Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_09_Responsive", PA_09_Responsive = (_dec = ccclass('PA_09_Responsive'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class PA_09_Responsive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "LandScape_UI", _descriptor, this);

          _initializerDefineProperty(this, "Portrait_UI", _descriptor2, this);

          _initializerDefineProperty(this, "UI_Brake", _descriptor3, this);

          _initializerDefineProperty(this, "CTA", _descriptor4, this);

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
            this.LandScape_UI.active = true;
            this.Portrait_UI.active = false;
            this.setHorizontal();
          } else {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isRotate = false;
            this.isRotate = false;
            this.LandScape_UI.active = false;
            this.Portrait_UI.active = true;
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
            this.CTA.setScale(2.2, 2.2, 2.2);
          } // IP 6 / 7 / 8
          else {
              this.CTA.setScale(2.2, 2.2, 2.2);
            }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.CTA.setScale(2.2, 2.2, 2.2); // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
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
          this.CTA.setScale(4.4, 4.4, 2.2);
          this.UI_Brake.setPosition(-729.138, -352.886, 0);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          var width = screen.windowSize.width;
          var height = screen.windowSize.height;

          if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.CTA.setScale(4.4, 4.4, 2.2);
            this.UI_Brake.setPosition(-729.138, -352.886, 0);
          } else {
            this.CTA.setScale(4.4, 4.4, 2.2);
            this.UI_Brake.setPosition(-729.138, -150, 0);
          } // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
          //     // Iphone 6 / 6 plus / 7 / 7 Plus
          // } else {
          //     // Ipad
          // }

        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "LandScape_UI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Portrait_UI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "UI_Brake", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=PA_09_Responsive.js.map