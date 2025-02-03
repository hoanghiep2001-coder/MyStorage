"use strict";
cc._RF.push(module, 'c7bc5h3TcJEULzcwms3QbNi', 'RopePart');
// Script/Controller/RopePart.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Anchor_Position: {
      "default": 1,
      range: [0, 1],
      notify: function notify() {
        if (CC_EDITOR) return;
        this.Update_Anchor();
      }
    },
    Pos_Short: 0,
    Pos_Long: 24
  },
  onLoad: function onLoad() {
    this.Joints = this.node.getComponentsInChildren(cc.RevoluteJoint);
    this.Joints.reverse();
  },
  Update_Anchor: function Update_Anchor() {
    for (var i = 1; i < this.Joints.length; i++) {
      var part_count = this.Joints.length;
      var ap = cc.misc.clamp01((this.Anchor_Position - i * (1 / part_count)) * part_count);
      var anchor = cc.misc.lerp(this.Pos_Short, this.Pos_Long, ap);

      if (this.Joints[i].name.startsWith("RopeItem")) {
        this.Joints[i].anchor.x = anchor;
        this.Joints[i].connectedAnchor.x = -anchor;
        this.Joints[i].apply();
        this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 12, 0.8);
      }

      if (this.Joints[i].name.startsWith("RopeItem_First")) {
        this.Joints[i].anchor.y = anchor;
        this.Joints[i].connectedAnchor.x = -anchor;
        this.Joints[i].apply();
        this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 12, 0.8);
        break;
      } // if (this.Joints[i].name.startsWith("RopeItem_Last")) {
      //     console.log(this.Joints[i].name);
      //     this.Joints[i].anchor.y = anchor;
      //     this.Joints[i].connectedAnchor.x = -anchor;
      //     this.Joints[i].apply();
      //     this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 40, 0.8);
      //     break;
      // }

    }
  }
});

cc._RF.pop();