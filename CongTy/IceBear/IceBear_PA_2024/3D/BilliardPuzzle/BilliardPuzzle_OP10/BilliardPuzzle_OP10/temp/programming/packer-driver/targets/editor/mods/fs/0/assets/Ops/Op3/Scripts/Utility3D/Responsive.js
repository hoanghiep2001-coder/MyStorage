System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Camera, Component, Node, Vec3, _decorator, log, screen, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      log = _cc.log;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97756RPY/ZAOqT8Sp/ZhHNR", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Responsive = (_dec = property(Camera), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), ccclass(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cam", _descriptor, this);

          _initializerDefineProperty(this, "topUI", _descriptor2, this);

          _initializerDefineProperty(this, "powerBar", _descriptor3, this);

          _initializerDefineProperty(this, "guide", _descriptor4, this);

          _initializerDefineProperty(this, "textPraise", _descriptor5, this);

          _initializerDefineProperty(this, "CTA", _descriptor6, this);

          _defineProperty(this, "device", "");

          _defineProperty(this, "isRotate", false);

          _defineProperty(this, "HORIZONTAL_IPX", "horizontal_IPX");

          _defineProperty(this, "HORIZONTAL_TABLET", "horizontal_Tablet");

          _defineProperty(this, "VERTICAL_IPX", "vertical_IPX");

          _defineProperty(this, "VERTICAL_MOBILE", "vertical_Mobile");
        }

        onLoad() {
          log(screen.windowSize.width);
          log(screen.windowSize.height);
          this.handleRotate();
        }

        start() {
          this.handleRotate();
        }

        handleRotate() {
          // if (view.getFrameSize().width > view.getFrameSize().height) {
          if (screen.windowSize.width > screen.windowSize.height) {
            this.isRotate = true;
            this.setHorizontal();
          } else {
            this.isRotate = false;
            this.setVertical();
          }
        }

        setHorizontal() {
          //  if (view.getFrameSize().height / view.getFrameSize().width < 0.65) {
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

          log("hr ipx");
          this.cam.node.setPosition(0, 2.23, -0.1);
          this.cam.node.setRotationFromEuler(-90, 0, 0);
          this.cam.fov = 30;
          this.topUI.setScale(new Vec3(0.5, 0.5, 0.5));
          this.powerBar.setScale(new Vec3(1, 1, 1));
          this.guide.setScale(new Vec3(0.5, 0.5, 0.5));
          this.textPraise.setScale(new Vec3(0.5, 0.5, 0.5));
          this.CTA.setScale(new Vec3(0.45, 0.45, 0.45));
          this.device = this.HORIZONTAL_IPX;
        } //       this.logo


        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          } //  if (view.getFrameSize().width / view.getFrameSize().height < 0.7) {


          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            log("hr ip 6"); // Iphone 6 / 6 plus / 7 / 7 Plus

            this.cam.node.setPosition(0, 2.23, 0);
            this.cam.node.setRotationFromEuler(-90, 0, -0.1);
            this.cam.fov = 35;
            this.topUI.setScale(new Vec3(0.6, 0.6, 0.6));
            this.powerBar.setScale(new Vec3(1, 1, 1));
            this.guide.setScale(new Vec3(0.5, 0.5, 0.5));
            this.textPraise.setScale(new Vec3(0.5, 0.5, 0.5));
            this.CTA.setScale(new Vec3(0.45, 0.45, 0.45));
          } else {
            log("hr ipad");
            this.cam.node.setPosition(0, 2.23, 0);
            this.cam.node.setRotationFromEuler(-90, 0, 0);
            this.cam.fov = 40;
            this.topUI.setScale(new Vec3(0.8, 0.8, 0.8));
            this.powerBar.setScale(new Vec3(1, 1, 1)); // Ipad

            this.guide.setScale(new Vec3(0.5, 0.5, 0.5));
            this.textPraise.setScale(new Vec3(0.5, 0.5, 0.5));
            this.CTA.setScale(new Vec3(0.45, 0.45, 0.45));
          }

          this.device = this.HORIZONTAL_TABLET;
        }

        setVertical() {
          // if (view.getFrameSize().width / view.getFrameSize().height < 0.5) {
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
          this.cam.node.setPosition(0, 2.23, 0);
          this.guide.setScale(new Vec3(1, 1, 1));
          this.textPraise.setScale(new Vec3(1, 1, 1));
          this.CTA.setScale(new Vec3(1, 1, 1));
          this.cam.node.setRotationFromEuler(-90, -90, 0);
          this.cam.fov = 60;
          this.topUI.setScale(new Vec3(0.8, 0.8, 0.8));
          this.powerBar.setScale(new Vec3(2, 2, 2));
          this.device = this.VERTICAL_IPX;
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE; //  if (view.getFrameSize().width / view.getFrameSize().height < 0.7) {

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            log("vt ip 6");
            this.cam.node.setRotationFromEuler(-90, -90, 0);
            this.cam.node.setPosition(0, 2.23, 0);
            this.guide.setScale(new Vec3(1, 1, 1));
            this.textPraise.setScale(new Vec3(1, 1, 1));
            this.CTA.setScale(new Vec3(1, 1, 1));
            this.cam.fov = 55;
            this.topUI.setScale(new Vec3(0.8, 0.8, 0.8));
            this.powerBar.setScale(new Vec3(2, 2, 2)); // Iphone 6 / 6 plus / 7 / 7 Plus
          } else {
            log("vt ipad");
            this.CTA.setScale(new Vec3(1, 1, 1));
            this.cam.node.setRotationFromEuler(-90, -90, 0);
            this.cam.node.setPosition(0.15, 2.23, 0);
            this.cam.fov = 50;
            this.textPraise.setScale(new Vec3(1, 1, 1));
            this.topUI.setScale(new Vec3(0.8, 0.8, 0.8));
            this.powerBar.setScale(new Vec3(2, 2, 2));
            this.guide.setScale(new Vec3(1, 1, 1)); // Ipad
          }
        }

        unActiveLogo() {}

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "powerBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "textPraise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec6], {
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