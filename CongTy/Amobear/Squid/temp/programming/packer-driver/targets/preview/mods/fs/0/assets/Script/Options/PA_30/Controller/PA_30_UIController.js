System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Label, Node, tween, Vec3, GamePlay, GameInfo, PA_30_CameraController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, PA_30_UIController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "../../../Game/GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_30_CameraController(extras) {
    _reporterNs.report("PA_30_CameraController", "./PA_30_CameraController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GamePlay = _unresolved_2.GamePlay;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      PA_30_CameraController = _unresolved_4.PA_30_CameraController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa954Bn/KFL/7c/BfP1z3g7", "PA_30_UIController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PA_30_UIController", PA_30_UIController = (_dec = ccclass('PA_30_UIController'), _dec2 = property(_crd && PA_30_CameraController === void 0 ? (_reportPossibleCrUseOfPA_30_CameraController({
        error: Error()
      }), PA_30_CameraController) : PA_30_CameraController), _dec3 = property(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
        error: Error()
      }), GamePlay) : GamePlay), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class PA_30_UIController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "GamePlay", _descriptor2, this);

          _initializerDefineProperty(this, "Tut", _descriptor3, this);

          _defineProperty(this, "Tut_Btn", null);

          _defineProperty(this, "Tut_Label", null);

          _initializerDefineProperty(this, "HayChonGiaDung", _descriptor4, this);

          _defineProperty(this, "isShowHayChonGiaDung", false);

          _initializerDefineProperty(this, "CTA", _descriptor5, this);

          _defineProperty(this, "isShowPopupInstall", false);
        }

        start() {
          this.initProperties();
          this.activeTutAnim();
          this.registerEvent();
        }

        initProperties() {
          this.Tut_Btn = this.Tut.getChildByName("btn");
          this.Tut_Label = this.Tut.getComponentInChildren(Label);
        }

        activeTutAnim() {
          var originalScale = this.Tut_Btn.getScale();
          tween(this.Tut_Btn).repeatForever(tween(this.Tut_Btn).to(0.5, {
            scale: new Vec3(originalScale.x + 0.05, originalScale.y + 0.05, originalScale.z + 0.05)
          }).to(0.5, {
            scale: originalScale
          }, {
            easing: easing.elasticOut
          })).start();
        }

        registerEvent() {
          this.Tut_Btn.on(Node.EventType.TOUCH_START, this.onTutBtnTouchStart, this);
        }

        onTutBtnTouchStart() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsPlaying = true;
          this.Tut.active = false;
          this.camera.handleTweenToTable();
        }

        showCTA() {
          this.isShowPopupInstall = true;
          this.CTA.active = true;
        }

        showHayChonGiaDung() {
          this.isShowHayChonGiaDung = true;
          this.HayChonGiaDung.active = true;
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall && !this.isShowPopupInstall) this.showCTA();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDoneDrawCandy && !this.isShowHayChonGiaDung) this.showHayChonGiaDung();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Tut", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HayChonGiaDung", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec6], {
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
//# sourceMappingURL=PA_30_UIController.js.map