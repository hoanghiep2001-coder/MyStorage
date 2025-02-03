
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/BossController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57c65mhFk1I8aojTp7HjE4s', 'BossController');
// scripts/BossController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    player: cc.Node
  },
  start: function start() {
    this.playerControll = this.player.getComponent("PlayerController");
  },
  update: function update(dt) {
    var playerPosition = this.player.getPosition();
    var currentPosition = this.node.getPosition();
    currentPosition.lerp(playerPosition, 0.009, currentPosition);
    this.node.setPosition(currentPosition);
    var angleBoss = cc.misc.radiansToDegrees(Math.atan((this.player.y - this.node.y) / (this.player.x - this.node.x))); // console.log("Angle BOSSS: "+angleBoss)

    this.node.getChildByName("Body").angle = angleBoss;

    if (this.node.x - this.player.x > 0) {
      this.node.getChildByName("Body").scaleX = -1;
    } else {
      this.node.getChildByName("Body").scaleX = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9zc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGF5ZXIiLCJOb2RlIiwic3RhcnQiLCJwbGF5ZXJDb250cm9sbCIsImdldENvbXBvbmVudCIsInVwZGF0ZSIsImR0IiwicGxheWVyUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImN1cnJlbnRQb3NpdGlvbiIsIm5vZGUiLCJsZXJwIiwic2V0UG9zaXRpb24iLCJhbmdsZUJvc3MiLCJtaXNjIiwicmFkaWFuc1RvRGVncmVlcyIsIk1hdGgiLCJhdGFuIiwieSIsIngiLCJnZXRDaGlsZEJ5TmFtZSIsImFuZ2xlIiwic2NhbGVYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLO0FBREgsR0FIUDtBQVFMQyxFQUFBQSxLQVJLLG1CQVFJO0FBQ0wsU0FBS0MsY0FBTCxHQUFzQixLQUFLSCxNQUFMLENBQVlJLFlBQVosQ0FBeUIsa0JBQXpCLENBQXRCO0FBQ0gsR0FWSTtBQWFKQyxFQUFBQSxNQWJJLGtCQWFJQyxFQWJKLEVBYVE7QUFDVCxRQUFJQyxjQUFjLEdBQUcsS0FBS1AsTUFBTCxDQUFZUSxXQUFaLEVBQXJCO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEtBQUtDLElBQUwsQ0FBVUYsV0FBVixFQUF0QjtBQUNBQyxJQUFBQSxlQUFlLENBQUNFLElBQWhCLENBQXFCSixjQUFyQixFQUFxQyxLQUFyQyxFQUE0Q0UsZUFBNUM7QUFDQSxTQUFLQyxJQUFMLENBQVVFLFdBQVYsQ0FBc0JILGVBQXRCO0FBRUEsUUFBSUksU0FBUyxHQUFHakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRQyxnQkFBUixDQUF5QkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQyxLQUFLakIsTUFBTCxDQUFZa0IsQ0FBWixHQUFnQixLQUFLUixJQUFMLENBQVVRLENBQTNCLEtBQStCLEtBQUtsQixNQUFMLENBQVltQixDQUFaLEdBQWdCLEtBQUtULElBQUwsQ0FBVVMsQ0FBekQsQ0FBVixDQUF6QixDQUFoQixDQU5TLENBUVQ7O0FBRUEsU0FBS1QsSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDQyxLQUFqQyxHQUF5Q1IsU0FBekM7O0FBR0EsUUFBSSxLQUFLSCxJQUFMLENBQVVTLENBQVYsR0FBYyxLQUFLbkIsTUFBTCxDQUFZbUIsQ0FBM0IsR0FBZ0MsQ0FBbkMsRUFBcUM7QUFDakMsV0FBS1QsSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDRSxNQUFqQyxHQUEwQyxDQUFDLENBQTNDO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1osSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDRSxNQUFqQyxHQUEwQyxDQUExQztBQUNIO0FBRUg7QUFoQ0csQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxheWVyOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29udHJvbGwgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJDb250cm9sbGVyXCIpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycChwbGF5ZXJQb3NpdGlvbiwgMC4wMDksIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBhbmdsZUJvc3MgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKCh0aGlzLnBsYXllci55IC0gdGhpcy5ub2RlLnkpLyh0aGlzLnBsYXllci54IC0gdGhpcy5ub2RlLngpKSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQW5nbGUgQk9TU1M6IFwiK2FuZ2xlQm9zcylcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hbmdsZSA9IGFuZ2xlQm9zcztcclxuXHJcblxyXG4gICAgICAgIGlmKCh0aGlzLm5vZGUueCAtIHRoaXMucGxheWVyLngpID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgIH0sXHJcbn0pO1xyXG4iXX0=