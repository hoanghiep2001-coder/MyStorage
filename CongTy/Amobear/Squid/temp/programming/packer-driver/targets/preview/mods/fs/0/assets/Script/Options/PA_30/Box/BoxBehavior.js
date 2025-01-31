System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Component, easing, Material, MeshRenderer, Node, tween, Vec3, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, BoxBehavior;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      easing = _cc.easing;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0edf2KHpRZFsrSUsU7LFM+h", "BoxBehavior", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BoxBehavior
       * DateTime = Sat Dec 28 2024 14:56:02 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = BoxBehavior.ts
       * FileBasenameNoExtension = BoxBehavior
       * URL = db://assets/Script/Options/PA_30/Box/BoxBehavior.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BoxBehavior", BoxBehavior = (_dec = ccclass('BoxBehavior'), _dec2 = property(Material), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class BoxBehavior extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Mat_ColorBlack", _descriptor, this);

          _initializerDefineProperty(this, "KeoSao", _descriptor2, this);

          _defineProperty(this, "SaoNetDut", null);

          _initializerDefineProperty(this, "needle", _descriptor3, this);

          _defineProperty(this, "needleCollideNode", null);

          _initializerDefineProperty(this, "LineContainer", _descriptor4, this);

          _defineProperty(this, "Lines", []);

          _initializerDefineProperty(this, "left_candy", _descriptor5, this);

          _initializerDefineProperty(this, "right_candy", _descriptor6, this);

          _initializerDefineProperty(this, "up_candy", _descriptor7, this);

          _initializerDefineProperty(this, "bot_candy", _descriptor8, this);

          _defineProperty(this, "currentDetachAnim", null);

          _defineProperty(this, "currentDetachDuration", null);
        }

        start() {
          this.needleCollideNode = this.needle.children[0];
          this.SaoNetDut = this.KeoSao.getChildByName("SaoNetDut");
          this.currentDetachDuration = this.KeoSao.getComponent(Animation).clips[0].duration;
          this.Lines = this.LineContainer.children;

          for (var index = 0; index < this.Lines.length; index++) {
            var element = this.Lines[index];
            element.getComponent(MeshRenderer).material = this.Mat_ColorBlack;
            element.active = false;
          }
        }

        activeUnBoxAnim() {
          this.getComponent(Animation).play();
        }

        setAnimDetachCandyState(animState) {
          var anim = this.KeoSao.getComponent(Animation);

          switch (animState) {
            case "play":
              this.currentDetachAnim = anim.getState("KeoSao_Anim");
              anim.play();
              break;

            case "resume":
              anim.resume();
              break;

            case "pause":
              anim.pause();
              break;

            default:
              break;
          }
        }

        moveDetachedCandy() {
          switch ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.detachCandySteps) {
            case 1:
              tween(this.left_candy).to(0.2, {
                position: new Vec3(0.37, -0.383, 0)
              }, {
                easing: easing.smooth
              }).start();
              break;

            case 2:
              tween(this.right_candy).to(0.2, {
                position: new Vec3(-0.377, -0.312, 0)
              }, {
                easing: easing.smooth
              }).start();
              break;

            case 3:
              tween(this.up_candy).to(0.2, {
                position: new Vec3(-0.389, 0.486, 0)
              }, {
                easing: easing.smooth
              }).start();
              break;

            case 4:
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).Squid_PA_30.isDoneAllStep = true;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isWin = true;
              tween(this.bot_candy).to(0.2, {
                position: new Vec3(0.416, 0.368, 0)
              }, {
                easing: easing.smooth
              }).start();
              this.scheduleOnce(() => (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).IsShowPopupInstall = true, 2);
              break;

            default:
              break;
          }
        }

        update(dt) {
          if (this.currentDetachAnim && !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDoneDrawCandy) {
            if (this.currentDetachAnim.current >= 10) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).Squid_PA_30.isDoneDrawCandy = true;
              this.SaoNetDut.active = false;
            }

            ;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Mat_ColorBlack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "KeoSao", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "needle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "LineContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "left_candy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "right_candy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "up_candy", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bot_candy", [_dec9], {
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
//# sourceMappingURL=BoxBehavior.js.map