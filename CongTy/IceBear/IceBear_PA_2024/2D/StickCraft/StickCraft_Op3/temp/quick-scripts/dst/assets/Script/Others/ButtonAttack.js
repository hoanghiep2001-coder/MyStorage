
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/ButtonAttack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31d41R95AxKe5DUXPKHmp27', 'ButtonAttack');
// Script/Others/ButtonAttack.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Icon: cc.Sprite,
    SwordSprite: cc.SpriteFrame,
    ArcherSprite: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  setSword: function setSword() {
    this.Icon.spriteFrame = this.SwordSprite;
  },
  setArcher: function setArcher() {
    this.Icon.spriteFrame = this.ArcherSprite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEJ1dHRvbkF0dGFjay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkljb24iLCJTcHJpdGUiLCJTd29yZFNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiQXJjaGVyU3ByaXRlIiwic3RhcnQiLCJzZXRTd29yZCIsInNwcml0ZUZyYW1lIiwic2V0QXJjaGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLLE1BREQ7QUFFUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNPLFdBRlI7QUFHUkMsSUFBQUEsWUFBWSxFQUFFUixFQUFFLENBQUNPO0FBSFQsR0FIUDtBQVNMO0FBRUE7QUFFQUUsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkk7QUFpQkw7QUFFQUMsRUFBQUEsUUFuQkssc0JBbUJLO0FBQ04sU0FBS04sSUFBTCxDQUFVTyxXQUFWLEdBQXdCLEtBQUtMLFdBQTdCO0FBQ0gsR0FyQkk7QUF1QkxNLEVBQUFBLFNBdkJLLHVCQXVCTTtBQUNQLFNBQUtSLElBQUwsQ0FBVU8sV0FBVixHQUF3QixLQUFLSCxZQUE3QjtBQUNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEljb246IGNjLlNwcml0ZSxcclxuICAgICAgICBTd29yZFNwcml0ZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgQXJjaGVyU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2V0U3dvcmQoKXtcclxuICAgICAgICB0aGlzLkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlN3b3JkU3ByaXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBcmNoZXIoKXtcclxuICAgICAgICB0aGlzLkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkFyY2hlclNwcml0ZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==