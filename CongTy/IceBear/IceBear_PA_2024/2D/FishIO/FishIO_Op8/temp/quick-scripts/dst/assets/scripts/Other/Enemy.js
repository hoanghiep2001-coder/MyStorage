
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd10dec9d+ZI3pr6HInaMjsn', 'Enemy');
// scripts/Other/Enemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isLive: false,
    body: cc.RigidBody,
    maxSpeed: 60,
    nameFish: cc.Sprite,
    arrNameFish: [cc.SpriteFrame],
    flag: cc.Sprite,
    arrFlag: [cc.SpriteFrame]
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 2) {
      if (this.isLive) {
        this.die();
      }
    }
  },
  start: function start() {
    this.randomName = 0;
    this.randomName = cc.math.randomRangeInt(0, this.arrNameFish.length);
    this.nameFish.spriteFrame = this.arrNameFish[this.randomName];
    this.randomFlag = 0;
    this.randomFlag = cc.math.randomRangeInt(0, this.arrFlag.length);
    this.flag.spriteFrame = this.arrFlag[this.randomFlag];
    this.randomChangeSpeed = 3;
    this.randomVecX = 0;
    this.randomVecY = 0;
    this.isLive = true;
    this.randomVelocity();
    this.schedule(function () {
      this.randomVelocity();
    }, this.randomChangeSpeed, 20, 0);
  },
  randomVelocity: function randomVelocity() {
    this.randomChangeSpeed = cc.math.randomRangeInt(2, 5);
    this.randomVecX = cc.math.randomRangeInt(-this.maxSpeed, this.maxSpeed);
    this.randomVecY = cc.math.randomRangeInt(-this.maxSpeed, this.maxSpeed);
    this.body.linearVelocity = cc.v2(this.randomVecX, this.randomVecY);
    this.node.getChildByName("Body").angle = cc.misc.radiansToDegrees(Math.atan(this.randomVecY / this.randomVecX));

    if (this.randomVecX < 0) {
      this.node.getChildByName("Body").scaleX = -1;
    } else {
      this.node.getChildByName("Body").scaleX = 1;
    }
  },
  die: function die() {
    this.body.linearVelocity = cc.v2(0, 0);
    this.node.getChildByName("Name").active = false;
    this.node.getChildByName("Flag").active = false;
    this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
    this.node.getChildByName("Body").active = false;
    this.node.getChildByName("Die").active = true;
    this.isLive = false;
    this.getComponent(cc.Animation).play("EnemyDieAnim");
    this.scheduleOnce(function () {
      this.node.destroy();
    }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXEVuZW15LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNMaXZlIiwiYm9keSIsIlJpZ2lkQm9keSIsIm1heFNwZWVkIiwibmFtZUZpc2giLCJTcHJpdGUiLCJhcnJOYW1lRmlzaCIsIlNwcml0ZUZyYW1lIiwiZmxhZyIsImFyckZsYWciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiZGllIiwic3RhcnQiLCJyYW5kb21OYW1lIiwibWF0aCIsInJhbmRvbVJhbmdlSW50IiwibGVuZ3RoIiwic3ByaXRlRnJhbWUiLCJyYW5kb21GbGFnIiwicmFuZG9tQ2hhbmdlU3BlZWQiLCJyYW5kb21WZWNYIiwicmFuZG9tVmVjWSIsInJhbmRvbVZlbG9jaXR5Iiwic2NoZWR1bGUiLCJsaW5lYXJWZWxvY2l0eSIsInYyIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYW5nbGUiLCJtaXNjIiwicmFkaWFuc1RvRGVncmVlcyIsIk1hdGgiLCJhdGFuIiwic2NhbGVYIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFLEtBREE7QUFFUkMsSUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBRkQ7QUFHUkMsSUFBQUEsUUFBUSxFQUFFLEVBSEY7QUFJUkMsSUFBQUEsUUFBUSxFQUFFUixFQUFFLENBQUNTLE1BSkw7QUFLUkMsSUFBQUEsV0FBVyxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csV0FBSixDQUxM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LENBQXlCLE1BQXpCLEVBQWlDTyxNQUFqQyxHQUEwQyxLQUExQztBQUNBLFNBQUtSLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixFQUFpQ08sTUFBakMsR0FBMEMsS0FBMUM7QUFDQSxTQUFLUixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsS0FBekIsRUFBZ0NRLFlBQWhDLENBQTZDQyxFQUFFLENBQUNDLFFBQWhELEVBQTBEQyxZQUExRCxDQUF1RSxDQUF2RSxFQUEwRSxNQUExRSxFQUFrRixLQUFsRjtBQUNBLFNBQUtaLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixFQUFpQ08sTUFBakMsR0FBMEMsS0FBMUM7QUFDQSxTQUFLUixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsS0FBekIsRUFBZ0NPLE1BQWhDLEdBQXlDLElBQXpDO0FBQ0EsU0FBS3JDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS3NDLFlBQUwsQ0FBa0IxQyxFQUFFLENBQUM4QyxTQUFyQixFQUFnQ0MsSUFBaEMsQ0FBcUMsY0FBckM7QUFDQSxTQUFLQyxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2YsSUFBTCxDQUFVZ0IsT0FBVjtBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0g7QUFwRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNMaXZlOiBmYWxzZSxcclxuICAgICAgICBib2R5OiBjYy5SaWdpZEJvZHksXHJcbiAgICAgICAgbWF4U3BlZWQ6IDYwLFxyXG4gICAgICAgIG5hbWVGaXNoOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgYXJyTmFtZUZpc2g6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgZmxhZzogY2MuU3ByaXRlLFxyXG4gICAgICAgIGFyckZsYWc6IFtjYy5TcHJpdGVGcmFtZV0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tTmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yYW5kb21OYW1lID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyck5hbWVGaXNoLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRmlzaC5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyTmFtZUZpc2hbdGhpcy5yYW5kb21OYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5kb21GbGFnID0gMDtcclxuICAgICAgICB0aGlzLnJhbmRvbUZsYWcgPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuYXJyRmxhZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZmxhZy5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyRmxhZ1t0aGlzLnJhbmRvbUZsYWddO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmRvbUNoYW5nZVNwZWVkID0gMztcclxuICAgICAgICB0aGlzLnJhbmRvbVZlY1ggPSAwO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVmVjWSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVmVsb2NpdHkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21WZWxvY2l0eSgpO1xyXG4gICAgICAgIH0sIHRoaXMucmFuZG9tQ2hhbmdlU3BlZWQsIDIwLCAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZG9tVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb21DaGFuZ2VTcGVlZCA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMiwgNSk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21WZWNYID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgtdGhpcy5tYXhTcGVlZCwgdGhpcy5tYXhTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21WZWNZID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgtdGhpcy5tYXhTcGVlZCwgdGhpcy5tYXhTcGVlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMucmFuZG9tVmVjWCwgdGhpcy5yYW5kb21WZWNZKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb2R5XCIpLmFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0aGlzLnJhbmRvbVZlY1kgLyB0aGlzLnJhbmRvbVZlY1gpKTtcclxuICAgICAgICBpZiAodGhpcy5yYW5kb21WZWNYIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb2R5XCIpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZSgpIHtcclxuICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZsYWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQXRrXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYml0ZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEaWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkVuZW15RGllQW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=