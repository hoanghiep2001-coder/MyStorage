System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, SkeletalAnimation, tween, Vec3, GameInfo, SoundController, _dec, _class, _temp, _crd, ccclass, property, PA_11_Character;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      Component = _cc.Component;
      easing = _cc.easing;
      SkeletalAnimation = _cc.SkeletalAnimation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5926eM0geJJCKVKRkFzaZXe", "PA_11_Character", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_10_Character
       * DateTime = Wed Dec 25 2024 09:21:14 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_10_Character.ts
       * FileBasenameNoExtension = PA_10_Character
       * URL = db://assets/scripts/Options/PA_10/PA_10_Character.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_11_Character", PA_11_Character = (_dec = ccclass('PA_11_Character'), _dec(_class = (_temp = class PA_11_Character extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isRotateCharacter", false);

          _defineProperty(this, "isAiming", false);

          _defineProperty(this, "isDead", false);
        }

        start() {}

        setAimingAnim() {
          if (this.isAiming) return;
          this.isAiming = true;
          this.node.getComponent(SkeletalAnimation).play("Character_StandUp");
        }

        setCrouchAnim() {
          this.isAiming = false;
          this.node.getComponent(SkeletalAnimation).play("Character_Crouch");
        }

        handleRotateCharacter() {
          this.isRotateCharacter = true;
          const newEuleurs = new Vec3(0, 30, 0);
          const newPos = new Vec3(672.076, 8.114, -126.065);
          this.node.getComponent(SkeletalAnimation).play("main_run");
          tween(this.node).to(0.3, {
            eulerAngles: newEuleurs,
            position: newPos
          }, {
            easing: easing.smooth
          }).call(() => {
            this.setCrouchAnim();
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
          }).start();
        }

        dead() {
          this.isDead = true;
          this.node.getComponent(SkeletalAnimation).play("Death");
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playSound("DeadSound");
          this.scheduleOnce(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).GTA_PA_11.isShowInstallPopup = true;
          }, 1.5);
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.isDoneRotateCamera && !this.isRotateCharacter && this.handleRotateCharacter();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).GTA_PA_11.isCharacterDead && !this.isDead && this.dead();
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=PA_11_Character.js.map