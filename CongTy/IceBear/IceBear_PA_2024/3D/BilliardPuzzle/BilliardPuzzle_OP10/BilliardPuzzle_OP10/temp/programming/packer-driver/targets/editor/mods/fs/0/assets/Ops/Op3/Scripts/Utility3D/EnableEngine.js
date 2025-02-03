System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, PhysicsSystem, _decorator, _class, _crd, ccclass, property, EnableEngine;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc517uqEsBDYaXXY0sWpHwK", "EnableEngine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", EnableEngine = ccclass(_class = class EnableEngine extends Component {
        onLoad() {
          PhysicsSystem.instance.enable = true; //cc.director.getPhysicsManager().enabled = true;
        } // onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        //     // This function is called when a collision begins
        //     console.log('Collision began');
        //     // You can access properties of the colliding nodes and perform actions accordingly
        // }
        // onCollisionStay(other: cc.Collider, self: cc.Collider) {
        //     // This function is called while a collision is ongoing
        //     console.log('Collision ongoing');
        //     // You can perform continuous actions while the collision persists
        // }
        // onCollisionExit(other: cc.Collider, self: cc.Collider) {
        //     // This function is called when a collision ends
        //     console.log('Collision ended');
        //     // You can perform cleanup or additional actions when the collision ends
        // }


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnableEngine.js.map