System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, screen, Widget, GamePlay, Constants, UIController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "./GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UIController", _context.meta, extras);
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
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      GamePlay = _unresolved_2.GamePlay;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      UIController = _unresolved_4.UIController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c659dyycZOSLXLEYpk8aF8", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec2 = property(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
        error: Error()
      }), GamePlay) : GamePlay), _dec3 = property(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "UIController", _descriptor2, this);

          _initializerDefineProperty(this, "layer", _descriptor3, this);

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
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isRotate = true;
            this.setHorizontal();
          } else {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isRotate = false;
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

          this.layer.active = false;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFirstClick) {
            this.layer.active = true;
          }

          this.GamePlay.btn_accept.setPosition(45, -45, 0);
          this.GamePlay.btn_accept.setScale(0.42, 0.42, 0.42);
          this.GamePlay.btn_decline.setPosition(-45, -45, 0);
          this.GamePlay.btn_decline.setScale(0.42, 0.42, 0.42);
          this.UIController.background.setScale(0.3, 0.3, 0.3);
          this.UIController.Effect.setScale(0.3, 0.3, 0.3);
          this.UIController.hand.active = false;
          this.UIController.avt_name.setPosition(0, -15, 0);
          this.UIController.avt_name.setScale(0.22, 0.22, 0.22);
          this.UIController.avatar.setPosition(0, 30, 0);
          this.UIController.avatar.setScale(0.17, 0.17, 0.17);
          this.UIController.time.node.setScale(0.18, 0.18, 0.18);
          this.UIController.time.getComponent(Widget).left = 5;
          this.UIController.time.getComponent(Widget).top = 5;
          this.UIController.icons.setScale(0.22, 0.22, 0.22);
          this.UIController.icons.getComponent(Widget).right = 5;
          this.UIController.icons.getComponent(Widget).top = 8;

          if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.GamePlay.video.node.setScale(0.45, 0.45, 0.45);
            this.GamePlay.btn_accept.setPosition(45, -52, 0);
            this.GamePlay.btn_decline.setPosition(-45, -52, 0);
            this.GamePlay.CTA_icon.setScale(0.17, 0.17, 0.17);
            this.GamePlay.CTA_icon.setPosition(0, 35, 0);
            this.GamePlay.CTA_btn.setScale(0.2, 0.2, 0.2);
            this.GamePlay.CTA_btn.setPosition(0, -45, 0);
            console.log(1);
          } else {
            // IpX
            this.GamePlay.video.node.setScale(0.4, 0.4, 0.4);
            this.GamePlay.CTA_icon.setScale(0.15, 0.15, 0.15);
            this.GamePlay.CTA_icon.setPosition(0, 20, 0);
            this.GamePlay.CTA_btn.setScale(0.15, 0.15, 0.15);
            this.GamePlay.CTA_btn.setPosition(0, -40, 0);
            console.log(2);
          }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.layer.active = false;

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFirstClick) {
            this.layer.active = true;
          }

          this.GamePlay.video.node.setScale(0.6, 0.6, 0.6);
          this.UIController.hand.active = false;
          this.GamePlay.btn_accept.setPosition(45, -75, 0);
          this.GamePlay.btn_accept.setScale(0.6, 0.6, 0.6);
          this.GamePlay.btn_decline.setPosition(-45, -75, 0);
          this.GamePlay.btn_decline.setScale(0.6, 0.6, 0.6);
          this.UIController.background.setScale(0.3, 0.3, 0.3);
          this.UIController.Effect.setScale(0.3, 0.3, 0.3);
          this.UIController.avt_name.setPosition(0, -5, 0);
          this.UIController.avt_name.setScale(0.3, 0.3, 0.3);
          this.UIController.avatar.setPosition(0, 60, 0);
          this.UIController.avatar.setScale(0.25, 0.25, 0.25);
          this.UIController.time.node.setScale(0.18, 0.18, 0.18);
          this.UIController.time.getComponent(Widget).left = 5;
          this.UIController.time.getComponent(Widget).top = 5;
          this.UIController.icons.setScale(0.22, 0.22, 0.22);
          this.UIController.icons.getComponent(Widget).right = 5;
          this.UIController.icons.getComponent(Widget).top = 8;
          this.GamePlay.CTA_icon.setScale(0.17, 0.17, 0.17);
          this.GamePlay.CTA_icon.setPosition(0, 35, 0);
          this.GamePlay.CTA_btn.setScale(0.2, 0.2, 0.2);
          this.GamePlay.CTA_btn.setPosition(0, -45, 0);
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

          this.device = this.VERTICAL_IPX;
          this.layer.active = false;
          this.GamePlay.video.node.setScale(1.1, 1.1, 1.1);
          this.GamePlay.btn_accept.setPosition(80, -210, 0);
          this.GamePlay.btn_accept.setScale(1, 1, 1);
          this.GamePlay.btn_decline.setPosition(-80, -210, 0);
          this.GamePlay.btn_decline.setScale(1, 1, 1);
          this.UIController.background.setScale(1, 1, 1);
          this.UIController.Effect.setScale(1, 1, 1);
          this.UIController.hand.active = true;
          this.UIController.avt_name.setPosition(0, -70, 0);
          this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
          this.UIController.avatar.setPosition(0, 65, 0);
          this.UIController.avatar.setScale(0.5, 0.5, 0.5);
          this.UIController.time.node.setScale(0.4, 0.4, 0.4);
          this.UIController.time.getComponent(Widget).left = 12;
          this.UIController.time.getComponent(Widget).top = 10;
          this.UIController.icons.setScale(0.45, 0.45, 0.45);
          this.UIController.icons.getComponent(Widget).right = 5;
          this.UIController.icons.getComponent(Widget).top = 12;
          this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
          this.GamePlay.CTA_icon.setPosition(0, 80, 0);
          this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
          this.GamePlay.CTA_btn.setPosition(0, -125, 0);
          console.log(4);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          this.layer.active = false;

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.GamePlay.video.node.setScale(1.35, 1.35, 1.35); // this.GamePlay.video.node.setScale(0.9, 0.9, 0.9);

            this.UIController.hand.active = false;
            this.GamePlay.btn_accept.setPosition(80, -210, 0);
            this.GamePlay.btn_accept.setScale(1, 1, 1);
            this.GamePlay.btn_decline.setPosition(-80, -210, 0);
            this.GamePlay.btn_decline.setScale(1, 1, 1);
            this.UIController.background.setScale(1, 1, 1);
            this.UIController.Effect.setScale(1, 1, 1);
            this.UIController.avt_name.setPosition(0, -70, 0);
            this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
            this.UIController.avatar.setPosition(0, 65, 0);
            this.UIController.avatar.setScale(0.5, 0.5, 0.5);
            this.UIController.time.node.setScale(0.4, 0.4, 0.4);
            this.UIController.time.getComponent(Widget).left = 10;
            this.UIController.time.getComponent(Widget).top = 10;
            this.UIController.icons.setScale(0.5, 0.5, 0.5);
            this.UIController.icons.getComponent(Widget).right = 5;
            this.UIController.icons.getComponent(Widget).top = 15;
            this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
            this.GamePlay.CTA_icon.setPosition(0, 80, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
            this.GamePlay.CTA_btn.setPosition(0, -125, 0);
            console.log(5);
          } else {
            // Ipad
            this.GamePlay.video.node.setScale(1.13, 1.13, 1.13); // this.GamePlay.video.node.setScale(0.8, 0.8, 0.8);

            this.UIController.hand.active = false;
            this.GamePlay.btn_accept.setPosition(80, -160, 0);
            this.GamePlay.btn_accept.setScale(0.85, 0.85, 0.85);
            this.GamePlay.btn_decline.setPosition(-80, -160, 0);
            this.GamePlay.btn_decline.setScale(0.85, 0.85, 0.85);
            this.UIController.background.setScale(1, 1, 1);
            this.UIController.Effect.setScale(1, 1, 1);
            this.UIController.avt_name.setPosition(0, -70, 0);
            this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
            this.UIController.avatar.setPosition(0, 65, 0);
            this.UIController.avatar.setScale(0.5, 0.5, 0.5);
            this.UIController.time.node.setScale(0.4, 0.4, 0.4);
            this.UIController.time.getComponent(Widget).left = 10;
            this.UIController.time.getComponent(Widget).top = 10;
            this.UIController.icons.setScale(0.5, 0.5, 0.5);
            this.UIController.icons.getComponent(Widget).right = 5;
            this.UIController.icons.getComponent(Widget).top = 15;
            this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
            this.GamePlay.CTA_icon.setPosition(0, 80, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
            this.GamePlay.CTA_btn.setPosition(0, -125, 0);
            console.log(6);
          }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Responsive.js.map