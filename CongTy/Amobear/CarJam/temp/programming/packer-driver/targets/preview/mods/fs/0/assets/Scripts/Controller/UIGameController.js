System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, easing, Label, Node, tween, Vec3, GameInfo, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, UIGameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eae0aGAa2xB+78k4FQWX5Oc", "UIGameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UIGameController
       * DateTime = Mon Aug 26 2024 14:14:13 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = UIGameController.ts
       * FileBasenameNoExtension = UIGameController
       * URL = db://assets/Scripts/Controller/UIGameController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("UIGameController", UIGameController = (_dec = ccclass('UIGameController'), _dec2 = property(Camera), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class UIGameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Camera3D", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "Canvas", _descriptor3, this);

          _initializerDefineProperty(this, "TouchArea", _descriptor4, this);

          _initializerDefineProperty(this, "QueuePopup", _descriptor5, this);

          _initializerDefineProperty(this, "QueueLabel", _descriptor6, this);

          _initializerDefineProperty(this, "Tut_1", _descriptor7, this);

          _initializerDefineProperty(this, "CTA", _descriptor8, this);

          _initializerDefineProperty(this, "CTA_btn", _descriptor9, this);
        }

        start() {
          this.registerEvent();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption !== 9 && this.scheduleOnce(() => {
            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isTouching) return;
            this.Tut_1.active = true;
          }, 2);
        }

        registerEvent() {
          // google, unity, tiktok
          this.CTA_btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        showCTATextContent() {
          if (this.CTA.active) return;
          this.CTA.active = true;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall = true;
          tween(this.CTA_btn).repeatForever(tween(this.CTA_btn).to(0.5, {
            scale: new Vec3(0.5, 0.5, 0.5)
          }).to(0.5, {
            scale: new Vec3(0.45, 0.45, 0.45)
          }, {
            easing: easing.elasticOut
          })).start();
        }

        updateQueueLabelPos() {
          var out = new Vec3();
          var wpos = this.QueuePopup.worldPosition;
          this.Camera3D.convertToUINode(wpos, this.Canvas, out);
          this.QueueLabel.string = String((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentQueue);
          this.QueueLabel.node.position = new Vec3(out.x - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).queueLabelCalPosX, out.y + (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).queueLabelCalPosY, out.z);
        }

        update(dt) {
          this.updateQueueLabelPos();
          if (((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isLose) && !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall) this.showCTATextContent();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera3D", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "QueuePopup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "QueueLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Tut_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CTA_btn", [_dec10], {
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
//# sourceMappingURL=UIGameController.js.map