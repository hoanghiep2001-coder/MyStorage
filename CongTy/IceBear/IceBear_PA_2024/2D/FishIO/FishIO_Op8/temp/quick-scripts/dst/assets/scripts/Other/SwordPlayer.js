
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/SwordPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b94fVRQ7NPU6JabzfyPgGt', 'SwordPlayer');
// scripts/Other/SwordPlayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gc: cc.Node,
    headFish1: cc.Node,
    headFish2: cc.Node,
    headFish3: cc.Node,
    headFish4: cc.Node
  },
  // onLoad () {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 1) {
      if (other.getComponent("Enemy").isLive) {
        this.gameController.playAudio(this.gameController.audioEat);
        other.getComponent("Enemy").die(); // self.node.getParent().getParent().getComponent("PlayerController").addScore();

        this.countHead++;
        if (this.countHead == 1) this.headFish1.active = true;
        if (this.countHead == 2) this.headFish2.active = true;
        if (this.countHead == 3) this.headFish3.active = true;
        if (this.countHead == 4) this.headFish4.active = true;
      }
    }
  },
  start: function start() {
    this.countHead = 0;
    this.gameController = this.gc.getComponent("GameController");
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXFN3b3JkUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2MiLCJOb2RlIiwiaGVhZEZpc2gxIiwiaGVhZEZpc2gyIiwiaGVhZEZpc2gzIiwiaGVhZEZpc2g0Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsImdldENvbXBvbmVudCIsImlzTGl2ZSIsImdhbWVDb250cm9sbGVyIiwicGxheUF1ZGlvIiwiYXVkaW9FYXQiLCJkaWUiLCJjb3VudEhlYWQiLCJhY3RpdmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEVBQUUsRUFBRUosRUFBRSxDQUFDSyxJQURHO0FBRVZDLElBQUFBLFNBQVMsRUFBRU4sRUFBRSxDQUFDSyxJQUZKO0FBR1ZFLElBQUFBLFNBQVMsRUFBRVAsRUFBRSxDQUFDSyxJQUhKO0FBSVZHLElBQUFBLFNBQVMsRUFBRVIsRUFBRSxDQUFDSyxJQUpKO0FBS1ZJLElBQUFBLFNBQVMsRUFBRVQsRUFBRSxDQUFDSztBQUxKLEdBSFA7QUFXTDtBQUdBSyxFQUFBQSxnQkFkSyw0QkFjYUMsS0FkYixFQWNvQkMsSUFkcEIsRUFjMEI7QUFDM0IsUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxVQUFHRixLQUFLLENBQUNHLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEJDLE1BQS9CLEVBQXNDO0FBQ2xDLGFBQUtDLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JFLFFBQWxEO0FBQ0FQLFFBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixPQUFuQixFQUE0QkssR0FBNUIsR0FGa0MsQ0FHbEM7O0FBRUEsYUFBS0MsU0FBTDtBQUNBLFlBQUcsS0FBS0EsU0FBTCxJQUFrQixDQUFyQixFQUF3QixLQUFLZCxTQUFMLENBQWVlLE1BQWYsR0FBd0IsSUFBeEI7QUFDeEIsWUFBRyxLQUFLRCxTQUFMLElBQWtCLENBQXJCLEVBQXdCLEtBQUtiLFNBQUwsQ0FBZWMsTUFBZixHQUF3QixJQUF4QjtBQUN4QixZQUFHLEtBQUtELFNBQUwsSUFBa0IsQ0FBckIsRUFBd0IsS0FBS1osU0FBTCxDQUFlYSxNQUFmLEdBQXdCLElBQXhCO0FBQ3hCLFlBQUcsS0FBS0QsU0FBTCxJQUFrQixDQUFyQixFQUF3QixLQUFLWCxTQUFMLENBQWVZLE1BQWYsR0FBd0IsSUFBeEI7QUFDM0I7QUFDSjtBQUNGLEdBNUJFO0FBOEJMQyxFQUFBQSxLQTlCSyxtQkE4Qkk7QUFDTCxTQUFLRixTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0osY0FBTCxHQUFzQixLQUFLWixFQUFMLENBQVFVLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXRCO0FBRUgsR0FsQ0ksQ0FvQ0w7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBnYzogY2MuTm9kZSxcclxuICAgICAgaGVhZEZpc2gxOiBjYy5Ob2RlLFxyXG4gICAgICBoZWFkRmlzaDI6IGNjLk5vZGUsXHJcbiAgICAgIGhlYWRGaXNoMzogY2MuTm9kZSxcclxuICAgICAgaGVhZEZpc2g0OiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEpe1xyXG4gICAgICAgICAgICBpZihvdGhlci5nZXRDb21wb25lbnQoXCJFbmVteVwiKS5pc0xpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5QXVkaW8odGhpcy5nYW1lQ29udHJvbGxlci5hdWRpb0VhdCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoXCJFbmVteVwiKS5kaWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGYubm9kZS5nZXRQYXJlbnQoKS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoXCJQbGF5ZXJDb250cm9sbGVyXCIpLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRIZWFkICsrO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudEhlYWQgPT0gMSkgdGhpcy5oZWFkRmlzaDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY291bnRIZWFkID09IDIpIHRoaXMuaGVhZEZpc2gyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvdW50SGVhZCA9PSAzKSB0aGlzLmhlYWRGaXNoMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudEhlYWQgPT0gNCkgdGhpcy5oZWFkRmlzaDQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudEhlYWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLmdjLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==