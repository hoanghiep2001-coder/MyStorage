System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimation, _dec, _class, _temp, _crd, ccclass, property, PA_10_Character;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5926eM0geJJCKVKRkFzaZXe", "PA_10_Character", undefined);

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

      _export("PA_10_Character", PA_10_Character = (_dec = ccclass('PA_10_Character'), _dec(_class = (_temp = class PA_10_Character extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isAiming", false);
        }

        start() {}

        setAimingAnim() {
          this.node.getComponent(SkeletalAnimation).play("Character_StandUp");
        }

        setCrouchAnim() {
          this.node.getComponent(SkeletalAnimation).play("Character_Crouch");
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
//# sourceMappingURL=PA_10_Character.js.map