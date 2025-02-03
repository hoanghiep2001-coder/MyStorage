System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RigidBody, _dec, _class, _crd, ccclass, property, ActiveCCD;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb7e5FGS9JHZpz+afHlAu7l", "ActiveCCD", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ActiveCCD
       * DateTime = Wed May 22 2024 10:25:49 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = ActiveCCD.ts
       * FileBasenameNoExtension = ActiveCCD
       * URL = db://assets/Scripts/GamePlay/ActiveCCD.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ActiveCCD", ActiveCCD = (_dec = ccclass('ActiveCCD'), _dec(_class = class ActiveCCD extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.node.getComponent(RigidBody).useCCD = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


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
//# sourceMappingURL=ActiveCCD.js.map