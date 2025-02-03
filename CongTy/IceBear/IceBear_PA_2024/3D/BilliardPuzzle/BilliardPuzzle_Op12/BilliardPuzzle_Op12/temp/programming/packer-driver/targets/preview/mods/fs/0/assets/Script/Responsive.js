System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, screen, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "767d0EKg9JArIXmm+XRzGLG", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Camera_", _descriptor, this);

          _initializerDefineProperty(this, "Bar_Force", _descriptor2, this);

          _initializerDefineProperty(this, "hand_01", _descriptor3, this);

          _initializerDefineProperty(this, "hand_02", _descriptor4, this);

          _initializerDefineProperty(this, "View_CTA", _descriptor5, this);

          _initializerDefineProperty(this, "ShootingTurn", _descriptor6, this);

          _initializerDefineProperty(this, "PoolbackText", _descriptor7, this);
        }

        onLoad() {}

        update() {
          var screenW = screen.windowSize.x;
          var screenH = screen.windowSize.y;

          if (screenW < screenH) {
            this.View_CTA.children[0].active = true;
            this.View_CTA.children[1].active = false;
            this.Camera_.setRotationFromEuler(-90, 0, 0);
            this.Bar_Force.setPosition(0, 0);
            this.Bar_Force.setScale(0.664, 0.664);
            this.hand_01.setScale(1, 1, 1);
            this.hand_01.setPosition(-40, -60, 0);
            this.PoolbackText.setScale(0.32, 0.32, 0.32);
            this.PoolbackText.setPosition(0, -200, 0);
            var ratio = screenH / screenW;

            if (ratio >= 2.1) {
              this.ShootingTurn.setPosition(-30, 235, 0);
              this.ShootingTurn.setScale(0.3, 0.3, 0.3);
              this.Camera_.setPosition(0, 7.764, 0);
            } else {
              if (ratio <= 1.4) {
                // ipad
                this.ShootingTurn.setPosition(-32, 280, 0);
                this.ShootingTurn.setScale(0.35, 0.35, 0.35);
                this.Camera_.setPosition(0, 6.2, 0);
              } else {
                // ip 7 Plus
                this.ShootingTurn.setPosition(-32, 280, 0);
                this.ShootingTurn.setScale(0.35, 0.35, 0.35);
                this.Camera_.setPosition(0, 6.2, 0);
              }
            }
          } else {
            this.View_CTA.children[0].active = false;
            this.View_CTA.children[1].active = true;

            var _ratio = screenW / screenH;

            this.hand_01.setScale(1.4, 1.4, 1);
            this.hand_01.setPosition(-90, -120, 0);
            this.Bar_Force.setScale(0.97, 0.97);
            this.Bar_Force.setPosition(0, -70);
            this.PoolbackText.setScale(0.9, 0.9, 0.9);
            this.PoolbackText.setPosition(0, -190, 0);

            if (_ratio <= 1.6) {
              this.ShootingTurn.setPosition(-32, 270, 0);
              this.ShootingTurn.setScale(0.5, 0.5, 0.5);
              this.Camera_.setPosition(-0.15, 4.5, 0.3);
              this.Camera_.setRotationFromEuler(-90, -90, 0);
            } else {
              this.ShootingTurn.setPosition(-32, 272, 0);
              this.ShootingTurn.setScale(0.52, 0.52, 0.52);
              this.Camera_.setPosition(-0.15, 4, 0.3);
              this.Camera_.setRotationFromEuler(-90, -90, 0);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera_", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Bar_Force", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hand_01", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hand_02", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "View_CTA", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ShootingTurn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PoolbackText", [_dec8], {
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