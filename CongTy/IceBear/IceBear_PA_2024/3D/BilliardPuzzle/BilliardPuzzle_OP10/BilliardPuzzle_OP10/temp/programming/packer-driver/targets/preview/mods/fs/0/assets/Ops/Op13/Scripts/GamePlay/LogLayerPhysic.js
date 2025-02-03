System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, log, RigidBody, SphereCollider, _dec, _class, _crd, ccclass, property, LogLayerPhysic;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
      RigidBody = _cc.RigidBody;
      SphereCollider = _cc.SphereCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fa213KPJBI7LS60wsPjwFK", "LogLayerPhysic", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LogLayerPhysic
       * DateTime = Tue May 21 2024 16:53:01 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = LogLayerPhysic.ts
       * FileBasenameNoExtension = LogLayerPhysic
       * URL = db://assets/Scripts/GamePlay/LogLayerPhysic.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LogLayerPhysic", LogLayerPhysic = (_dec = ccclass('LogLayerPhysic'), _dec(_class = class LogLayerPhysic extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          log(this.node.name + " " + this.node.getComponent(RigidBody).group);
          log(this.node.name + " " + this.node.getComponent(SphereCollider).isTrigger);
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
//# sourceMappingURL=LogLayerPhysic.js.map