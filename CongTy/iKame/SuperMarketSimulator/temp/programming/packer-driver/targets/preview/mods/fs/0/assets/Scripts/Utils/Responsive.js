System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, log, screen, UIGameController, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIGameController(extras) {
    _reporterNs.report("UIGameController", "../Controller/UIGameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      log = _cc.log;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      UIGameController = _unresolved_2.UIGameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff71eoWlMBIfr8Nb2N1UV2l", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Responsive = (_dec = property(_crd && UIGameController === void 0 ? (_reportPossibleCrUseOfUIGameController({
        error: Error()
      }), UIGameController) : UIGameController), ccclass(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIGameController", _descriptor, this);

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
            this.isRotate = true;
            this.setHorizontal();
          } else {
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
            this.UIGameController.TouchArea_GiveTheChange.setPosition(330, 130, 0);
            this.UIGameController.TouchArea_GiveTheChange.setScale(1.75, 1.75, 1.75);
            this.UIGameController.TouchArea_Banking.setPosition(330, 130, 0);
            this.UIGameController.TouchArea_Banking.setScale(1.75, 1.75, 1.75);
          } // IP 6 / 7 / 8
          else {
              this.UIGameController.TouchArea_GiveTheChange.setPosition(250, 63, 0);
              this.UIGameController.TouchArea_GiveTheChange.setScale(1.4, 1.4, 1.4);
              this.UIGameController.TouchArea_Banking.setPosition(250, 63, 0);
              this.UIGameController.TouchArea_Banking.setScale(1.4, 1.4, 1.4);
            }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.UIGameController.TouchArea_GiveTheChange.setPosition(205, 2, 0);
          this.UIGameController.TouchArea_GiveTheChange.setScale(1.1, 1.1, 1.1);
          this.UIGameController.TouchArea_Banking.setPosition(205, 2, 0);
          this.UIGameController.TouchArea_Banking.setScale(1.1, 1.1, 1.1); // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
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

          log("vt ipx");
          this.device = this.VERTICAL_IPX;
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {// Iphone 6 / 6 plus / 7 / 7 Plus
          } else {// Ipad
            }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIGameController", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Responsive.js.map