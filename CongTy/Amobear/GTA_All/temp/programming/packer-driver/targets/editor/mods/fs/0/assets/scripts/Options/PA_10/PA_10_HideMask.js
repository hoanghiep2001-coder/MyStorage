System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, easing, geometry, log, Node, PhysicsSystem, tween, Vec3, PA_10_UI, GameInfo, SoundController, PA_10_Character, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PA_10_HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPA_10_UI(extras) {
    _reporterNs.report("PA_10_UI", "./PA_10_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_10_Character(extras) {
    _reporterNs.report("PA_10_Character", "./PA_10_Character", _context.meta, extras);
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
      geometry = _cc.geometry;
      log = _cc.log;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PA_10_UI = _unresolved_2.PA_10_UI;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      SoundController = _unresolved_4.SoundController;
    }, function (_unresolved_5) {
      PA_10_Character = _unresolved_5.PA_10_Character;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6cb5fd/VGNANrEld5p9DNIX", "PA_10_HideMask", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_10_HideMask
       * DateTime = Wed Dec 25 2024 18:00:18 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_10_HideMask.ts
       * FileBasenameNoExtension = PA_10_HideMask
       * URL = db://assets/scripts/Options/PA_10/PA_10_HideMask.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_10_HideMask", PA_10_HideMask = (_dec = ccclass('PA_10_HideMask'), _dec2 = property(Camera), _dec3 = property(_crd && PA_10_Character === void 0 ? (_reportPossibleCrUseOfPA_10_Character({
        error: Error()
      }), PA_10_Character) : PA_10_Character), _dec4 = property(_crd && PA_10_UI === void 0 ? (_reportPossibleCrUseOfPA_10_UI({
        error: Error()
      }), PA_10_UI) : PA_10_UI), _dec(_class = (_class2 = (_temp = class PA_10_HideMask extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Cam_3D", _descriptor, this);

          _initializerDefineProperty(this, "PA_10_Character", _descriptor2, this);

          _initializerDefineProperty(this, "PA_10_UI", _descriptor3, this);

          _defineProperty(this, "pos", null);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onTouchStart(touchPos) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;
          log("show aiming UI");
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = true;
          this.PA_10_UI.tutorials.forEach(tut => tut.active = false);
          this.PA_10_UI.Aim.active = true;
          tween(this.Cam_3D).to(0.3, {
            fov: 33
          }, {
            easing: easing.smooth
          }).start();
          const screenPos = touchPos.getUILocation();
          this.pos = this.convertToLocalLocation(screenPos);
          this.PA_10_UI.Aim.setPosition(this.pos);
          this.PA_10_Character.setAimingAnim();
        }

        onTouchMove(event) {
          const screenPos = event.getUILocation();
          this.pos = this.convertToLocalLocation(screenPos);
          this.PA_10_UI.Aim.setPosition(this.pos);
        }

        onTouchEnd(touchPos) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching) return;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = false;
          this.PA_10_Character.setCrouchAnim();
          this.getRaycastResult(touchPos);
          tween(this.Cam_3D).to(0.3, {
            fov: 45
          }, {
            easing: easing.smooth
          }).start();
          this.PA_10_UI.Aim.active = false;
          this.PA_10_UI.setAimOriginPos();
          this.shoot();
        }

        getRaycastResult(touchPos) {
          let ray = new geometry.Ray();
          this.Cam_3D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray); // The following parameters are optional

          const mask = 0xffffffff;
          const maxDistance = 10000000;
          const queryTrigger = true;

          if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            const collider = raycastClosestResult.collider;

            if (collider.node.name.includes("Grimace")) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).GTA_PA_10.currentEnemyKilled += 1;
              collider.node.active = false;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).playSound("BoomSound");
              if (collider.node.name.includes("_")) this.PA_10_UI.explosionFXs[1].node.active = true;else this.PA_10_UI.explosionFXs[0].node.active = true;
              if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).GTA_PA_10.currentEnemyKilled === 2) this.PA_10_UI.UI_Blink.active = true;
            }
          }
        }

        convertToLocalLocation(value) {
          const localX = value.x - 960 - this.node.getPosition().x;
          const localY = value.y - 540 - this.node.getPosition().y;
          const result = new Vec3(localX, localY, 0);
          return result;
        }

        shoot() {
          this.scheduleOnce(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
          }, 1);
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playSound("K98Sound");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Cam_3D", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PA_10_Character", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PA_10_UI", [_dec4], {
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
//# sourceMappingURL=PA_10_HideMask.js.map