System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UI_Controller, Constants, _decorator, Component, screen, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUI_Controller(extras) {
    _reporterNs.report("UI_Controller", "../Controller/UI_Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      screen = _cc.screen;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UI_Controller = _unresolved_2.UI_Controller;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "630d5sEvfpF9ag+mP+0vOxw", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Responsive = (_dec = property(_crd && UI_Controller === void 0 ? (_reportPossibleCrUseOfUI_Controller({
        error: Error()
      }), UI_Controller) : UI_Controller), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), ccclass(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "UI_Controller", _descriptor, this);

          _initializerDefineProperty(this, "Skiing_container", _descriptor2, this);

          _initializerDefineProperty(this, "Skiing_BtnLeft", _descriptor3, this);

          _initializerDefineProperty(this, "Skiing_BtnUp", _descriptor4, this);

          _defineProperty(this, "device", "");

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

          this.device = this.HORIZONTAL_IPX; // this.btn_Next.y = -125;
          // this.btn_Next.scale = 0.5;
          // this.tutorial.scale = 1;
          // this.tutorial.y = 0;
          // if(screen.windowSize.height / screen.windowSize.width >= 0.6) {
          //     // Applovin horizontal
          //     return;
          // }
          // this.VideoController.Video.node.setScale(0.5, 0.5, 0.5);
          // this.UI_Controller.icon.active = true;
          // this.UI_Controller.logo.active = true;

          this.Skiing_container.setScale(0.5, 0.5, 1);
          this.Skiing_container.setPosition(0, 0, 0);

          if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            // this.UI_Controller.icon.setPosition(new Vec3(210, 0, 0))
            // this.UI_Controller.icon.setScale(new Vec3(0.35 , 0.35, 0.35))
            // this.UI_Controller.logo.setPosition(new Vec3(-215, 0, 0))
            // this.UI_Controller.logo.setScale(new Vec3(0.22 , 0.22, 0.22))
            this.Skiing_BtnLeft.setPosition(-450, -247, 0);
            this.Skiing_BtnUp.setPosition(450, -247, 0);
          } else {
            // IpX
            // this.UI_Controller.icon.setPosition(new Vec3(210, 0, 0))
            // this.UI_Controller.icon.setScale(new Vec3(0.35 , 0.35, 0.35))
            // this.UI_Controller.logo.setPosition(new Vec3(-215, 0, 0))
            // this.UI_Controller.logo.setScale(new Vec3(0.22 , 0.22, 0.22))
            this.Skiing_BtnLeft.setPosition(-600, -247, 0);
            this.Skiing_BtnUp.setPosition(600, -247, 0);
          }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.Skiing_BtnLeft.setPosition(-400, -270, 0);
          this.Skiing_BtnUp.setPosition(400, -270, 0);
          this.Skiing_container.setScale(0.5, 0.5, 1);
          this.Skiing_container.setPosition(0, 0, 0); // this.btn_Next.y = -125;
          // this.btn_Next.scale = 0.5;
          // this.VideoController.Video.node.setScale(0.4, 0.4, 0.5);
          // this.UI_Controller.icon.active = true;
          // this.UI_Controller.logo.active = true;
          // this.UI_Controller.icon.setPosition(new Vec3(170, 0, 0))
          // this.UI_Controller.icon.setScale(new Vec3(0.3 , 0.3, 0.3))
          // this.UI_Controller.logo.setPosition(new Vec3(-170, 0, 0))
          // this.UI_Controller.logo.setScale(new Vec3(0.2 , 0.2, 0.2))
          // this.tutorial.scale = 1;
          // this.tutorial.y = 0;
          // horizontal google
          // if(screen.windowSize.width / screen.windowSize.height <= 1.2 && screen.windowSize.width / screen.windowSize.height >= 1.2) {
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

          this.device = this.VERTICAL_IPX; // this.VideoController.Video.node.setScale(1.5, 1.5, 0.5);
          // this.UI_Controller.icon.active = false;
          // this.UI_Controller.logo.active = false;

          this.Skiing_container.setScale(0.8, 0.8, 1);
          this.Skiing_container.setPosition(100, -200, 0);
          this.Skiing_BtnLeft.setPosition(-330, -300, 0);
          this.Skiing_BtnUp.setPosition(80, -300, 0); // this.btn_Next.y = -250;
          // this.btn_Next.scale = 0.6;
          // this.tutorial.scale = 1.3;
          // this.tutorial.y = -220;
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            if (screen.windowSize.width / screen.windowSize.height >= 0.6 && screen.windowSize.width / screen.windowSize.height < 0.62) {
              // mobile mode applovin
              this.Skiing_container.setScale(0.7, 0.7, 1);
              this.Skiing_container.setPosition(60, -140, 0);
              this.Skiing_BtnLeft.setPosition(-350, -280, 0);
              this.Skiing_BtnUp.setPosition(180, -280, 0);
              return;
            } // Iphone 6 / 6 plus / 7 / 7 Plus


            this.Skiing_container.setScale(0.7, 0.7, 1);
            this.Skiing_container.setPosition(60, -140, 0);
            this.Skiing_BtnLeft.setPosition(-350, -300, 0);
            this.Skiing_BtnUp.setPosition(180, -300, 0); // this.VideoController.Video.node.setScale(1, 1, 0.5);
            // this.UI_Controller.icon.active = false;
            // this.UI_Controller.logo.active = false;
          } else {
            // if(screen.windowSize.width / screen.windowSize.height < 8.5 
            // && screen.windowSize.width / screen.windowSize.height > 8.3) {
            //     return;
            // }
            // Ipad
            // this.Skiing_BtnLeft.setPosition(-450, -247, 0);
            // this.Skiing_BtnUp.setPosition(450, -247, 0);
            // this.Skiing_container.setScale(0.5,0.5,1);
            // this.Skiing_container.setPosition(0,0,0);
            this.Skiing_container.setScale(0.7, 0.7, 1);
            this.Skiing_container.setPosition(60, -30, 0);
            this.Skiing_BtnLeft.setPosition(-350, -320, 0);
            this.Skiing_BtnUp.setPosition(180, -320, 0); // this.btn_Next.y = -200;
            // this.btn_Next.scale = 0.6;
            // this.tutorial.scale = 1.1;
            // this.tutorial.y = -200;
            // this.VideoController.Video.node.setScale(0.9, 0.9, 0.5);
            // this.UI_Controller.icon.active = false;
            // this.UI_Controller.logo.active = false;
          }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UI_Controller", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_container", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_BtnLeft", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Skiing_BtnUp", [_dec4], {
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