System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, screen, Vec3, GamePlay, Constants, UIController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Responsive;

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
      screen = _cc.screen;
      Vec3 = _cc.Vec3;
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
      }), UIController) : UIController), _dec(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "UIController", _descriptor2, this);

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

          this.device = this.HORIZONTAL_IPX;
          this.UIController.Layer_1.active = false;
          this.UIController.Layer_2.active = false; // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
          //     // Applovin horizontal
          //     return;
          // }    

          if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            // this.GamePlay.video.node.scale = new Vec3(0.665, 0.665, 0.665);
            console.log(1);
          } else {
            // IpX
            // this.GamePlay.video.node.scale = new Vec3(0.665, 0.665, 0.665);
            console.log(2);
          }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.UIController.Layer_1.active = false;
          this.UIController.Layer_2.active = false;
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

          this.device = this.VERTICAL_IPX; // this.UIController.Layer_1.setPosition(new Vec3(0, 420, 0));
          // this.UIController.Layer_2.setPosition(new Vec3(0, -420, 0));

          this.UIController.Layer_1.active = true;
          this.UIController.Layer_2.active = true;
          this.UIController.Layer_1.setPosition(new Vec3(0, 415, 0));
          this.UIController.Layer_2.setPosition(new Vec3(0, -422, 0));
          console.log(4);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          var width = screen.windowSize.width;
          var height = screen.windowSize.height;

          if (width / height < 0.7) {
            this.UIController.Layer_1.active = true;
            this.UIController.Layer_2.active = true;

            if (width / height >= 0.6 && width / height < 0.62) {
              // mobile mode applovin
              this.UIController.Layer_1.setPosition(new Vec3(0, 414, 0));
              this.UIController.Layer_2.setPosition(new Vec3(0, -422.5, 0));
              return;
            } // Iphone 6 / 6 plus / 7 / 7 Plus


            this.UIController.Layer_1.setPosition(new Vec3(0, 424, 0));
            this.UIController.Layer_2.setPosition(new Vec3(0, -424, 0));
            console.log(5);
          } else {
            this.UIController.Layer_1.active = false;
            this.UIController.Layer_2.active = false; // Ipad
            // this.UIController.Layer_1.setPosition(new Vec3(0, 400, 0));
            // this.UIController.Layer_2.setPosition(new Vec3(0, -400, 0));

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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIController", [_dec3], {
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