System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Button, tween, Vec3, Quat, v3, CCFloat, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, NextScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Button = _cc.Button;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a50aNLmoRLFII2Gq2Qpf3P", "NextScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NextScene", NextScene = (_dec = ccclass("NextScene"), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(CCFloat), _dec11 = property(CCFloat), _dec(_class = (_class2 = (_temp = class NextScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "canvas2D", _descriptor2, this);

          _initializerDefineProperty(this, "hideMask", _descriptor3, this);

          _initializerDefineProperty(this, "icon", _descriptor4, this);

          _initializerDefineProperty(this, "title", _descriptor5, this);

          _initializerDefineProperty(this, "boss1", _descriptor6, this);

          _initializerDefineProperty(this, "boss2", _descriptor7, this);

          _initializerDefineProperty(this, "camera", _descriptor8, this);

          _initializerDefineProperty(this, "_realHeight", _descriptor9, this);

          _initializerDefineProperty(this, "_realWidth", _descriptor10, this);
        }

        start() {
          window.gameReady && window.gameReady();
          this.hideMask.node.active = true;
          tween(this.boss1).by(3.5, {
            position: new Vec3(6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, -90, 0)
          }).by(3.5, {
            position: new Vec3(-6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 90, 0)
          }).union().repeatForever().start();
          tween(this.boss2).by(2.5, {
            position: new Vec3(0, 0, 4.5)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 180, 0)
          }).by(2.5, {
            position: new Vec3(0, 0, -4.5)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 0, 0)
          }).union().repeatForever().start(); // console.log(this.camera.getPosition());
        }

        onLoad() {
          this.hideMask.node.on(cc.Node.EventType.TOUCH_START, this.installHandle, this);
        }

        installHandle() {
          this.GameController.installHandle();
        }

        update(deltaTime) {
          if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.camera.setPosition(v3(-14.8, 24, 0));
            this._realHeight = 480;
            this._realWidth = 320 * (cc.view.getFrameSize().width / cc.view.getFrameSize().height); // console.log(this._realWidth);

            this.icon.setPosition((this._realWidth - 320) / 2 + 160, 0, 0);
            this.title.setPosition((320 - this._realWidth) / 2 - 160, 0, 0);
            this.icon.setScale(0.9, 0.9, 0.9);
            this.title.setScale(0.35, 0.35, 0.35);
          } else {
            if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 1.4) {
              this._realWidth = 370;
            } else {
              this._realWidth = 320;
            }

            this.camera.setPosition(v3(-13, 24, 0));
            this._realHeight = this._realWidth * (cc.view.getFrameSize().height / cc.view.getFrameSize().width);
            this.title.y = (this._realHeight - 480) / 2 + 207;
            this.icon.y = (this._realHeight - 480) / 2 + 207;
            this.icon.setPosition(56, 207 + (this._realHeight - 480) / 2, 0);
            this.title.setPosition(-40, 207 + (this._realHeight - 480) / 2, 0);
            this.icon.setScale(0.25, 0.25, 0.25);
            this.title.setScale(0.2, 0.2, 0.2);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas2D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boss1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boss2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_realHeight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_realWidth", [_dec11], {
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
//# sourceMappingURL=NextScene.js.map