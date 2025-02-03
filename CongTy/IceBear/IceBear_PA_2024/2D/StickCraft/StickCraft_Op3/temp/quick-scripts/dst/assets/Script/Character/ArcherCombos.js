
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/ArcherCombos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec3fro7rBMe4WVh+sEg+pY', 'ArcherCombos');
// Script/Character/ArcherCombos.js

"use strict";

var _require = require("GameEnum"),
    EnStickState = _require.EnStickState,
    EnStickMode = _require.EnStickMode;

var CONST = require("CONST");

var AnimNameStick = require("AnimNameStick");

var GameInfo = require("GameInfo");

var ArrowStick = require("ArrowStick");

cc.Class({
  "extends": cc.Component,
  properties: {
    PrefabArrow: {
      "default": null,
      type: cc.Prefab
    },
    NodeBow: {
      "default": null,
      type: cc.Node
    },
    IsOnAttacking: {
      get: function get() {
        return this._isAttacking;
      }
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._nearestEnemyNode = null;
    this._nearestEnemyDistance = CONST.MaxDistanceEnemyArcher;
    this._rigidBody = this.node.getComponent(cc.RigidBody);
    this._skeleton = this.getComponentInChildren(sp.Skeleton);
  },
  onStartAnimation: function onStartAnimation(animationName) {
    if (GameInfo.StickMode != EnStickMode.Archer) return;

    if (animationName == AnimNameStick.ArcherAngleStraight) {
      this.scheduleOnce(function () {
        this.fire(0);
      }, 0.15);
    } else if (animationName == AnimNameStick.ArcherAngleUp) {
      this.scheduleOnce(function () {
        this.fire(1);
      }, 0.15);
    }
  },
  onCompleteAnimation: function onCompleteAnimation(animationName) {
    if (animationName == AnimNameStick.ArcherAngleStraight) {} else if (animationName == AnimNameStick.ArcherAngleUp) {}
  },
  start: function start() {},
  // update (dt) {},
  onClick: function onClick() {
    if (GameInfo.StickMode != EnStickMode.Archer) return;
    if (this._isAttacking) return; // cc.log("On Click ", this._nearestEnemyNode);

    if (this._nearestEnemyNode != null && this.isPlayerFacing(this._nearestEnemyNode)) {
      cc.log(this._nearestEnemyNode.name, this.isPlayerFacing(this._nearestEnemyNode));

      var dir = this._nearestEnemyNode.getPosition().sub(this.node.getPosition()); // cc.log("Check Nearest Enemy ", this._nearestEnemyNode.getPosition(), this.node.getPosition(), dir);


      dir = dir.normalize(); // cc.log("Normalize Dir ", dir);

      this._angle = this.convertRad2Deg(Math.atan2(dir.y, Math.abs(dir.x)));
      this._dir = dir; // cc.log("Archer Fire ", this._angle, this._dir);

      var animNameAtk = AnimNameStick.ArcherAngleStraight;
      if (this._angle > 20) animNameAtk = AnimNameStick.ArcherAngleUp;

      this._skeleton.setAnimation(0, animNameAtk, false);
    } else {
      this._angle = 0;
      this._dir = cc.v2(1 * this.node.scaleX, 0);

      this._skeleton.setAnimation(0, AnimNameStick.ArcherAngleStraight, false);
    }

    this._stickSignWhenClick = this.node.scaleX;
    this._isFired = false;
    this._isAttacking = true;
    this.scheduleOnce(function () {
      this.endAttack();
    }, 0.5);
    cc.log("archer mode click fire");
  },
  convertRad2Deg: function convertRad2Deg(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
  },
  fire: function fire(type) {
    this._isFired = true; // Angle Straight

    if (type == 0) {
      this.createArrow(type);
    } // Angle Up
    else if (type == 1) {
      this.createArrow(type);
    }
  },
  createArrow: function createArrow(type) {
    var arrowObj = cc.instantiate(this.PrefabArrow);
    this.node.parent.addChild(arrowObj);
    arrowObj.position = this.node.convertToWorldSpaceAR(this.NodeBow.getPosition());

    if (this.node.scaleX != this._stickSignWhenClick) {
      this._dir = cc.v2(this._dir.x * -1, this._dir.y);
    }

    var arrowLogic = arrowObj.getComponent(ArrowStick);
    arrowLogic.Launch(this._dir);
  },
  checkNearestEnemy: function checkNearestEnemy(enemyNode, distance) {
    if (distance < this._nearestEnemyDistance) {
      this._nearestEnemyDistance = distance;
      this.setNearestEnemy(enemyNode);
    }
  },
  setNearestEnemy: function setNearestEnemy(enemyNode) {
    this._nearestEnemyNode = enemyNode;
  },
  removeNearestEnemy: function removeNearestEnemy(enemyNode) {
    if (this._nearestEnemyNode == enemyNode) {
      this._nearestEnemyNode = null;
      this._nearestEnemyDistance = CONST.MaxDistanceEnemyArcher;
    }
  },
  endAttack: function endAttack() {
    // this.resetSpeedAnim();
    this._isAttacking = false;
    var linearVelocity = this._rigidBody.linearVelocity;

    if (linearVelocity.x > 0.01 || linearVelocity.x < -0.01) {
      GameInfo.StickState = EnStickState.Run;

      this._skeleton.setAnimation(0, AnimNameStick.ArcherRun, true);
    } else {
      GameInfo.StickState = EnStickState.Idle;

      this._skeleton.setAnimation(0, AnimNameStick.ArcherIdle, true);
    }
  },
  isPlayerFacing: function isPlayerFacing(enemyNode) {
    if (this.node.x < enemyNode.x && this.node.scaleX > 0 || this.node.x > enemyNode.x && this.node.scaleX < 0) {
      return true;
    }

    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEFyY2hlckNvbWJvcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW5TdGlja1N0YXRlIiwiRW5TdGlja01vZGUiLCJDT05TVCIsIkFuaW1OYW1lU3RpY2siLCJHYW1lSW5mbyIsIkFycm93U3RpY2siLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlByZWZhYkFycm93IiwidHlwZSIsIlByZWZhYiIsIk5vZGVCb3ciLCJOb2RlIiwiSXNPbkF0dGFja2luZyIsImdldCIsIl9pc0F0dGFja2luZyIsIm9uTG9hZCIsIl9uZWFyZXN0RW5lbXlOb2RlIiwiX25lYXJlc3RFbmVteURpc3RhbmNlIiwiTWF4RGlzdGFuY2VFbmVteUFyY2hlciIsIl9yaWdpZEJvZHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiX3NrZWxldG9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInNwIiwiU2tlbGV0b24iLCJvblN0YXJ0QW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsIlN0aWNrTW9kZSIsIkFyY2hlciIsIkFyY2hlckFuZ2xlU3RyYWlnaHQiLCJzY2hlZHVsZU9uY2UiLCJmaXJlIiwiQXJjaGVyQW5nbGVVcCIsIm9uQ29tcGxldGVBbmltYXRpb24iLCJzdGFydCIsIm9uQ2xpY2siLCJpc1BsYXllckZhY2luZyIsImxvZyIsIm5hbWUiLCJkaXIiLCJnZXRQb3NpdGlvbiIsInN1YiIsIm5vcm1hbGl6ZSIsIl9hbmdsZSIsImNvbnZlcnRSYWQyRGVnIiwiTWF0aCIsImF0YW4yIiwieSIsImFicyIsIngiLCJfZGlyIiwiYW5pbU5hbWVBdGsiLCJzZXRBbmltYXRpb24iLCJ2MiIsInNjYWxlWCIsIl9zdGlja1NpZ25XaGVuQ2xpY2siLCJfaXNGaXJlZCIsImVuZEF0dGFjayIsInJhZGlhbnMiLCJwaSIsIlBJIiwiY3JlYXRlQXJyb3ciLCJhcnJvd09iaiIsImluc3RhbnRpYXRlIiwicGFyZW50IiwiYWRkQ2hpbGQiLCJwb3NpdGlvbiIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImFycm93TG9naWMiLCJMYXVuY2giLCJjaGVja05lYXJlc3RFbmVteSIsImVuZW15Tm9kZSIsImRpc3RhbmNlIiwic2V0TmVhcmVzdEVuZW15IiwicmVtb3ZlTmVhcmVzdEVuZW15IiwibGluZWFyVmVsb2NpdHkiLCJTdGlja1N0YXRlIiwiUnVuIiwiQXJjaGVyUnVuIiwiSWRsZSIsIkFyY2hlcklkbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBc0NBLE9BQU8sQ0FBQyxVQUFELENBQTdDO0FBQUEsSUFBUUMsWUFBUixZQUFRQSxZQUFSO0FBQUEsSUFBc0JDLFdBQXRCLFlBQXNCQSxXQUF0Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGVBQUQsQ0FBM0I7O0FBQ0EsSUFBSUssUUFBUSxHQUFHTCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJTSxVQUFVLEdBQUdOLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBTyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQURMO0FBS1JDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkosS0FMRDtBQVNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEMsTUFBQUEsR0FEVyxpQkFDTDtBQUFDLGVBQU8sS0FBS0MsWUFBWjtBQUEwQjtBQUR0QjtBQVRQLEdBSFA7QUFpQkw7QUFFQUMsRUFBQUEsTUFuQkssb0JBbUJLO0FBQ04sU0FBS0MsaUJBQUws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bkIsSUFBMkIwQixjQUFjLENBQUMxQixDQUFmLEdBQW1CLENBQUMsSUFBbkQsRUFBd0Q7QUFDcERsRCxNQUFBQSxRQUFRLENBQUM2RSxVQUFULEdBQXNCakYsWUFBWSxDQUFDa0YsR0FBbkM7O0FBQ0EsV0FBS3hELFNBQUwsQ0FBZStCLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0J0RCxhQUFhLENBQUNnRixTQUE3QyxFQUF3RCxJQUF4RDtBQUNILEtBSEQsTUFHTztBQUNIL0UsTUFBQUEsUUFBUSxDQUFDNkUsVUFBVCxHQUFzQmpGLFlBQVksQ0FBQ29GLElBQW5DOztBQUNBLFdBQUsxRCxTQUFMLENBQWUrQixZQUFmLENBQTRCLENBQTVCLEVBQStCdEQsYUFBYSxDQUFDa0YsVUFBN0MsRUFBeUQsSUFBekQ7QUFDSDtBQUNKLEdBbEtJO0FBb0tMNUMsRUFBQUEsY0FwS0ssMEJBb0tVbUMsU0FwS1YsRUFvS29CO0FBQ3JCLFFBQUksS0FBS3JELElBQUwsQ0FBVStCLENBQVYsR0FBY3NCLFNBQVMsQ0FBQ3RCLENBQXhCLElBQTZCLEtBQUsvQixJQUFMLENBQVVvQyxNQUFWLEdBQW1CLENBQWhELElBQ0csS0FBS3BDLElBQUwsQ0FBVStCLENBQVYsR0FBY3NCLFNBQVMsQ0FBQ3RCLENBQXhCLElBQTZCLEtBQUsvQixJQUFMLENBQVVvQyxNQUFWLEdBQW1CLENBRHZELEVBQ3lEO0FBQ3JELGFBQU8sSUFBUDtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNIO0FBM0tJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRW5TdGlja1N0YXRlLCBFblN0aWNrTW9kZSB9ID0gcmVxdWlyZShcIkdhbWVFbnVtXCIpO1xyXG5jb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxudmFyIEFuaW1OYW1lU3RpY2sgPSByZXF1aXJlKFwiQW5pbU5hbWVTdGlja1wiKTtcclxudmFyIEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG52YXIgQXJyb3dTdGljayA9IHJlcXVpcmUoXCJBcnJvd1N0aWNrXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBQcmVmYWJBcnJvdzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5vZGVCb3c6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSXNPbkF0dGFja2luZzoge1xyXG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIHRoaXMuX2lzQXR0YWNraW5nO31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5fbmVhcmVzdEVuZW15Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbmVhcmVzdEVuZW15RGlzdGFuY2UgPSBDT05TVC5NYXhEaXN0YW5jZUVuZW15QXJjaGVyO1xyXG5cclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24gPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpe1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSAhPSBFblN0aWNrTW9kZS5BcmNoZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLkFyY2hlckFuZ2xlU3RyYWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgwKTtcclxuICAgICAgICAgICAgfSwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFuaW1hdGlvbk5hbWUgPT0gQW5pbU5hbWVTdGljay5BcmNoZXJBbmdsZVVwKXtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUoMSk7XHJcbiAgICAgICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db21wbGV0ZUFuaW1hdGlvbihhbmltYXRpb25OYW1lKXtcclxuICAgICAgICBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVVcCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSAhPSBFblN0aWNrTW9kZS5BcmNoZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5faXNBdHRhY2tpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwiT24gQ2xpY2sgXCIsIHRoaXMuX25lYXJlc3RFbmVteU5vZGUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9uZWFyZXN0RW5lbXlOb2RlICE9IG51bGwgJiYgdGhpcy5pc1BsYXllckZhY2luZyh0aGlzLl9uZWFyZXN0RW5lbXlOb2RlKSl7XHJcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLl9uZWFyZXN0RW5lbXlOb2RlLm5hbWUsIHRoaXMuaXNQbGF5ZXJGYWNpbmcodGhpcy5fbmVhcmVzdEVuZW15Tm9kZSkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuX25lYXJlc3RFbmVteU5vZGUuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJDaGVjayBOZWFyZXN0IEVuZW15IFwiLCB0aGlzLl9uZWFyZXN0RW5lbXlOb2RlLmdldFBvc2l0aW9uKCksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBkaXIpO1xyXG4gICAgICAgICAgICBkaXIgPSBkaXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIk5vcm1hbGl6ZSBEaXIgXCIsIGRpcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hbmdsZSA9IHRoaXMuY29udmVydFJhZDJEZWcoTWF0aC5hdGFuMihkaXIueSwgTWF0aC5hYnMoZGlyLngpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpciA9IGRpcjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIkFyY2hlciBGaXJlIFwiLCB0aGlzLl9hbmdsZSwgdGhpcy5fZGlyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmltTmFtZUF0ayA9IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodDtcclxuICAgICAgICAgICAgaWYodGhpcy5fYW5nbGUgPiAyMCkgYW5pbU5hbWVBdGsgPSBBbmltTmFtZVN0aWNrLkFyY2hlckFuZ2xlVXA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWVBdGssIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpciA9IGNjLnYyKDEgKiB0aGlzLm5vZGUuc2NhbGVYLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RpY2tTaWduV2hlbkNsaWNrID0gdGhpcy5ub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgdGhpcy5faXNGaXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzQXR0YWNraW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQXR0YWNrKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2coXCJhcmNoZXIgbW9kZSBjbGljayBmaXJlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb252ZXJ0UmFkMkRlZyhyYWRpYW5zKXtcclxuICAgICAgICB2YXIgcGkgPSBNYXRoLlBJO1xyXG4gICAgICAgIHJldHVybiByYWRpYW5zICogKDE4MC9waSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpcmUodHlwZSl7XHJcbiAgICAgICAgdGhpcy5faXNGaXJlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIEFuZ2xlIFN0cmFpZ2h0XHJcbiAgICAgICAgaWYodHlwZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcnJvdyh0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5nbGUgVXBcclxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQXJyb3codHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVBcnJvdyh0eXBlKXtcclxuICAgICAgICBsZXQgYXJyb3dPYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYkFycm93KTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGFycm93T2JqKTtcclxuXHJcbiAgICAgICAgYXJyb3dPYmoucG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuTm9kZUJvdy5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnNjYWxlWCAhPSAgdGhpcy5fc3RpY2tTaWduV2hlbkNsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5fZGlyID0gY2MudjIodGhpcy5fZGlyLnggKiAtMSwgdGhpcy5fZGlyLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFycm93TG9naWMgPSBhcnJvd09iai5nZXRDb21wb25lbnQoQXJyb3dTdGljayk7XHJcbiAgICAgICAgYXJyb3dMb2dpYy5MYXVuY2godGhpcy5fZGlyKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tOZWFyZXN0RW5lbXkoZW5lbXlOb2RlLCBkaXN0YW5jZSl7XHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPCB0aGlzLl9uZWFyZXN0RW5lbXlEaXN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX25lYXJlc3RFbmVteURpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmVhcmVzdEVuZW15KGVuZW15Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXROZWFyZXN0RW5lbXkoZW5lbXlOb2RlKXtcclxuICAgICAgICB0aGlzLl9uZWFyZXN0RW5lbXlOb2RlID0gZW5lbXlOb2RlO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVOZWFyZXN0RW5lbXkoZW5lbXlOb2RlKXtcclxuICAgICAgICBpZih0aGlzLl9uZWFyZXN0RW5lbXlOb2RlID09IGVuZW15Tm9kZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX25lYXJlc3RFbmVteU5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9uZWFyZXN0RW5lbXlEaXN0YW5jZSA9IENPTlNULk1heERpc3RhbmNlRW5lbXlBcmNoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbmRBdHRhY2soKXtcclxuICAgICAgICAvLyB0aGlzLnJlc2V0U3BlZWRBbmltKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzQXR0YWNraW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBsaW5lYXJWZWxvY2l0eSA9IHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBpZiAobGluZWFyVmVsb2NpdHkueCA+IDAuMDEgfHwgbGluZWFyVmVsb2NpdHkueCA8IC0wLjAxKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5SdW47XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGxheWVyRmFjaW5nKGVuZW15Tm9kZSl7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgZW5lbXlOb2RlLnggJiYgdGhpcy5ub2RlLnNjYWxlWCA+IDBcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlLnggPiBlbmVteU5vZGUueCAmJiB0aGlzLm5vZGUuc2NhbGVYIDwgMCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=