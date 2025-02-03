System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SphereCollider, _dec, _class, _crd, ccclass, property, Hole;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SphereCollider = _cc.SphereCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5521bS34HlNRpmN/mkgBlvU", "Hole", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Hole
       * DateTime = Wed May 22 2024 11:13:34 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = Hole.ts
       * FileBasenameNoExtension = Hole
       * URL = db://assets/Scripts/GamePlay/Hole.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Hole", Hole = (_dec = ccclass('Hole'), _dec(_class = class Hole extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          var collider = this.node.getComponent(SphereCollider);
          collider.on('onTriggerStay', this.onTriggerStay, this);
        }

        onTriggerStay(event) {
          var otherTrigger = event.otherCollider;

          if (event.type === 'onTriggerStay') {
            if (otherTrigger.getGroup() === 2) {
              console.log(this.node.name + 'Trigger detected with target layer! ' + otherTrigger.node.name);
            }
          }
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
//# sourceMappingURL=Hole.js.map