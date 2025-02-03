
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/ArrowStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '505761rl/pJ/o3Grk5BfFAd', 'ArrowStick');
// Script/Character/ArrowStick.js

"use strict";

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._isLanching = false;
    this._speed = CONST.StickArrowSpeed;
    this._normalize = cc.v2(0, 0);
  },
  start: function start() {},
  Launch: function Launch(normalize) {
    this._isLanching = true;
    this._normalize = normalize;
    this.node.angle = 1 * this.convertRad2Deg(Math.atan2(this._normalize.y, this._normalize.x));
    cc.log(this._speed, this.node.angle);
  },
  update: function update(dt) {
    if (!this._isLanching) return;
    this.node.setPosition(this.node.x + this._normalize.x * this._speed * 10 * dt, this.node.y + this._normalize.y * this._speed * 10 * dt);
  },
  hitEnemy: function hitEnemy() {
    console.log("Arrow Hit Enemy"); // enemy.hit();

    this.node.destroy();
  },
  hitPlatform: function hitPlatform() {
    console.log("Arrow Hit Platform");
    this._isLanching = false;
    this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Enemy") {
      this.hitEnemy();
      window.isHitArrow = true;
    } else if (other.node.group == "Solid") {
      this.hitPlatform();
    }
  },
  convertRad2Deg: function convertRad2Deg(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEFycm93U3RpY2suanMiXSwibmFtZXMiOlsiQ09OU1QiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJfaXNMYW5jaGluZyIsIl9zcGVlZCIsIlN0aWNrQXJyb3dTcGVlZCIsIl9ub3JtYWxpemUiLCJ2MiIsInN0YXJ0IiwiTGF1bmNoIiwibm9ybWFsaXplIiwibm9kZSIsImFuZ2xlIiwiY29udmVydFJhZDJEZWciLCJNYXRoIiwiYXRhbjIiLCJ5IiwieCIsImxvZyIsInVwZGF0ZSIsImR0Iiwic2V0UG9zaXRpb24iLCJoaXRFbmVteSIsImNvbnNvbGUiLCJkZXN0cm95IiwiaGl0UGxhdGZvcm0iLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJ3aW5kb3ciLCJpc0hpdEFycm93IiwicmFkaWFucyIsInBpIiwiUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY1IsS0FBSyxDQUFDUyxlQUFwQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JSLEVBQUUsQ0FBQ1MsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWxCO0FBQ0gsR0FiSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFxQkxDLEVBQUFBLE1BckJLLGtCQXFCRUMsU0FyQkYsRUFxQlk7QUFDYixTQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0csVUFBTCxHQUFrQkksU0FBbEI7QUFFQSxTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsSUFBSSxLQUFLQyxjQUFMLENBQW9CQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLVCxVQUFMLENBQWdCVSxDQUEzQixFQUE4QixLQUFLVixVQUFMLENBQWdCVyxDQUE5QyxDQUFwQixDQUF0QjtBQUVBbkIsSUFBQUEsRUFBRSxDQUFDb0IsR0FBSCxDQUFPLEtBQUtkLE1BQVosRUFBb0IsS0FBS08sSUFBTCxDQUFVQyxLQUE5QjtBQUNILEdBNUJJO0FBK0JMTyxFQUFBQSxNQS9CSyxrQkErQkdDLEVBL0JILEVBK0JPO0FBQ1IsUUFBRyxDQUFDLEtBQUtqQixXQUFULEVBQXNCO0FBRXRCLFNBQUtRLElBQUwsQ0FBVVUsV0FBVixDQUFzQixLQUFLVixJQUFMLENBQVVNLENBQVYsR0FBYyxLQUFLWCxVQUFMLENBQWdCVyxDQUFoQixHQUFvQixLQUFLYixNQUF6QixHQUFrQyxFQUFsQyxHQUF1Q2dCLEVBQTNFLEVBQStFLEtBQUtULElBQUwsQ0FBVUssQ0FBVixHQUFjLEtBQUtWLFVBQUwsQ0FBZ0JVLENBQWhCLEdBQW9CLEtBQUtaLE1BQXpCLEdBQWtDLEVBQWxDLEdBQXVDZ0IsRUFBcEk7QUFDSCxHQW5DSTtBQXNDTEUsRUFBQUEsUUF0Q0ssc0JBc0NLO0FBQ05DLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixDQUFZLGlCQUFaLEVBRE0sQ0FFTjs7QUFDQSxTQUFLUCxJQUFMLENBQVVhLE9BQVY7QUFDSCxHQTFDSTtBQTZDTEMsRUFBQUEsV0E3Q0sseUJBNkNRO0FBQ1RGLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixDQUFZLG9CQUFaO0FBQ0EsU0FBS2YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtRLElBQUwsQ0FBVWEsT0FBVjtBQUNILEdBakRJO0FBb0RMRSxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDaEIsSUFBTixDQUFXa0IsS0FBWCxJQUFvQixPQUF2QixFQUErQjtBQUMzQixXQUFLUCxRQUFMO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFwQjtBQUNILEtBSEQsTUFHTyxJQUFHSixLQUFLLENBQUNoQixJQUFOLENBQVdrQixLQUFYLElBQW9CLE9BQXZCLEVBQStCO0FBQ2xDLFdBQUtKLFdBQUw7QUFDSDtBQUNKLEdBM0RJO0FBOERMWixFQUFBQSxjQTlESywwQkE4RFVtQixPQTlEVixFQThEa0I7QUFDbkIsUUFBSUMsRUFBRSxHQUFHbkIsSUFBSSxDQUFDb0IsRUFBZDtBQUNBLFdBQU9GLE9BQU8sSUFBSSxNQUFJQyxFQUFSLENBQWQ7QUFDSDtBQWpFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNMYW5jaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gQ09OU1QuU3RpY2tBcnJvd1NwZWVkO1xyXG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZSA9IGNjLnYyKDAsMCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBMYXVuY2gobm9ybWFsaXplKXtcclxuICAgICAgICB0aGlzLl9pc0xhbmNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ub3JtYWxpemUgPSBub3JtYWxpemU7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDEgKiB0aGlzLmNvbnZlcnRSYWQyRGVnKE1hdGguYXRhbjIodGhpcy5fbm9ybWFsaXplLnksIHRoaXMuX25vcm1hbGl6ZS54KSk7XHJcblxyXG4gICAgICAgIGNjLmxvZyh0aGlzLl9zcGVlZCwgdGhpcy5ub2RlLmFuZ2xlKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5faXNMYW5jaGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnggKyB0aGlzLl9ub3JtYWxpemUueCAqIHRoaXMuX3NwZWVkICogMTAgKiBkdCwgdGhpcy5ub2RlLnkgKyB0aGlzLl9ub3JtYWxpemUueSAqIHRoaXMuX3NwZWVkICogMTAgKiBkdCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBoaXRFbmVteSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXJyb3cgSGl0IEVuZW15XCIpO1xyXG4gICAgICAgIC8vIGVuZW15LmhpdCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBoaXRQbGF0Zm9ybSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXJyb3cgSGl0IFBsYXRmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIkVuZW15XCIpe1xyXG4gICAgICAgICAgICB0aGlzLmhpdEVuZW15KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pc0hpdEFycm93ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlNvbGlkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmhpdFBsYXRmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgY29udmVydFJhZDJEZWcocmFkaWFucyl7XHJcbiAgICAgICAgdmFyIHBpID0gTWF0aC5QSTtcclxuICAgICAgICByZXR1cm4gcmFkaWFucyAqICgxODAvcGkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==