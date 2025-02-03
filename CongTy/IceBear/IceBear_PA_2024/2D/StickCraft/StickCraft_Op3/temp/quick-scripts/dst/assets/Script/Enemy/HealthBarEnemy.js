
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/HealthBarEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9845K/gYlJtr3Brfor2Gf6', 'HealthBarEnemy');
// Script/Enemy/HealthBarEnemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this._maxHP = 0;
    // this._currentHP = 0;
    this.nodeParent = this.node.parent.parent;
  },
  start: function start() {},
  update: function update(dt) {
    if (this.nodeParent.scaleX < 0) this.node.scaleX = -1;else this.node.scaleX = 1;
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
  },
  setHP: function setHP(hp) {
    cc.log("Enemy Set HP ", hp);
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
  },
  decrement: function decrement(damp) {
    cc.log("Health Bar Enemy ", damp);
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  isAlive: function isAlive() {
    return this._currentHP > 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcSGVhbHRoQmFyRW5lbXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJGaWxsU3ByaXRlIiwiU3ByaXRlIiwib25Mb2FkIiwibm9kZVBhcmVudCIsIm5vZGUiLCJwYXJlbnQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwic2NhbGVYIiwiaW5pdCIsImhwIiwiX21heEhQIiwiX2N1cnJlbnRIUCIsImZpbGxTdGFydCIsImZpbGxSYW5nZSIsInNldEhQIiwibG9nIiwidHdlZW4iLCJ0byIsImRlY3JlbWVudCIsImRhbXAiLCJjdXJyZW50SHAiLCJpc0FsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTjtBQUNBO0FBRUEsU0FBS0MsVUFBTCxHQUFrQixLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJBLE1BQW5DO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFvQkxDLEVBQUFBLE1BcEJLLGtCQW9CR0MsRUFwQkgsRUFvQk87QUFDUixRQUFHLEtBQUtMLFVBQUwsQ0FBZ0JNLE1BQWhCLEdBQXlCLENBQTVCLEVBQStCLEtBQUtMLElBQUwsQ0FBVUssTUFBVixHQUFtQixDQUFDLENBQXBCLENBQS9CLEtBQ0ssS0FBS0wsSUFBTCxDQUFVSyxNQUFWLEdBQW1CLENBQW5CO0FBQ1IsR0F2Qkk7QUF5QkxDLEVBQUFBLElBekJLLGdCQXlCQUMsRUF6QkEsRUF5Qkc7QUFDSixTQUFLQyxNQUFMLEdBQWNELEVBQWQ7QUFDQSxTQUFLRSxVQUFMLEdBQWtCRixFQUFsQjtBQUVBLFNBQUtYLFVBQUwsQ0FBZ0JjLFNBQWhCLEdBQTRCLENBQTVCO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmUsU0FBaEIsR0FBNEIsQ0FBQyxDQUE3QjtBQUNILEdBL0JJO0FBaUNMQyxFQUFBQSxLQWpDSyxpQkFpQ0NMLEVBakNELEVBaUNJO0FBQ0xmLElBQUFBLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBTyxlQUFQLEVBQXdCTixFQUF4QjtBQUNBLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCLENBRkssQ0FHTDs7QUFDQWYsSUFBQUEsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLEtBQUtsQixVQUFkLEVBQ0NtQixFQURELENBQ0ssSUFETCxFQUNXO0FBQUNMLE1BQUFBLFNBQVMsRUFBRSxLQUFLRCxVQUFMLEdBQWtCLEtBQUtEO0FBQW5DLEtBRFgsRUFFQ04sS0FGRDtBQUdILEdBeENJO0FBMENMYyxFQUFBQSxTQTFDSyxxQkEwQ0tDLElBMUNMLEVBMENVO0FBQ1h6QixJQUFBQSxFQUFFLENBQUNxQixHQUFILENBQU8sbUJBQVAsRUFBNEJJLElBQTVCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtULFVBQUwsR0FBa0JRLElBQWxDO0FBQ0EsUUFBR0MsU0FBUyxHQUFHLENBQWYsRUFBa0JBLFNBQVMsR0FBRyxDQUFaO0FBQ2xCLFNBQUtOLEtBQUwsQ0FBV00sU0FBWDtBQUNILEdBL0NJO0FBaURMQyxFQUFBQSxPQWpESyxxQkFpREk7QUFDTCxXQUFPLEtBQUtWLFVBQUwsR0FBa0IsQ0FBekI7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEZpbGxTcHJpdGU6IGNjLlNwcml0ZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLl9tYXhIUCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudEhQID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlUGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMubm9kZVBhcmVudC5zY2FsZVggPCAwKSB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChocCl7XHJcbiAgICAgICAgdGhpcy5fbWF4SFAgPSBocDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50SFAgPSBocDtcclxuXHJcbiAgICAgICAgdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IDE7XHJcbiAgICAgICAgdGhpcy5GaWxsU3ByaXRlLmZpbGxSYW5nZSA9IC0xO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRIUChocCl7XHJcbiAgICAgICAgY2MubG9nKFwiRW5lbXkgU2V0IEhQIFwiLCBocCk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEhQID0gaHA7XHJcbiAgICAgICAgLy8gdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuRmlsbFNwcml0ZSlcclxuICAgICAgICAudG8gKDAuMjUsIHtmaWxsU3RhcnQ6IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVjcmVtZW50KGRhbXApe1xyXG4gICAgICAgIGNjLmxvZyhcIkhlYWx0aCBCYXIgRW5lbXkgXCIsIGRhbXApO1xyXG4gICAgICAgIGxldCBjdXJyZW50SHAgPSB0aGlzLl9jdXJyZW50SFAgLSBkYW1wO1xyXG4gICAgICAgIGlmKGN1cnJlbnRIcCA8IDApIGN1cnJlbnRIcCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRIUChjdXJyZW50SHApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRIUCA+IDA7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=