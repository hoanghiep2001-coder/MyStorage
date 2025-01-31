System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, screen, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, PA_11_Responsive;

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

      _cclegacy._RF.push({}, "276c3zl6bJGmIjChcA7F9Aw", "PA_11_Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_11_Responsive", PA_11_Responsive = (_dec = ccclass('PA_11_Responsive'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class PA_11_Responsive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Tut", _descriptor, this);

          _initializerDefineProperty(this, "CTA", _descriptor2, this);

          _initializerDefineProperty(this, "SpineCombo", _descriptor3, this);

          _initializerDefineProperty(this, "Text_MoreEnemy", _descriptor4, this);

          _initializerDefineProperty(this, "Health", _descriptor5, this);

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
            this.CTA.setScale(2.2, 2.2, 2.2);
            this.Tut.setPosition(0, 0, 0);
            this.Tut.setScale(1, 1, 1);
            this.SpineCombo.setScale(1.2, 1.2, 1);
            this.SpineCombo.setPosition(0, 60, 0);
            this.Text_MoreEnemy.setScale(0.8, 0.8, 1);
            this.Text_MoreEnemy.setPosition(0, -180, 0);
            this.Health.setScale(0.8, 0.8, 1);
            this.Health.setPosition(-930, 276.463, 0);
          } // IP 6 / 7 / 8
          else {
              this.CTA.setScale(2.2, 2.2, 2.2);
              this.Tut.setPosition(0, 0, 0);
              this.Tut.setScale(1, 1, 1);
              this.SpineCombo.setScale(1.2, 1.2, 1);
              this.SpineCombo.setPosition(0, 60, 0);
              this.Text_MoreEnemy.setScale(0.8, 0.8, 1);
              this.Text_MoreEnemy.setPosition(0, -180, 0);
              this.Health.setScale(0.8, 0.8, 1);
              this.Health.setPosition(-687.392, 276.463, 0);
            }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.CTA.setScale(2.2, 2.2, 2.2);
          this.Tut.setPosition(0, 0, 0);
          this.Tut.setScale(1, 1, 1);
          this.SpineCombo.setScale(1.2, 1.2, 1);
          this.SpineCombo.setPosition(0, 60, 0);
          this.Text_MoreEnemy.setScale(0.8, 0.8, 1);
          this.Text_MoreEnemy.setPosition(0, -180, 0);
          this.Health.setScale(0.8, 0.8, 1);
          this.Health.setPosition(-687.392, 380, 0); // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
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
          this.Tut.setPosition(0, 0, 0);
          this.Tut.setScale(2, 2, 1);
          this.SpineCombo.setScale(2, 2, 1);
          this.SpineCombo.setPosition(0, 230, 0);
          this.Text_MoreEnemy.setScale(1.6, 1.6, 1);
          this.Text_MoreEnemy.setPosition(0, -530, 0);
          this.Health.setScale(1, 1, 1);
          this.Health.setPosition(-630, 1380, 0);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          let width = screen.windowSize.width;
          let height = screen.windowSize.height;

          if (width / height < 0.7) {
            // mobile mode applovin
            if (width / height >= 0.6 && width / height < 0.62) {
              this.CTA.setScale(4.4, 4.4, 2.2);
              this.Tut.setPosition(0, 0, 0);
              this.Tut.setScale(2, 2, 1);
              this.SpineCombo.setScale(2, 2, 1);
              this.SpineCombo.setPosition(0, 230, 0);
              this.Text_MoreEnemy.setScale(1.6, 1.6, 1);
              this.Text_MoreEnemy.setPosition(0, -530, 0);
              this.Health.setScale(1, 1, 1);
              this.Health.setPosition(-630, 1180, 0);
              return;
            } // Iphone 6 / 6 plus / 7 / 7 Plus


            this.CTA.setScale(4.4, 4.4, 2.2);
            this.Tut.setPosition(0, 0, 0);
            this.Tut.setScale(2, 2, 1);
            this.SpineCombo.setScale(2, 2, 1);
            this.SpineCombo.setPosition(0, 230, 0);
            this.Text_MoreEnemy.setScale(1.6, 1.6, 1);
            this.Text_MoreEnemy.setPosition(0, -530, 0);
            this.Health.setScale(1, 1, 1);
            this.Health.setPosition(-630, 1230, 0);
          } else {
            // Ipad
            this.CTA.setScale(4.4, 4.4, 2.2);
            this.Tut.setPosition(0, 0, 0);
            this.Tut.setScale(2, 2, 1);
            this.SpineCombo.setScale(2, 2, 1);
            this.SpineCombo.setPosition(0, 230, 0);
            this.Text_MoreEnemy.setScale(1.6, 1.6, 1);
            this.Text_MoreEnemy.setPosition(0, -530, 0);
            this.Health.setScale(1, 1, 1);
            this.Health.setPosition(-630, 830, 0);
          }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Tut", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "SpineCombo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Text_MoreEnemy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Health", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=PA_11_Responsive.js.map