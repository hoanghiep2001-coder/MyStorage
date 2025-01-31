System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, easing, Node, sp, tween, Vec3, GameInfo, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, PA_11_UI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../Controller/SoundController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      easing = _cc.easing;
      Node = _cc.Node;
      sp = _cc.sp;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4073YKQuVI+7z/Pyoo1wNE", "PA_11_UI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_11_UI", PA_11_UI = (_dec = ccclass('PA_11_UI'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property([Node]), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class PA_11_UI extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isActiveRotateCamera", false);

          _initializerDefineProperty(this, "MainCam", _descriptor, this);

          _initializerDefineProperty(this, "Aim", _descriptor2, this);

          _initializerDefineProperty(this, "Spine_Combo", _descriptor3, this);

          _initializerDefineProperty(this, "tutorials", _descriptor4, this);

          _initializerDefineProperty(this, "lightning_FX", _descriptor5, this);

          _initializerDefineProperty(this, "Text_MoreEnemy", _descriptor6, this);

          _defineProperty(this, "Aim_originPos", null);

          _initializerDefineProperty(this, "UI_Blink", _descriptor7, this);

          _initializerDefineProperty(this, "Health", _descriptor8, this);

          _defineProperty(this, "isShowCTA", false);

          _initializerDefineProperty(this, "CTA", _descriptor9, this);
        }

        start() {
          this.Aim_originPos = this.Aim.getPosition();
        }

        setAimOriginPos() {
          this.Aim.setPosition(this.Aim_originPos);
        }

        activeSpineCombo() {
          this.Spine_Combo.node.active = true;
          this.Spine_Combo._defaultSkinIndex = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.currentEnemyKilled - 1;
          this.Spine_Combo.setAnimation(0, "action", false);
        }

        activeCTA() {
          this.isShowCTA = true;
          this.UI_Blink.active = true;
          this.Aim.active = false;
          this.CTA.active = true;
          this.lightning_FX.active = false;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).stopAllSound();
        }

        handleRotateCamera() {
          this.isActiveRotateCamera = true;
          this.Text_MoreEnemy.active = true;
          var newPos = new Vec3(657.569, 22.552, -145.062);
          var newRotateEuleurs = new Vec3(-15, 213.141, 0);
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          this.Health.active = true;
          tween(this.MainCam.node).to(1.5, {
            position: newPos,
            eulerAngles: newRotateEuleurs
          }, {
            easing: easing.smooth
          }).call(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_11.isDoneRotateCamera = true;
          }).start();
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.currentEnemyKilled >= 2 && !this.isActiveRotateCamera && this.handleRotateCamera();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.isShowInstallPopup && !this.isShowCTA && this.activeCTA();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MainCam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Aim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Combo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tutorials", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lightning_FX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Text_MoreEnemy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "UI_Blink", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Health", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec10], {
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
//# sourceMappingURL=PA_11_UI.js.map