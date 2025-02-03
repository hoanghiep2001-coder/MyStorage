
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/HealthBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fb2cKNQxpGIL4KnJRuJdAo', 'HealthBar');
// Script/Character/HealthBar.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite,
    HealthText: {
      "default": null,
      type: cc.Label,
      serializable: true
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this._maxHP = 0;
    // this._currentHP = 0;
  },
  start: function start() {},
  update: function update(dt) {// this.updateHealthText();
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
    this.updateHealthText();
  },
  setHP: function setHP(hp) {
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
    this.updateHealthText();
  },
  decrement: function decrement(damp) {
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  updateHealthText: function updateHealthText() {
    if (this.HealthText == null) return;
    this.HealthText.string = this._currentHP + "/" + this._maxHP;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEhlYWx0aEJhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkZpbGxTcHJpdGUiLCJTcHJpdGUiLCJIZWFsdGhUZXh0IiwidHlwZSIsIkxhYmVsIiwic2VyaWFsaXphYmxlIiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImluaXQiLCJocCIsIl9tYXhIUCIsIl9jdXJyZW50SFAiLCJmaWxsU3RhcnQiLCJmaWxsUmFuZ2UiLCJ1cGRhdGVIZWFsdGhUZXh0Iiwic2V0SFAiLCJ0d2VlbiIsInRvIiwiZGVjcmVtZW50IiwiZGFtcCIsImN1cnJlbnRIcCIsInN0cmluZyIsImlzQWxpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUSxLQUZEO0FBR1JDLE1BQUFBLFlBQVksRUFBRTtBQUhOO0FBRkosR0FIUDtBQVlMO0FBRUFDLEVBQUFBLE1BZEssb0JBY0ssQ0FDTjtBQUNBO0FBQ0gsR0FqQkk7QUFtQkxDLEVBQUFBLEtBbkJLLG1CQW1CSSxDQUVSLENBckJJO0FBdUJMQyxFQUFBQSxNQXZCSyxrQkF1QkdDLEVBdkJILEVBdUJPLENBQ1I7QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsSUEzQkssZ0JBMkJBQyxFQTNCQSxFQTJCRztBQUNKLFNBQUtDLE1BQUwsR0FBY0QsRUFBZDtBQUNBLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCO0FBRUEsU0FBS1gsVUFBTCxDQUFnQmMsU0FBaEIsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLZCxVQUFMLENBQWdCZSxTQUFoQixHQUE0QixDQUFDLENBQTdCO0FBRUEsU0FBS0MsZ0JBQUw7QUFDSCxHQW5DSTtBQXFDTEMsRUFBQUEsS0FyQ0ssaUJBcUNDTixFQXJDRCxFQXFDSTtBQUNMLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCLENBREssQ0FHTDs7QUFDQWYsSUFBQUEsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLEtBQUtsQixVQUFkLEVBQ0NtQixFQURELENBQ0ssSUFETCxFQUNXO0FBQUNMLE1BQUFBLFNBQVMsRUFBRSxLQUFLRCxVQUFMLEdBQWtCLEtBQUtEO0FBQW5DLEtBRFgsRUFFQ0wsS0FGRDtBQUlBLFNBQUtTLGdCQUFMO0FBQ0gsR0E5Q0k7QUFnRExJLEVBQUFBLFNBaERLLHFCQWdES0MsSUFoREwsRUFnRFU7QUFDWCxRQUFJQyxTQUFTLEdBQUcsS0FBS1QsVUFBTCxHQUFrQlEsSUFBbEM7QUFDQSxRQUFHQyxTQUFTLEdBQUcsQ0FBZixFQUFrQkEsU0FBUyxHQUFHLENBQVo7QUFDbEIsU0FBS0wsS0FBTCxDQUFXSyxTQUFYO0FBQ0gsR0FwREk7QUFzRExOLEVBQUFBLGdCQXRESyw4QkFzRGE7QUFDZCxRQUFHLEtBQUtkLFVBQUwsSUFBbUIsSUFBdEIsRUFBNEI7QUFDNUIsU0FBS0EsVUFBTCxDQUFnQnFCLE1BQWhCLEdBQTBCLEtBQUtWLFVBQU4sR0FBb0IsR0FBcEIsR0FBMkIsS0FBS0QsTUFBekQ7QUFDSCxHQXpESTtBQTJETFksRUFBQUEsT0EzREsscUJBMkRJO0FBQ0wsV0FBTyxLQUFLWCxVQUFMLEdBQWtCLENBQXpCO0FBQ0g7QUE3REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBGaWxsU3ByaXRlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgSGVhbHRoVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLl9tYXhIUCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudEhQID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoaHApe1xyXG4gICAgICAgIHRoaXMuX21heEhQID0gaHA7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEhQID0gaHA7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsbFNwcml0ZS5maWxsU3RhcnQgPSAxO1xyXG4gICAgICAgIHRoaXMuRmlsbFNwcml0ZS5maWxsUmFuZ2UgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEhQKGhwKXtcclxuICAgICAgICB0aGlzLl9jdXJyZW50SFAgPSBocDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuRmlsbFNwcml0ZSlcclxuICAgICAgICAudG8gKDAuMjUsIHtmaWxsU3RhcnQ6IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlY3JlbWVudChkYW1wKXtcclxuICAgICAgICBsZXQgY3VycmVudEhwID0gdGhpcy5fY3VycmVudEhQIC0gZGFtcDtcclxuICAgICAgICBpZihjdXJyZW50SHAgPCAwKSBjdXJyZW50SHAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0SFAoY3VycmVudEhwKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSGVhbHRoVGV4dCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSGVhbHRoVGV4dCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5IZWFsdGhUZXh0LnN0cmluZyA9ICh0aGlzLl9jdXJyZW50SFApICsgXCIvXCIgKyAodGhpcy5fbWF4SFApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRIUCA+IDA7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcbiJdfQ==