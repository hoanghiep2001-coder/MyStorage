System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, tween, SoundController, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, PA_08_UI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../Controller/SoundController", _context.meta, extras);
  }

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
      easing = _cc.easing;
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82da5RdomxE77uewY7zyqCY", "PA_08_UI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_08_UI", PA_08_UI = (_dec = ccclass('PA_08_UI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([Node]), _dec7 = property(Node), _dec8 = property([Node]), _dec9 = property([Node]), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class PA_08_UI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mainCam", _descriptor, this);

          _initializerDefineProperty(this, "Camera_3", _descriptor2, this);

          _initializerDefineProperty(this, "UI_Blink", _descriptor3, this);

          _initializerDefineProperty(this, "moto_2", _descriptor4, this);

          _initializerDefineProperty(this, "policeCars", _descriptor5, this);

          _initializerDefineProperty(this, "checkPoint_1", _descriptor6, this);

          _initializerDefineProperty(this, "UI_MoveCar", _descriptor7, this);

          _initializerDefineProperty(this, "Tut_1s", _descriptor8, this);

          _initializerDefineProperty(this, "CTA", _descriptor9, this);

          _defineProperty(this, "isActiveCheckPoint_1", false);

          _defineProperty(this, "isActiveTut_1", false);

          _defineProperty(this, "isActiveCinematic", false);
        }

        start() {}

        activeCheckPoint_1() {
          this.isActiveCheckPoint_1 = true;
          this.checkPoint_1.active = true;
          this.UI_MoveCar.forEach(ui => ui.active = true);
        }

        activeTut_1() {
          this.UI_MoveCar.forEach(ui => ui.active = false);
          this.Tut_1s.forEach(item => item.active = true);
          this.isActiveTut_1 = true;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playSound("PoliceSirenSound");
        }

        activeCinematic() {
          this.Tut_1s.forEach(tut => tut.active = false);
          this.mainCam.active = false;
          this.Camera_3.active = true;
          this.isActiveCinematic = true;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playSound("brakeSound");
          this.scheduleOnce(() => {
            tween(this.policeCars[0]).to(0.5, {
              position: this.moto_2.position
            }, {
              easing: easing.smooth
            }).call(() => {
              this.UI_Blink.active = true;
              let vfx_fireBall = this.policeCars[0].getChildByName("FireBall");
              vfx_fireBall.active = true;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).playSound("BoomSound");
            }).start();
            tween(this.policeCars[1]).to(0.5, {
              position: this.moto_2.position
            }, {
              easing: easing.smooth
            }).call(() => {
              let vfx_fireBall = this.policeCars[1].getChildByName("FireBall");
              vfx_fireBall.active = true;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).playSound("BoomSound");
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).stopSound("PoliceSirenSound");
              this.scheduleOnce(() => {
                this.CTA.active = true;
              }, 1.5);
            }).start();
          }, 0.5); // tween(this.moto_2)
          // .to(0.5, {position: new Vec3(675.776, 8.014, -64.671)}, {easing: easing.smooth})
          // .call(() => {
          // })
          // .start();
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isRidingMoto && !this.isActiveCheckPoint_1) this.activeCheckPoint_1();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isTouchCheckPointFlag && !this.isActiveTut_1) this.activeTut_1();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_08.isHitDogeCopsBtn && !this.isActiveCinematic) this.activeCinematic();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera_3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "UI_Blink", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moto_2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "policeCars", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "UI_MoveCar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Tut_1s", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec10], {
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
//# sourceMappingURL=PA_08_UI.js.map