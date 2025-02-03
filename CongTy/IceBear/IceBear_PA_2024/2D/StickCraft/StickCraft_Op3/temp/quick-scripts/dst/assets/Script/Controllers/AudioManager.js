
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccbfdQ+oHFPALFErHTl9lRY', 'AudioManager');
// Script/Controllers/AudioManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bgSound: cc.AudioSource,
    hitSound: cc.AudioSource,
    dieSound: cc.AudioSource,
    getItemSound: cc.AudioSource,
    dashSound: cc.AudioSource,
    winSound: cc.AudioSource,
    runSound: cc.AudioSource,
    bladeSound: cc.AudioSource,
    bowSound: cc.AudioSource,
    hitBowSound: cc.AudioSource
  },
  stopAllSound: function stopAllSound() {
    this.bgSound.stop();
    this.hitSound.stop();
    this.dieSound.stop();
    this.getItemSound.stop();
    this.dashSound.stop();
    this.winSound.stop();
    this.runSound.stop();
    this.bladeSound.stop();
    this.bowSound.stop();
    this.hitBowSound.stop();
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcQXVkaW9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmdTb3VuZCIsIkF1ZGlvU291cmNlIiwiaGl0U291bmQiLCJkaWVTb3VuZCIsImdldEl0ZW1Tb3VuZCIsImRhc2hTb3VuZCIsIndpblNvdW5kIiwicnVuU291bmQiLCJibGFkZVNvdW5kIiwiYm93U291bmQiLCJoaXRCb3dTb3VuZCIsInN0b3BBbGxTb3VuZCIsInN0b3AiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxXQURKO0FBRVJDLElBQUFBLFFBQVEsRUFBRU4sRUFBRSxDQUFDSyxXQUZMO0FBR1JFLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDSyxXQUhMO0FBSVJHLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDSyxXQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBRVQsRUFBRSxDQUFDSyxXQUxOO0FBTVJLLElBQUFBLFFBQVEsRUFBRVYsRUFBRSxDQUFDSyxXQU5MO0FBT1JNLElBQUFBLFFBQVEsRUFBRVgsRUFBRSxDQUFDSyxXQVBMO0FBUVJPLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDSyxXQVJQO0FBU1JRLElBQUFBLFFBQVEsRUFBRWIsRUFBRSxDQUFDSyxXQVRMO0FBVVJTLElBQUFBLFdBQVcsRUFBRWQsRUFBRSxDQUFDSztBQVZSLEdBSFA7QUFpQkxVLEVBQUFBLFlBakJLLDBCQWlCVTtBQUNYLFNBQUtYLE9BQUwsQ0FBYVksSUFBYjtBQUNBLFNBQUtWLFFBQUwsQ0FBY1UsSUFBZDtBQUNBLFNBQUtULFFBQUwsQ0FBY1MsSUFBZDtBQUNBLFNBQUtSLFlBQUwsQ0FBa0JRLElBQWxCO0FBQ0EsU0FBS1AsU0FBTCxDQUFlTyxJQUFmO0FBQ0EsU0FBS04sUUFBTCxDQUFjTSxJQUFkO0FBQ0EsU0FBS0wsUUFBTCxDQUFjSyxJQUFkO0FBQ0EsU0FBS0osVUFBTCxDQUFnQkksSUFBaEI7QUFDQSxTQUFLSCxRQUFMLENBQWNHLElBQWQ7QUFDQSxTQUFLRixXQUFMLENBQWlCRSxJQUFqQjtBQUNILEdBNUJJO0FBK0JMQyxFQUFBQSxLQS9CSyxtQkErQkcsQ0FFUDtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICBoaXRTb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgZGllU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGdldEl0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgZGFzaFNvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICB3aW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgcnVuU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGJsYWRlU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGJvd1NvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICBoaXRCb3dTb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdG9wQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmhpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRpZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmdldEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kYXNoU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucnVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYmxhZGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5ib3dTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5oaXRCb3dTb3VuZC5zdG9wKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=