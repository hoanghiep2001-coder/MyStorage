System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JoyStick, Player, _decorator, Component, Node, Animation, Camera, Label, math, sp, tween, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PowerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./PlayerMount", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Camera = _cc.Camera;
      Label = _cc.Label;
      math = _cc.math;
      sp = _cc.sp;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      JoyStick = _unresolved_2.JoyStick;
    }, function (_unresolved_3) {
      Player = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63b6c1DxlpKF6qeWaE3HA1G", "PowerController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PowerController = (_dec = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec2 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec3 = property(Camera), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), ccclass(_class = (_class2 = (_temp = class PowerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Mount", _descriptor, this);

          _initializerDefineProperty(this, "JoyStick", _descriptor2, this);

          _initializerDefineProperty(this, "Camera", _descriptor3, this);

          _initializerDefineProperty(this, "Spine_Bubble", _descriptor4, this);

          _initializerDefineProperty(this, "Spine_PlayerPower", _descriptor5, this);

          _initializerDefineProperty(this, "touchArea", _descriptor6, this);

          _initializerDefineProperty(this, "Button_CTA", _descriptor7, this);

          _initializerDefineProperty(this, "Hand_CTA", _descriptor8, this);

          _defineProperty(this, "isTransforming", false);

          _defineProperty(this, "isLevel2", false);

          _defineProperty(this, "isLevel3", false);
        }

        start() {}

        callTween(collide, scale, prevScale) {
          var level = collide.getChildByName("Body").getChildByName("Level");
          var component = level.getComponent(Label);
          this.Mount.score = this.Mount.score * 10;
          console.log(this.Mount.score);

          if (scale == 2.2) {
            component.fontSize = 30;
            component.lineHeight = 30;
          } else {
            component.fontSize = 25;
            component.lineHeight = 25;
          }

          tween(collide).to(0.1, {
            scale: new math.Vec3(scale, scale, 0)
          }).call(() => {
            tween(collide).to(0.1, {
              scale: new math.Vec3(prevScale, prevScale, 0)
            }).start();
          }).start();
        }

        handlePowerUp(collide, otherCollide) {
          // this.JoyStick.node.opacity = 0;
          this.touchArea.getComponent("TouchArea").isTouched = false;
          var spine = collide.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
          spine.setAnimation(0, "idle", true);
          this.isLevel2 = true;
          this.isTransforming = true;
          otherCollide.destroy();
          this.touchArea.getComponent("TouchArea").offEvent();
          this.Spine_Bubble.node.active = true;
          this.Spine_Bubble.setAnimation(0, "action", false);
          this.scheduleOnce(() => {
            this.Spine_PlayerPower.node.active = true;
            this.Spine_PlayerPower.setAnimation(0, "Evo02", false);
          }, 0.5);
          this.scheduleOnce(() => {
            this.callTween(collide, 2.2, 2);
          }, 1.5);
          this.scheduleOnce(() => {
            this.isTransforming = false;
            tween(this.Camera).to(1, {
              zoomRatio: 0.65
            }).start();
          }, 2);
        }

        handlePowerUpLv2(collide, otherCollide) {
          // this.JoyStick.node.opacity = 0;
          this.touchArea.getComponent("TouchArea").isTouched = false;
          var spine = collide.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
          spine.setAnimation(0, "idle", true);
          this.isLevel2 = false;
          this.isLevel3 = true;
          this.isTransforming = true;
          otherCollide.destroy();
          this.touchArea.getComponent("TouchArea").offEvent();
          this.Spine_Bubble.node.active = true;
          this.Spine_Bubble.setAnimation(0, "action", false);
          this.scheduleOnce(() => {
            this.Spine_PlayerPower.node.active = true;
            this.Spine_PlayerPower.setAnimation(0, "Evo02", false);
          }, 0.5);
          this.scheduleOnce(() => {
            this.isTransforming = false;
            this.callTween(collide, 4.2, 4);
          }, 1.5);
          this.scheduleOnce(() => {
            this.Button_CTA.getComponent(Animation).play("Btn_CTAAnim");
            this.Hand_CTA.getComponent(Animation).play("Btn_HandAnim");
            tween(this.Camera).to(1, {
              zoomRatio: 0.3
            }).start();
          }, 2);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Mount", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "JoyStick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Bubble", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Spine_PlayerPower", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "touchArea", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Button_CTA", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Hand_CTA", [_dec8], {
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
//# sourceMappingURL=PowerController.js.map