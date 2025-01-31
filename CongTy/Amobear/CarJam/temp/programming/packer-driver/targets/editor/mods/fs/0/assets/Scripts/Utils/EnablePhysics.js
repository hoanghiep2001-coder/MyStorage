System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PhysicsSystem, _dec, _class, _crd, ccclass, property, EnablePhysics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcf6d9ejrFIirIXdxvNwiRX", "EnablePhysics", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = EnablePhysics
       * DateTime = Mon Aug 26 2024 14:15:46 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = EnablePhysics.ts
       * FileBasenameNoExtension = EnablePhysics
       * URL = db://assets/Scripts/Utils/EnablePhysics.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("EnablePhysics", EnablePhysics = (_dec = ccclass('EnablePhysics'), _dec(_class = class EnablePhysics extends Component {
        onLoad() {
          PhysicsSystem.instance.enable = true;
        }

      }) || _class));
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
//# sourceMappingURL=EnablePhysics.js.map