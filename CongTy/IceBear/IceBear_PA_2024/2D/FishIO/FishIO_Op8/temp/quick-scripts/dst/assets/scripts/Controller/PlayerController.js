
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8daewWYL1IObw90wQWYYLg', 'PlayerController');
// scripts/Controller/PlayerController.js

"use strict";

var _require = require("../Data/Constant"),
    Constants = _require.Constants;

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 5,
    isMove: false,
    touchArea: cc.Node,
    targetPosition: cc.Vec2,
    score: 0,
    isLive: true,
    gc: cc.Node,
    headPlayer: cc.Node,
    crownGold: cc.Node,
    crownSilver: cc.Node,
    crownCopper: cc.Node,
    rigidBody: cc.RigidBody,
    scoreLabel1: cc.Label,
    scoreLabel2: cc.Label,
    scoreLabel3: cc.Label,
    rankName1: cc.Sprite,
    rankName2: cc.Sprite,
    rankName3: cc.Sprite,
    sfName1: cc.SpriteFrame,
    sfName2: cc.SpriteFrame,
    sfName3: cc.SpriteFrame,
    sfNamePlayer: cc.SpriteFrame
  },
  // onLoad () {},
  start: function start() {
    this.gameController = this.gc.getComponent("GameController");
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 2 || other.tag == 3) {
      if (this.isLive) {
        this.die();
        this.headPlayer.active = true;
        this.gameController.playAudio(this.gameController.audioBossAtk);
        this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
        Constants.countDie += 1;
      }
    }
  },
  die: function die() {
    this.gameController.playAudio(this.gameController.audioEat);
    this.node.getChildByName("Body").active = false;
    this.node.getChildByName("Die").active = true;
    this.getComponent(cc.Animation).play("EnemyDieAnim");
    this.isLive = false; // FINISH

    this.scheduleOnce(function () {
      this.gameController.showPopupInstall();
    }, 1);
  },
  // addScore(){
  //   this.score += cc.math.randomRangeInt(5, 15);
  //   this.crownGold.active = false;
  //   this.crownSilver.active = false;
  //   this.crownCopper.active = false;
  //   if(this.score >= 60){
  //     this.crownGold.active = true;
  //     this.node.setScale(1.7);
  //     this.scoreLabel1.string = ""+this.score;
  //     this.scoreLabel2.string = "40";
  //     this.scoreLabel3.string = "25";
  //     this.rankName1.spriteFrame = this.sfNamePlayer;
  //     this.rankName2.spriteFrame = this.sfName1;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   if(this.score >= 40 && this.score < 60) {
  //     this.crownGold.active = true;
  //     this.node.setScale(1.5);
  //     this.scoreLabel1.string = ""+this.score;
  //     this.scoreLabel2.string = "40";
  //     this.scoreLabel3.string = "25";
  //     this.rankName1.spriteFrame = this.sfNamePlayer;
  //     this.rankName2.spriteFrame = this.sfName1;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   else if(this.score >= 25 && this.score < 40) {
  //     this.crownSilver.active = true;
  //     this.node.setScale(1.3);
  //     this.scoreLabel2.string = ""+this.score;
  //     this.scoreLabel3.string = "25";
  //     this.rankName2.spriteFrame = this.sfNamePlayer;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   else if(this.score >= 10 && this.score < 25) {
  //     this.crownCopper.active = true;
  //     this.node.setScale(1.1);
  //     this.scoreLabel3.string = ""+this.score;
  //     this.rankName3.spriteFrame = this.sfNamePlayer;
  //   }
  // },
  update: function update(dt) {
    if (this.isMove && this.isLive) {
      this.targetPosition = this.touchArea.getComponent("TouchArea").positionTouch; //console.log(this.targetPosition.x+" --- "+this.targetPosition.y);

      var currentPosition = this.node.getPosition();
      currentPosition.lerp(this.targetPosition, 0.02, currentPosition);
      this.node.setPosition(currentPosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcUGxheWVyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ29uc3RhbnRzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsImlzTW92ZSIsInRvdWNoQXJlYSIsIk5vZGUiLCJ0YXJnZXRQb3NpdGlvbiIsIlZlYzIiLCJzY29yZSIsImlzTGl2ZSIsImdjIiwiaGVhZFBsYXllciIsImNyb3duR29sZCIsImNyb3duU2lsdmVyIiwiY3Jvd25Db3BwZXIiLCJyaWdpZEJvZHkiLCJSaWdpZEJvZHkiLCJzY29yZUxhYmVsMSIsIkxhYmVsIiwic2NvcmVMYWJlbDIiLCJzY29yZUxhYmVsMyIsInJhbmtOYW1lMSIsIlNwcml0ZSIsInJhbmtOYW1lMiIsInJhbmtOYW1lMyIsInNmTmFtZTEiLCJTcHJpdGVGcmFtZSIsInNmTmFtZTIiLCJzZk5hbWUzIiwic2ZOYW1lUGxheWVyIiwic3RhcnQiLCJnYW1lQ29udHJvbGxlciIsImdldENvbXBvbmVudCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ0YWciLCJkaWUiLCJhY3RpdmUiLCJwbGF5QXVkaW8iLCJhdWRpb0Jvc3NBdGsiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiY291bnREaWUiLCJhdWRpb0VhdCIsIkFuaW1hdGlvbiIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJzaG93UG9wdXBJbnN0YWxsIiwidXBkYXRlIiwiZHQiLCJwb3NpdGlvblRvdWNoIiwiY3VycmVudFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZXJwIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBc0JBLE9BQU8sQ0FBQyxrQkFBRCxDQUE3QjtBQUFBLElBQVFDLFNBQVIsWUFBUUEsU0FBUjs7QUFFQUMsRUFBRSxDQUFD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QUxHLENBT0g7O0FBQ0EsU0FBS3lDLFlBQUwsQ0FBa0IsWUFBVTtBQUMxQixXQUFLbkIsY0FBTCxDQUFvQm9CLGdCQUFwQjtBQUNELEtBRkQsRUFFRSxDQUZGO0FBR0QsR0E3REk7QUErREw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUMsRUFBQUEsTUE1R0ssa0JBNEdHQyxFQTVHSCxFQTRHTztBQUNWLFFBQUcsS0FBS2xELE1BQUwsSUFBZSxLQUFLTSxNQUF2QixFQUE4QjtBQUM1QixXQUFLSCxjQUFMLEdBQXNCLEtBQUtGLFNBQUwsQ0FBZTRCLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUNzQixhQUEvRCxDQUQ0QixDQUc1Qjs7QUFFQSxVQUFJQyxlQUFlLEdBQUcsS0FBS2QsSUFBTCxDQUFVZSxXQUFWLEVBQXRCO0FBQ0FELE1BQUFBLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUIsS0FBS25ELGNBQTFCLEVBQTBDLElBQTFDLEVBQWdEaUQsZUFBaEQ7QUFDQSxXQUFLZCxJQUFMLENBQVVpQixXQUFWLENBQXNCSCxlQUF0QjtBQUdEO0FBQ0Y7QUF4SEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDb25zdGFudHMgfSA9IHJlcXVpcmUoXCIuLi9EYXRhL0NvbnN0YW50XCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgIGlzTW92ZTogZmFsc2UsXHJcbiAgICAgIHRvdWNoQXJlYTogY2MuTm9kZSxcclxuICAgICAgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIsXHJcbiAgICAgIHNjb3JlOjAsXHJcbiAgICAgIGlzTGl2ZTogdHJ1ZSxcclxuICAgICAgZ2M6IGNjLk5vZGUsXHJcbiAgICAgIGhlYWRQbGF5ZXI6IGNjLk5vZGUsXHJcbiAgICAgIGNyb3duR29sZDogY2MuTm9kZSxcclxuICAgICAgY3Jvd25TaWx2ZXI6IGNjLk5vZGUsXHJcbiAgICAgIGNyb3duQ29wcGVyOiBjYy5Ob2RlLFxyXG4gICAgICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSxcclxuICAgICAgXHJcbiAgICAgIHNjb3JlTGFiZWwxOiBjYy5MYWJlbCxcclxuICAgICAgc2NvcmVMYWJlbDI6IGNjLkxhYmVsLFxyXG4gICAgICBzY29yZUxhYmVsMzogY2MuTGFiZWwsXHJcblxyXG4gICAgICByYW5rTmFtZTE6IGNjLlNwcml0ZSxcclxuICAgICAgcmFua05hbWUyOiBjYy5TcHJpdGUsXHJcbiAgICAgIHJhbmtOYW1lMzogY2MuU3ByaXRlLFxyXG5cclxuICAgICAgc2ZOYW1lMTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIHNmTmFtZTI6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICBzZk5hbWUzOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgc2ZOYW1lUGxheWVyOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMuZ2MuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgIGlmKG90aGVyLnRhZyA9PSAyIHx8IG90aGVyLnRhZyA9PSAzKXtcclxuICAgICAgICAgIGlmKHRoaXMuaXNMaXZlKXtcclxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkUGxheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUF1ZGlvKHRoaXMuZ2FtZUNvbnRyb2xsZXIuYXVkaW9Cb3NzQXRrKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQXRrXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYml0ZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5jb3VudERpZSArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZSgpe1xyXG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlBdWRpbyh0aGlzLmdhbWVDb250cm9sbGVyLmF1ZGlvRWF0KTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiRGllXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkVuZW15RGllQW5pbVwiKTtcclxuICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIEZJTklTSFxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd1BvcHVwSW5zdGFsbCgpO1xyXG4gICAgICB9LDEpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGFkZFNjb3JlKCl7XHJcbiAgICAvLyAgIHRoaXMuc2NvcmUgKz0gY2MubWF0aC5yYW5kb21SYW5nZUludCg1LCAxNSk7XHJcbiAgICAvLyAgIHRoaXMuY3Jvd25Hb2xkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICB0aGlzLmNyb3duU2lsdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICB0aGlzLmNyb3duQ29wcGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICBpZih0aGlzLnNjb3JlID49IDYwKXtcclxuICAgIC8vICAgICB0aGlzLmNyb3duR29sZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjcpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDEuc3RyaW5nID0gXCJcIit0aGlzLnNjb3JlO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDIuc3RyaW5nID0gXCI0MFwiO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDMuc3RyaW5nID0gXCIyNVwiO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUxLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWVQbGF5ZXI7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTIuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTE7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgaWYodGhpcy5zY29yZSA+PSA0MCAmJiB0aGlzLnNjb3JlIDwgNjApIHtcclxuICAgIC8vICAgICB0aGlzLmNyb3duR29sZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjUpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDEuc3RyaW5nID0gXCJcIit0aGlzLnNjb3JlO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDIuc3RyaW5nID0gXCI0MFwiO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDMuc3RyaW5nID0gXCIyNVwiO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnJhbmtOYW1lMS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZOYW1lUGxheWVyO1xyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUyLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWUxO1xyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUzLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWUyO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2UgaWYodGhpcy5zY29yZSA+PSAyNSAmJiB0aGlzLnNjb3JlIDwgNDApIHtcclxuICAgIC8vICAgICB0aGlzLmNyb3duU2lsdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuMyk7XHJcbiAgICAvLyAgICAgdGhpcy5zY29yZUxhYmVsMi5zdHJpbmcgPSBcIlwiK3RoaXMuc2NvcmU7XHJcbiAgICAvLyAgICAgdGhpcy5zY29yZUxhYmVsMy5zdHJpbmcgPSBcIjI1XCI7XHJcblxyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUyLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWVQbGF5ZXI7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSBpZih0aGlzLnNjb3JlID49IDEwICYmIHRoaXMuc2NvcmUgPCAyNSkge1xyXG4gICAgLy8gICAgIHRoaXMuY3Jvd25Db3BwZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMS4xKTtcclxuICAgIC8vICAgICB0aGlzLnNjb3JlTGFiZWwzLnN0cmluZyA9IFwiXCIrdGhpcy5zY29yZTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZVBsYXllcjtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgIGlmKHRoaXMuaXNNb3ZlICYmIHRoaXMuaXNMaXZlKXtcclxuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhXCIpLnBvc2l0aW9uVG91Y2g7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy50YXJnZXRQb3NpdGlvbi54K1wiIC0tLSBcIit0aGlzLnRhcmdldFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycCh0aGlzLnRhcmdldFBvc2l0aW9uLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG5cclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19