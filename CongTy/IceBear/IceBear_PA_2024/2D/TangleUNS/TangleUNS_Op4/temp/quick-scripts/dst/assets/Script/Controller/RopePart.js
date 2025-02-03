
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/RopePart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxSb3BlUGFydC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkFuY2hvcl9Qb3NpdGlvbiIsInJhbmdlIiwibm90aWZ5IiwiQ0NfRURJVE9SIiwiVXBkYXRlX0FuY2hvciIsIlBvc19TaG9ydCIsIlBvc19Mb25nIiwib25Mb2FkIiwiSm9pbnRzIiwibm9kZSIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiUmV2b2x1dGVKb2ludCIsInJldmVyc2UiLCJpIiwibGVuZ3RoIiwicGFydF9jb3VudCIsImFwIiwibWlzYyIsImNsYW1wMDEiLCJhbmNob3IiLCJsZXJwIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJ4IiwiY29ubmVjdGVkQW5jaG9yIiwiYXBwbHkiLCJoZWlnaHQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsQ0FESTtBQUViQyxNQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZNO0FBR2JDLE1BQUFBLE1BSGEsb0JBR0o7QUFDTCxZQUFJQyxTQUFKLEVBQWU7QUFDZixhQUFLQyxhQUFMO0FBQ0g7QUFOWSxLQURUO0FBU1JDLElBQUFBLFNBQVMsRUFBRSxDQVRIO0FBVVJDLElBQUFBLFFBQVEsRUFBRTtBQVZGLEdBSFA7QUFnQkxDLEVBQUFBLE1BaEJLLG9CQWdCSTtBQUNMLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLENBQVVDLHVCQUFWLENBQWtDZCxFQUFFLENBQUNlLGFBQXJDLENBQWQ7QUFDQSxTQUFLSCxNQUFMLENBQVlJLE9BQVo7QUFDSCxHQW5CSTtBQXFCTFIsRUFBQUEsYUFyQkssMkJBcUJXO0FBRVosU0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFBNkM7QUFDekMsVUFBSUUsVUFBVSxHQUFHLEtBQUtQLE1BQUwsQ0FBWU0sTUFBN0I7QUFFQSxVQUFJRSxFQUFFLEdBQUdwQixFQUFFLENBQUNxQixJQUFILENBQVFDLE9BQVIsQ0FBZ0IsQ0FBQyxLQUFLbEIsZUFBTCxHQUF1QmEsQ0FBQyxJQUFJLElBQUlFLFVBQVIsQ0FBekIsSUFBZ0RBLFVBQWhFLENBQVQ7QUFFQSxVQUFJSSxNQUFNLEdBQUd2QixFQUFFLENBQUNxQixJQUFILENBQVFHLElBQVIsQ0FBYSxLQUFLZixTQUFsQixFQUE2QixLQUFLQyxRQUFsQyxFQUE0Q1UsRUFBNUMsQ0FBYjs7QUFDQSxVQUFJLEtBQUtSLE1BQUwsQ0FBWUssQ0FBWixFQUFlUSxJQUFmLENBQW9CQyxVQUFwQixDQUErQixVQUEvQixDQUFKLEVBQWdEO0FBQzVDLGFBQUtkLE1BQUwsQ0FBWUssQ0FBWixFQUFlTSxNQUFmLENBQXNCSSxDQUF0QixHQUEwQkosTUFBMUI7QUFDQSxhQUFLWCxNQUFMLENBQVlLLENBQVosRUFBZVcsZUFBZixDQUErQkQsQ0FBL0IsR0FBbUMsQ0FBQ0osTUFBcEM7QUFDQSxhQUFLWCxNQUFMLENBQVlLLENBQVosRUFBZVksS0FBZjtBQUNBLGFBQUtqQixNQUFMLENBQVlLLENBQVosRUFBZUosSUFBZixDQUFvQmlCLE1BQXBCLEdBQTZCOUIsRUFBRSxDQUFDcUIsSUFBSCxDQUFRRyxJQUFSLENBQWFELE1BQU0sR0FBRyxDQUF0QixFQUF5QixLQUFLYixRQUFMLEdBQWdCLENBQWhCLEdBQW9CLEVBQTdDLEVBQWlELEdBQWpELENBQTdCO0FBQ0g7O0FBRUQsVUFBSSxLQUFLRSxNQUFMLENBQVlLLENBQVosRUFBZVEsSUFBZixDQUFvQkMsVUFBcEIsQ0FBK0IsZ0JBQS9CLENBQUosRUFBc0Q7QUFDbEQsYUFBS2QsTUFBTCxDQUFZSyxDQUFaLEVBQWVNLE1BQWYsQ0FBc0JRLENBQXRCLEdBQTBCUixNQUExQjtBQUNBLGFBQUtYLE1BQUwsQ0FBWUssQ0FBWixFQUFlVyxlQUFmLENBQStCRCxDQUEvQixHQUFtQyxDQUFDSixNQUFwQztBQUNBLGFBQUtYLE1BQUwsQ0FBWUssQ0FBWixFQUFlWSxLQUFmO0FBQ0EsYUFBS2pCLE1BQUwsQ0FBWUssQ0FBWixFQUFlSixJQUFmLENBQW9CaUIsTUFBcEIsR0FBNkI5QixFQUFFLENBQUNxQixJQUFILENBQVFHLElBQVIsQ0FBYUQsTUFBTSxHQUFHLENBQXRCLEVBQXlCLEtBQUtiLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0IsRUFBN0MsRUFBaUQsR0FBakQsQ0FBN0I7QUFDQTtBQUNILE9BbkJ3QyxDQXFCekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSDtBQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBbmNob3JfUG9zaXRpb246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxXSxcclxuICAgICAgICAgICAgbm90aWZ5KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKENDX0VESVRPUikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVfQW5jaG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFBvc19TaG9ydDogMCxcclxuICAgICAgICBQb3NfTG9uZzogMjQsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLkpvaW50cyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICB0aGlzLkpvaW50cy5yZXZlcnNlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFVwZGF0ZV9BbmNob3IoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5Kb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBhcnRfY291bnQgPSB0aGlzLkpvaW50cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXAgPSBjYy5taXNjLmNsYW1wMDEoKHRoaXMuQW5jaG9yX1Bvc2l0aW9uIC0gaSAqICgxIC8gcGFydF9jb3VudCkpICogcGFydF9jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5jaG9yID0gY2MubWlzYy5sZXJwKHRoaXMuUG9zX1Nob3J0LCB0aGlzLlBvc19Mb25nLCBhcCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkpvaW50c1tpXS5uYW1lLnN0YXJ0c1dpdGgoXCJSb3BlSXRlbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Kb2ludHNbaV0uYW5jaG9yLnggPSBhbmNob3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5jb25uZWN0ZWRBbmNob3IueCA9IC1hbmNob3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Kb2ludHNbaV0ubm9kZS5oZWlnaHQgPSBjYy5taXNjLmxlcnAoYW5jaG9yICogMiwgdGhpcy5Qb3NfTG9uZyAqIDIgKyAxMiwgMC44KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuSm9pbnRzW2ldLm5hbWUuc3RhcnRzV2l0aChcIlJvcGVJdGVtX0ZpcnN0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5hbmNob3IueSA9IGFuY2hvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuSm9pbnRzW2ldLmNvbm5lY3RlZEFuY2hvci54ID0gLWFuY2hvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuSm9pbnRzW2ldLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5ub2RlLmhlaWdodCA9IGNjLm1pc2MubGVycChhbmNob3IgKiAyLCB0aGlzLlBvc19Mb25nICogMiArIDEyLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLkpvaW50c1tpXS5uYW1lLnN0YXJ0c1dpdGgoXCJSb3BlSXRlbV9MYXN0XCIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLkpvaW50c1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuSm9pbnRzW2ldLmFuY2hvci55ID0gYW5jaG9yO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Kb2ludHNbaV0uY29ubmVjdGVkQW5jaG9yLnggPSAtYW5jaG9yO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Kb2ludHNbaV0uYXBwbHkoKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuSm9pbnRzW2ldLm5vZGUuaGVpZ2h0ID0gY2MubWlzYy5sZXJwKGFuY2hvciAqIDIsIHRoaXMuUG9zX0xvbmcgKiAyICsgNDAsIDAuOCk7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==