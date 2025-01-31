System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, tween, Vec3, SoundController, GameInfo, Responsive, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, PA_09_UI;

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

  function _reportPossibleCrUseOfResponsive(extras) {
    _reporterNs.report("Responsive", "../../Others/Responsive", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SoundController = _unresolved_2.SoundController;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      Responsive = _unresolved_4.Responsive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a15ewuo3ZFc5iCfj2sGqAw", "PA_09_UI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_09_UI", PA_09_UI = (_dec = ccclass('PA_09_UI'), _dec2 = property(_crd && Responsive === void 0 ? (_reportPossibleCrUseOfResponsive({
        error: Error()
      }), Responsive) : Responsive), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property([Node]), _dec10 = property(Node), _dec11 = property([Node]), _dec12 = property([Node]), _dec13 = property([Node]), _dec14 = property(Node), _dec(_class = (_class2 = (_temp = class PA_09_UI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ResponsiveComp", _descriptor, this);

          _initializerDefineProperty(this, "mainCam", _descriptor2, this);

          _initializerDefineProperty(this, "Camera_3", _descriptor3, this);

          _initializerDefineProperty(this, "Camera_4", _descriptor4, this);

          _initializerDefineProperty(this, "UI_Blink", _descriptor5, this);

          _initializerDefineProperty(this, "moto_2", _descriptor6, this);

          _initializerDefineProperty(this, "npc", _descriptor7, this);

          _initializerDefineProperty(this, "policeCars", _descriptor8, this);

          _initializerDefineProperty(this, "checkPoint_1", _descriptor9, this);

          _initializerDefineProperty(this, "UI_MoveCar", _descriptor10, this);

          _initializerDefineProperty(this, "Tut_1s", _descriptor11, this);

          _initializerDefineProperty(this, "Tut_getRewards", _descriptor12, this);

          _initializerDefineProperty(this, "CTA", _descriptor13, this);

          _defineProperty(this, "isActiveCheckPoint_1", false);

          _defineProperty(this, "isActiveTut_1", false);

          _defineProperty(this, "isActiveCinematic", false);

          _defineProperty(this, "isActiveTutReward", false);

          _defineProperty(this, "isShowCTA", false);
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
              this.showNPC();
            }).start();
          }, 0.5); // tween(this.moto_2)
          // .to(0.5, {position: new Vec3(675.776, 8.014, -64.671)}, {easing: easing.smooth})
          // .call(() => {
          // })
          // .start();
        }

        showNPC() {
          this.scheduleOnce(() => {
            this.npc.active = true;
          }, 2.5);
          this.scheduleOnce(() => {
            this.Camera_3.active = false;
            this.Camera_4.active = true;
            tween(this.npc).to(1, {
              position: new Vec3(628.389, 8.014, -72.974)
            }, {
              easing: easing.smooth
            }).start();
          }, 3);
        }

        activeTutGetReward() {
          this.isActiveTutReward = true;
          this.Tut_getRewards.forEach(tut => tut.active = true);
        }

        showCTA() {
          this.isShowCTA = true;
          this.CTA.active = true;
          this.Tut_getRewards.forEach(tut => tut.active = false);
        }

        responsive() {// landscape
          // if(screen.windowSize.width > screen.windowSize.height) {
          //     this.ResponsiveComp.responsiveUIs = [];
          //     let CTA_icon = this.CTA.getChildByName("icon (1)");
          //     let CTA_Btn = this.CTA.getChildByName("2").children[0];
          //     this.ResponsiveComp.responsiveUIs.push({
          //         Node: CTA_icon,
          //         Scale: new Vec3(1, 1, 1),
          //         Position: new Vec3(0, 66, 0)
          //     });
          //     this.ResponsiveComp.responsiveUIs.push({
          //         Node: CTA_Btn,
          //         Scale: new Vec3(1, 1, 1),
          //         Position: new Vec3(0, 0, 0)
          //     })
          // }
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
          if (this.npc.active && !this.isActiveTutReward) this.activeTutGetReward();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_09.isCharacterArrivedReWard && !this.isShowCTA) this.showCTA();
          this.responsive();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ResponsiveComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCam", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Camera_3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Camera_4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "UI_Blink", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moto_2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "npc", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "policeCars", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "checkPoint_1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "UI_MoveCar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Tut_1s", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Tut_getRewards", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec14], {
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
//# sourceMappingURL=PA_09_UI.js.map