
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f274euVKR9EnbLmW4BUE0K6', 'EnemyController');
// scripts/EnemyController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    arrPoint: [cc.Node],
    arrEnemy: [cc.Prefab],
    indexEnemy: 0,
    indexPoint: 0,
    player: cc.Node
  },
  onLoad: function onLoad() {},
  start: function start() {},
  startCreateEnemy: function startCreateEnemy() {
    this.schedule(function () {
      this.spawnEnemy();
    }, 0.01, 22, 0);
    this.schedule(function () {
      this.spawnEnemy();
    }, 1, 20, 3);
  },
  randomPoint: function randomPoint() {
    this.indexPoint = cc.math.randomRangeInt(0, this.arrPoint.length);
  },
  randomEnemy: function randomEnemy() {
    //this.indexEnemy = 5
    this.indexEnemy = cc.math.randomRangeInt(0, this.arrEnemy.length);
  },
  spawnEnemy: function spawnEnemy() {
    if (!this.player.getComponent("PlayerController").isLive) return;
    this.randomEnemy();
    this.randomPoint();
    var enemy = cc.instantiate(this.arrEnemy[this.indexEnemy]);
    enemy.parent = this.node;
    enemy.setPosition(cc.v2(this.arrPoint[this.indexPoint].getPosition().x, this.arrPoint[this.indexPoint].getPosition().y));
  } //update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRW5lbXlDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyUG9pbnQiLCJOb2RlIiwiYXJyRW5lbXkiLCJQcmVmYWIiLCJpbmRleEVuZW15IiwiaW5kZXhQb2ludCIsInBsYXllciIsIm9uTG9hZCIsInN0YXJ0Iiwic3RhcnRDcmVhdGVFbmVteSIsInNjaGVkdWxlIiwic3Bhd25FbmVteSIsInJhbmRvbVBvaW50IiwibWF0aCIsInJhbmRvbVJhbmdlSW50IiwibGVuZ3RoIiwicmFuZG9tRW5lbXkiLCJnZXRDb21wb25lbnQiLCJpc0xpdmUiLCJlbmVteSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsInNldFBvc2l0aW9uIiwidjIiLCJnZXRQb3NpdGlvbiIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLENBQUNKLEVBQUUsQ0FBQ0ssSUFBSixDQURGO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxDQUFDTixFQUFFLENBQUNPLE1BQUosQ0FGRjtBQUdSQyxJQUFBQSxVQUFVLEVBQUUsQ0FISjtBQUlSQyxJQUFBQSxVQUFVLEVBQUUsQ0FKSjtBQUtSQyxJQUFBQSxNQUFNLEVBQUVWLEVBQUUsQ0FBQ0s7QUFMSCxHQUhQO0FBV0xNLEVBQUFBLE1BWEssb0JBV0ssQ0FBRSxDQVhQO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FDUixDQWRJO0FBZ0JMQyxFQUFBQSxnQkFoQkssOEJBZ0JhO0FBQ2QsU0FBS0MsUUFBTCxDQUFjLFlBQVU7QUFDcEIsV0FBS0MsVUFBTDtBQUNILEtBRkQsRUFFRyxJQUZILEVBRVMsRUFGVCxFQUVhLENBRmI7QUFJQSxTQUFLRCxRQUFMLENBQWMsWUFBVTtBQUNwQixXQUFLQyxVQUFMO0FBQ0gsS0FGRCxFQUVHLENBRkgsRUFFTSxFQUZOLEVBRVUsQ0FGVjtBQUdILEdBeEJJO0FBMEJMQyxFQUFBQSxXQTFCSyx5QkEwQlE7QUFDVCxTQUFLUCxVQUFMLEdBQWtCVCxFQUFFLENBQUNpQixJQUFILENBQVFDLGNBQVIsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBS2QsUUFBTCxDQUFjZSxNQUF4QyxDQUFsQjtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxXQTlCSyx5QkE4QlE7QUFDVDtBQUNBLFNBQUtaLFVBQUwsR0FBa0JSLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUUMsY0FBUixDQUF1QixDQUF2QixFQUEwQixLQUFLWixRQUFMLENBQWNhLE1BQXhDLENBQWxCO0FBQ0gsR0FqQ0k7QUFtQ0xKLEVBQUFBLFVBbkNLLHdCQW1DTztBQUNSLFFBQUcsQ0FBQyxLQUFLTCxNQUFMLENBQVlXLFlBQVosQ0FBeUIsa0JBQXpCLEVBQTZDQyxNQUFqRCxFQUF5RDtBQUN6RCxTQUFLRixXQUFMO0FBQ0EsU0FBS0osV0FBTDtBQUVBLFFBQUlPLEtBQUssR0FBR3ZCLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLbEIsUUFBTCxDQUFjLEtBQUtFLFVBQW5CLENBQWYsQ0FBWjtBQUNBZSxJQUFBQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxLQUFLQyxJQUFwQjtBQUNBSCxJQUFBQSxLQUFLLENBQUNJLFdBQU4sQ0FBa0IzQixFQUFFLENBQUM0QixFQUFILENBQU0sS0FBS3hCLFFBQUwsQ0FBYyxLQUFLSyxVQUFuQixFQUErQm9CLFdBQS9CLEdBQTZDQyxDQUFuRCxFQUFzRCxLQUFLMUIsUUFBTCxDQUFjLEtBQUtLLFVBQW5CLEVBQStCb0IsV0FBL0IsR0FBNkNFLENBQW5HLENBQWxCO0FBRUgsR0E1Q0ksQ0E4Q0w7O0FBOUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFyclBvaW50OiBbY2MuTm9kZV0sXHJcbiAgICAgICAgYXJyRW5lbXk6IFtjYy5QcmVmYWJdLFxyXG4gICAgICAgIGluZGV4RW5lbXk6IDAsXHJcbiAgICAgICAgaW5kZXhQb2ludDogMCxcclxuICAgICAgICBwbGF5ZXI6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0Q3JlYXRlRW5lbXkoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xyXG4gICAgICAgIH0sIDAuMDEsIDIyLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduRW5lbXkoKTtcclxuICAgICAgICB9LCAxLCAyMCwgMyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbVBvaW50KCl7XHJcbiAgICAgICAgdGhpcy5pbmRleFBvaW50ID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyclBvaW50Lmxlbmd0aCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbUVuZW15KCl7XHJcbiAgICAgICAgLy90aGlzLmluZGV4RW5lbXkgPSA1XHJcbiAgICAgICAgdGhpcy5pbmRleEVuZW15ID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyckVuZW15Lmxlbmd0aCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduRW5lbXkoKXtcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyQ29udHJvbGxlclwiKS5pc0xpdmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJhbmRvbUVuZW15KCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21Qb2ludCgpO1xyXG5cclxuICAgICAgICBsZXQgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFyckVuZW15W3RoaXMuaW5kZXhFbmVteV0pO1xyXG4gICAgICAgIGVuZW15LnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBlbmVteS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmFyclBvaW50W3RoaXMuaW5kZXhQb2ludF0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLmFyclBvaW50W3RoaXMuaW5kZXhQb2ludF0uZ2V0UG9zaXRpb24oKS55KSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19